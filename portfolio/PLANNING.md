# Project Plan — "Nova Creative" (Freelance Web Designer Portfolio)

**Author:** You  
**Date:** 2025-09-09

## 1) Purpose
A clean, production-ready portfolio for a freelance web designer called **Nova Creative**.  
Goals:
- Showcase selected projects (case-study style).
- Explain services & process.
- Establish credibility (about, testimonials).
- Convert leads via a clear contact form.

## 2) Target Audience
- Small businesses and startups looking for modern, responsive websites.
- Hiring managers seeking frontend skills.

## 3) Pages (5)
1. **Home** — hero, value proposition, featured work, CTA.
2. **About** — skills, tools, values, timeline.
3. **Work** — filterable gallery of projects; links to live demos and repos.
4. **Services** — packages & process, FAQs.
5. **Contact** — form with client-friendly questions and validation.

## 4) Layout & Components (shared across pages)
- **Header**: logo (text), primary nav, mobile menu (hamburger).
- **Footer**: quick links, social icons, email, copyright.
- **Theme Toggle**: light/dark via CSS custom properties + `prefers-color-scheme`.
- **Sections**: responsive grid, generous whitespace, large tap targets.
- **Animations**: scroll-reveal with IntersectionObserver; reduced-motion respected.

## 5) Navigation Map
- Header nav links: Home (/), About (/about.html), Work (/work.html), Services (/services.html), Contact (/contact.html).
- CTAs on hero and project cards route to **Contact** or **Work**.
- Footer repeats critical links and social.

## 6) Content Sketch (wireframe notes)
- **Hero**: left—headline & CTA; right—illustration/preview.
- **Featured Work**: 3 cards, image → title → tags → actions.
- **Process**: 4-step timeline icons.
- **Testimonials**: 2 short quotes.
- **Contact**: short form (name, email, budget, message).

## 7) Accessibility & Performance
- Landmark elements: `header`, `nav`, `main`, `footer`.
- Skip link for keyboard users.
- `aria-expanded`, `aria-controls` on mobile menu; focus styles visible.
- Sufficient color contrast (WCAG AA).
- Responsive images; `loading="lazy"`; minified CSS/JS ready for deployment.
- Avoids layout shift by reserving image space.

## 8) Tech Choices
- HTML5 semantic structure.
- CSS with custom properties, fluid type/spacing, CSS Grid/Flex.
- Vanilla JS modules: `nav.js`, `theme.js`, `scroll.js`, `form.js`.
- No frameworks required; deployable to GitHub Pages, Netlify, or Vercel.

## 9) Success Criteria
- Mobile-first responsive design.
- Consistent header/footer across pages.
- At least one interactive element per page (nav toggle, filters, form validation, scroll reveal).
- Live, publicly accessible URL with working navigation and assets.
