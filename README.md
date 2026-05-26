# IM Product Planning

## Current Outputs

- `index.html`
  Root redirect to the current V1 decision site.

- `v1_decision/index.html`
  Primary executive decision page for the V1 route recommendation, architecture defaults, scope cut, and build sequence.

- `compare_features/index.html`
  Feature comparison presentation. It contains the 27-app benchmark, interactive module comparison, product route references, and scenario coverage.

- `reports/report.html`
  HTML version of the full research report. It uses the shared site styles plus `assets/css/pages/report.css`.

- `app_structures/index.html`
  App structure visualization. It uses its own script, shared CSS, page-specific CSS, icons, and vendor assets.

- `product_architecture/index.html`
  Product direction, module architecture, interface sketches, and build order.

- `interaction_playground/index.html`
  Interactive playground for comparing interaction patterns across apps.

## Run Locally

This is a static site. From the project root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

There are currently no `npm` lint or build scripts.

## Visual System

- Shared base styles live in `assets/css/site.css` and `assets/css/components.css`.
- `assets/css/liquid-glass.css` is the final visual calibration layer and should load after page-specific CSS.
- The intended direction is mobile-first, premium, iOS 26 / Liquid Glass-inspired, and restrained: use glass for top navigation and high-level panels, not nested controls inside nested glass boxes.
- Keep decision pages readable first. Avoid oversized hero type, heavy scrollbars, decorative dashboards, and cluttered cards.

## Source Material

- `reports/260511 全球IM功能調研報告.md`
  Global IM / social / commerce benchmark report. The HTML benchmark table is based on section 7.

- `reports/`
  Supporting research archive.

## Asset Folder

- `assets/css/`
  Shared site styles, shared components, and page-specific styles under `assets/css/pages/`.

- `assets/js/site-nav.js`
  Shared top navigation renderer and compact topbar behavior. Pages can opt into `data-topbar-mode="compact-on-scroll"` or `static` on `<body>`.

- `app_structures/assets/`
  Icons and vendor libraries used by `app_structures/index.html`.

`compare_features/` currently has no asset folder; its presentation pages are text, tables, diagrams, and shared CSS only.
