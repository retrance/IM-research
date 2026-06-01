(function () {
  const PRODUCTS = ["Telegram", "WhatsApp", "WeChat", "LINE", "Discord", "Signal"];
  const TBD = "待確認";

  const modules = [
    {
      id: "private-chat",
      index: "01",
      name: "Private Chat",
      summary: "比較一對一聊天的加密、同步、媒體、已讀、撤回與安全提示。",
      definition: "Private Chat 解決個人之間低摩擦、可信任、可持續的即時溝通問題。差異通常出現在加密模型、多裝置同步、身份暴露、訊息生命週期與濫用處理。",
      capabilities: [
        row("E2EE", ["Secret Chat 才是端對端加密；普通聊天為雲端同步", "個人訊息預設端對端加密", "待確認", "Letter Sealing 支援部分一對一情境", "一般私訊非預設端對端加密", "預設端對端加密"]),
        row("Secret / 普通聊天差異", ["普通聊天可多裝置雲端同步；Secret Chat 裝置限定", "無獨立 Secret Chat 分流", "待確認", "待確認", "無 Secret Chat 心智", "無普通 / Secret 分流"]),
        row("多裝置同步", ["支援多裝置雲端同步", "支援 Linked Devices", "支援多裝置能力待確認", "支援手機與桌面端", "支援跨裝置登入", "支援 linked devices，但隱私模型較保守"]),
        row("撤回 / 編輯", ["支援編輯與雙方刪除", "支援刪除；編輯能力依版本待確認", "支援撤回；編輯待確認", "支援撤回；編輯待確認", "支援編輯與刪除", "支援刪除；編輯待確認"]),
        row("已讀狀態", ["雙勾表示已讀", "雙藍勾，可關閉", "待確認", "顯示已讀", "私訊可見送達 / 讀取狀態有限", "讀取回條可控制"]),
        row("封鎖 / 檢舉", ["支援封鎖與檢舉", "支援封鎖與檢舉", "待確認", "支援封鎖與檢舉", "支援封鎖、檢舉與安全提示", "支援封鎖、檢舉垃圾訊息"])
      ],
      flows: {
        Telegram: ["搜尋 username、電話簿或 t.me 連結", "進入普通聊天或啟動 Secret Chat", "傳送文字、媒體、檔案或語音", "需要更高隱私時切到裝置限定 Secret Chat"],
        WhatsApp: ["以手機號、聯絡人或 wa.me 連結開啟聊天", "在同一對話中傳送文字、媒體、語音或檔案", "透過已讀、封鎖、檢舉與安全碼確認信任", "商業帳號在同一收件箱中被標示"],
        WeChat: ["以通訊錄、QR code 或搜尋加好友", "建立一對一聊天", "聊天內可傳送訊息、媒體、轉帳或小程序入口", "支付與服務能力依地區與帳號狀態而異"],
        LINE: ["以好友、LINE ID、QR code 或電話簿建立關係", "進入一對一聊天", "傳送貼圖、媒體、語音或位置", "官方帳號對話可接 Rich Menu 與 quick reply"],
        Discord: ["以好友、共同 server 或 username 建立私訊", "傳送訊息、檔案、語音或視訊", "可建立小型群組私訊", "濫用時封鎖或檢舉"],
        Signal: ["以電話號碼、username 或 QR / link 開啟聯絡", "通過 message request 後進入聊天", "所有聊天預設端對端加密", "用安全號碼、消失訊息與封鎖強化信任"]
      },
      limits: [
        row("檔案大小", ["普通檔案最高 2 GB；Premium 可能更高", "待確認", "待確認", "待確認", "免費檔案上傳上限 10 MB；Nitro / boost 依方案提高", "待確認"]),
        row("歷史訊息", ["普通聊天雲端保留；Secret Chat 裝置限定", "依備份與 linked devices 設定", "待確認", "待確認", "server / DM 歷史可搜尋，保留政策待確認", "端對端加密；備份與轉移限制較嚴"]),
        row("多裝置", ["支援多個手機、平板、桌面", "支援 Linked Devices", "待確認", "支援手機、桌面與平板情境", "支援多平台登入", "支援 linked devices"]),
        row("安全提示", ["Secret Chat 有加密 key 視覺確認", "安全碼變更提示", "待確認", "待確認", "陌生訊息與安全提示依場景", "安全號碼與 message request"])
      ],
      technical: [
        row("加密模型", ["MTProto；Secret Chat 端對端加密", "Signal Protocol 端對端加密", "待確認", "Letter Sealing，覆蓋範圍待確認", "傳輸加密，非 E2EE 預設 IM", "Signal Protocol"]),
        row("同步模型", ["雲端同步為核心", "端對端加密下 linked device 同步", "待確認", "服務端同步細節待確認", "服務端同步", "端對端加密，多裝置同步較受限制"]),
        row("第三方接入", ["Bot API 可進入使用者授權場景", "Business Platform 偏商業對話", "小程序 / 開放平台能力依地區", "Messaging API / LIFF 偏官方帳號", "Bot / Webhook / App 生態成熟", "第三方接入弱"]),
        row("權限模型", ["聊天、Bot、群組權限分開", "個人與 Business 帳號分層", "待確認", "個人、官方帳號、LINE Login 分層", "使用者、server、channel 權限分層", "個人隱私與聯絡請求優先"])
      ],
      takeaways: {
        Telegram: ["普通聊天與 Secret Chat 的分層值得研究", "username 與 t.me 入口降低交換聯絡方式成本"],
        WhatsApp: ["手機號心智與低學習成本強", "商業帳號標示能減少個人與商業混淆"],
        WeChat: ["聊天內接支付與服務入口的密度高", "QR code 對線下場景有效"],
        LINE: ["貼圖、官方帳號與 Rich Menu 讓私聊可承接服務", "熟人社交身份清楚"],
        Discord: ["私訊與 server 關係清楚分層", "濫用處理和安全提示值得拆解"],
        Signal: ["隱私預設強", "username 不等於公開社交身份的設計值得研究"]
      },
      risks: {
        Telegram: ["普通聊天不是預設端對端加密，隱私表述容易被誤解", "所有內容混在收件箱可能產生噪音"],
        WhatsApp: ["手機號依賴強，匿名或公開社群場景較弱", "商業能力相對保守"],
        WeChat: ["支付、服務與社交高度耦合，移植成本高", "地區與合規限制強"],
        LINE: ["官方帳號能力強，但一般聊天與商業服務容易分裂", "部分能力受市場限制"],
        Discord: ["桌面與社群導向重，手機端私聊不是唯一重心", "一般使用者學習成本較高"],
        Signal: ["隱私強，但社群、商業與平台能力弱", "成長入口較保守"]
      }
    },
    {
      id: "group-chat",
      index: "02",
      name: "Group Chat",
      summary: "比較建群、加入、角色權限、大群降噪、治理、自動化與歷史搜尋。",
      definition: "Group Chat 解決多人同步溝通與協作問題。當規模變大，群組會從聊天工具變成治理系統，必須處理加入規則、管理員權限、訊息降噪、反垃圾與歷史搜尋。",
      capabilities: [
        row("群人數上限", ["最高 200,000", "常見公開資料為 1,024；待官方確認", "待確認", "待確認", "server 人數上限與社群狀態相關；待確認", "最高 1,000"]),
        row("加入方式", ["邀請連結、搜尋公開群、加入審核", "邀請連結、QR、社群入口", "QR、邀請、好友拉入；待確認", "邀請、QR、OpenChat 搜尋", "邀請連結、探索、角色 onboarding", "邀請連結、QR、管理員核准"]),
        row("角色 / 權限", ["管理員細項權限", "管理員與社群管理", "群主 / 管理員；細項待確認", "管理員與 OpenChat 管理設定", "角色、頻道覆寫、權限階層", "管理員控制群資訊與發言權限"]),
        row("Topic / Thread", ["Topics 支援大群分題", "社群公告與群分流；thread 待確認", "待確認", "OpenChat 分題能力待確認", "Thread、Forum、Channel 分層成熟", "不以 topic / thread 為核心"]),
        row("公告 / 置頂", ["支援置頂", "支援公告與置頂", "待確認", "支援公告 / note 類能力待確認", "Announcement channel、pinned message", "支援群資訊與置頂能力待確認"]),
        row("自動治理", ["Bot 與反垃圾工具", "管理員工具，Bot 能力有限", "待確認", "官方帳號 API 不等於群 Bot", "AutoMod、Bot、Webhook", "自動治理弱"])
      ],
      flows: {
        Telegram: ["建立群組", "設定公開 username 或邀請連結", "配置管理員與成員權限", "大群啟用 topics、置頂、反垃圾或 Bot", "透過搜尋、mentions、hashtags 找歷史訊息"],
        WhatsApp: ["建立群組或放入 Community", "用聯絡人、邀請連結或 QR 加入", "管理員設定發言與加入審核", "成員在聊天內發言、回覆、搜尋", "噪音控制以 mute、mention 與社群分組為主"],
        WeChat: ["建立群聊或由好友拉入", "透過 QR code 或邀請加入", "群主 / 管理員維護成員與公告", "成員聊天、傳檔、紅包或服務入口", "大群治理細節待確認"],
        LINE: ["建立群組或 OpenChat", "用邀請、QR 或搜尋加入", "OpenChat 可用不同暱稱", "管理員設定加入條件與聊天室規則", "成員聊天、公告與搜尋能力待確認"],
        Discord: ["建立 server 與 channel", "用 invite link 或 discovery 加入", "onboarding 分配角色與可見頻道", "在文字、thread、forum、語音中分流", "AutoMod 與 Bot 協助治理"],
        Signal: ["建立新群組", "邀請成員或分享 group link / QR", "管理員設定群資訊、消失訊息與發言權限", "成員在端對端加密群聊中發言", "群組規模較小，治理工具輕量"]
      },
      limits: [
        row("最大群規模", ["200,000", "1,024 待官方確認", "待確認", "待確認", "待確認", "1,000"]),
        row("歷史訊息", ["可設定新成員是否看到既有歷史", "依聊天與備份狀態", "待確認", "待確認", "可搜尋與保留，政策依 server / 方案", "端對端加密，轉移與保留較保守"]),
        row("檔案", ["最高 2 GB；Premium 可能更高", "待確認", "待確認", "待確認", "免費 10 MB；Nitro / boost 提高", "待確認"]),
        row("降噪", ["mute、mention、reply、topics", "mute、mention、社群分組", "待確認", "待確認", "mute、role mention、channel、thread", "mute 與 mention 類能力"])
      ],
      technical: [
        row("群模型", ["大群 + topic + Bot", "群組 + Community", "熟人群聊 + 服務入口", "群組 + OpenChat", "server / category / channel / thread", "私密群組"]),
        row("加密", ["普通群非 Secret Chat", "群聊端對端加密", "待確認", "待確認", "非 E2EE 預設", "端對端加密"]),
        row("API / Bot", ["Bot API 強", "群內 Bot 能力有限；Business API 偏商業對話", "小程序 / 開放平台待確認", "Messaging API 不等於一般群 Bot", "Bot / Webhook 強", "弱"]),
        row("權限", ["管理員細項權限", "管理員設定", "待確認", "OpenChat 管理設定", "角色與頻道覆寫", "管理員控制"])
      ],
      takeaways: {
        Telegram: ["大群上限、topics 與 Bot 治理適合研究", "公開入口和歷史搜尋支援社群成長"],
        WhatsApp: ["低學習成本適合熟人與小型社群", "Community 可把多個群組收束"],
        WeChat: ["群聊內支付、紅包與小程序入口形成高頻互動", "QR code 加群適合線下導流"],
        LINE: ["OpenChat 的獨立暱稱降低陌生人參與壓力", "群組與官方帳號可服務不同關係"],
        Discord: ["角色、頻道、thread 與 AutoMod 是治理標竿", "forum channel 適合知識沉澱"],
        Signal: ["私密群組與管理員核准適合高信任場景", "群規模保守可降低治理負擔"]
      },
      risks: {
        Telegram: ["公開大群容易引入垃圾訊息", "Bot 權限若不透明會造成信任風險"],
        WhatsApp: ["大群治理與結構化討論能力較弱", "熟人心智不一定適合公開社群"],
        WeChat: ["很多能力與 WeChat 生態綁定，難直接移植", "公開資料不足處需再驗證"],
        LINE: ["OpenChat 地區性強", "群與官方帳號能力分散"],
        Discord: ["層級太重，不一定適合手機端優先", "server 心智對一般 IM 使用者較陌生"],
        Signal: ["規模與自動治理能力不適合大型公開群", "商業與社群增長能力弱"]
      }
    },
    {
      id: "channel",
      index: "03",
      name: "Channel",
      summary: "比較一對多廣播、公開 / 私密、留言、反應、頻道與討論群關係。",
      definition: "Channel 解決低噪音的一對多發布問題。它把內容分發從多人聊天中分離，並透過留言、反應、分享或綁定討論群承接互動。",
      capabilities: [
        row("一對多廣播", ["核心能力", "WhatsApp Channels", "公眾號 / 視頻號相關能力待確認", "官方帳號廣播", "Announcement channel", "無成熟公開頻道"]),
        row("公開 / 私密", ["公開或私密頻道", "頻道可探索；隱私細節待確認", "待確認", "官方帳號公開，好友關係另計", "server / channel 權限控制", "不以公開頻道為核心"]),
        row("訂閱者上限", ["不限訂閱者", "待確認", "待確認", "官方帳號上限待確認", "server / channel 限制待確認", "不適用"]),
        row("留言 / reactions", ["反應、投票、留言可接討論群", "反應、投票、轉發", "留言能力依公眾號 / 內容形態", "回覆、quick reply、Rich Menu", "thread、emoji reaction", "不適用"]),
        row("搜尋與外部分享", ["t.me 連結與公開搜尋", "可分享頻道與更新", "QR、搜尋、分享待確認", "LINE URL / 官方帳號入口", "邀請連結與 server discovery", "不適用"]),
        row("管理員權限", ["頻道 owner / admin", "admin 發布", "待確認", "官方帳號權限與後台", "角色與權限", "不適用"])
      ],
      flows: {
        Telegram: ["建立 Channel", "設定公開 username 或私密邀請", "Admin 發布內容", "使用者反應、投票或轉發", "留言接到綁定 discussion group"],
        WhatsApp: ["在 Updates 發現或追蹤 Channel", "Admin 發布文字、圖片、影片、貼圖或投票", "Follower 反應或轉發", "需要對話時回到私聊、群組或外部入口"],
        WeChat: ["使用者關注公眾號或進入內容入口", "帳號發布文章、服務通知或內容", "使用者閱讀、留言或進入小程序", "交易與服務依帳號能力而定"],
        LINE: ["使用者加入官方帳號", "官方帳號推送或廣播訊息", "Rich Menu / quick reply 分流操作", "需要深流程時進 LIFF 或外部頁"],
        Discord: ["建立 announcement channel", "Admin 發布公告", "其他 server 可 follow 接收更新", "討論以 thread、forum 或其他 channel 承接"],
        Signal: ["無成熟公開頻道流程", "可用群組或 broadcast 類替代方式待確認", "公開訂閱、留言與探索能力不足"]
      },
      limits: [
        row("訂閱者 / 成員", ["頻道不限訂閱者", "待確認", "待確認", "待確認", "依 server / 社群狀態待確認", "不適用"]),
        row("歷史保留", ["新訂閱者可看完整頻道歷史", "頻道歷史保留範圍待確認", "待確認", "官方帳號歷史與聊天紀錄分開", "依 server 設定與平台政策", "不適用"]),
        row("通知控制", ["mute、mentions、頻道通知", "Updates 與頻道通知", "待確認", "官方帳號封鎖 / 通知", "channel mute、role mention", "不適用"]),
        row("外部入口", ["t.me 公開連結", "分享連結", "QR / 搜尋 / 小程序入口", "QR / URL / LINE Official Account", "invite link / discovery", "不適用"])
      ],
      technical: [
        row("內容模型", ["Channel post + optional discussion", "Channel update", "公眾號文章 / 服務通知待確認", "官方帳號訊息物件", "Announcement message / thread", "不適用"]),
        row("互動模型", ["反應、投票、留言接 discussion group", "反應、投票、轉發", "留言 / 小程序入口待確認", "quick reply、postback、LIFF", "thread、reaction、forum", "不適用"]),
        row("API", ["Bot API 與 channel admin 能力", "Business / Channels API 待確認", "公眾號 / 小程序 API", "Messaging API", "Bot / Webhook", "弱"]),
        row("身份呈現", ["以頻道名稱發文", "以頻道 admin 發布；個資保護", "帳號身份", "官方帳號身份", "server / channel 身份", "個人身份"])
      ],
      takeaways: {
        Telegram: ["頻道與討論群分離清楚", "公開連結與完整歷史利於內容累積"],
        WhatsApp: ["低噪音 Updates 分區值得研究", "Follower 手機號不暴露有隱私價值"],
        WeChat: ["公眾號、小程序與支付可形成服務閉環", "內容入口與聊天入口可互相導流"],
        LINE: ["官方帳號加 Rich Menu 適合品牌服務", "廣播、窄播與 webhook 組合成熟"],
        Discord: ["公告、thread、forum 分工清楚", "Follow announcement channel 可跨 server 分發"],
        Signal: ["缺少公開頻道反而強化私密定位", "可作為保守隱私對照"]
      },
      risks: {
        Telegram: ["頻道、留言、群組、topics 全開會提高管理成本", "公開分發會帶來 spam 與內容治理壓力"],
        WhatsApp: ["頻道互動較保守，不適合高互動社群", "完整資料上限仍需確認"],
        WeChat: ["公眾號與小程序複雜度高", "地區與審核限制強"],
        LINE: ["官方帳號不是大型公共討論空間", "商業入口過多會干擾聊天"],
        Discord: ["追蹤公告前通常要理解 server 結構", "手機端資訊架構較重"],
        Signal: ["缺乏公開分發能力，不適合內容型成長", "商業與社群承接弱"]
      }
    },
    {
      id: "red-packet-points",
      index: "04",
      name: "Red Packet / Points",
      summary: "比較紅包、點數、激勵、帳本、活動與濫用風險。",
      definition: "Red Packet / Points 解決社交激勵、活動參與與輕量價值回饋問題。它不是單純支付功能，還牽涉帳本、身份、風控、活動規則與平台合規。",
      capabilities: [
        row("紅包", ["無原生紅包；可由 Bot / payment 類能力實作待確認", "缺乏原生紅包能力", "紅包為代表能力", "非紅包主軸", "無紅包；Nitro / Boost 是社群激勵", "無紅包"]),
        row("點數", ["Stars / Premium 生態與 bot payment 待確認", "缺乏明確點數能力", "微信支付與紅包帳本；積分待確認", "LINE Points", "Nitro、Server Boost、角色徽章激勵", "無"]),
        row("活動激勵", ["Bot 可做任務與抽獎，但需風控", "商業活動較保守", "紅包、優惠、小程序活動", "LINE Points、優惠券、官方帳號活動", "Boost、role、badge、活動 bot", "弱"]),
        row("帳本", ["待確認", "不適用", "與 Wallet / WeChat Pay 關聯", "LINE Points / Pay 依市場", "訂閱與 Boost 帳務", "不適用"]),
        row("風控", ["Bot 濫用與詐騙風險", "詐騙與轉帳濫用風險低於錢包型產品", "支付合規、洗錢、詐騙風險", "點數與支付合規依市場", "付費激勵與退款 / 濫用管理", "風險較低"])
      ],
      flows: {
        Telegram: ["使用者進入 Bot 或支援支付的互動", "Bot 建立激勵或付款流程", "使用者完成操作或付款", "平台與 Bot 權限、交易狀態需清楚呈現"],
        WhatsApp: ["多數場景缺乏紅包或點數流程", "商業互動以聊天、目錄、付款連結或外部支付為主", "活動激勵通常依賴外部系統"],
        WeChat: ["在私聊或群聊選擇紅包", "設定金額、份數與祝福語", "成員領取後進入錢包 / 帳本", "風控與支付限制由 WeChat Pay 生態承接"],
        LINE: ["使用者累積或消耗 LINE Points", "在活動、支付或官方帳號任務中取得回饋", "點數進入帳戶紀錄", "可與優惠、支付、官方帳號串接"],
        Discord: ["使用者訂閱 Nitro 或 Boost server", "server 解鎖檔案、音質、角色樣式等權益", "成員獲得 badge / role 類可見激勵", "退款、轉移與權益維護由訂閱系統承接"],
        Signal: ["無紅包或點數主流程", "可做捐款或支持平台的外部流程待確認", "不把金流與聊天深度結合"]
      },
      limits: [
        row("金額 / 點數限制", ["待確認", "不適用", "紅包金額與地區限制待官方確認", "依 LINE Points / Pay 市場規則", "依 Nitro / Boost 訂閱規則", "不適用"]),
        row("地區可用性", ["Payments / Stars 依地區與政策", "依 WhatsApp Pay 市場", "中國大陸與 WeChat Pay 規則高度相關", "LINE Points / Pay 依市場", "全球但付款方式依地區", "不適用"]),
        row("交易保留", ["Bot / payment 記錄待確認", "外部支付或商業平台紀錄", "錢包帳本", "點數 / 支付紀錄", "訂閱與 Boost 紀錄", "不適用"]),
        row("濫用限制", ["待確認", "待確認", "支付風控", "點數濫用與活動風控", "退款、刷 Boost、權益濫用", "不適用"])
      ],
      technical: [
        row("帳本模型", ["待確認", "外部或商業平台", "錢包帳本與紅包領取紀錄", "點數帳本與支付紀錄", "訂閱 / Boost 狀態", "無"]),
        row("支付接入", ["Bot / payment / Stars 能力待確認", "WhatsApp Pay / 外部支付依市場", "WeChat Pay", "LINE Pay 依市場", "平台訂閱與應用商店付款", "無"]),
        row("風控需求", ["Bot 權限、詐騙、退款", "詐騙與商業濫用", "KYC、AML、支付限額、活動濫用", "點數套利、退款、地區合規", "訂閱退款、權益濫用", "低"]),
        row("IM 耦合", ["可由 Bot 接入聊天", "低", "高", "中", "中", "低"])
      ],
      takeaways: {
        Telegram: ["Bot-based 激勵可快速實驗", "支付與互動可拆成可授權元件"],
        WhatsApp: ["保守策略可作為低金融風險對照", "商業激勵不一定要內建錢包"],
        WeChat: ["紅包把群互動、支付與社交儀式結合得很強", "帳本與風控是核心，不只是 UI"],
        LINE: ["Points 適合活動、品牌與支付回饋", "官方帳號可作為激勵分發入口"],
        Discord: ["Nitro / Boost 把付費變成社群可見權益", "徽章與角色是非現金激勵"],
        Signal: ["不做激勵有助維持隱私與簡潔", "可作為不耦合金融功能的對照"]
      },
      risks: {
        Telegram: ["Bot 實作分散，使用者信任難統一", "支付與活動濫用需要平台級風控"],
        WhatsApp: ["缺乏激勵能力，難承接活動型增長", "若外接支付，體驗會分裂"],
        WeChat: ["照搬紅包會引入重金融合規", "海外市場支付與身份限制高"],
        LINE: ["Points 與 Pay 依市場可用，難全球一致", "點數容易產生活動套利"],
        Discord: ["Boost 是社群訂閱激勵，不等同紅包或錢包", "對手機熟人 IM 可能過重"],
        Signal: ["缺乏激勵與商業轉化能力", "若加入金流會破壞原本定位"]
      }
    },
    {
      id: "wallet",
      index: "05",
      name: "Wallet",
      summary: "比較內建錢包、第三方支付、聊天內支付請求、交易通知與合規風險。",
      definition: "Wallet 解決聊天內價值交換、付款確認與交易狀態回流問題。它同時牽涉支付牌照、應用商店政策、退款、風控、地區可用性與是否需要獨立金融體驗。",
      capabilities: [
        row("內建錢包", ["待確認；部分支付 / Stars 能力", "WhatsApp Pay 依市場", "WeChat Pay / Wallet 強", "LINE Pay 依市場", "無通用錢包；平台訂閱付款", "無通用錢包"]),
        row("第三方支付", ["Bot / payment provider 待確認", "可外接付款連結 / Business flow", "WeChat Pay 生態內", "LINE Pay / 外部連結", "應用商店、Stripe 類接入依平台政策", "低"]),
        row("聊天內支付請求", ["Bot 可生成付款互動待確認", "依 WhatsApp Pay / Business 市場", "聊天內轉帳、紅包、收款", "依 LINE Pay / 官方帳號能力", "不以聊天內支付為核心", "無"]),
        row("支付通知", ["待確認", "待確認", "交易狀態可回到服務通知", "依 LINE Pay / 官方帳號", "訂閱狀態與系統通知", "無"]),
        row("退款 / 交易狀態", ["依 Bot / provider", "依支付 provider", "WeChat Pay / 商戶系統", "LINE Pay / 商戶系統", "訂閱 / 應用商店規則", "無"]),
        row("是否需拆分", ["金融能力宜保持清楚授權", "多數市場不作主錢包", "IM 與錢包深度整合", "依市場分離", "付款屬平台訂閱，不是 IM wallet", "不適用"])
      ],
      flows: {
        Telegram: ["使用者在 Bot / Mini App 或付款訊息中觸發", "確認商品、金額與 provider", "完成付款", "Bot 或服務回傳狀態"],
        WhatsApp: ["使用者與商家對話", "商家提供付款連結或市場可用支付請求", "使用者完成付款", "交易狀態回到商家或外部系統"],
        WeChat: ["聊天內轉帳、紅包或進入小程序", "確認金額與身份", "WeChat Pay 完成支付", "交易通知與帳本回流"],
        LINE: ["從官方帳號、LINE Pay 或外部頁進入支付", "確認付款方式與金額", "完成後進入交易紀錄", "官方帳號可承接後續服務"],
        Discord: ["購買 Nitro、Boost 或應用內權益", "確認訂閱與付款方式", "權益套用到帳號或 server", "訂閱狀態在設定中管理"],
        Signal: ["無聊天內錢包主流程", "若有捐款或支持，多為獨立流程", "聊天與交易不深度耦合"]
      },
      limits: [
        row("地區限制", ["待確認", "WhatsApp Pay 依市場", "WeChat Pay 地區與身份限制強", "LINE Pay 依市場", "付款方式依地區", "不適用"]),
        row("合規", ["支付 provider 與 Bot 風控", "支付與商業合規", "金融監管、KYC、AML", "金融監管與點數規則", "應用商店與訂閱規則", "不適用"]),
        row("App Store 風險", ["數位商品與外部付款需確認", "需確認", "中國生態規則不同", "需確認", "訂閱與數位權益受平台規則", "低"]),
        row("退款", ["依 provider", "依 provider", "商戶 / WeChat Pay", "商戶 / LINE Pay", "平台訂閱退款", "不適用"])
      ],
      technical: [
        row("金流架構", ["Bot / provider / Stars 待確認", "Business / payment provider", "WeChat Pay + 商戶號 + Wallet", "LINE Pay + 官方帳號 / 商戶", "平台訂閱系統", "無"]),
        row("交易狀態", ["需由 provider 回傳", "需由 provider 或商家回傳", "服務通知 / 帳本", "支付紀錄 / 官方帳號", "訂閱狀態", "無"]),
        row("身份要求", ["待確認", "市場與支付方式決定", "實名 / 銀行卡 / 地區限制", "市場規則", "帳號與付款方式", "無"]),
        row("聊天耦合", ["中", "中低", "高", "中", "低", "低"])
      ],
      takeaways: {
        Telegram: ["以 Bot / Mini App 接支付可避免所有錢包能力都進主 IM", "授權與 provider 顯示很重要"],
        WhatsApp: ["商業聊天可先接付款連結，不必主 App 變錢包", "保守金融範圍降低合規壓力"],
        WeChat: ["錢包、紅包、轉帳、服務通知形成完整交易閉環", "交易狀態回聊天能降低不確定感"],
        LINE: ["支付、點數與官方帳號可形成品牌服務鏈路", "市場差異需要被清楚標示"],
        Discord: ["訂閱權益與社群身份綁定清楚", "不把付款偽裝成一般聊天動作"],
        Signal: ["錢包缺席讓隱私與信任心智簡單", "可作為金融功能拆分對照"]
      },
      risks: {
        Telegram: ["支付 provider 分散會帶來信任與客服問題", "Bot 詐騙風險高"],
        WhatsApp: ["支付能力不一致，全球體驗難統一", "外部付款可能斷開交易狀態"],
        WeChat: ["深度整合需要金融牌照、風控與客服能力", "不適合直接複製到多市場"],
        LINE: ["LINE Pay / Points 可用性不一致", "優惠、點數、支付混合後成本高"],
        Discord: ["訂閱權益不是通用錢包", "不適合直接承接聊天內交易"],
        Signal: ["沒有支付能力，商業轉化弱", "若加入 wallet 會稀釋隱私定位"]
      }
    },
    {
      id: "identity",
      index: "06",
      name: "Identity",
      summary: "比較手機號、username、QR code、個人 / 商業身份、多身份與實名。",
      definition: "Identity 解決使用者如何被找到、被信任、被區分與被授權的問題。IM 身份不只是登入，還影響好友關係、公開入口、商業可信度、隱私暴露與多場景角色。",
      capabilities: [
        row("手機號登入", ["需要手機號註冊", "手機號核心", "手機號 / WeChat ID；細節待確認", "手機號核心", "email / phone；phone 非唯一心智", "需要手機號"]),
        row("Username", ["公開 username 強", "username 能力待確認；手機號心智強", "WeChat ID", "LINE ID", "username / display name", "username 用於不暴露電話號碼"]),
        row("QR code", ["個人、群、Bot、頻道可用連結 / QR", "個人、群、商業 QR", "QR code 強", "個人、官方帳號、群組 QR", "邀請連結 / QR 待確認", "username link / QR"]),
        row("個人 / 商業身份", ["個人、頻道、Bot、Business 能力待確認", "個人與 Business 帳號清楚", "個人、公眾號、小程序、商戶", "個人與官方帳號", "個人、server profile、Bot、App", "個人身份為主"]),
        row("多身份 / 子身份", ["username、頻道身份、Bot 身份", "商業身份另分", "待確認", "官方帳號與個人分離", "server-specific profile", "弱"]),
        row("實名認證", ["待確認", "支付或商業視市場", "支付 / 金融強相關", "支付與官方帳號依市場", "付款與部分 server 需求", "無公開社交實名主軸"])
      ],
      flows: {
        Telegram: ["以手機註冊", "設定 username 與隱私", "用 t.me / 搜尋 / QR 被找到", "加入群、頻道或與 Bot 互動時展示對應身份"],
        WhatsApp: ["以手機號註冊", "同步聯絡人或使用連結 / QR", "聊天中顯示個人或 Business profile", "安全碼與封鎖檢舉補強信任"],
        WeChat: ["註冊並建立 WeChat ID / 手機關聯", "用 QR、搜尋或好友推薦建立關係", "個人、群、公眾號、小程序、商戶身份分層", "支付與部分服務牽涉實名"],
        LINE: ["以手機號建立帳號", "用 LINE ID、QR 或電話簿加好友", "個人與官方帳號分離", "官方帳號可接 LINE Login / LIFF"],
        Discord: ["建立帳號與 username", "加入 server 後可設定 server-specific profile", "角色與權限決定可見內容", "Bot / App 以獨立身份出現"],
        Signal: ["以手機號註冊", "可用 username 發起聯絡而不暴露電話", "接收 message request", "用安全號碼確認身份"]
      },
      limits: [
        row("公開搜尋", ["username / t.me 強", "手機號 / 商業入口為主", "WeChat ID / QR；限制待確認", "LINE ID / 官方帳號搜尋", "server discovery / username", "username 可分享，但非社交搜尋主軸"]),
        row("隱私控制", ["電話號碼可隱藏", "已讀、頭像、狀態等隱私設定", "待確認", "待確認", "server 隱私與封鎖", "電話號碼隱私與 message request"]),
        row("多身份", ["頻道 / Bot / username", "個人 / Business", "個人 / 公眾號 / 小程序 / 商戶", "個人 / 官方帳號", "server-specific profile", "弱"]),
        row("身份驗證", ["待確認", "商業驗證依 Meta 規則", "支付實名 / 商戶驗證", "官方帳號 / Pay 驗證依市場", "email / phone / 付款 / server 驗證", "安全號碼"])
      ],
      technical: [
        row("身份 key", ["phone + user id + username", "phone number + business profile", "WeChat ID / OpenID / UnionID 待確認", "LINE user ID / LINE ID / Official Account", "user id + username + guild profile", "phone + username + safety number"]),
        row("公開入口", ["t.me link", "wa.me / QR", "QR / 小程序 / 公眾號", "LINE URL / QR / LIFF", "invite / discovery", "username link / QR"]),
        row("商業身份", ["Business 能力待確認", "WhatsApp Business", "公眾號 / 小程序 / 商戶", "LINE Official Account", "server / app / bot", "無"]),
        row("權限承接", ["聊天 / 群 / 頻道 / Bot", "聊天 / Business / Community", "生態內多身份", "官方帳號 / LIFF scope", "server role / channel permission", "隱私與群組管理"])
      ],
      takeaways: {
        Telegram: ["username 與電話號碼解耦值得研究", "t.me 作為通用入口清楚"],
        WhatsApp: ["手機號登入降低早期關係成本", "Business profile 提供商業可信度"],
        WeChat: ["個人、公眾號、小程序與商戶身份分層完整", "QR code 是高頻身份交換工具"],
        LINE: ["個人與官方帳號分離清楚", "LINE ID / QR / Login 組合成熟"],
        Discord: ["server-specific profile 支援多社群身份", "角色權限與身份緊密連動"],
        Signal: ["username 只用於建立聯絡，不變成公開社交身份", "電話號碼隱私控制值得研究"]
      },
      risks: {
        Telegram: ["公開 username 會帶來騷擾與冒名風險", "頻道、Bot、個人身份容易混雜"],
        WhatsApp: ["手機號暴露與地域號碼依賴高", "商業與個人共用收件箱需降噪"],
        WeChat: ["身份體系與生態綁定太深", "實名與支付限制會提高門檻"],
        LINE: ["官方帳號與個人身份分離可能增加切換成本", "區域差異明顯"],
        Discord: ["多身份與角色模型對一般 IM 過重", "陌生人信任不完全靠身份解決"],
        Signal: ["商業身份與公開發現能力弱", "強隱私讓增長入口受限"]
      }
    },
    {
      id: "discovery",
      index: "07",
      name: "Discovery",
      summary: "比較搜尋人、群、頻道、推薦、外部連結、QR、公開頁與 spam 風險。",
      definition: "Discovery 解決使用者如何找到人、群、頻道、服務或公開內容的問題。探索能力越強，越需要隱私、加入審核、來源追蹤與反垃圾訊息機制。",
      capabilities: [
        row("搜尋人", ["username / phone", "手機聯絡人 / phone / business", "WeChat ID / 手機 / QR 待確認", "LINE ID / 電話簿 / QR", "username / server mutual", "username / phone"]),
        row("搜尋群", ["public group", "Community / group discovery 弱", "待確認", "OpenChat 搜尋", "server discovery", "弱"]),
        row("搜尋頻道", ["public channel", "Channels directory", "公眾號 / 內容搜尋待確認", "官方帳號搜尋", "server / announcement 間接", "無"]),
        row("推薦機制", ["待確認", "Channels / business discoverability 待確認", "內容 / 小程序 / 附近能力待確認", "OpenChat / 官方帳號推薦依市場", "Server Discovery", "低推薦"]),
        row("外部連結", ["t.me", "wa.me / invite", "QR / 小程序碼 / 公眾號連結", "LINE URL scheme / LIFF", "invite link", "username link"]),
        row("隱私與 spam", ["公開入口需強風控", "手機號與邀請濫用風險", "待確認", "OpenChat 與官方帳號 spam 風險", "公開 server spam 與 bot 風險", "message request 降低騷擾"])
      ],
      flows: {
        Telegram: ["搜尋 username、群或頻道", "打開 t.me 連結或邀請", "查看公開頁與歷史內容", "加入後依權限互動"],
        WhatsApp: ["從聯絡人、QR、wa.me 或邀請連結進入", "加入群、Community 或商業聊天", "頻道在 Updates / directory 中追蹤", "隱私仍以手機號與個人設定為核心"],
        WeChat: ["透過 QR、搜尋、附近或分享入口找到人 / 服務", "進入個人、群、公眾號或小程序", "依身份與地區規則加入或使用", "服務與支付能力在生態內承接"],
        LINE: ["用 LINE ID、QR、電話簿或官方帳號搜尋", "進入 OpenChat、官方帳號或群組", "官方帳號可用 Rich Menu 分流", "OpenChat 可用不同暱稱參與"],
        Discord: ["搜尋或接收 server invite", "進入 server discovery 或外部社群連結", "onboarding 後看到頻道", "依角色參與 thread、forum、語音"],
        Signal: ["用電話號碼或 username link 發起聯絡", "對方收到 message request", "接受後才開始聊天", "缺乏公開群 / 頻道探索"]
      },
      limits: [
        row("公開頁", ["群、頻道、Bot 可有公開連結", "商業 profile / channel / group invite", "公眾號 / 小程序頁待確認", "官方帳號 / LIFF / OpenChat", "server invite / discovery page", "弱"]),
        row("加入審核", ["join request", "群 / Community 管理員審核", "待確認", "OpenChat 可密碼或管理員核准", "onboarding / role gate", "message request / group approval"]),
        row("推薦透明度", ["待確認", "待確認", "待確認", "待確認", "server discovery 規則待確認", "不適用"]),
        row("反垃圾", ["公開入口需 Bot 與限制", "邀請與商業訊息限制", "待確認", "官方帳號與 OpenChat 規則", "AutoMod、rate limit、report", "message request、封鎖、檢舉"])
      ],
      technical: [
        row("入口物件", ["username、t.me、invite link", "wa.me、group invite、QR", "QR、小程序碼、公眾號", "LINE URL、QR、LIFF", "invite、server discovery", "username link、QR"]),
        row("來源追蹤", ["待確認", "Business / ads 可追蹤待確認", "待確認", "官方帳號 / LIFF 可追蹤", "invite source / analytics 待確認", "弱"]),
        row("權限承接", ["加入審核與群權限", "管理員審核與 Community", "待確認", "OpenChat 規則 / 官方帳號", "role / channel permission", "message request"]),
        row("推薦風控", ["公開搜尋 spam", "商業濫發", "待確認", "OpenChat / 官方帳號 spam", "server raid / bot spam", "低"])
      ],
      takeaways: {
        Telegram: ["公開 username、群、頻道與 Bot 的入口一致", "t.me 連結利於外部分享"],
        WhatsApp: ["wa.me 與 QR 讓商業聊天入口直接", "熟人聯絡人心智清楚"],
        WeChat: ["QR code、搜尋、小程序入口覆蓋線上線下", "服務發現與支付能力連接緊密"],
        LINE: ["OpenChat、官方帳號、LIFF 適合分層入口", "QR 與 LINE ID 交換成本低"],
        Discord: ["Server Discovery 與 onboarding 能承接大型社群", "角色 gate 可降低錯誤曝光"],
        Signal: ["message request 保護使用者不被公開探索打擾", "username link 隱私友善"]
      },
      risks: {
        Telegram: ["公開搜尋帶來 spam 與冒名", "探索能力強會加重治理"],
        WhatsApp: ["手機號入口容易暴露隱私", "公共探索能力較弱"],
        WeChat: ["生態入口複雜且地區依賴高", "外部可驗證資料不足需再補"],
        LINE: ["OpenChat 與官方帳號不是同一套心智", "推薦與地區能力不一致"],
        Discord: ["server onboarding 對手機端偏重", "大型公開社群容易被攻擊"],
        Signal: ["探索能力弱，不適合公開社群成長", "過度保守會限制商業入口"]
      }
    },
    {
      id: "notification",
      index: "08",
      name: "Notification",
      summary: "比較私聊、群、頻道通知、mute、mention only、關鍵字、多裝置與大群降噪。",
      definition: "Notification 解決訊息回訪與噪音控制問題。IM 通知不是單一開關，而是根據私聊、群組、頻道、商業訊息、mentions、裝置與免打擾狀態分層。",
      capabilities: [
        row("私聊通知", ["預設通知，可細項設定", "預設通知，可 mute", "待確認", "預設通知，可 mute", "DM 通知可設定", "預設通知，可控制"]),
        row("群通知", ["mute、mentions、smart notifications", "mute、mention only 類能力", "待確認", "mute / mention 待確認", "server / channel 層級設定", "mute / mention"]),
        row("頻道通知", ["頻道可 mute", "Channels 在 Updates 中控制", "公眾號 / 服務通知待確認", "官方帳號通知 / 封鎖", "announcement channel / server notification", "不適用"]),
        row("mention only", ["支援 mentions 與 reply 通知", "支援 @ 與回覆通知", "待確認", "待確認", "強", "支援 mention 類能力"]),
        row("keyword notification", ["待確認", "待確認", "待確認", "待確認", "待確認", "待確認"]),
        row("notification folder", ["資料夾可分流聊天", "Updates / Chats 分區", "待確認", "聊天與其他 tab 分離", "server / channel 結構分流", "不強調"])
      ],
      flows: {
        Telegram: ["收到私聊、群或頻道訊息", "使用者可 mute、只看 mentions 或放入資料夾", "大群透過 topics、reply、mentions 降噪", "需要時搜尋歷史訊息"],
        WhatsApp: ["Chats 收到私聊或群組通知", "Updates 分離 Status / Channels", "使用者 mute 群或關閉已讀等設定", "重要訊息透過 mention / reply 回流"],
        WeChat: ["聊天、群、服務通知或公眾號內容進入不同入口", "使用者設定免打擾或置頂", "支付與服務通知依生態規則回流", "細節待確認"],
        LINE: ["聊天與官方帳號通知進入 LINE", "使用者可 mute、封鎖或調整通知", "官方帳號以訊息與 Rich Menu 分流", "OpenChat 通知規則待確認"],
        Discord: ["server、channel、thread、DM 分層通知", "使用者設定 all / mentions / nothing", "role mention、mute、Do Not Disturb 控制噪音", "大型 server 依 channel 與 thread 降噪"],
        Signal: ["私聊與群組通知遵循隱私設定", "使用者可 mute 或調整訊息預覽", "message request 減少陌生通知", "不以頻道通知為核心"]
      },
      limits: [
        row("控制粒度", ["聊天、群、頻道、資料夾", "聊天、群、頻道分區", "待確認", "聊天、官方帳號、OpenChat 待確認", "server、channel、thread、role", "聊天 / 群層級"]),
        row("多裝置推送", ["多裝置同步通知", "Linked Devices 支援", "待確認", "手機 / 桌面待確認", "多裝置", "linked devices"]),
        row("大群降噪", ["mute、mentions、topics", "mute、mentions、Community", "待確認", "OpenChat 規則待確認", "channel、thread、role、AutoMod", "群規模較小"]),
        row("免打擾", ["支援", "支援", "待確認", "支援", "Do Not Disturb", "支援"])
      ],
      technical: [
        row("通知分類", ["chat type + folder + mention", "Chats / Updates / Communities", "待確認", "chat / official account / OpenChat", "server / channel / thread / role", "chat / group / request"]),
        row("推送同步", ["雲端同步", "E2EE linked devices", "待確認", "待確認", "服務端狀態", "E2EE 裝置狀態"]),
        row("降噪機制", ["mute、reply、mention、topics", "mute、mention、分區", "待確認", "mute、封鎖、官方帳號控制", "role mention、channel mute、thread subscription", "message request、mute"]),
        row("商業訊息控制", ["Bot / channel mute", "Business 帳號與模板限制", "公眾號 / 服務通知待確認", "官方帳號封鎖與 messaging API 規則", "server 通知設定", "不適用"])
      ],
      takeaways: {
        Telegram: ["聊天資料夾與 mute 對高密度收件箱有價值", "mentions、topics、reply 幫助大群降噪"],
        WhatsApp: ["Chats / Updates 分離能降低頻道噪音", "熟人通知心智簡單"],
        WeChat: ["服務通知與聊天通知的分流值得研究", "支付 / 服務狀態可形成回訪"],
        LINE: ["官方帳號通知與封鎖控制適合商業服務", "Rich Menu 可減少重複推播"],
        Discord: ["server / channel / thread / role 粒度最完整", "mention only 是大型社群關鍵"],
        Signal: ["message request 避免陌生人直接打擾", "隱私預覽控制清楚"]
      },
      risks: {
        Telegram: ["同一收件箱承接太多類型會噪音過高", "資料夾需要使用者主動整理"],
        WhatsApp: ["群組多時仍容易吵", "商業通知能力較保守"],
        WeChat: ["入口多會造成通知心智複雜", "公開細節需再驗證"],
        LINE: ["官方帳號過度推播會被封鎖", "OpenChat 與一般群通知規則需分清楚"],
        Discord: ["通知設定太細，初學者難理解", "桌面社群邏輯不一定適合一般手機 IM"],
        Signal: ["通知模型簡潔但商業觸達能力弱", "過度保守不利內容回訪"]
      }
    }
  ];

  function row(label, values) {
    return PRODUCTS.reduce((acc, product, index) => {
      acc[product] = values[index] || TBD;
      return acc;
    }, { label });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTable(target, rows, firstLabel) {
    target.innerHTML = `
      <thead>
        <tr>
          <th>${firstLabel}</th>
          ${PRODUCTS.map((product) => `<th>${product}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows.map((item) => `
          <tr>
            <td>${escapeHtml(item.label)}</td>
            ${PRODUCTS.map((product) => `<td>${escapeHtml(item[product] || TBD)}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    `;
  }

  function renderList(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderOrderedList(items) {
    return `<ol>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`;
  }

  function getProductValues(rows, product, limit = 3) {
    return rows
      .map((item) => ({ label: item.label, value: item[product] || TBD }))
      .filter((item) => item.value && item.value !== "不適用" && item.value !== "無")
      .slice(0, limit);
  }

  function getUnknowns(module, product) {
    return [...module.capabilities, ...module.limits, ...module.technical]
      .filter((item) => String(item[product] || "").includes(TBD))
      .map((item) => item.label)
      .filter((label, index, labels) => labels.indexOf(label) === index)
      .slice(0, 4);
  }

  function renderProductComparison(module) {
    return PRODUCTS.map((product) => {
      const capabilityItems = getProductValues(module.capabilities, product, 3);
      const limitItems = getProductValues(module.limits, product, 2);
      const techItems = getProductValues(module.technical, product, 2);
      const unknowns = getUnknowns(module, product);

      return `
        <article class="benchmark-product-card">
          <div class="benchmark-product-head">
            <h3>${product}</h3>
            <span>${module.name}</span>
          </div>
          <div class="benchmark-product-section">
            <h4>核心做法</h4>
            ${renderOrderedList((module.flows[product] || []).slice(0, 3))}
          </div>
          <div class="benchmark-product-section">
            <h4>能力 / 技術線索</h4>
            <ul>
              ${capabilityItems.map((item) => `<li><b>${escapeHtml(item.label)}：</b>${escapeHtml(item.value)}</li>`).join("")}
              ${limitItems.map((item) => `<li><b>${escapeHtml(item.label)}：</b>${escapeHtml(item.value)}</li>`).join("")}
              ${techItems.map((item) => `<li><b>${escapeHtml(item.label)}：</b>${escapeHtml(item.value)}</li>`).join("")}
            </ul>
          </div>
          <div class="benchmark-product-section">
            <h4>值得借鑑</h4>
            ${renderList((module.takeaways[product] || []).slice(0, 2))}
          </div>
          <div class="benchmark-product-section is-risk">
            <h4>風險 / 不適合處</h4>
            ${renderList((module.risks[product] || []).slice(0, 2))}
          </div>
          <div class="benchmark-product-section">
            <h4>待確認</h4>
            ${unknowns.length ? `<ul class="benchmark-unknown-list">${unknowns.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>目前無主要待確認項。</p>"}
          </div>
          <div class="benchmark-snapshot-card">[${product} screenshot placeholder]</div>
        </article>
      `;
    }).join("");
  }

  function renderModule(module) {
    document.querySelectorAll(".benchmark-module-card").forEach((card) => {
      const isActive = card.dataset.moduleId === module.id;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });

    document.getElementById("moduleKicker").textContent = `${module.index} / ${module.name}`;
    document.getElementById("moduleTitle").textContent = module.name;
    document.getElementById("moduleDefinition").textContent = module.definition;

    renderTable(document.getElementById("capabilityTable"), module.capabilities, "能力項目");
    renderTable(document.getElementById("limitsTable"), module.limits, "限制項目");
    renderTable(document.getElementById("technicalTable"), module.technical, "技術項目");
    document.getElementById("productComparisonGrid").innerHTML = renderProductComparison(module);

    document.getElementById("flowCards").innerHTML = PRODUCTS.map((product) => `
      <article class="benchmark-flow-card">
        <strong>${product}</strong>
        <ol>${module.flows[product].map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </article>
    `).join("");
  }

  function init() {
    const moduleGrid = document.getElementById("benchmarkModuleGrid");
    if (!moduleGrid) return;

    moduleGrid.innerHTML = modules.map((module) => `
      <button class="benchmark-module-card" type="button" data-module-id="${module.id}" aria-pressed="false">
        <span>${module.index}</span>
        <h3>${module.name}</h3>
        <p>${escapeHtml(module.summary)}</p>
      </button>
    `).join("");

    moduleGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".benchmark-module-card");
      if (!button) return;
      const module = modules.find((item) => item.id === button.dataset.moduleId);
      if (!module) return;
      renderModule(module);
      document.getElementById("module-detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    renderModule(modules[0]);
  }

  init();
})();
