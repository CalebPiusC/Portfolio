// Caleb Pius — Working Studio behaviour
// =====================================================================
// data.js is the source of truth. This file takes that plain content
// and turns it into accessible project exhibits, workflow diagrams,
// journey rooms, toolbox groups, and a build log.
//
// Important safety choice: content is added with textContent, not
// innerHTML. That means an accidental < or & in data.js stays text and
// cannot become executable page code.
// =====================================================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof SITE_DATA === "undefined") {
    console.error("data.js did not load, so the studio content cannot render.");
    return;
  }

  document.body.classList.add("js");
  renderCurrentFocus();
  renderProjects();
  renderAutomationArchive();
  renderJourney();
  renderToolbox();
  renderBuildLog();
  renderAbout();
  renderContact();
  initProjectDialog();
  initMobileMenu();
  initHeaderState();
  initReveals();
  setFooterYear();
});

// Small DOM helpers keep rendering functions readable and consistent.
function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function clear(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function renderCurrentFocus() {
  const target = document.getElementById("hero-current");
  if (!target) return;
  const current = SITE_DATA.currentFocus;

  target.append(
    makeElement("p", "status-signal technical", `● ${current.signal}`),
    makeElement("p", "status-focus", current.focus),
    makeElement("p", "status-description", current.description),
    makeElement("p", "status-updated technical", `UPDATED / ${current.updated.toUpperCase()}`)
  );
}

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;
  clear(list);

  SITE_DATA.projects.forEach((project, index) => {
    const article = makeElement("article", "project-exhibit reveal");
    article.style.setProperty("--project-color", project.color);
    article.style.setProperty("--project-accent", project.accent);
    article.style.setProperty("--project-order", String(index + 1));

    const visual = makeElement("div", "project-visual");
    visual.setAttribute("aria-hidden", "true");
    visual.append(
      makeElement("span", "visual-grid-line"),
      makeElement("span", "visual-grid-line"),
      makeElement("p", "technical visual-number", project.number),
      makeElement("p", "visual-title", project.visual),
      makeElement("p", "technical visual-type", project.category)
    );

    const copy = makeElement("div", "project-copy");
    const meta = makeElement("div", "project-meta technical");
    meta.append(makeElement("span", "", `${project.number} / ${project.category}`), makeElement("span", "project-status", project.status));

    const title = makeElement("h3", "", project.name);
    const summary = makeElement("p", "project-summary", project.summary);
    const role = makeElement("p", "project-role", project.role);
    const toolLine = makeElement("p", "project-tools technical", project.tools.join(" · "));
    const button = makeElement("button", "text-link", "OPEN CASE STUDY ↗");
    button.type = "button";
    button.dataset.project = project.slug;
    button.setAttribute("aria-label", `Open ${project.name} case study`);

    copy.append(meta, title, summary, role, toolLine, button);
    article.append(visual, copy);
    list.appendChild(article);
  });
}

function renderAutomationArchive() {
  const list = document.getElementById("automation-list");
  if (!list) return;
  clear(list);

  SITE_DATA.automationArchive.forEach((item) => {
    const article = makeElement("article", "automation-flow reveal");
    const header = makeElement("div", "automation-header");
    header.append(makeElement("p", "technical", item.number), makeElement("h3", "", item.title));

    const description = makeElement("p", "automation-description", item.description);
    const workflow = makeElement("ol", "workflow", undefined);
    workflow.setAttribute("aria-label", `${item.title} workflow`);

    item.tools.forEach((tool, index) => {
      const step = makeElement("li", "workflow-step", tool);
      if (index < item.tools.length - 1) step.appendChild(makeElement("span", "workflow-arrow", "→"));
      workflow.appendChild(step);
    });

    const focus = makeElement("p", "automation-focus technical", item.focus);
    article.append(header, description, workflow, focus);
    list.appendChild(article);
  });
}

function renderJourney() {
  const list = document.getElementById("journey-list");
  if (!list) return;
  clear(list);

  SITE_DATA.journey.forEach((room) => {
    const item = makeElement("li", "journey-room reveal");
    const index = makeElement("p", "journey-index technical", room.number);
    const phase = makeElement("p", "journey-phase technical", room.phase);
    const title = makeElement("h3", "", room.title);
    const text = makeElement("p", "", room.text);
    const evidence = makeElement("p", "journey-evidence technical", room.evidence);
    item.append(index, phase, title, text, evidence);
    list.appendChild(item);
  });
}

function renderToolbox() {
  const list = document.getElementById("toolbox-list");
  if (!list) return;
  clear(list);

  SITE_DATA.toolbox.forEach((group, index) => {
    const article = makeElement("article", "tool-group reveal");
    const top = makeElement("div", "tool-group-top");
    top.append(makeElement("p", "technical", `0${index + 1}`), makeElement("h3", "", group.title));
    article.append(top, makeElement("p", "tool-group-description", group.description));

    const tools = makeElement("ul", "tool-list");
    group.tools.forEach((tool) => {
      const item = makeElement("li", "");
      const name = tool.link ? makeElement("a", "tool-name", tool.name) : makeElement("span", "tool-name", tool.name);
      if (tool.link) {
        name.href = tool.link;
        name.target = "_blank";
        name.rel = "noopener";
        name.appendChild(makeElement("span", "external-mark", " ↗"));
      }
      item.append(name, makeElement("span", "tool-evidence", tool.evidence));
      tools.appendChild(item);
    });
    article.appendChild(tools);
    list.appendChild(article);
  });
}

function renderBuildLog() {
  const list = document.getElementById("log-list");
  if (!list) return;
  clear(list);

  // Sorting protects the newest-first rule even if entries are pasted in
  // the wrong order. ISO dates sort correctly as plain text.
  const newestFirst = [...SITE_DATA.buildLog].sort((a, b) => b.date.localeCompare(a.date));

  newestFirst.forEach((entry) => {
    const item = makeElement("li", "log-entry reveal");
    const date = makeElement("time", "log-date technical", formatDate(entry.date));
    date.dateTime = entry.date;
    const tag = makeElement("span", "log-tag technical", entry.tag);
    const text = makeElement("p", "", entry.text);
    item.append(date, tag, text);
    list.appendChild(item);
  });
}

function renderAbout() {
  const target = document.getElementById("about-copy");
  if (!target) return;
  clear(target);
  SITE_DATA.about.forEach((paragraph) => target.appendChild(makeElement("p", "", paragraph)));
}

function renderContact() {
  const target = document.getElementById("contact-links");
  if (!target) return;
  clear(target);
  const contact = SITE_DATA.contact;

  if (contact.email) {
    const email = makeElement("a", "contact-link", `EMAIL / ${contact.email}`);
    email.href = `mailto:${contact.email}`;
    target.appendChild(email);
  } else {
    target.appendChild(makeElement("p", "contact-pending technical", "EMAIL / TO BE ADDED"));
  }

  const github = makeElement("a", "contact-link", "GITHUB / CALEBPIUSC ↗");
  github.href = contact.github;
  github.target = "_blank";
  github.rel = "noopener";
  target.appendChild(github);

  // No guessed social profile. The link only exists if Caleb supplies it.
  if (contact.x) {
    const x = makeElement("a", "contact-link", "X / PROFILE ↗");
    x.href = contact.x;
    x.target = "_blank";
    x.rel = "noopener";
    target.appendChild(x);
  }
}

function initProjectDialog() {
  const dialog = document.getElementById("project-dialog");
  const content = document.getElementById("dialog-content");
  const close = document.getElementById("dialog-close");
  if (!dialog || !content || !close) return;

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project]");
    if (!button) return;
    const project = SITE_DATA.projects.find((item) => item.slug === button.dataset.project);
    if (!project) return;
    renderProjectCaseStudy(content, project);
    dialog.showModal();
    close.focus();
  });

  close.addEventListener("click", () => dialog.close());

  // A dialog normally closes with Escape. This adds the familiar click
  // outside the panel behaviour while keeping the native dialog semantics.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function renderProjectCaseStudy(target, project) {
  clear(target);
  const intro = makeElement("div", "dialog-intro");
  intro.style.setProperty("--project-color", project.color);
  intro.append(
    makeElement("p", "technical", `${project.number} / ${project.category}`),
    makeElement("h2", "", project.name),
    makeElement("p", "dialog-status technical", project.status),
    makeElement("p", "dialog-summary", project.summary)
  );

  const grid = makeElement("div", "case-study-grid");
  const details = [
    ["THE PROBLEM", project.problem],
    ["THE SOLUTION", project.solution],
    ["MY ROLE", project.role],
    ["WHAT I LEARNED", project.lesson]
  ];

  details.forEach(([label, value]) => {
    const block = makeElement("section", "case-study-block");
    block.append(makeElement("p", "technical", label), makeElement("p", "", value));
    grid.appendChild(block);
  });

  const tech = makeElement("section", "case-study-tools");
  tech.append(makeElement("p", "technical", "TECHNOLOGY"), makeElement("p", "", project.tools.join(" · ")));
  if (project.note) tech.appendChild(makeElement("p", "case-study-note", project.note));

  const links = makeElement("div", "case-study-links");
  // Source links are intentionally rendered only when an approved public
  // link exists. This avoids publishing links to repositories Caleb does
  // not want to show.
  if (project.liveLink) links.appendChild(makeExternalLink("VIEW LIVE PROJECT ↗", project.liveLink));
  if (project.sourceLink) links.appendChild(makeExternalLink("VIEW SOURCE ↗", project.sourceLink));

  target.append(intro, grid, tech);
  if (links.childElementCount > 0) target.appendChild(links);
}

function makeExternalLink(label, url) {
  const link = makeElement("a", "text-link", label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  return link;
}

function initMobileMenu() {
  const button = document.getElementById("menu-button");
  const panel = document.getElementById("nav-list");
  if (!button || !panel) return;

  button.addEventListener("click", () => {
    const opened = panel.classList.toggle("is-open");
    button.classList.toggle("is-open", opened);
    button.setAttribute("aria-expanded", String(opened));
    button.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
  });

  panel.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      panel.classList.remove("is-open");
      button.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    }
  });
}

function initHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  // Constructing from numbers avoids UTC timezone shifts for visitors.
  return new Intl.DateTimeFormat("en", { month: "short", day: "2-digit", year: "numeric" })
    .format(new Date(year, month - 1, day))
    .toUpperCase();
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}
