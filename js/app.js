/*
  Working Studio application
  ====================================================================
  This is framework-free on purpose. Pages tell this module which room
  to render through <main data-page="...">. All changing content comes
  from ../data/studio-data.js, so a status or technology is never copied
  into five different HTML files.
*/

import { STUDIO_DATA } from "../data/studio-data.js";

const data = STUDIO_DATA;
const main = document.querySelector("main[data-page]");
const page = main?.dataset.page || "home";
const siteRoot = new URL("../", import.meta.url);
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

init();

function init() {
  renderShell();
  renderPage();
  initMenu();
  initTerminal();
  initReveals();
  initPipeline();
  initToolboxPhysics();
  if (page === "home") initBootSequence();
}

/* ---------- Shared shell ---------- */
function renderShell() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const terminal = document.getElementById("terminal-root");

  if (header) {
    header.innerHTML = `
      <nav class="nav shell" aria-label="Studio navigation">
        <a class="wordmark" href="${siteUrl("")}" aria-label="Caleb Pius Working Studio home">
          <span class="wordmark-mark" aria-hidden="true">CP</span>
          <span>CALEB PIUS</span>
        </a>
        <button class="menu-button" id="menu-button" type="button" aria-controls="nav-links" aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button>
        <div class="nav-links" id="nav-links">
          <a href="${siteUrl("work/")}">WORK</a>
          <a href="${siteUrl("automation/")}">AUTOMATION</a>
          <a href="${siteUrl("journey/")}">JOURNEY</a>
          <a href="${siteUrl("toolbox/")}">TOOLBOX</a>
          <a href="${siteUrl("log/")}">LOG</a>
          <a href="${siteUrl("about/")}">ABOUT</a>
          <a class="nav-github" href="${data.site.github}" target="_blank" rel="noopener">GITHUB ↗</a>
        </div>
      </nav>`;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner shell technical">
        <div><span>CALEB PIUS</span><span>SOFTWARE ENGINEERING STUDENT · OAU · NIGERIA</span></div>
        <button class="console-trigger" type="button" data-open-terminal>OPEN SYSTEM CONSOLE / ~</button>
        <div><span>© ${new Date().getFullYear()} CALEB PIUS</span><a href="${siteUrl("")}">RETURN TO ENTRY ↑</a></div>
      </div>`;
  }

  if (terminal) {
    terminal.innerHTML = `
      <dialog class="terminal" id="terminal-dialog" aria-labelledby="terminal-title">
        <div class="terminal-bar"><p id="terminal-title">STUDIO SYSTEM CONSOLE</p><button type="button" class="terminal-close" aria-label="Close system console" data-close-terminal>×</button></div>
        <div class="terminal-output" id="terminal-output" aria-live="polite"><p><span>studio@caleb:~$</span> help</p><p>Commands: whoami · ls work · cat currently.log · open [project] · help</p></div>
        <form id="terminal-form" class="terminal-form"><label class="sr-only" for="terminal-input">System command</label><span aria-hidden="true">studio@caleb:~$</span><input id="terminal-input" type="text" autocomplete="off" spellcheck="false" placeholder="type a command" /></form>
      </dialog>`;
  }
}

/* ---------- Page renderers ---------- */
function renderPage() {
  if (!main) return;
  const renderers = {
    home: renderHome,
    work: renderWork,
    automation: renderAutomation,
    journey: renderJourney,
    toolbox: renderToolboxPage,
    log: renderLogPage,
    about: renderAbout,
    project: renderProject,
    notfound: renderNotFound,
  };
  (renderers[page] || renderNotFound)();
}

function renderHome() {
  document.title = "Caleb Pius — Working Studio";
  main.innerHTML = `
    <section class="hero shell" id="entry" data-pipeline="ENTRY">
      <div class="hero-top technical"><span>STUDIO / 01</span><span>OAU · NIGERIA</span></div>
      <div class="hero-grid">
        <div>
          <p class="eyebrow">SOFTWARE ENGINEERING STUDENT @ OAU</p>
          <h1><span>CALEB</span><span>PIUS</span></h1>
          <p class="hero-copy">I build systems to understand them—then keep an honest record of what the work taught me.</p>
          <div class="hero-actions"><a class="button button-solid" href="#work">VIEW THE WORK <span>↓</span></a><a class="button" href="#journey">THE JOURNEY <span>↓</span></a></div>
        </div>
        ${renderCurrentPlate()}
      </div>
      <div class="hero-footer technical"><span>BUILD / LEARN / DOCUMENT</span><span>SCROLL TO ENTER ↓</span></div>
    </section>

    <section class="studio-section intro-section" id="about-teaser" data-pipeline="ABOUT">
      <div class="shell intro-grid reveal">
        <p class="side-index technical">02 / CONTEXT</p>
        <div><p class="eyebrow">NOT A RÉSUMÉ. A WORKING RECORD.</p><h2>Still becoming.<br />Already building.</h2></div>
        <p>Completed coursework, public learning records, system experiments, and projects awaiting evidence all have a place here. The difference is made visible.</p>
      </div>
    </section>

    <section class="studio-section work-section" id="work" data-pipeline="WORK">
      <div class="shell"><div class="section-title reveal"><p class="eyebrow">03 / SELECTED WORK</p><h2>Evidence,<br />not claims.</h2><p>Each exhibit holds its status in plain sight. Open records show the problem, implementation, constraints, and lesson.</p></div>${renderProofStrip()}<div class="exhibit-list">${data.projects
        .filter((item) => item.featured)
        .map(renderExhibit)
        .join(
          "",
        )}</div>${renderStudioArchive()}<a class="section-link" href="${siteUrl("work/")}">VIEW THE FULL WORK INDEX ↗</a></div>
    </section>

    <section class="studio-section venom-preview" id="automation" data-pipeline="AUTOMATION">
      <div class="shell automation-preview-grid reveal"><div><p class="eyebrow venom-label">04 / VENØM — AUTOMATION WING</p><h2>Workflows are<br />systems too.</h2><p>Automation is documented as a legitimate part of the journey: triggers, decisions, routing, integrations, and useful actions.</p><a class="section-link red-link" href="${siteUrl("automation/")}">ENTER THE AUTOMATION WING ↗</a></div><div class="node-preview" aria-hidden="true"><span>TRIGGER</span><i></i><span>PROCESS</span><i></i><span>ROUTE</span><i></i><span>ACTION</span></div></div>
    </section>

    <section class="studio-section current-section" id="current" data-pipeline="CURRENT">
      <div class="shell current-layout reveal"><p class="side-index technical">05 / CURRENTLY</p>${renderCurrentDetails()}<p class="current-note technical">ONE SOURCE / MANY SURFACES<br />UPDATE ONCE, EVERY ROOM CHANGES.</p></div>
    </section>

    <section class="studio-section journey-preview" id="journey" data-pipeline="JOURNEY">
      <div class="shell"><div class="section-title reveal"><p class="eyebrow">06 / JOURNEY</p><h2>Built in<br />branches.</h2></div>${renderJourneyNodes(4)}<a class="section-link" href="${siteUrl("journey/")}">OPEN THE FULL PATH ↗</a></div>
    </section>

    <section class="studio-section toolbox-preview" id="toolbox" data-pipeline="TOOLBOX">
      <div class="shell toolbox-preview-layout reveal"><div><p class="eyebrow">07 / TOOLBOX</p><h2>Tools gain<br />weight through work.</h2><p>Every object maps back to a project or learning record. Its scale reflects verified project connections, never self-rated proficiency.</p><a class="section-link" href="${siteUrl("toolbox/")}">OPEN THE EVIDENCE MAP ↗</a></div>${renderToolLedger()}</div>
    </section>

    <section class="studio-section log-preview" id="log" data-pipeline="LOG">
      <div class="shell log-preview-layout reveal"><div><p class="eyebrow">08 / BUILD LOG</p><h2>The record<br />stays open.</h2><p class="technical">EDIT DATA → COMMIT → PUSH</p></div><ol class="mini-log">${data.buildLog.slice(0, 3).map(renderMiniLog).join("")}</ol></div>
      <div class="shell"><a class="section-link" href="${siteUrl("log/")}">READ THE FULL BUILD LOG ↗</a></div>
    </section>

    <section class="contact-section" id="contact" data-pipeline="CONTACT"><div class="shell contact-layout reveal"><div><p class="eyebrow">09 / CONTACT</p><h2>Let’s build<br />something useful.</h2></div><div><p>If you want to talk about an idea, a system, or work worth trying, start with the public record.</p><a class="contact-link" href="${data.site.github}" target="_blank" rel="noopener">GITHUB / CALEBPIUSC ↗</a><p class="contact-pending technical">EMAIL / TO BE ADDED</p></div></div></section>
    ${renderPipeline()}`;
}

function renderWork() {
  document.title = "Work — Caleb Pius";
  main.innerHTML =
    pageLead(
      "WORK",
      "The work index.",
      "Every record carries an explicit status. Completed coursework is not called a public launch; an idea is not called an implementation.",
    ) +
    `<section class="studio-section"><div class="shell"><div class="exhibit-list full-list">${data.projects.map(renderExhibit).join("")}</div></div></section>`;
}

function renderAutomation() {
  document.title = "Automation Wing — Caleb Pius";
  main.innerHTML =
    pageLead(
      "VENØM / AUTOMATION WING",
      "Systems in motion.",
      "A separate archive for workflow design, integrations, routing, and AI-assisted operations. Red means signal here—not spectacle.",
    ) +
    `<section class="automation-archive"><div class="shell"><p class="automation-disclaimer technical">CURRENT RECORD STATE / REPORTED WORKFLOWS AWAITING AUDITABLE EVIDENCE</p>${data.automations.map(renderAutomation).join("")}</div></section>`;
}

function renderJourney() {
  document.title = "Journey — Caleb Pius";
  main.innerHTML =
    pageLead(
      "JOURNEY",
      "The path is not a straight line.",
      "Learning, building, experimenting, and shipping can branch. The record grows without pretending every branch is complete.",
    ) +
    `<section class="studio-section"><div class="shell"><ol class="journey-map">${journeyNodeItems()}</ol></div></section>`;
}

function renderToolboxPage() {
  document.title = "Toolbox — Caleb Pius";
  const technologyMarkup = groupTechnologies().map(renderToolGroup).join("");
  main.innerHTML =
    pageLead(
      "TOOLBOX",
      "Proof over proficiency.",
      "Node size equals verified project connections. It never means talent, seniority, or a made-up percentage.",
    ) +
    `<section class="studio-section toolbox-page"><div class="shell"><div class="physics-wrap" data-toolbox-physics><canvas id="physics-canvas" aria-hidden="true"></canvas><div class="physics-fallback" id="physics-fallback"><p class="technical">INTERACTIVE EVIDENCE MAP</p><p>Loading the tool relationships…</p></div></div><section class="tool-detail" id="tool-detail" aria-live="polite"><p class="technical">SELECT A TOOL</p><h2>Every tool has a trail.</h2><p>Choose a node above—or use the accessible evidence list below.</p></section><div class="tool-groups">${technologyMarkup}</div></div></section>`;
}

function renderLogPage() {
  document.title = "Build Log — Caleb Pius";
  const entries = [...data.buildLog].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
  main.innerHTML =
    pageLead(
      "BUILD LOG",
      "The record stays open.",
      "Short, dated notes about actual decisions, source reviews, learning, and work. Newest entry first.",
    ) +
    `<section class="studio-section"><div class="shell"><ol class="full-log">${entries.map(renderFullLog).join("")}</ol></div></section>`;
}

function renderAbout() {
  document.title = "About — Caleb Pius";
  main.innerHTML =
    pageLead(
      "ABOUT",
      "A studio, not a finish line.",
      "A direct record of Caleb’s context, way of learning, and current direction.",
    ) +
    `<section class="studio-section"><div class="shell about-page"><div class="about-prose">${data.about.map((paragraph) => `<p>${escape(paragraph)}</p>`).join("")}</div><aside class="principle"><p class="technical">WORKING PRINCIPLE</p><blockquote>“Never ship what I can’t explain.”</blockquote><p>Useful systems need more than a working output. They need decisions that can be understood, described, and improved.</p></aside></div></section>`;
}

function renderProject() {
  const id = main.dataset.project;
  const project = data.projects.find((item) => item.id === id);
  if (!project) return renderNotFound();
  document.title = `${project.name} — Caleb Pius`;
  main.innerHTML = `<section class="case-hero" style="--project:${escape(project.color)}; --project-accent:${escape(project.accent)}"><div class="shell"><a class="back-link technical" href="${siteUrl("work/")}">← BACK TO WORK INDEX</a><p class="eyebrow">${escape(project.number)} / ${escape(project.category)}</p><h1>${escape(project.name)}</h1><p class="case-status technical">${escape(project.statusLabel)}</p><p class="case-summary">${escape(project.summary)}</p><p class="evidence-line technical">EVIDENCE / ${escape(project.evidence.level.toUpperCase())}</p></div></section><section class="case-body"><div class="shell"><div class="case-grid"><article><p class="technical">CONCEPT</p><p>${escape(project.concept)}</p></article><article><p class="technical">PROBLEM</p><p>${escape(project.problem)}</p></article><article><p class="technical">SOLUTION</p><p>${escape(project.solution)}</p></article><article><p class="technical">ARCHITECTURE</p><p>${escape(project.architecture)}</p></article><article><p class="technical">ROLE</p><p>${escape(project.role)}</p></article><article><p class="technical">CHALLENGES</p><p>${escape(project.challenges)}</p></article><article><p class="technical">WHAT I LEARNED</p><p>${escape(project.learned)}</p></article><article><p class="technical">CURRENT STATUS</p><p>${escape(project.currentStatus)}</p></article></div><section class="case-tech"><p class="technical">TECHNOLOGIES RECORDED</p><p>${project.technologies.length ? project.technologies.map(technologyName).join(" · ") : "No technology claims until source review is complete."}</p></section><section class="case-evidence"><p class="technical">EVIDENCE NOTE</p><p>${escape(project.evidence.summary)}</p></section></div></section>`;
}

function renderNotFound() {
  document.title = "Room Not Found — Caleb Pius";
  main.innerHTML = `<section class="not-found shell"><p class="eyebrow">404 / STUDIO INDEX</p><h1>Room not found.</h1><p>This space does not exist in the current studio plan.</p><a class="button button-solid" href="${siteUrl("")}">RETURN TO STUDIO <span>↑</span></a></section>`;
}

/* ---------- Reusable content blocks ---------- */
function pageLead(label, title, text) {
  return `<section class="page-lead shell"><p class="eyebrow">${escape(label)}</p><h1>${escape(title)}</h1><p>${escape(text)}</p></section>`;
}

function renderCurrentPlate() {
  return `<aside class="current-plate"><p class="technical plate-top">FIELD NOTE / NOW</p><p class="current-signal technical">● CURRENTLY</p><p class="current-focus">${escape(data.current.learning)}</p><p class="current-description">Building: ${escape(data.current.building)}<br />Exploring: ${escape(data.current.exploring)}</p><p class="technical current-updated">UPDATED / ${escape(data.current.updated.toUpperCase())}</p><div class="plate-bars" aria-hidden="true"><i></i><i></i><i></i></div></aside>`;
}

function renderCurrentDetails() {
  return `<div class="current-details"><div><p class="technical">LEARNING</p><strong>${escape(data.current.learning)}</strong></div><div><p class="technical">BUILDING</p><strong>${escape(data.current.building)}</strong><span class="technical">${escape(projectStatus(data.current.projectId))}</span></div><div><p class="technical">EXPLORING</p><strong>${escape(data.current.exploring)}</strong></div><div><p class="technical">UPDATED</p><strong>${escape(data.current.updated)}</strong></div></div>`;
}

function renderProofStrip() {
  const completed = data.projects.filter(
    (project) => project.status === "archived" && verifiedProject(project),
  ).length;
  return `<dl class="proof-strip reveal"><div><dt class="technical">${String(completed).padStart(2, "0")}</dt><dd>COMPLETED COURSEWORK<br />RECORDS</dd></div><div><dt class="technical">01</dt><dd>PUBLIC PYTHON<br />LEARNING RECORD</dd></div><div><dt class="technical">01</dt><dd>PERSONAL BUILD<br />DIRECTION</dd></div></dl>`;
}

function renderStudioArchive() {
  const archived = data.projects.filter((project) => !project.featured);
  return `<section class="studio-archive reveal" aria-labelledby="archive-heading"><div><p class="eyebrow">STUDIO ARCHIVE</p><h3 id="archive-heading">Not every record<br />needs the main floor.</h3><p>Concepts, earlier work, and projects waiting for documentation stay visible without being promoted beyond their evidence.</p></div><ul>${archived.map((project) => `<li><span class="technical">${escape(project.number)}</span><span>${escape(project.name)}</span><small class="technical">${escape(project.statusLabel)}</small></li>`).join("")}<li><span class="technical">A-00</span><span>Automation workflow records</span><a class="technical" href="${siteUrl("automation/")}">OPEN WING ↗</a></li></ul></section>`;
}

function renderExhibit(project) {
  const caseUrl = projectCaseUrl(project);
  const action = caseUrl
    ? `<a class="text-link" href="${caseUrl}">OPEN CASE STUDY ↗</a>`
    : `<span class="pending-action technical">EVIDENCE REVIEW PENDING</span>`;
  return `<article class="exhibit reveal" style="--project:${escape(project.color)}; --project-accent:${escape(project.accent)}"><div class="exhibit-art" aria-hidden="true"><span class="art-rule"></span><p class="technical">${escape(project.number)}</p><h3>${escape(project.visual)}</h3><span class="technical">${escape(project.category)}</span></div><div class="exhibit-copy"><div class="exhibit-meta technical"><span>${escape(project.number)} / ${escape(project.category)}</span><span>${escape(project.statusLabel)}</span></div><p class="exhibit-context technical">${escape(project.contextLine || project.category)}</p><h3>${escape(project.name)}</h3><p>${escape(project.summary)}</p><p class="evidence-tag technical">${escape(project.evidence.level.toUpperCase())}</p>${action}</div></article>`;
}

function renderAutomation(item) {
  return `<article class="automation-record reveal"><div class="automation-record-top"><p class="technical">${escape(item.number)}</p><h2>${escape(item.name)}</h2><span class="automation-status technical">${escape(item.statusLabel)}</span></div><p class="automation-description">${escape(item.description)}</p><ol class="flow-diagram" aria-label="${escape(item.name)} workflow">${item.steps.map((step, index) => `<li><span>${escape(step)}</span>${index < item.steps.length - 1 ? '<i aria-hidden="true">↓</i>' : ""}</li>`).join("")}</ol><p class="automation-evidence technical">EVIDENCE / ${escape(item.evidence)}</p></article>`;
}

function renderJourneyNodes(limit) {
  return `<ol class="journey-preview-list">${journeyNodeItems(limit)}</ol>`;
}

function journeyNodeItems(limit) {
  const entries = limit ? data.journey.slice(0, limit) : data.journey;
  return entries
    .map(
      (item, index) =>
        `<li class="journey-node reveal"><div class="node-rail"><span class="technical">${String(index + 1).padStart(2, "0")}</span><i></i></div><div><p class="technical journey-type">${escape(item.type)} / ${formatDate(item.date)}</p><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p>${item.projectId ? `<a class="journey-project technical" href="${projectCaseUrl(findProject(item.projectId)) || siteUrl("work/")}">OPEN RELATED RECORD ↗</a>` : ""}</div></li>`,
    )
    .join("");
}

function renderToolLedger() {
  const entries = getDisplayTechnologies().slice(0, 7);
  return `<div class="tool-ledger"><p class="technical">VERIFIED CONNECTION LEDGER</p>${entries.map((tech) => `<div><span>${escape(tech.name)}</span><span class="technical">${connectionLabel(tech)}</span></div>`).join("")}</div>`;
}

function renderToolGroup(group) {
  return `<section class="tool-group"><div><p class="technical">${escape(group.label)}</p><h2>${escape(group.title)}</h2></div><ul>${group.items.map((tech) => `<li><button type="button" data-tool-id="${escape(tech.id)}"><span>${escape(tech.name)}</span><small>${escape(connectionLabel(tech))}</small></button></li>`).join("") || '<li><span class="empty-tool">No verified tool relationships in this category yet.</span></li>'}</ul></section>`;
}

function renderMiniLog(entry) {
  return `<li><time class="technical" datetime="${escape(entry.date)}">${formatDate(entry.date)}</time><span class="technical">${escape(entry.type)}</span><p>${escape(entry.text)}</p></li>`;
}

function renderFullLog(entry) {
  const project = entry.projectId ? findProject(entry.projectId) : null;
  return `<li class="reveal"><time class="technical" datetime="${escape(entry.date)}">${formatDate(entry.date)}</time><span class="technical">${escape(entry.type)}</span><div><p>${escape(entry.text)}</p>${project ? `<a class="text-link" href="${projectCaseUrl(project) || siteUrl("work/")}">RELATED / ${escape(project.name).toUpperCase()} ↗</a>` : ""}</div></li>`;
}

function renderPipeline() {
  const labels = [
    "ABOUT",
    "WORK",
    "AUTOMATION",
    "CURRENT",
    "JOURNEY",
    "TOOLBOX",
    "LOG",
    "CONTACT",
  ];
  return `<aside class="pipeline technical" aria-label="Studio path"><ol>${labels.map((label) => `<li data-pipeline-item="${label}"><span aria-hidden="true"></span>${label}</li>`).join("")}</ol><p id="pipeline-count">01 / ${String(labels.length).padStart(2, "0")}</p></aside>`;
}

/* ---------- Technology relationships ---------- */
function verifiedProject(project) {
  return (
    project.evidence.level.includes("github") ||
    project.evidence.level.includes("owner-confirmed")
  );
}

function getTechConnections(technologyId) {
  return data.projects.filter(
    (project) =>
      verifiedProject(project) && project.technologies.includes(technologyId),
  );
}

function getDisplayTechnologies() {
  return data.technologies.map((technology) => ({
    ...technology,
    connections: getTechConnections(technology.id),
  }));
}

function groupTechnologies() {
  const labels = [
    [
      "building-with",
      "BUILDING WITH",
      "Tools actively connected to a verified active project.",
    ],
    [
      "worked-with",
      "WORKED WITH",
      "Tools evidenced in completed project or application records.",
    ],
    [
      "experimented-with",
      "EXPERIMENTED WITH",
      "Tools evidenced only in verified experiments.",
    ],
    [
      "currently-learning",
      "CURRENTLY LEARNING",
      "Current deliberate learning, not a claim of production experience.",
    ],
  ];
  const technologies = getDisplayTechnologies();
  return labels.map(([id, title, label]) => ({
    id,
    title,
    label,
    items: technologies.filter((tech) => tech.state === id),
  }));
}

function connectionLabel(technology) {
  const count = technology.connections?.length || 0;
  if (count) return `${count} VERIFIED ${count === 1 ? "PROJECT" : "PROJECTS"}`;
  return technology.learningEvidence ? "LEARNING RECORD" : "NO PROJECT COUNT";
}

function technologyName(id) {
  return (
    data.technologies.find((technology) => technology.id === id)?.name || id
  );
}

function projectStatus(id) {
  const project = findProject(id);
  return project ? project.statusLabel : "STATUS NOT RECORDED";
}

function findProject(id) {
  return data.projects.find((project) => project.id === id);
}

function projectCaseUrl(project) {
  if (!project || !["unievents", "scicalc"].includes(project.id)) return null;
  return siteUrl(`projects/${project.id}/`);
}

/* ---------- Interaction ---------- */
function initMenu() {
  const button = document.getElementById("menu-button");
  const links = document.getElementById("nav-links");
  if (!button || !links) return;
  button.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    button.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });
  links.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    links.classList.remove("is-open");
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
}

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  document.body.classList.add("has-motion");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );
  items.forEach((item) => observer.observe(item));
}

function initPipeline() {
  const pipeline = document.querySelector(".pipeline");
  const sections = document.querySelectorAll("[data-pipeline]");
  if (!pipeline || !sections.length || !("IntersectionObserver" in window))
    return;
  const update = (label, index) => {
    pipeline
      .querySelectorAll("[data-pipeline-item]")
      .forEach((item, itemIndex) => {
        item.classList.toggle(
          "is-current",
          item.dataset.pipelineItem === label,
        );
        item.classList.toggle("is-passed", itemIndex < index);
      });
    const count = document.getElementById("pipeline-count");
    if (count)
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
  };
  const observer = new IntersectionObserver(
    (entries) => {
      const shown = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (shown)
        update(
          shown.target.dataset.pipeline,
          [...sections].indexOf(shown.target),
        );
    },
    { threshold: [0.2, 0.5, 0.75] },
  );
  sections.forEach((section) => observer.observe(section));
}

function initBootSequence() {
  if (reducedMotion || sessionStorage.getItem("caleb-studio-booted")) return;
  const boot = document.createElement("div");
  boot.className = "boot-sequence";
  boot.innerHTML = `<div><p>› INITIALIZING STUDIO…</p><p>› LOADING VERIFIED RECORDS…</p><p>› LOADING CURRENT FOCUS…</p><p>› READY.</p><button type="button">SKIP</button></div>`;
  document.body.appendChild(boot);
  const dismiss = () => {
    boot.classList.add("leaving");
    sessionStorage.setItem("caleb-studio-booted", "true");
    window.setTimeout(() => boot.remove(), 230);
  };
  boot.querySelector("button").addEventListener("click", dismiss);
  window.setTimeout(dismiss, 680);
}

function initTerminal() {
  const dialog = document.getElementById("terminal-dialog");
  const input = document.getElementById("terminal-input");
  const form = document.getElementById("terminal-form");
  const output = document.getElementById("terminal-output");
  if (!dialog || !input || !form || !output) return;

  const open = () => {
    dialog.showModal();
    input.focus();
  };
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-terminal]")) open();
    if (event.target.closest("[data-close-terminal]")) dialog.close();
  });
  document.addEventListener("keydown", (event) => {
    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(
      document.activeElement?.tagName,
    );
    if (event.key === "`" && !typing && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      open();
    }
    if (event.key === "Escape" && dialog.open) dialog.close();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value.trim();
    if (!command) return;
    appendTerminal(output, `studio@caleb:~$ ${command}`, true);
    runTerminalCommand(command, output, dialog);
    input.value = "";
  });
}

function appendTerminal(output, line, prompt = false) {
  const paragraph = document.createElement("p");
  paragraph.textContent = line;
  if (prompt) paragraph.className = "terminal-command";
  output.appendChild(paragraph);
  output.scrollTop = output.scrollHeight;
}

function runTerminalCommand(command, output, dialog) {
  const [verb, ...args] = command.toLowerCase().split(/\s+/);
  const argument = args.join(" ");
  if (verb === "help")
    return appendTerminal(
      output,
      "Commands: whoami · ls work · cat currently.log · open [unievents|scicalc] · clear",
    );
  if (verb === "whoami")
    return appendTerminal(
      output,
      "Caleb Pius — Software Engineering Student @ OAU. Building, learning, and documenting the work.",
    );
  if (verb === "ls" && argument === "work")
    return appendTerminal(
      output,
      data.projects
        .map(
          (project) => `${project.id} [${project.statusLabel.toLowerCase()}]`,
        )
        .join("  ·  "),
    );
  if (verb === "cat" && argument === "currently.log")
    return appendTerminal(
      output,
      `learning: ${data.current.learning} | building: ${data.current.building} | exploring: ${data.current.exploring}`,
    );
  if (verb === "open" && argument) {
    const project = data.projects.find(
      (item) => item.id === argument || item.name.toLowerCase() === argument,
    );
    if (!project)
      return appendTerminal(
        output,
        "Project record not found. Try: unievents or scicalc.",
      );
    const destination = projectCaseUrl(project);
    if (!destination)
      return appendTerminal(
        output,
        `${project.name}: evidence review pending; no case-study room is open yet.`,
      );
    appendTerminal(output, `Opening ${project.name}…`);
    window.setTimeout(() => {
      dialog.close();
      window.location.href = destination;
    }, 300);
    return;
  }
  if (verb === "clear") {
    output.innerHTML = "";
    return;
  }
  appendTerminal(
    output,
    "Unknown command. Type help to see commands based on the real studio data.",
  );
}

function initToolboxPhysics() {
  const holder = document.querySelector("[data-toolbox-physics]");
  if (!holder || reducedMotion || window.innerWidth < 720) return;
  if (!("IntersectionObserver" in window)) return createPhysics();
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      createPhysics();
    },
    { rootMargin: "180px" },
  );
  observer.observe(holder);
}

async function createPhysics() {
  const canvas = document.getElementById("physics-canvas");
  const fallback = document.getElementById("physics-fallback");
  if (!canvas) return;
  try {
    await loadMatter();
    const Matter = window.Matter;
    if (!Matter) throw new Error("Matter unavailable");
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;
    const rect = canvas.parentElement.getBoundingClientRect();
    const width = Math.max(500, Math.floor(rect.width));
    const height = 430;
    canvas.width = width;
    canvas.height = height;
    const engine = Engine.create();
    engine.gravity.y = 0.23;
    const render = Render.create({
      canvas,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });
    const nodes = getDisplayTechnologies()
      .filter((tech) => tech.connections.length || tech.learningEvidence)
      .slice(0, 14);
    const bodies = nodes.map((tech, index) => {
      const count = tech.connections.length;
      const radius =
        25 +
        Math.min(count, 5) * 7 +
        (tech.state === "currently-learning" ? 4 : 0);
      const body = Bodies.circle(
        75 + ((index % 5) * (width - 150)) / 4,
        55 + Math.floor(index / 5) * 110,
        radius,
        {
          restitution: 0.72,
          friction: 0.02,
          frictionAir: 0.025,
          render: {
            fillStyle:
              tech.state === "currently-learning" ? "#c1662b" : "#3c3934",
            strokeStyle: "#e1a06f",
            lineWidth: 1.2,
          },
        },
      );
      body.toolId = tech.id;
      body.toolLabel = tech.name;
      return body;
    });
    const walls = [
      Bodies.rectangle(width / 2, height + 22, width, 40, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(-20, height / 2, 40, height, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(width + 20, height / 2, 40, height, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(width / 2, -20, width, 40, {
        isStatic: true,
        render: { visible: false },
      }),
    ];
    Composite.add(engine.world, [...bodies, ...walls]);
    const mouse = Mouse.create(canvas);
    const mouseControl = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.12, render: { visible: false } },
    });
    Composite.add(engine.world, mouseControl);
    Events.on(mouseControl, "mousedown", (event) => {
      const body = event.source.body;
      if (body?.toolId) showToolDetail(body.toolId);
    });
    Events.on(render, "afterRender", () => {
      const context = render.context;
      context.save();
      context.font = "10px JetBrains Mono, monospace";
      context.fillStyle = "#ede8de";
      context.textAlign = "center";
      bodies.forEach((body) =>
        context.fillText(
          body.toolLabel.toUpperCase(),
          body.position.x,
          body.position.y + 3,
        ),
      );
      context.restore();
    });
    Render.run(render);
    Runner.run(Runner.create(), engine);
    if (fallback) fallback.remove();
  } catch (error) {
    if (fallback)
      fallback.innerHTML =
        '<p class="technical">INTERACTIVE MAP UNAVAILABLE</p><p>Use the evidence list below—the full project relationships remain available.</p>';
  }
}

function loadMatter() {
  if (window.Matter) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/matter-js@0.20.0/build/matter.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function showToolDetail(id) {
  const technology = getDisplayTechnologies().find((item) => item.id === id);
  const target = document.getElementById("tool-detail");
  if (!technology || !target) return;
  const connections = technology.connections;
  const source = technology.sourceLink
    ? `<p><a class="text-link" href="${escape(technology.sourceLink)}" target="_blank" rel="noopener">OPEN LEARNING RECORD ↗</a></p>`
    : "";
  target.innerHTML = `<p class="technical">${escape(technology.state.toUpperCase())}</p><h2>${escape(technology.name)}</h2><p>${escape(connectionLabel(technology))}. ${technology.learningEvidence ? escape(technology.learningEvidence) : ""}</p><ul>${connections.map((project) => `<li><a href="${projectCaseUrl(project) || siteUrl("work/")}">${escape(project.name)} <span>↗</span></a></li>`).join("") || "<li>No verified application-project connection is recorded yet.</li>"}</ul>${source}`;
  target.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "nearest",
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tool-id]");
  if (button) showToolDetail(button.dataset.toolId);
});

/* ---------- Utility ---------- */
function siteUrl(path) {
  return new URL(path, siteRoot).href;
}
function escape(value) {
  return String(value ?? "").replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
      })[character],
  );
}
function formatDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
    .format(new Date(year, month - 1, day))
    .toUpperCase();
}
