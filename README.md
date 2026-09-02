# Rinnah Lagroma Valmores — Portfolio

Responsive single-page portfolio based on the supplied portfolio document and the requested dark blue/purple visual mockup.

## Files

- `index.html` — page structure/content
- `style.css` — responsive styling and layout
- `script.js` — project cards, mobile navigation, sticky-header state, scroll reveal, dynamic year
- `assets/rinnah-portrait.png` — transparent hero portrait

## Run locally

Open `index.html` in a browser.

For best results with local development, run a simple server from this folder, for example:

    python3 -m http.server 8000

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

Upload all files while preserving the folder structure. Make sure `index.html` is in the repository root (or configure Pages for the folder containing it).

## Notes

The project list, skills, experience, education, and contact information are based on the supplied portfolio document. The project logo circles are text-based placeholders so the site does not depend on downloading third-party brand assets.

## Recent updates

- Added a downloadable CV button in the sticky header using `assets/Rinnah-L-Valmores-CV.pdf`.
- Added Facebook, Instagram, LinkedIn, and GitHub icons to the hero section.
- Increased small text throughout the site so the minimum font size is 16px.
- The Facebook, Instagram, and LinkedIn buttons currently point to the platform homepages; replace their `href` values in `index.html` with your personal profile URLs. GitHub is linked to `https://github.com/rinnahvalmores`.


## Projects section update

- Added a **Selected Work / Featured Projects** section featuring the first 6 projects from the supplied portfolio document.
- Each featured project includes a large thumbnail, description, technology stack, and **View Website** button.
- Added a separate **More Projects** section containing the remaining 8 projects with compact thumbnails.
- Added local project thumbnails under `assets/project-thumbnails/` so the portfolio does not depend on external screenshot or image services.
- Project names, URLs, roles, stacks, and descriptions are based on the supplied portfolio document.
