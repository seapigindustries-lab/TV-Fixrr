# TV Fixrr

Static site: searchable TV setup walkthroughs, keyed by brand and model family.

## Run

Open `index.html` directly, or serve the folder:

```
npx serve .
```

## Add content

Edit `data.js`:

- `walkthroughs` — one entry per model family: `brand`, `family`, `year`, `verified` (flip to `true` when checked against a real set), `models[]`, and `steps[]` with `symptom`, `title`, `menu` path, `setting`, and target `value`.
- `modelFinders` — per-brand menu paths for locating the model number.

## Search

Matches any text (brand, family, model numbers, step content) — so "motion blur" surfaces the walkthroughs covering that symptom.

## Note

Current entries are sample data. Verify menu paths and values against real sets before publishing.
