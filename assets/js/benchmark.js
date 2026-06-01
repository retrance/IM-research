(function () {
  const PRODUCTS = ["Telegram", "WhatsApp", "WeChat", "LINE", "Discord", "Signal"];

  const modules = [
    {
      id: "private-chat",
      index: "01",
      name: "私聊",
      summary: "比較一對一聊天的安全預設、身份暴露、訊息生命週期與互動效率。",
      definition: "私聊是 IM 的信任基礎。修改現有產品時，要先決定預設安全模型、聯絡入口、已讀 / 撤回規則，以及商業帳號是否能進入同一個收件箱。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "雲端同步的一對一聊天，另有高隱私私密聊天。",
            "以手機號建立低摩擦熟人聊天。",
            "熟人聊天同時承接支付、文件與小程序入口。",
            "熟人聊天加貼圖、官方帳號服務入口。",
            "私訊是伺服器社群之外的輔助溝通層。",
            "以隱私與端對端加密作為核心定位。"
          ]),
          row("採用取捨", [
            "可借鑑公開使用者名稱，但私密聊天不應混淆為預設。",
            "手機號入口易懂，但要避免商業訊息污染個人聊天。",
            "服務入口密度高，不宜照搬到一般私聊。",
            "官方帳號服務可參考，但要保持聊天清爽。",
            "安全提示值得借鑑，伺服器模型不宜前置。",
            "可作為隱私預設與訊息請求的基準。"
          ])
        ]),
        section("User Flow", [
          flowRow("主要流程", {
            Telegram: ["搜尋使用者名稱、電話簿或 t.me 連結", "進入普通聊天", "需要更高隱私時啟動私密聊天", "傳送文字、媒體、檔案或語音"],
            WhatsApp: ["用手機號、聯絡人或 wa.me 開啟聊天", "傳送訊息、媒體、語音或檔案", "用已讀、封鎖、檢舉與安全碼補強信任"],
            WeChat: ["用通訊錄、QR 或搜尋加好友", "進入一對一聊天", "聊天內可傳訊、轉帳、開小程序"],
            LINE: ["用 LINE ID、QR 或電話簿加好友", "進入聊天", "貼圖、媒體、位置與語音是高頻互動", "官方帳號對話可用圖文選單分流"],
            Discord: ["從好友、共同伺服器或使用者名稱建立私訊", "傳送訊息、檔案、語音或視訊", "陌生互動靠封鎖、檢舉與安全提示收斂"],
            Signal: ["用電話、使用者名稱或 QR / 連結發起聯絡", "對方通過訊息請求", "進入端對端加密聊天", "用安全號碼與限時訊息強化信任"]
          })
        ]),
        section("Security / Privacy", [
          row("加密預設", [
            "普通聊天雲端同步；私密聊天才是端對端加密。",
            "個人訊息與通話預設端對端加密。",
            "不把端對端加密作為公開私聊賣點。",
            "用 LINE 訊息加密機制保護主要聊天內容。",
            "一般私訊不是預設端對端加密。",
            "端對端加密是核心預設。"
          ]),
          row("身份暴露", [
            "使用者名稱可降低電話暴露。",
            "手機號是主要身份。",
            "熟人身份、支付身份與服務入口連得較深。",
            "LINE ID / QR 降低交換成本。",
            "多社群身份清楚，但學習成本高。",
            "使用者名稱可降低電話暴露。"
          ])
        ]),
        section("Message Lifecycle", [
          row("已讀 / 送達", [
            "雙勾表示已讀。",
            "雙藍勾，可關閉。",
            "私聊通常不直接顯示已讀。",
            "顯示已讀。",
            "送達與讀取提示較有限。",
            "可控制是否顯示已讀回條。"
          ]),
          row("撤回 / 編輯", [
            "支援編輯與雙方刪除。",
            "支援刪除與編輯訊息。",
            "支援撤回，編輯通常用補發或引用處理。",
            "支援撤回；文字編輯依版本而定。",
            "支援編輯與刪除。",
            "支援刪除；編輯能力依版本而定。"
          ])
        ]),
        section("Scale / Limits", [
          row("檔案與歷史", [
            "普通檔案最高 2 GB；普通聊天雲端保留。",
            "公開資料常見上限 2 GB；歷史依備份與連結裝置設定。",
            "聊天檔案、文件傳輸助手、微盤限制不同。",
            "檔案可受訊息加密保護；換機可能影響舊訊息顯示。",
            "免費檔案上限較低，付費方案提高；歷史可搜尋。",
            "附件限制依端而定；備份與轉移較保守。"
          ])
        ]),
        section("Technical Implementation", [
          row("加密模型", [
            "MTProto；私密聊天端對端加密。",
            "Signal Protocol。",
            "以服務端同步與平台風控為主。",
            "LINE 訊息加密機制；部分媒體或附屬功能不一定涵蓋。",
            "傳輸加密，但一般私訊不是端對端加密。",
            "Signal Protocol。"
          ]),
          row("同步 / 權限模型", [
            "雲端同步；聊天、群組、機器人權限分開。",
            "端對端加密下同步連結裝置；個人與商業帳號分層。",
            "服務端同步與端側遷移並存；身份層包含個人、群主、公眾號、小程序、商戶。",
            "手機、桌面、平板同步；個人與官方帳號分離。",
            "服務端同步；使用者、伺服器、頻道權限分層。",
            "多裝置同步保守；個人隱私與聯絡請求優先。"
          ])
        ]),
        section("UI / Interaction", [
          row("收件箱呈現", [
            "私聊、群、頻道、機器人都可能進聊天列表。",
            "個人與商業帳號在同一聊天頁中標示。",
            "聊天內服務入口密度高。",
            "個人聊天與官方帳號可共存，但用選單分流。",
            "私訊不是主舞台，常與伺服器關係並存。",
            "訊息請求先擋陌生人。"
          ])
        ]),
        researchRows("private-chat")
      ]
    },
    {
      id: "group-chat",
      index: "02",
      name: "群聊",
      summary: "比較擴群、權限治理、分題討論、大群降噪與歷史沉澱。",
      definition: "群聊從熟人多人聊天開始，但規模變大後會變成治理系統。修改現有產品時，要避免直接跳到重型伺服器樹，同時補齊建群、邀請、加入、權限、搜尋與降噪能力。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開大群與社群成長工具。",
            "熟人群組加社群收束。",
            "熟人群聊，常和線下 QR、紅包、服務入口結合。",
            "群組與社群聊天室並存。",
            "大型社群空間，不只是聊天群。",
            "私密群組，規模與治理都保守。"
          ])
        ]),
        section("User Flow", [
          flowRow("主要流程", {
            Telegram: ["建立群組", "設定公開使用者名稱或邀請連結", "設定管理員與權限", "大群啟用分題討論", "用機器人、慢速模式、驗證碼治理", "透過搜尋、提及、標籤找歷史訊息"],
            WhatsApp: ["建立群組", "放入社群或分享邀請連結", "管理員設定加入審核與發言權限", "成員聊天、回覆、搜尋", "用靜音與提及降噪"],
            WeChat: ["建立群聊或由好友拉入", "透過 QR 或邀請加入", "群主 / 管理員維護公告、群待辦", "成員聊天、傳檔、紅包或進服務入口"],
            LINE: ["建立群組或社群聊天室", "邀請、QR 或搜尋加入", "社群聊天室可用獨立暱稱", "管理員設定加入條件與規則", "用公告、記事本、相簿沉澱內容"],
            Discord: ["建立伺服器", "建立分類、頻道、角色", "用邀請連結或探索頁加入", "加入引導分配角色", "文字、討論串、論壇、語音分流", "自動審核與機器人協助治理"],
            Signal: ["建立群組", "分享群組連結或 QR", "管理員核准加入", "設定消失訊息與發言權限", "成員在端對端加密群聊中發言"]
          })
        ]),
        section("Scale / Limits", [
          row("規模上限", [
            "最高 200,000，適合公開大群。",
            "公開資料常見為 1,024。",
            "中國版普通微信群常見 500。",
            "一般群常見 500；社群聊天室公開資料常見 5,000。",
            "大型伺服器沒有單一公開硬上限，但角色上限等結構限制明確。",
            "最高 1,000。"
          ]),
          row("歷史與檔案", [
            "可讓新成員看到既有歷史；檔案上限高。",
            "依聊天與備份狀態。",
            "新成員歷史可見性有限，檔案限制需分入口看。",
            "群組歷史與相簿 / 記事本分流。",
            "歷史可搜尋，保留依伺服器與方案。",
            "端對端加密，轉移與保留較保守。"
          ])
        ]),
        section("Permission / Governance", [
          row("權限模型", [
            "管理員細項權限完整。",
            "管理員控制加入、發言與社群管理。",
            "群主 / 管理員加平台風控。",
            "社群聊天室有加入條件與管理設定。",
            "角色階層、頻道覆寫、自動審核完整。",
            "管理員控制群資訊與發言權限。"
          ])
        ]),
        section("Topic / Thread / Structure", [
          row("結構化討論", [
            "分題討論適合大群分流。",
            "主要靠社群和多群分流。",
            "通常靠多群或小程序承接。",
            "社群聊天室分題能力較輕。",
            "頻道、討論串、論壇、語音分層最完整。",
            "不以分題討論為核心。"
          ])
        ]),
        section("Technical Implementation", [
          row("資料模型", [
            "群組 + 分題討論 + 管理員權限 + 機器人事件。",
            "群組 + 社群 + 管理員設定。",
            "群聊 + 群主 / 管理員 + QR + 平台風控。",
            "群組 / 社群聊天室 + 獨立暱稱 + 管理設定。",
            "伺服器 / 分類 / 頻道 / 討論串 / 角色。",
            "私密群組 + 加密成員狀態。"
          ]),
          row("API / 機器人 / 事件回呼", [
            "機器人 API 強，可做審核、驗證碼、慢速模式輔助。",
            "群內機器人能力有限，商業 API 偏商業對話。",
            "小程序可承接服務，但不是一般群機器人。",
            "Messaging API 不等於一般群機器人。",
            "機器人 / 事件回呼 / 自動審核成熟。",
            "第三方治理能力少。"
          ])
        ]),
        section("UI / Interaction", [
          row("降噪方式", [
            "分題討論、置頂、提及、搜尋。",
            "靜音、提及、社群分組。",
            "免打擾、置頂、公告、群待辦。",
            "通知設定、公告、記事本。",
            "頻道、討論串、角色提及、通知層級。",
            "群規模小，主要靠靜音與管理員控制。"
          ])
        ]),
        researchRows("group-chat")
      ]
    },
    {
      id: "channel",
      index: "03",
      name: "頻道",
      summary: "比較一對多發布、訂閱可見性、討論回流與外部分享。",
      definition: "頻道把低噪音發布從聊天中分離。修改現有產品時，重點不是做內容平台，而是釐清發布、追蹤、回覆路徑與治理邊界。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開 / 私密一對多廣播。",
            "更新頁中的低噪音追蹤。",
            "公眾號 / 服務號承接內容與服務。",
            "官方帳號承接品牌與服務訊息。",
            "伺服器內公告工具。",
            "不做成熟公開頻道。"
          ])
        ]),
        section("Publishing Flow", [
          flowRow("發布流程", {
            Telegram: ["建立頻道", "設定公開使用者名稱或私密邀請", "管理員發布內容", "使用者反應、投票或轉發", "留言接到討論群"],
            WhatsApp: ["使用者在更新頁發現或追蹤頻道", "管理員發布文字、圖片、影片、貼圖或投票", "追蹤者反應或轉發", "需要對話時回到私聊、群組或外部入口"],
            WeChat: ["使用者關注公眾號", "帳號發布文章、服務通知或內容", "使用者閱讀、留言或進小程序", "交易與服務依帳號能力承接"],
            LINE: ["使用者加入官方帳號", "官方帳號推送或廣播訊息", "用圖文選單 / 快速回覆分流", "深流程進 LIFF 或外部頁"],
            Discord: ["建立公告頻道", "管理員發布公告", "其他伺服器可追蹤並接收更新", "討論用討論串、論壇或其他頻道承接"],
            Signal: ["沒有成熟公開頻道流程", "可用群組或廣播式替代方案", "公開訂閱、留言與探索不足"]
          })
        ]),
        section("Subscriber / Visibility", [
          row("可見性", [
            "公開或私密頻道；新訂閱者可看完整歷史。",
            "管理員可控制是否可探索；追蹤者電話不暴露。",
            "公眾號公開關注，能力受帳號類型影響。",
            "官方帳號公開，好友數與訊息配額依方案。",
            "由伺服器與頻道權限控制。",
            "不適用。"
          ])
        ]),
        section("Discussion Loop", [
          row("互動回路", [
            "反應、投票、留言接討論群。",
            "反應、投票、轉發，互動較輕。",
            "留言、選單、小程序、客服訊息。",
            "回覆、快速回覆、圖文選單、LIFF。",
            "討論串、論壇與反應承接。",
            "不適用。"
          ])
        ]),
        section("Scale / Limits", [
          row("規模限制", [
            "頻道不限訂閱者。",
            "官方未給清楚公開上限。",
            "粉絲規模可很大，但受帳號類型與審核影響。",
            "好友數與訊息配額依方案。",
            "依伺服器狀態、權限與平台審核。",
            "不適用。"
          ])
        ]),
        section("Technical Implementation", [
          row("資料模型", [
            "頻道貼文 + 管理員 + 可選討論群。",
            "頻道更新 + 追蹤者隱私。",
            "公眾號文章 / 服務通知 / 小程序入口。",
            "官方帳號訊息 + 圖文選單 + LIFF。",
            "公告訊息 + 討論串 / 論壇。",
            "無成熟公開頻道模型。"
          ]),
          row("API / 事件回呼", [
            "機器人 API 與頻道管理能力。",
            "頻道 API 開放狀態需按 Meta 版本確認。",
            "公眾號 / 小程序 API。",
            "Messaging API、點擊回傳、LIFF。",
            "機器人 / 事件回呼成熟。",
            "第三方能力少。"
          ])
        ]),
        section("UI / Interaction", [
          row("入口與通知", [
            "t.me 公開連結、搜尋、頻道通知。",
            "更新頁分區降低聊天噪音。",
            "QR、搜尋、文章分享、小程序碼。",
            "QR / URL / 官方帳號入口。",
            "伺服器邀請 / 探索 / 公告追蹤。",
            "不適用。"
          ])
        ]),
        researchRows("channel")
      ]
    },
    {
      id: "red-packet-points",
      index: "04",
      name: "紅包 / 積分",
      summary: "比較社交激勵、點數帳本、活動風控與支付依賴。",
      definition: "紅包 / 積分不是單純 UI。它會帶入帳本、支付、反作弊、退款與合規責任，因此應被視為後續能力，而不是核心聊天架構的一部分。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "用機器人付款或 Stars 做活動，不是原生紅包。",
            "商業活動多靠外部系統。",
            "聊天內紅包是高頻社交儀式。",
            "以 LINE Points 和優惠回饋為主。",
            "Nitro / Boost 是社群權益激勵。",
            "不做聊天激勵。"
          ])
        ]),
        section("User Flow", [
          flowRow("激勵流程", {
            Telegram: ["使用者進入機器人或支付互動", "機器人建立任務、抽獎或付款流程", "使用者完成操作", "交易或獎勵狀態回到機器人"],
            WhatsApp: ["商家或活動提供外部激勵", "使用者從聊天進入付款連結或活動頁", "結果回到商家或外部系統"],
            WeChat: ["在私聊或群聊選擇紅包", "設定金額、份數與祝福語", "成員領取", "結果進錢包帳本"],
            LINE: ["使用者參與活動或支付", "取得 LINE Points 或優惠", "點數進帳戶紀錄", "官方帳號可承接後續服務"],
            Discord: ["訂閱 Nitro 或 Boost 伺服器", "伺服器解鎖權益", "成員獲得徽章或角色可見激勵"],
            Signal: ["沒有紅包或點數主流程", "捐款等支持流程與聊天分離"]
          })
        ]),
        section("Incentive Model", [
          row("激勵型態", [
            "Stars、機器人任務、抽獎。",
            "外部活動與商業優惠。",
            "現金紅包、優惠、小程序活動。",
            "點數、優惠券、官方帳號活動。",
            "訂閱權益、徽章、角色。",
            "無。"
          ])
        ]),
        section("Ledger / Account", [
          row("帳本模型", [
            "機器人 / Stars / 付款服務帳本。",
            "外部活動或商業平台紀錄。",
            "微信支付錢包與紅包領取紀錄。",
            "LINE Points / LINE Pay 紀錄。",
            "訂閱與 Boost 狀態。",
            "無。"
          ])
        ]),
        section("Risk Control", [
          row("主要風險", [
            "機器人權限、詐騙、退款、任務刷量。",
            "付款連結詐騙與商業濫用。",
            "支付合規、洗錢、詐騙、活動濫用。",
            "點數套利、退款、地區合規。",
            "退款、刷 Boost、權益濫用。",
            "風險最低。"
          ])
        ]),
        section("Payment Dependency", [
          row("支付依賴", [
            "依 Telegram Stars、機器人付款與付款服務。",
            "依外部支付或 WhatsApp Pay 市場。",
            "高度依賴微信支付。",
            "依 LINE Pay / Points 市場。",
            "依應用商店與平台訂閱。",
            "不依賴。"
          ])
        ]),
        section("UI / Interaction", [
          row("使用者感受", [
            "像機器人活動，不像原生聊天儀式。",
            "體驗容易跳出聊天。",
            "紅包是群內強互動事件。",
            "點數更像活動與會員回饋。",
            "權益在社群中可見。",
            "保持聊天簡潔。"
          ])
        ]),
        researchRows("red-packet-points")
      ]
    },
    {
      id: "wallet",
      index: "05",
      name: "錢包",
      summary: "比較聊天內付款、第三方支付、交易狀態回流與合規負擔。",
      definition: "錢包會把 IM 從溝通工具推進金融責任。修改現有產品時，可先用商品卡與聊天承接商業意圖，不必直接做主錢包、付款、退款與履約。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "付款多由機器人、小應用或 Stars 承接。",
            "多市場能力不一致，常用商業付款連結。",
            "錢包、轉帳、紅包、服務通知深度整合。",
            "LINE Pay 與官方帳號連動。",
            "平台訂閱與權益付款，不是通用錢包。",
            "沒有聊天內錢包。"
          ])
        ]),
        section("Payment Flow", [
          flowRow("付款流程", {
            Telegram: ["使用者在機器人 / 小應用 / 付款訊息觸發", "確認商品、金額與付款服務", "完成付款", "機器人或服務回傳狀態"],
            WhatsApp: ["使用者與商家對話", "商家提供付款連結或市場可用支付請求", "使用者付款", "狀態回到商家或外部系統"],
            WeChat: ["聊天內轉帳、紅包或小程序下單", "確認金額與身份", "WeChat Pay 完成支付", "服務通知與帳本回流"],
            LINE: ["從官方帳號、LINE Pay 或外部頁付款", "確認付款方式與金額", "完成後進交易紀錄", "官方帳號承接後續服務"],
            Discord: ["購買 Nitro、Boost 或應用權益", "確認訂閱與付款方式", "權益套用到帳號或伺服器", "訂閱狀態在設定中管理"],
            Signal: ["沒有聊天內錢包主流程", "捐款或支持多為獨立流程"]
          })
        ]),
        section("Wallet / Third-party Split", [
          row("主錢包 vs 外接", [
            "外接付款服務與 Stars，不等於統一主錢包。",
            "多以外部付款或市場支付能力承接。",
            "主錢包深度整合。",
            "LINE Pay 依市場與官方帳號連接。",
            "平台訂閱，不是 IM 錢包。",
            "無。"
          ])
        ]),
        section("Transaction Status", [
          row("狀態回流", [
            "需由付款服務或機器人回傳。",
            "外部付款可能斷開狀態。",
            "服務通知與帳本完整回流。",
            "支付紀錄與官方帳號承接。",
            "訂閱狀態在帳單系統。",
            "不適用。"
          ])
        ]),
        section("Compliance / App Store Risk", [
          row("合規重量", [
            "支付服務、數位商品與外部付款需審慎處理。",
            "支付與商業合規依市場而變。",
            "金融監管、實名、反洗錢、客服責任重。",
            "金融監管、點數規則、市場差異。",
            "應用商店與訂閱規則。",
            "風險最低。"
          ])
        ]),
        section("Technical Implementation", [
          row("金流架構", [
            "機器人 / 付款服務 / Stars。",
            "商業帳號 / 付款服務。",
            "WeChat Pay + 商戶號 + 錢包帳本。",
            "LINE Pay + 官方帳號 / 商戶。",
            "平台訂閱系統。",
            "無。"
          ]),
          row("風控事件", [
            "付款失敗、退款、機器人詐騙、付款爭議。",
            "付款連結詐騙、商家爭議、狀態不同步。",
            "洗錢、盜刷、退款、帳號實名、交易爭議。",
            "點數套利、退款、地區合規。",
            "訂閱退款、權益濫用。",
            "不適用。"
          ])
        ]),
        section("UI / Interaction", [
          row("聊天內呈現", [
            "付款通常以機器人訊息或小應用出現。",
            "付款常跳到連結或外部流程。",
            "轉帳、紅包、收款可直接在聊天內發生。",
            "官方帳號與 LINE Pay 形成服務鏈路。",
            "付款在設定 / 訂閱頁管理。",
            "聊天不承接交易。"
          ])
        ]),
        researchRows("wallet")
      ]
    },
    {
      id: "identity",
      index: "06",
      name: "身分",
      summary: "比較帳號建立、公開身份、商業身份、隱私與驗證。",
      definition: "身份決定使用者如何被找到、被信任、被授權。修改現有產品時，需要先分清個人、商業、群組管理員與公開入口，不要把支付實名、CRM 與多身份系統一次做滿。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "手機註冊 + 公開使用者名稱。",
            "手機號是核心身份，商業帳號另標示。",
            "個人、公眾號、小程序、商戶身份分層。",
            "個人與官方帳號分離。",
            "帳號、伺服器個人檔案、角色並存。",
            "電話與使用者名稱服務於隱私聯絡。"
          ])
        ]),
        section("Account Creation", [
          row("註冊基礎", [
            "手機號註冊，可設定使用者名稱。",
            "手機號註冊。",
            "手機號與 WeChat ID 關聯。",
            "手機號與 LINE ID。",
            "Email / 電話建帳，顯示使用者名稱。",
            "手機號註冊，可用使用者名稱發起聯絡。"
          ])
        ]),
        section("Discovery Identity", [
          row("被找到方式", [
            "使用者名稱、t.me、QR。",
            "手機聯絡人、wa.me、QR、商業檔案。",
            "WeChat ID、手機、QR、公眾號搜尋。",
            "LINE ID、QR、電話簿、官方帳號搜尋。",
            "使用者名稱、共同伺服器、邀請連結。",
            "使用者名稱連結、QR、訊息請求。"
          ])
        ]),
        section("Personal / Business Identity", [
          row("個人 / 商業分層", [
            "個人、頻道、機器人、Telegram Business 並存。",
            "個人與 WhatsApp Business 標示清楚。",
            "個人、公眾號、小程序、商戶分層完整。",
            "個人與 LINE 官方帳號分離。",
            "個人、伺服器檔案、機器人、App 身份多層。",
            "以個人身份為主，商業身份弱。"
          ])
        ]),
        section("Privacy / Verification", [
          row("隱私與驗證", [
            "電話可隱藏；公開使用者名稱帶來冒名與騷擾風險。",
            "手機號暴露風險高；商業驗證依 Meta 規則。",
            "支付實名與商戶驗證門檻高。",
            "加好友方式、封鎖、訊息加密與官方帳號驗證分開。",
            "角色與權限不等於真實身份驗證。",
            "安全號碼與訊息請求強化信任。"
          ])
        ]),
        section("Technical Implementation", [
          row("身份對應", [
            "電話 + 使用者 ID + 使用者名稱 + 公開連結。",
            "電話號碼 + 商業檔案。",
            "WeChat ID / OpenID / UnionID / 商戶號。",
            "LINE 使用者 ID / LINE ID / 官方帳號 / LIFF 授權範圍。",
            "使用者 ID + 使用者名稱 + 伺服器個人檔案 + 角色。",
            "電話 + 使用者名稱 + 安全號碼。"
          ]),
          row("權限模型", [
            "聊天、群、頻道、機器人權限分開。",
            "個人、商業帳號、社群管理分層。",
            "個人、群主、公眾號、小程序、商戶分層。",
            "個人、官方帳號、LIFF 授權分層。",
            "伺服器角色與頻道權限主導可見性。",
            "隱私設定與群組管理優先。"
          ])
        ]),
        section("UI / Interaction", [
          row("身份呈現", [
            "公開使用者名稱與頻道 / 機器人身份要區分。",
            "商業帳號在聊天中清楚標示。",
            "QR 是高頻身份交換工具。",
            "官方帳號與個人好友分開呈現。",
            "同一人可在不同伺服器使用不同檔案。",
            "先顯示訊息請求，不直接打擾。"
          ])
        ]),
        researchRows("identity")
      ]
    },
    {
      id: "discovery",
      index: "07",
      name: "發現",
      summary: "比較外部入口、搜尋推薦、公開頁、邀請與反垃圾風險。",
      definition: "發現能力越強，越需要加入審核、來源追蹤與反垃圾。修改現有產品時，應先做可控入口，而不是完整推薦系統。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "公開使用者名稱、群、頻道、機器人入口一致。",
            "熟人聯絡與商業聊天入口直接。",
            "QR、搜尋、小程序、公眾號覆蓋服務發現。",
            "LINE ID、QR、官方帳號、社群聊天室分層。",
            "大型社群探索與加入引導。",
            "保守探索，避免陌生打擾。"
          ])
        ]),
        section("Entry Points", [
          row("主要入口", [
            "使用者名稱、t.me、邀請連結。",
            "聯絡人、wa.me、QR、群邀請。",
            "QR、小程序碼、公眾號、搜尋。",
            "LINE ID、QR、LINE URL、LIFF。",
            "邀請連結、伺服器探索頁。",
            "使用者名稱連結、QR、訊息請求。"
          ])
        ]),
        section("Search / Recommendation", [
          row("搜尋 / 推薦", [
            "公開群與頻道搜尋強，推薦透明度有限。",
            "頻道目錄與商業曝光，公共探索較保守。",
            "搜一搜、看一看、附近、小程序分發，但生態複雜。",
            "社群聊天室與官方帳號推薦依市場。",
            "Server Discovery 可承接大型社群。",
            "不適合公開社群成長。"
          ])
        ]),
        section("Public Page / Invite", [
          row("公開頁與邀請", [
            "群、頻道、機器人可有公開頁與邀請連結。",
            "商業檔案、群邀請、頻道分享。",
            "公眾號 / 小程序 / 視頻號公開頁。",
            "官方帳號、LIFF、社群聊天室入口。",
            "伺服器邀請頁與加入引導。",
            "以訊息請求保護入口。"
          ])
        ]),
        section("Spam / Privacy Risk", [
          row("主要風險", [
            "公開搜尋帶來垃圾訊息與冒名。",
            "手機號與邀請連結容易暴露隱私。",
            "入口多，群 QR 外流與陌生騷擾需風控。",
            "社群聊天室與官方帳號有濫發風險。",
            "公開伺服器容易被洗版或攻擊。",
            "探索弱，商業入口受限。"
          ])
        ]),
        section("Technical Implementation", [
          row("來源追蹤", [
            "機器人深連結 / 邀請連結可追蹤。",
            "商業帳號與廣告來源可追蹤。",
            "小程序碼、渠道 QR、公眾號來源參數。",
            "官方帳號與 LIFF 可追蹤。",
            "邀請來源與分析依伺服器工具。",
            "來源追蹤少。"
          ]),
          row("風控事件", [
            "公開搜尋垃圾訊息、冒名、機器人濫用。",
            "邀請濫用、商業濫發、手機號騷擾。",
            "群 QR 外流、陌生人騷擾、公眾號濫發。",
            "社群聊天室垃圾訊息、官方帳號濫發。",
            "伺服器洗版攻擊、機器人垃圾訊息、角色繞過。",
            "訊息請求、封鎖、檢舉。"
          ])
        ]),
        section("UI / Interaction", [
          row("入口呈現", [
            "公開頁、搜尋結果、t.me 連結。",
            "QR、wa.me、商業檔案。",
            "QR、小程序碼、搜尋入口密集。",
            "好友、官方帳號、社群聊天室要分清。",
            "探索頁與加入引導較重。",
            "先顯示請求，不直接進收件箱。"
          ])
        ]),
        researchRows("discovery")
      ]
    },
    {
      id: "notification",
      index: "08",
      name: "通知",
      summary: "比較通知路由、降噪、大群 / 頻道通知與多裝置同步。",
      definition: "通知不是單一開關。修改現有產品時，要先把私聊、群、頻道、商業訊息的路由分清楚，避免收件箱被更新、服務通知與公開內容淹沒。",
      sections: [
        section("模組定位", [
          row("產品角色", [
            "高密度收件箱靠資料夾、靜音、提及降噪。",
            "聊天頁與更新頁分離。",
            "聊天、服務通知、公眾號、小程序入口多。",
            "聊天與官方帳號通知分開控制。",
            "伺服器、頻道、討論串、角色多層通知。",
            "隱私通知與訊息請求優先。"
          ])
        ]),
        section("Notification Routing", [
          row("通知路由", [
            "聊天類型 + 資料夾 + 提及。",
            "聊天 / 更新頁 / 社群分區。",
            "聊天、服務通知、公眾號、小程序訊息分流。",
            "聊天 / 官方帳號 / 社群聊天室分流。",
            "伺服器 / 頻道 / 討論串 / 角色分層。",
            "聊天 / 群組 / 訊息請求。"
          ])
        ]),
        section("Noise Control", [
          row("降噪方式", [
            "靜音、只看提及、分題討論、資料夾。",
            "靜音、提及、聊天與更新分區。",
            "免打擾、置頂、折疊、群公告 / 群待辦。",
            "靜音、封鎖、官方帳號控制。",
            "角色提及、頻道靜音、討論串訂閱。",
            "訊息請求、靜音、隱私預覽。"
          ])
        ]),
        section("Large Group / 頻道 Notification", [
          row("大群 / 頻道", [
            "大群靠分題討論、提及、機器人輔助治理。",
            "群組可靜音；頻道在更新頁控制。",
            "公眾號與服務通知容易造成入口複雜。",
            "官方帳號可封鎖或調整通知。",
            "大型伺服器靠頻道、討論串與角色通知。",
            "不以頻道通知為核心。"
          ])
        ]),
        section("Device Sync", [
          row("多裝置同步", [
            "雲端同步通知。",
            "端對端加密下同步連結裝置。",
            "手機與桌面端通知依登入狀態。",
            "手機與桌面端通知依登入狀態。",
            "服務端狀態同步多端。",
            "端對端加密下的裝置狀態較保守。"
          ])
        ]),
        section("Technical Implementation", [
          row("通知資料模型", [
            "聊天類型 + 資料夾 + 提及狀態。",
            "聊天 / 更新 / 社群路由。",
            "訊息 + 服務通知 + 官方帳號事件。",
            "聊天 + 官方帳號 + LIFF 事件。",
            "伺服器 + 頻道 + 討論串 + 角色提及。",
            "聊天 + 群組 + 請求狀態。"
          ]),
          row("控制事件", [
            "靜音、提及、資料夾、機器人 / 頻道通知。",
            "靜音、提及、商業模板額度。",
            "免打擾、置頂、公眾號取消關注、小程序訂閱訊息。",
            "官方帳號封鎖、Messaging API 規則。",
            "角色提及、頻道靜音、討論串訂閱。",
            "訊息請求、隱私預覽、靜音。"
          ])
        ]),
        section("UI / Interaction", [
          row("使用者控制", [
            "適合提供資料夾與靜音，但不要依賴使用者整理全部。",
            "聊天 / 更新分區能降低頻道噪音。",
            "入口多時要避免通知規則不透明。",
            "官方帳號通知必須可封鎖。",
            "設定粒度完整但初學成本高。",
            "簡潔、保守、隱私友善。"
          ])
        ]),
        researchRows("notification")
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
          "學使用者名稱 / t.me 降低交換聯絡成本；不要把私密聊天說成預設。",
          "學低摩擦手機號入口與商業帳號標示。",
          "學 QR 與聊天內服務入口，但不要照搬高密度服務抽屜。",
          "學官方帳號用圖文選單分流服務。",
          "學陌生私訊安全提示與檢舉流程。",
          "學訊息請求與安全號碼。"
        ]),
        row("技術該怎麼調", [
          "身份表要支援公開使用者名稱，並和私密聊天狀態分離。",
          "聊天資料模型要標示個人 / 商業帳號。",
          "若接服務入口，要把支付與小程序權限獨立授權。",
          "官方帳號與個人好友要分身份命名空間。",
          "陌生訊息要有風險事件、封鎖、檢舉。",
          "訊息請求、安全號碼、端到端加密狀態要可見。"
        ])
      ],
      "group-chat": [
        row("應學哪個行為", [
          "學建群、邀請使用者、入群審核、分題討論、歷史搜尋。",
          "學群組與社群收束，不必先做重型伺服器。",
          "學 QR 加群、群公告、群待辦。",
          "學社群聊天室獨立暱稱與加入條件。",
          "學角色系統、討論串、置頂訊息、自動審核。",
          "學私密群與管理員核准。"
        ]),
        row("技術該怎麼調", [
          "補群邀請、入群申請、管理員權限、分題討論、慢速模式、驗證碼事件。",
          "補社群 ID、群組 ID、管理員審核、公告欄位。",
          "補 QR 邀請生命週期、群主 / 管理員角色、置頂訊息、撤回規則。",
          "補聊天室暱稱、加入規則、審核狀態。",
          "若學 Discord，要新增角色、頻道、討論串、權限覆寫、審計記錄。",
          "補加密成員狀態、裝置綁定、群組核准。"
        ]),
        row("重要遺漏檢查", [
          "最大成員數、檔案大小、多裝置同步、端對端加密 / 私密聊天都要標清楚。",
          "要補訊息撤回、置頂訊息、歷史搜尋。",
          "要補群公告、群待辦、QR 失效與入群限制。",
          "要補社群聊天室類的暱稱隔離與審核。",
          "要補角色階層、討論串支援、傳輸加密、審計記錄。",
          "要補裝置綁定與端到端加密群狀態。"
        ])
      ],
      channel: [
        row("應學哪個行為", [
          "學頻道與討論群分離。",
          "學更新頁分區降低聊天噪音。",
          "學公眾號內容、選單、小程序形成服務閉環。",
          "學官方帳號圖文選單與快速回覆。",
          "學公告頻道與討論串分工。",
          "作為不做公開頻道的保守對照。"
        ]),
        row("技術該怎麼調", [
          "新增頻道貼文、訂閱者、討論群關聯。",
          "新增追蹤者隱私與頻道通知路由。",
          "若接服務，需內容 ID、選單動作、小應用入口。",
          "需官方帳號訊息、點擊回傳、LIFF 授權範圍。",
          "需公告標記、討論串連結、跨伺服器追蹤。",
          "若不做頻道，仍要有替代廣播策略。"
        ])
      ],
      "red-packet-points": [
        row("應學哪個行為", [
          "只學機器人活動能力，不學成原生紅包。",
          "商業激勵可先外接。",
          "紅包行為很強，但會引入金融責任。",
          "點數適合品牌活動與回饋。",
          "徽章 / 角色激勵適合社群，不等同紅包。",
          "可作為不做激勵的基準。"
        ]),
        row("技術該怎麼調", [
          "活動要有機器人權限、獎勵事件、反濫用規則。",
          "外部活動要有回呼與來源歸因。",
          "紅包需要帳本、領取紀錄、風控、退款。",
          "點數需要帳戶餘額、活動規則、到期日。",
          "訂閱權益需要權益紀錄、角色授予、退款事件。",
          "不做時要避免聊天資料模型預留金融假設。"
        ])
      ],
      wallet: [
        row("應學哪個行為", [
          "學機器人 / 小應用接支付，不做主錢包。",
          "學商業聊天先接付款連結。",
          "學交易狀態回流，但不照搬全錢包。",
          "學官方帳號承接付款後服務。",
          "學訂閱權益與付款分離。",
          "作為聊天與交易分離的基準。"
        ]),
        row("技術該怎麼調", [
          "需付款服務、付款狀態、機器人回呼。",
          "需外部結帳連結、商戶回呼。",
          "完整錢包需帳本、實名驗證、反洗錢、退款、爭議處理。",
          "需官方帳號訂單上下文與 LINE Pay 回呼。",
          "需訂閱權益紀錄，不要塞進聊天訊息。",
          "若不做錢包，商品卡只保留意圖與返回路徑。"
        ])
      ],
      identity: [
        row("應學哪個行為", [
          "學使用者名稱與電話解耦。",
          "學商業帳號在聊天中清楚標示。",
          "學個人、公眾號、小程序、商戶分層。",
          "學個人與官方帳號分離。",
          "學多社群檔案，但不要前期照搬角色複雜度。",
          "學訊息請求保護隱私。"
        ]),
        row("技術該怎麼調", [
          "身份對應要支援電話、使用者 ID、使用者名稱、公開連結。",
          "帳號類型要支援個人 / 商業。",
          "不同身份類型要有命名空間與權限邊界。",
          "官方帳號與 LIFF 授權範圍要分離。",
          "若做多身份，需每個社群一份個人檔案。",
          "訊息請求與安全號碼要進身份信任模型。"
        ])
      ],
      discovery: [
        row("應學哪個行為", [
          "學公開連結與搜尋，但要配審核。",
          "學 wa.me / QR 直達商業聊天。",
          "學 QR、小程序碼、公眾號覆蓋線上線下。",
          "學 LINE ID、QR、官方帳號分層入口。",
          "大型探索頁先不照搬。",
          "學訊息請求降低陌生打擾。"
        ]),
        row("技術該怎麼調", [
          "需要邀請連結、入群申請、來源歸因。",
          "需要一鍵開聊連結與商業檔案路由。",
          "需要 QR 生命週期、活動來源、入口權限。",
          "需要官方帳號 / 群組 / 社群聊天室分流。",
          "若做探索，需推薦風險訊號與洗版攻擊防護。",
          "需要請求收件箱、封鎖、檢舉。"
        ])
      ],
      notification: [
        row("應學哪個行為", [
          "學資料夾、靜音、提及，但不要依賴使用者整理全部。",
          "學聊天 / 更新分區。",
          "學服務通知分流，但要避免入口爆炸。",
          "學官方帳號通知可封鎖。",
          "學大社群通知粒度，但不要照搬過細設定。",
          "學訊息請求與隱私預覽。"
        ]),
        row("技術該怎麼調", [
          "通知路由要含聊天類型、資料夾、提及狀態。",
          "通知資料模型要分聊天、更新、社群。",
          "服務通知、公眾號、小程序事件要獨立路由。",
          "官方帳號推播要有取消訂閱與封鎖狀態。",
          "角色提及、頻道靜音、討論串訂閱要可建模。",
          "訊息請求、隱私預覽、靜音要作為一級狀態。"
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
    });

    renderModule(modules[0]);

    const wrap = document.querySelector(".benchmark-master-wrap");
    if (wrap) wrap.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);
  }

  init();
})();
