# KEPTILON DESIGN LOCK DOCUMENT

**Status:** LOCKED — single source of truth for implementation  
**Protocol:** Design Lock Protocol (Strict Implementation Mode)  
**Approved brand:** Life Arc House + Operators & Guides (4+3)  
**Approved sitemap:** Option A — Arc Hub  
**Approved UI recipe:** Phase 5  
**Approved motion:** Phase 8  
**Approved system:** A Parchment (default) + C Night Companion (toggle)  
**Visual truth:** Approved mockups `keptilon-43-*`, `keptilon-p5-*`, `keptilon-p6-*`

> Approved designs are **specifications**, not suggestions.  
> Implementation success = faithful execution. No silent redesign.

---

## 1. Global Style (LOCKED)

### Visual direction
- Warm parchment advisory house
- Classical / editorial calm
- Thin line icons + restrained craft photography on venture pages
- AI never in hero; capability layer only under How We Work

### Branding
| Token | Locked value |
|-------|----------------|
| Master line | One house for the whole arc. |
| Support | Guidance that does not stop at advice. |
| Wordmark | `KEPTILON` — all-caps optical serif |
| Personality | Operators & Guides — we don’t stop at advice |
| Architecture | Parent orients · ventures convert |

### Colour palette — System A (default)
| Token | Hex | Use |
|-------|-----|-----|
| `bg` | `#F3EEE6` | Page background |
| `bg-soft` | `#FAF7F2` | Soft bands |
| `bg-elevated` | `#FFFFFF` / parchment elevate | Surfaces |
| `ink` | `#1C1917` | Headings / primary text |
| `ink-2` | `#57534E` | Body |
| `ink-3` | `#8A8178` | Meta / captions |
| `line` | `#D6D0C6` | Dividers / hairlines |
| `green` | `#0F5C4A` | Primary CTA, Arc active, primary accent |
| `green-hover` | `#0B4A3C` | Primary hover |
| `terracotta` | `#9B2D2D` | Secondary CTA, CofWaf accent, secondary emphasis |
| `terracotta-soft` | `#F3E4E0` | Soft washes |

### Venture accents (dots / crumbs / labels only)
| Venture | Accent |
|---------|--------|
| Destiny | `#C9A227` |
| Academy | `#2F7DD1` |
| TalentX | `#7C6BC4` |
| CofWaf | `#9B2D2D` |
| Venture | `#0F8A74` |

### System C — Night Companion (optional toggle)
- Deep ink ground `#14110F`
- Parchment text
- Muted green / terracotta
- Morph ~300ms; no hard flash

### Typography
| Role | Spec |
|------|------|
| Display | Cormorant Garamond — headlines, wordmark, stage names, quotes |
| UI / Body | Outfit — nav, body, buttons |
| Eyebrow | Outfit 0.72rem, weight 700, tracking ~0.18em, uppercase, green |
| H1 | `clamp(2.9rem, 5.6vw, 4.5rem)`, weight 600, line-height ~1.12, tracking -0.02em |
| Body | ~1.05–1.125rem / 1.7 |
| Forbidden as brand voice | Inter, Roboto, Arial, system-ui as primary; Fraunces/Manrope retired (Option B approved) |

### Spacing scale
`4 · 8 · 16 · 24 · 40 · 64 · 104 · 160`  
Section padding: desktop `104–120`, mobile `64–96`  
Content max width: `1180px`  
Container horizontal padding: `24` mobile / `32` desktop

### Radius
| Element | Radius |
|---------|--------|
| Buttons / pills | `999` (full pill) |
| Inputs / tickets | `12` |
| Operators/Guides tall panels | `2.5–3rem` (tall rounded) |
| Images (general) | `0–8` (prefer squarer craft) |
| Arc nodes | `999` |

### Shadows
| Level | Spec |
|-------|------|
| Soft | `0 1px 2px rgba(28,25,23,.06)` |
| Lift | `0 12–18px 32–44px rgba(28,25,23,.08–.10)` |
| Forbidden | Neon glow, multi-layer coloured shadows |

### Texture / atmosphere
- Parchment grain ~2–3% opacity overlay
- Soft radial wash green ~8–9% / terracotta ~8% behind Home hero (approved elevation)
- Forbidden: purple nebula, gold metallic glare, starfield hero

### Icon / illustration style
- Thin stroke line icons (~1.5–2px)
- Arc stage icons: Self / Skill / Team / Business / Capital
- Home hero: classical house vignette bottom-left — fine-line / wash, atmospheric scale (not a tiny stamp)
- Venture pages: documentary craft photography allowed
- Forbidden: emoji chrome, neon zodiac, AI-robot stock

---

## 2. Layout Rules (LOCKED)

### Sitemap (Arc Hub)
```
/                 Home
/#arc             The Arc (section; optional /arc later)
/how-we-work      How We Work
/about            About
/contact          Contact
/cofwaf           CofWaf
/destiny          Destiny
/academy          Academy
/talentx          TalentX
/venture          Venture
/privacy          Privacy
/terms            Terms
```

### Navigation (Quiet Bar + ventures inline) — updated by explicit request
- Left: `KEPTILON` serif wordmark
- Center: Destiny · Academy · TalentX · CofWaf · Venture (accent dots, direct links)
- Utility (xl+): The Arc · How We Work · About
- Far right: primary pill CTA `Start where you are`
- Theme toggle A↔C allowed (System C)
- Sticky, parchment blur nav, hairline bottom border
- Height ~72px
- Mobile: hamburger lists ventures first, then house links

### Page width / grid
- Max container 1180px
- Home hero: ~45% copy / ~55% Arc diagram (desktop)
- No cards in hero
- No stats strip in first viewport

### Responsive
- Mobile Home Arc = vertical editorial rows (not horizontal stones as primary click target)
- Desktop Arc = stepping-stone / column journey + editorial rows below
- CofWaf sticky WhatsApp bar mobile only

---

## 3. Component Library (LOCKED)

### Buttons (p5-06)
| Variant | Appearance | Text color | Hover | Active | Focus |
|---------|------------|------------|-------|--------|-------|
| Primary | Forest fill, pill, trailing `→` | parchment/white | deepen green, lift -2px | scale 0.98 | green ring 2px offset 3 |
| Secondary | Terracotta 1–2px outline, pill, trailing `→` | terracotta | soft terracotta wash | scale 0.98 | green ring |
| Ghost | No border/fill (ink), trailing `→` or underline | ink | ink-2 → ink | — | green ring |

**Forbidden:** ghost with grey box border as default; secondary with ink text instead of terracotta.

### Arc nodes
- Default: accent ring + icon
- Hover: scale ~1.05, soft glow, lift
- Active: solid accent / filled state on crumb rail

### Editorial Arc rows
- Grid: who · italic desire quote · venture name + arrow
- Hover: active full; siblings dim ~40%; quote translates +8px; arrow appears

### Quote / testimonial
- Left rule green or venture accent
- Italic serif quote
- Small caps / uppercase attribution

### Forms
- Label uppercase small above field
- Height ≥ 48
- Radius 12
- Border line → focus green
- Stage/venture selector chips or select
- Contact: A+B hybrid — selector form; if CofWaf → WhatsApp preference

### Cards
- Default: **no cards**
- Allowed only for interaction containers (tickets, courses, enroll, form)
- Radius 12–16, 1px line, soft fill — not 24+ SaaS blobs

### Navbar dropdown (Ventures)
- Accent dot · name · stage
- Soft elevated parchment panel

### Footer Arc mini-map
- Five stage icons with Self→Capital order
- Links to ventures
- Utility: Contact · email · Privacy · Terms · © Keptilon Universe Pvt Ltd

---

## 4. Motion Library (LOCKED — Phase 8)

### Ship
1. Arc draw-on (signature) 700–1100ms  
2. Hero stagger entrance ~80–120ms steps  
3. Editorial row focus (dim siblings)  
4. Operators/Guides light shift  
5. Button micro-lift -2px + arrow nudge  
6. Parent ↔ venture transition + Arc crumb highlight  
7. A↔C theme morph ~300ms  
8. CofWaf sticky WhatsApp (mobile)  
9. Krater stat count-up once  
10. Form/enroll step progress  

### Tokens
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)`
- Fast 160–200 · Default 280–400 · Slow 700–1100
- `prefers-reduced-motion`: snap to final state

### Never ship
Spotlight cursor · magnetic buttons · 3D tilt spam · starfield hero · scroll-jacking · infinite orbit spinners

---

## 5. Page Blueprints (LOCKED)

### Home `/`
**Order:**  
1. Quiet Bar  
2. Hero — Statement left + Arc diagram right (mockup 43-01)  
3. The Arc — columns + editorial rows (mockup 43-02 / Phase 5 A+B)  
4. Operators & Guides teaser — tall split (mockup 43-03)  
5. Vision / Mission  
6. FAQ (optional support; do not displace locked sections)  
7. Final CTA  
8. Footer Arc mini-map  

**Hero content (exact — elevation v2 approved):**
- No eyebrow in first viewport (brand carried by wordmark + H1)
- H1: One house for the whole arc.  
- Lede: Guidance that does not stop at advice — for people, professionals, founders and businesses.  
- Primary CTA: Start where you are  
- Secondary CTA: Explore how we work  
- Atmosphere: soft green + terracotta radial washes; larger classical house vignette bottom-left  
- Arc nodes (L→R): Self · Skill · Team · Business · Capital with locked blurbs; stronger hover lift  
- Closing line: One house. Every stage. Real support.  
- **No stats in hero**

### How We Work `/how-we-work`
1. Centered title “How Keptilon works” + terracotta support line  
2. Tall Operators | Guides split + Insight → Action  
3. Method Clarify → Choose → Act → Stay  
4. Capabilities secondary chips/cards  
5. Dual CTA: Talk to Keptilon · Start where you are  

### About `/about`
Story · Vision/Mission · Brand architecture (five doors) · What we are/aren’t · Legal entity · Contact CTA  

### Contact `/contact`
Prompt · Stage/venture selector · Form · Email alt · WhatsApp path if CofWaf  

### CofWaf `/cofwaf`
- Branch mark: `KEPTILON | CofWaf`  
- Split hero: terracotta H1 “Find your missing piece.” · WhatsApp + See Build Scale Sustain  
- Arc crumb with Business active  
- Chips · Kitchen POV · Build/Scale/Sustain · Problem tickets · Krater · Why ledger · Shubh Aarambh · Final WhatsApp · Mobile sticky  

### Destiny `/destiny`
- Branch mark · split hero · Arc crumb Self  
- Two branches · 4 steps · Elsewhere ledger · Ethos · Enrollment  

### Academy / TalentX / Venture
Shared skeleton: branch mark · split hero · Arc crumb · offerings · 3 steps · why ledger · ethos · waitlist/talk + stage note · Back to Arc  
TalentX: Employer/Candidate doors · Venture: Founder/Investor doors  

### Privacy / Terms
Content kept; visual restyle only; placeholders remain until filled  

---

## 6. Content rules (LOCKED)
- Source of truth: keptilon.com audit  
- Keep venture offers, Krater stats, WhatsApp `+91 99744 06111`, vision/mission meaning, legal body  
- Do not delete without explicit approval  
- Old slogan “One stop solution for all human errors” retired from primary UI  

---

## 7. Change control
Any deviation requires a written proposal:
Current Design · Suggested Change · Reason · Benefits · Trade-offs · Visual Impact · Implementation Impact  
Wait for explicit approval.

---

## 8. Fidelity target
**95–100% visual fidelity** to locked mockups + this document.  
If technically blocked: stop, explain, propose alternatives, wait.

---

## 9. Implementation audit checklist (per page)
- [ ] Layout matches blueprint  
- [ ] Spacing / type / colour tokens match  
- [ ] Components match library (buttons, nodes, rows)  
- [ ] Motion matches library  
- [ ] No invented/removed/merged locked sections  
- [ ] Would not be confused with a different design  

**Document owner:** Implementation engineer mode  
**Last locked:** Home elevation v2 + Font Option B (Cormorant Garamond + Outfit)
