# IM Product Planning

## Current Outputs

- `index.html`
  Root redirect to the current V1 decision site.

- `v1_decision/index.html`
  Primary V1 decision page. It explains the fixed route, priority role needs, module necessity classification, selected reference patterns, final architecture map, and scope cut.

- `compare_features/index.html`
  Feature comparison presentation. It contains the 27-app benchmark, interactive module comparison, product route references, and scenario coverage.

- `reports/report.html`
  HTML version of the full research report. It uses the shared site styles plus `assets/css/pages/report.css`.

- `app_structures/index.html`
  App structure visualization. It uses its own script, shared CSS, page-specific CSS, icons, and vendor assets.

- `product_architecture/index.html`
  Product direction, module architecture, interface sketches, and build order.

- `interaction_playground/index.html`
  Reference flow comparison playground for V1 necessary modules. Detailed mocks should stay focused on `messaging-identity`, `external-entry`, `channel-loop`, `community-governance`, `trust-risk`, and lightweight `business-commerce`.

## Decision Logic

The fixed V1 route is:

```text
外部內容 / 邀請
→ 公開頻道預覽
→ 關注 / 加入
→ 結構化討論
→ 主題互動
→ 收件箱 / 私聊留存
```

V1 architecture starts from the priority roles, then classifies mapped modules before expanding them. The core rule is: build only the modules needed to satisfy 普通用戶 and 商家 / 商業主 at the minimum viable architecture level.

- V1 necessary: `messaging-identity`, `external-entry`, `channel-loop`, `community-governance`, `trust-risk`.
- V1 lightweight: `business-commerce`, `status-updates`.
- Later hooks: `support-crm`, `platform-ai-ops`, AI support, CRM, Bot/API, mini-apps, full commerce.

See `docs/v1-module-prioritization.md` for the full classification and playground scope.

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

- `docs/v1-module-prioritization.md`
  Handoff note for V1 module classification, architecture placement, and interaction playground scope.

## Asset Folder

- `assets/css/`
  Shared site styles, shared components, and page-specific styles under `assets/css/pages/`.

- `assets/js/site-nav.js`
  Shared top navigation renderer and compact topbar behavior. Pages can opt into `data-topbar-mode="compact-on-scroll"` or `static` on `<body>`.

- `app_structures/assets/`
  Icons and vendor libraries used by `app_structures/index.html`.

`compare_features/` currently has no asset folder; its presentation pages are text, tables, diagrams, and shared CSS only.
