import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, TrendingUp, Award } from 'lucide-react';
import GamificationWidget from '@/components/GamificationWidget';
import CertificateModal from '@/components/CertificateModal';
import FloatingHelp from '@/components/FloatingHelp';
import { coursesData } from '@/data/courseData';
import { useXPSystem } from '@/hooks/useXPSystem';

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
  const [certCourse, setCertCourse] = useState<string | null>(null);
  const [stats, setStats] = useState<{ xp: number; level: number; streak: number; badges: string[]; lessonsCompleted: number } | null>(null);
  const { checkStreak } = useXPSystem();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      
      // Fetch enrollments
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });
      if (!error && data) setEnrollments(data);

      // Fetch gamification stats
      const { data: statsData } = await supabase
        .from('leaderboard_stats')
        .select('xp, level, streak, badges, lessons_completed')
        .eq('user_id', user.id)
        .single();
      
      if (statsData) {
        setStats({
          xp: statsData.xp,
          level: statsData.level,
          streak: statsData.streak,
          badges: (statsData.badges as string[]) || [],
          lessonsCompleted: statsData.lessons_completed,
        });
      }

      setLoading(false);
      
      // Check daily streak
      checkStreak();
    };
    fetchData();
  }, [user]);

  const getCourseTitle = (courseId: string) => {
    const course = coursesData.find(c => c.id === courseId);
    return course?.title || courseId;
  };

  const getTotalLessons = (courseId: string) => {
    const course = coursesData.find(c => c.id === courseId);
    return course?.modules.reduce((a, m) => a + m.lessons.length, 0) || 0;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Welcome back, {user?.user_metadata?.full_name || 'Educator'}!
              </h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : enrollments.length > 0 ? (
              <div className="space-y-4 mb-8">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> Your Courses
                </h2>
                {enrollments.map((enrollment) => (
                  <Card key={enrollment.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{getCourseTitle(enrollment.course_id)}</CardTitle>
                      <CardDescription>
                        Enrolled {new Date(enrollment.enrolled_at).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium text-success">{enrollment.progress}%</span>
                          </div>
                          <Progress value={enrollment.progress} className="h-2 [&>div]:bg-success" />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <Button asChild size="sm">
                            <Link to={`/course/${enrollment.course_id}`}>
                              {enrollment.progress > 0 ? 'Continue' : 'Start Learning'}
                            </Link>
                          </Button>
                          {enrollment.completed_at && (
                            <>
                              <span className="text-sm text-success flex items-center gap-1">
                                <TrendingUp className="w-4 h-4" /> Completed
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCertCourse(getCourseTitle(enrollment.course_id))}
                              >
                                <Award className="w-4 h-4 mr-1" /> Certificate
                              </Button>
                            </>
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
                  <CardDescription>Start your learning journey by enrolling in a course</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild><Link to="/courses">Browse Courses</Link></Button>
                </CardContent>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Quick Actions</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                  <Button asChild variant="outline" className="w-full justify-start"><Link to="/courses">Explore Courses</Link></Button>
                  <Button asChild variant="outline" className="w-full justify-start"><Link to="/community">Community</Link></Button>
                  <Button asChild variant="outline" className="w-full justify-start"><Link to="/resources">Resources</Link></Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Micro-Learning Tips</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete one 5-10 min lesson daily</li>
                    <li>• Apply one concept in class each week</li>
                    <li>• Maintain your streak for bonus XP</li>
                    <li>• Earn badges to unlock certificates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gamification Sidebar */}
          <div className="lg:col-span-1">
            <GamificationWidget
              streak={stats?.streak ?? 0}
              xp={stats?.xp ?? 0}
              level={stats?.level ?? 1}
              badges={stats?.badges ?? []}
              lessonsCompleted={stats?.lessonsCompleted ?? 0}
              totalLessons={enrollments.reduce((a, e) => a + getTotalLessons(e.course_id), 0)}
            />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingHelp />
      {certCourse && (
        <CertificateModal
          open={!!certCourse}
          onOpenChange={(open) => { if (!open) setCertCourse(null); }}
          courseTitle={certCourse}
        />
      )}
    </div>
  );
};

export default Dashboard;
