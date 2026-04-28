# Varshayini Aravinthan — Portfolio

A clean, dark-luxury portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## File Structure

```
portfolio/
├── index.html                    ← Main entry point
├── README.md                     ← This file
└── assets/
    ├── css/
    │   └── style.css             ← All styles
    ├── js/
    │   └── main.js               ← Scroll animations, cursor, interactions
    ├── images/
    │   ├── profile.jpg           ← YOUR PROFILE PHOTO (add this!)
    │   └── profile-placeholder.svg
    └── resume.pdf                ← YOUR CV/RESUME (add this!)
```

---

## How to Add Your Photo

1. Take or select a professional-looking photo (portrait orientation works best).
2. Rename it to `profile.jpg` (or `.png` / `.webp`).
3. Place it in `assets/images/`.
4. Open `index.html` and find the `<img id="heroPhoto">` tag.
5. Change the `src` from `assets/images/profile-placeholder.svg` to `assets/images/profile.jpg`.

**Recommended photo size:** 640 × 800 px minimum, portrait orientation.

---

## Personalisation Checklist

- [ ] Replace `varshayini@example.com` in the Contact section with your real email.
- [ ] Update LinkedIn URL: `https://linkedin.com/in/yourprofile`
- [ ] Update GitHub URL: `https://github.com/yourusername`
- [ ] Add your actual GitHub repo links on each project card (search for `href="#"` inside `.project-links`).
- [ ] Add live demo links where applicable.
- [ ] Place your `resume.pdf` inside `assets/` so the CV download button works.
- [ ] Update the graduating year if needed (currently set to 2026).

---

## Deployment

**GitHub Pages (free):**
1. Push this entire `portfolio/` folder to a GitHub repository.
2. Go to Settings → Pages → set Source to `main` branch, `/ (root)`.
3. Your site will be live at `https://yourusername.github.io/portfolio`.

**Netlify (free, drag-and-drop):**
1. Go to [netlify.com](https://netlify.com) → New site from Git, or drag-and-drop the folder.
2. Done — you get a live URL instantly.

**Vercel (free):**
1. `npm i -g vercel` then run `vercel` inside the portfolio folder.

---

## Technologies Used

- HTML5 / CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts: Cormorant Garamond, DM Mono, Outfit
- No frameworks, no build tools required — just open `index.html` in a browser.
