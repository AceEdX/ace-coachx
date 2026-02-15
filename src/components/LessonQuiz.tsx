import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface LessonQuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const LessonQuiz = ({ questions, onComplete }: LessonQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<string>("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];
  const isCorrect = answered && selected === String(q.correctIndex);

  const handleAnswer = () => {
    if (!selected) return;
    setAnswered(true);
    if (selected === String(q.correctIndex)) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected("");
      setAnswered(false);
    } else {
      setFinished(true);
      const finalScore = score + (selected === String(q.correctIndex) ? 0 : 0);
      onComplete?.(score + (selected === String(q.correctIndex) ? 0 : 0), questions.length);
    }
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setSelected("");
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Card className="border-secondary/30 bg-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-secondary" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-5xl font-bold text-foreground">{pct}%</div>
          <p className="text-muted-foreground">
            You got {score} out of {questions.length} correct
          </p>
          {pct >= 80 ? (
            <p className="text-success font-semibold">🎉 Great job! You've mastered this lesson.</p>
          ) : (
            <p className="text-muted-foreground">Review the lesson and try again to improve your score.</p>
          )}
          <Button variant="outline" onClick={handleRetry} className="gap-2">
            <RotateCcw className="w-4 h-4" /> Retry Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-secondary/30 bg-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-secondary" />
            Lesson Quiz
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {currentQ + 1} / {questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-medium text-foreground">{q.question}</p>
        <RadioGroup value={selected} onValueChange={setSelected} disabled={answered}>
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                answered && i === q.correctIndex
                  ? "border-success bg-success/10"
                  : answered && selected === String(i) && i !== q.correctIndex
                  ? "border-destructive bg-destructive/10"
                  : "border-border hover:bg-muted/50"
              }`}
            >
              <RadioGroupItem value={String(i)} id={`q${currentQ}-o${i}`} />
              <Label htmlFor={`q${currentQ}-o${i}`} className="flex-1 cursor-pointer">
                {opt}
              </Label>
              {answered && i === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-success" />}
              {answered && selected === String(i) && i !== q.correctIndex && <XCircle className="w-4 h-4 text-destructive" />}
            </div>
          ))}
        </RadioGroup>

        {answered && (
          <div className="p-3 rounded-lg bg-muted text-sm text-muted-foreground">
            <strong>Explanation:</strong> {q.explanation}
          </div>
        )}

        <div className="flex justify-end gap-2">
          {!answered ? (
            <Button onClick={handleAnswer} disabled={!selected}>
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {currentQ < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonQuiz;
