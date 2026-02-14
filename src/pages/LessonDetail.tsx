import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Lesson, Module, Course } from "@/data/courseData";
import { useLessonById, useCourseById } from "@/hooks/useDynamicCourses";
import { toast } from "sonner";
import CertificateModal from "@/components/CertificateModal";

const LessonDetail = () => {
  const { courseId, lessonId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [showCertificate, setShowCertificate] = useState(false);

  const lessonResult = useLessonById(courseId || '', lessonId || '');
  const { course } = useCourseById(courseId || '');
  const lessonData = lessonResult.lesson ? { lesson: lessonResult.lesson, module: lessonResult.module! } : undefined;

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!user || !courseId) return;

      const { data } = await supabase
        .from('enrollments')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .single();

      setEnrolled(!!data);
    };

    checkEnrollment();
  }, [user, courseId]);

  // Load completed lessons from localStorage
  useEffect(() => {
    if (user && courseId) {
      const key = `completed_lessons_${user.id}_${courseId}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        setCompletedLessons(new Set(JSON.parse(saved)));
      }
    }
  }, [user, courseId]);

  // Check if current lesson is already completed
  useEffect(() => {
    if (lessonId && completedLessons.has(lessonId)) {
      setLessonCompleted(true);
    } else {
      setLessonCompleted(false);
    }
  }, [lessonId, completedLessons]);

  if (!lessonData || !course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Button onClick={() => navigate('/courses')}>
            Browse Courses
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const { lesson, module } = lessonData;

  // Find previous and next lessons
  const allLessons: { lesson: Lesson; module: Module }[] = [];
  course.modules.forEach(mod => {
    mod.lessons.forEach(les => {
      allLessons.push({ lesson: les, module: mod });
    });
  });

  const currentIndex = allLessons.findIndex(l => l.lesson.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const isLastLesson = currentIndex === allLessons.length - 1;

  const handleMarkComplete = async () => {
    setLessonCompleted(true);
    
    // Save to localStorage
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonId!);
    setCompletedLessons(newCompleted);
    
    if (user && courseId) {
      const key = `completed_lessons_${user.id}_${courseId}`;
      localStorage.setItem(key, JSON.stringify([...newCompleted]));

      // Update enrollment progress
      const totalLessons = allLessons.length;
      const completedCount = newCompleted.size;
      const progress = Math.round((completedCount / totalLessons) * 100);

      const updateData: { progress: number; completed_at?: string } = { progress };
      
      // If all lessons complete, mark course as completed
      if (completedCount >= totalLessons) {
        updateData.completed_at = new Date().toISOString();
      }

      await supabase
        .from('enrollments')
        .update(updateData)
        .eq('user_id', user.id)
        .eq('course_id', courseId);
    }

    toast.success('Lesson marked as complete!');

    // If this is the last lesson and all lessons are completed, show certificate
    const newCompleted2 = new Set(completedLessons);
    newCompleted2.add(lessonId!);
    if (newCompleted2.size >= allLessons.length) {
      setTimeout(() => {
        setShowCertificate(true);
      }, 1000);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      navigate(`/signin?redirect=/course/${courseId}/lesson/${lessonId}`);
      return;
    }

    try {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId!,
          progress: 0
        });

      if (error) throw error;

      setEnrolled(true);
      toast.success('Successfully enrolled in course!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to enroll');
    }
  };

  // Parse markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-foreground mt-6 mb-4">
            {trimmedLine.slice(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
            {trimmedLine.slice(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
            {trimmedLine.slice(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        inList = true;
        listItems.push(trimmedLine.slice(2));
      } else if (trimmedLine === '') {
        flushList();
      } else {
        flushList();
        const processedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p 
            key={index} 
            className="text-muted-foreground mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/course/${courseId}`} className="hover:text-primary">{course.title}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{lesson.title}</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Badge className="mb-2">{module.title}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Lesson {currentIndex + 1} of {allLessons.length}</span>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <Card className="mb-8">
              <CardContent className="pt-6 prose prose-lg max-w-none">
                {renderContent(lesson.content)}
              </CardContent>
            </Card>

            {/* Practical Example */}
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Practical Example: {lesson.practicalExample.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Scenario:</strong> {lesson.practicalExample.scenario}
                </p>
                
                <h4 className="font-semibold mb-3">Step-by-Step Implementation:</h4>
                <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
                  {lesson.practicalExample.steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>

                <h4 className="font-semibold mb-3">Pro Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {lesson.practicalExample.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Key Takeaways */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Key Takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {lesson.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t">
              {prevLesson ? (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/course/${courseId}/lesson/${prevLesson.lesson.id}`)}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous: {prevLesson.lesson.title}
                </Button>
              ) : (
                <div />
              )}
              
              {nextLesson ? (
                <Button
                  onClick={() => navigate(`/course/${courseId}/lesson/${nextLesson.lesson.id}`)}
                  className="flex items-center gap-2"
                >
                  Next: {nextLesson.lesson.title}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    if (!lessonCompleted) {
                      handleMarkComplete();
                    } else {
                      setShowCertificate(true);
                    }
                  }}
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  🎓 Get Certificate
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                {!enrolled && !user ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Sign in and enroll to track your progress and access all lessons.
                    </p>
                    <Button className="w-full" onClick={handleEnroll}>
                      Enroll Now
                    </Button>
                  </div>
                ) : !enrolled ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Enroll to track your progress and access all lessons.
                    </p>
                    <Button className="w-full" onClick={handleEnroll}>
                      Enroll Now
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      {completedLessons.size} of {allLessons.length} lessons completed
                    </div>
                    <Button
                      className="w-full"
                      variant={lessonCompleted ? "secondary" : "default"}
                      onClick={handleMarkComplete}
                      disabled={lessonCompleted}
                    >
                      {lessonCompleted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate(`/course/${courseId}`)}
                    >
                      View All Lessons
                    </Button>
                  </div>
                )}

                <Separator className="my-4" />

                <h4 className="font-semibold mb-3 text-sm">Course Lessons</h4>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {course.modules.map((mod) => (
                    <div key={mod.id} className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {mod.title}
                      </p>
                      {mod.lessons.map((les) => (
                        <button
                          key={les.id}
                          onClick={() => navigate(`/course/${courseId}/lesson/${les.id}`)}
                          className={`w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors flex items-center gap-2 ${
                            les.id === lessonId ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground'
                          }`}
                        >
                          {completedLessons.has(les.id) && (
                            <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />
                          )}
                          <span className={completedLessons.has(les.id) ? 'line-through opacity-70' : ''}>
                            {les.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

      {/* Certificate Modal */}
      <CertificateModal
        open={showCertificate}
        onOpenChange={setShowCertificate}
        courseTitle={course.title}
      />
    </div>
  );
};

export default LessonDetail;
