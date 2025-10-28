import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Teacher Training</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">21st Century</span> Educators
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transform your teaching practice with our AI-guided learning platform. Master modern pedagogy, digital tools, and innovative assessment strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg text-lg px-8 font-semibold">
              Start Learning <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 font-semibold">
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Guided Learning</h3>
              <p className="text-white/80">Personalized learning paths powered by advanced AI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Community</h3>
              <p className="text-white/80">Connect with educators worldwide</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Trophy className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Certification</h3>
              <p className="text-white/80">Earn recognized teaching credentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;