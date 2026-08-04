---
name: apply-picks
description: Apply a Welcome Book owner's /pick/<slug> submission to their property file — translating every single-language field into all 9 guide languages first. Use when Tamara pastes a picker email or its JSON payload, or says "apply picks", "apply the owner's selection", or "customise <slug> from the form".
---

# /apply-picks — turn a picker submission into a customised guide

An apartment owner filled in `/pick/<slug>` and the result arrived by e-mail. This skill turns that
payload into `exclude` / `override` / `extra` on their property file, plus any property-level and
house-rule changes — correctly translated, type-checked, and reported back.

**Never commit.** Leave the changes staged for Tamara to review.

---

## Step 1 — Get the payload

Accept any of: the whole pasted e-mail, just the JSON, or a file path. The e-mail body contains a
readable Croatian summary followed by:

```
--- JSON (za primjenu u property datoteci) ---
{ ...PicksPayload... }
```

Parse the JSON after that marker. Its shape is defined in `app/src/picker/types.ts` — read that file
if anything is ambiguous.

If Tamara pasted only the summary and no JSON block, say so and ask for the JSON — do **not**
reconstruct the payload by hand from the summary. The summary omits field-level detail.

**Validate before touching anything:**

- `slug` exists in `properties` in `app/src/data/content.ts`. If not, stop and ask.
- `island` matches that property's `island` field. A mismatch means a stale link — stop and ask.
- Every id in `exclude` and every key in `override` exists in the island file **or** in the
  property's current `extra`. Ids that match nothing are stale (the island changed since the owner
  filled the form) — list them in your report and skip them; don't fail the whole run.

---

## Step 2 — Translate (the gate — never skip)

`tx()` in `app/src/i18n/types.ts` falls back to **English only**. A Croatian string stored as `en`
shows Croatian to every German, Italian, Slovene, Polish, Czech, Hungarian and Slovak guest. That
failure is silent — nothing crashes, no test catches it, and only a guest ever notices.

So: **every path listed in `payload.needsTranslation` must become a full `Localized` object before
it is written.** Translate from `payload.lang` (normally `hr`) into all nine:

```
en, hr, de, it, sl, pl, cs, hu, sk
```

Match the register of the surrounding island content: warm, concrete, guest-facing, no marketing
fluff. Keep proper nouns (business names, place names) untranslated inside sentences.

Paths look like:

| Path | Where the translated value goes |
|---|---|
| `override/<cardId>/<field>` | `override[cardId][field]` on the property |
| `property/apartmentInfo.<field>` | that dotted path on the property |
| `property/newRules/<i>` | appended to `apartmentInfo.houseRules` |
| `extra/<section>/<i>/note` | the new card's `description` |

Anything **not** in `needsTranslation` is a plain string — phone, website, maps, wifi, check-in
times, host name. Write those through untouched.

**Name fields are the trap.** `PlaceCard.name` and `Contact.label` are `string | Localized`. The
picker always sends a plain string, so check what the existing card uses:

- Existing name is a plain string (a real brand, e.g. `'Restaurant Rivica'`) → keep it a plain string.
- Existing name is `Localized` (a generic word, e.g. a bakery or butcher) → **translate the new
  name too**, or you'll silently drop eight languages.

---

## Step 3 — Apply to the property file

Edit only `app/src/data/properties/<slug>.ts`. Never edit the island file — island content is shared
by every owner on it, and one owner's preference must not reach the others.

**A submission is a full snapshot, not a diff.** The picker seeds itself from the property's current
`exclude` and `override`, so what came back is the complete desired state. **Replace** those fields
outright — do not union with what's already there. (Merging is how a place the owner deliberately
put *back* would stay removed forever.)

### exclude

```ts
exclude: ['rivica', 'plaza-x'],
```

Omit the field entirely when the array is empty.

### override

Field-level only, keyed by card id. Translated fields are full `Localized` objects:

```ts
override: {
  rivica: {
    phone: '+385 51 846 999',
    description: { en: '…', hr: '…', de: '…', it: '…', sl: '…', pl: '…', cs: '…', hu: '…', sk: '…' },
  },
},
```

Write only the fields the owner actually changed. Every field listed here stops tracking the island
file, so a needlessly broad override quietly freezes content you'd otherwise keep improving.

### extra

New places need the fields their type requires, not just what the form collected:

- **`PlaceCard`** (restaurants / beaches / activities / shops): `id`, `name`, `category`,
  `description`, `gradient`.
- **`Contact`**: `id`, `labelKey` *or* `label`, `icon`.

Fill the gaps the picker didn't ask for:

- **`id`** — kebab-case from the name (`'Konoba Stari Mlin'` → `'konoba-stari-mlin'`). Must be unique
  across that section *and* the island's cards.
- **`category`** — an existing `cat.*` key. `grep "'cat\." app/src/i18n/ui.ts` to see what exists. If
  nothing fits, add a new key **in all nine language blocks** in `ui.ts`.
- **`tags`** — same rule with `tag.*`. Optional; skip rather than invent.
- **`icon`** (contacts) — a name from `IconName` in `app/src/components/Icon.tsx`.
- **`gradient`** — required by the type but no longer rendered on place cards (see the `@deprecated`
  note). Copy the value from a sibling card in the same section.
- The form's "Kratak opis" becomes `description` (translated).

### Edits to the owner's own places

A card flagged `own` in the picker already lives in the property's `extra`. If an `override` entry
matches one of those ids, **apply it directly to that card in `extra`** and do not create an
`override` entry — overrides only ever key into island content.

### Property-level fields

`property.changed` holds dotted paths into the property file (`apartmentInfo.wifi.network`,
`host.phone`, `apartmentInfo.parking`, …). Write each one in place. `Localized` fields
(`parking`, `trash`, `ac`, `quietHours`) become full nine-language objects.

An **empty value** means "don't show this":

- `checkIn`, `checkOut`, `parking`, `quietHours` are optional — delete the key.
- `trash` and `ac` are **required** by `ApartmentInfo`. Emptying them won't compile. Don't guess —
  flag it to Tamara and leave the current value in place.

### House rules

`removedRules` holds indices into the property's **current** `houseRules` array. Delete from the
highest index down, or the earlier deletions shift the ones after them. Then append each entry of
`newRules` as a translated `Localized` object.

### Photos

`payload.photos` maps apartment id → an uploaded Vercel Blob URL. For each entry, find the matching
apartment in `apartments` by `id` and set its `image` to that URL — plain overwrite, no translation
(it's a URL, not guest-facing text). An id with no match means the apartment list changed since the
owner opened the picker — list it in your report and skip it, same as a stale `exclude`/`override` id.

---

## Step 4 — Verify

```bash
cd app && npx tsc --noEmit -p tsconfig.app.json
```

Must be clean. Do **not** run `npm run build` or start a dev server unless Tamara asks.

Then re-read your own diff and confirm, concretely:

- Every path from `needsTranslation` has all nine languages present — count them.
- No Croatian text is sitting in an `en` key. Spot-check two of the longest strings.
- The island file is untouched: `git diff --stat app/src/data/islands/`.
- No other property file changed.

---

## Step 5 — Report

Tell Tamara, in this order:

1. **What changed** — counts per section: removed, edited, added, plus property fields and rules.
2. **Anything skipped** — stale ids, an emptied required field, a category with no matching key.
   Be explicit; a silent skip reads as "applied" and she'll find out from the customer.
3. **What she should eyeball** — new cards missing a photo, a description whose translation you
   were least sure of.
4. **The preview URL** — `/<slug>` for the guide, `/pick/<slug>` to see the picker's new starting state.

Leave everything uncommitted.

---

## Notes

- `/mila` is the public demo and carries `demo: true`. Applying a real owner's picks to it would put
  their content on the demo — check that the slug is really the one Tamara means.
- If the payload is large, apply it section by section and typecheck as you go. A single failed
  compile at the end over 40 edits is far harder to unpick than four small ones.
