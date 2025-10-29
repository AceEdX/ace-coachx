import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, TrendingUp } from 'lucide-react';

interface Enrollment {
  id: string;
  course_id: string;
  enrolled_at: string;
  progress: number;
  completed_at: string | null;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });

      if (!error && data) {
        setEnrollments(data);
      }
      setLoading(false);
    };

    fetchEnrollments();
  }, [user]);

  const getCourseTitle = (courseId: string) => {
    const courses: Record<string, string> = {
      'ai-fundamentals': 'AI Fundamentals for Educators',
      'classroom-tech': 'Classroom Technology Integration',
      'personalized-learning': 'Personalized Learning with AI',
      'assessment-analytics': 'Assessment & Analytics',
      'digital-citizenship': 'Digital Citizenship & Ethics',
      'stem-education': 'STEM Education Enhancement',
    };
    return courses[courseId] || courseId;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, {user?.user_metadata?.full_name || 'Educator'}!
          </h1>
          <p className="text-muted-foreground">
            Continue your learning journey
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : enrollments.length > 0 ? (
          <div className="grid gap-6 mb-8">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Your Enrolled Courses
            </h2>
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id}>
                <CardHeader>
                  <CardTitle>{getCourseTitle(enrollment.course_id)}</CardTitle>
                  <CardDescription>
                    Enrolled on {new Date(enrollment.enrolled_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{enrollment.progress}%</span>
                      </div>
                      <Progress value={enrollment.progress} />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild>
                        <Link to={`/course/${enrollment.course_id}`}>
                          {enrollment.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                        </Link>
                      </Button>
                      {enrollment.completed_at && (
                        <span className="text-sm text-green-600 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>No Enrolled Courses Yet</CardTitle>
              <CardDescription>
                Start your learning journey by enrolling in a course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/courses">Explore More Courses</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/community">Join Community</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/resources">Access Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Set aside 30 minutes daily for learning</li>
                <li>• Join discussion forums to connect with peers</li>
                <li>• Apply concepts immediately in your classroom</li>
                <li>• Complete assessments to track progress</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
