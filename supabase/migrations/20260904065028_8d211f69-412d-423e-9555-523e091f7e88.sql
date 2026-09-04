CREATE OR REPLACE FUNCTION public.award_xp(_amount integer, _activity_type text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _user_id uuid := auth.uid();
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
  IF _user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF _activity_type NOT IN ('lesson', 'quiz', 'course', 'streak') THEN
    RAISE EXCEPTION 'Invalid activity type';
  END IF;

  IF _amount IS NULL OR _amount < 0 OR _amount > 500 THEN
    RAISE EXCEPTION 'Invalid XP amount';
  END IF;

  SELECT * INTO _stats FROM leaderboard_stats WHERE user_id = _user_id;
  IF NOT FOUND THEN
    INSERT INTO leaderboard_stats (user_id) VALUES (_user_id);
    SELECT * INTO _stats FROM leaderboard_stats WHERE user_id = _user_id;
  END IF;

  -- Daily streak XP can only be claimed once per day
  IF _activity_type = 'streak' AND _stats.last_activity_date = _today THEN
    RETURN jsonb_build_object(
      'xp', _stats.xp,
      'level', _stats.level,
      'streak', _stats.streak,
      'new_badges', '[]'::jsonb,
      'total_badges', _stats.badges,
      'already_claimed', true
    );
  END IF;

  _new_xp := _stats.xp + _amount;
  _new_lessons := _stats.lessons_completed;
  _new_quizzes := _stats.quizzes_passed;
  _new_courses := _stats.courses_completed;
  _new_badges := _stats.badges;
  _new_streak := _stats.streak;

  IF _activity_type = 'lesson' THEN
    _new_lessons := _new_lessons + 1;
  ELSIF _activity_type = 'quiz' THEN
    _new_quizzes := _new_quizzes + 1;
  ELSIF _activity_type = 'course' THEN
    _new_courses := _new_courses + 1;
  ELSIF _activity_type = 'streak' THEN
    IF _stats.last_activity_date = _today - 1 THEN
      _new_streak := _stats.streak + 1;
    ELSE
      _new_streak := 1;
    END IF;
    IF _new_streak >= 7 AND mod(_new_streak, 7) = 0 THEN
      _new_xp := _new_xp + 200;
    END IF;
  END IF;

  _new_level := GREATEST(1, (_new_xp / 500) + 1);

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
$function$;

REVOKE EXECUTE ON FUNCTION public.award_xp(integer, text) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.award_xp(integer, text) TO authenticated;