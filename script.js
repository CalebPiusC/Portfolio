// ============================================================
// script.js — THE ELECTRICITY (behavior only)
// ------------------------------------------------------------
// Plain-words job of this file:
// It REACTS: to clicks, to scrolling, to the page loading. It
// never draws anything itself — it adds/removes classes and
// text, and styles.css does the visual work.
//
// The 6 jobs in this file:
//   1. enableAnimations — tell CSS "JS is running" (reveal gate)
//   2. renderLog ........ print data.js entries into #log-list
//      ^^^ THE HEARTBEAT: your daily habit ends here. data.js is
//          the ink, this function is the hand that writes it.
//   3. mobileMenu ...... hamburger opens/closes the nav
//   4. reveal .......... fade sections in as you scroll to them
//   5. copyEmail ....... copy-email button + "Copied ✓" feedback
//   6. footerYear ...... footer always shows the current year
//
// "use strict" = JS's strict mode: sloppy mistakes become loud
// errors instead of silent weirdness. Always keep this line.
"use strict";

/* Run everything once the HTML is fully read.
   (Our <script defer> tags already guarantee this timing, but
   saying it explicitly protects us if anyone ever moves the tags.) */
document.addEventListener("DOMContentLoaded", () => {
  enableAnimations();
  renderLog();
  initMobileMenu();
  initReveal();
  initCopyEmail();
  initYear();
});

/* ---------- JOB 1: enable animations ---------- */
// styles.css hides .reveal sections ONLY when <body> has class
// "js". No JS = no class = content just shows. This one line is
// what "progressive enhancement" looks like in practice.
function enableAnimations() {
  document.body.classList.add("js");
}

/* ---------- JOB 2: render the log (THE HEARTBEAT) ---------- */
// Reads LOG_ENTRIES from data.js and prints each one as:
//   <li><time class="log-date">2026-09-09</time><span>text…</span></li>
// That exact shape is what styles.css section 10 expects — HTML,
// CSS, and JS agreeing on a shape. If you ever change one side,
// you must change the other. That's the deal.
function renderLog() {
  const list = document.getElementById("log-list");
  if (!list) return; // safety: if the HTML changes, fail silently

  // Guard: data.js missing or list empty? Say so honestly.
  // (typeof check because referencing a missing const would crash.)
  if (typeof LOG_ENTRIES === "undefined" || LOG_ENTRIES.length === 0) {
    list.innerHTML = "<li><span>No entries yet — add your first line in data.js ✎</span></li>";
    return;
  }

  // document.createDocumentFragment() = build everything off-screen,
  // insert once. Faster than adding 50 entries one by one, and a
  // good habit: touch the live page as rarely as possible.
  const frag = document.createDocumentFragment();

  for (const entry of LOG_ENTRIES) {
    const li = document.createElement("li");

    const date = document.createElement("time");
    date.className = "log-date";
    date.dateTime = entry.date; // machine-readable date (good practice)
    date.textContent = entry.date; // <-- textContent, NOT innerHTML!

    const text = document.createElement("span");
    text.textContent = entry.text; // <-- safe too. See below.

    // WHY textContent? It treats your words as PLAIN TEXT. If a log
    // entry ever contains "<" or "&", it prints literally instead of
    // breaking the page (or worse — running as code). This is the #1
    // habit that separates careful devs from hacked ones. data.js
    // promised you "plain text only" — this line keeps that promise.
    li.appendChild(date);
    li.appendChild(text);
    frag.appendChild(li);
  }

  list.appendChild(frag);
}

/* ---------- JOB 3: mobile menu ---------- */
function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;

  // Toggle .open on the list (CSS shows/hides it) + keep the
  // aria-expanded label truthful for screen readers.
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  // Tapping a link jumps to a section — so close the menu too.
  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }
  });
}

/* ---------- JOB 4: scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (items.length === 0) return;

  // Fallback: ancient browsers without IntersectionObserver just
  // show everything. Content first, effects second — always.
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  // The observer watches each .reveal and fires when ~12% of it
  // enters the screen. Then it STOPS watching that element
  // (unobserve) — reveal once, never again, no wasted work.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- JOB 5: copy-email button ---------- */
function initCopyEmail() {
  const btn = document.getElementById("copy-email");
  // Single source of truth: the address lives in the mailto link
  // in index.html. We READ it from there instead of typing it
  // twice — so you only ever update it in ONE place.
  const mailLink = document.querySelector('a[href^="mailto:"]');
  if (!btn || !mailLink) return;

  const address = mailLink.getAttribute("href").replace("mailto:", "");
  const originalText = btn.textContent;

  btn.addEventListener("click", async () => {
    try {
      // Modern way: the Clipboard API (needs HTTPS or localhost —
      // GitHub Pages is HTTPS, so this works there).
      await navigator.clipboard.writeText(address);
    } catch {
      // Fallback for old browsers: invisible textarea + copy command.
      const ta = document.createElement("textarea");
      ta.value = address;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    // Feedback: swap the label for 2 seconds, then swap back.
    btn.textContent = "✓ Copied!";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
}

/* ---------- JOB 6: footer year ---------- */
// new Date().getFullYear() = 2026 (and 2027 next year, forever).
// One less thing to remember every January.
function initYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}
