import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Ace CoachX</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering educators with AI-powered training for the 21st century classroom.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Digital Pedagogy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Assessment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">View All</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Ace CoachX. All rights reserved. Building the future of education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;