import { Course } from "./courseData";

export const newIndianCourses: Course[] = [
  {
    id: "classroom-management-india",
    title: "Classroom Management for Indian Schools",
    description: "Master strategies for managing large classes of 40-60 students, positive discipline, mixed-ability groups, and building strong student-teacher relationships in Indian school contexts.",
    longDescription: "This course addresses the unique challenges of Indian school classrooms — large class sizes, diverse student backgrounds, and limited resources. Learn practical, research-backed strategies for maintaining discipline with empathy, managing transitions, engaging mixed-ability groups, and conducting effective parent-teacher meetings.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 2890,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Ananya Sharma",
    instructorBio: "20+ years in teacher training across CBSE, ICSE, and state board schools. Author of 'The Empathetic Classroom'.",
    modules: [
      {
        id: "cmi-m1",
        title: "Positive Discipline Strategies",
        description: "Replace punishment with empathy-driven discipline that builds respect and responsibility",
        lessons: [
          {
            id: "cmi-m1-l1",
            title: "From Punishment to Positive Discipline",
            duration: "8 min",
            description: "Shift from fear-based discipline to strategies that build intrinsic motivation and self-regulation.",
            content: `# From Punishment to Positive Discipline

## Why Traditional Punishment Fails

In Indian schools, discipline often relies on fear — scolding, standing outside class, or calling parents for every infraction. Research shows this approach:
- Creates resentment, not respect
- Teaches students to avoid getting caught, not to behave well
- Damages the student-teacher relationship
- Increases dropout rates, especially among marginalized communities

## The Positive Discipline Framework

### 1. Connection Before Correction
Before addressing misbehavior, ensure the student feels seen and heard.
- "I notice you seem upset today. Want to tell me what's going on?"
- This doesn't mean ignoring the behavior — it means understanding the cause first

### 2. Natural and Logical Consequences
Instead of arbitrary punishment, use consequences that relate to the behavior:
- Student damages school property — helps repair or clean it
- Student disrupts class — loses 5 minutes of free time to reflect
- Student doesn't complete homework — stays back 10 minutes to start it (with support)

### 3. Class Agreements (Not Rules)
Co-create expectations WITH students at the start of the year:
- "What do we need to learn well together?"
- Students suggest, discuss, and agree on 5-6 norms
- Display prominently — refer to them ("Remember, we agreed to...")
- Revisit and update agreements each term

### 4. The 2x10 Strategy
For your most challenging student:
- Spend 2 minutes per day for 10 consecutive days having a personal conversation
- Topics: their interests, family, hobbies — NOT academics or behavior
- Research shows this reduces disruptive behavior by up to 85%

## Handling Common Situations

### Student Talking in Class
- Wrong: "Shut up and sit down!"
- Right: "I need everyone's attention. When you're ready, look at me." (Wait silently)

### Student Refuses to Work
- Wrong: "Do it or I'll call your parents!"
- Right: "I see you haven't started. What's making it difficult? How can I help?"

### Two Students Fighting
- Wrong: Punish both immediately
- Right: Separate, let them calm down, then mediate: "Tell me what happened from your side"`,
            practicalExample: {
              title: "Implementing Class Agreements in a Class 7 Section",
              scenario: "New academic year, Class 7 with 48 students known for being 'difficult' from last year.",
              steps: [
                "Day 1: Ask students to write anonymously on slips: 'What makes a class enjoyable?' and 'What makes a class terrible?'",
                "Compile responses on the board — group similar ideas together",
                "Facilitate discussion: 'Which of these can WE control?'",
                "Narrow down to 5 agreements the class votes on",
                "Create a poster with all students signing it — display prominently",
                "Week 1: Refer to agreements 3-4 times daily",
                "Month 1: Review — 'Are these working? Do we need to change anything?'"
              ],
              tips: [
                "Let students word the agreements in their own language",
                "Include both Hindi and English versions if bilingual",
                "When a student breaks an agreement, ask 'Which agreement did we forget?' rather than scolding",
                "Celebrate when the whole class follows agreements well"
              ]
            },
            keyTakeaways: [
              "Positive discipline builds intrinsic motivation; punishment only creates fear",
              "Connection before correction — understand the cause before addressing behavior",
              "Co-created class agreements are more effective than imposed rules",
              "The 2x10 strategy can transform your relationship with difficult students"
            ]
          },
          {
            id: "cmi-m1-l2",
            title: "Managing Transitions and Routines",
            duration: "7 min",
            description: "Create smooth transitions between activities to minimize chaos in large classrooms.",
            content: `# Managing Transitions and Routines

## Why Transitions Matter

In a class of 50 students, even 2 minutes of chaos during each transition adds up to 15-20 minutes of lost learning time per day. That's over 50 hours per year!

## Building Effective Routines

### Entry Routine (First 3 Minutes)
- Students know exactly what to do when they enter
- "Bell Work" or "Do Now" written on the board before students arrive
- Examples: 3 math problems, a vocabulary puzzle, a reflection question
- Teacher uses this time for attendance and individual check-ins

### Transition Signals
Pick ONE signal and use it consistently:
- **Clap Pattern**: Teacher claps a rhythm, students repeat it (silence follows)
- **Countdown**: "5-4-3-2-1, eyes on me" (practice until response is instant)
- **Music**: Play a short tune — when music stops, students are ready
- **Visual Timer**: Project a countdown timer for activities

### Activity Transitions
- Give a 2-minute warning before switching activities
- Clear instructions BEFORE students move
- Practice transitions until they're under 30 seconds

### Exit Routine (Last 3 Minutes)
- Exit ticket: One question students answer before leaving
- Pack-up signal: "Bags packed, chairs pushed in, stand behind your desk"
- Dismiss row by row based on readiness

## The Power of Consistency

A routine practiced daily for 2 weeks becomes automatic. Invest time in the first month — it pays off all year.`,
            practicalExample: {
              title: "Establishing a Zero-Chaos Entry Routine",
              scenario: "Class 9, 52 students. Currently takes 8 minutes to settle after the bell.",
              steps: [
                "Prepare a 'Do Now' task on the board before students arrive every single day",
                "Stand at the door greeting students by name as they enter",
                "Week 1: Explicitly teach the routine",
                "Time the class: 'Today we were ready in 4 minutes. Can we beat that tomorrow?'",
                "By Week 3: Class settles in under 2 minutes consistently",
                "Reward milestones: Use saved time for fun activities on Fridays"
              ],
              tips: [
                "The Do Now should be review material — something every student can attempt independently",
                "Never start teaching until the routine is complete — consistency is key",
                "Praise the students who follow the routine first",
                "If you're late to class, have a student leader start the Do Now routine"
              ]
            },
            keyTakeaways: [
              "Smooth transitions save 50+ hours of learning time per year",
              "Pick one attention signal and use it every single day until it's automatic",
              "Give clear instructions before any movement — not during",
              "Invest in routines during the first month; they pay dividends all year"
            ]
          }
        ]
      },
      {
        id: "cmi-m2",
        title: "Managing Large Classrooms",
        description: "Practical strategies for engaging 40-60 students simultaneously",
        lessons: [
          {
            id: "cmi-m2-l1",
            title: "Engagement Strategies for 50+ Students",
            duration: "9 min",
            description: "Keep every student engaged even in the largest classrooms with zero-tech and low-tech methods.",
            content: `# Engagement Strategies for 50+ Students

## The Large Classroom Reality

Most Indian teachers manage 40-60 students with fixed benches, limited space, and no individual devices. Yet engagement is not about class size — it's about strategy.

## High-Impact Strategies

### 1. Total Participation Techniques (TPT)
Ensure EVERY student responds, not just the 5 who raise their hands:
- **Slates/Mini Whiteboards**: All students write answers and hold up simultaneously
- **Choral Response**: "Everyone say it together: The capital of Maharashtra is..."
- **Thumbs Up/Down**: Quick binary checks for understanding
- **Stand Up/Sit Down**: "Stand if you agree with this statement"

### 2. Strategic Seating
- Seat struggling students closer to the front (change every month)
- Mix high and low performers for peer support
- Create "study buddies" — pairs who help each other

### 3. Differentiated Tasks
Same topic, different levels — all working simultaneously:
- **Green Level**: Basic recall questions
- **Yellow Level**: Application questions
- **Red Level**: Analysis/creation questions

### 4. The Roving Teacher
Don't stand at the front for 40 minutes:
- Teach for 5-7 minutes then give a task and MOVE through the classroom
- Check notebooks, whisper encouragement, catch confusion early

### 5. Peer Teaching
- After explaining a concept, say: "Turn to your partner and explain it back"
- Assign "Student Teachers" who've mastered a topic to help peers`,
            practicalExample: {
              title: "Running a Differentiated Maths Lesson in a Class of 55",
              scenario: "Class 8 Mathematics — Algebraic Expressions. Wide ability range.",
              steps: [
                "Teach the concept to the whole class for 10 minutes",
                "Distribute 3 levels of color-coded worksheets: Green, Yellow, Red",
                "Students pick their level or you assign based on last test",
                "Set timer for 15 minutes — roam the classroom checking work",
                "One student from each level presents their solution",
                "Peer check: swap papers with a neighbor",
                "Exit ticket: one Yellow-level question everyone attempts"
              ],
              tips: [
                "Print worksheets on different colored paper for easy distribution",
                "Students who finish early become 'Math Helpers' for their row",
                "Keep a 'Challenge Corner' on the board for advanced students",
                "Track which level each student chooses over time — celebrate growth"
              ]
            },
            keyTakeaways: [
              "Total Participation Techniques ensure every student responds, not just volunteers",
              "Strategic seating is free and immediately impactful",
              "Differentiated tasks let all students work at their level simultaneously",
              "Being a 'roving teacher' improves both engagement and behavior"
            ]
          }
        ]
      },
      {
        id: "cmi-m3",
        title: "Building Student-Teacher Rapport",
        description: "Create a classroom culture of trust, respect, and belonging",
        lessons: [
          {
            id: "cmi-m3-l1",
            title: "The Relationship-First Classroom",
            duration: "7 min",
            description: "Build genuine connections with students that transform classroom culture.",
            content: `# The Relationship-First Classroom

## Why Relationships Matter More Than Rules

Research consistently shows that the single biggest predictor of student success is the quality of the student-teacher relationship.

## Practical Relationship-Building Strategies

### 1. Learn Every Name (Fast)
- Use a seating chart with photos (take on Day 1)
- Use names frequently: "Excellent point, Priya!" not just "Yes, good"
- For 50+ students, learn 10 names per day

### 2. The Greeting Ritual
- Stand at the door and greet every student by name as they enter
- Offer choices: handshake, high-five, fist bump, or namaste
- Takes 2 minutes but sets the tone for the entire period

### 3. Know Their World
- What are they watching? What music do they listen to?
- What are their dreams?
- Use this in your examples: "If Virat Kohli scores x runs per match..."

### 4. Celebrate Effort, Not Just Achievement
- "I noticed you didn't give up on that problem even when it was hard"
- "Your handwriting has improved so much this month"

### 5. Repair After Conflict
If you lose your temper (it happens!):
- Apologize: "I'm sorry I raised my voice. That wasn't fair to you."
- Students respect teachers who admit mistakes

## The Ripple Effect
When students feel genuinely cared for:
- Attendance improves
- Discipline issues decrease by 50%+
- Academic effort increases`,
            practicalExample: {
              title: "The 30-Day Relationship Reset",
              scenario: "You've inherited a 'tough' class with a difficult relationship with their previous teacher.",
              steps: [
                "Day 1: Tell the class honestly — 'I'm excited to be your teacher. Let's start fresh together.'",
                "Days 1-5: Learn every student's name. Greet at the door daily.",
                "Days 1-10: Use the 2x10 strategy with the 3 most challenging students",
                "Week 2: Do a 'Getting to Know You' survey",
                "Week 2-3: Reference survey answers in class examples",
                "Week 3-4: Introduce 'Shout-Out Friday' for public appreciation",
                "Day 30: Reflect together — 'How has our class changed?'"
              ],
              tips: [
                "Don't expect immediate results — trust is built slowly",
                "The most resistant students need the most connection",
                "Small gestures matter: remembering birthdays, asking about family",
                "Never use personal information against a student"
              ]
            },
            keyTakeaways: [
              "Student-teacher relationships are the #1 predictor of academic success",
              "Learning every student's name is the foundation of respect",
              "Greeting at the door takes 2 minutes but transforms classroom culture",
              "Repairing after conflict models emotional maturity and builds trust"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nep-2020-practice",
    title: "NEP 2020 in Practice",
    description: "Implement India's National Education Policy 2020 in your classroom — competency-based education, experiential learning, continuous assessment, and multidisciplinary approaches.",
    longDescription: "India's NEP 2020 is the most significant education reform in decades, but many teachers feel unsure about how to implement it. This course translates policy into practice with actionable strategies for competency-based teaching, experiential learning, and continuous assessment.",
    category: "Policy & Curriculum",
    duration: "4 weeks",
    students: 4120,
    rating: 4.9,
    aiPowered: false,
    instructor: "Prof. Rajesh Verma",
    instructorBio: "NEP 2020 implementation consultant, former NCERT advisor, trained 10,000+ teachers across 12 states.",
    modules: [
      {
        id: "nep-m1",
        title: "Understanding NEP 2020 Framework",
        description: "Grasp the key shifts in NEP 2020 and what they mean for your daily teaching",
        lessons: [
          {
            id: "nep-m1-l1",
            title: "The Big Shifts: What NEP 2020 Actually Changes",
            duration: "9 min",
            description: "Understand the fundamental changes NEP 2020 brings and how they affect classroom teaching.",
            content: `# The Big Shifts: What NEP 2020 Actually Changes

## Shift 1: From Rote Learning to Competency-Based Education
- Students should DEMONSTRATE understanding, not just memorize and reproduce
- Assessment checks "Can you apply this?" not "Can you recall this?"
- Instead of: "Define photosynthesis" (recall)
- Try: "Design an experiment to prove that light is necessary for photosynthesis" (application)

## Shift 2: From Rigid Subjects to Multidisciplinary Learning
- Students can mix arts and sciences (no forced streams after Class 10)
- Real-world problems don't come in subject-shaped boxes
- Math + Geography: Calculate the area of your school campus
- Science + Art: Create scientific illustrations of local flora

## Shift 3: From Exams to Continuous Assessment
- Move away from high-stakes year-end exams as the only measure
- Weekly 5-minute exit tickets (not tests!)
- Monthly portfolio reviews
- Term projects that replace one written exam

## Shift 4: From Textbook-Only to Experiential Learning
- Learning by doing, not just reading
- Field visits, hands-on experiments with local materials
- Community projects (survey, interview, observe)
- Integration of local art, craft, and culture`,
            practicalExample: {
              title: "Converting a Traditional History Lesson to NEP-Aligned Teaching",
              scenario: "Class 8 History — 'The Indian National Movement'. Traditionally taught as dates to memorize.",
              steps: [
                "Start with a question: 'What would YOU protest about today? How would you organize it?'",
                "Students discuss in groups — connecting personal experience to historical context",
                "Mini-lecture on the Salt March — focus on strategy, not just dates",
                "Multidisciplinary activity: Calculate the distance on a map (Math), write a newspaper report (English), create a protest poster (Art)",
                "Assessment: Each group presents — peer assessment using a simple rubric",
                "Reflection: 'What leadership qualities did Gandhi show? Which of these do you have?'"
              ],
              tips: [
                "NEP doesn't mean abandoning textbooks — it means going beyond them",
                "Start with ONE multidisciplinary lesson per month",
                "Collaborate with teachers of other subjects for integrated projects",
                "Document your NEP-aligned activities for your professional portfolio"
              ]
            },
            keyTakeaways: [
              "NEP 2020 shifts from rote to competency, from rigid to flexible, from exams to continuous assessment",
              "You don't need to change everything at once — start with small shifts",
              "Multidisciplinary teaching connects learning to the real world",
              "Continuous assessment means low-stakes, frequent checks — not more exams"
            ]
          }
        ]
      },
      {
        id: "nep-m2",
        title: "Competency-Based Teaching",
        description: "Design lessons that build demonstrable skills, not just knowledge recall",
        lessons: [
          {
            id: "nep-m2-l1",
            title: "Designing Competency-Based Lessons",
            duration: "8 min",
            description: "Learn to write learning outcomes and design activities that build real competencies.",
            content: `# Designing Competency-Based Lessons

## What is a Competency?

A competency = Knowledge + Skill + Attitude applied in a real context.

Example: "Understands fractions" is knowledge. "Can use fractions to split a recipe for more/fewer people" is a competency.

## The CBE Lesson Design Framework

### Step 1: Start with the Competency (Not the Topic)
- Instead of: "Today we will learn about fractions"
- Try: "By the end of this lesson, you will be able to divide any quantity into equal parts and explain why your division is fair"

### Step 2: Create a Real-World Context
- Fractions: Sharing food equally among friends
- Percentages: Calculating discounts during a sale
- Grammar: Writing a complaint letter to the school principal

### Step 3: Design Practice Activities
Students should DO, not just listen: solve real problems, work in groups, present and defend their reasoning.

### Step 4: Assess the Competency
- Traditional test: "What is 3/4 + 1/2?"
- Competency assessment: "You have 2 rotis to share equally among 3 people. Show how and explain why it's fair."

## Bloom's Taxonomy for Indian Classrooms
- **Remember/Understand**: Traditional focus
- **Apply**: NEP minimum target
- **Analyze/Evaluate/Create**: NEP aspiration

Move at least to Apply level for every lesson.`,
            practicalExample: {
              title: "CBE Lesson: Class 6 Science — Separation of Substances",
              scenario: "NCERT Chapter on separation techniques. Make students demonstrate competency instead of just listing methods.",
              steps: [
                "Define the competency: 'Students can identify and perform the appropriate separation technique for a given mixture'",
                "Bring mixed items — rice + dal, sand + salt, iron filings + sawdust",
                "Challenge: 'Your group has 15 minutes to separate your mixture. Use anything in the classroom.'",
                "Groups experiment, fail, retry, and discover techniques organically",
                "Teacher facilitates: 'Why did filtering work for sand+water but not salt+water?'",
                "Map their discoveries to textbook terminology",
                "Assessment: Give each student a NEW mixture — they must identify and perform the correct technique"
              ],
              tips: [
                "Let students struggle before giving answers — productive struggle builds competency",
                "Celebrate creative approaches even if they don't match the textbook",
                "Use locally available materials — no lab equipment needed",
                "The competency assessment is what matters — the activity is the learning path"
              ]
            },
            keyTakeaways: [
              "A competency = knowledge + skill + attitude in a real context",
              "Start with what students should be able to DO, not what they should know",
              "Real-world contexts make abstract concepts meaningful",
              "Assess by asking students to demonstrate, not just recall"
            ]
          }
        ]
      },
      {
        id: "nep-m3",
        title: "Experiential & Activity-Based Learning",
        description: "Transform passive lessons into hands-on learning experiences",
        lessons: [
          {
            id: "nep-m3-l1",
            title: "Learning by Doing: Practical Experiential Strategies",
            duration: "8 min",
            description: "Design experiential learning activities using local resources and community connections.",
            content: `# Learning by Doing: Practical Experiential Strategies

## What is Experiential Learning?

Experiential learning follows a cycle: Experience, Reflect, Conceptualize, Apply.

It's NOT just "doing activities." It's doing + thinking about what you learned from doing.

## Activities for Indian Schools

### 1. Campus-Based Explorations
- Biology: Identify and classify 20 plants in the school garden
- Math: Measure and calculate the area of the playground
- Physics: Test which surfaces create more friction
- Social Science: Survey students about breakfast habits and create graphs

### 2. Market Mathematics
- Calculate profit margins on common items
- Compare prices per unit weight across brands
- Understand GST through real receipts

### 3. Community Connections
- Interview grandparents about life during a historical period
- Map your neighborhood — identify water sources, markets, public spaces
- Visit the local panchayat/ward office

### 4. Simulation and Role-Play
- Model UN for international relations
- Mock Parliament for civics
- "Shark Tank" for entrepreneurship and math

## The Reflection Step (Most Often Missed!)
After every activity, students MUST reflect:
- "What did I learn from this experience?"
- "What surprised me?"
- "How does this connect to the textbook?"
Without reflection, activities become entertainment, not learning.`,
            practicalExample: {
              title: "Running a School Waste Audit — Cross-Curricular Project",
              scenario: "Class 7, Environmental Science unit. Students conduct a real audit instead of reading about waste management.",
              steps: [
                "Day 1: Introduce the concept — 'We're going to find out how much waste our school generates'",
                "Day 2-4: Student teams collect and sort waste from assigned areas (with gloves)",
                "Day 5: Weigh and categorize (Math: measurement, data collection)",
                "Day 6: Create graphs and charts (Math: statistics)",
                "Day 7: Research — 'Where does our waste go?' (Science: decomposition, pollution)",
                "Day 8: Write a report for the principal (English: report writing)",
                "Day 9: Present findings to school assembly",
                "Day 10: Reflection and start a composting project"
              ],
              tips: [
                "Get permission and involve housekeeping staff as experts",
                "Ensure safety — provide gloves and supervise waste handling",
                "This one project covers EVS, Math, English, Art, and life skills",
                "The real learning happens in reflection and action"
              ]
            },
            keyTakeaways: [
              "Experiential learning = Experience + Reflection, not just 'doing activities'",
              "Your school campus is a free, always-available laboratory",
              "Community connections make learning relevant and memorable",
              "Always include structured reflection — it's where learning solidifies"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "multilingual-pedagogy",
    title: "Regional Language & Multilingual Pedagogy",
    description: "Teach effectively in multilingual Indian classrooms — use mother tongue as a bridge, create bilingual resources, and implement translanguaging strategies.",
    longDescription: "India's classrooms are inherently multilingual. This course equips teachers with practical strategies to leverage linguistic diversity as a strength, using mother tongue-based education, translanguaging, and bilingual resource creation.",
    category: "Language & Communication",
    duration: "3 weeks",
    students: 3560,
    rating: 4.7,
    aiPowered: false,
    instructor: "Dr. Kavitha Rajan",
    instructorBio: "Linguist and education specialist, led multilingual education projects across 8 Indian states. Fluent in 5 Indian languages.",
    modules: [
      {
        id: "mlp-m1",
        title: "Multilingual Classroom Strategies",
        description: "Turn linguistic diversity from a challenge into your greatest teaching advantage",
        lessons: [
          {
            id: "mlp-m1-l1",
            title: "The Multilingual Indian Classroom: Challenge or Opportunity?",
            duration: "8 min",
            description: "Understand why multilingualism is a cognitive advantage and how to leverage it.",
            content: `# The Multilingual Indian Classroom: Challenge or Opportunity?

## The Indian Reality

In a typical Indian classroom:
- The textbook is in English or Hindi
- The teacher explains in a mix of English and the regional language
- Students think in their mother tongue
- Some students speak a different home language from the medium of instruction

This is often seen as a PROBLEM. Research says it's actually an ADVANTAGE.

## Why Multilingualism is a Superpower

### Cognitive Benefits
- Multilingual children have stronger executive function (focus, switching tasks, problem-solving)
- Research shows bilingual students outperform monolinguals in math and science by Grade 5

### Learning Benefits
- Mother tongue understanding is the FOUNDATION for learning in any other language
- If a student understands "bhaagshaala" (fraction) in Hindi, learning "fraction" in English is just a label

## Common Mistakes Teachers Make

### "English Only in My Classroom"
- Students who don't think in English zone out
- This creates inequality — privileging students from English-speaking homes

### "Speaking Mother Tongue is a Sign of Weakness"
- Students feel ashamed of their strongest cognitive tool
- They stop participating rather than risk using the "wrong" language

## The Right Approach: Translanguaging

Translanguaging = Strategic use of ALL languages for deeper learning

- Teacher explains in English, students discuss in mother tongue, then present in English
- Key terms taught in BOTH languages simultaneously
- Students can write rough notes in any language, final submissions in the required medium`,
            practicalExample: {
              title: "Translanguaging in a Class 6 Science Lesson",
              scenario: "English-medium school, Class 6. Students come from Hindi, Marathi, and Telugu-speaking homes.",
              steps: [
                "Introduce vocabulary in English AND Hindi/regional language on the board",
                "Explain the process in English with regional language glosses",
                "Group discussion: 'Explain the process to each other in whatever language you're comfortable with'",
                "Each group creates a bilingual poster with labels in English AND their home language",
                "Presentation: Groups present in English, can use mother tongue to clarify",
                "Assessment: Bilingual worksheet with key terms in both languages"
              ],
              tips: [
                "Create a 'Word Wall' with key terms in 3-4 languages",
                "Pair students with the same home language for discussion, then mix for presentation",
                "Never punish a student for using their mother tongue",
                "If YOU don't speak a student's language, ask them to teach YOU a word"
              ]
            },
            keyTakeaways: [
              "Multilingualism is a cognitive advantage, not a barrier to learning",
              "Mother tongue understanding is the foundation for all learning",
              "Translanguaging is strategic, deliberate use of multiple languages — not random mixing",
              "Creating bilingual resources takes minutes but doubles comprehension"
            ]
          }
        ]
      },
      {
        id: "mlp-m2",
        title: "Mother Tongue-Based Education",
        description: "Use students' first language as a bridge to academic success",
        lessons: [
          {
            id: "mlp-m2-l1",
            title: "Building Bridges: Mother Tongue to Medium of Instruction",
            duration: "8 min",
            description: "Practical strategies for using mother tongue as a scaffold when teaching in English or Hindi medium.",
            content: `# Building Bridges: Mother Tongue to Medium of Instruction

## The Bridge Model

Think of mother tongue as a BRIDGE, not a crutch:
1. Concept understood in mother tongue (strong foundation)
2. Vocabulary learned in medium of instruction (building the bridge)
3. Application demonstrated in medium of instruction (crossing the bridge)

## Practical Bridge-Building Strategies

### 1. Concept First, Language Second
- Teach the CONCEPT in whatever language students understand best
- Then teach the TERMINOLOGY in the medium of instruction

### 2. Bilingual Glossaries
- For every chapter, create a glossary: English term, Hindi/Regional term, Simple definition
- Students maintain their own "My Dictionary" notebook

### 3. Preview-View-Review
- **Preview** (5 min): Introduce the topic in mother tongue
- **View** (25 min): Teach the lesson in the medium of instruction
- **Review** (5 min): Summarize key points in mother tongue

### 4. Thinking Time in Mother Tongue
- "Think about your answer in whatever language you think best. Then share in English."
- This small permission dramatically increases participation

### 5. Mother Tongue for Emotional Safety
- When a student is upset or confused — allow mother tongue
- Emotional regulation happens in the first language`,
            practicalExample: {
              title: "Preview-View-Review for a Class 5 Math Lesson on Decimals",
              scenario: "Hindi-medium school transitioning to English-medium. Students struggle with English math terminology.",
              steps: [
                "PREVIEW (5 min, Hindi): 'Aaj hum dashmlav ke baare mein sikhenge. 10 rupees 50 paise = 10.50'",
                "Write on board: 'Decimal / dashmlav = a dot that separates whole numbers from parts'",
                "VIEW (25 min, English with Hindi glosses): Teach decimal operations",
                "Practice problems in English, students can discuss with partners in Hindi",
                "REVIEW (5 min, Hindi): 'Aaj humne kya seekha? Decimal kya hota hai?'",
                "Homework: 5 problems in English + 'Explain to your family in Hindi what decimals are'"
              ],
              tips: [
                "The Preview and Review in mother tongue take 10 minutes but double retention",
                "Record yourself doing the Preview — absent students can listen later",
                "Gradually reduce mother tongue as students gain confidence",
                "Never make students feel bad for needing the bridge"
              ]
            },
            keyTakeaways: [
              "Mother tongue is a bridge to learning, not a barrier",
              "Concept first, language second — understanding precedes terminology",
              "Preview-View-Review is a simple, powerful framework for bilingual teaching",
              "First-generation learners need explicit bridging, not sink-or-swim immersion"
            ]
          }
        ]
      },
      {
        id: "mlp-m3",
        title: "Creating Bilingual Learning Materials",
        description: "Design effective bilingual worksheets, glossaries, and classroom displays",
        lessons: [
          {
            id: "mlp-m3-l1",
            title: "DIY Bilingual Resources on Zero Budget",
            duration: "7 min",
            description: "Create effective bilingual teaching materials using free tools and simple techniques.",
            content: `# DIY Bilingual Resources on Zero Budget

## Why Bilingual Resources Matter

When students see their language in classroom materials, it says:
- "Your language is valued here"
- "You belong in this classroom"

Plus, bilingual materials improve comprehension by 40-60% for L2 learners.

## Easy-to-Create Bilingual Resources

### 1. Bilingual Word Walls
- A large display with key terms in 2-3 languages
- Include a picture/symbol alongside each word
- Students can contribute words from their home language
- Materials needed: Chart paper + markers (about 20 rupees)

### 2. Bilingual Worksheets
- Left column: English instructions
- Right column: Same content in Hindi/regional language
- Students can respond in either language

### 3. Bilingual Flash Cards
- Front: English term + picture
- Back: Hindi/regional term + simple definition
- Students making their own cards is itself learning

### 4. Audio Resources
- Record yourself reading key content in both languages
- Share via WhatsApp voice notes to parent groups
- Students can listen for revision at home

## Digital Tools
- **Google Translate**: Quick first draft (always review)
- **Canva**: Free templates for bilingual posters
- **DIKSHA**: Already has content in 36 Indian languages

## Quality Check
Before using any bilingual material:
- Is the translation accurate?
- Is it grade-appropriate in both languages?
- Does it have visual support?`,
            practicalExample: {
              title: "Creating a Chapter-Wise Bilingual Word Wall",
              scenario: "Class 4 EVS, English medium, students speak Kannada at home. Chapter: 'Animals and Their Homes'.",
              steps: [
                "List 15-20 key terms: habitat, den, nest, burrow, aquatic, terrestrial, etc.",
                "Get Kannada translations (ask students — they'll love being the experts!)",
                "Create cards: English word on top, Kannada word below, picture in the middle",
                "Use different colors for categories: water animals (blue), land animals (green), air animals (yellow)",
                "Students help create and display on a dedicated wall section",
                "Daily routine: Point to 3 cards, students say the word in both languages",
                "End of chapter: Students create their own bilingual quiz using the word wall"
              ],
              tips: [
                "Let students be the language experts — ask THEM for the mother tongue word",
                "Add words as the chapter progresses, not all at once",
                "Include student-drawn pictures — they remember their own drawings better",
                "Reuse the format for every chapter"
              ]
            },
            keyTakeaways: [
              "Bilingual resources improve comprehension by 40-60% for L2 learners",
              "Most bilingual materials can be created for under 50 rupees with chart paper and markers",
              "Students creating bilingual materials is itself a powerful learning activity",
              "Start with word walls and worksheets — they're the quickest wins"
            ]
          }
        ]
      }
    ]
  }
];
