# Caleb Pius — Working Studio

A living digital studio for **Caleb Pius**, a Software Engineering student at Obafemi Awolowo University (OAU), Nigeria.

This portfolio is intentionally evidence-led. It does not use fake proficiency percentages or turn a concept into a launch. Project records are connected to the technologies they actually use, and the Toolbox calculates its project relationships from that data.

## Visual direction

- Warm charcoal ground: `#151412`
- Warm off-white text: `#EDE8DE`
- Copper structural accent: `#C1662B`
- Fraunces for display type, Inter for body text, JetBrains Mono for technical metadata
- A restrained red system language appears only inside the **VENØM Automation Wing**

## Project structure

```text
index.html                    Main continuous studio experience
work/index.html               Full project index
automation/index.html         VENØM Automation Wing
journey/index.html            Branching journey record
toolbox/index.html            Evidence-driven technology map
log/index.html                Full build log
about/index.html              About Caleb
projects/unievents/index.html UniEvents case study
projects/scicalc/index.html   SciCalc archive case study
404.html                      Architectural error page

data/studio-data.js           THE single editable source of truth
js/app.js                     Rendering, navigation, terminal, motion, toolbox physics
styles.css                    Materials, typography, responsive design, accessibility
```

## The one file to update

Open **`data/studio-data.js`**. It holds:

```text
current        Current learning, build, exploration, and update date
projects       Status, technologies, evidence, and case-study content
automations    Workflow records and their evidence state
technologies   Toolbox technology registry
skills         Demonstrated-skill registry
journey        Dated milestones
buildLog       Newest-first public work and learning record
about          Personal studio introduction
```

## Update skills honestly

There are no `Python 80%` style ratings.

A technology is connected to a project once in `project.technologies`. The site then calculates the number of **verified project connections** itself.

Move a technology only when the evidence changes:

```text
CURRENTLY LEARNING → EXPERIMENTED WITH → WORKED WITH → BUILDING WITH
```

Example after a real Python project:

1. Add that project once in `projects`.
2. Add `"python"` to its `technologies`.
3. Change Python's `state` if the project proves a new level of use.
4. Add a dated Journey item and Build Log entry if useful.
5. Commit and push.

A project marked `needs-verification` does **not** inflate public technology counts.

## Add a Build Log entry

Add the newest item at the top of `buildLog`:

```js
{
  date: "2026-09-24",
  type: "BUILDING",
  text: "Built a small Python CLI project and practiced file handling.",
  projectId: "my-python-cli"
}
```

Use `YYYY-MM-DD`. The site sorts the log newest-first as a safety net.

## Evidence rules

Project evidence may be:

- `github` — public source/artifact reviewed
- `owner-confirmed` — Caleb has explicitly confirmed the current status
- `needs-verification` — project is recorded but no source, screenshot, documentation, or precise record has been checked yet

Do not add API keys, access tokens, private client details, or private workflow data to this public repository.

## Local preview

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Open `http://localhost:8000`.

## Deployment

The site is plain HTML, CSS, and JavaScript. Deploy it free through GitHub Pages:

1. Merge or push the desired branch to `main`.
2. Go to the repository’s **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save.

## Pending evidence

- Public repository or files for the **Personal Coding Companion / Venom**.
- Approved public name for the companion and the VENØM automation identity.
- Source code/screenshots and precise implementation details for SciCalc, if it should move beyond its archive record.
- Redacted workflow evidence for automation projects.
- A public contact email, LinkedIn/X links, and optional CV.
