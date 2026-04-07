import { Course } from "./courseData";

export const modernTeacherCourses: Course[] = [
  {
    id: "social-emotional-learning",
    title: "Social-Emotional Learning (SEL) for Teachers",
    description: "Build emotionally intelligent classrooms — teach empathy, self-regulation, responsible decision-making, and conflict resolution to create a safe, thriving learning environment.",
    longDescription: "Social-Emotional Learning is no longer a 'nice to have' — it's essential. This course equips teachers with practical SEL strategies they can embed into daily routines, reducing behavioral issues and improving academic outcomes. Learn to model emotional intelligence, facilitate circle time, and help students develop self-awareness, empathy, and resilience.",
    category: "Wellbeing",
    duration: "3 weeks",
    students: 3450,
    rating: 4.9,
    aiPowered: false,
    instructor: "Dr. Kavitha Menon",
    instructorBio: "Clinical psychologist turned educator. 15 years training teachers in SEL across 200+ schools in India. CASEL-certified facilitator.",
    modules: [
      {
        id: "sel-m1",
        title: "Building Self-Awareness & Self-Regulation",
        description: "Help students (and yourself) identify emotions and develop healthy coping strategies",
        lessons: [
          {
            id: "sel-m1-l1",
            title: "The Emotion Check-In: Starting Every Class Right",
            duration: "8 min",
            description: "Implement daily emotion check-ins that build self-awareness and create a psychologically safe classroom.",
            content: `# The Emotion Check-In: Starting Every Class Right

## Why Emotions Matter in Learning

Neuroscience is clear: students cannot learn when they're in a heightened emotional state. An anxious, angry, or deeply sad student literally cannot access the prefrontal cortex — the brain region responsible for learning, reasoning, and memory.

## The 2-Minute Emotion Check-In

Start every class with a quick, non-invasive emotional temperature check:

### Method 1: The Feelings Thermometer
- Draw a thermometer on the board (1-5 scale)
- 1 = Very low/upset, 3 = Okay, 5 = Great
- Students hold up fingers or write on slates
- You get instant data on who needs extra support today

### Method 2: Emoji Cards
- Give each student 4 emoji cards: Happy, Neutral, Worried, Upset
- Students place one face-down on their desk at the start of class
- Teacher walks around and notes — no public disclosure required
- Follow up privately with any student showing "Worried" or "Upset"

### Method 3: Weather Report
- "How's your inner weather today?"
- Sunny = Great, Cloudy = Okay, Rainy = Struggling, Stormy = Really tough
- Students can say it aloud or write on a sticky note

## What To Do With the Data

- If 1-2 students are struggling: Private check-in during independent work time
- If half the class is low: Start with a fun brain break or calming activity before content
- If a student is consistently low: Flag for counselor or parent conversation

## Teacher Self-Check

Before you check on students, check yourself:
- "How am I feeling right now?"
- Students can sense a teacher's emotional state
- If you're stressed, take 3 deep breaths before entering the classroom
- Model: "I'm feeling a bit tired today, but I'm happy to be here with you"`,
            practicalExample: {
              title: "Implementing Emotion Check-Ins in a Class 6 Section",
              scenario: "You teach 45 students in Class 6. Several students come from difficult home situations. Morning classes often start with students arguing or distracted.",
              steps: [
                "Day 1: Introduce the Feelings Thermometer. Explain: 'This helps me understand how you're doing so I can teach better.'",
                "Practice: Everyone holds up fingers — no judgment, no questions asked publicly",
                "Week 1: Do the check-in every single day without fail — build the habit",
                "Week 2: Start privately checking in with students who consistently show 1-2",
                "Week 3: Ask students: 'Has this helped? Should we keep doing it?'",
                "Month 2: Students start self-regulating — 'Miss, I'm at a 2 today, can I sit at the calm corner for 5 minutes?'"
              ],
              tips: [
                "Never force a student to explain WHY they feel a certain way publicly",
                "Keep it to 2 minutes — it shouldn't eat into lesson time",
                "Celebrate honesty: 'Thank you for being honest about how you feel'",
                "Create a 'Calm Corner' with a few cushions where students can self-regulate for 5 minutes"
              ]
            },
            keyTakeaways: [
              "Students can't learn when they're emotionally overwhelmed — SEL is academic strategy",
              "A 2-minute emotion check-in gives you real-time data on your class's readiness to learn",
              "Never force public emotional disclosure — offer choice in how students share",
              "Teacher self-awareness models the behavior you want from students"
            ]
          },
          {
            id: "sel-m1-l2",
            title: "Teaching Self-Regulation Strategies",
            duration: "9 min",
            description: "Equip students with practical tools to manage anger, anxiety, and frustration in the classroom.",
            content: `# Teaching Self-Regulation Strategies

## What Is Self-Regulation?

Self-regulation is the ability to manage your emotions, thoughts, and behaviors effectively. It's NOT about suppressing emotions — it's about choosing HOW to respond.

## Age-Appropriate Strategies

### For Primary (Classes 1-5)
- **Belly Breathing**: Hand on belly, breathe in for 4, out for 4. "Make your belly rise like a balloon."
- **5-4-3-2-1 Grounding**: Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste
- **The Turtle Technique**: When upset, "go into your shell" — stop, tuck (cross arms), breathe, think, come out with a plan
- **Emotion Vocabulary**: Build a feelings wall — "I'm not just 'angry,' I'm frustrated/disappointed/embarrassed"

### For Middle School (Classes 6-8)
- **STOP Method**: Stop → Take a breath → Observe (what am I feeling?) → Proceed (what's the best response?)
- **Journaling**: 5-minute "brain dump" writing when feeling overwhelmed
- **Progressive Muscle Relaxation**: Tense and release muscle groups — works even at a desk
- **Cognitive Reframing**: "This is terrible" → "This is challenging but I can handle it"

### For High School (Classes 9-12)
- **Mindful Observation**: 1-minute silent observation of breath, sounds, or sensations
- **Stress Mapping**: Identify triggers, physical symptoms, and coping strategies
- **Values-Based Decision Making**: "What kind of person do I want to be in this moment?"

## The Calm Corner

Create a designated space in your classroom (even just a chair and a poster):
- Breathing exercise poster on the wall
- Stress ball or fidget tool
- Timer (2-5 minutes)
- Rule: Anyone can use it anytime, no questions asked, max 5 minutes
- Teach students to self-select: "I need a moment" → go to calm corner → return when ready`,
            practicalExample: {
              title: "Setting Up a Calm Corner and Teaching Self-Regulation to Class 4",
              scenario: "Your Class 4 section has frequent meltdowns, arguments, and difficulty transitioning between activities.",
              steps: [
                "Create a Calm Corner: One desk in a quiet spot, breathing poster, timer, stress ball",
                "Week 1: Teach the Turtle Technique to the whole class through role-play",
                "Practice: 'Let's all pretend we're upset because someone took our pencil. Show me the turtle!'",
                "Week 2: Introduce the Calm Corner. Model its use: 'Watch me. I'm feeling frustrated, so I'm going to the calm corner for 3 minutes.'",
                "Week 3: Students start using it independently — celebrate: 'Ravi noticed he was getting angry and chose to calm down. That's very mature!'",
                "Month 2: Meltdowns reduce significantly. Students remind EACH OTHER: 'Maybe try the calm corner?'"
              ],
              tips: [
                "The calm corner is NOT punishment — never send students there as discipline",
                "Limit to 5 minutes to prevent avoidance behavior",
                "Refresh the calm corner monthly with new breathing exercises or fidgets",
                "Teach the whole class so there's no stigma — everyone uses it"
              ]
            },
            keyTakeaways: [
              "Self-regulation is a skill that must be explicitly taught — it doesn't come naturally",
              "Different age groups need different strategies — match to developmental level",
              "The Calm Corner is the most powerful classroom tool you'll ever create",
              "Model self-regulation yourself: 'I'm feeling frustrated, so I'm going to take 3 deep breaths'"
            ]
          }
        ]
      },
      {
        id: "sel-m2",
        title: "Empathy & Relationship Skills",
        description: "Foster genuine empathy and healthy relationships among students",
        lessons: [
          {
            id: "sel-m2-l1",
            title: "Circle Time: Building Classroom Community",
            duration: "8 min",
            description: "Use structured circle time to build empathy, listening skills, and a sense of belonging.",
            content: `# Circle Time: Building Classroom Community

## What Is Circle Time?

Circle time is a structured conversation format where the class sits in a circle (or U-shape) and takes turns sharing thoughts on a guided topic. It builds empathy, listening, and community.

## The Rules (Non-Negotiable)
1. **One voice at a time** — when someone speaks, everyone listens
2. **No interrupting** — wait for the talking object (ball, stick, etc.)
3. **Right to pass** — no one is forced to speak
4. **Confidentiality** — what's shared in circle stays in circle
5. **Respect** — no laughing at or mocking anyone's sharing

## Circle Time Formats

### Appreciation Circle (5 minutes)
- Each student appreciates someone: "I want to thank Anita for helping me with math yesterday"
- Builds positive relationships and a culture of gratitude

### Topic Circle (10 minutes)
- Teacher poses a question: "What's one thing that made you proud this week?"
- Students share one at a time with the talking object
- Great for building self-awareness and empathy

### Problem-Solving Circle (15 minutes)
- Address a class issue WITHOUT blaming: "We've been having trouble keeping the classroom clean. What solutions can we think of?"
- Focus on solutions, not culprits

### Story Circle (10 minutes)
- Read a short story or scenario involving a dilemma
- Students discuss: "What would you do? Why?"
- Builds moral reasoning and perspective-taking

## Making It Work in Large Classes

- Can't fit 50 students in a circle? Use U-shape or double circle
- Do mini-circles with half the class while others work independently
- Use "Pair-Share before Circle-Share" to give everyone a voice`,
            practicalExample: {
              title: "Starting Weekly Circle Time in Class 7",
              scenario: "Class 7 with 48 students. Recent increase in bullying and cliques. Students don't know each other beyond their friend groups.",
              steps: [
                "Rearrange desks into U-shape every Friday for the last 20 minutes",
                "Week 1: Appreciation Circle only. Model: 'I appreciate Suresh for always being on time.'",
                "Week 2: Topic Circle — 'What's one thing about you that most people here don't know?'",
                "Week 3: Topic Circle — 'What does being a good friend look like?'",
                "Week 4: Problem-Solving Circle — address a real class issue together",
                "Month 2: Students start requesting circle time. Bullying incidents drop."
              ],
              tips: [
                "Use a 'talking stick' or ball — only the person holding it can speak",
                "Start with easy, fun topics before moving to emotional ones",
                "Participate yourself — share genuinely, not just as a teacher",
                "If a student shares something concerning, follow up privately after"
              ]
            },
            keyTakeaways: [
              "Circle time is the most effective tool for building classroom community",
              "Clear rules make circles safe; safety enables vulnerability and growth",
              "Start with appreciation and fun topics — build trust before deeper sharing",
              "Circle time reduces bullying, builds empathy, and improves class culture"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "data-literacy-teachers",
    title: "Data Literacy & Evidence-Based Teaching",
    description: "Learn to collect, analyse, and act on student performance data to make informed teaching decisions — no complex statistics required.",
    longDescription: "In the age of data, teachers who can read student performance patterns and adjust instruction accordingly are the most effective. This course teaches practical data literacy — how to collect meaningful data through simple assessments, spot patterns, identify struggling students early, and use evidence to improve your teaching. No statistical expertise needed.",
    category: "AI & Technology",
    duration: "3 weeks",
    students: 2980,
    rating: 4.8,
    aiPowered: true,
    instructor: "Arjun Nair",
    instructorBio: "Former data scientist turned education researcher. Trains teachers in 8 Indian states on data-driven instruction. IIM Bangalore alumni.",
    modules: [
      {
        id: "dlt-m1",
        title: "Collecting Meaningful Classroom Data",
        description: "Move beyond marks to collect data that actually improves your teaching",
        lessons: [
          {
            id: "dlt-m1-l1",
            title: "Beyond Marks: What Data Really Matters",
            duration: "8 min",
            description: "Identify the types of classroom data that drive real improvement — not just test scores.",
            content: `# Beyond Marks: What Data Really Matters

## The Problem With Only Looking at Marks

Most Indian teachers have ONE data point: exam marks. This tells you WHO is struggling but not WHY or WHAT to do about it.

## The 4 Types of Classroom Data

### 1. Achievement Data (The "What")
- Test scores, assignment grades, exam marks
- Tells you: Who passed, who failed
- Doesn't tell you: Which specific concepts are problematic

### 2. Diagnostic Data (The "Where")
- Exit tickets targeting specific skills
- Error analysis: WHAT types of mistakes are students making?
- Tells you: Exactly which concepts need reteaching
- Example: 30 students got Q5 wrong → they don't understand fractions with unlike denominators

### 3. Engagement Data (The "How")
- Attendance patterns, homework completion rates
- Participation frequency, attention during class
- Tells you: Which students are disengaging and when

### 4. Growth Data (The "Progress")
- Compare start-of-unit to end-of-unit performance
- Track individual student trajectories over time
- Tells you: Is your teaching actually making a difference?

## Simple Data Collection Tools

### The Class Tracker (One Sheet of Paper)
Create a simple grid: Students × Skills
- ✓ = Got it, △ = Partially, ✗ = Not yet
- After each assessment, fill in the relevant column
- Patterns emerge immediately: Which skills does the whole class struggle with?

### The Exit Ticket Analysis
- Sort exit tickets into 3 piles: Got It, Almost, Not Yet
- Count each pile — instant data
- "Not Yet" pile tells you tomorrow's small group lesson

### The Error Log
- When marking papers, don't just score — categorize errors
- Computational error? Conceptual misunderstanding? Didn't attempt?
- Different error types need different interventions`,
            practicalExample: {
              title: "Creating a Class Tracker for Class 8 Mathematics",
              scenario: "You teach Math to 50 students. After each chapter test, you record marks but don't know which specific concepts to reteach.",
              steps: [
                "Create a grid on chart paper: Student names down the left, 6 key skills across the top (e.g., Linear Equations, Graphing, Word Problems, etc.)",
                "After the next test, don't just total marks — check each question against its skill",
                "Fill in ✓, △, or ✗ for each student × skill combination",
                "Step back and look: Which column has the most ✗ marks? That's your reteach priority",
                "Which students have ✗ across multiple skills? They need intensive support",
                "Next class: Reteach the weakest skill to the whole class, then small-group the rest"
              ],
              tips: [
                "Don't track more than 6-8 skills per unit — keep it manageable",
                "Update the tracker after EVERY assessment, not just exams",
                "Share anonymized data with students: '70% of us got graphing — let's fix that together'",
                "Use the tracker in parent meetings — specific feedback is more helpful than 'needs improvement'"
              ]
            },
            keyTakeaways: [
              "Marks tell you WHO is struggling; diagnostic data tells you WHY and WHAT to do",
              "The Class Tracker is the simplest, most powerful data tool — one sheet of paper",
              "Error analysis reveals whether students have computational or conceptual gaps",
              "Data should inform tomorrow's teaching, not just this term's report card"
            ]
          },
          {
            id: "dlt-m1-l2",
            title: "Using AI to Analyse Student Performance",
            duration: "9 min",
            description: "Leverage free AI tools to spot patterns in student data and generate actionable insights.",
            content: `# Using AI to Analyse Student Performance

## AI as Your Data Assistant

You don't need to be a statistician. AI can help you spot patterns in student data that would take hours to find manually.

## What AI Can Do With Your Data

### Pattern Detection
- Upload marks to ChatGPT/Gemini: "Here are my class marks for 3 tests. Which students are declining? Which topics are consistently weak?"
- AI spots trends you might miss in 50 rows of numbers

### Personalized Intervention Suggestions
- "Student A scored 85% on algebra but 40% on geometry. What targeted activities should I give them?"
- AI generates specific, actionable suggestions

### Report Generation
- "Create a parent-friendly summary of this student's performance across 4 tests. Highlight strengths and areas for growth."
- Save hours on report card comments

### Question Paper Analysis
- "Analyze these 30 test results. Which questions had the lowest correct rate? What concept do they test?"
- Instantly identifies your weakest teaching areas

## How to Share Data With AI Safely

### DO
- Use first names only or student numbers
- Share marks and scores
- Share question-level data

### DON'T
- Share full names with grades
- Share personal information (addresses, phone numbers)
- Share sensitive information (special needs, family situations)

## Practical AI Prompts for Teachers

1. "I have marks for 45 students across 5 tests. Find students whose performance is declining over time."
2. "These are the marks for each question on my test. Which questions were too easy, too hard, or good discriminators?"
3. "Based on these error patterns, suggest 3 reteaching strategies for fractions."`,
            practicalExample: {
              title: "Using AI to Analyze Your Class 9 Science Marks",
              scenario: "You have marks from 3 unit tests for 48 students. You want to identify at-risk students and plan interventions.",
              steps: [
                "Create a simple spreadsheet or table: Student Number, Test 1, Test 2, Test 3",
                "Paste into ChatGPT or Gemini with prompt: 'Analyze these marks. Which students are declining? Which are improving? Group students into High/Medium/Low performers.'",
                "Follow up: 'For the declining students, suggest a 2-week intervention plan I can implement in class.'",
                "Follow up: 'Which test had the hardest questions? What topics should I reteach?'",
                "Use the AI-generated groups to create differentiated activities for next week",
                "Share the improvement data with students: 'Look how many of us improved from Test 1 to Test 3!'"
              ],
              tips: [
                "Use student numbers, not names, when sharing data with AI",
                "Always verify AI's analysis — check a few students manually",
                "Save your prompts as templates — reuse them every month",
                "Combine AI analysis with your own classroom observations"
              ]
            },
            keyTakeaways: [
              "AI can spot trends in student data that humans miss when dealing with large classes",
              "Always protect student privacy — use numbers, not names, with AI tools",
              "AI-generated insights are starting points — combine with your professional judgment",
              "Regular data analysis (monthly, not just at exam time) enables timely interventions"
            ]
          }
        ]
      },
      {
        id: "dlt-m2",
        title: "Acting on Data: The Reteach Cycle",
        description: "Turn data insights into immediate classroom action",
        lessons: [
          {
            id: "dlt-m2-l1",
            title: "The Teach-Assess-Reteach Cycle",
            duration: "8 min",
            description: "Implement a continuous improvement cycle that closes learning gaps before they widen.",
            content: `# The Teach-Assess-Reteach Cycle

## The Cycle That Transforms Teaching

The most effective teachers worldwide follow a simple cycle:
1. **Teach** a concept
2. **Assess** understanding (exit ticket, quiz, observation)
3. **Analyze** results (who got it, who didn't, what went wrong)
4. **Reteach** using a DIFFERENT approach for those who didn't get it
5. **Reassess** to confirm learning

## Why "Reteach" ≠ "Repeat"

Doing the same lesson slower or louder doesn't help. Reteaching means:
- Different explanation (analogy, visual, hands-on)
- Different grouping (small group, peer tutoring, one-on-one)
- Different entry point (start from what they DO understand)

## The 3-Group Model

After any assessment, your class falls into 3 groups:
- **Got It (60-70%)**: Ready to move on or extend
- **Almost (20-25%)**: Need one more attempt with a different approach
- **Not Yet (5-15%)**: Need intensive, small-group support

### Simultaneous Teaching Plan
- **Got It group**: Independent practice, extension activity, or peer tutoring
- **Almost group**: Teacher-led mini-lesson (10 minutes) with different examples
- **Not Yet group**: Hands-on, concrete manipulation, or one-on-one time

## Making It Work in Indian Schools

You don't need 3 separate rooms:
- Got It group works at their seats independently
- Almost group sits in the first 2 rows for a quick reteach
- Not Yet group (3-5 students) sits at teacher's desk for focused support
- Total reteach time: 15 minutes of one class period`,
            practicalExample: {
              title: "Running a Reteach Session After a Class 7 Maths Quiz",
              scenario: "You gave a 5-question quiz on percentages. Results: 28 Got It, 12 Almost, 5 Not Yet.",
              steps: [
                "Got It group: 'Here are 5 extension word problems on percentage increase/decrease. Work independently.'",
                "Almost group (first 2 rows): 'Let's try percentages using money examples. If a shirt costs ₹500 and there's a 20% discount...'",
                "Not Yet group (teacher's desk): 'Let's start with halves. What is half of 100? Good, that's 50%. Now what is half of 200?'",
                "Use physical manipulatives — 10 blocks representing 100%, remove blocks for percentage",
                "After 15 minutes: Quick 2-question check for Almost and Not Yet groups",
                "If still struggling: Assign a 'Got It' student as their study buddy for tomorrow"
              ],
              tips: [
                "Always reteach the SAME DAY or NEXT DAY — don't let gaps grow",
                "The Not Yet group needs concrete/physical approaches, not more abstract explanation",
                "Got It students benefit from extension, not repetition — keep them challenged",
                "Track which students move between groups over time — celebrate growth"
              ]
            },
            keyTakeaways: [
              "Reteaching is not repeating — use a fundamentally different approach",
              "The 3-group model lets you differentiate within one classroom period",
              "Immediate reteaching (same or next day) is exponentially more effective than waiting for exams",
              "Track student movement between groups to celebrate progress and catch persistent gaps"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "inclusive-special-needs",
    title: "Inclusive Education & Special Needs Support",
    description: "Create truly inclusive classrooms that support students with learning disabilities, ADHD, autism, and other special needs — practical strategies that work without specialist resources.",
    longDescription: "With India's Right to Education Act mandating inclusion, teachers need practical skills to support diverse learners. This course covers identifying learning difficulties, simple classroom accommodations, differentiated instruction for special needs students, and building a classroom culture where every student belongs. No specialist training required — just practical, compassionate strategies.",
    category: "Pedagogy",
    duration: "4 weeks",
    students: 3670,
    rating: 4.9,
    aiPowered: false,
    instructor: "Dr. Sunita Raghavan",
    instructorBio: "Special educator with 22 years of experience. Trained 15,000+ mainstream teachers in inclusive practices across CBSE, ICSE, and state board schools.",
    modules: [
      {
        id: "isn-m1",
        title: "Understanding Learning Differences",
        description: "Identify common learning differences and understand how they affect classroom performance",
        lessons: [
          {
            id: "isn-m1-l1",
            title: "Recognising Learning Difficulties in Your Classroom",
            duration: "9 min",
            description: "Learn to spot signs of dyslexia, dyscalculia, ADHD, and autism in everyday classroom situations.",
            content: `# Recognising Learning Difficulties in Your Classroom

## Why Early Recognition Matters

In India, an estimated 15-20% of students have some form of learning difference. Most are never identified — they're simply labeled "lazy," "careless," or "not interested." Early recognition changes everything.

## Common Learning Differences

### Dyslexia (Reading Difficulty)
Signs to watch for:
- Reads very slowly, often losing place
- Confuses similar-looking letters (b/d, p/q)
- Spells the same word differently each time
- Strong verbal skills but weak written output
- Avoids reading aloud
**NOT a sign of low intelligence** — many dyslexic students are highly creative and intelligent

### Dyscalculia (Math Difficulty)
Signs to watch for:
- Struggles with basic number facts even after repeated practice
- Cannot tell time on an analog clock
- Difficulty with money calculations
- Gets confused by multi-step problems
- Uses fingers for basic calculations well beyond primary school

### ADHD (Attention Difficulty)
Signs to watch for:
- Cannot sit still, constantly fidgeting
- Starts tasks but rarely finishes
- Blurts out answers without raising hand
- Forgets instructions given 30 seconds ago
- Brilliant in subjects they're interested in, struggles elsewhere

### Autism Spectrum
Signs to watch for:
- Difficulty with social interactions and friendships
- Very strong interests in specific topics
- Upset by changes in routine
- Literal understanding of language
- Sensory sensitivities (noise, light, touch)

## What To Do When You Suspect a Learning Difference

1. **Document**: Note specific observations over 2-3 weeks
2. **Don't diagnose**: You're a teacher, not a psychologist — observe and support
3. **Talk to parents**: Share observations with care and sensitivity
4. **Accommodate**: Start classroom adjustments immediately — don't wait for a diagnosis
5. **Refer**: Connect family with school counselor or district resource center`,
            practicalExample: {
              title: "Identifying and Supporting a Student With Suspected Dyslexia",
              scenario: "Rahul, Class 5, is bright and articulate in discussions but his writing is nearly illegible, his spelling is inconsistent, and he avoids reading aloud. His previous teachers said he was 'lazy.'",
              steps: [
                "Week 1-2: Document specific observations — don't just note 'poor writing,' note patterns (letter reversals, spelling inconsistencies, reading speed)",
                "Check: Can Rahul answer comprehension questions verbally? If yes, the problem is likely with reading/writing, not understanding",
                "Immediate accommodations: Allow verbal answers for some assessments, give extra time for writing, reduce copying from the board",
                "Talk to parents sensitively: 'Rahul is very intelligent. I've noticed some patterns in his reading and writing that I'd like us to explore together.'",
                "Refer to school counselor or district CWSN (Children With Special Needs) resource center",
                "Continue accommodations regardless of diagnosis outcome — they help the student either way"
              ],
              tips: [
                "Frame observations as strengths first: 'Rahul is excellent at verbal reasoning AND struggles with written output'",
                "Never use the word 'disability' with parents in the first conversation",
                "Many parents fear stigma — reassure them that support helps, it doesn't label",
                "Accommodations like extra time and verbal assessment help ALL students, not just those with learning differences"
              ]
            },
            keyTakeaways: [
              "15-20% of students have learning differences — most are unidentified in Indian schools",
              "Learning difficulties are NOT about intelligence — many affected students are highly capable",
              "Teachers should observe and accommodate, not diagnose",
              "Start accommodations immediately — don't wait for a formal diagnosis"
            ]
          },
          {
            id: "isn-m1-l2",
            title: "Simple Classroom Accommodations That Work",
            duration: "8 min",
            description: "Implement practical, low-cost accommodations that support diverse learners without disrupting the whole class.",
            content: `# Simple Classroom Accommodations That Work

## The Universal Design Principle

The best accommodations help the targeted student AND benefit the whole class. Think of them as good teaching, not special treatment.

## Accommodations by Category

### Seating & Environment
- **Preferential seating**: Near the teacher, away from windows/doors (reduces distraction)
- **Quiet corner**: A low-stimulation area for students who get overwhelmed
- **Standing option**: Some students focus better standing — allow it at the back
- **Fidget tools**: Stress balls, rubber bands on chair legs — channel movement without disruption

### Instruction & Presentation
- **Multi-modal teaching**: Say it, show it, do it — never rely on just one mode
- **Chunked instructions**: Give 1-2 steps at a time, not 5 at once
- **Visual schedules**: Post the day's agenda — reduces anxiety for students who need predictability
- **Highlighted text**: Use colour to mark key information in worksheets

### Assessment & Output
- **Extra time**: 25-50% more time for tests — the simplest and most impactful accommodation
- **Verbal assessment option**: Let students demonstrate knowledge through speaking instead of writing
- **Reduced quantity**: 10 problems instead of 20 — same skills, less overwhelm
- **Scribe permission**: For students with severe writing difficulties, allow a classmate to write their dictated answers

### Organizational Support
- **Colour-coded subjects**: Each subject = one colour for notebooks, folders
- **Checklist format**: Convert long instructions into numbered checklists
- **Assignment notebook**: Help students write down homework EVERY day — check it before they leave
- **Buddy system**: Pair with a responsible classmate who can help with organization

## The Accommodation Card

Create a small card for each student who needs accommodations:
- List 3-4 specific supports they receive
- Keep at your desk for reference
- Share with substitute teachers
- Update every term based on what's working`,
            practicalExample: {
              title: "Creating an Accommodation Plan for 3 Students in Your Class",
              scenario: "You have 46 students. 3 have identified needs: one with ADHD, one with dyslexia, one with mild autism.",
              steps: [
                "ADHD student: Seat in front row, allow standing at back during long lessons, give instructions one at a time, fidget ball",
                "Dyslexia student: Extra time on tests, option for verbal assessment, larger font on worksheets, reduce written homework by 30%",
                "Autism student: Fixed daily schedule posted on board, 2-minute warning before transitions, designated quiet corner, social story cards",
                "Create accommodation cards for all 3 — keep at your desk",
                "Brief your classroom assistant (if available) on each student's needs",
                "Review accommodations monthly: What's working? What needs adjustment?"
              ],
              tips: [
                "Many accommodations (visual schedules, chunked instructions) benefit ALL students",
                "Don't announce accommodations publicly — implement quietly",
                "Other students may ask 'Why does she get extra time?' Answer: 'Everyone gets what they need to do their best.'",
                "Start with 2-3 accommodations per student — don't overwhelm yourself"
              ]
            },
            keyTakeaways: [
              "The best accommodations help the targeted student and benefit the whole class",
              "Start simple: extra time, preferential seating, and multi-modal teaching go a long way",
              "Accommodate quietly — fairness doesn't mean everyone gets the same, it means everyone gets what they need",
              "Review and adjust accommodations regularly — what works in April may not work in October"
            ]
          }
        ]
      },
      {
        id: "isn-m2",
        title: "Building an Inclusive Classroom Culture",
        description: "Create a classroom where every student feels they belong, regardless of ability",
        lessons: [
          {
            id: "isn-m2-l1",
            title: "From Integration to True Inclusion",
            duration: "8 min",
            description: "Move beyond 'placing students in the same room' to creating genuine belonging and participation.",
            content: `# From Integration to True Inclusion

## Integration ≠ Inclusion

- **Integration**: The student is in the room but expected to keep up with everyone else
- **Inclusion**: The classroom is designed so everyone can participate meaningfully

## The Inclusion Checklist

Ask yourself daily:
- Can every student ACCESS today's lesson? (Can they see the board, hear instructions, read the material?)
- Can every student PARTICIPATE in today's activity? (Is there a role for every ability level?)
- Can every student DEMONSTRATE learning? (Are there multiple ways to show understanding?)

## Strategies for True Inclusion

### Flexible Grouping
- Mix ability levels for collaborative tasks
- Assign roles based on strengths (the student with ADHD might be the best "energy manager")
- Rotate groups regularly — avoid permanent "low group" labels

### Multiple Means of Representation
Present every key concept at least 2 ways:
- Visual diagram + verbal explanation
- Written text + hands-on demonstration
- Video + class discussion

### Multiple Means of Expression
Let students show learning in different ways:
- Write an essay OR create a poster OR give a presentation OR build a model
- Same learning, different output format
- Choice increases engagement for ALL students

### Peer Support Systems
- Buddy reading: Stronger reader reads aloud, partner follows along
- Peer tutoring: Students who master a concept teach others (benefits BOTH students)
- Collaborative note-taking: One student takes notes, shares with a partner who struggles with writing

## Talking About Differences

Age-appropriate conversations build empathy:
- "Everyone's brain works differently. Some people learn best by seeing, some by hearing, some by doing."
- "Needing help isn't weakness — asking for help is brave and smart."
- Read stories featuring characters with disabilities — normalize, don't pity`,
            practicalExample: {
              title: "Redesigning a Class 6 Science Lesson for True Inclusion",
              scenario: "Class 6 Science lesson on 'Parts of a Flower.' One student has low vision, one has dyslexia, one has ADHD, and 42 others with varying abilities.",
              steps: [
                "Representation: Large printed diagram (low vision), actual flower on each desk (hands-on), teacher explanation (auditory)",
                "Participation: ALL students dissect their flower, label parts on large sheets (not tiny worksheets)",
                "Roles: ADHD student is the 'Materials Manager' (gets to move), dyslexia student does the diagram (strength in visual), low vision student does the verbal description",
                "Expression: Students choose — labeled diagram, written description, verbal explanation to partner, or 3D model with clay",
                "Assessment: Teacher checks in with each group, asks questions verbally (not just written test)",
                "Celebration: Display ALL student work, not just the 'best' ones"
              ],
              tips: [
                "Plan for inclusion at the design stage — not as an afterthought",
                "The strongest inclusive lessons are the best lessons for EVERYONE",
                "If you plan for the student with the most needs, everyone else will be fine",
                "Celebrate different types of excellence, not just academic marks"
              ]
            },
            keyTakeaways: [
              "Integration puts students in the room; inclusion ensures they can participate and belong",
              "Multiple means of representation, expression, and engagement benefit ALL learners",
              "Peer support systems are powerful — they benefit both the helper and the helped",
              "Plan for inclusion at the design stage, not as an afterthought accommodation"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mental-health-burnout",
    title: "Teacher Mental Health & Burnout Prevention",
    description: "Protect your own mental health while caring for students — recognise burnout signs, build resilience, set boundaries, and create sustainable teaching practices.",
    longDescription: "Teaching is one of the most emotionally demanding professions. Indian teachers face unique pressures: large classes, administrative burden, parent expectations, and exam culture. This course helps teachers recognize the signs of burnout, build personal resilience strategies, set healthy boundaries, and create a sustainable teaching career. You can't pour from an empty cup.",
    category: "Wellbeing",
    duration: "2 weeks",
    students: 4210,
    rating: 4.9,
    aiPowered: false,
    instructor: "Dr. Preeti Sharma",
    instructorBio: "Counselling psychologist specializing in teacher wellbeing. Conducted workshops for 5,000+ teachers. Author of 'The Teacher's Wellbeing Handbook.'",
    modules: [
      {
        id: "mhb-m1",
        title: "Understanding & Preventing Burnout",
        description: "Recognise the stages of burnout and intervene before it's too late",
        lessons: [
          {
            id: "mhb-m1-l1",
            title: "Recognising the Signs of Teacher Burnout",
            duration: "8 min",
            description: "Identify early warning signs of burnout in yourself and colleagues before they become serious.",
            content: `# Recognising the Signs of Teacher Burnout

## The Burnout Epidemic in Teaching

Studies show that 40-50% of teachers experience significant burnout symptoms. In India, this is compounded by large class sizes, administrative burden, exam pressure, and the emotional labor of caring for 200+ students daily.

## The 3 Dimensions of Burnout

### 1. Emotional Exhaustion
- Feeling drained before the day even starts
- Dreading going to school
- Crying or feeling overwhelmed more often than usual
- Difficulty sleeping or sleeping too much
- Physical symptoms: headaches, stomach issues, frequent illness

### 2. Depersonalisation (Cynicism)
- Feeling detached from students
- Thinking "I don't care anymore"
- Becoming sarcastic or impatient more often
- Avoiding colleagues and staffroom conversations
- Counting days until vacation

### 3. Reduced Personal Accomplishment
- Feeling like nothing you do makes a difference
- Questioning your career choice
- Comparing yourself unfavorably to other teachers
- Losing creativity and enthusiasm for lessons
- Going through the motions without passion

## The Burnout Stages

### Stage 1: Honeymoon (Everything is exciting)
### Stage 2: Onset of Stress (Occasional bad days)
### Stage 3: Chronic Stress (Most days feel hard)
### Stage 4: Burnout (Functioning but suffering)
### Stage 5: Habitual Burnout (Seriously impacting health and relationships)

## Self-Assessment

Rate yourself 1-5 on these statements (5 = strongly agree):
1. I feel emotionally drained by my work
2. I feel I'm losing enthusiasm for teaching
3. I feel I'm not making a meaningful difference
4. I have difficulty sleeping because of work stress
5. I dread Monday mornings

Score 15+: Take immediate action. Score 10-14: Warning signs — implement prevention strategies. Score 5-9: You're managing well — maintain your strategies.`,
            practicalExample: {
              title: "Running a Self-Care Check-In for Your Staff Room",
              scenario: "You notice several colleagues showing burnout signs — irritability, fatigue, negative talk about students. You want to start a supportive conversation.",
              steps: [
                "Share the self-assessment questionnaire informally — 'I found this interesting, let's all try it'",
                "Create a safe space: 'No judgment, this is just for self-awareness'",
                "Discuss results privately or in small trusted groups — NOT in front of administration",
                "Brainstorm together: 'What's one thing we can do to support each other this term?'",
                "Propose one small change: shared tea break, no-work Sundays, walk during lunch",
                "Check in monthly: 'How's everyone doing? What's helping, what isn't?'"
              ],
              tips: [
                "Don't force vulnerability — some colleagues won't want to share, and that's okay",
                "Lead by example: 'I scored 12 on this assessment, and I've decided to stop taking work home on Fridays'",
                "Burnout is a SYSTEM problem, not a personal failure — advocate for structural changes too",
                "If a colleague is at Stage 4-5, encourage professional counseling support"
              ]
            },
            keyTakeaways: [
              "Burnout is not weakness — it's the result of sustained emotional and physical demands",
              "The 3 dimensions (exhaustion, cynicism, reduced accomplishment) help you identify specific symptoms",
              "Early recognition is key — Stage 2-3 intervention is much easier than Stage 4-5 recovery",
              "Burnout is a system issue, not just a personal one — advocate for structural support"
            ]
          },
          {
            id: "mhb-m1-l2",
            title: "Building Your Resilience Toolkit",
            duration: "9 min",
            description: "Develop practical, daily resilience habits that protect against burnout without adding more to your plate.",
            content: `# Building Your Resilience Toolkit

## Resilience Is Not "Toughing It Out"

Resilience doesn't mean enduring suffering. It means having strategies that replenish your energy so you can sustain a long, fulfilling teaching career.

## The 5 Pillars of Teacher Resilience

### 1. Boundaries
- **Work hours**: Set a specific time to stop working each day (e.g., 7 PM)
- **Phone boundaries**: Turn off school WhatsApp groups after 8 PM
- **Emotional boundaries**: You can care about students without carrying their trauma home
- The rule: "I can be a great teacher AND have a life outside school"

### 2. Recovery Routines
- **Daily micro-recovery**: 10 minutes of something you enjoy EVERY day (tea, music, walk)
- **Weekly recovery**: One activity that fully recharges you (sport, hobby, friends)
- **Term breaks**: FULLY disconnect — no lesson planning the first 3 days of vacation
- **The transition ritual**: On the way home, do something that signals "work is done" (specific music, a walk, change clothes)

### 3. Professional Support
- **Find your people**: 2-3 colleagues who understand and support you
- **Peer coaching**: Regular conversations about teaching challenges (not complaints — solutions)
- **Professional development**: Learning new things combats stagnation

### 4. Meaning & Purpose
- **Keep a "wins" journal**: Write 3 good things that happened each day in school
- **Save student messages**: Create a folder of thank-you notes, drawings, or messages
- **Remember your "why"**: Reconnect regularly with the reason you became a teacher
- **Track impact**: Note moments where your teaching made a visible difference

### 5. Physical Health
- **Sleep**: 7-8 hours is non-negotiable — it's your #1 resilience tool
- **Movement**: Even 20 minutes of walking daily reduces burnout symptoms
- **Nutrition**: Don't skip lunch — your brain needs fuel
- **Hydration**: Keep water at your desk — dehydration causes fatigue and headaches`,
            practicalExample: {
              title: "Creating Your Personal Resilience Plan",
              scenario: "You're in Stage 2-3 of burnout — stressed but functioning. You want to build resilience before things get worse.",
              steps: [
                "Write down your non-negotiable boundary: 'I will not do schoolwork after 8 PM on weekdays'",
                "Choose one daily micro-recovery: '10 minutes of music with tea before bed'",
                "Identify your 2-3 support colleagues — schedule a monthly coffee/walk",
                "Start a 'wins' journal — set a phone reminder for 9 PM to write 3 good things",
                "Create a transition ritual: 'On my drive home, I listen to my favorite podcast. When I park, work is done.'",
                "Review after 2 weeks: What's helping? What needs adjustment?"
              ],
              tips: [
                "Start with ONE strategy, not five — sustainable change is gradual",
                "Tell someone your boundary — accountability helps",
                "The 'wins' journal is the single most effective burnout prevention tool",
                "If you're at Stage 4+, these strategies help but you also need professional support — there's no shame in counseling"
              ]
            },
            keyTakeaways: [
              "Resilience is about replenishment, not endurance — take care of yourself to care for students",
              "Boundaries are the foundation — set clear work hours and stick to them",
              "The 'wins' journal combats the negativity bias that fuels burnout",
              "Start with one strategy today — don't wait until you're already burned out"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "parent-communication-mastery",
    title: "Parent Communication & Engagement Mastery",
    description: "Master the art of communicating with parents — handle difficult conversations, run effective PTMs, leverage WhatsApp professionally, and build genuine home-school partnerships.",
    longDescription: "Effective parent communication is one of the most impactful yet least taught skills in teacher training. This course covers everything from running productive parent-teacher meetings to handling angry parents, communicating student concerns with sensitivity, and building year-long engagement strategies. Specially designed for the Indian context where WhatsApp groups, cultural sensitivities, and diverse family backgrounds shape communication.",
    category: "General",
    duration: "2 weeks",
    students: 3890,
    rating: 4.8,
    aiPowered: false,
    instructor: "Lakshmi Sundaram",
    instructorBio: "School principal for 12 years, now trains teachers in communication skills. Led parent engagement transformation in 50+ schools across South India.",
    modules: [
      {
        id: "pcm-m1",
        title: "Effective Parent-Teacher Meetings",
        description: "Run PTMs that build trust and lead to actionable outcomes",
        lessons: [
          {
            id: "pcm-m1-l1",
            title: "The 10-Minute PTM That Changes Everything",
            duration: "8 min",
            description: "Structure parent-teacher meetings to be focused, productive, and relationship-building — even when you have 50 parents to meet.",
            content: `# The 10-Minute PTM That Changes Everything

## The Problem With Traditional PTMs

Most PTMs in Indian schools:
- Are 2-3 minutes per parent (not enough for meaningful conversation)
- Focus only on marks ("Your child scored 67 in math")
- Leave parents feeling either judged or uninformed
- Don't result in any actionable follow-up

## The 3-3-3-1 Structure (10 Minutes)

### First 3 Minutes: Connection & Strengths
- Start ALWAYS with something positive and specific
- "Ananya has been showing great leadership in group work this month"
- "Rohit's handwriting has improved significantly since October"
- This builds trust and makes parents receptive to what comes next

### Next 3 Minutes: Areas for Growth
- Frame concerns as growth opportunities, not deficits
- Use specific examples with evidence
- "Ananya sometimes rushes through her math work. When she takes her time, she gets 90%. When she rushes, 60%."
- Avoid vague criticism: "needs improvement" tells parents nothing

### Next 3 Minutes: Partnership Plan
- Collaboratively create 1-2 specific actions
- School action: "I'll check her work before she submits to build the habit of reviewing"
- Home action: "Could you spend 10 minutes checking her math homework to ensure she's shown her working?"
- Write it down — both teacher and parent keep a copy

### Final 1 Minute: Positive Close
- End with encouragement: "I'm confident Ananya will do very well with our support"
- Set a follow-up: "Let's check in after 3 weeks — I'll send you a WhatsApp update"

## Handling 50 Parents in One Day

- Schedule 10-minute slots with 2-minute buffers
- Prepare a one-page summary for each student BEFORE the day
- Have student portfolios (notebooks, tests, projects) ready
- Use a timer — respect both your time and waiting parents'
- For students needing longer conversations, schedule a separate meeting`,
            practicalExample: {
              title: "Preparing and Running PTM Day for Class 5",
              scenario: "45 parents expected. You have 4 hours. Some parents will be anxious, some disengaged, some angry about marks.",
              steps: [
                "Day before: Prepare a one-page summary for each student — 2 strengths, 1 growth area, 1 suggestion for home",
                "Set up: Student notebooks and one test paper on each desk for parents to review while waiting",
                "Greet each parent with a warm smile and use the student's name positively first",
                "Follow the 3-3-3-1 structure — keep your summary card visible for reference",
                "For angry parents: Listen fully before responding. 'I understand your concern. Let me share what I've observed...'",
                "End each meeting: 'Thank you for coming. Priya is lucky to have parents who care so much.'",
                "After PTM: Send a WhatsApp summary to each parent with the agreed action points"
              ],
              tips: [
                "Never compare a student to another student in front of their parent",
                "If a parent doesn't come, send a personalized WhatsApp summary — don't skip them",
                "Keep tissue paper nearby — some parents get emotional. That's okay.",
                "For non-Hindi/English speaking parents, arrange a translator (student peer or colleague)"
              ]
            },
            keyTakeaways: [
              "Always start with specific positives — it's not flattery, it builds trust for honest conversation",
              "Frame concerns as growth opportunities with specific examples, not vague criticism",
              "The partnership plan makes parents feel like allies, not adversaries",
              "A warm, structured 10 minutes is more effective than a rushed, unfocused 30 minutes"
            ]
          },
          {
            id: "pcm-m1-l2",
            title: "WhatsApp Communication: Professional & Effective",
            duration: "7 min",
            description: "Use WhatsApp groups and individual messages professionally to strengthen home-school connection.",
            content: `# WhatsApp Communication: Professional & Effective

## The WhatsApp Reality in Indian Schools

WhatsApp is THE communication tool between Indian schools and parents. But without clear norms, it becomes a source of stress for teachers — midnight messages, complaint threads, and misinformation.

## Setting Up Your Class WhatsApp Group

### Ground Rules (Share on Day 1)
1. This group is for school updates ONLY — no personal messages, forwards, or memes
2. Admin-only posting (only teacher posts) with open replies during set hours
3. Query hours: 8 AM - 8 PM only. Messages outside hours will be answered next day
4. For urgent matters, call the school office — don't send WhatsApp messages
5. No discussing other children or teachers in the group

### What TO Post
- Homework reminders (not the answers!)
- Photos of class activities (with parental consent)
- Upcoming events and schedule changes
- Appreciation: "Today's star student for neatness: Priya! 🌟"
- Quick tips: "5 ways to help your child with reading at home"

### What NOT to Post
- Individual student marks or behavior issues (always private message)
- Complaints or negative feedback about any student
- Personal content (Good morning messages, festival forwards)
- Anything you wouldn't say in a school assembly

## Individual Parent WhatsApp Messages

### The Sandwich Method
- Positive → Concern → Positive
- "Hi Mrs. Sharma! Rohit was very enthusiastic in science today 🔬. I noticed he hasn't submitted his Hindi homework for 3 days. Could you check in with him about it? He's such a capable student, I know he can get back on track. Thanks! 🙏"

### Documentation
- Screenshot important conversations
- Never discuss anything sensitive over text — "Can we schedule a call or meeting to discuss this?"
- Keep language professional even when parents are angry`,
            practicalExample: {
              title: "Setting Up and Managing a Professional Class WhatsApp Group",
              scenario: "New academic year. You're creating the Class 4 parent WhatsApp group. Last year's group was chaotic — parents posted memes, complained about each other, and messaged at midnight.",
              steps: [
                "Create the group with a clear name: 'Class 4A - [School Name] - Official Updates'",
                "First message: Welcome + ground rules (type them out, don't just send a photo)",
                "Set group to 'Admin Only' posting initially — parents can reply but not post",
                "Day 1: Post a welcome message with your photo and a brief introduction",
                "Week 1: Post homework updates daily at 3 PM (build the habit)",
                "Week 2: Share a photo of a class activity with caption — parents love seeing their children learning",
                "Monthly: Send a group summary — 'This month in Class 4A: We learned about fractions, completed our art project, and had 95% attendance!'"
              ],
              tips: [
                "Set WhatsApp to 'Do Not Disturb' after 8 PM — your mental health matters",
                "Draft a response template for common queries (homework missed, sick leave, etc.)",
                "If a parent gets angry in the group, take it to private message IMMEDIATELY",
                "Archive the group during school vacations — set an auto-reply if needed"
              ]
            },
            keyTakeaways: [
              "Clear ground rules on Day 1 prevent 90% of WhatsApp group problems",
              "Admin-only posting keeps the group focused and professional",
              "The sandwich method (positive-concern-positive) works in text just as well as in person",
              "Set firm boundaries on response hours — burnout prevention starts with WhatsApp discipline"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "creative-teaching-methods",
    title: "Creative & Engaging Teaching Methods",
    description: "Transform ordinary lessons into unforgettable learning experiences using storytelling, gamification, role-play, and design thinking — no expensive resources needed.",
    longDescription: "The best teachers make learning feel like an adventure, not a chore. This course teaches you proven creative teaching methods — storytelling, gamification, role-play, design thinking, and arts integration — that dramatically boost engagement, retention, and love for learning. Every strategy works in resource-limited Indian classrooms and requires zero technology.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 4560,
    rating: 4.9,
    aiPowered: false,
    instructor: "Vikram Desai",
    instructorBio: "Award-winning teacher trainer and storytelling expert. TEDx speaker on 'The Art of Teaching.' 20 years transforming classrooms across India.",
    modules: [
      {
        id: "ctm-m1",
        title: "Storytelling as a Teaching Tool",
        description: "Harness the ancient art of storytelling to make any subject unforgettable",
        lessons: [
          {
            id: "ctm-m1-l1",
            title: "Why Stories Beat Lectures Every Time",
            duration: "8 min",
            description: "Understand the neuroscience of storytelling and learn to convert any lesson into a narrative that sticks.",
            content: `# Why Stories Beat Lectures Every Time

## The Science of Stories

Neuroscience research reveals:
- Stories activate 7x more brain regions than facts alone
- Information delivered as story is retained 22x better than information delivered as data
- Stories trigger oxytocin release, which enhances empathy and memory
- Our brains are literally WIRED for narrative — we've been telling stories for 100,000 years

## The Story-Lesson Framework

### Step 1: Find the Human Element
Every subject has a human story:
- **Math**: "In ancient India, Aryabhata was trying to calculate the earth's circumference..."
- **Science**: "Marie Curie was so dedicated to her research that she carried radioactive samples in her pocket..."
- **History**: "Imagine you're a 14-year-old student in 1942 Bombay, and you just heard about Quit India..."
- **Geography**: "A farmer in Rajasthan hasn't seen rain in 3 years. Here's what happens to the land..."

### Step 2: Create Tension
Learning happens when there's a problem to solve:
- "The village has contaminated water. What would YOU do?"
- "Two kingdoms are about to go to war over trade routes. Can you find a peaceful solution?"
- "The experiment failed! What went wrong?"

### Step 3: Let Students Be Characters
Instead of "learn about the water cycle," try:
- "You are a water molecule. You start in the ocean. Tell me your journey."
- Students embody the subject — it becomes personal

### Step 4: Connect to Real Life
End every story with: "This is happening right now because..."
- The water cycle story connects to Chennai floods
- The trade route story connects to current India-China trade
- Make learning relevant to TODAY

## Story Types for Different Purposes

### Hook Stories (2 minutes, start of lesson)
- Grab attention with a surprising fact wrapped in narrative
- "Did you know that the phone in your parent's pocket has more computing power than the rockets that went to the moon?"

### Explanation Stories (5 minutes, during content delivery)
- Complex concepts explained through analogy
- "Think of an atom like a tiny solar system — the nucleus is the sun..."

### Reflection Stories (3 minutes, end of lesson)
- Stories that make students think about what they learned
- "After learning about environmental pollution, what story would YOU tell your younger siblings?"`,
            practicalExample: {
              title: "Converting a Class 7 Science Lesson on Acids & Bases Into a Story",
              scenario: "You need to teach about acids and bases, pH scale, and indicators. Traditionally a dry, memorization-heavy topic.",
              steps: [
                "Hook Story: 'In 1663, Robert Boyle accidentally spilled acid on a rose petal. What happened next changed chemistry forever...' (the first natural indicator!)",
                "Character Assignment: 'You are a detective. Someone has left 5 mystery liquids in the school lab. Your job: identify which are acidic, which are basic, using ONLY turmeric from the kitchen.'",
                "Activity: Students test real liquids (lemon juice, soap water, baking soda solution, vinegar, water) with turmeric solution",
                "Tension: 'One of these liquids is dangerous! Which one, and why?' (concentrated acid — discuss safety)",
                "Real-world connection: 'Your mother uses turmeric in cooking AND it's a pH indicator. What other kitchen items could be indicators?'",
                "Reflection: 'Write a 5-line story from the perspective of a molecule of hydrochloric acid meeting a molecule of sodium hydroxide. What happens?' (neutralization!)"
              ],
              tips: [
                "You don't need to be a great storyteller — even simple narratives beat dry facts",
                "Use local stories and Indian scientists — Jagadish Chandra Bose, APJ Abdul Kalam, Vikram Sarabhai",
                "Let students tell stories too — 'Who can tell me the story of what happens when it rains on limestone?'",
                "Collect stories from newspapers, history books, and biographies — build a story bank"
              ]
            },
            keyTakeaways: [
              "Stories activate 7x more brain regions than facts — they're not entertainment, they're neuroscience",
              "Every subject has human stories — find the person, the problem, and the resolution",
              "Let students become characters in the story — embodiment deepens understanding",
              "Build a personal story bank — collect 2-3 stories per chapter over your career"
            ]
          },
          {
            id: "ctm-m1-l2",
            title: "Gamification Without Technology",
            duration: "9 min",
            description: "Turn your classroom into an engaging game-based learning environment using only pen, paper, and creativity.",
            content: `# Gamification Without Technology

## What Is Gamification?

Gamification applies game mechanics to learning:
- Points, levels, and rewards
- Challenges and quests
- Competition and collaboration
- Immediate feedback and progress tracking

You don't need apps or devices. The best gamification is analog.

## Gamification Strategies for Indian Classrooms

### 1. The Classroom Economy
- Students earn "class currency" (paper notes you print) for academic achievements
- Spend currency on privileges: sit anywhere for a day, choose the brain break, extra library time
- Teaches math, responsibility, and delayed gratification simultaneously

### 2. Quest-Based Learning
- Convert your chapter into a "quest" with stages
- Each lesson = one stage. Completing it earns a stamp on their Quest Card
- Complete all stages = "Quest Complete" certificate
- Add bonus challenges: "Side Quest: Find 3 real-world examples of this concept"

### 3. The House System
- Divide class into 4 houses (like Hogwarts — Indian kids LOVE this)
- Houses earn points for academics, behavior, attendance, and helpfulness
- Monthly house champions get a small reward (extra recess, homework pass)
- Creates positive peer pressure and team identity

### 4. Mystery Box Challenges
- Place a sealed box in front of the class
- "Today's mystery challenge is inside this box. To open it, you must solve these 5 problems correctly as a class"
- Inside: A fun activity, bonus points, or a simple treat
- Creates excitement and collaborative motivation

### 5. Progress Walls
- Large chart paper on the wall tracking class-wide progress
- Each student has a character/avatar they move forward as they achieve goals
- Visual, public, and motivating
- Celebrate milestones: "We've collectively read 500 pages this month!"

## Balancing Competition and Collaboration

- Mix individual and team challenges
- Celebrate improvement, not just winning
- "The Most Improved Award" matters as much as "Top Scorer"
- Ensure EVERY student can earn points — not just academic achievements`,
            practicalExample: {
              title: "Setting Up a House System and Quest Cards for Class 8",
              scenario: "Class 8, 48 students, declining motivation as board exam pressure increases. You want to make learning feel exciting again.",
              steps: [
                "Divide class into 4 houses — let students name them (e.g., Kalam House, Bose House, Raman House, Sarabhai House)",
                "Create a large scoreboard on chart paper — display prominently",
                "Earn points: Correct answer (+5), Helping a peer (+10), Full homework (+5), Quiz winner (+20)",
                "Create Quest Cards for each chapter: 5 stages per chapter, stamp after each lesson's exit ticket",
                "Complete quest = 50 bonus house points + a sticker on their Quest Card",
                "Month-end: Winning house gets to choose Friday's activity (movie, game, outdoor time)",
                "Term-end: Grand champion house gets a small trophy for the classroom"
              ],
              tips: [
                "Include non-academic point opportunities: kindness, neatness, punctuality, leadership",
                "Rotate house captains monthly so everyone gets a leadership opportunity",
                "Don't let point tallies get too far apart — add 'bonus rounds' to keep it competitive",
                "Students can LOSE points for negative behavior — but earning is always easier than losing"
              ]
            },
            keyTakeaways: [
              "Gamification taps into intrinsic motivation — it makes learning feel like play",
              "Zero technology needed — points, quests, houses, and progress walls work with paper",
              "Balance competition with collaboration — celebrate improvement, not just winning",
              "Gamification works for ALL ages — adapt the theme, not the mechanics"
            ]
          }
        ]
      },
      {
        id: "ctm-m2",
        title: "Role-Play & Design Thinking in Class",
        description: "Use immersive methods to make abstract concepts concrete and memorable",
        lessons: [
          {
            id: "ctm-m2-l1",
            title: "Role-Play: Making Abstract Concepts Come Alive",
            duration: "8 min",
            description: "Use structured role-play to teach any subject — from history and science to language and math.",
            content: `# Role-Play: Making Abstract Concepts Come Alive

## Why Role-Play Works

Role-play engages the whole student — body, emotions, and mind. When students ACT as a character, they:
- Remember 90% of what they experience vs. 10% of what they read
- Develop empathy by literally stepping into another person's shoes
- Build confidence in public speaking and improvisation
- Have FUN — and fun creates memories that stick

## Role-Play Templates for Any Subject

### Historical Character Interview
- Students become historical figures and get "interviewed" by the class
- "I am Mahatma Gandhi. In 1930, I decided to march to Dandi because..."
- Requires research, understanding of perspective, and communication skills

### Science Concept Dramatisation
- Students become molecules, planets, body organs, or natural forces
- "I am a red blood cell. My job is to carry oxygen from the lungs to the muscles..."
- Makes abstract concepts physical and memorable

### Mock Parliament / Mock Court
- Students debate real issues in formal settings
- "This house believes that single-use plastic should be banned in India"
- Builds argumentation, research, and civic awareness

### Customer-Shop Simulations (Math)
- Set up a "shop" with priced items
- Students practice addition, subtraction, percentages, and change-making
- Real-world math that students actually use

### Language Through Drama
- Act out scenes from textbook stories
- Create alternate endings to literature
- Improvise dialogues based on a given situation

## Managing Role-Play in Large Classes

- Assign clear roles: Actors, Audience (with observation sheets), Directors, Critics
- Time-box each performance: 3-5 minutes maximum
- Debrief is ESSENTIAL: "What did we learn from this? What was accurate? What would you change?"
- Rotate roles across different lessons so everyone gets to perform`,
            practicalExample: {
              title: "Running a Mock Parliament on Environmental Policy for Class 9",
              scenario: "Class 9 Social Science — Chapter on Government and Policy Making. 50 students.",
              steps: [
                "Topic: 'Should India ban all single-use plastic by 2027?'",
                "Assign roles: Prime Minister, Environment Minister, Opposition Leader, Industry Representative, Farmer, Student Activist, Journalist (report), Public Gallery (observe and vote)",
                "Day 1: Students research their character's position (homework)",
                "Day 2: 25-minute mock parliament session. Each speaker gets 2 minutes. Questions from the gallery.",
                "Day 3: Debrief — 'What arguments were strongest? What did we learn about policy-making?'",
                "Assessment: Written reflection — 'Which perspective changed your mind? Why?'"
              ],
              tips: [
                "Give shy students non-speaking roles first (journalist, observer) — build confidence gradually",
                "Props make a difference: a makeshift microphone, a speaker's podium (just a desk at the front)",
                "Record performances on your phone — students love watching themselves",
                "Connect to real news: 'The Indian Parliament actually debated this last month...'"
              ]
            },
            keyTakeaways: [
              "Role-play achieves 90% retention vs 10% for reading — it's the most effective teaching method",
              "Every subject can be taught through role-play — it's not limited to drama or language",
              "Large classes can manage role-play with clear role assignments and time-boxing",
              "The debrief after role-play is where learning consolidates — never skip it"
            ]
          }
        ]
      }
    ]
  }
];
