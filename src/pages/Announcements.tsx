import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Megaphone, Sparkles, Calendar } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "New Course: Classroom Tech Tools Mastery",
    description: "Master interactive whiteboards, Kahoot, Mentimeter, and digital collaboration suites. Enroll now and level up your edtech skills!",
    date: "2026-02-14",
    type: "New Course",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Data-Driven Teaching Course Now Available",
    description: "Learn to use student data ethically and effectively to personalize instruction and close achievement gaps.",
    date: "2026-02-14",
    type: "New Course",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Inclusive Classroom Design Course Launched",
    description: "Build learning environments that celebrate diversity, support ELL students, and ensure equitable access for every learner.",
    date: "2026-02-14",
    type: "New Course",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Certificate System Upgraded",
    description: "Certificates now include the AceEdX logo and brand colors. Complete any course to earn your Certificate of Excellence!",
    date: "2026-02-10",
    type: "Update",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Community Features Coming Soon",
    description: "Discussion forums, study groups, and live events are being built. Stay tuned for launch details!",
    date: "2026-02-05",
    type: "Coming Soon",
    icon: Calendar,
  },
];

const Announcements = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Bell className="w-8 h-8 text-secondary" />
            Announcements
          </h1>
          <p className="text-muted-foreground">Latest updates from AceEdX</p>
        </div>

        <div className="space-y-4">
          {announcements.map((a) => (
            <Card key={a.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{a.title}</CardTitle>
                      <CardDescription>{new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={a.type === "New Course" ? "default" : "secondary"}>
                    {a.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{a.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Announcements;
