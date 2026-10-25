# Resin & Radiance — website

A single-page website for Resin & Radiance: handmade resin bangles, jewellery,
pooja thalis, festive pieces and customized gifts. Every order starts on
WhatsApp (+91 82996 16658). There is no cart, login or online payment.

Built with React, Vite and Tailwind CSS. React is the only runtime dependency:
animations are CSS, and the icons are inline SVG, so the page stays light on
mobile data.

---

## Run it on your computer

You need **Node.js 20.19 or newer** (download from nodejs.org).

```bash
npm install        # first time only
npm run dev        # opens a local preview, usually http://localhost:5173
```

To make the production build:

```bash
npm run build      # creates the dist/ folder
npm run preview    # check the build locally
```

`dist/` in this download is already a ready-to-upload build, so you can
deploy it straight away. `npm run build` recreates it after you make changes.

---

## Edit products, names and prices

Open **`src/data/products.js`**. Each product is one block:

```js
{
  id: 'elegant-pooja-thali',
  name: 'Elegant Pooja Thali',           // shown on the card AND in the WhatsApp message
  description: 'Blush-pink resin with gold flakes…',
  price: null,                           // e.g. '₹499'  — null shows "Price on request"
  badge: 'Festive',                      // small label on the photo, or null
  categories: ['pooja', 'festive'],      // which filters it appears under
  image: 'pooja-thali-pink-gold',        // see "Images" below
  imageAlt: 'Blush-pink resin pooja thali…',
}
```

- **Prices:** every product is set to `price: null`, so the site says
  "Price on request". Your posters showed ₹249 (Karwa Chauth bangles, set of 4)
  and Rs. 499 (pooja thali). I didn't put those on the site in case they were
  festival offers. To show them, set for example `price: '₹249 for a set of 4'`.
- **Add a product:** copy a block, change the `id` and the text.
- **Category cards** ("Find Something Beautiful"): `src/data/categories.js`.
- **WhatsApp number, call number, messages, social links:** `src/config/site.js`.
- **FAQ:** `src/data/faqs.js`.
- **Customer reviews:** `src/data/reviews.js`. Add only real reviews. While the
  list is empty the section is hidden on the live site.

## Add or replace images

Photos live in **`public/images/`**.

- **Easiest way:** put your photo in `public/images/` (JPG or WebP), then point a
  product at it by file path:
  `image: 'images/my-new-bangles.jpg'`
- To **replace** an existing photo, overwrite the files with the same names
  (each photo exists in two or three widths, e.g. `pooja-thali-pink-gold-480.webp`
  and `pooja-thali-pink-gold-665.webp`), or simply use the file-path method above.
- `src/data/images.js` lists the built-in photos and their sizes.
- Gallery photos: `src/data/gallery.js`. Hero photos: `src/sections/Hero.jsx`.
- Keep photos under ~300 KB each; [squoosh.app](https://squoosh.app) converts to WebP for free.

Photos used here were cropped from the images you sent: only the product
photography was kept, with no poster text, prices or the Pratibha Resin World
name or logo. The gift-box photo had "Pratibha Resin World" printed on the
jewellery cards; that text was removed so the cards are blank.

## Add your resin-making videos

Put your videos in **`public/videos/`** with these names:

| File | Where it shows |
| --- | --- |
| `resin-making.mp4` | the large featured video |
| `florals-and-foil.mp4` | small video 1 |
| `finishing-touch.mp4` | small video 2 |

That's all. When you run `npm run dev` or `npm run build`, each file that
exists gets a video player with play controls; ones that don't exist show a
"Film coming soon" card. To use other file names, titles or captions, edit
**`src/data/videos.js`**.

Tips: MP4 (H.264) plays on every phone. Portrait phone recordings look best.
Keep each file under about 15 MB. Videos never autoplay.

## Before going live

- **Link preview on WhatsApp/Instagram:** these apps need the full web address of
  the preview image. Build with your domain:
  `SITE_URL=https://your-domain.com npm run build`
  (on Windows PowerShell: `$env:SITE_URL="https://your-domain.com"; npm run build`).
  The preview image is `public/og-image.jpg`.
- **Favicon:** replace `public/favicon.svg` and `public/apple-touch-icon.png`
  with your logo.
- **Social links:** add your Instagram/Facebook/YouTube URLs in
  `src/config/site.js`; the icons appear in the footer automatically.

## Deploy

Any static host works; the build uses relative paths.

- **Netlify Drop (no account setup):** go to app.netlify.com/drop and drag the
  `dist` folder onto the page.
- **Netlify or Vercel from GitHub:** push this folder to a GitHub repo, import it,
  and use build command `npm run build`, output folder `dist`.
- **GitHub Pages / any web host:** upload the contents of `dist/`.

Then connect your own domain in the host's settings and rebuild with `SITE_URL`.

---

## Project structure

```
index.html                 page title, description, link-preview tags
vite.config.js             build settings (video detection, SITE_URL)
public/
  images/                  product photos (WebP)
  videos/                  your process videos go here
  og-image.jpg             link-preview image
  favicon.svg              placeholder icon
src/
  config/site.js           phone numbers, WhatsApp messages, nav, social links
  data/                    products, categories, gallery, videos, FAQs, reviews
  lib/whatsapp.js          builds every wa.me link (one place)
  sections/                one file per page section, in page order
  components/              cards, video player, lightbox, icons
  index.css                colours, fonts and shared styles
```

Fonts are Eczar (headings) and Mukta (text) from Google Fonts. Both are
designed for Latin and Devanagari, so Hindi text will match if you add it.
