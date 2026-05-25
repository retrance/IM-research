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
      id: "channel-content",
      name: "頻道內容",
      summary: "一對多內容承接外部流量，並決定使用者如何從閱讀進入討論。",
      scenarios: [
        {
          id: "public-to-discussion",
          name: "公開內容到討論閉環",
          intent: "這條流程檢驗使用者是否能先低壓力預覽內容，再清楚知道何時從公開頻道進入多人討論，避免一進來就被大型群聊噪音淹沒。",
          openDecision: {
            question: "頻道內容應該用哪一種方式承接討論？",
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
                step("wa-2", "單向頻道內容", "頻道管理員發布文字、照片、影片、貼圖或投票，追蹤者以反應與轉發回饋。", "做出反應", {
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
                    tile("最新更新", "查看頻道內容"),
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
      id: "group-topics",
      name: "群組與主題分區",
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
              id: "whatsapp-community",
              name: "WhatsApp Communities",
              tag: "公告分軌",
              color: "green",
              steps: [
                step("wac-1", "社群首頁", "社群由公告群與多個成員群組組成。", "查看公告", {
                  header: "社群",
                  subheader: "公告 + 群組",
                  list: [
                    row("公告", "管理員發布", "📢"),
                    row("General", "一般討論", "群"),
                    row("活動群", "本週活動", "📅")
                  ],
                  bottom: "打開公告"
                }),
                step("wac-2", "公告群組", "公告面用於重要更新，成員回覆被折疊並且通知靜音。", "查看回覆", {
                  header: "公告",
                  subheader: "社群",
                  cards: [
                    card("活動提醒", "週六 19:30 集合。", "16 則回覆已折疊"),
                    card("新規則", "請勿大量轉發外鏈。", "已置頂")
                  ],
                  bottom: "打開回覆"
                }),
                step("wac-3", "群組討論", "真正多人討論發生在群組內。", "重新播放", {
                  header: "活動群",
                  subheader: "成員討論",
                  messages: [
                    msg("主持人", "活動報名到今晚截止。"),
                    msg("你", "我會參加。", true),
                    msg("Mina", "我也加入。")
                  ],
                  bottom: "返回社群"
                })
              ],
              facts: facts({
                entryType: "社群邀請 / 群組邀請",
                firstCommitment: "加入社群或指定群組",
                accountBeforePreview: "是，需要 WhatsApp 身份",
                joinBeforeReply: "是",
                boundaryVisible: "是，公告群與討論群分開",
                discussionStructure: "社群 → 公告群組 → 成員群組",
                fullStreamExposed: "部分：公告低噪音，群組是訊息流",
                moderation: "社群管理員、群組管理員、公告回覆折疊",
                notificationRisk: "低到中：公告清楚，群組仍可能吵"
              }),
              tradeoffs: [
                trade("Advantage", "公告與成員討論分軌，能保留低噪音公告面。", `${SOURCES.learn}：wa_10；${SOURCES.whatsappCommunities}`, "Meta 說明公告回覆被分組並最小化。"),
                trade("Advantage", "活動功能把群組協調變成可回應的事件，而不只是聊天訊息。", SOURCES.whatsappCommunities, "Meta 說明成員可回應活動並收到提醒。"),
                trade("Risk", "討論被分散在多個群組，對跨主題搜尋與長期沉澱較弱。", `${SOURCES.learn}：WhatsApp 的三個天花板`, "學習材料把 WhatsApp 定位為熟人 IM 延伸。"),
                trade("Constraint", "WhatsApp 社群是 App 內關係網絡，公開發現與匿名社群能力有限。", `${SOURCES.learn}；${SOURCES.compare}`, "不適合作為我們公域社群主路徑。")
              ],
              derived: derived("低到中", "低", "社群 → 公告 → 群組", "公告分軌")
            },
            {
              id: "our-topics",
              name: "我們的主題優先",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("ot-1", "從頻道進群", "使用者已理解頻道內容，再點擊進入對應討論群。", "進入群組", {
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
      id: "trust-governance",
      name: "信任與治理",
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
              id: "telegram-admin",
              name: "Telegram 邀請 / 管理權限",
              tag: "連結與權限",
              color: "blue",
              steps: [
                step("ta-1", "邀請連結", "群組可透過公開連結、私密邀請或加入請求控制入口。", "送出加入", {
                  header: "加入加密討論群",
                  subheader: "邀請連結",
                  chips: ["可撤銷", "可審批", "可追蹤"],
                  cards: [card("加入規則", "此群需要管理員核准。", "加入請求")],
                  bottom: "送出加入請求"
                }),
                step("ta-2", "等待核准", "需要核准的群組會把使用者停在加入請求狀態，直到管理員處理。", "等待核准", {
                  header: "加入請求已送出",
                  subheader: "等待管理員核准",
                  cards: [
                    card("群組規則", "管理員核准後才能進入群組並發言。", "待處理")
                  ],
                  bottom: "模擬核准"
                }),
                step("ta-3", "進入群組", "核准後使用者進入群組；後續治理由管理員權限與 Bot 處理。", "重新播放", {
                  header: "加密討論群",
                  subheader: "已加入",
                  messages: [
                    msg("系統", "你已加入群組。"),
                    msg("管理員", "請先閱讀置頂規則。")
                  ],
                  bottom: "返回邀請"
                })
              ],
              facts: facts({
                entryType: "公開連結 / 邀請連結 / 加入請求",
                firstCommitment: "送出加入請求或加入群組",
                accountBeforePreview: "視公開程度而定",
                joinBeforeReply: "是",
                boundaryVisible: "中：入口可控，但一般使用者不一定理解所有權限",
                discussionStructure: "邀請 → 加入請求 → 核准後進群",
                fullStreamExposed: "取決於群組設定",
                moderation: "邀請生命週期、管理員權限、Bot、最近操作",
                notificationRisk: "中：大型群組需依 Topic / mute 控制"
              }),
              tradeoffs: [
                trade("Advantage", "邀請連結生命週期可治理，是公開社群入口風控的核心。", SOURCES.safety, "平台安全治理報告將邀請連結定義為可追蹤的權杖型入口控制。"),
                trade("Advantage", "細粒度管理員權限可以避免只有管理員 / 普通成員兩級。", `${SOURCES.learn}：tg_15`, "學習材料要求 M0 預留權限表。"),
                trade("Risk", "規則與處置透明度比 Discord 弱，誤傷時較難解釋。", SOURCES.safety, "安全治理報告已標註 Telegram 閾值透明度較低。"),
                trade("Constraint", "需要 Bot 或管理員日常維護，否則大群容易被垃圾訊息污染。", `${SOURCES.compare}：群組 / 社群治理`, "大群開放入口本身帶來風險。")
              ],
              derived: derived("中", "中", "邀請 → 加入請求 → 進群", "連結門檻")
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
      id: "discovery",
      name: "搜尋與發現",
      summary: "公開頻道、公開群組、Topic、標籤與外部連結共同形成公域入口，但也帶來來源追蹤與風控問題。",
      scenarios: [
        {
          id: "external-discovery",
          name: "外部發現到社群入口",
          intent: "這條流程比較使用者從外部內容、站內搜尋或目錄進入公開頻道 / 群組時，能否先理解內容價值與加入後會遇到什麼互動表面。",
          openDecision: {
            question: "公開入口要先導向頻道、群組，還是發現目錄？",
            options: [
              {
                name: "先導向頻道",
                description: "讓使用者先看內容與更新，再進討論。",
                tradeoff: "低壓力，但討論 CTA 要很清楚。",
                evidence: `${SOURCES.architecture}；${SOURCES.channelLoop}`
              },
              {
                name: "先導向群組",
                description: "高意圖使用者直接進入討論。",
                tradeoff: "轉化快，但更容易遇到噪音與治理問題。",
                evidence: `${SOURCES.compare}：群組 / 社群治理`
              },
              {
                name: "先導向目錄 / 搜尋",
                description: "讓使用者比較多個頻道或群組。",
                tradeoff: "選擇清楚，但第一步更重。",
                evidence: `${SOURCES.learn}：dc_12；${SOURCES.whatsappChannels}`
              }
            ]
          },
          architectures: [
            {
              id: "telegram-link-search",
              name: "Telegram username / link",
              tag: "直接入口",
              color: "blue",
              steps: [
                step("td-1", "公開連結或搜尋", "使用者從 t.me 連結、public username 或 Telegram 搜尋進入公開目標。", "開啟目標", {
                  header: "搜尋 / 公開連結",
                  subheader: "market",
                  chips: ["t.me", "public username", "搜尋"],
                  list: [
                    row("Market Watch", "頻道", "頻"),
                    row("Market Talk", "公開群組", "群"),
                    row("Price Bot", "Bot", "Bot")
                  ],
                  bottom: "開啟 Market Watch"
                }),
                step("td-2", "目標頁預覽", "公開頻道或公開群組可先顯示名稱、內容摘要與加入狀態。", "追蹤", {
                  header: "Market Watch",
                  subheader: "頻道",
                  cards: [card("最新內容", "外部入口直接落到內容面。", "追蹤")],
                  bottom: "追蹤頻道"
                }),
                step("td-3", "追蹤或加入", "使用者對頻道是追蹤；對群組則是加入或送出加入請求。", "重新播放", {
                  header: "Market Watch",
                  subheader: "已追蹤",
                  cards: [card("通知設定", "頻道更新進入 Telegram 內的頻道關係。", "可調整")],
                  bottom: "返回入口"
                })
              ],
              facts: facts({
                entryType: "t.me link / public username / 搜尋",
                firstCommitment: "追蹤頻道或加入群組",
                accountBeforePreview: "公開頁可先預覽",
                joinBeforeReply: "是",
                boundaryVisible: "中：入口目標可能是人、群、頻道或 Bot",
                discussionStructure: "搜尋 / 連結 → 頻道 / 群組 / Bot → 追蹤或加入",
                fullStreamExposed: "視目標而定",
                moderation: "公開 username、邀請連結、群組管理、垃圾訊息檢舉",
                notificationRisk: "中：直接入口容易把人導進高噪音空間"
              }),
              tradeoffs: [
                trade("Advantage", "public username 與 t.me link 讓公開頻道與群組可被外部導流。", `${SOURCES.telegramChannels}；${SOURCES.telegramTopics}`, "官方文件說公開頻道可被搜尋並有公開連結。"),
                trade("Risk", "公開入口同時提高垃圾訊息、釣魚與錯誤加入的風險。", SOURCES.safety, "平台安全治理報告將邀請連結列為核心攻擊面。"),
                trade("Constraint", "入口可能指向人、群、頻道或 Bot，需要清楚標示目標類型。", `${SOURCES.compare}：外部入口 / 邀請 / 發現`, "不能把邀請好友與分享群組混成同一動作。")
              ],
              derived: derived("中", "低", "外部連結 / 搜尋 → 頻道 / 群組", "公開連結")
            },
            {
              id: "whatsapp-directory",
              name: "WhatsApp 頻道目錄",
              tag: "目錄追蹤",
              color: "green",
              steps: [
                step("wd-1", "Updates 找頻道", "使用者在 Updates 中查看頻道目錄，按國家、新、活躍或熱門探索。", "搜尋頻道", {
                  header: "尋找頻道",
                  subheader: "Updates",
                  chips: ["目錄", "熱門", "國家"],
                  list: [
                    row("運動", "熱門頻道", "🏁"),
                    row("新聞", "本地更新", "新"),
                    row("創作者", "新頻道", "創")
                  ],
                  bottom: "搜尋 F1"
                }),
                step("wd-2", "頻道檔案", "使用者看到 Logo、名稱、追蹤數與最新內容後追蹤。", "重新播放", {
                  header: "F1 官方頻道",
                  subheader: "671 萬位追蹤者",
                  cards: [card("賽程更新", "最新賽事與車隊資訊。", "可反應")],
                  bottom: "追蹤"
                })
              ],
              facts: facts({
                entryType: "Updates 目錄 / 頻道轉發連結",
                firstCommitment: "追蹤頻道",
                accountBeforePreview: "通常是",
                joinBeforeReply: "頻道不可完整回覆",
                boundaryVisible: "是，頻道與聊天分開",
                discussionStructure: "目錄 → 頻道檔案 → 追蹤",
                fullStreamExposed: "否",
                moderation: "頻道管理、目錄政策、轉發連結",
                notificationRisk: "低：頻道在 Updates 中"
              }),
              tradeoffs: [
                trade("Advantage", "目錄可按國家與熱門程度幫助使用者找頻道。", SOURCES.whatsappChannels, "Meta 官方說明 Enhanced Directory。"),
                trade("Advantage", "轉發更新會帶回頻道連結，形成低成本再分發。", SOURCES.whatsappChannels, "Meta 官方列出 Forwarding 功能。"),
                trade("Risk", "目錄與追蹤無法自然形成多人社群，需要另設討論 CTA。", `${SOURCES.learn}：wa_06`, "學習材料指出 WhatsApp 頻道無評論 / 回覆。")
              ],
              derived: derived("低", "低", "目錄 → 頻道檔案 → 追蹤", "頻道目錄")
            },
            {
              id: "our-public-entry",
              name: "我們的公開入口",
              tag: "收斂方案",
              color: "cyan",
              steps: [
                step("od-1", "公開落地頁", "每個公開頻道、公開群組和活動頁都有可分享 URL。", "預覽", {
                  header: "im.example/c/market",
                  subheader: "公開頻道頁",
                  chips: ["SEO", "QR", "外部連結"],
                  cards: [card("市場週報", "訪客可先看摘要與來源。", "公開")],
                  bottom: "預覽內容"
                }),
                step("od-2", "內容與討論雙 CTA", "同一頁提供關注頻道與進入討論，讓使用者選擇低壓力或高互動路徑。", "進入討論", {
                  header: "加密市場頻道",
                  subheader: "公開預覽",
                  cards: [
                    card("關注頻道", "只接收更新。", "低噪音"),
                    card("進入討論群", "到 Topics 裡提問。", "高互動")
                  ],
                  bottom: "進入討論群"
                }),
                step("od-3", "落到討論入口", "高意圖使用者進入討論群後先看到 Topics，而不是直接進入完整訊息流。", "重新播放", {
                  header: "加密討論社群",
                  subheader: "主題分區",
                  topics: [
                    row("公告", "規則與活動", "📢"),
                    row("新手問答", "從這裡開始提問", "💬"),
                    row("行情討論", "高頻討論區", "📈")
                  ],
                  bottom: "返回落地頁"
                })
              ],
              facts: facts({
                entryType: "公開 URL / 搜尋 / QR / 合作網站",
                firstCommitment: "關注頻道或加入討論群",
                accountBeforePreview: "否",
                joinBeforeReply: "是",
                boundaryVisible: "是，頻道與討論 CTA 並列",
                discussionStructure: "公開頁 → 頻道 / 群組 → Topics",
                fullStreamExposed: "否，先預覽摘要與公開內容",
                moderation: "來源追蹤、入口風險檢查、公開索引規則",
                notificationRisk: "中：需要入口後通知預設"
              }),
              tradeoffs: [
                trade("Advantage", "公開頻道頁能承接外部內容流量，並讓訪客先預覽再選擇關注或討論。", SOURCES.architecture, "產品架構頁明確要求公開頻道頁可預覽內容。"),
                trade("Advantage", "入口資料模型記錄目標類型、建立者、來源與撤銷狀態，利於歸因與風控。", `${SOURCES.compare}：外部入口 / 邀請 / 發現`, "功能比較頁已提出連結模型要求。"),
                trade("Constraint", "公開索引只能收公開內容，私聊不應進商業分析。", SOURCES.architecture, "產品架構頁列出隱私原則。"),
                trade("Hypothesis", "雙 CTA 可以同時服務低壓力閱讀者與高意圖討論者。", "@public_entry_ab_test", "需要觀察關注、入群與首次發言轉化。")
              ],
              derived: derived("中", "低", "公開 URL → 預覽 → 關注 / 加入", "雙 CTA")
            }
          ]
        }
      ]
    }
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

const playgroundState = {
  moduleId: DATA.modules[0].id,
  scenarioId: DATA.modules[0].scenarios[0].id,
  architectureId: DATA.modules[0].scenarios[0].architectures[0].id,
  stepIndex: 0
};

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

function setPlaygroundState(next) {
  Object.assign(playgroundState, next);
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
  const facts = observableFactsFor(architecture);
  return createNode("aside", { className: "ip-evidence", ariaLabel: "決策證據面板" }, [
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("意圖", "來自場景設定"),
      createNode("p", { className: "ip-panel-copy", text: scenario.intent })
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("可觀察流程事實", "由目前流程產生"),
      createNode("div", { className: "ip-fact-grid" }, facts.map(([label, value]) => createNode("div", { className: "ip-fact" }, [
        createNode("b", { text: label }),
        createNode("span", { text: value })
      ])))
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("有證據的取捨", "無證據者標為假設 / 未知"),
      architecture.tradeoffs.map((item) => createNode("article", { className: "ip-tradeoff" }, [
        createNode("span", { className: `ip-type ${item.type}`, text: typeLabel(item.type) }),
        createNode("p", { text: item.claim }),
        createNode("small", { text: `證據來源：${item.evidence}` }),
        createNode("small", { text: `備註：${item.notes}` })
      ]))
    ]),
    createNode("section", { className: "ip-panel-section" }, [
      renderPanelTitle("待決策問題", scenario.openDecision.question),
      createNode("div", { className: "ip-decision-grid" },
        scenario.openDecision.options.map((item) => createNode("article", { className: "ip-decision" }, [
          createNode("b", { text: item.name }),
          createNode("p", { text: item.description }),
          createNode("small", { text: `已知取捨：${item.tradeoff}` }),
          createNode("small", { text: `證據來源：${item.evidence}` })
        ]))
      )
    ])
  ]);
}

function bootPlayground() {
  try {
    renderPlayground();
  } catch (error) {
    console.error("互動 Demo failed to render.", error);
    const root = document.getElementById("interaction-root");
    if (root) {
      root.replaceChildren(createNode("div", { className: "loading-shell" }, [
        createNode("p", { text: "互動 Demo 載入失敗，請查看瀏覽器 Console 的錯誤訊息。" })
      ]));
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootPlayground);
} else {
  bootPlayground();
}
