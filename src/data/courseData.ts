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
    id: "digital-pedagogy",
    title: "Digital Pedagogy Fundamentals",
    description: "Master the art of teaching in the digital age with AI-assisted lesson planning and virtual classroom management.",
    longDescription: "This comprehensive course equips educators with essential digital teaching skills. Learn to leverage technology effectively, create engaging online content, and manage virtual classrooms with confidence. You'll gain practical strategies that you can implement immediately in your teaching practice.",
    category: "Digital Teaching",
    duration: "8 weeks",
    students: 2453,
    rating: 4.9,
    aiPowered: true,
    instructor: "Dr. Maria Chen",
    instructorBio: "EdTech specialist with 15 years of experience in digital education transformation.",
    modules: [
      {
        id: "dp-m1",
        title: "Foundations of Digital Teaching",
        description: "Build a strong foundation in digital pedagogy principles",
        lessons: [
          {
            id: "dp-m1-l1",
            title: "Understanding Digital Natives",
            duration: "45 min",
            description: "Learn how today's students learn differently and adapt your teaching accordingly.",
            content: `# Understanding Digital Natives

## Introduction
Today's students have grown up immersed in technology. They process information differently, prefer visual learning, and expect instant access to knowledge. As educators, understanding these characteristics is crucial for effective teaching.

## Key Characteristics of Digital Natives

### 1. Multitasking Orientation
Digital natives are comfortable switching between tasks and processing multiple streams of information simultaneously. However, research shows this can impact deep learning.

### 2. Visual-Spatial Skills
They excel at interpreting visual information—graphics, videos, and interactive content resonate more than text-heavy materials.

### 3. Instant Gratification
Growing up with search engines and instant answers, they expect immediate feedback and results.

### 4. Collaborative by Nature
Social media has made them natural collaborators who enjoy peer-to-peer learning.

## Implications for Teaching

To effectively reach digital natives:
- **Chunk content** into smaller, digestible segments
- **Use multimedia** to reinforce concepts
- **Provide immediate feedback** through quizzes and interactive elements
- **Incorporate collaboration** through group projects and discussions
- **Allow choice** in how students demonstrate learning`,
            practicalExample: {
              title: "Redesigning a Traditional Lesson for Digital Natives",
              scenario: "You're teaching a 45-minute lesson on the water cycle to 5th graders.",
              steps: [
                "Break the lesson into 3 segments of 12-15 minutes each",
                "Start with a 2-minute animated video showing the water cycle in action",
                "Use an interactive digital diagram where students can click on each stage",
                "Create a 5-minute collaborative activity using a shared digital whiteboard",
                "End with a quick 5-question quiz using Kahoot or similar tool for instant feedback",
                "Assign a creative project: students can make a video, infographic, or podcast"
              ],
              tips: [
                "Keep lecture segments under 10 minutes",
                "Alternate between passive and active learning every 10-15 minutes",
                "Use visuals in every lesson segment",
                "Build in movement or interaction breaks"
              ]
            },
            keyTakeaways: [
              "Digital natives learn differently—adapt your methods",
              "Visual and interactive content increases engagement",
              "Provide immediate feedback whenever possible",
              "Embrace collaboration as a learning tool"
            ]
          },
          {
            id: "dp-m1-l2",
            title: "Setting Up Your Digital Classroom",
            duration: "60 min",
            description: "Create an effective virtual learning environment with essential tools and organization.",
            content: `# Setting Up Your Digital Classroom

## Creating Your Digital Hub

A well-organized digital classroom reduces confusion and increases student engagement. Think of your Learning Management System (LMS) as your classroom's digital home base.

## Essential Components

### 1. Clear Navigation Structure
- Consistent weekly modules
- Logical content organization
- Easy-to-find resources

### 2. Communication Channels
- Announcements for updates
- Discussion boards for questions
- Direct messaging for private concerns

### 3. Resource Library
- Organized by topic or unit
- Includes supplementary materials
- Links to external resources

### 4. Assignment Hub
- Clear due dates
- Submission guidelines
- Rubrics attached to each assignment

## Best Practices for Organization

1. **Use consistent naming conventions**: "Week 1 - Topic - Activity Type"
2. **Create a welcome module** with orientation materials
3. **Include a FAQ section** for common questions
4. **Set up a "Start Here" page** for new students`,
            practicalExample: {
              title: "Setting Up a Google Classroom for Your Subject",
              scenario: "You're creating a new digital classroom for your 7th-grade Science class.",
              steps: [
                "Create your Google Classroom with a clear, descriptive name: 'Grade 7 Science - Mrs. Johnson'",
                "Set up 4 topic categories: 'Weekly Lessons', 'Assignments', 'Resources', 'Extra Help'",
                "Create a 'Start Here' post with: class expectations, how to submit work, and where to ask questions",
                "Upload a welcome video introducing yourself and the course",
                "Create your first week's module with: learning objectives, materials, and assignments",
                "Set up a recurring 'Weekly Announcements' post for every Monday"
              ],
              tips: [
                "Use the same structure every week so students know what to expect",
                "Pin important posts to the top of the stream",
                "Enable email notifications for announcements",
                "Create templates for recurring assignment types"
              ]
            },
            keyTakeaways: [
              "Organization is crucial in digital learning",
              "Consistent structure reduces student confusion",
              "Communication channels must be clear and accessible",
              "Create orientation materials for new students"
            ]
          },
          {
            id: "dp-m1-l3",
            title: "Digital Communication Essentials",
            duration: "50 min",
            description: "Master effective online communication with students and parents.",
            content: `# Digital Communication Essentials

## The Art of Online Communication

In digital education, communication is everything. Without the ability to read body language or gauge understanding in person, we must be more intentional about how we communicate.

## Types of Digital Communication

### Synchronous (Real-time)
- Video conferencing
- Live chat
- Phone calls

### Asynchronous (Time-delayed)
- Email
- Discussion boards
- Recorded videos
- Comments on assignments

## Best Practices

### For Written Communication
1. **Be clear and concise**—students skim
2. **Use formatting** (headers, bullets, bold) to highlight key points
3. **Include visuals** when explaining complex concepts
4. **Set response time expectations** and stick to them

### For Video Communication
1. **Look at the camera**, not the screen
2. **Keep videos short** (under 10 minutes)
3. **Use screen sharing** to demonstrate processes
4. **Enable captions** for accessibility

### For Feedback
1. **Be specific** about what needs improvement
2. **Start with positives** (growth mindset)
3. **Offer actionable next steps**
4. **Use audio/video feedback** for personal touch`,
            practicalExample: {
              title: "Creating Effective Feedback on Student Work",
              scenario: "A student submitted an essay that needs significant improvement.",
              steps: [
                "Open the document and identify 2-3 main areas for improvement",
                "Record a 3-minute video walking through the essay, pointing out specific examples",
                "Start with something positive: 'I can see you put effort into your introduction...'",
                "Use screen share to highlight specific passages while explaining",
                "End with 2-3 concrete action items: 'Focus on these three things in your revision...'",
                "Include a written summary of key points below the video link"
              ],
              tips: [
                "Video feedback feels more personal and is often better received",
                "Keep feedback focused—don't try to fix everything at once",
                "Always include actionable next steps",
                "Follow up to check if feedback was understood"
              ]
            },
            keyTakeaways: [
              "Digital communication requires extra intentionality",
              "Mix synchronous and asynchronous methods",
              "Video feedback adds a personal touch",
              "Always be clear, specific, and actionable"
            ]
          }
        ]
      },
      {
        id: "dp-m2",
        title: "Creating Engaging Digital Content",
        description: "Learn to create compelling multimedia content for your courses",
        lessons: [
          {
            id: "dp-m2-l1",
            title: "Designing Visual Learning Materials",
            duration: "55 min",
            description: "Create effective presentations, infographics, and visual aids.",
            content: `# Designing Visual Learning Materials

## Why Visuals Matter

Research shows that people remember:
- 10% of what they hear
- 20% of what they read
- 80% of what they see and do

Visual materials aren't just nice to have—they're essential for learning.

## Principles of Visual Design

### 1. Simplicity
Less is more. Every element should serve a purpose.

### 2. Contrast
Use color and size differences to highlight important information.

### 3. Alignment
Organize elements in a logical, clean layout.

### 4. Repetition
Use consistent styles, colors, and fonts throughout.

## Types of Visual Materials

### Presentations
- Maximum 6 words per bullet
- One concept per slide
- High-quality, relevant images

### Infographics
- Great for processes and comparisons
- Use icons and illustrations
- Limit text to essential information

### Diagrams
- Show relationships between concepts
- Use arrows and connectors
- Label clearly`,
            practicalExample: {
              title: "Creating a Visual Lesson on Photosynthesis",
              scenario: "You need to explain photosynthesis to 6th graders.",
              steps: [
                "Open Canva (free) and search for 'educational infographic' templates",
                "Create a flowchart showing: Sunlight + Water + CO2 → Glucose + Oxygen",
                "Use green colors for plants, yellow for sunlight, blue for water",
                "Add simple icons: sun, water droplet, leaf, arrows",
                "Include a 'Real World Connection' box: 'This is why we need trees!'",
                "Create an interactive version using Genially where students can click each element"
              ],
              tips: [
                "Use free tools like Canva, Piktochart, or Google Drawings",
                "Maintain a consistent color scheme",
                "Test visuals with a few students before using widely",
                "Save templates to reuse for similar content"
              ]
            },
            keyTakeaways: [
              "Visual materials dramatically improve retention",
              "Follow basic design principles for clarity",
              "Use free tools to create professional visuals",
              "Keep visuals simple and focused"
            ]
          },
          {
            id: "dp-m2-l2",
            title: "Recording Effective Educational Videos",
            duration: "60 min",
            description: "Learn to create engaging instructional videos students will actually watch.",
            content: `# Recording Effective Educational Videos

## The Power of Video

Video combines visual and auditory learning, making it one of the most effective educational tools. But there's a big difference between a video students skip and one they watch completely.

## Planning Your Video

### Before Recording
1. **Define the learning objective**—what will students be able to do after watching?
2. **Script or outline** your content
3. **Gather visuals** you'll need
4. **Test your technology**

### Video Length Guidelines
- Micro-lectures: 3-5 minutes (highest completion rates)
- Concept explanations: 5-10 minutes
- Demonstrations: 10-15 minutes
- Never exceed 20 minutes without breaks

## Recording Tips

### Technical Setup
- Good lighting (face a window or use a ring light)
- Clear audio (use an external microphone if possible)
- Stable camera (use a tripod or stable surface)
- Clean background

### Presentation Style
- Speak conversationally, not lecture-style
- Vary your tone and pace
- Look at the camera (connection with students)
- Use gestures naturally`,
            practicalExample: {
              title: "Creating a 5-Minute Math Concept Video",
              scenario: "You're explaining how to solve two-step equations.",
              steps: [
                "Write a simple script: Hook (30 sec), Explanation (2 min), Example (2 min), Summary (30 sec)",
                "Set up Loom or Screencastify (free screen recording)",
                "Prepare a digital whiteboard or slides with the problem already written",
                "Record your screen while writing out each step and explaining your thinking",
                "Edit out long pauses and mistakes (use built-in trimming tools)",
                "Add captions using YouTube's auto-caption feature (then correct errors)",
                "Upload to your LMS with a title that starts with the topic: 'Two-Step Equations: Basic Method'"
              ],
              tips: [
                "Practice once before recording",
                "If you make a mistake, pause, then restart that section",
                "Speak slower than feels natural—it sounds better on playback",
                "Add a 'Try This!' problem at the end for students to pause and practice"
              ]
            },
            keyTakeaways: [
              "Shorter videos have higher completion rates",
              "Plan before recording to save editing time",
              "Good audio is more important than perfect video",
              "Include interactive elements to keep students engaged"
            ]
          }
        ]
      },
      {
        id: "dp-m3",
        title: "Virtual Classroom Management",
        description: "Master the art of managing an online learning environment",
        lessons: [
          {
            id: "dp-m3-l1",
            title: "Engagement Strategies for Online Learning",
            duration: "50 min",
            description: "Keep students actively engaged in virtual sessions.",
            content: `# Engagement Strategies for Online Learning

## The Challenge of Virtual Engagement

In a physical classroom, you can see when students are confused or distracted. Online, engagement requires deliberate, proactive strategies.

## The 10-2-2 Rule

Every 10 minutes of instruction, include:
- 2 minutes of processing time
- 2 minutes of engagement activity

## Engagement Techniques

### Quick Polls
Ask a question, have students respond instantly
- "On a scale of 1-5, how confident are you about this concept?"
- "Which example makes more sense, A or B?"

### Chat Waterfall
Everyone types their answer but waits to hit enter
- Count down: 3, 2, 1... everyone sends at once
- Creates excitement and full participation

### Breakout Rooms
Small group discussions or activities
- Give clear instructions BEFORE sending to rooms
- Assign roles: timekeeper, note-taker, presenter
- Keep brief: 5-10 minutes

### Collaborative Documents
Everyone contributes to a shared space
- Google Docs, Jamboard, Padlet
- Assign sections or colors to individuals`,
            practicalExample: {
              title: "Running an Engaging 45-Minute Virtual Class",
              scenario: "You're teaching a synchronous online lesson on World War II causes.",
              steps: [
                "0-3 min: Opening hook—show a dramatic image, ask 'What do you think led to this?'",
                "3-5 min: Chat Waterfall—'What's one thing you already know about WWI?'",
                "5-15 min: Direct instruction with visuals (keep talking under 10 min)",
                "15-17 min: Quick poll—'Which cause do you think was most significant?'",
                "17-27 min: Breakout rooms—groups analyze one primary source document each",
                "27-35 min: Groups share back (1 min each)",
                "35-40 min: Collaborative Jamboard—everyone adds one connection they made",
                "40-45 min: Exit ticket—'One thing I learned, one question I still have'"
              ],
              tips: [
                "Always have a backup plan if technology fails",
                "Cold-call students by name to maintain attention",
                "Use the chat for quieter students who won't speak up",
                "Record sessions for students who miss class"
              ]
            },
            keyTakeaways: [
              "Break instruction into 10-minute chunks",
              "Use multiple engagement techniques per session",
              "Breakout rooms need clear structure",
              "Build in processing time for deeper learning"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "innovative-assessment",
    title: "Innovative Assessment Strategies",
    description: "Design effective assessments that measure 21st-century skills with AI-powered analytics and feedback systems.",
    longDescription: "Move beyond traditional testing to create assessments that truly measure student learning and growth. This course covers formative assessment, authentic assessment design, rubric creation, and using data to improve instruction.",
    category: "Assessment",
    duration: "6 weeks",
    students: 1876,
    rating: 4.8,
    aiPowered: true,
    instructor: "Dr. James Parker",
    instructorBio: "Assessment specialist and former standardized test developer turned education reformer.",
    modules: [
      {
        id: "ia-m1",
        title: "Rethinking Assessment",
        description: "Challenge traditional assessment approaches and embrace new methods",
        lessons: [
          {
            id: "ia-m1-l1",
            title: "Beyond the Test: What Assessment Can Be",
            duration: "45 min",
            description: "Explore the full spectrum of assessment possibilities.",
            content: `# Beyond the Test: What Assessment Can Be

## The Problem with Traditional Testing

Traditional tests often measure:
- Memorization rather than understanding
- Performance on a single day
- Ability to take tests, not real-world skills

## A New Vision for Assessment

Assessment should:
- **Inform instruction** (not just grade students)
- **Show growth** over time
- **Measure real skills** students will use
- **Motivate learning** rather than create anxiety

## Types of Assessment

### Formative Assessment
Ongoing assessment during learning
- Exit tickets, quick checks, observations
- Used to adjust instruction immediately

### Summative Assessment
Assessment of learning at the end
- Tests, projects, performances
- Used to evaluate and grade

### Authentic Assessment
Real-world application of knowledge
- Projects, portfolios, presentations
- Shows what students can DO with knowledge

## The Assessment Cycle

1. Set clear learning goals
2. Collect evidence of learning
3. Interpret the evidence
4. Take action based on findings
5. Repeat`,
            practicalExample: {
              title: "Replacing a Unit Test with Authentic Assessment",
              scenario: "Instead of a test on the American Revolution, create an authentic assessment.",
              steps: [
                "Identify core skills: analyzing sources, making arguments, understanding cause/effect",
                "Design the task: 'You are a journalist in 1776. Write a newspaper article explaining why the colonies should/shouldn't declare independence.'",
                "Create a rubric covering: historical accuracy, use of evidence, argument quality, writing",
                "Build in checkpoints: source analysis due day 3, outline due day 5, draft due day 7",
                "Allow student choice: they can write pro- or anti-independence",
                "Include peer review: students give feedback on drafts before final submission",
                "Add reflection: 'What was the hardest part? What would you do differently?'"
              ],
              tips: [
                "Authentic assessments take longer but measure more",
                "Build in scaffolding for struggling students",
                "Use the same rubric for self-assessment before submission",
                "Save exemplars to show future classes"
              ]
            },
            keyTakeaways: [
              "Assessment should drive learning, not just measure it",
              "Authentic assessments show real-world application",
              "Mix formative and summative approaches",
              "Every assessment should inform your teaching"
            ]
          },
          {
            id: "ia-m1-l2",
            title: "Formative Assessment Techniques",
            duration: "55 min",
            description: "Master quick, effective ways to check understanding during instruction.",
            content: `# Formative Assessment Techniques

## What is Formative Assessment?

Formative assessment is assessment FOR learning, not OF learning. It happens during instruction and helps both teacher and students understand where learning is and where it needs to go.

## High-Impact Formative Techniques

### Exit Tickets
End-of-class quick checks
- "Write one thing you learned and one question you have"
- "Rate your understanding 1-5 and explain"
- "Summarize today's lesson in one sentence"

### Think-Pair-Share
Structured discussion protocol
1. Students think individually
2. Share with a partner
3. Share with the class

### Whiteboard Responses
Every student responds visibly
- Digital: Poll Everywhere, Mentimeter
- Physical: Mini whiteboards, hand signals

### Traffic Light
Student self-assessment
- Green: I understand completely
- Yellow: I'm a bit confused
- Red: I need help

### One-Minute Paper
Quick written response
- "What was the most important concept today?"
- "What is still confusing?"`,
            practicalExample: {
              title: "Implementing Daily Formative Assessment",
              scenario: "You want to check understanding every day in your 50-minute class.",
              steps: [
                "Minutes 1-3: Opening Check—Quick poll: 'How confident are you about yesterday's concept?' (1-5 scale)",
                "Minutes 15-17: Mid-lesson Check—Think-Pair-Share on a key question",
                "Minutes 30-32: Understanding Check—'Thumbs up/sideways/down' on the new concept",
                "Minutes 45-48: Exit Ticket—Digital form with 2 questions",
                "After class: Review exit tickets and group students by understanding level",
                "Next day: Start with targeted review based on exit ticket data"
              ],
              tips: [
                "Make formative assessment routine so students expect it",
                "Respond to data immediately—if 70% are confused, reteach",
                "Use no-stakes grading so students are honest",
                "Track patterns over time to identify struggling students early"
              ]
            },
            keyTakeaways: [
              "Formative assessment should happen daily",
              "Use data to adjust instruction immediately",
              "Students should see formative assessment as helpful, not stressful",
              "Mix techniques to keep assessment engaging"
            ]
          },
          {
            id: "ia-m1-l3",
            title: "Creating Effective Rubrics",
            duration: "60 min",
            description: "Build clear, useful rubrics that improve student work.",
            content: `# Creating Effective Rubrics

## Why Rubrics Matter

Good rubrics:
- Clarify expectations before students begin
- Guide student work throughout the process
- Make grading consistent and fair
- Provide meaningful feedback

## Types of Rubrics

### Holistic Rubrics
One overall score based on general criteria
- Faster to use
- Less specific feedback
- Good for quick assessments

### Analytic Rubrics
Separate scores for each criterion
- More detailed feedback
- Takes longer to grade
- Better for complex assignments

## Rubric Components

### Criteria
What you're assessing (argument, evidence, organization)

### Levels
Performance descriptions (exceeds, meets, approaching, beginning)

### Descriptors
Specific descriptions of what each level looks like

## Common Rubric Mistakes

- Too vague ("good," "excellent," "needs work")
- Too many criteria (focus on 3-5 key areas)
- No student involvement in creation
- Only used for grading, not instruction`,
            practicalExample: {
              title: "Creating a Rubric with Students",
              scenario: "Your class is about to write persuasive essays. Create the rubric together.",
              steps: [
                "Show 3 sample essays of varying quality (anonymous or from previous years)",
                "Ask: 'What makes the good one good? What's missing from the weak one?'",
                "List student observations on the board—group into categories",
                "Identify 4 key criteria from the list: Thesis, Evidence, Counterargument, Conclusion",
                "For each criterion, ask: 'What does excellent look like? What does developing look like?'",
                "Create the rubric together on a shared document",
                "Have students use the rubric to score one of the sample essays as practice"
              ],
              tips: [
                "When students help create rubrics, they internalize expectations",
                "Use student-friendly language, not teacher jargon",
                "Keep rubrics to one page—too long and students won't read them",
                "Include the rubric in the assignment instructions"
              ]
            },
            keyTakeaways: [
              "Rubrics should be created before the assignment, not after",
              "Student involvement increases rubric effectiveness",
              "Be specific in descriptors—avoid vague language",
              "Use rubrics for feedback, not just grading"
            ]
          }
        ]
      },
      {
        id: "ia-m2",
        title: "Data-Driven Instruction",
        description: "Use assessment data to improve teaching and learning",
        lessons: [
          {
            id: "ia-m2-l1",
            title: "Analyzing Assessment Data",
            duration: "50 min",
            description: "Turn numbers into actionable insights for your classroom.",
            content: `# Analyzing Assessment Data

## From Numbers to Insights

Assessment data is only valuable if it leads to action. The goal isn't to collect data—it's to improve learning.

## Types of Data Analysis

### Item Analysis
Looking at individual questions
- Which questions did most students miss?
- What does that tell you about understanding?

### Student Grouping
Identifying patterns across students
- Who is struggling? Who needs challenge?
- What do struggling students have in common?

### Trend Analysis
Looking at patterns over time
- Is the class improving?
- Are interventions working?

## Key Questions to Ask

1. What percentage of students mastered each objective?
2. Which objectives need reteaching?
3. Which students need additional support?
4. Which students need enrichment?
5. Did my instruction work?

## Common Data Mistakes

- Drowning in data without focus
- Only looking at averages (hides struggling students)
- Not acting on what data shows
- Waiting too long to analyze`,
            practicalExample: {
              title: "Running a Post-Assessment Data Meeting with Yourself",
              scenario: "You just gave a quiz on fractions to your 4th-grade class.",
              steps: [
                "Export quiz results to a spreadsheet or use your LMS analytics",
                "Calculate percentage correct for each question—highlight any below 70%",
                "For low-performing questions, ask: Was the question bad or was learning incomplete?",
                "List students below 70% overall—what do they have in common?",
                "List students at 90%+—how can they be challenged?",
                "Create 3 groups: Reteach (below 60%), Reinforce (60-80%), Extend (above 80%)",
                "Plan differentiated follow-up: reteach group gets small-group instruction, extend group gets challenge problems"
              ],
              tips: [
                "Do this analysis within 24-48 hours while it's fresh",
                "Focus on 2-3 key takeaways, not everything",
                "Share data with students: 'Here's where we are and what we're doing about it'",
                "Track data over time to show growth"
              ]
            },
            keyTakeaways: [
              "Data should lead to immediate action",
              "Look beyond averages to see individual needs",
              "Use data to group students for differentiation",
              "Regular analysis catches problems early"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "classroom-management",
    title: "Classroom Management Excellence",
    description: "Build positive learning environments using evidence-based strategies and behavior management techniques.",
    longDescription: "Learn to create a classroom where every student can thrive. This course covers building relationships, establishing procedures, managing behavior proactively, and creating inclusive learning environments.",
    category: "Management",
    duration: "5 weeks",
    students: 3201,
    rating: 4.7,
    aiPowered: false,
    instructor: "Dr. Linda Martinez",
    instructorBio: "Former principal and behavior specialist with expertise in restorative practices.",
    modules: [
      {
        id: "cm-m1",
        title: "Building Classroom Community",
        description: "Create a positive, inclusive classroom culture from day one",
        lessons: [
          {
            id: "cm-m1-l1",
            title: "The First Days: Setting the Tone",
            duration: "50 min",
            description: "Establish expectations and relationships in the crucial first days.",
            content: `# The First Days: Setting the Tone

## Why First Days Matter

Research shows that patterns established in the first two weeks persist all year. Students are watching to see:
- Who is this teacher?
- What will be expected of me?
- Am I safe here?
- Will this class be interesting?

## Key Goals for the First Week

### 1. Establish Relationships
- Learn every student's name by day 3
- Show genuine interest in students as people
- Share appropriate things about yourself

### 2. Teach Procedures
- Don't assume students know how things work
- Practice procedures until automatic
- Be consistent from day one

### 3. Set Expectations
- Be clear about what you expect
- Explain the WHY behind rules
- Let students see consequences are fair

### 4. Communicate Care
- Your classroom should feel safe
- Students should feel respected
- Academic challenge shows you believe in them

## Common First-Week Mistakes

- Jumping into content too fast
- Being too friendly (or too strict)
- Not practicing procedures enough
- Making empty threats`,
            practicalExample: {
              title: "Planning Your First Three Days",
              scenario: "You're starting a new school year with 6th graders.",
              steps: [
                "Day 1 Morning: Name game activity—students share name + something unique",
                "Day 1: Create class expectations TOGETHER—'What do you need to learn well?'",
                "Day 1: End with exit ticket: 'What's one thing you want me to know about you?'",
                "Day 2: Teach and practice 3 key procedures (entering class, getting materials, asking questions)",
                "Day 2: Community builder activity—'Find someone who...' bingo",
                "Day 3: Practice procedures again with debrief—'What went well? What do we need to work on?'",
                "Day 3: Introduce first content but keep it low-stakes and engaging",
                "All 3 days: Greet every student at the door by name"
              ],
              tips: [
                "Overplan—it's better to have too much than run out",
                "Use name tents until you've memorized names",
                "Document your procedures so you can reteach consistently",
                "Follow through on every expectation from day one"
              ]
            },
            keyTakeaways: [
              "Invest heavily in the first week—it pays off all year",
              "Relationships come first, but procedures are crucial",
              "Practice procedures until they're automatic",
              "Be the teacher you want to be from day one"
            ]
          },
          {
            id: "cm-m1-l2",
            title: "Establishing Routines and Procedures",
            duration: "55 min",
            description: "Create smooth-running systems that save instructional time.",
            content: `# Establishing Routines and Procedures

## Why Procedures Matter

Every minute spent managing logistics is a minute lost to learning. Well-established procedures:
- Save hundreds of hours over the year
- Reduce behavioral issues
- Create a sense of security for students
- Free you to focus on teaching

## Key Procedure Categories

### Entering the Classroom
- Where do students go?
- What do they do first?
- How do you take attendance?

### Transitions
- How do students move between activities?
- What signals do you use?
- What's the expected noise level?

### Materials Management
- How are supplies distributed?
- How are papers collected?
- What if a student doesn't have materials?

### Asking for Help
- How do students signal they need help?
- What do they do while waiting?
- Can they ask peers?

### Ending Class
- How is homework assigned?
- How is cleanup handled?
- How are students dismissed?

## Teaching Procedures

1. **Explain**: What is the procedure and why?
2. **Demonstrate**: Show what it looks like
3. **Practice**: Have students try it
4. **Feedback**: Correct and praise
5. **Repeat**: Practice until automatic`,
            practicalExample: {
              title: "Teaching the 'Entry Routine'",
              scenario: "You want students to come in, get started, and be ready in 3 minutes.",
              steps: [
                "Design the routine: Enter → Get materials from shelf → Read bell work from board → Start working quietly",
                "Create a visual poster showing these steps with images",
                "Day 1: Explain each step and WHY it helps learning",
                "Day 1: Model the entire routine yourself—walk through it as a student would",
                "Day 1: Have 2-3 students model it while others observe",
                "Day 1: Entire class practices—time them, give specific feedback",
                "Day 2-5: Practice daily. Celebrate when done in under 3 minutes",
                "Week 2+: Reset if routine slips. 'Let's practice our entry routine again.'"
              ],
              tips: [
                "Post procedures visually—students can self-correct",
                "Be specific: 'Materials means your notebook, pencil, and textbook'",
                "Use positive framing: 'Walk' not 'Don't run'",
                "Acknowledge students who follow procedures: 'I see Maria is ready'"
              ]
            },
            keyTakeaways: [
              "Every recurring activity needs a procedure",
              "Teach procedures as carefully as content",
              "Practice until procedures are automatic",
              "Reteach when procedures slip"
            ]
          },
          {
            id: "cm-m1-l3",
            title: "Building Positive Relationships",
            duration: "45 min",
            description: "Connect with every student, including the challenging ones.",
            content: `# Building Positive Relationships

## The Research on Relationships

Students don't learn from teachers they don't like or trust. Studies show:
- Positive teacher-student relationships improve achievement
- They reduce behavioral issues by up to 50%
- They increase student engagement and motivation
- They make teaching more enjoyable for everyone

## Relationship-Building Strategies

### The 2x10 Strategy
Spend 2 minutes for 10 consecutive days having a personal conversation with a challenging student.
- Not about academics or behavior
- About their interests, life, thoughts
- Dramatically improves relationships

### Positive Contacts
Reach out to families with good news
- "I wanted to share something great about your child..."
- Aim for 5 positive contacts per week
- Build goodwill before issues arise

### Greeting at the Door
Meet every student at the entrance
- Use their name
- Make eye contact
- Brief positive interaction

### Interest Inventories
Learn what students care about
- Favorite activities, hobbies, music
- Reference their interests in instruction
- Shows you see them as individuals

## Connecting with Difficult Students

The students who need relationships most often push us away. For these students:
- Be persistent and patient
- Look for any positive to acknowledge
- Avoid power struggles
- Separate behavior from identity ("You made a choice" not "You are...")`,
            practicalExample: {
              title: "Implementing the 2x10 Strategy",
              scenario: "You have a student who is constantly off-task and confrontational.",
              steps: [
                "Commit to 2 minutes of personal conversation for 10 consecutive school days",
                "Day 1: 'Hey Marcus, I noticed your shoes. Are you into basketball?'",
                "Day 2: 'Did you catch any games this weekend?'",
                "Day 3: 'Who's your favorite player? What do you like about them?'",
                "Days 4-10: Continue with genuine follow-up questions",
                "After 10 days: Notice the change in how the student responds to you",
                "Maintenance: Continue periodic check-ins about their interests",
                "Track: Note any changes in behavior and engagement"
              ],
              tips: [
                "Be genuinely curious—students know when you're faking",
                "Don't mention behavior or academics during these conversations",
                "Find something you actually find interesting about them",
                "If you miss a day, pick up the next day—don't give up"
              ]
            },
            keyTakeaways: [
              "Relationships are the foundation of classroom management",
              "Invest extra time in challenging students",
              "Small, consistent interactions build trust",
              "Positive family contact builds partnership"
            ]
          }
        ]
      },
      {
        id: "cm-m2",
        title: "Proactive Behavior Management",
        description: "Prevent problems before they start",
        lessons: [
          {
            id: "cm-m2-l1",
            title: "Preventing Misbehavior Before It Starts",
            duration: "50 min",
            description: "Design your environment and instruction to minimize disruptions.",
            content: `# Preventing Misbehavior Before It Starts

## The 80/20 Rule of Behavior

80% of behavior management is prevention:
- Clear expectations
- Engaging instruction
- Positive relationships
- Well-designed environment

Only 20% is responding to misbehavior.

## Environmental Design

### Seating Arrangement
- Can you see all students?
- Can students see you and the board?
- Are high-need students near you?
- Are easily distracted students away from distractions?

### Traffic Patterns
- Can students move without crowding?
- Are high-use areas accessible?
- Is there space for you to circulate?

### Visibility
- Can you see the whole room from anywhere?
- Are there blind spots?

## Instructional Prevention

### Engagement Matters
- Bored students find other things to do
- Engaged students don't have time for misbehavior

### Appropriate Challenge
- Too easy = boredom
- Too hard = frustration
- Both lead to behavior issues

### Pacing
- Dead time invites problems
- Keep momentum but allow processing
- Have backup activities ready`,
            practicalExample: {
              title: "Redesigning Your Room to Prevent Problems",
              scenario: "You're having issues with students off-task in certain areas.",
              steps: [
                "Draw your current classroom layout and mark problem spots",
                "Identify patterns: Are issues near windows? Friends seated together? Far from you?",
                "Redesign: Move your desk to see the whole room, not face a wall",
                "Create a 'runway' so you can circulate to all areas quickly",
                "Seat high-need students in your 'action zone' (front and center)",
                "Separate students who trigger each other's behavior",
                "Remove or minimize visual distractions from walls",
                "Test the new layout for one week and adjust as needed"
              ],
              tips: [
                "Change seating arrangements periodically to prevent problems",
                "Position yourself to move easily during instruction",
                "Remove items that invite play (fidgets become distractions)",
                "Ask a colleague to observe and identify blind spots"
              ]
            },
            keyTakeaways: [
              "Prevention is far more effective than intervention",
              "Environmental design impacts behavior",
              "Engagement is your best behavior tool",
              "Scan constantly to catch issues early"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "project-based-learning",
    title: "Project-Based Learning Design",
    description: "Create engaging, real-world projects that develop critical thinking and collaboration skills.",
    longDescription: "Transform your classroom with authentic project-based learning. Learn to design meaningful projects, facilitate student-driven inquiry, and assess both process and product effectively.",
    category: "Curriculum",
    duration: "7 weeks",
    students: 1654,
    rating: 4.9,
    aiPowered: true,
    instructor: "Dr. Robert Kim",
    instructorBio: "PBL expert who has helped over 200 schools implement project-based learning.",
    modules: [
      {
        id: "pbl-m1",
        title: "PBL Foundations",
        description: "Understand the research and principles behind effective PBL",
        lessons: [
          {
            id: "pbl-m1-l1",
            title: "What Makes PBL Different",
            duration: "45 min",
            description: "Understand true PBL versus projects attached to traditional teaching.",
            content: `# What Makes PBL Different

## Dessert Projects vs. Main Course PBL

### Dessert Projects
- Added at the end of a unit
- "Now make a poster about what you learned"
- Fun but not central to learning
- Process is secondary to product

### Main Course PBL
- Project IS the unit
- Learning happens THROUGH the project
- Inquiry drives instruction
- Process is as important as product

## Gold Standard PBL Elements

### 1. Challenging Problem or Question
- Open-ended, not easily Googled
- Meaningful to students
- Connected to real-world issues

### 2. Sustained Inquiry
- Deep investigation over time
- Multiple sources and perspectives
- Student-driven questions

### 3. Authenticity
- Real-world relevance
- Real audience beyond the teacher
- Real impact when possible

### 4. Student Voice and Choice
- Students make key decisions
- Multiple paths to success
- Ownership of learning

### 5. Reflection
- Regular check-ins on process
- Learning from mistakes
- Setting goals for improvement

### 6. Critique and Revision
- Feedback from peers and experts
- Multiple drafts
- Focus on improvement, not just grade

### 7. Public Product
- Shared beyond the classroom
- High-quality expectation
- Genuine audience`,
            practicalExample: {
              title: "Transforming a Dessert into Main Course PBL",
              scenario: "Your current unit on ecosystems ends with students making posters. Turn it into PBL.",
              steps: [
                "Start with an engaging question: 'How can we protect our local watershed from pollution?'",
                "Frame as real: Partner with a local environmental group as the 'client'",
                "Build in inquiry: Students research local water quality, interview experts, collect data",
                "Add voice and choice: Groups choose specific pollution sources to address",
                "Design authentic products: Presentation to city council, community action plan, public awareness campaign",
                "Include reflection checkpoints: Weekly journal entries on 'What I learned, what's challenging'",
                "Build in critique: Draft presentations get feedback from partner organization",
                "Present publicly: Community event where students share findings and recommendations"
              ],
              tips: [
                "Don't start with the product—start with the question",
                "Real clients add urgency and meaning",
                "Allow productive struggle—resist rescuing too quickly",
                "Build content instruction into the project, not before it"
              ]
            },
            keyTakeaways: [
              "True PBL is how students learn, not what they do after learning",
              "The driving question is crucial—spend time crafting it",
              "Authenticity motivates more than grades",
              "Process skills matter as much as content"
            ]
          },
          {
            id: "pbl-m1-l2",
            title: "Designing Driving Questions",
            duration: "50 min",
            description: "Create questions that drive deep inquiry and engagement.",
            content: `# Designing Driving Questions

## What is a Driving Question?

A driving question:
- Launches the project
- Focuses the inquiry
- Is open-ended (not Googleable)
- Connects to standards without being obvious
- Is engaging and provocative

## Types of Driving Questions

### Abstract Questions
"What is justice?" / "What is a hero?"
- Philosophical, debatable
- Requires taking a position

### Role-Based Questions
"How can we, as city planners, design a more walkable neighborhood?"
- Students take on professional roles
- Authentic perspective

### Problem-Based Questions
"How can we reduce food waste in our cafeteria?"
- Real problem to solve
- Tangible outcome

### Product-Based Questions
"How can we create a podcast that explains climate change to middle schoolers?"
- Clear deliverable
- Audience defined

## Crafting Good Driving Questions

### Start with Standards
What do students need to learn?

### Find Real-World Connection
Where does this matter in the real world?

### Make it Debatable
Add "how" or "to what extent" to create discussion

### Test It
- Is it open-ended?
- Does it lead to multiple learning pathways?
- Will students care?`,
            practicalExample: {
              title: "Creating a Driving Question for Your Unit",
              scenario: "Your unit covers the American Revolution (standard: causes and effects of the Revolution).",
              steps: [
                "Identify the core understanding: What caused colonists to rebel, and what were the consequences?",
                "Find current relevance: When is it right to challenge authority? Revolution happening today?",
                "Draft initial questions: 'Was the American Revolution justified?', 'When should people rebel?'",
                "Add authenticity: 'As historians, how should we remember the Revolution?'",
                "Test with students: Share 3 options and see which generates the most interest",
                "Refine: 'The American Revolution: Freedom fighters or treasonous rebels—how should history judge them?'",
                "Connect to product: Students create museum exhibits taking different perspectives"
              ],
              tips: [
                "Avoid questions with single right answers",
                "Questions that start with 'To what extent...' encourage nuance",
                "Good questions make students disagree productively",
                "Revise questions as the project evolves if needed"
              ]
            },
            keyTakeaways: [
              "The driving question makes or breaks the project",
              "Good questions are open, engaging, and connected to standards",
              "Test questions with students before committing",
              "Questions should lead to authentic inquiry"
            ]
          }
        ]
      },
      {
        id: "pbl-m2",
        title: "Facilitating Student-Driven Learning",
        description: "Guide students through inquiry without taking over",
        lessons: [
          {
            id: "pbl-m2-l1",
            title: "The Teacher's Role in PBL",
            duration: "45 min",
            description: "Shift from sage on the stage to guide on the side.",
            content: `# The Teacher's Role in PBL

## From Director to Coach

Traditional teaching is like being a movie director:
- You control the script
- You tell actors where to stand
- You decide when to cut

PBL teaching is like being a coach:
- Athletes play the game
- You prepare them, guide them, support them
- They make decisions in the moment

## Key Teacher Moves

### Front-Loading
Teach skills before students need them:
- Research skills before research phase
- Collaboration skills before group work
- Presentation skills before public products

### Workshop-Style Instruction
Mini-lessons when students need them:
- "I notice many groups are struggling with X. Let me show you..."
- Just-in-time teaching
- Keep it brief (10 min max)

### Conferring
One-on-one or small group check-ins:
- "Tell me about your progress"
- "What's your next step?"
- "What do you need from me?"

### Managing Energy
Projects have emotional rhythms:
- Initial excitement
- Messy middle (frustration)
- Final push
- Celebrate completion`,
            practicalExample: {
              title: "Managing the 'Messy Middle' of a Project",
              scenario: "You're two weeks into a four-week project and energy is flagging.",
              steps: [
                "Acknowledge the feeling: 'We're in the hard part—this is normal and expected'",
                "Check individual progress: Brief conferences with each group to identify blockers",
                "Provide targeted instruction: If many groups are stuck on research, run a mini-lesson",
                "Adjust timeline if needed: 'I'm giving everyone an extra day on this phase'",
                "Inject variety: A gallery walk, expert visit, or change of location",
                "Celebrate small wins: 'Look how far we've come' mid-project reflection",
                "Reframe: 'Remember why this matters—our presentation is in two weeks'",
                "Model struggle: Share your own examples of pushing through difficult work"
              ],
              tips: [
                "The messy middle is where real learning happens",
                "Don't rescue too quickly—productive struggle is valuable",
                "Regular check-ins catch problems before they derail projects",
                "Energy management is part of your job"
              ]
            },
            keyTakeaways: [
              "Your role shifts from lecturer to facilitator",
              "Front-load skills, teach on demand, confer regularly",
              "The messy middle is expected—help students push through",
              "Prepare students for independence, then let them struggle productively"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "edtech-integration",
    title: "Educational Technology Integration",
    description: "Seamlessly integrate EdTech tools to enhance learning outcomes and student engagement.",
    longDescription: "Move beyond using technology for technology's sake. Learn to choose the right tools, integrate them meaningfully, and measure their impact on student learning.",
    category: "Technology",
    duration: "6 weeks",
    students: 2987,
    rating: 4.8,
    aiPowered: true,
    instructor: "Dr. Emily Watson",
    instructorBio: "EdTech consultant who has trained over 10,000 teachers on technology integration.",
    modules: [
      {
        id: "et-m1",
        title: "Purposeful Technology Selection",
        description: "Choose the right tools for the right purposes",
        lessons: [
          {
            id: "et-m1-l1",
            title: "The SAMR Model for Technology Integration",
            duration: "45 min",
            description: "Understand levels of technology integration to move beyond substitution.",
            content: `# The SAMR Model for Technology Integration

## What is SAMR?

SAMR is a framework for thinking about how technology is used in education:

### Substitution
Technology directly replaces paper-based activities
- Reading a PDF instead of a printed article
- Typing an essay instead of handwriting
- **No functional change**

### Augmentation
Technology adds functional improvement
- Students can use spell-check in word processor
- Digital texts have hyperlinks for definitions
- **Some improvement**

### Modification
Technology allows significant task redesign
- Students collaborate on a shared document in real-time
- Students create multimedia presentations instead of reports
- **Significant change**

### Redefinition
Technology allows previously inconceivable tasks
- Students connect with classrooms globally
- Students publish work for real audiences
- Create VR experiences
- **Transformative**

## Moving Up the SAMR Ladder

### Ask Yourself:
- Could students do this without technology? (If yes, you're at Substitution)
- Does technology add new capabilities? (Moving toward Augmentation)
- Is the task fundamentally different? (Moving toward Modification)
- Was this task impossible before? (Redefinition)

## SAMR Misconceptions

- Higher isn't always better—Substitution has its place
- It's a spectrum, not a ladder
- The goal is thoughtful integration, not transformation for its own sake`,
            practicalExample: {
              title: "Elevating a Lesson Through SAMR Levels",
              scenario: "Students currently read a chapter and answer questions on paper.",
              steps: [
                "Substitution: Students read the chapter as a PDF and type answers",
                "Augmentation: Digital text includes videos, links, and built-in dictionary",
                "Modification: Students annotate collaboratively on shared document, seeing peers' thoughts",
                "Redefinition: Students create a podcast interviewing experts on the topic, published for public audience",
                "Decide which level fits: For this objective, does Modification add value? Is Redefinition worth the time?",
                "Plan backwards: If aiming for Modification, what scaffolding do students need?",
                "Assess impact: Did the technology use improve learning outcomes?"
              ],
              tips: [
                "Start with learning objectives, not technology",
                "Move up SAMR levels gradually—don't jump to Redefinition immediately",
                "Sometimes Substitution is the right choice",
                "Redefinition projects need significant time investment"
              ]
            },
            keyTakeaways: [
              "SAMR helps evaluate technology use",
              "The goal isn't always transformation",
              "Start with learning goals, then choose technology",
              "Move up SAMR levels as you build capacity"
            ]
          },
          {
            id: "et-m1-l2",
            title: "Evaluating EdTech Tools",
            duration: "50 min",
            description: "Make informed decisions about which tools to adopt.",
            content: `# Evaluating EdTech Tools

## The Problem: Too Many Tools

There are over 10,000 EdTech products available. Teachers are overwhelmed with options, and many tools:
- Promise more than they deliver
- Add work without adding value
- Create security or privacy concerns
- Become abandoned when companies fail

## Evaluation Framework: ACTIONS

### A - Accessibility
- Works on school devices?
- Accessible for students with disabilities?
- Available offline if needed?

### C - Cost
- Free? Freemium? Paid?
- Hidden costs (time, training, upgrades)?
- District approval needed?

### T - Technical Requirements
- What devices are supported?
- What bandwidth is needed?
- How reliable is the platform?

### I - Impact on Learning
- What problem does this solve?
- Is there evidence it works?
- How will you measure impact?

### O - Organizational Fit
- Aligns with school/district goals?
- Integrates with existing tools?
- Sustainable long-term?

### N - Network Effects
- Are others at your school using it?
- Is there a community for support?
- Will students use it elsewhere?

### S - Security & Privacy
- What data is collected?
- Where is data stored?
- Compliant with FERPA/COPPA?`,
            practicalExample: {
              title: "Evaluating Whether to Adopt Kahoot for Formative Assessment",
              scenario: "You're considering using Kahoot for quick checks in class.",
              steps: [
                "Accessibility: Works on any device with a browser ✓",
                "Cost: Free basic version, paid for advanced features—start free ✓",
                "Technical: Needs internet and devices—check computer lab availability ✓",
                "Impact: Increases engagement in review—but does it improve learning? (Need to test)",
                "Organizational: Many teachers already use it—easy to get support ✓",
                "Network: Students may know it from other classes ✓",
                "Security: Review privacy policy—what student data is collected?",
                "Decision: Try for one unit, measure engagement and quiz scores before/after",
                "Evaluate after trial: Did it improve outcomes enough to justify continued use?"
              ],
              tips: [
                "Pilot before committing—never adopt school-wide without testing",
                "Talk to teachers who've used it before",
                "Check if similar tools are already approved by your district",
                "New tools = learning curve; factor in time investment"
              ]
            },
            keyTakeaways: [
              "Not every new tool is worth adopting",
              "Use a framework to evaluate objectively",
              "Pilot before committing",
              "Learning impact should drive decisions, not novelty"
            ]
          }
        ]
      },
      {
        id: "et-m2",
        title: "AI Tools in Education",
        description: "Understand and leverage AI tools effectively",
        lessons: [
          {
            id: "et-m2-l1",
            title: "AI Tools for Teachers",
            duration: "55 min",
            description: "Use AI to save time and enhance your teaching.",
            content: `# AI Tools for Teachers

## AI as Teaching Assistant

AI tools can help teachers:
- Save time on routine tasks
- Generate ideas and resources
- Differentiate materials
- Provide feedback at scale

## Teacher Use Cases

### Lesson Planning
- Generate lesson plan outlines
- Create multiple versions for different levels
- Brainstorm activities and assessments

### Creating Materials
- Generate practice problems
- Create reading passages at specific levels
- Write quiz questions
- Develop rubrics

### Communication
- Draft parent emails
- Create newsletters
- Write feedback comments

### Administrative Tasks
- Summarize meeting notes
- Create schedules
- Organize information

## Using AI Effectively

### Prompting Tips
- Be specific about what you want
- Include context (grade level, subject, etc.)
- Specify format and length
- Ask for multiple options

### Always Review Output
- AI makes mistakes
- Check for accuracy
- Ensure appropriateness for your context
- Personalize before using

### Ethical Considerations
- Don't share student data with AI
- Be transparent about AI use
- Model responsible AI use for students`,
            practicalExample: {
              title: "Using AI to Differentiate Reading Materials",
              scenario: "You have one reading passage but students at varying reading levels.",
              steps: [
                "Take your original passage and paste into an AI tool like ChatGPT",
                "Prompt: 'Rewrite this passage at a 3rd-grade reading level, keeping the same main ideas'",
                "Prompt again: 'Now rewrite at a 7th-grade level with more complex vocabulary'",
                "Review both versions for accuracy and appropriateness",
                "Create comprehension questions for each version: 'Create 5 questions about this passage at Bloom's levels 1-3'",
                "Format for student use with consistent layout",
                "Use the appropriate version for each student or group",
                "Assess: Did differentiation improve comprehension?"
              ],
              tips: [
                "Start with tasks that aren't high-stakes",
                "Always fact-check AI output, especially for content knowledge",
                "Use AI as a starting point, not a finished product",
                "Keep records of prompts that work well"
              ]
            },
            keyTakeaways: [
              "AI can save significant teacher time",
              "Use AI for first drafts, not final products",
              "Always review and personalize AI output",
              "Protect student privacy—don't share student data"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "social-emotional-learning",
    title: "Social-Emotional Learning",
    description: "Foster emotional intelligence and well-being in your classroom with proven SEL frameworks.",
    longDescription: "Learn to integrate social-emotional learning into your daily practice. This course covers SEL competencies, implementation strategies, and creating a classroom culture that supports the whole child.",
    category: "Wellbeing",
    duration: "5 weeks",
    students: 2134,
    rating: 4.9,
    aiPowered: false,
    instructor: "Dr. Angela Williams",
    instructorBio: "School psychologist and SEL curriculum developer with expertise in trauma-informed practices.",
    modules: [
      {
        id: "sel-m1",
        title: "SEL Foundations",
        description: "Understand what SEL is and why it matters",
        lessons: [
          {
            id: "sel-m1-l1",
            title: "The CASEL Framework",
            duration: "45 min",
            description: "Explore the five core SEL competencies.",
            content: `# The CASEL Framework

## What is SEL?

Social-Emotional Learning (SEL) is the process through which all young people and adults acquire and apply the knowledge, skills, and attitudes to:
- Develop healthy identities
- Manage emotions
- Achieve personal and collective goals
- Feel and show empathy
- Establish and maintain supportive relationships
- Make responsible and caring decisions

## The Five Core Competencies

### 1. Self-Awareness
Recognizing one's own emotions, thoughts, and values
- Identifying emotions
- Accurate self-perception
- Recognizing strengths
- Self-confidence
- Self-efficacy

### 2. Self-Management
Regulating one's emotions, thoughts, and behaviors
- Impulse control
- Stress management
- Self-discipline
- Self-motivation
- Goal-setting

### 3. Social Awareness
Understanding the perspectives of others
- Perspective-taking
- Empathy
- Appreciating diversity
- Respect for others

### 4. Relationship Skills
Establishing and maintaining healthy relationships
- Communication
- Social engagement
- Teamwork
- Conflict resolution

### 5. Responsible Decision-Making
Making constructive choices about behavior and social interactions
- Identifying problems
- Analyzing situations
- Solving problems
- Evaluating
- Reflecting
- Ethical responsibility

## Why SEL Matters

Research shows SEL:
- Improves academic achievement by 11 percentile points
- Reduces conduct problems and emotional distress
- Improves attitudes toward school
- Benefits persist for years`,
            practicalExample: {
              title: "Mapping SEL Competencies to Your Classroom",
              scenario: "You want to intentionally address each SEL competency in your teaching.",
              steps: [
                "Self-Awareness: Start class with emotion check-ins ('Rate your energy 1-5')",
                "Self-Management: Teach a calming strategy (belly breathing, grounding)",
                "Social Awareness: Use perspective-taking prompts ('How might ___ be feeling?')",
                "Relationship Skills: Include structured partner work with communication norms",
                "Responsible Decision-Making: When problems arise, use a decision-making protocol",
                "Create a weekly map: Monday focuses on self-awareness, Tuesday on relationship skills, etc.",
                "Integrate into content: In literature, discuss characters' emotions and decisions",
                "Assess: Weekly reflection: 'Which skill did you practice most this week?'"
              ],
              tips: [
                "SEL should be integrated, not an add-on",
                "Model SEL skills yourself—students watch how you handle stress",
                "Connect SEL to academic content naturally",
                "Build classroom culture that reinforces SEL norms"
              ]
            },
            keyTakeaways: [
              "SEL includes five interconnected competencies",
              "SEL improves both behavior and academics",
              "All competencies can be taught and practiced",
              "Integration into daily practice is more effective than isolated lessons"
            ]
          },
          {
            id: "sel-m1-l2",
            title: "Creating SEL-Supportive Classroom Culture",
            duration: "50 min",
            description: "Build an environment where SEL thrives.",
            content: `# Creating SEL-Supportive Classroom Culture

## Culture vs. Curriculum

You can have the best SEL curriculum in the world, but if your classroom culture doesn't support it, skills won't transfer. Culture is:
- How you and students interact daily
- The unwritten rules everyone follows
- What gets celebrated vs. corrected
- Whether students feel safe taking risks

## Key Elements of SEL Culture

### Emotional Safety
Students feel safe to:
- Express emotions
- Make mistakes
- Ask questions
- Be themselves

### Belonging
Every student feels:
- Known by the teacher
- Connected to classmates
- Part of the community
- Valued for who they are

### High Expectations with High Support
Students experience:
- Belief in their potential
- Challenging work
- Help when struggling
- Recognition of effort

## Practical Culture Builders

### Morning Meetings / Class Circles
- Daily gathering ritual
- Greeting, sharing, activity
- Builds community

### Classroom Agreements (not rules)
- Created together
- Focused on how we treat each other
- Regularly referenced

### Restorative Practices
- Focus on repairing harm
- Not just punishment
- Building accountability`,
            practicalExample: {
              title: "Implementing Daily Morning Meetings",
              scenario: "You want to start each day with an SEL-focused community builder.",
              steps: [
                "Set up: Arrange desks in a circle or have students sit on the floor",
                "Greeting (2 min): Students greet each other by name ('Good morning, Maria!')",
                "Sharing (3-5 min): One student shares something; others practice listening and responding",
                "Activity (5 min): A quick game that builds community (e.g., 'Would you rather...?')",
                "Message (1 min): Preview the day and connect to SEL ('Today we'll practice perseverance')",
                "Start simple: Just greeting for Week 1, add components gradually",
                "Use a talking piece to manage sharing turns",
                "Keep it consistent: Same time, same format, every day"
              ],
              tips: [
                "Morning Meeting takes time but saves time later through better behavior",
                "If pressed for time, even 5 minutes of greeting is valuable",
                "Participate as a member, not just facilitator",
                "Let students lead components as they gain comfort"
              ]
            },
            keyTakeaways: [
              "Culture enables or undermines SEL curriculum",
              "Safety and belonging are foundational",
              "Daily rituals build community",
              "Invest time early—it pays off in behavior and engagement"
            ]
          },
          {
            id: "sel-m1-l3",
            title: "Teaching Emotional Regulation",
            duration: "55 min",
            description: "Help students manage big emotions effectively.",
            content: `# Teaching Emotional Regulation

## What is Emotional Regulation?

Emotional regulation is the ability to:
- Recognize emotions as they occur
- Accept emotions without judgment
- Choose how to respond (not react)
- Use strategies to manage intense emotions

## The Brain Science (Simplified)

### The Amygdala (Alarm System)
- Detects threats
- Triggers fight/flight/freeze
- Fast but not always accurate

### The Prefrontal Cortex (Control Center)
- Logical thinking
- Decision-making
- Takes longer to activate

### The Flip (Dan Siegel's Hand Model)
When overwhelmed, the "lid flips"—the prefrontal cortex goes offline and the amygdala takes over. No learning can happen in this state.

## Regulation Strategies

### Prevention Strategies
- Regular mindfulness practice
- Physical movement
- Adequate sleep and nutrition
- Predictable routines

### In-the-Moment Strategies
- Deep breathing (4-7-8 method)
- Grounding (5-4-3-2-1 senses)
- Movement (walk, stretch)
- Positive self-talk

### Recovery Strategies
- Reflection after the emotion passes
- Problem-solving when calm
- Repair relationships if needed

## Teaching Regulation to Students

1. **Teach when calm**—not during a crisis
2. **Model explicitly**—"I'm feeling frustrated, so I'm going to take three breaths"
3. **Practice regularly**—make strategies automatic
4. **Provide space**—calm-down corners, breaks as needed`,
            practicalExample: {
              title: "Creating a Calm-Down Corner and Protocol",
              scenario: "You want to provide a space for students to regulate without leaving class.",
              steps: [
                "Choose a corner: Away from traffic, somewhat private but visible to you",
                "Stock it: Stress balls, fidgets, noise-canceling headphones, visual calming prompts",
                "Add strategy cards: 'Breathe', 'Ground yourself', 'Think of a safe place'",
                "Teach the protocol: 'When you're overwhelmed, sign to me and go to the corner'",
                "Set expectations: 'You can be there for 5 minutes, then rejoin or talk to me'",
                "Practice when calm: Have every student visit and practice a strategy",
                "Debrief after use: 'What helped? What do you need next time?'",
                "Normalize: 'Using the calm-down corner shows good self-awareness'"
              ],
              tips: [
                "This is not a punishment—frame it as a self-care tool",
                "Keep it stocked with items students actually find calming",
                "Teach that leaving the classroom isn't usually necessary",
                "Some students may overuse—address privately"
              ]
            },
            keyTakeaways: [
              "Emotional regulation is a learnable skill",
              "Teach strategies when students are calm",
              "Provide physical spaces and tools for regulation",
              "Model your own regulation explicitly"
            ]
          }
        ]
      },
      {
        id: "sel-m2",
        title: "Addressing Trauma and Difficult Emotions",
        description: "Support students with trauma while maintaining boundaries",
        lessons: [
          {
            id: "sel-m2-l1",
            title: "Trauma-Informed Classroom Practices",
            duration: "60 min",
            description: "Create safety for students who have experienced trauma.",
            content: `# Trauma-Informed Classroom Practices

## Understanding Trauma

Trauma is when an event (or series of events) overwhelms a person's ability to cope. For children, this can include:
- Abuse or neglect
- Family instability
- Community violence
- Poverty
- Natural disasters
- Medical trauma

## Impact on Learning

Trauma affects:
- **Brain development**: Constant stress impacts the developing brain
- **Behavior**: Fight, flight, freeze responses may appear as defiance, withdrawal, or shutting down
- **Relationships**: Difficulty trusting adults
- **Learning**: Impaired concentration and memory
- **Regulation**: Difficulty managing emotions

## Trauma-Informed Principles

### Safety
Both physical and emotional safety are essential
- Predictable routines reduce anxiety
- Clear expectations create security
- Calm adult presence provides stability

### Trustworthiness
Build trust through consistency
- Do what you say you'll do
- Be predictable
- Maintain boundaries

### Choice
Restore sense of control
- Offer choices when possible
- Avoid power struggles
- Respect student autonomy

### Collaboration
Work with students, not on them
- Include students in solutions
- Value their input
- Build on strengths

### Empowerment
Focus on strengths and resilience
- Recognize what students do well
- Build self-efficacy
- Celebrate growth

## What This Looks Like in Practice

- Greeting students warmly at the door
- Warning before transitions
- Offering choices ("Would you like to work alone or with a partner?")
- Responding to behavior with curiosity, not judgment
- Maintaining calm when students are dysregulated`,
            practicalExample: {
              title: "Responding to a Student in Crisis",
              scenario: "A student suddenly becomes very agitated after something triggers them.",
              steps: [
                "Stay calm: Your nervous system affects theirs—breathe, lower your voice",
                "Create safety: Move calmly toward them, reduce audience (other students continue working)",
                "Offer presence: 'I'm here. You're safe. I'm not going to leave.'",
                "Don't demand: Avoid 'Look at me' or 'Stop that'—their thinking brain is offline",
                "Reduce stimulation: Lower lights if possible, move to quieter area if they can",
                "Offer regulation: 'Would you like to squeeze this stress ball? Let's breathe together.'",
                "Wait: It takes 20+ minutes for stress chemicals to clear—don't rush",
                "Debrief later: When calm: 'What happened? What can we do next time?'",
                "Document: Note what triggered, what helped, to inform future responses"
              ],
              tips: [
                "You can't reason with someone in crisis—co-regulate first",
                "Never back a student into a corner (literally or figuratively)",
                "Have a plan for the rest of the class during incidents",
                "Take care of yourself—trauma responses are draining for teachers too"
              ]
            },
            keyTakeaways: [
              "Many students have experienced trauma—assume it's in your room",
              "Behavior often communicates unmet needs",
              "Trauma-informed practices benefit all students",
              "Focus on relationships, safety, and regulation"
            ]
          }
        ]
      }
    ]
  }
];

export function getCourseById(id: string): Course | undefined {
  return coursesData.find(course => course.id === id);
}

export function getLessonById(courseId: string, lessonId: string): { course: Course; module: Module; lesson: Lesson } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) {
      return { course, module, lesson };
    }
  }
  return undefined;
}
