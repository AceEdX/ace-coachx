import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Trophy, Award, Flame } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary mb-6">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">Zero Dropout • Micro-Learning • Real Results</span>
          </div>
          
          <img src="/images/aceedx-logo.png" alt="AceEdX Logo" className="w-20 h-20 mx-auto mb-4 rounded-xl shadow-lg" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            The <span className="text-secondary">Educator's</span> Lifeline
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium micro-learning for Gen Next teaching. Master AI, gamification, SEL, and future-ready pedagogy — 5-10 minute lessons you can implement tomorrow.
          </p>

          <a href="https://www.aceedx.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-lg font-medium">
            www.aceedx.com
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg text-lg px-8 font-semibold" asChild>
              <Link to="/courses">
                Start Learning Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 font-semibold" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <Brain className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">AI-Augmented</h3>
              <p className="text-white/75 text-sm">Prompt engineering & automation hacks</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <Trophy className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Gamified</h3>
              <p className="text-white/75 text-sm">XP, badges, streaks & leaderboards</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <Users className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">SEL Leadership</h3>
              <p className="text-white/75 text-sm">Mental health, neurodiversity & growth</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <Award className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Certified</h3>
              <p className="text-white/75 text-sm">Certificate of Excellence on completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
