# Grec — Μουσική ταβέρνα στα Λαδάδικα

Single-page website for **Grec Restaurant**, Αιγύπτου 21, Λαδάδικα, Θεσσαλονίκη.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Lucide React and `next/image`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit things

| What | File |
| --- | --- |
| Business facts (phone, email, address, socials, **menu link**, **opening hours**, **music programme**, hero video) | `src/config/site.ts` |
| All Greek copy | `src/content/el.ts` (shape in `src/content/types.ts`) |
| Every photo (path, alt text, focal point, category, source) | `src/config/images.ts` |
| Gallery order | `galleryOrder` in `src/config/images.ts` |
| Navigation / section ids | `src/config/navigation.ts` |
| Colours, fonts, textures | `src/app/globals.css` (`@theme` tokens) |

### Connect the menu
Put the PDF at `public/menu/grec-menu.pdf` and set `menu.url: "/menu/grec-menu.pdf"` in `site.ts`
(or any page/URL). Until then, the menu buttons scroll to the menu card, which asks visitors to call.

### Opening hours
Fill `openingHours.entries` with all seven days and set `verified: true`. The hours then appear
on the site and in the Restaurant structured data. Nothing is published while `verified` is false.

### Live-music nights
Add entries to `performances` (`{ date: "2026-11-20", time: "21:30", title, artists?, note? }`).
Past dates hide automatically. When the list is empty, the section points visitors to Facebook and Instagram.

### Hero video
Drop a short, muted interior loop into `public/video/` and set
`heroVideo: { src: "/video/grec-interior.mp4", type: "video/mp4" }`. The photo stays as the poster,
and it's the only thing shown to visitors who prefer reduced motion.

### English version
Add `src/content/en.ts` with the same `SiteContent` shape and register it in `src/content/index.ts`.

## Still needs real restaurant input

- **Photos.** Every image currently comes from Grec's official Facebook page, downloaded at up to
  1600 px. Ask the restaurant for the original high-resolution files and confirm the photographer's
  usage rights. Restaurant Guru / TripAdvisor photos were **not** used (customer uploads, watermarked
  or blocked).
- **Food photography.** No clean dish photos were available, so the food section uses an atmosphere
  shot. Add dish photos (category `"food"`) to `images.ts`. The gallery's "Φαγητό" filter appears
  automatically once one exists.
- **Logo.** Built from the Facebook profile image (1000 px JPG, background removed). Replace it with the
  original vector logo (`public/images/brand/`).
- **Menu** PDF or page (see above).
- **Postal code and map pin** (`address.postalCode`, `address.geo`).
- **Production domain:** set `NEXT_PUBLIC_SITE_URL` (used for canonical URL, OG, sitemap, JSON-LD).
- **Interior video** for the hero (optional).
