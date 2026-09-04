# Aissam Personal Training Website

A premium, responsive personal-training website built with plain HTML, CSS and JavaScript for GitHub Pages.

## Files

- `index.html` — complete one-page website
- `style.css` — design, responsive layout and animations
- `script.js` — mobile menu, scroll animations, progress bar and WhatsApp contact
- `assets/trainer.png` — trainer image supplied for this website
- `robots.txt` — search-engine crawler instructions
- `sitemap.xml` — basic sitemap

## Before publishing

Open `script.js` and change:

```js
const CONFIG = {
  whatsapp: "212600000000",
  instagram: "https://instagram.com/",
  email: "your@email.com",
  location: "Marrakech, Morocco"
};
```

Replace the sample testimonials and package prices in `index.html` with your real information.

Also update the URLs in `robots.txt` and `sitemap.xml` after you know your GitHub Pages address.

## GitHub Pages deployment

1. Create a new GitHub repository, for example `aissam-personal-training`.
2. Upload all files and the `assets` folder.
3. Commit the files.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)`.
7. Save.
8. GitHub will provide your public website URL.

## Custom domain

After you buy a domain, add it under **Settings → Pages → Custom domain**, then configure the DNS records at your domain provider.

## Recommended next upgrades

- Real client transformation gallery
- Real testimonials
- Booking calendar
- Payment integration
- Online coaching client area
- Blog / SEO pages
- French and Arabic versions
- Google Analytics / Search Console
