# Wen & Hsien Wedding Site

A mobile-first, modern editorial wedding invitation site for June 12, 2027.

## Preview

Open `index.html` in your browser. No installation or build is required.

## Customize

- `index.html`: edit the wedding story, venue and other text.
- `styles.css`: edit typography, colors and layouts.
- `script.js`: countdown to 2027-06-12 00:00 Taiwan time (update if you want countdown to ceremony time).
- `assets/hero-photo.jpg`: add your own photograph with this filename (recommended portrait image, ideally at least 1200 px wide). Until then, a gradient placeholder remains visible. For best quality, compress photographs before uploading.
- The transportation, seating and photo upload buttons are intentionally marked as coming soon; no data collection or integrations are currently active.

## Deploy on GitHub Pages

1. Create a NEW public repository named `wen-hsien-wedding` (keep the existing news-brief repository untouched).
2. Upload `index.html`, `styles.css`, `script.js`, this `README.md` and the `assets` folder if it contains pictures, to the repository root.
3. Go to **Settings → Pages → Build and deployment**, select **Deploy from a branch** and choose **main / (root)**, then **Save**.
4. Find the published URL in Settings → Pages. Typical project URL: `https://YOUR-USERNAME.github.io/wen-hsien-wedding/`.
5. Do not store private guest lists or sensitive API keys in this public repository.

## Planned next version

RSVP, venue map, authenticated seating search, and guest photo uploads. These require design decisions for data access, consent and storage before publishing.
