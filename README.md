# IM Product Planning

## Current Outputs

- `compare_features/index.html`  
  Main feature comparison presentation. It contains the 27-app benchmark, interactive module comparison, recommended product route, product modules, architecture direction, and scenario coverage.

- `reports/report.html`  
  HTML version of the full research report. It uses the shared site styles plus `assets/css/pages/report.css`.

- `app_structures/index.html`  
  App structure visualization. It uses its own script, shared CSS, page-specific CSS, icons, and vendor assets.

- `product_architecture/index.html`  
  Product direction, module architecture, interface sketches, and build order.

- `interaction_playground/index.html`  
  Interactive playground for comparing interaction patterns across apps.

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
