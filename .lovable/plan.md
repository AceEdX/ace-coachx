

# Functional Leaderboard & New Courses for Indian Teachers

## Overview
Transform the placeholder leaderboard into a real-time, database-backed competitive system with XP tracking, rankings, and achievements. Also add 3 new courses tailored for Indian teachers on topics not yet covered.

---

## Part 1: Database Schema for Leaderboard

Create a new `leaderboard_stats` table to persist per-user gamification data:

| Column | Type | Purpose |
|--------|------|---------|
| `id` | uuid (PK) | Auto-generated |
| `user_id` | uuid (unique, FK to profiles) | Links to user |
| `xp` | integer (default 0) | Total experience points |
| `level` | integer (default 1) | Current level |
| `streak` | integer (default 0) | Consecutive days active |
| `last_activity_date` | date | For streak calculation |
| `lessons_completed` | integer (default 0) | Total lessons finished |
| `quizzes_passed` | integer (default 0) | Quizzes passed |
| `courses_completed` | integer (default 0) | Courses finished |
| `badges` | jsonb (default '[]') | Array of earned badge names |
| `updated_at` | timestamptz | Auto-updated |

**RLS Policies:**
- Users can read ALL rows (leaderboard is public)
- Users can only update/insert their own row

**Database function:** `award_xp(user_id, amount, activity_type)` -- awards XP, auto-levels up, auto-grants badges based on milestones.

---

## Part 2: Functional Leaderboard Page

Replace the placeholder "Achievements" card on the Community page with a full leaderboard section featuring:

- **Top 10 Leaderboard Table**: Rank, Avatar/Name, Level, XP, Badges count, Courses completed
- **Current User's Rank**: Highlighted row showing where the logged-in user stands
- **Time Filter Tabs**: "All Time" | "This Month" | "This Week"
- **Fun Elements**:
  - Crown/medal icons for top 3 (gold, silver, bronze)
  - Animated rank-up celebrations when user climbs the leaderboard
  - "Rising Star" badge for users who gained the most XP this week

---

## Part 3: XP Award System

XP is awarded automatically when users complete activities:

| Activity | XP Earned |
|----------|----------|
| Complete a lesson | +50 XP |
| Pass a quiz | +100 XP |
| Complete a course | +500 XP |
| Daily login (streak) | +25 XP |
| 7-day streak bonus | +200 XP |

**Badge Milestones** (auto-awarded):
- "First Steps" -- Complete 1 lesson
- "Quick Learner" -- Complete 5 lessons
- "Quiz Whiz" -- Pass 5 quizzes
- "Course Champion" -- Complete 1 course
- "Dedicated Scholar" -- 7-day streak
- "Knowledge Master" -- Reach Level 5
- "Top of the Class" -- Reach #1 on leaderboard

---

## Part 4: Integration with Existing Features

- **Dashboard GamificationWidget**: Wire up to real `leaderboard_stats` data instead of hardcoded values
- **LessonDetail page**: On lesson completion, call `award_xp` to grant XP and update stats
- **LessonQuiz**: On quiz pass, award quiz XP
- **Streak tracking**: Check `last_activity_date` on each session, increment/reset streak accordingly

---

## Part 5: New Courses for Indian Teachers

Three new courses that don't overlap with existing content:

### Course 1: "Classroom Management for Indian Schools"
- **Category**: Pedagogy
- **Focus**: Managing large classes (40-60 students), mixed-ability groups, maintaining discipline with empathy, managing transitions between activities, parent-teacher meeting strategies
- **Modules**: Positive Discipline Strategies, Managing Large Classrooms, Building Student-Teacher Rapport

### Course 2: "NEP 2020 in Practice"
- **Category**: Policy & Curriculum
- **Focus**: Implementing India's National Education Policy 2020 -- competency-based education, multidisciplinary learning, experiential learning, continuous assessment (replacing rote exams), coding & vocational integration
- **Modules**: Understanding NEP 2020 Framework, Competency-Based Teaching, Experiential & Activity-Based Learning

### Course 3: "Regional Language & Multilingual Pedagogy"
- **Category**: Language & Communication
- **Focus**: Teaching in multilingual Indian classrooms where students speak different home languages, using mother tongue as a bridge, translanguaging strategies, creating bilingual resources, language-sensitive subject teaching
- **Modules**: Multilingual Classroom Strategies, Mother Tongue-Based Education, Creating Bilingual Learning Materials

Each course will have 2-3 modules with 2-3 lessons each, following the existing format with content, practical examples, key takeaways, and quiz data.

---

## Technical Details

### Files to Create
- `src/components/Leaderboard.tsx` -- Leaderboard table component with rankings, medals, and filters
- `src/hooks/useLeaderboard.ts` -- Hook to fetch leaderboard data and current user rank
- `src/hooks/useXPSystem.ts` -- Hook with `awardXP()` function and streak management

### Files to Modify
- `src/pages/Community.tsx` -- Replace placeholder with real Leaderboard component
- `src/components/GamificationWidget.tsx` -- Fetch from `leaderboard_stats` instead of using hardcoded props
- `src/pages/Dashboard.tsx` -- Pass real data to GamificationWidget
- `src/pages/LessonDetail.tsx` -- Trigger XP award on lesson/quiz completion
- `src/data/additionalCourses.ts` -- Add 3 new courses
- `src/data/quizData.ts` -- Add quiz questions for new course lessons

### Database Migration
- Create `leaderboard_stats` table with RLS policies
- Create `award_xp` database function
- Create trigger to auto-create `leaderboard_stats` row when a new user signs up (reuse the existing `handle_new_user` pattern)

