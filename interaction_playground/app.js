const SOURCES = {
  report: "reports/report.html",
  learn: "learn/IM竞品分析_分享版.html",
  compare: "compare_features/index.html",
  architecture: "product_architecture/index.html",
  channelLoop: "reports/內容頻道閉環.md",
  safety: "reports/平台安全治理.md",
  telegramChannels: "Telegram 官方 Channels FAQ",
  telegramTopics: "Telegram 官方 Topics in Groups",
  whatsappChannels: "Meta / WhatsApp Channels 官方說明",
  whatsappCommunities: "Meta / WhatsApp Communities 官方說明",
  discordOnboarding: "Discord 官方 Community Onboarding FAQ",
  discordForum: "Discord 官方 Forum Channels FAQ",
  discordRules: "Discord 官方 Rules Screening FAQ",
  lineRichMenu: "LINE Developers Rich Menu / Messaging API"
};

const DATA = {
  sources: [
    ["調研報告", SOURCES.report],
    ["學習材料", SOURCES.learn],
    ["App 與擅長模組", SOURCES.compare],
    ["收斂產品架構", SOURCES.architecture]
  ],
  modules: [
    {
      id: "messaging-identity",
      name: "messaging-identity｜通訊核心與身份",
      summary: "比較 WhatsApp、LINE、Telegram、WeChat 的聊天列表與身份邊界，決定 V1 如何把私聊、群組、頻道與商業對話放在同一 IM 心智下。",
      scenarios: [
        {
          id: "inbox-identity-boundary",
          name: "統一收件箱與身份邊界",
          intent: "這條流程比較普通用戶與商家 / 商業主進入聊天列表時，如何辨識私聊、群組、頻道、官方帳號或商業對話，避免把商業流程寫死在個人聊天模型裡。",
          openDecision: {
            question: "V1 的聊天底座應如何支撐普通用戶與商業身份？",
            options: [
              { name: "WhatsApp 型：低學習成本聊天列表", description: "私聊、群組與 business account 同在 Chats，但用清楚標籤區隔。", tradeoff: "最符合 IM 心智，但商業能力要保持輕量。", evidence: `${SOURCES.compare}：messaging-identity / WhatsApp` },
              { name: "LINE 型：聊天 + 官方帳號服務入口", description: "官方帳號像聊天關係，但用 Rich Menu / Quick Reply 承接服務。", tradeoff: "商業分流清楚，但選單太重會壓低聊天效率。", evidence: `${SOURCES.compare}：messaging-identity / LINE` },
              { name: "WeChat 型：超級平台身份密度", description: "聊天、服務號、小程序與支付都在同一帳號體系內。", tradeoff: "長期能力強，但 V1 不應複製完整超級平台。", evidence: `${SOURCES.compare}：messaging-identity / WeChat` }
            ]
          },
          architectures: [
            {
              id: "whatsapp-inbox-identity",
              name: "WhatsApp Chats + Business label",
              tag: "低學習成本",
              color: "green",
              steps: [
                step("wa-id-1", "Chats 列表", "使用者從一個 Chats 列表看到私聊、群組與商業對話，Business account 以標籤降低混淆。", "打開商業聊天", { header: "Chats", subheader: "個人、群組、商業對話共用入口", list: [row("Mina", "明天見。", "M"), row("Alpha Group", "Kai: 新主題已開", "G"), row("Fresh Market", "Business · 商品資訊", "B")], bottom: "打開商業聊天" }),
                step("wa-id-2", "Business profile", "商家對話中可以查看商業檔案、營業時間、網站與商品目錄。", "查看商品", { header: "Fresh Market", subheader: "Business account", chips: ["Business", "Catalog", "Quick replies"], cards: [card("商業檔案", "地址、營業時間、網站與類別。", "Profile"), card("今日商品", "商品可被分享到聊天中。", "Catalog")], bottom: "查看商品" }),
                step("wa-id-3", "商品卡進聊天", "商品不是 marketplace 頁，而是聊天中的結構化引用。", "重新播放", { header: "Fresh Market", subheader: "Business chat", messages: [msg("Fresh Market", "這是今天的組合。"), msg("商品卡", "藍莓禮盒 · $18 · 可詢問庫存")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "Chats list", firstCommitment: "打開對話", accountBeforePreview: "是，使用既有 WhatsApp 身份", joinBeforeReply: "否，1:1 可直接回覆", boundaryVisible: "中：Business 標籤可見", discussionStructure: "Chats → business chat → product card", fullStreamExposed: "否", moderation: "block / report / business quality controls" }),
              tradeoffs: [trade("Advantage", "統一聊天列表降低學習成本，商業對話用標籤區隔。", `${SOURCES.compare}：messaging-identity / WhatsApp`, "適合 V1 的 stable chat identity。"), trade("Constraint", "商業流程不能污染個人聊天模型。", `${SOURCES.compare}：business-commerce / WhatsApp Business`, "商品卡應保持為聊天物件。")],
              derived: derived("低", "低", "Chats → labeled chat → product card", "打開對話")
            },
            {
              id: "line-oa-identity",
              name: "LINE Chat + Official Account",
              tag: "服務入口清楚",
              color: "green",
              steps: [
                step("line-id-1", "好友 / 聊天列表", "官方帳號以聊天關係存在，但身份與普通好友不同。", "打開官方帳號", { header: "聊天", subheader: "好友、群組、官方帳號", list: [row("Aki", "收到。", "A"), row("投資討論群", "新公告", "G"), row("Coffee Club", "官方帳號 · 今日優惠", "OA")], bottom: "打開官方帳號" }),
                step("line-id-2", "Rich Menu / Quick Reply", "官方帳號用常駐選單與快捷回覆承接服務，不把服務流程塞進聊天訊息流。", "選商品", { header: "Coffee Club", subheader: "官方帳號", menu: [tile("商品", "查看商品卡"), tile("客服", "詢問營業時間"), tile("會員", "開啟 LIFF")], bottom: "選商品" }),
                step("line-id-3", "服務回到聊天", "選單可導入商品卡或 LIFF，結果仍能回到聊天。", "重新播放", { header: "Coffee Club", subheader: "Quick reply", cards: [card("拿鐵組合", "可分享到聊天或頻道。", "商品卡"), card("客服入口", "複雜問題未來可接 CRM。", "Hook")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "Chat list / official account", firstCommitment: "加入官方帳號", accountBeforePreview: "是，LINE identity", joinBeforeReply: "否", boundaryVisible: "高：官方帳號標示", discussionStructure: "Chat → OA menu → service/product", fullStreamExposed: "否", moderation: "block / unsubscribe / Messaging API rate limits" }),
              tradeoffs: [trade("Advantage", "官方帳號和 Rich Menu 讓商業服務入口清楚。", `${SOURCES.compare}：messaging-identity / LINE`, "適合 business-facing route。"), trade("Risk", "入口太多會變雜亂選單。", `${SOURCES.compare}：LINE 風險`, "V1 只保留必要入口。")],
              derived: derived("低", "中", "Chat list → OA → menu/service", "加入官方帳號")
            },
            {
              id: "telegram-public-identity",
              name: "Telegram unified chat list",
              tag: "公開身份與入口",
              color: "blue",
              steps: [
                step("tg-id-1", "聊天列表", "私聊、群組、頻道與 Bot 共存在同一列表，public username / t.me link 支撐外部入口。", "打開頻道", { header: "Telegram", subheader: "Chats", list: [row("Nora", "See you", "N"), row("Market Group", "Topics enabled", "G"), row("Market Channel", "2 new posts", "C")], bottom: "打開頻道" }),
                step("tg-id-2", "公開頻道 / 群組身份", "頻道與群組有清楚名稱、連結與加入狀態；Bot / Mini Apps 是未來方向。", "查看連結", { header: "Market Channel", subheader: "public channel", chips: ["t.me link", "public username", "join state"], cards: [card("頻道身份", "公開名稱與連結可被外部分享。", "Public"), card("討論群", "留言依賴 linked discussion group。", "Discussion")], bottom: "查看連結" }),
                step("tg-id-3", "身份邊界", "V1 借用公開入口與類型標籤，不直接開完整 Bot/API 生態。", "重新播放", { header: "Identity boundary", subheader: "V1 採用 / 延後", cards: [card("採用", "public link、type label、join/follow state。", "V1"), card("延後", "Bot API、Mini Apps、完整平台能力。", "Later")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "Chats + public links", firstCommitment: "join / follow", accountBeforePreview: "部分公開預覽", joinBeforeReply: "依目標類型", boundaryVisible: "高：人 / 群 / 頻道 / Bot", discussionStructure: "Chat list → public target → join/follow", fullStreamExposed: "中", moderation: "admin / report / block" }),
              tradeoffs: [trade("Advantage", "人、群、頻道與 Bot 的目標類型清楚。", `${SOURCES.compare}：messaging-identity / Telegram`, "適合外部入口與 public channel。"), trade("Constraint", "Bot/API 不是 V1 architecture proof。", `${SOURCES.compare}：platform-ai-ops`, "只保留未來 hook。")],
              derived: derived("中", "低", "Chats → public link → join/follow", "join/follow")
            },
            {
              id: "our-identity-baseline",
              name: "我們的 V1 identity baseline",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("our-id-1", "統一收件箱", "V1 用一個 inbox 承接私聊、群組、頻道更新與商業對話，但每一類都要有標籤。", "打開商業對話", { header: "Inbox", subheader: "類型標籤優先", list: [row("Mina", "私人聊天", "1"), row("加密討論", "Group · 3 unread", "G"), row("Market Channel", "Channel update", "C"), row("Coffee Club", "Business · 商品卡", "B")], bottom: "打開商業對話" }),
                step("our-id-2", "身份與商業標籤", "商業檔案與商品卡存在，但不把 inbox 改造成 CRM。", "查看商品卡", { header: "Coffee Club", subheader: "Business chat", chips: ["Business label", "Product card", "No CRM"], cards: [card("商業檔案", "名稱、類別、營業資訊。", "Profile"), card("商品卡", "可進聊天或頻道。", "Object")], bottom: "查看商品卡" }),
                step("our-id-3", "安全與回訪", "block/report 與 unread/deep link 是身份底座的一部分。", "重新播放", { header: "Identity Layer", subheader: "V1 boundary", cards: [card("Safety", "block、report、mute。", "Trust"), card("Return", "未讀回到正確聊天 / 主題 / 頻道。", "Loop")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "Unified inbox", firstCommitment: "open chat / follow / join", accountBeforePreview: "依公開程度", joinBeforeReply: "討論需加入", boundaryVisible: "高：type labels", discussionStructure: "Inbox → chat/channel/group/business", fullStreamExposed: "否", moderation: "block / report / mute / admin hooks" }),
              tradeoffs: [trade("Advantage", "同時滿足普通用戶穩定聊天與商家輕量身份。", `${SOURCES.compare}：roleScenarios`, "覆蓋普通用戶與商家 / 商業主。"), trade("Constraint", "CRM、AI agent、Bot/API 不進 V1 core。", `${SOURCES.compare}：support-crm / platform-ai-ops`, "只留 future hook。")],
              derived: derived("低", "低", "Inbox → labeled relation → return loop", "open relation")
            }
          ]
        }
      ]
    },
        {
      id: "external-entry",
      name: "external-entry｜外部入口 / 邀請",
      summary: "外部入口支撐普通用戶好友邀請與商家外部投放；入口必須標示目標類型、來源、加入規則與風險狀態。",
      scenarios: [
        {
          id: "outside-intent-to-target",
          name: "外部意圖 → 可判斷入口",
          intent: "這條流程比較使用者從 QR、ID、invite link、click-to-chat 或內容 CTA 進入時，是否能先理解目標是人、群組、頻道、商業檔案或商品。",
          openDecision: {
            question: "V1 外部入口應該先落到哪種可判斷表面？",
            options: [
              { name: "Telegram 型：public username / invite link", description: "入口可指向人、群組、頻道或 Bot，目標類型清楚。", tradeoff: "公開導流強，但必須配反垃圾與加入審核。", evidence: `${SOURCES.compare}：external-entry / Telegram` },
              { name: "LINE 型：QR / ID / 官方帳號", description: "QR、ID、官方帳號與 LIFF 入口分層，適合個人和商業入口並存。", tradeoff: "入口多，需要清楚分層。", evidence: `${SOURCES.compare}：external-entry / LINE` },
              { name: "WhatsApp 型：invite / click-to-chat", description: "好友、群組、社群與商業聊天入口短。", tradeoff: "公開入口需要管理員審核與隱私提示。", evidence: `${SOURCES.compare}：external-entry / WhatsApp` },
              { name: "TikTok / Instagram 型：content CTA", description: "內容或廣告產生興趣，再導向 profile、DM、product 或外部網站。", tradeoff: "來源與風險要被記錄，避免低品質流量。", evidence: `${SOURCES.compare}：external-entry / TikTok / Instagram` }
            ]
          },
          architectures: [
            {
              id: "telegram-public-link",
              name: "Telegram public link",
              tag: "目標類型清楚",
              color: "blue",
              steps: [
                step("tg-entry-1", "t.me 入口", "使用者從外部點 t.me/username 或 invite link，先看到目標名稱和類型。", "打開預覽", { header: "t.me/market", subheader: "Public link", chips: ["person / group / channel", "invite", "join request"], cards: [card("Market Channel", "公開頻道 · 12K subscribers", "Channel")], bottom: "打開預覽" }),
                step("tg-entry-2", "預覽與加入", "公開頻道 / 群組可先看簡介與部分內容，再 join 或 follow。", "加入", { header: "Market Channel", subheader: "Public preview", cards: [card("頻道簡介", "每日市場摘要。", "Profile"), card("討論群", "加入後可進 Topics。", "CTA")], bottom: "加入" }),
                step("tg-entry-3", "回到正確表面", "入口不是直接丟進噪音流，而是落到頻道、群組或主題。", "重新播放", { header: "Target surface", subheader: "Channel / Group / Topic", topics: [row("頻道", "先閱讀", "C"), row("討論群", "加入後互動", "G"), row("主題", "分題討論", "T")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "public username / invite link", firstCommitment: "join / follow", accountBeforePreview: "部分可預覽", joinBeforeReply: "是", boundaryVisible: "高", discussionStructure: "link → preview → join/follow → target surface", fullStreamExposed: "否", moderation: "invite revoke / join request / admin" }),
              tradeoffs: [trade("Advantage", "目標類型與公開連結心智清楚。", `${SOURCES.compare}：external-entry / Telegram`, "適合 public channel 與 community group。"), trade("Risk", "公開入口會帶來 spam，需要 trust-risk 橫層。", `${SOURCES.compare}：trust-risk`, "入口不是孤立功能。")],
              derived: derived("低", "低", "link → preview → join/follow", "join/follow")
            },
            {
              id: "line-qr-official-entry",
              name: "LINE QR / ID / Official Account",
              tag: "入口分層",
              color: "green",
              steps: [
                step("line-entry-1", "QR / ID 入口", "使用者透過 QR、LINE ID 或官方帳號加好友連結進入。", "查看目標", { header: "LINE QR", subheader: "目標類型：官方帳號", chips: ["QR", "ID", "OA link"], cards: [card("Coffee Club", "官方帳號 · 可加好友", "Official Account")], bottom: "查看目標" }),
                step("line-entry-2", "加入官方帳號", "加入後進聊天，但服務入口由 Rich Menu / Quick Reply 承接。", "加入", { header: "Coffee Club", subheader: "加好友", cards: [card("商業檔案", "營業資訊、服務入口。", "Profile"), card("Rich Menu", "商品 / 客服 / 會員。", "Service")], bottom: "加入" }),
                step("line-entry-3", "服務入口分流", "V1 借用分層入口，不直接做完整 CRM 或 mini-app marketplace。", "重新播放", { header: "Official chat", subheader: "V1 boundary", menu: [tile("商品卡", "進聊天"), tile("客服 hook", "Later"), tile("LIFF / mini-app", "Later")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "QR / ID / official account URL", firstCommitment: "add friend / follow OA", accountBeforePreview: "是", joinBeforeReply: "否", boundaryVisible: "高", discussionStructure: "QR → OA profile → chat/service", fullStreamExposed: "否", moderation: "block / unsubscribe / API rate limits" }),
              tradeoffs: [trade("Advantage", "入口類型拆得清楚，適合區分個人邀請與商業入口。", `${SOURCES.compare}：external-entry / LINE`, "V1 應採用 target type。"), trade("Constraint", "入口太多時需要分層，不做完整 mini-app。", `${SOURCES.compare}：mini-apps / LINE`, "只保留 future hook。")],
              derived: derived("低", "中", "QR / ID → target profile → chat", "add/follow")
            },
            {
              id: "whatsapp-click-to-chat",
              name: "WhatsApp invite / click-to-chat",
              tag: "最短關係入口",
              color: "green",
              steps: [
                step("wa-entry-1", "邀請 / click-to-chat", "使用者從群組 invite link、社群連結、Business QR 或 wa.me 進入。", "開啟", { header: "wa.me/freshmarket", subheader: "Click to chat", chips: ["invite link", "QR", "Business"], cards: [card("Fresh Market", "Business profile", "Chat target")], bottom: "開啟" }),
                step("wa-entry-2", "目標預覽", "加入群組或開啟商業聊天前，需知道目標類型與隱私風險。", "進入聊天", { header: "Fresh Market", subheader: "Business chat", cards: [card("目標類型", "Business account，不是群組。", "Type"), card("商品詢問", "商品卡可進對話。", "Product")], bottom: "進入聊天" }),
                step("wa-entry-3", "聊天承接", "入口直接承接聊天，但 V1 要保留來源與風險資料。", "重新播放", { header: "Business chat", subheader: "source tracked", messages: [msg("系統", "來源：Instagram 廣告 CTA"), msg("Fresh Market", "你想看哪個商品？")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "invite link / QR / click-to-chat", firstCommitment: "open chat / join group", accountBeforePreview: "是", joinBeforeReply: "依目標", boundaryVisible: "中", discussionStructure: "entry → preview → chat/group", fullStreamExposed: "中", moderation: "admin approval / block / report" }),
              tradeoffs: [trade("Advantage", "關係邀請和商業聊天入口直接。", `${SOURCES.compare}：external-entry / WhatsApp`, "適合好友邀請和商業導流。"), trade("Risk", "群組公開入口需審核與隱私提示。", `${SOURCES.compare}：trust-risk / WhatsApp`, "不能直接暴露完整群聊。")],
              derived: derived("中", "低", "link → chat/group preview → open", "open chat")
            },
            {
              id: "social-content-cta-entry",
              name: "TikTok / Instagram content CTA",
              tag: "內容意圖導流",
              color: "violet",
              steps: [
                step("social-entry-1", "內容 / 廣告 CTA", "使用者從短內容、profile、DM CTA、product tag 或 link 產生商業意圖。", "進入檔案", { header: "Creator profile", subheader: "Content CTA", chips: ["profile", "DM", "product tag"], cards: [card("新品影片", "點擊後可進 profile / DM / product。", "Content")], bottom: "進入檔案" }),
                step("social-entry-2", "檔案 / 商品目標", "內容流量應落到商業檔案、商品卡、頻道或私訊，而不是泛推薦首頁。", "傳送訊息", { header: "Fresh Market", subheader: "Business profile", cards: [card("商品卡", "藍莓禮盒可進聊天。", "Product"), card("頻道", "追蹤取得更新。", "Channel")], bottom: "傳送訊息" }),
                step("social-entry-3", "回到 IM 關係", "V1 採用來源追蹤與目標類型，不做完整內容推薦系統。", "重新播放", { header: "Inbox", subheader: "from content CTA", messages: [msg("系統", "來源：Instagram product CTA"), msg("Fresh Market", "這是商品卡，歡迎詢問。")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "content / ad CTA", firstCommitment: "profile / DM / product", accountBeforePreview: "否", joinBeforeReply: "否", boundaryVisible: "中", discussionStructure: "content → profile/product/DM → inbox", fullStreamExposed: "否", moderation: "source tracking / risk check" }),
              tradeoffs: [trade("Advantage", "內容興趣可導向頻道、商業檔案、商品卡或私訊。", `${SOURCES.compare}：external-entry / TikTok / Instagram`, "支撐商家外部投放。"), trade("Constraint", "不做完整 feed/recommendation。", `${SOURCES.compare}：short-video-discovery`, "只是入口來源。")],
              derived: derived("低", "低", "content CTA → target → inbox", "open profile/product/chat")
            }
          ]
        }
      ]
    },

    {
      id: "channel-loop",
      name: "channel-loop｜頻道 / 內容到討論閉環",
      summary: "一對多內容承接外部流量，並決定使用者如何從閱讀進入討論。",
      scenarios: [
        {
          id: "public-to-discussion",
          name: "公開內容到討論閉環",
          intent: "這條流程檢驗使用者是否能先低壓力預覽內容，再清楚知道何時從公開頻道進入多人討論，避免一進來就被大型群聊噪音淹沒。",
          openDecision: {
            question: "channel-loop｜頻道 / 內容到討論閉環應該用哪一種方式承接討論？",
            options: [
              {
                name: "原生留言 / 綁定討論群",
                description: "每則貼文保留留言入口，留言同步到綁定討論群中的對應討論串。",
                tradeoff: "承接最順，但需要同時治理頻道、留言串與群組。",
                evidence: `${SOURCES.learn}：tg_10 / tg_11；${SOURCES.telegramChannels}`
              },
              {
                name: "低噪音廣播 + 另開群",
                description: "頻道只負責更新，討論要跳到社群或群組。",
                tradeoff: "閱讀面清楚，但跳轉成本更高。",
                evidence: `${SOURCES.channelLoop}；${SOURCES.whatsappChannels}`
              },
              {
                name: "我們的混合路徑",
                description: "公開頻道可預覽，底部固定進入討論群，進群後先看 Topics。",
                tradeoff: "能保留手機端單列導航，但實際轉化需要產品測試。",
                evidence: `${SOURCES.architecture}；${SOURCES.learn}：核心用戶路徑`
              }
            ]
          },
          architectures: [
            {
              id: "telegram-channel",
              name: "Telegram 頻道 + 討論群",
              tag: "原生閉環",
              color: "blue",
              steps: [
                step("tg-1", "公開頻道預覽", "使用者從 t.me 連結或搜尋進入頻道，先看到頻道歷史與最新貼文。", "查看貼文", {
                  header: "加密市場觀察",
                  subheader: "公開頻道 · 82,000 位訂閱者",
                  chips: ["公開連結", "可搜尋", "歷史可見"],
                  cards: [
                    card("市場週報 · 第 12 期", "BTC 橫盤整理，下週關注關鍵支撐位。", "342 反應 · 89 則留言"),
                    card("AMA 公告", "週五 20:00 開始，問題先集中在討論串。", "已置頂")
                  ],
                  bottom: "點擊貼文留言"
                }),
                step("tg-2", "貼文留言入口", "貼文下方保留留言按鈕，使用者不必先進入整個群組訊息流。", "打開留言串", {
                  header: "市場週報 · 第 12 期",
                  subheader: "頻道貼文",
                  chips: ["留言按鈕", "反應", "觀看數"],
                  cards: [
                    card("留言預覽", "這則更新已連到討論群中的對應留言串。", "89 則留言"),
                    card("貼文動作", "轉發、反應、投票與公開連結保留在頻道層。", "低噪音")
                  ],
                  bottom: "進入留言"
                }),
                step("tg-3", "綁定討論串", "留言以獨立 thread 呈現，同時回流到綁定討論群，管理員仍可集中治理。", "查看討論群", {
                  header: "留言串",
                  subheader: "來自加密市場觀察",
                  messages: [
                    msg("Mina", "這週支撐位怎麼看？"),
                    msg("你", "先看 65k 是否守住，再看量能。", true),
                    msg("Alex", "可以把鏈上數據補到下期週報。")
                  ],
                  bottom: "返回頻道"
                })
              ],
              facts: facts({
                entryType: "公開頻道連結 / Telegram 搜尋",
                firstCommitment: "留言或加入討論群",
                accountBeforePreview: "否，公開頻道可先預覽",
                joinBeforeReply: "是，留言需進入 Telegram 身份與討論群脈絡",
                boundaryVisible: "是，頻道與討論群是不同表面",
                discussionStructure: "頻道貼文 → 留言串 → 綁定討論群",
                fullStreamExposed: "否，先暴露貼文留言串",
                moderation: "頻道管理員、討論群管理員、Bot",
                notificationRisk: "中：頻道通知與群組留言需分開控制"
              }),
              tradeoffs: [
                trade("Advantage", "頻道到留言 / 討論群是同一套產品原生路徑，使用者能理解自己是在閱讀還是在討論。", `${SOURCES.telegramChannels}；${SOURCES.channelLoop}`, "Telegram 官方 FAQ 說明頻道可加討論群，訂閱者會看到留言按鈕。"),
                trade("Advantage", "貼文留言先落在對應討論串，而不是把使用者直接丟進完整群組訊息流。", `${SOURCES.telegramChannels}；${SOURCES.channelLoop}`, "這是 Telegram 頻道留言與綁定討論群的原生互動。"),
                trade("Risk", "頻道、留言串與討論群同時開啟會增加管理面與通知面。", SOURCES.channelLoop, "需要先定義哪些貼文值得開討論。"),
                trade("Constraint", "若沒有綁定討論群，頻道只能保留廣播與反應，無法形成多人討論閉環。", SOURCES.telegramChannels, "官方流程將留言建立在討論群之上。")
              ],
              derived: derived("低", "中", "公開 → 頻道 → 留言串 → 討論群", "原生留言")
            },
            {
              id: "whatsapp-channel",
              name: "WhatsApp Channels",
              tag: "低噪音廣播",
              color: "green",
              steps: [
                step("wa-1", "Updates 分區", "使用者在 Updates 分頁看到 Status 與已追蹤頻道，與 Chats 分離。", "打開頻道", {
                  header: "Updates",
                  subheader: "狀態與頻道",
                  chips: ["與 Chats 分離", "已追蹤頻道", "低打擾"],
                  list: [
                    row("F1 官方頻道", "最新賽程更新", "F1"),
                    row("WhatsApp", "新功能發布", "WA"),
                    row("本地新聞", "今日焦點", "新")
                  ],
                  bottom: "查看頻道更新"
                }),
                step("wa-2", "單向channel-loop｜頻道 / 內容到討論閉環", "頻道管理員發布文字、照片、影片、貼圖或投票，追蹤者以反應與轉發回饋。", "做出反應", {
                  header: "F1 官方頻道",
                  subheader: "671 萬位追蹤者",
                  chips: ["已追蹤", "靜音開關", "反應"],
                  cards: [
                    card("賽前更新", "練習賽時間與車隊資訊。", "2.5 萬反應 · 可轉發"),
                    card("投票", "你看好哪支車隊？", "投票進行中")
                  ],
                  bottom: "轉發更新"
                }),
                step("wa-3", "轉發到聊天", "頻道更新可以轉發到聊天或群組；完整多人討論不發生在頻道本體。", "重新播放", {
                  header: "轉發更新",
                  subheader: "選擇聊天",
                  list: [
                    row("朋友聊天", "一對一討論", "聊"),
                    row("賽事群組", "多人聊天", "群"),
                    row("儲存訊息", "稍後再看", "存")
                  ],
                  bottom: "返回 Updates"
                })
              ],
              facts: facts({
                entryType: "Updates 分頁 / 頻道目錄 / 轉發連結",
                firstCommitment: "追蹤頻道",
                accountBeforePreview: "多數情境需要 WhatsApp App 內瀏覽",
                joinBeforeReply: "頻道內不能完整回覆；只能反應、投票或轉發",
                boundaryVisible: "是，Channels 與 Chats 分離",
                discussionStructure: "頻道廣播 → 反應 / 投票 / 轉發",
                fullStreamExposed: "否，頻道不是聊天流",
                moderation: "頻道管理、目錄政策、轉發後由聊天或群組既有管理承接",
                notificationRisk: "低：頻道與公告回覆設計偏低打擾"
              }),
              tradeoffs: [
                trade("Advantage", "內容面與聊天面分離，能降低公開內容污染私聊收件箱的風險。", `${SOURCES.learn}：wa_04；${SOURCES.whatsappChannels}`, "Meta 說明 Channels 位於 Updates，與家人朋友和社群聊天分開。"),
                trade("Risk", "頻道追蹤者主要只能反應、投票或轉發，頻道本身不形成完整多人討論。", `${SOURCES.learn}：wa_06；${SOURCES.whatsappChannels}`, "學習材料把這列為 WhatsApp 頻道天花板。"),
                trade("Constraint", "若要社群討論，必須另接 Community / Group，跳轉需要明確 CTA。", `${SOURCES.channelLoop}；${SOURCES.whatsappCommunities}`, "Meta 社群公告回覆仍是社群內的另一層。"),
                trade("Advantage", "追蹤頻道不會向管理員或其他追蹤者暴露電話號碼。", SOURCES.whatsappChannels, "隱私強，但也使頻道較不像公開社群身份。")
              ],
              derived: derived("低", "低", "Updates → 頻道 → 反應 / 轉發", "反應與轉發")
            },
            {
              id: "discord-announcement",
              name: "Discord 公告 + Forum",
              tag: "結構化社群",
              color: "violet",
              steps: [
                step("dc-1", "加入伺服器", "使用者從邀請連結進入 Discord 伺服器，先完成規則與導覽。", "選擇角色", {
                  header: "加入 Monad 社群",
                  subheader: "社群導覽",
                  chips: ["規則", "角色", "預設頻道"],
                  onboarding: [
                    "你想參與什麼？",
                    "行情討論",
                    "技術支援",
                    "活動通知"
                  ],
                  bottom: "完成導覽"
                }),
                step("dc-2", "公告頻道", "公告頻道承接高信號更新，使用者可以閱讀但不必承受一般聊天噪音。", "打開討論入口", {
                  header: "announcements",
                  subheader: "伺服器預設頻道",
                  cards: [
                    card("本週 AMA", "週三 18:00 語音頻道開始。", "已發布"),
                    card("產品更新", "新功能測試名單開放。", "前往 Forum")
                  ],
                  bottom: "前往 Forum 討論"
                }),
                step("dc-3", "Forum / Thread", "Forum channel 將討論拆成獨立貼文，使用標籤、發文規範與搜尋降低噪音。", "加入帖子", {
                  header: "forum · 討論區",
                  subheader: "依標籤瀏覽",
                  topics: [
                    row("AMA 問題收集", "128 則回覆", "🎙"),
                    row("新手支援", "已解決 34 題", "🧭"),
                    row("產品建議", "需要版主回覆", "🧪")
                  ],
                  bottom: "回覆討論帖"
                }),
                step("dc-4", "Forum 內回覆", "使用者進入獨立 Forum post 後，在帖子內閱讀、回覆或追蹤該討論。", "重新播放", {
                  header: "AMA 問題收集",
                  subheader: "Forum post",
                  messages: [
                    msg("Mina", "這週 AMA 會回答路線圖嗎？"),
                    msg("你", "我把問題補到這個帖子。", true),
                    msg("Moderator", "請集中在此 post 下提問。")
                  ],
                  bottom: "返回 Forum"
                })
              ],
              facts: facts({
                entryType: "伺服器邀請 / Discover / 外部連結",
                firstCommitment: "加入伺服器並完成導覽",
                accountBeforePreview: "通常是，需要 Discord 身份與伺服器成員資格",
                joinBeforeReply: "是",
                boundaryVisible: "是，伺服器 → 頻道 → Forum / Thread 層級明顯",
                discussionStructure: "公告 → Forum 貼文 / Thread → 活動或語音",
                fullStreamExposed: "否，導覽決定預設頻道",
                moderation: "角色、權限、規則篩選、AutoMod、Forum 標籤",
                notificationRisk: "中低：可依頻道與 thread 追蹤，但設定複雜"
              }),
              tradeoffs: [
                trade("Advantage", "導覽讓新成員先選角色與頻道，減少進入大型伺服器時的迷路感。", `${SOURCES.discordOnboarding}；${SOURCES.learn}：dc_02 / dc_12`, "Discord 官方說明新成員可回答問題取得個人化頻道列表。"),
                trade("Advantage", "Forum 將討論收斂在帖子內，適合多主題長期討論。", SOURCES.discordForum, "Forum Channels 官方說明其用途是讓討論不互相覆蓋。"),
                trade("Risk", "伺服器 / 分類 / 頻道 / Thread 的層級在手機端較重，新用戶學習成本高。", `${SOURCES.learn}：Discord 的設計不適合手機端優先`, "學習材料明確建議手機端不要照搬 Discord 三欄邏輯。"),
                trade("Constraint", "Discord 的結構以伺服器成員資格為前提，不適合做極低摩擦公開預覽。", `${SOURCES.learn}；${SOURCES.discordOnboarding}`, "需要先加入或完成導覽才有完整體驗。")
              ],
              derived: derived("中", "高", "邀請 → 導覽 → 公告 → Forum", "Forum / Thread 討論")
            },
            {
              id: "line-oa",
              name: "LINE 官方帳號",
              tag: "聊天路由器",
              color: "green",
              steps: [
                step("line-1", "加入官方帳號", "使用者透過 QR、連結或搜尋加入官方帳號，互動發生在聊天介面。", "打開聊天", {
                  header: "品牌官方帳號",
                  subheader: "已加入好友",
                  chips: ["QR", "官方帳號", "聊天入口"],
                  cards: [
                    card("歡迎訊息", "請選擇你想做的事。", "自動回覆"),
                    card("最新更新", "本週社群內容已發布。", "可點擊")
                  ],
                  bottom: "查看 Rich Menu"
                }),
                step("line-2", "Rich Menu 常駐路由", "底部 Rich Menu 放最新更新、提問、加入聊天、活動等固定入口。", "點擊加入聊天", {
                  header: "品牌官方帳號",
                  subheader: "Rich Menu",
                  menu: [
                    tile("最新更新", "查看channel-loop｜頻道 / 內容到討論閉環"),
                    tile("問我們", "進入 1:1 回覆"),
                    tile("加入討論", "前往邀請群"),
                    tile("活動", "LIFF / 網頁")
                  ],
                  bottom: "送出 postback"
                }),
                step("line-3", "Quick Reply 分流", "使用者點選後，官方帳號以 Quick Reply 或 Flex Message 把人導向 1:1、群組或 LIFF。", "重新播放", {
                  header: "問我們",
                  subheader: "自動分流",
                  messages: [
                    msg("官方帳號", "你想針對哪一則更新提問？"),
                    msg("你", "市場週報", true),
                    msg("官方帳號", "已幫你帶入今日更新，請輸入問題。")
                  ],
                  bottom: "輸入問題"
                })
              ],
              facts: facts({
                entryType: "QR / 官方帳號連結 / LINE 搜尋",
                firstCommitment: "加入官方帳號好友",
                accountBeforePreview: "通常是，需要 LINE 環境",
                joinBeforeReply: "1:1 不需要入群；多人討論需要另入群或 OpenChat",
                boundaryVisible: "中：聊天與服務入口共用同一畫面",
                discussionStructure: "官方帳號聊天 → Rich Menu / Quick Reply → 1:1 / 群組 / LIFF",
                fullStreamExposed: "否，先由選單或 Quick Reply 分流",
                moderation: "官方帳號權限、Webhook、退訂 / 封鎖、群組管理",
                notificationRisk: "低到中：路由清楚時低，廣播過多時升高"
              }),
              tradeoffs: [
                trade("Advantage", "Rich Menu 是聊天底部的常駐導航，可把商業或社群動作放在使用者熟悉的位置。", `${SOURCES.report}：LINE 段落；${SOURCES.lineRichMenu}`, "LINE Developers 說明 Rich Menu 顯示在官方帳號聊天畫面。"),
                trade("Advantage", "postback / message action 能把使用者點擊轉成 webhook 事件，適合做輕量分流。", SOURCES.lineRichMenu, "官方文件說明 rich menu action 會送到 Bot 伺服器。"),
                trade("Risk", "官方帳號較像服務與 CRM 路由器，不是大型多人公開討論空間。", `${SOURCES.compare}：頻道 / 內容到討論閉環`, "需要另接群組或 OpenChat。"),
                trade("Constraint", "Rich Menu 若承載太多服務會變成雜亂菜單，需依使用者狀態動態化。", `${SOURCES.report}：LINE 風險提醒`, "報告已標註 Rich Menu 容易雜亂。")
              ],
              derived: derived("低", "低", "官方帳號 → Rich Menu → Quick Reply / LIFF", "服務路由")
            },
            {
              id: "our-hybrid-channel",
              name: "我們的混合提案",
              tag: "手機端單列",
              color: "cyan",
              steps: [
                step("our-1", "公開頻道頁", "外部流量先落到公開頻道頁；訪客可先預覽內容，再決定關注或進入討論。", "關注頻道", {
                  header: "加密市場頻道",
                  subheader: "公開預覽 · 可分享 URL",
                  chips: ["先預覽", "關注", "進入討論"],
                  cards: [
                    card("市場週報 · 第 12 期", "摘要、來源、外鏈卡片與討論入口。", "公開可見"),
                    card("社群 AMA", "週五 20:00 開始。", "活動")
                  ],
                  bottom: "關注這個頻道"
                }),
                step("our-2", "固定討論 CTA", "頻道頁底部固定保留進入討論群，讓使用者清楚知道閱讀面和討論面不同。", "進入討論群", {
                  header: "加密市場頻道",
                  subheader: "已關注",
                  cards: [
                    card("市場週報 · 第 12 期", "你可以針對這則更新進入討論。", "89 討論"),
                    card("提示", "討論群會先顯示主題分區。", "低噪音")
                  ],
                  bottom: "進入討論群"
                }),
                step("our-3", "群組 Topics 第一屏", "進入討論群後先看到主題分區，不直接暴露大群訊息流。", "打開新手問答", {
                  header: "加密討論社群",
                  subheader: "3,248 成員 · 142 在線",
                  topics: [
                    row("公告", "規則與活動", "📢"),
                    row("新手問答", "從這裡開始提問", "💬"),
                    row("行情討論", "高頻討論區", "📈"),
                    row("工具與資源", "長期沉澱", "🔧")
                  ],
                  bottom: "進入 Topic"
                }),
                step("our-4", "Topic 訊息流", "標準 IM 輸入、回覆、反應保留在 Topic 內，後續可自然延伸到私聊。", "延伸私聊", {
                  header: "新手問答",
                  subheader: "加密討論社群",
                  messages: [
                    msg("Alex", "怎麼看今天的 BTC？"),
                    msg("你", "短期震盪，先看支撐是否守住。", true),
                    msg("Mina", "可以把這段整理成下一則頻道更新。")
                  ],
                  bottom: "私訊 Mina"
                }),
                step("our-5", "關係沉澱", "高意圖互動再進入私聊，完成公開內容 → 社群 → 關係沉澱。", "重新播放", {
                  header: "Mina",
                  subheader: "來自新手問答",
                  messages: [
                    msg("Mina", "剛才那段分析可以分享給我嗎？"),
                    msg("你", "可以，我把鏈上工具一起發你。", true)
                  ],
                  bottom: "返回頻道"
                })
              ],
              facts: facts({
                entryType: "公開 URL / 搜尋 / QR / 外部內容連結",
                firstCommitment: "關注頻道；發言前才進一步入群或私聊",
                accountBeforePreview: "否，公開頻道先預覽",
                joinBeforeReply: "是，Topic 發言前需要入群",
                boundaryVisible: "是，頻道頁 CTA 明確標示進入討論",
                discussionStructure: "公開頻道 → 討論群 → Topics → Topic 訊息流 → 私聊",
                fullStreamExposed: "否，先顯示 Topics 列表",
                moderation: "入群規則、Topic 權限、管理員、檢舉封鎖",
                notificationRisk: "中：需分開控制頻道、群組與 Topic 通知"
              }),
              tradeoffs: [
                trade("Advantage", "路徑與收斂架構一致：外部內容引流、頻道承接、討論群與主題分區互動、私聊沉澱關係。", SOURCES.architecture, "產品架構頁已明確定義這條北極星路徑。"),
                trade("Advantage", "手機端採單列垂直導航，避免照搬 Discord 的多欄伺服器樹狀導航。", `${SOURCES.learn}：導航邏輯總結`, "學習材料建議主列表 → 頻道頁 → Topics → Topic 訊息流。"),
                trade("Hypothesis", "加入前預覽可能降低加入壓力，但仍需要 MVP 轉化數據驗證。", "@pilot_preview_before_join", "目前是產品假設，不轉成主觀分數。"),
                trade("Risk", "如果每個頻道都預設綁群，營運者會同時管理內容、群組與多個 Topic。", `${SOURCES.channelLoop}；@operator_pilot_needed`, "需要模板與預設通知策略。")
              ],
              derived: derived("中", "中", "公開 → 頻道 → 群組 → Topic → 私聊", "主題優先")
            }
          ]
        }
      ]
    },
    {
      id: "community-governance",
      name: "community-governance｜群組 / 主題治理",
      summary: "大社群入口不應等於一條大訊息流；主題、公告、角色與頻道瀏覽會改變噪音與治理。",
      scenarios: [
        {
          id: "community-entry",
          name: "大社群入場與主題選擇",
          intent: "這條流程比較使用者加入大型社群後，是直接進入全量訊息流，還是先經過角色、公告或主題選擇，幫助判斷哪種入場方式更能控制噪音。",
          openDecision: {
            question: "使用者進入群組後第一屏應該看到什麼？",
            options: [
              {
                name: "Topics 列表",
                description: "先看公告、問答、行情、資源等主題分區。",
                tradeoff: "降低噪音，但需要規劃主題分類架構。",
                evidence: `${SOURCES.learn}：tg_10 / tg_11`
              },
              {
                name: "伺服器導覽",
                description: "先回答角色與頻道問題，再看到個人化頻道列表。",
                tradeoff: "治理強，但手機端與新手負擔較高。",
                evidence: SOURCES.discordOnboarding
              },
              {
                name: "公告 + 子群組",
                description: "公告面單向，成員討論放在子群組。",
                tradeoff: "公告清楚，但討論群之間可能分散。",
                evidence: `${SOURCES.learn}：wa_10；${SOURCES.whatsappCommunities}`
              }
            ]
          },
          architectures: [
            {
              id: "telegram-topics",
              name: "Telegram Topics",
              tag: "Topic 優先",
              color: "blue",
              steps: [
                step("tgt-1", "群組入口", "使用者從頻道或邀請連結進入大型群組。", "查看 Topics", {
                  header: "加密討論群",
                  subheader: "大型群組",
                  chips: ["公開群", "管理員", "Topics"],
                  cards: [card("群組簡介", "本群用 Topics 分流公告、問答與行情討論。", "加入後可發言")],
                  bottom: "查看 Topics"
                }),
                step("tgt-2", "Topics 列表", "第一屏顯示 Topics，而不是完整訊息流。", "打開行情討論", {
                  header: "加密討論群",
                  subheader: "Topics",
                  topics: [
                    row("General", "預設主題", "G"),
                    row("公告", "管理員置頂", "📢"),
                    row("行情討論", "高頻討論", "📈"),
                    row("新手問答", "低門檻提問", "💬")
                  ],
                  bottom: "進入行情討論"
                }),
                step("tgt-3", "Topic 內訊息流", "每個 Topic 有自己的訊息流、媒體與通知設定。", "查看管理", {
                  header: "行情討論",
                  subheader: "Topic 訊息流",
                  messages: [
                    msg("Kai", "這裡只討論行情，不貼廣告。"),
                    msg("你", "收到，先看支撐位。", true)
                  ],
                  bottom: "返回群組"
                })
              ],
              facts: facts({
                entryType: "群組邀請 / 頻道討論群",
                firstCommitment: "加入群組後進入 Topic 發言",
                accountBeforePreview: "公開群可能可先看部分內容；發言需要 Telegram 身份",
                joinBeforeReply: "是",
                boundaryVisible: "中：同一群內以 Topic 分區",
                discussionStructure: "群組 → Topics 列表 → Topic 訊息流",
                fullStreamExposed: "否，先看 Topics",
                moderation: "Topic 管理、管理員權限、Bot、禁言",
                notificationRisk: "中：每個 Topic 需獨立通知策略"
              }),
              tradeoffs: [
                trade("Advantage", "Topics 第一屏能把大群拆成可選擇的討論面。", `${SOURCES.learn}：tg_10`, "學習材料將此列為我們社群閉環的核心元件。"),
                trade("Advantage", "Topic 本身像獨立聊天，仍保留標準 IM 發言體驗。", `${SOURCES.learn}：tg_11；${SOURCES.telegramTopics}`, "官方文章說明 Topic 支援自己的媒體與通知設定。"),
                trade("Constraint", "需要先設計 Topic 與權限資料模型，否則後續會重構。", `${SOURCES.learn}：tg_15`, "學習材料明確要求 M0 預留 Role × Permission。"),
                trade("Risk", "主題太多會讓使用者需要再次分流與訂閱管理。", "@topic_taxonomy_pilot", "目前需透過 MVP 觀察。")
              ],
              derived: derived("中", "低", "群組 → Topics → Topic 訊息流", "主題列表")
            },
            {
              id: "discord-server",
              name: "Discord 伺服器",
              tag: "角色與頻道",
              color: "violet",
              steps: [
                step("dcs-1", "伺服器邀請", "使用者先加入一個 Discord 伺服器，而不是單一群聊。", "回答問題", {
                  header: "加入 AnyDAO",
                  subheader: "伺服器邀請",
                  chips: ["伺服器", "規則", "角色"],
                  onboarding: ["閱讀規則", "選擇語言", "選擇興趣"],
                  bottom: "繼續"
                }),
                step("dcs-2", "個人化頻道列表", "導覽根據答案給角色並加入相關頻道。", "瀏覽頻道", {
                  header: "頻道與角色",
                  subheader: "個人化頻道",
                  list: [
                    row("announcements", "必看公告", "#"),
                    row("community", "一般討論", "#"),
                    row("support", "支援與票務", "🎟"),
                    row("中文區", "語言分區", "中")
                  ],
                  bottom: "打開瀏覽頻道"
                }),
                step("dcs-3", "頻道瀏覽", "大型社群可讓使用者自行瀏覽並關注分類，避免預設全量訂閱。", "關注分類", {
                  header: "瀏覽頻道",
                  subheader: "按分類訂閱",
                  topics: [
                    row("語言分區", "7 個頻道", "🌐"),
                    row("產品討論", "Forum", "🧪"),
                    row("活動", "活動", "📅")
                  ],
                  bottom: "關注語言分區"
                }),
                step("dcs-4", "Forum / Thread", "討論再進一步被拆成 Forum 貼文或 thread。", "重新播放", {
                  header: "產品討論",
                  subheader: "Forum",
                  cards: [
                    card("功能建議：Topic 訂閱", "按標籤收斂討論。", "42 回覆"),
                    card("支援：登入問題", "已標記已解決。", "7 回覆")
                  ],
                  bottom: "返回伺服器"
                })
              ],
              facts: facts({
                entryType: "伺服器邀請 / 探索",
                firstCommitment: "加入伺服器並完成規則 / 導覽",
                accountBeforePreview: "通常是",
                joinBeforeReply: "是",
                boundaryVisible: "是，伺服器 / 分類 / 頻道 / Thread 分層",
                discussionStructure: "伺服器 → 分類 → 頻道 / Forum → Thread",
                fullStreamExposed: "否，依角色與頻道設定可見",
                moderation: "角色、權限、規則篩選、AutoMod、審核紀錄",
                notificationRisk: "中：設定能力強但心智較重"
              }),
              tradeoffs: [
                trade("Advantage", "導覽用問題指派角色與頻道，對大型社群入場很強。", SOURCES.discordOnboarding, "官方文件說明新成員可選角色與頻道。"),
                trade("Advantage", "頻道瀏覽支援使用者自己選擇要關注的內容，不必全量訂閱。", `${SOURCES.learn}：dc_12`, "學習材料建議我們 M3 參照此設計。"),
                trade("Risk", "Discord 三層結構在手機端導航複雜，不適合直接照搬。", `${SOURCES.learn}：Discord 的設計不適合手機端優先`, "需要壓縮成單列手機路徑。"),
                trade("Constraint", "需要完整角色、權限、頻道與導覽設定，初始配置成本較高。", SOURCES.discordOnboarding, "官方設定包含預設頻道、問題與 Server Guide。")
              ],
              derived: derived("低到中", "高", "伺服器 → 導覽 → 頻道 → Forum", "角色門檻")
            },
            {
              id: "line-facebook-gate",
              name: "LINE OpenChat / Facebook Groups",
              tag: "入群身份與審核",
              color: "green",
              steps: [
                step("lf-gate-1", "主題社群入口", "LINE OpenChat 以主題聊天室與獨立暱稱降低陌生人加入壓力；Facebook Groups 用群組頁與規則建立脈絡。", "查看規則", {
                  header: "Topic community",
                  subheader: "OpenChat / Group",
                  chips: ["topic", "profile boundary", "rules"],
                  cards: [card("加密新手討論", "加入前先看主題、規則與成員狀態。", "社群入口")],
                  bottom: "查看規則"
                }),
                step("lf-gate-2", "加入前設定 / 問題", "OpenChat 可設定聊天室內暱稱；Facebook Groups 可用 membership questions 與 approval 控制入口。", "送出", {
                  header: "加入設定",
                  subheader: "暱稱 / membership questions",
                  onboarding: ["加入前確認", "使用社群暱稱", "同意群規", "回答入群問題"],
                  bottom: "送出"
                }),
                step("lf-gate-3", "進入群組脈絡", "V1 借用身份邊界與入群規則，但不做完整社群 feed 或 Group Insights。", "開啟主題", {
                  header: "社群首頁",
                  subheader: "規則 + 主題入口",
                  topics: [row("公告與規則", "先讀這裡", "R"), row("新手問答", "集中提問", "Q"), row("行情討論", "分題互動", "T")],
                  bottom: "開啟主題"
                })
              ],
              facts: facts({
                entryType: "topic community / group page",
                firstCommitment: "設定暱稱 / 送出問題 / 加入",
                accountBeforePreview: "部分可預覽",
                joinBeforeReply: "是",
                boundaryVisible: "高：身份與群規先出現",
                discussionStructure: "社群入口 → 加入設定 / 問題 → 群組 / 主題",
                fullStreamExposed: "否",
                moderation: "rules、membership questions、approval、admin controls"
              }),
              tradeoffs: [
                trade("Advantage", "加入前身份邊界與規則能降低公開社群風險。", `${SOURCES.compare}：community-governance / LINE OpenChat / Facebook Groups`, "適合 V1 的 Join / Follow boundary。"),
                trade("Constraint", "不做完整社群 feed、insights 或大型 Facebook Groups 經營系統。", "產品判斷", "只採用入群規則與主題入口。")
              ],
              derived: derived("低", "中", "入口 → 規則 / 暱稱 / 問題 → 主題", "加入社群")
            },
            {
              id: "our-topics",
              name: "我們的主題優先",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("ot-1", "從頻道進群", "使用者已理解channel-loop｜頻道 / 內容到討論閉環，再點擊進入對應討論群。", "進入群組", {
                  header: "加密市場頻道",
                  subheader: "已關注",
                  cards: [card("市場週報", "這則更新已有 89 則討論。", "進入討論")],
                  bottom: "進入討論群"
                }),
                step("ot-2", "Topics 第一屏", "群組第一屏只顯示主題，避免一進來看到高密度訊息。", "選擇新手問答", {
                  header: "加密討論社群",
                  subheader: "主題分區",
                  topics: [
                    row("公告", "只看重要資訊", "📢"),
                    row("新手問答", "低壓力提問", "💬"),
                    row("行情討論", "高密度互動", "📈"),
                    row("活動與合作", "週期性活動", "📅")
                  ],
                  bottom: "打開新手問答"
                }),
                step("ot-3", "Topic 內互動", "發言、回覆、反應與附件只在單一 Topic 內展開。", "查看通知設定", {
                  header: "新手問答",
                  subheader: "Topic 訊息流",
                  messages: [
                    msg("Alex", "新手應該先看哪個指標？"),
                    msg("你", "先從成交量與支撐位開始。", true)
                  ],
                  bottom: "設定通知"
                }),
                step("ot-4", "通知與治理", "Topic 可獨立關注、靜音或檢舉，管理員從 Topic 層處理風險。", "重新播放", {
                  header: "Topic 設定",
                  subheader: "通知與治理",
                  list: [
                    row("只收提及", "降低噪音", "鈴"),
                    row("檢舉 Topic", "保留上下文", "盾"),
                    row("關注此 Topic", "後續提醒", "星")
                  ],
                  bottom: "返回 Topics"
                })
              ],
              facts: facts({
                entryType: "頻道 CTA / 群組 invite / 公開群頁",
                firstCommitment: "選擇 Topic 發言",
                accountBeforePreview: "公開頁先預覽；發言前需要登入",
                joinBeforeReply: "是",
                boundaryVisible: "是，頻道、群組、Topic 三層分明",
                discussionStructure: "頻道 → 群組 → Topics → Topic 訊息流",
                fullStreamExposed: "否",
                moderation: "Topic 權限、檢舉、管理員、通知設定",
                notificationRisk: "中：需要把 Topic 通知做成可理解設定"
              }),
              tradeoffs: [
                trade("Advantage", "對齊產品架構頁的手機核心路徑，頻道頁、群組主題列表與 Topic 訊息流相互承接。", SOURCES.architecture, "產品架構頁已畫出四個核心手機屏。"),
                trade("Advantage", "保留 Telegram Topics 的秩序，但以手機單列導航呈現。", `${SOURCES.learn}：導航邏輯總結`, "學習材料明確建議不採 Discord 側欄。"),
                trade("Hypothesis", "Topic-first 可能降低新成員被訊息流嚇退的機率。", "@new_member_activation_test", "需要 A/B 測試或可用性測試。"),
                trade("Risk", "若 Topic 命名不清楚，使用者仍會不知道去哪裡說話。", "@topic_information_architecture_review", "需要預設模板和 owner 設定引導。")
              ],
              derived: derived("中", "低到中", "頻道 → Topics → Topic 訊息流", "主題優先")
            }
          ]
        }
      ]
    },
    {
      id: "trust-risk",
      name: "trust-risk｜信任 / 安全 / 風控",
      summary: "公開入口、入群、非好友訊息、檢舉與管理員權限是同一條風險管線。",
      scenarios: [
        {
          id: "join-risk",
          name: "公開社群入場治理",
          intent: "這條流程測試公開入口如何在不過度阻擋正常使用者的前提下，延遲高風險權限並保留可治理證據。",
          openDecision: {
            question: "公開社群應該在哪些節點加摩擦？",
            options: [
              {
                name: "入群前審核",
                description: "邀請連結可到期、限次、需要核准或在風險視窗暫停。",
                tradeoff: "降低灌入風險，但會增加加入摩擦。",
                evidence: `${SOURCES.safety}；${SOURCES.compare}`
              },
              {
                name: "發言前權限梯度",
                description: "新帳號先看，延後非好友私訊、外鏈、媒體與大量提及。",
                tradeoff: "新手體驗稍慢，但可保護主收件箱與群組。",
                evidence: SOURCES.safety
              },
              {
                name: "Topic 層檢舉與管理",
                description: "檢舉自動帶上下文、Topic、邀請來源與管理操作紀錄。",
                tradeoff: "資料模型與隱私要求更高。",
                evidence: `${SOURCES.safety}；@moderation_case_design`
              }
            ]
          },
          architectures: [
            {
              id: "discord-gate",
              name: "Discord 導覽 / 角色",
              tag: "明確門檻",
              color: "violet",
              steps: [
                step("dg-1", "規則篩選", "使用者加入後先看到規則與入場要求。", "接受規則", {
                  header: "社群規則",
                  subheader: "加入前確認",
                  onboarding: ["禁止垃圾訊息", "禁止詐騙外鏈", "尊重主題分區"],
                  bottom: "接受並繼續"
                }),
                step("dg-2", "選角色與頻道", "回答問題後取得角色與預設頻道，不直接暴露所有頻道。", "完成選擇", {
                  header: "導覽",
                  subheader: "選擇你要看的內容",
                  chips: ["角色", "頻道", "權限"],
                  list: [
                    row("新手", "可看新手區", "R"),
                    row("交易討論", "可看行情區", "R"),
                    row("支援", "可開票務", "R")
                  ],
                  bottom: "進入伺服器"
                }),
                step("dg-3", "有限可見", "新成員先看到預設頻道與 Server Guide，再逐步發現其他頻道。", "打開頻道", {
                  header: "Server Guide",
                  subheader: "新成員導覽",
                  cards: [
                    card("先讀這裡", "社群規則與常見問題。", "資源"),
                    card("開始互動", "去 #general 或 Forum 提問。", "3 個待辦")
                  ],
                  bottom: "重新播放"
                })
              ],
              facts: facts({
                entryType: "伺服器邀請",
                firstCommitment: "接受規則 / 選角色",
                accountBeforePreview: "是",
                joinBeforeReply: "是，規則前不可發言",
                boundaryVisible: "是，導覽明確展示規則與角色",
                discussionStructure: "規則 → 角色 → 預設頻道",
                fullStreamExposed: "否",
                moderation: "規則篩選、角色、AutoMod、審核紀錄",
                notificationRisk: "中低：頻道可選，但設定量高"
              }),
              tradeoffs: [
                trade("Advantage", "將發言與可見頻道放在導覽後，避免新成員直接進入混亂狀態。", SOURCES.discordOnboarding, "官方說明新成員會取得個人化頻道列表。"),
                trade("Advantage", "Server Guide 可把規則、資源與新手待辦放在導覽面。", SOURCES.discordOnboarding, "官方說明 Server Guide 是導覽的一部分。"),
                trade("Risk", "過多問題與角色設定會讓手機端新手覺得重。", `${SOURCES.learn}：Discord 的設計不適合手機端優先`, "適合高治理社群，不適合所有普通群。"),
                trade("Constraint", "需要管理者理解角色、權限、預設頻道等概念。", SOURCES.discordOnboarding, "配置成本較高。")
              ],
              derived: derived("低", "高", "邀請 → 規則 → 角色 → 頻道", "角色門檻")
            },
            {
              id: "whatsapp-line-risk-limits",
              name: "WhatsApp Business / LINE limits",
              tag: "商業訊息風控",
              color: "green",
              steps: [
                step("wl-risk-1", "商業訊息入口", "商家訊息、模板或官方帳號推送需要品質與頻率邊界。", "檢查限制", {
                  header: "Business messaging",
                  subheader: "quality / rate limits",
                  chips: ["template review", "quality", "unsubscribe"],
                  cards: [card("商業訊息", "V1 只標示 business chat，不開完整推播平台。", "Boundary")],
                  bottom: "檢查限制"
                }),
                step("wl-risk-2", "封鎖 / 退訂 / 限流", "LINE block / unsubscribe 與 WhatsApp Business quality limits 都提醒 V1 要有最小安全邊界。", "使用封鎖", {
                  header: "Safety controls",
                  subheader: "block / unsubscribe / rate limit",
                  list: [row("Block", "停止商家私訊", "B"), row("Report", "檢舉濫發或詐騙", "R"), row("Rate limit", "限制低品質商業訊息", "L")],
                  bottom: "使用封鎖"
                }),
                step("wl-risk-3", "風控狀態回到治理層", "V1 不做完整 AI 審核平台，但要讓 report/block/mute 回到 Governance Layer。", "重新播放", {
                  header: "Governance Layer",
                  subheader: "basic log",
                  cards: [card("moderation log", "紀錄封鎖、檢舉、移除。", "V1"), card("AI review", "後續擴展，不進 V1 core。", "Later")],
                  bottom: "重新播放"
                })
              ],
              facts: facts({
                entryType: "business messaging / official account",
                firstCommitment: "receive / block / unsubscribe",
                accountBeforePreview: "是",
                joinBeforeReply: "否",
                boundaryVisible: "高：business / OA labels",
                discussionStructure: "business message → safety action → governance log",
                fullStreamExposed: "否",
                moderation: "block、report、unsubscribe、rate limits、quality controls"
              }),
              tradeoffs: [
                trade("Advantage", "商業訊息必須有 block、unsubscribe、rate limit 等基本保護。", `${SOURCES.compare}：trust-risk / WhatsApp Business / LINE`, "支撐普通用戶安全封鎖與商業訊息。"),
                trade("Constraint", "完整 AI 風控與客服平台後置。", `${SOURCES.compare}：platform-ai-ops / support-crm`, "只留 hook。")
              ],
              derived: derived("低", "低", "business message → block/report → governance log", "安全動作")
            },
            {
              id: "our-trust-gate",
              name: "我們的信任閘門",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("og-1", "公開預覽但限制高風險動作", "訪客可看公開頻道與公開 Topic 摘要，但不能直接大量發言或私訊。", "登入加入", {
                  header: "公開預覽",
                  subheader: "尚未加入",
                  chips: ["可看", "不可發言", "不可私訊"],
                  cards: [card("市場週報", "可預覽內容與討論摘要。", "公開")],
                  bottom: "登入並加入"
                }),
                step("og-2", "權限梯度", "新成員先能閱讀與回覆低風險 Topic，高風險動作延後開放。", "完成新手狀態", {
                  header: "新手權限",
                  subheader: "權限梯度",
                  list: [
                    row("閱讀公開 Topic", "立即開放", "看"),
                    row("發言", "完成規則後開放", "說"),
                    row("外鏈 / 大量邀請", "延後開放", "鎖")
                  ],
                  bottom: "接受規則"
                }),
                step("og-3", "檢舉即證據", "檢舉自動帶上訊息、前後上下文、Topic、邀請來源與近期操作。", "重新播放", {
                  header: "檢舉訊息",
                  subheader: "最小必要證據",
                  cards: [
                    card("被檢舉訊息", "可疑外鏈與重複貼文。", "自動附上下文"),
                    card("來源", "invite=週報 CTA", "可追蹤")
                  ],
                  bottom: "返回預覽"
                })
              ],
              facts: facts({
                entryType: "公開頁 / 邀請 / QR",
                firstCommitment: "登入並加入；發言前接受規則",
                accountBeforePreview: "否",
                joinBeforeReply: "是",
                boundaryVisible: "是，公開預覽與成員權限分開",
                discussionStructure: "預覽 → 信任狀態 → Topic 回覆 / 檢舉",
                fullStreamExposed: "否，只顯示公開摘要與可見 Topic",
                moderation: "權限梯度、檢舉證據鏈、邀請來源、申訴",
                notificationRisk: "中：需同步教育新手權限與通知"
              }),
              tradeoffs: [
                trade("Advantage", "把摩擦放在高風險動作，而不是完全阻擋內容預覽。", SOURCES.safety, "安全治理報告建議延後非好友 DM、外鏈、媒體與大量提及。"),
                trade("Advantage", "檢舉流程直接收集證據，避免只做表單。", SOURCES.safety, "報告明確提出檢舉流程必須是證據流。"),
                trade("Hypothesis", "公開預覽 + 發言前權限梯度能兼顧轉化與風控。", "@trust_gate_mvp_test", "需要實驗驗證轉化損失與濫用下降。"),
                trade("Constraint", "需要資料保留、隱私最小化與管理員操作日誌的基礎建設。", `${SOURCES.safety}；@privacy_review`, "不能只做前端提示。")
              ],
              derived: derived("中", "中", "預覽 → 加入 → 權限 / 證據", "風險門檻")
            }
          ]
        }
      ]
    },

    {
      id: "business-commerce",
      name: "business-commerce｜輕量商業檔案 / 商品卡",
      summary: "商業功能在 V1 只做商業檔案、商業聊天標籤與商品卡物件；不做完整 marketplace、payment、order 或 fulfillment。",
      scenarios: [
        {
          id: "product-card-to-chat",
          name: "商品卡進聊天 / 頻道",
          intent: "這條流程比較商家如何用輕量商業身份與商品卡承接外部流量，而不是把 IM 做成完整商城或客服工作台。",
          openDecision: {
            question: "V1 商業模組應該做到哪裡就停？",
            options: [
              { name: "WhatsApp Business 型：商業檔案 + Catalog", description: "商家有 profile、catalog、quick replies，商品可進聊天。", tradeoff: "適合小商家，但不要把完整訂單系統放進 IM。", evidence: `${SOURCES.compare}：business-commerce / WhatsApp Business` },
              { name: "LINE OA 型：Rich Menu + Flex / Quick Reply", description: "商業服務入口在官方帳號聊天中分流。", tradeoff: "容易理解，但選單過重會變雜亂。", evidence: `${SOURCES.compare}：business-commerce / LINE OA` },
              { name: "Shopify Inbox / Instagram 型：product card to chat", description: "商品卡或商品連結進入對話，購買履約留在外部系統。", tradeoff: "最適合 V1 輕量商務。", evidence: `${SOURCES.compare}：business-commerce / Shopify Inbox / Instagram` }
            ]
          },
          architectures: [
            {
              id: "whatsapp-business-catalog",
              name: "WhatsApp Business profile + catalog",
              tag: "小商家信任",
              color: "green",
              steps: [
                step("wab-1", "Business profile", "商家先用商業檔案建立信任：地址、營業時間、網站、類別。", "看目錄", { header: "Fresh Market", subheader: "Business account", chips: ["Profile", "Hours", "Catalog"], cards: [card("商業檔案", "地址、營業時間、網站。", "Profile")], bottom: "看目錄" }),
                step("wab-2", "Catalog / product sharing", "商品可以從 catalog 被分享進聊天，成為結構化物件。", "分享商品", { header: "Catalog", subheader: "Fresh Market", cards: [card("藍莓禮盒", "$18 · 可詢問庫存", "Product"), card("咖啡豆", "$12 · 今日可寄送", "Product")], bottom: "分享商品" }),
                step("wab-3", "Quick replies", "常見問題用 quick replies 回覆；完整 CRM 和 AI agent 後置。", "重新播放", { header: "Business chat", subheader: "Product card", messages: [msg("Fresh Market", "這是藍莓禮盒。"), msg("商品卡", "藍莓禮盒 · $18")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "business profile / catalog", firstCommitment: "open business chat", accountBeforePreview: "是", joinBeforeReply: "否", boundaryVisible: "高：Business label", discussionStructure: "profile → product card → chat", fullStreamExposed: "否", moderation: "business quality / block / report" }),
              tradeoffs: [trade("Advantage", "商業身份先建立信任，商品卡可進聊天。", `${SOURCES.compare}：business-commerce / WhatsApp Business`, "直接支撐商家 / 商業主。"), trade("Constraint", "不做完整 marketplace 或 order fulfillment。", `${SOURCES.compare}：business-commerce`, "V1 只做 lightweight representation。")],
              derived: derived("低", "低", "profile → catalog → product card chat", "open chat")
            },
            {
              id: "line-oa-commerce",
              name: "LINE OA rich menu + quick reply",
              tag: "服務入口",
              color: "green",
              steps: [
                step("line-biz-1", "官方帳號聊天室", "使用者加官方帳號後，在聊天中看到商業身份與常駐服務入口。", "打開選單", { header: "Coffee Club", subheader: "Official Account", chips: ["OA", "Rich Menu", "Quick Reply"], cards: [card("會員 / 商品 / 客服", "入口被放在選單，不塞滿訊息流。", "Rich Menu")], bottom: "打開選單" }),
                step("line-biz-2", "Flex / 商品卡", "商品或服務可用 Flex Message / Quick Reply 進入聊天。", "送出商品卡", { header: "商品", subheader: "Flex message", cards: [card("拿鐵組合", "可回覆、收藏或分享。", "Product card")], bottom: "送出商品卡" }),
                step("line-biz-3", "LIFF / CRM hook 後置", "複雜表單、CRM 或 mini-app 只是未來 hook，不是 V1 core。", "重新播放", { header: "Service hook", subheader: "Later", cards: [card("V1", "商品卡 + business label。", "Now"), card("Later", "LIFF / CRM / AI 客服。", "Hook")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "official account / rich menu", firstCommitment: "add OA", accountBeforePreview: "是", joinBeforeReply: "否", boundaryVisible: "高", discussionStructure: "OA chat → menu → product card", fullStreamExposed: "否", moderation: "block / unsubscribe / rate limits" }),
              tradeoffs: [trade("Advantage", "商業動作放進聊天底部入口容易理解。", `${SOURCES.compare}：business-commerce / LINE OA`, "適合輕量商務。"), trade("Risk", "Rich Menu 太多會變雜亂。", `${SOURCES.compare}：LINE 風險`, "V1 只留商品卡與核心入口。")],
              derived: derived("低", "中", "OA chat → rich menu → product card", "select action")
            },
            {
              id: "shopify-instagram-product-chat",
              name: "Shopify Inbox / Instagram product card",
              tag: "商品進對話",
              color: "violet",
              steps: [
                step("shop-biz-1", "商品或內容觸發問題", "客戶從商店商品頁、Instagram product tag 或 DM 產生問題。", "詢問商品", { header: "Product CTA", subheader: "Instagram / Shopify", chips: ["Product tag", "DM", "Inbox"], cards: [card("藍莓禮盒", "使用者想問庫存與配送。", "Product")], bottom: "詢問商品" }),
                step("shop-biz-2", "商品卡進聊天", "商品卡帶入對話，讓商家回覆時有上下文。", "快速回覆", { header: "Shopify Inbox", subheader: "Product context", messages: [msg("客戶", "這個今天能寄嗎？", true), msg("商品卡", "藍莓禮盒 · product link"), msg("商家", "今天 17:00 前可以出貨。")], bottom: "快速回覆" }),
                step("shop-biz-3", "購買 / 履約留在外部", "V1 不接管 checkout、order 或 fulfillment，只保留商品物件與外部連結。", "重新播放", { header: "V1 boundary", subheader: "No full commerce", cards: [card("IM 內", "商品卡、聊天、標籤。", "V1"), card("外部系統", "checkout、訂單、履約。", "Later / External")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "product tag / store chat", firstCommitment: "ask about product", accountBeforePreview: "否", joinBeforeReply: "否", boundaryVisible: "高：product context", discussionStructure: "product → chat → external checkout", fullStreamExposed: "否", moderation: "business label / report" }),
              tradeoffs: [trade("Advantage", "商品卡應是聊天中的結構化物件。", `${SOURCES.compare}：business-commerce / Shopify Inbox / Instagram`, "最符合 V1 lightweight commerce。"), trade("Constraint", "訂單與履約先作為外部接入能力。", `${SOURCES.compare}：business-commerce`, "不建完整商務系統。")],
              derived: derived("低", "低", "product CTA → chat card → external checkout", "ask product")
            },
            {
              id: "our-lightweight-commerce",
              name: "我們的輕量商務 V1",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("our-biz-1", "Business profile", "商家有基本檔案與 business chat label。", "建立商品卡", { header: "Business Profile", subheader: "V1 lightweight", chips: ["Business label", "Profile", "No marketplace"], cards: [card("Coffee Club", "類別、營業時間、網站。", "Profile")], bottom: "建立商品卡" }),
                step("our-biz-2", "Product card object", "商品卡是可分享物件，可進頻道或聊天。", "分享到頻道", { header: "Product Card", subheader: "object", cards: [card("拿鐵組合", "圖片、名稱、簡短描述、外部連結。", "Card")], bottom: "分享到頻道" }),
                step("our-biz-3", "Chat / Channel 承接", "商品卡帶入聊天或頻道，但 payment/order/fulfillment 全部後置。", "重新播放", { header: "Channel + Chat", subheader: "business route", cards: [card("頻道", "商品卡作為內容 CTA。", "Channel"), card("私聊", "詢問商品，留在 inbox。", "Chat")], bottom: "重新播放" })
              ],
              facts: facts({ entryType: "business profile / product card", firstCommitment: "follow / ask", accountBeforePreview: "否", joinBeforeReply: "否", boundaryVisible: "高", discussionStructure: "business profile → product card → channel/chat", fullStreamExposed: "否", moderation: "business label / report / block" }),
              tradeoffs: [trade("Advantage", "支撐商家 / 商業主，但不把 IM 做成商城。", `${SOURCES.compare}：roleScenarios / business-commerce`, "V1 必要但輕量。"), trade("Constraint", "AI 客服與 CRM 只留 hook。", `${SOURCES.compare}：support-crm / platform-ai-ops`, "後續擴展。")],
              derived: derived("低", "低", "profile → product card → chat/channel", "ask/follow")
            }
          ]
        }
      ]
    },
  ]
};

function step(id, title, description, action, phone) {
  return { id, title, description, action, phone };
}

function card(title, body, meta) {
  return { title, body, meta };
}

function row(title, body, icon) {
  return { title, body, icon };
}

function msg(author, body, me = false) {
  return { author, body, me };
}

function tile(title, body) {
  return { title, body };
}

function facts(extra) {
  return extra;
}

function trade(type, claim, evidence, notes) {
  return { type, claim, evidence, notes };
}

function derived(messageDensity, onboardingDepth, path, conversion) {
  return { messageDensity, onboardingDepth, path, conversion };
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
  const architecture = scenario.architectures.find((item) => item.id === params.get("architecture")) || scenario.architectures[0];
  const requestedStep = Number.parseInt(params.get("step"), 10);
  const stepIndex = Number.isInteger(requestedStep)
    ? Math.min(Math.max(requestedStep, 0), architecture.steps.length - 1)
    : 0;

  return {
    moduleId: module.id,
    scenarioId: scenario.id,
    architectureId: architecture.id,
    stepIndex
  };
}

const playgroundState = createInitialPlaygroundState();

function activeContext() {
  const module = DATA.modules.find((item) => item.id === playgroundState.moduleId) || DATA.modules[0];
  const scenario = module.scenarios.find((item) => item.id === playgroundState.scenarioId) || module.scenarios[0];
  const architecture = scenario.architectures.find((item) => item.id === playgroundState.architectureId) || scenario.architectures[0];
  const stepIndex = Math.min(playgroundState.stepIndex, architecture.steps.length - 1);
  return { module, scenario, architecture, stepIndex, step: architecture.steps[stepIndex] };
}

function createNode(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text != null) node.textContent = options.text;
  if (options.htmlFor) node.htmlFor = options.htmlFor;
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
  const { module, scenario, architecture, stepIndex } = activeContext();
  const params = new URLSearchParams(window.location.search);
  params.set("module", module.id);
  params.set("scenario", scenario.id);
  params.set("architecture", architecture.id);
  params.set("step", String(stepIndex));
  window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
}

function setPlaygroundState(next) {
  Object.assign(playgroundState, next);
  updatePlaygroundUrl();
  renderPlayground();
}

function observableFactsFor(architecture) {
  return [
    ["步驟數", `${architecture.steps.length}`],
    ["入口類型", architecture.facts.entryType],
    ["第一個承諾點", architecture.facts.firstCommitment],
    ["預覽前是否需要帳號", architecture.facts.accountBeforePreview],
    ["回覆前是否需要加入", architecture.facts.joinBeforeReply],
    ["加入前是否看得見公私邊界", architecture.facts.boundaryVisible],
    ["討論結構", architecture.facts.discussionStructure],
    ["是否立即暴露完整訊息流", architecture.facts.fullStreamExposed],
    ["治理接觸點", architecture.facts.moderation]
  ];
}

function comparisonFactsFor(architecture) {
  return [
    ["步驟", `${architecture.steps.length}`],
    ["第一承諾", architecture.facts.firstCommitment],
    ["直接進訊息流", architecture.facts.fullStreamExposed],
    ["討論結構", architecture.facts.discussionStructure]
  ];
}

function renderPlayground() {
  const root = document.getElementById("interaction-root");
  const { module, scenario, architecture, stepIndex, step } = activeContext();
  root.replaceChildren(
    createNode("div", { className: "ip-shell" }, [
      renderSelector(module, scenario, architecture),
      createNode("section", { className: "ip-main-grid" }, [
        createNode("div", { className: "ip-phone-wrap" }, [
          createNode("div", { className: "ip-phone-stage" }, [
            renderPhone(step, architecture),
            renderStepNavigator(architecture, stepIndex)
          ])
        ]),
        renderEvidence(scenario, architecture)
      ])
    ])
  );
}

function renderSelector(module, scenario, architecture) {
  const moduleSelect = createNode("select", {
    value: module.id,
    onChange: (event) => {
      const nextModule = DATA.modules.find((item) => item.id === event.target.value) || DATA.modules[0];
      setPlaygroundState({
        moduleId: nextModule.id,
        scenarioId: nextModule.scenarios[0].id,
        architectureId: nextModule.scenarios[0].architectures[0].id,
        stepIndex: 0
      });
    }
  }, DATA.modules.map((item) => createNode("option", { value: item.id, text: item.name })));

  const scenarioSelect = createNode("select", {
    value: scenario.id,
    onChange: (event) => {
      const nextScenario = module.scenarios.find((item) => item.id === event.target.value) || module.scenarios[0];
      setPlaygroundState({
        scenarioId: nextScenario.id,
        architectureId: nextScenario.architectures[0].id,
        stepIndex: 0
      });
    }
  }, module.scenarios.map((item) => createNode("option", { value: item.id, text: item.name })));

  return createNode("section", { className: "ip-selector", ariaLabel: "流程選擇器" }, [
    createNode("div", { className: "ip-field" }, [
      createNode("label", { text: "模組" }),
      moduleSelect
    ]),
    createNode("div", { className: "ip-field" }, [
      createNode("label", { text: "使用者流程 / 場景" }),
      scenarioSelect
    ]),
    createNode("div", { className: "ip-field" }, [
      createNode("label", { text: "架構 / App" }),
      createNode("div", { className: "ip-architecture-tabs" },
        scenario.architectures.map((item) => createNode("button", {
          type: "button",
          className: `ip-tab ${item.id === architecture.id ? "active" : ""}`,
          text: item.name,
          onClick: () => setPlaygroundState({ architectureId: item.id, stepIndex: 0 })
        }))
      )
    ])
  ]);
}

function renderPhone(step, architecture) {
  const phone = step.phone || {};
  const platform = platformKey(architecture);
  return createNode("div", { className: `ip-phone ip-platform-${platform}`, ariaLabel: "互動手機 mockup" }, [
    createNode("div", { className: "ip-phone-screen" }, [
      createNode("div", { className: "ip-status" }, [
        createNode("span", { text: "9:41" }),
        createNode("span", { text: "● ▲" })
      ]),
      createNode("div", { className: "ip-mobile-header" }, [
        createNode("b", { text: phone.header || step.title }),
        createNode("span", { text: phone.subheader || step.description })
      ]),
      createNode("div", { className: "ip-mobile-body" }, [
        createNode("div", { className: `ip-mobile-scroll ip-accent-${architecture.color}` }, [
          phone.chips ? createNode("div", { className: "ip-chip-row" }, phone.chips.map((chip) => createNode("span", { className: "ip-chip", text: chip }))) : null,
          phone.cards ? phone.cards.map((item) => renderFeedCard(item)) : null,
          phone.list ? phone.list.map((item) => renderListRow(item)) : null,
          phone.topics ? phone.topics.map((item) => renderListRow(item, true)) : null,
          phone.messages ? createNode("div", { className: "ip-messages" }, phone.messages.map((item) => renderMessage(item))) : null,
          phone.menu ? createNode("div", { className: "ip-menu-grid" }, phone.menu.map((item) => renderMenuTile(item))) : null,
          phone.onboarding ? createNode("div", { className: "ip-onboarding-card" }, [
            createNode("b", { text: phone.onboarding[0] }),
            createNode("div", { className: "ip-chip-row" }, phone.onboarding.slice(1).map((item) => createNode("span", { className: "ip-chip", text: item })))
          ]) : null
        ])
      ]),
      createNode("div", { className: "ip-bottom-action" }, [
        createNode("button", {
          type: "button",
          className: "ip-primary",
          text: phone.bottom || step.action,
          onClick: goNextStep
        })
      ])
    ])
  ]);
}

function platformKey(architecture) {
  if (architecture.id.startsWith("telegram")) return "telegram";
  if (architecture.id.startsWith("whatsapp")) return "whatsapp";
  if (architecture.id.startsWith("discord")) return "discord";
  if (architecture.id.startsWith("line")) return "line";
  return "ours";
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
    createNode("span", { className: "ip-row-text" }, [
      createNode("b", { text: item.title }),
      createNode("span", { text: item.body })
    ]),
    createNode("span", { className: "ip-row-arrow", text: topic ? "›" : "" })
  ]);
}

function renderMessage(item) {
  return createNode("div", { className: `ip-message ${item.me ? "me" : ""}` }, [
    item.body,
    createNode("small", { text: item.me ? "你 · 已送達" : item.author })
  ]);
}

function renderMenuTile(item) {
  return createNode("button", { type: "button", className: "ip-menu-tile", onClick: goNextStep }, [
    createNode("b", { text: item.title }),
    createNode("span", { text: item.body })
  ]);
}

function goNextStep() {
  const { architecture } = activeContext();
  setPlaygroundState({ stepIndex: (playgroundState.stepIndex + 1) % architecture.steps.length });
}

function renderStepNavigator(architecture, activeIndex) {
  return createNode("aside", { className: "ip-step-panel" }, [
    createNode("div", { className: "ip-step-card" }, [
      createNode("span", { className: "eyebrow", text: architecture.tag }),
      createNode("h3", { text: architecture.steps[activeIndex].title }),
      createNode("p", { text: architecture.steps[activeIndex].description })
    ]),
    createNode("div", { className: "ip-progress", ariaLabel: "流程步驟" },
      architecture.steps.map((item, index) => createNode("button", {
        type: "button",
        className: index === activeIndex ? "active" : "",
        onClick: () => setPlaygroundState({ stepIndex: index })
      }, [
        createNode("span", { className: "ip-dot", text: `${index + 1}` }),
        createNode("span", { text: item.title })
      ]))
    )
  ]);
}

function renderPanelTitle(title, meta) {
  return createNode("div", { className: "ip-panel-title" }, [
    createNode("h2", { text: title }),
    createNode("span", { text: meta })
  ]);
}

function renderArchitectureComparison(scenario, activeArchitecture) {
  return createNode("div", { className: "ip-compare-grid" },
    scenario.architectures.map((item) => createNode("button", {
      type: "button",
      className: `ip-compare-card ${item.id === activeArchitecture.id ? "active" : ""}`,
      onClick: () => setPlaygroundState({ architectureId: item.id, stepIndex: 0 })
    }, [
      createNode("span", { className: `ip-compare-tag ip-accent-${item.color}`, text: item.tag }),
      createNode("b", { text: item.name }),
      createNode("span", { className: "ip-flow-line", text: item.facts.discussionStructure }),
      createNode("div", { className: "ip-mini-facts" },
        comparisonFactsFor(item).map(([label, value]) => createNode("span", { className: "ip-mini-fact" }, [
          createNode("small", { text: label }),
          createNode("strong", { text: value })
        ]))
      )
    ]))
  );
}

function renderJudgeStrip(architecture) {
  const items = [
    ["步驟", `${architecture.steps.length}`],
    ["第一承諾", architecture.facts.firstCommitment],
    ["加入後", architecture.facts.fullStreamExposed],
    ["分流深度", architecture.derived.onboardingDepth]
  ];
  return createNode("div", { className: "ip-judge-strip" },
    items.map(([label, value]) => createNode("div", { className: "ip-judge-item" }, [
      createNode("small", { text: label }),
      createNode("strong", { text: value })
    ]))
  );
}

function renderFlowVerdict(architecture) {
  const items = [
    ["入口摩擦", architecture.derived.onboardingDepth],
    ["訊息噪音", architecture.derived.messageDensity],
    ["承諾點", architecture.derived.conversion],
    ["路徑", architecture.derived.path]
  ];
  return createNode("div", { className: "ip-verdict-grid" },
    items.map(([label, value]) => createNode("article", { className: "ip-verdict" }, [
      createNode("span", { text: label }),
      createNode("strong", { text: value })
    ]))
  );
}

function renderTakeaways(architecture) {
  return createNode("div", { className: "ip-takeaway-list" },
    architecture.tradeoffs.slice(0, 3).map((item) => createNode("article", { className: `ip-takeaway ${item.type}` }, [
      createNode("span", { text: typeLabel(item.type) }),
      createNode("p", { text: item.claim })
    ]))
  );
}

function renderDecisionOptions(scenario) {
  return createNode("div", { className: "ip-option-list" },
    scenario.openDecision.options.map((item) => createNode("article", { className: "ip-option" }, [
      createNode("b", { text: item.name }),
      createNode("p", { text: item.tradeoff })
    ]))
  );
}

function typeLabel(type) {
  const labels = {
    Advantage: "優勢",
    Risk: "風險",
    Constraint: "限制",
    Unknown: "未知",
    Hypothesis: "假設"
  };
  return labels[type] || type;
}

function renderEvidence(scenario, architecture) {
  return createNode("aside", { className: "ip-evidence", ariaLabel: "決策證據面板" }, [
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("流程判斷", architecture.name),
      renderJudgeStrip(architecture)
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("順不順，看這裡", "不重複步驟"),
      renderFlowVerdict(architecture)
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("看完要判斷", scenario.openDecision.question),
      renderDecisionOptions(scenario)
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("對 V1 的啟示", "只留取捨"),
      renderTakeaways(architecture)
    ])
  ]);
}

function bootPlayground() {
  try {
    renderPlayground();
  } catch (error) {
    console.error("Reference Flow Comparison failed to render.", error);
    const root = document.getElementById("interaction-root");
    if (root) {
      root.replaceChildren(createNode("div", { className: "loading-shell" }, [
        createNode("p", { text: "Reference Flow Comparison 載入失敗，請查看瀏覽器 Console 的錯誤訊息。" })
      ]));
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootPlayground);
} else {
  bootPlayground();
}
