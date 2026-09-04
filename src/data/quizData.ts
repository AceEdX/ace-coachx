import { QuizQuestion } from "@/components/LessonQuiz";

// Map lessonId → quiz questions
export const lessonQuizzes: Record<string, QuizQuestion[]> = {
  // AI-Augmented Educator
  "aie-m1-l1": [
    { question: "What does the 'T' in the TEACHER prompt framework stand for?", options: ["Technology", "Target Audience", "Testing", "Timeline"], correctIndex: 1, explanation: "T stands for Target Audience — specifying grade level, skill level, and accommodations needed." },
    { question: "Why is a strong, specific prompt better than a vague one?", options: ["It's faster to type", "AI produces more usable output with less editing", "It uses less computing power", "It avoids copyright issues"], correctIndex: 1, explanation: "Specific prompts produce dramatically better outputs that require minimal editing, saving more time." },
    { question: "What should you always do after receiving AI-generated content?", options: ["Submit it immediately", "Review and customize it for your students", "Delete it and start over", "Share it on social media"], correctIndex: 1, explanation: "You are the expert — always review and customize AI-generated content for your specific students." },
  ],
  "aie-m1-l2": [
    { question: "What is the main advantage of using AI to create rubrics?", options: ["They're always perfect", "Minutes instead of hours", "No teacher review needed", "Students can't cheat"], correctIndex: 1, explanation: "AI can generate assessment tools in minutes rather than the hours it takes manually." },
    { question: "When should you share rubrics with students?", options: ["After grading", "During the test", "Before the assignment", "Never"], correctIndex: 2, explanation: "Sharing rubrics before assignments helps guide student work and set clear expectations." },
  ],
  "aie-m2-l1": [
    { question: "What is the key distinction between AI as Tutor vs. Cheater?", options: ["Cost of the tool", "Using AI to learn vs. using AI to avoid learning", "The AI model used", "Teacher permission"], correctIndex: 1, explanation: "Using AI to LEARN is encouraged; using AI to AVOID learning is not acceptable." },
    { question: "Which of these is an example of ethical AI use?", options: ["'Write my essay for me'", "'Explain this concept in simpler terms'", "'Give me homework answers'", "'Summarize this book I didn't read'"], correctIndex: 1, explanation: "Using AI to understand concepts better is ethical — it supports learning rather than replacing it." },
  ],
  // Classroom Tech Tools
  "ctt-m1-l1": [
    { question: "What is the recommended maximum time before a class-wide interaction?", options: ["1 minute", "3 minutes", "10 minutes", "15 minutes"], correctIndex: 1, explanation: "The 3-Minute Interaction Rule ensures no more than 3 minutes of passive content before engaging students." },
    { question: "Which free Indian government platform provides curriculum-aligned digital content?", options: ["YouTube", "DIKSHA", "Netflix", "Instagram"], correctIndex: 1, explanation: "DIKSHA provides free textbook-linked content for Classes 1-12 in 36 languages." },
    { question: "How can students respond without phones?", options: ["They can't participate", "Mini whiteboards, coloured cards, hand signals", "Only verbal answers", "Text messages"], correctIndex: 1, explanation: "Mini whiteboards, coloured cards, hand signals, and stand up/sit down methods all work brilliantly without student devices." },
  ],
  "ctt-m1-l2": [
    { question: "What format connects Indian academics to students' favorite sport?", options: ["Football quiz", "Galli Cricket quiz format", "Swimming relay", "Chess match"], correctIndex: 1, explanation: "The 'Galli Cricket' format where correct answers = runs creates enormous excitement and engagement." },
    { question: "Why are team-based games especially effective in Indian classrooms?", options: ["They're easier to grade", "Even shy students participate through their team", "They require less preparation", "They're quieter"], correctIndex: 1, explanation: "Team-based games ensure even shy students participate through their team, increasing overall engagement." },
  ],
  "ctt-m2-l1": [
    { question: "What method makes every student both a learner and a teacher?", options: ["Lecture method", "Jigsaw method", "Rote learning", "Silent reading"], correctIndex: 1, explanation: "In the Jigsaw method, each student becomes an expert on one topic and then teaches their group." },
    { question: "How can WhatsApp bridge the digital divide for homework?", options: ["Students buy phones", "Parents share submissions via family smartphone", "It can't", "Students go to cyber cafe"], correctIndex: 1, explanation: "Most Indian families have at least one smartphone — students can submit work via parents' WhatsApp." },
  ],
  "ctt-m3-l1": [
    { question: "How many languages does DIKSHA support?", options: ["2", "10", "36", "100"], correctIndex: 2, explanation: "DIKSHA is available in 36 languages including Hindi, Tamil, Telugu, Marathi, Bengali, and more." },
    { question: "What are the QR codes in NCERT textbooks used for?", options: ["Decoration", "Linking to digital content on DIKSHA", "School attendance", "Parent communication"], correctIndex: 1, explanation: "QR codes in NCERT textbooks link directly to digital content on DIKSHA — an underused resource." },
  ],
  // Data-Driven Teaching
  "ddt-m1-l1": [
    { question: "What is the purpose of formative assessment?", options: ["To give grades", "To change what you teach next", "To punish students", "To satisfy administrators"], correctIndex: 1, explanation: "Formative assessment should change your teaching — it's for YOUR information to adjust instruction." },
    { question: "If 50-80% of students 'got it' on an exit ticket, what should you do?", options: ["Move on", "Reteach with a different approach", "Give up", "Assign homework"], correctIndex: 1, explanation: "When 50-80% understand, reteach with a different approach to close the remaining gap." },
  ],
  // Inclusive Classroom Design
  "icd-m1-l1": [
    { question: "True CRT goes beyond which surface-level approach?", options: ["Deep curriculum analysis", "Food, flags, and festivals", "Standards alignment", "Assessment design"], correctIndex: 1, explanation: "True culturally responsive teaching goes far deeper than occasional diversity celebrations." },
    { question: "Who benefits from culturally responsive teaching?", options: ["Only minority students", "Only teachers", "ALL students", "Only parents"], correctIndex: 2, explanation: "CRT benefits ALL students by expanding perspectives and creating more engaging, relevant learning." },
  ],
  "icd-m2-l1": [
    { question: "When a student overreacts to a minor incident, trauma-informed teachers understand this as:", options: ["Drama seeking", "Bad character", "A stress response from an overactive amygdala", "Defiance"], correctIndex: 2, explanation: "Trauma makes the amygdala hyperactive — overreactions are stress responses, not character flaws." },
    { question: "What is the #1 protective factor against trauma's effects?", options: ["Strict rules", "Connection with a trusted adult", "Medication", "Ignoring the behavior"], correctIndex: 1, explanation: "Connection is the #1 protective factor — relationship first, content second." },
  ],
  // Classroom Management for Indian Schools
  "cmi-m1-l1": [
    { question: "What does the 2x10 strategy involve?", options: ["2 tests over 10 days", "2 minutes of personal conversation for 10 consecutive days", "2 warnings before 10-minute detention", "Teaching 2 topics in 10 minutes"], correctIndex: 1, explanation: "The 2x10 strategy means spending 2 minutes per day for 10 consecutive days having personal (non-academic) conversations with a challenging student." },
    { question: "What is more effective than imposed rules?", options: ["Stricter punishment", "Co-created class agreements", "Silent treatment", "Parent complaints"], correctIndex: 1, explanation: "Class agreements co-created with students build ownership and are far more effective than rules imposed from above." },
    { question: "What should you do BEFORE correcting misbehavior?", options: ["Call parents", "Establish connection and understand the cause", "Send student out", "Ignore it completely"], correctIndex: 1, explanation: "Connection before correction — understanding the cause of behavior before addressing it leads to better outcomes." },
  ],
  "cmi-m1-l2": [
    { question: "How much learning time is lost per year due to chaotic transitions?", options: ["10 hours", "25 hours", "50+ hours", "5 hours"], correctIndex: 2, explanation: "Even 2 minutes of chaos per transition adds up to over 50 hours of lost learning time per year." },
    { question: "What should be on the board before students arrive?", options: ["Homework assignment", "Bell Work / Do Now activity", "Seating chart", "Nothing"], correctIndex: 1, explanation: "A 'Do Now' or 'Bell Work' activity gives students something productive to do immediately upon entering." },
  ],
  "cmi-m2-l1": [
    { question: "What are Total Participation Techniques?", options: ["Extra homework for all", "Methods ensuring every student responds, not just volunteers", "After-school tutoring", "Online quizzes"], correctIndex: 1, explanation: "TPTs like slates, choral responses, and hand signals ensure ALL students participate, not just the few who raise their hands." },
    { question: "What does the 'roving teacher' strategy involve?", options: ["Teaching from a different room each day", "Moving through the classroom while students work", "Rotating between classes", "Using a mobile phone to teach"], correctIndex: 1, explanation: "The roving teacher moves through the classroom checking work, offering encouragement, and catching confusion early instead of standing at the front for 40 minutes." },
  ],
  "cmi-m3-l1": [
    { question: "What is the single biggest predictor of student success?", options: ["Expensive textbooks", "Student-teacher relationship quality", "Class size", "Technology access"], correctIndex: 1, explanation: "Research consistently shows that the quality of student-teacher relationships is the #1 predictor of student success." },
    { question: "How long does the door greeting ritual take?", options: ["10 minutes", "5 minutes", "2 minutes", "30 seconds"], correctIndex: 2, explanation: "Greeting students by name at the door takes about 2 minutes but sets a positive tone for the entire period." },
  ],
  // NEP 2020 in Practice
  "nep-m1-l1": [
    { question: "What does NEP 2020 shift from rote learning TO?", options: ["More exams", "Competency-based education", "Online learning only", "Removing assessments entirely"], correctIndex: 1, explanation: "NEP 2020's fundamental shift is from rote memorization to competency-based education where students demonstrate understanding through application." },
    { question: "What does 'continuous assessment' mean under NEP 2020?", options: ["Daily tests", "Regular low-stakes assessments that inform teaching", "Removing all exams", "Only oral exams"], correctIndex: 1, explanation: "Continuous assessment means regular, low-stakes checks (exit tickets, portfolios, projects) that help teachers adjust instruction — not more traditional exams." },
  ],
  "nep-m2-l1": [
    { question: "What is a competency?", options: ["Just knowledge", "Knowledge + Skill + Attitude applied in context", "Only practical skills", "Memorized facts"], correctIndex: 1, explanation: "A competency combines knowledge, skills, and attitudes applied in a real-world context — going beyond mere recall." },
    { question: "At minimum, which level of Bloom's Taxonomy should NEP-aligned lessons target?", options: ["Remember", "Understand", "Apply", "Create"], correctIndex: 2, explanation: "NEP-aligned lessons should target at least the Apply level — students should be able to use knowledge, not just recall or understand it." },
  ],
  "nep-m3-l1": [
    { question: "What is missing from most 'experiential learning' activities?", options: ["Fun", "The reflection step", "Expensive materials", "Technology"], correctIndex: 1, explanation: "Without structured reflection, activities become entertainment, not learning. The reflection step is where learning solidifies." },
    { question: "Which of these is an example of experiential learning?", options: ["Reading about waste management", "Conducting a real waste audit of the school", "Watching a documentary", "Copying notes from the board"], correctIndex: 1, explanation: "Experiential learning involves direct experience — actually conducting a waste audit rather than just reading about waste management." },
  ],
  // Regional Language & Multilingual Pedagogy
  "mlp-m1-l1": [
    { question: "What does research say about multilingual children?", options: ["They learn slower", "They have stronger executive function and problem-solving", "They should only use one language", "They can't learn math well"], correctIndex: 1, explanation: "Multilingual children have stronger executive function including focus, task-switching, and problem-solving abilities." },
    { question: "What is translanguaging?", options: ["Translating textbooks", "Strategic use of all languages for deeper learning", "Speaking only English", "Mixing languages randomly"], correctIndex: 1, explanation: "Translanguaging is the deliberate, strategic use of ALL languages in the classroom to deepen understanding — not random code-switching." },
  ],
  "mlp-m2-l1": [
    { question: "In the Bridge Model, what comes first?", options: ["English terminology", "Concept in mother tongue", "Written test", "Grammar rules"], correctIndex: 1, explanation: "The Bridge Model starts with understanding the concept in the mother tongue, then building vocabulary in the medium of instruction." },
    { question: "What is the Preview-View-Review strategy?", options: ["Read three textbooks", "Preview in mother tongue, teach in medium, review in mother tongue", "Three tests per lesson", "Preview the exam paper"], correctIndex: 1, explanation: "Preview-View-Review introduces the topic in mother tongue, teaches in the medium of instruction, and summarizes in mother tongue for confirmation." },
  ],
  "mlp-m3-l1": [
    { question: "By how much do bilingual resources improve comprehension for L2 learners?", options: ["5-10%", "10-20%", "40-60%", "90-100%"], correctIndex: 2, explanation: "Bilingual materials improve comprehension by 40-60% for students learning in their second language." },
    { question: "What is the cheapest bilingual resource you can create?", options: ["Digital app", "Bilingual word wall with chart paper", "Printed textbooks", "Language software"], correctIndex: 1, explanation: "A bilingual word wall can be created for under ₹20 with chart paper and markers — and it's one of the most effective bilingual resources." },
  ],
  // Social-Emotional Learning
  "sel-m1-l1": [
    { question: "Why can't students learn when emotionally overwhelmed?", options: ["They're being dramatic", "The prefrontal cortex is inaccessible in heightened emotional states", "They need more discipline", "They didn't sleep enough"], correctIndex: 1, explanation: "Neuroscience shows that students in heightened emotional states cannot access the prefrontal cortex — the brain region responsible for learning and reasoning." },
    { question: "What is the purpose of a daily emotion check-in?", options: ["To waste class time", "To get real-time data on students' readiness to learn", "To embarrass students", "To replace teaching"], correctIndex: 1, explanation: "A 2-minute emotion check-in gives you real-time data on your class's emotional state and readiness to learn." },
    { question: "What should you NEVER do during an emotion check-in?", options: ["Use emojis", "Force students to explain publicly why they feel a certain way", "Let students pass", "Check yourself first"], correctIndex: 1, explanation: "Never force a student to explain WHY they feel a certain way publicly — offer choice in how they share." },
  ],
  "sel-m1-l2": [
    { question: "What is self-regulation?", options: ["Suppressing all emotions", "Choosing HOW to respond to emotions effectively", "Never getting angry", "Following rules without question"], correctIndex: 1, explanation: "Self-regulation is the ability to manage emotions, thoughts, and behaviors effectively — it's about choosing HOW to respond, not suppressing feelings." },
    { question: "What is the Calm Corner?", options: ["A punishment area", "A designated space for students to self-regulate, available to everyone", "A corner for naughty students", "The teacher's desk"], correctIndex: 1, explanation: "The Calm Corner is a positive, non-punitive space where ANY student can go to self-regulate for up to 5 minutes." },
  ],
  "sel-m2-l1": [
    { question: "What is the most important rule of Circle Time?", options: ["Everyone must speak", "Students sit alphabetically", "One voice at a time with right to pass", "It must last 30 minutes"], correctIndex: 2, explanation: "The non-negotiable rules include one voice at a time and the right to pass — safety enables vulnerability and growth." },
    { question: "Which circle format is best for addressing class issues?", options: ["Appreciation Circle", "Topic Circle", "Problem-Solving Circle", "Story Circle"], correctIndex: 2, explanation: "Problem-Solving Circles address class issues without blaming, focusing on collaborative solutions." },
  ],
  // Data Literacy for Teachers
  "dlt-m1-l1": [
    { question: "What does achievement data (marks) NOT tell you?", options: ["Who passed", "Who failed", "WHY students are struggling and what to do about it", "The class average"], correctIndex: 2, explanation: "Marks tell you WHO is struggling but not WHY or WHAT to do — you need diagnostic data for that." },
    { question: "What is the Class Tracker?", options: ["A GPS device", "A simple grid of Students × Skills showing mastery levels", "An expensive software", "An attendance register"], correctIndex: 1, explanation: "The Class Tracker is a simple one-page grid (Students × Skills) using ✓, △, ✗ to show mastery patterns." },
  ],
  "dlt-m1-l2": [
    { question: "What should you NOT share with AI when analysing student data?", options: ["Test scores", "Question-level results", "Full names with personal information", "Subject-wise marks"], correctIndex: 2, explanation: "Never share full names, addresses, phone numbers, or sensitive personal information with AI tools — use student numbers instead." },
    { question: "How often should you analyse student data for timely interventions?", options: ["Only at exam time", "Once a year", "Monthly", "Every 5 years"], correctIndex: 2, explanation: "Regular monthly analysis enables timely interventions — waiting for exams means gaps have already widened." },
  ],
  "dlt-m2-l1": [
    { question: "What does 'reteach' mean in the Teach-Assess-Reteach cycle?", options: ["Repeat the exact same lesson", "Use a fundamentally different approach for those who didn't understand", "Give more homework", "Move on to the next topic"], correctIndex: 1, explanation: "Reteaching means using a DIFFERENT approach — different explanation, grouping, or entry point — not repeating the same lesson." },
    { question: "In the 3-Group Model, what should the 'Got It' group do during reteach?", options: ["Listen again", "Go home early", "Independent practice or peer tutoring", "Wait quietly"], correctIndex: 2, explanation: "The 'Got It' group should do independent practice, extension activities, or peer tutoring while the teacher works with other groups." },
  ],
  // Inclusive Education & Special Needs
  "isn-m1-l1": [
    { question: "What percentage of Indian students are estimated to have some form of learning difference?", options: ["1-2%", "5-10%", "15-20%", "50%"], correctIndex: 2, explanation: "An estimated 15-20% of students have some form of learning difference — most are never identified in Indian schools." },
    { question: "What should a teacher do when they suspect a learning difference?", options: ["Diagnose the student", "Observe, document, accommodate, and refer", "Ignore it", "Tell the student they're lazy"], correctIndex: 1, explanation: "Teachers should observe and document, start accommodations immediately, and refer to specialists — not diagnose." },
    { question: "A student with dyslexia typically has:", options: ["Low intelligence", "Strong verbal skills but weak written output", "No ability to learn", "Perfect handwriting"], correctIndex: 1, explanation: "Dyslexia is NOT about intelligence — many dyslexic students are highly capable with strong verbal skills but struggle with reading and writing." },
  ],
  "isn-m1-l2": [
    { question: "What is the simplest and most impactful accommodation?", options: ["Special school placement", "Extra time on tests", "Separate classroom", "Removing all assessments"], correctIndex: 1, explanation: "Extra time (25-50% more) for tests is the simplest and most impactful accommodation — it helps students demonstrate their true understanding." },
    { question: "When other students ask 'Why does she get extra time?', what's the best response?", options: ["'Mind your own business'", "'Everyone gets what they need to do their best'", "'She's not as smart'", "'It's not fair but it's the rule'"], correctIndex: 1, explanation: "Fairness doesn't mean everyone gets the same — it means everyone gets what they need to do their best." },
  ],
  "isn-m2-l1": [
    { question: "What is the difference between integration and inclusion?", options: ["They're the same thing", "Integration puts students in the room; inclusion ensures they can participate and belong", "Inclusion is cheaper", "Integration is better"], correctIndex: 1, explanation: "Integration means the student is present; inclusion means the classroom is designed so everyone can participate meaningfully." },
    { question: "When should you plan for inclusion?", options: ["After the lesson", "Only for special students", "At the design stage of every lesson", "Never — it's the counselor's job"], correctIndex: 2, explanation: "Plan for inclusion at the design stage — if you design for the student with the most needs, everyone else will be fine." },
  ],
  // Teacher Mental Health & Burnout
  "mhb-m1-l1": [
    { question: "What are the 3 dimensions of burnout?", options: ["Tired, Angry, Sad", "Emotional exhaustion, Depersonalisation, Reduced personal accomplishment", "Physical, Mental, Financial", "Work, Home, Social"], correctIndex: 1, explanation: "Burnout has 3 distinct dimensions: emotional exhaustion, depersonalisation (cynicism), and reduced sense of personal accomplishment." },
    { question: "What percentage of teachers experience significant burnout symptoms?", options: ["5-10%", "15-20%", "40-50%", "90%"], correctIndex: 2, explanation: "Studies show that 40-50% of teachers experience significant burnout symptoms, compounded in India by large classes and exam pressure." },
    { question: "Burnout is primarily caused by:", options: ["Personal weakness", "Sustained systemic demands exceeding resources", "Not loving teaching enough", "Being new to the profession"], correctIndex: 1, explanation: "Burnout is a SYSTEM problem — it results from sustained demands exceeding available resources, not personal weakness." },
  ],
  "mhb-m1-l2": [
    { question: "What is the single most effective burnout prevention tool mentioned in the course?", options: ["Taking a vacation", "The 'wins' journal — writing 3 good things daily", "Changing careers", "Working harder"], correctIndex: 1, explanation: "The 'wins' journal combats the negativity bias that fuels burnout by refocusing attention on positive moments." },
    { question: "What is a 'transition ritual'?", options: ["A morning prayer", "Something that signals 'work is done' when leaving school", "A staff meeting", "A student handover"], correctIndex: 1, explanation: "A transition ritual (specific music, a walk, changing clothes) signals to your brain that work is finished, helping you disconnect." },
  ],
  // Parent Communication
  "pcm-m1-l1": [
    { question: "What should you ALWAYS start a PTM with?", options: ["The student's weakest marks", "Something specific and positive about the student", "A complaint about behavior", "A request for fees"], correctIndex: 1, explanation: "Always start with specific positives — it builds trust and makes parents receptive to growth areas discussed later." },
    { question: "What is the 3-3-3-1 PTM structure?", options: ["3 tests, 3 projects, 3 exams, 1 final", "3 min strengths, 3 min growth areas, 3 min partnership plan, 1 min positive close", "3 subjects, 3 grades, 3 comments, 1 signature", "3 parents at a time"], correctIndex: 1, explanation: "The 3-3-3-1 structure ensures focused, productive meetings: strengths, growth, partnership plan, and a positive close." },
  ],
  "pcm-m1-l2": [
    { question: "What is the #1 rule for a class WhatsApp group?", options: ["Post memes daily", "Admin-only posting for updates, with clear response hours", "Let everyone post anything", "Share student marks publicly"], correctIndex: 1, explanation: "Clear ground rules including admin-only posting and set response hours prevent 90% of WhatsApp group problems." },
    { question: "What is the Sandwich Method for parent messages?", options: ["Send 3 messages in a row", "Positive → Concern → Positive", "Only send good news", "Send during lunch break"], correctIndex: 1, explanation: "The Sandwich Method wraps the concern between two positive observations, making the message constructive and well-received." },
  ],
  // Creative Teaching Methods
  "ctm-m1-l1": [
    { question: "How many times better is story-based retention compared to data-based delivery?", options: ["2x", "5x", "22x", "100x"], correctIndex: 2, explanation: "Research shows information delivered as story is retained 22x better than information delivered as plain data." },
    { question: "What is the first step in the Story-Lesson Framework?", options: ["Create tension", "Find the human element", "Test students", "Assign homework"], correctIndex: 1, explanation: "Finding the human element is the first step — every subject has a human story with a person, a problem, and a resolution." },
    { question: "How many brain regions do stories activate compared to facts alone?", options: ["2x more", "Same amount", "7x more", "3x more"], correctIndex: 2, explanation: "Stories activate 7x more brain regions than facts alone — they're not just entertainment, they're neuroscience." },
  ],
  "ctm-m1-l2": [
    { question: "What is gamification?", options: ["Playing video games in class", "Applying game mechanics (points, levels, challenges) to learning", "Replacing teaching with games", "Using expensive gaming equipment"], correctIndex: 1, explanation: "Gamification applies game mechanics like points, levels, rewards, and challenges to learning — no technology needed." },
    { question: "What does the House System create in a classroom?", options: ["Division and conflict", "Positive peer pressure and team identity", "Extra work for the teacher", "Unfair competition"], correctIndex: 1, explanation: "The House System creates positive peer pressure and team identity, motivating students to perform well for their team." },
  ],
  "ctm-m2-l1": [
    { question: "What retention rate does role-play achieve compared to reading?", options: ["10% vs 5%", "50% vs 30%", "90% vs 10%", "100% vs 0%"], correctIndex: 2, explanation: "Role-play achieves 90% retention vs 10% for reading — it engages the whole student through body, emotions, and mind." },
    { question: "What should NEVER be skipped after a role-play activity?", options: ["Homework", "The debrief/discussion", "Grades", "Costumes"], correctIndex: 1, explanation: "The debrief after role-play is where learning consolidates — never skip it, as it connects the experience to the concept." },
  ],

  // ===== PROVEN TEACHER COURSES =====
  // Classroom Management Mastery
  "cmm-m1-l1": [
    { question: "According to Marzano, well-taught routines reduce off-task behaviour by approximately:", options: ["5%", "28%", "50%", "80%"], correctIndex: 1, explanation: "Marzano's research shows well-taught routines reduce off-task behaviour by 28%." },
    { question: "What is the purpose of a Do Now?", options: ["Busywork to keep students quiet", "Engage students in meaningful work immediately so the teacher can manage logistics", "Grade students daily", "Replace the lesson"], correctIndex: 1, explanation: "A Do Now engages students productively while the teacher takes attendance, checks materials, and prepares." },
    { question: "How long should it take to teach a routine to mastery?", options: ["One day", "3-5 repetitions over the first week", "A full term", "It can't be taught"], correctIndex: 1, explanation: "Routines typically need 3-5 repetitions over the first week to become automatic." },
  ],
  "cmm-m2-l1": [
    { question: "What is the FIRST step on the intervention ladder?", options: ["Consequence", "Non-verbal cue", "Public correction", "Lecture"], correctIndex: 1, explanation: "Non-verbal interventions (eye contact, gesture, proximity) come first — they don't interrupt learning." },
    { question: "Why are public lectures during correction discouraged?", options: ["They take too long", "They humiliate students and escalate behaviour", "They're not allowed", "They're hard to remember"], correctIndex: 1, explanation: "Public lectures humiliate students and almost always escalate the situation; private corrections work far better." },
    { question: "What is the most important step AFTER a correction?", options: ["Punishment", "The recovery conversation to preserve relationship", "Sending the student to the principal", "Forgetting about it"], correctIndex: 1, explanation: "The recovery conversation rebuilds relationship — the #1 predictor of long-term behaviour change." },
  ],

  // Differentiated Instruction & UDL
  "diu-m1-l1": [
    { question: "What are the 3 levers of differentiation (Tomlinson)?", options: ["Easy, medium, hard", "Content, Process, Product", "Read, Write, Speak", "Test, Quiz, Exam"], correctIndex: 1, explanation: "Tomlinson's framework: differentiate Content (what), Process (how engage), or Product (how demonstrate)." },
    { question: "How many levers should you typically differentiate in a single lesson?", options: ["All three", "One", "Two", "Zero"], correctIndex: 1, explanation: "Sustainable differentiation focuses on ONE lever per lesson — not all three." },
    { question: "What should tiered tasks be called instead of 'easy/medium/hard'?", options: ["A/B/C", "Foundation/Core/Extension", "Slow/Fast", "Bronze/Silver/Gold"], correctIndex: 1, explanation: "Foundation/Core/Extension avoids stigma and focuses on the kind of thinking, not student ability." },
  ],
  "diu-m2-l1": [
    { question: "How does UDL differ from differentiation?", options: ["They're the same", "UDL is proactive design; differentiation is reactive adjustment", "UDL is only for special education", "Differentiation is more effective"], correctIndex: 1, explanation: "UDL designs lessons proactively for all learners; differentiation adjusts reactively after problems appear." },
    { question: "What are the 3 UDL principles?", options: ["Read, Write, Speak", "Engagement, Representation, Expression", "Test, Practice, Assess", "Plan, Teach, Reflect"], correctIndex: 1, explanation: "UDL provides multiple means of Engagement (the why), Representation (the what), and Expression (the how)." },
  ],

  // Backward Design
  "bdp-m1-l1": [
    { question: "What is the correct order in backward design?", options: ["Activities → Assessment → Outcomes", "Outcomes → Assessment → Activities", "Assessment → Activities → Outcomes", "Outcomes → Activities → Assessment"], correctIndex: 1, explanation: "Backward design plans Outcomes first, then Assessment, then Activities — destination before the journey." },
    { question: "An essential question should be:", options: ["Closed with one right answer", "Open, debatable, and recurring", "Easy to grade", "From the textbook"], correctIndex: 1, explanation: "Essential questions are open, debatable, and recur throughout a unit — driving deep inquiry." },
    { question: "What distinguishes a performance task from a regular test?", options: ["It's harder", "It requires students to transfer learning, not just recall", "It takes longer", "It's optional"], correctIndex: 1, explanation: "Performance tasks demand transfer of learning to real-world contexts — beyond simple recall." },
  ],
  "bdp-m2-l1": [
    { question: "What does the 'R' in WHERETO stand for?", options: ["Read", "Rethink & Revise", "Repeat", "Recall"], correctIndex: 1, explanation: "R = Rethink & Revise — building checkpoints where students reconsider and revise their thinking." },
    { question: "Self-assessment by students has an effect size of approximately:", options: ["0.1", "0.4", "1.44", "3.0"], correctIndex: 2, explanation: "Hattie's research puts self-assessment at an effect size of 1.44 — among the largest in education." },
  ],

  // Bloom's Taxonomy
  "bta-m1-l1": [
    { question: "What percentage of classroom questions typically sit at the lowest 2 levels (Remember/Understand)?", options: ["10-20%", "30-40%", "70-80%", "Less than 5%"], correctIndex: 2, explanation: "Research shows 70-80% of teacher questions sit at Remember/Understand — limiting higher-order development." },
    { question: "Which is a Bloom's Create-level question?", options: ["Define photosynthesis", "Explain photosynthesis", "Design an experiment to test if plants need sunlight", "List parts of a plant"], correctIndex: 2, explanation: "'Design an experiment' is Create — producing new work using understanding." },
    { question: "What is the recommended minimum wait time after a higher-order question?", options: ["1 second", "5-7 seconds", "30 seconds", "No wait time needed"], correctIndex: 1, explanation: "5-7 seconds of silent wait time is needed for students to construct higher-order responses." },
  ],
  "bta-m2-l1": [
    { question: "The recommended distribution for a balanced test is:", options: ["100% Remember", "30% Remember/Understand, 40% Apply/Analyse, 30% Evaluate/Create", "All Create", "50% Apply, 50% Recall"], correctIndex: 1, explanation: "The 30-40-30 distribution balances foundational knowledge with higher-order thinking." },
    { question: "Open-ended higher-order questions should be assessed with:", options: ["Single answer keys", "Rubrics that evaluate reasoning and evidence", "No assessment", "Multiple choice only"], correctIndex: 1, explanation: "Open-ended work needs rubrics assessing reasoning, evidence, and communication — not single answer keys." },
  ],

  // Cooperative Learning
  "cls-m1-l1": [
    { question: "What does PIES stand for in cooperative learning?", options: ["Plan, Implement, Evaluate, Share", "Positive interdependence, Individual accountability, Equal participation, Simultaneous interaction", "Practice, Interact, Engage, Solve", "Problem, Idea, Evidence, Solution"], correctIndex: 1, explanation: "PIES is Kagan's framework: Positive interdependence, Individual accountability, Equal participation, Simultaneous interaction." },
    { question: "Why is individual accountability essential?", options: ["So teachers can punish", "So one student doesn't do all the work while others coast", "To rank students", "It's not essential"], correctIndex: 1, explanation: "Without individual accountability, group work devolves into one student doing all the work." },
    { question: "What is the recommended group size for cooperative learning?", options: ["2", "4", "6-8", "Whole class"], correctIndex: 1, explanation: "Groups of 4 maximise per-student interaction and balance perspectives without becoming unwieldy." },
  ],
  "cls-m2-l1": [
    { question: "Which structure is best for teaching new content where students become experts?", options: ["Think-Pair-Share", "Jigsaw", "Round Table", "Quick Quiz"], correctIndex: 1, explanation: "Jigsaw makes every student both teacher and learner — ideal for new content acquisition." },
    { question: "What should follow every higher-order question?", options: ["A test", "Think-Pair-Share", "Homework", "Silence forever"], correctIndex: 1, explanation: "Think-Pair-Share gives every student time to think and articulate before whole-class discussion." },
  ],

  // Literacy Across Curriculum
  "lac-m1-l1": [
    { question: "Which tier of vocabulary should teachers focus on most heavily?", options: ["Tier 1 (everyday)", "Tier 2 (academic, cross-subject)", "Tier 3 (domain-specific only)", "None — students learn naturally"], correctIndex: 1, explanation: "Tier 2 academic words (analyse, evident, justify) appear across subjects and unlock comprehension everywhere." },
    { question: "How many words per week should be taught deeply for retention?", options: ["30+", "5", "10", "1"], correctIndex: 1, explanation: "Teaching 5 words deeply produces better retention than 30 superficially — depth beats volume." },
    { question: "Vocabulary mastery requires approximately how many meaningful exposures?", options: ["1", "2-3", "6-10", "100+"], correctIndex: 2, explanation: "Research shows 6-10 meaningful exposures over time are needed for true vocabulary ownership." },
  ],
  "lac-m2-l1": [
    { question: "When should students activate prior knowledge?", options: ["After reading", "Before reading", "During the test", "Never"], correctIndex: 1, explanation: "Activating prior knowledge BEFORE reading is the strongest predictor of comprehension success." },
    { question: "What is a 'think-aloud' in reading instruction?", options: ["Reading loudly", "The teacher verbalising their thinking process while reading", "Group discussion", "Silent reading"], correctIndex: 1, explanation: "Think-alouds make invisible comprehension strategies visible by verbalising the reader's mental process." },
  ],

  // Numeracy
  "nmf-m1-l1": [
    { question: "What does CPA stand for in maths instruction?", options: ["Calculate, Practise, Assess", "Concrete, Pictorial, Abstract", "Count, Plus, Add", "Compute, Plan, Analyse"], correctIndex: 1, explanation: "CPA is the Singapore-Maths sequence: Concrete manipulation → Pictorial representation → Abstract notation." },
    { question: "What's the most common mistake in maths teaching?", options: ["Too much practice", "Skipping Concrete and Pictorial, going straight to Abstract", "Too many manipulatives", "Too slow pacing"], correctIndex: 1, explanation: "Most teachers skip C and P and go straight to abstract procedures — leading to memorisation without understanding." },
    { question: "When a student is stuck on an abstract problem, you should:", options: ["Re-explain abstractly", "Go back to pictorial or concrete", "Give the answer", "Move on"], correctIndex: 1, explanation: "Returning to pictorial or concrete representations rebuilds the conceptual foundation — re-explaining abstractly rarely helps." },
  ],
  "nmf-m2-l1": [
    { question: "What is the main purpose of a Number Talk?", options: ["Get the right answer fast", "Share and discuss multiple mental strategies", "Replace written maths", "Test memorisation"], correctIndex: 1, explanation: "Number Talks build flexibility by surfacing and discussing multiple mental strategies — not just the answer." },
    { question: "Why use thumb signals instead of raised hands?", options: ["It's faster", "It protects slow thinkers from being dominated by fast hands", "Less noisy", "Tradition"], correctIndex: 1, explanation: "Thumb signals preserve silent think time for all students, regardless of processing speed." },
  ],

  // Formative Assessment
  "fal-m1-l1": [
    { question: "What is a 'hinge question'?", options: ["The first question of class", "A diagnostic multi-choice question where wrong answers reveal specific misconceptions", "A question that doors hinge on", "The last question on a test"], correctIndex: 1, explanation: "Hinge questions are designed so each wrong answer reveals a different misconception — allowing targeted re-teaching." },
    { question: "What is the highest-leverage low-tech tool for checking understanding?", options: ["Verbal questioning", "Mini whiteboards", "Homework", "Final exam"], correctIndex: 1, explanation: "Mini whiteboards let you see every student's response simultaneously in seconds." },
    { question: "Exit tickets are only useful if:", options: ["Graded heavily", "Reviewed BEFORE the next lesson and used to plan it", "Stored in a folder", "Sent to parents"], correctIndex: 1, explanation: "Exit tickets only impact learning when used to inform the next lesson — otherwise they're busywork." },
  ],
  "fal-m2-l1": [
    { question: "What 3 questions should good feedback answer?", options: ["Who, what, where", "Where am I going? How am I going? Where to next?", "Right, wrong, why", "Good, bad, ugly"], correctIndex: 1, explanation: "Hattie's feedback model: Where am I going? (criteria), How am I going? (current state), Where to next? (action)." },
    { question: "Feedback only works if:", options: ["It's long", "Students are required to act on it", "It includes a grade", "Parents see it"], correctIndex: 1, explanation: "Unactioned feedback has no impact — students must have time and requirement to use it." },
  ],

  // Questioning
  "pq-m1-l1": [
    { question: "What is the average teacher's wait time after asking a question?", options: ["0.9 seconds", "5 seconds", "15 seconds", "30 seconds"], correctIndex: 0, explanation: "Mary Budd Rowe's research found teachers wait only 0.9 seconds on average — far too short for thinking." },
    { question: "When wait time increases to 3+ seconds, student response length:", options: ["Stays the same", "Drops", "Triples", "Doubles"], correctIndex: 2, explanation: "Length of student responses triples when wait time increases to 3+ seconds." },
    { question: "What does 'probing' a student answer mean?", options: ["Interrogating them", "Pushing past surface answers with follow-up questions to deepen thinking", "Punishing wrong answers", "Calling on someone else"], correctIndex: 1, explanation: "Probing uses follow-up questions (clarify, justify, extend) to deepen first surface responses." },
  ],
  "pq-m2-l1": [
    { question: "In a Socratic seminar, who does most of the talking?", options: ["The teacher", "Students, with each other", "The principal", "Parents"], correctIndex: 1, explanation: "In Socratic seminars, students dialogue with each other; the teacher facilitates from the side." },
    { question: "What is the inner-outer circle setup for?", options: ["Discipline", "Managing participation in larger classes — inner discusses, outer observes, then swap", "Decoration", "Seating chart"], correctIndex: 1, explanation: "Inner-outer circles let larger classes engage in Socratic discussion in manageable rotating groups." },
  ],

  // Active Learning
  "ale-m1-l1": [
    { question: "After how many minutes does student attention during lectures typically drop sharply?", options: ["1 minute", "10 minutes", "45 minutes", "Never"], correctIndex: 1, explanation: "Bunce's research shows attention peaks at 5-10 minutes then drops sharply during passive lectures." },
    { question: "What does the 10-minute rule require?", options: ["Lessons should be 10 min long", "Every 8-10 minutes of input must be followed by 2-3 minutes of active processing", "Take a 10-minute break", "Quiz every 10 minutes"], correctIndex: 1, explanation: "The 10-minute rule structures active processing breaks after every 8-10 minutes of input." },
    { question: "In the 5E model, what comes BEFORE Explain?", options: ["Evaluate", "Explore", "Elaborate", "Engage and Explore"], correctIndex: 3, explanation: "5E: Engage → Explore → Explain → Elaborate → Evaluate. Students explore BEFORE the teacher explains." },
  ],
  "ale-m2-l1": [
    { question: "What's the recommended approach to building active learning into your practice?", options: ["Try all 20 techniques at once", "Pick 5 to master, then add more", "Wait for a workshop", "Don't bother"], correctIndex: 1, explanation: "Sustainable change comes from mastering 5 techniques deeply before adding more." },
    { question: "Freeman et al.'s 2014 meta-analysis showed active learning reduces failure rates from 34% to:", options: ["50%", "22%", "5%", "0%"], correctIndex: 1, explanation: "Active learning cut failure rates from 34% to 22% across 225 studies." },
  ],
  // Cyber Safety & Digital Citizenship
  "csdc-m1-l1": [
    { question: "What is the first step of the RCDS response to cyberbullying?", options: ["Punish the bully", "Receive — listen without judgement", "Confiscate phones", "Call the police"], correctIndex: 1, explanation: "Start by listening without judgement; blame silences the student." },
    { question: "Why should evidence be captured immediately?", options: ["To share in the staff room", "Messages are often deleted", "To post online", "It is not needed"], correctIndex: 1, explanation: "Screenshots preserve evidence before the sender deletes it." },
    { question: "Which prevention strategy works best?", options: ["Posters only", "Rehearsing upstander responses", "Banning all phones", "Ignoring it"], correctIndex: 1, explanation: "Bystanders who intervene change outcomes more than punishment does." },
  ],
  "csdc-m1-l2": [
    { question: "The three rules of a digital footprint are permanent, searchable and:", options: ["Private", "Copyable", "Temporary", "Encrypted"], correctIndex: 1, explanation: "Screenshots make even 'disappearing' content copyable." },
    { question: "What is the Grandparent Test?", options: ["Asking grandparents for permission", "Would my grandparent, principal and future employer be fine seeing this?", "A privacy app", "A school rule"], correctIndex: 1, explanation: "It is a 3-second filter before posting anything online." },
    { question: "What is the 3-2-1 screen habit?", options: ["3 apps, 2 hours, 1 phone", "No screens 1 hour before sleep, phone 2 metres from bed, 3 device-free meals weekly", "3 hours of study", "A password rule"], correctIndex: 1, explanation: "It builds healthier sleep and mealtime boundaries around devices." },
  ],
  "csdc-m2-l1": [
    { question: "What does the S in SIFT stand for?", options: ["Share", "Stop", "Search", "Save"], correctIndex: 1, explanation: "Stop — strong emotion is the signal of manipulation." },
    { question: "Why is 'provenance beats pixel-hunting' now the advice on deepfakes?", options: ["Pixels are expensive", "Visual tells are disappearing as AI improves", "Cameras are better", "Nobody makes deepfakes"], correctIndex: 1, explanation: "Tracing the original source is more reliable than spotting glitches." },
    { question: "What should students do before forwarding an emotional message?", options: ["Forward faster", "Run the SIFT routine", "Add a comment", "Delete their account"], correctIndex: 1, explanation: "SIFT gives a two-minute verification habit." },
  ],
  // Financial & Career Literacy
  "fcl-m1-l1": [
    { question: "In the 50-30-20 rule, what does the 20 represent?", options: ["Wants", "Savings", "Taxes", "Needs"], correctIndex: 1, explanation: "20% goes to savings." },
    { question: "Why start budgeting lessons with pocket money?", options: ["It is easier to grade", "Students engage with money they actually handle", "It is required by law", "It avoids maths"], correctIndex: 1, explanation: "Relevance drives engagement far more than hypothetical salaries." },
    { question: "What concept explains that every ₹20 snack is ₹20 not saved?", options: ["Inflation", "Opportunity cost", "Compound interest", "Liquidity"], correctIndex: 1, explanation: "Opportunity cost is the value of the alternative given up." },
  ],
  "fcl-m1-l2": [
    { question: "When do you need to enter a UPI PIN?", options: ["To receive money", "Only to send money", "For every notification", "To check balance"], correctIndex: 1, explanation: "A PIN is never required to receive money — that request is always a scam." },
    { question: "Scanning a QR code always...", options: ["Receives money", "Sends money", "Nothing", "Adds a contact"], correctIndex: 1, explanation: "Scanning initiates a payment out of your account." },
    { question: "Which number is India's cyber-fraud helpline?", options: ["100", "1930", "108", "112"], correctIndex: 1, explanation: "Report financial cyber fraud on 1930 or cybercrime.gov.in within the golden hour." },
  ],
  "fcl-m2-l1": [
    { question: "What question opens career exploration better than 'what do you want to become?'", options: ["What marks do you want?", "What problems do you enjoy solving?", "What does your father do?", "Which college?"], correctIndex: 1, explanation: "Problem preference maps to whole skill clusters rather than a single job title." },
    { question: "What is the purpose of the three-question career interview?", options: ["Homework points", "Reveal the daily reality and entry route of a real job", "Practice English", "Find a job"], correctIndex: 1, explanation: "Real interviews expose the everyday reality that brochures hide." },
    { question: "Why display careers on a classroom Career Wall?", options: ["Decoration", "It expands the shared career vocabulary of the whole class", "To rank students", "For inspection"], correctIndex: 1, explanation: "Collective exposure widens what every student and parent believes is possible." },
  ],
  // Climate & Sustainability Education
  "cse-m1-l1": [
    { question: "In the two-jar demo, the cling film represents:", options: ["The ozone layer", "Greenhouse gases trapping heat", "Clouds", "Pollution particles"], correctIndex: 1, explanation: "The sealed jar warms faster, modelling heat trapped by greenhouse gases." },
    { question: "How should every climate lesson end?", options: ["With a warning", "With an achievable action", "With a test", "With statistics"], correctIndex: 1, explanation: "Agency prevents eco-anxiety and disengagement." },
    { question: "Why use local weather data?", options: ["It is cheaper", "It makes global change concrete and real", "It is more accurate", "It is required"], correctIndex: 1, explanation: "Local data connects abstract global trends to students' lived experience." },
  ],
  "cse-m2-l1": [
    { question: "What is the audit cycle?", options: ["Plan, poster, prize", "Baseline, intervene, re-measure", "Collect, discard, forget", "Survey only"], correctIndex: 1, explanation: "Measuring before and after proves the intervention worked." },
    { question: "Why do audits beat poster competitions?", options: ["They are cheaper", "They produce measurable change and real data skills", "They take less time", "They need no teacher"], correctIndex: 1, explanation: "Audits generate numbers, recommendations and verified savings." },
    { question: "What unlocks school budget support for a student project?", options: ["Enthusiasm", "Quantified rupee savings", "Longer reports", "More posters"], correctIndex: 1, explanation: "Management responds to measurable financial impact." },
  ],
  // Voice, Presence & Public Speaking
  "vpt-m1-l1": [
    { question: "Projection comes from:", options: ["Shouting louder", "Breath support and resonance", "Raising pitch", "Speaking faster"], correctIndex: 1, explanation: "Force strains the vocal folds; breath support carries the sound." },
    { question: "What should you do instead of clearing your throat forcefully?", options: ["Cough hard", "Sip water or swallow", "Whisper", "Stop speaking for a day"], correctIndex: 1, explanation: "Forceful throat clearing slams the vocal folds together." },
    { question: "Which is the most effective alternative to raising your voice?", options: ["Banging the table", "Pause, stand still, and move closer to the noise", "Shouting once loudly", "Leaving the room"], correctIndex: 1, explanation: "Silence and proximity control a class better than volume." },
  ],
  "vpt-m2-l1": [
    { question: "What does the R in SOAR stand for?", options: ["Repeat", "Request", "Review", "Reflect"], correctIndex: 1, explanation: "Close with a specific requested action, not a thank-you." },
    { question: "What should you decide before writing a talk?", options: ["The slide theme", "The single sentence the audience must remember", "The dress code", "The length"], correctIndex: 1, explanation: "One sentence anchors and shapes every other part of the talk." },
    { question: "How should a parent meeting open?", options: ["With the problem", "With something specific and positive about the child", "With marks only", "With school rules"], correctIndex: 1, explanation: "A specific positive opening builds the trust needed for the growth conversation." },
  ],
  // Computational Thinking Unplugged
  "ctu-m1-l1": [
    { question: "Which is NOT one of the four pillars of computational thinking?", options: ["Decomposition", "Memorisation", "Abstraction", "Algorithms"], correctIndex: 1, explanation: "The four pillars are decomposition, pattern recognition, abstraction and algorithms." },
    { question: "In the Human Robot activity, what causes most failures?", options: ["Slow students", "Imprecise instructions", "Small grids", "Lack of computers"], correctIndex: 1, explanation: "Ambiguity in the instructions teaches the need for precision." },
    { question: "How should teachers frame bugs?", options: ["As student failure", "As mistakes in the instructions to be found and fixed", "As reasons to stop", "As cheating"], correctIndex: 1, explanation: "A bug is in the code, never in the child." },
  ],
  "ctu-m2-l1": [
    { question: "What is the recommended learning sequence?", options: ["Python first", "Unplugged, then blocks, then text code", "Blocks only", "Theory then exam"], correctIndex: 1, explanation: "Skipping stages produces syntax panic and disengagement." },
    { question: "With one device per group, what keeps everyone coding?", options: ["Letting the fastest type", "Rotating Driver, Navigator, Tester, Recorder roles", "Watching a video", "Copying notes"], correctIndex: 1, explanation: "Rotating roles ensure every student types and thinks." },
    { question: "Why ask students to predict output before running code?", options: ["To save electricity", "Prediction turns each run into an experiment and exposes misconceptions", "To finish faster", "To avoid errors"], correctIndex: 1, explanation: "Prediction before execution is where the conceptual learning happens." },
  ],
  // Professional Growth: Portfolio & Research
  "tpg-m1-l1": [
    { question: "Which statement shows impact rather than activity?", options: ["Conducted 12 remedial classes", "Remedial group mean rose from 34% to 58%", "Attended a workshop", "Made a wall chart"], correctIndex: 1, explanation: "Appraisals reward measured change in student learning." },
    { question: "What is the five-minute weekly habit?", options: ["Writing a diary", "Dropping one dated artefact into a portfolio folder", "Cleaning the desk", "Emailing parents"], correctIndex: 1, explanation: "Small weekly curation removes appraisal-week panic." },
    { question: "Before using student photographs you must:", options: ["Post them online", "Obtain consent and anonymise data", "Print them large", "Nothing"], correctIndex: 1, explanation: "Consent and anonymisation are non-negotiable in a professional portfolio." },
  ],
  "tpg-m2-l1": [
    { question: "Which is a strong action-research question?", options: ["How can I teach better?", "Does a 2-minute retrieval quiz improve Class 8 unit-test scores versus the previous unit?", "Are students happy?", "Is school good?"], correctIndex: 1, explanation: "A strong question names the class, the change and the measure." },
    { question: "Why run the cycle for about six weeks?", options: ["School rules", "To outlast the novelty effect", "To fill time", "Exams demand it"], correctIndex: 1, explanation: "Anything new works for two weeks; six weeks reveals real effects." },
    { question: "What makes evidence trustworthy?", options: ["One source", "Triangulating at least two sources against a baseline", "Teacher memory", "Student opinion only"], correctIndex: 1, explanation: "A baseline plus multiple evidence sources guards against fooling yourself." },
  ],
};
