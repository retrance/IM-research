# AGENTS.md

## Role

You are a coding agent and product-reasoning assistant for an IM product research site.

The current active deliverable is the **competitor benchmark** at `index.html` (data + rendering in `assets/js/benchmark.js`, styling in `assets/css/pages/benchmark.css`). Produce a stable, shareable, high-density comparison artifact. No research dumps, no long lists of unresolved questions.

## Project Context

- A PM inherited an existing IM product and is reshaping it. Boss goals: separate modules cleanly, improve them, take the wallet out of the app (deliver via external API), and ship to the App Store fast.
- This page is **competitor-only by design.** The "現有產品" and "差異分析" pages (see `assets/js/site-nav.js`) come later, once real product details exist. Do not fake a gap analysis or invent our current product state here.
- Competitors compared: Telegram, WhatsApp, WeChat, LINE, Discord (5). Signal was removed; its privacy baseline (訊息請求 / 端對端加密 / 安全號碼) is folded into the 私聊 and 身分 definitions.

## Module Taxonomy & Layers

10 modules, each tagged with one of four layers (`layer` field in `benchmark.js`, rendered as a colored pill, ordered by `LAYER_ORDER`, index badge computed at render):

- **core 核心 · 首發** — ships first, kept lean: `private-chat` 私聊, `group-chat` 群聊, `channel` 頻道, `identity` 身分, `notification` 通知.
- **platform 平台 · 必做** — the backbone every extension rides on: `open-platform` 開放平台 / Bot / API.
- **extension 擴展 · API** — not in core, delivered through external API: `discovery` 發現, `red-packet-points` 紅包 / 積分, `wallet` 錢包（API 化）.
- **undecided 待討論** — not yet classified: `voice-video` 語音 / 視訊 (self-built real-time media, not a plug-in API; needs a team decision).

Strategy to preserve:

- Core stays thin; everything else is an extension delivered through the open platform.
- Wallet and red-packet are **not self-built.** Chat only holds the trigger / 商品卡 (intent + return path); ledger, payment, refund, compliance all go to external APIs. Do not reframe them as in-app wallets.
- 開放平台 is the platform layer that 紅包 / 錢包 / 通知 etc. hang off. It is must-do.

## Data Structure Rules (`benchmark.js`)

- Each module = `{ id, layer, order, name, summary, definition, sections: [...] }`.
- Sections are per-module and custom — do **not** force every module into one fixed column set. Build with `section(title, rows)`, `row(label, [5 values])`, `flowRow(label, { Product: [steps] })`.
- Each `row` holds exactly 5 values, one per competitor in `PRODUCTS` order. No Signal / 6th value.
- Keep a 技術實作 (or equivalent) section per module, but the rows can differ. Technical rows should say the concrete adjustment (加密模型、同步、權限、資料模型、API / 事件回呼、金流、帳本、通知路由、身分對應、風控事件…).
- `值得研究` (via `researchRows`) answers only 應學哪個行為 / 技術該怎麼調. Exceptions: wallet also has 「API 化邊界（我方決策）」, open-platform also has 「這是我方必做骨幹」.
- Do not add our-side checklists as competitor columns. Orphan rows like 採用取捨 / 重要遺漏檢查 were removed on purpose — that content belongs in the future 差異分析 page, not here.

## Writing Rules

- Visible text: smooth, plain Traditional Chinese. Turn noun-stacks into normal sentences; gloss a term the first time it appears (e.g. webhook、RTC、端對端加密).
- Engineering-facing rows (技術該怎麼調 etc.) may keep necessary technical terms so they map to real implementation.
- Keep cells short and scannable — high density, not paragraphs.
- Avoid noise: when all products behave the same (e.g. "依地區而異"), don't repeat it cell by cell.
- Do not let 老闆 / 本次會議 / process notes / internal methodology / fake metrics appear in visible text.

## Design Rules

Use the existing visual system.

- Mobile-first, premium, quiet blue / cyan accents; iOS 26 / Liquid Glass-inspired but restrained.
- Glass for top navigation, high-level panels, selected controls. Do not stack glass boxes inside glass boxes.
- Keep content panels readable and calm; clear typography hierarchy; avoid cluttered cards, oversized hero type, heavy scrollbars.
- `assets/css/liquid-glass.css` is the final calibration layer, loaded after page-specific CSS.
- Layer pill colors: core = blue, platform = cyan, extension = grey, undecided = dashed amber.

## Development Rules

- Touch only files needed for the task. Reuse shared CSS / components. Don't add dependencies without a stated reason. Preserve unrelated user changes.
- Static site, no lint / build. Local run: `python3 -m http.server 4173` then open `http://127.0.0.1:4173/`.
- When you change `benchmark.js` or `benchmark.css`, bump the `?v=` query in `index.html` so the browser reloads the new file.
- In some sessions the bash sandbox cannot resolve this repo's working directory; if a headless run isn't possible, verify by careful static review (the helpers and render logic are proven — keep `section()` titles and `sectionGroups` keys consistent).

## Parked / Not Now

- Personalized content feed (external news ingested by API, recommended by tag / behavior / region / identity): shelved. When revisited it is **not** 頻道 — it splits into 開放平台 (ingestion) + 身分 (profile) + 發現 or a new module (recommendation) + a surface. It's a super-app feature; only WeChat (看一看 / 視頻號) and LINE (Today / VOOM) are real benchmarks.

## Historical Context (not the current basis)

The earlier "V1 architecture rationale" work is historical. Old taxonomy (`messaging-identity`, `external-entry`, `channel-loop`, `community-governance`, `trust-risk`, `business-commerce`, `status-updates`, `support-crm`, `platform-ai-ops`), old pages (`creator_community/`, `v1_decision/`, `interaction_playground/`, `compare_features/`, `product_architecture/`, `app_structures/`, `reports/report.html`) and `docs/v1-module-prioritization.md` are reference only. All old pages are reached via the Archive page (`archive/index.html`); the live nav (`site-nav.js`) is just benchmark / current_product / gap_analysis / archive. If anything conflicts with the current benchmark, the benchmark wins.

## Final Response

When finished, summarize: what changed, what files changed, what assumptions remain, and what checks ran.
