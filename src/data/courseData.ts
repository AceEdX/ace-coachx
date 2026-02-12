export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  practicalExample: {
    title: string;
    scenario: string;
    steps: string[];
    tips: string[];
  };
  keyTakeaways: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  aiPowered: boolean;
  instructor: string;
  instructorBio: string;
  modules: Module[];
}

export const coursesData: Course[] = [
  {
    id: "ai-augmented-educator",
    title: "The AI-Augmented Educator",
    description: "Master prompt engineering for pedagogy, ethical AI integration, and automation hacks for grading, feedback, and parent communication.",
    longDescription: "This module transforms you into an AI-powered teaching powerhouse. Learn to design lesson plans and rubrics in seconds using prompt engineering, teach students to use AI ethically as a tutor (not a cheater), and automate time-consuming tasks like grading, feedback, and parent communication. Every lesson includes hands-on activities you can implement tomorrow.",
    category: "AI & Technology",
    duration: "4 weeks",
    students: 4820,
    rating: 4.9,
    aiPowered: true,
    instructor: "Dr. Priya Sharma",
    instructorBio: "AI in Education researcher at Stanford, former high school teacher with 12 years of classroom experience.",
    modules: [
      {
        id: "aie-m1",
        title: "Prompt Engineering for Pedagogy",
        description: "Design lesson plans, rubrics, and assessments in seconds using AI",
        lessons: [
          {
            id: "aie-m1-l1",
            title: "Your First AI-Powered Lesson Plan",
            duration: "8 min",
            description: "Learn to craft prompts that generate complete, standards-aligned lesson plans.",
            content: `# Your First AI-Powered Lesson Plan

## Why Prompt Engineering Matters for Teachers

The difference between a mediocre AI output and an excellent one is entirely in the prompt. As an educator, learning to "speak AI" will save you 5-10 hours per week on planning.

## The TEACHER Prompt Framework

### T - Target Audience
Specify grade level, skill level, and any accommodations needed.

### E - Educational Standard
Reference specific curriculum standards (Common Core, NGSS, etc.)

### A - Activity Type
Lecture, discussion, hands-on, group work, assessment, etc.

### C - Content Focus
The specific topic and key vocabulary.

### H - Higher-Order Thinking
Bloom's taxonomy level you're targeting.

### E - Evaluation Method
How you'll assess understanding.

### R - Resources Available
Technology, materials, time constraints.

## Example Prompt vs. Output

**Weak prompt:** "Make a lesson plan about photosynthesis"

**Strong TEACHER prompt:** "Create a 45-minute lesson plan for 7th-grade biology on photosynthesis. Align to NGSS MS-LS1-6. Include a hands-on activity using simple materials (cups, soil, water, plastic wrap). Target 'Analyze' level on Bloom's taxonomy. End with a formative assessment exit ticket. Assume students have Chromebooks but limited science lab access."

The strong prompt produces a lesson plan you can use immediately with minimal editing.

## Building Your Prompt Library

Start building a personal library of prompt templates:
- Lesson plan generator
- Rubric creator
- Differentiated activity designer
- Parent communication drafter
- Assessment question generator`,
            practicalExample: {
              title: "Creating a Week's Worth of Lesson Plans in 30 Minutes",
              scenario: "You need to plan 5 days of 8th-grade English lessons on persuasive writing.",
              steps: [
                "Open your preferred AI tool (ChatGPT, Claude, Gemini)",
                "Use the TEACHER framework: 'Create 5 sequential daily lesson plans for 8th-grade English on persuasive writing. Each plan should be 50 minutes. Align to CCSS.ELA-LITERACY.W.8.1. Day 1: Introduction to persuasion techniques. Day 2: Analyzing mentor texts. Day 3: Planning and outlining. Day 4: Drafting. Day 5: Peer revision and editing. Include differentiation for ELL students and gifted learners. Each day should have a warm-up, main activity, and exit ticket.'",
                "Review the output and adjust any activities that don't fit your classroom context",
                "Follow up: 'Now create a rubric for the final persuasive essay based on these lessons'",
                "Follow up: 'Generate 3 mentor text options at different reading levels for Day 2'",
                "Save your prompts in a document labeled 'Persuasive Writing Unit Prompts' for reuse"
              ],
              tips: [
                "Always specify your grade level, time constraints, and available resources",
                "Use follow-up prompts to refine and expand initial outputs",
                "Save working prompts as templates—swap out the topic for instant reuse",
                "Review every AI output critically—you are the expert, AI is your assistant"
              ]
            },
            keyTakeaways: [
              "The TEACHER framework produces dramatically better AI outputs",
              "Specific prompts save more time than vague ones",
              "Build a personal prompt library for repeated use",
              "Always review and customize AI-generated content for your students"
            ]
          },
          {
            id: "aie-m1-l2",
            title: "AI-Generated Rubrics & Assessments",
            duration: "10 min",
            description: "Create differentiated rubrics and assessment tools using AI in minutes.",
            content: `# AI-Generated Rubrics & Assessments

## The Rubric Revolution

Creating rubrics manually takes hours. With the right prompts, you can generate professional, standards-aligned rubrics in under 2 minutes.

## Rubric Prompt Template

"Create a [holistic/analytic] rubric for [assignment type] for [grade level]. Include [number] performance levels: [Exemplary, Proficient, Developing, Beginning]. Assess these criteria: [list criteria]. Use student-friendly language. Include specific, observable descriptors for each level."

## Assessment Types You Can Generate

### Quick Formative Assessments
- Exit tickets with 3 levels of questions (recall, apply, analyze)
- Think-pair-share prompts with discussion guides
- Self-assessment checklists for students

### Summative Assessment Options
- Project-based rubrics with real-world contexts
- Portfolio assessment criteria
- Performance task descriptions with scoring guides

### Differentiated Assessments
- Same content, multiple format options
- Tiered questions by Bloom's level
- Choice boards with assessment criteria

## Quality Control Checklist

After AI generates your assessment:
- Does it align with your actual learning objectives?
- Is the language appropriate for your students?
- Are the criteria specific and observable?
- Would YOU be able to grade consistently using this?
- Have you removed any AI bias or assumptions?`,
            practicalExample: {
              title: "Building a Complete Assessment Package for a Science Unit",
              scenario: "You're wrapping up a unit on ecosystems with 5th graders.",
              steps: [
                "Prompt: 'Create an analytic rubric for a 5th-grade ecosystem diorama project. Criteria: Scientific accuracy, Creativity, Labeling, Oral presentation. 4 levels: Expert, Proficient, Developing, Beginning. Use kid-friendly language.'",
                "Prompt: 'Now create 5 exit ticket questions for each day of the unit. Day 1: Food chains. Day 2: Food webs. Day 3: Producers/consumers/decomposers. Day 4: Human impact. Day 5: Conservation. Mix question types: multiple choice, short answer, draw-and-label.'",
                "Prompt: 'Create a student self-assessment checklist they can use before submitting their diorama. Include 8-10 items they should verify.'",
                "Prompt: 'Generate a differentiated choice board: 6 ways students can demonstrate ecosystem knowledge (diorama, comic strip, podcast script, infographic, letter to a senator, children's book). Include brief rubric for each.'",
                "Review all outputs, adjust language, and compile into your unit assessment folder",
                "Share rubrics with students BEFORE they start working"
              ],
              tips: [
                "Always share rubrics before the assignment—they should guide work, not just grade it",
                "Ask AI to generate student examples at each rubric level for clarity",
                "Use AI to create modified versions for IEP/504 students",
                "Prompt: 'Translate this rubric into parent-friendly language for a newsletter'"
              ]
            },
            keyTakeaways: [
              "AI can generate assessment tools in minutes, not hours",
              "Always customize AI outputs for your specific students",
              "Share rubrics before assignments to improve student work",
              "Use AI to differentiate assessments efficiently"
            ]
          },
          {
            id: "aie-m1-l3",
            title: "Differentiation on Demand",
            duration: "8 min",
            description: "Use AI to instantly create differentiated materials for diverse learners.",
            content: `# Differentiation on Demand

## The Differentiation Challenge

Every classroom has students at different levels. Traditionally, creating differentiated materials means 3x the work. AI changes that equation entirely.

## Differentiation Prompt Strategies

### By Reading Level
"Rewrite this passage at a [3rd grade / 5th grade / 8th grade] reading level while maintaining all key concepts."

### By Learning Style
"Present this concept about gravity three ways: 1) A visual diagram with labels 2) A step-by-step written explanation 3) A hands-on experiment students can do at their desks"

### By Language
"Translate these math word problems into [Spanish/Mandarin/Arabic]. Keep the mathematical terms in English with the translated term in parentheses."

### By Complexity
"Create three versions of this worksheet on fractions: Tier 1 (basic operations), Tier 2 (word problems), Tier 3 (real-world application problems requiring multiple steps)"

## Scaffolding with AI

Use AI to create scaffolds:
- Graphic organizers pre-filled with starter information
- Sentence frames for writing assignments
- Step-by-step guides for complex procedures
- Vocabulary lists with visual supports

## The Speed Advantage

What used to take an entire prep period now takes 5 minutes:
1. Paste your original material
2. Specify the modification needed
3. Review and adjust
4. Print or share digitally`,
            practicalExample: {
              title: "Differentiating a History Lesson for 3 Tiers in 10 Minutes",
              scenario: "Tomorrow's lesson covers the causes of World War I. You have struggling readers, on-level students, and advanced learners.",
              steps: [
                "Start with your core content and paste it into AI",
                "Tier 1 prompt: 'Rewrite this passage about WWI causes at a 4th-grade reading level. Add a word bank with definitions. Include a graphic organizer that connects causes to effects with some boxes pre-filled.'",
                "Tier 2 prompt: 'Keep this passage at grade level. Add 3 discussion questions that require citing evidence from the text. Include a blank cause-and-effect graphic organizer.'",
                "Tier 3 prompt: 'Enhance this passage with primary source excerpts. Add analysis questions comparing WWI causes to current global tensions. Include a research extension option.'",
                "Prompt: 'Create a single exit ticket that all three tiers can complete but at different depths: Q1 (recall), Q2 (analyze), Q3 (evaluate)'",
                "Print the three versions on different colored paper for easy distribution"
              ],
              tips: [
                "Color-code differentiated materials (no student labels needed)",
                "Let students self-select their tier when appropriate",
                "Use the same assessment for all tiers to see true understanding",
                "Save your differentiation prompts—swap topics for instant reuse next unit"
              ]
            },
            keyTakeaways: [
              "AI eliminates the time barrier to differentiation",
              "Differentiate by reading level, learning style, language, and complexity",
              "Create scaffolds rapidly with AI assistance",
              "Save working prompts as reusable templates"
            ]
          }
        ]
      },
      {
        id: "aie-m2",
        title: "Ethical AI Integration",
        description: "Teach students to use AI as a tutor, not a cheater",
        lessons: [
          {
            id: "aie-m2-l1",
            title: "AI as a Tutor, Not a Cheater",
            duration: "10 min",
            description: "Establish classroom norms for ethical AI use that enhance learning.",
            content: `# AI as a Tutor, Not a Cheater

## The New Reality

AI is here to stay. Banning it is like banning calculators in the 1980s—counterproductive. Instead, teach students to use it ethically and effectively.

## The Tutor vs. Cheater Framework

### AI as Tutor (Encouraged)
- "Explain this concept to me in simpler terms"
- "Give me a practice problem similar to this one"
- "What am I doing wrong in this math problem?"
- "Help me brainstorm ideas for my essay topic"
- "Quiz me on this vocabulary"

### AI as Cheater (Not Acceptable)
- "Write my essay for me"
- "Give me the answers to these homework questions"
- "Summarize this book I didn't read"
- "Do this math problem set for me"

### The Key Distinction
**Using AI to LEARN = Good. Using AI to AVOID learning = Bad.**

## Classroom AI Policy Template

1. AI use must be disclosed ("I used AI to help me brainstorm")
2. AI output must be significantly transformed by the student
3. Students must demonstrate understanding independently
4. AI should be used for learning support, not task completion
5. When in doubt, ask the teacher

## Teaching AI Literacy

Students need to understand:
- AI can be wrong (hallucinations)
- AI reflects biases in its training data
- AI output needs human judgment
- The skill is in the prompting, not the copying`,
            practicalExample: {
              title: "Running an 'AI Ethics Day' in Your Classroom",
              scenario: "You want to establish clear AI norms with your 9th-grade class.",
              steps: [
                "Activity 1 (10 min): Show students the same prompt answered by 3 AI tools—point out differences and errors",
                "Activity 2 (15 min): Give students 5 scenarios and have them sort into 'Tutor Use' vs 'Cheater Use' using a shared document",
                "Discussion (10 min): Review results—focus on gray areas where students disagree",
                "Activity 3 (10 min): Students write their own 'AI Use Agreement' with 5 rules they think are fair",
                "Compile agreements and create a class consensus document",
                "Post the final agreement in the classroom and have students sign it"
              ],
              tips: [
                "Revisit the agreement monthly—it should evolve as students mature",
                "Model AI use yourself: 'I used AI to generate these practice problems, then I edited them'",
                "Celebrate ethical AI use: 'Great job using AI to check your work!'",
                "Have a clear, fair consequence for AI misuse that focuses on learning, not punishment"
              ]
            },
            keyTakeaways: [
              "Ban less, teach more—AI literacy is a critical skill",
              "The tutor vs. cheater framework is easy for students to understand",
              "Clear policies prevent confusion and build trust",
              "Model ethical AI use in your own teaching"
            ]
          },
          {
            id: "aie-m2-l2",
            title: "Designing AI-Resistant Assessments",
            duration: "8 min",
            description: "Create assignments that leverage AI rather than being defeated by it.",
            content: `# Designing AI-Resistant Assessments

## Rethinking Assessment in the AI Age

Instead of trying to prevent AI use, design assessments where AI is a tool, not a shortcut.

## AI-Resistant Assessment Strategies

### 1. Process Over Product
Grade the journey, not just the destination:
- Require documented brainstorming sessions
- Grade rough drafts and revision history
- Include in-class components that can't be outsourced

### 2. Personal Connection
AI can't fake personal experience:
- "How does this concept relate to YOUR life?"
- "Interview a family member about..."
- "Reflect on your learning process"

### 3. Real-Time Demonstration
Show understanding live:
- Oral presentations with Q&A
- In-class debates with rebuttals
- Live problem-solving on the board

### 4. Creative Synthesis
Combine multiple concepts uniquely:
- "Create a children's book explaining cell division to a 5-year-old"
- "Design a museum exhibit comparing two historical periods"
- "Write a song that teaches the periodic table trends"

### 5. Iterative AI-Enhanced Work
Make AI part of the assignment:
- "Use AI to generate a first draft, then improve it. Submit both versions with annotations explaining your changes."
- "Evaluate AI's answer to this question. What did it get right? What did it miss?"`,
            practicalExample: {
              title: "Converting a Traditional Essay into an AI-Enhanced Assignment",
              scenario: "Instead of 'Write an essay on climate change,' create an AI-integrated assignment.",
              steps: [
                "Step 1: Students generate an AI essay on their topic (submitted as evidence)",
                "Step 2: Students annotate the AI essay—marking errors, weak arguments, missing perspectives",
                "Step 3: Students write their OWN essay that improves on the AI version",
                "Step 4: Students write a reflection: 'How is my essay better than AI's? What did AI teach me?'",
                "Step 5: In-class presentation of key arguments (can't be faked)",
                "Grade: Annotation quality (20%), Original essay improvement (40%), Reflection depth (20%), Presentation (20%)"
              ],
              tips: [
                "This teaches critical thinking about AI while ensuring original work",
                "Students learn to evaluate AI output—a real-world skill",
                "The comparison process deepens understanding",
                "Save the best student annotations as examples for future classes"
              ]
            },
            keyTakeaways: [
              "Design WITH AI, not against it",
              "Process-based assessment resists AI shortcuts",
              "Personal connection and live demonstration can't be faked",
              "Making AI part of the assignment teaches critical evaluation"
            ]
          }
        ]
      },
      {
        id: "aie-m3",
        title: "Automation Hacks",
        description: "Automate grading, feedback, and parent communication",
        lessons: [
          {
            id: "aie-m3-l1",
            title: "Automating Grading & Feedback",
            duration: "10 min",
            description: "Reclaim hours each week by automating routine grading and personalized feedback.",
            content: `# Automating Grading & Feedback

## The Time Crisis

Teachers spend an average of 5-7 hours per week on grading. That's time stolen from planning, relationships, and self-care. Automation can reclaim most of it.

## What Can Be Automated

### Fully Automatable
- Multiple choice / matching quizzes (Google Forms, Microsoft Forms)
- Math problem sets with defined answers
- Vocabulary matching and fill-in-the-blank
- Attendance and participation tracking

### Semi-Automatable (AI-Assisted)
- Short-answer responses (AI drafts feedback, you review)
- Essay grading (AI applies your rubric, you verify)
- Coding assignments (auto-testing with manual review)
- Lab reports (AI checks for required elements)

### Still Needs You
- Creative writing evaluation (voice, style)
- Complex project assessment
- Relationship-based feedback
- IEP-specific accommodations

## Feedback Automation Workflow

1. **Create feedback templates** for common issues
2. **Use AI to match** student work to template categories
3. **Personalize** the template with specific examples from their work
4. **Add a human touch**: one personal comment per student

## Tools for Automation
- Google Forms with automatic grading
- Rubric-based AI feedback generators
- Email merge for parent communication
- LMS auto-grading features`,
            practicalExample: {
              title: "Setting Up Auto-Graded Weekly Quizzes",
              scenario: "You want to give weekly vocab quizzes in your 6th-grade class without spending hours grading.",
              steps: [
                "Create a Google Form with 10 questions: 5 multiple choice, 3 matching, 2 fill-in-the-blank",
                "Enable 'Make this a quiz' in Form settings—set point values and correct answers",
                "Turn on 'Release grade immediately after submission' for instant feedback",
                "Add feedback for wrong answers: 'Review page 42 of your textbook' (this teaches, not just grades)",
                "Use the 'Response' tab to see class-wide data—which questions were hardest?",
                "Set up a weekly email to parents using mail merge: 'Your child scored X/10 on this week's vocabulary quiz'",
                "Time saved: ~2 hours per week on quiz grading alone"
              ],
              tips: [
                "Rotate question order and answer choices to prevent copying",
                "Add explanations for correct answers so the quiz becomes a learning tool",
                "Review the hardest questions in class the next day",
                "Use the data to identify students who need extra vocabulary support"
              ]
            },
            keyTakeaways: [
              "Automate routine grading to reclaim 5+ hours weekly",
              "Use AI to draft feedback, then personalize with human touch",
              "Feedback templates save time while maintaining quality",
              "Data from auto-grading informs instruction immediately"
            ]
          },
          {
            id: "aie-m3-l2",
            title: "Automating Parent Communication",
            duration: "8 min",
            description: "Keep parents informed effortlessly with automated, personalized updates.",
            content: `# Automating Parent Communication

## Why Parent Communication Matters

Research consistently shows that parent involvement increases student achievement by 20-30%. But teachers cite communication as one of their biggest time burdens.

## The Communication Automation Stack

### Weekly Updates (Fully Automated)
- Template newsletter with class highlights
- Auto-populated with grades and attendance
- Sent every Friday at 3 PM

### Progress Alerts (Semi-Automated)
- Triggered when grade drops below threshold
- AI drafts the message, you review before sending
- Includes specific suggestions for support

### Celebration Messages (Template-Based)
- Student achieves milestone → auto-notification
- "Your child completed all homework this week!"
- Builds positive relationship before problems arise

## Communication Templates

### Positive Update Template
"Dear [Parent], I wanted to share that [Student] [specific positive action] today. This shows [character trait/skill]. Keep encouraging them! - [Teacher]"

### Concern Template
"Dear [Parent], I've noticed [specific, objective observation] in [Student's] recent work. I'd like to [specific action] to support them. Could we [schedule a call / try this at home]? - [Teacher]"

### Progress Report Template
"[Student]'s weekly update: Attendance: [X/5]. Assignments completed: [X/X]. Current grade: [X]. Highlight: [one positive]. Focus area: [one growth area]."

## Best Practices
- Lead with positive news
- Be specific, not vague
- Suggest actions, not just problems
- Communicate in the family's preferred language (AI can translate!)`,
            practicalExample: {
              title: "Setting Up a Complete Parent Communication System",
              scenario: "You want to communicate weekly with 120+ parents without it consuming your evenings.",
              steps: [
                "Create a Google Sheet with columns: Student Name, Parent Email, Current Grade, Attendance, Highlight, Concern",
                "Update the sheet each Friday using LMS data export (5 min)",
                "Use AI to generate personalized messages: paste 10 student rows at a time with the template",
                "Review AI-generated messages for accuracy and tone (10 min for all students)",
                "Use mail merge (Yet Another Mail Merge or similar) to send personalized emails",
                "Set up auto-triggers: grade drops below 70% → immediate parent alert",
                "Monthly: Send a celebration batch for students who improved",
                "Total time: ~20 minutes/week instead of 3+ hours"
              ],
              tips: [
                "Always proofread AI-translated messages with a bilingual colleague if possible",
                "Send positive messages more often than concern messages (3:1 ratio)",
                "Include one specific thing a parent can do at home",
                "Track which parents open/respond to optimize your approach"
              ]
            },
            keyTakeaways: [
              "Parent communication directly impacts student achievement",
              "Templates + AI + mail merge = personalized communication at scale",
              "Always lead with positive news to build trust",
              "20 minutes/week can keep 120+ families informed"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "future-ready-pedagogy",
    title: "Future-Ready Pedagogy",
    description: "Transform your teaching with Project-Based Learning, the Flipped Classroom 2.0, and gamification strategies.",
    longDescription: "Move from memorization to creation with cutting-edge pedagogical approaches. Master Project-Based Learning that produces real-world outcomes, leverage the flipped classroom model with digital assets, and use game mechanics to drive unprecedented engagement and retention in your classroom.",
    category: "Pedagogy",
    duration: "5 weeks",
    students: 3654,
    rating: 4.8,
    aiPowered: true,
    instructor: "Prof. Michael Torres",
    instructorBio: "Author of 'The Gamified Classroom' and PBL curriculum designer for 200+ schools worldwide.",
    modules: [
      {
        id: "frp-m1",
        title: "Project-Based Learning (PBL)",
        description: "Moving from memorization to creation",
        lessons: [
          {
            id: "frp-m1-l1",
            title: "PBL Fundamentals: From Textbook to Real World",
            duration: "10 min",
            description: "Design projects that connect classroom learning to real-world problems.",
            content: `# PBL Fundamentals: From Textbook to Real World

## What Makes PBL Different

Traditional instruction: Learn content → Take test → Forget
PBL: Encounter problem → Learn content to solve it → Apply → Remember

## The Gold Standard PBL Framework

### 7 Essential Elements
1. **Challenging Problem or Question** - Meaningful, open-ended
2. **Sustained Inquiry** - Deep investigation over time
3. **Authenticity** - Real-world connection
4. **Student Voice & Choice** - Agency in the process
5. **Reflection** - Ongoing metacognition
6. **Critique & Revision** - Feedback loops
7. **Public Product** - Shared beyond the classroom

## PBL vs. "Doing Projects"

A project AT THE END of a unit ≠ PBL
PBL means the project IS the unit. Students learn content BECAUSE they need it to complete the project.

## Driving Questions

The heart of PBL is a compelling driving question:
- "How can we reduce food waste in our school cafeteria?" (Science + Math)
- "Should our city build a new park or affordable housing on the empty lot?" (Social Studies + Math)
- "How can we create a guide that helps immigrants navigate our community?" (ELA + Social Studies)

## Common PBL Concerns

**"I don't have time"** → PBL covers content more efficiently because it's contextualized
**"My students aren't ready"** → Start small with mini-projects (1-2 weeks)
**"How do I grade it?"** → Multiple checkpoints, rubrics, and process + product grading`,
            practicalExample: {
              title: "Designing Your First PBL Unit",
              scenario: "You teach 7th-grade math and want to try PBL for your geometry unit.",
              steps: [
                "Start with a driving question: 'How can we redesign our school's outdoor space to maximize both green area and usable space?'",
                "Map content standards to the project: area, perimeter, scale drawings, ratios, geometry vocabulary",
                "Plan the project timeline: Week 1—Survey the space and learn measurement. Week 2—Scale drawings and area calculations. Week 3—Design proposals. Week 4—Presentations to principal",
                "Build in checkpoints: Day 3 (measurements), Day 7 (calculations), Day 12 (draft design), Day 16 (final presentation)",
                "Create a rubric covering: Mathematical accuracy (30%), Design creativity (20%), Presentation quality (20%), Teamwork (15%), Reflection (15%)",
                "Arrange for the principal or a landscaper to attend final presentations (authentic audience!)"
              ],
              tips: [
                "Start with a mini-PBL (1 week) before attempting a full unit",
                "Build in explicit skill lessons when students need them",
                "Use 'Need to Know' lists—students identify what they need to learn",
                "Let students struggle productively before intervening"
              ]
            },
            keyTakeaways: [
              "PBL makes learning contextual and memorable",
              "The driving question is the most important element",
              "Start small and build your PBL confidence",
              "Authentic audiences dramatically increase student motivation"
            ]
          },
          {
            id: "frp-m1-l2",
            title: "Managing PBL Chaos (Productively)",
            duration: "8 min",
            description: "Keep PBL organized with clear structures while maintaining creative freedom.",
            content: `# Managing PBL Chaos (Productively)

## Structured Freedom

PBL looks chaotic to observers, but the best PBL classrooms have invisible structure. Think of it as "controlled chaos."

## Project Management for Students

### Project Boards
Teach students to use simple project boards:
- To Do | In Progress | Done
- Tools: physical sticky notes, Trello, or Google Sheets

### Team Roles
Assign rotating roles:
- **Project Manager**: Keeps timeline, runs check-ins
- **Researcher**: Finds and organizes information
- **Designer**: Creates visual elements
- **Presenter**: Prepares for sharing

### Daily Stand-ups (5 minutes)
Each team answers:
1. What did we accomplish yesterday?
2. What are we working on today?
3. What obstacles are we facing?

## Teacher's Role During PBL

You shift from "Sage on the Stage" to "Guide on the Side":
- **Facilitate** don't dictate
- **Ask questions** don't give answers
- **Monitor progress** through checkpoints
- **Provide resources** when students identify needs
- **Redirect** when teams go off track

## Handling Common Problems

### "We don't know what to do"
→ Refer them to the driving question and their Need to Know list

### "Our group isn't working well"
→ Check role assignments, facilitate a team meeting

### "We're behind schedule"
→ Help prioritize what's essential vs. nice-to-have`,
            practicalExample: {
              title: "Setting Up Project Management on Day 1 of PBL",
              scenario: "You're launching a 3-week PBL unit with groups of 4 students.",
              steps: [
                "Day 1: Present the driving question with a compelling hook (video, guest speaker, field trip photo)",
                "Create a 'Need to Know' list as a class—students brainstorm what they need to learn",
                "Form teams of 4 (mix ability levels intentionally)",
                "Give each team a Project Folder (physical or digital) with: Timeline, Role Descriptions, Daily Log Sheet, Rubric",
                "Model a 5-minute 'Daily Stand-up' with a volunteer group in front of the class",
                "Set expectations: 'Every day starts with a 5-min stand-up. Every Friday is a checkpoint where I review your progress.'",
                "Post the project timeline visibly in the classroom with checkpoint dates highlighted"
              ],
              tips: [
                "Front-load structure in week 1 so students can work independently by week 2",
                "Use a 'Parking Lot' wall for questions teams can't solve themselves",
                "Check in with every group daily, even briefly (2-3 minutes each)",
                "Celebrate progress publicly: 'Team 3 solved their measurement problem creatively today!'"
              ]
            },
            keyTakeaways: [
              "Structure enables creative freedom—don't skip it",
              "Student project management skills transfer to every subject",
              "Daily stand-ups keep teams accountable in 5 minutes",
              "Your role shifts from instructor to facilitator"
            ]
          }
        ]
      },
      {
        id: "frp-m2",
        title: "The Flipped Classroom 2.0",
        description: "Leverage video and digital assets for home prep",
        lessons: [
          {
            id: "frp-m2-l1",
            title: "Flipping Your Classroom with Digital Assets",
            duration: "10 min",
            description: "Move lectures to homework and make class time active and engaging.",
            content: `# Flipping Your Classroom with Digital Assets

## The Flipped Model

**Traditional:** Lecture in class → Practice at home (alone, stuck)
**Flipped:** Learn content at home (video, reading) → Practice in class (with teacher support)

## Why Flipping Works

- Students can pause, rewind, and rewatch explanations
- Class time is used for the hardest part: application
- Teacher is available when students need help most
- Students learn at their own pace

## Creating Effective Flip Content

### Video Lessons (5-10 minutes max)
- Focus on ONE concept per video
- Use screen recording + webcam (personal connection)
- Include embedded questions (Edpuzzle, PlayPosit)
- Provide captions for accessibility

### Interactive Reading
- Annotated articles with guiding questions
- Interactive simulations students explore
- Podcast episodes with reflection prompts

### Digital Practice
- Low-stakes online practice with instant feedback
- Adaptive platforms that adjust difficulty
- Self-check activities before class

## The In-Class Flip Day

Your class time becomes a workshop:
1. **Quick Check (5 min):** Clarify misunderstandings from video
2. **Application Activity (25 min):** Practice, problem-solving, projects
3. **Deep Dive (15 min):** Extension, discussion, collaboration
4. **Exit Check (5 min):** What do you still need?`,
            practicalExample: {
              title: "Flipping Your First Lesson",
              scenario: "You want to flip your 10th-grade chemistry lesson on balancing equations.",
              steps: [
                "Record a 7-minute video: First 2 min reviewing what an equation is, then 5 min demonstrating how to balance step-by-step with 2 examples",
                "Upload to Edpuzzle and embed 3 check-for-understanding questions at key moments",
                "Set the video as homework, due before class. Track who watched (Edpuzzle shows completion data)",
                "In class: Start with a 3-min 'muddy point' discussion—what was confusing in the video?",
                "Main activity (30 min): Students work in pairs on increasingly difficult equations. You circulate and help stuck pairs.",
                "Extension (10 min): Challenge problems for those who finish early; reteach group for those who struggled",
                "Exit ticket: Balance one equation independently to check understanding"
              ],
              tips: [
                "Start by flipping 1 lesson per week, not every day",
                "Provide an alternative for students without home internet (school library time, printed notes)",
                "Use video analytics to see where students pause or rewatch—that's where confusion lives",
                "Don't just lecture on video—add annotations, highlights, and 'pause and try' moments"
              ]
            },
            keyTakeaways: [
              "Flipping moves the hardest work to class time where you can help",
              "Keep videos short, focused, and interactive",
              "Use viewing data to inform your in-class instruction",
              "Start small—flip one lesson per week and build from there"
            ]
          }
        ]
      },
      {
        id: "frp-m3",
        title: "Gamification in Education",
        description: "Using game mechanics to drive engagement and retention",
        lessons: [
          {
            id: "frp-m3-l1",
            title: "Game Mechanics That Drive Learning",
            duration: "10 min",
            description: "Apply proven game design principles to make your classroom irresistibly engaging.",
            content: `# Game Mechanics That Drive Learning

## Why Gamification Works

Games tap into fundamental human motivations:
- **Autonomy**: Players make meaningful choices
- **Mastery**: Clear progression and skill growth
- **Purpose**: Goals that feel meaningful
- **Social connection**: Collaboration and competition

## Core Game Mechanics for the Classroom

### XP (Experience Points)
Replace traditional grades with XP that accumulate:
- Complete homework: +50 XP
- Ace a quiz: +100 XP
- Help a classmate: +25 XP
- Perfect attendance week: +75 XP
- Levels unlock at 500, 1500, 3000, 5000 XP

### Badges & Achievements
Recognize specific accomplishments:
- "First Try": Got 100% on first attempt
- "Comeback Kid": Improved score by 20%+
- "Team Player": Led a group project
- "Knowledge Seeker": Asked 10 thoughtful questions

### Quests (not assignments)
Rename assignments as quests with narrative:
- "Main Quest": Required core assignments
- "Side Quest": Optional enrichment activities
- "Boss Battle": Unit assessments
- "Daily Challenge": Warm-up activities

### Leaderboards (Use Carefully)
- Show top 10 without bottom rankings
- Use team leaderboards to encourage collaboration
- Reset periodically to give everyone a fresh start
- Celebrate growth, not just achievement

## The Streak System
Daily engagement tracking:
- Day 1-7: Building a streak 🔥
- Day 7: Bronze streak badge
- Day 14: Silver streak badge
- Day 30: Gold streak badge
- If you miss a day, you can "earn back" your streak with extra effort`,
            practicalExample: {
              title: "Gamifying Your Classroom in One Weekend",
              scenario: "You want to launch a gamified system on Monday morning.",
              steps: [
                "Saturday: Design your XP system on paper. Map existing grades to XP values (A = 100 XP, B = 80 XP, etc.)",
                "Create 10 badges using Canva: 5 academic (Quiz Master, Essay Expert) and 5 character (Helping Hand, Persistent Learner)",
                "Design a simple 'Level Up' chart: Level 1 (0-500 XP), Level 2 (500-1500), etc. with small perks at each level (choose your seat, homework pass, etc.)",
                "Sunday: Create a class leaderboard in Google Sheets. Use conditional formatting for team colors.",
                "Monday: Launch with excitement! Present the system as 'We're upgrading our classroom experience.'",
                "First week: Award XP generously to build momentum. Give out 2-3 badges to create excitement.",
                "Track engagement: Are students more excited? Is participation up? Adjust point values as needed."
              ],
              tips: [
                "Start simple—you can always add more game elements later",
                "Make sure EVERYONE can earn XP, not just top students",
                "Celebrate streaks publicly: 'Maria is on a 15-day learning streak!'",
                "Never use gamification to punish—only to reward and motivate"
              ]
            },
            keyTakeaways: [
              "Game mechanics tap into intrinsic human motivations",
              "XP systems make progress visible and rewarding",
              "Badges recognize diverse achievements beyond test scores",
              "Start simple and expand based on student response"
            ]
          },
          {
            id: "frp-m3-l2",
            title: "Building Classroom Quests & Narratives",
            duration: "8 min",
            description: "Transform your curriculum into an epic adventure students can't wait to continue.",
            content: `# Building Classroom Quests & Narratives

## The Power of Story

Humans are wired for narrative. When learning is embedded in a story, retention increases by up to 65%.

## Creating Your Classroom Narrative

### Choose a Theme
Pick a theme that fits your subject:
- Science: "Space Explorer Academy" or "Lab Scientists Saving the Planet"
- History: "Time Traveler's Guild"
- Math: "The Code Breakers Society"
- English: "The Storytellers' League"

### Build a Semester Arc
Create an overarching story that unfolds through the curriculum:
- Beginning: Introduction to the world, establish the challenge
- Middle: Increasingly complex quests that build skills
- End: A final "boss battle" that requires everything they've learned

## Quest Design

### Main Quests (Required)
Map to your core curriculum:
- Clear objectives tied to standards
- Multiple steps with checkpoints
- Narrative wrapper that makes it feel meaningful

### Side Quests (Optional)
Enrichment and extension:
- Extra credit opportunities
- Cross-curricular connections
- Community service tie-ins
- Creative expression options

### Daily Challenges
Quick engagement boosters:
- "Mystery Question of the Day"
- "Speed Round" warm-up activities
- "Bonus XP" for going above and beyond

## Making It Sustainable

You don't need to reinvent every lesson:
- Add a quest title to existing assignments
- Include a brief narrative intro (30 seconds)
- Track progress on a visible quest map
- Celebrate completions dramatically`,
            practicalExample: {
              title: "Creating a Semester-Long Quest Narrative",
              scenario: "You teach 8th-grade science and want to gamify the entire year.",
              steps: [
                "Theme: 'Planetary Defense Academy' — Students are recruits learning to protect Earth",
                "Unit 1 (Cells/Biology): 'Mission: Understand Life' — Students study cells to fight a fictional bio-threat",
                "Unit 2 (Chemistry): 'Mission: Decode Matter' — Students learn chemistry to develop a protective formula",
                "Unit 3 (Physics): 'Mission: Master Energy' — Students learn energy concepts to build defense systems",
                "Unit 4 (Earth Science): 'Mission: Save the Planet' — Students apply all knowledge to solve environmental challenges",
                "Each unit has: 3 Main Quests (assignments), 2 Side Quests (optional), 1 Boss Battle (test), Daily Challenges",
                "Create a visual 'Mission Map' on the classroom wall showing progress through the story"
              ],
              tips: [
                "You don't need to write a novel—2-3 sentences of narrative per quest is enough",
                "Let students name their teams and create team identities",
                "The story should enhance learning, not distract from it",
                "Adjust the narrative based on what excites your students"
              ]
            },
            keyTakeaways: [
              "Narrative context increases retention by up to 65%",
              "Choose a theme that naturally fits your subject",
              "Quest design maps directly to your existing curriculum",
              "Keep it sustainable—narrative wrappers, not complete rewrites"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sel-leadership",
    title: "Social-Emotional Leadership (SEL)",
    description: "Master mental health first aid, neurodiversity strategies, and growth mindset cultivation for the digital age.",
    longDescription: "This critical module equips educators to be emotional leaders in their classrooms. Learn to identify burnout in students and yourself, implement strategies for neurodiverse learners (ADHD, Autism, diverse learning styles), and build resilience and growth mindsets in a high-pressure digital world. These skills are the foundation of zero dropout engagement.",
    category: "Wellbeing",
    duration: "4 weeks",
    students: 5102,
    rating: 4.9,
    aiPowered: false,
    instructor: "Dr. Amara Johnson",
    instructorBio: "Licensed school psychologist, author of 'The Emotionally Intelligent Classroom,' TEDx speaker on teacher wellbeing.",
    modules: [
      {
        id: "sel-m1",
        title: "Mental Health First Aid",
        description: "Identifying burnout in students and self",
        lessons: [
          {
            id: "sel-m1-l1",
            title: "Recognizing Student Distress Signals",
            duration: "10 min",
            description: "Learn to identify early warning signs of student mental health struggles.",
            content: `# Recognizing Student Distress Signals

## Why This Matters

1 in 5 students experiences a mental health challenge in any given year. Teachers are often the first adults to notice changes. Early identification can be life-changing.

## Behavioral Warning Signs

### Academic Changes
- Sudden grade drops
- Missed assignments (from a previously reliable student)
- Declining participation
- Inability to concentrate

### Social Changes
- Withdrawal from friends
- Increased irritability or aggression
- Avoiding group work
- Spending break time alone (new behavior)

### Physical Signs
- Changes in appearance or hygiene
- Fatigue or sleeping in class
- Frequent complaints of headaches/stomachaches
- Changes in eating habits

### Digital Warning Signs
- Dark or concerning social media posts
- Cyberbullying involvement
- Excessive screen time as escape
- Online persona dramatically different from in-person

## The NOTICE Framework

### N - Note the change
Document what you observe (behavior, not diagnosis)

### O - Open a conversation
"I've noticed you seem [specific observation]. I want to check in."

### T - Talk and listen
Let them share. Don't fix, just listen.

### I - Identify support
"Would it help if we talked to the counselor together?"

### C - Connect to resources
Provide information about school and community resources

### E - Evaluate and follow up
Check back in. Don't assume one conversation fixes things.`,
            practicalExample: {
              title: "Having a Check-In Conversation with a Struggling Student",
              scenario: "A normally engaged student has been withdrawn for 2 weeks. Grades are dropping.",
              steps: [
                "Find a private, non-threatening moment (not in front of peers). 'Hey, can you stay for 2 minutes after class?'",
                "Start with genuine care, not accusation: 'I've noticed you've seemed quieter lately, and I wanted to check in because I care about how you're doing.'",
                "Use open-ended questions: 'How are things going for you right now?' (not 'What's wrong?')",
                "LISTEN. Resist the urge to offer solutions immediately. Nod. 'That sounds really hard.'",
                "Ask permission to help: 'Would it be okay if I shared this with our school counselor? They're really good at helping with this kind of thing.'",
                "End with commitment: 'I'm glad you told me. I'm going to check in with you on Friday. You matter to me.'",
                "Document the conversation privately. Follow your school's reporting protocol if needed."
              ],
              tips: [
                "Never promise to keep a secret if there's a safety concern",
                "You don't need to be a therapist—just a caring, attentive adult",
                "Document observations factually (dates, behaviors, not interpretations)",
                "Know your school's crisis protocol before you need it"
              ]
            },
            keyTakeaways: [
              "Teachers are often the first to notice student mental health changes",
              "Look for CHANGES in behavior, not specific behaviors",
              "The NOTICE framework provides a clear conversation path",
              "You don't need to fix it—you need to see it and connect them to support"
            ]
          },
          {
            id: "sel-m1-l2",
            title: "Teacher Burnout: Prevention & Recovery",
            duration: "10 min",
            description: "Identify your own burnout signals and implement sustainable self-care.",
            content: `# Teacher Burnout: Prevention & Recovery

## The Burnout Epidemic

44% of teachers report feeling burned out. Teacher burnout doesn't just affect you—it directly impacts your students' learning, behavior, and emotional safety.

## The Three Dimensions of Burnout

### 1. Emotional Exhaustion
- Feeling drained before the day begins
- Dreading Monday on Sunday afternoon
- Unable to muster enthusiasm for activities you used to love

### 2. Depersonalization
- Becoming cynical about students or education
- Emotional detachment from your work
- "Going through the motions"

### 3. Reduced Personal Accomplishment
- Feeling like nothing you do matters
- Questioning whether you're making a difference
- Imposter syndrome intensifying

## The Burnout Assessment

Rate yourself 1-5 on each:
- I feel emotionally drained by my work
- I feel used up at the end of the workday
- I dread getting up in the morning to face another day
- Working with students all day is a real strain
- I feel I'm working too hard

Score 20-25: Severe burnout risk — seek support immediately
Score 15-19: Moderate burnout — implement changes now
Score 10-14: Mild burnout — preventive measures recommended
Score 5-9: Healthy — maintain current practices

## Prevention Strategies

### Boundaries
- No email after 7 PM
- One screen-free evening per week
- Say no to one extra commitment this month

### Recovery Rituals
- 5-minute mindfulness before first class
- Lunch break AWAY from your desk
- A physical transition between school and home (walk, gym, music in the car)

### Connection
- One meaningful conversation with a colleague per day
- Celebrate small wins with your team
- Ask for help when overwhelmed`,
            practicalExample: {
              title: "Creating Your Personal Anti-Burnout Plan",
              scenario: "You're feeling exhausted and want to create sustainable habits before burnout hits.",
              steps: [
                "Take the burnout assessment above honestly. Write your score and date it.",
                "Identify your #1 burnout trigger: Is it grading? Parent emails? Meetings? Behavior management?",
                "For your #1 trigger, set ONE boundary this week: 'I will not grade after 8 PM' or 'I will batch parent emails to 30 minutes on Tuesday/Thursday'",
                "Schedule 3 recovery rituals into your weekly calendar (treat them like meetings you can't cancel): Walk Monday/Wednesday, Read during lunch Tuesday, No-screen evening Friday",
                "Find one 'burnout buddy'—a colleague you trust. Agree to check in weekly: 'How are you REALLY doing?'",
                "Retake the burnout assessment in 4 weeks. Track your score over time.",
                "If your score stays high after implementing changes, consider talking to a counselor—it's not weakness, it's wisdom."
              ],
              tips: [
                "Self-care is not selfish—burned-out teachers can't serve students well",
                "Start with ONE change, not ten. Sustainable beats dramatic.",
                "Your boundaries teach students healthy behavior too",
                "If your school culture punishes boundaries, that's a systemic issue—not a personal failure"
              ]
            },
            keyTakeaways: [
              "Burnout affects 44% of teachers—you are not alone",
              "Emotional exhaustion, depersonalization, and reduced accomplishment are the three dimensions",
              "Prevention is easier than recovery—set boundaries early",
              "One small sustainable change beats dramatic unsustainable ones"
            ]
          }
        ]
      },
      {
        id: "sel-m2",
        title: "Neurodiversity in the Classroom",
        description: "Strategies for ADHD, Autism, and diverse learning styles",
        lessons: [
          {
            id: "sel-m2-l1",
            title: "Understanding Neurodiverse Learners",
            duration: "10 min",
            description: "Build a classroom that works for ADHD, autistic, and all types of learners.",
            content: `# Understanding Neurodiverse Learners

## What is Neurodiversity?

Neurodiversity means that brains work differently—and that's normal. It includes ADHD, autism, dyslexia, dyscalculia, and other neurological variations. These are not deficits—they are differences.

## ADHD in the Classroom

### What It Looks Like
- Difficulty sustaining attention (but can hyperfocus on interests)
- Impulsive responses
- Physical restlessness
- Trouble with organization and time management

### What Works
- Movement breaks every 15-20 minutes
- Visual timers for transitions
- Fidget tools (quietly)
- Chunked instructions (3 steps max at a time)
- Seating near the teacher, away from distractions
- Written AND verbal instructions

## Autism Spectrum in the Classroom

### What It Looks Like
- Difficulty with social cues and group work
- Strong preference for routine and predictability
- Intense focus on specific interests
- Sensory sensitivities (noise, light, texture)
- May struggle with open-ended assignments

### What Works
- Clear, predictable routines
- Visual schedules posted in the classroom
- Explicit social instruction for group work
- Offering quiet spaces or noise-canceling headphones
- Leveraging special interests when possible
- Concrete instructions with examples

## Universal Design for Learning (UDL)

Design for neurodiversity, and EVERYONE benefits:
- **Multiple means of representation**: Present info visually, auditorily, and kinesthetically
- **Multiple means of action/expression**: Let students show learning in different ways
- **Multiple means of engagement**: Offer choice in how and what students learn`,
            practicalExample: {
              title: "Redesigning a Lesson for Neurodiverse Learners",
              scenario: "You're teaching a 40-minute lesson on the solar system to a class that includes students with ADHD and autism.",
              steps: [
                "Post the lesson agenda on the board with times: 'Today: 1) Quick quiz (5 min) 2) Planet exploration (15 min) 3) Create your guide (15 min) 4) Share (5 min)'",
                "Start with a movement-based warm-up: students physically walk to labels on the wall (Mercury = closest, Neptune = farthest)",
                "Main content: Stations model (students rotate every 7 minutes between 3 stations—video, reading, hands-on model)",
                "For the creative portion, offer 3 options: Draw a poster, Write a travel brochure, Record a 1-min audio guide",
                "Provide fidget tools at every table. Allow standing desks or floor seating for those who need it.",
                "Use a visual timer projected on the screen so everyone knows how much time remains",
                "Closing: Structured share protocol (30 seconds each, using sentence starters)"
              ],
              tips: [
                "What works for neurodiverse learners works for ALL learners",
                "Routine and predictability reduce anxiety for everyone",
                "Choice doesn't mean chaos—give structured choices (this OR that, not 'whatever you want')",
                "Check in privately with neurodiverse students before demanding public participation"
              ]
            },
            keyTakeaways: [
              "Neurodiversity is normal—1 in 5 people are neurodiverse",
              "ADHD, autism, and dyslexia require different (not lesser) strategies",
              "Universal Design for Learning benefits ALL students",
              "Routine, choice, and sensory awareness are your best tools"
            ]
          }
        ]
      },
      {
        id: "sel-m3",
        title: "Cultivating Growth Mindsets",
        description: "Building resilience in a high-pressure digital age",
        lessons: [
          {
            id: "sel-m3-l1",
            title: "From Fixed to Growth: Rewiring Student Beliefs",
            duration: "10 min",
            description: "Transform how students think about intelligence, effort, and failure.",
            content: `# From Fixed to Growth: Rewiring Student Beliefs

## Fixed vs. Growth Mindset

### Fixed Mindset Beliefs
- "I'm just not a math person"
- "Smart people don't need to try hard"
- "If I fail, it means I'm not good enough"
- "Feedback is criticism"

### Growth Mindset Beliefs
- "I can improve at math with practice and support"
- "Effort and strategy lead to mastery"
- "Failure is data about what to try next"
- "Feedback is a gift that helps me grow"

## The Science Behind It

Research by Carol Dweck shows that students who believe intelligence is malleable:
- Try harder after failure
- Use more effective strategies
- Seek challenge instead of avoiding it
- Achieve more over time

## Practical Mindset Shifts in the Classroom

### Language Changes
- Instead of "You're so smart!" → "You worked really hard on that strategy!"
- Instead of "This is easy!" → "This will challenge you, and that's good!"
- Instead of "You got it wrong" → "You haven't gotten it YET. What can you try differently?"

### Grading for Growth
- Allow retakes and revisions (learning isn't one-shot)
- Grade improvement, not just achievement
- Use portfolios to show growth over time
- Replace "F" with "Not Yet"

### Celebrating Productive Struggle
- "Mistake of the Week": Share and learn from errors
- "Stuck and Unstuck" journals: What was hard? How did you push through?
- Growth Mindset Wall: Student quotes about overcoming challenges

## The Teacher's Own Mindset

You can't teach what you don't model:
- Share your own mistakes openly
- Talk about skills you're still learning
- Show vulnerability when trying new teaching methods
- Celebrate your own growth publicly`,
            practicalExample: {
              title: "Launching a Growth Mindset Culture in Your Classroom",
              scenario: "It's the beginning of the year and you want to establish a growth mindset culture.",
              steps: [
                "Week 1, Day 1: Show a short video about brain neuroplasticity (2 min). Discuss: 'Your brain literally grows new connections when you struggle and learn.'",
                "Week 1: Introduce 'The Power of Yet'—add the word 'yet' to every 'I can't' statement. Create a classroom poster.",
                "Week 2: Start 'Mistake Monday'—every Monday, share a mistake and what you learned. Teacher goes first!",
                "Week 3: Implement revision opportunities for all major assignments. Message: 'First attempts are drafts, not finals.'",
                "Week 4: Create a Growth Mindset Journal—5 min weekly reflection: 'What was hard this week? What did I learn from the struggle?'",
                "Ongoing: Change your praise language. Track yourself for one week—how often do you praise effort vs. intelligence?",
                "End of quarter: Students write letters to their beginning-of-year selves about what they've learned about learning."
              ],
              tips: [
                "Growth mindset isn't about blind positivity—it's about valuing the PROCESS of learning",
                "Don't praise effort that isn't productive—help students find BETTER strategies",
                "Parents need the message too—send home a 'Growth Mindset at Home' guide",
                "Be patient—mindset shifts take time, especially for students with years of fixed mindset messaging"
              ]
            },
            keyTakeaways: [
              "Growth mindset is teachable and transformative",
              "Language changes are the simplest, most powerful tool",
              "Allowing revision normalizes the learning process",
              "Teachers must model growth mindset, not just teach it"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "digital-literacy-data",
    title: "Digital Literacy & Data",
    description: "Master data-driven instruction using analytics, and teach cyber-safety and digital citizenship to protect students.",
    longDescription: "In a world driven by data, educators must understand how to use platform analytics to personalize student learning paths and protect student privacy. This module covers data-driven instruction techniques and comprehensive digital citizenship education to prepare students for responsible digital lives.",
    category: "Digital Teaching",
    duration: "3 weeks",
    students: 2987,
    rating: 4.7,
    aiPowered: true,
    instructor: "Dr. Kevin O'Brien",
    instructorBio: "Former Chief Data Officer for a school district, cybersecurity educator, and author of 'Data-Literate Schools.'",
    modules: [
      {
        id: "dld-m1",
        title: "Data-Driven Instruction",
        description: "Using platform analytics to personalize student paths",
        lessons: [
          {
            id: "dld-m1-l1",
            title: "Reading Your Data Dashboard",
            duration: "10 min",
            description: "Turn raw student data into actionable teaching decisions.",
            content: `# Reading Your Data Dashboard

## Data is Your Teaching Superpower

Every digital tool your students use generates data. The question isn't whether you have data—it's whether you're using it effectively.

## Types of Student Data

### Engagement Data
- Time on task
- Login frequency
- Resource access patterns
- Video completion rates

### Performance Data
- Quiz/test scores
- Assignment completion rates
- Error patterns
- Growth trajectories

### Behavioral Data
- Participation frequency
- Collaboration patterns
- Help-seeking behavior
- Self-regulation indicators

## The Data-to-Action Cycle

### 1. Collect
Choose 2-3 key metrics per week (not everything!)

### 2. Analyze
Look for patterns, not individual data points:
- Are most students struggling with the same concept?
- Is one group progressing faster than others?
- Are engagement levels dropping at a specific point?

### 3. Act
Turn insights into instructional decisions:
- Low quiz scores on Topic 3 → Reteach with different approach
- 60% didn't watch the video past minute 4 → Video too long, split into two
- Group A is ahead → Provide enrichment activities

### 4. Reflect
Did your changes work? Check the data again.

## Common Data Pitfalls

- **Analysis paralysis**: Too much data, no action
- **Confirmation bias**: Only seeing data that confirms your beliefs
- **Ignoring context**: Data without understanding student circumstances
- **Surveillance feeling**: Students feeling watched, not supported`,
            practicalExample: {
              title: "Running a Weekly Data Review Routine",
              scenario: "You have access to your LMS dashboard data for 90 students across 3 classes.",
              steps: [
                "Every Friday (15 min): Pull up your LMS analytics dashboard",
                "Check 3 key metrics: 1) Assignment completion rate, 2) Average quiz score, 3) Student engagement (logins/time on platform)",
                "Identify 'Red Flag' students: Who hasn't submitted work this week? Who scored below 60%? Who hasn't logged in?",
                "Identify 'Green Light' students: Who improved? Who exceeded expectations? Who demonstrated growth?",
                "Create 3 action items for next week: 1 reteach topic, 1 student check-in, 1 enrichment opportunity",
                "Send a quick parent update for any Red Flag students (use your communication templates!)",
                "Track these metrics over time in a simple spreadsheet to see trends across weeks"
              ],
              tips: [
                "Set a timer—15 minutes is enough for a weekly review",
                "Focus on trends, not single data points",
                "Share positive data with students: 'As a class, you improved 12% on this topic!'",
                "Never use data to shame students publicly"
              ]
            },
            keyTakeaways: [
              "Data should drive decisions, not drown you",
              "Focus on 2-3 key metrics per week",
              "The data-to-action cycle keeps teaching responsive",
              "Always pair data with context and human judgment"
            ]
          },
          {
            id: "dld-m1-l2",
            title: "Personalizing Learning Paths with Data",
            duration: "8 min",
            description: "Use student performance data to create individualized learning experiences.",
            content: `# Personalizing Learning Paths with Data

## Why Personalization Matters

One-size-fits-all instruction leaves struggling students behind and advanced students bored. Data enables you to meet every student where they are.

## Creating Data-Informed Learning Paths

### Flexible Grouping
Use data to create fluid groups:
- **Skill-based groups**: Students at similar mastery levels (change weekly!)
- **Interest groups**: Students choose topics within the same standard
- **Mixed groups**: Strategic pairing of stronger and developing students

### Adaptive Pacing
Not every student needs the same timeline:
- Must-do activities (core content)
- Should-do activities (reinforcement)
- Could-do activities (extension)
- Students self-pace through with check-in milestones

### Choice Boards
Data tells you what students need; choice lets them decide HOW:
- 9 activities aligned to the same standard
- Students choose 3 that match their learning style
- Activities range from basic recall to creative synthesis

## Simple Personalization Strategies

### The 3-2-1 Approach
Based on pre-assessment data:
- 3 activities for students who need foundation building
- 2 activities for on-level students
- 1 challenge activity for advanced students
- All assess the same standard

### Learning Playlists
Student self-directed learning menus:
- "Watch this video, then complete this practice"
- "Read this article, then respond to these questions"
- "Try this interactive simulation, then journal your findings"
- Students check off completed items and reflect`,
            practicalExample: {
              title: "Creating Personalized Learning Paths for a Math Unit",
              scenario: "You're teaching fractions and your pre-test data shows 3 distinct groups.",
              steps: [
                "Give a 10-question pre-test on fractions. Sort results into: Below Level (0-4), On Level (5-7), Above Level (8-10)",
                "Below Level path: Concrete manipulatives → Visual models → Practice problems with scaffolding → Re-assessment",
                "On Level path: Brief review → Word problems → Real-world application → Peer teaching opportunity",
                "Above Level path: Brief diagnostic → Complex multi-step problems → Create tutorial video for peers → Extension to decimals",
                "All paths lead to the SAME end-of-unit assessment (this proves the differentiation worked)",
                "Build this as a 'Learning Playlist' in your LMS: students check off completed items at their own pace",
                "Weekly check-in: Review progress data and move students between groups if needed (groups are FLUID, not fixed)"
              ],
              tips: [
                "Never label groups by ability to students ('low group' destroys motivation)",
                "Use color names, table numbers, or creative names instead",
                "Groups should change frequently—nobody is 'stuck' in a group",
                "Celebrate when students are ready to move to the next level"
              ]
            },
            keyTakeaways: [
              "Personalization isn't optional—it's how we reach every student",
              "Data-informed groups should be flexible, not permanent",
              "Choice within structure keeps students engaged and autonomous",
              "All paths should lead to the same learning goals"
            ]
          }
        ]
      },
      {
        id: "dld-m2",
        title: "Cyber-Safety & Digital Citizenship",
        description: "Protecting student privacy and digital footprints",
        lessons: [
          {
            id: "dld-m2-l1",
            title: "Teaching Digital Citizenship",
            duration: "10 min",
            description: "Equip students with the skills to navigate the digital world safely and responsibly.",
            content: `# Teaching Digital Citizenship

## The 5 Pillars of Digital Citizenship

### 1. Digital Footprint
Everything online is permanent:
- What you post, comment, like, and share builds your digital identity
- Future employers, colleges, and relationships may see it
- Even "deleted" content may persist in screenshots and caches

### 2. Online Safety
Protecting yourself in digital spaces:
- Strong, unique passwords for every account
- Two-factor authentication everywhere
- Recognizing phishing and social engineering
- Privacy settings on all social media

### 3. Cyberbullying Awareness
Understanding and preventing digital harm:
- What counts as cyberbullying (it's not just mean messages)
- Bystander vs. upstander behavior online
- How to report and seek help
- The real psychological impact of online harassment

### 4. Information Literacy
Evaluating what's real and what's not:
- Identifying misinformation and deepfakes
- Lateral reading (checking sources, not just the source)
- Understanding algorithmic bias
- The SIFT method: Stop, Investigate, Find better coverage, Trace claims

### 5. Digital Balance
Healthy relationships with technology:
- Screen time awareness
- Digital vs. in-person relationships
- Sleep and technology
- The attention economy and how apps are designed to be addictive

## Teaching Approach

Don't lecture about digital citizenship—let students discover and discuss:
- Case studies of real situations
- Role-playing scenarios
- Student-led investigations
- Creating digital citizenship content for younger students`,
            practicalExample: {
              title: "Running a Digital Citizenship Week",
              scenario: "Your school has designated a week for digital citizenship education.",
              steps: [
                "Monday (Digital Footprint): Students Google themselves and discuss what they find. Create a 'Digital Footprint Audit' checklist.",
                "Tuesday (Online Safety): Password strength contest—who can create the strongest password? Demonstrate a (safe) phishing example.",
                "Wednesday (Cyberbullying): Read anonymous real scenarios and discuss as a class. Students create an 'Upstander Pledge' poster.",
                "Thursday (Information Literacy): Give students 5 news articles—3 real, 2 fake. Can they identify which is which? Teach the SIFT method.",
                "Friday (Digital Balance): Students track their screen time for the day. Create a 'Digital Wellness Plan' for themselves.",
                "Culminating project: Each student creates a 1-minute PSA video on one pillar to share with younger students"
              ],
              tips: [
                "Use real, age-appropriate examples—hypothetical scenarios don't resonate as well",
                "Invite a school resource officer or IT professional to discuss cyber-safety",
                "Create a classroom 'Digital Citizenship Contract' that students sign",
                "Integrate digital citizenship throughout the year, not just one week"
              ]
            },
            keyTakeaways: [
              "Digital citizenship is as important as any academic subject",
              "Students need practice, not just lectures",
              "The SIFT method gives students a practical framework for evaluating information",
              "Digital balance should be modeled by teachers too"
            ]
          },
          {
            id: "dld-m2-l2",
            title: "Student Data Privacy & Protection",
            duration: "8 min",
            description: "Understand your legal obligations and best practices for protecting student data.",
            content: `# Student Data Privacy & Protection

## Your Legal Obligations

### FERPA (Family Educational Rights and Privacy Act)
- Student education records are confidential
- Parents have the right to access their child's records
- Schools need consent before sharing student information
- Applies to any educational institution receiving federal funds

### COPPA (Children's Online Privacy Protection Act)
- Applies to students under 13
- Websites/apps must get parental consent to collect data
- Teachers need to verify tools are COPPA-compliant before using them

### State Laws
Many states have additional student privacy laws. Know your state's requirements.

## Practical Data Protection

### Before Using a New Digital Tool
Ask these questions:
1. What student data does this tool collect?
2. Where is the data stored? (US servers vs. international)
3. Does the tool sell or share student data?
4. Is there a data deletion policy?
5. Is the tool on my district's approved list?

### Daily Practices
- Never share student grades publicly
- Don't use student photos without permission
- Avoid using personal email for student communication
- Lock your computer when you leave the room
- Use school-approved tools for storing student information

### Red Flags to Watch For
- "Free" tools that make money by selling data
- Tools that require unnecessary personal information
- No clear privacy policy on the website
- Tools not on your district's approved list

## Teaching Students About Their Own Privacy

Students should understand:
- What data they're sharing when they use apps
- How to read (basic) privacy policies
- Their rights to their own data
- How to limit data collection`,
            practicalExample: {
              title: "Conducting a Privacy Audit of Your Classroom Tools",
              scenario: "You want to make sure all the digital tools you use are safe for students.",
              steps: [
                "List every digital tool you use with students (LMS, quiz tools, video platforms, communication tools, etc.)",
                "For each tool, check: 1) Is it on the district-approved list? 2) Does it have a clear privacy policy? 3) Is it COPPA-compliant (if students under 13)?",
                "For non-approved tools: Submit for approval or find an approved alternative",
                "Review your photo/video consent forms—do you have permission for every student?",
                "Check: Are any student names or grades visible in shared documents, screen shares, or photos?",
                "Create a 'Privacy Checklist' for yourself to review before adopting any new tool",
                "Share your findings with your team—they may be using the same risky tools"
              ],
              tips: [
                "When in doubt, ask your IT department before using a new tool",
                "Free tools often have hidden data costs—read the fine print",
                "Update consent forms annually—circumstances change",
                "Document everything: what tools you use, what data they collect, what permissions you have"
              ]
            },
            keyTakeaways: [
              "Student data privacy is a legal obligation, not optional",
              "Audit your tools regularly for privacy compliance",
              "Teach students to be aware of their own data",
              "When in doubt, ask before sharing student information"
            ]
          }
        ]
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getLessonById = (courseId: string, lessonId: string): { lesson: Lesson; module: Module } | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    for (const lesson of module.lessons) {
      if (lesson.id === lessonId) {
        return { lesson, module };
      }
    }
  }
  return undefined;
};
