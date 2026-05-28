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
    mod("messaging-identity", "messaging-identity｜通訊核心與身份", "V1 用同一個 inbox 承接私聊、群組、頻道更新與商業聊天，但每種關係都要有清楚身份與類型標籤。", [
      sc("private-chat-entry", "Private chat entry｜進入 1:1 私聊", "普通用戶", "普通用戶從好友邀請或 inbox 進入 1:1 私聊，關係沉澱在同一個聊天底座。", "V1 先完成穩定私聊、回訪和安全動作，不把商業或平台能力混進私人對話。", [
        ref("WhatsApp", "Chats list 以私聊和群組作為主要心智，支撐低學習成本回訪。"),
        ref("LINE", "好友與聊天列表建立熟人關係，官方帳號另以身份標籤區隔。"),
        ref("Telegram", "同一聊天列表可承接人、群、頻道，但目標類型需要清楚。")
      ], ["unified inbox", "1:1 chat object", "read / unread state", "block / report / mute"], ["把私聊改成 CRM 對話", "Bot/API 作為私聊入口前提", "一開始就要求多 persona"], ["1:1 chat", "friend identity", "message state", "basic safety actions"], ["multi persona", "enterprise identity mapping", "advanced encryption modes"], ["Identity + Inbox Layer", "Identity + Inbox Layer", "Governance Layer"], [
        st("好友邀請進入", "使用者先看到真人身份與安全提示。", "開始聊天", p("Mina", "好友邀請 · 私人聊天", ["好友", "1:1", "可封鎖"], [c("Mina 想和你聊天", "接受後會出現在 Inbox。", "Friend invite")], null, null, "接受並開始聊天")),
        st("私聊訊息流", "標準 IM 訊息流先成立，安全入口留在同一表面。", "回到 Inbox", p("Mina", "私人聊天", null, null, null, [m("Mina", "明天資料我整理好了。"), m("你", "收到，我晚點看。", true)], "回到 Inbox")),
        st("Inbox 留存", "私聊回到統一 inbox，不需要新增獨立入口。", "重新播放", p("Inbox", "Relationship Layer", null, null, [r("Mina", "收到，我晚點看。", "1"), r("加密討論群", "3 則未讀", "G"), r("Coffee Club", "Business · 商品卡", "B")], null, "重新播放"))
      ]),
      sc("group-chat-in-inbox", "Group chat in inbox｜從 inbox 回到群聊", "普通用戶", "使用者加入或回訪小型群組，群聊和私聊放在同一 inbox，但用 Group 類型標籤避免混淆。", "小群不需要 topic-first；V1 讓小群直接進聊天，只有大型或高噪音社群才需要主題分流。", [
        ref("WhatsApp", "群組和私聊同在 Chats list，入口直接、學習成本低。"),
        ref("LINE", "群組聊天沿用熟悉聊天心智，適合熟人或小型協作。"),
        ref("Telegram", "群組可和私聊同列，大型群再用 Topics 擴展。")
      ], ["group type label", "inbox unread state", "direct group chat for small groups", "mute / leave / report"], ["所有群都強制 topic-first", "小群也套大型社群 onboarding", "群聊入口藏在頻道內"], ["group relation", "direct group message flow", "member state", "mute / leave"], ["role automation", "complex server tree", "advanced topic governance for every group"], ["Identity + Inbox Layer", "Community / Discussion Layer", "Governance Layer"], [
        st("Inbox 類型標籤", "群組在 inbox 中清楚標示 Group。", "打開群組", p("Inbox", "All relationships", null, null, [r("Mina", "Private · 明天見", "1"), r("週末球局", "Group · Kai: 場地已訂", "G"), r("Market Channel", "Channel update", "C")], null, "打開週末球局")),
        st("小群直接聊天", "早期或小型群組直接進訊息流。", "查看群資訊", p("週末球局", "Group · 8 members", null, null, null, [m("Kai", "週六 15:00 可以嗎？"), m("你", "可以，我帶球。", true), m("Nora", "我晚 10 分鐘到。")], "查看群資訊")),
        st("群組邊界", "群資訊提供成員、靜音、離開與檢舉。", "重新播放", p("Group info", "週末球局", null, null, [r("成員", "8 members", "M"), r("靜音", "降低通知", "N"), r("離開 / 檢舉", "安全動作", "S")], null, "重新播放"))
      ]),
      sc("mixed-inbox-type-labels", "Mixed inbox type labels｜混合 inbox 類型標籤", "普通用戶 + 商家 / 商業主", "使用者在一個 inbox 看見私聊、群聊、頻道更新和商業聊天，靠類型標籤判斷下一步。", "V1 不開多個主入口；一個 inbox 保留 IM 心智，類型標籤負責降低混淆。", [
        ref("WhatsApp", "Chats list 承接私聊、群組和 business account label。"),
        ref("Telegram", "聊天列表可容納私聊、群組、頻道與 Bot 等目標類型。"),
        ref("LINE", "官方帳號像聊天關係，但身份標示和服務入口要清楚。"),
        ref("WeChat", "高密度服務平台證明身份統一有價值，但 V1 不複製完整超級平台。")
      ], ["unified inbox", "type labels", "relationship state", "business chat label"], ["Updates / Channels 完全切成獨立產品", "直接做超級平台入口", "商業流程隱藏成普通好友"], ["private chat", "group chat", "channel update", "business chat label"], ["full service account platform", "mini-app center", "enterprise CRM inbox"], ["Identity + Inbox Layer", "Identity + Inbox Layer", "Business Lightweight Layer"], [
        st("同一 inbox", "四種關係出現在同一列表。", "打開商業聊天", p("Inbox", "Type labels first", null, null, [r("Mina", "Private · 明天見", "1"), r("加密討論", "Group · 3 unread", "G"), r("Market Channel", "Channel · 新週報", "C"), r("Coffee Club", "Business · 商品卡", "B")], null, "打開 Coffee Club")),
        st("商業標籤可見", "商業聊天有 label、檔案和商品卡，但仍是 IM 對話。", "回到 inbox", p("Coffee Club", "Business chat", ["Business", "Profile", "Product card"], [c("商業檔案", "類別、營業時間、網站。", "Profile"), c("拿鐵組合", "商品卡可回覆或轉發。", "Product")], null, null, "回到 Inbox")),
        st("回訪不迷路", "使用者透過類型標籤回到正確表面。", "重新播放", p("Inbox", "Return path", ["Private", "Group", "Channel", "Business"], null, [r("Market Channel", "Channel · 1 new update", "C"), r("Coffee Club", "Business · 有新回覆", "B")], null, "重新播放"))
      ]),
      sc("business-chat-identity", "Business chat identity｜商業聊天身份", "商家 / 商業主 + 普通用戶", "使用者打開商業聊天時，能看見 business label、商業檔案和商品卡上下文。", "V1 讓商業身份進聊天，但只做輕量商業層；不把 inbox 變成 CRM workspace。", [
        ref("WhatsApp Business", "Business profile、catalog、product sharing 和 business account label 是輕量商業身份參考。"),
        ref("LINE OA", "官方帳號用聊天關係承接品牌互動，服務入口可在聊天內分流。"),
        ref("Shopify Inbox / Instagram", "商品上下文進入聊天，購買和履約多由外部系統承接。")
      ], ["business chat label", "business profile", "product card object", "block / report business"], ["full CRM", "payment / order / fulfillment", "business process hidden inside personal chat"], ["business profile", "business chat label", "product card in chat"], ["CRM ticketing", "AI support", "payment", "order", "fulfillment"], ["Business Lightweight Layer", "Identity + Inbox Layer", "Governance Layer"], [
        st("Business label", "使用者從 inbox 看到商業身份。", "打開聊天", p("Inbox", "Business relation", null, null, [r("Coffee Club", "Business · 商品卡", "B"), r("Mina", "Private", "1")], null, "打開商業聊天")),
        st("商業檔案", "聊天頂部可進商業檔案。", "查看商品", p("Coffee Club", "Business chat", ["Business", "Profile", "Safe messaging"], [c("Coffee Club", "咖啡與輕食 · 08:00-19:00 · coff.ee", "Business profile")], null, null, "查看商品卡")),
        st("商品卡上下文", "商品卡作為聊天物件出現，使用者可以直接詢問。", "重新播放", p("Coffee Club", "Product context", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true), m("Coffee Club", "可以，17:00 前都能取。")], "重新播放"))
      ])
    ]),
    mod("external-entry", "external-entry｜外部入口 / 邀請", "外部入口必須先說清楚目標類型、來源、加入規則和風險狀態，避免把所有流量直接丟進聊天流。", [
      sc("friend-invite", "Friend invite｜好友邀請 / QR / contact add", "普通用戶", "普通用戶透過好友邀請、QR 或聯絡人加入，進入可辨識的 1:1 私聊關係。", "V1 把好友邀請視為 relationship entry，不和群組、頻道、商業 CTA 混成同一入口。", [
        ref("LINE", "QR、ID、通訊錄和好友加入是清楚的個人入口。"),
        ref("WhatsApp", "電話聯絡人、QR 和 invite 建立低摩擦聊天關係。"),
        ref("Telegram", "username / link 可指向個人，但公開入口需要安全邊界。")
      ], ["friend QR", "contact add", "target type label", "source tracking"], ["好友邀請直接帶入群聊", "不標示目標類型", "公開 username 無風險邊界"], ["friend invite", "QR / contact add", "private chat preview", "block/report before accepting"], ["social graph recommendation", "advanced address book growth", "OAuth identity ecosystem"], ["External Entry", "Identity + Inbox Layer", "Identity + Inbox Layer"], [
        st("掃描 QR", "入口先顯示目標是個人。", "查看身份", p("Add friend", "QR invite", ["Person", "Private chat", "Source: QR"], [c("Mina", "共同群組：週末球局。", "Friend target")], null, null, "查看身份")),
        st("接受前安全動作", "接受前可以封鎖或檢舉。", "接受邀請", p("Mina", "Friend preview", null, null, [r("開始私聊", "接受後進 Inbox", "1"), r("封鎖", "不建立關係", "B"), r("檢舉", "可疑邀請", "R")], null, "接受好友邀請")),
        st("進入私聊", "成功後建立 1:1 對話，來源保留為風控資料。", "重新播放", p("Mina", "Private chat · from QR", null, null, null, [m("系統", "你們現在可以互相傳訊息。"), m("你", "嗨，我是剛剛掃 QR 加的。", true)], "重新播放"))
      ]),
      sc("group-invite", "Group invite｜群組邀請預覽 / 加入狀態", "普通用戶", "使用者點群組 invite link，先看群組預覽、規則、成員狀態與加入條件，再決定加入。", "V1 不把 invite link 直接丟進完整訊息流；先用 group preview 建立目標理解和風險邊界。", [
        ref("WhatsApp", "group / community invite link 是低摩擦入口，但需要管理員與隱私提示。"),
        ref("Telegram", "invite link、join request 和公開群預覽支撐不同加入門檻。"),
        ref("LINE OpenChat / Facebook Groups", "加入前暱稱、規則和問題能建立社群邊界。")
      ], ["group preview", "rules before join", "member state", "join request when needed"], ["一點連結就暴露完整群流", "所有群組都要求重型 onboarding", "邀請連結無撤銷 / 限制"], ["invite link", "group preview", "rules", "join / request state"], ["advanced role onboarding", "server guide", "growth attribution suite"], ["External Entry", "Community / Discussion Layer", "Governance Layer"], [
        st("打開 invite link", "入口標示目標是群組，並顯示來源。", "查看預覽", p("Group invite", "Source: channel post", ["Group", "Invite link", "Risk checked"], [c("加密討論社群", "3,248 成員 · 加入後可發言。", "Group preview")], null, null, "查看群組預覽")),
        st("規則與成員狀態", "加入前先看規則、成員數和審核狀態。", "送出加入", p("加密討論社群", "Rules before join", null, null, [r("規則", "禁止詐騙外鏈與洗版", "R"), r("成員", "3,248 members", "M"), r("加入方式", "新成員先低風險權限", "J")], null, "加入群組")),
        st("加入後路徑", "群組加入後依規模分流：小群直接聊天，大型或高流量社群才使用 group home / optional topics。", "重新播放", p("加密討論社群", "Joined · route by group scale", ["Topic is optional"], null, [r("Small / early group", "直接進 group chat", "G"), r("Large / high-volume community", "先看 group home，可選 topic", "T")], null, "重新播放"))
      ]),
      sc("channel-share-link", "Channel share link｜公開頻道連結預覽 / follow", "普通用戶 + 商家 / 商業主", "外部使用者從分享連結進入公開頻道，先看 profile 和 selected posts，再決定 follow。", "V1 採用公開預覽與低噪音 follow；不強制建立獨立 Updates tab，更新可用清楚 Channel label 回到 inbox。", [
        ref("Telegram", "public channel link 和可預覽內容支撐頻道外部導流。"),
        ref("WhatsApp Channels", "頻道可被分享，追蹤是低噪音承諾點。"),
        ref("Instagram Broadcast Channels", "創作者內容可以導流到一對多更新關係。")
      ], ["public channel link", "channel profile", "selected posts preview", "follow state"], ["先要求下載 / 登入才看到目標", "頻道預覽直接變成推薦 feed", "follow 後立刻進大群"], ["share link", "public preview", "follow", "unified return with Channel label", "discussion CTA"], ["mandatory separate Updates tab", "full content discovery", "paid channel", "creator analytics"], ["External Entry", "Channel Loop", "Channel Loop"], [
        st("外部分享連結", "使用者從內容、QR 或朋友分享打開頻道連結。", "打開預覽", p("Channel link", "Public preview", ["Channel", "Share link", "No join yet"], [c("Market Channel", "每日市場摘要與討論入口。", "Public channel")], null, null, "打開頻道預覽")),
        st("頻道預覽", "profile、簡介和選定貼文先出現。", "Follow", p("Market Channel", "Public preview · 12K followers", null, [c("市場週報", "本週重點與外鏈卡片。", "Pinned"), c("AMA 公告", "週五 20:00 開始。", "Post")], null, null, "Follow channel")),
        st("回到 inbox", "follow 後頻道更新可回到 inbox，但仍保留 Channel 類型標籤。", "重新播放", p("Inbox", "Followed channel", null, null, [r("Market Channel", "Channel · 新週報", "C"), r("加密討論社群", "Group · 3 unread", "G")], null, "重新播放"))
      ]),
      sc("business-cta-entry", "Business CTA entry｜廣告 / 商品 / 創作者 CTA", "商家 / 商業主 + 普通用戶", "V1 將廣告、商品連結、創作者內容或商業檔案 CTA 都抽象成 source-tracked business CTA，導向 business chat 或 channel。", "V1 只建模 source-tracked business CTA；不實作 ads manager、creator tools、campaign attribution 或 commerce platform。", [
        ref("TikTok / Instagram", "內容、profile、DM CTA 和 product tag 能把興趣導向商業互動。"),
        ref("WhatsApp Business", "click-to-chat 和 Business QR 讓外部意圖直接進聊天。"),
        ref("Shopify Inbox / Instagram", "商品上下文進入對話，購買履約可留在外部。")
      ], ["source tracking", "target type label", "business profile CTA", "product card context"], ["完整廣告平台", "完整 marketplace", "低品質 CTA 無風控", "商品點擊後只進泛首頁"], ["source-tracked business CTA", "business chat", "channel follow", "product card context"], ["ads manager", "creator tools", "campaign attribution", "commerce platform", "CRM routing", "payment", "order", "fulfillment"], ["External Entry", "Business Lightweight Layer", "Identity + Inbox Layer"], [
        st("外部 CTA", "來源和目標類型先被記錄。", "查看目標", p("Product CTA", "Source: creator post", ["Business", "Product", "Source tracked"], [c("拿鐵組合", "來自 Coffee Club 內容 CTA。", "Product card")], null, null, "查看商家")),
        st("商業檔案承接", "商家 profile 建立信任，可選擇聊天或 follow channel。", "詢問商品", p("Coffee Club", "Business profile", null, [c("商業檔案", "咖啡與輕食 · 外部連結。", "Profile"), c("更新頻道", "追蹤新品與活動。", "Channel")], null, null, "帶商品進聊天")),
        st("Business chat", "商品卡進聊天，保留來源和上下文。", "重新播放", p("Coffee Club", "Business chat · from content CTA", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天有現貨嗎？", true)], "重新播放"))
      ])
    ]),
    mod("channel-loop", "channel-loop｜頻道 / 內容到討論閉環", "公開頻道負責低噪音內容承接，討論入口負責把高意圖使用者帶到可治理的群組、thread 或 topic。", [
      sc("public-channel-preview", "Public channel preview｜公開頻道預覽", "普通用戶 + 商家 / 商業主", "外部使用者先預覽頻道 profile 與 selected posts，再決定 follow 或進入討論。", "V1 用頻道預覽降低加入壓力；公開可看，互動才需要更高承諾。", [
        ref("Telegram", "公開頻道和 public links 提供內容預覽與外部分享能力。"),
        ref("WhatsApp Channels", "低噪音頻道適合一對多更新，但討論能力有限。"),
        ref("LINE OA", "官方帳號可作為品牌更新與服務路由，但大型討論要外接群組。")
      ], ["channel profile", "selected posts preview", "follow CTA", "discussion CTA"], ["純廣播無回路", "頻道內直接塞完整群聊", "短影音推薦 feed 作為 V1 入口"], ["public channel", "profile", "selected posts", "follow", "discussion CTA"], ["paid channel", "creator analytics", "recommendation feed", "live streaming"], ["Channel Loop", "External Entry", "Channel Loop"], [
        st("公開頻道頁", "訪客可先看頻道身份、簡介與內容樣本。", "查看貼文", p("Market Channel", "Public preview · 12K followers", ["Public URL", "Selected posts", "Follow"], [c("頻道簡介", "每日市場摘要與討論入口。", "Profile"), c("市場週報", "摘要、外鏈、討論 CTA。", "Pinned")], null, null, "查看貼文")),
        st("低噪音閱讀", "頻道只承接高信號內容。", "Follow", p("市場週報", "Channel post", null, [c("本週重點", "三個重點、來源連結、討論入口。", "Post"), c("討論", "89 則討論 · 加入後可回覆。", "CTA")], null, null, "Follow channel")),
        st("Follow 後回訪", "follow 後更新可在 inbox 出現，仍標示為 Channel。", "重新播放", p("Inbox", "Channel update", null, null, [r("Market Channel", "Channel · 1 new post", "C"), r("Mina", "Private", "1")], null, "重新播放"))
      ]),
      sc("follow-channel", "Follow channel｜關注後接收更新", "普通用戶 + 商家 / 商業主", "使用者 follow 頻道後，在 inbox 或 update surface 接收更新，並能回到正確貼文。", "V1 採用 WhatsApp Channels 的低噪音 follow，拒絕把 separate Updates tab 做成必備主入口，並借用 Telegram / LINE-like unified return，讓更新帶 Channel label 回到 inbox。", [
        ref("WhatsApp Channels", "follow channel 是低噪音訂閱關係，頻道和聊天有清楚邊界。"),
        ref("Telegram", "訂閱頻道後更新進入聊天列表，頻道仍和討論群分開。"),
        ref("Instagram Broadcast Channels", "一對多更新關係可維持創作者或品牌觸達。")
      ], ["follow state", "channel update in inbox", "mute / notification setting", "post deep link"], ["follow 後自動加群", "所有頻道更新都高打擾通知", "follow 等於私聊授權"], ["follow", "channel unread", "Channel label in inbox", "mute", "deep link back to post"], ["advanced subscription segmentation", "paid broadcast", "campaign automation"], ["Channel Loop", "Identity + Inbox Layer", "Identity + Inbox Layer"], [
        st("按下 Follow", "使用者在頻道頁建立低承諾關係。", "接收更新", p("Market Channel", "Public channel", ["Follow", "Mute available", "No group join"], [c("市場週報", "Follow 後會收到低噪音更新。", "Post")], null, null, "Follow")),
        st("更新進 Inbox", "頻道更新出現在 inbox，但類型標籤清楚。", "打開更新", p("Inbox", "Channel updates", null, null, [r("Market Channel", "Channel · 新週報", "C"), r("加密討論社群", "Group · 3 unread", "G")], null, "打開更新")),
        st("回到貼文", "點擊未讀直接回到貼文。", "重新播放", p("市場週報", "Deep link from Inbox", null, [c("本週重點", "直接回到未讀貼文。", "Unread"), c("進入討論", "加入社群後可回覆。", "CTA")], null, null, "重新播放"))
      ]),
      sc("post-to-discussion", "Post to discussion｜貼文進討論", "普通用戶 + 商家 / 商業主", "頻道貼文提供 comments、thread、linked group 或 discussion CTA，讓高意圖讀者進入可治理討論。", "V1 採用明確討論 CTA，不把每則貼文直接變成大群噪音；討論模式依社群規模選擇。", [
        ref("Telegram", "頻道可連到 linked discussion group，貼文留言形成內容到討論的閉環。"),
        ref("Discord Forum / Threads", "討論可拆成獨立帖子或 thread，適合多主題長期沉澱。"),
        ref("WhatsApp Channels", "頻道本體偏低噪音，若要討論需另接群組或 chat CTA。")
      ], ["post discussion CTA", "linked group/thread", "discussion count", "return to post"], ["純廣播沒有討論路徑", "每則貼文直接暴露完整群流", "所有頻道都強制 topic hierarchy"], ["post CTA", "linked discussion", "thread / group entry", "moderation context"], ["full forum product", "multi-server structure", "advanced content ranking"], ["Channel Loop", "Community / Discussion Layer", "Community / Discussion Layer"], [
        st("貼文下方 CTA", "頻道貼文清楚顯示可進討論。", "進入討論", p("市場週報", "Channel post", null, [c("市場週報 · 第 12 期", "摘要、來源、外鏈。", "Post"), c("討論", "89 則討論 · 加入後可回覆。", "CTA")], null, null, "進入討論")),
        st("選擇討論面", "小型社群可進 group chat；大型社群可進 thread 或 topic。", "打開 thread", p("Discussion", "Linked from post", null, null, [r("貼文討論串", "針對本週報", "T"), r("行情討論", "高頻討論區", "G"), r("新手問答", "低壓力提問", "Q")], null, "打開貼文討論串", true)),
        st("保留貼文上下文", "討論串顯示來源貼文，管理員也能用同一上下文治理。", "重新播放", p("貼文討論串", "Linked to Market Channel", null, null, null, [m("Mina", "這週支撐位怎麼看？"), m("你", "我會先看成交量和支撐。", true), m("系統", "來源：市場週報 · 第 12 期")], "重新播放"))
      ]),
      sc("business-channel-product-cta", "Business channel product CTA｜商業頻道商品 CTA", "商家 / 商業主 + 普通用戶", "商家在頻道貼文中放商品卡或 CTA，使用者可進 business chat 詢問。", "V1 讓商品卡服務頻道和聊天的轉換，不在頻道內做完整商城交易。", [
        ref("WhatsApp Business", "catalog / product sharing 支撐商品以輕量物件進入對話。"),
        ref("Instagram", "product tag 和商業 profile CTA 能把內容興趣導向商品或 DM。"),
        ref("Shopify Inbox", "商品連結和上下文進入聊天，購買履約仍由商店系統處理。")
      ], ["product card in post", "CTA to business chat", "business label", "external product link"], ["頻道內 full marketplace", "payment / order / fulfillment", "AI sales agent as V1 requirement"], ["product card", "business channel post", "CTA to chat", "external link"], ["payment", "order", "fulfillment", "catalog sync", "AI support"], ["Channel Loop", "Business Lightweight Layer", "Identity + Inbox Layer"], [
        st("商業頻道貼文", "頻道貼文可以附商品卡。", "查看商品", p("Coffee Club Channel", "Business channel", ["Channel", "Product card", "Chat CTA"], [c("新品拿鐵組合", "本週限定，點擊可詢問。", "Product CTA")], null, null, "查看商品卡")),
        st("商品卡詳情", "商品卡提供名稱、摘要和外部連結。", "詢問商家", p("拿鐵組合", "Product card", null, [c("拿鐵組合", "圖片、短描述、外部商品連結。", "Card"), c("詢問商家", "帶商品上下文進 business chat。", "CTA")], null, null, "詢問商家")),
        st("帶入 business chat", "商品上下文進聊天，使用者可問庫存、時間或外部購買連結。", "重新播放", p("Coffee Club", "Business chat", null, null, null, [m("商品卡", "新品拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true)], "重新播放"))
      ])
    ]),
    mod("community-governance", "community-governance｜群組 / 主題治理", "群組不是永遠等於 topic-first。V1 同時支撐小群直接聊天、大型社群預覽加入、貼文討論串、主題模式與基本管理員動作。", [
      sc("direct-group-chat", "Direct group chat｜小群直接聊天", "普通用戶", "小型或早期群組加入後直接進 group chat，不強制經過 topic list。", "V1 預設小群走直接聊天，避免把簡單群組做成過重社群系統。", [
        ref("WhatsApp", "小型群組直接聊天是低學習成本群組心智。"),
        ref("LINE", "熟人群組沿用聊天介面，適合日常協作。"),
        ref("Telegram", "一般群組可直接聊天，Topics 是大型群擴展能力。")
      ], ["direct group chat", "member list", "mute / leave", "basic admin"], ["所有群強制 topics", "加入小群也要角色導覽", "伺服器級頻道樹"], ["direct group chat", "member state", "mute / leave", "admin remove"], ["topic templates for every group", "role onboarding", "AutoMod"], ["Community / Discussion Layer", "Identity + Inbox Layer", "Governance Layer"], [
        st("加入小群", "小型群組先顯示群名、成員和規則摘要。", "進入聊天", p("週末球局", "Group · 8 members", ["Small group", "Direct chat", "Mute"], [c("群組簡介", "約球、場地與時間討論。", "Group")], null, null, "進入聊天")),
        st("直接聊天", "使用者直接看到訊息流，不需要先選 topic。", "查看群資訊", p("週末球局", "Direct group chat", null, null, null, [m("Kai", "週六 15:00 場地 OK。"), m("你", "收到，我帶球。", true), m("Nora", "我會晚一點到。")], "查看群資訊")),
        st("基本治理", "小群只需要靜音、成員、退出和基本檢舉。", "重新播放", p("Group info", "Basic controls", null, null, [r("靜音", "降低通知", "N"), r("成員", "8 members", "M"), r("離開 / 檢舉", "安全動作", "S")], null, "重新播放"))
      ]),
      sc("public-group-join", "Public group join｜公開群組加入", "普通用戶", "使用者看到公開群組 profile、規則、成員狀態和加入條件，再加入。", "公開群要先建立規則與成員狀態，不把陌生人直接丟進完整訊息流。", [
        ref("Telegram", "公開群和 invite link 支撐預覽與加入狀態。"),
        ref("LINE OpenChat", "主題聊天室可用獨立暱稱與加入前設定建立邊界。"),
        ref("Facebook Groups", "群組頁、規則與 membership questions 是加入前治理參考。")
      ], ["group profile", "rules", "member state", "join / request state"], ["公開入口直接進全量聊天", "加入前完全沒有規則", "大型社群用純熟人群心智"], ["public group profile", "rules", "join state", "member preview"], ["full community feed", "group insights", "advanced onboarding questions"], ["Community / Discussion Layer", "External Entry", "Governance Layer"], [
        st("公開群組 Profile", "群組入口先展示主題、規則和成員狀態。", "查看規則", p("加密討論社群", "Public group · 3,248 members", ["Public", "Rules", "Join"], [c("群組主題", "市場討論、新手問答、工具資源。", "Profile")], null, null, "查看規則")),
        st("加入前確認", "加入前看到規則和新成員權限。", "加入", p("Join group", "Rules and member state", null, null, [r("規則", "禁止詐騙外鏈", "R"), r("新成員", "先低風險權限", "N"), r("成員", "142 online", "M")], null, "加入群組")),
        st("加入後首屏", "根據群組規模進入直接聊天或 topic list。", "重新播放", p("加密討論社群", "Joined · Topic mode", null, null, [r("公告", "規則與活動", "A"), r("新手問答", "低壓力提問", "Q"), r("行情討論", "高頻討論", "T")], null, "重新播放", true))
      ]),
      sc("post-linked-thread", "Post-linked thread｜從頻道貼文進討論串", "普通用戶 + 商家 / 商業主", "使用者從頻道貼文進入 linked thread，保留貼文上下文和治理上下文。", "V1 用貼文連動討論串承接高意圖互動，避免把所有閱讀者直接帶進大群。", [
        ref("Telegram", "頻道留言可連到綁定討論群的對應討論。"),
        ref("Discord Threads / Forum", "獨立討論串能降低多主題混雜。"),
        ref("Reddit / Facebook Groups", "帖子型討論有來源上下文和管理動作。")
      ], ["linked thread", "post context", "thread moderation", "return to post"], ["所有討論只進單一大群", "頻道沒有回覆路徑", "討論脫離原始貼文"], ["post-linked thread", "context card", "reply", "report with source"], ["full forum taxonomy", "ranked comment system", "advanced moderation queue"], ["Channel Loop", "Community / Discussion Layer", "Governance Layer"], [
        st("貼文討論入口", "頻道貼文提供進入討論串的 CTA。", "進入討論串", p("市場週報", "Channel post", null, [c("市場週報 · 第 12 期", "摘要與資料來源。", "Post"), c("討論串", "89 則討論 · 保留貼文上下文。", "Thread")], null, null, "進入討論串")),
        st("討論串內互動", "討論串頂部保留來源貼文。", "檢舉訊息", p("第 12 期討論串", "Linked from Market Channel", null, null, null, [m("Mina", "這段資料來源是哪裡？"), m("你", "在原貼文第二個外鏈。", true), m("系統", "來源：市場週報 · 第 12 期")], "檢舉訊息")),
        st("治理帶上下文", "檢舉或管理動作自動帶上貼文、討論串和訊息位置。", "重新播放", p("Report", "Thread context included", null, [c("被檢舉訊息", "可疑外鏈。", "Message"), c("來源上下文", "Market Channel · 第 12 期。", "Context")], null, null, "重新播放"))
      ]),
      sc("topic-based-discussion", "Topic-based discussion｜大型社群主題模式", "普通用戶 + 社群管理者", "大型或高流量社群使用 topic list first，讓使用者選擇主題後再進訊息流。", "Topic 是大型社群模式，不是每個群組的預設路徑；只有高噪音或多主題社群需要。", [
        ref("Telegram Topics", "大型群可用 Topics 將討論拆成可選擇的主題訊息流。"),
        ref("Discord Forum", "Forum posts 和 tags 適合多主題社群沉澱。"),
        ref("WhatsApp Communities", "公告和子群組分軌顯示大型社群需要分流。")
      ], ["topic list first for large groups", "topic message flow", "topic mute/follow", "admin controls by topic"], ["小群也強制 topic", "Discord server tree 直接照搬手機端", "主題太多無模板"], ["topic list", "topic message flow", "topic notification", "basic topic admin"], ["server categories", "advanced role routing", "forum ranking", "AutoMod"], ["Community / Discussion Layer", "Community / Discussion Layer", "Governance Layer"], [
        st("大型群首屏", "只有大型或高流量社群才先顯示 topic list。", "選擇主題", p("加密討論社群", "Topic mode · 3,248 members", ["Large group", "Topic list", "Not default for small groups"], null, [r("公告", "只看重要資訊", "A"), r("新手問答", "低壓力提問", "Q"), r("行情討論", "高頻互動", "T"), r("工具資源", "長期沉澱", "R")], null, "打開新手問答", true)),
        st("Topic 訊息流", "使用者進入單一主題後才看到訊息流。", "設定通知", p("新手問答", "Topic message flow", null, null, null, [m("Alex", "新手先看哪個指標？"), m("你", "先看成交量和支撐。", true), m("Mina", "我整理一份資源。")], "設定通知")),
        st("Topic 通知與治理", "Topic 可獨立靜音、關注、檢舉或由管理員處理。", "重新播放", p("Topic settings", "新手問答", null, null, [r("關注此 Topic", "只收相關提醒", "F"), r("靜音", "降低噪音", "M"), r("檢舉 / 管理", "帶上 Topic 上下文", "S")], null, "重新播放"))
      ]),
      sc("admin-moderation", "Admin moderation｜管理員移除 / 禁言 / 置頂 / 處理檢舉", "社群管理者 + 普通用戶", "管理員處理群組或 topic 內的檢舉、移除、禁言和置頂，留下基本操作紀錄。", "V1 做基本可治理動作和最小 moderation log，不做企業級合規後台。", [
        ref("Discord", "roles、permissions、timeout、AutoMod 和 report 是大型社群治理參考。"),
        ref("Telegram", "管理員權限、刪除、封禁和 topic 管理支撐社群治理。"),
        ref("LINE OpenChat / Facebook Groups", "規則、管理員動作和 membership controls 是公開社群基本能力。")
      ], ["remove message", "mute member", "pin post", "handle report", "basic moderation log"], ["Day one 無治理", "完整企業合規後台", "AI moderation as V1 core"], ["remove", "mute", "pin", "report handling", "basic log"], ["AutoMod", "risk scoring", "audit dashboard", "appeals workflow"], ["Governance Layer", "Community / Discussion Layer", "Community / Discussion Layer"], [
        st("檢舉進管理入口", "檢舉帶上訊息、群組、topic 和來源。", "處理檢舉", p("Moderation", "1 report pending", null, [c("被檢舉訊息", "可疑外鏈 · 來自行情討論。", "Report"), c("上下文", "invite=週報 CTA · 新成員。", "Context")], null, null, "處理檢舉")),
        st("基本管理動作", "管理員可移除、禁言、置頂或保留觀察。", "禁言成員", p("Admin action", "Basic controls", null, null, [r("移除訊息", "保留紀錄", "D"), r("禁言 24h", "限制高風險發言", "M"), r("置頂規則", "提醒社群邊界", "P")], null, "禁言 24h")),
        st("最小操作紀錄", "V1 只留基本 log，後續再擴展審計與 AI 風控。", "重新播放", p("Moderation log", "Basic V1 record", null, null, [r("Kai muted 24h", "by Admin · 行情討論", "L"), r("Message removed", "Report retained", "R")], null, "重新播放"))
      ])
    ]),
    mod("trust-risk", "trust-risk｜信任 / 安全 / 風控", "信任層橫跨私聊、群組、頻道、外部入口和商業聊天。V1 要做基本 block/report/mute、加入風控、管理員 log 和商業訊息邊界。", [
      sc("user-block-report-mute", "User block / report / mute｜封鎖 / 檢舉 / 靜音", "普通用戶", "普通用戶可對人、群、頻道或商業聊天做 block、report 或 mute，保護主 inbox。", "V1 把 safety action 放在每種關係旁邊，不要求使用者去找後台設定。", [
        ref("WhatsApp / LINE", "block、report、unsubscribe 是普通用戶安全底線。"),
        ref("Discord", "report 和 moderation action 需要保留上下文。"),
        ref("Telegram", "公開群和頻道需要 report、block 和 admin 接點。")
      ], ["block", "report", "mute", "context-aware safety action"], ["只在設定頁提供安全動作", "report 不帶上下文", "商業訊息不能退訂或封鎖"], ["block", "report", "mute", "relationship safety controls"], ["AI review", "appeals center", "enterprise compliance workflow"], ["Governance Layer", "Identity + Inbox Layer", "Governance Layer"], [
        st("從關係打開安全動作", "安全入口在每種關係旁邊。", "打開安全動作", p("Coffee Club", "Business chat", ["Business", "Mute", "Block", "Report"], null, null, [m("Coffee Club", "本週優惠更新。"), m("你", "我想先靜音。", true)], "打開安全動作")),
        st("選擇動作", "block、report、mute 有不同效果。", "檢舉訊息", p("Safety controls", "Choose action", null, null, [r("靜音", "停止通知，不切斷關係", "M"), r("封鎖", "停止對方訊息", "B"), r("檢舉", "送出內容與上下文", "R")], null, "檢舉")),
        st("檢舉帶上下文", "檢舉自動帶來源、關係類型和訊息上下文。", "重新播放", p("Report sent", "Context included", null, [c("訊息上下文", "最近 5 則訊息與來源。", "Evidence"), c("關係類型", "Business chat · from product CTA。", "Context")], null, null, "重新播放"))
      ]),
      sc("join-risk-control", "Join risk control｜邀請 / 加入風控", "普通用戶 + 社群管理者", "邀請連結、加入申請、新成員限制和高風險動作延遲，降低公開入口濫用。", "V1 把摩擦放在高風險動作，不完全阻擋內容預覽。", [
        ref("Telegram", "invite link、join request 和管理員權限支撐公開入口治理。"),
        ref("Discord", "rules screening、roles 和 onboarding 是高治理社群參考。"),
        ref("Facebook Groups", "membership questions 和 approval 能控制公開社群入口。")
      ], ["invite expiry / revoke", "join request", "new member limits", "high-risk action delay"], ["公開連結永久有效且無限制", "新成員立即大量私訊 / 外鏈", "所有入口都重型審核"], ["invite controls", "join request", "new member limits", "high-risk action delay"], ["risk scoring", "device fingerprinting", "advanced fraud platform"], ["External Entry", "Governance Layer", "Community / Discussion Layer"], [
        st("公開 invite", "邀請連結有來源、有效期和目標類型。", "送出加入", p("Group invite", "Risk checked entry", ["Invite", "Expires", "Join request"], [c("加密討論社群", "來源：市場週報 CTA。", "Public group")], null, null, "送出加入")),
        st("新成員限制", "新成員先能閱讀和低風險回覆。", "接受規則", p("New member state", "Limited until trusted", null, null, [r("閱讀", "立即開放", "R"), r("發言", "接受規則後開放", "S"), r("外鏈 / 大量邀請", "延後開放", "L")], null, "接受規則")),
        st("管理員可撤銷入口", "高風險來源可被暫停、撤銷或改成審核加入。", "重新播放", p("Invite controls", "Admin", null, null, [r("暫停 invite", "來源異常", "P"), r("改成審核加入", "降低灌入", "J"), r("查看來源", "post CTA / QR", "S")], null, "重新播放"))
      ]),
      sc("admin-action-log", "Admin action log｜管理員移除 / 禁言 / 基本紀錄", "社群管理者", "管理員完成 remove、mute 或 basic moderation 後，系統留下最小操作紀錄。", "V1 做能追溯的基本 log，不先做完整 audit console。", [
        ref("Discord", "moderation logs、roles 和 timeout 是大型社群治理參考。"),
        ref("Telegram", "管理員操作和權限需要可追溯。"),
        ref("LINE OpenChat / Facebook Groups", "公開社群管理需要基本成員和內容處理能力。")
      ], ["remove message", "mute member", "admin action log", "source context"], ["沒有紀錄的管理動作", "完整企業審計平台", "AI 自動裁決作為 V1"], ["remove", "mute", "basic admin log", "report context"], ["audit dashboard", "appeals", "AutoMod", "policy engine"], ["Governance Layer", "Governance Layer", "Community / Discussion Layer"], [
        st("管理員處理", "管理員從 report 或訊息選單執行操作。", "移除訊息", p("Admin tools", "Reported message", null, [c("可疑外鏈", "行情討論 · 新成員。", "Report")], null, null, "移除訊息")),
        st("選擇處理方式", "V1 提供移除、禁言和備註。", "確認", p("Action", "Basic moderation", null, null, [r("移除訊息", "保留 evidence", "D"), r("禁言 24h", "限制發言", "M"), r("管理備註", "給其他 admin 看", "N")], null, "確認處理")),
        st("寫入 log", "操作紀錄保留時間、管理員、對象和上下文。", "重新播放", p("Action log", "V1 basic record", null, null, [r("Message removed", "Admin · 行情討論", "L"), r("Member muted", "24h · source retained", "M")], null, "重新播放"))
      ]),
      sc("business-message-safety", "Business message safety｜商業訊息安全邊界", "普通用戶 + 商家 / 商業主", "商業聊天支援 block、unsubscribe、rate limit 或品質邊界，避免商業訊息污染 inbox。", "V1 做商業訊息最小安全邊界，不開完整商業推播和客服平台。", [
        ref("WhatsApp Business", "business quality、templates、messaging limits 和 block/report 是商業訊息參考。"),
        ref("LINE OA", "block / unsubscribe、Messaging API rate limits 和官方帳號身份標籤提供邊界。"),
        ref("Intercom / Zendesk", "客服和 CRM 能力重要，但屬於 Later。")
      ], ["business label", "unsubscribe / block", "rate limit", "quality boundary"], ["無限制商業推播", "CRM ticketing", "AI customer service as V1 core"], ["business label", "block / unsubscribe", "rate limit boundary", "report"], ["CRM", "AI support", "ticket assignment", "template platform"], ["Business Lightweight Layer", "Governance Layer", "Identity + Inbox Layer"], [
        st("商業訊息標示", "使用者能看出這是 business chat。", "打開安全設定", p("Coffee Club", "Business chat", ["Business", "Block", "Unsubscribe"], null, null, [m("Coffee Club", "本週新品通知。"), m("你", "我想少收一點。", true)], "打開安全設定")),
        st("退訂 / 封鎖 / 限流", "使用者可退訂通知或封鎖商家。", "退訂通知", p("Business safety", "Message boundary", null, null, [r("退訂更新", "保留聊天，不收推播", "U"), r("封鎖商家", "停止訊息", "B"), r("檢舉濫發", "送出上下文", "R")], null, "退訂更新")),
        st("商家側邊界", "商家看到品質限制，但 CRM、AI 客服和模板平台後置。", "重新播放", p("Business boundary", "V1 only", null, [c("V1", "business label、product card、block/unsubscribe。", "Now"), c("Later", "CRM、AI support、template ops。", "Later")], null, null, "重新播放"))
      ])
    ]),
    mod("business-commerce", "business-commerce｜輕量商業檔案 / 商品卡", "V1 商務只做 business profile、business chat label、product card，以及商品卡進聊天 / 頻道。不做 marketplace、payment、order 或 fulfillment。", [
      sc("business-profile", "Business profile｜商業檔案", "商家 / 商業主 + 普通用戶", "商家有 profile、category、description 和 outbound external link，使用者能判斷是否開始聊天或 follow channel。", "V1 商業檔案只負責身份與信任；external link 只是 outbound CTA，不是 tracked checkout、payment、order 或 fulfillment。", [
        ref("WhatsApp Business", "Business profile 提供地址、營業時間、網站和類別。"),
        ref("LINE OA", "官方帳號 profile 和聊天入口建立品牌身份。"),
        ref("Instagram Business Profile", "商業 profile 可接 CTA、DM 和外部連結。")
      ], ["business profile", "category", "description", "external link", "chat / channel CTA"], ["full store management", "seller backend", "payment / order / fulfillment"], ["profile", "category", "description", "outbound external link", "business label"], ["catalog sync", "seller tools", "payment", "order", "fulfillment"], ["Business Lightweight Layer", "External Entry", "Identity + Inbox Layer"], [
        st("商業檔案", "商家 profile 建立身份與信任。", "開始聊天", p("Coffee Club", "Business profile", ["Cafe", "Open now", "External link"], [c("Coffee Club", "咖啡與輕食 · 08:00-19:00 · coff.ee", "Profile")], null, null, "開始聊天")),
        st("選擇關係", "使用者可以開 business chat 或 follow 商業頻道。", "打開聊天", p("Coffee Club", "Actions", null, null, [r("Business chat", "詢問商品或服務", "B"), r("Channel", "追蹤新品和活動", "C"), r("External link", "Outbound CTA，不追蹤 checkout", "L")], null, "打開 Business chat")),
        st("進入 business chat", "聊天中保留 business label，但不進 CRM workspace。", "重新播放", p("Coffee Club", "Business chat", null, null, null, [m("Coffee Club", "歡迎詢問商品或自取時間。"), m("你", "今天有什麼推薦？", true)], "重新播放"))
      ]),
      sc("product-card-in-chat", "Product card in chat｜商品卡進聊天", "商家 / 商業主 + 普通用戶", "用戶從商品或商家檔案進入 business chat，商品卡保留上下文。", "V1 把商品卡作為 structured chat object，購買、訂單和履約留給外部或 Later。", [
        ref("WhatsApp Business", "business profile、catalog 和 product sharing 支撐商品進聊天。"),
        ref("Shopify Inbox / Instagram", "product context 進入對話，商家基於商品回覆。"),
        ref("LINE OA", "Flex Message / Quick Reply 可承接商品資訊，但不應變成重選單。")
      ], ["business profile", "business chat label", "product card as structured object", "external product link"], ["full marketplace", "payment", "order / fulfillment", "full CRM"], ["business profile", "product card", "business chat label", "external link"], ["CRM", "AI support", "payment", "order", "fulfillment"], ["Business Lightweight Layer", "Identity + Inbox Layer", "Governance Layer"], [
        st("商品進聊天", "商品卡可從 profile、外部 CTA 或商家回覆帶入聊天。", "詢問商品", p("拿鐵組合", "Product card", ["Product", "Business", "External link"], [c("拿鐵組合", "圖片、名稱、簡短描述、外部連結。", "Product")], null, null, "詢問商品")),
        st("聊天保留上下文", "使用者詢問時不必重新描述商品。", "商家回覆", p("Coffee Club", "Business chat", null, null, null, [m("商品卡", "拿鐵組合 · 外部連結"), m("你", "今天可以自取嗎？", true), m("Coffee Club", "可以，17:00 前都能取。")], "查看邊界")),
        st("範圍邊界", "V1 不在 IM 內完成付款、訂單或履約。", "重新播放", p("V1 scope", "Lightweight commerce", null, [c("V1", "商品卡、business chat label、外部連結。", "Now"), c("Later", "CRM、AI support、payment、order、fulfillment。", "Later")], null, null, "重新播放"))
      ]),
      sc("product-card-in-channel", "Product card in channel｜商品卡進頻道貼文", "商家 / 商業主 + 普通用戶", "商品卡出現在商業頻道貼文或 channel CTA，讀者可追蹤頻道或進 business chat。", "V1 讓商品卡支撐內容到商業聊天的轉換，不在頻道內建完整購物流。", [
        ref("Instagram", "商業內容和 product tags 能把內容興趣導向商品或 DM。"),
        ref("WhatsApp Business", "product sharing 可作為聊天物件。"),
        ref("Shopify Inbox", "商品連結和客戶上下文進入對話，交易仍在商店系統。")
      ], ["product card in post", "CTA to chat", "business channel", "external link"], ["channel marketplace", "checkout inside channel", "order management"], ["product card in channel", "CTA to business chat", "external link"], ["catalog management", "payment", "order", "fulfillment", "campaign CRM"], ["Business Lightweight Layer", "Channel Loop", "Channel Loop"], [
        st("頻道貼文商品卡", "商業頻道貼文可附商品卡。", "查看商品", p("Coffee Club Channel", "Business update", null, [c("週末新品", "拿鐵組合 · 可詢問自取。", "Product card")], null, null, "查看商品")),
        st("商品 CTA", "商品卡可導向 business chat 或外部商品頁。", "進聊天", p("拿鐵組合", "Product card", null, null, [r("詢問商家", "帶商品上下文進聊天", "B"), r("外部連結", "前往商家網站", "L"), r("追蹤頻道", "接收新品更新", "C")], null, "詢問商家")),
        st("聊天承接", "商品上下文進聊天；頻道不變成完整購物車。", "重新播放", p("Coffee Club", "Business chat", null, null, null, [m("商品卡", "拿鐵組合 · 來自頻道貼文"), m("你", "這個有冰的嗎？", true)], "重新播放"))
      ]),
      sc("external-cta-to-business-chat", "External CTA to business chat｜外部 CTA 進商業聊天", "商家 / 商業主 + 普通用戶", "廣告、商品連結或內容 CTA 直接打開 business chat，並帶入商品或來源上下文。", "V1 接住商業意圖和來源，不做完整廣告投放、CRM routing 或交易系統。", [
        ref("WhatsApp Business", "click-to-chat 和 Business QR 讓外部入口進聊天。"),
        ref("Instagram", "click-to-message ads、product tags 和 profile CTA 導向 DM 或商品。"),
        ref("Meta Business Suite / Shopify Inbox", "商家後續可能需要集中收件箱，但 V1 不展開成 CRM。")
      ], ["CTA source tracking", "business chat target", "product context", "business label"], ["ad optimization platform", "full CRM assignment", "payment / order / fulfillment"], ["external CTA", "business chat", "source tracking", "product card"], ["ad manager", "CRM", "AI support", "payment", "order"], ["External Entry", "Business Lightweight Layer", "Identity + Inbox Layer"], [
        st("點擊外部 CTA", "外部來源和商品上下文被帶入。", "開啟聊天", p("External CTA", "Ad / content / product link", ["Source tracked", "Business", "Product"], [c("拿鐵組合", "來源：Instagram 內容 CTA。", "Product context")], null, null, "開啟商業聊天")),
        st("Business chat 開場", "聊天自帶來源提示，商家和使用者都知道脈絡。", "回覆", p("Coffee Club", "Business chat · from external CTA", null, null, null, [m("系統", "來源：Instagram content CTA"), m("商品卡", "拿鐵組合 · 外部連結"), m("你", "請問今天可自取嗎？", true)], "回覆")),
        st("留在 inbox", "商業對話回到 inbox，保留 business label 和安全動作。", "重新播放", p("Inbox", "Business relation", null, null, [r("Coffee Club", "Business · 來自外部 CTA", "B"), r("Market Channel", "Channel update", "C")], null, "重新播放"))
      ])
    ]),
    mod("status-updates", "status-updates｜輕量狀態 / 更新", "status-updates 是輕量佔位：只做 lightweight update object，互動回到私聊、business chat、channel 或 inbox。不做 Stories editor、social feed 或 recommendation。", [
      sc("personal-status-reply", "Personal status reply｜個人狀態回覆進私聊", "普通用戶", "使用者發布輕量 status，朋友回覆後回到 1:1 私聊。", "V1 只保留 lightweight update object、低壓力近況與回覆路徑，不做完整 stories editor、social feed 或 recommendation。", [
        ref("WhatsApp Status", "Status 回覆沉澱到私聊，和主聊天列表保持關係。"),
        ref("Instagram Stories", "Stories reply 會進 DM，但 V1 不採完整創作工具。"),
        ref("Snapchat Stories", "短生命週期降低發布壓力，但攝影心智不是 V1 主入口。")
      ], ["lightweight status object", "reply to private chat", "visibility control", "expiry"], ["full stories editor", "social feed", "recommendation", "creator analytics"], ["simple status", "reply path", "visibility", "return to chat"], ["stickers editor", "story highlights", "feed ranking", "recommendation"], ["Status / Updates Surface", "Identity + Inbox Layer", "Identity + Inbox Layer"], [
        st("發布狀態", "使用者發布短文字或輕量更新，設定可見範圍。", "發布", p("Status", "Personal update", ["24h", "Friends", "Reply to chat"], [c("今天晚點回訊息", "簡短狀態，不進內容 feed。", "Status")], null, null, "發布狀態")),
        st("朋友回覆", "朋友從 status 回覆，直接進 1:1 私聊。", "打開回覆", p("Status reply", "from Mina", null, null, null, [m("Mina", "你今天很忙嗎？"), m("你", "對，晚點回。", true)], "打開私聊")),
        st("回到私聊", "狀態互動回到既有關係。", "重新播放", p("Mina", "Private chat", null, null, null, [m("Mina", "好，那你忙完再說。"), m("你", "謝謝。", true)], "重新播放"))
      ]),
      sc("business-or-channel-update", "Business or channel update｜商業 / 頻道輕量更新", "商家 / 商業主 + 普通用戶", "商家或頻道發布輕量更新，使用者可回到 channel、business chat 或 product card。", "V1 讓 update 成為 lightweight update object 和輕觸達表面，不把它做成 Stories editor、feed、recommendation 或品牌 campaign 系統。", [
        ref("WhatsApp Updates / Channels", "Status 和 Channels 同在 Updates，但頻道仍是低噪音更新。"),
        ref("Instagram Stories", "品牌可用 Stories 做輕量互動，但完整工具過重。"),
        ref("LINE OA", "官方帳號可推送更新並導回聊天或服務入口。")
      ], ["lightweight business update", "return to channel", "CTA to business chat", "product card link"], ["full campaign manager", "recommendation feed", "visual stories suite"], ["simple update", "business/channel sender", "CTA", "return path"], ["campaign automation", "rich story editor", "ads delivery", "recommendation"], ["Status / Updates Surface", "Channel Loop", "Business Lightweight Layer"], [
        st("商業輕量更新", "商家或頻道發布短更新。", "查看 CTA", p("Updates", "Business / Channel", null, [c("Coffee Club 今日供應", "拿鐵組合 17:00 前可自取。", "Business update")], null, null, "查看 CTA")),
        st("CTA 分流", "更新可導向 business chat、商品卡或頻道貼文。", "進入聊天", p("Coffee Club update", "Lightweight CTA", null, null, [r("詢問商品", "進 business chat", "B"), r("查看商品卡", "帶上下文", "P"), r("追蹤頻道", "接收更新", "C")], null, "詢問商品")),
        st("Business chat 承接", "互動回到聊天或頻道，不建立獨立 feed。", "重新播放", p("Coffee Club", "Business chat", null, null, null, [m("系統", "來源：今日供應 update"), m("你", "拿鐵組合還有嗎？", true)], "重新播放"))
      ]),
      sc("update-return-to-inbox", "Update return to inbox｜更新互動回到 inbox / chat", "普通用戶 + 商家 / 商業主", "使用者從 update 互動後，回到 inbox、chat、channel 或 product card 的正確位置。", "V1 的 update 只做 lightweight update object 與回訪路徑，不做 Stories editor、feed、recommendation 或獨立內容宇宙。", [
        ref("WhatsApp Status", "status reply 回到 chat，channel update 可轉發或回訪。"),
        ref("Instagram Stories", "reply 進 DM，CTA 可進 profile 或商品。"),
        ref("LINE OA", "更新可用 quick reply / rich menu 帶回聊天與服務入口。")
      ], ["update deep link", "reply path", "return to inbox", "type label"], ["更新互動停留在獨立 feed", "把 status 做成主產品入口", "推薦系統先行"], ["update object", "reply / CTA", "deep link to chat/inbox", "type label"], ["feed ranking", "creator tools", "story archive", "recommendation"], ["Status / Updates Surface", "Identity + Inbox Layer", "Identity + Inbox Layer"], [
        st("從 update 互動", "使用者點擊 update 的回覆或 CTA。", "回覆", p("Update", "Return path", null, [c("Market Channel 更新", "點擊可回到頻道貼文或討論。", "Channel update"), c("Mina 狀態", "回覆會進私聊。", "Personal status")], null, null, "回覆 Mina")),
        st("進入正確關係", "不同 update 類型回到不同表面。", "回到 inbox", p("Mina", "Private chat · from status", null, null, null, [m("系統", "來源：Mina 的狀態"), m("你", "晚點聊。", true)], "回到 Inbox")),
        st("Inbox 類型清楚", "回訪位置仍由 inbox type label 管理。", "重新播放", p("Inbox", "Return loop", null, null, [r("Mina", "Private · from status reply", "1"), r("Market Channel", "Channel · update", "C"), r("Coffee Club", "Business · from update", "B")], null, "重新播放"))
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
          pattern: guidance.pattern || item.pattern,
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
      pattern: "shared chat list / identity label",
      adopt: "use one inbox with clear private, group, channel, and business labels",
      reject: "copying a super-app or CRM-heavy identity model in V1"
    },
    "external-entry": {
      pattern: "typed external entry with source and target",
      adopt: "record target type, source, join rule, and risk state before routing",
      reject: "dropping every external link directly into a full message stream"
    },
    "channel-loop": {
      pattern: "low-noise broadcast with explicit discussion or chat CTA",
      adopt: "use public preview, follow state, and clear post-to-discussion paths",
      reject: "pure broadcast with no return path or full feed/recommendation in V1"
    },
    "community-governance": {
      pattern: "group entry, rules, thread/topic options, and admin controls",
      adopt: "support direct small groups and optional topic mode for larger communities",
      reject: "forcing every group through topic hierarchy or Discord-level server setup"
    },
    "trust-risk": {
      pattern: "relationship safety controls and moderation context",
      adopt: "block, report, mute, join controls, admin actions, and basic logs",
      reject: "enterprise compliance, AI moderation, or complex risk scoring in V1"
    },
    "business-commerce": {
      pattern: "business identity and product context inside chat/channel",
      adopt: "business profile, business chat label, and product card as context",
      reject: "marketplace, payment, order, fulfillment, CRM, or AI support in V1"
    },
    "status-updates": {
      pattern: "lightweight status/update object with reply return path",
      adopt: "simple update, reply to chat, and return to inbox with type label",
      reject: "Stories editor, social feed, recommendation, or campaign platform"
    }
  };
  const base = moduleGuidance[moduleId] || {};

  if (key.includes("whatsapp business")) {
    return { pattern: "business profile + catalog/product sharing + quality boundary", adopt: "business profile and product card as chat context", reject: "Business Platform templates, CRM-like operations, payment, order, and fulfillment in V1" };
  }
  if (key.includes("whatsapp channels")) {
    return { pattern: "low-noise channel follow and separated update surface", adopt: "low-noise follow and clear Channel label", reject: "making a separate Updates tab mandatory or leaving channel updates without discussion/chat return" };
  }
  if (key === "whatsapp" || key.includes("whatsapp / line")) {
    return { pattern: "low-friction chats, groups, invites, block/report", adopt: "familiar chat/group entry and basic safety controls", reject: "hiding business or channel context as ordinary private chat" };
  }
  if (key.includes("line oa")) {
    return { pattern: "official account + rich menu + quick reply", adopt: "clear business identity and lightweight service entry", reject: "heavy rich menu, LIFF, CRM, or mini-app flow in V1" };
  }
  if (key === "line" || key.includes("line openchat")) {
    return { pattern: "QR/ID/chat entry and group identity boundary", adopt: "typed entry, profile/rules before join, and clear account labels", reject: "heavy service menu or full mini-app platform in V1" };
  }
  if (key.includes("telegram topics")) {
    return { pattern: "Topics inside large groups", adopt: "topic mode for large or high-volume communities", reject: "topic-first as mandatory route for every group" };
  }
  if (key.includes("telegram")) {
    return { pattern: "public links, channels, groups, and typed targets", adopt: "public preview, link target type, follow/join state, and optional linked discussion", reject: "Bot/API, Mini Apps, or platform ecosystem as V1 proof" };
  }
  if (key.includes("discord")) {
    return { pattern: "roles, forum/thread discussion, moderation, onboarding", adopt: "structured discussion and admin controls where scale requires them", reject: "server tree, heavy onboarding, AutoMod, or enterprise moderation in V1" };
  }
  if (key.includes("shopify") || key.includes("instagram")) {
    if (moduleId === "status-updates") {
      return { pattern: "story/update reply into DM or profile/product CTA", adopt: "lightweight reply or CTA return path", reject: "full Stories editor, feed, recommendation, checkout, order, or fulfillment" };
    }
    return { pattern: "product or content context enters chat", adopt: "product card keeps context inside business chat or channel", reject: "checkout, order, fulfillment, ads manager, creator tools, or campaign attribution in V1" };
  }
  if (key.includes("facebook groups")) {
    return { pattern: "group page, rules, membership questions, admin controls", adopt: "rules and join state before public group participation", reject: "full social group feed or insights suite in V1" };
  }
  if (key.includes("intercom") || key.includes("zendesk") || key.includes("meta business")) {
    return { pattern: "business inbox, customer context, assignment, automation", adopt: "future support hook only", reject: "CRM ticketing, SLA, assignment, or AI support inside V1" };
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
    tag: "Our V1 Flow",
    choiceLevel: "Product judgment",
    riskLevel: "Hypothesis",
    risk: "轉換、通知接受度與治理成本需要 MVP 驗證。"
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
    createNode("div", { className: "ip-field" }, [createNode("label", { text: "Module" }), moduleSelect]),
    createNode("div", { className: "ip-field" }, [createNode("label", { text: "Scenario / Journey" }), scenarioSelect]),
    createNode("div", { className: "ip-field" }, [
      createNode("label", { text: "Our V1 Flow" }),
      createNode("div", { className: "ip-static-field ip-v1-flow-field" }, [
        createNode("span", { text: "單一提案流程" }),
        createNode("strong", { text: "Product judgment" })
      ])
    ])
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
      renderPanelTitle("Journey Covered", scenario.role),
      createNode("p", { className: "ip-panel-copy", text: scenario.journey }),
      renderEvidenceLabels(scenario),
      createNode("p", { className: "ip-method-note", text: scenario.choice })
    ]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("Reference Basis", "Evidence-backed"), renderSourceNote(module.id), renderReferenceBasis(scenario.references)]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("Adopted Pattern", "Product judgment"), renderPillList(scenario.adopted, "adopted")]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("Rejected Pattern", "Product judgment"), renderPillList(scenario.rejected, "rejected")]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("Risk / Assumption", scenario.riskLevel), createNode("p", { className: "ip-panel-copy", text: scenario.risk })]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("V1 Scope Boundary", "Now / Later"), renderScopeBoundary(scenario.scope)]),
    createNode("section", { className: "ip-panel-section" }, [renderPanelTitle("Architecture Implication", "final map"), renderPillList(scenario.implication, "implication")])
  ]);
}

function renderEvidenceLabels(scenario) {
  const labels = [
    ["Reference Basis", "Evidence-backed"],
    ["V1 Choice", scenario.choiceLevel],
    ["Risk", scenario.riskLevel]
  ];
  return createNode("div", { className: "ip-label-strip" },
    labels.map(([label, value]) => createNode("span", {}, [createNode("small", { text: label }), createNode("b", { text: value })]))
  );
}

function renderSourceNote(moduleId) {
  return createNode("p", { className: "ip-source-note" }, [
    "Evidence source: ",
    createNode("a", { href: SOURCES.compare.href, text: SOURCES.compare.label }),
    ` / ${moduleId}`
  ]);
}

function renderReferenceBasis(references) {
  return createNode("div", { className: "ip-reference-list" },
    references.map((item) => createNode("article", { className: "ip-reference-item" }, [
      createNode("b", { text: item.app }),
      renderReferenceLine("Pattern", item.pattern),
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
    createNode("article", { className: "ip-scope-card later" }, [createNode("b", { text: "Later" }), createNode("ul", {}, boundary.later.map((item) => createNode("li", { text: item })))])
  ]);
}

function bootPlayground() {
  try {
    renderPlayground();
    updatePlaygroundUrl();
  } catch (error) {
    console.error("V1 Scenario Playground failed to render.", error);
    const root = document.getElementById("interaction-root");
    if (root) {
      root.replaceChildren(createNode("div", { className: "loading-shell" }, [createNode("p", { text: "V1 Scenario Playground 載入失敗，請查看瀏覽器 Console 的錯誤訊息。" })]));
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootPlayground);
} else {
  bootPlayground();
}
