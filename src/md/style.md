# Portfolio Website Styling Guide

## Design Philosophy
Create a modern, minimal, premium developer portfolio.
The design must feel professional, clean, and confident.
Avoid visual noise, gradients, or unnecessary decorations.

Dark mode is the primary experience.

---

## Color System

### Primary Background (Dark Mode)
- Background must be **solid pure black**: `#000000`
- No gradients, no textures, no transparency

### Light Mode Background
- Background: `#FFFFFF`
- Surfaces slightly off-white for separation

### Surface Colors
- Dark mode surface/cards: `#0F0F0F`
- Light mode surface/cards: `#F6F6F6`

### Accent Color
- Accent color: **Red** `#E10600`
- Use accent color only for:
  - Primary buttons
  - Links
  - Active navigation items
  - Icons and highlights
  - Focus and hover states

Rules:
- Never use accent color for large background areas
- Never introduce secondary accent colors
- Accent color must clearly stand out on black and white backgrounds

---

## Typography

- Font family: Inter / Geist / System UI
- Headings: Semi-bold to bold
- Body text: Regular weight
- High readability and comfortable line height
- No decorative or script fonts

Text colors:
- Dark mode primary text: `#FFFFFF`
- Dark mode secondary text: `#A3A3A3`
- Light mode primary text: `#111111`
- Light mode secondary text: `#555555`

---

## Layout & Spacing

- Centered layout with max width (1100–1200px)
- Generous padding and whitespace
- Clear visual hierarchy
- Consistent spacing system throughout the site

---

## Components

### Navigation
- Minimal top navigation
- Transparent or background-matching navbar
- Active link highlighted using red accent
- No shadows in dark mode

### Buttons
- Rounded corners (8–12px)
- Solid red background for primary actions
- White text on red buttons
- Subtle hover animation (translate or opacity)

### Cards
- Slightly elevated using surface color difference
- Borders instead of shadows in dark mode
- Border color slightly brighter on hover using accent color

---

## Interaction & Motion

- Smooth transitions (150–250ms)
- Subtle hover effects only
- No heavy animations
- Motion should feel fast and elegant

---

## Dark / Light Mode Behavior

- Support both dark and light mode
- Dark mode is default
- Colors must switch using CSS variables
- No layout changes between modes

---

## Accessibility

- Maintain strong contrast ratios
- Text must be readable on pure black
- Clear focus states using red accent
- Avoid tiny font sizes

---

## Technical Constraints

- Built using Next.js
- Styling compatible with:
  - CSS Variables
  - Tailwind CSS
  - CSS Modules
- No inline hard-coded colors
- Theme tokens must be reusable and scalable

---

## Overall Feel

The website should feel:
- Minimal
- Confident
- High-end
- Developer-focused

Avoid:
- Gradients
- Glassmorphism
- Neon effects
- Excessive animations
