# Caleb Pius — building as VENOM

Personal portfolio of **Caleb Pius**, Software Engineering student at Obafemi Awolowo University, building toward **machine learning engineering**.

**Identity:** Caleb → building as VENOM.  
**Philosophy:** BUILD. LEARN. EVOLVE.

This is **not** a company, not a Marvel/Venom-themed site. VENOM is simply Caleb's personal building identity — a space where he experiments, breaks things, learns, and turns ideas into working systems.

## Visual direction

- **Palette:** Copper `#C87533` (accent), Dark base `#11100E`, Secondary dark brown `#30251D`, Muted warm grey `#9A9187`, Warm ivory `#F1E9DE`
- Copper used only for active states, important lines, nodes, arrows, interaction, selected elements, subtle highlights — not dominant
- **Typography:** Fraunces (display — VENOM, major headings, BUILD. LEARN. EVOLVE.), Inter (body), JetBrains Mono (section numbers, technical labels, annotations, statuses, metadata)
- **Language:** technical + experimental + human + editorial — neural pathways, nodes, directional arrows, annotations, technical labels, subtle data references, structured typography, organic snake-like geometry, controlled asymmetry, deliberate whitespace, full-screen canvas
- **Canvas:** 85–90% viewport width on desktop, intentionally uses available space, designed for mobile → laptop → desktop → ultrawide

## Brand mark

Continuous neural snake vector mark — abstract, minimal, memorable, professional, technically inspired. Integrates neural-network nodes, connected pathways, data-flow geometry. Works at small sizes as primary site icon. Not a literal cartoon snake, not Python logo.

## Structure — single-page experience

No page loading between sections. Smooth scroll through one continuous environment:

1. **HERO** — identity reveal: Hi, I'm Caleb Pius. → but I build as → VENOM → BUILD. LEARN. EVOLVE. → Building toward ML engineering → CTAs → tool row
2. **WORK** — 01 / WORK — THINGS I'VE BUILT. Real projects, experiments, systems — including things that didn't work. Status: BUILDING / EXPERIMENT / ARCHIVED / COMPLETED
3. **JOURNEY** — 02 / JOURNEY — neural/snake-like pathway START → PYTHON → BUILDING → AUTOMATION → AI → ML → NEXT, nodes activate, pathway draws itself
4. **LAB** — 03 / LAB — digital workbench, experiments with WHAT? WHY? RESULT? statuses EXPERIMENTING / RUNNING / TESTING / PAUSED
5. **ABOUT** — 04 / ABOUT — THE PERSON BEHIND THE BUILD. Human and honest, metadata EDUCATION → UNIVERSITY → FOCUS → CURRENTLY → STATUS, annotation → NOT AN EXPERT. STILL BUILDING.
6. **CONTACT** — 05 / CONTACT — HAVE AN IDEA? LET'S BUILD SOMETHING. CTA LET'S COLLABORATE ↗, small horizontal contact icons
7. **FOOTER** — minimal VENOM / BUILD. LEARN. EVOLVE. / © 2026 / ↑ BACK TO TOP

## Animation philosophy

Every major section has unique entrance animation (300–600ms) when entering viewport. Fast, purposeful, coordinated. Scroll → elements respond → assemble → continue. No waiting. Target 300–600ms. Elements enter quick succession: heading, supporting text, visual, annotations, background details. No generic fade-in for every section.

- Hero: text assembles, neural snake forms from nodes/pathways, VENOM focal point
- Work: projects reveal/expose
- Journey: pathway draws, nodes activate, info beside relevant node
- Lab: elements connect, rearrange, reveal
- About: restrained, typography settles
- Contact: elements converge toward CTA

Respects `prefers-reduced-motion`.

## Header

Left: neural snake icon + VENOM  
Middle: WORK · JOURNEY · LAB · ABOUT with active dot indicator (dot becomes copper, slightly larger, subtle pulse)  
Next: prominent CONTACT  
Far right: GitHub

No giant MENU on desktop, no excessive glassmorphism. Becomes slightly more compact after scroll. No scroll progress bar.

Mobile: [ SNAKE ] [ ACTIVE SECTION ] [ MENU ] → WORK / JOURNEY / LAB / ABOUT / CONTACT ↗ / GITHUB

## Tool row

Horizontal row below hero CTAs. Clean consistent vector icons. Only tools genuinely used: Python, Git, GitHub, Flask, Flutter, Firebase, Make, Gemini, APIs. Muted grey default, copper accent on hover + clearer label. No skill percentages.

## Content honesty

Portfolio of someone actively learning and building. No exaggerated experience, no invented clients, achievements, skills, projects, statistics, certifications, testimonials, professional experience, contact info. If not supplied, placeholder or leave out. Communicates **in progress**, not **already finished**.

## Tech stack

- Plain HTML, CSS, JavaScript (no framework)
- Single page, no loading screens between sections
- Data separate from rendering: `data/projects.js`, `data/journey.js`, `data/lab.js`, `data/toolbox.js`, `data/currently.js`
- GitHub contributions API for real activity (github.com/PusCaleb with fallback to CalebPiusC)
- Performance prioritized: fast → responsive → polished → expressive

## Local preview

```bash
python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```

## Deployment

Plain static site. Deploy via GitHub Pages from `main` branch root.

## Directional annotation system

- arrow = directs attention (→ KEEP GOING, WHY →, NEXT →)
- line = connects things
- number = provides structure (01 / WORK)
- node = represents something
- animation = communicates state or interaction

Every annotation must have purpose. No random technical text to look complex.

## Final principle

One continuous experience: WHO I AM → WHAT I'VE BUILT → HOW I GOT HERE → WHAT I'M EXPLORING → WHO IS BEHIND IT → HOW TO REACH ME

Connected through VENOM, neural snake, copper, annotations, pathways, nodes, purposeful motion, BUILD. LEARN. EVOLVE.
