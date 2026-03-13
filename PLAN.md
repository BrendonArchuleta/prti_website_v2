# PRTI Website V3 — Master Ledger (PLAN.md)

## Project Status: 🔥 ACTIVE

## Current Trajectory
- [x] Build Cereen Magazines template from screenshot
- [x] Verify template matches screenshot
- [x] Rebrand to PRTI (colors, content, images)
- [x] Verify PRTI rebrand in browser
- [x] Add About section (team image, mission text, stat counters)
- [x] Add Contact section (form, info cards, CTA)
- [x] Verify About & Contact sections in browser
- [x] Add demo chatbot widget (auto-open, Training/Therapy guide)
- [x] Verify chatbot conversation flow in browser
- [x] Push to GitHub as `prti_website_v2`
- [x] Add Settings & Website Builder panel (V1 — theme picker, content editor, sections)
- [x] Verify Settings panel V1 in browser
- [x] Expand Website Builder to V2 (Squarespace-level — collapsible groups, per-section styling, typography, spacing, nav/footer editors, animations, SEO)
- [x] Verify Website Builder V2 in browser

## GitHub Repository
🔗 **https://github.com/BrendonArchuleta/prti_website_v2**

## Squad Status

| Persona    | Task                                                  | Status        |
|------------|--------------------------------------------------------|---------------|
| Architect  | Map Cereen → PRTI rebrand plan (colors, content, images) | [COMPLETED]   |
| Builder    | Update CSS (PRTI blue/orange), HTML (all PRTI content), generate images | [COMPLETED]   |
| Builder    | Add About section (2-col layout, team image, stat counters) | [COMPLETED]   |
| Builder    | Add Contact section (form + info cards + CTA card) | [COMPLETED]   |
| Builder    | Add demo chatbot widget (auto-open, guided conversation) | [COMPLETED]   |
| Builder    | Push all files to GitHub (`prti_website_v2` repo) | [COMPLETED]   |
| Critic     | Browser verification — all sections + chatbot working | [COMPLETED]   |
| Architect  | Design Settings & Website Builder V1 panel architecture | [COMPLETED]   |
| Builder    | Create `settings.css` + `settings.js` + HTML integration (V1) | [COMPLETED]   |
| Critic     | Browser verification — V1 settings panel functionality | [COMPLETED]   |
| Architect  | Design V2 expansion plan (Squarespace-level) | [COMPLETED]   |
| Builder    | Rewrite `settings.js` (620 lines — 8 themes, per-section, typography, nav/footer, animations, SEO) | [COMPLETED] |
| Builder    | Rewrite `settings.css` (590 lines — collapsible groups, section cards, compact grids) | [COMPLETED] |
| Builder    | Rewrite settings panel HTML (4 tabs, all collapsible groups) | [COMPLETED] |
| Critic     | Browser verification — V2 website builder (8/8 tests passed) | [COMPLETED]   |

## Roadmap
- [ ] Push V2 changes to GitHub
- [ ] Add additional sections (Testimonials, Team, Process) from V2 content
- [ ] Responsive QA across mobile breakpoints
- [ ] Performance audit (image compression, lazy loading)
- [ ] Connect chatbot to a real backend / AI service

## Files
- `Website.v3/index.html` — PRTI-branded HTML (Hero, Services, About, Contact, Chatbot, Settings Panel V2, Footer)
- `Website.v3/styles.css` — PRTI color system + chatbot widget styles + responsive
- `Website.v3/settings.css` — Dark-mode settings panel V2 styles (collapsible groups, section cards, compact grids)
- `Website.v3/script.js` — Animations, counter animations, form handler, chatbot conversation engine
- `Website.v3/settings.js` — Website builder V2 logic (8 themes, per-section styling, typography, spacing, nav/footer, animations, SEO)
- `Website.v3/images/` — prti-logo.png, hero-therapy.png, sidebar-therapy.png, therapy-session.png, about-team.png
