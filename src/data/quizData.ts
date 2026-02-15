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
};
