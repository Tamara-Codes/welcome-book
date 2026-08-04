---
name: new-property
description: Scaffold a brand-new customer property file and register it, so Tamara can send a /pick/<slug> link right after someone agrees to buy — before any real details are known. Use when Tamara says a customer said yes / agreed to buy, wants a new property created, or asks for a picker link for someone who doesn't have a guide yet.
---

# /new-property — go from "they said yes" to a sendable picker link

A customer just agreed to buy. The guide doesn't exist yet and most details (host contact,
apartment names, prices) aren't known yet either — that's fine, they get filled in later, partly
by the owner via `/pick/<slug>` (see the `apply-picks` skill) and partly by Tamara once the owner
sends photos/prices.

This skill's only job: create a minimal, correct, registered property file so that `/pick/<slug>`
works today. **Never commit** — leave it staged for Tamara to review, same as `apply-picks`.

---

## Step 1 — Gather what's known

Ask Tamara (don't guess) for:

- **Display name** — e.g. "Apartmani Sonia"
- **Island** — must be a key in `islands` in `app/src/data/content.ts` (currently `krk`,
  `crikvenica`). If it's a new location, stop and say so — that's a bigger job (a new island file),
  not this skill.
- **Number of apartments** (a guess is fine — the picker doesn't edit apartment count, but the
  guide needs at least one to render sensibly)
- Anything already known about the host (name/phone/whatsapp/email) — otherwise placeholder.

Everything else is a placeholder the owner fixes via the picker's "Smještaj" tab, or that Tamara
fills in later once the owner sends real details.

---

## Step 2 — Read the current shape before writing anything

Interfaces drift over time — don't rely on this doc's memory of them. Before writing the new file:

1. Read `Property`, `PropertyMeta`, `Host`, `ApartmentInfo`, `Apartment`, `ReviewLink` in
   `app/src/data/content.ts` — these are the exact fields required/optional today.
2. Read `app/src/data/properties/sonia.ts` as the placeholder-pattern template — it's a real,
   already-working "real customer, mostly-placeholder" property. Match its conventions:
   - `demo: false` (real customer — no promo badge/CTA ever shown to their guests)
   - `published: false` — the guide stays offline until Tamara flips it once it's ready; the
     picker link (same slug, under `/pick/`) works regardless
   - wifi password placeholder: `'promijeni-me'`
   - `trash` / `ac`: `{ en: 'To be confirmed with the host.', hr: 'Provjerite s domaćinom.' }`
   - `houseRules: []`
   - `checkIn`/`checkOut`: reasonable defaults (`'15:00'` / `'10:00'`) — real ones come via the
     picker
   - apartments named `Apartman 1`, `Apartman 2`, ... with `prices` at `0` and a distinct
     `gradient` per apartment (vary the `sea-N` shade so cards don't look identical); leave
     `image` unset — the owner can upload a photo per apartment via the picker's "Smještaj" tab
   - `reviews`: only add if Tamara gives you real Booking/Airbnb/Google links — omit otherwise,
     don't invent placeholder review URLs (unlike sonia.ts's example links, which point at
     generic homepages, not this customer's actual listings)

---

## Step 3 — Pick a slug

One slug, used for both `/pick/<slug>` (the owner) and `/<slug>` (the live guide, once
`published` flips to true) — e.g. `apartmani-sonia`, matching the business name. It's readable and
brandable for the QR code / printed material.

The picker has no login, so in principle anyone who finds `/pick/<slug>` could submit changes as
if they were the owner — but the realistic risk is an occasional bogus submission, not a data
breach (there's nothing sensitive on that page). Tamara's chosen not to obscure the slug for that;
keep it simple and readable.

**Check uniqueness**: grep `app/src/data/content.ts` for the candidate slug before writing anything.
If it collides, pick another.

---

## Step 4 — Write the property file

Create `app/src/data/properties/<slug>.ts`. Follow the header-comment style of existing files (see
`mila.ts` / `sonia.ts`) — state at the top that this is a real customer and which fields are
placeholders the owner can fix via `/pick/<slug>`.

---

## Step 5 — Register it

Edit `app/src/data/content.ts` in exactly two places, touching nothing else:

1. Add the import near the other property imports (top of file):
   ```ts
   import { <name> } from './properties/<slug>'
   ```
2. Add one line to the `properties` map:
   ```ts
   '<slug>': <name>,
   ```

Do **not** reorder, reformat, or touch any other entry in either file.

---

## Step 6 — Verify before handing back

Re-read both files after editing and check by hand (do not run `npm run build`/`npm run dev` —
Tamara's global rule is not to run those proactively; ask first if you want that extra check):

- [ ] The slug in the property file's header comment matches the key used in `content.ts`
- [ ] `published: false` is set
- [ ] `island` is a real key in the `islands` map
- [ ] Every required `Property` field is present (re-check against the interface you read in Step 2)
- [ ] The import path and variable name match what the file actually exports
- [ ] No other property's entry in `content.ts` changed

---

## Step 7 — Hand back the link

Report:

- The slug and file path
- The picker link to send: `https://welcomebook.eu/pick/<slug>`
- A one-line reminder of what's still a placeholder and how it gets fixed: host/wifi/check-in/
  house-rules AND apartment photos are fixed by the owner directly via the picker; apartment
  names/prices need the owner to send them separately and then get applied by Tamara.
