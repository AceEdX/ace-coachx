import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Course, coursesData, getCourseById as getStaticCourse, getLessonById as getStaticLesson } from "@/data/courseData";

interface AdminCourseRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  long_description: string | null;
  category: string;
  duration: string;
  instructor: string;
  instructor_bio: string | null;
  ai_powered: boolean | null;
  modules: any;
  published: boolean | null;
}

const mapAdminCourse = (row: AdminCourseRow): Course => ({
  id: row.slug,
  title: row.title,
  description: row.description,
  longDescription: row.long_description || row.description,
  category: row.category,
  duration: row.duration,
  students: 0,
  rating: 5.0,
  aiPowered: row.ai_powered || false,
  instructor: row.instructor,
  instructorBio: row.instructor_bio || "",
  modules: Array.isArray(row.modules) ? row.modules : [],
});

export const useAllCourses = () => {
  const [dynamicCourses, setDynamicCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDynamic = async () => {
      const { data } = await supabase
        .from("admin_courses")
        .select("*")
        .eq("published", true);

      if (data) {
        setDynamicCourses((data as AdminCourseRow[]).map(mapAdminCourse));
      }
      setLoading(false);
    };
    fetchDynamic();
  }, []);

  const allCourses = [...coursesData, ...dynamicCourses];
  return { courses: allCourses, loading };
};

export const useCourseById = (id: string) => {
  const [course, setCourse] = useState<Course | undefined>(getStaticCourse(id));
  const [loading, setLoading] = useState(!course);

  useEffect(() => {
    if (course) return;
    const fetch = async () => {
      const { data } = await supabase
        .from("admin_courses")
        .select("*")
        .eq("slug", id)
        .eq("published", true)
        .single();
      if (data) setCourse(mapAdminCourse(data as AdminCourseRow));
      setLoading(false);
    };
    fetch();
  }, [id, course]);

  return { course, loading };
};

export const useLessonById = (courseId: string, lessonId: string) => {
  const { course } = useCourseById(courseId);
  
  if (!course) return { lesson: undefined, module: undefined, course: undefined };

  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      if (lesson.id === lessonId) {
        return { lesson, module: mod, course };
      }
    }
  }

  return { lesson: undefined, module: undefined, course };
};
