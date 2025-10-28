import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Ace CoachX
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

        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Ace CoachX was founded with a vision to bridge the gap between traditional teaching methods and modern AI technology. We believe that educators deserve access to the best tools to help their students succeed.
          </p>
          <p className="text-muted-foreground">
            Our platform combines expert-designed curriculum with AI-powered personalization, creating a unique learning experience that adapts to each educator's needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
