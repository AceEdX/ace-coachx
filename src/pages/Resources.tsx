import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Download, BookOpen } from "lucide-react";
import { toast } from "sonner";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Course Materials",
      description: "Download comprehensive guides, worksheets, and lesson plans",
      buttonText: "Browse Materials"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step tutorials on using AI in your classroom",
      buttonText: "Watch Videos"
    },
    {
      icon: BookOpen,
      title: "Best Practices",
      description: "Learn from successful educators implementing AI tools",
      buttonText: "Read Articles"
    },
    {
      icon: Download,
      title: "Templates",
      description: "Ready-to-use templates for lesson plans and assessments",
      buttonText: "Get Templates"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed with AI-powered education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <resource.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  onClick={() => toast.info(`${resource.title} coming soon!`)}
                >
                  {resource.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg border p-8">
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          <p className="text-muted-foreground mb-6">
            Access our complete documentation library to get the most out of Ace CoachX
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" onClick={() => toast.info("Getting Started Guide coming soon!")}>
              Getting Started Guide
            </Button>
            <Button variant="outline" onClick={() => toast.info("API Documentation coming soon!")}>
              API Documentation
            </Button>
            <Button variant="outline" onClick={() => toast.info("FAQ coming soon!")}>
              FAQ
            </Button>
            <Button variant="outline" onClick={() => toast.info("Support available via email!")}>
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
