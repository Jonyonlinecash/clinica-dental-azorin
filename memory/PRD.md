# PRD — Clínica Dental Azorín · Landing Page

## Original Problem Statement
High-converting one-page landing for Clínica Dental Azorín (Burgos, Spain). Move away from cold "hospital" aesthetic; emphasize warmth, trust and resolving dental fears. Key sections: Hero with dual CTA, Social Proof testimonials, Why Us differentiators, Services by patient need (not jargon), Authority/empathy section, Team (Alberto, Jennifer, Teresa), Footer with map + phone (947 64 95 46) + address (C. Azorín, 1, 09005 Burgos) + hours till 22:00.

## User Choices
- 1c — CTAs link to WhatsApp / phone (no backend forms)
- 2c — Stock dental imagery for team
- 3a — Single page, scroll-anchored
- 4a — Spanish only
- 5c — Floating WhatsApp chat button

## Architecture
- **Frontend only**: React 19 + Tailwind + shadcn/ui base.
- **No backend changes**: server.py untouched. Page is fully static (no DB, no auth, no API).
- **Fonts**: Playfair Display (serif headings) + Outfit (sans body) loaded via Google Fonts in `public/index.html`.
- **Theme**: Warm cream (#FDFBF7 / #F3EFE9) + deep professional blue (#0F3D5E) + warm beige accent (#E8C8B5). No purple gradients. No cold hospital blues.

## File Structure
```
/app/frontend/src/
  ├── App.js               (routes Landing)
  ├── App.css              (theme bg)
  ├── index.css            (custom CSS vars, fonts, animations)
  └── components/landing/
      ├── Header.jsx
      ├── Hero.jsx
      ├── TrustStrip.jsx
      ├── SocialProof.jsx
      ├── WhyUs.jsx
      ├── Services.jsx     (interactive tabs)
      ├── Authority.jsx
      ├── Team.jsx
      ├── FinalCTA.jsx
      ├── Footer.jsx       (Google Maps iframe)
      └── WhatsAppFloat.jsx
```

## What's Implemented (Dec 2025)
- ✅ Sticky glass header with mobile menu, click-to-call, WhatsApp CTA
- ✅ Hero: editorial split layout, dual CTA, trust badges (4.8/5, +20 años, phone)
- ✅ Marquee trust strip (8 treatments)
- ✅ Social Proof: 3 testimonials (Raquel González, Teodoro Campos, María L.)
- ✅ Why Us: bento grid with 4 differentiators
- ✅ Services: 4 patient-need tabs (Recuperar / Estética / Salud / Dolor) with interactive panel
- ✅ Authority dark-blue section "Tratamos personas, no bocas" with 3 stats
- ✅ Team: 3 cards (Alberto, Jennifer, Teresa) with stock imagery
- ✅ Final CTA card with WhatsApp + phone + hours table
- ✅ Footer: embedded Google Maps, full contact, social icons, treatment quick links
- ✅ Floating WhatsApp button (bottom-left to avoid Emergent badge) with chat preview card
- ✅ Mobile-first responsive (390px → 1920px)
- ✅ All CTAs use `tel:+34947649546` or `https://wa.me/34947649546`
- ✅ data-testid coverage on all interactive elements
- ✅ Frontend tested: 98% pass (testing_agent_v3 iteration 1)

## Backlog (P1 / P2)
- P1 — Replace stock team images with real photos of Alberto, Jennifer, Teresa (per design guidelines: real photos increase credibility for local businesses)
- P1 — Real Google reviews API or curated review carousel
- P2 — Antes/después gallery for clinical cases
- P2 — Blog/SEO content section ("dentista en Burgos" landing posts)
- P2 — Form-based appointment request with calendar slot picker (would require backend + email integration)
- P2 — Multilingual EN/ES toggle if patient base widens
- P2 — Cookie consent + GDPR/LOPD pages

## Personas
1. **Paciente con miedo** (40-65): vencido por la ansiedad dental, busca trato cercano y sedación.
2. **Caso complejo** (50+): le han dicho "no hay hueso", busca segunda opinión / Implantología Estratégica.
3. **Paciente estético** (25-50): ortodoncia invisible, carillas, blanqueamiento.
4. **Trabajador con horario apretado** (25-55): valora horario hasta 22:00.

## Notes
- Phone canonical: +34 947 64 95 46
- WhatsApp: https://wa.me/34947649546
- Address: C. Azorín, 1, 09005 Burgos
