import { Course } from "./courseData";

// 10 evidence-based, proven professional development courses for school teachers.
// Each course: 2 modules × 1 lesson — substantive, classroom-ready, certificate-eligible.

export const provenTeacherCourses: Course[] = [
  // 1. CLASSROOM MANAGEMENT MASTERY
  {
    id: "classroom-management-mastery",
    title: "Classroom Management Mastery",
    description: "Proven routines, rules, and responses that build a calm, focused classroom — from Day 1 procedures to handling chronic disruption without losing your cool.",
    longDescription: "Drawing on Harry Wong's First Days of School, Lemov's Teach Like a Champion, and decades of classroom research, this course gives you a complete management toolkit. Learn to design routines that prevent 90% of misbehaviour, use the least-invasive interventions when issues arise, and build the kind of classroom culture where students self-regulate. Tested in schools from CBSE metros to government schools in tier-3 towns.",
    category: "Classroom Practice",
    duration: "3 weeks",
    students: 5120,
    rating: 4.9,
    aiPowered: false,
    instructor: "Anita Rao",
    instructorBio: "22-year veteran teacher and teacher-coach. Trained over 8,000 educators in classroom management across India.",
    modules: [
      {
        id: "cmm-m1",
        title: "Prevention: Routines That Run the Room",
        description: "Design routines and procedures so the classroom runs itself.",
        lessons: [
          {
            id: "cmm-m1-l1",
            title: "The First 5 Minutes: Routines That Set the Tone",
            duration: "9 min",
            description: "Teach the 6 entry routines that eliminate the most common disruptions before class even begins.",
            content: `# The First 5 Minutes: Routines That Set the Tone\n\n## Why Routines Beat Rules\nRules tell students what NOT to do. Routines tell them exactly WHAT to do, every time. Research (Marzano, 2003) shows well-taught routines reduce off-task behaviour by 28%.\n\n## The 6 Entry Routines\n1. **Threshold greeting** — stand at the door, eye contact, name, smile. Resets every student emotionally.\n2. **Do Now** — a written task on the board the moment they sit. No teacher input needed for 4-5 minutes.\n3. **Materials check** — visual checklist on the board. Students self-audit.\n4. **Attendance by task** — take attendance while students work, not by calling names.\n5. **Agenda visible** — today's objectives and homework written in the same corner every day.\n6. **Transition signal** — a clap pattern, bell, or phrase ("Track me in 3, 2, 1") that means full attention.\n\n## Teaching the Routine (3-Step Method)\n1. **Explain** the routine and WHY it matters.\n2. **Model** it yourself, then have students model.\n3. **Practise** until it's automatic — usually 3-5 repetitions over the first week.\n\n## The Reset\nIf the routine breaks down: stop, re-teach, re-practise. Never tolerate a sloppy routine — it sets the ceiling for everything else.`,
            practicalExample: {
              title: "Implementing the Do Now in a 50-Student Class 8",
              scenario: "Your Class 8 maths section is chaotic at the start of every period. Students wander in, chat, take 7-8 minutes to settle.",
              steps: [
                "Day 1: Write a 3-question Do Now on the board before students arrive. Stand at the door.",
                "Greet each student by name. Point silently at the Do Now as they enter.",
                "Once 80% are seated and working, walk around silently — no announcements.",
                "After 4 minutes: 'Pencils down in 3, 2, 1. Let's check answer 1.'",
                "Repeat every single day for 2 weeks. By week 3 it runs itself.",
                "Track time-on-task: typically goes from 60% to 92% within a month."
              ],
              tips: [
                "Pick a Do Now that reviews yesterday OR previews today — never busywork.",
                "Never start teaching new content until the Do Now is debriefed.",
                "If 5+ students are late, address the lateness pattern separately, not during the Do Now."
              ]
            },
            keyTakeaways: [
              "Routines prevent more problems than consequences ever fix.",
              "The Do Now buys you 4-5 minutes to take attendance, check materials, and breathe.",
              "Teach, model, practise — then enforce relentlessly for 3 weeks.",
              "A well-run first 5 minutes determines the tone of the next 35."
            ]
          }
        ]
      },
      {
        id: "cmm-m2",
        title: "Response: The Ladder of Intervention",
        description: "Handle off-task and defiant behaviour without escalation.",
        lessons: [
          {
            id: "cmm-m2-l1",
            title: "Least-Invasive Interventions: Stop Misbehaviour Without Stopping the Lesson",
            duration: "8 min",
            description: "Use the 6-step intervention ladder from Lemov's research to address misbehaviour while the lesson keeps moving.",
            content: `# Least-Invasive Interventions\n\n## The Principle\nEvery intervention has a cost — it interrupts learning for everyone. Use the SMALLEST intervention that works.\n\n## The 6-Step Ladder (use in order)\n1. **Non-verbal** — eye contact, a hand gesture, a step closer. Lesson never pauses.\n2. **Positive group correction** — "I need everyone tracking the board." No name used.\n3. **Anonymous individual correction** — "We need two more people with us." Student knows you mean them.\n4. **Private individual correction** — quiet word at the student's desk while others work.\n5. **Lightning-quick public correction** — "Ravi, pencil down" — fast, neutral, no lecture.\n6. **Consequence** — calmly stated, never threatened, applied consistently.\n\n## What NOT To Do\n- Don't lecture in front of the class — it humiliates and escalates.\n- Don't ask "Why are you doing that?" — invites argument.\n- Don't make threats you won't follow through on.\n- Don't take it personally — the behaviour is usually not about you.\n\n## The Recovery Conversation\nAfter the lesson, find the student privately:\n- "I noticed X happened today. What was going on?"\n- "Tomorrow is a fresh start. What do you need from me?"\nThis preserves relationship, which is the #1 predictor of long-term behaviour.`,
            practicalExample: {
              title: "Handling a Chronic Talker in Class 9 English",
              scenario: "Sameer talks during every lesson. He's bright but disruptive. You've already given 3 detentions this month with no change.",
              steps: [
                "Stop using consequences as your first move — they've stopped working for him.",
                "Lesson 1: Stand near his desk while teaching. He stops talking. No words exchanged.",
                "Lesson 2: When he starts, make eye contact and shake your head slightly. Keep teaching.",
                "After class: private 30-second chat — 'Sameer, I need you with me. What's distracting you?'",
                "Listen. Often the answer is boredom, anxiety, or a friend conflict.",
                "Co-create a signal: 'If I tap your desk, that's your cue to refocus — no public correction.'",
                "Track: incidents typically drop 60-70% within 2 weeks with this approach."
              ],
              tips: [
                "Proximity is the most underused tool — just walk over.",
                "Never correct a behaviour in front of the class if a private word will do.",
                "The recovery conversation matters more than the correction."
              ]
            },
            keyTakeaways: [
              "Most misbehaviour can be stopped non-verbally — preserve learning time.",
              "Public lectures escalate; private words de-escalate.",
              "Consequences should be the last step, not the first.",
              "Relationship is the long game — repair it after every correction."
            ]
          }
        ]
      }
    ]
  },

  // 2. DIFFERENTIATED INSTRUCTION & UDL
  {
    id: "differentiated-instruction-udl",
    title: "Differentiated Instruction & Universal Design for Learning",
    description: "Teach mixed-ability classes effectively — proven UDL strategies that reach every learner without creating 40 separate lesson plans.",
    longDescription: "Based on Carol Ann Tomlinson's differentiation framework and CAST's UDL guidelines, this course shows you how to design ONE lesson that genuinely works for advanced learners, struggling learners, and English-language learners simultaneously. No more 'teaching to the middle'.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 3890,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Faisal Ahmed",
    instructorBio: "Inclusive education specialist, PhD in Curriculum Design (TISS). Consults with CBSE on differentiation frameworks.",
    modules: [
      {
        id: "diu-m1",
        title: "The 3 Levers of Differentiation",
        description: "Differentiate content, process, and product — without doubling your prep time.",
        lessons: [
          {
            id: "diu-m1-l1",
            title: "Content, Process, Product: The Tomlinson Framework",
            duration: "9 min",
            description: "Learn the 3 things you can differentiate in any lesson and a 30-minute planning template that makes it sustainable.",
            content: `# Content, Process, Product\n\n## The 3 Levers\n- **Content** — WHAT students learn (or how they access it)\n- **Process** — HOW they engage with it\n- **Product** — HOW they demonstrate learning\n\nYou rarely differentiate all three in one lesson. Pick ONE per lesson.\n\n## Differentiating Content\n- Provide the same text at 2-3 reading levels (Newsela, Rewordify, or simplified versions you write).\n- Offer audio, video, AND text for the same concept.\n- Pre-teach vocabulary to ELL students or those with reading difficulties.\n\n## Differentiating Process\n- Tiered tasks: same objective, 3 difficulty levels (entry, on-level, stretch).\n- Flexible grouping: change groupings by lesson — sometimes ability, sometimes mixed, sometimes interest.\n- Choice boards: 9 activities, students pick 3 in a tic-tac-toe pattern.\n\n## Differentiating Product\n- Same content, different demonstrations: essay, poster, podcast, skit, infographic.\n- RAFT format: Role, Audience, Format, Topic — gives structure to choice.\n- Universal rubric across formats — assess the THINKING, not the format.\n\n## The 30-Minute Planning Rule\nDon't differentiate everything. For each lesson, ask: where is the gap widest in MY class? Differentiate THAT lever this week.`,
            practicalExample: {
              title: "Differentiating a Class 7 Science Lesson on Photosynthesis",
              scenario: "Class 7, 42 students. Reading levels span Class 4 to Class 10. Some have studied photosynthesis in Class 6; others haven't.",
              steps: [
                "Content: Provide the textbook chapter, a 2-minute YouTube animation (project for all), and a simplified one-page summary for struggling readers.",
                "Process: 3-tier task. Tier 1 — label a diagram. Tier 2 — explain the process in 5 sentences. Tier 3 — design an experiment to prove plants need sunlight.",
                "Students choose their tier (with teacher guidance for those who under/over-estimate).",
                "Product: Everyone writes a 1-paragraph 'Photosynthesis explained to a Class 3 student'.",
                "Assessment: Same rubric — accuracy, clarity, scientific vocabulary."
              ],
              tips: [
                "Don't label tiers 'easy/medium/hard' — call them 'Foundation, Core, Extension'.",
                "Let students self-select tier, then move 2-3 who chose wrong — privately.",
                "Tier 3 is NOT extra work — it's a different KIND of work."
              ]
            },
            keyTakeaways: [
              "Differentiate one lever per lesson — not all three.",
              "Tiered tasks let one lesson reach every learner.",
              "Product choice with a universal rubric assesses thinking, not format.",
              "Sustainable differentiation = small, consistent moves, not heroic overhauls."
            ]
          }
        ]
      },
      {
        id: "diu-m2",
        title: "UDL: Designing Lessons That Reach Everyone",
        description: "Apply the 3 UDL principles to lesson design.",
        lessons: [
          {
            id: "diu-m2-l1",
            title: "Multiple Means of Engagement, Representation, and Expression",
            duration: "8 min",
            description: "Use the UDL framework to design lessons that proactively include every learner — no retrofitting needed.",
            content: `# UDL: The 3 Principles\n\n## Why UDL\nDifferentiation is REACTIVE — adjust after problems show up. UDL is PROACTIVE — design the lesson so problems don't arise.\n\n## The 3 Principles\n\n### 1. Multiple Means of ENGAGEMENT (the WHY of learning)\n- Offer choice in topics, tools, or formats\n- Connect to student lives — what matters to them?\n- Vary the level of challenge to maintain "productive struggle"\n- Build in self-reflection: "What strategy worked best for you today?"\n\n### 2. Multiple Means of REPRESENTATION (the WHAT of learning)\n- Present info through text, image, audio, video, and demonstration\n- Highlight critical features (bold key terms, colour-code concepts)\n- Provide vocabulary support and background knowledge\n- Allow customisation (font size, playback speed)\n\n### 3. Multiple Means of EXPRESSION (the HOW of demonstrating)\n- Let students respond verbally, in writing, visually, or through performance\n- Allow drafting and revision — not just one-shot assessments\n- Provide graphic organisers, sentence stems, exemplars\n\n## The "Plus-1" Rule\nFor every lesson, add ONE additional means of representation, engagement, or expression to what you already do. Over a month, your lessons become genuinely accessible to every learner.`,
            practicalExample: {
              title: "UDL Redesign of a Class 10 Civics Lesson",
              scenario: "Class 10 lesson on the Indian Constitution. Standard delivery: read the textbook, summarise, answer questions.",
              steps: [
                "Engagement: Open with 'Should the voting age be lowered to 16? Why or why not?' — connects to student life.",
                "Representation: Pair textbook reading with a 4-minute video and a one-page infographic of key articles.",
                "Expression: Choose your output — write a letter to your MP, create an infographic, record a 2-min podcast, or perform a skit.",
                "Provide sentence stems and exemplars for each format.",
                "Common rubric: accuracy of constitutional content, quality of argument, clarity of communication.",
                "Self-reflection exit ticket: 'Which format helped you understand best? Why?'"
              ],
              tips: [
                "Don't redesign every lesson at once — pick one per week.",
                "Save student-created exemplars to use as models next year.",
                "Choice doesn't mean chaos — provide structure WITHIN choices."
              ]
            },
            keyTakeaways: [
              "UDL is proactive design — differentiation is reactive adjustment.",
              "The 3 principles: engagement, representation, expression.",
              "Plus-1 your lessons each week to build UDL habits sustainably.",
              "Choice with structure produces better learning than choice without it."
            ]
          }
        ]
      }
    ]
  },

  // 3. BACKWARD DESIGN LESSON PLANNING
  {
    id: "backward-design-planning",
    title: "Backward Design: Effective Lesson Planning",
    description: "Plan lessons that actually produce learning using the Understanding by Design (UbD) framework by Wiggins & McTighe.",
    longDescription: "Stop planning activities and start planning outcomes. This course teaches the 3-stage backward design process used by top schools worldwide. You'll leave with a unit plan template that aligns assessment, instruction, and student learning — and saves you hours of planning over the year.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 2980,
    rating: 4.8,
    aiPowered: false,
    instructor: "Sunita Iyer",
    instructorBio: "Curriculum coach, 18 years in international schools, certified UbD trainer.",
    modules: [
      {
        id: "bdp-m1",
        title: "The 3 Stages of Backward Design",
        description: "Start with the end in mind.",
        lessons: [
          {
            id: "bdp-m1-l1",
            title: "Stage 1 & 2: Outcomes and Evidence Before Activities",
            duration: "9 min",
            description: "Define what students should understand and how you'll know they've got it — BEFORE planning a single activity.",
            content: `# Backward Design: Stages 1 & 2\n\n## The Problem with Forward Design\nMost teachers plan: 'What will we DO in class?' This leads to engaging but disconnected activities. Backward design flips it: 'What should students UNDERSTAND, and how will we KNOW?'\n\n## Stage 1: Identify Desired Results\nAsk three questions:\n1. What should students KNOW (facts, vocabulary)?\n2. What should they be able to DO (skills)?\n3. What should they UNDERSTAND (big ideas, transferable concepts)?\n\nWrite 1-2 **Essential Questions** per unit — open-ended, debatable, recurring.\n- Bad: "What is photosynthesis?"\n- Good: "How do living things depend on each other to survive?"\n\n## Stage 2: Determine Acceptable Evidence\nBEFORE planning activities, design the assessment.\n- **Performance task** — a real-world application (design a garden, write to a leader, create a model)\n- **Other evidence** — quizzes, exit tickets, observations\n\nThe key question: "What would a student who truly UNDERSTANDS this be able to do that one who memorised facts could NOT?"\n\n## Why This Order Matters\nIf the assessment doesn't exist when you start planning lessons, you'll teach activities — not outcomes. Define the destination first.`,
            practicalExample: {
              title: "Backward Designing a Class 8 Unit on Fractions",
              scenario: "Class 8 maths — 3-week unit on fractions and decimals. Previous approach: cover textbook chapter, quiz at the end.",
              steps: [
                "Stage 1 — Understanding: 'Fractions and decimals are two ways to describe the same quantity.'",
                "Essential Question: 'When is a fraction more useful than a decimal — and vice versa?'",
                "Stage 2 — Performance task: Students design a recipe for a class party serving 45 people (real number). They scale up a recipe for 4 people, choose whether to use fractions or decimals, and justify their choice.",
                "Other evidence: Daily exit tickets, mid-unit quiz on conversion.",
                "NOW plan Stage 3 — lessons that build toward that performance task.",
                "Assessment rubric: mathematical accuracy, justification quality, real-world appropriateness."
              ],
              tips: [
                "Essential questions don't have one right answer — that's the point.",
                "Performance tasks should require both KNOWLEDGE and JUDGEMENT.",
                "Show students the performance task on Day 1 — it gives the unit purpose."
              ]
            },
            keyTakeaways: [
              "Plan outcomes first, then assessment, THEN activities.",
              "Essential questions drive deep learning — write 1-2 per unit.",
              "Performance tasks require students to transfer learning, not just recall.",
              "If you can't design the assessment, your outcome isn't clear enough."
            ]
          }
        ]
      },
      {
        id: "bdp-m2",
        title: "Stage 3: WHERETO Lesson Design",
        description: "Plan learning experiences that build toward the assessment.",
        lessons: [
          {
            id: "bdp-m2-l1",
            title: "The WHERETO Framework for Daily Lessons",
            duration: "8 min",
            description: "Use Wiggins' WHERETO checklist to design lessons that hook, hold, and stretch every learner.",
            content: `# WHERETO: A Lesson Design Checklist\n\nEvery effective unit hits these 7 elements over its duration. Use as a planning audit.\n\n## W — Where & Why\nMake the destination and purpose explicit. Day 1: post the essential question, show the performance task. Students know WHERE they're going and WHY it matters.\n\n## H — Hook & Hold\nOpen with curiosity. A puzzle, a surprising fact, a controversial statement, a video clip. Re-hook periodically — attention is not a one-time thing.\n\n## E — Equip & Experience\nProvide the knowledge, skills, and tools students need. Mix direct teaching, hands-on activities, and modelling. Front-load less; spread practice more.\n\n## R — Rethink & Revise\nBuild in checkpoints where students revise their thinking. "What did you believe before? What do you believe now? Why?" — metacognition deepens learning.\n\n## E — Evaluate (self-assess)\nStudents assess their own work against the rubric BEFORE submitting. Self-assessment improves performance more than teacher feedback alone (Hattie effect size: 1.44).\n\n## T — Tailor\nDifferentiate (see UDL course). Same destination, different paths.\n\n## O — Organise\nSequence for maximum learning, not for textbook order. What needs to come before what? Where does difficulty escalate?`,
            practicalExample: {
              title: "Applying WHERETO to a Class 6 History Unit on Civilisations",
              scenario: "3-week unit on early Indian civilisations (Indus Valley). Goal: students understand why civilisations rise and fall.",
              steps: [
                "W: Day 1 — 'Why did the Indus Valley civilisation disappear?' Post on the board. Show artefact images.",
                "H: Open with a mystery — 'These cities had toilets, drainage, planned streets in 2500 BCE — better than many cities today. What happened?'",
                "E: 4 lessons of content — geography, society, trade, decline theories. Mix readings, videos, artefact analysis.",
                "R: Mid-unit — 'Your theory of decline so far?' Students write. Then introduce new evidence. Revise theory.",
                "E: Self-assess rough draft of final essay against rubric before submission.",
                "T: Differentiated readings, choice in final product (essay, podcast, museum exhibit panel).",
                "O: Sequence — geography first (sets context), then society, then decline (the puzzle resolves)."
              ],
              tips: [
                "Audit existing units against WHERETO — most are weak on R (rethink) and E (self-evaluate).",
                "The hook on Day 1 sets engagement for the whole unit.",
                "Build self-assessment into EVERY major task — it doubles learning."
              ]
            },
            keyTakeaways: [
              "WHERETO is a checklist, not a script — apply over the unit, not every lesson.",
              "Self-assessment has the largest effect size in education research.",
              "Sequence for learning, not for textbook order.",
              "Hooks and rethinking moments are where deep engagement lives."
            ]
          }
        ]
      }
    ]
  },

  // 4. BLOOM'S TAXONOMY IN ACTION
  {
    id: "blooms-taxonomy-action",
    title: "Bloom's Taxonomy in Action",
    description: "Move students from remembering to creating — design questions, tasks, and assessments that build higher-order thinking systematically.",
    longDescription: "Most classroom questions sit at the lowest level of Bloom's taxonomy: Remember. This course shows you how to design questions and tasks that move students up the ladder — Apply, Analyse, Evaluate, Create — without abandoning foundational knowledge. Includes 200+ question stems you can use tomorrow.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 3450,
    rating: 4.8,
    aiPowered: false,
    instructor: "Vikram Bhatia",
    instructorBio: "Educational psychologist, 15 years training teachers on assessment design and higher-order thinking.",
    modules: [
      {
        id: "bta-m1",
        title: "The 6 Levels and Why They Matter",
        description: "Understand the revised Bloom's taxonomy and audit your current questioning.",
        lessons: [
          {
            id: "bta-m1-l1",
            title: "Climbing the Pyramid: From Remember to Create",
            duration: "9 min",
            description: "Map the 6 cognitive levels with examples, question stems, and a 24-hour audit of your own teaching.",
            content: `# Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001)\n\n## The 6 Levels (low to high)\n1. **Remember** — recall facts (define, list, name)\n2. **Understand** — explain ideas (summarise, paraphrase, classify)\n3. **Apply** — use knowledge in new situations (solve, demonstrate, calculate)\n4. **Analyse** — break apart, find patterns (compare, contrast, examine)\n5. **Evaluate** — judge value (critique, defend, justify)\n6. **Create** — produce new work (design, compose, invent)\n\n## The Problem\nClassroom research shows 70-80% of teacher questions are Remember/Understand. Students never develop higher-order thinking because they're never asked to use it.\n\n## Question Stems by Level\n- **Remember**: "Define...", "List...", "Who/What/When..."\n- **Understand**: "Explain in your own words...", "Give an example of..."\n- **Apply**: "Solve this new problem using...", "How would you use X to..."\n- **Analyse**: "What are the parts of...?", "Compare X and Y", "Why does Z happen?"\n- **Evaluate**: "Which is better — X or Y? Defend your choice", "Critique this argument"\n- **Create**: "Design a...", "Compose a...", "Invent a solution for..."\n\n## The 24-Hour Audit\nFor one day, write down every question you ask. Tag each with its Bloom's level. Most teachers are shocked. Set a goal: at least 30% of questions at Analyse or above.`,
            practicalExample: {
              title: "Bloom's-Ladder Questions for a Class 9 Lesson on Newton's Laws",
              scenario: "Standard lesson: define the 3 laws, give examples, do textbook problems.",
              steps: [
                "Remember: 'State Newton's Second Law.'",
                "Understand: 'Explain why a heavier object needs more force to accelerate.'",
                "Apply: 'A 5kg cricket ball is hit with 50N of force. Calculate the acceleration.'",
                "Analyse: 'Compare how Newton's laws apply to a car braking and a footballer kicking a ball.'",
                "Evaluate: 'A student argues that seatbelts are unnecessary because of Newton's First Law. Is this argument valid? Defend your position.'",
                "Create: 'Design a simple experiment using classroom materials that demonstrates all 3 laws. Write up your method.'",
                "Use ONE question from each level across the lesson — not all in one go."
              ],
              tips: [
                "You don't need every level in every lesson — but every WEEK should hit Analyse/Evaluate/Create.",
                "Higher-order questions need wait time — count to 7 silently after asking.",
                "Don't accept the first surface answer — push: 'Why?' 'Defend that.' 'What's your evidence?'"
              ]
            },
            keyTakeaways: [
              "Most classroom questions are Remember/Understand — students never develop higher-order thinking.",
              "Use question stems to deliberately design higher-level questions.",
              "Aim for 30%+ of questions at Analyse or above.",
              "Wait time of 5-7 seconds is essential for higher-order responses."
            ]
          }
        ]
      },
      {
        id: "bta-m2",
        title: "Designing Tasks Up the Ladder",
        description: "Translate Bloom's into assessments, projects, and homework.",
        lessons: [
          {
            id: "bta-m2-l1",
            title: "Tiered Tasks and Higher-Order Assessments",
            duration: "8 min",
            description: "Convert routine assessments into tasks that demand analysis, evaluation, and creation.",
            content: `# Designing Higher-Order Tasks\n\n## The Test Audit\nLook at your last test. Tag each question by Bloom's level. Most school tests are 90% Remember/Understand. Students get 'A's by memorising. The taxonomy is invisible in the assessment, so it never shapes how they study.\n\n## The 30-40-30 Rule for Tests\n- 30% Remember/Understand — foundational knowledge\n- 40% Apply/Analyse — bulk of the test\n- 30% Evaluate/Create — distinguishing top performers\n\n## Higher-Order Question Templates\n- **Compare-Contrast Matrix**: "Compare A and B across these 4 dimensions. Which is more effective for X purpose?"\n- **Take a Position**: "Some people argue X. Others argue Y. Which do YOU support, and why? Use evidence from..."\n- **Design Challenge**: "Design a [solution / experiment / product] that solves [authentic problem]. Justify your design choices."\n- **Predict & Justify**: "What would happen if X changed? Predict the outcome and explain the reasoning."\n- **Critique**: "Read this [argument/data/student work]. What are its strengths? Weaknesses? How would you improve it?"\n\n## Rubrics for Higher-Order Work\nRubrics for Create/Evaluate work should assess:\n- Reasoning quality\n- Evidence use\n- Originality / insight\n- Communication clarity\nNOT just "right answer" — there often isn't one.`,
            practicalExample: {
              title: "Redesigning a Class 10 English Test on a Short Story",
              scenario: "Old test: 10 'what happened' questions, 1 'theme of the story' question. Average score: 78%. Top students bored, weak students just reproduce notes.",
              steps: [
                "Section A (30%) — Recall: Who, what, where, when about the story.",
                "Section B (40%) — Apply/Analyse: 'Analyse how the author uses setting to develop mood. Cite 3 specific examples.'",
                "Section C (30%) — Evaluate/Create: 'The protagonist's choice at the end has been called both heroic and selfish. Take a position and defend with textual evidence.' OR 'Rewrite the final scene with a different choice. Justify why your version creates a different theme.'",
                "Provide rubric in advance.",
                "Results: top students now have to think; weak students still pass Section A; teachers can see WHO can think, not just who memorised."
              ],
              tips: [
                "Higher-order questions should be ANSWERABLE — don't make them so open they're vague.",
                "Always provide rubrics in advance — students should know what 'excellent' looks like.",
                "Don't grade higher-order work with single-answer keys — train an exemplar-based eye."
              ]
            },
            keyTakeaways: [
              "If your assessment doesn't test higher-order thinking, students won't develop it.",
              "Use the 30-40-30 distribution as a test design guide.",
              "Higher-order tasks need rubrics, not answer keys.",
              "Open-ended ≠ vague — design questions with clear evaluation criteria."
            ]
          }
        ]
      }
    ]
  },

  // 5. COOPERATIVE LEARNING
  {
    id: "cooperative-learning-strategies",
    title: "Cooperative Learning Strategies",
    description: "Move beyond 'group work' to true cooperative learning — Kagan structures and Johnson & Johnson techniques proven to lift achievement by 0.5+ standard deviations.",
    longDescription: "Group work often fails: one student does the work, others coast. Cooperative learning, when done right, is among the most effective interventions in education (Hattie's effect size 0.42-0.59). Learn the 5 essential elements and 8 proven structures you can deploy in any subject, any class size.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 3120,
    rating: 4.7,
    aiPowered: false,
    instructor: "Reena Banerjee",
    instructorBio: "Kagan-certified trainer, 14 years implementing cooperative learning in CBSE and ICSE schools.",
    modules: [
      {
        id: "cls-m1",
        title: "The 5 Essential Elements (PIES)",
        description: "What separates cooperative learning from regular group work.",
        lessons: [
          {
            id: "cls-m1-l1",
            title: "PIES: The Difference Between Group Work and Real Learning",
            duration: "9 min",
            description: "Master the 5 elements (Positive Interdependence, Individual Accountability, Equal Participation, Simultaneous Interaction) that make group work actually work.",
            content: `# Why Most Group Work Fails\n\nTeachers say 'work in groups of 4' — and one student does the work, two chat, one disengages. Cooperative learning research (Johnson & Johnson, Kagan) identifies 5 elements (PIES + 1) that must ALL be present for groups to produce learning.\n\n## The 5 Elements\n\n### P — Positive Interdependence\nStudents must NEED each other to succeed. Build in:\n- Shared goal (one product per group)\n- Divided resources (each student has one piece of info)\n- Role interdependence (each has a specific role)\n\n### I — Individual Accountability\nEVERY student must be assessed individually. Add:\n- Random call-on at the end ('I'll pick one student to explain')\n- Individual quiz after group work\n- Each student signs ONE specific contribution\n\n### E — Equal Participation\nWithout structure, dominant students take over. Use:\n- Numbered Heads — each student is 1, 2, 3, or 4 and may be called on\n- Timed Round Robin — each student gets 30 seconds to speak before next\n- Talking Chips — each student has 3 chips, spends one per contribution\n\n### S — Simultaneous Interaction\nIn a class of 40, only 1 student talks at a time in traditional teaching = 1/40 engagement. With pair work = 20/40 talking simultaneously. Use pair and small-group structures, not whole-class discussion alone.\n\n### Plus: Group Processing\nAt the end, groups reflect: 'What worked? What will we improve next time?'`,
            practicalExample: {
              title: "Setting Up True Cooperative Learning for Class 8 Geography",
              scenario: "Topic: Climate zones of India. Old approach: 'Work in groups, make a chart on climate zones.' Result: one student draws, rest watch.",
              steps: [
                "Form groups of 4. Assign numbers 1-4.",
                "Positive interdependence: Each student gets info on ONE climate zone (jigsaw). Group must produce a 4-zone comparison chart.",
                "Individual accountability: After 20 minutes, randomly call '#3 from each group, come explain your zone to the whole class.'",
                "Equal participation: Round robin within the group — each speaker has 90 seconds to teach their zone. Others take notes.",
                "Simultaneous interaction: At any moment, all 10 groups have one student teaching, three listening. 40 students engaged simultaneously.",
                "Group processing: Last 3 minutes — 'Rate your group on participation 1-5. What's one thing to improve next time?'"
              ],
              tips: [
                "Roles are essential: Speaker, Recorder, Materials Manager, Encourager.",
                "Random calling is the secret weapon — students prepare because they MIGHT be called.",
                "Groups of 4 work better than 5+ — more interaction per student."
              ]
            },
            keyTakeaways: [
              "Group work without PIES is just chaos with desks pushed together.",
              "Positive interdependence and individual accountability are non-negotiable.",
              "Random calling drives preparation more than any other strategy.",
              "Group processing turns experience into improvement."
            ]
          }
        ]
      },
      {
        id: "cls-m2",
        title: "8 Structures You Can Use Tomorrow",
        description: "Plug-and-play cooperative learning structures across subjects.",
        lessons: [
          {
            id: "cls-m2-l1",
            title: "Kagan Structures: Pair, Group, Class",
            duration: "8 min",
            description: "Master 8 proven cooperative structures — from Think-Pair-Share to Jigsaw to Numbered Heads Together.",
            content: `# 8 Cooperative Learning Structures\n\n## Pair Structures\n\n### 1. Think-Pair-Share\nThink 30s → Pair share 60s → Random Share with class. The most-used cooperative structure for a reason. Use after every higher-order question.\n\n### 2. Rally Robin\nIn pairs, take turns generating responses. "List as many uses of fractions in daily life as you can — alternate turns." Builds fluency.\n\n### 3. Sage and Scribe\nOne partner gives directions, other writes/draws. Roles swap. Forces clear communication. Great for maths problems.\n\n## Small-Group Structures\n\n### 4. Numbered Heads Together\nGroups of 4 (numbered 1-4). Teacher poses question. Group discusses until everyone can answer. Teacher calls a number — that student answers for the group.\n\n### 5. Round Table\nOne paper per group. Students pass it around, each adding one item. Great for brainstorming, listing, vocabulary.\n\n### 6. Jigsaw\nGroup of 4 splits into 4 expert groups (one topic each). Experts learn deeply. Return to original group. Each teaches their expertise. Every student is teacher and learner.\n\n## Whole-Class Structures\n\n### 7. Carousel\nPost 4-6 chart papers around the room with different questions. Groups rotate, each adding to the previous group's responses. Great for review or generating ideas.\n\n### 8. Inside-Outside Circle\nHalf the class forms an inner circle facing out, half forms an outer circle facing in. Pairs discuss. Outer circle rotates one position. New pair, new question. Highly active, lots of variety.\n\n## When to Use What\n- Quick check for understanding → Think-Pair-Share\n- Brainstorming → Round Table or Carousel\n- Teaching new content → Jigsaw\n- Review for test → Inside-Outside Circle\n- Problem solving → Numbered Heads or Sage and Scribe`,
            practicalExample: {
              title: "Using 3 Structures in One Class 9 English Period (40 min)",
              scenario: "Topic: Poetry analysis of a Robert Frost poem.",
              steps: [
                "Opening (8 min) — Think-Pair-Share: 'Read the poem silently. What is one image that struck you? Pair-share. Random call on 3.'",
                "Middle (20 min) — Jigsaw: Groups of 4 split. Each expert group analyses ONE element (imagery, meter, theme, tone). Return and teach.",
                "Closing (10 min) — Numbered Heads: 'In your group of 4, agree on the 1-sentence interpretation of the poem. I'll call a number from each group to share.'",
                "Exit ticket — Individual: 'In 3 sentences, what does this poem mean to you personally?' (accountability)"
              ],
              tips: [
                "Don't try 8 structures at once — master 2-3 first.",
                "Time-box every structure — give a clear "1 minute remaining" warning.",
                "Practise the structure FIRST with low-stakes content before using for assessment."
              ]
            },
            keyTakeaways: [
              "Cooperative structures are repeatable templates — use them weekly across subjects.",
              "Jigsaw is the most powerful for teaching new content.",
              "Think-Pair-Share should follow every higher-order question.",
              "Master 2-3 structures deeply before adding more."
            ]
          }
        ]
      }
    ]
  },

  // 6. READING & LITERACY ACROSS THE CURRICULUM
  {
    id: "literacy-across-curriculum",
    title: "Reading & Literacy Across the Curriculum",
    description: "Every teacher is a reading teacher. Proven strategies to build literacy in science, maths, history — not just English class.",
    longDescription: "Indian school data shows 50%+ of students in middle school read 2-3 grade levels below their class level. This course gives every teacher — whatever subject — concrete strategies to build vocabulary, comprehension, and content-specific literacy. Based on the Reading Apprenticeship framework and CBSE's NIPUN Bharat initiative.",
    category: "Pedagogy",
    duration: "3 weeks",
    students: 2780,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Lakshmi Narayanan",
    instructorBio: "Literacy researcher, ASER Centre alum, 20 years building reading programmes in Indian government schools.",
    modules: [
      {
        id: "lac-m1",
        title: "Vocabulary: The Hidden Barrier",
        description: "Build content-specific vocabulary that unlocks comprehension.",
        lessons: [
          {
            id: "lac-m1-l1",
            title: "Tier 2 and Tier 3 Vocabulary: What to Teach and How",
            duration: "9 min",
            description: "Use Beck & McKeown's 3-tier vocabulary framework to choose words that matter and teach them effectively.",
            content: `# Why Vocabulary is the Hidden Curriculum\n\nA Class 7 student reading 'photosynthesis' may know the word — but does she know 'process', 'convert', 'energy', 'organism'? These 'tier 2' academic words appear across subjects and are NEVER explicitly taught. They become the silent barrier.\n\n## The 3-Tier Framework\n\n### Tier 1 — Everyday words (run, happy, water)\nDon't teach. Students know these.\n\n### Tier 2 — Academic words (analyse, compare, justify, evident, significant)\nTEACH HEAVILY. These appear across subjects and unlock comprehension everywhere.\n\n### Tier 3 — Domain-specific (mitochondria, parallelogram, monsoon, sonnet)\nTeach when needed — these are tied to specific topics.\n\n## The 6-Step Vocabulary Routine\n1. **Say the word** — students repeat\n2. **Give a student-friendly definition** — NOT a dictionary one\n3. **Give 2-3 examples** in context\n4. **Give a non-example** — 'A monsoon is NOT a regular rain shower'\n5. **Have students use it** — in a sentence, with a partner\n6. **Return to it** — over the next 2 weeks, use it 8-10 times. Mastery requires multiple exposures.\n\n## The 5-a-Week Rule\nDon't teach 30 words a week — none will stick. Teach 5 Tier 2 words deeply. Over a school year, that's 200+ academic words students truly own.`,
            practicalExample: {
              title: "Teaching Vocabulary in a Class 8 Science Class",
              scenario: "Chapter: Force and Pressure. Old approach: tell students to look up unfamiliar words for homework.",
              steps: [
                "Pick 5 Tier 2 words for the week: 'exert', 'apply', 'distribute', 'concentrate', 'transfer'.",
                "Pick 5 Tier 3 words: 'force', 'pressure', 'thrust', 'fluid pressure', 'atmospheric pressure'.",
                "Day 1: Introduce each Tier 2 word with the 6-step routine — 2-3 minutes per word.",
                "Throughout the week: USE these words deliberately in your teaching. 'When you APPLY force, the pressure is DISTRIBUTED across...'",
                "Word wall: post the 10 words. Refer to them constantly.",
                "Friday exit ticket: students use 3 of the words in a science sentence.",
                "Track: students who couldn't read the textbook now can — academic vocabulary was the barrier."
              ],
              tips: [
                "Tier 2 words transfer to ALL subjects — invest there.",
                "Student-friendly definitions: 'Exert means to use force or effort' — not the dictionary version.",
                "Vocabulary mastery requires 6-10 meaningful exposures over weeks, not memorisation."
              ]
            },
            keyTakeaways: [
              "Academic Tier 2 words are the hidden barrier to comprehension.",
              "Teach 5 words per week, deeply — not 30 superficially.",
              "Use student-friendly definitions and require active use.",
              "Vocabulary is every teacher's job — not just the English teacher's."
            ]
          }
        ]
      },
      {
        id: "lac-m2",
        title: "Comprehension Strategies for Content Reading",
        description: "Teach students how to read science, history, and maths texts.",
        lessons: [
          {
            id: "lac-m2-l1",
            title: "Before, During, After: Reading Strategies for Every Subject",
            duration: "8 min",
            description: "Teach the 6 comprehension strategies that turn passive readers into active sense-makers — across any content area.",
            content: `# Reading is Not One Skill\n\nReading a maths word problem ≠ reading a history textbook ≠ reading a poem. Each requires DIFFERENT strategies. Yet most teachers tell students to 'read carefully' — without teaching how.\n\n## The 6 Comprehension Strategies (Duke & Pearson)\n\n### Before Reading\n1. **Activate prior knowledge** — 'What do we already know about X?' Build a quick web on the board.\n2. **Set a purpose** — 'As you read, find 3 reasons why...'\n3. **Preview** — scan headings, images, bold words. Predict what's coming.\n\n### During Reading\n4. **Visualise** — pause and ask students to draw or describe what they see in their minds.\n5. **Question** — teach students to generate THEIR OWN questions while reading. ('Why did the author...?' 'What does this mean?')\n6. **Monitor** — when comprehension breaks down, STOP. Re-read, look up, or ask. Most students don't notice they've stopped understanding.\n\n### After Reading\n7. **Summarise** — in 2-3 sentences, what was this about?\n8. **Synthesise** — how does this connect to what we already learned?\n\n## Subject-Specific Adaptations\n- **Maths word problems**: read once for the story, twice to identify the question, thrice to extract data\n- **Science**: pause at every diagram — what does the visual add to the text?\n- **History**: read with these questions — Who wrote this? When? What's their bias?\n- **Poetry**: read aloud at least twice, mark images and surprises\n\n## Modelling: The Critical Move\nThink-aloud: read a passage and SAY OUT LOUD what's happening in your head. 'I'm noticing this word "mitigate" — I don't know it. Let me see if context helps. The sentence says... OK, it probably means "reduce".' Students copy what they SEE.`,
            practicalExample: {
              title: "Teaching a Class 7 Class to Read a Science Textbook Chapter",
              scenario: "Chapter on Acids and Bases. Students 'read' the chapter but can't answer any questions on it.",
              steps: [
                "Before: 'What do you already know about acids? Bases? Sour things, soaps...' Build a class web.",
                "Set purpose: 'As we read, find the 5 properties of acids and 5 of bases.'",
                "Preview: scan headings, diagrams, key terms in bold (2 minutes).",
                "During: Read paragraph 1 aloud. THINK ALOUD: 'It says litmus paper turns red in acids. I'm picturing — a strip of paper, dipped in lemon juice, turning red.' Students do the same with paragraph 2 in pairs.",
                "Stop at the diagram of pH scale. 'What's this showing us? How does it relate to the text?'",
                "After: in pairs, summarise the chapter in 3 sentences. Synthesise: 'How is this connected to what we learned about chemical reactions?'",
                "Result: students go from 'read but didn't understand' to active sense-making."
              ],
              tips: [
                "Think-alouds feel awkward but are the most powerful modelling move you can make.",
                "Don't skip the BEFORE step — activating prior knowledge predicts comprehension success.",
                "Teach students to NOTICE when they've stopped understanding — that meta-awareness is the core skill."
              ]
            },
            keyTakeaways: [
              "Reading comprehension requires explicit strategy instruction in EVERY subject.",
              "Before-During-After framework structures any reading lesson.",
              "Think-alouds model invisible thinking — copy this in every subject.",
              "The biggest comprehension failure is not noticing you've stopped understanding."
            ]
          }
        ]
      }
    ]
  },

  // 7. NUMERACY & MATH FLUENCY
  {
    id: "numeracy-math-fluency",
    title: "Numeracy & Math Fluency for All Teachers",
    description: "Build students' number sense and mathematical fluency — strategies for maths teachers AND non-maths teachers who use numbers in their subjects.",
    longDescription: "ASER reports consistently show that even Class 8 students struggle with Class 3-4 maths. This course gives concrete strategies for building number sense, mental maths fluency, and mathematical reasoning. Includes the CPA (Concrete-Pictorial-Abstract) approach used in Singapore Maths and proven in NIPUN Bharat pilot schools.",
    category: "Subject Mastery",
    duration: "3 weeks",
    students: 2640,
    rating: 4.7,
    aiPowered: false,
    instructor: "Rajesh Krishnan",
    instructorBio: "Maths education specialist, designed NCERT bridge programmes, 18 years teaching maths Classes 3-12.",
    modules: [
      {
        id: "nmf-m1",
        title: "The CPA Approach: Concrete → Pictorial → Abstract",
        description: "How students actually build understanding of mathematical ideas.",
        lessons: [
          {
            id: "nmf-m1-l1",
            title: "Why Students Fail at Abstract Math — and the CPA Fix",
            duration: "9 min",
            description: "Use the Concrete-Pictorial-Abstract sequence (Bruner/Singapore Maths) to build true understanding instead of memorised procedures.",
            content: `# Why Students 'Know the Steps' But Can't Solve\n\nA Class 6 student can solve 3/4 ÷ 1/2 by 'flipping and multiplying' — but can't explain what division of fractions MEANS. They've memorised a procedure with no understanding. When problems are reworded, they fail.\n\n## The CPA Sequence\n\n### Concrete (C)\nStudents physically manipulate objects. For fractions: paper strips, fraction tiles, classroom objects.\n- '3/4 of this paper — show me'\n- 'Cut it into halves — how many halves fit?'\n- Students DISCOVER 3/4 ÷ 1/2 = 1 and 1/2 by doing.\n\n### Pictorial (P)\nStudents draw what they did. Bar models, area models, number lines.\n- 'Draw 3/4 as a bar. Now show 1/2 sections.'\n- The PICTURE bridges hands-on to symbolic.\n\n### Abstract (A)\nOnly after C and P — introduce the procedure.\n- '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 1 1/2'\n- Students now understand WHY the procedure works.\n\n## The Mistake Most Teachers Make\nThey skip C and P, go straight to A. Students memorise but never understand. When the problem is unfamiliar, they're stuck.\n\n## CPA in Indian Classrooms with Limited Resources\nYou don't need fancy manipulatives:\n- Bottle caps for counting and grouping\n- Paper strips for fractions\n- Beans or stones for place value\n- Newspaper sheets for area\n- Students' own bodies for measurement\n\n## CPA Works for Every Topic\n- Place value: bundles of sticks\n- Algebra: bar models for word problems\n- Geometry: physical shapes, then drawings, then formulas\n- Probability: actual coin flips, then tree diagrams, then equations`,
            practicalExample: {
              title: "Teaching Multiplication of Decimals in Class 6 with CPA",
              scenario: "Topic: 0.4 × 0.3. Most students will give 0.12, 1.2, or 12 — they don't know which.",
              steps: [
                "Concrete: 10×10 grid drawn on graph paper. 'Shade 4 columns to show 0.4. Now shade 3 rows. What's overlapping?'",
                "Students count the overlapping squares: 12 out of 100. They DISCOVER 0.4 × 0.3 = 0.12.",
                "Pictorial: Students draw their own 10×10 grid for 0.2 × 0.5 and 0.6 × 0.4. Shade and find the product.",
                "Abstract: 'Notice how the decimal places work — 1 + 1 = 2 places in the answer. Now we can do it without the grid.'",
                "Practice: 5 problems with the grid, then 5 without.",
                "Result: students don't just compute — they UNDERSTAND why 0.4 × 0.3 < 0.4."
              ],
              tips: [
                "Don't rush from C to A — spend real time at each stage.",
                "Manipulatives aren't just for primary classes — Class 9-10 algebra benefits from bar models.",
                "When a student gets stuck on abstract problems, go BACK to pictorial. Don't re-explain abstractly."
              ]
            },
            keyTakeaways: [
              "Students fail at maths because they're shown abstract procedures without conceptual grounding.",
              "CPA (Concrete-Pictorial-Abstract) builds understanding that survives unfamiliar problems.",
              "Cheap materials work — bottle caps, paper strips, stones.",
              "When stuck at abstract, return to pictorial — don't re-explain abstractly."
            ]
          }
        ]
      },
      {
        id: "nmf-m2",
        title: "Number Talks: 10 Minutes That Transform Math",
        description: "Daily mental math routines that build number sense and fluency.",
        lessons: [
          {
            id: "nmf-m2-l1",
            title: "Number Talks: The 10-Minute Daily Routine That Transforms Math Class",
            duration: "8 min",
            description: "Implement the daily Number Talks routine (Parrish, 2010) — 10 minutes of mental maths that builds flexibility, fluency, and confidence.",
            content: `# What is a Number Talk?\n\nA 10-minute daily routine where students mentally solve a calculation and share the STRATEGIES they used. Not the answer — the THINKING. This builds number sense, flexibility, and confidence — research shows 0.4-0.6 effect sizes on mathematical achievement.\n\n## The 5-Step Structure\n\n### 1. Pose the problem (1 min)\nWrite on the board: e.g., '47 + 38'. No paper, no pencils. Pure mental.\n\n### 2. Silent think time (1-2 min)\nStudents show with a thumbs-up when they have one strategy. Two thumbs for two strategies. Builds quiet thinking time — eliminates the 'fast hand always wins' problem.\n\n### 3. Collect answers (1 min)\nWrite ALL answers students give — right or wrong. Don't reveal which is correct. ('We'll figure that out from the strategies.')\n\n### 4. Share strategies (5-6 min)\nCall on 3-4 students. Each EXPLAINS their thinking. You record visually on the board.\n- Student A: '40 + 30 = 70, then 7 + 8 = 15, so 85'\n- Student B: '47 + 40 = 87, then take away 2 = 85'\n- Student C: '50 + 38 = 88, then take away 3 = 85'\n\n### 5. Discuss and conclude (1 min)\n'Which strategy worked best for YOU? Why?' Students realise multiple strategies are valid — and develop preferences.\n\n## Why This Works\n- Builds flexibility: students see multiple paths to one answer\n- Builds confidence: wrong answers are revisited respectfully, not shamed\n- Builds vocabulary: students hear and use 'compensate', 'decompose', 'friendly numbers'\n- Builds engagement: every student thinks, every strategy is valued\n\n## Problem Progressions for the Year\n- Term 1: Addition/subtraction with friendly numbers (47+38, 102-69)\n- Term 2: Multiplication strategies (6×9, 15×12)\n- Term 3: Fractions, decimals, percentages (50% of 84, 0.25 × 60)\n- Term 4: Mixed challenges`,
            practicalExample: {
              title: "Running Your First Number Talk in Class 6",
              scenario: "Class 6 with mixed maths abilities. Some students freeze when asked mental maths.",
              steps: [
                "Day 1: Explain the rules. 'No paper. Silent thinking. Thumbs up when you have a strategy. We share STRATEGIES, not just answers.'",
                "Problem: 25 + 26. Wait. Most thumbs up within 90 seconds.",
                "Collect answers: 51, 50, 52, 41 — write all, no reactions.",
                "Strategies: Student A: 25+25=50, +1=51. Student B: 26+26=52, -1=51. Student C: 20+20=40, 5+6=11, 40+11=51.",
                "Class: 'Which answer is right?' (Together: 51) 'How do you know?'",
                "Day 5: Try 47 + 38. Day 10: 102 - 69. Slowly progress over the term.",
                "Within a month: students start saying 'I used the friendly number strategy', 'I compensated'. Their flexibility transfers to written maths."
              ],
              tips: [
                "Never criticise wrong answers — they often reveal interesting misconceptions to discuss.",
                "Thumbs-up signalling is essential — protects slow thinkers from fast hands.",
                "Don't skip the strategy discussion — that's where the learning lives.",
                "10 minutes daily for a year = transformed numerical reasoning."
              ]
            },
            keyTakeaways: [
              "Number Talks build flexibility — students learn there are multiple right ways.",
              "Sharing strategies (not just answers) is where learning happens.",
              "Silent think time + thumbs signal protects every student's thinking time.",
              "10 minutes daily, consistently, transforms maths reasoning over a year."
            ]
          }
        ]
      }
    ]
  },

  // 8. FORMATIVE ASSESSMENT
  {
    id: "formative-assessment-learning",
    title: "Formative Assessment for Learning",
    description: "Use assessment to TEACH, not just test. Dylan Wiliam's 5 strategies of formative assessment that lift achievement more than any other intervention.",
    longDescription: "Dylan Wiliam's research is unambiguous: formative assessment is the single highest-leverage teaching practice (effect size 0.7+). This course teaches the 5 strategies and 50+ techniques — exit tickets, hinge questions, comparative judgement, structured feedback — that turn assessment into a learning engine.",
    category: "Assessment",
    duration: "3 weeks",
    students: 3340,
    rating: 4.9,
    aiPowered: false,
    instructor: "Anjali Pillai",
    instructorBio: "Assessment researcher, ex-CBSE assessment cell, trained over 5,000 teachers in formative assessment.",
    modules: [
      {
        id: "fal-m1",
        title: "Clarifying Learning and Eliciting Evidence",
        description: "Strategies 1, 2, 3 of Wiliam's framework.",
        lessons: [
          {
            id: "fal-m1-l1",
            title: "Learning Intentions, Success Criteria, and Hinge Questions",
            duration: "9 min",
            description: "Set crystal-clear learning intentions and use hinge questions to know — in real time — whether students 'got it'.",
            content: `# The First 3 Strategies\n\n## Strategy 1: Clarifying Learning Intentions\nEvery lesson begins with a clear answer to: 'What will students KNOW or be ABLE TO DO by the end?'\n- BAD: 'Today we'll do chapter 4.'\n- GOOD: 'By the end, you'll be able to balance a chemical equation with 3 elements.'\n\n## Strategy 2: Success Criteria\nHow will students KNOW they've achieved it?\n- 'A balanced equation has equal atoms of each element on both sides.'\n- 'I can show my work using the LCM method.'\n- Co-create success criteria WITH students for ownership.\n\n## Strategy 3: Eliciting Evidence of Learning\nKnow what every student understands — not just the fast hand-raisers.\n\n### Technique 1: Mini Whiteboards\nEvery student has one. Pose question. ALL students write. ALL show. You see 40 answers in 30 seconds.\n\n### Technique 2: ABCD Cards\nGive each student 4 coloured cards. Multi-choice question on board. All show their answer simultaneously.\n\n### Technique 3: Hinge Questions\nA carefully designed multi-choice question at the 'hinge' of a lesson. Built so the WRONG answers each reveal a DIFFERENT misconception.\n- All 4 right → move on\n- Mixed answers → re-teach (the wrong answers tell you HOW)\n\n### Technique 4: Exit Tickets\nLast 3 minutes — 1-2 questions on a slip. Read them BEFORE tomorrow's lesson. Plan tomorrow based on TODAY's data.\n\n### Technique 5: Cold Calling\nDon't ask 'Who can tell me...?' Ask 'Priya, what's your thinking on...?' — randomly selected. Every student stays engaged because every student might be called.\n\n## The Question Behind Every Technique\n'How do I know that EVERY student — not just the eager 5 — has understood?'`,
            practicalExample: {
              title: "Hinge Question in a Class 9 Algebra Lesson",
              scenario: "Lesson: solving linear equations with variables on both sides. After 20 minutes of teaching, you need to know if students 'got it' before moving on.",
              steps: [
                "Design hinge question: 'Solve 3x + 5 = x + 13. The value of x is: A) 4   B) 9   C) -4   D) 18'",
                "Each wrong answer reveals a misconception: B = added the 5 and 13. C = sign error. D = combined wrong.",
                "Students hold up ABCD card after silent solve (90 seconds).",
                "Scan the room. If 90%+ show A — move on. If mixed — STOP and re-teach.",
                "If many show B: 'Some of you got 9 — let's see what assumption led there.' Re-teach that specific misconception.",
                "Result: you never move on without knowing where students actually are."
              ],
              tips: [
                "Hinge questions take time to design — build a bank over the year.",
                "Mini whiteboards are the highest-impact tool in any classroom.",
                "Exit tickets MUST be reviewed before next class — otherwise it's just busywork."
              ]
            },
            keyTakeaways: [
              "Clear learning intentions and success criteria precede everything.",
              "Mini whiteboards, ABCD cards, and hinge questions reveal EVERY student's thinking.",
              "Wrong answers are diagnostic — design them to reveal misconceptions.",
              "Cold calling keeps every student in the game."
            ]
          }
        ]
      },
      {
        id: "fal-m2",
        title: "Feedback and Peer/Self Assessment",
        description: "Strategies 4 and 5 — make feedback actionable and turn students into assessors.",
        lessons: [
          {
            id: "fal-m2-l1",
            title: "Feedback That Moves Learning Forward + Peer/Self Assessment",
            duration: "8 min",
            description: "Stop writing comments students ignore. Use Hattie's feedback model and turn students into capable self- and peer-assessors.",
            content: `# Strategy 4: Feedback That Moves Learning Forward\n\nHattie's meta-analysis: feedback has an effect size of 0.7 — BUT only when it's specific, actionable, and acted upon. Most teacher feedback ('good job', 'try harder', 'see me') has zero effect.\n\n## The 3 Feedback Questions\nEvery feedback comment should answer one or more:\n1. **Where am I going?** (success criteria reminder)\n2. **How am I going?** (current performance vs criteria)\n3. **Where to next?** (specific next step)\n\n## The Comment That Works\nNOT: 'Good work — 8/10'\nBUT: 'Your evidence for the first claim is strong. The second claim needs at least one specific example — revise paragraph 3.'\n\n## The Feedback Rule\nIf students don't HAVE TO RESPOND to feedback, they won't read it. Build in time for revision. 'Spend 15 minutes acting on my comments before next class.'\n\n## Strategy 5: Activating Students as Resources for Each Other AND as Owners of Their Own Learning\n\n### Peer Assessment (Done Well)\n- Provide clear success criteria\n- Train students with exemplars\n- Use structured protocols (Two Stars and a Wish, Tuning Protocol)\n- Anonymise — students assess each other's work without names initially\n\n### Self-Assessment\n- Students rate their own work against the rubric BEFORE submission\n- Reflect: 'Where did I struggle? What will I do differently next time?'\n- Effect size of self-assessment: 1.44 (one of the highest in education)\n\n## The Big Shift\nMove from 'I assess, students receive' to 'students are CONSTANTLY assessing their own and others' work against clear criteria.' This builds the metacognitive muscle that distinguishes top learners.`,
            practicalExample: {
              title: "Peer Assessment for a Class 8 Persuasive Essay",
              scenario: "Students write essays. Teacher spends 6 hours marking. Students glance at grade, ignore feedback. Same mistakes next time.",
              steps: [
                "Provide rubric BEFORE writing — 4 criteria (claim, evidence, reasoning, conventions).",
                "Show 2 exemplars — one strong, one weak. Class assesses together against rubric.",
                "Students write first draft.",
                "Pair swap. Each student gives 'Two Stars and a Wish': 2 specific strengths + 1 specific suggestion, tied to rubric.",
                "Students self-assess against rubric, write a one-sentence 'Where I'll focus my revision'.",
                "Students revise. THEN submit to teacher.",
                "Teacher feedback is shorter (most basic issues fixed), more focused.",
                "Time saved: 50%. Quality of final work: significantly higher. Student ownership: transformed."
              ],
              tips: [
                "Peer assessment requires TRAINING — don't just say 'give each other feedback'.",
                "Two Stars and a Wish format gives structure to feedback.",
                "Always require students to RESPOND to feedback — write a revision plan.",
                "Self-assessment with rubrics has bigger impact than teacher comments alone."
              ]
            },
            keyTakeaways: [
              "Feedback works only when specific, actionable, and acted upon.",
              "Build revision time into the lesson — otherwise feedback is wasted.",
              "Peer assessment with structure and exemplars saves teacher time AND lifts learning.",
              "Self-assessment with rubrics has one of the highest effect sizes in education."
            ]
          }
        ]
      }
    ]
  },

  // 9. QUESTIONING TECHNIQUES
  {
    id: "powerful-questioning",
    title: "Powerful Questioning Techniques",
    description: "Master the art of asking — from Socratic seminars to wait time to follow-up probes that push student thinking deeper.",
    longDescription: "Teachers ask 300-400 questions a day — most go nowhere. This course teaches the question types, sequencing, and discussion protocols (Socratic Seminars, ORID, Q-Matrix) that transform passive recitation into deep thinking dialogues.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 2810,
    rating: 4.8,
    aiPowered: false,
    instructor: "Karthik Subramanian",
    instructorBio: "Discussion-based learning trainer, 16 years coaching teachers in Socratic and dialogic methods.",
    modules: [
      {
        id: "pq-m1",
        title: "Question Types and Wait Time",
        description: "The two simplest changes that transform classroom discussion.",
        lessons: [
          {
            id: "pq-m1-l1",
            title: "Wait Time + Probing Questions = Deeper Thinking",
            duration: "9 min",
            description: "Apply Mary Budd Rowe's wait-time research and a 5-probe sequence that pushes students past first surface answers.",
            content: `# The 2 Most Underused Tools in Teaching\n\n## Wait Time (Mary Budd Rowe's research)\nAverage teacher waits 0.9 seconds after asking a question before calling on someone or answering it themselves. When teachers wait 3+ seconds:\n- Length of student responses TRIPLES\n- Number of student-generated questions increases 5-fold\n- Number of 'I don't know' responses drops sharply\n- More students participate\n\n## The 2 Wait Times\n- **Wait Time 1**: 3-7 seconds AFTER you ask, BEFORE you call on a student.\n- **Wait Time 2**: 3-5 seconds AFTER a student responds, BEFORE you reply or call on another.\n\nThis simple change, alone, transforms discussions.\n\n## The Probe Sequence\nWhen a student gives a surface answer, DON'T accept it and move on. PROBE:\n\n1. **Repeat** — 'Say more about that.'\n2. **Clarify** — 'What do you mean by [their key word]?'\n3. **Justify** — 'What's your evidence?' or 'Why do you think that?'\n4. **Extend** — 'What's the implication?' or 'How does that connect to...?'\n5. **Challenge** — 'What might someone disagree with?'\n\nDo NOT use probing as gotcha — use it as 'I'm interested, push further'.\n\n## Question Types\n- **Closed** — one right answer ('What year?')\n- **Open** — multiple valid answers ('What were the causes?')\n- **Generative** — sparks more questions ('What would happen if...?')\n- **Reflective** — about thinking itself ('How did you arrive at that?')\n\nMost classrooms = 90% closed. Aim for 50%+ open and generative.`,
            practicalExample: {
              title: "Transforming a Class 9 Discussion on Gandhi's Methods",
              scenario: "Old discussion: 'Who led the Salt March?' (Gandhi). 'Why?' (To protest salt tax). Done in 90 seconds. Nothing thought through.",
              steps: [
                "Pose open question: 'Was non-violent resistance the most effective response to British rule? Or were other methods needed?'",
                "Wait 5 seconds silently. Resist the urge to fill it.",
                "Call on Riya: 'Non-violent was good because it didn't harm anyone.'",
                "Probe: 'Say more about that — what do you mean by good?'",
                "Riya extends. Wait 4 seconds. Call on Arjun: 'But violence also got results in other countries.'",
                "Probe: 'Give an example. And what's the evidence it worked?'",
                "Continue with: 'What's the implication?' 'What might Gandhi say to Arjun?'",
                "20 minutes of discussion later, students have argued multiple positions, cited evidence, and changed minds. THAT is learning."
              ],
              tips: [
                "Wait time feels uncomfortable for 2-3 weeks — push through it.",
                "Probing isn't interrogation — be genuinely curious.",
                "Reflect back: 'So you're saying X — is that right?' validates and clarifies.",
                "Build a 'probes wall' chart in the classroom for student-to-student use."
              ]
            },
            keyTakeaways: [
              "Wait time is the single highest-leverage change you can make to classroom discussion.",
              "First answers are usually surface — probes deepen them.",
              "Open and generative questions produce thinking; closed questions produce recall.",
              "Reflective questions about thinking ('How did you decide?') build metacognition."
            ]
          }
        ]
      },
      {
        id: "pq-m2",
        title: "Socratic Seminars and Discussion Protocols",
        description: "Structured discussion formats that push every student to engage.",
        lessons: [
          {
            id: "pq-m2-l1",
            title: "Running a Socratic Seminar in Your Classroom",
            duration: "8 min",
            description: "Implement Socratic seminars — student-led, evidence-based discussions of texts or ideas — in any subject.",
            content: `# What is a Socratic Seminar?\n\nA structured discussion where STUDENTS dialogue with each other (not the teacher) about a text, image, problem, or question. The teacher facilitates from the side. Built on Socrates' principle: knowledge comes from rigorous inquiry, not lecture.\n\n## The Setup\n\n### Before\n- Pick a rich text/source: a paragraph, image, poem, data set, primary source — something with depth and ambiguity.\n- Students read/study independently. Annotate. Prepare 2 questions.\n- Develop ONE opening question that's open, important, and tied to evidence.\n\n### Seating\n- Inner circle (8-12 students): discuss\n- Outer circle (rest): observe, take notes, prepare to add later\n- After 15-20 min, circles swap\n\n### Rules for Inner Circle\n- Refer to evidence from the text\n- Build on or respectfully disagree with each other\n- One voice at a time\n- Speak to each other, not to the teacher\n\n## The Teacher's Role\n- Pose the opening question — then BE QUIET\n- Track participation (who spoke, who didn't)\n- Intervene only if discussion stalls or goes off-topic\n- Pose probing follow-ups: 'Where in the text?', 'Who has another view?'\n\n## The Debrief\n- Outer circle observers share what they noticed\n- Inner circle reflects on the quality of their discussion\n- Set one goal for next time\n\n## Why It Works\n- Forces students to articulate thinking\n- Builds listening as much as speaking\n- Develops evidence-based argumentation\n- Shifts authority from teacher to ideas\n\n## Adapting for Large Classes\n- Split class into 3-4 Socratic groups simultaneously\n- Use a discussion protocol checklist (each student needs 3 contributions)\n- Run 'silent Socratics' on chart paper — students write responses in silence`,
            practicalExample: {
              title: "First Socratic Seminar in Class 10 English on 'Mending Wall' by Robert Frost",
              scenario: "Class has read the poem. You want a discussion about its meaning, not a quiz.",
              steps: [
                "Pre-work: students annotate the poem at home, prepare 2 questions.",
                "Day of seminar: arrange chairs in inner-outer circles.",
                "Opening question: 'The narrator says good fences make good neighbours, but also wonders what he's walling in or out. What does Frost want us to believe?'",
                "Silence. Wait. A student offers a view — cites lines 27-28.",
                "Another disagrees, cites lines 35-36. A third synthesises.",
                "Teacher quietly tracks: who spoke, who hasn't. Notes one probe to use if discussion lags.",
                "After 20 min: swap circles. New voices join.",
                "Debrief: 'What did you notice about how we used evidence? What would make next time better?'",
                "Result: students leave having thought deeply, not just memorised an answer."
              ],
              tips: [
                "First seminar will feel awkward — give it 3-4 attempts before judging.",
                "Texts that work: ambiguous, evidence-rich, multiple valid readings.",
                "Track participation visibly — students see who's being heard.",
                "Don't 'correct' students mid-discussion — let ideas develop."
              ]
            },
            keyTakeaways: [
              "Socratic seminars shift authority from teacher to ideas and evidence.",
              "The teacher's job is to design the question, then get out of the way.",
              "Inner-outer circle structure manages participation in large classes.",
              "First seminars are awkward — persistence builds a discussion culture."
            ]
          }
        ]
      }
    ]
  },

  // 10. ACTIVE LEARNING & ENGAGEMENT
  {
    id: "active-learning-engagement",
    title: "Active Learning & Student Engagement",
    description: "Replace passive listening with active doing. Evidence-based techniques that lift learning by 0.6+ standard deviations — usable in any subject, any class size.",
    longDescription: "Freeman et al.'s landmark 2014 meta-analysis showed active learning increases learning by 6% and cuts failure rates by 50%+ compared to lectures. This course gives you 20+ active learning techniques, organised by lesson stage, that work in resource-limited Indian classrooms with no special technology.",
    category: "Pedagogy",
    duration: "2 weeks",
    students: 3960,
    rating: 4.9,
    aiPowered: false,
    instructor: "Pooja Mehra",
    instructorBio: "Active learning specialist, designed CBSE pedagogy modules, 17 years training teachers in engagement-first methods.",
    modules: [
      {
        id: "ale-m1",
        title: "Why Lecture Fails and What Works",
        description: "The research on attention, retention, and active engagement.",
        lessons: [
          {
            id: "ale-m1-l1",
            title: "The 10-Minute Rule and the 5E Model",
            duration: "9 min",
            description: "Use research-backed attention principles and the 5E instructional model to design lessons where students THINK every 10 minutes.",
            content: `# The 10-Minute Rule\n\nMedical research (Bunce, 2010) shows student attention during lectures peaks at 5-10 minutes, then drops sharply. Even motivated college students mentally check out by minute 15. The fix isn't more entertaining lectures — it's a structural change.\n\n## The 10-Minute Rule\nEvery 8-10 minutes of input MUST be followed by 2-3 minutes of active processing. Without it, retention plummets.\n\n## Active Processing Options (pick one every 10 minutes)\n- **Turn and Talk** (2 min): 'Tell your partner the 3 most important things from the last 10 min.'\n- **Quick Write** (2 min): 'In 2 sentences, summarise the main idea.'\n- **Sketchnote** (3 min): 'Draw what you just learned — no words allowed.'\n- **Question Generation** (2 min): 'Write 2 questions you still have.'\n- **Apply It** (3 min): 'Give one real-world example of what we just covered.'\n\n## The 5E Model\n(Bybee — designed for science but works in any subject)\n\n1. **Engage** (5 min) — hook curiosity. A puzzle, a phenomenon, a question.\n2. **Explore** (15-20 min) — students investigate hands-on or via inquiry, BEFORE you explain.\n3. **Explain** (10 min) — teacher (or students) consolidates the concept.\n4. **Elaborate** (15 min) — apply the concept to a new context or problem.\n5. **Evaluate** (5 min) — formative assessment: did they get it?\n\nNotice: students explore BEFORE the teacher explains. This is counterintuitive — and the research backs it. Productive struggle PRIMES the brain to receive explanation.\n\n## Active vs Passive — the Research\nFreeman et al. (2014): meta-analysis of 225 studies. Active learning improved exam performance by 6 percentage points AND reduced failure rates from 34% to 22%. The effect was largest in maths and science.`,
            practicalExample: {
              title: "Redesigning a Class 7 History Lecture into Active Learning",
              scenario: "40-minute lecture on the French Revolution. Students glaze over by minute 15.",
              steps: [
                "Engage (5 min): Show a tableau image — French peasants in poverty next to nobles feasting. 'What do you notice? What questions do you have?'",
                "Explore (12 min): Give groups a one-page primary source (peasant letter, noble's diary, king's decree). Each group analyses one. Identifies grievances.",
                "Explain (8 min): Teacher consolidates — connects student findings to the broader causes of revolution.",
                "10-minute rule break — Turn and Talk: 'Which group's source was most powerful? Why?'",
                "Elaborate (10 min): 'Apply this — what conditions in modern society could cause a similar uprising? Group discussion.'",
                "Evaluate (5 min): Exit ticket — 'Name 3 causes of the French Revolution and explain which was most important. Defend your choice.'",
                "Result: students don't just hear about revolution — they think historically."
              ],
              tips: [
                "You don't need to convert every lecture — start with one per week.",
                "The 10-minute processing breaks ARE the lesson, not interruptions.",
                "Let students explore BEFORE you explain — productive struggle deepens learning.",
                "Exit tickets after active lessons reveal real understanding, not just compliance."
              ]
            },
            keyTakeaways: [
              "Attention drops sharply after 10 minutes of passive listening — structure must change.",
              "Active processing every 8-10 minutes is non-negotiable for retention.",
              "5E model (Engage-Explore-Explain-Elaborate-Evaluate) structures inquiry-based lessons.",
              "Letting students explore before you explain triggers deeper learning."
            ]
          }
        ]
      },
      {
        id: "ale-m2",
        title: "20 Active Techniques You Can Use Tomorrow",
        description: "A toolkit of engagement techniques organised by purpose.",
        lessons: [
          {
            id: "ale-m2-l1",
            title: "20 Active Learning Techniques for Every Lesson Stage",
            duration: "8 min",
            description: "A curated, classroom-ready toolkit of active techniques — for openings, content delivery, practice, and closure.",
            content: `# The Active Learning Toolkit\n\n## OPENERS (Build engagement in 3-5 min)\n1. **Mystery Object** — 'What is this? How does it connect to today's topic?'\n2. **One Word** — 'What ONE word comes to mind when you hear [today's topic]?' Pair share.\n3. **Would You Rather** — pose a topic-relevant dilemma\n4. **Image Inference** — project an image, students infer\n5. **Quick Quiz on Yesterday** — 3 questions, mini-whiteboards, instant feedback\n\n## DURING CONTENT (Process every 10 min)\n6. **Think-Pair-Share** — silent think → pair share → random call\n7. **Sketchnote** — students draw visual notes of concepts\n8. **Question Storm** — students generate as many questions as possible in 2 min\n9. **Stop and Jot** — pause for 60-second written response\n10. **Postcard Summary** — 'Write today's lesson as a postcard to a friend'\n\n## DURING PRACTICE (Make practice active)\n11. **Whole-Class Mini-Whiteboards** — every student responds simultaneously\n12. **Stations Rotation** — 4-5 stations with different activities; groups rotate\n13. **Galley Walk** — student work posted; class walks, gives feedback with sticky notes\n14. **Sage and Scribe** — pair: one explains, one writes\n15. **Speed Networking** — students rotate partners every 90 seconds, discuss a problem\n\n## CLOSERS (Consolidate in 3-5 min)\n16. **Exit Ticket** — 1-2 questions on a slip\n17. **3-2-1** — '3 things learned, 2 questions, 1 application'\n18. **One-Minute Paper** — 'What's the most important thing from today? What's still unclear?'\n19. **Hand Vote with Reasoning** — pose a question with multiple answers; students vote and defend\n20. **Tweet Summary** — summarise the lesson in 280 characters\n\n## Pick 5 to Master\nDon't try all 20. Pick 5 that fit your subject and class. Use them constantly. Once they're routine for students, add 5 more.\n\n## Sustainable Implementation\n- Week 1: Add ONE active technique per day\n- Week 2: Layer in a second\n- Month 2: Active processing every 10 min becomes default\n- Month 3: Students start REQUESTING active formats over lecture`,
            practicalExample: {
              title: "Active Learning Build-Up in a Class 6 Maths Class Over 4 Weeks",
              scenario: "Teacher has always lectured then assigned textbook problems. Wants to shift to active learning sustainably.",
              steps: [
                "Week 1: Add Think-Pair-Share after every major concept. Nothing else changes.",
                "Week 2: Replace silent worksheet practice with mini-whiteboard practice — 5 problems whole-class.",
                "Week 3: Add exit ticket every day (1 problem on a slip). Use to plan tomorrow.",
                "Week 4: Add one Stations Rotation per week (4 stations: textbook problems, manipulatives, word problems, peer tutoring).",
                "By Month 2: lessons are unrecognisable. Students are constantly thinking, writing, talking, doing.",
                "Test scores rise. Discipline issues drop. Teacher feels energised, not exhausted, by end of day."
              ],
              tips: [
                "Sustainable change is incremental — one new technique per week, mastered.",
                "Mini whiteboards are the highest-leverage tool — get a class set.",
                "Students RESIST active learning at first ('Just tell us the answer!') — push through the first 2 weeks.",
                "Track what works for YOUR students — not every technique fits every subject."
              ]
            },
            keyTakeaways: [
              "Pick 5 active techniques and master them — don't try all 20 at once.",
              "Active processing should happen every 10 minutes — not just at the end.",
              "Mini whiteboards are the single highest-impact tool for active practice.",
              "Build active learning incrementally over weeks — it becomes the new default."
            ]
          }
        ]
      }
    ]
  }
];
