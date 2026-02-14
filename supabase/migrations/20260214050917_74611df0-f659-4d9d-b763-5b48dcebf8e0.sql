
-- User roles system
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Admin courses table
CREATE TABLE public.admin_courses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    category TEXT NOT NULL DEFAULT 'General',
    duration TEXT NOT NULL DEFAULT '4 weeks',
    instructor TEXT NOT NULL DEFAULT 'Ace Coach X',
    instructor_bio TEXT,
    ai_powered BOOLEAN DEFAULT false,
    modules JSONB NOT NULL DEFAULT '[]'::jsonb,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by uuid REFERENCES auth.users(id)
);

ALTER TABLE public.admin_courses ENABLE ROW LEVEL SECURITY;

-- Everyone can read published courses
CREATE POLICY "Anyone can view published courses"
ON public.admin_courses FOR SELECT
USING (published = true);

-- Admins can do everything
CREATE POLICY "Admins can manage courses"
ON public.admin_courses FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_admin_courses_updated_at
BEFORE UPDATE ON public.admin_courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
