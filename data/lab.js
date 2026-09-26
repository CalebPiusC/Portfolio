export const LAB = [
  {
    id: "prompt-system",
    title: "Prompt Routing System",
    what: "Testing how to route different types of prompts to different models based on intent.",
    why: "To understand if a small router can save cost and improve response quality.",
    result: "Early tests show simple keyword routing works 70% of the time. Needs better classification.",
    status: "EXPERIMENTING",
    tools: ["Python", "Gemini", "APIs"]
  },
  {
    id: "event-qr",
    title: "QR Ticket Validation Flow",
    what: "Built a QR generation + scanning flow for campus events using html5-qrcode.",
    why: "Needed offline-capable validation for UniEvents without expensive hardware.",
    result: "Works on mid-range Android devices. Struggles in low light. Archived as part of UniEvents.",
    status: "COMPLETED",
    tools: ["JavaScript", "QR", "Firebase"]
  },
  {
    id: "make-automation",
    title: "GitHub → Notion Sync",
    what: "Automation that watches GitHub commits and creates log entries in Notion.",
    why: "To reduce manual logging and keep a build journal automatically.",
    result: "Running. Sometimes duplicates entries when force-pushing. Testing filters.",
    status: "RUNNING",
    tools: ["Make.com", "GitHub API", "Notion API"]
  },
  {
    id: "flask-api",
    title: "Micro API for Notes",
    what: "Tiny Flask API that stores and retrieves learning notes as JSON.",
    why: "To practice backend fundamentals before moving to larger systems.",
    result: "Built and tested locally. Not deployed yet. Paused while focusing on Python fundamentals.",
    status: "PAUSED",
    tools: ["Python", "Flask", "Git"]
  },
  {
    id: "flutter-ui",
    title: "Flutter UI Experiments",
    what: "Rebuilding SciCalc UI in Flutter to compare with native Android.",
    why: "To see if Flutter speeds up prototyping for small tools.",
    result: "UI built, logic partially ported. Feels faster to iterate than native Android.",
    status: "TESTING",
    tools: ["Flutter", "Dart", "Git"]
  }
];
