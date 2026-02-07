# LEGACY PAGES PARITY AUDIT

Generated: 2026-02-06

## Page-by-Page Comparison

---

### /oferta

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/oferta/page.tsx` |
| Text parity | FULL | 4 service sections (Doradztwo, Sprzedaż, Montaż, Serwis) |
| Image parity | PARTIAL | References `/media/oferta/warszawa-adres.jpg`, `/media/oferta/wroclaw-adres.jpg` |
| CTA targets correct? | YES | Links to /kontakt |
| Structural parity | YES | Same sections, same order |
| Missing assets | NONE detected |

**Content sections:**
- ✓ DORADZTWO
- ✓ SPRZEDAŻ
- ✓ MONTAŻ
- ✓ SERWIS
- ✓ "Spotkajmy się" CTA section
- ✓ Location addresses (Warszawa, Wrocław)

---

### /design

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/design/page.tsx` |
| Text parity | FULL | Design Wears Fashion article content |
| Image parity | PARTIAL | Uses `/media/design/moodboard-*.webp`, `/media/design/projektowanie-*.webp` |
| CTA targets correct? | YES | Links to /kontakt |
| Structural parity | YES | Hero + text + gallery + tags |
| Missing assets | NONE detected |

**Content elements:**
- ✓ Title: "DESIGN WEARS FASHION"
- ✓ Subtitle: "Artystyczna interpretacja granic mody i designu"
- ✓ Date: "28 KWIETNIA 2023"
- ✓ Body text (2 paragraphs)
- ✓ 4-image gallery
- ✓ Tags section

---

### /outlet

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/outlet/page.tsx` |
| Text parity | FULL | Headlines, discount text present |
| Image parity | N/A | No images in main outlet page |
| CTA targets correct? | YES | Links to 9 quick-ship pages |
| Structural parity | YES | Same category buttons |
| Missing assets | NONE |

**Category buttons:**
- ✓ SOFY → /quick-ship-luxarte-sofy
- ✓ FOTELE → /quick-ship-luxarte-fotele
- ✓ STOLIKI → /quick-ship-luxarte-stoliki
- ✓ DYWANY → /quick-ship-luxarte-dywany
- ✓ OŚWIETLENIE → /quick-ship-luxarte-oswietlenie
- ✓ STOŁY I KRZESŁA → /quick-ship-luxarte-stoly-i-krzesla
- ✓ REGAŁY I KOMODY → /quick-ship-luxarte-regaly-i-komody
- ✓ PODUSZKI I PLEDY → /quick-ship-luxarte-poduszki-i-pledy
- ✓ AKCESORIA → /quick-ship-luxarte-akcesoria-dekoracyjne

**Quick-ship pages:**
- Products loaded from `src/data/outlet-products.json`
- Images are CDN URLs (luxarte.pl/wp-content/uploads)
- 43 total outlet products across 9 categories

---

### /aktualnosci

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/aktualnosci/page.tsx` |
| Text parity | FULL | 10 articles defined |
| Image parity | FULL | Article images in `/media/pages/aktualnosci/` |
| CTA targets correct? | YES | Links to /aktualnosci/{slug} |
| Structural parity | YES | Grid of news cards |
| Missing assets | NONE detected |

**Articles:**
1. VENICEM – NOWOCZESNE OBLICZE OŚWIETLENIA Z MURANO
2. EXTETA – KOLEKCJA LORO PIANA
3. ARCHIGRAPHICA – NOWOCZESNA KUCHNIA BLISKA NATURZE
4. VALCUCINE – FORMA I FUNKCJA
5. VENICEM – DIAMANTE LAMP
6. BENTLEY HOME CINEMA – PREMIERA
7. TOKYO 2020 – TRUSSARDI CASA
8. MISURAEMME – "NEW COLLECTION PREVIEW"
9. NOWOŚCI OD BUGATTI HOME
10. VH ICONS – VERSACE HOME

---

### /o-nas

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/o-nas/page.tsx` |
| Text parity | FULL | Full company history text |
| Image parity | PARTIAL | Uses `/media/pages/o-nas/image-01.png` |
| CTA targets correct? | N/A | No CTAs |
| Structural parity | YES | Split layout + body text + addresses |
| Missing assets | NONE detected |

**Content elements:**
- ✓ Title: "LUX ARTE – SZTUKA LUKSUSU"
- ✓ Split image/text section
- ✓ Owner mention (Marek Cimke)
- ✓ Brand mentions
- ✓ Marta mention (córka właściciela)
- ✓ Location addresses

---

### /kontakt

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/kontakt/page.tsx` |
| Text parity | FULL | Form labels, addresses present |
| Image parity | N/A | No images |
| CTA targets correct? | N/A | Form submission |
| Structural parity | YES | Contact form + addresses |
| Missing assets | NONE |

**Form fields:**
- ✓ Imię i Nazwisko (required)
- ✓ Email (required)
- ✓ Telefon
- ✓ Wiadomość (required)
- ✓ Submit button

**Note:** Form submission is LOCAL ONLY (console.log), no backend integration.

---

### /bentley-home-cinema

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/bentley-home-cinema/page.tsx` |
| Text parity | FULL | Full article content |
| Image parity | FULL | 10 gallery images in `/media/pages/bentley-home-cinema/` |
| CTA targets correct? | YES | Links to /kontakt |
| Structural parity | YES | Hero + text + gallery |
| Missing assets | NONE detected |

**Gallery images (10):**
- image-02.jpg through image-10.jpg, image-13.jpg

---

### /nasze-marki

| Metric | Status | Details |
|--------|--------|---------|
| Exists? | YES | `src/app/nasze-marki/page.tsx` |
| Text parity | N/A | Only brand grid |
| Image parity | PARTIAL | Uses brand logos + hero images |
| CTA targets correct? | YES | Links to /brand/{slug} |
| Structural parity | PARTIAL | Grid layout differs from legacy |
| Missing assets | 4 brand logos missing |

**Comparison:**
- Legacy: Simple logo grid
- Current: Cards with hero background + logo overlay

---

## Summary Table

| Page | Exists | Text | Images | CTAs | Structure | Assets |
|------|--------|------|--------|------|-----------|--------|
| /oferta | ✓ | FULL | PARTIAL | ✓ | ✓ | OK |
| /design | ✓ | FULL | PARTIAL | ✓ | ✓ | OK |
| /outlet | ✓ | FULL | N/A | ✓ | ✓ | OK |
| /aktualnosci | ✓ | FULL | FULL | ✓ | ✓ | OK |
| /o-nas | ✓ | FULL | PARTIAL | N/A | ✓ | OK |
| /kontakt | ✓ | FULL | N/A | N/A | ✓ | OK |
| /bentley-home-cinema | ✓ | FULL | FULL | ✓ | ✓ | OK |
| /nasze-marki | ✓ | N/A | PARTIAL | ✓ | PARTIAL | 4 logos missing |

## Missing Assets List

| Page | Asset | Path | Status |
|------|-------|------|--------|
| /nasze-marki | noorth logo | /brands/logos-webp/noorth.webp | MISSING |
| /nasze-marki | vitage logo | /brands/logos-webp/vitage.webp | MISSING |
| /nasze-marki | longhi logo | /brands/logos-webp/longhi.webp | MISSING |
| /nasze-marki | dv-home logo | /brands/logos-webp/dv-home.webp | MISSING |
