import { Course } from "./courseData";

export const moreIndianCourses: Course[] = [
  {
    id: "project-based-learning-india",
    title: "Project Based Learning for Indian Classrooms",
    description: "Design and run authentic PBL projects that develop critical thinking, teamwork, and real-world problem-solving skills — even with limited resources.",
    longDescription: "Project Based Learning (PBL) is one of the most powerful teaching methods for deep understanding. This course helps Indian teachers design meaningful projects that connect curriculum to real-world problems, manage group work effectively, and assess 21st century skills — all without expensive technology or resources.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 3210,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Meera Iyer",
    instructorBio: "PBL trainer with 15+ years implementing project-based methods across CBSE and state board schools in Tamil Nadu and Karnataka.",
    modules: [
      {
        id: "pbl-m1",
        title: "Designing Meaningful PBL Projects",
        description: "Create projects that are curriculum-aligned, locally relevant, and genuinely engaging",
        lessons: [
          {
            id: "pbl-m1-l1",
            title: "What Makes a Great PBL Project?",
            duration: "8 min",
            description: "Understand the 7 gold standards of PBL and how to apply them in Indian classrooms.",
            content: `# What Makes a Great PBL Project?

## The 7 Gold Standards of PBL

### 1. Challenging Problem or Question
Every great PBL starts with a driving question students genuinely care about:
- "How can we reduce food waste in our school canteen?"
- "Why do students in our locality drop out of school?"
- "How can we make our neighbourhood safer for pedestrians?"

The question should be:
- Open-ended (no single right answer)
- Locally relevant (connects to students' real lives)
- Curriculum-aligned (requires subject knowledge to answer)

### 2. Sustained Inquiry
Students investigate over days or weeks — not just one class period:
- Research, experiments, interviews, observations
- Iterative process: question → find → question more

### 3. Authenticity
Real audiences, real contexts, real stakes:
- Present findings to school principal, panchayat, or parents
- Create products used by the community
- Solve actual school or village problems

### 4. Student Voice and Choice
Students make decisions about how to investigate and present:
- Choose roles within teams
- Select presentation formats (poster, video, model, report)
- Propose solutions independently

### 5. Reflection
Build in regular check-ins:
- "What's working? What's not?"
- Journals, exit tickets, team retrospectives

### 6. Critique and Revision
Students give and receive feedback:
- Peer review using structured protocols
- Multiple drafts before final product

### 7. Public Product
Go beyond "submit to teacher" — share with real audiences:
- School assembly presentations
- Parent-teacher meeting showcases
- Local newspaper articles or social media`,
            practicalExample: {
              title: "Designing a Class 8 Social Studies PBL Project",
              scenario: "Topic: Local Governance. Class 8, 45 students, rural Maharashtra school.",
              steps: [
                "Start with driving question: 'How can we improve one public service in our gram panchayat?'",
                "Week 1: Research — visit panchayat office, interview officials and residents",
                "Week 2: Analyze data, identify the biggest need (e.g., broken streetlights, water supply)",
                "Week 3: Design a solution proposal with data, budget estimate, and action plan",
                "Week 4: Present to the actual panchayat president",
                "Assessment: Process journal + final presentation rubric"
              ],
              tips: [
                "Start small — a 2-week project beats a half-hearted 6-week one",
                "Get one parent volunteer to help manage logistics",
                "Connect to local organisations who can actually use student work",
                "Photograph every stage — students love seeing their progress"
              ]
            },
            keyTakeaways: [
              "Great PBL starts with a challenging, locally relevant driving question",
              "Authenticity — real audiences and real purposes — dramatically increases student effort",
              "Student voice and choice builds ownership and intrinsic motivation",
              "Public products teach accountability beyond the teacher"
            ]
          },
          {
            id: "pbl-m1-l2",
            title: "Running PBL with Limited Resources",
            duration: "7 min",
            description: "Implement world-class PBL using only locally available materials and community resources.",
            content: `# Running PBL with Limited Resources

## The Resource Myth

Many teachers believe PBL requires computers, 3D printers, or expensive lab equipment. The most powerful PBL projects in India have been done with:
- Pencils and chart paper
- Locally sourced materials
- Community experts (parents, shopkeepers, farmers, doctors)
- The school itself as a laboratory

## Low-Resource PBL Ideas by Subject

### Science
- **Water Quality Project**: Test local water sources using simple pH strips, observe under magnifying glass, report to local authority
- **Kitchen Garden**: Design, plant, and maintain a school kitchen garden — track growth data, create recipes

### Mathematics
- **School Budget Analysis**: Use real school expense data, create graphs, suggest cost-saving measures
- **Local Market Survey**: Survey prices at the weekly market, calculate inflation compared to last year

### Social Studies / Hindi / English
- **Oral History Archive**: Interview senior citizens about local history, compile into a book or display
- **Newspaper for the School**: Write, edit, design, and distribute a monthly school newsletter

### Environmental Studies
- **Solid Waste Audit**: Track school waste for one week, propose and implement a reduction plan
- **Energy Audit**: Measure electricity usage, suggest and track savings

## Managing Groups Without Technology

Create clear team structures:
- **Project Manager**: Keeps the team on track
- **Researcher**: Collects information
- **Designer**: Creates the visual product
- **Presenter**: Leads the final presentation
- **Documenter**: Keeps the project journal`,
            practicalExample: {
              title: "Zero-Budget Environmental PBL: The Waste Audit",
              scenario: "Class 6, 50 students, urban government school with no lab and limited art supplies.",
              steps: [
                "Day 1: Introduce driving question — 'How much waste does our school create in a week?'",
                "Day 2-3: Teams collect and categorize waste from different bins (plastic, paper, food, other)",
                "Day 4: Teams weigh waste on kitchen scale, create tally charts",
                "Day 5: Calculate weekly totals, create bar graphs by hand",
                "Week 2: Research — what happens to this waste? Interview cleaning staff",
                "Week 3: Design 3 actionable recommendations, make posters",
                "Week 4: Present to principal and other classes. Implement one recommendation"
              ],
              tips: [
                "Disposable gloves from a local medical shop cost less than ₹50",
                "Use old newspapers as worksheets for diagrams",
                "Take photos on one student's phone to document progress",
                "The cleaning staff are your best resource experts"
              ]
            },
            keyTakeaways: [
              "Powerful PBL requires community access and student curiosity, not expensive equipment",
              "Local experts (parents, shopkeepers, officials) are free and invaluable",
              "The school itself is a rich laboratory for authentic investigations",
              "Assigning team roles eliminates 'free rider' problems in group work"
            ]
          }
        ]
      },
      {
        id: "pbl-m2",
        title: "Assessing PBL and 21st Century Skills",
        description: "Evaluate collaboration, creativity, and critical thinking alongside subject knowledge",
        lessons: [
          {
            id: "pbl-m2-l1",
            title: "Assessing Beyond the Final Product",
            duration: "8 min",
            description: "Create fair, meaningful assessments that capture the full range of learning in PBL.",
            content: `# Assessing Beyond the Final Product

## Why Traditional Assessment Fails PBL

A single test score cannot capture:
- How a student collaborated under pressure
- How they persisted when their first idea failed
- How creatively they solved an unexpected problem
- The quality of their questioning and investigation

## PBL Assessment Toolkit

### 1. Process Journals
Students document their work daily:
- What did our team do today?
- What challenge did we face?
- What decision did we make and why?
- What will we do tomorrow?

Grade on: consistency, depth of reflection, evidence of growth

### 2. Skill Rubrics
Assess 21st century skills separately from content:
- **Collaboration**: Contributed ideas, listened to others, helped resolve conflict
- **Critical Thinking**: Asked good questions, analyzed evidence, considered multiple solutions
- **Communication**: Presented clearly, supported claims with evidence
- **Creativity**: Generated original ideas, found unexpected connections

### 3. Peer Assessment
Structured peer feedback using protocols:
- "I noticed you..." (observation)
- "I wonder if you could..." (suggestion)
- "I appreciated when you..." (strength)

### 4. Oral Examination
5-minute individual check-in:
- "Explain your team's driving question to me"
- "What was the hardest part of your investigation?"
- "What would you change if you did this again?"

### 5. Final Product Rubric
Grade the public product on:
- Content accuracy and depth
- Clarity of presentation
- Evidence-based recommendations
- Quality of visual/physical product`,
            practicalExample: {
              title: "Creating a Complete PBL Assessment Package",
              scenario: "4-week PBL project on local water issues, Class 7.",
              steps: [
                "Week 1: Distribute process journals — collect every Friday",
                "Week 2: Do a mid-project peer feedback session using structured protocol",
                "Week 3: Individual oral check-ins (5 min each while groups work)",
                "Week 4: Final product rubric shared with students BEFORE they present",
                "After presentation: Students complete self-assessment using same rubric",
                "Final grade: 40% product, 30% process journal, 20% peer/self assessment, 10% oral"
              ],
              tips: [
                "Share rubrics at the START of the project, not at the end",
                "Process journals catch struggling students before they fail",
                "Oral check-ins prevent one student from doing all the work",
                "Let students contribute criteria to the rubric — buy-in increases quality"
              ]
            },
            keyTakeaways: [
              "PBL assessment must capture the process, not just the product",
              "Process journals reveal learning invisible to traditional tests",
              "Skill rubrics help students understand and develop 21st century competencies",
              "Oral check-ins prevent assessment fraud and ensure individual accountability"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "club-activities-competitions",
    title: "Club Activities, Arts & Competitions in School",
    description: "Leverage extracurricular activities, school clubs, arts programmes, and inter-school competitions to build student confidence, teamwork, and holistic development.",
    longDescription: "This course shows teachers how to design and run effective school clubs, integrate arts across subjects, and use competitions as powerful learning tools. Learn to connect co-curricular activities to academic outcomes and student wellbeing.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 2780,
    rating: 4.7,
    aiPowered: false,
    instructor: "Ms. Priya Nambiar",
    instructorBio: "National award-winning teacher and arts integration specialist. Founded 12 school clubs across Kerala and Karnataka. 18 years of experience.",
    modules: [
      {
        id: "club-m1",
        title: "Starting and Running School Clubs",
        description: "Create clubs that genuinely develop students and connect to learning",
        lessons: [
          {
            id: "club-m1-l1",
            title: "Why Clubs Are Academic, Not Extra",
            duration: "7 min",
            description: "Understand the research-backed academic and social-emotional benefits of school clubs and activities.",
            content: `# Why Clubs Are Academic, Not Extra

## The Evidence Is Clear

Research consistently shows students who participate in extracurricular activities have:
- **Better academic performance** (avg. 15% higher grades)
- **Lower dropout rates** (especially for first-generation learners)
- **Stronger social-emotional skills** (empathy, leadership, resilience)
- **Higher university admission rates**
- **Better mental health outcomes**

Yet in many Indian schools, clubs and activities are cancelled for "board exam preparation" — precisely when students need them most.

## What Each Activity Type Develops

### Academic/Subject Clubs (Science, Math, Debate, Quiz)
- Deep subject curiosity beyond syllabus
- Healthy competition and intellectual risk-taking
- Research and presentation skills

### Arts Clubs (Drama, Dance, Music, Fine Arts, Craft)
- Creativity, self-expression, emotional regulation
- Confidence to perform and be seen
- Cultural pride and identity

### Service Clubs (Eco Club, Health Club, Community Service)
- Civic responsibility and social awareness
- Leadership and project management
- Empathy and understanding of inequality

### Sports and Physical Activities
- Teamwork, fair play, managing success and failure
- Physical health and stress relief
- Discipline and time management

## Connecting Clubs to Curriculum

Make clubs curriculum-visible:
- Science Club investigates topics 2 months before they appear in class
- Drama Club performs scenes from history to bring events alive
- Math Club runs the school shop or canteen to practice real-world arithmetic
- Eco Club provides data for geography lessons`,
            practicalExample: {
              title: "Launching a School Science Club from Scratch",
              scenario: "Government school, Class 6-8, one teacher with no budget.",
              steps: [
                "Week 1: Announce club during assembly — 'Who wants to investigate real science questions?'",
                "Week 1: Sign up 20-25 interested students across classes",
                "Week 2: First meeting — let students brainstorm 10 questions they're curious about",
                "Week 2-3: Vote on the first investigation (e.g., 'Do plants grow faster with music?')",
                "Month 1: Run the investigation with kitchen materials — daily observations, data recording",
                "Month 2: Present findings to other classes and make a display board",
                "Month 3: Enter a local or national science fair"
              ],
              tips: [
                "Meet once a week for 45 minutes — consistency beats frequency",
                "Let students lead after the first month",
                "Connect with a local college science department for free mentorship",
                "Even a ₹200 budget is enough for the first investigation"
              ]
            },
            keyTakeaways: [
              "Extracurriculars are not 'extras' — they're academically and emotionally essential",
              "Each club type develops distinct, measurable competencies",
              "Clubs that connect to curriculum make both more powerful",
              "Student-led clubs develop leadership that classroom teaching cannot"
            ]
          },
          {
            id: "club-m1-l2",
            title: "Using Competitions as Learning Tools",
            duration: "8 min",
            description: "Transform inter-school competitions from stressful events into powerful learning experiences.",
            content: `# Using Competitions as Learning Tools

## Rethinking Competition in School

Competitions are often:
- High-stress, high-stakes events students fear
- Only involving the "top" students
- Focused on winning at any cost

They should be:
- Learning experiences where the process matters more than the trophy
- Inclusive — involving all students in different roles
- Opportunities to build resilience, grace in defeat, and humility in victory

## Types of School Competitions and Their Value

### Academic Competitions (Quiz, Debate, Olympiads, Science Fairs)
**Learning**: Deep research, articulation, critical thinking, handling pressure
**How to use them well**:
- Prepare teams collaboratively — the preparation is the learning
- Debrief after each competition: "What did we learn from the questions we got wrong?"
- Celebrate effort: "The team that prepared most thoroughly, not just the winners"

### Performing Arts (Drama, Music, Dance Competitions)
**Learning**: Creativity, collaboration, confidence, emotional expression
**How to use them well**:
- Choose scripts/themes connected to curriculum or social issues
- Involve every student — performers, set designers, costume makers, directors
- Record performances for students to watch and reflect on

### Sports Competitions
**Learning**: Physical literacy, team dynamics, fair play
**How to use them well**:
- Teach sportsmanship explicitly: "How do we congratulate opponents?"
- Post-match debrief: "What did our team do well? What do we improve?"
- Track individual improvement, not just team wins

## Making Competition Inclusive

Not every student will represent the school, but every student can participate:
- Research team for quiz competitions (behind-the-scenes experts)
- Audience support team (creates cheer banners, organises supporters)
- Logistics team (manages travel, refreshments, schedule)
- Documentation team (photos, videos, school newsletter coverage)`,
            practicalExample: {
              title: "Preparing for an Inter-School Debate: A Learning-Centred Approach",
              scenario: "Your school has been invited to a district-level debate competition. Topic: 'Technology does more harm than good in education'.",
              steps: [
                "Week 1: Open to all interested students — form 3 research teams (both sides + evidence team)",
                "Week 1-2: All teams research, share findings, build a comprehensive argument bank",
                "Week 2: Hold an internal debate — students select the final 2 speakers through democratic vote",
                "Week 2-3: Selected speakers practise with full team giving feedback",
                "Day before: Full rehearsal with time checks, teacher plays devil's advocate",
                "Competition day: ALL team members attend in support",
                "After: Debrief regardless of result — 'What were our strongest arguments? What surprised us?'"
              ],
              tips: [
                "The 30 students who researched learned more than the 2 who spoke",
                "Video record practice debates — self-observation accelerates improvement",
                "Invite a parent or community member to be the 'practice judge'",
                "Write thank-you notes to opposing teams — models grace and sportsmanship"
              ]
            },
            keyTakeaways: [
              "Competition preparation is where most of the learning happens",
              "Inclusive competition design ensures no student is left as a passive spectator",
              "Debriefing after competitions extracts maximum learning from the experience",
              "Teaching sportsmanship explicitly builds lifelong character"
            ]
          }
        ]
      },
      {
        id: "club-m2",
        title: "Arts Integration Across Subjects",
        description: "Use visual arts, drama, music, and craft to deepen understanding in all subjects",
        lessons: [
          {
            id: "club-m2-l1",
            title: "Arts as a Learning Tool, Not Just a Subject",
            duration: "7 min",
            description: "Integrate arts across your curriculum to deepen understanding and engage different types of learners.",
            content: `# Arts as a Learning Tool, Not Just a Subject

## Arts Integration vs Arts Appreciation

**Arts Appreciation**: Students learn ABOUT art (art history, music theory)
**Arts Integration**: Students USE art TO LEARN other subjects

Arts integration means:
- Drawing cell diagrams to understand biology
- Composing a song to memorise history dates
- Performing a scene to understand a story's themes
- Making a clay model to understand geography

## High-Impact Arts Integration Strategies

### Visual Art + Any Subject
- **Sketch-to-Learn**: After a lesson, students sketch the main concept in 3 minutes — no words
- **Visual Vocabulary**: Draw icons for key terms instead of writing definitions
- **Infographic**: Represent data or processes as visual diagrams

### Drama + Language/Social Studies
- **Freeze Frame**: Students pose to show a moment from history or a story
- **Role on the Wall**: Draw a character, write their thoughts inside, others' views outside
- **Hot Seat**: One student becomes a historical figure, classmates interview them

### Music + Any Subject
- **Content Raps**: Students write short raps to summarise lessons (done in pairs, 5 minutes)
- **Rhythm Mnemonics**: Create rhythmic patterns to remember sequences (periodic table, historical dates)

### Craft/Making + Science/Maths
- **Build a Model**: Represent atomic structure, ecosystem food webs, or geometric solids
- **Map-Making**: Create 3D terrain maps with clay or papier-mâché for geography
- **Bridge Challenge**: Build a bridge from newspaper and tape — test how much weight it holds`,
            practicalExample: {
              title: "Running a 'Learning Through Art' Week",
              scenario: "Standard 5, all subjects, one week, minimum materials.",
              steps: [
                "Monday — History: Students draw a 6-panel comic strip of the Battle of Panipat",
                "Tuesday — Science: Pairs create a clay or newspaper model of the solar system",
                "Wednesday — English: Groups create a freeze-frame tableau of a scene from their reader",
                "Thursday — Maths: Students design a 'Fraction Art' grid — color fractions to make a pattern",
                "Friday — EVS: Teams make a poster map of their local community using simple sketches",
                "Display all work in the school corridor — instant gallery, instant pride"
              ],
              tips: [
                "Low-cost materials: old newspaper, pencil stubs, chalk, clay from the school garden",
                "Students who struggle academically often shine through arts — notice and celebrate this",
                "Photograph the work before displaying — send photos to parents on WhatsApp",
                "Arts tasks can replace homework — students complete them at home with family"
              ]
            },
            keyTakeaways: [
              "Arts integration deepens understanding — it is not a distraction from academics",
              "Visual, dramatic, and musical approaches engage learners who struggle with text",
              "Arts integration is possible with zero budget using sketch, drama, and song",
              "Student-created art displays build classroom pride and sense of belonging"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "fun-lively-classroom",
    title: "How to Make My Class Fun and Lively",
    description: "Transform your classroom into an energising, joyful space where students are excited to learn — without sacrificing rigor or curriculum coverage.",
    longDescription: "A fun classroom is not a chaotic one. This course gives teachers practical, ready-to-use strategies to boost student energy, curiosity, and joy in learning. Learn to use storytelling, humour, games, movement, and surprise to make every lesson memorable.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 5640,
    rating: 4.9,
    aiPowered: false,
    instructor: "Mr. Arjun Mehta",
    instructorBio: "TEDx speaker and master teacher trainer. Known for transforming 'boring' classrooms into learning theatres. Has trained 8,000+ teachers across 9 states.",
    modules: [
      {
        id: "fun-m1",
        title: "The Science and Art of Joyful Learning",
        description: "Understand why fun matters for learning and how to create it intentionally",
        lessons: [
          {
            id: "fun-m1-l1",
            title: "Why Fun Is Serious Business",
            duration: "7 min",
            description: "The neuroscience of why joy and curiosity are essential for deep learning.",
            content: `# Why Fun Is Serious Business

## The Neuroscience of Fun Learning

When students experience positive emotions in class:
- **Dopamine** is released → strengthens memory consolidation
- **Cortisol** (stress hormone) decreases → opens the brain for new learning
- **Attention systems** activate → students focus and engage willingly

A bored or anxious student is literally less capable of learning. A curious, engaged student retains 60-70% more than one who is passively receiving information.

## The 3 Enemies of Fun (And How to Defeat Them)

### Enemy 1: Predictability
When students know exactly what will happen, their brains switch to autopilot.
**Solution**: Use pattern interrupts — do the UNEXPECTED at least once per lesson.
- Start with a riddle instead of a recap
- Teach standing up or outside occasionally
- Have students teach each other instead of listening to you

### Enemy 2: Passivity
Students watching a teacher talk for 40 minutes is the least engaging experience possible.
**Solution**: Talk less, do more. The 10:2 rule — 10 minutes of input, 2 minutes of processing.

### Enemy 3: Fear of Being Wrong
Students who fear public failure stop participating. No participation = no engagement.
**Solution**: Create a "mistakes are data" culture:
- "Great mistake! Now we all know what NOT to do."
- Celebrate wrong answers as learning opportunities
- Never mock or allow mocking of mistakes

## The Joy Curriculum

Add these to every week:
- **Monday Energy**: Start the week with an energising activity
- **Wednesday Curiosity**: Show something surprising or counterintuitive mid-week
- **Friday Celebration**: End the week by celebrating learning and effort`,
            practicalExample: {
              title: "Transforming a 'Dead' Period into the Students' Favourite Class",
              scenario: "Class 9, last period on Friday. Students are exhausted and disengaged. History lesson on the Mughal Empire.",
              steps: [
                "Pattern interrupt: Start class by asking 'If you could have any superpower from history, what would it be and why?'",
                "10 min input: Use 5 vivid stories (Akbar's childhood, Babur's battles) instead of reading from textbook",
                "10 min activity: 'Mughal Emperor for a Day' — pairs decide 3 laws they'd make and why",
                "5 min: Teams share their laws — class votes on best idea",
                "5 min: Quick exit ticket — one fact, one question, one wow-moment from today",
                "End: 'The most interesting thing we'll learn next week is...' (create suspense)"
              ],
              tips: [
                "Energy is contagious — walk in enthusiastically even when you don't feel it",
                "A story is 10x more memorable than a definition",
                "Name the activity: 'Emperor for a Day' sounds more exciting than 'group discussion'",
                "Leave them wanting more — hint at next lesson's exciting angle"
              ]
            },
            keyTakeaways: [
              "Positive emotions release dopamine — joy is not a luxury but a learning requirement",
              "Predictability is the enemy of engagement — interrupt patterns at least once per lesson",
              "The 10:2 rule prevents passive learning: 10 minutes input, 2 minutes processing",
              "A 'mistakes are data' culture removes fear and unleashes participation"
            ]
          },
          {
            id: "fun-m1-l2",
            title: "Games, Movement and Energy Builders",
            duration: "8 min",
            description: "A toolkit of ready-to-use games and energisers for every subject and class size.",
            content: `# Games, Movement and Energy Builders

## Why Movement Matters

The brain needs blood and oxygen. After 20 minutes of sitting, cognitive performance drops. Incorporating movement:
- Reactivates attention and focus
- Breaks monotony without wasting time
- Is especially powerful for kinesthetic learners
- Takes only 2-3 minutes

## Quick Energisers (2-3 Minutes)

### Brain Gym Activities
- **Cross-Crawl**: Touch right elbow to left knee, alternating — 30 seconds. Activates both brain hemispheres.
- **Eye Figure-8**: Trace a large figure-8 with your eyes 5 times. Improves focus.

### Physical Energisers
- **Stand and Share**: Students stand, find a partner, share their answer, sit down
- **Four Corners**: Label 4 corners A/B/C/D. Ask a question. Students move to their answer corner.
- **Human Number Line**: For a maths question, students arrange themselves in order of their answer

## Learning Games (5-10 Minutes)

### Quiz Games
- **Kahoot-style (No Tech Version)**: Students hold up number cards 1-4 for MCQ answers
- **Team Quiz Bowl**: Two teams, one representative comes forward to answer, earn points
- **Jeopardy-style**: Create a grid of questions by category and difficulty

### Vocabulary/Concept Games
- **Word Charades**: One student acts out a vocabulary word, class guesses
- **Concept Tennis**: Teacher says a term, student says something associated, then they say another, volley back and forth
- **30-Second Explain**: Partner A explains a concept in 30 seconds, Partner B asks one clarifying question

### Review Games
- **Snowball Fight**: Students write a question on paper, crumple it up, throw it, whoever catches it must answer
- **Stand Up/Sit Down Review**: Read statements — stand if true, sit if false
- **Exit Ticket Challenge**: First 5 students to correctly answer a question leave class first`,
            practicalExample: {
              title: "Building a Fun Friday Review Routine",
              scenario: "Last 15 minutes of class each Friday — review the week's learning through games.",
              steps: [
                "Minutes 1-2: Energiser — Cross-Crawl or Four Corners warm-up",
                "Minutes 3-7: Team Quiz Bowl — 8 questions from the week, alternate teams, 1 point per answer",
                "Minutes 8-11: Snowball Fight — students write one question, throw, answer what they catch",
                "Minutes 12-15: Class creates a 'What We Learned This Week' mind map together on the board",
                "Announce next week's 'Friday Game' — creates anticipation throughout the week"
              ],
              tips: [
                "Name the routine: 'Fun Friday' or 'Game Day Friday' — students look forward to it",
                "Keep a running class scoreboard on the wall — track team points all term",
                "Let students create the quiz questions on Thursday — they'll study to stump each other",
                "Video record one session to show parents what engaged learning looks like"
              ]
            },
            keyTakeaways: [
              "Movement every 20 minutes reactivates the brain and improves retention",
              "2-3 minute energisers cost no learning time but pay back in focus and energy",
              "Games create safe competition and make revision enjoyable",
              "Student-created quiz questions are the deepest form of review learning"
            ]
          }
        ]
      },
      {
        id: "fun-m2",
        title: "Storytelling and Humour in Teaching",
        description: "Use stories, anecdotes, and appropriate humour to make content unforgettable",
        lessons: [
          {
            id: "fun-m2-l1",
            title: "Every Lesson Is a Story",
            duration: "8 min",
            description: "Transform dry content into compelling narratives that students remember for years.",
            content: `# Every Lesson Is a Story

## The Story Brain

Humans are hardwired for stories. When you tell a story:
- All 5 language-processing areas of the brain activate (vs. 2 for facts alone)
- Memory retention increases by up to 22x compared to bullet-point lists
- Emotional engagement triggers the release of oxytocin — the trust chemical

## The Story Structure for Teaching

Every great teaching story has:
1. **A character** students can relate to (not just a famous scientist — a young person who faced a problem)
2. **A problem or challenge** (creates tension and curiosity)
3. **A journey** (attempts, failures, unexpected discoveries)
4. **A resolution** (the concept being taught is the solution)

### Example: Teaching Archimedes' Principle
Instead of: "Archimedes' principle states that the buoyant force on an object..."

Try: "Imagine the King of Syracuse accuses his goldsmith of cheating him. He asks the wisest man in the city — Archimedes — to prove it without melting the crown. Archimedes is stuck for weeks. Then one day, stepping into his bath, he notices... [pause] ... the water overflows. He leaps out and runs through the streets shouting 'EUREKA!' What did he discover?"

The story creates a hook that makes the concept memorable.

## Finding Stories in Your Subject

Every topic has a story:
- **History**: Every event was once an uncertain, frightening present for real people
- **Science**: Every discovery was once a mystery someone obsessed over
- **Mathematics**: Many formulas were discovered by people making creative leaps
- **Literature**: Every character faced choices that reflect real human experience

## Building Your Story Library

Collect stories by:
- Reading biographies of scientists, reformers, artists related to your curriculum
- Asking older teachers for their "best stories" about topics
- Finding regional and local stories connected to national curriculum content`,
            practicalExample: {
              title: "Opening a Science Lesson with a Story Hook",
              scenario: "Class 7, lesson on gravity. Replace the textbook definition opening.",
              steps: [
                "Walk in silently. Drop a book on the floor. Look at it with exaggerated confusion.",
                "Ask: 'Why did that fall DOWN? Why not sideways or up?'",
                "Tell story: 'In 1666, a 23-year-old man was forced to leave university because of a plague — sound familiar? He went home and spent a year under an apple tree...'",
                "Build tension: 'For weeks he watched things fall. Then he asked a question no one had ever thought to ask before...'",
                "Pause. Ask class: 'What question do you think he asked?'",
                "Take 3-4 answers. Build on them. Reveal Newton's question.",
                "Now teach the concept — the story has created the hook"
              ],
              tips: [
                "Pause at the most tense moment before revealing the answer — silence is powerful",
                "Use your voice: get quieter for suspense, louder for excitement",
                "Physical props (the dropped book) activate attention before you say a word",
                "End the lesson by returning to the story: 'So what answer did Newton finally find?'"
              ]
            },
            keyTakeaways: [
              "Stories activate 5x more brain areas than facts — they are the ultimate memory tool",
              "Every curriculum topic has a hidden story waiting to be discovered",
              "Story structure (character, problem, journey, resolution) makes any concept compelling",
              "Strategic pauses during storytelling dramatically increase student engagement"
            ]
          }
        ]
      }
    ]
  }
];
