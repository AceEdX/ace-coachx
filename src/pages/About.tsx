import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Target, Users, BookOpen, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllCourses } from "@/hooks/useDynamicCourses";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const { courses } = useAllCourses();

  // Collect all modules from all courses
  const allModules = courses.flatMap(course =>
    course.modules.map(mod => ({
      ...mod,
      courseTitle: course.title,
      courseId: course.id,
    }))
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <img src="/images/aceedx-logo.png" alt="AceEdX Logo" className="w-16 h-16 mx-auto mb-4 rounded-xl shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About AceEdX
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empowering educators with AI-driven learning solutions to transform education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg border bg-card">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize education by providing cutting-edge AI tools that enhance teaching and learning experiences
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every educator has access to intelligent, adaptive learning technologies
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Join thousands of educators worldwide who are transforming their teaching with AI
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              AceEdX was founded with a vision to bridge the gap between traditional teaching methods and modern AI technology. We believe that educators deserve access to the best tools to help their students succeed.
            </p>
            <p className="text-muted-foreground">
              Our platform combines expert-designed curriculum with AI-powered personalization, creating a unique learning experience that adapts to each educator's needs.
            </p>
          </div>
        </div>

        {/* Blue Section — Modules & Learn More */}
        <section className="py-16" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-4">
            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="flex justify-center mb-8 bg-white/10 backdrop-blur-sm border border-white/20">
                <TabsTrigger value="modules" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
                  All Modules
                </TabsTrigger>
                <TabsTrigger value="learn-more" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </TabsTrigger>
              </TabsList>

              <TabsContent value="modules">
                <h2 className="text-3xl font-bold text-white text-center mb-8">All Course Modules</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allModules.map((mod) => (
                    <Link
                      key={mod.id}
                      to={`/course/${mod.courseId}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors block"
                    >
                      <h3 className="text-lg font-semibold text-white mb-1">{mod.title}</h3>
                      <p className="text-white/70 text-sm mb-2">{mod.description}</p>
                      <span className="text-xs text-secondary font-medium">{mod.courseTitle}</span>
                      <span className="text-white/50 text-xs ml-2">• {mod.lessons.length} lessons</span>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="learn-more">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Visit Our Website</h2>
                  <p className="text-white/80 text-lg mb-8">
                    Learn more about AceEdX, our team, partnerships, and how we're transforming education across India and beyond.
                  </p>
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8" asChild>
                    <a href="https://www.aceedx.com" target="_blank" rel="noopener noreferrer">
                      www.aceedx.com
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
