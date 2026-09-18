// Caleb Pius — Studio Content
// =====================================================================
// This is the ONE content file for the portfolio.
//
// UPDATE HABIT:
// 1. Add a project, milestone, skill change, or log entry here.
// 2. Put new build-log entries at the TOP (newest first).
// 3. Commit and push. Git history becomes part of the portfolio story.
//
// IMPORTANT: Only write what is true. "Evidence" explains where a tool
// was used, so skills never become empty claims or fake percentages.
// Do not put API keys, passwords, private client details, or personal
// information you do not want public in this file.
// =====================================================================

const SITE_DATA = {
  currentFocus: {
    signal: "CURRENTLY LEARNING",
    focus: "Python",
    description: "Building consistency with Python while learning AI engineering fundamentals through hands-on practice.",
    updated: "September 2026"
  },

  // Keep the email as null until Caleb supplies a public portfolio email.
  contact: {
    email: null,
    github: "https://github.com/CalebPiusC",
    x: null
  },

  projects: [
    {
      number: "01",
      slug: "beacon",
      name: "Beacon",
      status: "DEMO-READY",
      category: "ANDROID PRODUCT",
      color: "#83A9E6",
      accent: "#E6B64A",
      visual: "TWO-SIDED MARKETPLACE",
      summary: "A peer-to-peer errand marketplace for OAU students.",
      problem: "Student errands need a clearer way to connect someone who needs help with someone available to run the task.",
      solution: "Beacon gives Task Posters and Runners separate account experiences, with in-app chat, a demo wallet, and escrow-style payment logic that holds money until work is done.",
      role: "Solo — concept, product design, branding, and build.",
      tools: ["Java", "Android Studio", "RecyclerView", "Fragments", "SharedPreferences"],
      lesson: "Building both sides of a marketplace made account roles, user trust, and small product decisions impossible to treat as an afterthought.",
      sourceLink: null,
      liveLink: null
    },
    {
      number: "02",
      slug: "unievents",
      name: "UniEvents",
      status: "STATUS UPDATE NEEDED",
      category: "CAMPUS WEB PLATFORM",
      color: "#D87866",
      accent: "#F0C274",
      visual: "EVENT → TICKET → CHECK-IN",
      summary: "An event-management and ticketing platform for university events.",
      problem: "Campus events need a single place for discovery, registration, organizer management, payments, and reliable entry checks.",
      solution: "Students browse and register for events, receive a unique QR ticket, and check in through the browser camera. Organizers manage events; an admin approves organizer applications. Paystack is used in test mode for a real payment flow without moving real money.",
      role: "Group 5 — led product, account, and platform decisions.",
      tools: ["HTML", "CSS", "JavaScript", "Firebase Authentication", "Firestore", "Paystack API", "Browser camera / QR scanning", "Netlify"],
      lesson: "A multi-role platform is as much about carefully defining permissions and scope as it is about writing features.",
      note: "The previously stated September 11, 2026 defense date has passed. Replace this status with the verified outcome before presenting it as current.",
      sourceLink: null,
      liveLink: null
    },
    {
      number: "03",
      slug: "local-automation",
      name: "Automation for local businesses",
      status: "ACTIVE",
      category: "CLIENT WORK / AUTOMATION",
      color: "#92AE8A",
      accent: "#D6C979",
      visual: "CAPTURE → ROUTE → FOLLOW UP",
      summary: "Lead-capture and follow-up systems for small OAU-area businesses.",
      problem: "Leads collected manually can be missed, copied into the wrong place, or left without a follow-up.",
      solution: "Make.com workflows move a lead from Google Forms into Notion and trigger follow-up communication automatically, reducing handoffs that were previously done by hand.",
      role: "Freelance / client automation work.",
      tools: ["Make.com", "Notion", "Google Forms", "Gmail", "WhatsApp Business API"],
      lesson: "A useful automation starts with understanding the real handoff—not simply connecting services because the connection is available.",
      sourceLink: null,
      liveLink: null
    },
    {
      number: "04",
      slug: "support-triage",
      name: "Customer Support Triage",
      status: "BUILT",
      category: "AI-ASSISTED WORKFLOW",
      color: "#8CBBC0",
      accent: "#D5B669",
      visual: "INBOX → TRIAGE → ALERT",
      summary: "Routes and triages incoming support email automatically.",
      problem: "A support inbox can leave important messages unread while low-priority noise reaches a human first.",
      solution: "The workflow watches Gmail, sends incoming messages to Claude for classification and summaries, logs results in Google Sheets, and posts a triaged Slack alert.",
      role: "Solo — no-code build.",
      tools: ["Gmail", "Claude / Anthropic API", "Google Sheets", "Slack", "Make.com"],
      lesson: "AI output becomes more useful when it is placed inside a reliable workflow with visible routing and a clear next action.",
      sourceLink: null,
      liveLink: null
    },
    {
      number: "05",
      slug: "leadbot",
      name: "LeadBot",
      status: "BUILT",
      category: "AI-ASSISTED WORKFLOW",
      color: "#C7A66A",
      accent: "#F0DFAD",
      visual: "INTAKE → QUALIFY → ROUTE",
      summary: "Qualifies inbound leads and routes them automatically.",
      problem: "Every lead should receive a consistent response, while teams need a quick way to focus on the right conversations.",
      solution: "A Google Form intake goes to Claude for lead qualification, logs every submission to a spreadsheet, then routes qualified leads to Slack for the team and Gmail for the lead.",
      role: "Solo — no-code build.",
      tools: ["Google Forms", "Claude / Anthropic API", "Google Sheets", "Slack", "Gmail", "Make.com"],
      lesson: "Qualification is not just an AI prompt; it is a system of inputs, decisions, records, and actions that needs to stay understandable.",
      sourceLink: null,
      liveLink: null
    }
  ],

  automationArchive: [
    {
      number: "A-01",
      title: "AI Lead Qualification",
      description: "An intake workflow that turns form responses into a logged qualification result and the right follow-up.",
      tools: ["Google Forms", "Make.com", "Claude / AI analysis", "Google Sheets", "Router", "Slack / Gmail"],
      focus: "Input design · classification · routing · notifications"
    },
    {
      number: "A-02",
      title: "AI Email Support",
      description: "An inbox workflow that classifies and summarizes messages before notifying the people who need to act.",
      tools: ["Gmail", "Make.com", "Claude / AI analysis", "Google Sheets", "Slack"],
      focus: "Inbox monitoring · triage · summaries · operational visibility"
    },
    {
      number: "A-03",
      title: "Scheduling + Reminder System",
      description: "A reported automation experiment for turning chat input into structured calendar events and reminders.",
      tools: ["Telegram", "AI information extraction", "Google Calendar", "Telegram reminders"],
      focus: "Natural language input · structured data · reminders"
    }
  ],

  journey: [
    {
      number: "01",
      phase: "FOUNDATIONS",
      title: "Starting before the coursework.",
      text: "Picked up programming ahead of the coursework, with Android and Java becoming the first real focus.",
      evidence: "Java · Android Studio"
    },
    {
      number: "02",
      phase: "PRODUCT BUILD",
      title: "Android, for real.",
      text: "Built Beacon end to end: distinct user roles, escrow-style payment thinking, in-app chat, and full brand decisions.",
      evidence: "Beacon · Java · Android"
    },
    {
      number: "03",
      phase: "WEB SYSTEMS",
      title: "Moving into platforms.",
      text: "Took on product, account, and platform decisions for UniEvents, including auth, payment flow, ticketing, and QR check-in.",
      evidence: "UniEvents · Firebase · Paystack"
    },
    {
      number: "04",
      phase: "AUTOMATION",
      title: "Building systems for others.",
      text: "Worked on local-business automation and AI-powered internal workflows, connecting tools into practical flows with real handoffs.",
      evidence: "Make.com · Claude · APIs"
    },
    {
      number: "05",
      phase: "CURRENT DIRECTION",
      title: "Building the Python habit.",
      text: "Practicing Python consistently while learning the foundations needed for a more serious AI engineering direction.",
      evidence: "Python · AI engineering fundamentals"
    }
  ],

  // Move a skill to a new group only when the evidence has changed.
  toolbox: [
    {
      title: "BUILDING WITH",
      description: "Tools used in substantial project or workflow work.",
      tools: [
        { name: "HTML / CSS / JavaScript", evidence: "UniEvents and this portfolio" },
        { name: "Java / Android Studio", evidence: "Beacon" },
        { name: "Firebase Authentication / Firestore", evidence: "UniEvents" },
        { name: "Make.com", evidence: "Business and AI-assisted workflows" },
        { name: "Git / GitHub", evidence: "Public project and learning history" }
      ]
    },
    {
      title: "WORKED WITH",
      description: "Tools used in named features, products, or integrations.",
      tools: [
        { name: "RecyclerView / Fragments / SharedPreferences", evidence: "Beacon" },
        { name: "Paystack API", evidence: "UniEvents test payment flow" },
        { name: "Google Forms / Sheets / Gmail / Slack", evidence: "Lead and support automation" },
        { name: "Notion / WhatsApp Business API", evidence: "Local-business automation" },
        { name: "Netlify / browser QR scanning", evidence: "UniEvents" }
      ]
    },
    {
      title: "EXPERIMENTING WITH",
      description: "Tools and systems explored through automation work and experiments.",
      tools: [
        { name: "Claude / Anthropic API", evidence: "Triage and qualification workflows" },
        { name: "APIs / webhooks / routing", evidence: "Automation system design" },
        { name: "Telegram / Google Calendar", evidence: "Scheduling and reminder experiment" },
        { name: "Kotlin", evidence: "Reported mobile-stack experience; project scope to document next" }
      ]
    },
    {
      title: "LEARNING NOW",
      description: "The current deliberate practice direction.",
      tools: [
        { name: "Python", evidence: "Daily learning journey", link: "https://github.com/CalebPiusC/python-ai-journey" },
        { name: "AI engineering fundamentals", evidence: "Current learning focus" },
        { name: "VS Code", evidence: "Daily development tool" }
      ]
    }
  ],

  about: [
    "I’m Caleb Pius, a Software Engineering student at Obafemi Awolowo University in Ile-Ife, Nigeria.",
    "I learn best by making things real: applications, workflows, experiments, and small systems that make me understand how the pieces connect.",
    "I’m early in the journey, but I care about building carefully, documenting what I learn, and turning each project into a stronger foundation for the next one. This studio is the record of that process."
  ],

  // Add the next log object at the TOP. Use YYYY-MM-DD for reliable sorting.
  buildLog: [
    { date: "2026-09-18", tag: "DECISION", text: "Set the next portfolio direction: a living digital studio built around projects, systems, and visible progression." },
    { date: "2026-09-09", tag: "PLANNING", text: "Planned the portfolio as a running build log rather than a static about page." },
    { date: "2026-09-06", tag: "PRODUCT", text: "Locked the account and role design plus QR-ticket check-in flow for UniEvents." },
    { date: "2026-09-01", tag: "LEARNING", text: "Started consistent Python practice as a first real step toward the AI engineering track." }
  ]
};
