---
name: Nexin Landing UI Architecture & Components
description: Technical guidelines and strict constraints for using the core UI component library (Box, Typography, Button) to ensure a consistent, maintainable, and predictable design system.
---

# Nexin Landing UI Guidelines

This document serves as a skill standard for an AI programming agent to understand, reuse, and strictly follow the design system established for the Nexin Landing application.

## 1. Core Principles

- **No Native HTML Structural Elements:** Avoid using raw `<div>`, `<section>`, `<main>`, `<header>`, `<footer>`, `<span>`, `<p>`, `<h1>`-`<h6>`, `<button>`, or `<a>` elements unless it is explicitly justified to break the design system.
- **Polymorphic Primitives:** The application uses custom React wrapper components (`Box`, `Typography`, `Button`) as primitives. They utilize the `as` prop to delegate semantic HTML tags while maintaining a standardized Prop and Styling API.
- **Strict Size/Color Constraints:** Design decisions regarding typography scales, spaces, colors, and font-weights are hardcoded using `class-variance-authority` (CVA). Do not invent custom tailwind sizes manually when a component prop exists for that exact purpose.
- **Routing:** Always use Next.js `Link` component (`import Link from "next/link"`) over raw `<a>` tags for optimal client-side transitions, unless linking externally.

---

## 2. Component API Reference

### 2.1. The `Box` Container (`@/theme/components/box`)

The `Box` component is the absolute foundation for ALL layout construction. It replaces native `div`s.

- **Polymorphism:** Use the `as` prop to provide semantic layout meaning (e.g., `as="section"`, `as="main"`, `as="header"`, `as="footer"`, `as="article"`).
- **Default:** Renders a `<div>` if `as` is omitted.
- **Ref forwarding:** Fully forwards ref and all intrinsic `HTMLElement` attributes.
- **Styling:** Accepts `className` via `cn()` merger to combine custom Tailwind classes.

**Example Usage:**

```tsx
<Box as="section" className="flex flex-col gap-4 max-w-7xl mx-auto py-12">
  <Box className="grid grid-cols-1 md:grid-cols-2">{/* Content */}</Box>
</Box>
```

### 2.2. The `Typography` Text Node (`@/theme/components/typography`)

`Typography` replaces native text tags like `h1`, `h2`, `h3`, `p`, `span`, `small`, etc.
It is built on a highly strict constraint model using `cva` to ensure consistent scales.

**Props (`VariantProps`):**

- **`variant`** (Strict Semantic Category):
  - `"title"` (Default mapped to `h2`, default weight: `bold`)
  - `"paragraph"` (Default mapped to `p`, default weight: `regular`)
  - `"subtitle"` (Default mapped to `span`, default weight: `regular`)
- **`size`** (Responsive T-Shirt scales calculated RELATIVE to the variant):
  - `"xs" | "sm" | "md" | "lg" | "xl"`
  - _Note:_ A `"md"` title is inherently larger than a `"md"` paragraph. Use `"md"` as the default baseline size.
- **`color`**:
  - `"default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "muted"`
- **`weight`**:
  - `"light" | "regular" | "bold" | "black"`
- **`as`**: Use only to hard-override the default semantic HTML tag if necessary (e.g., `as="h1"` for SEO inside a `"title"` variant).

**Example Usage:**

```tsx
{
  /* Page Header (h1) */
}
<Typography variant="title" size="xl" as="h1" className="mb-6">
  Welcome to Nexin
</Typography>;

{
  /* Standard readable text (p) */
}
<Typography variant="paragraph" size="md" color="muted">
  Enjoy module-to-module integrations with zero hassle.
</Typography>;

{
  /* Small contextual indicators (span) */
}
<Typography variant="subtitle" size="sm" weight="bold">
  NEW MODULE
</Typography>;
```

### 2.3. The `Button` Interactive Element (`@/theme/components/button`)

Replaces the native HTML `<button>`. Designed to support Lucide React icon injection and unified sizes out of the box.

**Props:**

- **`variant`**: `"filled" | "outlined" | "glass" | "ghost" | "unstyled"`
- **`size`**: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "icon"`
- **`icon`**: Accepts a React component or Lucide icon directly. It will prepend the icon symmetrically to the text.
- _Default element is a native `<button>` element._

**Example Usage:**

```tsx
import { Zap } from "lucide-react";

<Button variant="filled" size="lg" icon={Zap} onClick={handleClick}>
  Get Started Now
</Button>;

{
  /* Icon-only buttons (like for mobile menus) */
}
<Button variant="ghost" size="icon" icon={Menu} aria-label="Open Menu" />;

{
  /* Invisible accessible buttons (dropdown triggers) */
}
<Button variant="unstyled" size="none" onClick={togglePopover}>
  Trigger
</Button>;
```

---

## 3. General Development Practices

- **Responsiveness:** Build mobile-first. Use Tailwind's `md:` and `lg:` prefixes.
- **Click-awary & Popovers:** Custom dropdown setups (such as the mobile drawer) should implement `useRef` and `mousedown` event listeners for clicking outside instead of relying purely on hover states.
- **Language & Settings Integration:** Menus generally house multi-language support (es/en) via components like `next-intl` and theme variations via `next-themes`. Ensure their respective config buttons (Sun, Moon, Monitor, flags) maintain symmetrically unified sizes (use `Button size="md"` or fixed height classes like `h-10` uniformly).
