
-- Create leaderboard_stats table
CREATE TABLE public.leaderboard_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  xp integer NOT NULL DEFAULT 0,
  level integer NOT NULL DEFAULT 1,
  streak integer NOT NULL DEFAULT 0,
  last_activity_date date,
  lessons_completed integer NOT NULL DEFAULT 0,
  quizzes_passed integer NOT NULL DEFAULT 0,
  courses_completed integer NOT NULL DEFAULT 0,
  badges jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leaderboard_stats ENABLE ROW LEVEL SECURITY;

-- Everyone can read leaderboard (it's public)
CREATE POLICY "Anyone can view leaderboard"
ON public.leaderboard_stats
FOR SELECT
USING (true);

-- Users can insert their own row
CREATE POLICY "Users can insert their own stats"
ON public.leaderboard_stats
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own row
CREATE POLICY "Users can update their own stats"
ON public.leaderboard_stats
FOR UPDATE
USING (auth.uid() = user_id);

-- Auto-update updated_at
CREATE TRIGGER update_leaderboard_stats_updated_at
BEFORE UPDATE ON public.leaderboard_stats
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create leaderboard_stats row when profile is created
CREATE OR REPLACE FUNCTION public.handle_new_leaderboard_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.leaderboard_stats (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_created_create_leaderboard_stats
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_leaderboard_stats();

-- award_xp function: awards XP, auto-levels, auto-badges
CREATE OR REPLACE FUNCTION public.award_xp(
  _user_id uuid,
  _amount integer,
  _activity_type text
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _stats leaderboard_stats%ROWTYPE;
  _new_xp integer;
  _new_level integer;
  _new_badges jsonb;
  _new_lessons integer;
  _new_quizzes integer;
  _new_courses integer;
  _new_streak integer;
  _today date := current_date;
  _awarded_badges text[] := '{}';
BEGIN
  -- Get or create stats
  SELECT * INTO _stats FROM leaderboard_stats WHERE user_id = _user_id;
  IF NOT FOUND THEN
    INSERT INTO leaderboard_stats (user_id) VALUES (_user_id);
    SELECT * INTO _stats FROM leaderboard_stats WHERE user_id = _user_id;
  END IF;

  _new_xp := _stats.xp + _amount;
  _new_lessons := _stats.lessons_completed;
  _new_quizzes := _stats.quizzes_passed;
  _new_courses := _stats.courses_completed;
  _new_badges := _stats.badges;
  _new_streak := _stats.streak;

  -- Update activity counters
  IF _activity_type = 'lesson' THEN
    _new_lessons := _new_lessons + 1;
  ELSIF _activity_type = 'quiz' THEN
    _new_quizzes := _new_quizzes + 1;
  ELSIF _activity_type = 'course' THEN
    _new_courses := _new_courses + 1;
  ELSIF _activity_type = 'streak' THEN
    -- Handle streak
    IF _stats.last_activity_date = _today - 1 THEN
      _new_streak := _stats.streak + 1;
    ELSIF _stats.last_activity_date < _today - 1 OR _stats.last_activity_date IS NULL THEN
      _new_streak := 1;
    END IF;
    -- 7-day streak bonus
    IF _new_streak >= 7 AND (_stats.streak < 7 OR mod(_new_streak, 7) = 0) THEN
      _new_xp := _new_xp + 200;
    END IF;
  END IF;

  -- Calculate level (every 500 XP = 1 level)
  _new_level := GREATEST(1, (_new_xp / 500) + 1);

  -- Check badge milestones
  IF _new_lessons >= 1 AND NOT (_new_badges @> '"First Steps"') THEN
    _new_badges := _new_badges || '"First Steps"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'First Steps');
  END IF;
  IF _new_lessons >= 5 AND NOT (_new_badges @> '"Quick Learner"') THEN
    _new_badges := _new_badges || '"Quick Learner"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'Quick Learner');
  END IF;
  IF _new_quizzes >= 5 AND NOT (_new_badges @> '"Quiz Whiz"') THEN
    _new_badges := _new_badges || '"Quiz Whiz"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'Quiz Whiz');
  END IF;
  IF _new_courses >= 1 AND NOT (_new_badges @> '"Course Champion"') THEN
    _new_badges := _new_badges || '"Course Champion"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'Course Champion');
  END IF;
  IF _new_streak >= 7 AND NOT (_new_badges @> '"Dedicated Scholar"') THEN
    _new_badges := _new_badges || '"Dedicated Scholar"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'Dedicated Scholar');
  END IF;
  IF _new_level >= 5 AND NOT (_new_badges @> '"Knowledge Master"') THEN
    _new_badges := _new_badges || '"Knowledge Master"'::jsonb;
    _awarded_badges := array_append(_awarded_badges, 'Knowledge Master');
  END IF;

  -- Update the row
  UPDATE leaderboard_stats
  SET xp = _new_xp,
      level = _new_level,
      streak = _new_streak,
      last_activity_date = _today,
      lessons_completed = _new_lessons,
      quizzes_passed = _new_quizzes,
      courses_completed = _new_courses,
      badges = _new_badges
  WHERE user_id = _user_id;

  RETURN jsonb_build_object(
    'xp', _new_xp,
    'level', _new_level,
    'streak', _new_streak,
    'new_badges', to_jsonb(_awarded_badges),
    'total_badges', _new_badges
  );
END;
$$;
