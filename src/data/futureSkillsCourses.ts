import { Course } from "./courseData";

export const futureSkillsCourses: Course[] = [
  {
    id: "cyber-safety-digital-citizenship",
    title: "Cyber Safety & Digital Citizenship",
    description: "Keep students safe online — tackle cyberbullying, screen addiction, misinformation, deepfakes and digital footprints with age-appropriate classroom strategies.",
    longDescription: "Every student now carries the internet in their pocket. This course prepares teachers to lead honest, practical conversations about online safety, privacy, scams, cyberbullying and AI-generated misinformation. You will get ready-to-run classroom activities, parent-communication scripts and an incident-response checklist aligned to Indian school realities.",
    category: "Digital Citizenship",
    duration: "3 weeks",
    students: 1980,
    rating: 4.8,
    aiPowered: false,
    instructor: "Aditya Rao",
    instructorBio: "Cyber-safety trainer who has run digital citizenship workshops in 400+ schools and advises school boards on online safeguarding policy.",
    modules: [
      {
        id: "csdc-m1",
        title: "Safe, Kind and Smart Online",
        description: "Cyberbullying, privacy and healthy screen habits",
        lessons: [
          {
            id: "csdc-m1-l1",
            title: "Handling Cyberbullying in Your Classroom",
            duration: "9 min",
            description: "Spot the early signs of online harassment and respond with a calm, documented, student-first process.",
            content: `# Handling Cyberbullying in Your Classroom

## Why This Belongs to Teachers

Most cyberbullying starts inside your classroom's social world and simply moves to WhatsApp, Instagram or gaming chats after 4 PM. The damage walks back into your room the next morning — withdrawal, sudden drop in marks, refusal to attend school.

## The Warning Signs

- A student hides their phone screen or reacts sharply to notifications
- Sudden avoidance of a friend group or of specific classes
- Falling attendance, "stomach aches", or requests to sit alone
- A student who was chatty becomes silent in group work

## The 4-Step Response (RCDS)

1. **Receive** — Listen without judgement. Never say "just ignore it" or "why were you on that app?"
2. **Capture** — Ask the student to screenshot, do not delete. Record date, platform, and who else saw it.
3. **De-escalate** — Separate the students socially before confronting anyone. Public confrontation triples retaliation.
4. **Support & Escalate** — Loop in the counsellor and parents on the same day. Follow the school safeguarding policy.

## Prevention That Actually Works

- **Group chat charter**: Co-write class WhatsApp rules with students in week one.
- **Upstander practice**: Rehearse three lines a bystander can send — "not funny, stop", "I'm reporting this", "are you okay?"
- **Anonymous report box**: A physical box or a simple Google Form beats a policy poster.

## What Not To Do

Do not confiscate phones as punishment, do not read a student's private chats without consent and a witness, and never share screenshots in the staff room.`,
            practicalExample: {
              title: "A Class 8 WhatsApp Group Turns Toxic",
              scenario: "A student stops attending your maths period. You learn that a class group has been sharing an edited photo of her.",
              steps: [
                "Speak to her privately, outside the classroom, with a female colleague present",
                "Ask her to screenshot the messages; write down the timeline yourself",
                "Inform the class teacher, counsellor and principal the same day",
                "Meet the group admins separately — no public naming",
                "Run an upstander lesson with the whole class the following week, without referencing the case",
              ],
              tips: [
                "Document every conversation with date and time",
                "Involve parents of both sides only after the school has a clear record",
                "Give the affected student a visible, safe role in class to rebuild belonging",
              ],
            },
            keyTakeaways: [
              "Cyberbullying is a classroom problem, not just a home problem",
              "Capture evidence before anyone deletes it",
              "Separate students socially before any confrontation",
              "Bystanders change outcomes more than punishment does",
            ],
          },
          {
            id: "csdc-m1-l2",
            title: "Digital Footprints, Privacy and Screen Balance",
            duration: "8 min",
            description: "Teach students that everything online is permanent, searchable and copyable — and help them build healthier screen habits.",
            content: `# Digital Footprints, Privacy and Screen Balance

## The Three Rules of a Footprint

Everything posted online is **Permanent**, **Searchable** and **Copyable**. Screenshots defeat "disappearing" messages.

## The Grandparent Test

Before posting, ask: would I be comfortable if my grandparent, my principal and a future employer all saw this? If any answer is no, don't post.

## Privacy Basics Students Must Own

- Lock accounts to private; review followers every term
- Never share OTPs, addresses, school uniform photos with the school name visible, or live location
- Use a nickname handle, not a full name plus year of birth
- Turn off location tagging in the camera app

## Screen Balance Without Lecturing

Teenagers ignore "reduce screen time". They respond to data. Ask them to check their weekly screen report and calculate what else that time could have bought: books read, sleep hours, cricket matches.

**The 3-2-1 habit**: no screens 1 hour before sleep, phone charging 2 metres from the bed, 3 device-free meals a week.

## Classroom Activity: Search Yourself

Students search their own name and note what a stranger could learn. Debrief on what surprised them.`,
            practicalExample: {
              title: "The Footprint Audit",
              scenario: "You want Class 9 students to understand their own public visibility.",
              steps: [
                "Ask students to open their most-used app and read out only the privacy setting, not content",
                "In pairs, they audit each other's public profile as a stranger would",
                "Each student lists three items to delete or lock",
                "They write one sentence: what a college admissions officer would conclude about them",
                "Revisit the list after two weeks to check follow-through",
              ],
              tips: [
                "Never ask students to show their content publicly — only settings",
                "Send parents the same checklist so home rules match school rules",
                "Model it: share your own privacy settings first",
              ],
            },
            keyTakeaways: [
              "Permanent, searchable, copyable — the three footprint rules",
              "The Grandparent Test is a 3-second filter students remember",
              "Data about their own usage persuades better than lectures",
              "Privacy settings, not content policing, is the teacher's lane",
            ],
          },
        ],
      },
      {
        id: "csdc-m2",
        title: "Misinformation, Deepfakes and Online Scams",
        description: "Build student defences against manipulated media and fraud",
        lessons: [
          {
            id: "csdc-m2-l1",
            title: "Spotting Fake News and AI Deepfakes",
            duration: "9 min",
            description: "A repeatable verification routine students can run in under two minutes on any forwarded message.",
            content: `# Spotting Fake News and AI Deepfakes

## Why It Is Urgent Now

Generative AI makes convincing fake photos, voices and videos free to produce. Family WhatsApp groups are the largest distribution channel in India. Your students are the fact-checkers of their households.

## The SIFT Routine

- **S — Stop.** Strong emotion is the signal of manipulation. Pause before forwarding.
- **I — Investigate the source.** Who posted this and what do they gain?
- **F — Find better coverage.** Search the claim; do at least two independent outlets report it?
- **T — Trace to the original.** Reverse image search; find the first post, not the tenth forward.

## Deepfake Tells (still useful, not foolproof)

- Hands, teeth and ears rendered oddly; jewellery that changes between frames
- Lip-sync drift, flat emotion in the voice, no breathing sounds
- Background text that turns into gibberish when zoomed
- Lighting on the face that does not match the scene

Teach students that tells are getting weaker — **provenance beats pixel-hunting**. Always ask: where did this first appear?

## Classroom Routine: The Forward Test

Once a week, put one forwarded message on the board. Students run SIFT in pairs and vote: real, misleading, or fake. Reveal the answer and the method.`,
            practicalExample: {
              title: "The Weekly Forward Test",
              scenario: "A viral voice note claims a school holiday has been declared tomorrow.",
              steps: [
                "Display the message with the sender's name blurred",
                "Students Stop and name the emotion the message triggers",
                "They investigate: is there an official notice on the school or district site?",
                "They search for two independent reports of the same claim",
                "Class votes, then you reveal the origin and discuss what would have happened if forwarded",
              ],
              tips: [
                "Use real forwards from your own phone — relevance drives engagement",
                "Reward good method, not lucky guesses",
                "Send parents the SIFT card so the routine travels home",
              ],
            },
            keyTakeaways: [
              "Emotion is the fingerprint of manipulation",
              "SIFT gives students a two-minute verification habit",
              "Trace to the original source rather than hunting for visual glitches",
              "Students become the fact-checkers for their whole family",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "financial-career-literacy",
    title: "Teaching Financial & Career Literacy",
    description: "Equip students with money skills and career awareness — budgeting, saving, digital payments, fraud protection and modern career pathways beyond engineering and medicine.",
    longDescription: "Financial capability is a survival skill, yet it appears nowhere in most timetables. This course gives teachers of any subject the confidence and material to teach budgeting, saving, digital payment safety, and realistic career exploration — with Indian examples, UPI scenarios and low-cost classroom simulations.",
    category: "Life Skills",
    duration: "3 weeks",
    students: 1640,
    rating: 4.7,
    aiPowered: false,
    instructor: "Neha Bhatt",
    instructorBio: "Former banker and NCFE-certified financial educator who designs money-literacy curricula for government and low-fee private schools.",
    modules: [
      {
        id: "fcl-m1",
        title: "Money Skills Students Actually Need",
        description: "Budgeting, saving and digital payment safety",
        lessons: [
          {
            id: "fcl-m1-l1",
            title: "Budgeting and Saving: The 50-30-20 Classroom",
            duration: "8 min",
            description: "Turn pocket money into a live budgeting lab that students can run for a month.",
            content: `# Budgeting and Saving: The 50-30-20 Classroom

## Start With Their Money, Not Abstract Numbers

Students switch off at "assume a monthly salary of ₹50,000". They switch on at "you get ₹300 pocket money — where does it go?"

## The 50-30-20 Rule, Scaled Down

- **50% Needs** — bus fare, stationery, canteen lunch
- **30% Wants** — snacks, mobile recharge for games, outings
- **20% Save** — a jar, a piggy bank, or a savings account

## The Three-Jar Simulation

Give each student three envelopes labelled Needs, Wants, Save. For four weeks they physically split whatever money they receive. Weekly, they record: what did I underestimate?

## Concepts Introduced Through the Simulation

- **Opportunity cost**: every ₹20 snack is a ₹20 not saved
- **Compound growth**: ₹100 saved monthly at 7% becomes about ₹17,400 in ten years
- **Emergency fund**: the jar you do not touch
- **Wants inflate**: last month's want becomes this month's "need" — catch it

## Assessment Without a Test

Students present a one-page "money month" reflection: biggest leak, one habit changed, one goal for next month.`,
            practicalExample: {
              title: "The Four-Week Money Month",
              scenario: "You have 15 minutes a week in your class period to build budgeting habit.",
              steps: [
                "Week 1: Students log every rupee spent — no judgement, only data",
                "Week 2: Categorise spends into Needs, Wants, Save; find the biggest leak",
                "Week 3: Set a savings goal with a deadline and a picture of the goal",
                "Week 4: Report the outcome in pairs and name one habit to keep",
                "Close with a class chart of total money saved — celebrate the collective number",
              ],
              tips: [
                "Never make students disclose family income; totals only",
                "Use notebook columns if envelopes are impractical",
                "Invite a parent who runs a small shop to talk about daily cash flow",
              ],
            },
            keyTakeaways: [
              "Teach money with the money students actually handle",
              "50-30-20 is simple enough to remember for life",
              "Tracking beats budgeting theory — data changes behaviour",
              "Celebrate the class total to build a saving culture",
            ],
          },
          {
            id: "fcl-m1-l2",
            title: "UPI, Digital Payments and Fraud Protection",
            duration: "8 min",
            description: "Teach safe digital transaction habits and the scam patterns that target students and their families.",
            content: `# UPI, Digital Payments and Fraud Protection

## The Golden Rule

**You never need to enter a PIN to RECEIVE money.** Every "enter your PIN to get your refund" request is a fraud. This single sentence prevents the most common UPI scam in India.

## Scam Patterns Students Should Recognise

1. **Fake refund/cashback**: a collect request disguised as money coming in
2. **QR code trap**: scanning a QR to "receive" a payment — scanning only ever sends
3. **Job/internship fee**: pay a registration fee for a job that does not exist
4. **OTP social engineering**: caller claims to be from the bank or the school office
5. **Free-gift lucky draw**: a link that harvests card details
6. **Screen-sharing apps**: "install this to fix your account" gives full control

## Safe Habits Checklist

- Verify the payee name before confirming, not after
- Keep a low daily transaction limit on student accounts
- Never share OTP, PIN, CVV — no legitimate institution asks
- Report fraud within the golden hour on cybercrime.gov.in or 1930

## Classroom Simulation

Run a "scam or safe?" rapid round with ten screenshots. Students hold up green or red cards. Debrief each with the pattern name.`,
            practicalExample: {
              title: "Scam or Safe? Rapid Round",
              scenario: "Class 10, 20 minutes, no devices required.",
              steps: [
                "Prepare ten printed screenshots — five genuine, five scams",
                "Students hold up a green or red card for each",
                "For every red card, they must name the pattern and the tell",
                "Introduce 1930 and cybercrime.gov.in as the reporting route",
                "Homework: teach one family member the 'PIN is never needed to receive' rule",
              ],
              tips: [
                "Use real screenshots with personal details removed",
                "Invite the local bank branch manager for a 15-minute session",
                "Repeat the round after a month — recall matters more than novelty",
              ],
            },
            keyTakeaways: [
              "A PIN is never required to receive money",
              "Scanning a QR code always sends, never receives",
              "Report fraud within the golden hour via 1930",
              "Students carry these lessons home to protect parents and grandparents",
            ],
          },
        ],
      },
      {
        id: "fcl-m2",
        title: "Career Awareness for a Changing Economy",
        description: "Expand student horizons beyond the traditional two paths",
        lessons: [
          {
            id: "fcl-m2-l1",
            title: "Careers Beyond Engineering and Medicine",
            duration: "9 min",
            description: "Run a career exploration process that surfaces dozens of viable, dignified pathways.",
            content: `# Careers Beyond Engineering and Medicine

## The Problem

Most students can name fewer than ten careers. Families default to two. The result is mismatch, dropout and burnout.

## The Skills-First Frame

Instead of asking "what do you want to become?", ask **"what problems do you enjoy solving?"** Map answers to clusters:

- Solving people problems → teaching, counselling, HR, healthcare support, hospitality
- Solving system problems → logistics, data analysis, operations, civil services
- Solving making problems → design, skilled trades, culinary arts, manufacturing
- Solving story problems → media, content, marketing, translation, journalism
- Solving nature problems → agriculture tech, renewable energy, conservation

## Pathways Students Rarely Hear About

Paramedical and allied health, GST and accounting practice, drone piloting, renewable energy technician, logistics and supply chain, UI/UX design, sports science, animation and VFX, hotel management, apprenticeship routes through NSDC and ITI.

## The Three-Question Career Interview

Students interview one working adult:
1. What does a normal Tuesday look like in your job?
2. What did you study and what did you actually need?
3. What would you tell a 15-year-old considering this path?

## Guard Against Bias

Actively present non-stereotyped role models — women in trades, men in early-childhood care, first-generation graduates in every field.`,
            practicalExample: {
              title: "The Career Wall",
              scenario: "You want Class 9 and 10 students to expand their career vocabulary over a term.",
              steps: [
                "Each student interviews one working adult using the three questions",
                "They write a one-page profile with the job's daily reality, entry route and pay range",
                "Profiles go on a classroom Career Wall organised by skill cluster",
                "Hold a 30-minute 'career gallery walk' where students read and rank curiosity",
                "End with each student naming two pathways they would explore further and why",
              ],
              tips: [
                "Include local livelihoods — shopkeeping, farming, tailoring — with dignity",
                "Invite alumni; a former student is more persuasive than any speaker",
                "Share the wall at the parent-teacher meeting to widen family expectations",
              ],
            },
            keyTakeaways: [
              "Ask what problems students enjoy solving, not what they want to be",
              "Skill clusters open dozens of pathways from one interest",
              "Real interviews beat career brochures",
              "Parents need the exposure as much as students do",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "climate-sustainability-education",
    title: "Climate & Sustainability Education",
    description: "Teach climate science, local environmental action and green habits without inducing eco-anxiety — with school-level projects that produce measurable results.",
    longDescription: "Students are inheriting a climate-changed world and want to act. This course helps teachers of every subject integrate climate literacy, run practical school sustainability audits, and channel concern into agency rather than anxiety. Includes waste audits, water and energy projects, and cross-subject integration ideas.",
    category: "Sustainability",
    duration: "3 weeks",
    students: 1420,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Suresh Iyer",
    instructorBio: "Environmental scientist and eco-club mentor who has guided 150 schools through waste, water and energy audits.",
    modules: [
      {
        id: "cse-m1",
        title: "Climate Literacy Without Doom",
        description: "Explain the science clearly and protect student wellbeing",
        lessons: [
          {
            id: "cse-m1-l1",
            title: "Teaching Climate Science Clearly and Calmly",
            duration: "9 min",
            description: "Explain greenhouse warming with simple demonstrations and handle eco-anxiety responsibly.",
            content: `# Teaching Climate Science Clearly and Calmly

## The Core Idea in One Minute

The atmosphere lets sunlight in and slows heat from escaping. More greenhouse gases mean a thicker blanket. A thicker blanket means a warmer, more erratic system — hotter heat waves, heavier bursts of rain, longer dry spells.

## Three Demonstrations With Almost No Equipment

1. **Two-jar demo**: two jars, two thermometers, one sealed with cling film in sunlight. The sealed jar warms faster.
2. **Ice-melt comparison**: ice on a dark plate versus a white plate — albedo made visible.
3. **Local data walk**: compare last decade's monsoon onset dates or maximum temperatures from public records.

## Address Eco-Anxiety Directly

Students who feel doom disengage. Follow every problem with agency:

- Name the problem honestly
- Show one thing already improving (solar cost collapse, ozone-layer recovery)
- End with an action the class can complete within a month

## Cross-Subject Integration

Maths: carbon-footprint calculations. Geography: monsoon variability. English: persuasive letters to the municipality. Chemistry: combustion products. Economics: cost of solar versus diesel.`,
            practicalExample: {
              title: "The Two-Jar Investigation",
              scenario: "Class 7 science, one period, materials from the kitchen.",
              steps: [
                "Set two identical jars in sunlight, one sealed with cling film",
                "Students predict and record temperatures every 3 minutes for 20 minutes",
                "Plot both curves on the same axes",
                "Discuss what the cling film represents and where the analogy breaks",
                "Close with one class action students choose themselves",
              ],
              tips: [
                "Always end a climate lesson with agency, never with fear",
                "Use local weather data — abstraction kills engagement",
                "Invite students to teach the demo to a junior class",
              ],
            },
            keyTakeaways: [
              "Explain the greenhouse effect with a visible, cheap demonstration",
              "Pair every problem with a solution and an action",
              "Local data makes global change real",
              "Climate fits into every subject, not just science",
            ],
          },
        ],
      },
      {
        id: "cse-m2",
        title: "School Sustainability Projects That Work",
        description: "Audits and campaigns with measurable outcomes",
        lessons: [
          {
            id: "cse-m2-l1",
            title: "Running a Waste, Water and Energy Audit",
            duration: "9 min",
            description: "A four-week student-led audit that produces real savings and a presentable report.",
            content: `# Running a Waste, Water and Energy Audit

## Why Audits Beat Poster Competitions

Posters end when the paint dries. An audit produces numbers, a recommendation and a measurable change — and it teaches data collection, maths and persuasion at once.

## The Four-Week Structure

- **Week 1 — Baseline**: weigh a day's waste by category; read the electricity meter at fixed times; count taps and log leaks.
- **Week 2 — Analyse**: convert to per-student figures; identify the top three losses.
- **Week 3 — Intervene**: segregation bins, fix leaks, switch-off monitors per class, daylight-first rule.
- **Week 4 — Re-measure**: repeat the baseline measurement and calculate the change.

## Presenting to Decision Makers

Students present to the principal with three slides: what we measured, what we found, what we recommend with the rupee saving. Real budgets move when savings are quantified.

## Sustaining It

Rotate an "energy monitor" role weekly, publish the monthly meter reading on the notice board, and hand the audit to the next cohort as a tradition.`,
            practicalExample: {
              title: "The Class 8 Waste Audit",
              scenario: "Your eco-club wants a project with visible results in a month.",
              steps: [
                "Collect one day's school waste and sort into wet, dry, paper, plastic, e-waste",
                "Weigh each category and calculate grams per student per day",
                "Identify the largest avoidable stream — usually single-use packaging",
                "Introduce labelled segregation bins and a two-minute assembly briefing",
                "Re-weigh after three weeks and present the percentage reduction to the principal",
              ],
              tips: [
                "Use gloves and follow safety rules when handling waste",
                "Photograph the before and after — visuals persuade management",
                "Give the winning class a real reward, such as choosing the next project",
              ],
            },
            keyTakeaways: [
              "Measurement turns environmental concern into action",
              "Baseline, intervene, re-measure — the audit cycle",
              "Quantified savings unlock school budgets",
              "Rotating roles keep the project alive after the excitement fades",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "voice-presence-teachers",
    title: "Voice, Presence & Public Speaking for Teachers",
    description: "Protect your voice, command a room of 60 students without shouting, and deliver assembly talks and workshops with confidence.",
    longDescription: "Your voice is your primary teaching instrument and most teachers damage it within a decade. This course covers vocal health, projection without strain, silence and stance as classroom-management tools, and structured delivery for assemblies, parent meetings and professional workshops.",
    category: "Professional Skills",
    duration: "2 weeks",
    students: 1210,
    rating: 4.9,
    aiPowered: false,
    instructor: "Meera Krishnan",
    instructorBio: "Theatre director and speech coach who trains teachers and school leaders in vocal health and stage presence.",
    modules: [
      {
        id: "vpt-m1",
        title: "Vocal Health and Projection",
        description: "Be heard by 60 students without damaging your voice",
        lessons: [
          {
            id: "vpt-m1-l1",
            title: "Projection Without Strain",
            duration: "8 min",
            description: "Breath support, pitch and pacing techniques that carry your voice across a large classroom.",
            content: `# Projection Without Strain

## Shouting Is Not Projection

Shouting squeezes the throat and raises pitch, which carries poorly and injures the vocal folds. Projection comes from **breath support and resonance**, not from force.

## The Mechanics

1. **Breathe low.** Hand on the belly; it should move out on the inhale, not the shoulders.
2. **Support the sound.** Engage the abdominal muscles gently on the exhale as you speak.
3. **Drop the pitch slightly.** Lower pitch reads as authority and travels further in a hard-walled room.
4. **Open the mouth wider.** Most volume loss is lazy articulation, not weak lungs.
5. **Aim at the back wall,** not the front row.

## Daily Vocal Care

- Sip water through the day; the vocal folds need hydration, not clearing
- Never clear your throat forcefully — swallow or sip instead
- 5-minute warm-up before first period: humming, lip trills, gentle sirens
- Rest the voice for 10 minutes after every three continuous periods
- If hoarseness persists beyond two weeks, see an ENT specialist

## Alternatives to Raising Your Voice

Stand still and wait. Lower your volume so students lean in. Use a fixed non-verbal signal. Use a chime or a clap pattern. Move closer to the noise instead of shouting across the room.`,
            practicalExample: {
              title: "The Back-Wall Drill",
              scenario: "You lose your voice by Wednesday every week in a class of 55.",
              steps: [
                "Before school, do 3 minutes of lip trills and humming sirens",
                "In class, place a marker on the back wall and speak to it, not to the first bench",
                "Deliberately drop your pitch a note and slow your pace by 20 percent",
                "Replace three instances of raising your voice with a pause and a signal",
                "Track hoarseness daily for two weeks and compare",
              ],
              tips: [
                "Keep a water bottle on the desk and sip between activities",
                "Use a lightweight portable amplifier for large or outdoor sessions",
                "Silence is louder than shouting — practise standing still for five full seconds",
              ],
            },
            keyTakeaways: [
              "Projection comes from breath support, not from force",
              "A slightly lower pitch carries further and reads as authority",
              "Warm up, hydrate, and never clear your throat forcefully",
              "Pause and proximity beat volume for classroom control",
            ],
          },
        ],
      },
      {
        id: "vpt-m2",
        title: "Speaking Beyond the Classroom",
        description: "Assemblies, parent meetings and professional workshops",
        lessons: [
          {
            id: "vpt-m2-l1",
            title: "Structuring a Talk That People Remember",
            duration: "8 min",
            description: "A reliable structure and delivery checklist for assemblies, PTMs and teacher workshops.",
            content: `# Structuring a Talk That People Remember

## The One-Sentence Test

Before writing anything, complete: "If the audience remembers only one sentence, it should be ___." Everything else supports that sentence.

## The SOAR Structure

- **S — Story**: open with a 30-second concrete incident, not a definition
- **O — One idea**: state your single message plainly
- **A — Argument**: three supports, each with evidence or an example
- **R — Request**: end with a specific action, not "thank you"

## Delivery Checklist

- Plant your feet; stop pacing during key sentences
- One pause of two full seconds after your main message
- Look at three anchor faces — left, centre, right
- Cut your slide text by half, then half again
- Rehearse aloud standing up, at least twice, with a timer

## Handling Nerves

Nerves are arousal, not failure. Reframe "I'm anxious" as "I'm ready". Exhale longer than you inhale for one minute before you go on. Know your first two sentences by heart — that is where most speakers stumble.

## Parent Meetings Specifically

Lead with something specific and positive about the child, give one concrete area for growth, agree one action each for home and school, and close in writing.`,
            practicalExample: {
              title: "A Five-Minute Assembly Talk",
              scenario: "You have been asked to speak on exam stress at Monday assembly.",
              steps: [
                "Write the one sentence: 'Preparation, not panic, produces marks'",
                "Open with a 30-second story of a student who over-prepared and still panicked",
                "Give three supports: sleep, retrieval practice, and one honest conversation",
                "Close with a request: tonight, write tomorrow's three study goals",
                "Rehearse standing, aloud, twice, with a timer set to five minutes",
              ],
              tips: [
                "Never read from a script at assembly — use a five-word cue card",
                "Pause after your key line; silence signals importance",
                "Record yourself once — you will fix more in one viewing than in ten rehearsals",
              ],
            },
            keyTakeaways: [
              "One sentence carries the whole talk",
              "SOAR: Story, One idea, Argument, Request",
              "Cut slide text and rehearse standing up",
              "End with a specific action, not a thank-you",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "computational-thinking-unplugged",
    title: "Computational Thinking & Coding Unplugged",
    description: "Teach algorithmic thinking, decomposition, pattern recognition and debugging with paper, chalk and movement — no computer lab required.",
    longDescription: "NEP 2020 expects computational thinking from the middle years, but most schools lack a working computer lab. This course shows how to build genuine algorithmic thinking through unplugged activities, then transition smoothly to block coding and simple Python when devices are available.",
    category: "STEM & Computing",
    duration: "3 weeks",
    students: 1550,
    rating: 4.8,
    aiPowered: false,
    instructor: "Rahul Deshmukh",
    instructorBio: "Computer science educator who has trained 3,000+ teachers in unplugged computing for low-resource schools.",
    modules: [
      {
        id: "ctu-m1",
        title: "The Four Pillars, Unplugged",
        description: "Decomposition, patterns, abstraction and algorithms without devices",
        lessons: [
          {
            id: "ctu-m1-l1",
            title: "Algorithms With Chalk and Movement",
            duration: "9 min",
            description: "Build precise algorithmic thinking through human-robot games and everyday procedures.",
            content: `# Algorithms With Chalk and Movement

## The Four Pillars

- **Decomposition** — break a big problem into smaller parts
- **Pattern recognition** — notice what repeats
- **Abstraction** — ignore the irrelevant detail
- **Algorithm** — write precise, ordered steps

## The Human Robot

One student is the "robot" and obeys only exact instructions. Another student writes instructions to guide the robot from the door to the blackboard. Ambiguity produces comedy — and immediate learning about precision.

Extend with: FORWARD 3, TURN LEFT, REPEAT 4 TIMES. You have introduced loops without a screen.

## Everyday Algorithms

Ask students to write the algorithm for making tea, tying a shoelace, or the school's fire-drill procedure. Then have another group execute the written steps literally. Errors are the lesson.

## Debugging as a Habit

Introduce the vocabulary: a **bug** is a mistake in the instructions, not in the person. Debugging routine: read the steps aloud, run one step at a time, find the first step where reality diverges from expectation, fix, re-run.

## Grid Coding on the Floor

Chalk a 5x5 grid. Students write instruction cards to move a classmate from start to target while avoiding obstacles. Add conditionals: IF blocked THEN turn right.`,
            practicalExample: {
              title: "Human Robot, Class 6",
              scenario: "No lab, 45 minutes, 50 students.",
              steps: [
                "Chalk a 5x5 grid on the floor or the playground",
                "In teams of four, students write instruction cards to reach a target square",
                "Teams swap cards and run each other's programs literally",
                "Teams debug their own failed programs and note the first faulty step",
                "Introduce REPEAT to shorten the longest program and compare lengths",
              ],
              tips: [
                "Celebrate bugs — they are the richest teaching moment",
                "Keep instruction vocabulary tiny at first: FORWARD, LEFT, RIGHT",
                "Ask the shortest correct program to win, which teaches efficiency",
              ],
            },
            keyTakeaways: [
              "Computational thinking needs precision, not computers",
              "Loops and conditionals can be taught with chalk and movement",
              "Bugs are in the instructions, never in the child",
              "Shortest correct solution introduces efficiency naturally",
            ],
          },
        ],
      },
      {
        id: "ctu-m2",
        title: "From Unplugged to Screen",
        description: "Transition to block coding and first Python",
        lessons: [
          {
            id: "ctu-m2-l1",
            title: "Block Coding and a Gentle First Python",
            duration: "9 min",
            description: "Move students from paper algorithms to Scratch and then to their first ten lines of Python.",
            content: `# Block Coding and a Gentle First Python

## Sequence the Transition

Unplugged algorithm → block coding (Scratch or Blockly) → text code (Python). Skipping steps produces syntax panic and disengagement.

## Block Coding in Practice

Scratch runs offline once installed, so a single shared laptop can serve a class through rotation. Good first projects: a dialogue between two sprites, a maze game using conditionals, a quiz that keeps score.

## Managing One Device Per Group

Assign roles that rotate every 10 minutes: Driver (types), Navigator (reads the plan), Tester (finds bugs), Recorder (writes what worked). Everyone codes; nobody spectates.

## First Python in Ten Lines

Start with output, input, a variable and a loop. Nothing else.

\`\`\`python
name = input("Your name: ")
print("Namaste,", name)
for i in range(1, 11):
    print(name, "x", i, "=", i * 3)
\`\`\`

Have students modify one number and predict the output before running. Prediction before execution is where the learning happens.

## Assessment

Assess the plan and the debugging log, not just the working program. A well-reasoned failed attempt shows more thinking than a copied success.`,
            practicalExample: {
              title: "One Laptop, Forty Students",
              scenario: "Your school has four working computers for a class of 40.",
              steps: [
                "Students design their program on paper in groups of four before touching a device",
                "Each group gets a 10-minute device slot to enter and test the program",
                "Roles rotate every few minutes so all four students type",
                "Groups not on a device debug printed code from another group",
                "End with two groups demonstrating and explaining one bug they fixed",
              ],
              tips: [
                "Paper-first planning triples the value of scarce device time",
                "Keep a printed cheat sheet of the five commands you use",
                "Prediction before running turns every run into an experiment",
              ],
            },
            keyTakeaways: [
              "Sequence unplugged, then blocks, then text code",
              "Rotating roles ensure every student codes on shared devices",
              "Ten lines of Python are enough for a first success",
              "Assess planning and debugging, not just the final output",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "teacher-portfolio-growth",
    title: "Professional Growth: Portfolio, Research & Micro-Credentials",
    description: "Build a documented teaching portfolio, run small classroom action-research projects, and use micro-credentials to advance your career and appraisal outcomes.",
    longDescription: "Great teaching often goes unrecorded, and unrecorded work rarely earns promotion. This course shows how to build an evidence-based teaching portfolio, run a rigorous but small action-research cycle in your own classroom, write it up, and stack micro-credentials into a credible professional profile.",
    category: "Career Development",
    duration: "3 weeks",
    students: 1330,
    rating: 4.8,
    aiPowered: false,
    instructor: "Dr. Anjali Verma",
    instructorBio: "Teacher-educator and appraisal consultant who has mentored 500+ teachers through portfolio building and classroom action research.",
    modules: [
      {
        id: "tpg-m1",
        title: "The Evidence-Based Teaching Portfolio",
        description: "Document your impact so it can be recognised",
        lessons: [
          {
            id: "tpg-m1-l1",
            title: "Building a Portfolio That Earns Promotion",
            duration: "9 min",
            description: "What to collect, how to organise it, and how to present evidence of impact rather than activity.",
            content: `# Building a Portfolio That Earns Promotion

## Activity Is Not Impact

"Conducted 12 remedial classes" is activity. "Remedial group's mean score moved from 34% to 58% across the term, with attendance above 85%" is impact. Appraisals reward the second.

## The Six Sections

1. **Teaching philosophy** — one page, specific, honest
2. **Evidence of student learning** — before/after data, work samples, assessment analysis
3. **Lesson and unit design** — two or three of your strongest plans with reflection
4. **Feedback** — student surveys, peer observation notes, parent comments
5. **Professional learning** — courses, certificates, workshops with what changed in practice
6. **Contribution** — clubs, mentoring, committee work, resources shared with colleagues

## The Five-Minute Weekly Habit

Every Friday, drop one artefact into a dated folder: a photo, a data point, a student note, a plan that worked. Ten minutes a month of curation beats a panicked week before appraisal.

## Presenting It

Lead each section with a one-line claim, then the evidence. Keep a two-page summary version for interviews and the full folder for detailed review. Anonymise student names and get consent before using photographs.`,
            practicalExample: {
              title: "From Zero to Portfolio in Six Weeks",
              scenario: "Appraisal is in two months and you have no documentation.",
              steps: [
                "Create six folders matching the six sections",
                "Week 1: write the one-page philosophy and collect existing certificates",
                "Weeks 2-3: pull assessment data for one class and chart the change",
                "Week 4: run a short anonymous student feedback survey",
                "Weeks 5-6: pick your two best units, write a paragraph of reflection each, and build the two-page summary",
              ],
              tips: [
                "One claim, one piece of evidence — avoid padding",
                "Charts beat paragraphs for showing growth",
                "Ask a colleague to observe one lesson and write three lines",
              ],
            },
            keyTakeaways: [
              "Evidence of impact outperforms lists of activity",
              "Six clear sections make a portfolio readable",
              "A weekly five-minute habit removes appraisal panic",
              "Always anonymise student data and seek consent for photos",
            ],
          },
        ],
      },
      {
        id: "tpg-m2",
        title: "Classroom Action Research",
        description: "Test one change rigorously and write it up",
        lessons: [
          {
            id: "tpg-m2-l1",
            title: "Running a Small Action-Research Cycle",
            duration: "9 min",
            description: "Ask one question, change one thing, measure honestly, and publish your findings.",
            content: `# Running a Small Action-Research Cycle

## The Cycle

**Question → Baseline → Intervention → Measure → Reflect → Share**

Keep it small. One class, one question, one change, six weeks.

## Writing a Researchable Question

Weak: "How can I improve my teaching?"
Strong: "Does a two-minute retrieval quiz at the start of every period improve Class 8 unit-test scores compared with the previous unit?"

A strong question names the class, the change and the measure.

## Collecting Honest Evidence

- Quantitative: test scores, error counts, homework submission rates, attendance
- Qualitative: student comments, your observation notes, work samples
- Triangulate: two sources minimum before you believe a result

## Guarding Against Fooling Yourself

Compare with a baseline, not with your memory. Watch for the novelty effect — anything new works for two weeks. Note confounds honestly: an exam week, a festival break, a change of timetable.

## Sharing the Work

Write two pages: context, question, what I did, what happened, what I would change. Present at a staff meeting, submit to a teacher conference, or publish on a teacher network. Shared research is the fastest route to professional reputation.`,
            practicalExample: {
              title: "Does Retrieval Practice Improve Retention?",
              scenario: "You want evidence before adopting a new routine across all your classes.",
              steps: [
                "Record baseline: last unit-test mean and distribution for Class 8",
                "For six weeks, open every period with a two-minute, ungraded retrieval quiz",
                "Keep everything else the same — same syllabus pace, same homework load",
                "Compare the new unit-test mean, and collect five student comments",
                "Write two pages including confounds, and present it at the staff meeting",
              ],
              tips: [
                "Change only one variable or you will not know what worked",
                "Six weeks is long enough to outlast the novelty effect",
                "Report honestly even when the result is negative — that is real research",
              ],
            },
            keyTakeaways: [
              "One class, one question, one change, six weeks",
              "A strong question names class, change and measure",
              "Triangulate at least two evidence sources",
              "Sharing findings builds professional reputation faster than anything else",
            ],
          },
        ],
      },
    ],
  },
];
