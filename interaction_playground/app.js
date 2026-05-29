const SOURCES = {
  compare: source("compare_features/index.html", "../compare_features/index.html"),
  prioritization: source("docs/v1-module-prioritization.md", "../docs/v1-module-prioritization.md"),
  architecture: source("product_architecture/index.html", "../product_architecture/index.html"),
  channelLoop: source("reports/內容頻道閉環.md", "../reports/內容頻道閉環.md"),
  safety: source("reports/平台安全治理.md", "../reports/平台安全治理.md")
};

const DATA = {
  sources: [
    ["競品依據庫", SOURCES.compare],
    ["V1 模組優先級", SOURCES.prioritization],
    ["收斂產品架構", SOURCES.architecture]
  ],
  modules: [
    mod("messaging-identity", "messaging-identity｜通訊核心與身份", "V1 用同一個收件箱承接私聊、群組、頻道更新與商業聊天，但每種關係都要有清楚身份與類型標籤。", [
      sc("private-chat-entry", "進入 1:1 私聊｜private-chat-entry", "普通用戶", "普通用戶從好友邀請或收件箱進入 1:1 私聊，關係沉澱在同一個聊天底座。", "V1 先完成穩定私聊、回訪和安全動作，不把商業或平台能力混進私人對話。", [
        ref("WhatsApp", "聊天列表 以私聊和群組作為主要心智，支撐低學習成本回訪。", "採用熟悉的聊天入口、已讀 / 未讀狀態 與 封鎖 / 檢舉 入口。", "不把 商業、頻道 或 CRM 行為偽裝成私人聊天。"),
        ref("LINE", "好友與聊天列表建立熟人關係，官方帳號另以身份標籤區隔。"),
        ref("Telegram", "同一聊天列表可承接人、群、頻道，但目標類型需要清楚。")
      ], ["統一收件箱", "1:1 聊天物件", "已讀 / 未讀狀態", "封鎖 / 檢舉 / 靜音"], ["把私聊改成 CRM 對話", "Bot/API 作為私聊入口前提", "一開始就要求多身份"], ["1:1 聊天", "好友身份", "訊息狀態", "基本安全動作"], ["多身份", "企業身份映射", "進階加密模式"], ["身份與收件箱層", "治理層"], [
        st("好友邀請進入", "使用者先看到真人身份與安全提示。", "開始聊天", p("Mina", "好友邀請 · 私人聊天", ["好友", "1:1", "可封鎖"], [c("Mina 想和你聊天", "接受後會出現在收件箱。", "好友邀請")], null, null, "接受並開始聊天")),
        st("私聊訊息流", "標準 IM 訊息流先成立，安全入口留在同一表面。", "回到收件箱", p("Mina", "私人聊天", null, null, null, [m("Mina", "明天資料我整理好了。"), m("你", "收到，我晚點看。", true)], "回到收件箱")),
        st("收件箱留存", "私聊回到統一收件箱，不需要新增獨立入口。", "重新播放", p("收件箱", "關係層", null, null, [r("Mina", "收到，我晚點看。", "1"), r("加密討論群", "3 則未讀", "G"), r("Coffee Club", "商業 · 商品卡", "B")], null, "重新播放"))
      ]),
      sc("group-chat-in-inbox", "從收件箱回到群聊｜group-chat-in-inbox", "普通用戶", "使用者加入或回訪小型群組，群聊和私聊放在同一收件箱，但用 群組 類型標籤避免混淆。", "小群不需要 主題優先；V1 讓小群直接進聊天，只有大型或高噪音社群才需要主題分流。", [
        ref("WhatsApp", "群組和私聊同在 聊天列表，入口直接、學習成本低。"),
        ref("LINE", "群組聊天沿用熟悉聊天心智，適合熟人或小型協作。"),
        ref("Telegram", "群組可和私聊同列，大型群再用 主題 擴展。")
      ], ["group 類型標籤", "收件箱未讀狀態", "小群直接進群聊", "靜音 / 離開 / 檢舉"], ["所有群都強制 主題優先", "小群也套大型社群 onboarding", "群聊入口藏在頻道內"], ["群組關係", "小群直接聊天流程", "成員狀態", "靜音 / 離開"], ["角色自動化", "complex 伺服器樹狀結構", "advanced 主題 governance for every group"], ["身份與收件箱層", "社群 / 討論層", "治理層"], [
        st("收件箱類型標籤", "群組在收件箱中清楚標示 群組。", "打開群組", p("收件箱", "所有關係", null, null, [r("Mina", "私聊 · 明天見", "1"), r("週末球局", "群組 · Kai: 場地已訂", "G"), r("Market 頻道", "頻道更新", "C")], null, "打開週末球局")),
        st("小群直接聊天", "早期或小型群組直接進訊息流。", "查看群資訊", p("週末球局", "群組 · 8 成員", null, null, null, [m("Kai", "週六 15:00 可以嗎？"), m("你", "可以，我帶球。", true), m("Nora", "我晚 10 分鐘到。")], "查看群資訊")),
        st("群組邊界", "群資訊提供成員、靜音、離開與檢舉。", "重新播放", p("群組資訊", "週末球局", null, null, [r("成員", "8 成員", "M"), r("靜音", "降低通知", "N"), r("離開 / 檢舉", "安全動作", "S")], null, "重新播放"))
      ]),
      sc("mixed-inbox-type-labels", "混合收件箱類型標籤｜mixed-inbox-type-labels", "普通用戶 + 商家 / 商業主", "使用者在一個收件箱看見私聊、群聊、頻道更新和商業聊天，靠類型標籤判斷下一步。", "V1 不開多個主入口；一個收件箱保留 IM 心智，類型標籤負責降低混淆。", [
        ref("WhatsApp", "聊天列表 承接私聊、群組和 商業帳號標籤。"),
        ref("Telegram", "聊天列表可容納私聊、群組、頻道與 Bot 等目標類型。"),
        ref("LINE", "官方帳號像聊天關係，但身份標示和服務入口要清楚。"),
        ref("WeChat", "高密度服務平台證明身份統一有價值，但 V1 不複製完整超級平台。")
      ], ["統一收件箱", "類型標籤", "關係狀態", "商業聊天標籤"], ["更新 / 頻道完全切成獨立產品", "直接做超級平台入口", "商業流程隱藏成普通好友"], ["私聊", "群聊", "頻道更新", "商業聊天標籤"], ["完整服務帳號平台", "小程式中心", "enterprise CRM 收件箱"], ["身份與收件箱層", "輕量商業層"], [
        st("同一收件箱", "四種關係出現在同一列表。", "打開商業聊天", p("收件箱", "先看類型標籤", null, null, [r("Mina", "私聊 · 明天見", "1"), r("加密討論", "群組 · 3 未讀", "G"), r("Market 頻道", "頻道 · 新週報", "C"), r("Coffee Club", "商業 · 商品卡", "B")], null, "打開 Coffee Club")),
        st("商業標籤可見", "商業聊天有 label、檔案和商品卡，但仍是 IM 對話。", "回到收件箱", p("Coffee Club", "商業聊天", ["商業", "檔案", "商品卡"], [c("商業檔案", "類別、營業時間、網站。", "檔案"), c("拿鐵組合", "商品卡可回覆或轉發。", "商品")], null, null, "回到收件箱")),
        st("回訪不迷路", "使用者透過類型標籤回到正確表面。", "重新播放", p("收件箱", "回訪路徑", ["私聊", "群組", "頻道", "商業"], null, [r("Market 頻道", "頻道 · 1 則新更新", "C"), r("Coffee Club", "商業 · 有新回覆", "B")], null, "重新播放"))
      ]),
      sc("business-chat-identity", "商業聊天身份｜business-chat-identity", "商家 / 商業主 + 普通用戶", "使用者打開商業聊天時，能看見 商業標籤、商業檔案和商品卡上下文。", "V1 讓商業身份進聊天，但只做輕量商業層；不把收件箱變成 CRM 工作台。", [
        ref("WhatsApp 商業", "商業檔案、型錄、商品分享 和 商業帳號標籤 是輕量商業身份參考。"),
        ref("LINE OA", "官方帳號用聊天關係承接品牌互動，服務入口可在聊天內分流。"),
        ref("Shopify Inbox / Instagram", "商品上下文進入聊天，購買和履約多由外部系統承接。")
      ], ["商業聊天標籤", "商業檔案", "商品卡物件", "封鎖 / 檢舉 business"], ["full CRM", "支付 / 訂單 / 履約", "商業流程隱藏在私人聊天中"], ["商業檔案", "商業聊天標籤", "聊天中的商品卡"], ["CRM 工單", "AI 客服", "支付", "訂單", "履約"], ["輕量商業層", "身份與收件箱層", "治理層"], [
        st("商業標籤", "使用者從收件箱看到商業身份。", "打開聊天", p("收件箱", "商業關係", null, null, [r("Coffee Club", "商業 · 商品卡", "B"), r("Mina", "私聊", "1")], null, "打開商業聊天")),
        st("商業檔案", "聊天頂部可進商業檔案。", "查看商品", p("Coffee Club", "商業聊天", ["商業", "檔案", "安全訊息"], [c("Coffee Club", "咖啡與輕食 · 08:00-19:00 · coff.ee", "商業檔案")], null, null, "查看商品卡")),
        st("商品卡上下文", "商品卡作為聊天物件出現，使用者可以直接詢問。", "重新播放", p("Coffee Club", "商品上下文", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true), m("Coffee Club", "可以，17:00 前都能取。")], "重新播放"))
      ])
    ]),
    mod("external-entry", "external-entry｜外部入口 / 邀請", "外部入口必須先說清楚目標類型、來源、加入規則和風險狀態，避免把所有流量直接丟進聊天流。", [
      sc("friend-invite", "好友邀請 / QR / 聯絡人加入｜friend-invite", "普通用戶", "普通用戶透過好友邀請、QR 或聯絡人加入，進入可辨識的 1:1 私聊關係。", "V1 把好友邀請視為 關係入口，不和群組、頻道、商業 CTA 混成同一入口。", [
        ref("LINE", "QR、ID、通訊錄和好友加入是清楚的個人入口。"),
        ref("WhatsApp", "電話聯絡人、QR 和 邀請 建立低摩擦聊天關係。"),
        ref("Telegram", "使用者名稱 / link 可指向個人，但公開入口需要安全邊界。")
      ], ["好友 QR", "加入聯絡人", "目標類型標籤", "來源追蹤"], ["好友邀請直接帶入群聊", "不標示目標類型", "公開 使用者名稱 無風險邊界"], ["好友邀請", "QR / 加入聯絡人", "私聊 preview", "封鎖 / 檢舉 before accepting"], ["社交關係推薦", "進階通訊錄增長", "OAuth 身份生態"], ["外部入口", "身份與收件箱層"], [
        st("掃描 QR", "入口先顯示目標是個人。", "查看身份", p("加入好友", "QR 邀請", ["Person", "私聊", "來源：QR"], [c("Mina", "共同群組：週末球局。", "好友目標")], null, null, "查看身份")),
        st("接受前安全動作", "接受前可以封鎖或檢舉。", "接受邀請", p("Mina", "好友預覽", null, null, [r("開始私聊", "接受後進收件箱", "1"), r("封鎖", "不建立關係", "B"), r("檢舉", "可疑邀請", "R")], null, "接受好友邀請")),
        st("進入私聊", "成功後建立 1:1 對話，來源保留為風控資料。", "重新播放", p("Mina", "私聊 · 來自 QR", null, null, null, [m("系統", "你們現在可以互相傳訊息。"), m("你", "嗨，我是剛剛掃 QR 加的。", true)], "重新播放"))
      ]),
      sc("group-invite", "群組邀請預覽 / 加入狀態｜group-invite", "普通用戶", "使用者點群組 邀請連結，先看群組預覽、規則、成員狀態與加入條件，再決定加入。", "V1 不把 邀請連結 直接丟進完整訊息流；先用 群組預覽 建立目標理解和風險邊界。", [
        ref("WhatsApp", "群組邀請連結 降低加入摩擦，但加入前仍需要群組身份、隱私和管理員邊界。", "採用低摩擦 邀請連結 和加入前 群組預覽。", "不讓連結直接暴露完整群訊息流。"),
        ref("Telegram", "邀請連結、加入申請 和公開群預覽支撐不同加入門檻。"),
        ref("LINE OpenChat / Facebook 群組", "加入前暱稱、規則和問題能建立社群邊界。")
      ], ["群組預覽", "rules before join", "成員狀態", "加入申請 when needed"], ["一點連結就暴露完整群流", "所有群組都要求重型 onboarding", "邀請連結無撤銷 / 限制"], ["邀請連結", "群組預覽", "rules", "加入 / 申請狀態"], ["進階角色引導", "伺服器導覽", "增長歸因套件"], ["外部入口", "社群 / 討論層", "治理層"], [
        st("打開 邀請連結", "入口標示目標是群組，並顯示來源。", "查看預覽", p("群組邀請", "來源：頻道貼文", ["群組", "邀請連結", "已檢查風險"], [c("加密討論社群", "3,248 成員 · 加入後可發言。", "群組預覽")], null, null, "查看群組預覽")),
        st("規則與成員狀態", "加入前先看規則、成員數和審核狀態。", "送出加入", p("加密討論社群", "加入前規則", null, null, [r("規則", "禁止詐騙外鏈與洗版", "R"), r("成員", "3,248 成員", "M"), r("加入方式", "新成員先低風險權限", "J")], null, "加入群組")),
        st("加入後路徑", "群組加入後依規模分流：小群直接聊天，大型或高流量社群才使用群組首頁 / 可選主題。", "重新播放", p("加密討論社群", "已加入 · 依群組規模分流", ["主題模式可選"], null, [r("小型 / 早期群組", "直接進群聊", "G"), r("大型 / 高流量社群", "先看群組首頁，可選主題", "T")], null, "重新播放"))
      ]),
      sc("channel-share-link", "公開頻道連結預覽 / 關注｜channel-share-link", "普通用戶 + 商家 / 商業主", "外部使用者從分享連結進入公開頻道，先看 檔案 和 精選貼文，再決定 關注。", "V1 採用公開預覽與低噪音 關注；不強制建立獨立 更新 tab，更新可用清楚 頻道 label 回到收件箱。", [
        ref("Telegram", "公開頻道連結 和可預覽內容支撐頻道外部導流。"),
        ref("WhatsApp 頻道", "頻道可被分享，追蹤是低噪音承諾點。"),
        ref("Instagram Broadcast 頻道", "創作者內容可以導流到一對多更新關係。")
      ], ["公開頻道連結", "頻道檔案", "精選貼文預覽", "關注狀態"], ["先要求下載 / 登入才看到目標", "頻道預覽直接變成推薦 動態流", "關注後立刻進大群"], ["分享連結", "公開預覽", "關注", "統一回訪 with 頻道 label", "討論 CTA"], ["mandatory separate 更新 tab", "完整內容探索", "付費頻道", "創作者分析"], ["外部入口", "頻道閉環"], [
        st("外部分享連結", "使用者從內容、QR 或朋友分享打開頻道連結。", "打開預覽", p("頻道 link", "公開預覽", ["頻道", "分享連結", "尚未加入"], [c("Market 頻道", "每日市場摘要與討論入口。", "公開頻道")], null, null, "打開頻道預覽")),
        st("頻道預覽", "檔案、簡介和選定貼文先出現。", "關注", p("Market 頻道", "公開預覽 · 12K 關注者", null, [c("市場週報", "本週重點與外鏈卡片。", "置頂"), c("AMA 公告", "週五 20:00 開始。", "貼文")], null, null, "關注頻道")),
        st("回到收件箱", "關注後頻道更新可回到收件箱，但仍保留 頻道 類型標籤。", "重新播放", p("收件箱", "已關注頻道", null, null, [r("Market 頻道", "頻道 · 新週報", "C"), r("加密討論社群", "群組 · 3 未讀", "G")], null, "重新播放"))
      ]),
      sc("business-cta-entry", "商業 CTA 入口｜business-cta-entry", "商家 / 商業主 + 普通用戶", "V1 將廣告、商品連結、創作者內容或商業檔案 CTA 都抽象成 可追蹤來源的商業 CTA，導向 商業聊天 或 channel。", "V1 只建模 可追蹤來源的商業 CTA；不實作 廣告管理、創作者工具、活動歸因 或 商務平台。", [
        ref("TikTok / Instagram", "內容、檔案、DM CTA 和 product tag 能把興趣導向商業互動。"),
        ref("WhatsApp 商業", "click-to-chat 和 商業 QR 讓外部意圖直接進聊天。"),
        ref("Shopify Inbox / Instagram", "商品上下文進入對話，購買履約可留在外部。")
      ], ["來源追蹤", "目標類型標籤", "商業檔案 CTA", "商品卡上下文"], ["完整廣告平台", "完整 市集", "低品質 CTA 無風控", "商品點擊後只進泛首頁"], ["可追蹤來源的商業 CTA", "商業聊天", "channel 關注", "商品卡上下文"], ["廣告管理", "創作者工具", "活動歸因", "商務平台", "CRM 分流", "支付", "訂單", "履約"], ["外部入口", "輕量商業層", "身份與收件箱層"], [
        st("外部 CTA", "來源和目標類型先被記錄。", "查看目標", p("商品 CTA", "來源：創作者內容", ["商業", "商品", "已記錄來源"], [c("拿鐵組合", "來自 Coffee Club 內容 CTA。", "商品卡")], null, null, "查看商家")),
        st("商業檔案承接", "商家 檔案 建立信任，可選擇聊天或 關注頻道。", "詢問商品", p("Coffee Club", "商業檔案", null, [c("商業檔案", "咖啡與輕食 · 外部連結。", "檔案"), c("更新頻道", "追蹤新品與活動。", "頻道")], null, null, "帶商品進聊天")),
        st("商業聊天", "商品卡進聊天，保留來源和上下文。", "重新播放", p("Coffee Club", "商業聊天 · 來自內容 CTA", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天有現貨嗎？", true)], "重新播放"))
      ])
    ]),
    mod("channel-loop", "channel-loop｜頻道 / 內容到討論閉環", "公開頻道負責低噪音內容承接，討論入口負責把高意圖使用者帶到可治理的群組、討論串 或 主題。", [
      sc("public-channel-preview", "公開頻道預覽｜public-channel-preview", "普通用戶 + 商家 / 商業主", "外部使用者先預覽頻道 檔案 與 精選貼文，再決定 關注或進入討論。", "V1 用頻道預覽降低加入壓力；公開可看，互動才需要更高承諾。", [
        ref("Telegram", "公開頻道和 公開連結 提供內容預覽與外部分享能力。"),
        ref("WhatsApp 頻道", "低噪音頻道適合一對多更新，但討論能力有限。"),
        ref("LINE OA", "官方帳號可作為品牌更新與服務路由，但大型討論要外接群組。")
      ], ["頻道檔案", "精選貼文預覽", "關注 CTA", "討論 CTA"], ["純廣播無回路", "頻道內直接塞完整群聊", "短影音推薦 動態流 作為 V1 入口"], ["public channel", "檔案", "精選貼文", "關注", "討論 CTA"], ["付費頻道", "創作者分析", "推薦動態流", "直播"], ["頻道閉環", "外部入口", "頻道閉環"], [
        st("公開頻道頁", "訪客可先看頻道身份、簡介與內容樣本。", "查看貼文", p("Market 頻道", "公開預覽 · 12K 關注者", ["公開連結", "精選貼文", "關注"], [c("頻道簡介", "每日市場摘要與討論入口。", "檔案"), c("市場週報", "摘要、外鏈、討論 CTA。", "置頂")], null, null, "查看貼文")),
        st("低噪音閱讀", "頻道只承接高信號內容。", "關注", p("市場週報", "頻道 post", null, [c("本週重點", "三個重點、來源連結、討論入口。", "貼文"), c("討論", "89 則討論 · 加入後可回覆。", "CTA")], null, null, "關注頻道")),
        st("關注 後回訪", "關注後更新可在收件箱出現，仍標示為 頻道。", "重新播放", p("收件箱", "頻道更新", null, null, [r("Market 頻道", "頻道 · 1 則新貼文", "C"), r("Mina", "私聊", "1")], null, "重新播放"))
      ]),
      sc("follow-channel", "關注頻道後接收更新｜follow-channel", "普通用戶 + 商家 / 商業主", "使用者關注頻道後，在收件箱或更新表面接收更新，並能回到正確貼文。", "V1 採用 WhatsApp 頻道的低噪音關注，拒絕把 separate 更新 tab 做成必備主入口，並借用 Telegram / LINE-like 統一回訪，讓更新帶頻道 label 回到收件箱。", [
        ref("WhatsApp 頻道", "關注頻道是低噪音訂閱關係，頻道和聊天有清楚邊界。", "採用低噪音關注與清楚頻道 label。", "不把 separate 更新 tab 做成 V1 必備主入口。"),
        ref("Telegram", "訂閱頻道後更新進入聊天列表，頻道仍和討論群分開。"),
        ref("Instagram Broadcast 頻道", "一對多更新關係可維持創作者或品牌觸達。")
      ], ["關注狀態", "頻道更新進收件箱", "靜音 / notification setting", "post 深連結"], ["關注後自動加群", "所有頻道更新都高打擾通知", "關注等於私聊授權"], ["關注", "channel 未讀", "收件箱中的頻道 label", "靜音", "深連結 back to post"], ["advanced subscription segmentation", "paid 廣播", "活動自動化"], ["頻道閉環", "身份與收件箱層"], [
        st("按下 關注", "使用者在頻道頁建立低承諾關係。", "接收更新", p("Market 頻道", "公開頻道", ["關注", "Mute available", "不需要 group join"], [c("市場週報", "關注 後會收到低噪音更新。", "貼文")], null, null, "關注")),
        st("更新進收件箱", "頻道更新出現在收件箱，但類型標籤清楚。", "打開更新", p("收件箱", "頻道更新", null, null, [r("Market 頻道", "頻道 · 新週報", "C"), r("加密討論社群", "群組 · 3 未讀", "G")], null, "打開更新")),
        st("回到貼文", "點擊未讀直接回到貼文。", "重新播放", p("市場週報", "Deep link from 收件箱", null, [c("本週重點", "直接回到未讀貼文。", "Unread"), c("進入討論", "加入社群後可回覆。", "CTA")], null, null, "重新播放"))
      ]),
      sc("post-to-discussion", "貼文 to discussion｜貼文進討論", "普通用戶 + 商家 / 商業主", "頻道貼文提供 comments、討論串、linked group 或 討論 CTA，讓高意圖讀者進入可治理討論。", "V1 採用明確討論 CTA，不把每則貼文直接變成大群噪音；討論模式依社群規模選擇。", [
        ref("Telegram", "頻道可連到 linked discussion group，貼文留言形成內容到討論的閉環。"),
        ref("Discord Forum / 討論串", "討論可拆成獨立帖子或討論串，適合多主題長期沉澱。"),
        ref("WhatsApp 頻道", "頻道本體偏低噪音，若要討論需另接群組或 chat CTA。")
      ], ["post 討論 CTA", "linked group/討論串", "discussion count", "return to post"], ["純廣播沒有討論路徑", "每則貼文直接暴露完整群流", "所有頻道都強制 主題 hierarchy"], ["post CTA", "linked discussion", "討論串 / group entry", "治理上下文"], ["full forum product", "multi-server structure", "advanced content ranking"], ["頻道閉環", "社群 / 討論層"], [
        st("貼文下方 CTA", "頻道貼文清楚顯示可進討論。", "進入討論", p("市場週報", "頻道 post", null, [c("市場週報 · 第 12 期", "摘要、來源、外鏈。", "貼文"), c("討論", "89 則討論 · 加入後可回覆。", "CTA")], null, null, "進入討論")),
        st("選擇討論面", "小型社群可進 群聊；大型社群可進 討論串 或 主題。", "打開 討論串", p("Discussion", "來源： post", null, null, [r("貼文討論串", "針對本週報", "T"), r("行情討論", "高頻討論區", "G"), r("新手問答", "低壓力提問", "Q")], null, "打開貼文討論串", true)),
        st("保留貼文上下文", "討論串顯示來源貼文，管理員也能用同一上下文治理。", "重新播放", p("貼文討論串", "Linked to Market 頻道", null, null, null, [m("Mina", "這週支撐位怎麼看？"), m("你", "我會先看成交量和支撐。", true), m("系統", "來源：市場週報 · 第 12 期")], "重新播放"))
      ]),
      sc("business-channel-product-cta", "商業頻道商品 CTA｜business-channel-product-cta", "商家 / 商業主 + 普通用戶", "商家在頻道貼文中放商品卡或 CTA，使用者可進 商業聊天 詢問。", "V1 讓商品卡服務頻道和聊天的轉換，不在頻道內做完整商城交易。", [
        ref("WhatsApp 商業", "型錄 / 商品分享 支撐商品以輕量物件進入對話。"),
        ref("Instagram", "product tag 和商業 檔案 CTA 能把內容興趣導向商品或 DM。"),
        ref("Shopify Inbox", "商品連結和上下文進入聊天，購買履約仍由商店系統處理。")
      ], ["貼文中的商品卡", "導向商業聊天的 CTA", "商業標籤", "外部商品連結"], ["頻道內 完整市集", "支付 / 訂單 / 履約", "AI sales agent as V1 requirement"], ["商品卡", "商業頻道 post", "導向聊天的 CTA", "外部連結"], ["支付", "訂單", "履約", "型錄同步", "AI 客服"], ["頻道閉環", "輕量商業層", "身份與收件箱層"], [
        st("商業頻道貼文", "頻道貼文可以附商品卡。", "查看商品", p("Coffee Club 頻道", "商業 channel", ["頻道", "商品卡", "Chat CTA"], [c("新品拿鐵組合", "本週限定，點擊可詢問。", "商品 CTA")], null, null, "查看商品卡")),
        st("商品卡詳情", "商品卡提供名稱、摘要和外部連結。", "詢問商家", p("拿鐵組合", "商品卡", null, [c("拿鐵組合", "圖片、短描述、外部商品連結。", "Card"), c("詢問商家", "帶商品上下文進 商業聊天。", "CTA")], null, null, "詢問商家")),
        st("帶入 商業聊天", "商品上下文進聊天，使用者可問庫存、時間或外部購買連結。", "重新播放", p("Coffee Club", "商業聊天", null, null, null, [m("商品卡", "新品拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true)], "重新播放"))
      ])
    ]),
    mod("community-governance", "community-governance｜群組 / 主題治理", "群組不是永遠等於 主題優先。V1 同時支撐小群直接聊天、大型社群預覽加入、貼文討論串、主題模式與基本管理員動作。", [
      sc("direct-group-chat", "小群直接聊天｜direct-group-chat", "普通用戶", "小型或早期群組加入後直接進 群聊，不強制經過 主題 list。", "V1 預設小群走直接聊天，避免把簡單群組做成過重社群系統。", [
        ref("WhatsApp", "小型群組直接聊天是低學習成本群組心智。"),
        ref("LINE", "熟人群組沿用聊天介面，適合日常協作。"),
        ref("Telegram", "一般群組可直接聊天，主題 是大型群擴展能力。")
      ], ["direct 群聊", "member list", "靜音 / 離開", "basic admin"], ["所有群強制主題", "加入小群也要角色導覽", "伺服器級頻道樹"], ["direct 群聊", "成員狀態", "靜音 / 離開", "admin remove"], ["主題模板 for every group", "role onboarding", "自動治理"], ["社群 / 討論層", "身份與收件箱層", "治理層"], [
        st("加入小群", "小型群組先顯示群名、成員和規則摘要。", "進入聊天", p("週末球局", "群組 · 8 成員", ["Small group", "Direct chat", "Mute"], [c("群組簡介", "約球、場地與時間討論。", "群組")], null, null, "進入聊天")),
        st("直接聊天", "使用者直接看到訊息流，不需要先選 主題。", "查看群資訊", p("週末球局", "直接群聊", null, null, null, [m("Kai", "週六 15:00 場地 OK。"), m("你", "收到，我帶球。", true), m("Nora", "我會晚一點到。")], "查看群資訊")),
        st("基本治理", "小群只需要靜音、成員、退出和基本檢舉。", "重新播放", p("群組資訊", "基本控制", null, null, [r("靜音", "降低通知", "N"), r("成員", "8 成員", "M"), r("離開 / 檢舉", "安全動作", "S")], null, "重新播放"))
      ]),
      sc("public-group-join", "公開群組 join｜公開群組加入", "普通用戶", "使用者看到公開群組 檔案、規則、成員狀態和加入條件，再加入。", "公開群要先建立規則與成員狀態，不把陌生人直接丟進完整訊息流。", [
        ref("Telegram", "公開群和 邀請連結 支撐預覽與加入狀態。"),
        ref("LINE OpenChat", "主題聊天室可用獨立暱稱與加入前設定建立邊界。"),
        ref("Facebook 群組", "群組頁、規則與 membership questions 是加入前治理參考。")
      ], ["group 檔案", "rules", "成員狀態", "加入 / 申請狀態"], ["公開入口直接進全量聊天", "加入前完全沒有規則", "大型社群用純熟人群心智"], ["public group 檔案", "rules", "join state", "member preview"], ["full community 動態流", "group insights", "進階引導 questions"], ["社群 / 討論層", "外部入口", "治理層"], [
        st("公開群組 檔案", "群組入口先展示主題、規則和成員狀態。", "查看規則", p("加密討論社群", "公開群組 · 3,248 成員", ["Public", "Rules", "Join"], [c("群組主題", "市場討論、新手問答、工具資源。", "檔案")], null, null, "查看規則")),
        st("加入前確認", "加入前看到規則和新成員權限。", "加入", p("Join group", "Rules and 成員狀態", null, null, [r("規則", "禁止詐騙外鏈", "R"), r("新成員", "先低風險權限", "N"), r("成員", "142 在線", "M")], null, "加入群組")),
        st("加入後首屏", "根據群組規模進入直接聊天或 主題 list。", "重新播放", p("加密討論社群", "已加入 · 主題模式", null, null, [r("公告", "規則與活動", "A"), r("新手問答", "低壓力提問", "Q"), r("行情討論", "高頻討論", "T")], null, "重新播放", true))
      ]),
      sc("post-linked-thread", "從頻道貼文進討論串｜post-linked-thread", "普通用戶 + 商家 / 商業主", "使用者從頻道貼文進入 linked 討論串，保留貼文上下文和治理上下文。", "V1 用貼文連動討論串承接高意圖互動，避免把所有閱讀者直接帶進大群。", [
        ref("Telegram", "頻道留言可連到綁定討論群的對應討論。"),
        ref("Discord 討論串 / Forum", "獨立討論串能降低多主題混雜。"),
        ref("Reddit / Facebook 群組", "帖子型討論有來源上下文和管理動作。")
      ], ["linked 討論串", "post context", "討論串 moderation", "return to post"], ["所有討論只進單一大群", "頻道沒有回覆路徑", "討論脫離原始貼文"], ["post-linked 討論串", "context card", "reply", "檢舉 with source"], ["full forum taxonomy", "ranked comment system", "advanced moderation queue"], ["頻道閉環", "社群 / 討論層", "治理層"], [
        st("貼文討論入口", "頻道貼文提供進入討論串的 CTA。", "進入討論串", p("市場週報", "頻道 post", null, [c("市場週報 · 第 12 期", "摘要與資料來源。", "貼文"), c("討論串", "89 則討論 · 保留貼文上下文。", "討論串")], null, null, "進入討論串")),
        st("討論串內互動", "討論串頂部保留來源貼文。", "檢舉訊息", p("第 12 期討論串", "來源： Market 頻道", null, null, null, [m("Mina", "這段資料來源是哪裡？"), m("你", "在原貼文第二個外鏈。", true), m("系統", "來源：市場週報 · 第 12 期")], "檢舉訊息")),
        st("治理帶上下文", "檢舉或管理動作自動帶上貼文、討論串和訊息位置。", "重新播放", p("檢舉", "討論串 已包含上下文", null, [c("被檢舉訊息", "可疑外鏈。", "訊息"), c("來源上下文", "Market 頻道 · 第 12 期。", "上下文")], null, null, "重新播放"))
      ]),
      sc("topic-based-discussion", "大型社群主題模式｜topic-based-discussion", "普通用戶 + 社群管理者", "大型或高流量社群使用 主題 list first，讓使用者選擇主題後再進訊息流。", "Topic 是大型社群模式，不是每個群組的預設路徑；只有高噪音或多主題社群需要。", [
        ref("Telegram 主題", "大型群可用 主題 將討論拆成可選擇的主題訊息流。"),
        ref("Discord Forum", "Forum posts 和 tags 適合多主題社群沉澱。"),
        ref("WhatsApp Communities", "公告和子群組分軌顯示大型社群需要分流。")
      ], ["主題 list first for large groups", "主題 message flow", "主題 靜音/關注", "管理員控制 by 主題"], ["小群也強制 主題", "Discord 伺服器樹狀結構 直接照搬手機端", "主題太多無模板"], ["主題 list", "主題 message flow", "主題 notification", "basic 主題 admin"], ["server categories", "advanced role 分流", "forum ranking", "自動治理"], ["社群 / 討論層", "治理層"], [
        st("大型群首屏", "只有大型或高流量社群才先顯示 主題 list。", "選擇主題", p("加密討論社群", "主題模式 · 3,248 成員", ["大型群組", "主題列表", "不是小群預設"], null, [r("公告", "只看重要資訊", "A"), r("新手問答", "低壓力提問", "Q"), r("行情討論", "高頻互動", "T"), r("工具資源", "長期沉澱", "R")], null, "打開新手問答", true)),
        st("Topic 訊息流", "使用者進入單一主題後才看到訊息流。", "設定通知", p("新手問答", "主題訊息流", null, null, null, [m("Alex", "新手先看哪個指標？"), m("你", "先看成交量和支撐。", true), m("Mina", "我整理一份資源。")], "設定通知")),
        st("Topic 通知與治理", "Topic 可獨立靜音、關注、檢舉或由管理員處理。", "重新播放", p("主題設定", "新手問答", null, null, [r("關注此 Topic", "只收相關提醒", "F"), r("靜音", "降低噪音", "M"), r("檢舉 / 管理", "帶上 Topic 上下文", "S")], null, "重新播放"))
      ]),
      sc("admin-moderation", "管理員處理檢舉與內容｜admin-moderation", "社群管理者 + 普通用戶", "管理員處理群組或 主題 內的檢舉、移除、禁言和置頂，留下基本操作紀錄。", "V1 做基本可治理動作和最小 moderation log，不做企業級合規後台。", [
        ref("Discord", "roles、permissions、timeout、自動治理 和 檢舉 是大型社群治理參考。"),
        ref("Telegram", "管理員權限、刪除、封禁和 主題 管理支撐社群治理。"),
        ref("LINE OpenChat / Facebook 群組", "規則、管理員動作和 membership controls 是公開社群基本能力。")
      ], ["remove message", "靜音 member", "pin post", "handle 檢舉", "基本治理紀錄"], ["Day one 無治理", "完整企業合規後台", "AI moderation as V1 core"], ["remove", "靜音", "pin", "檢舉 handling", "basic log"], ["自動治理", "風險評分", "audit dashboard", "appeals workflow"], ["治理層", "社群 / 討論層"], [
        st("檢舉進管理入口", "檢舉帶上訊息、群組、主題 和來源。", "處理檢舉", p("治理", "1 檢舉 pending", null, [c("被檢舉訊息", "可疑外鏈 · 來自行情討論。", "檢舉"), c("上下文", "邀請=週報 CTA · 新成員。", "上下文")], null, null, "處理檢舉")),
        st("基本管理動作", "管理員可移除、禁言、置頂或保留觀察。", "禁言成員", p("管理動作", "基本控制", null, null, [r("移除訊息", "保留紀錄", "D"), r("禁言 24 小時", "限制高風險發言", "M"), r("置頂規則", "提醒社群邊界", "P")], null, "禁言 24 小時")),
        st("最小操作紀錄", "V1 只留基本 log，後續再擴展審計與 AI 風控。", "重新播放", p("治理紀錄", "V1 基本紀錄", null, null, [r("Kai 已禁言 24 小時", "by 管理員 · 行情討論", "L"), r("訊息已移除", "保留檢舉內容", "R")], null, "重新播放"))
      ])
    ]),
    mod("trust-risk", "trust-risk｜信任 / 安全 / 風控", "信任層橫跨私聊、群組、頻道、外部入口和商業聊天。V1 要做基本 封鎖 / 檢舉/靜音、加入風控、管理員 log 和商業訊息邊界。", [
      sc("user-block-report-mute", "封鎖 / 檢舉 / 靜音｜user-block-report-mute", "普通用戶", "普通用戶可對人、群、頻道或商業聊天做 封鎖、檢舉 或 靜音，保護主收件箱。", "V1 把 safety action 放在每種關係旁邊，不要求使用者去找後台設定。", [
        ref("WhatsApp / LINE", "封鎖、檢舉、unsubscribe 是普通用戶安全底線。"),
        ref("Discord", "檢舉 和 moderation action 需要保留上下文。"),
        ref("Telegram", "公開群和頻道需要 檢舉、封鎖 和 admin 接點。")
      ], ["封鎖", "檢舉", "靜音", "context-aware safety action"], ["只在設定頁提供安全動作", "檢舉 不帶上下文", "商業訊息不能退訂或封鎖"], ["封鎖", "檢舉", "靜音", "relationship safety controls"], ["AI review", "appeals center", "企業合規 workflow"], ["治理層", "身份與收件箱層", "治理層"], [
        st("從關係打開安全動作", "安全入口在每種關係旁邊。", "打開安全動作", p("Coffee Club", "商業聊天", ["商業", "Mute", "Block", "檢舉"], null, null, [m("Coffee Club", "本週優惠更新。"), m("你", "我想先靜音。", true)], "打開安全動作")),
        st("選擇動作", "封鎖、檢舉、靜音 有不同效果。", "檢舉訊息", p("安全控制", "選擇動作", null, null, [r("靜音", "停止通知，不切斷關係", "M"), r("封鎖", "停止對方訊息", "B"), r("檢舉", "送出內容與上下文", "R")], null, "檢舉")),
        st("檢舉帶上下文", "檢舉自動帶來源、關係類型和訊息上下文。", "重新播放", p("檢舉已送出", "已包含上下文", null, [c("訊息上下文", "最近 5 則訊息與來源。", "證據"), c("關係類型", "商業聊天 · 來自商品 CTA。", "上下文")], null, null, "重新播放"))
      ]),
      sc("join-risk-control", "邀請 / 加入風控｜join-risk-control", "普通用戶 + 社群管理者", "邀請連結、加入申請、新成員限制和高風險動作延遲，降低公開入口濫用。", "V1 把摩擦放在高風險動作，不完全阻擋內容預覽。", [
        ref("Telegram", "邀請連結、加入申請 和管理員權限支撐公開入口治理。"),
        ref("Discord", "rules screening、roles 和 onboarding 是高治理社群參考。"),
        ref("Facebook 群組", "membership questions 和 approval 能控制公開社群入口。")
      ], ["邀請 到期時間 / revoke", "加入申請", "new member limits", "high-risk action delay"], ["公開連結永久有效且無限制", "新成員立即大量私訊 / 外鏈", "所有入口都重型審核"], ["邀請 controls", "加入申請", "new member limits", "high-risk action delay"], ["風險評分", "device fingerprinting", "advanced fraud platform"], ["外部入口", "治理層", "社群 / 討論層"], [
        st("公開 邀請", "邀請連結有來源、有效期和目標類型。", "送出加入", p("群組邀請", "已檢查風險的入口", ["Invite", "有期限", "加入申請"], [c("加密討論社群", "來源：市場週報 CTA。", "公開群組")], null, null, "送出加入")),
        st("新成員限制", "新成員先能閱讀和低風險回覆。", "接受規則", p("新成員狀態", "信任前受限", null, null, [r("閱讀", "立即開放", "R"), r("發言", "接受規則後開放", "S"), r("外鏈 / 大量邀請", "延後開放", "L")], null, "接受規則")),
        st("管理員可撤銷入口", "高風險來源可被暫停、撤銷或改成審核加入。", "重新播放", p("邀請控制", "管理員", null, null, [r("暫停 邀請", "來源異常", "P"), r("改成審核加入", "降低灌入", "J"), r("查看來源", "post CTA / QR", "S")], null, "重新播放"))
      ]),
      sc("admin-action-log", "管理員操作紀錄｜admin-action-log", "社群管理者", "管理員完成 remove、靜音 或 basic moderation 後，系統留下最小操作紀錄。", "V1 做能追溯的基本 log，不先做完整 audit console。", [
        ref("Discord", "moderation logs、roles 和 timeout 是大型社群治理參考。"),
        ref("Telegram", "管理員操作和權限需要可追溯。"),
        ref("LINE OpenChat / Facebook 群組", "公開社群管理需要基本成員和內容處理能力。")
      ], ["remove message", "靜音 member", "admin action log", "source context"], ["沒有紀錄的管理動作", "完整企業審計平台", "AI 自動裁決作為 V1"], ["remove", "靜音", "basic 管理紀錄", "檢舉 context"], ["audit dashboard", "appeals", "自動治理", "policy engine"], ["治理層", "社群 / 討論層"], [
        st("管理員處理", "管理員從 檢舉 或訊息選單執行操作。", "移除訊息", p("管理工具", "已檢舉訊息", null, [c("可疑外鏈", "行情討論 · 新成員。", "檢舉")], null, null, "移除訊息")),
        st("選擇處理方式", "V1 提供移除、禁言和備註。", "確認", p("Action", "基本治理", null, null, [r("移除訊息", "保留 evidence", "D"), r("禁言 24 小時", "限制發言", "M"), r("管理備註", "給其他 admin 看", "N")], null, "確認處理")),
        st("寫入 log", "操作紀錄保留時間、管理員、對象和上下文。", "重新播放", p("操作紀錄", "V1 基本紀錄", null, null, [r("訊息已移除", "管理員 · 行情討論", "L"), r("成員已禁言", "24 小時 · 保留來源", "M")], null, "重新播放"))
      ]),
      sc("business-message-safety", "商業訊息安全邊界｜business-message-safety", "普通用戶 + 商家 / 商業主", "商業聊天支援 封鎖、unsubscribe、rate limit 或品質邊界，避免商業訊息污染收件箱。", "V1 做商業訊息最小安全邊界，不開完整商業推播和客服平台。", [
        ref("WhatsApp 商業", "business quality、模板、messaging limits 和 封鎖 / 檢舉 是商業訊息參考。"),
        ref("LINE OA", "封鎖 / unsubscribe、Messaging API rate limits 和官方帳號身份標籤提供邊界。"),
        ref("Intercom / Zendesk", "客服和 CRM 能力重要，但屬於 後續。")
      ], ["商業標籤", "unsubscribe / 封鎖", "rate limit", "品質邊界"], ["無限制商業推播", "CRM 工單", "AI customer service as V1 core"], ["商業標籤", "封鎖 / unsubscribe", "rate limit boundary", "檢舉"], ["CRM", "AI 客服", "ticket 分派", "template platform"], ["輕量商業層", "治理層", "身份與收件箱層"], [
        st("商業訊息標示", "使用者能看出這是 商業聊天。", "打開安全設定", p("Coffee Club", "商業聊天", ["商業", "Block", "Unsubscribe"], null, null, [m("Coffee Club", "本週新品通知。"), m("你", "我想少收一點。", true)], "打開安全設定")),
        st("退訂 / 封鎖 / 限流", "使用者可退訂通知或封鎖商家。", "退訂通知", p("商業安全", "訊息邊界", null, null, [r("退訂更新", "保留聊天，不收推播", "U"), r("封鎖商家", "停止訊息", "B"), r("檢舉濫發", "送出上下文", "R")], null, "退訂更新")),
        st("商家側邊界", "商家看到品質限制，但 CRM、AI 客服和模板平台後置。", "重新播放", p("商業邊界", "僅 V1", null, [c("V1", "商業標籤、商品卡、封鎖/unsubscribe。", "V1"), c("後續", "CRM、AI 客服、template ops。", "後續")], null, null, "重新播放"))
      ])
    ]),
    mod("business-commerce", "business-commerce｜輕量商業檔案 / 商品卡", "V1 商務只做 商業檔案、商業聊天標籤、商品卡，以及商品卡進聊天 / 頻道。不做 市集、支付、訂單 或 履約。", [
      sc("business-profile", "商業檔案｜business-profile", "商家 / 商業主 + 普通用戶", "商家有 檔案、category、description 和 對外連結，使用者能判斷是否開始聊天或 關注頻道。", "V1 商業檔案只負責身份與信任；外部連結 只是 outbound CTA，不是 tracked 結帳、支付、訂單 或 履約。", [
        ref("WhatsApp 商業", "商業檔案 提供地址、營業時間、網站和類別。"),
        ref("LINE OA", "官方帳號 檔案 和聊天入口建立品牌身份。"),
        ref("Instagram 商業 檔案", "商業 檔案 可接 CTA、DM 和外部連結。")
      ], ["商業檔案", "category", "description", "外部連結", "chat / channel CTA"], ["full 商店管理", "賣家後台", "支付 / 訂單 / 履約"], ["檔案", "category", "description", "對外連結", "商業標籤"], ["型錄同步", "賣家工具", "支付", "訂單", "履約"], ["輕量商業層", "外部入口", "身份與收件箱層"], [
        st("商業檔案", "商家 檔案 建立身份與信任。", "開始聊天", p("Coffee Club", "商業檔案", ["Cafe", "營業中", "外部連結"], [c("Coffee Club", "咖啡與輕食 · 08:00-19:00 · coff.ee", "檔案")], null, null, "開始聊天")),
        st("選擇關係", "使用者可以開 商業聊天 或 關注 商業頻道。", "打開聊天", p("Coffee Club", "可用動作", null, null, [r("商業聊天", "詢問商品或服務", "B"), r("頻道", "追蹤新品和活動", "C"), r("外部連結", "外部 CTA，不追蹤 結帳", "L")], null, "打開 商業聊天")),
        st("進入 商業聊天", "聊天中保留 商業標籤，但不進 CRM 工作台。", "重新播放", p("Coffee Club", "商業聊天", null, null, null, [m("Coffee Club", "歡迎詢問商品或自取時間。"), m("你", "今天有什麼推薦？", true)], "重新播放"))
      ]),
      sc("product-card-in-chat", "商品卡進聊天｜product-card-in-chat", "商家 / 商業主 + 普通用戶", "用戶從商品或商家檔案進入 商業聊天，商品卡保留上下文。", "V1 把商品卡作為 結構化聊天物件，購買、訂單和履約留給外部或 後續。", [
        ref("WhatsApp 商業", "商業檔案、型錄 和 商品分享 支撐商品以物件形式進入聊天。", "採用 商業檔案、商業聊天標籤、商品卡上下文。", "不採用完整 商業平台、模板、CRM 營運、支付 或 履約。"),
        ref("Shopify Inbox / Instagram", "商品上下文 進入對話，商家基於商品回覆。"),
        ref("LINE OA", "Flex 訊息 / 快速回覆 可承接商品資訊，但不應變成重選單。")
      ], ["商業檔案", "商業聊天標籤", "商品卡作為結構化物件", "外部商品連結"], ["完整市集", "支付", "訂單 / 履約", "full CRM"], ["商業檔案", "商品卡", "商業聊天標籤", "外部連結"], ["CRM", "AI 客服", "支付", "訂單", "履約"], ["輕量商業層", "身份與收件箱層", "治理層"], [
        st("商品進聊天", "商品卡可從 檔案、外部 CTA 或商家回覆帶入聊天。", "詢問商品", p("拿鐵組合", "商品卡", ["商品", "商業", "外部連結"], [c("拿鐵組合", "圖片、名稱、簡短描述、外部連結。", "商品")], null, null, "詢問商品")),
        st("聊天保留上下文", "使用者詢問時不必重新描述商品。", "商家回覆", p("Coffee Club", "商業聊天", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true), m("Coffee Club", "可以，17:00 前都能取。")], "查看邊界")),
        st("範圍邊界", "V1 不在 IM 內完成付款、訂單或履約。", "重新播放", p("V1 範圍", "輕量商務", null, [c("V1", "商品卡、商業聊天標籤、外部連結。", "V1"), c("後續", "CRM、AI 客服、支付、訂單、履約。", "後續")], null, null, "重新播放"))
      ]),
      sc("product-card-in-channel", "商品卡進頻道貼文｜product-card-in-channel", "商家 / 商業主 + 普通用戶", "商品卡出現在商業頻道貼文或 channel CTA，讀者可追蹤頻道或進 商業聊天。", "V1 讓商品卡支撐內容到商業聊天的轉換，不在頻道內建完整購物流。", [
        ref("Instagram", "商業內容和 product tags 能把內容興趣導向商品或 DM。"),
        ref("WhatsApp 商業", "商品分享 可作為聊天物件。"),
        ref("Shopify Inbox", "商品連結和客戶上下文進入對話，交易仍在商店系統。")
      ], ["貼文中的商品卡", "導向聊天的 CTA", "商業頻道", "外部連結"], ["channel 市集", "結帳 inside channel", "訂單 management"], ["頻道中的商品卡", "導向商業聊天的 CTA", "外部連結"], ["型錄 management", "支付", "訂單", "履約", "活動 CRM"], ["輕量商業層", "頻道閉環"], [
        st("頻道貼文商品卡", "商業頻道貼文可附商品卡。", "查看商品", p("Coffee Club 頻道", "商業更新", null, [c("週末新品", "拿鐵組合 · 可詢問自取。", "商品卡")], null, null, "查看商品")),
        st("商品 CTA", "商品卡可導向 商業聊天 或外部商品頁。", "進聊天", p("拿鐵組合", "商品卡", null, null, [r("詢問商家", "帶商品上下文進聊天", "B"), r("外部連結", "前往商家網站", "L"), r("追蹤頻道", "接收新品更新", "C")], null, "詢問商家")),
        st("聊天承接", "商品上下文進聊天；頻道不變成完整購物車。", "重新播放", p("Coffee Club", "商業聊天", null, null, null, [m("商品卡", "拿鐵組合 · 來自頻道貼文"), m("你", "這個有冰的嗎？", true)], "重新播放"))
      ]),
      sc("external-cta-to-business-chat", "外部 CTA 進商業聊天｜external-cta-to-business-chat", "商家 / 商業主 + 普通用戶", "廣告、商品連結或內容 CTA 直接打開 商業聊天，並帶入商品或來源上下文。", "V1 接住商業意圖和來源，不做完整廣告投放、CRM 分流 或交易系統。", [
        ref("WhatsApp 商業", "click-to-chat 和 商業 QR 讓外部入口進聊天。"),
        ref("Instagram", "click-to-message ads、product tags 和 檔案 CTA 導向 DM 或商品。"),
        ref("Meta 商業 Suite / Shopify Inbox", "商家後續可能需要集中收件箱，但 V1 不展開成 CRM。")
      ], ["CTA 來源追蹤", "商業聊天目標", "商品上下文", "商業標籤"], ["廣告優化 platform", "full CRM 分派", "支付 / 訂單 / 履約"], ["外部 CTA", "商業聊天", "來源追蹤", "商品卡"], ["廣告管理", "CRM", "AI 客服", "支付", "訂單"], ["外部入口", "輕量商業層", "身份與收件箱層"], [
        st("點擊外部 CTA", "外部來源和商品上下文被帶入。", "開啟聊天", p("外部 CTA", "廣告 / 內容 / 商品連結", ["已記錄來源", "商業", "商品"], [c("拿鐵組合", "來源：Instagram 內容 CTA。", "商品上下文")], null, null, "開啟商業聊天")),
        st("商業聊天 開場", "聊天自帶來源提示，商家和使用者都知道脈絡。", "回覆", p("Coffee Club", "商業聊天 · 來自外部 CTA", null, null, null, [m("系統", "來源：Instagram 內容 CTA"), m("商品卡", "拿鐵組合 · 外部連結"), m("你", "請問今天可自取嗎？", true)], "回覆")),
        st("留在收件箱", "商業對話回到收件箱，保留 商業標籤 和安全動作。", "重新播放", p("收件箱", "商業關係", null, null, [r("Coffee Club", "商業 · 來自外部 CTA", "B"), r("Market 頻道", "頻道更新", "C")], null, "重新播放"))
      ])
    ]),
    mod("status-updates", "status-updates｜輕量狀態 / 更新", "status-updates 是輕量佔位：只做 輕量更新物件，互動回到私聊、商業聊天、channel 或收件箱。不做 限時動態編輯器、社交動態流 或 推薦。", [
      sc("personal-status-reply", "個人狀態回覆進私聊｜personal-status-reply", "普通用戶", "使用者發布輕量 status，朋友回覆後回到 1:1 私聊。", "V1 只保留 輕量更新物件、低壓力近況與回覆路徑，不做完整 限時動態編輯器、社交動態流 或 推薦。", [
        ref("WhatsApp 狀態", "狀態回覆 回到 私聊，證明 lightweight update 可以服務聊天回訪。", "採用 status 回覆進聊天 與短生命週期更新。", "不採用完整 限時動態編輯器、動態流 或 推薦。"),
        ref("Instagram Stories", "Stories reply 會進 DM，但 V1 不採完整創作工具。"),
        ref("Snapchat Stories", "短生命週期降低發布壓力，但攝影心智不是 V1 主入口。")
      ], ["輕量狀態物件", "回覆進私聊", "可見範圍控制", "到期時間"], ["完整限時動態編輯器", "社交動態流", "推薦", "創作者分析"], ["簡單狀態", "回覆路徑", "可見範圍", "return to chat"], ["貼圖編輯器", "精選限時動態", "動態排序", "推薦"], ["狀態 / 更新表面", "身份與收件箱層"], [
        st("發布狀態", "使用者發布短文字或輕量更新，設定可見範圍。", "發布", p("狀態", "個人狀態", ["24 小時", "好友", "回覆進聊天"], [c("今天晚點回訊息", "簡短狀態，不進內容 動態流。", "狀態")], null, null, "發布狀態")),
        st("朋友回覆", "朋友從 status 回覆，直接進 1:1 私聊。", "打開回覆", p("狀態回覆", "來自 Mina", null, null, null, [m("Mina", "你今天很忙嗎？"), m("你", "對，晚點回。", true)], "打開私聊")),
        st("回到私聊", "狀態互動回到既有關係。", "重新播放", p("Mina", "私聊", null, null, null, [m("Mina", "好，那你忙完再說。"), m("你", "謝謝。", true)], "重新播放"))
      ]),
      sc("business-or-channel-update", "商業 / 頻道輕量更新｜business-or-channel-update", "商家 / 商業主 + 普通用戶", "商家或頻道發布輕量更新，使用者可回到 channel、商業聊天 或 商品卡。", "V1 讓 update 成為 輕量更新物件 和輕觸達表面，不把它做成 限時動態編輯器、動態流、推薦 或品牌 campaign 系統。", [
        ref("WhatsApp 更新 / 頻道", "狀態和頻道同在更新，但頻道仍是低噪音更新。"),
        ref("Instagram Stories", "品牌可用 Stories 做輕量互動，但完整工具過重。"),
        ref("LINE OA", "官方帳號可推送更新並導回聊天或服務入口。")
      ], ["lightweight business update", "return to channel", "導向商業聊天的 CTA", "商品卡 link"], ["full campaign manager", "推薦動態流", "完整視覺限時動態工具"], ["簡單更新", "商家 / 頻道發送者", "CTA", "回訪路徑"], ["活動自動化", "豐富限時動態編輯器", "廣告投放", "推薦"], ["狀態 / 更新表面", "頻道閉環", "輕量商業層"], [
        st("商業輕量更新", "商家或頻道發布短更新。", "查看 CTA", p("更新", "商業 / 頻道", null, [c("Coffee Club 今日供應", "拿鐵組合 17:00 前可自取。", "商業更新")], null, null, "查看 CTA")),
        st("CTA 分流", "更新可導向 商業聊天、商品卡或頻道貼文。", "進入聊天", p("Coffee Club update", "輕量 CTA", null, null, [r("詢問商品", "進 商業聊天", "B"), r("查看商品卡", "帶上下文", "P"), r("追蹤頻道", "接收更新", "C")], null, "詢問商品")),
        st("商業聊天 承接", "互動回到聊天或頻道，不建立獨立 動態流。", "重新播放", p("Coffee Club", "商業聊天", null, null, null, [m("系統", "來源：今日供應 update"), m("你", "拿鐵組合還有嗎？", true)], "重新播放"))
      ]),
      sc("update-return-to-inbox", "更新互動回到收件箱 / 聊天｜update-return-to-inbox", "普通用戶 + 商家 / 商業主", "使用者從 update 互動後，回到收件箱、chat、channel 或 商品卡 的正確位置。", "V1 的 update 只做 輕量更新物件 與回訪路徑，不做 限時動態編輯器、動態流、推薦 或獨立內容宇宙。", [
        ref("WhatsApp 狀態", "status reply 回到 chat，頻道更新 可轉發或回訪。"),
        ref("Instagram Stories", "reply 進 DM，CTA 可進 檔案 或商品。"),
        ref("LINE OA", "更新可用 快速回覆 / 豐富選單 帶回聊天與服務入口。")
      ], ["update 深連結", "回覆路徑", "return to收件箱", "類型標籤"], ["更新互動停留在獨立 動態流", "把 status 做成主產品入口", "推薦系統先行"], ["更新物件", "回覆 / CTA", "深連結 to 聊天 / 收件箱", "類型標籤"], ["動態排序", "創作者工具", "限時動態封存", "推薦"], ["狀態 / 更新表面", "身份與收件箱層"], [
        st("從 update 互動", "使用者點擊 update 的回覆或 CTA。", "回覆", p("Update", "回訪路徑", null, [c("Market 頻道 更新", "點擊可回到頻道貼文或討論。", "頻道更新"), c("Mina 狀態", "回覆會進私聊。", "Personal status")], null, null, "回覆 Mina")),
        st("進入正確關係", "不同 update 類型回到不同表面。", "回到收件箱", p("Mina", "私聊 · from status", null, null, null, [m("系統", "來源：Mina 的狀態"), m("你", "晚點聊。", true)], "回到收件箱")),
        st("收件箱類型清楚", "回訪位置仍由收件箱類型標籤 管理。", "重新播放", p("收件箱", "回訪路徑", null, null, [r("Mina", "私聊 · 來自狀態回覆", "1"), r("Market 頻道", "頻道 · update", "C"), r("Coffee Club", "商業 · 來自更新", "B")], null, "重新播放"))
      ])
    ])
  ]
};

normalizeEvidence(DATA);


function normalizeEvidence(data) {
  data.modules.forEach((module) => {
    module.scenarios.forEach((scenario) => {
      scenario.references = scenario.references.map((item) => {
        const guidance = referenceGuidance(item.app, module.id);
        return {
          ...item,
          pattern: item.pattern || guidance.pattern,
          adopt: item.adopt || guidance.adopt || scenario.adopted.slice(0, 2).join(" + "),
          reject: item.reject || guidance.reject || scenario.rejected.slice(0, 2).join(" / "),
          sourceModule: module.id,
          sourceApp: item.app
        };
      });
    });
  });
}

function referenceGuidance(app, moduleId) {
  const key = app.toLowerCase();
  const moduleGuidance = {
    "messaging-identity": {
      pattern: "shared 聊天列表 / identity label",
      adopt: "use one收件箱with clear private, group, channel, and 商業標籤",
      reject: "copying a super-app or CRM-heavy identity model in V1"
    },
    "external-entry": {
      pattern: "有類型標示的外部入口 with source and target",
      adopt: "record 目標類型, source, 加入規則, and risk state before 分流",
      reject: "dropping every 外部連結 directly into a full message stream"
    },
    "channel-loop": {
      pattern: "低噪音 廣播 with explicit 討論或聊天 CTA",
      adopt: "use 公開預覽, 關注狀態, and clear 貼文到討論路徑",
      reject: "pure 廣播 with no 回訪路徑 or full 動態流/推薦 in V1"
    },
    "community-governance": {
      pattern: "group entry, rules, 討論串/主題 options, and 管理員控制",
      adopt: "support direct 小群 and optional 主題模式 for larger communities",
      reject: "forcing every group through 主題 hierarchy or Discord-level server setup"
    },
    "trust-risk": {
      pattern: "relationship safety controls and 治理上下文",
      adopt: "封鎖、檢舉、靜音, 加入控制, 管理員動作, and 基本紀錄",
      reject: "企業合規, AI moderation, or complex 風險評分 in V1"
    },
    "business-commerce": {
      pattern: "business identity and 商品上下文 inside chat/channel",
      adopt: "商業檔案, 商業聊天標籤, and 商品卡 as context",
      reject: "市集, 支付, 訂單, 履約, CRM, or AI 客服 in V1"
    },
    "status-updates": {
      pattern: "lightweight status/更新物件 with reply 回訪路徑",
      adopt: "簡單更新, 回覆進聊天, and return to收件箱with 類型標籤",
      reject: "限時動態編輯器, 社交動態流, 推薦, or 活動平台"
    }
  };
  const base = moduleGuidance[moduleId] || {};

  if (key.includes("whatsapp business")) {
    return { pattern: "商業檔案 + 型錄/商品分享 + 品質邊界", adopt: "商業檔案 and 商品卡 as chat context", reject: "商業平台 模板, CRM-like operations, 支付, 訂單, and 履約 in V1" };
  }
  if (key.includes("whatsapp channels")) {
    return { pattern: "低噪音 channel 關注 and separated 更新表面", adopt: "低噪音 關注 and clear 頻道 label", reject: "making a separate 更新 tab mandatory or leaving 頻道更新s without discussion/chat return" };
  }
  if (key === "whatsapp" || key.includes("whatsapp / line")) {
    return { pattern: "低摩擦 chats, groups, 邀請s, 封鎖 / 檢舉", adopt: "familiar 聊天 / 群組入口 and basic safety controls", reject: "hiding business or channel context as ordinary 私聊" };
  }
  if (key.includes("line oa")) {
    return { pattern: "official account + 豐富選單 + 快速回覆", adopt: "clear business identity and lightweight service entry", reject: "heavy 豐富選單, LIFF, CRM, or mini-app flow in V1" };
  }
  if (key === "line" || key.includes("line 開啟chat")) {
    return { pattern: "QR/ID/chat entry and group identity boundary", adopt: "有類型標示的入口, 檔案/rules before join, and clear account labels", reject: "過重服務選單 or 完整 mini-app 平台 in V1" };
  }
  if (key.includes("telegram 主題")) {
    return { pattern: "主題 inside large groups", adopt: "主題模式 for large or high-volume communities", reject: "主題優先 as mandatory route for every group" };
  }
  if (key.includes("telegram")) {
    return { pattern: "公開連結, channels, groups, and 有類型標示的目標", adopt: "公開預覽, link 目標類型, 關注/join state, and optional linked discussion", reject: "Bot/API, Mini Apps, or 平台生態 as V1 proof" };
  }
  if (key.includes("discord")) {
    return { pattern: "roles, forum/討論串 discussion, moderation, onboarding", adopt: "structured discussion and 管理員控制 where scale requires them", reject: "伺服器樹狀結構, heavy onboarding, 自動治理, or enterprise moderation in V1" };
  }
  if (key.includes("shopify") || key.includes("instagram")) {
    if (moduleId === "status-updates") {
      return { pattern: "story/update reply into DM or 檔案/product CTA", adopt: "lightweight reply or CTA 回訪路徑", reject: "完整限時動態編輯器, 動態流, 推薦, 結帳, 訂單, or 履約" };
    }
    return { pattern: "product or content context enters chat", adopt: "商品卡 keeps context inside 商業聊天 or channel", reject: "結帳, 訂單, 履約, 廣告管理, 創作者工具, or 活動歸因 in V1" };
  }
  if (key.includes("facebook groups")) {
    return { pattern: "群組頁, rules, membership questions, 管理員控制", adopt: "rules and join state before 公開群組參與", reject: "完整社群動態流 or insights suite in V1" };
  }
  if (key.includes("intercom") || key.includes("zendesk") || key.includes("meta business")) {
    return { pattern: "business收件箱, customer context, 分派, automation", adopt: "future support hook only", reject: "CRM 工單, SLA, 分派, or AI 客服 inside V1" };
  }
  return base;
}

function source(label, href) {
  return { label, href };
}

function mod(id, name, summary, scenarios) {
  return { id, name, summary, scenarios };
}

function sc(id, name, role, journey, choice, references, adopted, rejected, v1, later, implication, steps) {
  return {
    id,
    name,
    role,
    journey,
    choice,
    references,
    adopted,
    rejected,
    scope: { v1, later },
    implication,
    steps,
    color: "cyan",
    tag: "流程步驟"
  };
}

function ref(app, pattern, adopt = "", reject = "", sourceRef = SOURCES.compare) {
  return { app, pattern, adopt, reject, source: sourceRef };
}

function st(title, description, action, phone) {
  return { id: title, title, description, action, phone };
}

function p(header, subheader, chips, cards, list, messages, bottom, topics = false) {
  return { header, subheader, chips, cards, list: topics ? null : list, topics: topics ? list : null, messages, bottom };
}

function c(title, body, meta) {
  return { title, body, meta };
}

function r(title, body, icon) {
  return { title, body, icon };
}

function m(author, body, me = false) {
  return { author, body, me };
}

const MODULE_ALIASES = {
  "external-community-entry": "external-entry",
  "channel-content": "channel-loop",
  "group-topics": "community-governance",
  "trust-governance": "trust-risk"
};

function createInitialPlaygroundState() {
  const params = new URLSearchParams(window.location.search);
  const requestedModuleId = MODULE_ALIASES[params.get("module")] || params.get("module");
  const module = DATA.modules.find((item) => item.id === requestedModuleId) || DATA.modules[0];
  const scenario = module.scenarios.find((item) => item.id === params.get("scenario")) || module.scenarios[0];
  const requestedStep = Number.parseInt(params.get("step"), 10);
  const stepIndex = Number.isInteger(requestedStep)
    ? Math.min(Math.max(requestedStep, 0), scenario.steps.length - 1)
    : 0;

  return { moduleId: module.id, scenarioId: scenario.id, stepIndex };
}

const playgroundState = createInitialPlaygroundState();

function activeContext() {
  const module = DATA.modules.find((item) => item.id === playgroundState.moduleId) || DATA.modules[0];
  const scenario = module.scenarios.find((item) => item.id === playgroundState.scenarioId) || module.scenarios[0];
  const stepIndex = Math.min(playgroundState.stepIndex, scenario.steps.length - 1);
  return { module, scenario, stepIndex, step: scenario.steps[stepIndex] };
}

function createNode(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text != null) node.textContent = options.text;
  if (options.type) node.type = options.type;
  if (options.ariaLabel) node.setAttribute("aria-label", options.ariaLabel);
  if (options.href) node.href = options.href;
  if (options.onClick) node.addEventListener("click", options.onClick);
  if (options.onChange) node.addEventListener("change", options.onChange);
  appendChildren(node, children);
  if (options.value != null) node.value = options.value;
  return node;
}

function appendChildren(parent, children) {
  children.flat().filter(Boolean).forEach((child) => {
    parent.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  });
}

function updatePlaygroundUrl() {
  const { module, scenario, stepIndex } = activeContext();
  const params = new URLSearchParams(window.location.search);
  params.set("module", module.id);
  params.set("scenario", scenario.id);
  params.set("step", String(stepIndex));
  params.delete("architecture");
  window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
}

function setPlaygroundState(next) {
  Object.assign(playgroundState, next);
  updatePlaygroundUrl();
  renderPlayground();
}

function renderPlayground() {
  const root = document.getElementById("interaction-root");
  const { module, scenario, stepIndex, step } = activeContext();
  root.replaceChildren(
    createNode("div", { className: "ip-shell" }, [
      renderSelector(module, scenario),
      createNode("section", { className: "ip-main-grid" }, [
        createNode("div", { className: "ip-phone-wrap" }, [
          createNode("div", { className: "ip-phone-stage" }, [
            renderPhone(step, scenario),
            renderStepNavigator(scenario, stepIndex)
          ])
        ]),
        renderEvidence(module, scenario)
      ])
    ])
  );
}

function renderSelector(module, scenario) {
  const moduleSelect = createNode("select", {
    value: module.id,
    onChange: (event) => {
      const nextModule = DATA.modules.find((item) => item.id === event.target.value) || DATA.modules[0];
      setPlaygroundState({ moduleId: nextModule.id, scenarioId: nextModule.scenarios[0].id, stepIndex: 0 });
    }
  }, DATA.modules.map((item) => createNode("option", { value: item.id, text: item.name })));

  const scenarioSelect = createNode("select", {
    value: scenario.id,
    onChange: (event) => {
      const nextScenario = module.scenarios.find((item) => item.id === event.target.value) || module.scenarios[0];
      setPlaygroundState({ scenarioId: nextScenario.id, stepIndex: 0 });
    }
  }, module.scenarios.map((item) => createNode("option", { value: item.id, text: item.name })));

  return createNode("section", { className: "ip-selector", ariaLabel: "V1 情境選擇器" }, [
    createNode("div", { className: "ip-field" }, [createNode("label", { text: "模組" }), moduleSelect]),
    createNode("div", { className: "ip-field" }, [createNode("label", { text: "情境 / 旅程" }), scenarioSelect])
  ]);
}

function renderPhone(step, scenario) {
  const phone = step.phone || {};
  return createNode("div", { className: "ip-phone ip-platform-ours", ariaLabel: "V1 情境手機 mockup" }, [
    createNode("div", { className: "ip-phone-screen" }, [
      createNode("div", { className: "ip-status" }, [createNode("span", { text: "9:41" }), createNode("span", { text: "● ▲" })]),
      createNode("div", { className: "ip-mobile-header" }, [createNode("b", { text: phone.header || step.title }), createNode("span", { text: phone.subheader || scenario.name })]),
      createNode("div", { className: "ip-mobile-body" }, [
        createNode("div", { className: `ip-mobile-scroll ip-accent-${scenario.color}` }, [
          phone.chips ? createNode("div", { className: "ip-chip-row" }, phone.chips.map((chip) => createNode("span", { className: "ip-chip", text: chip }))) : null,
          phone.cards ? phone.cards.map((item) => renderFeedCard(item)) : null,
          phone.list ? phone.list.map((item) => renderListRow(item)) : null,
          phone.topics ? phone.topics.map((item) => renderListRow(item, true)) : null,
          phone.messages ? createNode("div", { className: "ip-messages" }, phone.messages.map((item) => renderMessage(item))) : null
        ])
      ]),
      createNode("div", { className: "ip-bottom-action" }, [
        createNode("button", { type: "button", className: "ip-primary", text: phone.bottom || step.action, onClick: goNextStep })
      ])
    ])
  ]);
}

function renderFeedCard(item) {
  return createNode("button", { type: "button", className: "ip-feed-card", onClick: goNextStep }, [
    createNode("span", { text: item.meta }),
    createNode("b", { text: item.title }),
    createNode("p", { text: item.body })
  ]);
}

function renderListRow(item, topic = false) {
  return createNode("button", { type: "button", className: topic ? "ip-topic-row" : "ip-list-row", onClick: goNextStep }, [
    createNode("span", { className: "ip-avatar", text: item.icon || item.title.slice(0, 1) }),
    createNode("span", { className: "ip-row-text" }, [createNode("b", { text: item.title }), createNode("span", { text: item.body })]),
    createNode("span", { className: "ip-row-arrow", text: topic ? ">" : "" })
  ]);
}

function renderMessage(item) {
  return createNode("div", { className: `ip-message ${item.me ? "me" : ""}` }, [
    item.body,
    createNode("small", { text: item.me ? "你 · 已送達" : item.author })
  ]);
}

function goNextStep() {
  const { scenario } = activeContext();
  setPlaygroundState({ stepIndex: (playgroundState.stepIndex + 1) % scenario.steps.length });
}

function renderStepNavigator(scenario, activeIndex) {
  return createNode("aside", { className: "ip-step-panel" }, [
    createNode("div", { className: "ip-step-card" }, [
      createNode("span", { className: "eyebrow", text: scenario.tag }),
      createNode("h3", { text: scenario.steps[activeIndex].title }),
      createNode("p", { text: scenario.steps[activeIndex].description })
    ]),
    createNode("div", { className: "ip-progress", ariaLabel: "流程步驟" },
      scenario.steps.map((item, index) => createNode("button", {
        type: "button",
        className: index === activeIndex ? "active" : "",
        onClick: () => setPlaygroundState({ stepIndex: index })
      }, [createNode("span", { className: "ip-dot", text: `${index + 1}` }), createNode("span", { text: item.title })]))
    )
  ]);
}

function renderPanelTitle(title, meta) {
  return createNode("div", { className: "ip-panel-title" }, [createNode("h2", { text: title }), meta ? createNode("span", { text: meta }) : null]);
}

function renderEvidence(module, scenario) {
  return createNode("aside", { className: "ip-evidence", ariaLabel: "V1 情境證據與推導" }, [
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("覆蓋旅程", scenario.role),
      createNode("p", { className: "ip-panel-copy", text: scenario.journey })
    ]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("參考依據", "有競品依據"), renderSourceNote(module.id), renderReferenceBasis(scenario.references)]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("證據結論", "產品判斷"), createNode("p", { className: "ip-method-note", text: scenario.choice })]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("採用模式", "產品判斷"), renderPillList(scenario.adopted, "adopted")]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("不採用模式", "產品判斷"), renderPillList(scenario.rejected, "rejected")]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("V1 範圍邊界", "V1 / 後續"), renderScopeBoundary(scenario.scope)]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("架構含義", "架構圖"), renderPillList(scenario.implication, "implication")])
  ]);
}

function renderSourceNote(moduleId) {
  return createNode("p", { className: "ip-source-note" }, [
    "證據來源：",
    createNode("a", { href: SOURCES.compare.href, text: SOURCES.compare.label }),
    ` / ${moduleId}`
  ]);
}

function renderReferenceBasis(references) {
  return createNode("div", { className: "ip-reference-list" },
    references.map((item) => createNode("article", { className: "ip-reference-item" }, [
      createNode("b", { text: item.app }),
      renderReferenceLine("觀察", item.pattern),
      createNode("small", { className: "ip-ref-source", text: `${item.sourceModule} / ${item.sourceApp}` })
    ]))
  );
}

function renderReferenceLine(label, value) {
  return createNode("p", { className: "ip-ref-line" }, [createNode("span", { text: `${label}:` }), ` ${value}`]);
}

function renderPillList(items, tone) {
  const uniqueItems = [...new Set(items)];
  return createNode("div", { className: `ip-pill-list ${tone}` }, uniqueItems.map((item) => createNode("span", { text: item })));
}

function renderScopeBoundary(boundary) {
  return createNode("div", { className: "ip-scope-columns" }, [
    createNode("article", { className: "ip-scope-card v1" }, [createNode("b", { text: "V1" }), createNode("ul", {}, boundary.v1.map((item) => createNode("li", { text: item })))]),
    createNode("article", { className: "ip-scope-card later" }, [createNode("b", { text: "後續" }), createNode("ul", {}, boundary.later.map((item) => createNode("li", { text: item })))])
  ]);
}

function bootPlayground() {
  try {
    renderPlayground();
    updatePlaygroundUrl();
  } catch (error) {
    console.error("V1 情境流程頁面載入失敗。", error);
    const root = document.getElementById("interaction-root");
    if (root) {
      root.replaceChildren(createNode("div", { className: "loading-shell" }, [createNode("p", { text: "V1 情境流程載入失敗，請查看瀏覽器 Console 的錯誤訊息。" })]));
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootPlayground);
} else {
  bootPlayground();
}
