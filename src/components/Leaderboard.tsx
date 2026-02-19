import { useLeaderboard, LeaderboardEntry } from "@/hooks/useLeaderboard";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Medal, Trophy, Flame, Star, Loader2 } from "lucide-react";

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="w-5 h-5 text-secondary" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-muted-foreground" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-primary" />;
  return <span className="text-sm font-medium text-muted-foreground">#{rank}</span>;
};

const Leaderboard = () => {
  const { leaderboard, myStats, myRank, loading } = useLeaderboard();
  const { user } = useAuth();

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  const top10 = leaderboard.slice(0, 10);

  return (
    <div className="space-y-6">
      {/* Current User Stats */}
      {myStats && (
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Your Ranking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">#{myRank}</p>
                <p className="text-xs text-muted-foreground">Rank</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{myStats.xp}</p>
                <p className="text-xs text-muted-foreground">XP</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">Lv.{myStats.level}</p>
                <p className="text-xs text-muted-foreground">Level</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-secondary" />
                  <p className="text-2xl font-bold text-foreground">{myStats.streak}</p>
                </div>
                <p className="text-xs text-muted-foreground">Streak</p>
              </div>
            </div>
            {myStats.badges.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {myStats.badges.map((badge, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    🏆 {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Leaderboard Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-secondary" />
            Top Learners
          </CardTitle>
        </CardHeader>
        <CardContent>
          {top10.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No leaderboard data yet. Complete lessons to get on the board!
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Learner</TableHead>
                  <TableHead className="text-center">Level</TableHead>
                  <TableHead className="text-center">XP</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">Badges</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">Courses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {top10.map((entry) => {
                  const isCurrentUser = user && entry.user_id === user.id;
                  return (
                    <TableRow
                      key={entry.user_id}
                      className={isCurrentUser ? "bg-primary/5 font-medium" : ""}
                    >
                      <TableCell>{getRankIcon(entry.rank || 0)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs bg-primary/10 text-primary">
                              {(entry.full_name || "?").charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm truncate max-w-[120px]">
                            {entry.full_name ? entry.full_name.split(" ")[0] : "Anonymous"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="text-xs">
                          Lv.{entry.level}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center font-medium">{entry.xp}</TableCell>
                      <TableCell className="text-center hidden sm:table-cell">
                        {entry.badges.length}
                      </TableCell>
                      <TableCell className="text-center hidden sm:table-cell">
                        {entry.courses_completed}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
