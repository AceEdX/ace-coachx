import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

export interface LeaderboardEntry {
  user_id: string;
  xp: number;
  level: number;
  streak: number;
  lessons_completed: number;
  quizzes_passed: number;
  courses_completed: number;
  badges: string[];
  full_name: string | null;
  avatar_url: string | null;
  rank?: number;
}

export const useLeaderboard = () => {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [myStats, setMyStats] = useState<LeaderboardEntry | null>(null);
  const [myRank, setMyRank] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      // Fetch leaderboard stats joined with profiles
      const { data: stats, error } = await supabase
        .from("leaderboard_stats")
        .select("user_id, xp, level, streak, lessons_completed, quizzes_passed, courses_completed, badges")
        .order("xp", { ascending: false })
        .limit(50);

      if (error) throw error;

      // Fetch profiles for these users
      const userIds = (stats || []).map((s) => s.user_id);
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, avatar_url")
        .in("id", userIds);

      const profileMap = new Map(
        (profiles || []).map((p) => [p.id, p])
      );

      const entries: LeaderboardEntry[] = (stats || []).map((s, i) => {
        const profile = profileMap.get(s.user_id);
        return {
          ...s,
          badges: (s.badges as string[]) || [],
          full_name: profile?.full_name || null,
          avatar_url: profile?.avatar_url || null,
          rank: i + 1,
        };
      });

      setLeaderboard(entries);

      // Find current user's stats
      if (user) {
        const myEntry = entries.find((e) => e.user_id === user.id);
        if (myEntry) {
          setMyStats(myEntry);
          setMyRank(myEntry.rank || null);
        }
      }
    } catch (err) {
      console.error("Failed to fetch leaderboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [user]);

  return { leaderboard, myStats, myRank, loading, refetch: fetchLeaderboard };
};
