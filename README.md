# Caleb — Builder's Log 📓

My personal portfolio: notebook-meets-changelog. Most of it is stable (who I am,
what I've shipped) — one section is a **running build log**, updated as things happen.

Concept: **concept · code · confusion** — because the third line is usually where
the actual learning happens.

## Files

| File | Job |
|---|---|
| `index.html` | Structure + all stable content (bones) |
| `data.js` | **The daily file** — log entries, newest first (the ink) |
| `styles.css` | Warm paper, ink navy, marigold skin |
| `script.js` | Menu, log rendering, reveals, copy-email (electricity) |

No frameworks, no build step, no web fonts. Vanilla only — deploys free on GitHub Pages.

## The daily habit (30 seconds)

1. Open `data.js`, paste a new `{ date, text }` line at the **top** of the list.
2. Commit + push.
3. Done — the site updates and the contribution graph gets its green square.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages, free)

1. Push this repo to GitHub (branch `main`).
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
3. Wait ~1 minute → live at `https://<username>.github.io/Portfolio/`.

## TODO(Caleb) — things only I know

- [ ] Real email in `index.html` (contact button) — the site's one blocking TODO.
- [ ] After the Sep 11 defense: update the UniEvents badge + add a log entry.
- [ ] Deskbot verdict: confirm the spec, or delete the lab block.
- [ ] SciCalc / Cadence Study: restore or leave cut.
- [ ] Keep `data.js` + the "currently" line fresh — small, often.
