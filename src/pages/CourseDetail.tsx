import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  ArrowLeft, 
  Play,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";
import { getCourseById } from "@/data/courseData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CourseDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  const course = getCourseById(id || '');

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!user || !id) return;

      const { data } = await supabase
        .from('enrollments')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', id)
        .single();

      setEnrolled(!!data);
    };

    checkEnrollment();
  }, [user, id]);

  // Expand first module by default
  useEffect(() => {
    if (course && course.modules.length > 0 && expandedModules.length === 0) {
      setExpandedModules([course.modules[0].id]);
    }
  }, [course]);

  const handleEnroll = async () => {
    if (!user) {
      navigate(`/signin?redirect=/course/${id}`);
      return;
    }

    if (enrolled) {
      // Navigate to first lesson
      if (course && course.modules.length > 0) {
        const firstLesson = course.modules[0].lessons[0];
        navigate(`/course/${id}/lesson/${firstLesson.id}`);
      }
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: id!,
          progress: 0
        });

      if (error) throw error;

      setEnrolled(true);
      toast.success('Successfully enrolled in course!');
      
      // Navigate to first lesson
      if (course && course.modules.length > 0) {
        const firstLesson = course.modules[0].lessons[0];
        navigate(`/course/${id}/lesson/${firstLesson.id}`);
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to enroll in course');
    } finally {
      setLoading(false);
    }
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(m => m !== moduleId)
        : [...prev, moduleId]
    );
  };

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button onClick={() => navigate('/courses')}>
            Browse Courses
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate total lessons
  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Link to="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4">{course.category}</Badge>
              {course.aiPowered && (
                <Badge variant="secondary" className="ml-2">AI-Guided</Badge>
              )}
              <h1 className="text-4xl font-bold text-foreground mb-4 mt-4">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{totalLessons} lessons</span>
                </div>
              </div>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground mb-6">
                  {course.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Course Syllabus with Clickable Lessons */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Course Syllabus
                </h2>
                
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <Collapsible 
                      key={module.id}
                      open={expandedModules.includes(module.id)}
                      onOpenChange={() => toggleModule(module.id)}
                    >
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                              {moduleIndex + 1}
                            </span>
                            <div className="text-left">
                              <h3 className="font-semibold text-foreground">
                                {module.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {module.lessons.length} lessons
                              </p>
                            </div>
                          </div>
                          {expandedModules.includes(module.id) ? (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <div className="pl-11 pr-4 py-2 space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <button
                              key={lesson.id}
                              onClick={() => {
                                if (!user) {
                                  navigate(`/signin?redirect=/course/${id}/lesson/${lesson.id}`);
                                } else {
                                  navigate(`/course/${id}/lesson/${lesson.id}`);
                                }
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left group"
                            >
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Play className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {lessonIndex + 1}. {lesson.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {lesson.duration} • {lesson.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground mt-1">{course.instructorBio}</p>
                </div>

                {enrolled && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Course Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                )}

                <Button className="w-full mb-4" size="lg" onClick={handleEnroll} disabled={loading}>
                  {loading ? 'Processing...' : enrolled ? 'Continue Learning' : 'Enroll Now - Free'}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => toast.info('Wishlist feature coming soon!')}
                >
                  Add to Wishlist
                </Button>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">This course includes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Lifetime access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {totalLessons} detailed lessons
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Practical examples
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Certificate of completion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Mobile and desktop access
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
