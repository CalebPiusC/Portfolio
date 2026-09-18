/*
  Caleb Pius — Studio source of truth
  ====================================================================
  Edit content here, not across many page files. A project owns its
  status, technologies, evidence, case-study text, and links once.

  Evidence levels:
  - github: source/artifact inspected in the public repository
  - owner-confirmed: Caleb explicitly confirmed it in conversation
  - needs-verification: mentioned, but waiting for source, screenshots,
    documentation, or a more precise confirmation

  Never store credentials, private client names, tokens, or private
  workflow data here. This file is intended for a public website.
*/

export const STUDIO_DATA = {
  site: {
    name: "Caleb Pius",
    role: "Software Engineering Student @ OAU",
    location: "OAU · NIGERIA",
    github: "https://github.com/CalebPiusC",
    repositoryLinkPolicy:
      "Only python-ai-journey is currently approved as a public source link.",
  },

  current: {
    learning: "Python fundamentals",
    building: "Personal Coding Companion",
    exploring: "AI / ML engineering",
    updated: "September 2026",
    // This points to one project record. Its status is not repeated here.
    projectId: "personal-coding-companion",
  },

  projects: [
    {
      id: "unievents",
      number: "01",
      name: "UniEvents",
      category: "UNIVERSITY EVENT SYSTEM",
      status: "archived",
      statusLabel: "COMPLETED COURSEWORK",
      featured: true,
      evidence: {
        level: "github + owner-confirmed",
        summary:
          "Public source repository inspected; Caleb confirmed this school project is completed.",
        repository: "https://github.com/CalebPiusC/UniEvents",
      },
      technologies: [
        "html",
        "css",
        "javascript",
        "firebase-auth",
        "firestore",
        "firestore-rules",
        "paystack-inline",
        "qrcode-generator",
        "html5-qrcode",
        "netlify-config",
        "firebase-hosting-config",
      ],
      skills: [
        "web-ui",
        "role-based-flows",
        "database-integration",
        "test-payment-integration",
        "qr-ticketing",
      ],
      visual: "EVENT → TICKET → CHECK-IN",
      contextLine: "CAMPUS EVENTS, WITHOUT THE CHAOS.",
      color: "#d57c65",
      accent: "#efc071",
      summary:
        "A completed OAU coursework platform for browsing, registering for, and managing university events.",
      concept:
        "A campus event system that brings event discovery, registration, organizer tools, ticketing, and door check-in into one project.",
      problem:
        "University events need a clearer path from discovering an event to registering, receiving a ticket, and checking attendees in at the venue.",
      solution:
        "The project includes student and organizer flows, Firebase-backed accounts and events, QR tickets, browser-camera scanning, organizer applications, and Paystack test checkout for paid tickets.",
      architecture:
        "Static HTML, CSS, and JavaScript pages use Firebase Authentication and Cloud Firestore. QR tickets are generated in the browser and scanned through html5-qrcode. Paystack Inline handles test checkout on the client.",
      role: "Group 5 coursework project — Caleb led product, account, and platform decisions.",
      challenges:
        "Role boundaries, ticket registration flows, responsive interfaces, and keeping the payment flow honest about its test-only client-side limitations.",
      learned:
        "Multi-role systems need clear permissions and deliberate scope. A feature is only useful when its account rules, data flow, and fallback states are considered too.",
      currentStatus:
        "Completed coursework project. The public repository documents setup and deployment options, but no verified public deployment or server-side payment verification is currently presented.",
      links: [],
    },
    {
      id: "scicalc",
      number: "02",
      name: "SciCalc",
      category: "ANDROID SCHOOL PROJECT",
      status: "archived",
      statusLabel: "COMPLETED COURSEWORK",
      featured: true,
      evidence: {
        level: "github artifact + owner-confirmed",
        summary:
          "Public repository contains debug/release APK artifacts; Caleb confirmed this school project is completed. Source code is not yet available in the repository.",
        repository: "https://github.com/CalebPiusC/SciCalc",
      },
      technologies: ["android-app"],
      skills: ["android-ui"],
      visual: "BASIC + SCIENTIFIC",
      contextLine: "BASIC WHEN IT NEEDS TO BE. SCIENTIFIC WHEN IT HAS TO BE.",
      color: "#8fa99b",
      accent: "#d7ca85",
      summary:
        "A completed Android school calculator project with basic and scientific calculator screens evidenced in the packaged application.",
      concept:
        "A calculator application designed around both basic and scientific calculation modes.",
      problem:
        "A school project for implementing a usable Android calculator interface and navigation between calculator modes.",
      solution:
        "The published APK includes resources for basic and scientific calculator activities plus a calculator fragment/screen structure.",
      architecture:
        "The public repository currently contains compiled APK artifacts rather than source code. It confirms an Android application build, but does not yet expose a Gradle setup, source files, or the full implementation architecture.",
      role: "School project — completed, per Caleb’s confirmation.",
      challenges:
        "Source history and technical implementation details are not currently available in the public repository.",
      learned:
        "The archive should preserve the project without inventing its language, libraries, or feature set from a compiled artifact alone.",
      currentStatus:
        "Completed coursework project. Keep it archived until source code, screenshots, or a clearer technical record is supplied.",
      links: [],
    },
    {
      id: "personal-coding-companion",
      number: "03",
      name: "Personal Coding Companion",
      category: "PERSONAL AI COMPANION",
      status: "needs-verification",
      statusLabel: "NEEDS VERIFICATION",
      featured: true,
      evidence: {
        level: "owner-described",
        summary:
          "Caleb described the current direction as a personal coding companion. A public repository has not yet been located for audit.",
        repository: null,
      },
      technologies: [],
      skills: [],
      visual: "PERSONAL / CODING / COMPANION",
      contextLine: "A PERSONAL SYSTEM FOR CODING BETTER.",
      color: "#b34f45",
      accent: "#e4a191",
      summary:
        "A current personal coding-companion direction awaiting source review and a verified technical description.",
      concept:
        "A personal coding companion—scope, architecture, and implementation details will be documented from the actual project rather than assumed.",
      problem:
        "Needs a verified project brief before a public problem statement is written.",
      solution:
        "Needs a repository or project documentation before a public solution statement is written.",
      architecture:
        "Pending repository access. Python, Gemini API, Flask, voice processing, and web UI are not claimed here until the source confirms them.",
      role: "Personal project direction.",
      challenges: "Evidence review is still pending.",
      learned:
        "The studio records work in progress honestly: a compelling idea can be visible without inventing an implementation.",
      currentStatus:
        "Needs repository access or a project record before it receives a technology list, build tiers, screenshots, or a stronger status.",
      links: [],
    },
    {
      id: "beacon",
      number: "04",
      name: "OAU Beacon",
      category: "STUDENT ERRAND MARKETPLACE",
      status: "needs-verification",
      statusLabel: "NEEDS VERIFICATION",
      featured: false,
      evidence: {
        level: "owner-described",
        summary:
          "Previously described as a student errand marketplace. No public repository or project artifact was located in the audited account.",
        repository: null,
      },
      technologies: [],
      skills: [],
      visual: "POST → ACCEPT → COMPLETE",
      contextLine: "ERRANDS, MATCHED LOCALLY.",
      color: "#7e9ed5",
      accent: "#e0b761",
      summary:
        "Reported student errand-marketplace work awaiting an auditable project record.",
      concept: "Pending verification.",
      problem: "Pending verification.",
      solution: "Pending verification.",
      architecture: "Pending verification.",
      role: "Pending verification.",
      challenges: "Pending verification.",
      learned: "Pending verification.",
      currentStatus:
        "Do not promote this exhibit until Caleb supplies a source repository, screenshots, or a confirmed current project record.",
      links: [],
    },
    {
      id: "cadence-study",
      number: "05",
      name: "Cadence Study",
      category: "STUDENT LEARNING APP",
      status: "concept",
      statusLabel: "CONCEPT / EARLY EXPLORATION",
      featured: false,
      evidence: {
        level: "owner-described",
        summary:
          "Reported as a JAMB/student learning-app concept with Flutter exploration. No implementation evidence has been supplied for audit.",
        repository: null,
      },
      technologies: [],
      skills: [],
      visual: "LEARN → PRACTICE → PROGRESS",
      contextLine: "A STUDY SYSTEM STILL WAITING FOR ITS RECORD.",
      color: "#a27fbb",
      accent: "#d6badf",
      summary:
        "A reported student-learning application concept waiting for a project record before it becomes a full studio exhibit.",
      concept: "Pending verification.",
      problem: "Pending verification.",
      solution: "Pending verification.",
      architecture: "Pending verification.",
      role: "Pending verification.",
      challenges: "Pending verification.",
      learned: "Pending verification.",
      currentStatus:
        "Concept / early exploration. Keep this record in the Studio Archive until an implementation or updated direction is confirmed.",
      links: [],
    },
  ],

  automations: [
    {
      id: "support-triage",
      number: "A-01",
      name: "Customer Support Triage Bot",
      status: "needs-verification",
      statusLabel: "REPORTED BUILD / NEEDS EVIDENCE",
      evidence:
        "Described in conversation; no public workflow export, documentation, or repository has been supplied for audit.",
      description:
        "Reported workflow for classifying and routing incoming support email before it reaches a person.",
      steps: [
        "Gmail trigger",
        "AI classification",
        "Summary / parser",
        "Router",
        "Sheet log + Slack alert",
      ],
      technologies: [],
      skills: [],
    },
    {
      id: "leadbot",
      number: "A-02",
      name: "LeadBot",
      status: "needs-verification",
      statusLabel: "REPORTED BUILD / NEEDS EVIDENCE",
      evidence:
        "Described in conversation; no public workflow export, documentation, or repository has been supplied for audit.",
      description:
        "Reported workflow for qualifying inbound form leads and routing the right follow-up.",
      steps: [
        "Google Forms",
        "AI qualification",
        "Spreadsheet log",
        "Router",
        "Slack + Gmail",
      ],
      technologies: [],
      skills: [],
    },
    {
      id: "scheduling-reminders",
      number: "A-03",
      name: "Scheduling + Reminder System",
      status: "needs-verification",
      statusLabel: "REPORTED EXPERIMENT / NEEDS EVIDENCE",
      evidence:
        "Mentioned as an automation example; exact workflow and completion status remain unverified.",
      description:
        "Reported experiment for turning chat input into calendar events and Telegram reminders.",
      steps: [
        "Telegram",
        "AI extraction",
        "Google Calendar",
        "Reminder",
        "Telegram output",
      ],
      technologies: [],
      skills: [],
    },
  ],

  // Every Toolbox node references this registry. Project connection counts
  // are CALCULATED from projects[].technologies, never typed by hand.
  technologies: [
    { id: "html", name: "HTML", type: "web", state: "worked-with" },
    { id: "css", name: "CSS", type: "web", state: "worked-with" },
    { id: "javascript", name: "JavaScript", type: "web", state: "worked-with" },
    {
      id: "firebase-auth",
      name: "Firebase Auth",
      type: "service",
      state: "worked-with",
    },
    {
      id: "firestore",
      name: "Cloud Firestore",
      type: "service",
      state: "worked-with",
    },
    {
      id: "firestore-rules",
      name: "Firestore Rules",
      type: "service",
      state: "worked-with",
    },
    {
      id: "paystack-inline",
      name: "Paystack Inline",
      type: "api",
      state: "worked-with",
    },
    {
      id: "qrcode-generator",
      name: "QR Code Generator",
      type: "library",
      state: "worked-with",
    },
    {
      id: "html5-qrcode",
      name: "html5-qrcode",
      type: "library",
      state: "worked-with",
    },
    {
      id: "netlify-config",
      name: "Netlify Config",
      type: "deployment",
      state: "worked-with",
    },
    {
      id: "firebase-hosting-config",
      name: "Firebase Hosting Config",
      type: "deployment",
      state: "worked-with",
    },
    {
      id: "android-app",
      name: "Android App",
      type: "mobile",
      state: "worked-with",
    },
    {
      id: "python",
      name: "Python",
      type: "language",
      state: "currently-learning",
      learningEvidence: "Public python-ai-journey learning record",
      sourceLink: "https://github.com/CalebPiusC/python-ai-journey",
    },
    {
      id: "git-github",
      name: "Git + GitHub",
      type: "tool",
      state: "worked-with",
      learningEvidence: "Public repository history",
    },
  ],

  skills: [
    { id: "web-ui", name: "Web interface implementation" },
    { id: "role-based-flows", name: "Role-based user flows" },
    { id: "database-integration", name: "Client-side database integration" },
    { id: "test-payment-integration", name: "Test payment-flow integration" },
    { id: "qr-ticketing", name: "QR ticket generation and check-in" },
    { id: "android-ui", name: "Android interface implementation" },
  ],

  journey: [
    {
      date: "2026-06-23",
      type: "BUILDING",
      title: "SciCalc artifact recorded.",
      text: "The public repository’s first activity includes a packaged Android calculator application. Caleb confirms it as completed coursework.",
      projectId: "scicalc",
    },
    {
      date: "2026-09-03",
      type: "LEARNING",
      title: "Python learning record begins.",
      text: "A public python-ai-journey repository begins with variables, data types, and type inspection practice.",
      projectId: null,
    },
    {
      date: "2026-09-07",
      type: "BUILDING",
      title: "UniEvents source record completed.",
      text: "The public project includes event discovery, registration, role flows, QR tickets, scan support, and test checkout implementation.",
      projectId: "unievents",
    },
    {
      date: "2026-09-18",
      type: "EXPERIMENTING",
      title: "Personal Coding Companion enters the studio record.",
      text: "The direction is documented, while the underlying repository and implementation are awaiting review.",
      projectId: "personal-coding-companion",
    },
  ],

  buildLog: [
    {
      date: "2026-09-18",
      type: "DECISION",
      text: "Approved a new architectural studio direction: projects, evidence, and evolution over a static résumé.",
      projectId: null,
    },
    {
      date: "2026-09-18",
      type: "AUDIT",
      text: "Confirmed CalebPiusC as the correct GitHub account; marked the Personal Coding Companion for source review before technical claims are added.",
      projectId: "personal-coding-companion",
    },
    {
      date: "2026-09-07",
      type: "BUILDING",
      text: "UniEvents public source history records responsive work, QR flows, deployment configuration, and a completed coursework project state.",
      projectId: "unievents",
    },
    {
      date: "2026-09-03",
      type: "LEARNING",
      text: "Created the public Python learning record and began documenting Python fundamentals in code.",
      projectId: null,
    },
  ],

  about: [
    "I’m Caleb Pius, a Software Engineering student at Obafemi Awolowo University, Nigeria.",
    "I learn by making things real: interfaces, Android applications, web systems, workflow experiments, and technical records that force me to understand how the parts connect.",
    "I’m still building my foundation. This studio keeps that visible—the completed coursework, the work waiting for evidence, the Python practice, and the next personal system taking shape.",
  ],
};
