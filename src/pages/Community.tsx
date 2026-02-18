import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import Leaderboard from "@/components/Leaderboard";

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

        {/* Leaderboard Section */}
        <div className="mb-12">
          <Leaderboard />
        </div>

        {/* WhatsApp Banner */}
        <div className="mb-10 rounded-xl bg-[hsl(142,71%,45%)] text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-12 h-12 shrink-0" />
            <div>
              <h3 className="text-xl font-bold">Join the AceEdX Teachers WhatsApp Group</h3>
              <p className="text-white/90 text-sm mt-1">Connect instantly with 1,000+ Indian educators — share ideas, ask questions, and grow together.</p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/L3WSlHzfc5wC62ZC6YioBd?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button size="lg" className="bg-white text-[hsl(142,71%,35%)] hover:bg-white/90 font-bold">
              Join WhatsApp Group
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <MessageSquare className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Discussion Forums</CardTitle>
              <CardDescription>
                Engage in meaningful conversations about AI in education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => toast.info("Discussion forums coming soon!")}>
                Join Discussions
              </Button>
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
              <Button className="w-full" onClick={() => toast.info("Study groups feature coming soon!")}>
                Find a Group
              </Button>
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
              <Button className="w-full" onClick={() => toast.info("Event calendar coming soon!")}>
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Connect with 50,000+ Educators</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Share experiences, ask questions, and grow your professional network
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/signin">Get Started Today</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
