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
};
