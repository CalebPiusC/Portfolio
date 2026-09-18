# Caleb Pius — Working Studio

A living personal portfolio for **Caleb Pius**, a Software Engineering student at Obafemi Awolowo University (OAU), Ile-Ife, Nigeria.

This is deliberately a small, static site: no framework, no build step, and no CMS. The point is that Caleb can understand and maintain it while his work, tools, and direction evolve.

## The idea

The site is a **Working Studio**, not a generic developer template:

- projects are presented as evidence, not as skill claims;
- the automation archive records systems thinking and integrations;
- the journey shows progression without pretending Caleb has arrived;
- the build log makes the portfolio a living record;
- the toolbox groups tools by real context instead of fake percentage bars.

Visual direction: warm graphite, off-white type, brushed-brass structural details, and project-specific color used only inside project exhibits.

## Files and their jobs

| File | Job |
|---|---|
| `index.html` | Semantic page structure—the studio rooms. |
| `styles.css` | Color tokens, typography, layout, responsive design, and restrained motion. |
| `data.js` | **The editable source of truth** for projects, tools, status, journey, and the build log. |
| `script.js` | Safely renders the data and handles navigation, case studies, and small interactions. |

## The update system

Open **`data.js`** whenever something changes. It contains these groups:

```text
currentFocus       What Caleb is working on now
projects           Project exhibits and their case-study details
automationArchive  Workflow archive entries
journey            Career / learning chapters
toolbox            Skills grouped by real level of use
about              Introductory copy
buildLog           Dated updates, newest first
contact            Public contact links
```

### Update a skill level honestly

Do not use percentages. Move a tool only when the evidence changes:

```text
LEARNING NOW → EXPERIMENTING WITH → WORKED WITH → BUILDING WITH
```

Then change its `evidence` text to name the project, workflow, or learning milestone that earned that move.

Example: after building a real Python CLI project, move Python from **LEARNING NOW** to **WORKED WITH**, reference the project, add it to `projects` if appropriate, and add a dated build-log entry.

### Add a build-log entry

Add the next object **at the top** of `buildLog`:

```js
{ date: "2026-09-24", tag: "BUILT", text: "Built my first Python CLI project and practiced file handling." },
```

Use `YYYY-MM-DD`. The site still sorts entries newest first as a safety check.

### Add a project

1. Add real screenshots or diagrams to an `assets/` folder when available.
2. Copy one project object in `projects` and edit the details.
3. Include only an honest problem, solution, role, tools, and lesson.
4. Add a live or source URL only when it is verified and public.
5. Add a matching build-log entry and journey milestone if useful.

> Do not add tokens, API keys, private client information, or anything Caleb does not want public to `data.js`.

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Free deployment: GitHub Pages

1. Push or merge the site onto the repository's `main` branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Choose **Deploy from a branch**.
4. Select `main` and the `/ (root)` folder.
5. Save and wait for GitHub Pages to publish it.

## Content still intentionally awaiting confirmation

- A public portfolio email address.
- UniEvents' verified post-defense status (the previously stated September 11, 2026 date has passed).
- Whether SciCalc, Cadence Study, or any other older project should be documented, archived, or excluded.
- Real screenshots and verified live URLs for any featured project.
- Optional X profile URL.

The site does not make up those details. It will be stronger with verified evidence than with filler.
