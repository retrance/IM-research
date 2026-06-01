# IM 產品研究網站

這個 repo 是 IM 產品研究與架構推導網站。現在根頁 `index.html` 是競品模組比較工具，用來幫助產品與工程判斷：

- 修改現有 IM 產品時，應該學哪個 App 的哪個行為。
- 哪些行為不適合照搬，會帶來錯誤的產品複雜度。
- 若採用某個競品模式，資料模型、權限、通知、風控、帳本或身份層要怎麼調整。

## 最近更新（2026-06）

- 對標競品由 6 家收斂為 5 家，移除 Signal（其隱私底線併入私聊與身分的說明）。
- 模組由 8 個調整為 10 個，新增「開放平台 / Bot / API」與「語音 / 視訊」。
- 所有模組加上分層：核心 · 首發、平台 · 必做、擴展 · API、待討論。
- 錢包與紅包 / 積分改成 API 化框架：不自建，付款 / 帳本 / 風控走外部服務。
- 移除孤兒列「採用取捨」（私聊）與「重要遺漏檢查」（群聊）；我方檢查清單留待之後的差異分析頁。
- 全表白話化，並清掉殘留的 Signal 舊資料（每列固定 5 欄）。
- 擱置：個人化內容推薦流（外部新聞依標籤 / 行為推薦）尚未定案，未放入任何模組。

## 網站結構（導覽）

頂部導覽（`assets/js/site-nav.js`）共四個頁面：

- **競品 Benchmark** — `index.html`，目前主線（見下）。
- **現有產品** — `current_product/index.html`，預留頁，狀態「等待輸入」；拿到現有產品 APK / 內測版本 / 技術規格後，才補 IA、功能、截圖、技術架構與已知問題。
- **差異分析** — `gap_analysis/index.html`，預留頁；要等現有產品盤點完成後，才把現有 IM 對照競品做差異與決策。
- **Archive** — `archive/index.html`，集中所有前期頁面的入口（見下方 Archive 段）。

## 現行主頁

- `index.html`
  目前主頁。呈現 Telegram、WhatsApp、WeChat、LINE、Discord 五家的 IM 模組比較表。

- `assets/js/benchmark.js`
  根頁 benchmark 的主要資料與渲染邏輯。模組資料不再使用固定的 `capabilities / flows / limits / technical` 結構，而是每個模組依產品問題自訂分區。

- `assets/css/pages/benchmark.css`
  根頁 benchmark 的頁面樣式。包含可 scroll 的比較表、凍結表頭、目前分類提示與模組切換卡。

## Archive（歷史頁面）

前期的產品定位、互動路徑與架構推導材料，全部從 Archive 頁（`archive/index.html`）進入，保留作為歷史參考，不是目前 benchmark 的產品結論；若有衝突，以根頁 benchmark 為準。

Archive 收錄（檔案實際位置在各自目錄，由 Archive 頁集中連結）：

- `creator_community/index.html` — 前期首頁：空間型 IM 產品定位與場景收斂。
- `v1_decision/index.html` — V1 架構推導：前期模組分類、範圍切割與架構 rationale。
- `interaction_playground/index.html` — 互動流程：V1 必要模組的互動路徑與情境。
- `compare_features/index.html` — 功能比較：早期跨產品功能模組比較與評分。
- `app_structures/index.html` — 競品架構庫：舊版競品結構圖與應用資料。
- `product_architecture/index.html` — 產品架構：前期產品方向與功能架構。
- `reports/report.html` — 全球 IM 功能調研報告。
- `reports/skool.html` — Skool 研究頁：社群與內容商業模式材料。

## 比較表邏輯

根頁 benchmark 的目的不是把每個模組塞進同一組固定欄位，而是讓決策者快速比較「這個模組真正該看什麼」。

目前比較 10 個模組，依產品策略分四層（在 `benchmark.js` 以 `layer` 標記，畫面上是彩色標籤，並依層排序）：

**核心 · 首發**（精簡上架）

- 私聊：安全預設、身分曝光、訊息生命週期、同步與收件匣呈現。
- 群聊：建群、邀請、加入、權限、分主題討論、歷史搜尋、規模限制與治理。
- 頻道：發布、訂閱可見性、討論回流、通知與外部分享。
- 身分：帳號建立、公開身分、商業身分、驗證與權限邊界。
- 通知：分流、減少干擾、大群 / 頻道通知與多裝置同步。

**平台 · 必做**（骨幹，擴展功能都靠它交付）

- 開放平台 / Bot / API：接入流程、能力面、授權、事件模型、擴展怎麼掛上來。

**擴展 · API**（不進核心，走外部 API）

- 發現：入口、搜尋推薦、公開頁、邀請、來源追蹤與垃圾訊息風險。
- 紅包 / 積分：聊天只觸發與顯示，帳本 / 風控 / 支付走外部服務。
- 錢包（API 化）：不自建主錢包，聊天只留商品卡，付款全走外部支付 API。

**待討論**（尚未定案）

- 語音 / 視訊：要自建即時媒體能力，不是外掛式 API，是否做 / 何時做待團隊討論。

分層原則：核心保持精簡先上架；其餘能力都當外掛、透過開放平台以 API 交付；錢包與紅包不自建金流，只保留聊天端的觸發與返回路徑。

每個模組都可以有不同分區。分區應依模組特色決定，不要硬套同一組欄位。

## 表格規則

- 不要為所有模組硬套同一組比較項目。
- 不要為了湊格式把流程拆成固定四步；流程可以依產品實際行為長短呈現。
- 如果某個分區只有一行，且和相鄰分區邏輯接近，應合併成更高密度的大分區。
- 每個模組都要保留「技術實作」或等價的技術判斷內容，但行項目可不同。
- 技術列要說清楚具體調整方向，例如加密模型、同步模型、權限模型、資料模型、API / 事件回呼、支付服務、帳本模型、通知路由、身份對應或風控事件。
- 「值得研究」不是裝飾欄位，應回答「應學哪個行為」與「技術該怎麼調」。
- 避免噪音句，例如所有產品都一樣按地區變動時，不必逐格重複。
- 可見文字以順暢繁體中文為主；英文只保留產品名、正式技術名或必要縮寫，術語第一次出現時用括號簡單解釋。
- 每列固定 5 欄（對應 5 家競品），不要留 Signal 或第 6 個值。
- 不要把「我方的判斷 / 檢查清單」做成競品欄位（例如採用取捨、重要遺漏檢查）。那是差異分析頁的內容，這頁只比競品。

## 舊 V1 推導材料

這一段只說明舊材料的脈絡，不能作為目前 benchmark 的產品結論。若和根頁 `index.html` 的模組比較衝突，以根頁 benchmark 為準。

舊 V1 推導曾使用以下固定路徑：

```text
外部內容 / 邀請
→ 公開頻道預覽
→ 關注 / 加入
→ 結構化討論
→ 主題互動
→ 收件箱 / 私聊留存
```

舊 V1 架構從優先角色需求開始，再分類模組是否必要。這套分類現在只保留為歷史參考：

- 舊 V1 必要：`messaging-identity`, `external-entry`, `channel-loop`, `community-governance`, `trust-risk`.
- 舊 V1 輕量：`business-commerce`, `status-updates`.
- 舊後續擴展接點：`support-crm`, `platform-ai-ops`, AI support, CRM, Bot/API, mini-apps, full commerce.

## 來源材料

- `reports/`
  研究報告與競品分析素材（HTML 版報告由 Archive 進入）。

- `learn/`
  補充學習與參考材料（早期內容）。

- `docs/`
  專案文件。`docs/v1-module-prioritization.md` 是舊 V1 模組分類文件，僅供歷史參考，不是目前 benchmark 的基準。

前期的 `compare_features/`、`product_architecture/`、`interaction_playground/` 等頁面現在都從 Archive 進入，見上方 Archive 段。

## 本機啟動

這是靜態網站。從專案根目錄執行：

```bash
python3 -m http.server 4173
```

接著開啟 `http://127.0.0.1:4173/`。

目前沒有 `npm` lint 或 build scripts。

## 視覺系統

- 共用基礎樣式：`assets/css/site.css`, `assets/css/components.css`.
- 頁面樣式：`assets/css/pages/`.
- 最後校準層：`assets/css/liquid-glass.css`，應載入在頁面專用 CSS 之後。
- 視覺方向是手機優先、精緻、克制，有 iOS / Liquid Glass 的質感，但不做過度裝飾。
- Glass 適合頂部導覽、高層面板、已選控制項；不要堆疊 glass boxes。
- 決策頁優先可讀性與資訊密度，避免裝飾型儀表板、過大 hero、厚重 scrollbar 與雜亂 cards。

## 資產目錄

- `assets/js/site-nav.js`
  共用頂部導覽渲染與 compact topbar 行為。

- `assets/js/benchmark.js`
  根頁 benchmark 的資料、分區合併、表格渲染與目前分類更新。

- `app_structures/assets/`
  `app_structures/index.html` 使用的 icons 與第三方檔案。
