import { useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AwardXPResult {
  xp: number;
  level: number;
  streak: number;
  new_badges: string[];
  total_badges: string[];
}

export const useXPSystem = () => {
  const { user } = useAuth();

  const awardXP = useCallback(
    async (amount: number, activityType: "lesson" | "quiz" | "course" | "streak") => {
      if (!user) return null;

      try {
        const { data, error } = await supabase.rpc("award_xp", {
          _user_id: user.id,
          _amount: amount,
          _activity_type: activityType,
        });

        if (error) throw error;

        const result = data as unknown as AwardXPResult;

        // Show toast for new badges
        if (result.new_badges && result.new_badges.length > 0) {
          result.new_badges.forEach((badge: string) => {
            toast.success(`🏆 New Badge: ${badge}!`, {
              description: "Keep going to unlock more achievements!",
              duration: 5000,
            });
          });
        }

        // Show XP toast
        toast.success(`+${amount} XP earned!`, { duration: 2000 });

        return result;
      } catch (err: any) {
        console.error("Failed to award XP:", err);
        return null;
      }
    },
    [user]
  );

  const checkStreak = useCallback(async () => {
    if (!user) return;
    await awardXP(25, "streak");
  }, [user, awardXP]);

  return { awardXP, checkStreak };
};
