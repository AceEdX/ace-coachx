import { Flame, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GamificationWidgetProps {
  streak: number;
  xp: number;
  level: number;
  badges: string[];
  lessonsCompleted: number;
  totalLessons: number;
}

const GamificationWidget = ({ streak, xp, level, badges, lessonsCompleted, totalLessons }: GamificationWidgetProps) => {
  const xpForNextLevel = level * 500;
  const xpProgress = Math.min((xp % 500) / 5, 100);
  const progressPercent = totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Streak Counter */}
      <Card className={`border-secondary/30 ${streak > 0 ? 'animate-streak-glow' : ''}`}>
        <CardContent className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Learning Streak</p>
              <p className="text-2xl font-bold text-foreground">{streak} {streak === 1 ? 'Day' : 'Days'}</p>
            </div>
          </div>
          {streak >= 7 && (
            <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full font-medium">
              🔥 On Fire!
            </span>
          )}
        </CardContent>
      </Card>

      {/* XP & Level */}
      <Card>
        <CardContent className="py-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Level {level}</span>
            </div>
            <span className="text-sm text-muted-foreground">{xp} XP</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">{xpForNextLevel - (xp % 500)} XP to Level {level + 1}</p>
        </CardContent>
      </Card>

      {/* Course Progress */}
      <Card>
        <CardContent className="py-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">Course Progress</span>
            <span className="text-sm font-medium text-success">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-3 [&>div]:bg-success" />
          <p className="text-xs text-muted-foreground">{lessonsCompleted} of {totalLessons} lessons completed</p>
        </CardContent>
      </Card>

      {/* Badges */}
      {badges.length > 0 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-sm">Badges Earned</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/15 text-secondary border border-secondary/20"
                >
                  🏆 {badge}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GamificationWidget;
