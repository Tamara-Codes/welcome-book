# 🏖️ Island Guestbook — Ugljan & Pašman

A QR-based, multilingual digital guest guide for holiday apartments on the
Croatian islands of **Ugljan** and **Pašman**. Guests scan **one QR code** in
the apartment and instantly get apartment info, prices, house rules, beaches,
restaurants, activities, ferry info and useful contacts — in their own language.

Built mobile-first with **React + TypeScript + Tailwind CSS**. No backend: all
content lives in one editable file, so the whole project can be cloned per owner.

---

## ✨ Features

- **One QR code per owner** — a single guide with an _Apartments & Prices_
  section containing a card per apartment.
- **6 languages** — English (default), German, Italian, Slovenian, Polish, Czech,
  with a sticky language switcher and automatic browser-language detection.
- **Mobile-first** island/tourism design — sea blue + warm sand, rounded cards,
  large tap-friendly buttons, bottom navigation.
- **Tap-to-act** — `tel:` calls, `wa.me` WhatsApp links and Google Maps links.
- **Edit one file** — `src/data/content.ts` holds all content.
- **Clone per owner** — copy the folder, edit the content file, done.

---

## 🗂️ Project structure

```
island-guestbook/
├─ index.html               # SEO title/description, fonts, root element
├─ package.json
├─ tailwind.config.js        # Island colour palette (sea / sand)
├─ src/
│  ├─ main.tsx               # App entry, wraps everything in LanguageProvider
│  ├─ App.tsx                # Navigation shell (hash routing) + view switcher
│  ├─ index.css              # Tailwind + component classes (.card, .btn-*)
│  ├─ navigation.ts          # View type + nav context
│  │
│  ├─ data/
│  │  └─ content.ts          # 👈 EDIT THIS — all apartments, prices, contacts…
│  │
│  ├─ i18n/
│  │  ├─ types.ts            # Lang list, Localized type, fallback helper
│  │  ├─ ui.ts               # Interface translations (all 6 languages)
│  │  └─ LanguageContext.tsx # useLang(): t() for UI, tc() for content
│  │
│  ├─ components/            # Header, BottomNav, LanguageSwitcher, cards…
│  └─ views/                 # Home, ApartmentInfo, Apartments, Restaurants,
│                            #   Beaches, Activities, Explore, Contacts, Ferry
└─ public/
   └─ favicon.svg
```

---

## 🚀 Running locally

You need **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens on http://localhost:5173)
npm run dev

# 3. Build a production version (static files in dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

To test on your phone while developing, run `npm run dev -- --host` and open the
shown network URL (e.g. `http://192.168.x.x:5173`) on a phone on the same Wi-Fi.

---

## ✏️ Editing content (prices, contacts, recommendations)

**Everything the owner needs is in [`src/data/content.ts`](src/data/content.ts).**
You don't need to touch any other file.

### Change a phone / WhatsApp / host details

```ts
export const host = {
  name: 'Family host',
  phone: '+385 91 000 0000',   // ← real number, full international format
  whatsapp: '385910000000',    // ← digits only, with country code, NO "+"
  email: 'host@example.com',
}
```

- **Phone numbers**: full international format, e.g. `+385 91 123 4567`.
- **WhatsApp**: digits only, no `+` or spaces, e.g. `385911234567`.

### Change Wi-Fi, check-in/out and house rules

Edit the `apartmentInfo` object (Wi-Fi network & password, `checkIn`,
`checkOut`, parking, trash, AC, quiet hours, and the `houseRules` bullet list).

### Change apartment prices

Find the apartment in the `apartments` array and edit its `prices` and
`cleaningFee` (all amounts are in **EUR**):

```ts
{
  id: 'a',
  name: 'Apartment A',
  capacity: 2,
  bedrooms: 1,
  amenities: ['wifi', 'ac', 'seaView', 'terrace', 'kitchen', 'parking', 'tv'],
  prices: [
    { season: 'mayJune', pricePerNight: 70 },
    { season: 'julyAugust', pricePerNight: 110 },
    { season: 'september', pricePerNight: 80 },
  ],
  cleaningFee: 40,
}
```

### Add / edit a restaurant, beach or activity

Add an object to the `restaurants`, `beaches` or `activities` array:

```ts
{
  id: 'my-place',
  name: 'My New Restaurant',
  category: 'restaurant',          // see cat.* keys below
  description: { en: 'Lovely spot by the sea.' },
  phone: '+385 23 000 000',
  maps: 'My Restaurant Pašman',     // place name OR a full Google Maps URL
  tags: ['seafood'],                // beaches use tags like familyFriendly
  gradient: 'from-sea-400 to-sea-600',
}
```

### Add translations to your own text

Every description is a `Localized` value. Only `en` is required; any language
you don't fill in **falls back to English automatically**. To translate, add
more language keys:

```ts
description: {
  en: 'Great wood-fired pizza, loved by families.',
  de: 'Großartige Pizza aus dem Holzofen, beliebt bei Familien.',
  it: 'Ottima pizza al forno a legna, amata dalle famiglie.',
}
```

Available language keys: `en`, `de`, `it`, `sl`, `pl`, `cs`.

> **Note:** Interface labels (buttons, section titles, etc.) are already fully
> translated in all 6 languages in `src/i18n/ui.ts`. Recommendation text is
> shipped in English (plus German samples) and falls back to English until you
> add more — perfectly fine for launch.

### Reference: available keys

- **Amenities** (`amenities: [...]`): `wifi`, `ac`, `seaView`, `terrace`,
  `balcony`, `kitchen`, `parking`, `tv`, `washingMachine`, `dishwasher`, `bbq`,
  `coffeeMachine`
- **Categories** (`category`): `restaurant`, `pizzeria`, `barCafe`, `seafood`,
  `konoba`, `bikeRental`, `scooterRental`, `waterRental`, `boatRental`,
  `excursion`
- **Tags** (`tags: [...]`): `familyFriendly`, `quiet`, `parkingNearby`,
  `goodForSunset`, `pebble`, `sandy`, `crystalWater`, `shade`, `snorkeling`,
  `beachBar`

(New keys you invent will display as the raw key until you add a translation in
`src/i18n/ui.ts` — search for `amenity.`, `cat.` or `tag.`.)

---

## 📱 Generating the QR code (after deployment)

1. **Deploy** the built site to any static host — e.g. **Vercel**, **Netlify**,
   **Cloudflare Pages** or **GitHub Pages**:
   ```bash
   npm run build      # produces the static dist/ folder
   ```
   Then drag-and-drop `dist/` into Netlify, or connect the repo to Vercel.
2. **Copy the live URL**, e.g. `https://family-apartments-ugljan.example.com`.
3. **Create the QR code** pointing to that URL. Options:
   - A free generator like [qr-code-generator.com](https://www.qr-code-generator.com)
     or [qrcode.tec-it.com](https://qrcode.tec-it.com).
   - Or generate one locally:
     ```bash
     npx qrcode "https://your-live-url.example.com" -o guide-qr.png
     ```
4. **Print** the QR code on a small card/sticker and place it in each apartment
   (e.g. on the fridge or welcome folder). Add a short line like
   _“Scan for your digital guest guide”_ in a few languages.

> **Tip:** Deep links work — point a QR straight at a section by adding a hash,
> e.g. `https://your-url/#beaches` or `#contacts`.

---

## 🧬 Cloning the guide for another owner

The project is built so each owner is a separate copy with its own content:

1. **Copy** the whole `island-guestbook` folder (e.g. `guide-krk-owner`).
2. Edit **`src/data/content.ts`** — property name, host, apartments, prices,
   recommendations and contacts for the new owner.
3. Update the SEO **title and description** in `index.html`.
4. Build, deploy, and generate a **new QR code** for that owner.

Because design, translations and content are cleanly separated, no design work
is needed per owner — only the data file changes. This is ready to scale across
Ugljan, Pašman and later Krk.

---

## 🛠️ Tech stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | Hash-based (no router dependency) |
| i18n | Custom lightweight context (no dependency) |
| Backend | None — fully static |
