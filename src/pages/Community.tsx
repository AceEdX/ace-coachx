import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, Award } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Our Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow educators, share insights, and grow together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <MessageSquare className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Discussion Forums</CardTitle>
              <CardDescription>
                Engage in meaningful conversations about AI in education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Join Discussions</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Study Groups</CardTitle>
              <CardDescription>
                Collaborate with peers and learn together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Find a Group</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Live Events</CardTitle>
              <CardDescription>
                Attend webinars and workshops with industry experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Calendar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Earn badges and recognition for your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Leaderboard</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Connect with 50,000+ Educators</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Share experiences, ask questions, and grow your professional network
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
