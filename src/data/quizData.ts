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
};
