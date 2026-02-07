# NAVIGATION AND HEADER AUDIT

Generated: 2026-02-06

## Header Menu Items (Actual Rendered)

Desktop navigation order (left to right):
1. **MARKI** (dropdown)
2. **KATEGORIE** (dropdown)
3. **BENTLEY HOME CINEMA** (link)
4. **OUTLET** (link)
5. **AKTUALNOŚCI** (link)
6. **O NAS** (link)
7. **KONTAKT** (link)

Right side:
- Language switch: PL | EN (static, no functionality)
- Hamburger menu (mobile only)

## Dropdown Structure

### MARKI Dropdown

Parent link: `/gallery?mode=brand`

Brand list (18 brands, sorted by sortOrder):

| # | Label | Link Target |
|---|-------|-------------|
| 1 | Versace Home | `/gallery?brand=versace-home` |
| 2 | Trussardi Casa | `/gallery?brand=trussardi-casa` |
| 3 | Bentley Home | `/gallery?brand=bentley-home` |
| 4 | Bugatti Home | `/gallery?brand=bugatti-home` |
| 5 | Dolce & Gabbana Casa | `/gallery?brand=dolce-gabbana-casa` |
| 6 | Visionnaire | `/gallery?brand=visionnaire` |
| 7 | Roberto Cavalli Home Interiors | `/gallery?brand=roberto-cavalli-home-interiors` |
| 8 | MisuraEmme | `/gallery?brand=misuraemme` |
| 9 | SCIC Italia | `/gallery?brand=scic-italia` |
| 10 | Valcucine | `/gallery?brand=valcucine` |
| 11 | Exteta | `/gallery?brand=exteta` |
| 12 | Gaggenau | `/gallery?brand=gaggenau` |
| 13 | Venicem | `/gallery?brand=venicem` |
| 14 | Vanory | `/gallery?brand=vanory` |
| 15 | Noorth | `/gallery?brand=noorth` |
| 16 | Vitage | `/gallery?brand=vitage` |
| 17 | Longhi | `/gallery?brand=longhi` |
| 18 | DV Home | `/gallery?brand=dv-home` |

### KATEGORIE Dropdown

Parent link: `/gallery?mode=category`

Categories grouped by navGroup (30 categories):

**MEBLE (18 categories):**
- Akcesoria → `/gallery?category=akcesoria`
- Biuro → `/gallery?category=biuro`
- Dywany → `/gallery?category=dywany`
- Fotele → `/gallery?category=fotele`
- Hokery → `/gallery?category=hokery`
- Komody → `/gallery?category=komody`
- Konsole → `/gallery?category=konsole`
- Krzesła → `/gallery?category=krzesla`
- Lustra → `/gallery?category=lustra`
- Łóżka → `/gallery?category=lozka`
- Pufy → `/gallery?category=pufy`
- Regały → `/gallery?category=regaly`
- Sofy → `/gallery?category=sofy`
- Stoliki boczne → `/gallery?category=stoliki-boczne`
- Stoliki kawowe → `/gallery?category=stoliki-kawowe`
- Stoły → `/gallery?category=stoly`
- Szafki nocne → `/gallery?category=szafki-nocne`
- Toaletki → `/gallery?category=toaletki`

**OŚWIETLENIE:**
- Oświetlenie → `/gallery?category=oswietlenie`

**KUCHNIE:**
- Kuchnie → `/gallery?category=kuchnie`

**GARDEROBY:**
- Garderoby → `/gallery?category=garderoby`

**ŁAZIENKI:**
- Łazienki → `/gallery?category=lazienki`

**OGRÓD:**
- Meble ogrodowe → `/gallery?category=meble-ogrodowe`

## Dropdown Behavior

| Behavior | Desktop | Mobile |
|----------|---------|--------|
| Trigger | Hover | Tap |
| Animation | CSS transition | Slide |
| Close | Mouse leave | Back button / overlay tap |
| Bridge | Yes (gap prevention) | N/A |

Desktop specifics:
- `.dropdown-bridge` element prevents accidental close when moving mouse to dropdown
- Dropdown opens on hover over nav item
- Dropdown closes on mouse leave

## Hamburger Menu Behavior

- Icon: 3 horizontal lines
- Opens drawer from right side
- Drawer width: 80vw
- Overlay covers rest of screen
- Body scroll locked when open

Mobile navigation structure:
```
Main Panel:
├── MARKI → (drill to brands panel)
├── KATEGORIE → (drill to categories panel)
├── BENTLEY HOME CINEMA (link)
├── OUTLET (link)
├── AKTUALNOŚCI (link)
├── O NAS (link)
├── KONTAKT (link)
└── Language switch (PL | EN)

Brands Panel:
├── ← Wstecz (back button)
├── Wszystkie marki (link to /gallery?mode=brand)
└── [All 18 brands as links]

Categories Panel:
├── ← Wstecz (back button)
├── Wszystkie kategorie (link to /gallery?mode=category)
└── [Categories grouped by navGroup]
```

## All Header Link Targets

| Element | Target URL |
|---------|------------|
| Logo | `/` |
| MARKI parent | `/gallery?mode=brand` |
| MARKI items | `/gallery?brand={slug}` |
| KATEGORIE parent | `/gallery?mode=category` |
| KATEGORIE items | `/gallery?category={slug}` |
| BENTLEY HOME CINEMA | `/bentley-home-cinema` |
| OUTLET | `/outlet` |
| AKTUALNOŚCI | `/aktualnosci` |
| O NAS | `/o-nas` |
| KONTAKT | `/kontakt` |

## Mismatches vs Legacy

| Item | Legacy | Current | Status |
|------|--------|---------|--------|
| Menu order | MARKI, KATEGORIE, BENTLEY, OUTLET, AKTUALNOŚCI, O NAS, KONTAKT | Same | ✓ MATCH |
| Brand links | Direct to `/marka/{slug}` | Gallery filter `/gallery?brand={slug}` | ✗ DIFFERENT |
| Category links | Direct to `/kategoria-produktu/{slug}` | Gallery filter `/gallery?category={slug}` | ✗ DIFFERENT |
| Language switch | Functional (PL/EN) | Static display only | ✗ BROKEN |
| OFERTA link | Present in legacy | MISSING from header | ✗ MISSING |
| DESIGN link | Present in legacy | MISSING from header | ✗ MISSING |
| Logo width | ~200px | 180px | Minor difference |
| Header height | Variable | 60px | Minor difference |

## Footer Brand Links

Footer contains "NASZE MARKI" section with links:

| Footer Link | Target | Notes |
|-------------|--------|-------|
| Dolce & Gabbana | `/brand/dolce-gabbana` | BROKEN - slug mismatch (should be dolce-gabbana-casa) |
| Versace Home | `/brand/versace-home` | ✓ Works |
| Roberto Cavalli Home Interiors | `/brand/roberto-cavalli` | BROKEN - slug mismatch (should be roberto-cavalli-home-interiors) |
| Trussardi Casa | `/brand/trussardi-casa` | ✓ Works |
| Bentley Home | `/brand/bentley-home` | ✓ Works |
| Bugatti Home | `/brand/bugatti-home` | ✓ Works |
| Visionnaire | `/brand/visionnaire` | ✓ Works |
| Valcucine | `/brand/valcucine` | ✓ Works |
| Gaggenau | `/brand/gaggenau` | ✓ Works |
| SCIC Italia | `/brand/scic` | BROKEN - slug mismatch (should be scic-italia) |
| Vanory | `/brand/vanory` | ✓ Works |

**Broken footer links: 3**
