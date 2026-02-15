import { Course } from "./courseData";

export const additionalCourses: Course[] = [
  {
    id: "classroom-tech-tools",
    title: "Classroom Tech Tools Mastery",
    description: "Master essential edtech tools for Indian classrooms — interactive whiteboards, projector-based activities, teacher-led digital tools, and offline-friendly strategies where students don't have personal devices.",
    longDescription: "This hands-on course is designed specifically for Indian school teachers working in classrooms where students may not have smartphones or personal devices. Learn to leverage projectors, interactive whiteboards, teacher-controlled digital tools, and offline activities to create engaging, interactive lessons. Every lesson includes setup guides aligned with CBSE/ICSE/state board curricula that you can implement the same day.",
    category: "Digital Teaching",
    duration: "3 weeks",
    students: 3210,
    rating: 4.7,
    aiPowered: false,
    instructor: "Meera Krishnan",
    instructorBio: "Former CBSE master trainer, 18 years of edtech integration in Indian schools across urban and rural settings.",
    modules: [
      {
        id: "ctt-m1",
        title: "Teacher-Led Interactive Presentations",
        description: "Transform passive lectures into interactive experiences using your projector and whiteboard",
        lessons: [
          {
            id: "ctt-m1-l1",
            title: "Beyond Chalk and Talk: Interactive Projector-Based Teaching",
            duration: "8 min",
            description: "Use your classroom projector and free tools to make every lesson interactive — no student devices needed.",
            content: `# Beyond Chalk and Talk: Interactive Projector-Based Teaching

## The Indian Classroom Reality

Most Indian classrooms have a projector or smart board, but students don't carry phones or laptops. The teacher's device (laptop/tablet) is the only digital tool. This is actually an ADVANTAGE — you control the pace, minimize distractions, and ensure every student is engaged.

## Tools That Work Without Student Devices

### Google Slides + Live Interaction
- Project slides on the board, pause for class-wide responses
- Use "raise your hand" signals, mini whiteboards, or coloured cards (Red/Yellow/Green)
- Students write answers on slates or notebooks, hold up for teacher to scan

### DIKSHA App (Government of India)
- Free digital content aligned to NCERT/CBSE curriculum
- Video lessons, interactive content, and assessments
- Teachers can project content and facilitate discussions
- Works offline after initial download

### PhET Simulations (Free, Offline-capable)
- Science and math simulations you project for the whole class
- Students predict → teacher demonstrates → class discusses
- Download simulations for offline use
- Cover topics from Class 6-12 physics, chemistry, biology, math

### Canva for Education (Free for Teachers)
- Create stunning visual aids, posters, and infographics
- Design worksheets and activity cards
- Templates for Indian festivals, historical events, and cultural contexts

## The 3-Minute Interaction Rule
No more than 3 minutes of passive content before a class-wide interaction:
- Slides 1-2: Content delivery via projector
- Slide 3: "Show me your answer!" (slates/notebooks/hand signals)
- Repeat

## Response Methods Without Phones
- **Mini whiteboards/slates**: Students write answers, hold up simultaneously
- **Coloured cards**: Red = disagree/confused, Yellow = unsure, Green = agree/understand
- **Hand signals**: Thumbs up/down, show 1-5 fingers for rating
- **Stand up/Sit down**: Binary choice questions
- **Corner method**: Students move to labeled corners of the room for their answer choice

## Getting Started Today
1. Pick ONE tool and create ONE interactive slide
2. Prepare 30 mini whiteboards (laminated A4 sheets + dry-erase markers)
3. Use it in your next period
4. Notice the difference in engagement`,
            practicalExample: {
              title: "Converting a CBSE Science Lecture into an Interactive Session",
              scenario: "You have a 40-minute period on the Water Cycle for Class 5 EVS (NCERT Chapter).",
              steps: [
                "Prepare 5 Google Slides with diagrams from NCERT textbook",
                "Slide 1: Show a picture of rain — ask students to write on their slates 'Where does rain come from?' (2 minutes)",
                "Slides 2-3: Explain evaporation and condensation with animated diagrams projected on board (3 minutes)",
                "Slide 4: 'True or False on your slates' — 3 quick questions about evaporation. Students hold up slates simultaneously",
                "Slide 5: Project a PhET simulation of the water cycle — class predicts what happens next before you click",
                "Activity: Students draw the water cycle in their notebooks with labels (10 minutes)",
                "Exit check: Coloured cards — 'Green if you can explain the water cycle to your family tonight, Yellow if you need help, Red if you're confused'",
                "Total prep time: 15 minutes. Zero student devices needed."
              ],
              tips: [
                "Laminated A4 sheets make perfect reusable mini whiteboards — ₹5 each",
                "Download DIKSHA content the night before on school WiFi",
                "Keep a backup plan with textbook activities if projector fails",
                "The coloured card system works even in classes of 50+ students"
              ]
            },
            keyTakeaways: [
              "No student devices ≠ no interactivity — teacher-projected tools + class response systems work brilliantly",
              "Mini whiteboards and coloured cards give instant formative assessment data",
              "DIKSHA and PhET provide free, curriculum-aligned digital content",
              "The 3-minute interaction rule keeps even large classes engaged"
            ]
          },
          {
            id: "ctt-m1-l2",
            title: "Game-Based Review Without Student Phones",
            duration: "10 min",
            description: "Turn revision sessions into exciting whole-class games that work without any student devices.",
            content: `# Game-Based Review Without Student Phones

## Why Game-Based Review Works in Indian Classrooms

Students retain 40% more when review is game-based vs. traditional revision. In Indian schools with 40-60 students per class, whole-class games create energy and participation that individual worksheets never can.

## Whole-Class Games (Teacher Device Only)

### Quiz Show Format
- Teacher projects questions one at a time
- Students write answers on slates/paper
- Reveal answer — students with correct answers stand up
- Track team scores on the board (Row 1 vs Row 2 vs Row 3)
- Last question: "Jackpot round" worth double points

### Rapid Fire Round
- Project 10 questions, 30 seconds each
- Students write all answers on a numbered sheet
- Swap papers with neighbor for peer-checking
- Teacher reveals answers one by one — class calls out scores
- Creates excitement AND teaches peer assessment

### Pictionary/Dumb Charades (Academic Edition)
- One student comes to the board and draws/acts out a concept
- Class guesses the scientific term, historical event, or mathematical concept
- No technology needed — pure engagement
- Perfect for revision before exams

### "Galli Cricket" Quiz Format
- Batting team answers questions — correct answer = 1 run
- Wrong answer = wicket (out)
- 3 wickets = innings over, next team bats
- Students LOVE this format — connects academics to their favorite sport
- Works for any subject, any class

## Creating Effective Questions for Indian Classrooms

### DO
- Align questions to NCERT/textbook content
- Include HOTS (Higher Order Thinking Skills) questions
- Mix Hindi and English for bilingual classrooms
- Use local examples (Indian rivers, festivals, scientists)

### DON'T
- Make all questions from one chapter only
- Use only MCQs — mix with fill-in-the-blanks, true/false, one-word answers
- Forget to discuss wrong answers after the game
- Skip the "Why is this the correct answer?" discussion`,
            practicalExample: {
              title: "Running a 'Galli Cricket' Quiz for Class 8 History Revision",
              scenario: "Class 8 History exam is next week. You want to review 4 chapters in one exciting period.",
              steps: [
                "Divide class into 4 teams (one per row). Each team picks a captain.",
                "Prepare 40 questions: 10 per chapter, mix of easy (1 run), medium (2 runs), hard (4 runs/six!)",
                "Draw a cricket scoreboard on the blackboard with team names",
                "Team 1 bats first: Captain chooses difficulty level for each question",
                "Correct answer = runs scored. Wrong answer = wicket. 3 wickets = innings over.",
                "Between innings: 2-minute discussion of most-missed questions",
                "Final over: 'Super Over' — one question per team, entire team must agree on answer",
                "Winning team gets to leave class first (simple but effective reward!)"
              ],
              tips: [
                "Prepare questions on paper, not just projector — ensures you can continue if power goes out",
                "Let the weakest students bat first (easier questions build confidence)",
                "Take photos of the scoreboard — share with parents on WhatsApp group",
                "This format works for ANY subject — Science, Math, Geography, Hindi"
              ]
            },
            keyTakeaways: [
              "Game-based review increases retention by 40% — no devices needed",
              "Indian students respond incredibly well to cricket-format quizzes",
              "Team-based games ensure even shy students participate through their team",
              "Discussion between questions is where the real learning happens"
            ]
          }
        ]
      },
      {
        id: "ctt-m2",
        title: "Digital Collaboration Without Student Devices",
        description: "Enable meaningful collaboration using teacher-led digital tools and offline methods",
        lessons: [
          {
            id: "ctt-m2-l1",
            title: "Collaborative Learning in Large Indian Classrooms",
            duration: "8 min",
            description: "Create structured group activities that work in classrooms of 40-60 students without individual devices.",
            content: `# Collaborative Learning in Large Indian Classrooms

## The Indian Classroom Challenge

With 40-60 students, limited space, and no individual devices, collaboration seems impossible. But it's not — you just need the right structures.

## Collaboration Strategies for Indian Classrooms

### Gallery Walk (Physical)
- Each group creates a poster/chart paper presentation on their assigned topic
- Posts go up around the classroom walls
- Groups rotate with a feedback sheet: "2 Stars and 1 Suggestion"
- Teacher photographs posters for digital record (WhatsApp to parents!)

### Jigsaw Method
- Divide class into 'Home Groups' of 5 students each
- Each member becomes an expert on one sub-topic
- Expert groups meet → study their topic together
- Return to home group → each expert teaches their topic
- Assessment: Everyone must answer questions on ALL topics
- Perfect for NCERT chapters with clear sub-sections

### Think-Pair-Share (Desi Edition)
- Think: 1 minute silent thinking, write on slate
- Pair: Turn to your bench partner, share answers (2 minutes)
- Share: Teacher calls on 3-4 pairs to share with class
- Works even in fixed-bench Indian classrooms!

### WhatsApp Group Projects (Homework Extension)
- Most Indian families have at least one smartphone at home
- Create class WhatsApp group for parents
- Assign group research topics — students submit via parents' WhatsApp
- Teacher compiles and projects best submissions next class
- Bridges the digital divide without requiring classroom devices

## Managing 50+ Students in Group Work
- **Assign clear roles**: Leader, Writer, Presenter, Timekeeper
- **Use a bell/clap pattern** for attention (e.g., clap-clap-clap → students respond clap-clap)
- **Number each group** and display timer on projector
- **Noise meter**: Draw a volume bar on the board — if class gets too loud, marker moves up
- **Exit ticket**: Each group submits ONE written output before leaving`,
            practicalExample: {
              title: "Running a Jigsaw Activity for Class 7 Geography",
              scenario: "NCERT Chapter on 'Our Changing Earth' has 4 key topics: Lithospheric Plates, Earthquakes, Volcanoes, and Weathering.",
              steps: [
                "Form 10 Home Groups of 5 students each (assign by bench proximity to minimize movement)",
                "Assign each member a number 1-5, each number = one topic (Member 5 gets 'Human Impact')",
                "Expert Groups: All 1s sit together, all 2s together, etc. Give them 10 minutes to read their section and prepare 3 key points on chart paper",
                "Home Groups reconvene: Each expert teaches their topic to the group (2 minutes each = 10 minutes)",
                "Assessment: Quick 5-question quiz (one from each topic) — students answer individually on paper",
                "Debrief: Teacher projects key diagrams and clarifies misconceptions (5 minutes)"
              ],
              tips: [
                "Assign roles the day before so students come prepared",
                "Give expert groups a structured note-taking template",
                "Walk around and listen during expert teaching — identify who needs support",
                "For classes of 50+, use 'Double Jigsaw' — two parallel sets of groups"
              ]
            },
            keyTakeaways: [
              "Large class size is manageable with clear structures and roles",
              "Physical collaboration methods work better than digital in device-free classrooms",
              "WhatsApp bridges school and home learning effectively",
              "The Jigsaw method ensures every student is both a learner and a teacher"
            ]
          }
        ]
      },
      {
        id: "ctt-m3",
        title: "Free EdTech Tools for Indian Teachers",
        description: "Master free platforms aligned with Indian curriculum standards",
        lessons: [
          {
            id: "ctt-m3-l1",
            title: "DIKSHA, SWAYAM & Government EdTech Platforms",
            duration: "8 min",
            description: "Leverage India's free government edtech platforms to enhance your teaching with curriculum-aligned content.",
            content: `# DIKSHA, SWAYAM & Government EdTech Platforms

## India's Free EdTech Ecosystem

India has invested heavily in free digital education platforms. As a teacher, you have access to a treasure trove of content — most teachers just don't know how to use it effectively.

## DIKSHA (Digital Infrastructure for Knowledge Sharing)

### What It Offers
- Free textbook-linked content for Classes 1-12
- Video lessons, interactive content, practice questions
- Available in 36 languages including Hindi, Tamil, Telugu, Marathi, Bengali
- QR codes in NCERT textbooks link directly to digital content
- Offline access after download

### How to Use It in Class
1. Scan QR codes from NCERT textbook on your phone
2. Project the content via USB/HDMI to classroom projector
3. Use videos as lesson starters (2-3 minutes)
4. Pause and discuss — "What did you notice? What questions do you have?"
5. Follow up with textbook activity

## SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds)

### For Teacher Professional Development
- Free courses from IITs, IIMs, and top universities
- Certificate courses recognized by AICTE
- Topics: Pedagogy, Subject expertise, ICT in education
- Self-paced — study on weekends or during vacation

## National Digital Library of India (NDL)
- 90 million+ free learning resources
- Textbooks, videos, articles, simulations
- Filter by class, subject, and board (CBSE/ICSE/State)

## Practical Integration Framework

### Before Class (5 minutes prep)
- Search DIKSHA for tomorrow's topic
- Download 1-2 short videos or simulations
- Note timestamps for key moments to pause and discuss

### During Class
- Start with a 2-minute DIKSHA video as a "hook"
- Pause for prediction/discussion
- Continue with your regular teaching
- End with a DIKSHA practice question projected on board

### After Class
- Share DIKSHA content link on parent WhatsApp group
- Students can access at home for revision
- Track which parents/students accessed (DIKSHA provides analytics)`,
            practicalExample: {
              title: "Using DIKSHA to Teach Class 6 Science — Light, Shadows and Reflections",
              scenario: "You're teaching NCERT Class 6 Science Chapter 11. You have a projector and your smartphone.",
              steps: [
                "Night before: Open DIKSHA app → Search 'Class 6 Science Light Shadows' → Download top-rated video and interactive content",
                "In class: Project the DIKSHA video (2 minutes) showing shadow formation",
                "Pause video: 'On your slates, draw what you think the shadow will look like if I move the torch closer.' Students hold up slates.",
                "Resume video to confirm/correct predictions",
                "Activity: Using a torch from your phone and objects on your desk, demonstrate shadow formation live",
                "Project DIKSHA practice questions — students solve in notebooks, then peer-check",
                "Homework: Share DIKSHA QR code link on class WhatsApp — 'Watch this 3-minute video with your family and tell me one thing you learned tomorrow'"
              ],
              tips: [
                "Download content on school WiFi before class — don't rely on mobile data",
                "DIKSHA content is available in your state language — use it for Hindi/regional medium schools",
                "The QR codes in physical NCERT textbooks are underused gold mines",
                "Track parent engagement through WhatsApp read receipts"
              ]
            },
            keyTakeaways: [
              "DIKSHA provides free, curriculum-aligned content in 36 Indian languages",
              "QR codes in NCERT textbooks are an underused resource",
              "Government platforms are specifically designed for Indian classroom contexts",
              "Even 2-3 minutes of projected digital content can transform a lesson"
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
    category: "General",
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
    category: "Wellbeing",
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
