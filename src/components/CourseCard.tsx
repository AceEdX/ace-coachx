import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Sparkles } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  aiPowered?: boolean;
}

const CourseCard = ({ title, description, category, duration, students, rating, aiPowered }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border bg-card overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
            {category}
          </Badge>
          {aiPowered && (
            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Guided
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;