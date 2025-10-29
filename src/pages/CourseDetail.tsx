import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const CourseDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleEnroll = async () => {
    if (!user) {
      navigate(`/signin?redirect=/course/${id}`);
      return;
    }

    if (enrolled) {
      navigate('/dashboard');
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
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Failed to enroll in course');
    } finally {
      setLoading(false);
    }
  };

  // Mock course data - in a real app, this would fetch from an API
  const course = {
    title: "AI in Modern Education",
    description: "Master the fundamentals of integrating AI tools into your teaching practice with hands-on projects and real-world applications.",
    category: "AI Tools",
    duration: "6 weeks",
    students: "2.5K",
    rating: 4.9,
    aiPowered: true,
    instructor: "Dr. Sarah Johnson",
    longDescription: "This comprehensive course covers everything you need to know about implementing AI in your classroom. From basic concepts to advanced applications, you'll learn how to leverage AI tools to enhance student engagement and learning outcomes.",
    syllabus: [
      "Introduction to AI in Education",
      "AI-Powered Learning Tools",
      "Personalized Learning with AI",
      "Assessment and Analytics",
      "Ethical Considerations",
      "Hands-on Project"
    ]
  };

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

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <p className="text-muted-foreground mb-6">
                  {course.longDescription}
                </p>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Course Syllabus
                </h3>
                <ul className="space-y-3">
                  {course.syllabus.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
                <Button className="w-full mb-4" size="lg" onClick={handleEnroll} disabled={loading}>
                  {loading ? 'Processing...' : enrolled ? 'Continue Learning' : 'Enroll Now'}
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Wishlist
                </Button>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">This course includes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Lifetime access</li>
                    <li>✓ AI-powered personalization</li>
                    <li>✓ Certificate of completion</li>
                    <li>✓ Community access</li>
                    <li>✓ Mobile and desktop access</li>
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
