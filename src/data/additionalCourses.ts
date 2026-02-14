import { Course } from "./courseData";

export const additionalCourses: Course[] = [
  {
    id: "classroom-tech-tools",
    title: "Classroom Tech Tools Mastery",
    description: "Master essential edtech tools — from interactive whiteboards to student response systems, LMS platforms, and digital collaboration suites.",
    longDescription: "This hands-on course transforms you into a classroom technology expert. Learn to leverage interactive whiteboards, student response systems (Kahoot, Mentimeter), LMS platforms, and collaboration tools (Padlet, Jamboard, Miro) to create engaging, interactive lessons. Every lesson includes setup guides you can implement the same day.",
    category: "Technology",
    duration: "3 weeks",
    students: 3210,
    rating: 4.7,
    aiPowered: false,
    instructor: "Sarah Chen",
    instructorBio: "Former Google for Education trainer, 15 years of K-12 edtech integration experience.",
    modules: [
      {
        id: "ctt-m1",
        title: "Interactive Presentation Tools",
        description: "Transform passive lectures into interactive experiences",
        lessons: [
          {
            id: "ctt-m1-l1",
            title: "Beyond PowerPoint: Interactive Presentations",
            duration: "8 min",
            description: "Use Mentimeter, Nearpod, and Pear Deck to make every slide interactive.",
            content: `# Beyond PowerPoint: Interactive Presentations

## The Problem with Traditional Slides

Students zone out after 10 minutes of passive slides. Interactive presentation tools keep every student engaged because they PARTICIPATE in every slide.

## Top Interactive Presentation Tools

### Mentimeter
- Live polls, word clouds, and quizzes embedded in slides
- Students respond on their phones — anonymous = more honest answers
- Free tier: 2 questions per presentation

### Nearpod
- Teacher-paced or student-paced modes
- Embed VR field trips, simulations, and collaborative boards
- Real-time student responses visible to teacher

### Pear Deck (Google Slides add-on)
- Transforms existing Google Slides into interactive lessons
- Draggable, drawing, and text response slides
- Teacher dashboard shows all student responses live

## Best Practices

### The 3-Minute Rule
No more than 3 minutes of passive content before an interaction:
- Slide 1-2: Content delivery
- Slide 3: Poll, question, or activity
- Repeat

### Question Types That Work
- "Rate your understanding 1-5" (quick check)
- "What's one thing you learned?" (word cloud)
- "Which example best shows X?" (multiple choice)
- "Draw what you think happens next" (creative)

## Getting Started Today
1. Pick ONE tool and create ONE interactive slide
2. Use it in your next lesson
3. Notice the difference in engagement
4. Gradually add more interactive slides`,
            practicalExample: {
              title: "Converting a Boring Lecture into an Interactive Session",
              scenario: "You have a 30-minute lecture on the water cycle for 5th graders.",
              steps: [
                "Open Mentimeter and create a new presentation",
                "Slide 1: Word cloud — 'What words come to mind when you think about water?'",
                "Slides 2-3: Content about evaporation (keep it to 2 minutes)",
                "Slide 4: Poll — 'Where does evaporation happen fastest? Ocean / Lake / Puddle / All equally'",
                "Slides 5-6: Content about condensation and precipitation",
                "Slide 7: Open-ended — 'Explain the water cycle to a 3-year-old in one sentence'",
                "Slide 8: Quiz — 3 quick multiple choice questions as exit ticket",
                "Total prep time: 20 minutes. Student engagement: dramatically higher."
              ],
              tips: [
                "Test the student link on your phone before class",
                "Have a backup plan if WiFi fails (printed handout with QR codes)",
                "Show the word cloud results live — students love seeing their answers appear",
                "Save response data to track understanding over time"
              ]
            },
            keyTakeaways: [
              "Interactive tools keep students engaged every 3 minutes",
              "Anonymous responses encourage honest participation",
              "Start with one tool and one interactive slide",
              "Response data doubles as formative assessment"
            ]
          },
          {
            id: "ctt-m1-l2",
            title: "Student Response Systems (Kahoot, Quizizz, Blooket)",
            duration: "10 min",
            description: "Turn review sessions into exciting game shows that students beg to play.",
            content: `# Student Response Systems

## Why Game-Based Review Works

Students retain 40% more when review is game-based vs. traditional worksheets. The competition, time pressure, and immediate feedback create optimal learning conditions.

## Tool Comparison

### Kahoot
- Best for: Quick, energetic whole-class review
- Format: Teacher-paced, everyone answers simultaneously
- Strength: Music, countdown timer, podium creates excitement
- Limitation: Speed rewards can frustrate slower processors

### Quizizz
- Best for: Self-paced review and homework
- Format: Student-paced, everyone works at their own speed
- Strength: Memes, power-ups, no time pressure option
- Limitation: Less whole-class energy

### Blooket
- Best for: Extended engagement with variety
- Format: Multiple game modes (Tower Defense, Gold Quest, etc.)
- Strength: Same question set, different games = replayability
- Limitation: Can be distracting if not managed well

## Creating Effective Questions

### DO
- Mix question types (multiple choice, true/false, image-based)
- Include "trick" answers that address common misconceptions
- Add image-based questions for visual learners
- Write clear, unambiguous questions

### DON'T
- Make all questions too easy (no learning happens)
- Make all questions too hard (frustration kills engagement)
- Use more than 20 questions (fatigue sets in)
- Forget to discuss wrong answers after the game`,
            practicalExample: {
              title: "Running a Perfect Kahoot Session",
              scenario: "You want to review for tomorrow's history test with your 7th graders.",
              steps: [
                "Create a 15-question Kahoot the night before (takes ~15 min)",
                "Mix difficulty: 5 easy (confidence builders), 7 medium, 3 hard (challenge)",
                "Add images to at least 5 questions for visual engagement",
                "In class: Project the game pin. Students join on their devices.",
                "After each question: PAUSE and discuss why the right answer is right",
                "At the halfway point: 'Everyone who got that right, help someone near you who didn't'",
                "Final podium: Celebrate top 3, then ask 'What question surprised you most?'",
                "Assign the same questions as a Quizizz homework for self-paced review"
              ],
              tips: [
                "Play the Kahoot yourself first to check for errors",
                "Allow team mode for students without devices",
                "Focus on LEARNING, not just winning",
                "Use the Kahoot reports to identify weak areas for re-teaching"
              ]
            },
            keyTakeaways: [
              "Game-based review increases retention by 40%",
              "Choose the right tool for the right context",
              "Discussion between questions is where learning happens",
              "Use response data to guide your re-teaching"
            ]
          }
        ]
      },
      {
        id: "ctt-m2",
        title: "Digital Collaboration Tools",
        description: "Enable real-time student collaboration with digital tools",
        lessons: [
          {
            id: "ctt-m2-l1",
            title: "Padlet, Jamboard & Collaborative Workspaces",
            duration: "8 min",
            description: "Create shared digital spaces where students collaborate in real-time.",
            content: `# Collaborative Digital Workspaces

## Why Digital Collaboration Matters

The future workplace is collaborative and digital. Teaching students to work together in shared digital spaces builds skills they'll use for decades.

## Top Collaboration Tools

### Padlet
- Digital bulletin board with multiple layouts (wall, canvas, timeline, map)
- Students post text, images, videos, links, drawings
- Real-time updates visible to everyone
- Moderation options for teacher control

### Google Jamboard / FigJam
- Digital whiteboard for brainstorming
- Sticky notes, drawing, image placement
- Great for mind mapping and visual thinking
- Multiple pages for different activities

### Shared Google Docs/Slides
- Real-time collaborative editing
- Comment and suggestion modes
- Version history tracks contributions
- Familiar interface for most students

## Collaboration Protocols

### Silent Discussion (Padlet)
Students respond to a prompt and each other's posts — in writing only. Introverts shine.

### Gallery Walk (Digital)
Teams post their work on Padlet. Other teams visit and leave feedback using a structured protocol.

### Jigsaw (Google Slides)
Each student becomes an expert on one slide/topic, then teaches their group.

## Managing Digital Chaos
- Set clear expectations BEFORE opening the tool
- Use moderation features when needed
- Assign specific roles within groups
- Time-box activities with visible timers`,
            practicalExample: {
              title: "Running a Digital Gallery Walk",
              scenario: "After a group research project, you want students to give feedback to other groups.",
              steps: [
                "Each group posts their project summary on a class Padlet (wall layout)",
                "Set up feedback rules: '2 Stars (things they did well) and 1 Wish (suggestion for improvement)'",
                "Groups rotate through other posts, leaving feedback comments (5 min per station)",
                "Timer on screen for each rotation",
                "After all rotations: groups read their feedback and identify one change they'll make",
                "Debrief: 'What was the most useful feedback you received?'"
              ],
              tips: [
                "Model good feedback before starting: show a '2 Stars and a Wish' example",
                "Use Padlet's moderation feature if students post inappropriate content",
                "Save the Padlet as a PDF for student portfolios",
                "This activity teaches giving AND receiving constructive criticism"
              ]
            },
            keyTakeaways: [
              "Digital collaboration tools build future-ready skills",
              "Structured protocols prevent collaboration chaos",
              "Silent discussions amplify quieter voices",
              "Always model expectations before launching collaborative activities"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "data-driven-teaching",
    title: "Data-Driven Teaching",
    description: "Use student data ethically and effectively to personalize instruction, close achievement gaps, and demonstrate impact.",
    longDescription: "Transform from intuition-based to evidence-based teaching. Learn to collect meaningful student data, analyze it for actionable insights, use it to personalize learning paths, and communicate results to stakeholders. This course covers formative assessment data, standardized test analysis, and learning analytics — all while maintaining student privacy and ethical standards.",
    category: "Assessment",
    duration: "3 weeks",
    students: 2890,
    rating: 4.8,
    aiPowered: true,
    instructor: "Dr. James Mitchell",
    instructorBio: "Education data scientist, former district assessment coordinator, and author of 'Teaching by Numbers.'",
    modules: [
      {
        id: "ddt-m1",
        title: "Collecting Meaningful Data",
        description: "Design assessments that give you actionable insights",
        lessons: [
          {
            id: "ddt-m1-l1",
            title: "Formative Assessment That Actually Informs",
            duration: "10 min",
            description: "Move beyond 'quiz and move on' to assessments that shape your daily instruction.",
            content: `# Formative Assessment That Actually Informs

## The Assessment Problem

Most teachers assess to GRADE. Data-driven teachers assess to LEARN — about what students understand and what they need next.

## Formative vs. Summative

**Summative** = Autopsy (what happened after it's over)
**Formative** = Check-up (what's happening right now so we can adjust)

## High-Yield Formative Assessment Strategies

### Exit Tickets (3 minutes)
Ask 1-3 targeted questions at the end of class:
- "Explain [concept] in your own words"
- "Rate your understanding 1-5 and explain why"
- "What question do you still have?"

Sort responses into 3 piles: Got it / Almost / Not yet
→ This determines tomorrow's lesson

### Think-Pair-Share with Monitoring
- Students think individually (1 min)
- Share with a partner (2 min)
- Teacher circulates and LISTENS
- Teacher identifies 2-3 responses to share with class

### Mini-Whiteboards
- Ask a question, everyone writes an answer
- "Hold up your boards on 3!"
- Instant visual scan of understanding
- No technology needed

### Hinge Questions
One carefully crafted multiple-choice question where each wrong answer reveals a specific misconception:
- Answer A: Correct understanding
- Answer B: Common misconception #1
- Answer C: Common misconception #2
- Answer D: Guessing / no understanding

## Using the Data

The POINT of formative assessment is to CHANGE what you do next:
- 80%+ got it → Move on, challenge the advanced group
- 50-80% → Reteach with a different approach
- Below 50% → Stop. Back up. Address foundational gaps.`,
            practicalExample: {
              title: "Using Exit Ticket Data to Plan Tomorrow's Lesson",
              scenario: "You taught a lesson on fractions. Time to check understanding.",
              steps: [
                "Last 3 minutes of class: 'On your exit ticket, solve this problem and explain your thinking: What is 2/3 + 1/4?'",
                "Collect and sort during your prep period: Got it (correct answer AND explanation), Almost (correct answer but weak explanation OR wrong answer with good process), Not yet (wrong answer, no explanation)",
                "Results: Got it = 12 students, Almost = 8, Not yet = 7",
                "Tomorrow's plan: Start with a 10-min reteach using visual models (pizza slices) for the 'Not yet' group at a side table",
                "Meanwhile, 'Almost' students work in pairs on practice problems with manipulatives",
                "'Got it' students tackle extension problems or help peers after finishing",
                "By the end of tomorrow: re-assess with one more exit ticket question"
              ],
              tips: [
                "Sort exit tickets the same day — the data is most useful when fresh",
                "Don't grade exit tickets — they're for YOUR information, not student stress",
                "Track exit ticket data over time in a simple spreadsheet to see growth",
                "Share your data with students: 'Yesterday, 45% of us got this. Today, 82%!'"
              ]
            },
            keyTakeaways: [
              "Formative assessment should change your teaching, not just fill a gradebook",
              "Sort student responses into Got it / Almost / Not yet for differentiation",
              "Hinge questions reveal specific misconceptions efficiently",
              "The best assessment is useless if you don't ACT on the data"
            ]
          },
          {
            id: "ddt-m1-l2",
            title: "Learning Analytics & Student Dashboards",
            duration: "8 min",
            description: "Track student progress with visual dashboards and data-driven insights.",
            content: `# Learning Analytics & Student Dashboards

## What Are Learning Analytics?

Learning analytics = collecting and analyzing data about student learning to improve outcomes. Think of it as the "Fitbit for learning."

## Data Sources You Already Have

### LMS Data
- Assignment completion rates
- Time spent on tasks
- Quiz scores over time
- Login frequency

### Classroom Data
- Exit ticket scores
- Participation patterns
- Attendance trends
- Behavior data

### Assessment Data
- Formative assessment results
- Standardized test scores
- Growth measures
- Skill mastery tracking

## Building a Simple Student Dashboard

### Google Sheets Dashboard (Free)
Create a spreadsheet with:
- Student names in rows
- Skills/standards in columns
- Color coding: Green (mastered), Yellow (developing), Red (needs support)
- Auto-calculate class averages per skill

### Key Metrics to Track
1. **Mastery Rate**: % of students meeting standard per skill
2. **Growth Rate**: Change in scores over time
3. **Engagement Index**: Assignment completion + participation
4. **Risk Indicators**: Declining grades + declining attendance

## Data-Informed Decisions
- Who needs intervention? (Red indicators)
- What content needs reteaching? (Low class mastery rate)
- Who is ready for challenge? (Consistently green)
- Is my instruction effective? (Growth trends)`,
            practicalExample: {
              title: "Creating Your First Student Data Dashboard",
              scenario: "You want to track skill mastery for your 4th-grade math class.",
              steps: [
                "Create a Google Sheet: Student names in Column A, math skills in Row 1 (Addition, Subtraction, Multiplication, Division, Fractions, Word Problems)",
                "After each assessment, enter scores using a 1-4 scale: 1=Beginning, 2=Developing, 3=Proficient, 4=Advanced",
                "Add conditional formatting: 1-2 = Red, 3 = Yellow, 4 = Green",
                "Add a row at the bottom: =AVERAGE for each skill column",
                "Review weekly: Which skills are mostly red? → Plan reteach. Which students are mostly red? → Plan intervention.",
                "Share (simplified) data with students: 'Our class is GREAT at addition but we need to work on fractions. Let's crush it!'",
                "Monthly: Show parents their child's growth dashboard during conferences"
              ],
              tips: [
                "Start simple — you can always add complexity later",
                "Update the dashboard consistently (weekly is ideal)",
                "Use the dashboard in team meetings to discuss student needs",
                "Never use data to shame students — always frame as growth opportunity"
              ]
            },
            keyTakeaways: [
              "Learning analytics help you teach smarter, not harder",
              "You already have most of the data you need",
              "Simple color-coded dashboards reveal patterns instantly",
              "Data should drive decisions about grouping, reteaching, and enrichment"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "inclusive-classroom-design",
    title: "Inclusive Classroom Design",
    description: "Create learning environments that celebrate diversity, support ELL students, and ensure equitable access for every learner.",
    longDescription: "Build a classroom where every student feels seen, valued, and supported. This course covers culturally responsive teaching, English Language Learner (ELL) strategies, accessibility best practices, trauma-informed approaches, and equitable assessment design. Learn to dismantle hidden barriers and create truly inclusive spaces where diversity is a strength.",
    category: "Inclusion",
    duration: "4 weeks",
    students: 4150,
    rating: 4.9,
    aiPowered: false,
    instructor: "Prof. Anika Patel",
    instructorBio: "Diversity and inclusion educator, former bilingual teacher, consultant for UNESCO's Inclusive Education initiative.",
    modules: [
      {
        id: "icd-m1",
        title: "Culturally Responsive Teaching",
        description: "Teaching that reflects and respects every student's identity",
        lessons: [
          {
            id: "icd-m1-l1",
            title: "What Culturally Responsive Teaching Really Means",
            duration: "10 min",
            description: "Move beyond surface-level diversity celebrations to deep, systemic inclusion.",
            content: `# What Culturally Responsive Teaching Really Means

## Beyond Food, Flags, and Festivals

True CRT is not:
- Having one "diversity day" per year
- Adding a few diverse authors to your reading list
- Displaying multicultural posters

True CRT IS:
- Recognizing that culture shapes how students learn
- Using students' cultural backgrounds as assets
- Examining your own biases continuously
- Designing curriculum that reflects diverse perspectives
- Creating classroom norms that honor all cultures

## The CRT Framework

### 1. Know Yourself
- Examine your own cultural identity and biases
- Take implicit bias assessments (Harvard IAT)
- Reflect: "Whose perspective am I centering in my teaching?"

### 2. Know Your Students
- Learn about students' cultural backgrounds
- Home visits or family surveys
- Ask: "What matters to your family? How do you learn best at home?"

### 3. Know Your Content
- Whose voices are represented in your curriculum?
- Whose voices are missing?
- Are there multiple perspectives on historical events?

### 4. Know Your Practice
- Do your classroom norms reflect diverse communication styles?
- Are your assessments culturally fair?
- Do you call on all students equitably?

## Practical Shifts

### Curriculum
- Include authors, scientists, and leaders from diverse backgrounds
- Present multiple perspectives on events and concepts
- Use real-world problems relevant to your students' communities

### Instruction
- Value different ways of showing knowledge
- Allow collaboration and oral traditions alongside written work
- Use culturally relevant examples and analogies

### Assessment
- Reduce cultural bias in test questions
- Offer multiple ways to demonstrate mastery
- Consider linguistic accessibility for ELL students`,
            practicalExample: {
              title: "Auditing Your Curriculum for Cultural Responsiveness",
              scenario: "You want to make your 6th-grade English curriculum more inclusive.",
              steps: [
                "List all required texts and supplementary materials for the semester",
                "For each text, note: Author's identity (race, gender, culture), Setting/cultural context, Whose perspective is centered",
                "Identify gaps: Are any student demographic groups not represented?",
                "For each gap, research 2-3 alternative or supplementary texts that represent missing perspectives",
                "Review assessment questions: Do any assume cultural knowledge that not all students have?",
                "Create a 'Perspective Protocol': For every topic, ask 'What would someone from [different culture/background] think about this?'",
                "Implement changes gradually — swap in 2-3 new texts per semester"
              ],
              tips: [
                "This is ongoing work, not a one-time fix",
                "Ask colleagues from diverse backgrounds to review your curriculum",
                "Student voice matters — ask students what they want to see represented",
                "CRT is about addition, not subtraction — you're expanding, not replacing"
              ]
            },
            keyTakeaways: [
              "Culturally responsive teaching goes deeper than diversity celebrations",
              "Start with self-reflection before changing your curriculum",
              "Representation in curriculum directly impacts student engagement",
              "CRT benefits ALL students, not just minority students"
            ]
          },
          {
            id: "icd-m1-l2",
            title: "Supporting English Language Learners",
            duration: "10 min",
            description: "Practical strategies that help ELL students thrive without slowing down the whole class.",
            content: `# Supporting English Language Learners

## The ELL Reality

ELL students are learning content AND a new language simultaneously. That's like solving a math problem while learning to read — it requires twice the cognitive effort.

## Universal ELL Strategies

### Visual Supports
- Anchor charts with images for key vocabulary
- Graphic organizers for every writing assignment
- Visual instructions alongside written ones
- Real objects (realia) whenever possible

### Language Scaffolds
- Sentence frames: "The main idea is ___ because ___"
- Word banks for academic vocabulary
- Pre-teach key vocabulary before the lesson
- Bilingual glossaries

### Comprehensible Input
- Speak clearly and at a moderate pace
- Use gestures and facial expressions
- Write key words on the board as you say them
- Check understanding frequently with thumbs up/down

### Collaborative Structures
- Partner work with strategic pairing (ELL + strong English speaker)
- Think-Pair-Share gives processing time
- Small group discussions before whole class
- Allow home language use for initial processing

## Differentiation Without Isolation
- Same content, different scaffolding
- Modified assignments (shorter text, visual supports) — not easier assignments
- Extended time for assessments
- Allow students to demonstrate knowledge in multiple ways`,
            practicalExample: {
              title: "Making a Science Lesson Accessible for ELL Students",
              scenario: "You're teaching photosynthesis to a class with 6 ELL students at different proficiency levels.",
              steps: [
                "Before the lesson: Pre-teach 5 key vocabulary words with images (photosynthesis, sunlight, carbon dioxide, oxygen, glucose)",
                "Create a visual diagram of the process with labeled arrows — post it on the board for the entire unit",
                "Provide a sentence frame handout: 'During photosynthesis, plants use ___ and ___ to make ___ and ___'",
                "During direct instruction: Point to visuals as you explain, speak at moderate pace, write key terms on the board",
                "Activity: Pair ELL students with supportive English-speaking partners for a labeling activity",
                "Assessment: Allow ELL students to draw AND label the process (not just write a paragraph)",
                "Extension for advanced ELL students: Write a comparison paragraph using the sentence frame 'Photosynthesis is similar to ___ because ___'"
              ],
              tips: [
                "Bilingual students are an asset — allow them to process in their home language first",
                "Never call on an ELL student without warning — give them advance notice of questions",
                "Google Translate is a tool, not a cheat — teach students to use it for initial understanding",
                "Celebrate multilingualism: 'How do you say photosynthesis in [student's language]?'"
              ]
            },
            keyTakeaways: [
              "ELL students are doing double the cognitive work",
              "Visual supports help ALL learners, not just ELL students",
              "Scaffolding means providing support, not lowering expectations",
              "Home language is an asset to leverage, not a barrier to overcome"
            ]
          }
        ]
      },
      {
        id: "icd-m2",
        title: "Trauma-Informed Teaching",
        description: "Create safety and predictability for students carrying invisible burdens",
        lessons: [
          {
            id: "icd-m2-l1",
            title: "Understanding Trauma's Impact on Learning",
            duration: "10 min",
            description: "Learn how adverse experiences affect the brain and what you can do about it.",
            content: `# Understanding Trauma's Impact on Learning

## What Counts as Trauma?

Adverse Childhood Experiences (ACEs) include:
- Abuse (physical, emotional, sexual)
- Neglect
- Household dysfunction (addiction, mental illness, incarceration, divorce)
- Community violence
- Poverty and housing instability
- Racism and discrimination

## How Trauma Affects the Brain

### The Stress Response
- **Amygdala** (alarm system) becomes hyperactive → always scanning for threats
- **Prefrontal cortex** (thinking brain) goes offline during stress → can't learn, plan, or regulate
- **Hippocampus** (memory) is impaired → difficulty forming new memories

### In the Classroom This Looks Like
- Difficulty concentrating (not defiance)
- Overreaction to minor incidents (not drama)
- Withdrawal or shutting down (not laziness)
- Aggressive behavior (not bad character)
- Difficulty with transitions (not stubbornness)

## Trauma-Informed Classroom Principles

### 1. Safety
- Physical safety: organized, clean, predictable space
- Emotional safety: no shaming, sarcasm, or public embarrassment
- Relational safety: consistent, trustworthy adult presence

### 2. Predictability
- Visual schedules posted daily
- Clear routines for transitions
- Advance warning before changes
- Consistent consequences (not punitive, restorative)

### 3. Connection
- Greet every student by name at the door
- 2-by-10 strategy: 2 minutes of personal conversation for 10 days with your most challenging student
- Relationship first, content second

### 4. Empowerment
- Give choices (within structure)
- Build on strengths, not deficits
- Celebrate effort and growth
- Teach coping skills explicitly`,
            practicalExample: {
              title: "Creating a Trauma-Informed Morning Routine",
              scenario: "You want to start every day in a way that helps all students feel safe and ready to learn.",
              steps: [
                "Set up a 'Greeting Station' at your door: greet every student by name with a choice (handshake, high five, fist bump, or wave)",
                "Post the daily schedule on the board (same spot, every day). Highlight any changes in yellow.",
                "Start with a 3-minute 'Check-In Circle': students share one word for how they're feeling (pass is always okay)",
                "Play calm background music during the first 5 minutes as students settle in",
                "Provide a 'Calm Corner' in the classroom: bean bag, fidgets, breathing exercise card, feelings chart",
                "If a student arrives dysregulated: quietly offer the calm corner instead of confrontation",
                "Teach one coping strategy per week: belly breathing, grounding (5-4-3-2-1), progressive muscle relaxation"
              ],
              tips: [
                "You don't need to know a student's trauma history to be trauma-informed",
                "Assume every student may be carrying something invisible",
                "Connection is the #1 protective factor against trauma's effects",
                "When in doubt: 'What happened to you?' not 'What's wrong with you?'"
              ]
            },
            keyTakeaways: [
              "Trauma changes brain architecture — behavior is communication, not defiance",
              "Safety, predictability, and connection are the foundations",
              "You don't need to know the trauma to be trauma-informed",
              "Small, consistent practices create big changes over time"
            ]
          }
        ]
      }
    ]
  }
];
