import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <span className="text-lg font-bold">Ace Coach X</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              The Educator's Lifeline — premium micro-learning for Gen Next teaching excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Modules</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/course/ai-augmented-educator" className="hover:text-secondary transition-colors">AI-Augmented Educator</Link></li>
              <li><Link to="/course/future-ready-pedagogy" className="hover:text-secondary transition-colors">Future-Ready Pedagogy</Link></li>
              <li><Link to="/course/sel-leadership" className="hover:text-secondary transition-colors">SEL Leadership</Link></li>
              <li><Link to="/course/digital-literacy-data" className="hover:text-secondary transition-colors">Digital Literacy & Data</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/community" className="hover:text-secondary transition-colors">Community</Link></li>
              <li><Link to="/resources" className="hover:text-secondary transition-colors">Resource Library</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Platform</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/signin" className="hover:text-secondary transition-colors">Sign In</Link></li>
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Browse Courses</Link></li>
              <li><Link to="/dashboard" className="hover:text-secondary transition-colors">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ace Coach X × Ace EdX. All rights reserved. Building the future of education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
