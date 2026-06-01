(function () {
  // 對標 5 家競品；Signal 已移除，其隱私底線（訊息請求 / 端對端加密 / 安全號碼）併入私聊與身分的說明。
  const PRODUCTS = ["Telegram", "WhatsApp", "WeChat", "LINE", "Discord"];

  const LAYER_LABEL = { core: "核心", platform: "必做", extension: "擴展 · API", undecided: "待討論" };
  const LAYER_ORDER = { core: 0, platform: 1, extension: 2, undecided: 3 };

  const modules = [
    {
      id: "private-chat",
      index: "01",
      layer: "core",
      order: 1,
      name: "私聊",
      summary: "比較一對一聊天的預設隱私、身分怎麼曝光、訊息能不能撤回，以及加好友順不順。",
      definition: "私聊是 IM 的信任基礎。動現有產品前，先決定四件事：預設多隱私、別人怎麼加到你、已讀和撤回怎麼運作、商業帳號要不要跟個人聊天混在同一個收件匣。想更保守，可參考 Signal 那套：用「訊息請求」先擋陌生人、預設端對端加密（只有雙方看得到內容）、用安全號碼確認對方身分。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "雲端同步的一對一聊天，另外提供更隱私的「私密聊天」。",
            "用手機號就能開聊，主打好友間低門檻溝通。",
            "好友聊天同時塞進支付、檔案、小程序等入口。",
            "好友聊天加上貼圖，還有官方帳號當服務入口。",
            "私訊只是配角，主場是伺服器社群。"
          ])
        ]),
        section("User Flow", [
          flowRow("主要流程", {
            Telegram: ["用帳號名、電話簿或 t.me 連結找人", "進入一般聊天", "要更隱私時開「私密聊天」", "傳文字、媒體、檔案或語音"],
            WhatsApp: ["用手機號、聯絡人或 wa.me 連結開聊", "傳訊息、媒體、語音或檔案", "用已讀、封鎖、檢舉建立信任"],
            WeChat: ["用通訊錄、QR 或搜尋加好友", "進入一對一聊天", "聊天裡可傳訊、轉帳、開小程序"],
            LINE: ["用 LINE ID、QR 或電話簿加好友", "進入聊天", "貼圖、媒體、位置、語音是高頻互動", "官方帳號用圖文選單分流"],
            Discord: ["從好友、共同伺服器或帳號名開私訊", "傳訊息、檔案、語音或視訊", "用封鎖、檢舉、安全提示擋陌生人"]
          })
        ]),
        section("Security / Privacy", [
          row("加密預設", [
            "一般聊天存雲端，只有「私密聊天」才端對端加密。",
            "個人訊息和通話預設就端對端加密。",
            "不主打端對端加密。",
            "用自家加密機制保護主要聊天內容。",
            "一般私訊不是端對端加密。"
          ]),
          row("身分曝光", [
            "可設帳號名，不一定要露出電話。",
            "手機號就是你的身分，較難隱藏。",
            "好友、支付、服務身分綁得很深。",
            "用 LINE ID 或 QR 交換，不必給電話。",
            "可在不同社群用不同身分，但設定較複雜。"
          ])
        ]),
        section("Message Lifecycle", [
          row("已讀 / 送達", [
            "雙勾代表已讀。",
            "雙藍勾代表已讀，可以關掉。",
            "私聊通常不顯示已讀。",
            "會顯示已讀。",
            "送達 / 已讀提示比較少。"
          ]),
          row("撤回 / 編輯", [
            "可編輯，也可雙方都刪除。",
            "可刪除、可編輯訊息。",
            "可撤回；要改字通常重發或引用。",
            "可撤回；能不能改字看版本。",
            "可編輯、可刪除。"
          ])
        ]),
        section("Scale / Limits", [
          row("檔案與歷史", [
            "單檔最大 2 GB；一般聊天存雲端。",
            "單檔常見上限 2 GB；舊訊息看備份和連結裝置。",
            "聊天檔案、檔案傳輸助手、微雲各有不同限制。",
            "檔案受加密保護；換手機可能看不到舊訊息。",
            "免費單檔較小，付費才變大；歷史可搜尋。"
          ])
        ]),
        section("Technical Implementation", [
          row("加密技術", [
            "用 MTProto 協定；只有私密聊天端對端加密。",
            "用 Signal 協定加密。",
            "以伺服器同步加平台風控為主。",
            "自家訊息加密；部分媒體或附加功能不一定涵蓋。",
            "傳輸有加密，但一般私訊不是端對端加密。"
          ]),
          row("同步與權限", [
            "雲端同步；聊天、群組、機器人的權限各自獨立。",
            "端對端加密下用連結裝置同步；個人和商業帳號分開。",
            "伺服器同步加換機遷移並存；身分分成個人、群主、公眾號、小程序、商戶。",
            "手機、桌機、平板同步；個人和官方帳號分開。",
            "伺服器同步；使用者、伺服器、頻道權限分層。"
          ])
        ]),
        section("UI / Interaction", [
          row("收件匣呈現", [
            "私聊、群、頻道、機器人都在同一個聊天列表。",
            "個人和商業帳號在同一頁，但有標示區分。",
            "聊天裡的服務入口很密集。",
            "個人聊天和官方帳號並存，用選單分流。",
            "私訊不是主畫面，常和伺服器混在一起。"
          ])
        ]),
        researchRows("private-chat")
      ]
    },
    {
      id: "group-chat",
      index: "02",
      layer: "core",
      order: 2,
      name: "群聊",
      summary: "比較怎麼擴大群、權限管理、分主題討論、大群怎麼降低干擾，以及歷史怎麼留存。",
      definition: "群聊一開始是多人聊天，人一多就變成需要管理的系統。動現有產品時，別一步跳到 Discord 那種厚重的伺服器結構，先把建群、邀請、加入審核、權限、搜尋、降低干擾這些基本功補齊。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開大群，當成社群成長工具。",
            "好友群組，再用「社群」把多個群收攏。",
            "好友群聊，常搭配線下 QR、紅包、服務入口。",
            "一般群組和「社群聊天室」並存。",
            "大型社群空間，不只是聊天群。"
          ])
        ]),
        section("User Flow", [
          flowRow("主要流程", {
            Telegram: ["建群", "設公開帳號名或邀請連結", "設管理員和權限", "大群開分主題討論", "用機器人、慢速模式、驗證碼管理", "用搜尋、提及、標籤找舊訊息"],
            WhatsApp: ["建群", "放進社群或分享邀請連結", "管理員設加入審核和發言權限", "成員聊天、回覆、搜尋", "用靜音和提及減少干擾"],
            WeChat: ["建群或被好友拉進群", "用 QR 或邀請加入", "群主 / 管理員維護公告和群待辦", "成員聊天、傳檔、發紅包或進服務入口"],
            LINE: ["建一般群或社群聊天室", "用邀請、QR 或搜尋加入", "社群聊天室可用另一個暱稱", "管理員設加入條件和規則", "用公告、記事本、相簿留存內容"],
            Discord: ["建伺服器", "建分類、頻道、角色", "用邀請連結或探索頁加入", "新人進來引導分配角色", "用文字、討論串、論壇、語音分流", "用自動審核和機器人協助管理"]
          })
        ]),
        section("Scale / Limits", [
          row("人數上限", [
            "最多 20 萬人，適合公開大群。",
            "常見上限約 1,024 人。",
            "一般微信群常見 500 人。",
            "一般群常見 500 人；社群聊天室常見約 5,000 人。",
            "大型伺服器沒有單一硬上限，但角色數等結構限制很明確。"
          ]),
          row("歷史與檔案", [
            "新成員可看既有歷史；檔案上限高。",
            "看聊天和備份狀態而定。",
            "新成員能看到的歷史有限，檔案限制要分入口看。",
            "群組歷史和相簿 / 記事本分開存。",
            "歷史可搜尋，保留多久看伺服器和方案。"
          ])
        ]),
        section("Permission / Governance", [
          row("權限管理", [
            "管理員的細項權限很完整。",
            "管理員控制加入、發言和社群管理。",
            "群主 / 管理員，再加上平台風控。",
            "社群聊天室有加入條件和管理設定。",
            "角色階層、各頻道權限覆寫、自動審核都很完整。"
          ])
        ]),
        section("Topic / Thread / Structure", [
          row("結構化討論", [
            "用分主題討論幫大群分流。",
            "主要靠社群和多個群分流。",
            "通常靠開多個群或小程序處理。",
            "社群聊天室的分主題能力較弱。",
            "頻道、討論串、論壇、語音分層最完整。"
          ])
        ]),
        section("Technical Implementation", [
          row("資料模型", [
            "群組＋分主題討論＋管理員權限＋機器人事件。",
            "群組＋社群＋管理員設定。",
            "群聊＋群主 / 管理員＋QR＋平台風控。",
            "群組 / 社群聊天室＋獨立暱稱＋管理設定。",
            "伺服器 / 分類 / 頻道 / 討論串 / 角色。"
          ]),
          row("API 與機器人", [
            "機器人 API 很強，可做審核、驗證碼、慢速模式。",
            "群內機器人能力有限，商業 API 偏客服對話。",
            "小程序能接服務，但不是一般群機器人。",
            "有 Messaging API，但不等於一般群機器人。",
            "機器人、事件回呼、自動審核都很成熟。"
          ])
        ]),
        section("UI / Interaction", [
          row("怎麼減少干擾", [
            "分主題討論、置頂、提及、搜尋。",
            "靜音、提及、社群分組。",
            "免打擾、置頂、公告、群待辦。",
            "通知設定、公告、記事本。",
            "頻道、討論串、角色提及、通知層級。"
          ])
        ]),
        researchRows("group-chat")
      ]
    },
    {
      id: "channel",
      index: "03",
      layer: "core",
      order: 3,
      name: "頻道",
      summary: "比較一對多發布、訂閱者看得到什麼、討論怎麼回流，以及對外分享。",
      definition: "頻道把「安靜的發布」從聊天裡分出來。動現有產品時，重點不是做成內容平台，而是把發布、追蹤、回覆路徑、管理邊界講清楚。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開或私密的一對多廣播。",
            "在「更新」頁裡安靜地追蹤。",
            "公眾號 / 服務號承接內容和服務。",
            "官方帳號發品牌和服務訊息。",
            "伺服器內部的公告工具。"
          ])
        ]),
        section("Publishing Flow", [
          flowRow("發布流程", {
            Telegram: ["建頻道", "設公開帳號名或私密邀請", "管理員發內容", "讀者按反應、投票或轉發", "留言導到討論群"],
            WhatsApp: ["使用者在「更新」頁發現或追蹤頻道", "管理員發文字、圖片、影片、貼圖或投票", "追蹤者按反應或轉發", "要對話就回到私聊、群組或外部入口"],
            WeChat: ["使用者關注公眾號", "帳號發文章、服務通知或內容", "使用者閱讀、留言或進小程序", "交易和服務看帳號能力"],
            LINE: ["使用者加官方帳號", "官方帳號推播或廣播", "用圖文選單 / 快速回覆分流", "深入流程進 LIFF 或外部頁"],
            Discord: ["建公告頻道", "管理員發公告", "其他伺服器可追蹤接收更新", "討論用討論串、論壇或別的頻道"]
          })
        ]),
        section("Subscriber / Visibility", [
          row("可見性", [
            "可公開或私密；新訂閱者能看完整歷史。",
            "管理員可決定能不能被搜到；追蹤者電話不外露。",
            "公眾號公開關注，能力看帳號類型。",
            "官方帳號公開，好友數和訊息額度看方案。",
            "由伺服器和頻道權限決定。"
          ])
        ]),
        section("Discussion Loop", [
          row("讀者怎麼互動", [
            "反應、投票、留言導到討論群。",
            "反應、投票、轉發，互動較輕。",
            "留言、選單、小程序、客服訊息。",
            "回覆、快速回覆、圖文選單、LIFF。",
            "用討論串、論壇和反應承接。"
          ])
        ]),
        section("Scale / Limits", [
          row("規模限制", [
            "訂閱者數量沒有上限。",
            "官方沒給明確公開上限。",
            "粉絲可以很多，但受帳號類型和審核影響。",
            "好友數和訊息額度看方案。",
            "看伺服器狀態、權限和平台審核。"
          ])
        ]),
        section("Technical Implementation", [
          row("資料模型", [
            "頻道貼文＋管理員＋可選的討論群。",
            "頻道更新＋追蹤者隱私。",
            "公眾號文章 / 服務通知 / 小程序入口。",
            "官方帳號訊息＋圖文選單＋LIFF。",
            "公告訊息＋討論串 / 論壇。"
          ]),
          row("API 與事件回呼", [
            "有機器人 API 和頻道管理能力。",
            "頻道 API 開不開放，要看 Meta 版本。",
            "公眾號 / 小程序 API。",
            "Messaging API、點擊回傳、LIFF。",
            "機器人和事件回呼都成熟。"
          ])
        ]),
        section("UI / Interaction", [
          row("入口與通知", [
            "t.me 公開連結、搜尋、頻道通知。",
            "用「更新」頁分區，降低聊天干擾。",
            "QR、搜尋、文章分享、小程序碼。",
            "QR、網址、官方帳號入口。",
            "伺服器邀請、探索、追蹤公告。"
          ])
        ]),
        researchRows("channel")
      ]
    },
    {
      id: "red-packet-points",
      index: "04",
      layer: "extension",
      order: 9,
      name: "紅包 / 積分",
      summary: "API 化擴展：聊天只負責觸發和顯示，帳本、風控、支付都走外部服務。",
      definition: "決策已定：紅包 / 積分當作 API 化的擴展功能，不進核心聊天架構。聊天端只負責觸發和顯示，帳本、支付、防作弊、退款和合規全部交給外部服務，跟核心聊天分開。下表比較各家的激勵做法，當作外掛設計的參照。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "用機器人付款或 Stars 辦活動，沒有原生紅包。",
            "商業活動多半靠外部系統。",
            "聊天裡發紅包是高頻的社交儀式。",
            "以 LINE Points 和優惠回饋為主。",
            "Nitro / Boost 是社群的權益激勵。"
          ])
        ]),
        section("User Flow", [
          flowRow("激勵流程", {
            Telegram: ["使用者進到機器人或付款互動", "機器人建任務、抽獎或付款", "使用者完成操作", "交易或獎勵結果回到機器人"],
            WhatsApp: ["商家或活動提供外部激勵", "使用者從聊天進付款連結或活動頁", "結果回到商家或外部系統"],
            WeChat: ["在私聊或群聊選紅包", "設金額、份數和祝福語", "成員領取", "結果進錢包帳本"],
            LINE: ["使用者參加活動或付款", "拿到 LINE Points 或優惠", "點數進帳戶紀錄", "官方帳號接後續服務"],
            Discord: ["訂閱 Nitro 或加成伺服器", "伺服器解鎖權益", "成員拿到徽章或角色等看得見的激勵"]
          })
        ]),
        section("Incentive Model", [
          row("激勵型態", [
            "Stars、機器人任務、抽獎。",
            "外部活動和商業優惠。",
            "現金紅包、優惠、小程序活動。",
            "點數、優惠券、官方帳號活動。",
            "訂閱權益、徽章、角色。"
          ])
        ]),
        section("Ledger / Account", [
          row("帳本怎麼記", [
            "記在機器人 / Stars / 付款服務裡。",
            "記在外部活動或商業平台。",
            "記在微信支付錢包和紅包領取紀錄。",
            "記在 LINE Points / LINE Pay。",
            "記訂閱和加成狀態。"
          ])
        ]),
        section("Risk Control", [
          row("主要風險", [
            "機器人權限、詐騙、退款、刷任務。",
            "付款連結詐騙和商業濫用。",
            "支付合規、洗錢、詐騙、活動濫用。",
            "點數套利、退款、各地法規。",
            "退款、刷加成、權益濫用。"
          ])
        ]),
        section("Payment Dependency", [
          row("支付依賴", [
            "靠 Telegram Stars、機器人付款和付款服務。",
            "靠外部支付，或當地的 WhatsApp Pay。",
            "高度依賴微信支付。",
            "靠 LINE Pay / Points。",
            "靠應用商店和平台訂閱。"
          ])
        ]),
        section("UI / Interaction", [
          row("使用者感受", [
            "比較像機器人活動，不像原生聊天儀式。",
            "體驗容易跳出聊天。",
            "紅包是群裡很強的互動事件。",
            "點數比較像活動和會員回饋。",
            "權益在社群裡看得見。"
          ])
        ]),
        researchRows("red-packet-points")
      ]
    },
    {
      id: "wallet",
      index: "05",
      layer: "extension",
      order: 10,
      name: "錢包（API 化）",
      summary: "不自建主錢包：聊天只留商品卡（保留意圖和返回路徑），付款全走外部支付 API。",
      definition: "決策已定：不自建主錢包，整塊改成外部支付 API。聊天裡只留商品卡（保留意圖和返回路徑），付款、退款、履約、實名和合規全部交給外部金流服務，避免 IM 背上金融責任和 App Store 審核風險。下表比較各家怎麼把交易擋在聊天之外，當作 API 化邊界的參照。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "付款多半交給機器人、小程式或 Stars。",
            "各地能力不一，常用商業付款連結。",
            "錢包、轉帳、紅包、服務通知深度整合。",
            "LINE Pay 和官方帳號連動。",
            "只做平台訂閱和權益付款，不是通用錢包。"
          ])
        ]),
        section("Payment Flow", [
          flowRow("付款流程", {
            Telegram: ["在機器人 / 小程式 / 付款訊息觸發", "確認商品、金額和付款方式", "完成付款", "機器人或服務回傳結果"],
            WhatsApp: ["使用者和商家對話", "商家給付款連結或當地可用的付款請求", "使用者付款", "結果回到商家或外部系統"],
            WeChat: ["聊天內轉帳、紅包或小程序下單", "確認金額和身分", "用微信支付完成", "服務通知和帳本回傳"],
            LINE: ["從官方帳號、LINE Pay 或外部頁付款", "確認付款方式和金額", "完成後進交易紀錄", "官方帳號接後續服務"],
            Discord: ["買 Nitro、加成或應用權益", "確認訂閱和付款方式", "權益套用到帳號或伺服器", "在設定裡管理訂閱"]
          })
        ]),
        section("Wallet / Third-party Split", [
          row("自建主錢包 vs 外接", [
            "外接付款服務和 Stars，不是統一的主錢包。",
            "多半靠外部付款或當地支付。",
            "深度整合的主錢包。",
            "LINE Pay，依市場和官方帳號連接。",
            "只是平台訂閱，不是 IM 錢包。"
          ])
        ]),
        section("Transaction Status", [
          row("付款結果怎麼回來", [
            "要靠付款服務或機器人回傳。",
            "外部付款有時會接不回狀態。",
            "服務通知和帳本完整回傳。",
            "有支付紀錄，官方帳號接後續。",
            "訂閱狀態在帳單系統裡。"
          ])
        ]),
        section("Compliance / App Store Risk", [
          row("合規負擔", [
            "付款服務、數位商品、外部付款都要小心處理。",
            "支付和商業合規各地不同。",
            "金融監管、實名、反洗錢、客服責任都很重。",
            "金融監管、點數規則、各地差異。",
            "主要是應用商店和訂閱規則。"
          ])
        ]),
        section("Technical Implementation", [
          row("金流架構", [
            "機器人 / 付款服務 / Stars。",
            "商業帳號 / 付款服務。",
            "微信支付＋商戶號＋錢包帳本。",
            "LINE Pay＋官方帳號 / 商戶。",
            "平台訂閱系統。"
          ]),
          row("風控事件", [
            "付款失敗、退款、機器人詐騙、付款爭議。",
            "付款連結詐騙、商家爭議、狀態對不上。",
            "洗錢、盜刷、退款、實名、交易爭議。",
            "點數套利、退款、各地法規。",
            "訂閱退款、權益濫用。"
          ])
        ]),
        section("UI / Interaction", [
          row("聊天內呈現", [
            "付款通常以機器人訊息或小程式出現。",
            "付款常跳到連結或外部流程。",
            "轉帳、紅包、收款可以直接在聊天裡完成。",
            "官方帳號和 LINE Pay 串成服務鏈路。",
            "付款在設定 / 訂閱頁管理。"
          ])
        ]),
        researchRows("wallet")
      ]
    },
    {
      id: "identity",
      index: "06",
      layer: "core",
      order: 4,
      name: "身分",
      summary: "比較怎麼開帳號、公開身分、商業身分、隱私和驗證。",
      definition: "身分決定別人怎麼找到你、要不要信你、能授權你做什麼。動現有產品時，先分清個人、商業、群組管理員和公開入口，別一次把支付實名、客戶管理、多重身分系統全做滿。隱私入口可參考「訊息請求」：先過濾陌生人再進收件匣。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "手機註冊＋公開帳號名。",
            "手機號是核心身分，商業帳號另外標示。",
            "個人、公眾號、小程序、商戶身分分層。",
            "個人和官方帳號分開。",
            "帳號、各伺服器的個人檔案、角色並存。"
          ])
        ]),
        section("Account Creation", [
          row("怎麼開帳號", [
            "用手機號註冊，可設帳號名。",
            "用手機號註冊。",
            "手機號綁定 WeChat ID。",
            "手機號加 LINE ID。",
            "用 Email 或電話開帳號，顯示帳號名。"
          ])
        ]),
        section("Discovery Identity", [
          row("被找到方式", [
            "帳號名、t.me、QR。",
            "手機聯絡人、wa.me、QR、商業檔案。",
            "WeChat ID、手機、QR、公眾號搜尋。",
            "LINE ID、QR、電話簿、官方帳號搜尋。",
            "帳號名、共同伺服器、邀請連結。"
          ])
        ]),
        section("Personal / Business Identity", [
          row("個人 / 商業分層", [
            "個人、頻道、機器人、Telegram 商業帳號並存。",
            "個人和 WhatsApp 商業帳號清楚分開。",
            "個人、公眾號、小程序、商戶分層完整。",
            "個人和 LINE 官方帳號分開。",
            "個人、伺服器檔案、機器人、應用身分多層。"
          ])
        ]),
        section("Privacy / Verification", [
          row("隱私與驗證", [
            "電話可隱藏；但公開帳號名會帶來冒名和騷擾風險。",
            "手機號容易外露；商業驗證看 Meta 規則。",
            "支付實名和商戶驗證門檻高。",
            "加好友方式、封鎖、訊息加密、官方帳號驗證各自獨立。",
            "有角色和權限，不代表驗證過真實身分。"
          ])
        ]),
        section("Technical Implementation", [
          row("身分對應", [
            "電話＋使用者 ID＋帳號名＋公開連結。",
            "電話號碼＋商業檔案。",
            "WeChat ID / OpenID / UnionID / 商戶號。",
            "LINE 使用者 ID / LINE ID / 官方帳號 / LIFF 授權範圍。",
            "使用者 ID＋帳號名＋伺服器檔案＋角色。"
          ]),
          row("權限管理", [
            "聊天、群、頻道、機器人權限各自獨立。",
            "個人、商業帳號、社群管理分層。",
            "個人、群主、公眾號、小程序、商戶分層。",
            "個人、官方帳號、LIFF 授權分層。",
            "伺服器角色和頻道權限決定誰看得到什麼。"
          ])
        ]),
        section("UI / Interaction", [
          row("身分呈現", [
            "公開帳號名要和頻道 / 機器人身分區分開。",
            "商業帳號在聊天裡清楚標示。",
            "QR 是高頻的身分交換工具。",
            "官方帳號和個人好友分開呈現。",
            "同一個人在不同伺服器可用不同檔案。"
          ])
        ]),
        researchRows("identity")
      ]
    },
    {
      id: "discovery",
      index: "07",
      layer: "extension",
      order: 8,
      name: "發現",
      summary: "比較外部入口、搜尋推薦、公開頁、邀請，以及防垃圾風險。",
      definition: "發現能力越強，越需要加入審核、來源追蹤和防垃圾。動現有產品時，先做可控的入口，別一開始就做完整的推薦系統。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開帳號名、群、頻道、機器人入口一致。",
            "好友聯絡和商業聊天入口很直接。",
            "QR、搜尋、小程序、公眾號覆蓋服務發現。",
            "LINE ID、QR、官方帳號、社群聊天室分層。",
            "大型社群探索和加入引導。"
          ])
        ]),
        section("Entry Points", [
          row("主要入口", [
            "帳號名、t.me、邀請連結。",
            "聯絡人、wa.me、QR、群邀請。",
            "QR、小程序碼、公眾號、搜尋。",
            "LINE ID、QR、LINE 網址、LIFF。",
            "邀請連結、伺服器探索頁。"
          ])
        ]),
        section("Search / Recommendation", [
          row("搜尋 / 推薦", [
            "公開群和頻道很好搜，但推薦怎麼來不太透明。",
            "有頻道目錄和商業曝光，公開探索較保守。",
            "搜一搜、看一看、附近、小程序分發都有，但生態複雜。",
            "社群聊天室和官方帳號推薦看市場。",
            "伺服器探索可以承接大型社群。"
          ])
        ]),
        section("Public Page / Invite", [
          row("公開頁與邀請", [
            "群、頻道、機器人都能有公開頁和邀請連結。",
            "商業檔案、群邀請、頻道分享。",
            "公眾號 / 小程序 / 視頻號公開頁。",
            "官方帳號、LIFF、社群聊天室入口。",
            "伺服器邀請頁和加入引導。"
          ])
        ]),
        section("Spam / Privacy Risk", [
          row("主要風險", [
            "公開搜尋會帶來垃圾訊息和冒名。",
            "手機號和邀請連結容易洩漏隱私。",
            "入口多，群 QR 外流和陌生騷擾要風控。",
            "社群聊天室和官方帳號有濫發風險。",
            "公開伺服器容易被洗版或攻擊。"
          ])
        ]),
        section("Technical Implementation", [
          row("來源追蹤", [
            "機器人深連結 / 邀請連結可以追來源。",
            "商業帳號和廣告來源可以追。",
            "小程序碼、渠道 QR、公眾號帶來源參數。",
            "官方帳號和 LIFF 可以追來源。",
            "邀請來源和分析要靠伺服器工具。"
          ]),
          row("風控事件", [
            "公開搜尋的垃圾訊息、冒名、機器人濫用。",
            "邀請濫用、商業濫發、手機號騷擾。",
            "群 QR 外流、陌生人騷擾、公眾號濫發。",
            "社群聊天室垃圾訊息、官方帳號濫發。",
            "伺服器洗版攻擊、機器人垃圾訊息、繞過角色。"
          ])
        ]),
        section("UI / Interaction", [
          row("入口呈現", [
            "公開頁、搜尋結果、t.me 連結。",
            "QR、wa.me、商業檔案。",
            "QR、小程序碼、搜尋入口密集。",
            "好友、官方帳號、社群聊天室要分清楚。",
            "探索頁和加入引導較重。"
          ])
        ]),
        researchRows("discovery")
      ]
    },
    {
      id: "notification",
      index: "08",
      layer: "core",
      order: 5,
      name: "通知",
      summary: "比較通知怎麼分流、怎麼減少干擾、大群 / 頻道通知，以及多裝置同步。",
      definition: "通知不是單一開關。動現有產品時，先把私聊、群、頻道、商業訊息的通知路徑分清楚，別讓收件匣被更新、服務通知和公開內容淹沒。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "收件匣很密，靠資料夾、靜音、提及來減少干擾。",
            "聊天頁和「更新」頁分開。",
            "聊天、服務通知、公眾號、小程序入口很多。",
            "聊天和官方帳號通知分開控制。",
            "伺服器、頻道、討論串、角色多層通知。"
          ])
        ]),
        section("Notification Routing", [
          row("分流方式", [
            "依聊天類型＋資料夾＋提及分。",
            "聊天 / 更新頁 / 社群分區。",
            "聊天、服務通知、公眾號、小程序各走各的。",
            "聊天 / 官方帳號 / 社群聊天室分流。",
            "伺服器 / 頻道 / 討論串 / 角色分層。"
          ])
        ]),
        section("Noise Control", [
          row("怎麼減少干擾", [
            "靜音、只看提及、分主題討論、資料夾。",
            "靜音、提及、聊天和更新分區。",
            "免打擾、置頂、折疊、群公告 / 群待辦。",
            "靜音、封鎖、官方帳號控制。",
            "角色提及、頻道靜音、訂閱討論串。"
          ])
        ]),
        section("Large Group / 頻道 Notification", [
          row("大群 / 頻道", [
            "大群靠分主題討論、提及、機器人協助。",
            "群組可靜音；頻道在「更新」頁控制。",
            "公眾號和服務通知容易讓入口變複雜。",
            "官方帳號可封鎖或調通知。",
            "大型伺服器靠頻道、討論串、角色通知。"
          ])
        ]),
        section("Device Sync", [
          row("多裝置同步", [
            "通知雲端同步。",
            "端對端加密下用連結裝置同步。",
            "手機和桌機通知看登入狀態。",
            "手機和桌機通知看登入狀態。",
            "伺服器狀態多端同步。"
          ])
        ]),
        section("Technical Implementation", [
          row("通知資料模型", [
            "聊天類型＋資料夾＋提及狀態。",
            "聊天 / 更新 / 社群路由。",
            "訊息＋服務通知＋官方帳號事件。",
            "聊天＋官方帳號＋LIFF 事件。",
            "伺服器＋頻道＋討論串＋角色提及。"
          ]),
          row("控制事件", [
            "靜音、提及、資料夾、機器人 / 頻道通知。",
            "靜音、提及、商業模板額度。",
            "免打擾、置頂、取消關注公眾號、小程序訂閱訊息。",
            "封鎖官方帳號、Messaging API 規則。",
            "角色提及、頻道靜音、訂閱討論串。"
          ])
        ]),
        section("UI / Interaction", [
          row("使用者控制", [
            "適合提供資料夾和靜音，但別指望使用者全部自己整理。",
            "聊天 / 更新分區能降低頻道干擾。",
            "入口多時，別讓通知規則變得不透明。",
            "官方帳號通知一定要能封鎖。",
            "設定很細，但新手要花時間學。"
          ])
        ]),
        researchRows("notification")
      ]
    },
    {
      id: "open-platform",
      index: "09",
      layer: "platform",
      order: 6,
      name: "開放平台 / Bot / API",
      summary: "我方骨幹：發訊息的 API、事件回呼、互動元件和授權，擴展功能全靠它交付。",
      definition: "開放平台是我們的骨幹——紅包、錢包、通知等擴展功能都透過它以 API 交付。重點是先把發訊息的 API、事件回呼（webhook，外部事件主動通知你的伺服器）、互動元件和登入授權打好，讓核心聊天保持精簡，額外能力都用外掛方式接上來。下表比較各家開放平台的接入方式和能力。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "Bot API 成熟，有 Mini Apps、Stars 付款、inline 模式，最對開發者友善。",
            "Cloud / 商業 API、模板訊息、webhook，偏商業客服。",
            "公眾號＋小程序＋開放平台＋微信支付，生態最完整但封閉、要審核。",
            "Messaging API＋LIFF＋LINE Login＋圖文選單，商業整合強。",
            "Bot＋指令＋互動元件＋Webhook＋嵌入式應用，社群自動化最強。"
          ])
        ]),
        section("接入流程", [
          flowRow("接入流程", {
            Telegram: ["向 BotFather 建 Bot、拿 token", "設 webhook 或輪詢", "接收訊息 / 指令事件", "用 sendMessage、inline、Mini App 回應"],
            WhatsApp: ["在 Meta 申請 App 和商業號碼", "拿到權杖和 webhook", "接收訊息事件", "用模板 / 對話訊息回覆（受計費規則）"],
            WeChat: ["註冊並認證公眾號 / 小程序", "設伺服器位址和 token 驗簽", "接收訊息 / 事件推送", "用客服訊息、模板訊息、小程序回應"],
            LINE: ["建立 channel、拿 token", "設 webhook 網址", "接收訊息 / 回傳事件", "用回覆 / 推播、圖文選單、LIFF 回應"],
            Discord: ["在開發者後台建 App / Bot", "設授權範圍和互動端點", "接收指令 / 互動事件", "用訊息、元件、嵌入式應用回應"]
          })
        ]),
        section("能力面", [
          row("訊息與互動元件", [
            "文字 / 媒體、inline 鍵盤、inline 查詢、Mini App。",
            "文字、模板訊息、清單 / 按鈕（有限制）。",
            "客服 / 模板訊息、自訂選單、小程序頁面。",
            "回覆 / 推播、圖文選單、Flex 訊息、快速回覆。",
            "按鈕、選單、彈窗、指令、嵌入式應用。"
          ]),
          row("嵌入式應用 / 小程序", [
            "Mini Apps（網頁式）。",
            "沒有原生小程序。",
            "小程序生態最強。",
            "LIFF 網頁應用。",
            "嵌入式應用（Activities）。"
          ])
        ]),
        section("授權與權限", [
          row("授權模型", [
            "用 Bot token；要使用者授權靠深連結 / 登入元件。",
            "Meta 權杖＋商業號碼，需商業驗證。",
            "AppID / Secret、OAuth、UnionID 體系。",
            "channel token＋LINE Login 授權範圍。",
            "OAuth2 授權範圍＋Bot 權限設定。"
          ])
        ]),
        section("規模與審核", [
          row("速率與審核", [
            "速率限制寬鬆、審核少。",
            "對話 / 模板計費、商業審核嚴格。",
            "介面額度多但零碎、審核嚴格。",
            "推播訊息額度看方案。",
            "速率限制明確、大型 Bot 需驗證。"
          ])
        ]),
        section("技術實作", [
          row("事件模型", [
            "webhook 或輪詢（long polling）。",
            "webhook＋簽章驗證。",
            "伺服器推送＋token 驗簽＋訊息加解密。",
            "webhook＋簽章驗證。",
            "用 WebSocket 長連線＋互動 webhook。"
          ])
        ]),
        section("擴展交付", [
          row("擴展怎麼掛上來", [
            "紅包 / 付款走 Stars 或付款 API；通知走 Bot 推播。",
            "商業交易走模板 / 外部結帳連結。",
            "付款 / 紅包走微信支付 API；服務走小程序。",
            "付款走 LINE Pay API；服務走 LIFF / 官方帳號。",
            "權益走訂閱 / 角色 API；自動化走 Bot。"
          ])
        ]),
        researchRows("open-platform")
      ]
    },
    {
      id: "voice-video",
      index: "10",
      layer: "undecided",
      order: 7,
      name: "語音 / 視訊",
      summary: "比較一對一和群組通話的人數上限、加密、螢幕分享，以及背後的通話架構。",
      definition: "語音 / 視訊很常用但成本高，會帶入即時通話（RTC）技術和頻寬成本。它不像紅包、錢包那樣是掛在開放平台上的外掛式 API，而是要自建即時媒體能力，所以要不要做、什麼時候做、用什麼方式做，都還要跟團隊討論。下表先把競品做法整理起來當參考。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "一對一通話＋群組語音聊天，可擴到大型直播。",
            "個人和群組語音 / 視訊，全程端對端加密。",
            "個人和多人語音 / 視訊，走服務端。",
            "個人和群組通話、視訊特效，當地高頻。",
            "語音頻道是核心，低延遲、可分享螢幕＋直播。"
          ])
        ]),
        section("通話流程", [
          flowRow("通話流程", {
            Telegram: ["聊天內發起語音 / 視訊", "或在群組開語音聊天", "可邀成員加入", "可轉直播或分享螢幕"],
            WhatsApp: ["聊天或群組點通話", "加密接通", "可加人變群組通話", "可分享螢幕"],
            WeChat: ["聊天內發起語音 / 視訊", "或群組發起多人通話", "成員加入", "通話結束回聊天"],
            LINE: ["聊天 / 群組發起通話", "接通後可開視訊和特效", "群組成員加入", "可分享螢幕"],
            Discord: ["進語音頻道就接通", "可開視訊或直播分享", "成員自由進出", "Stage 頻道辦大型語音活動"]
          })
        ]),
        section("加密", [
          row("通話加密", [
            "一對一通話端對端加密；群組語音預設不是。",
            "個人和群組通話都端對端加密。",
            "傳輸加密、走服務端，不是端對端加密。",
            "通話有加密，但不是全部端對端。",
            "傳輸加密，不是端對端加密。"
          ])
        ]),
        section("人數上限", [
          row("通話人數", [
            "群組語音可達數千人收聽，視訊參與者較少。",
            "群組通話約 32 人。",
            "多人視訊常見上限約 9 人。",
            "群組通話可達數百人（視訊較少）。",
            "語音頻道數十人，Stage 可大量旁聽。"
          ])
        ]),
        section("技術實作", [
          row("通話架構", [
            "自建即時通話技術；多人通話走 SFU（伺服器轉發）。",
            "點對點或中繼傳輸，搭配 Signal 協定做端對端加密。",
            "通話走服務端的媒體伺服器。",
            "自建即時通話基礎設施。",
            "低延遲語音伺服器，多人走 SFU 轉發。"
          ])
        ]),
        section("介面與互動", [
          row("通話入口", [
            "聊天頂部，群組另有語音聊天列。",
            "聊天頂部通話鍵、通話分頁。",
            "聊天內加功能入口。",
            "聊天內通話鍵、特效面板。",
            "語音頻道常駐，隨時進出。"
          ])
        ]),
        researchRows("voice-video")
      ]
    }
  ];

  function section(title, rows) {
    const titleMap = {
      "User Flow": "使用流程",
      "Security / Privacy": "安全與隱私",
      "Message Lifecycle": "訊息生命週期",
      "Scale / Limits": "規模與限制",
      "Technical Implementation": "技術實作",
      "UI / Interaction": "介面與互動",
      "Permission / Governance": "權限與治理",
      "Topic / Thread / Structure": "分題、討論串與結構",
      "Publishing Flow": "發布流程",
      "Subscriber / Visibility": "訂閱者與可見性",
      "Discussion Loop": "討論回路",
      "Incentive Model": "激勵模型",
      "Ledger / Account": "帳本與帳戶",
      "Risk Control": "風險控制",
      "Payment Dependency": "支付依賴",
      "Payment Flow": "付款流程",
      "Wallet / Third-party Split": "錢包與第三方支付拆分",
      "Transaction Status": "交易狀態",
      "Compliance / App Store Risk": "合規與應用商店風險",
      "Account Creation": "帳號建立",
      "Discovery Identity": "可被找到的身份",
      "Personal / Business Identity": "個人與商業身份",
      "Privacy / Verification": "隱私與驗證",
      "Entry Points": "入口",
      "Search / Recommendation": "搜尋與推薦",
      "Public Page / Invite": "公開頁與邀請",
      "Spam / Privacy Risk": "垃圾訊息與隱私風險",
      "Notification Routing": "通知路由",
      "Noise Control": "降噪控制",
      "Large Group / 頻道 Notification": "大群與頻道通知",
      "Device Sync": "裝置同步"
    };
    return { title: titleMap[title] || title, rows };
  }

  function row(label, values, html = false) {
    return PRODUCTS.reduce((acc, product, index) => {
      acc[product] = values[index] || "—";
      return acc;
    }, { label, html });
  }

  function flowRow(label, valuesByProduct) {
    return {
      label,
      html: true,
      ...PRODUCTS.reduce((acc, product) => {
        acc[product] = renderFlow(valuesByProduct[product] || []);
        return acc;
      }, {})
    };
  }

  function researchRows(moduleId) {
    const rowsByModule = {
      "private-chat": [
        row("應學哪個行為", [
          "學帳號名 / t.me 讓加好友更省事；但別把「私密聊天」講成預設。",
          "學用手機號低門檻開聊，以及清楚標示商業帳號。",
          "學 QR 和聊天內服務入口，但別照搬塞滿服務的抽屜。",
          "學官方帳號用圖文選單分流服務。",
          "學陌生訊息的安全提示和檢舉流程。"
        ]),
        row("技術該怎麼調", [
          "身分表要能放公開帳號名，並和私密聊天狀態分開。",
          "聊天資料要能標示這是個人還是商業帳號。",
          "若接服務入口，支付和小程序的權限要分開授權。",
          "官方帳號和個人好友要用不同的身分命名空間。",
          "陌生訊息要有風險紀錄、封鎖、檢舉。"
        ])
      ],
      "group-chat": [
        row("應學哪個行為", [
          "學建群、邀請、入群審核、分主題討論、歷史搜尋。",
          "學用「社群」把群收攏，不必一開始就做厚重伺服器。",
          "學 QR 加群、群公告、群待辦。",
          "學社群聊天室的獨立暱稱和加入條件。",
          "學角色系統、討論串、置頂訊息、自動審核。"
        ]),
        row("技術該怎麼調", [
          "補上群邀請、入群申請、管理員權限、分主題討論、慢速模式、驗證碼。",
          "補上社群 ID、群組 ID、管理員審核、公告欄位。",
          "補上 QR 邀請的有效期、群主 / 管理員角色、置頂訊息、撤回規則。",
          "補上聊天室暱稱、加入規則、審核狀態。",
          "若要學 Discord，得加角色、頻道、討論串、權限覆寫、操作紀錄。"
        ])
      ],
      channel: [
        row("應學哪個行為", [
          "學把頻道和討論群分開。",
          "學用「更新」頁分區，降低聊天干擾。",
          "學公眾號把內容、選單、小程序串成服務閉環。",
          "學官方帳號的圖文選單和快速回覆。",
          "學公告頻道和討論串各司其職。"
        ]),
        row("技術該怎麼調", [
          "加頻道貼文、訂閱者、和討論群的關聯。",
          "加追蹤者隱私和頻道通知路由。",
          "若接服務，需要內容 ID、選單動作、小程序入口。",
          "需要官方帳號訊息、點擊回傳、LIFF 授權範圍。",
          "需要公告標記、討論串連結、跨伺服器追蹤。"
        ])
      ],
      "red-packet-points": [
        row("應學哪個行為", [
          "只學機器人辦活動的能力，別做成原生紅包。",
          "商業激勵可以先用外接的。",
          "紅包很吸引人，但會帶來金融責任。",
          "點數適合做品牌活動和回饋。",
          "徽章 / 角色激勵適合社群，但不等於紅包。"
        ]),
        row("技術該怎麼調", [
          "活動要有機器人權限、獎勵事件、防濫用規則。",
          "外部活動要有回呼和來源歸因（知道是哪個活動帶來的）。",
          "做紅包就要有帳本、領取紀錄、風控、退款。",
          "點數要有帳戶餘額、活動規則、到期日。",
          "訂閱權益要有權益紀錄、發角色、退款處理。"
        ])
      ],
      wallet: [
        row("應學哪個行為", [
          "學用機器人 / 小程式接支付，不自建主錢包。",
          "學商業聊天先接付款連結。",
          "學付款結果怎麼回傳，但別照搬整個錢包。",
          "學官方帳號接付款後的服務。",
          "學把訂閱權益和付款分開。"
        ]),
        row("技術該怎麼調", [
          "需要付款服務、付款狀態、機器人回呼。",
          "需要外部結帳連結和商戶回呼。",
          "做完整錢包就要帳本、實名、反洗錢、退款、爭議處理。",
          "需要官方帳號帶訂單資訊，加 LINE Pay 回呼。",
          "需要訂閱權益紀錄，別塞進聊天訊息。"
        ]),
        row("API 化邊界（我方決策）", [
          "可參照：付款走外部服務 / Stars，聊天不碰錢。",
          "可參照：付款走外部結帳連結，結果用回呼帶回。",
          "反例：深度整合主錢包和實名帳本，我方不做。",
          "可參照：用 LINE Pay 的 API 回呼接付款後服務。",
          "可參照：交易放訂閱 / 帳單系統，不在聊天裡。"
        ])
      ],
      identity: [
        row("應學哪個行為", [
          "學把帳號名和電話脫鉤。",
          "學在聊天裡清楚標示商業帳號。",
          "學個人、公眾號、小程序、商戶分層。",
          "學個人和官方帳號分開。",
          "學多社群檔案，但前期別照搬複雜的角色系統。"
        ]),
        row("技術該怎麼調", [
          "身分對應要能放電話、使用者 ID、帳號名、公開連結。",
          "帳號類型要能分個人和商業。",
          "不同身分類型要有各自的命名空間和權限邊界。",
          "官方帳號和 LIFF 授權範圍要分開。",
          "若做多重身分，每個社群要有一份個人檔案。"
        ])
      ],
      discovery: [
        row("應學哪個行為", [
          "學公開連結和搜尋，但要搭配審核。",
          "學用 wa.me / QR 直接開商業聊天。",
          "學用 QR、小程序碼、公眾號覆蓋線上線下。",
          "學 LINE ID、QR、官方帳號分層入口。",
          "大型探索頁先別照搬。"
        ]),
        row("技術該怎麼調", [
          "需要邀請連結、入群申請、來源歸因。",
          "需要一鍵開聊連結和商業檔案路由。",
          "需要 QR 的有效期、活動來源、入口權限。",
          "需要把官方帳號 / 群組 / 社群聊天室分流。",
          "若做探索，需要推薦的風險訊號和防洗版攻擊。"
        ])
      ],
      notification: [
        row("應學哪個行為", [
          "學資料夾、靜音、提及，但別指望使用者全部自己整理。",
          "學聊天 / 更新分區。",
          "學服務通知分流，但別讓入口爆炸。",
          "學官方帳號通知可封鎖。",
          "學大社群的通知細緻度，但別照搬過細的設定。"
        ]),
        row("技術該怎麼調", [
          "通知路由要含聊天類型、資料夾、提及狀態。",
          "通知資料要分聊天、更新、社群。",
          "服務通知、公眾號、小程序事件要各走各的路由。",
          "官方帳號推播要有取消訂閱和封鎖狀態。",
          "角色提及、頻道靜音、訂閱討論串都要能建模。"
        ])
      ],
      "open-platform": [
        row("應學哪個行為", [
          "學 token＋webhook＋互動元件＋Mini App 這套低門檻做法（首要範本）。",
          "學模板訊息和商業對話的計費邊界。",
          "學能力分層和簽章驗證，但別照搬它零碎的審核。",
          "學用圖文選單 / LIFF 把服務掛進聊天。",
          "學指令、互動元件和授權範圍的設計。"
        ]),
        row("技術該怎麼調", [
          "先定義 Bot token、webhook 事件、互動元件、Mini App 容器。",
          "訊息要分「對話中回覆」和「主動模板推播」，並記錄哪一種要計費。",
          "接收事件要有簽章驗證和加解密。",
          "規劃圖文選單 / LIFF 的授權範圍和回呼。",
          "設計授權範圍、權限設定、互動回呼和簽章驗證。"
        ]),
        row("這是我方必做骨幹", [
          "紅包 / 付款透過平台 API 外掛，核心聊天不碰錢。",
          "外部商業流程靠 webhook 把狀態帶回來。",
          "服務能力以小程序 / 內容 API 的形式交付。",
          "付款和服務透過 LINE Pay / LIFF 這類 API 承接。",
          "通知、權益、自動化都當作平台事件處理。"
        ])
      ],
      "voice-video": [
        row("應學哪個行為", [
          "學「先做一對一，群組語音另開房間」的分層。",
          "學把通話端對端加密當作信任賣點。",
          "學穩定的多人通話，但人數要務實。",
          "學通話特效提升黏著（次要）。",
          "學常駐語音房和低延遲體驗。"
        ]),
        row("技術該怎麼調", [
          "先做一對一即時通話，再評估多人語音房（SFU 架構）。",
          "若要端對端加密通話，金鑰交換要放進接通流程。",
          "多人通話要有媒體伺服器，並訂出人數上限策略。",
          "特效是前端的事，不影響核心通話。",
          "常駐語音房要處理成員上線狀態和頻寬。"
        ])
      ]
    };

    return section("值得研究", rowsByModule[moduleId] || []);
  }

  const sectionGroups = {
    "private-chat": [
      { title: "定位與流程", includes: ["模組定位", "使用流程", "介面與互動"] },
      { title: "安全、隱私與訊息生命週期", includes: ["安全與隱私", "訊息生命週期"] },
      { title: "限制與技術實作", includes: ["規模與限制", "技術實作"] },
      { title: "值得研究", includes: ["值得研究"] }
    ],
    "group-chat": [
      { title: "定位與流程", includes: ["模組定位", "使用流程"] },
      { title: "規模、權限與結構", includes: ["規模與限制", "權限與治理", "分題、討論串與結構"] },
      { title: "技術實作與互動", includes: ["技術實作", "介面與互動"] },
      { title: "值得研究", includes: ["值得研究"] }
    ],
    channel: [
      { title: "定位與發布流程", includes: ["模組定位", "發布流程"] },
      { title: "訂閱、可見性與討論", includes: ["訂閱者與可見性", "討論回路", "規模與限制"] },
      { title: "技術實作與互動", includes: ["技術實作", "介面與互動"] },
      { title: "值得研究", includes: ["值得研究"] }
    ],
    "red-packet-points": [
      { title: "定位與激勵流程", includes: ["模組定位", "使用流程"] },
      { title: "激勵、帳本、支付與風控", includes: ["激勵模型", "帳本與帳戶", "支付依賴", "風險控制"] },
      { title: "互動與採用取捨", includes: ["介面與互動", "值得研究"] }
    ],
    wallet: [
      { title: "定位與付款流程", includes: ["模組定位", "付款流程"] },
      { title: "錢包拆分、交易狀態與合規", includes: ["錢包與第三方支付拆分", "交易狀態", "合規與應用商店風險"] },
      { title: "技術實作、互動與採用取捨", includes: ["技術實作", "介面與互動", "值得研究"] }
    ],
    identity: [
      { title: "定位與帳號建立", includes: ["模組定位", "帳號建立"] },
      { title: "發現身份、商業身份與驗證", includes: ["可被找到的身份", "個人與商業身份", "隱私與驗證"] },
      { title: "技術實作、互動與採用取捨", includes: ["技術實作", "介面與互動", "值得研究"] }
    ],
    discovery: [
      { title: "定位與入口", includes: ["模組定位", "入口"] },
      { title: "搜尋推薦、公開頁與邀請", includes: ["搜尋與推薦", "公開頁與邀請"] },
      { title: "風險、技術實作與採用取捨", includes: ["垃圾訊息與隱私風險", "技術實作", "介面與互動", "值得研究"] }
    ],
    notification: [
      { title: "定位與通知路由", includes: ["模組定位", "通知路由"] },
      { title: "降噪、大群通知與裝置同步", includes: ["降噪控制", "大群與頻道通知", "裝置同步"] },
      { title: "技術實作、互動與採用取捨", includes: ["技術實作", "介面與互動", "值得研究"] }
    ]
  };

  function getDisplaySections(module) {
    const groups = sectionGroups[module.id];
    if (!groups) return module.sections;

    return groups.map((group) => ({
      title: group.title,
      rows: group.includes.flatMap((title) => {
        const currentSection = module.sections.find((item) => item.title === title);
        return currentSection ? currentSection.rows : [];
      })
    })).filter((group) => group.rows.length);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderFlow(items) {
    if (!items.length) return "";
    return items.map((item, index) => `${index === 0 ? "" : "→ "}${escapeHtml(item)}`).join("<br>");
  }

  function renderCell(value, html) {
    if (html) return value || "—";
    return escapeHtml(value || "—");
  }

  function renderMasterComparisonTable(module) {
    const displaySections = getDisplaySections(module);
    const firstSection = displaySections[0]?.title || "模組定位";
    return `
      <thead>
        <tr>
          <th class="benchmark-feature-head">
            <span>目前分類</span>
            <strong class="benchmark-current-section">${escapeHtml(firstSection)}</strong>
          </th>
          ${PRODUCTS.map((product) => `<th><span>應用</span><strong>${product}</strong></th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${displaySections.map((currentSection) => `
          <tr class="benchmark-category-row" data-section="${escapeHtml(currentSection.title)}">
            <td>${escapeHtml(currentSection.title)}</td>
            ${PRODUCTS.map(() => `<td aria-hidden="true"></td>`).join("")}
          </tr>
          ${currentSection.rows.map((rowItem) => `
            <tr>
              <td>${escapeHtml(rowItem.label)}</td>
              ${PRODUCTS.map((product) => `<td>${renderCell(rowItem[product], rowItem.html)}</td>`).join("")}
            </tr>
          `).join("")}
        `).join("")}
      </tbody>
    `;
  }

  function renderModule(module) {
    document.querySelectorAll(".benchmark-module-card").forEach((card) => {
      const isActive = card.dataset.moduleId === module.id;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });

    const layerEl = document.getElementById("moduleLayer");
    if (layerEl) {
      layerEl.textContent = LAYER_LABEL[module.layer] || "";
      layerEl.dataset.layer = module.layer || "";
    }

    document.getElementById("moduleTitle").textContent = module.name;
    document.getElementById("moduleDefinition").textContent = module.definition;

    document.getElementById("masterComparisonTable").innerHTML = renderMasterComparisonTable(module);
    updateCurrentSection();
  }

  function updateCurrentSection() {
    const wrap = document.querySelector(".benchmark-master-wrap");
    const label = document.querySelector(".benchmark-current-section");
    if (!wrap || !label) return;

    const rows = Array.from(wrap.querySelectorAll(".benchmark-category-row"));
    if (!rows.length) return;

    const headerHeight = wrap.querySelector("thead")?.offsetHeight || 0;
    const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
    const wrapTop = wrap.getBoundingClientRect().top;
    const threshold = Math.max(topbarHeight, wrapTop) + headerHeight + 8;
    let current = rows[0].dataset.section;
    rows.forEach((rowItem) => {
      if (rowItem.getBoundingClientRect().top <= threshold) {
        current = rowItem.dataset.section;
      }
    });
    label.textContent = current;
  }

  function init() {
    const moduleGrid = document.getElementById("benchmarkModuleGrid");
    if (!moduleGrid) return;

    const ordered = [...modules].sort((a, b) =>
      (LAYER_ORDER[a.layer] - LAYER_ORDER[b.layer]) || (a.order - b.order)
    );

    moduleGrid.innerHTML = ordered.map((module, i) => `
      <button class="benchmark-module-card" type="button" data-module-id="${module.id}" data-layer="${module.layer}" aria-pressed="false">
        <span>${String(i + 1).padStart(2, "0")}</span>
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
    });

    renderModule(ordered[0]);

    const wrap = document.querySelector(".benchmark-master-wrap");
    if (wrap) wrap.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);
  }

  init();
})();
