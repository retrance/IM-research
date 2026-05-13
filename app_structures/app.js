const icon = (name) => `assets/icons/ui/${name}.svg`;

const apps = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "assets/icons/whatsapp.svg",
    colors: ["#25D366", "#0B7D43", "#5B7CFA", "#FFD166", "#F2FFF6"],
    title: "WhatsApp Feature Ecosystem",
    subtitle: "Account identity, chat core, social surfaces, business layers, AI, and policy controls",
    hub: "Layered WhatsApp Flow",
    diagram: "whatsapp",
    overview: "WhatsApp is organized as a layered system: account identity enables the chat core; chat launches groups, calls, Status, Channels, and business conversations; platform APIs and external systems scale those conversations; Meta AI and trust controls cut across the experience.",
    flows: [
      "Account identity, sessions, contacts, and profiles feed the chat core",
      "Chat Core hosts groups, launches calls, and opens Status replies back into conversations",
      "Groups can organize larger Community Spaces with announcements and admin structure",
      "Status and Updates can lead to Channels for one-to-many following",
      "Business Conversation Layer adds merchant tools to Chat Core",
      "Business Platform connects chat workflows to APIs, templates, integrations, and external systems",
      "Meta AI is user-invoked assistance across chat, search, and support surfaces",
      "Trust, privacy, and policy controls govern every layer and integration",
    ],
    trust: [
      "End-to-end encryption for personal messages and calls",
      "Privacy controls",
      "Consent",
      "Spam limits",
      "Reporting/blocking",
      "Business verification",
      "Template rules",
      "Abuse prevention",
      "Audit/policy controls",
    ],
    clusters: [
      {
        title: "Account & Devices",
        icon: icon("user"),
        summary: "Account and device foundations identify the user, shape discoverability, and determine which sessions can access WhatsApp.",
        groups: [
          ["Phone identity", ["Phone number", "SMS/call verification", "Change number", "Account recovery", "Delete account"]],
          ["Profile", ["Profile name", "Profile photo", "About text", "Avatar", "Profile visibility", "About visibility", "Profile photo visibility"]],
          ["Contacts", ["Phone contact sync", "QR code", "Contact cards", "Favorites", "Invite links", "Blocked contacts", "Business contact discovery"]],
          ["Sessions and devices", ["WhatsApp Web", "Desktop apps", "Companion phones", "Android tablets", "iPad app availability varies by rollout", "Wear OS where supported", "Active session review"]],
          ["Account security", ["Two-step verification", "Passkeys where supported", "Security notifications", "Device review", "Account recovery", "Change number", "Delete account"]],
        ],
      },
      {
        title: "Chat Core",
        icon: icon("message-circle"),
        summary: "Chat Core is the transport layer for personal chats, business chats, group-message transport, media, voice notes, receipts, search, and notifications.",
        groups: [
          ["Conversation types", ["1:1 chat", "Business chat", "Group-message transport", "Replies", "Quoted replies", "Forwards", "Edits", "Delete for everyone"]],
          ["Media", ["Photos", "Videos", "Documents", "Camera", "Location sharing", "Contacts", "View-once media", "Media gallery"]],
          ["Voice notes", ["Voice notes", "Playback speed", "Voice message transcription where available by language/account", "Hands-free recording", "Forward voice notes"]],
          ["Receipts and state", ["Delivery receipts", "Read receipts", "Message info", "Last seen", "Online status", "Typing indicators"]],
          ["Search and organization", ["Search", "Message history", "Chat filters", "Unread filter", "Groups filter", "Pinned chats", "Starred messages", "Archived chats"]],
          ["Notifications", ["Message notifications", "Group notifications", "Mentions", "Muted chats", "Notification previews", "Call notifications"]],
        ],
      },
      {
        title: "Groups & Communities",
        icon: icon("users"),
        summary: "Groups and Communities use Chat Core transport but add multi-person structure, admin controls, events, announcements, and membership rules.",
        groups: [
          ["Group chats", ["Group name/photo", "Description", "Invite links", "QR invite", "Mentions", "Shared media/files", "Group search"]],
          ["Admins", ["Admin roles", "Member approval", "Who can send messages", "Who can edit group info", "Remove members", "Admin-only settings"]],
          ["Group activities", ["Polls", "Events", "Event RSVP", "Pinned messages", "Announcements", "Shared files", "Group call entry"]],
          ["Community structure", ["Community home", "Announcement group", "Related member groups", "Join requests", "Member visibility controls", "Admin tools"]],
        ],
      },
      {
        title: "Calls",
        icon: icon("phone"),
        summary: "Calls launch from Chat Core and group contexts, then loop back to the same conversations for follow-up.",
        groups: [
          ["Voice calls", ["1:1 voice calls", "Group voice calls", "Call history", "Call back", "Missed call notification"]],
          ["Video calls", ["1:1 video calls", "Group video calls", "Camera switch", "Picture-in-picture where supported by device", "Video effects where supported by device/account"]],
          ["Call entry points", ["Chat header", "Group chat header", "Calls tab", "Call links", "Scheduled calls", "Joinable calls"]],
          ["In-call tools", ["Mute", "Speaker controls", "Screen share", "Reactions", "Participant management", "Low data mode"]],
        ],
      },
      {
        title: "Status / Updates",
        icon: icon("radio"),
        summary: "Status and Updates provide lightweight sharing outside the core inbox, while replies and ad entries open back into chats.",
        groups: [
          ["Status posts", ["Photo status", "Video status", "Text status", "Voice status where supported", "24-hour ephemerality", "Status privacy"]],
          ["Replies", ["Status replies to chat", "Status reactions", "Status mentions where supported", "Share to contacts", "Forward status content where allowed"]],
          ["Lightweight sharing", ["Updates tab", "Close-contact sharing", "Audience controls", "Muted updates", "Viewed updates"]],
          ["Monetization hooks", ["Ads in Status (coming soon / rollout)", "Business chat entry from Status ads (coming soon / rollout)", "Promoted Channels (coming soon / rollout)", "Rollout by region/account eligibility"]],
        ],
      },
      {
        title: "Community Spaces",
        icon: icon("inbox"),
        summary: "Community Spaces are topic-based group hubs with announcement flows, admins, and related groups organized under one umbrella.",
        groups: [
          ["Topic-based hub", ["Community home", "Related groups", "Topic coordination", "Member group list", "Community info"]],
          ["Announcements", ["Announcement group", "Admin broadcasts", "Pinned messages", "Event notices", "One-to-many member updates"]],
          ["Admins", ["Community admins", "Group admins", "Member approval", "Member management", "Admin-only settings"]],
          ["Safety", ["Report community", "Phone number privacy for eligible communities", "Member visibility controls", "Forwarding controls", "Block/report"]],
        ],
      },
      {
        title: "Channels",
        icon: icon("send"),
        summary: "Channels are one-to-many update surfaces for public, creator, publisher, and brand following.",
        groups: [
          ["One-to-many updates", ["Text updates", "Photos", "Videos", "Stickers", "Polls", "Forward to chats/groups"]],
          ["Public following", ["Followers", "Channel links", "Directory discovery", "Country-filtered directory", "Search", "Popular/new/active lists"]],
          ["Brand and creator use", ["Brand announcements", "Creator updates", "Publisher updates", "Admin roles", "Channel analytics for eligible channels"]],
          ["Channel privacy", ["Follower phone numbers hidden from admins", "Admin phone numbers hidden from followers", "Private follow choices", "Optional forwarding controls where supported"]],
        ],
      },
      {
        title: "Business Conversation Layer",
        icon: icon("briefcase"),
        summary: "The Business Conversation Layer adds merchant tools to Chat Core so sellers and support teams can manage customer conversations.",
        groups: [
          ["Business Profile", ["Business profile", "Logo/photo", "Description", "Address", "Hours", "Website", "Business category", "Meta Verified for eligible businesses"]],
          ["Catalog", ["Catalog", "Collections", "Product/service pages", "Catalog links", "Cart", "Order message", "Payments where supported by country"]],
          ["Quick Replies", ["Greeting message", "Away message", "Saved replies", "Reusable answers", "Action buttons", "Response shortcuts"]],
          ["Labels", ["Customer labels", "Chat list filtering", "Customer notes through labels", "Sales stages", "Support queues", "Follow-up organization"]],
          ["Seller Inbox", ["Customer conversation", "Manual sales", "Support triage", "Multiple agents where eligible", "Customer context", "Click-to-WhatsApp ads"]],
          ["Basic automation", ["Greeting message automation", "Away message automation", "Quick replies", "Labels and chat organization", "Business tools on linked devices", "Eligibility by country/account"]],
        ],
      },
      {
        title: "Business Platform",
        icon: icon("bot"),
        summary: "The Business Platform is the scaled/API layer for larger companies, connecting WhatsApp conversations to templates, webhooks, bots, support routing, commerce, and backend integrations.",
        groups: [
          ["Account and setup", ["WhatsApp Business Account", "Business verification", "Phone numbers", "Display names", "WhatsApp Manager", "Permissions", "Quality rating"]],
          ["Messaging API", ["Cloud API", "Send/receive messages", "Media messages", "Interactive buttons", "Lists", "Location requests", "Read receipts"]],
          ["Templates", ["Message templates", "Marketing templates", "Utility templates", "Authentication templates", "Template review", "Opt-in/quality rules"]],
          ["WhatsApp Flows", ["Flow Builder", "Flow API", "Simple templates", "Lead capture", "Appointment booking", "Data exchange"]],
          ["Webhooks", ["Webhooks", "Status callbacks", "Customer service window", "Bot routing", "Agent handoff", "Analytics events"]],
          ["CRM/helpdesk integrations", ["Inbox integrations", "CRM sync", "Helpdesk handoff", "Support routing", "Sales handoff", "Customer profile enrichment"]],
          ["Bots and routing", ["Bots", "Support routing", "Agent handoff", "FAQ automation", "Escalation rules", "Conversation analytics"]],
          ["Order/payment integrations", ["Orders", "Payments where supported by market", "Product messages where supported", "Commerce events", "Policy enforcement", "Pricing by market/category"]],
        ],
      },
      {
        title: "External Business Systems",
        icon: icon("database"),
        summary: "External systems are not WhatsApp surfaces, but they are where Business Platform integrations often read, write, route, and measure customer operations.",
        groups: [
          ["CRM", ["Customer records", "Lead ownership", "Sales stages", "Conversation history sync", "Customer profile enrichment"]],
          ["Helpdesk", ["Ticket creation", "Agent assignment", "SLA tracking", "Escalations", "Knowledge base links"]],
          ["E-commerce backend", ["Product catalog source", "Checkout state", "Order status", "Returns/refunds", "Customer account links"]],
          ["Inventory and logistics", ["Inventory availability", "Shipment status", "Delivery updates", "Store pickup", "After-sales workflows"]],
          ["Payments and analytics", ["Payment provider", "Marketing automation", "Attribution", "Campaign analytics", "Data warehouse export"]],
        ],
      },
      {
        title: "Meta AI",
        icon: icon("sparkles"),
        summary: "Meta AI is an optional, user-invoked assistance layer for search/help, writing support, product help, and business-support use cases where available by country/account.",
        groups: [
          ["Assistant", ["Meta AI chat where available by country/account", "Ask through search where available by country/account", "@Meta AI mention in supported chats", "Recommendations", "Planning help"]],
          ["Search/help", ["Search-style answers", "FAQ-style answers", "Product discovery", "Service recommendations", "Support guidance"]],
          ["Writing support", ["Drafting support where available by language/account", "Tone rewriting where available by language/account", "Message suggestions where available by account", "Creative prompts"]],
          ["Product/support assistance", ["Catalog guidance", "Order help where supported", "Support triage", "Handoff suggestions", "Response suggestions"]],
          ["Privacy boundary", ["AI only receives prompts/messages sent to it", "Availability varies by country/account", "Personal chats remain separate", "Advanced chat privacy affects AI/chat export behavior where supported"]],
        ],
      },
    ],
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: "assets/icons/telegram.svg",
    colors: ["#229ED9", "#126D99", "#7C5CFF", "#73D8FF", "#F1FBFF"],
    title: "Telegram Feature Ecosystem",
    subtitle: "Messaging, public communities, channels, bots, mini apps, and premium tools",
    hub: "Telegram",
    overview: "Telegram combines cloud messaging with public channels, large communities, bots, web apps, and creator monetization.",
    flows: ["Private messages to calls", "Groups to voice chats", "Channels to discussion groups", "Bots to payments and mini apps", "Boosts to channels and groups", "Stars to paid media"],
    trust: ["Secret chats", "Privacy settings", "Two-step verification", "Block/report", "Spam controls", "Admin moderation"],
    clusters: [
      {
        title: "Account & Devices",
        icon: icon("user"),
        summary: "Telegram identity spans phone numbers, usernames, cloud sync, and many active devices.",
        groups: [
          ["Identity", ["Phone/account", "Username", "Profile", "Bio", "Public link", "Profile photos"]],
          ["Contacts", ["Contact sync", "Phone-number discovery controls", "Invite friends", "QR code", "Shared contacts"]],
          ["Devices", ["Cloud sync", "Multi-device", "Active sessions", "Desktop app", "Web app", "Tablet support"]],
          ["Settings", ["Privacy settings", "Notification controls", "Data/storage controls", "Language", "Chat folders"]],
        ],
      },
      {
        title: "Private Messaging",
        icon: icon("message-circle"),
        summary: "Cloud chats support rich media, saved content, organization, and expressive conversation tools.",
        groups: [
          ["Chats", ["1-to-1 chats", "Replies", "Forwards", "Edit messages", "Delete messages", "Pinned chats"]],
          ["Media", ["Photos", "Videos", "Files", "Voice messages", "Video messages", "Location"]],
          ["Expression", ["Stickers", "Reactions", "Emoji status", "Polls", "Spoilers", "Formatting"]],
          ["Productivity", ["Saved messages", "Folders", "Search", "Hashtags", "Scheduled messages", "Silent messages"]],
        ],
      },
      {
        title: "Groups",
        icon: icon("users"),
        summary: "Groups scale from private circles to supergroups with permissions, topics, and moderation.",
        groups: [
          ["Group Types", ["Small groups", "Supergroups", "Public groups", "Private groups", "Invite links"]],
          ["Administration", ["Admins", "Permissions", "Slow mode", "Member approval", "Bans", "Admin logs"]],
          ["Discussion", ["Topics", "Replies", "Mentions", "Polls", "Pinned messages", "Shared media"]],
          ["Moderation", ["Spam controls", "Report tools", "Automated moderation bots", "Join requests", "Content controls"]],
        ],
      },
      {
        title: "Channels",
        icon: icon("send"),
        summary: "Channels provide one-to-many publishing with subscribers, reposts, analytics, and paid content options.",
        groups: [
          ["Publishing", ["Public broadcasts", "Private channels", "Posts", "Reposts", "Pinned posts", "Scheduled posts"]],
          ["Audience", ["Subscribers", "Reactions", "Comments through groups", "Polls", "Forwarding", "Channel directory signals"]],
          ["Creator Tools", ["Analytics", "Boosts", "Paid content", "Stars", "Admin roles", "Invite links"]],
        ],
      },
      {
        title: "Stories",
        icon: icon("radio"),
        summary: "Stories are time-limited updates for users and boosted channels, with replies, reactions, privacy controls, and profile/archive surfaces.",
        groups: [
          ["Publishing", ["User stories", "Channel stories for boosted channels", "Photos/videos", "Captions", "Stickers/location", "Story editing"]],
          ["Audience", ["Story privacy", "Replies", "Reactions", "Profile highlights", "Story archive", "View controls"]],
          ["Boost Link", ["Premium boosts", "Channel story levels", "Story posting limits", "Boost-driven channel perks"]],
        ],
      },
      {
        title: "Calls & Live",
        icon: icon("video"),
        summary: "Synchronous features cover calls, voice rooms, livestreams, and screen sharing.",
        groups: [
          ["Calls", ["Voice calls", "Video calls", "Group calls", "Call privacy", "Call history"]],
          ["Live Formats", ["Voice chats", "Live streams", "Speaker management", "Recording", "Audience participation"]],
          ["Tools", ["Screen sharing", "Noise suppression", "Raise hand", "Speaker management", "Chat alongside live"]],
        ],
      },
      {
        title: "Bots & Mini Apps",
        icon: icon("bot"),
        summary: "Bot and web app surfaces turn Telegram into a service, automation, commerce, and game platform.",
        groups: [
          ["Bots", ["Chatbots", "Inline bots", "Commands", "Bot menus", "Notifications", "Moderation bots"]],
          ["Mini Apps", ["Web apps", "Games", "Service flows", "Commerce flows", "Authentication", "Deep links"]],
          ["Payments", ["Invoices", "Payments", "Tips", "Subscriptions", "Order updates", "Bot-driven support"]],
          ["Developer Tools", ["Bot API", "Webhooks", "Login widget", "Telegram apps SDK", "Automation"]],
        ],
      },
      {
        title: "Telegram Business",
        icon: icon("briefcase"),
        summary: "Telegram Business adds customer-facing profile details, quick replies, automated greetings, away messages, and connected chatbot support to chats.",
        groups: [
          ["Business Profile", ["Opening hours", "Location", "Start page", "Business intro", "Map display", "Profile links"]],
          ["Messaging Tools", ["Quick replies", "Greeting messages", "Away messages", "Chat labels", "Folder shortcuts", "Customer replies"]],
          ["Automation", ["Connected chatbots", "Delegated replies", "FAQ responses", "Lead capture", "Support escalation"]],
        ],
      },
      {
        title: "Premium & Monetization",
        icon: icon("badge-dollar-sign"),
        summary: "Telegram monetization spans user subscriptions, boosts, stars, ads, and creator revenue tools.",
        groups: [
          ["User Premium", ["Telegram Premium", "Larger uploads", "Faster downloads", "Premium stickers", "Voice-to-text", "Profile perks"]],
          ["Community Value", ["Boosts", "Stories features", "Channel perks", "Group perks", "Custom emoji"]],
          ["Creator Money", ["Stars", "Paid media", "Subscriptions", "Creator monetization", "Tips", "Paid posts"]],
          ["Ads", ["Ads platform", "Sponsored messages", "Channel promotion", "Targeting controls", "Budgeting"]],
        ],
      },
    ],
  },
  {
    id: "wechat",
    name: "WeChat",
    icon: "assets/icons/wechat.svg",
    colors: ["#07C160", "#087D47", "#C9A227", "#55D6BE", "#F1FFF7"],
    title: "WeChat Feature Ecosystem",
    subtitle: "Messaging, social feed, payments, mini programs, services, and commerce",
    hub: "WeChat",
    overview: "WeChat is a super-app where identity, chat, social media, payments, mini programs, brands, and local services interlock.",
    flows: ["Messaging to red packets to Pay", "Official accounts to mini programs", "Mini programs to WeChat Pay", "Channels/live to shopping", "Moments to chats", "QR codes to contacts, pay, and services"],
    trust: ["Identity/security", "Payment protection", "Privacy controls", "Reporting/moderation", "Real-name/payment compliance", "Merchant rules"],
    clusters: [
      {
        title: "Identity & Contacts",
        icon: icon("user"),
        summary: "WeChat identity is built around accounts, contacts, QR codes, discovery, and official account relationships.",
        groups: [
          ["Identity", ["WeChat ID", "Phone binding", "Profile", "QR code", "Privacy settings", "Security center"]],
          ["Contacts", ["Phone/contact sync", "Friend requests", "Tags", "Favorites", "Contact cards", "Blocked contacts"]],
          ["Discovery", ["Scan", "Friend discovery", "Groups via QR", "Official account following", "Mini program entry"]],
          ["Account Services", ["Account recovery", "Device management", "Login approvals", "Language/region settings"]],
        ],
      },
      {
        title: "Messaging",
        icon: icon("message-circle"),
        summary: "Messaging blends personal chat, group coordination, rich media, stickers, and payment gestures.",
        groups: [
          ["Chats", ["1-to-1 chat", "Group chat", "Mentions", "Replies", "Message recall", "Pinned chat"]],
          ["Media", ["Voice messages", "Photos", "Videos", "Files", "Location", "Contact cards"]],
          ["Expression", ["Stickers", "Custom stickers", "Emoji", "Voice input", "Translation", "Favorites"]],
          ["Money in Chat", ["Red packets", "Transfers", "Split bills", "Payment confirmations", "Merchant service chats"]],
        ],
      },
      {
        title: "Moments & Social",
        icon: icon("heart"),
        summary: "Moments and social discovery provide the friend-network layer around private messaging.",
        groups: [
          ["Moments", ["Moments feed", "Photos", "Videos", "Text posts", "Visibility groups", "Moment visibility settings"]],
          ["Engagement", ["Likes", "Comments", "Mentions", "Share from chats", "Share from channels", "Privacy controls"]],
          ["Discovery", ["Weixin Search discovery", "Channels discovery", "People and content discovery", "Social recommendations", "Nearby/social signals where supported"]],
        ],
      },
      {
        title: "Search & Mini Games",
        icon: icon("search"),
        summary: "Weixin Search and Mini Games extend discovery beyond chats into public content, services, official accounts, mini programs, and lightweight games.",
        groups: [
          ["Weixin Search", ["Public content search", "Official account search", "Mini Program search", "Service discovery", "Content recommendations"]],
          ["Mini Games", ["Mini Games", "Game discovery", "Social sharing", "Game payments where supported by market", "Developer ecosystem"]],
          ["Discovery Links", ["Channels discovery", "Brand/service discovery", "QR and search entry", "Chat shares"]],
        ],
      },
      {
        title: "Mini Programs",
        icon: icon("sparkles"),
        summary: "Mini Programs make services, shopping, games, travel, and brand experiences accessible inside WeChat.",
        groups: [
          ["Service Types", ["Government services", "Healthcare", "Utilities", "Food delivery", "Travel", "Ticketing"]],
          ["Commerce", ["Shopping", "Coupons", "Membership", "Loyalty", "Order status", "Customer support"]],
          ["Access Points", ["Search", "QR code", "Official account menus", "Chat shares", "Nearby", "Recently used"]],
          ["Engagement", ["Games", "Brand experiences", "Notifications", "Live commerce links", "Payments"]],
        ],
      },
      {
        title: "WeChat Pay",
        icon: icon("wallet"),
        summary: "Wallet and payment tools connect person-to-person money, merchant QR payments, bills, and offline commerce.",
        groups: [
          ["Wallet", ["Balance", "Cards", "Bank linking", "Wallet services", "Bills", "Transaction history"]],
          ["Payments", ["QR payments", "Merchant scan", "Transfers", "Red packets", "In-app checkout", "Offline merchants"]],
          ["Financial Services", ["Coupons", "Transit cards where supported by city/region", "Utility bills", "Insurance/wealth links where supported by region"]],
          ["Protection", ["Payment password", "Risk controls", "Refunds", "Merchant verification", "Disputes"]],
        ],
      },
      {
        title: "Official Accounts",
        icon: icon("megaphone"),
        summary: "Official Accounts connect brands, publishers, services, support, CRM, and mini program navigation.",
        groups: [
          ["Account Types", ["Subscription accounts", "Service accounts", "Verified accounts", "Brand profiles", "Government accounts"]],
          ["Publishing", ["Articles", "Notifications", "Menus", "Rich media", "Search discovery", "Sharing"]],
          ["Service", ["Customer support", "CRM", "Membership", "Appointments", "Forms", "Mini program links"]],
          ["Operations", ["Analytics", "Follower management", "Templates", "Campaigns", "Merchant integrations"]],
        ],
      },
      {
        title: "Channels / Video",
        icon: icon("video"),
        summary: "Channels add short video, live streaming, creator discovery, and shopping links to the WeChat ecosystem.",
        groups: [
          ["Content", ["Short video", "Live streaming", "Creator posts", "Brand content", "Comments", "Sharing"]],
          ["Discovery", ["Video feed", "Search", "Follow creators", "Recommendations", "Social signals"]],
          ["Commerce", ["Shopping links", "Live shopping", "Product cards", "Coupons", "Merchant follow-up", "Pay integration"]],
          ["Creator Tools", ["Analytics", "Live tools", "Moderation", "Content management", "Official account links"]],
        ],
      },
    ],
  },
  {
    id: "line",
    name: "LINE",
    icon: "assets/icons/line.svg",
    colors: ["#06C755", "#057D38", "#F2C94C", "#6B7280", "#F5FFF8"],
    title: "LINE Feature Ecosystem",
    subtitle: "Messaging, social communities, official accounts, commerce, and services",
    hub: "LINE",
    overview: "LINE combines personal messaging with expressive stickers, calls, OpenChat communities, official accounts, ads, and services.",
    flows: ["Chats to calls", "OpenChat to topic discovery", "Official accounts to coupons and commerce", "Business platform to official accounts", "Ads to services", "Sticker store to chats"],
    trust: ["Privacy controls", "Block/report", "Spam prevention", "Account security", "Business compliance", "Community moderation"],
    clusters: [
      {
        title: "Account & Friends",
        icon: icon("user"),
        summary: "Friend identity and contact discovery help users build their LINE social graph.",
        groups: [
          ["Identity", ["LINE ID", "Phone/contact sync", "Profile", "Status message", "Avatar", "QR code"]],
          ["Friend Graph", ["Friend add", "Invite links", "Friend recommendations", "Groups", "Favorites", "Hidden users"]],
          ["Access", ["Multi-device", "Desktop app", "Account transfer", "Password/login", "Device management", "Notification settings"]],
          ["Privacy", ["Block", "Hide", "LINE VOOM visibility/settings", "Letter Sealing encryption", "Friend request controls"]],
        ],
      },
      {
        title: "Chats",
        icon: icon("message-circle"),
        summary: "LINE chat centers on fast messaging, rich media, stickers, reactions, and lightweight organization.",
        groups: [
          ["Conversation", ["1-to-1 chat", "Group chat", "Mentions", "Replies", "Message search", "Pinned chats"]],
          ["Media", ["Photos", "Videos", "Files", "Voice messages", "Location", "Albums"]],
          ["Expression", ["Stickers", "Emoji", "Reactions", "Themes", "GIF-like stickers", "Sticker suggestions"]],
          ["Utilities", ["Keep/memos", "Polls", "Events", "Announcements", "Translation where supported", "Chat folders where supported"]],
        ],
      },
      {
        title: "Calls",
        icon: icon("phone"),
        summary: "Calls extend LINE conversations into voice, video, groups, and expressive live effects.",
        groups: [
          ["Call Types", ["Voice calls", "Video calls", "Group calls", "Call history", "Call notifications"]],
          ["Call Tools", ["Screen sharing", "Effects", "Filters", "Backgrounds", "Speaker controls", "Camera controls"]],
          ["Group Experiences", ["Watch together features where supported", "Large group calls", "Invite from chat", "In-call reactions"]],
        ],
      },
      {
        title: "OpenChat",
        icon: icon("users"),
        summary: "OpenChat creates topic-based public or semi-public communities with discovery and moderation.",
        groups: [
          ["Community", ["Topic communities", "Anonymous profiles", "Rooms", "Search/discovery", "Join requests", "Invites"]],
          ["Moderation", ["Admins", "Rules", "Member controls", "Report tools", "Content moderation", "Spam prevention"]],
          ["Engagement", ["Events/discussion", "Polls", "Pinned posts", "Announcements", "Files/media", "Topic coordination"]],
        ],
      },
      {
        title: "LINE VOOM",
        icon: icon("radio"),
        summary: "LINE VOOM is LINE's social content and discovery surface for posts, creator or brand content, follows, engagement, and visibility controls.",
        groups: [
          ["Content", ["VOOM posts", "Photos/videos", "Creator content", "Brand content", "Recommended posts", "Follows"]],
          ["Engagement", ["Likes", "Comments", "Shares", "Follow relationships", "Notifications"]],
          ["Controls", ["Visibility settings", "Hide/block", "Report", "Recommendation controls"]],
        ],
      },
      {
        title: "Official Accounts",
        icon: icon("megaphone"),
        summary: "Official Accounts are the brand, publisher, support, coupon, and CRM surface inside LINE.",
        groups: [
          ["Brand Presence", ["Official account profile", "Rich menus", "Broadcasts", "Coupons", "Membership cards", "Announcements"]],
          ["Messaging", ["Chat support", "Auto-replies", "Segmented messages", "Greeting messages", "Surveys", "Reservations"]],
          ["Operations", ["CRM", "Analytics", "Follower management", "Campaign tracking", "Messaging API links"]],
          ["Commerce", ["Product links", "Coupons to store", "Appointments", "Loyalty", "LINE Pay / wallet links where available by market"]],
        ],
      },
      {
        title: "Services & Commerce",
        icon: icon("shopping-bag"),
        summary: "LINE services connect payments, shopping, news, games, wallet, and sticker purchases around chat.",
        groups: [
          ["Payments", ["LINE Pay / wallet services where available by market", "Wallet", "Transfers where available by market", "Merchant payments where available by market", "Coupons", "Receipts"]],
          ["Services", ["News", "Shopping", "Games", "Music/content services where supported by market", "Wallet services", "Local services"]],
          ["Digital Goods", ["Stickers store", "Theme store", "Emoji store", "Creator stickers", "Gift purchases", "Subscriptions where supported by market"]],
        ],
      },
      {
        title: "Business Platform",
        icon: icon("briefcase"),
        summary: "The business layer supports advertising, messaging automation, customer data, and mini app links.",
        groups: [
          ["Ads", ["LINE Ads", "Campaigns", "Audience targeting", "Retargeting", "Measurement", "Creative management"]],
          ["Messaging Platform", ["Messaging API", "Webhooks", "Automation", "Bot flows", "Rich messages", "LIFF/mini app links"]],
          ["Customer Data", ["Segments", "CRM sync", "Customer profiles", "Conversion events", "Attribution", "Compliance controls"]],
        ],
      },
    ],
  },
  {
    id: "discord",
    name: "Discord",
    icon: "assets/icons/discord.svg",
    colors: ["#5865F2", "#202052", "#A78BFA", "#57F287", "#F5F6FF"],
    title: "Discord Feature Ecosystem",
    subtitle: "Servers, channels, voice, communities, roles, bots, and subscriptions",
    hub: "Discord",
    overview: "Discord organizes communities into servers with channels, roles, live voice, apps, moderation, and monetization perks.",
    flows: ["Servers to channels", "Channels to voice/live", "Roles to permissions", "Bots to channels and moderation", "Nitro and boosts to perks", "Events to engagement"],
    trust: ["Safety center", "Privacy controls", "Report/block", "Two-factor auth", "Community guidelines", "Moderation systems"],
    clusters: [
      {
        title: "Identity",
        icon: icon("user"),
        summary: "User identity spans profiles, friends, DMs, status, and subscription-based personalization.",
        groups: [
          ["Account", ["User account", "Username/display name", "Profile", "Avatar", "Pronouns/about me", "Custom status"]],
          ["Social", ["Friends", "DMs", "Group DMs", "Friend requests", "Blocked users", "Mutual servers"]],
          ["Personalization", ["Nitro profile perks", "Profile themes", "Avatar decorations", "Server profiles", "Badges", "Emoji/sticker access"]],
          ["Security", ["Two-factor auth", "Login verification", "Sessions", "Privacy controls", "Data requests"]],
        ],
      },
      {
        title: "Servers",
        icon: icon("users"),
        summary: "Servers are the main container for communities, members, roles, onboarding, and discovery.",
        groups: [
          ["Community Space", ["Communities", "Members", "Server home", "Server guide", "Rules", "Welcome screen"]],
          ["Structure", ["Roles", "Permissions", "Categories", "Channels", "Server discovery", "Onboarding"]],
          ["Administration", ["Member management", "Invites", "Verification levels", "Audit logs", "Community settings", "Server insights"]],
          ["Engagement", ["Events", "Announcements", "Membership screening", "Role selection", "Server boosts"]],
        ],
      },
      {
        title: "Channels",
        icon: icon("message-circle"),
        summary: "Channel types define the shape of conversation, media sharing, forums, threads, and staged content.",
        groups: [
          ["Text Surfaces", ["Text channels", "Threads", "Forum channels", "Media channels", "Announcements", "Pinned messages"]],
          ["Voice Surfaces", ["Voice channels", "Stage channels", "Video rooms", "Screen share spaces", "Activities"]],
          ["Content", ["Media/files", "Embeds", "Reactions", "Emoji", "Stickers", "Polls"]],
          ["Controls", ["Channel permissions", "Slow mode", "Topic", "NSFW controls", "Private channels", "Notification settings"]],
        ],
      },
      {
        title: "Voice & Live",
        icon: icon("video"),
        summary: "Real-time communication is built around always-on voice, video, activities, events, and streaming.",
        groups: [
          ["Communication", ["Voice chat", "Video chat", "Screen share", "Streaming", "Noise suppression", "Push-to-talk"]],
          ["Group Experiences", ["Activities", "Watch together", "Stage events", "Audience controls", "Event scheduling", "Co-hosting"]],
          ["Controls", ["Mute/deafen", "Speaker priority", "Voice region", "Participant management", "Permissions", "Third-party recording bots where configured"]],
        ],
      },
      {
        title: "Moderation & Governance",
        icon: icon("shield"),
        summary: "Governance tools help community teams define rules, automate safety, and handle member issues.",
        groups: [
          ["Roles & Permissions", ["Role hierarchy", "Permission overrides", "Channel access", "Admin roles", "Moderator roles"]],
          ["Safety Tools", ["AutoMod", "Rules screening", "Reports", "Timeouts", "Bans/kicks", "Raid protection"]],
          ["Governance", ["Audit logs", "Moderator notes for supported moderation tools", "Community guidelines", "Appeals workflows", "Safety alerts", "Content filters"]],
        ],
      },
      {
        title: "Bots & Apps",
        icon: icon("bot"),
        summary: "Apps and bots extend Discord with moderation, games, utilities, integrations, commands, and automation.",
        groups: [
          ["Bot Types", ["Moderation bots", "Music/tools bots", "Game bots", "Support bots", "Analytics bots", "Role bots"]],
          ["App Platform", ["Commands", "App directory", "Activities", "Embedded apps", "OAuth install", "App permissions"]],
          ["Integrations", ["Webhooks", "GitHub/Twitch/YouTube links", "CRM/support links", "Automation", "Alerts", "Custom workflows"]],
        ],
      },
      {
        title: "Monetization",
        icon: icon("badge-dollar-sign"),
        summary: "Discord monetization includes user subscriptions, server benefits, shop items, and creator/community revenue.",
        groups: [
          ["User Products", ["Nitro", "Nitro Basic", "Avatar decorations", "Profile effects", "Shop items", "Expanded uploads"]],
          ["Server Value", ["Server boosts", "Boost levels", "Custom emoji slots", "Server banner", "Audio/video quality", "Vanity URL for eligible servers"]],
          ["Creator Revenue", ["Server subscriptions", "Premium roles", "Creator/community perks", "Premium role channel access", "Member benefits"]],
          ["Server Shop", ["One-time server products", "Downloadables", "Premium role products", "Server product listings", "Member purchases"]],
        ],
      },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "assets/icons/facebook.svg",
    colors: ["#1877F2", "#0F4E9B", "#34A853", "#F4C430", "#F4F8FF"],
    title: "Facebook Feature Ecosystem",
    subtitle: "Social graph, feed, groups, pages, marketplace, messaging, and business tools",
    hub: "Facebook",
    overview: "Facebook connects identity, social graph, feed content, groups, pages, commerce, messaging, and ads into one discovery system.",
    flows: ["Profile to feed", "Feed to groups and pages", "Pages to ads", "Ads to Messenger, leads, and shops", "Marketplace to seller chat", "Groups to events"],
    trust: ["Privacy settings", "Account security", "Reporting", "Content moderation", "Ad policies", "Commerce rules"],
    clusters: [
      {
        title: "Identity & Social Graph",
        icon: icon("user"),
        summary: "Profiles, friends, followers, pages, events, and account systems form Facebook's identity graph.",
        groups: [
          ["Identity", ["Profile", "Name/photo", "Bio", "Life events", "Privacy audience", "Account center"]],
          ["Graph", ["Friends", "Followers", "Following", "Pages", "Groups", "Events"]],
          ["Access", ["Login/account", "Facebook Login", "Security checkup", "Two-factor auth", "Device sessions", "Memorialization settings"]],
          ["Social Signals", ["Birthdays", "Friend suggestions", "Mutual friends", "Tags", "Check-ins", "Recommendations"]],
        ],
      },
      {
        title: "Feed & Content",
        icon: icon("radio"),
        summary: "The feed blends posts, media, recommendations, sharing, reactions, and discovery ranking.",
        groups: [
          ["Formats", ["Posts", "Photos/videos", "Reels", "Stories", "Live video", "Links"]],
          ["Engagement", ["Reactions", "Comments", "Shares", "Saves", "Tags", "Mentions"]],
          ["Discovery", ["Recommendations", "Feed ranking", "Suggested posts", "Watch/video discovery", "Memories", "Search"]],
          ["Controls", ["Audience selector", "Hide/snooze", "Favorites", "Notifications", "Content preferences"]],
        ],
      },
      {
        title: "Groups & Communities",
        icon: icon("users"),
        summary: "Groups organize communities with privacy settings, admin tools, events, files, and moderation.",
        groups: [
          ["Group Types", ["Public groups", "Private groups", "Buy/sell groups", "Community groups", "Learning/social groups"]],
          ["Participation", ["Posts", "Comments", "Polls", "Events", "Files", "Announcements"]],
          ["Administration", ["Admin tools", "Moderation", "Membership questions", "Rules", "Post approvals", "Insights"]],
          ["Growth", ["Invites", "Recommendations", "Group discovery", "Badges", "Member requests", "Community chats for eligible groups"]],
        ],
      },
      {
        title: "Messenger",
        icon: icon("message-circle"),
        summary: "Messenger handles private chats, group conversations, calls, media, and business messaging entry points.",
        groups: [
          ["Chats", ["Private chats", "Group chats", "Replies", "Reactions", "Media", "Voice messages"]],
          ["Calls", ["Voice calls", "Video calls", "Group calls", "Screen sharing", "Call links", "Effects"]],
          ["Business", ["Business messaging", "Page inbox", "Chat plugins", "Click-to-message ads", "Automated replies", "Lead follow-up"]],
          ["Utilities", ["Search", "Message requests", "Archived chats", "Privacy controls", "Payments where supported by market"]],
        ],
      },
      {
        title: "Pages & Business",
        icon: icon("briefcase"),
        summary: "Pages give organizations a public presence, inbox, reviews, shops, appointments, and insights.",
        groups: [
          ["Presence", ["Business Page", "Profile info", "Posts", "Photos/videos", "Events", "Followers"]],
          ["Customer Tools", ["Page inbox", "Reviews", "Appointments", "FAQ/automated replies", "Call-to-action buttons", "Messenger links"]],
          ["Commerce", ["Shops/catalog", "Product tags", "Services", "Offers", "Checkout where eligible", "Order messages"]],
          ["Measurement", ["Insights", "Audience data", "Content performance", "Ad performance", "Meta Business Suite"]],
        ],
      },
      {
        title: "Ads & Discovery",
        icon: icon("megaphone"),
        summary: "Advertising tools connect targeting, boosted posts, lead forms, retargeting, and business outcomes.",
        groups: [
          ["Campaign Tools", ["Ads Manager", "Boosted posts", "Campaign objectives", "Creative testing", "Budgets", "Placements"]],
          ["Audience", ["Targeting", "Custom audiences", "Lookalikes", "Retargeting", "Pixel/conversions API", "Advantage tools"]],
          ["Lead & Message", ["Lead forms", "Click-to-message", "Instant experiences", "Page promotion", "Shops traffic", "App installs"]],
          ["Governance", ["Ad policies", "Review", "Billing", "Brand safety", "Reporting"]],
        ],
      },
      {
        title: "Marketplace & Commerce",
        icon: icon("shopping-bag"),
        summary: "Marketplace connects listings, local discovery, seller chat, and eligible checkout; Page and Instagram shops use separate Commerce Manager and catalog flows.",
        groups: [
          ["Marketplace", ["Listings", "Categories", "Local discovery", "Search", "Saved listings", "Recommendations"]],
          ["Transaction Flow", ["Seller chat", "Offers", "Pickup/shipping", "Marketplace checkout where eligible", "Order status", "Returns for eligible checkout orders"]],
          ["Business Commerce", ["Page/Instagram Shops", "Catalogs", "Product detail pages", "Website checkout", "Inventory sync", "Commerce policies"]],
          ["Trust", ["Seller ratings", "Reporting", "Purchase protection for eligible orders", "Fraud detection", "Policy enforcement"]],
        ],
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "assets/icons/instagram.svg",
    colors: ["#E4405F", "#833AB4", "#F77737", "#405DE6", "#FFF6FB"],
    title: "Instagram Feature Ecosystem",
    subtitle: "Visual content, creators, messaging, discovery, shopping, and ads",
    hub: "Instagram",
    overview: "Instagram is a visual discovery and creator platform linking content, engagement, DMs, shopping, advertising, and brand partnerships.",
    flows: ["Content to engagement", "Stories and Reels to DMs", "Discovery to content", "Business profile to shopping", "Ads to profile, shop, or DM", "Creators to brand partnerships"],
    trust: ["Privacy controls", "Comment controls", "Block/report", "Sensitive content controls", "Account security", "Brand/content policies"],
    clusters: [
      {
        title: "Identity",
        icon: icon("user"),
        summary: "Profiles anchor audiences, creator/business modes, insights, links, and relationship settings.",
        groups: [
          ["Profile", ["Profile", "Username", "Bio", "Profile photo", "Links", "Highlights"]],
          ["Audience", ["Followers", "Following", "Close friends", "Favorites", "Subscriptions for eligible creators", "Broadcast channel followers"]],
          ["Account Types", ["Personal account", "Creator account", "Business account", "Professional dashboard", "Account insights", "Category labels"]],
          ["Security", ["Account center", "Two-factor auth", "Login activity", "Privacy settings", "Blocked accounts", "Verification for eligible accounts"]],
        ],
      },
      {
        title: "Content",
        icon: icon("radio"),
        summary: "Instagram content spans feed posts, Stories, Reels, Live, carousels, channels, and collaborative formats.",
        groups: [
          ["Formats", ["Feed posts", "Stories", "Reels", "Live", "Carousels", "Broadcast channels"]],
          ["Creation Tools", ["Filters", "Music", "Effects", "Text overlays", "Templates", "Collab posts"]],
          ["Publishing", ["Captions", "Tags", "Location", "Alt text", "Scheduling for eligible accounts", "Drafts"]],
          ["Management", ["Archive", "Highlights", "Pinned posts", "Insights", "Remix where supported"]],
        ],
      },
      {
        title: "Engagement",
        icon: icon("heart"),
        summary: "Engagement signals drive social feedback, creator reach, recommendations, and relationship loops.",
        groups: [
          ["Actions", ["Likes", "Comments", "Shares", "Saves", "Mentions", "Tags"]],
          ["Social Formats", ["Collabs", "Story stickers", "Polls", "Questions", "Quizzes", "Countdowns"]],
          ["Community", ["Comment replies", "Pinned comments", "Creator replies", "Live reactions", "Badges for eligible creators"]],
          ["Controls", ["Comment filters", "Hidden words", "Limit interactions", "Restrict", "Report", "Block"]],
        ],
      },
      {
        title: "Messaging",
        icon: icon("message-circle"),
        summary: "DMs connect private sharing, story replies, business support, notes, groups, and creator broadcasts.",
        groups: [
          ["DMs", ["DMs", "Group chats", "Media sharing", "Voice messages", "Video calls", "Message reactions"]],
          ["Content Links", ["Story replies", "Reel shares", "Post shares", "Notes", "Mentions", "Quick reactions"]],
          ["Business Messaging", ["Business inbox", "Saved replies", "FAQ automation", "Lead follow-up", "Click-to-message ads", "Appointments"]],
          ["Controls", ["Message requests", "Hidden requests", "Vanish mode where supported", "Privacy settings", "Blocking/reporting"]],
        ],
      },
      {
        title: "Discovery",
        icon: icon("search"),
        summary: "Discovery surfaces use search, Explore, hashtags, recommendations, and Reels feeds to route attention.",
        groups: [
          ["Surfaces", ["Explore", "Search", "Reels feed", "Home recommendations", "Suggested accounts", "Audio pages"]],
          ["Signals", ["Hashtags", "Keywords", "Location", "Trending audio", "Engagement patterns", "Creator discovery"]],
          ["Controls", ["Sensitive content controls", "Not interested", "Favorites", "Mute", "Following feed", "Recommendation controls"]],
        ],
      },
      {
        title: "Business & Shopping",
        icon: icon("shopping-bag"),
        summary: "Business tools connect profiles, shops, product tags, insights, creator marketplace, and customer conversion.",
        groups: [
          ["Commerce", ["Product tags", "Shops/catalog", "Collections", "Product detail pages", "Checkout on Instagram where eligible", "Website checkout or seller messages"]],
          ["Conversion", ["Link stickers", "Appointments/leads", "Contact buttons", "Action buttons", "DM conversion", "Website clicks"]],
          ["Business Tools", ["Insights", "Professional dashboard", "Creator marketplace where available for professional accounts", "Branded content tools", "Partnership labels", "Saved replies"]],
        ],
      },
      {
        title: "Ads & Monetization",
        icon: icon("badge-dollar-sign"),
        summary: "Ads and monetization span sponsored media, boosting, creator partnerships, subscriptions, and revenue programs.",
        groups: [
          ["Ads", ["Sponsored posts", "Reels ads", "Story ads", "Explore ads", "Boosting", "Click-to-message ads"]],
          ["Campaigns", ["Targeting", "Budgets", "Creative formats", "Lead ads", "Shop ads where eligible", "Retargeting"]],
          ["Creator Money", ["Creator partnerships", "Branded content", "Subscriptions", "Bonuses for eligible creators", "Gifts for eligible creators", "Badges for eligible creators"]],
          ["Policies", ["Ad review", "Branded content rules", "Music rights", "Commerce eligibility", "Safety policies"]],
        ],
      },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "assets/icons/tiktok.svg",
    colors: ["#111111", "#000000", "#00F2EA", "#FF0050", "#F7F9FB"],
    title: "TikTok Feature Ecosystem",
    subtitle: "Short video discovery, creators, live, commerce, messaging, and ads",
    hub: "TikTok",
    overview: "TikTok centers on short video discovery, creator tools, engagement loops, LIVE, commerce, messaging, and ads.",
    flows: ["Creation to For You feed", "For You to engagement", "Engagement to recommendations", "Creators to LIVE", "LIVE to gifts and shopping where available by market", "TikTok Shop to product links and checkout where available by market", "Ads to content, shop, and lead forms"],
    trust: ["Safety settings", "Privacy controls", "Comment filters", "Report/block", "Age/content controls", "Seller and ads policies"],
    clusters: [
      {
        title: "Identity",
        icon: icon("user"),
        summary: "TikTok identity links profiles, followers, analytics, creator/business modes, and safety settings.",
        groups: [
          ["Profile", ["Profile", "Username", "Bio", "Profile photo/video", "Link in bio", "Pinned videos"]],
          ["Audience", ["Followers", "Following", "Friends", "Creator account", "Business account", "LIVE followers"]],
          ["Analytics", ["Creator analytics", "Business analytics", "Video performance", "Audience insights", "LIVE analytics", "Shop/affiliate metrics"]],
          ["Settings", ["Privacy", "Family pairing", "Account security", "Blocked users", "Verification for eligible accounts"]],
        ],
      },
      {
        title: "Content Creation",
        icon: icon("video"),
        summary: "Creation tools help users produce, remix, edit, template, and publish short-form video.",
        groups: [
          ["Formats", ["Short videos", "Photo posts", "Stories where supported", "LIVE clips", "Playlists", "Series for eligible creators"]],
          ["Tools", ["Editing tools", "Sounds/music", "Effects", "Filters", "Text/captions", "Voiceover"]],
          ["Remix", ["Duets", "Stitch", "Templates", "Green screen", "CapCut-style editing links", "Creator tools"]],
          ["Publishing", ["Captions", "Hashtags", "Mentions", "Location where supported", "Drafts", "Scheduled posts for business"]],
        ],
      },
      {
        title: "Discovery",
        icon: icon("search"),
        summary: "Discovery routes attention through For You, Following, search, hashtags, trends, and recommendations.",
        groups: [
          ["Feeds", ["For You feed", "Following feed", "Friends feed where supported", "LIVE feed", "Shop feed where available by market"]],
          ["Search", ["Search", "Hashtags", "Sounds", "Effects", "Creators", "Products"]],
          ["Trends", ["Trending sounds", "Challenges", "Recommendations", "Topic pages", "Location signals where supported", "Trend discovery"]],
          ["Controls", ["Not interested", "Keyword filters", "Content preferences", "Refresh feed", "Restricted mode"]],
        ],
      },
      {
        title: "Engagement",
        icon: icon("heart"),
        summary: "Engagement actions feed recommendations, creator relationships, and viral distribution.",
        groups: [
          ["Actions", ["Likes", "Comments", "Shares", "Saves", "Follows", "Reposts"]],
          ["Conversation", ["Comment threads", "Pinned comments", "Creator replies", "Q&A for eligible creators", "Mentions", "Stickers/polls where supported"]],
          ["Recommendation Signals", ["Watch time", "Completion", "Replays", "Shares", "Saves", "Comment activity"]],
          ["Controls", ["Comment filters", "Delete comments", "Limit comments", "Report", "Block", "Mute"]],
        ],
      },
      {
        title: "Messaging & Community",
        icon: icon("message-circle"),
        summary: "Messaging and community features turn content discovery into relationships, replies, and fandoms.",
        groups: [
          ["Messaging", ["DMs", "Group chats where supported", "Video sharing", "Inbox", "Message requests", "Privacy controls"]],
          ["Community", ["Comment threads", "Creator replies", "LIVE chat", "Communities/fandoms", "Follower interactions", "Creator playlists"]],
          ["Creator Relationship", ["Q&A", "Fan comments", "Mentions", "Stitch/Duet response chains", "Bulletin Board for eligible creators"]],
        ],
      },
      {
        title: "LIVE",
        icon: icon("radio"),
        summary: "LIVE supports real-time creator engagement, gifts, events, moderation, and live commerce.",
        groups: [
          ["Live Formats", ["Live streaming", "Multi-guest", "Co-hosts", "Events", "Live goals", "LIVE replays where supported"]],
          ["Engagement", ["LIVE chat", "Gifts", "Stickers", "Q&A", "Polls", "Moderator tools"]],
          ["Commerce", ["Live shopping", "Product pins", "Coupons", "Affiliate sales", "Seller demos", "Checkout links"]],
          ["Safety", ["Moderation", "Keyword filters", "Age restrictions", "Report tools", "Host controls"]],
        ],
      },
      {
        title: "Commerce & Ads",
        icon: icon("shopping-bag"),
        summary: "Commerce and advertising connect creators, sellers, products, content, leads, and purchase flows.",
        groups: [
          ["Shop", ["TikTok Shop where available by market", "Product links", "Product showcase", "Checkout where available by market", "Orders", "Returns/customer service"]],
          ["Creator Commerce", ["Affiliate creators", "Creator marketplace", "Live selling", "Product samples", "Commission tracking", "Shop videos"]],
          ["Ads", ["Spark Ads", "In-feed ads", "TopView for qualified customers", "Lead ads", "Shop ads where available by market", "Business Center"]],
          ["Operations", ["Pixel/events API", "Catalogs", "Seller Center", "Ads reporting", "Policy review", "Brand safety"]],
        ],
      },
    ],
  },
  {
    id: "taobao",
    name: "Taobao",
    icon: "assets/icons/taobao.svg",
    colors: ["#FF5000", "#A93200", "#E53935", "#FFC247", "#FFF7EF"],
    title: "Taobao Feature Ecosystem",
    subtitle: "Marketplace shopping, search, sellers, content, live commerce, and payments",
    hub: "Taobao",
    overview: "Taobao connects marketplace discovery, product detail, seller stores, live commerce, checkout, payments, logistics, and after-sales service.",
    flows: ["Discovery to product detail", "Product detail to cart", "Cart to checkout and payment", "Payment to logistics and after-sales", "Seller chat to product decision", "Live content to product detail and coupons"],
    trust: ["Buyer protection", "Reviews/ratings", "Seller verification", "Disputes/refunds", "Platform rules", "Fraud controls"],
    clusters: [
      {
        title: "User Account",
        icon: icon("user"),
        summary: "The shopper account ties profile, addresses, saved items, orders, membership, and support together.",
        groups: [
          ["Profile", ["Login/profile", "Account settings", "Membership", "Coupons wallet", "Favorites", "Following stores"]],
          ["Shopping Data", ["Address book", "Order history", "Browsing history", "Saved searches", "Wishlist/favorites", "Cart"]],
          ["Support", ["Customer service", "Refund/return center", "Disputes", "Notifications", "Messages", "Account security"]],
          ["Personalization", ["Recommendations", "Membership levels", "Campaign eligibility", "Preference signals", "Local settings"]],
        ],
      },
      {
        title: "Product Discovery",
        icon: icon("search"),
        summary: "Taobao discovery blends search, recommendations, categories, deals, image search, campaigns, and content.",
        groups: [
          ["Search", ["Keyword search", "Image search", "Filters", "Sorting", "Autocomplete", "Search ads"]],
          ["Browse", ["Recommendations", "Categories", "Deals", "Campaigns", "Personalized feeds", "New arrivals"]],
          ["Promotion", ["Coupons", "Flash sales", "Major shopping festivals", "Brand campaigns", "Membership deals", "Store promotions"]],
          ["Content Entry", ["Short video", "Livestreaming", "Influencer posts", "Product demos", "Social proof", "Trend pages"]],
        ],
      },
      {
        title: "AI Shopping Assistant",
        icon: icon("sparkles"),
        summary: "AI shopping tools support conversational discovery, comparison, try-on or visual assistance where supported, price tracking, logistics, and after-sales help.",
        groups: [
          ["Shopping Help", ["Conversational search", "Product comparison", "AI try-on where supported", "Price tracking", "Shopping recommendations"]],
          ["Order Help", ["Logistics help", "After-sales help", "Refund guidance", "Customer-service routing"]],
          ["Merchant Support", ["AI content support", "Merchant operations help", "Product guidance", "Campaign assistance"]],
        ],
      },
      {
        title: "Product Detail",
        icon: icon("store"),
        summary: "Product pages make purchase decisions with information, reviews, variants, seller signals, and promotions.",
        groups: [
          ["Information", ["Product info", "Images/video", "Specifications", "Variants", "Sizing/options", "Price"]],
          ["Confidence", ["Reviews", "Ratings", "Seller info", "Q&A", "Buyer photos", "Service promises"]],
          ["Promotion", ["Coupons", "Bundles", "Campaign price", "Shipping offers", "Membership price", "Limited-time deals"]],
          ["Actions", ["Add to cart", "Buy now", "Favorite", "Share", "Seller chat", "Follow store"]],
        ],
      },
      {
        title: "Shopping Flow",
        icon: icon("shopping-bag"),
        summary: "The shopping flow moves from cart and checkout through coupons, shipping, tracking, returns, and support.",
        groups: [
          ["Cart", ["Cart", "Select items", "Quantity", "Variants", "Store grouping", "Cart promotions"]],
          ["Checkout", ["Checkout", "Coupons", "Address selection", "Shipping options", "Invoice options", "Order confirmation"]],
          ["Post-purchase", ["Order tracking", "Logistics updates", "Delivery confirmation", "Returns", "Refunds", "After-sales service"]],
          ["Messaging", ["Seller chat", "Customer service chat", "Order notifications", "Dispute communication", "Review prompts"]],
        ],
      },
      {
        title: "Sellers & Stores",
        icon: icon("briefcase"),
        summary: "Seller infrastructure covers storefronts, inventory, chat, promotions, followers, service ratings, and operations.",
        groups: [
          ["Storefront", ["Store pages", "Store categories", "Store followers", "Brand/store identity", "Featured products", "Store search"]],
          ["Operations", ["Inventory", "Product publishing", "Promotions", "Coupon setup", "Order management", "Customer service"]],
          ["Trust Signals", ["Seller ratings", "Service ratings", "Delivery performance", "Store verification", "Review management", "Platform rules"]],
          ["Growth", ["Paid promotion", "Campaign participation", "Livestreaming", "Influencer collaboration", "Follower messaging"]],
        ],
      },
      {
        title: "Content & Live Commerce",
        icon: icon("video"),
        summary: "Content and live commerce create product demand through demos, creators, coupons, and real-time engagement.",
        groups: [
          ["Formats", ["Short video", "Livestreaming", "Influencer posts", "Product demos", "Guides", "Reviews"]],
          ["Live Tools", ["Live coupons", "Pinned products", "Flash deals", "Chat/Q&A", "Host recommendations", "Follow host"]],
          ["Conversion", ["Product detail links", "Add to cart from live", "Limited-time offers", "Social proof", "Creator endorsement", "Replay clips"]],
        ],
      },
      {
        title: "Payments & Ecosystem",
        icon: icon("wallet"),
        summary: "Payment, logistics, after-sales, buyer protection, and Alibaba ecosystem services complete the transaction loop.",
        groups: [
          ["Payments", ["Alipay", "Alipay checkout", "Installments where supported", "Refunds", "Payment security", "Receipts"]],
          ["Fulfillment", ["Logistics", "Shipping updates", "Cross-border shipping by seller/market", "Pickup options", "Delivery confirmation"]],
          ["After-sales", ["Returns", "Refunds", "Exchanges", "Warranty/service claims", "Disputes", "Buyer protection"]],
          ["Ecosystem", ["Alibaba ecosystem links", "Merchant tools", "Data/ads services", "Cross-platform promotions", "Loyalty programs"]],
        ],
      },
    ],
  },
  {
    id: "intercom",
    name: "Intercom",
    icon: "assets/icons/intercom.svg",
    colors: ["#1F8DED", "#0D1321", "#00B3A4", "#84CC16", "#F3FAFF"],
    title: "Intercom Feature Ecosystem",
    subtitle: "Customer support, AI agents, inbox, help center, messaging, and automation",
    hub: "Intercom",
    overview: "Intercom links customer entry points, inbox operations, AI automation, help content, customer data, outbound messaging, and reporting.",
    flows: ["Entry points to inbox", "Help center to self-service deflection", "AI agent to resolution or handoff", "Customer data to routing and personalization", "Outbound to entry points", "Reporting to workflow improvement"],
    trust: ["Permissions", "Data privacy", "Security", "Audit/admin controls", "Compliance settings", "Data retention"],
    clusters: [
      {
        title: "Customer Entry Points",
        icon: icon("message-circle"),
        summary: "Customers can start conversations from websites, apps, email, social channels, SDKs, and help content.",
        groups: [
          ["Messenger", ["Website messenger", "In-app chat", "Mobile SDK", "Launcher", "Article suggestions", "Conversation starters"]],
          ["Channels", ["Email", "Social channels", "WhatsApp where integrated", "Phone/SMS through integrations", "Help center", "API-created conversations"]],
          ["Context", ["Visitor data", "Logged-in user context", "Company context", "Language", "Page URL", "Campaign source"]],
        ],
      },
      {
        title: "Inbox",
        icon: icon("inbox"),
        summary: "Inbox tools coordinate conversations, assignment, SLAs, collaboration, and team workflows.",
        groups: [
          ["Conversation Handling", ["Conversations", "Replies", "Assignment", "Team inboxes", "Priority", "Snooze"]],
          ["Collaboration", ["Internal notes", "Mentions", "Teammate collaboration", "Conversation history", "Macros/saved replies", "Side conversations where supported by plan"]],
          ["Operations", ["SLAs", "Views", "Queues", "Tags", "Conversation states", "Workload management"]],
          ["Tickets", ["Customer tickets", "Back-office tickets", "Tracker tickets", "Ticket status", "Ownership", "Escalation"]],
          ["Quality", ["CSAT prompts", "Conversation ratings", "Handoff tracking", "Audit trail", "Manager review"]],
        ],
      },
      {
        title: "AI & Automation",
        icon: icon("bot"),
        summary: "AI and automation triage, answer, route, summarize, and assist support teams.",
        groups: [
          ["AI Agent", ["AI agent", "Resolution automation", "Source-grounded answers", "Inbox handoff", "Conversation context", "Escalation rules"]],
          ["Copilot", ["AI copilot", "Suggested replies", "Summaries", "Tone adjustment", "Article suggestions", "Next-best action"]],
          ["Workflows", ["Triage", "Routing", "Qualification", "Conditional branches", "Data capture", "Bot paths"]],
          ["Governance", ["Answer sources", "Confidence controls", "Human handoff", "Testing", "Reporting", "Permissions"]],
        ],
      },
      {
        title: "Help Center",
        icon: icon("search"),
        summary: "Help content supports self-service, AI answers, search, and operational knowledge management.",
        groups: [
          ["Content", ["Articles", "Collections", "Sections", "Localization", "Versioning where supported by workspace/plan", "Authoring workflow"]],
          ["Self-service", ["Search", "Article recommendations", "Fin AI Agent / AI answers", "Content suggestions", "Contact deflection", "Related articles"]],
          ["Management", ["Content performance", "Gaps", "Article feedback", "Publishing", "SEO settings", "Brand styling"]],
        ],
      },
      {
        title: "Customer Data",
        icon: icon("database"),
        summary: "Customer data powers personalization, routing, segmentation, and conversation context.",
        groups: [
          ["Profiles", ["User profiles", "Companies", "Conversation history", "Account owner", "Plan/status", "Custom attributes"]],
          ["Behavior", ["Events", "Page views", "Product usage", "Segments", "Tags", "Lifecycle stage"]],
          ["Data Operations", ["Imports", "API updates", "Identity verification", "Data sync", "Data retention", "Permissions"]],
          ["Activation", ["Routing logic", "Personalization", "Targeting", "SLA rules", "Priority rules", "Reporting dimensions"]],
        ],
      },
      {
        title: "Outbound",
        icon: icon("megaphone"),
        summary: "Outbound tools trigger proactive education, onboarding, surveys, and campaigns across channels.",
        groups: [
          ["Messages", ["Emails", "Push messages", "In-app messages", "Banners", "Posts", "Chats"]],
          ["Product Adoption", ["Product tours", "Tooltips", "Checklists in Messenger where supported by plan", "Announcements", "Feature education"]],
          ["Campaigns", ["Audience targeting", "Scheduling", "A/B tests where supported by plan", "Surveys", "NPS/CSAT", "Goal tracking"]],
          ["Personalization", ["Segments", "Behavior triggers", "Company data", "Localization", "Frequency controls"]],
        ],
      },
      {
        title: "Reporting & Integrations",
        icon: icon("chart-no-axes-combined"),
        summary: "Reporting and integrations connect support performance to CRM, analytics, data warehouse, and operational systems.",
        groups: [
          ["Support Metrics", ["Support metrics", "Conversation volume", "Response time", "Resolution time", "SLA performance", "CSAT"]],
          ["Analytics", ["Funnels", "Deflection reports", "AI performance", "Article performance", "Team workload", "Custom reports"]],
          ["Integrations", ["CRM integrations", "Data warehouse", "Slack/Teams", "Ticketing tools", "Apps/API", "Webhooks"]],
          ["Admin", ["Permissions", "Workspace settings", "Security", "Audit/admin controls", "Compliance settings", "Billing"]],
        ],
      },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "assets/icons/linkedin.svg",
    colors: ["#0A66C2", "#063B73", "#0EA5A3", "#A3E635", "#F4F8FC"],
    title: "LinkedIn Feature Ecosystem",
    subtitle: "Professional identity, network, content, jobs, recruiting, sales, and learning",
    hub: "LinkedIn",
    overview: "LinkedIn connects professional identity, network growth, content, jobs, recruiting, sales, learning, and ads around career and business intent.",
    flows: ["Profile to network", "Network to feed", "Feed to opportunities", "Jobs to applications", "Recruiting to candidate outreach", "Sales Navigator to leads and messaging", "Learning to profile skills"],
    trust: ["Professional identity", "Privacy settings", "Report/block", "Verification for eligible profiles", "Platform policies", "Ads/recruiting rules"],
    clusters: [
      {
        title: "Professional Identity",
        icon: icon("user"),
        summary: "Professional profiles package experience, skills, recommendations, company affiliation, and credibility signals.",
        groups: [
          ["Profile", ["Profile", "Headline", "About", "Experience", "Education", "Featured section"]],
          ["Credentials", ["Skills", "Recommendations", "Endorsements", "Certifications", "Licenses", "Verification for eligible profiles"]],
          ["Presence", ["Creator tools", "Company page", "Services page", "Profile URL", "Open to work", "Hiring frame"]],
          ["Insights", ["Profile views", "Search appearances", "Creator analytics", "Profile dashboard / analytics", "Privacy controls"]],
        ],
      },
      {
        title: "Network",
        icon: icon("users"),
        summary: "The professional graph is built from connections, followers, invitations, groups, events, and messaging.",
        groups: [
          ["Relationships", ["Connections", "Followers", "Following", "Invitations", "People you may know", "Alumni/company networks"]],
          ["Communication", ["Messaging", "InMail for eligible plans", "Group messages", "Voice/video links where supported", "Message requests"]],
          ["Communities", ["Groups", "Events", "Newsletters followers", "Creator follow graph", "Company followers"]],
          ["Controls", ["Who can connect", "Visibility settings", "Blocking", "Report", "Notification settings"]],
        ],
      },
      {
        title: "Feed & Content",
        icon: icon("radio"),
        summary: "Feed and publishing tools distribute professional posts, articles, newsletters, engagement, and thought leadership.",
        groups: [
          ["Formats", ["Posts", "Articles", "Newsletters", "Videos", "Documents", "Polls"]],
          ["Engagement", ["Comments", "Reactions", "Shares", "Reposts", "Mentions", "Follows"]],
          ["Distribution", ["Feed ranking", "Hashtags", "Creator discovery", "Company page posts", "Notifications", "Search"]],
          ["Creator Tools", ["Analytics", "Creator tools", "LinkedIn Live for eligible members/pages", "Collaborative articles where supported", "Newsletter tools"]],
        ],
      },
      {
        title: "Jobs",
        icon: icon("briefcase"),
        summary: "Jobs features connect candidates, companies, alerts, applications, and applicant tracking flows.",
        groups: [
          ["Discovery", ["Job search", "Recommendations", "Job alerts", "Company pages", "Salary insights where available by market", "Remote filters"]],
          ["Application", ["Applications", "Easy Apply", "Resume/profile apply", "Screening questions", "Applicant tracking links", "Saved jobs"]],
          ["Candidate Tools", ["Open to work", "Skills matched to jobs", "Interview prep", "Application status where supported by job poster", "Messages with recruiters"]],
          ["Employer Surface", ["Job posts", "Company branding", "Job slots", "Promoted jobs", "Analytics"]],
        ],
      },
      {
        title: "Recruiting",
        icon: icon("search"),
        summary: "Recruiting products help employers search talent, reach candidates, manage pipelines, and build employer brand.",
        groups: [
          ["Sourcing", ["Recruiter tools", "Talent search", "Filters", "Saved searches", "Recommended candidates", "Talent pools"]],
          ["Outreach", ["InMail", "Candidate messaging", "Templates", "Follow-ups", "Response tracking", "Calendar links"]],
          ["Pipeline", ["Candidate pipeline", "Projects", "Notes", "Collaboration", "Applicant review", "ATS integrations"]],
          ["Branding", ["Employer branding", "Career pages", "Job posts", "Life pages", "Recruiting analytics", "Diversity insights where supported by product/region"]],
        ],
      },
      {
        title: "Sales & Business",
        icon: icon("handshake"),
        summary: "Sales products support lead discovery, account lists, outreach, insights, and CRM coordination.",
        groups: [
          ["Sales Navigator", ["Sales Navigator", "Lead search", "Account lists", "Saved leads", "Buyer intent signals", "Relationship maps for eligible plans"]],
          ["Outreach", ["InMail", "Messaging", "Warm introductions", "Lead recommendations", "Alerts", "Notes"]],
          ["Account Intelligence", ["Company insights", "Account news", "Job changes", "TeamLink for eligible plans", "CRM sync", "Pipeline integrations"]],
          ["Business Presence", ["Company pages", "Showcase pages", "Product Pages for eligible industries", "Employee advocacy", "Analytics"]],
        ],
      },
      {
        title: "Learning & Ads",
        icon: icon("graduation-cap"),
        summary: "Learning and advertising connect skills development, certifications, sponsored content, lead generation, and campaigns.",
        groups: [
          ["Learning", ["LinkedIn Learning", "Courses", "Learning paths", "Certifications", "Skills on profile", "Enterprise learning"]],
          ["Ads", ["Sponsored content", "Sponsored Messaging / Message Ads for eligible campaigns", "Text/dynamic ads", "Video ads", "Campaign Manager", "Lead gen forms"]],
          ["Targeting", ["Company targeting", "Job title targeting", "Matched audiences", "Retargeting", "Website insights", "Conversion tracking"]],
          ["Measurement", ["Campaign reporting", "Lead exports", "CRM sync", "A/B tests where supported", "Brand lift for eligible campaigns", "Policy review"]],
        ],
      },
    ],
  },
];

const moduleNode = (id, title, iconName, summary, groups, kind = "surface") => ({
  id,
  title,
  icon: icon(iconName),
  summary,
  groups,
  kind,
});

const moduleEdge = (source, target, label, kind = "direct") => ({
  source,
  target,
  label,
  kind,
});

function withInteractionMap(appId, mapHeight, mapNodes, mapEdges) {
  const app = apps.find((item) => item.id === appId);
  if (!app) return;
  Object.assign(app, { mapHeight, mapNodes, mapEdges });
}

withInteractionMap(
  "telegram",
  1360,
  [
    moduleNode("account", "Account & Contacts", "user", "Identity, contacts, usernames, devices, and profile settings enable Telegram's chat layer.", [
      ["Identity", ["Phone account", "Username", "Profile", "Contacts", "Active sessions"]],
      ["Access", ["Cloud sync", "Multi-device", "Privacy settings", "Notifications"]],
    ], "entry"),
    moduleNode("chat", "Chat Core", "message-circle", "The core messaging layer carries 1:1 chats, media, files, voice/video, search, and notifications.", [
      ["Conversation", ["1:1 chats", "Media", "Files", "Voice/video", "Search", "Notifications"]],
      ["Runtime role", ["Hosts groups", "Publishes to channels", "Accepts bots", "Launches mini apps"]],
    ], "spine"),
    moduleNode("groups", "Groups / Supergroups", "users", "Multi-person chat spaces with members, admins, topics, moderation, and discussion mechanics.", [
      ["Community tools", ["Members", "Admins", "Topics", "Permissions", "Moderation"]],
      ["Chat attachment", ["Messages", "Files", "Polls", "Voice/video", "Bot moderation"]],
    ]),
    moduleNode("channels", "Channels", "send", "One-to-many broadcast surfaces for creators, publishers, brands, and communities.", [
      ["Publishing", ["Broadcast posts", "Subscribers", "Media", "Polls", "Admin roles"]],
      ["Discussion and money", ["Linked comments group", "Ads", "Stars", "Paid media"]],
    ], "channel"),
    moduleNode("stories", "Stories", "radio", "Time-limited user and boosted-channel updates that link Telegram's publishing, privacy, and boost systems.", [
      ["Stories", ["User stories", "Channel stories", "Replies", "Reactions", "Privacy controls"]],
      ["Boost connection", ["Premium boosts", "Channel levels", "Story posting limits"]],
    ], "channel"),
    moduleNode("bots", "Bots", "bot", "Programmable accounts that run commands, buttons, moderation, workflows, and service automation.", [
      ["Automation", ["Commands", "Buttons", "Workflows", "Moderation", "Notifications"]],
      ["Platform role", ["Launch mini apps", "Control mini apps", "Connect services"]],
    ], "business"),
    moduleNode("mini_apps", "Mini Apps", "sparkles", "Web services that open inside Telegram contexts and return results to chats, groups, or channels.", [
      ["Runtime", ["Embedded web services", "Games", "Commerce", "Forms", "Utilities"]],
      ["Sharing", ["Chat launch", "Group launch", "Channel sharing", "Media output"]],
    ], "assist"),
    moduleNode("business", "Telegram Business", "briefcase", "Business features attach customer-service structure directly to chats.", [
      ["Profile tools", ["Opening hours", "Location", "Start page", "Quick replies"]],
      ["Automation", ["Greeting messages", "Away messages", "Connected bots", "Chatbot support"]],
    ], "business"),
    moduleNode("connected_bots", "Connected Bots", "bot", "Bots delegated by business accounts to answer, route, and automate customer replies.", [
      ["Delegated replies", ["FAQ responses", "Lead capture", "Support routing", "Escalation"]],
    ], "external"),
    moduleNode("subscribers_ads_stars", "Subscribers / Ads / Stars", "badge-dollar-sign", "Channel distribution and monetization loops around audience, ads, and Telegram Stars.", [
      ["Distribution", ["Subscribers", "Forwarding", "Discovery", "Sponsored messages"]],
      ["Monetization", ["Stars", "Paid media", "Creator revenue", "Ads"]],
    ], "commerce"),
  ],
  [
    moduleEdge("account", "chat", "enables"),
    moduleEdge("chat", "groups", "hosts"),
    moduleEdge("chat", "channels", "publishes to"),
    moduleEdge("chat", "stories", "opens"),
    moduleEdge("chat", "bots", "accepts automation from"),
    moduleEdge("chat", "mini_apps", "launches"),
    moduleEdge("chat", "business", "extends into"),
    moduleEdge("bots", "mini_apps", "launches / controls"),
    moduleEdge("mini_apps", "chat", "shares output back to", "return"),
    moduleEdge("business", "connected_bots", "delegates replies to"),
    moduleEdge("channels", "stories", "publishes boosted stories"),
    moduleEdge("channels", "subscribers_ads_stars", "monetizes / distributes to"),
  ],
);

withInteractionMap(
  "wechat",
  1340,
  [
    moduleNode("account", "Account / Weixin ID / Contacts", "user", "Weixin ID, contacts, QR identity, profile, and account security enable the app shell.", [
      ["Identity", ["Weixin ID", "Phone binding", "Profile", "QR code", "Contacts"]],
      ["Access", ["Device login", "Security center", "Privacy settings", "Region settings"]],
    ], "entry"),
    moduleNode("chat", "Chat Core", "message-circle", "Chat carries 1:1, groups, voice, video, location, media, translation, and payment entry points.", [
      ["Conversation", ["1:1 chat", "Groups", "Voice", "Video", "Location", "Media", "Translation"]],
      ["Service entry", ["Opens social surfaces", "Opens official accounts", "Opens mini programs", "Opens Pay transfers/red packets"]],
    ], "spine"),
    moduleNode("moments_status", "Moments / Status", "heart", "Friend-based social publishing around posts, presence, comments, and lightweight updates.", [
      ["Publishing", ["Moments", "Status", "Photos", "Videos", "Text posts"]],
      ["Audience", ["Friends", "Likes", "Comments", "Visibility groups"]],
    ]),
    moduleNode("official_accounts", "Official Accounts", "megaphone", "Brand, media, government, and service accounts publish articles and service messages.", [
      ["Presence", ["Brand account", "Media account", "Service messages", "Articles"]],
      ["Service role", ["CRM entry", "Menus", "Mini Program links", "Support"]],
    ], "business"),
    moduleNode("mini_programs", "Mini Programs", "sparkles", "Embedded apps for stores, services, bookings, games, utilities, and merchant workflows.", [
      ["Runtime", ["Embedded apps", "Stores", "Services", "Bookings", "Games", "Utilities"]],
      ["Transaction", ["Service forms", "Merchant checkout", "Payment initiation", "Order status"]],
    ], "assist"),
    moduleNode("channels_live", "Channels / Live", "video", "Short video and live content surfaces for creator, brand, and product discovery.", [
      ["Content", ["Short video", "Live content", "Creator discovery", "Brand discovery"]],
      ["Commerce", ["Live shopping", "Product cards", "Official account links", "Mini Program links"]],
    ], "channel"),
    moduleNode("search_games", "Weixin Search / Mini Games", "search", "Search and mini-game surfaces help people find public content, services, official accounts, mini programs, and lightweight games.", [
      ["Search", ["Public content", "Official Accounts", "Mini Programs", "Services", "Recommendations"]],
      ["Mini Games", ["Game discovery", "Social sharing", "Lightweight game experiences"]],
    ], "assist"),
    moduleNode("pay_wallet", "WeChat Pay / Wallet", "wallet", "Payment and wallet infrastructure for P2P transfer, QR payment, mini program checkout, and merchant payments.", [
      ["Payments", ["P2P transfer", "QR payment", "Merchant payment", "Mini Program payment"]],
      ["Wallet", ["Cards", "Balance", "Bills", "Receipts", "Refunds"]],
    ], "commerce"),
    moduleNode("merchant_backend", "Merchant / Service Backend", "database", "Merchant systems integrate through official accounts and mini programs to manage service and commerce.", [
      ["Operations", ["Catalog", "Orders", "Bookings", "Membership", "CRM"]],
      ["Integration", ["Official Accounts", "Mini Programs", "Payment confirmation", "Customer service"]],
    ], "external"),
  ],
  [
    moduleEdge("account", "chat", "enables"),
    moduleEdge("chat", "moments_status", "opens"),
    moduleEdge("chat", "official_accounts", "opens"),
    moduleEdge("chat", "mini_programs", "opens"),
    moduleEdge("chat", "channels_live", "opens"),
    moduleEdge("chat", "pay_wallet", "opens transfers, red packets, QR payments"),
    moduleEdge("chat", "search_games", "opens"),
    moduleEdge("official_accounts", "mini_programs", "drives traffic to"),
    moduleEdge("channels_live", "official_accounts", "drives discovery to"),
    moduleEdge("channels_live", "mini_programs", "drives discovery to"),
    moduleEdge("mini_programs", "pay_wallet", "starts checkout through"),
    moduleEdge("search_games", "mini_programs", "finds services", "return"),
    moduleEdge("pay_wallet", "chat", "confirms back to", "return"),
    moduleEdge("pay_wallet", "merchant_backend", "confirms back to"),
    moduleEdge("pay_wallet", "mini_programs", "confirms back to", "return"),
    moduleEdge("merchant_backend", "official_accounts", "integrates through"),
    moduleEdge("merchant_backend", "mini_programs", "integrates through"),
  ],
);

withInteractionMap(
  "line",
  1600,
  [
    moduleNode("account", "LINE Account / Friends / Contacts", "user", "LINE identity, friends, contacts, profile, QR code, and device access enable chat.", [
      ["Identity", ["LINE account", "Friends", "Contacts", "Profile", "QR code"]],
      ["Access", ["Desktop", "Account transfer", "Notifications", "Privacy settings"]],
    ], "entry"),
    moduleNode("chat", "Chat Core", "message-circle", "The messaging layer for 1:1 chat, group chat, stickers, media, calls, and notifications.", [
      ["Conversation", ["1:1 chat", "Group chat", "Stickers", "Media", "Calls", "Notifications"]],
      ["Service role", ["Opens Official Accounts", "Opens VOOM", "Opens wallet and shopping"]],
    ], "spine"),
    moduleNode("groups", "Groups", "users", "Private multi-person conversations with members, albums, polls, events, and announcements.", [
      ["Private rooms", ["Members", "Media", "Albums", "Polls", "Events", "Announcements"]],
    ]),
    moduleNode("openchat", "OpenChat", "users", "Topic and community rooms that extend chat into semi-public social conversation.", [
      ["Community", ["Topic rooms", "Discovery", "Anonymous profiles", "Join controls"]],
      ["Moderation", ["Admins", "Rules", "Reports", "Spam controls"]],
    ], "channel"),
    moduleNode("official_account", "LINE Official Account", "megaphone", "Business profiles, broadcasts, auto replies, rich menus, coupons, and customer chat.", [
      ["Business surface", ["Business profile", "Broadcast", "Auto reply", "Rich menu", "Coupons"]],
      ["Customer channel", ["Chat support", "Reservations", "Product links", "Membership"]],
    ], "business"),
    moduleNode("voom", "LINE VOOM", "radio", "Social posts, brand content, creator content, and discovery loops around the LINE graph.", [
      ["Content", ["Social posts", "Brand content", "Creator content", "Follows", "Engagement"]],
    ], "channel"),
    moduleNode("wallet_shopping", "Wallet / Shopping", "wallet", "Payment where available by market, commerce, offers, coupons, and wallet utilities reachable from chat and accounts.", [
      ["Commerce", ["Market-available payments", "Shopping", "Offers", "Coupons", "Receipts"]],
    ], "commerce"),
    moduleNode("messaging_api", "Messaging API", "bot", "API layer for webhooks, message types, rich menus, account linking, coupons, and statistics.", [
      ["API", ["Webhooks", "Message types", "Profile retrieval", "Account linking", "Statistics"]],
    ], "business"),
    moduleNode("bot_server", "Bot / Business Server", "database", "Business automation receives webhooks and replies through the LINE platform into chat.", [
      ["Automation", ["Bot logic", "Business server", "Routing", "Replies", "External data"]],
    ], "external"),
    moduleNode("rich_menu", "Rich Menu", "inbox", "Persistent chat menu that turns a conversation into structured service navigation.", [
      ["Menu actions", ["Mini app", "Product", "Reservation", "Coupon", "Support"]],
    ], "assist"),
    moduleNode("mini_app", "MINI App / Service Flow", "sparkles", "Embedded service flows handle authorization, payment, notification, shortcuts, and service completion.", [
      ["Service flow", ["Authorization", "Payment", "Notification", "Home shortcut", "Reservation"]],
    ], "assist"),
    moduleNode("insights", "Insights / Sent Messages / Friend Growth", "chart-no-axes-combined", "Business measurement for account growth, message delivery, engagement, and operations.", [
      ["Measurement", ["Insights", "Sent messages", "Friend growth", "Campaign results"]],
    ], "external"),
  ],
  [
    moduleEdge("account", "chat", "enables"),
    moduleEdge("chat", "groups", "hosts"),
    moduleEdge("chat", "openchat", "expands to"),
    moduleEdge("chat", "official_account", "opens"),
    moduleEdge("chat", "voom", "opens"),
    moduleEdge("chat", "wallet_shopping", "opens"),
    moduleEdge("official_account", "messaging_api", "uses"),
    moduleEdge("messaging_api", "bot_server", "sends webhook to"),
    moduleEdge("bot_server", "chat", "replies through LINE Platform / Chat Core", "return"),
    moduleEdge("official_account", "rich_menu", "hosts"),
    moduleEdge("rich_menu", "mini_app", "opens"),
    moduleEdge("mini_app", "wallet_shopping", "handles payment through"),
    moduleEdge("official_account", "insights", "measures with"),
  ],
);

withInteractionMap(
  "discord",
  1360,
  [
    moduleNode("account", "User Account / Friends / Identity", "user", "Discord identity, friends, DMs, status, profile, and security enable server participation.", [
      ["Identity", ["User account", "Friends", "Profile", "Status", "DMs"]],
      ["Access", ["Security", "Privacy", "Sessions", "Nitro personalization"]],
    ], "entry"),
    moduleNode("server", "Server / Guild", "users", "The community container that holds members, roles, permissions, channels, and workflows.", [
      ["Container", ["Members", "Roles", "Permissions", "Onboarding", "Community settings"]],
      ["Governance", ["Admins", "Moderators", "Rules", "Audit logs", "Events"]],
    ], "spine"),
    moduleNode("text_channels", "Text Channels", "message-circle", "Message, thread, announcement, media, and persistent text spaces.", [
      ["Text surfaces", ["Messages", "Threads", "Announcements", "Pinned messages", "Media"]],
    ]),
    moduleNode("voice_stage", "Voice / Video / Stage Channels", "video", "Live conversation, events, screen share, video, and stage-style gatherings.", [
      ["Live spaces", ["Voice", "Video", "Stage", "Events", "Screen share"]],
    ], "channel"),
    moduleNode("forum_topic", "Forum / Topic Spaces", "inbox", "Structured discussions, Q&A, topic threads, and persistent community knowledge.", [
      ["Structured discussion", ["Forum posts", "Q&A", "Topic spaces", "Knowledge threads"]],
    ]),
    moduleNode("roles_permissions", "Roles & Permissions", "lock", "Local access control for admins, moderators, members, private channels, and bot permissions.", [
      ["Access", ["Admin", "Moderator", "Member", "Private channels", "Bot permissions"]],
      ["Control", ["Role hierarchy", "Overrides", "Membership screening", "AutoMod actions"]],
    ], "control"),
    moduleNode("bots_apps", "Bots / Apps", "bot", "Commands, moderation, utilities, external updates, app installs, and server automation.", [
      ["Automation", ["Commands", "Moderation", "Utilities", "Alerts", "Workflows"]],
      ["App platform", ["Apps", "Activities", "OAuth install", "Webhooks"]],
    ], "business"),
    moduleNode("activities", "Activities", "sparkles", "Games, co-watching, and shared social sessions that run inside voice or channel context.", [
      ["Shared sessions", ["Games", "Co-watching", "Interactive apps", "Voice context"]],
    ], "assist"),
    moduleNode("monetization", "Nitro / Boosts / Server Shop", "badge-dollar-sign", "Discord monetization connects user subscriptions, server boosts, premium roles, and one-time server products to community perks.", [
      ["Products", ["Nitro", "Server boosts", "Server subscriptions", "Premium roles", "Server Shop"]],
      ["Perks", ["Emoji slots", "Banners", "Upload limits", "Premium access", "One-time products"]],
    ], "commerce"),
    moduleNode("external_systems", "External Systems", "database", "Systems integrated into Discord through bots, apps, webhooks, alerts, analytics, and experiments.", [
      ["Integrations", ["Games", "GitHub", "Support", "Alerts", "Analytics", "Commerce experiments"]],
    ], "external"),
  ],
  [
    moduleEdge("account", "server", "enables"),
    moduleEdge("server", "text_channels", "contains"),
    moduleEdge("server", "voice_stage", "contains"),
    moduleEdge("server", "forum_topic", "contains"),
    moduleEdge("server", "roles_permissions", "controls access through"),
    moduleEdge("server", "bots_apps", "accepts automation from"),
    moduleEdge("voice_stage", "activities", "launches"),
    moduleEdge("text_channels", "activities", "launches"),
    moduleEdge("server", "monetization", "unlocks perks through"),
    moduleEdge("monetization", "server", "adds perks to", "return"),
    moduleEdge("bots_apps", "external_systems", "integrates with"),
    moduleEdge("roles_permissions", "text_channels", "governs locally", "control"),
    moduleEdge("roles_permissions", "voice_stage", "governs locally", "control"),
    moduleEdge("roles_permissions", "forum_topic", "governs locally", "control"),
    moduleEdge("roles_permissions", "bots_apps", "governs locally", "control"),
  ],
);

withInteractionMap(
  "facebook",
  1450,
  [
    moduleNode("account", "Facebook Account / Social Graph", "user", "Account identity and the social graph enable feed ranking, profiles, pages, groups, events, and commerce signals.", [
      ["Identity", ["Account", "Profile", "Friends", "Followers", "Pages", "Groups"]],
      ["Signals", ["Social graph", "Local graph", "Interests", "Marketplace behavior"]],
    ], "entry"),
    moduleNode("feed", "Feed / Social Discovery", "radio", "Friends, pages, groups, reels, events, and marketplace signals converge into a ranked discovery surface.", [
      ["Inputs", ["Friends", "Pages", "Groups", "Reels", "Events", "Marketplace signals"]],
      ["Actions", ["Posts", "Comments", "Reactions", "Shares", "Recommendations"]],
    ], "spine"),
    moduleNode("profiles", "Profiles", "user", "Personal identity, posts, friends, and social credibility.", [
      ["Profile", ["Identity", "Posts", "Friends", "Photos", "Social credibility"]],
    ]),
    moduleNode("groups", "Groups", "users", "Community discussion, buy/sell groups, local groups, recommendations, and events.", [
      ["Community", ["Discussion", "Buy/sell", "Local groups", "Moderation", "Recommendations"]],
    ], "channel"),
    moduleNode("pages", "Pages", "briefcase", "Brands, creators, organizations, posts, followers, reviews, and customer entry points.", [
      ["Presence", ["Brands", "Creators", "Organizations", "Posts", "Followers", "Reviews"]],
    ], "business"),
    moduleNode("reels_video", "Reels / Video", "video", "Entertainment discovery, creator reach, short video, live video, and ad inventory.", [
      ["Content", ["Reels", "Video", "Watch", "Live", "Creator reach", "Ad inventory"]],
    ], "channel"),
    moduleNode("events_local", "Events / Local", "store", "Local discovery, activities, community recommendations, and nearby signals.", [
      ["Local", ["Events", "Activities", "Local tab", "Community recommendations"]],
    ], "assist"),
    moduleNode("marketplace", "Marketplace", "shopping-bag", "Listings, seller profiles, local commerce, buyer intent, and product discovery.", [
      ["Commerce", ["Listings", "Seller profiles", "Local commerce", "Saved items", "Search"]],
    ], "commerce"),
    moduleNode("messenger", "Messenger / Buyer-Seller Chat", "message-circle", "Private and business conversation layer for marketplace, pages, and relationship follow-up.", [
      ["Chat", ["Buyer-seller chat", "Page messaging", "Group chats", "Calls", "Media"]],
    ], "business"),
    moduleNode("business_tools", "Meta Business Tools", "chart-no-axes-combined", "Business presence, publishing, advertising, inbox, commerce, and analytics management.", [
      ["Operations", ["Business Suite", "Publishing", "Ads", "Page management", "Insights"]],
    ], "external"),
    moduleNode("meta_ai", "Meta AI", "sparkles", "AI assistance for search, Marketplace listing help, group AI answers, Page comment summaries, and discovery where available by account/region.", [
      ["Assistance", ["Search", "Marketplace listing help", "Group AI answers", "Page comment summaries", "Recommendations"]],
    ], "assist"),
  ],
  [
    moduleEdge("account", "feed", "enables"),
    moduleEdge("feed", "profiles", "opens"),
    moduleEdge("feed", "groups", "opens"),
    moduleEdge("feed", "pages", "opens"),
    moduleEdge("feed", "reels_video", "opens"),
    moduleEdge("feed", "events_local", "opens"),
    moduleEdge("feed", "marketplace", "opens"),
    moduleEdge("marketplace", "messenger", "starts conversation through"),
    moduleEdge("pages", "business_tools", "manages presence through"),
    moduleEdge("business_tools", "feed", "publishes / advertises to", "return"),
    moduleEdge("business_tools", "reels_video", "publishes / advertises to", "return"),
    moduleEdge("business_tools", "pages", "publishes / advertises to", "return"),
    moduleEdge("groups", "events_local", "feeds"),
    moduleEdge("meta_ai", "feed", "assists search in"),
    moduleEdge("meta_ai", "marketplace", "assists listings in"),
    moduleEdge("meta_ai", "groups", "answers questions in"),
  ],
);

withInteractionMap(
  "instagram",
  1320,
  [
    moduleNode("account", "Instagram Account / Social Graph", "user", "Account identity, followers, creators, businesses, and social graph enable the content core.", [
      ["Identity", ["Account", "Followers", "Following", "Creator account", "Business account"]],
      ["Profile context", ["Bio", "Highlights", "Links", "Verification", "Privacy"]],
    ], "entry"),
    moduleNode("content", "Content Core", "radio", "Feed, Stories, Reels, Notes, comments, likes, and saves create discovery and engagement loops.", [
      ["Formats", ["Feed", "Stories", "Reels", "Notes", "Comments", "Likes", "Saves"]],
      ["Conversion role", ["Feeds recommendations", "Opens DMs", "Carries shopping tags"]],
    ], "spine"),
    moduleNode("explore", "Explore / Recommendation", "search", "Creator discovery and interest-based browsing driven by content and engagement signals.", [
      ["Discovery", ["Explore", "Search", "Recommendations", "Interest browsing", "Creator discovery"]],
    ], "assist"),
    moduleNode("direct_messages", "Direct Messages", "message-circle", "Private replies, shared posts, group chats, creator chat, and customer chat.", [
      ["Private loops", ["Story replies", "Shared posts", "Group chats", "Creator/customer chat", "Video calls"]],
    ], "business"),
    moduleNode("creator_profile", "Creator / Business Profile", "briefcase", "Profile identity, highlights, creator stores, business presence, and audience conversion.", [
      ["Presence", ["Profile identity", "Highlights", "Brand presence", "Creator store", "Contact buttons"]],
    ], "business"),
    moduleNode("shopping_tags", "Shopping Tags", "shopping-bag", "Product tags carried in posts, reels, and stories as product-detail entry points.", [
      ["Commerce hooks", ["Product tags", "Posts", "Reels", "Stories", "Product detail entry"]],
    ], "commerce"),
    moduleNode("catalog_shop", "Product Catalog / Shop Surface", "store", "Catalog and shop data connected to creator or business profiles.", [
      ["Shop", ["Product catalog", "Collections", "Shop surface", "Product detail pages"]],
    ], "commerce"),
    moduleNode("product_detail", "Product Detail / Checkout / Seller Conversion", "credit-card", "Shopping detail pages route to eligible Instagram checkout, seller websites, or message-based conversion.", [
      ["Conversion", ["Product detail", "Instagram checkout where eligible", "Website checkout", "Seller messages", "Shop surfaces"]],
    ], "external"),
    moduleNode("ads_manager", "Ads Manager", "megaphone", "Paid distribution across Feed, Stories, Reels, Explore, DMs, and shopping surfaces.", [
      ["Distribution", ["Feed ads", "Stories ads", "Reels ads", "Explore ads", "Click-to-message ads"]],
    ], "external"),
    moduleNode("insights", "Insights", "chart-no-axes-combined", "Measurement for creator profiles, business accounts, shopping, content, and ads.", [
      ["Measurement", ["Creator insights", "Business insights", "Ad reporting", "Shop performance"]],
    ], "external"),
  ],
  [
    moduleEdge("account", "content", "enables"),
    moduleEdge("content", "explore", "feeds"),
    moduleEdge("content", "direct_messages", "opens"),
    moduleEdge("content", "creator_profile", "publishes from", "return"),
    moduleEdge("content", "shopping_tags", "carries"),
    moduleEdge("content", "direct_messages", "triggers private reaction in"),
    moduleEdge("creator_profile", "catalog_shop", "connects to"),
    moduleEdge("shopping_tags", "product_detail", "opens"),
    moduleEdge("ads_manager", "content", "distributes to", "return"),
    moduleEdge("ads_manager", "explore", "distributes to", "return"),
    moduleEdge("insights", "creator_profile", "measures"),
    moduleEdge("insights", "ads_manager", "measures"),
  ],
);

withInteractionMap(
  "tiktok",
  1580,
  [
    moduleNode("account", "User Account / Interest Graph", "user", "User identity and interest signals enable algorithmic video discovery.", [
      ["Signals", ["User account", "Interests", "Follows", "Watch behavior", "Engagement"]],
    ], "entry"),
    moduleNode("for_you", "For You Feed", "radio", "Personalized short-video discovery surface driven by engagement and recommendation signals.", [
      ["Discovery", ["Personalized feed", "Short videos", "Engagement signals", "Interest graph"]],
      ["Conversion role", ["Opens profiles", "Opens LIVE", "Shares into DMs", "Opens Shop"]],
    ], "spine"),
    moduleNode("video_creation", "Video Creation", "video", "Creator tools, sounds, effects, editing, posting, and remix formats.", [
      ["Creation", ["Creator tools", "Sounds", "Effects", "Editing", "Posting", "Duet/Stitch"]],
    ]),
    moduleNode("creator_profile", "Creator / Profile", "user", "Creator identity, follows, content archive, community, and commerce participation.", [
      ["Profile", ["Follow", "Content archive", "Identity", "Community", "Shopping bag"]],
    ], "business"),
    moduleNode("live", "LIVE", "radio", "Live interaction, gifts, real-time Q&A, creator events, and live shopping.", [
      ["Live", ["Live interaction", "Gifts", "Live shopping", "Q&A", "Moderation"]],
    ], "channel"),
    moduleNode("direct_messages", "Direct Messages", "message-circle", "Private interaction, shared videos, group chat, and creator or customer follow-up.", [
      ["Messaging", ["Shared videos", "DMs", "Group chat", "Private interaction"]],
    ], "business"),
    moduleNode("shop_showcase", "TikTok Shop / Showcase (where available by market)", "shopping-bag", "Shoppable videos, live shopping, profile shopping bag, products, and creator commerce where TikTok Shop is available by market.", [
      ["Shop", ["Shoppable videos", "Live shopping", "Showcase", "Profile shopping bag", "Market availability"]],
    ], "commerce"),
    moduleNode("affiliate_marketplace", "Affiliate / Creator Marketplace", "handshake", "Creator, seller, and affiliate matching for content commerce and product promotion.", [
      ["Affiliate", ["Creator marketplace", "Affiliate products", "Commissions", "Samples"]],
    ], "external"),
    moduleNode("seller_center", "Seller Center", "briefcase", "Seller operations for products, pricing, orders, fulfillment, campaigns, and shop performance.", [
      ["Seller operations", ["Products", "Pricing", "Orders", "Fulfillment", "Campaigns"]],
    ], "external"),
    moduleNode("checkout_order", "Product Detail / Cart / Checkout / Order", "credit-card", "Transaction flow from product page to cart, checkout, order, and after-sales where TikTok Shop checkout is available.", [
      ["Purchase flow", ["Product detail", "Cart", "Checkout where available by market", "Order", "Customer service"]],
    ], "commerce"),
    moduleNode("ads_manager", "Ads Manager", "megaphone", "Paid amplification across For You, search, LIVE, Shop where available by market, leads, and creator campaigns.", [
      ["Ads", ["For You ads", "Search ads", "LIVE ads", "Shop ads where available by market", "Lead ads"]],
    ], "external"),
    moduleNode("recommendation_engine", "Recommendation Engine", "sparkles", "Algorithmic engine that feeds For You, shop discovery, creator reach, and demand creation.", [
      ["Ranking", ["For You", "Shop discovery", "Creator reach", "Engagement prediction"]],
    ], "assist"),
  ],
  [
    moduleEdge("account", "for_you", "enables"),
    moduleEdge("for_you", "video_creation", "feeds"),
    moduleEdge("for_you", "creator_profile", "opens"),
    moduleEdge("for_you", "live", "opens"),
    moduleEdge("for_you", "direct_messages", "opens / shares into"),
    moduleEdge("for_you", "shop_showcase", "opens"),
    moduleEdge("creator_profile", "affiliate_marketplace", "participates in"),
    moduleEdge("seller_center", "shop_showcase", "manages products for"),
    moduleEdge("seller_center", "checkout_order", "manages orders for"),
    moduleEdge("shop_showcase", "checkout_order", "starts"),
    moduleEdge("ads_manager", "for_you", "amplifies", "return"),
    moduleEdge("ads_manager", "live", "amplifies", "return"),
    moduleEdge("ads_manager", "shop_showcase", "amplifies", "return"),
    moduleEdge("recommendation_engine", "for_you", "feeds", "return"),
    moduleEdge("recommendation_engine", "shop_showcase", "feeds", "return"),
    moduleEdge("recommendation_engine", "creator_profile", "feeds", "return"),
  ],
);

withInteractionMap(
  "taobao",
  1700,
  [
    moduleNode("account", "Buyer Account / Shopping Profile", "user", "Buyer identity, preferences, addresses, saved items, orders, and personalization enable retail discovery.", [
      ["Shopping profile", ["Buyer account", "Addresses", "Favorites", "Order history", "Coupons"]],
      ["Signals", ["Browsing", "Purchases", "Saved searches", "Membership", "Reviews"]],
    ], "entry"),
    moduleNode("discovery", "Retail Discovery Core", "search", "Search, categories, recommendations, image search, campaigns, and personalized retail entry.", [
      ["Discovery", ["Search", "Categories", "Recommendations", "Image search", "Campaigns"]],
      ["Demand creation", ["Deals", "Personalized feed", "Short video", "Livestreaming"]],
    ], "spine"),
    moduleNode("product_detail", "Product Detail Page", "store", "Specs, variants, price, reviews, seller rating, service promises, and purchase actions.", [
      ["Decision data", ["Specs", "Variants", "Price", "Reviews", "Seller rating"]],
      ["Actions", ["Add to cart", "Buy now", "Favorite", "Seller chat"]],
    ], "commerce"),
    moduleNode("storefront", "Storefront", "briefcase", "Seller shop, promotions, brand identity, store followers, and product collections.", [
      ["Seller presence", ["Seller shop", "Promotions", "Brand/store identity", "Collections"]],
    ], "business"),
    moduleNode("live_content", "Taobao Live / Content Commerce", "video", "Livestream selling, product demos, creator guidance, real-time Q&A, and coupons.", [
      ["Content commerce", ["Livestream selling", "Product demo", "Real-time Q&A", "Coupons"]],
    ], "channel"),
    moduleNode("ai_assistant", "AI Shopping Assistant", "sparkles", "Conversational shopping for search, comparison, try-on, price tracking, logistics, and after-sales.", [
      ["Assistance", ["Conversational search", "Comparison", "Try-on", "Price tracking"]],
    ], "assist"),
    moduleNode("seller_chat", "Seller Chat / Customer Service", "message-circle", "Chat reduces purchase uncertainty and routes support around product, order, and after-sales questions.", [
      ["Customer service", ["Product questions", "Sizing", "Availability", "Order help", "After-sales"]],
    ], "business"),
    moduleNode("cart", "Cart", "shopping-bag", "Cart aggregation across items, variants, promotions, stores, and campaigns.", [
      ["Cart", ["Items", "Variants", "Quantities", "Coupons", "Store grouping"]],
    ], "commerce"),
    moduleNode("checkout_payment", "Checkout / Payment", "credit-card", "Checkout, address selection, coupons, shipping options, payment, and order confirmation.", [
      ["Checkout", ["Address", "Coupons", "Shipping", "Payment", "Order confirmation"]],
    ], "commerce"),
    moduleNode("orders", "Order Management", "inbox", "Post-payment order state, seller processing, receipts, notifications, and customer status.", [
      ["Orders", ["Order status", "Receipts", "Seller processing", "Notifications"]],
    ], "external"),
    moduleNode("fulfillment", "Fulfillment / Logistics / Tracking", "database", "Shipping, carrier updates, logistics tracking, delivery, pickup, and confirmation.", [
      ["Logistics", ["Fulfillment", "Shipping", "Tracking", "Delivery", "Confirmation"]],
    ], "external"),
    moduleNode("after_sales", "After-Sales", "shield", "Refunds, returns, exchanges, disputes, reviews, warranty, and buyer protection.", [
      ["Resolution", ["Refunds", "Returns", "Disputes", "Reviews", "Buyer protection"]],
    ], "control"),
    moduleNode("merchant_backend", "Merchant Backend", "database", "Seller operations for catalog, inventory, promotions, service, orders, and fulfillment.", [
      ["Operations", ["Catalog", "Inventory", "Promotions", "Service", "Orders"]],
    ], "external"),
  ],
  [
    moduleEdge("account", "discovery", "enables"),
    moduleEdge("discovery", "product_detail", "opens"),
    moduleEdge("discovery", "storefront", "opens"),
    moduleEdge("discovery", "live_content", "opens"),
    moduleEdge("discovery", "ai_assistant", "opens"),
    moduleEdge("product_detail", "seller_chat", "starts question in"),
    moduleEdge("seller_chat", "product_detail", "reduces uncertainty and returns to", "return"),
    moduleEdge("seller_chat", "cart", "reduces uncertainty and returns to"),
    moduleEdge("product_detail", "cart", "adds item to"),
    moduleEdge("live_content", "cart", "adds item to"),
    moduleEdge("cart", "checkout_payment", "starts"),
    moduleEdge("checkout_payment", "orders", "confirms"),
    moduleEdge("orders", "fulfillment", "syncs with"),
    moduleEdge("after_sales", "orders", "handles", "return"),
    moduleEdge("after_sales", "product_detail", "handles reviews for", "return"),
    moduleEdge("merchant_backend", "product_detail", "manages catalog for"),
    moduleEdge("merchant_backend", "storefront", "manages"),
    moduleEdge("merchant_backend", "seller_chat", "manages service for"),
  ],
);

withInteractionMap(
  "intercom",
  1450,
  [
    moduleNode("customer_channels", "Customer Channels", "message-circle", "Web Messenger, email, phone, SMS, WhatsApp, and in-app channels send inbound conversations.", [
      ["Channels", ["Web Messenger", "Email", "Phone", "SMS", "WhatsApp", "In-app"]],
    ], "entry"),
    moduleNode("inbox", "Conversation Inbox", "inbox", "The operational object containing conversation timeline, customer profile, assignment, priority, and SLA.", [
      ["Inbox state", ["Conversation timeline", "Customer profile", "Assignment", "Priority", "SLA"]],
      ["Operations", ["Team inboxes", "Notes", "Tags", "Queues", "Handoffs"]],
    ], "spine"),
    moduleNode("human_team", "Human Team", "users", "Agents, roles, permissions, internal notes, and human handoff for support operations.", [
      ["Teammates", ["Agents", "Roles", "Permissions", "Internal notes", "Handoff"]],
    ], "business"),
    moduleNode("fin_ai", "Fin AI Agent", "bot", "Automated resolution, answer generation, context-aware support, and handoff to humans.", [
      ["AI support", ["Automated resolution", "Answer generation", "Conversation context", "Handoff"]],
    ], "assist"),
    moduleNode("tickets", "Tickets / Cases", "briefcase", "Structured customer, back-office, and tracker tickets for ownership, escalation, and resolution workflow.", [
      ["Cases", ["Customer tickets", "Back-office tickets", "Tracker tickets", "Ownership", "Resolution"]],
    ], "business"),
    moduleNode("workflows", "Workflows", "sparkles", "Triage, branching logic, automation, data capture, follow-up, and teammate process automation.", [
      ["Automation", ["Triage", "Branching logic", "Routing", "Follow-up", "Data capture"]],
    ], "assist"),
    moduleNode("knowledge_base", "Knowledge Base", "search", "Help content that powers Fin, Help Center search, and agent copilot suggestions.", [
      ["Knowledge", ["Articles", "Collections", "Help Center", "Answer sources", "Content gaps"]],
    ], "external"),
    moduleNode("customer_data", "Customer Data", "database", "User, company, event, plan, and account context used for routing and personalization.", [
      ["Data", ["Users", "Companies", "Events", "Segments", "Custom attributes"]],
    ], "external"),
    moduleNode("integrations", "Apps & Integrations", "database", "Connected apps sync CRM, product data, billing, order systems, and operational context.", [
      ["Connections", ["CRM", "Product data", "Billing", "Order system", "Webhooks", "API"]],
    ], "external"),
    moduleNode("outbound", "Outbound Messaging", "megaphone", "Proactive messages that start customer conversations across the same channels.", [
      ["Outbound", ["Email", "Push", "In-app", "Banners", "Surveys", "Campaigns"]],
    ], "business"),
    moduleNode("analytics", "Analytics / Insights", "chart-no-axes-combined", "Measurement for support quality, automation, AI, team performance, and workflow improvement.", [
      ["Measurement", ["Support quality", "Automation", "Team performance", "AI performance", "CSAT"]],
    ], "external"),
  ],
  [
    moduleEdge("customer_channels", "inbox", "sends inbound conversation to"),
    moduleEdge("inbox", "human_team", "routes to"),
    moduleEdge("inbox", "fin_ai", "routes to"),
    moduleEdge("inbox", "tickets", "creates / updates"),
    moduleEdge("inbox", "workflows", "triggers"),
    moduleEdge("knowledge_base", "fin_ai", "powers"),
    moduleEdge("knowledge_base", "human_team", "powers Agent Copilot / Help Center"),
    moduleEdge("customer_data", "inbox", "personalizes"),
    moduleEdge("customer_data", "workflows", "personalizes"),
    moduleEdge("customer_data", "fin_ai", "personalizes"),
    moduleEdge("integrations", "customer_data", "sync with"),
    moduleEdge("integrations", "tickets", "sync with"),
    moduleEdge("outbound", "customer_channels", "starts"),
    moduleEdge("analytics", "human_team", "measures"),
    moduleEdge("analytics", "workflows", "measures"),
    moduleEdge("analytics", "fin_ai", "measures"),
  ],
);

withInteractionMap(
  "linkedin",
  1700,
  [
    moduleNode("profile", "Member Profile / Professional Identity", "user", "Professional identity anchors member credibility, skills, work history, company links, and intent.", [
      ["Identity", ["Profile", "Skills", "Work history", "Education", "Credentials"]],
      ["Quality signal", ["Company context", "Verification", "Recommendations", "Open to work"]],
    ], "entry"),
    moduleNode("graph", "Professional Graph", "users", "Connections, followers, companies, skills, and work history create the professional network layer.", [
      ["Graph", ["Connections", "Followers", "Companies", "Skills", "Work history"]],
      ["Routing role", ["Feeds content", "Opens messaging", "Opens jobs", "Powers sales"]],
    ], "spine"),
    moduleNode("feed_content", "Feed / Content", "radio", "Posts, articles, newsletters, comments, and reposts distribute professional context.", [
      ["Publishing", ["Posts", "Articles", "Newsletters", "Comments", "Reposts"]],
    ], "channel"),
    moduleNode("messaging", "Messaging", "message-circle", "1:1 messages, group chat, InMail, recruiter outreach, sales outreach, and relationship conversion.", [
      ["Conversation", ["1:1 messages", "Group chat", "InMail", "Recruiter outreach", "Sales outreach"]],
    ], "business"),
    moduleNode("company_pages", "Company Pages", "briefcase", "Brand presence, jobs, posts, audience engagement, page messaging, and company credibility.", [
      ["Organization", ["Brand presence", "Jobs", "Posts", "Followers", "Audience engagement"]],
    ], "business"),
    moduleNode("groups", "Groups", "users", "Professional communities for discussion, networking, interest groups, and knowledge exchange.", [
      ["Communities", ["Professional groups", "Discussion", "Networking", "Topic communities"]],
    ], "channel"),
    moduleNode("jobs_recruiting", "Jobs / Recruiting", "search", "Job posts, applications, recruiter workflows, candidate discovery, and hiring conversion.", [
      ["Hiring", ["Job posts", "Applications", "Recruiter workflows", "Candidate search"]],
    ], "commerce"),
    moduleNode("page_messaging", "Page Messaging", "inbox", "Company Page inbox for organizational conversations, service inquiries, and lead follow-up.", [
      ["Page inbox", ["Company conversations", "Service inquiries", "Lead follow-up"]],
    ], "business"),
    moduleNode("sales_navigator", "Sales Navigator", "handshake", "Sales workflow layer using professional graph and company data for lead and account discovery.", [
      ["Sales", ["Lead search", "Account lists", "Company data", "Buyer signals", "Outreach"]],
    ], "external"),
    moduleNode("crm", "CRM", "database", "CRM sync target for sales leads, lead forms, account data, and pipeline workflow.", [
      ["Sync", ["Leads", "Accounts", "Pipeline", "Sales workflow", "Lead forms"]],
    ], "external"),
    moduleNode("ads_platform", "Ads Platform", "megaphone", "Sponsored content, Sponsored Messaging, Conversation Ads, targeting, and lead generation.", [
      ["Ads", ["Feed ads", "Messaging ads", "Conversation ads", "Lead gen forms", "Targeting"]],
    ], "external"),
    moduleNode("lead_forms", "Lead Gen Forms", "chart-no-axes-combined", "Structured lead capture surface that sends professional intent into CRM or sales workflows.", [
      ["Lead capture", ["Lead forms", "Pre-filled profile data", "Campaign leads", "CRM routing"]],
    ], "commerce"),
    moduleNode("outcomes", "Recruiting / Sales / Partnership / Support", "briefcase", "Messaging converts professional context into hiring, sales, partnership, or support action.", [
      ["Outcomes", ["Recruiting", "Sales", "Partnership", "Support", "Relationship follow-up"]],
    ], "assist"),
  ],
  [
    moduleEdge("profile", "graph", "enables"),
    moduleEdge("graph", "feed_content", "feeds"),
    moduleEdge("graph", "messaging", "opens"),
    moduleEdge("graph", "company_pages", "opens"),
    moduleEdge("graph", "groups", "opens"),
    moduleEdge("graph", "jobs_recruiting", "opens"),
    moduleEdge("company_pages", "page_messaging", "accepts"),
    moduleEdge("sales_navigator", "graph", "uses", "return"),
    moduleEdge("sales_navigator", "company_pages", "uses company data from", "return"),
    moduleEdge("sales_navigator", "crm", "syncs with"),
    moduleEdge("ads_platform", "feed_content", "distributes to", "return"),
    moduleEdge("ads_platform", "messaging", "distributes to", "return"),
    moduleEdge("ads_platform", "lead_forms", "distributes to"),
    moduleEdge("lead_forms", "crm", "sends leads to"),
    moduleEdge("messaging", "outcomes", "converts relationship into"),
  ],
);

const ZH_EXACT_TEXT = {
  "WhatsApp Feature Ecosystem": "WhatsApp 功能生態系",
  "Telegram Feature Ecosystem": "Telegram 功能生態系",
  "WeChat Feature Ecosystem": "WeChat 功能生態系",
  "LINE Feature Ecosystem": "LINE 功能生態系",
  "Discord Feature Ecosystem": "Discord 功能生態系",
  "Facebook Feature Ecosystem": "Facebook 功能生態系",
  "Instagram Feature Ecosystem": "Instagram 功能生態系",
  "TikTok Feature Ecosystem": "TikTok 功能生態系",
  "Taobao Feature Ecosystem": "淘寶功能生態系",
  "Intercom Feature Ecosystem": "Intercom 功能生態系",
  "LinkedIn Feature Ecosystem": "LinkedIn 功能生態系",
  "WeChat": "WeChat / 微信",
  "Taobao": "淘寶",
  "Account identity, chat core, social surfaces, business layers, AI, and policy controls": "帳號身分、聊天核心、社交版位、商家層、AI 與政策控管",
  "Messaging, public communities, channels, bots, mini apps, and premium tools": "訊息、公眾社群、頻道、機器人、迷你應用程式與 Premium 工具",
  "Messaging, social feed, payments, mini programs, services, and commerce": "訊息、社交動態、支付、小程式、服務與商務",
  "Messaging, social communities, official accounts, commerce, and services": "訊息、LINE 社群、官方帳號、商務與服務",
  "Servers, channels, voice, communities, roles, bots, and subscriptions": "伺服器、頻道、語音、社群、身分組、機器人與訂閱",
  "Social graph, feed, groups, pages, marketplace, messaging, and business tools": "社交圖譜、動態、社團、粉絲專頁、Marketplace、訊息與商務工具",
  "Visual content, creators, messaging, discovery, shopping, and ads": "視覺內容、創作者、私訊、探索、購物與廣告",
  "Short video discovery, creators, live, commerce, messaging, and ads": "短影音探索、創作者、LIVE、電商、訊息與廣告",
  "Marketplace shopping, search, sellers, content, live commerce, and payments": "市集購物、搜尋、賣家、內容、直播電商與支付",
  "Customer support, AI agents, inbox, help center, messaging, and automation": "客服支援、AI Agent、收件匣、說明中心、訊息與自動化",
  "Professional identity, network, content, jobs, recruiting, sales, and learning": "職涯身分、人脈、內容、職缺、招募、銷售與學習",
  "Layered WhatsApp Flow": "WhatsApp 分層流程",
  "Central product hub": "產品核心",
  "Overview": "總覽",
  "Key Flows": "核心模組關係",
  "Product Areas": "產品區塊",
  "Cross-cutting Layer": "橫向治理層",
  "Trust / Privacy / Policy": "信任 / 隱私 / 政策",
  "Trust / Privacy / Policy\nControl Plane": "信任 / 隱私 / 政策\n控管層",
  "Trust / Privacy / Policy Control Plane": "信任 / 隱私 / 政策控管層",
  "Apps": "Apps 應用程式",
  "API": "API 介面",
  "SMS": "SMS 簡訊",
  "SLA": "SLA 服務水準",
  "CSAT": "CSAT 滿意度",
  "NPS/CSAT": "NPS / CSAT 滿意度",
  "Mobile SDK": "Mobile SDK 開發套件",
  "Web Messenger": "Web Messenger 網站訊息工具",
  "Labels and chat organization": "標籤與聊天整理",
  "Publishes to channels": "發布到頻道",
  "Discussion and money": "討論與金流",
  "QR and search entry": "QR code 與搜尋入口",
  "Opens wallet and shopping": "開啟錢包與購物",
  "Seller and ads policies": "賣家與廣告政策",
  "Open to work": "Open to Work 求職中",
  "Trust and safety": "信任與安全",
  "Where it applies": "適用範圍",
  "Business impact": "業務影響",
  "Reduces abuse": "降低濫用",
  "Protects accounts": "保護帳號",
  "Sets policy boundaries": "建立政策邊界",
  "Supports monetization eligibility": "支援變現資格判斷",
  "Improves customer confidence": "提升客戶信任",

  "Account & Devices": "帳號與裝置",
  "Account & Contacts": "帳號與聯絡人",
  "Subscribers / Ads / Stars": "訂閱者 / 廣告 / 星星",
  "Account / Weixin ID / Contacts": "帳號 / 微信 ID / 聯絡人",
  "LINE Account / Friends / Contacts": "LINE 帳號 / 好友 / 聯絡人",
  "User Account / Friends / Identity": "使用者帳號 / 好友 / 身分",
  "Facebook Account / Social Graph": "Facebook 帳號 / 社交圖譜",
  "Instagram Account / Social Graph": "Instagram 帳號 / 社交圖譜",
  "User Account / Interest Graph": "使用者帳號 / 興趣圖譜",
  "Buyer Account / Shopping Profile": "買家帳號 / 購物檔案",
  "Member Profile / Professional Identity": "會員個人檔案 / 職涯身分",
  "Professional Graph": "職涯圖譜",
  "Chat Core": "聊天核心",
  "Private Messaging": "私人訊息",
  "Messaging": "訊息",
  "Chats": "聊天",
  "Groups": "群組",
  "Groups & Communities": "群組與社群",
  "Groups / Supergroups": "群組 / 超級群組",
  "Calls": "通話",
  "Calls & Live": "通話與直播",
  "Voice & Live": "語音與直播",
  "Status / Updates": "狀態 / 最新消息",
  "Community Spaces": "社群空間",
  "Channels": "頻道",
  "Channels / Video": "視頻號 / 影片",
  "Channels / Live": "視頻號 / 直播",
  "Stories": "限時動態",
  "Moments & Social": "朋友圈與社交",
  "Moments / Status": "朋友圈 / 狀態",
  "Search & Mini Games": "搜尋與小遊戲",
  "Mini Programs": "小程式",
  "WeChat Pay": "微信支付",
  "WeChat Pay / Wallet": "微信支付 / 錢包",
  "Official Accounts": "公眾號",
  "OpenChat": "LINE 社群",
  "LINE VOOM": "LINE VOOM",
  "LINE Official Account": "LINE 官方帳號",
  "Services & Commerce": "服務與商務",
  "Business Conversation Layer": "商家對話層",
  "Business Platform": "商業平台",
  "External Business Systems": "外部商業系統",
  "External Systems": "外部系統",
  "Business & Shopping": "商業與購物",
  "Ads & Monetization": "廣告與變現",
  "Ads & Discovery": "廣告與探索",
  "Marketplace & Commerce": "Marketplace 與商務",
  "Content Creation": "內容創作",
  "Messaging & Community": "訊息與社群",
  "Commerce & Ads": "商務與廣告",
  "Product Discovery": "商品探索",
  "AI Shopping Assistant": "AI 購物助手",
  "Product Detail": "商品詳情",
  "Product Detail Page": "商品詳情頁",
  "Shopping Flow": "購物流程",
  "Sellers & Stores": "賣家與店鋪",
  "Content & Live Commerce": "內容與直播電商",
  "Payments & Ecosystem": "支付與生態系",
  "Customer Entry Points": "客戶進線入口",
  "Customer Channels": "客戶渠道",
  "Inbox": "收件匣",
  "Conversation Inbox": "對話收件匣",
  "AI & Automation": "AI 與自動化",
  "Help Center": "說明中心",
  "Customer Data": "客戶資料",
  "Outbound": "主動訊息",
  "Outbound Messaging": "主動訊息",
  "Reporting & Integrations": "報表與整合",
  "Professional Identity": "職涯身分",
  "Network": "人脈",
  "Feed & Content": "動態與內容",
  "Jobs": "職缺",
  "Recruiting": "招募",
  "Sales & Business": "銷售與商業",
  "Learning & Ads": "學習與廣告",
  "Feed / Content": "動態 / 內容",
  "Jobs / Recruiting": "職缺 / 招募",
  "Recruiting / Sales / Partnership / Support": "招募 / 銷售 / 合作 / 支援",
  "Bots & Mini Apps": "機器人與迷你應用程式",
  "Bots & Apps": "機器人與應用程式",
  "Mini Apps": "迷你應用程式",
  "Telegram Business": "Telegram Business",
  "Premium & Monetization": "Premium 與變現",
  "Moderation & Governance": "管理與治理",
  "Identity & Social Graph": "身分與社交圖譜",
  "Feed & Content": "動態與內容",
  "Pages & Business": "粉絲專頁與商務",
  "Identity & Contacts": "身分與聯絡人",
  "Account & Friends": "帳號與好友",
  "Identity": "身分",
  "Discovery": "探索",
  "Engagement": "互動",
  "Business Profile": "商家檔案",
  "Business Presence": "商家門面",
  "Telegram Business": "Telegram Business",
  "Account and setup": "帳號與設定",
  "Account Services": "帳號服務",
  "Account security": "帳號安全",
  "Phone identity": "手機號碼身分",
  "Profile": "個人檔案",
  "Contacts": "聯絡人",
  "Sessions and devices": "登入工作階段與裝置",
  "Conversation types": "對話類型",
  "Media": "媒體",
  "Voice notes": "語音訊息",
  "Receipts and state": "收送狀態",
  "Search and organization": "搜尋與整理",
  "Notifications": "通知",
  "Group chats": "群組聊天",
  "Admins": "管理員",
  "Group activities": "群組活動",
  "Community structure": "社群結構",
  "Topic-based hub": "主題型入口",
  "Announcements": "公告",
  "Safety": "安全",
  "Voice calls": "語音通話",
  "Video calls": "視訊通話",
  "Call entry points": "通話入口",
  "In-call tools": "通話中工具",
  "Status posts": "狀態貼文",
  "Replies": "回覆",
  "Lightweight sharing": "輕量分享",
  "Monetization hooks": "變現入口",
  "One-to-many updates": "一對多更新",
  "Public following": "公開追蹤",
  "Brand and creator use": "品牌與創作者使用",
  "Channel privacy": "頻道隱私",
  "Catalog": "型錄",
  "Quick Replies": "快速回覆",
  "Labels": "標籤",
  "Seller Inbox": "賣家收件匣",
  "Basic automation": "基礎自動化",
  "Messaging API": "Messaging API 訊息介面",
  "Templates": "範本",
  "WhatsApp Flows": "WhatsApp Flows 表單流程",
  "Webhooks": "Webhook 事件",
  "CRM/helpdesk integrations": "CRM / 客服系統整合",
  "Bots and routing": "機器人與路由",
  "Order/payment integrations": "訂單 / 付款整合",
  "CRM": "CRM 客戶關係管理",
  "Helpdesk": "客服系統",
  "E-commerce backend": "電商後台",
  "Inventory and logistics": "庫存與物流",
  "Payments and analytics": "付款與分析",
  "Assistant": "助理",
  "Search/help": "搜尋 / 說明",
  "Writing support": "寫作輔助",
  "Product/support assistance": "商品 / 支援輔助",
  "Privacy boundary": "隱私邊界",
  "Group Types": "群組類型",
  "Administration": "管理",
  "Discussion": "討論",
  "Moderation": "管理審核",
  "Publishing": "發布",
  "Audience": "受眾",
  "Creator Tools": "創作者工具",
  "Boost Link": "加成連結",
  "Live Formats": "直播形式",
  "Tools": "工具",
  "Bots": "機器人",
  "Payments": "付款",
  "Developer Tools": "開發者工具",
  "Messaging Tools": "訊息工具",
  "Automation": "自動化",
  "User Premium": "使用者 Premium",
  "Community Value": "社群權益",
  "Creator Money": "創作者收入",
  "Ads": "廣告",
  "Graph": "圖譜",
  "Access": "存取",
  "Social Signals": "社交訊號",
  "Formats": "格式",
  "Controls": "控制項",
  "Participation": "參與",
  "Growth": "成長",
  "Business": "商業",
  "Utilities": "實用工具",
  "Presence": "門面",
  "Customer Tools": "客戶工具",
  "Commerce": "商務",
  "Measurement": "成效衡量",
  "Campaign Tools": "行銷活動工具",
  "Lead & Message": "潛在客戶與訊息",
  "Transaction Flow": "交易流程",
  "Business Commerce": "商業商務",
  "Audience": "受眾",
  "Account Types": "帳號類型",
  "Security": "安全",
  "Creation Tools": "創作工具",
  "Management": "管理",
  "Actions": "動作",
  "Social Formats": "社交格式",
  "Community": "社群",
  "DMs": "私訊",
  "Content Links": "內容連結",
  "Business Messaging": "商業訊息",
  "Surfaces": "版位",
  "Signals": "訊號",
  "Conversion": "轉換",
  "Business Tools": "商業工具",
  "Campaigns": "行銷活動",
  "Policies": "政策",
  "Analytics": "分析",
  "Settings": "設定",
  "Remix": "二創",
  "Feeds": "動態來源",
  "Search": "搜尋",
  "Trends": "趨勢",
  "Recommendation Signals": "推薦訊號",
  "Creator Relationship": "創作者關係",
  "Shop": "商店",
  "Creator Commerce": "創作者電商",
  "Operations": "營運",
  "Shopping Help": "購物協助",
  "Order Help": "訂單協助",
  "Merchant Support": "商家支援",
  "Information": "商品資訊",
  "Confidence": "信任依據",
  "Promotion": "促銷",
  "Cart": "購物車",
  "Checkout": "結帳",
  "Post-purchase": "購買後",
  "Storefront": "店鋪",
  "Trust Signals": "信任訊號",
  "Live Tools": "直播工具",
  "Fulfillment": "履約",
  "After-sales": "售後",
  "Ecosystem": "生態系",
  "Messenger": "Messenger",
  "Channels": "頻道",
  "Context": "脈絡",
  "Conversation Handling": "對話處理",
  "Collaboration": "協作",
  "Tickets": "票證",
  "Quality": "品質",
  "AI Agent": "AI Agent 自動客服",
  "Copilot": "Copilot 協作助手",
  "Workflows": "工作流程",
  "Governance": "治理",
  "Content": "內容",
  "Self-service": "自助服務",
  "Profiles": "個人檔案",
  "Behavior": "行為",
  "Data Operations": "資料作業",
  "Activation": "啟用",
  "Messages": "訊息",
  "Product Adoption": "產品採用",
  "Personalization": "個人化",
  "Support Metrics": "支援指標",
  "Integrations": "整合",
  "Admin": "管理員",
  "Credentials": "資歷",
  "Insights": "洞察",
  "Relationships": "關係",
  "Communication": "溝通",
  "Communities": "社群",
  "Distribution": "分發",
  "Application": "應徵",
  "Candidate Tools": "求職者工具",
  "Employer Surface": "雇主版位",
  "Sourcing": "尋才",
  "Outreach": "觸及",
  "Pipeline": "管線",
  "Branding": "品牌",
  "Sales Navigator": "Sales Navigator",
  "Account Intelligence": "帳戶情報",
  "Learning": "學習",
  "Targeting": "鎖定",
  "Organization": "組織",
  "Page inbox": "粉絲專頁收件匣",
  "Lead capture": "潛在客戶蒐集",
  "Outcomes": "成果",

  "Account identity, sessions, contacts, and profiles feed the chat core": "帳號身分、登入工作階段、聯絡人與個人檔案支撐聊天核心",
  "Chat Core hosts groups, launches calls, and opens Status replies back into conversations": "聊天核心承載群組、發起通話，並把狀態回覆帶回對話",
  "Groups can organize larger Community Spaces with announcements and admin structure": "群組可組成更大的社群空間，加入公告與管理架構",
  "Status and Updates can lead to Channels for one-to-many following": "狀態與最新消息可延伸到一對多追蹤的頻道",
  "Business Conversation Layer adds merchant tools to Chat Core": "商家對話層把商家工具加到聊天核心",
  "Business Platform connects chat workflows to APIs, templates, integrations, and external systems": "商業平台把聊天流程接到 API、範本、整合與外部系統",
  "Meta AI is user-invoked assistance across chat, search, and support surfaces": "Meta AI 是由使用者叫出的聊天、搜尋與支援助理",
  "Trust, privacy, and policy controls govern every layer and integration": "信任、隱私與政策控管治理每一層與每個整合",
  "Private messages to calls": "私人訊息延伸到通話",
  "Groups to voice chats": "群組延伸到語音聊天室",
  "Channels to discussion groups": "頻道連到討論群組",
  "Bots to payments and mini apps": "機器人連到付款與迷你應用程式",
  "Boosts to channels and groups": "加成解鎖頻道與群組權益",
  "Stars to paid media": "星星連到付費媒體",
  "Messaging to red packets to Pay": "聊天連到紅包與微信支付",
  "Official accounts to mini programs": "公眾號連到小程式",
  "Mini programs to WeChat Pay": "小程式連到微信支付",
  "Channels/live to shopping": "視頻號 / 直播連到購物",
  "Moments to chats": "朋友圈回到聊天",
  "QR codes to contacts, pay, and services": "QR code 連到聯絡人、付款與服務",
  "Chats to calls": "聊天延伸到通話",
  "OpenChat to topic discovery": "LINE 社群連到主題探索",
  "Official accounts to coupons and commerce": "官方帳號連到優惠券與商務",
  "Business platform to official accounts": "商業平台支援官方帳號",
  "Ads to services": "廣告導向服務",
  "Sticker store to chats": "貼圖小舖回到聊天",
  "Servers to channels": "伺服器組織頻道",
  "Channels to voice/live": "頻道延伸到語音 / 直播",
  "Roles to permissions": "身分組控制權限",
  "Bots to channels and moderation": "機器人連到頻道與管理審核",
  "Nitro and boosts to perks": "Nitro 與加成解鎖權益",
  "Events to engagement": "活動帶動參與",
  "Profile to feed": "個人檔案連到動態",
  "Feed to groups and pages": "動態連到社團與粉絲專頁",
  "Pages to ads": "粉絲專頁連到廣告",
  "Ads to Messenger, leads, and shops": "廣告導向 Messenger、潛在客戶與商店",
  "Marketplace to seller chat": "Marketplace 連到賣家聊天",
  "Groups to events": "社團連到活動",
  "Content to engagement": "內容帶動互動",
  "Stories and Reels to DMs": "限時動態與 Reels 帶到私訊",
  "Discovery to content": "探索回到內容",
  "Business profile to shopping": "商業個人檔案連到購物",
  "Ads to profile, shop, or DM": "廣告導向個人檔案、商店或私訊",
  "Creators to brand partnerships": "創作者連到品牌合作",
  "Creation to For You feed": "創作進入 For You 推薦",
  "For You to engagement": "For You 推薦帶動互動",
  "Engagement to recommendations": "互動回饋推薦",
  "Creators to LIVE": "創作者進入 LIVE",
  "LIVE to gifts and shopping where available by market": "LIVE 連到禮物與購物，依市場開放情況而定",
  "TikTok Shop to product links and checkout where available by market": "TikTok Shop 連到商品連結與結帳，依市場開放情況而定",
  "Ads to content, shop, and lead forms": "廣告導向內容、商店與潛在客戶表單",
  "Discovery to product detail": "探索連到商品詳情",
  "Product detail to cart": "商品詳情加入購物車",
  "Cart to checkout and payment": "購物車進入結帳與付款",
  "Payment to logistics and after-sales": "付款後進入物流與售後",
  "Seller chat to product decision": "賣家聊天支援購買決策",
  "Live content to product detail and coupons": "直播內容連到商品詳情與優惠券",
  "Entry points to inbox": "入口導入收件匣",
  "Help center to self-service deflection": "說明中心支援自助分流",
  "AI agent to resolution or handoff": "AI Agent 解決問題或轉交真人",
  "Customer data to routing and personalization": "客戶資料支援路由與個人化",
  "Outbound to entry points": "主動訊息帶回入口",
  "Reporting to workflow improvement": "報表回饋工作流程改善",
  "Profile to network": "個人檔案建立人脈",
  "Network to feed": "人脈支撐動態",
  "Feed to opportunities": "動態導向機會",
  "Jobs to applications": "職缺導向應徵",
  "Recruiting to candidate outreach": "招募連到候選人觸及",
  "Sales Navigator to leads and messaging": "Sales Navigator 連到潛在客戶與訊息",
  "Learning to profile skills": "學習成果回到個人檔案技能",

  "enables": "啟用",
  "hosts": "承載",
  "publishes to": "發布到",
  "opens": "開啟",
  "accepts automation from": "接受自動化",
  "launches": "啟動",
  "extends into": "延伸到",
  "launches / controls": "啟動 / 控制",
  "shares output back to": "把結果分享到",
  "delegates replies to": "委派回覆給",
  "publishes boosted stories": "發布加成限時動態",
  "monetizes / distributes to": "變現 / 分發到",
  "opens transfers, red packets, QR payments": "開啟轉帳、紅包與 QR 付款",
  "drives traffic to": "導流到",
  "drives discovery to": "帶動探索到",
  "starts checkout through": "透過此處開始結帳",
  "finds services": "尋找服務",
  "confirms back to": "確認回傳到",
  "integrates through": "透過此處整合",
  "expands to": "延伸到",
  "uses": "使用",
  "sends webhook to": "送出 webhook 到",
  "replies through LINE Platform / Chat Core": "透過 LINE Platform / 聊天核心回覆",
  "handles payment through": "透過此處處理付款",
  "measures with": "透過此處衡量",
  "contains": "包含",
  "controls access through": "透過此處控管存取",
  "unlocks perks through": "透過此處解鎖權益",
  "adds perks to": "加入權益到",
  "integrates with": "整合",
  "governs locally": "在本地控管",
  "starts conversation through": "透過此處開始對話",
  "manages presence through": "透過此處管理門面",
  "publishes / advertises to": "發布 / 投放到",
  "feeds": "餵入",
  "assists search in": "輔助搜尋於",
  "assists listings in": "輔助刊登於",
  "answers questions in": "回答問題於",
  "publishes from": "從此處發布",
  "carries": "承載",
  "triggers private reaction in": "觸發私訊互動於",
  "connects to": "連到",
  "distributes to": "分發到",
  "participates in": "參與",
  "manages products for": "管理商品給",
  "manages orders for": "管理訂單給",
  "starts": "開始",
  "amplifies": "放大觸及",
  "starts question in": "在此處發問",
  "reduces uncertainty and returns to": "降低不確定後回到",
  "adds item to": "加入商品到",
  "confirms": "確認",
  "syncs with": "同步",
  "handles": "處理",
  "handles reviews for": "處理評論給",
  "manages catalog for": "管理型錄給",
  "manages": "管理",
  "manages service for": "管理服務給",
  "sends inbound conversation to": "送入進線對話到",
  "routes to": "分派到",
  "creates / updates": "建立 / 更新",
  "triggers": "觸發",
  "powers": "支援",
  "powers Agent Copilot / Help Center": "支援 Agent Copilot / 說明中心",
  "personalizes": "個人化",
  "sync with": "同步",
  "measures": "衡量",
  "accepts": "接收",
  "uses company data from": "使用公司資料自",
  "sends leads to": "送出潛在客戶到",
  "converts relationship into": "把關係轉成",
  "governs": "控管",
  "opens/replies": "開啟 / 回覆",
  "opens/replies into": "開啟 / 回覆到",
  "organizes": "組織",
  "broadcasts/follows": "廣播 / 追蹤",
  "merchant tools": "商家工具",
  "adds merchant tools": "加入商家工具",
  "customer messages": "客戶訊息",
  "user-invoked assistance": "使用者叫出的協助",
  "support assist": "支援協助"
};

const ZH_PHRASE_TEXT = [
  ["End-to-end encryption for personal messages and calls", "個人訊息與通話的端對端加密"],
  ["Two-step verification", "雙步驟驗證"],
  ["Security notifications", "安全通知"],
  ["Active session review", "查看登入工作階段"],
  ["Phone number", "手機號碼"],
  ["SMS/call verification", "簡訊 / 通話驗證"],
  ["Change number", "更改號碼"],
  ["Account recovery", "帳號復原"],
  ["Delete account", "刪除帳號"],
  ["Profile name", "個人檔案名稱"],
  ["Profile photo visibility", "個人檔案相片可見度"],
  ["Profile photo", "個人檔案相片"],
  ["Profile visibility", "個人檔案可見度"],
  ["About visibility", "關於可見度"],
  ["About text", "關於文字"],
  ["Contact cards", "聯絡人名片"],
  ["Phone contact sync", "手機聯絡人同步"],
  ["Contact sync", "聯絡人同步"],
  ["Business contact discovery", "商家聯絡人探索"],
  ["Blocked contacts", "已封鎖聯絡人"],
  ["Invite links", "邀請連結"],
  ["QR invite", "QR code 邀請"],
  ["QR code", "QR code"],
  ["WhatsApp Web", "WhatsApp 網頁版"],
  ["Desktop apps", "桌面版 App"],
  ["Desktop app", "桌面版 App"],
  ["Companion phones", "連結手機"],
  ["Android tablets", "Android 平板"],
  ["iPad app availability varies by rollout", "iPad App 依分階段推出狀態而定"],
  ["Wear OS where supported", "支援時可用 Wear OS"],
  ["Passkeys where supported", "支援時可用通行密鑰"],
  ["1:1 voice calls", "一對一語音通話"],
  ["1:1 video calls", "一對一視訊通話"],
  ["1:1 chats", "一對一聊天"],
  ["1:1 chat", "一對一聊天"],
  ["1-to-1 chats", "一對一聊天"],
  ["1-to-1 chat", "一對一聊天"],
  ["Private chats", "私人聊天"],
  ["Business chat", "商家聊天"],
  ["Group-message transport", "群組訊息傳送"],
  ["Group voice calls", "群組語音通話"],
  ["Group video calls", "群組視訊通話"],
  ["Group calls", "群組通話"],
  ["Group chat", "群組聊天"],
  ["Group name/photo", "群組名稱 / 相片"],
  ["Group search", "群組搜尋"],
  ["Shared media/files", "共享媒體 / 檔案"],
  ["Shared media", "共享媒體"],
  ["Shared files", "共享檔案"],
  ["Quoted replies", "引用回覆"],
  ["Forward voice notes", "轉寄語音訊息"],
  ["Voice message transcription", "語音訊息轉文字"],
  ["Hands-free recording", "免持錄音"],
  ["Playback speed", "播放速度"],
  ["Voice messages", "語音訊息"],
  ["Voice message", "語音訊息"],
  ["Voice notes", "語音訊息"],
  ["Message notifications", "訊息通知"],
  ["Group notifications", "群組通知"],
  ["Notification previews", "通知預覽"],
  ["Call notifications", "通話通知"],
  ["Call notification", "通話通知"],
  ["Message requests", "訊息邀請"],
  ["Message reactions", "訊息表情回應"],
  ["Delivery receipts", "送達標記"],
  ["Read receipts", "已讀標記"],
  ["Message info", "訊息資訊"],
  ["Last seen", "上次上線"],
  ["Online status", "上線狀態"],
  ["Typing indicators", "輸入中提示"],
  ["Message history", "訊息記錄"],
  ["Chat filters", "聊天篩選器"],
  ["Unread filter", "未讀篩選器"],
  ["Groups filter", "群組篩選器"],
  ["Pinned chats", "置頂聊天"],
  ["Pinned messages", "置頂訊息"],
  ["Starred messages", "加星標訊息"],
  ["Archived chats", "封存聊天"],
  ["View-once media", "限時查看媒體"],
  ["Media gallery", "媒體庫"],
  ["Location sharing", "位置分享"],
  ["Delete for everyone", "為所有人刪除"],
  ["Edit messages", "編輯訊息"],
  ["Delete messages", "刪除訊息"],
  ["Forward to chats/groups", "轉寄到聊天 / 群組"],
  ["Forwards", "轉寄"],
  ["Replies", "回覆"],
  ["Edits", "編輯"],
  ["Mentions", "提及"],
  ["Muted chats", "已靜音聊天"],
  ["Mute/deafen", "靜音 / 關閉聽筒"],
  ["Mute", "靜音"],
  ["Speaker controls", "喇叭控制"],
  ["Camera switch", "切換鏡頭"],
  ["Screen share", "螢幕分享"],
  ["Screen sharing", "螢幕分享"],
  ["Picture-in-picture", "子母畫面"],
  ["Video effects", "視訊特效"],
  ["Low data mode", "低數據用量模式"],
  ["Participant management", "參與者管理"],
  ["Call history", "通話紀錄"],
  ["Call back", "回撥"],
  ["Missed call notification", "未接來電通知"],
  ["Calls tab", "通話分頁"],
  ["Call links", "通話連結"],
  ["Scheduled calls", "預定通話"],
  ["Joinable calls", "可加入通話"],
  ["Chat header", "聊天標頭"],
  ["Group chat header", "群組聊天標頭"],
  ["Photo status", "相片狀態"],
  ["Video status", "影片狀態"],
  ["Text status", "文字狀態"],
  ["Voice status", "語音狀態"],
  ["24-hour ephemerality", "24 小時限時顯示"],
  ["Status privacy", "狀態隱私"],
  ["Status replies", "狀態回覆"],
  ["Status reactions", "狀態表情回應"],
  ["Status mentions", "狀態提及"],
  ["Share to contacts", "分享給聯絡人"],
  ["Forward status content", "轉寄狀態內容"],
  ["Updates tab", "最新消息分頁"],
  ["Close-contact sharing", "親近聯絡人分享"],
  ["Audience controls", "受眾控制"],
  ["Muted updates", "已靜音更新"],
  ["Viewed updates", "已查看更新"],
  ["Ads in Status", "狀態廣告"],
  ["Business chat entry from Status ads", "從狀態廣告進入商家聊天"],
  ["Promoted Channels", "推廣頻道"],
  ["Rollout by region/account eligibility", "依地區 / 帳號資格分階段開放"],
  ["Community home", "社群首頁"],
  ["Announcement group", "公告群組"],
  ["Admin broadcasts", "管理員廣播"],
  ["Event notices", "活動通知"],
  ["One-to-many member updates", "一對多成員更新"],
  ["Community admins", "社群管理員"],
  ["Group admins", "群組管理員"],
  ["Member approval", "成員核准"],
  ["Member management", "成員管理"],
  ["Member visibility controls", "成員可見度控制"],
  ["Member group list", "成員群組清單"],
  ["Join requests", "加入請求"],
  ["Phone number privacy", "手機號碼隱私"],
  ["Forwarding controls", "轉寄控制"],
  ["Block/report", "封鎖 / 檢舉"],
  ["Report community", "檢舉社群"],
  ["Admin roles", "管理員角色"],
  ["Admin-only settings", "僅限管理員設定"],
  ["Who can send messages", "誰可以傳送訊息"],
  ["Who can edit group info", "誰可以編輯群組資訊"],
  ["Remove members", "移除成員"],
  ["Polls", "投票"],
  ["Events", "活動"],
  ["Event RSVP", "活動回覆"],
  ["Related member groups", "相關成員群組"],
  ["Related groups", "相關群組"],
  ["Topic coordination", "主題協作"],
  ["Community info", "社群資訊"],
  ["Text updates", "文字更新"],
  ["Channel links", "頻道連結"],
  ["Directory discovery", "目錄探索"],
  ["Country-filtered directory", "依國家篩選目錄"],
  ["Popular/new/active lists", "熱門 / 最新 / 活躍清單"],
  ["Brand announcements", "品牌公告"],
  ["Creator updates", "創作者更新"],
  ["Publisher updates", "發布者更新"],
  ["Channel analytics", "頻道分析"],
  ["Follower phone numbers hidden from admins", "向管理員隱藏追蹤者手機號碼"],
  ["Admin phone numbers hidden from followers", "向追蹤者隱藏管理員手機號碼"],
  ["Private follow choices", "私人追蹤選擇"],
  ["Business profile", "商家檔案"],
  ["Meta Verified", "Meta Verified"],
  ["Product/service pages", "商品 / 服務頁"],
  ["Catalog links", "型錄連結"],
  ["Order message", "訂單訊息"],
  ["Greeting message", "問候訊息"],
  ["Away message", "離開訊息"],
  ["Saved replies", "儲存回覆"],
  ["Reusable answers", "可重複使用回覆"],
  ["Action buttons", "動作按鈕"],
  ["Response shortcuts", "回覆捷徑"],
  ["Customer labels", "客戶標籤"],
  ["Chat list filtering", "聊天清單篩選"],
  ["Customer notes through labels", "透過標籤記錄客戶備註"],
  ["Sales stages", "銷售階段"],
  ["Support queues", "支援佇列"],
  ["Follow-up organization", "後續追蹤整理"],
  ["Customer conversation", "客戶對話"],
  ["Manual sales", "人工銷售"],
  ["Support triage", "支援分流"],
  ["Multiple agents", "多位客服人員"],
  ["Customer context", "客戶脈絡"],
  ["Click-to-WhatsApp ads", "點擊前往 WhatsApp 廣告"],
  ["Greeting message automation", "問候訊息自動化"],
  ["Away message automation", "離開訊息自動化"],
  ["Business tools on linked devices", "連結裝置上的商家工具"],
  ["WhatsApp Business Account", "WhatsApp Business 帳號"],
  ["Business verification", "商家驗證"],
  ["Phone numbers", "電話號碼"],
  ["Display names", "顯示名稱"],
  ["WhatsApp Manager", "WhatsApp 管理工具"],
  ["Quality rating", "品質評等"],
  ["Cloud API", "Cloud API"],
  ["Send/receive messages", "傳送 / 接收訊息"],
  ["Media messages", "媒體訊息"],
  ["Interactive buttons", "互動按鈕"],
  ["Location requests", "位置要求"],
  ["Message templates", "訊息範本"],
  ["Marketing templates", "行銷範本"],
  ["Utility templates", "實用範本"],
  ["Authentication templates", "驗證範本"],
  ["Template review", "範本審查"],
  ["Opt-in/quality rules", "同意接收 / 品質規則"],
  ["Flow Builder", "Flow Builder"],
  ["Flow API", "Flow API"],
  ["Simple templates", "簡易範本"],
  ["Lead capture", "潛在客戶蒐集"],
  ["Appointment booking", "預約"],
  ["Data exchange", "資料交換"],
  ["Status callbacks", "狀態回呼"],
  ["Customer service window", "客服窗口"],
  ["Bot routing", "機器人路由"],
  ["Agent handoff", "轉交客服人員"],
  ["Analytics events", "分析事件"],
  ["Inbox integrations", "收件匣整合"],
  ["CRM sync", "CRM 同步"],
  ["Helpdesk handoff", "客服系統交接"],
  ["Support routing", "支援路由"],
  ["Sales handoff", "銷售交接"],
  ["Customer profile enrichment", "客戶檔案補強"],
  ["FAQ automation", "FAQ 自動化"],
  ["Escalation rules", "升級規則"],
  ["Conversation analytics", "對話分析"],
  ["Product messages", "商品訊息"],
  ["Commerce events", "商務事件"],
  ["Policy enforcement", "政策執行"],
  ["Pricing by market/category", "依市場 / 類別定價"],
  ["Customer records", "客戶記錄"],
  ["Lead ownership", "潛在客戶負責人"],
  ["Conversation history sync", "對話記錄同步"],
  ["Ticket creation", "建立票證"],
  ["Agent assignment", "客服人員指派"],
  ["SLA tracking", "SLA 追蹤"],
  ["Escalations", "升級處理"],
  ["Knowledge base links", "知識庫連結"],
  ["Product catalog source", "商品型錄來源"],
  ["Checkout state", "結帳狀態"],
  ["Order status", "訂單狀態"],
  ["Returns/refunds", "退貨 / 退款"],
  ["Customer account links", "客戶帳號連結"],
  ["Inventory availability", "庫存可用量"],
  ["Shipment status", "出貨狀態"],
  ["Delivery updates", "配送更新"],
  ["Store pickup", "門市取貨"],
  ["After-sales workflows", "售後工作流程"],
  ["Payment provider", "付款服務商"],
  ["Marketing automation", "行銷自動化"],
  ["Attribution", "歸因"],
  ["Campaign analytics", "活動分析"],
  ["Data warehouse export", "匯出到資料倉儲"],
  ["Meta AI chat", "Meta AI 聊天"],
  ["Ask through search", "透過搜尋提問"],
  ["@Meta AI mention", "@Meta AI 提及"],
  ["Recommendations", "推薦"],
  ["Planning help", "規劃協助"],
  ["Search-style answers", "搜尋式回答"],
  ["FAQ-style answers", "FAQ 式回答"],
  ["Product discovery", "商品探索"],
  ["Service recommendations", "服務推薦"],
  ["Support guidance", "支援指引"],
  ["Drafting support", "草稿輔助"],
  ["Tone rewriting", "語氣改寫"],
  ["Message suggestions", "訊息建議"],
  ["Creative prompts", "創意提示"],
  ["Catalog guidance", "型錄指引"],
  ["Order help", "訂單協助"],
  ["Handoff suggestions", "轉交建議"],
  ["Response suggestions", "回覆建議"],
  ["AI only receives prompts/messages sent to it", "AI 只會接收送給它的提示與訊息"],
  ["Personal chats remain separate", "個人聊天維持分開"],
  ["Advanced chat privacy affects AI/chat export behavior", "進階聊天隱私會影響 AI / 聊天匯出行為"],

  ["Secret chats", "私密聊天"],
  ["Privacy settings", "隱私設定"],
  ["Two-factor auth", "雙因素驗證"],
  ["Spam controls", "垃圾訊息控管"],
  ["Admin moderation", "管理員審核"],
  ["Phone/account", "手機 / 帳號"],
  ["Username", "使用者名稱"],
  ["Bio", "簡介"],
  ["Public link", "公開連結"],
  ["Profile photos", "個人檔案相片"],
  ["Phone-number discovery controls", "手機號碼探索控制"],
  ["Invite friends", "邀請好友"],
  ["Shared contacts", "共享聯絡人"],
  ["Cloud sync", "雲端同步"],
  ["Multi-device", "多裝置"],
  ["Active sessions", "啟用中的工作階段"],
  ["Web app", "網頁版 App"],
  ["Tablet support", "平板支援"],
  ["Notification controls", "通知控制"],
  ["Data/storage controls", "資料 / 儲存空間控制"],
  ["Chat folders", "聊天資料夾"],
  ["Saved messages", "Saved Messages 已儲存訊息"],
  ["Folders", "資料夾"],
  ["Hashtags", "Hashtag 標籤"],
  ["Scheduled messages", "排程訊息"],
  ["Silent messages", "無聲訊息"],
  ["Stickers", "貼圖"],
  ["Emoji status", "Emoji 狀態"],
  ["Spoilers", "防雷文字"],
  ["Formatting", "格式設定"],
  ["Small groups", "小型群組"],
  ["Supergroups", "超級群組"],
  ["Public groups", "公開群組"],
  ["Private groups", "私人群組"],
  ["Permissions", "權限"],
  ["Slow mode", "慢速模式"],
  ["Bans", "停權"],
  ["Admin logs", "管理記錄"],
  ["Automated moderation bots", "自動管理機器人"],
  ["Content controls", "內容控制"],
  ["Public broadcasts", "公開廣播"],
  ["Private channels", "私人頻道"],
  ["Posts", "貼文"],
  ["Reposts", "轉發"],
  ["Pinned posts", "置頂貼文"],
  ["Scheduled posts", "排程貼文"],
  ["Subscribers", "訂閱者"],
  ["Comments through groups", "透過群組留言"],
  ["Forwarding", "轉寄"],
  ["Boosts", "加成"],
  ["Paid content", "付費內容"],
  ["Stars", "星星"],
  ["Paid media", "付費媒體"],
  ["User stories", "使用者限時動態"],
  ["Channel stories", "頻道限時動態"],
  ["Captions", "說明文字"],
  ["Stickers/location", "貼圖 / 位置"],
  ["Story editing", "限時動態編輯"],
  ["Story privacy", "限時動態隱私"],
  ["Profile highlights", "個人檔案精選"],
  ["Story archive", "限時動態封存"],
  ["View controls", "瀏覽控制"],
  ["Premium boosts", "Premium 加成"],
  ["Channel story levels", "頻道限時動態等級"],
  ["Story posting limits", "限時動態發布限制"],
  ["Boost-driven channel perks", "加成帶來的頻道權益"],
  ["Voice chats", "語音聊天室"],
  ["Live streams", "直播"],
  ["Speaker management", "講者管理"],
  ["Recording", "錄製"],
  ["Audience participation", "觀眾參與"],
  ["Noise suppression", "噪音抑制"],
  ["Raise hand", "舉手"],
  ["Chat alongside live", "直播旁聊天"],
  ["Chatbots", "聊天機器人"],
  ["Inline bots", "Inline 機器人"],
  ["Commands", "指令"],
  ["Bot menus", "機器人選單"],
  ["Web apps", "Web App 網頁應用"],
  ["Games", "遊戲"],
  ["Service flows", "服務流程"],
  ["Commerce flows", "商務流程"],
  ["Authentication", "驗證"],
  ["Deep links", "深層連結"],
  ["Invoices", "發票 / 請款單"],
  ["Tips", "小費"],
  ["Subscriptions", "訂閱"],
  ["Order updates", "訂單更新"],
  ["Bot-driven support", "機器人支援"],
  ["Bot API", "Bot API 介面"],
  ["Login widget", "登入元件"],
  ["Telegram apps SDK", "Telegram Apps SDK 開發工具"],
  ["Opening hours", "營業時間"],
  ["Start page", "起始頁"],
  ["Business intro", "商家介紹"],
  ["Map display", "地圖顯示"],
  ["Profile links", "個人檔案連結"],
  ["Quick replies", "快速回覆"],
  ["Greeting messages", "問候訊息"],
  ["Away messages", "離開訊息"],
  ["Chat labels", "聊天標籤"],
  ["Folder shortcuts", "資料夾捷徑"],
  ["Customer replies", "客戶回覆"],
  ["Connected chatbots", "已連接的聊天機器人"],
  ["Delegated replies", "委派回覆"],
  ["FAQ responses", "FAQ 回覆"],
  ["Support escalation", "支援升級"],
  ["Telegram Premium", "Telegram Premium"],
  ["Larger uploads", "更大上傳容量"],
  ["Faster downloads", "更快下載"],
  ["Premium stickers", "Premium 貼圖"],
  ["Voice-to-text", "語音轉文字"],
  ["Profile perks", "個人檔案權益"],
  ["Custom emoji", "自訂 emoji"],
  ["Creator monetization", "創作者變現"],
  ["Paid posts", "付費貼文"],
  ["Ads platform", "廣告平台"],
  ["Sponsored messages", "贊助訊息"],
  ["Channel promotion", "頻道推廣"],
  ["Targeting controls", "鎖定控制"],
  ["Budgeting", "預算設定"],

  ["WeChat ID", "WeChat ID"],
  ["Weixin ID", "微信 ID"],
  ["Phone binding", "綁定手機"],
  ["Security center", "安全中心"],
  ["Friend requests", "好友請求"],
  ["Tags", "標籤"],
  ["Favorites", "收藏"],
  ["Scan", "掃一掃"],
  ["Friend discovery", "好友探索"],
  ["Official account following", "關注公眾號"],
  ["Mini program entry", "小程式入口"],
  ["Device management", "裝置管理"],
  ["Login approvals", "登入核准"],
  ["Language/region settings", "語言 / 地區設定"],
  ["Message recall", "撤回訊息"],
  ["Voice input", "語音輸入"],
  ["Translation", "翻譯"],
  ["Red packets", "紅包"],
  ["Transfers", "轉帳"],
  ["Split bills", "分帳"],
  ["Payment confirmations", "付款確認"],
  ["Merchant service chats", "商家服務聊天"],
  ["Moments feed", "朋友圈動態"],
  ["Text posts", "文字貼文"],
  ["Visibility groups", "可見分組"],
  ["Moment visibility settings", "朋友圈可見度設定"],
  ["Likes", "讚"],
  ["Comments", "留言"],
  ["Share from chats", "從聊天分享"],
  ["Share from channels", "從視頻號分享"],
  ["Weixin Search discovery", "微信搜一搜探索"],
  ["Channels discovery", "視頻號探索"],
  ["People and content discovery", "人物與內容探索"],
  ["Social recommendations", "社交推薦"],
  ["Nearby/social signals", "附近 / 社交訊號"],
  ["Public content search", "公開內容搜尋"],
  ["Official account search", "公眾號搜尋"],
  ["Mini Program search", "小程式搜尋"],
  ["Service discovery", "服務探索"],
  ["Content recommendations", "內容推薦"],
  ["Mini Games", "小遊戲"],
  ["Game discovery", "遊戲探索"],
  ["Social sharing", "社交分享"],
  ["Developer ecosystem", "開發者生態系"],
  ["Brand/service discovery", "品牌 / 服務探索"],
  ["Government services", "政府服務"],
  ["Healthcare", "醫療健康"],
  ["Utilities", "實用服務"],
  ["Food delivery", "外送"],
  ["Travel", "旅遊"],
  ["Ticketing", "票券"],
  ["Shopping", "購物"],
  ["Coupons", "優惠券"],
  ["Membership", "會員"],
  ["Loyalty", "忠誠會員"],
  ["Customer support", "客服支援"],
  ["Access Points", "入口"],
  ["Recently used", "最近使用"],
  ["Brand experiences", "品牌體驗"],
  ["Live commerce links", "直播電商連結"],
  ["Balance", "餘額"],
  ["Cards", "卡片"],
  ["Bank linking", "綁定銀行"],
  ["Wallet services", "錢包服務"],
  ["Bills", "帳單"],
  ["Transaction history", "交易紀錄"],
  ["QR payments", "QR code 付款"],
  ["Merchant scan", "商家掃碼"],
  ["In-app checkout", "App 內結帳"],
  ["Offline merchants", "線下商家"],
  ["Transit cards", "交通卡"],
  ["Utility bills", "公用事業帳單"],
  ["Insurance/wealth links", "保險 / 理財連結"],
  ["Payment password", "支付密碼"],
  ["Risk controls", "風險控管"],
  ["Refunds", "退款"],
  ["Merchant verification", "商家驗證"],
  ["Disputes", "爭議處理"],
  ["Subscription accounts", "訂閱號"],
  ["Service accounts", "服務號"],
  ["Verified accounts", "已驗證帳號"],
  ["Brand profiles", "品牌檔案"],
  ["Government accounts", "政府帳號"],
  ["Articles", "文章"],
  ["Menus", "選單"],
  ["Rich media", "豐富媒體"],
  ["Follower management", "粉絲管理"],
  ["Merchant integrations", "商家整合"],
  ["Short video", "短影音"],
  ["Live streaming", "直播"],
  ["Creator posts", "創作者貼文"],
  ["Brand content", "品牌內容"],
  ["Video feed", "影片動態"],
  ["Follow creators", "追蹤創作者"],
  ["Shopping links", "購物連結"],
  ["Live shopping", "直播購物"],
  ["Product cards", "商品卡"],
  ["Merchant follow-up", "商家後續追蹤"],
  ["Pay integration", "支付整合"],
  ["Live tools", "直播工具"],
  ["Content management", "內容管理"],
  ["Official account links", "公眾號連結"],

  ["LINE ID", "LINE ID"],
  ["Friend add", "加入好友"],
  ["Friend recommendations", "好友推薦"],
  ["Hidden users", "隱藏使用者"],
  ["Account transfer", "帳號移動"],
  ["Password/login", "密碼 / 登入"],
  ["Hide", "隱藏"],
  ["LINE VOOM visibility/settings", "LINE VOOM 可見度 / 設定"],
  ["Letter Sealing encryption", "Letter Sealing 加密"],
  ["Friend request controls", "好友邀請控制"],
  ["Albums", "相簿"],
  ["Keep/memos", "Keep / 備忘錄"],
  ["Announcements", "公告"],
  ["Chat folders", "聊天資料夾"],
  ["Effects", "特效"],
  ["Filters", "濾鏡"],
  ["Backgrounds", "背景"],
  ["Camera controls", "鏡頭控制"],
  ["Watch together features", "一起看功能"],
  ["Large group calls", "大型群組通話"],
  ["Invite from chat", "從聊天邀請"],
  ["In-call reactions", "通話中表情回應"],
  ["Topic communities", "主題社群"],
  ["Anonymous profiles", "匿名個人檔案"],
  ["Rooms", "聊天室"],
  ["Search/discovery", "搜尋 / 探索"],
  ["Rules", "規則"],
  ["Content moderation", "內容審核"],
  ["Spam prevention", "垃圾訊息防護"],
  ["Events/discussion", "活動 / 討論"],
  ["Topic coordination", "主題協作"],
  ["VOOM posts", "VOOM 貼文"],
  ["Recommended posts", "推薦貼文"],
  ["Follows", "追蹤"],
  ["Shares", "分享"],
  ["Follow relationships", "追蹤關係"],
  ["Visibility settings", "可見度設定"],
  ["Recommendation controls", "推薦控制"],
  ["Official account profile", "官方帳號檔案"],
  ["Rich menus", "圖文選單"],
  ["Broadcasts", "群發訊息"],
  ["Membership cards", "會員卡"],
  ["Auto-replies", "自動回覆"],
  ["Segmented messages", "分眾訊息"],
  ["Surveys", "問卷"],
  ["Reservations", "預約"],
  ["Campaign tracking", "活動追蹤"],
  ["Messaging API links", "Messaging API 連結"],
  ["Product links", "商品連結"],
  ["Coupons to store", "優惠券到店"],
  ["Appointments", "預約"],
  ["LINE Pay / wallet links", "LINE Pay / 錢包連結"],
  ["LINE Pay / wallet services", "LINE Pay / 錢包服務"],
  ["Merchant payments", "商家付款"],
  ["Receipts", "收據"],
  ["News", "新聞"],
  ["Music/content services", "音樂 / 內容服務"],
  ["Local services", "在地服務"],
  ["Stickers store", "貼圖小舖"],
  ["Theme store", "主題小舖"],
  ["Emoji store", "Emoji 小舖"],
  ["Creator stickers", "創作者貼圖"],
  ["Gift purchases", "禮物購買"],
  ["LINE Ads", "LINE 廣告"],
  ["Audience targeting", "受眾鎖定"],
  ["Retargeting", "再行銷"],
  ["Creative management", "素材管理"],
  ["Bot flows", "機器人流程"],
  ["Rich messages", "圖文訊息"],
  ["LIFF/mini app links", "LIFF / MINI App 連結"],
  ["Segments", "分眾"],
  ["Customer profiles", "客戶檔案"],
  ["Conversion events", "轉換事件"],
  ["Compliance controls", "合規控制"],

  ["Servers", "伺服器"],
  ["Server home", "伺服器首頁"],
  ["Server guide", "伺服器指南"],
  ["Welcome screen", "歡迎畫面"],
  ["Roles", "身分組"],
  ["Categories", "分類"],
  ["Server discovery", "伺服器探索"],
  ["Onboarding", "入門設定"],
  ["Member management", "成員管理"],
  ["Invites", "邀請"],
  ["Verification levels", "驗證等級"],
  ["Audit logs", "稽核記錄"],
  ["Community settings", "社群設定"],
  ["Server insights", "伺服器洞察"],
  ["Membership screening", "成員審核"],
  ["Role selection", "身分組選擇"],
  ["Server boosts", "伺服器加成"],
  ["Text channels", "文字頻道"],
  ["Threads", "討論串"],
  ["Forum channels", "論壇頻道"],
  ["Media channels", "媒體頻道"],
  ["Voice channels", "語音頻道"],
  ["Stage channels", "舞台頻道"],
  ["Video rooms", "視訊房間"],
  ["Screen share spaces", "螢幕分享空間"],
  ["Activities", "活動"],
  ["Embeds", "嵌入內容"],
  ["Emoji", "Emoji"],
  ["Channel permissions", "頻道權限"],
  ["Slow mode", "慢速模式"],
  ["Topic", "主題"],
  ["NSFW controls", "NSFW 控制"],
  ["Notification settings", "通知設定"],
  ["Voice chat", "語音聊天"],
  ["Video chat", "視訊聊天"],
  ["Streaming", "直播"],
  ["Push-to-talk", "按鍵說話"],
  ["Watch together", "一起看"],
  ["Stage events", "舞台活動"],
  ["Event scheduling", "活動排程"],
  ["Co-hosting", "共同主持"],
  ["Speaker priority", "講者優先權"],
  ["Voice region", "語音地區"],
  ["Third-party recording bots", "第三方錄音機器人"],
  ["Role hierarchy", "身分組階層"],
  ["Permission overrides", "權限覆寫"],
  ["Channel access", "頻道存取"],
  ["Moderator roles", "版主身分組"],
  ["AutoMod", "AutoMod"],
  ["Rules screening", "規則審核"],
  ["Reports", "檢舉"],
  ["Timeouts", "禁言"],
  ["Bans/kicks", "封鎖 / 踢出"],
  ["Raid protection", "突襲防護"],
  ["Moderator notes", "版主備註"],
  ["Community guidelines", "社群規範"],
  ["Appeals workflows", "申訴流程"],
  ["Safety alerts", "安全警示"],
  ["Content filters", "內容篩選器"],
  ["Moderation bots", "管理機器人"],
  ["Music/tools bots", "音樂 / 工具機器人"],
  ["Game bots", "遊戲機器人"],
  ["Support bots", "支援機器人"],
  ["Analytics bots", "分析機器人"],
  ["Role bots", "身分組機器人"],
  ["App directory", "App 目錄"],
  ["Embedded apps", "嵌入式 App"],
  ["OAuth install", "OAuth 安裝"],
  ["App permissions", "App 權限"],
  ["CRM/support links", "CRM / 支援連結"],
  ["Custom workflows", "自訂工作流程"],
  ["Nitro Basic", "Nitro Basic"],
  ["Avatar decorations", "頭像裝飾"],
  ["Profile effects", "個人檔案特效"],
  ["Shop items", "商店商品"],
  ["Expanded uploads", "擴充上傳容量"],
  ["Boost levels", "加成等級"],
  ["Custom emoji slots", "自訂 emoji 欄位"],
  ["Server banner", "伺服器橫幅"],
  ["Audio/video quality", "音訊 / 視訊品質"],
  ["Vanity URL", "自訂邀請網址"],
  ["Server subscriptions", "伺服器訂閱"],
  ["Premium roles", "付費身分組"],
  ["Premium role channel access", "付費身分組頻道存取"],
  ["Member benefits", "成員權益"],
  ["Server Shop", "伺服器商店"],
  ["One-time server products", "一次性伺服器商品"],
  ["Downloadables", "可下載項目"],
  ["Server product listings", "伺服器商品列表"],
  ["Member purchases", "成員購買"],

  ["Account center", "帳號管理中心"],
  ["Facebook Login", "Facebook 登入"],
  ["Security checkup", "安全檢查"],
  ["Device sessions", "裝置工作階段"],
  ["Memorialization settings", "紀念帳號設定"],
  ["Birthdays", "生日"],
  ["Friend suggestions", "好友建議"],
  ["Mutual friends", "共同好友"],
  ["Check-ins", "打卡"],
  ["Feed ranking", "動態排序"],
  ["Suggested posts", "推薦貼文"],
  ["Watch/video discovery", "Watch / 影片探索"],
  ["Memories", "回顧"],
  ["Audience selector", "受眾選擇器"],
  ["Hide/snooze", "隱藏 / 暫停顯示"],
  ["Content preferences", "內容偏好"],
  ["Buy/sell groups", "買賣社團"],
  ["Community groups", "社群社團"],
  ["Learning/social groups", "學習 / 社交社團"],
  ["Membership questions", "入社問題"],
  ["Post approvals", "貼文審核"],
  ["Insights", "洞察"],
  ["Group discovery", "社團探索"],
  ["Badges", "徽章"],
  ["Member requests", "成員請求"],
  ["Community chats", "社群聊天"],
  ["Page inbox", "粉絲專頁收件匣"],
  ["Chat plugins", "聊天外掛"],
  ["Click-to-message ads", "點擊發訊息廣告"],
  ["Automated replies", "自動回覆"],
  ["Lead follow-up", "潛在客戶後續追蹤"],
  ["Business Page", "商家粉絲專頁"],
  ["Profile info", "個人檔案資訊"],
  ["Followers", "粉絲"],
  ["Reviews", "評論"],
  ["FAQ/automated replies", "FAQ / 自動回覆"],
  ["Call-to-action buttons", "行動呼籲按鈕"],
  ["Messenger links", "Messenger 連結"],
  ["Shops/catalog", "商店 / 型錄"],
  ["Product tags", "商品標籤"],
  ["Offers", "優惠"],
  ["Checkout where eligible", "符合資格時可用結帳"],
  ["Order messages", "訂單訊息"],
  ["Audience data", "受眾資料"],
  ["Content performance", "內容成效"],
  ["Ad performance", "廣告成效"],
  ["Meta Business Suite", "Meta Business Suite"],
  ["Boosted posts", "加強推廣貼文"],
  ["Campaign objectives", "行銷活動目標"],
  ["Creative testing", "素材測試"],
  ["Budgets", "預算"],
  ["Placements", "版位"],
  ["Custom audiences", "自訂受眾"],
  ["Lookalikes", "類似受眾"],
  ["Pixel/conversions API", "Pixel / Conversions API 轉換介面"],
  ["Advantage tools", "Advantage 工具"],
  ["Lead forms", "潛在客戶表單"],
  ["Click-to-message", "點擊發訊息"],
  ["Instant experiences", "即時體驗"],
  ["Page promotion", "粉絲專頁推廣"],
  ["Shops traffic", "商店流量"],
  ["App installs", "App 安裝"],
  ["Ad policies", "廣告政策"],
  ["Review", "審查"],
  ["Billing", "帳單"],
  ["Brand safety", "品牌安全"],
  ["Listings", "刊登商品"],
  ["Categories", "分類"],
  ["Local discovery", "在地探索"],
  ["Saved listings", "已儲存刊登"],
  ["Seller chat", "賣家聊天"],
  ["Pickup/shipping", "取貨 / 運送"],
  ["Marketplace checkout", "Marketplace 結帳"],
  ["Page/Instagram Shops", "Facebook / Instagram 商店"],
  ["Catalogs", "型錄"],
  ["Product detail pages", "商品詳情頁"],
  ["Website checkout", "網站結帳"],
  ["Inventory sync", "庫存同步"],
  ["Commerce policies", "商務政策"],
  ["Seller ratings", "賣家評分"],
  ["Purchase protection", "購買保障"],
  ["Fraud detection", "詐欺偵測"],

  ["Close friends", "摯友"],
  ["Professional dashboard", "專業主控板"],
  ["Account insights", "帳號洞察"],
  ["Category labels", "類別標籤"],
  ["Login activity", "登入活動"],
  ["Blocked accounts", "已封鎖帳號"],
  ["Feed posts", "動態貼文"],
  ["Stories", "限時動態"],
  ["Live", "直播"],
  ["Carousels", "輪播貼文"],
  ["Broadcast channels", "廣播頻道"],
  ["Music", "音樂"],
  ["Text overlays", "文字疊加"],
  ["Templates", "範本"],
  ["Collab posts", "協作貼文"],
  ["Alt text", "替代文字"],
  ["Drafts", "草稿"],
  ["Archive", "封存"],
  ["Highlights", "精選動態"],
  ["Pinned posts", "置頂貼文"],
  ["Remix", "Remix"],
  ["Likes", "讚"],
  ["Saves", "收藏"],
  ["Collabs", "協作"],
  ["Story stickers", "限時動態貼紙"],
  ["Questions", "問答"],
  ["Quizzes", "測驗"],
  ["Countdowns", "倒數"],
  ["Comment replies", "留言回覆"],
  ["Pinned comments", "置頂留言"],
  ["Creator replies", "創作者回覆"],
  ["Live reactions", "直播表情回應"],
  ["Badges", "徽章"],
  ["Comment filters", "留言篩選器"],
  ["Hidden words", "隱藏字詞"],
  ["Limit interactions", "限制互動"],
  ["Restrict", "限制"],
  ["Media sharing", "媒體分享"],
  ["Story replies", "限時動態回覆"],
  ["Reel shares", "Reels 分享"],
  ["Post shares", "貼文分享"],
  ["Notes", "Notes"],
  ["Quick reactions", "快速表情回應"],
  ["Business inbox", "商業收件匣"],
  ["FAQ automation", "FAQ 自動化"],
  ["Hidden requests", "隱藏邀請"],
  ["Vanish mode", "限時模式"],
  ["Explore", "探索"],
  ["Reels feed", "Reels 動態"],
  ["Home recommendations", "首頁推薦"],
  ["Suggested accounts", "推薦帳號"],
  ["Audio pages", "音訊頁面"],
  ["Keywords", "關鍵字"],
  ["Trending audio", "熱門音訊"],
  ["Engagement patterns", "互動模式"],
  ["Creator discovery", "創作者探索"],
  ["Sensitive content controls", "敏感內容控制"],
  ["Not interested", "不感興趣"],
  ["Following feed", "追蹤中動態"],
  ["Collections", "收藏集"],
  ["Checkout on Instagram", "Instagram 結帳"],
  ["Website checkout or seller messages", "網站結帳或賣家訊息"],
  ["Link stickers", "連結貼紙"],
  ["Appointments/leads", "預約 / 潛在客戶"],
  ["Contact buttons", "聯絡按鈕"],
  ["Action buttons", "動作按鈕"],
  ["DM conversion", "私訊轉換"],
  ["Website clicks", "網站點擊"],
  ["Creator marketplace", "創作者市集"],
  ["Branded content tools", "品牌內容工具"],
  ["Partnership labels", "合作標籤"],
  ["Sponsored posts", "贊助貼文"],
  ["Reels ads", "Reels 廣告"],
  ["Story ads", "限時動態廣告"],
  ["Explore ads", "探索廣告"],
  ["Boosting", "加強推廣"],
  ["Lead ads", "潛在客戶廣告"],
  ["Shop ads", "商店廣告"],
  ["Creator partnerships", "創作者合作"],
  ["Branded content", "品牌內容"],
  ["Bonuses", "獎金"],
  ["Gifts", "禮物"],
  ["Ad review", "廣告審查"],
  ["Branded content rules", "品牌內容規則"],
  ["Music rights", "音樂權利"],
  ["Commerce eligibility", "商務資格"],
  ["Safety policies", "安全政策"],

  ["For You feed", "For You 推薦"],
  ["For You", "For You"],
  ["Following feed", "追蹤中動態"],
  ["Friends feed", "朋友動態"],
  ["LIVE feed", "LIVE 動態"],
  ["Shop feed", "商城動態"],
  ["Short videos", "短影音"],
  ["Photo posts", "相片貼文"],
  ["LIVE clips", "LIVE 片段"],
  ["Playlists", "播放清單"],
  ["Series", "系列"],
  ["Editing tools", "剪輯工具"],
  ["Sounds/music", "音效 / 音樂"],
  ["Voiceover", "旁白"],
  ["Duets", "Duet 合拍"],
  ["Stitch", "Stitch 拼接"],
  ["Green screen", "綠幕"],
  ["CapCut-style editing links", "CapCut 式剪輯連結"],
  ["Scheduled posts for business", "商業帳號排程貼文"],
  ["Sounds", "音效"],
  ["Effects", "特效"],
  ["Creators", "創作者"],
  ["Products", "商品"],
  ["Trending sounds", "熱門音效"],
  ["Challenges", "挑戰"],
  ["Topic pages", "主題頁"],
  ["Location signals", "位置訊號"],
  ["Trend discovery", "趨勢探索"],
  ["Keyword filters", "關鍵字篩選器"],
  ["Refresh feed", "重新整理動態"],
  ["Restricted mode", "受限模式"],
  ["Reposts", "轉發"],
  ["Comment threads", "留言串"],
  ["Q&A", "Q&A"],
  ["Stickers/polls", "貼紙 / 投票"],
  ["Watch time", "觀看時間"],
  ["Completion", "完播"],
  ["Replays", "重播"],
  ["Comment activity", "留言活動"],
  ["Group chats", "群組聊天"],
  ["Inbox", "收件匣"],
  ["Communities/fandoms", "社群 / 粉絲圈"],
  ["Follower interactions", "粉絲互動"],
  ["Creator playlists", "創作者播放清單"],
  ["Fan comments", "粉絲留言"],
  ["Stitch/Duet response chains", "Stitch / Duet 回應串"],
  ["Bulletin Board", "佈告欄"],
  ["Multi-guest", "多人連線"],
  ["Co-hosts", "共同主持"],
  ["Live goals", "LIVE 目標"],
  ["LIVE replays", "LIVE 重播"],
  ["LIVE chat", "LIVE 聊天"],
  ["Moderator tools", "管理工具"],
  ["Product pins", "商品置頂"],
  ["Affiliate sales", "聯盟銷售"],
  ["Seller demos", "賣家示範"],
  ["Checkout links", "結帳連結"],
  ["Age restrictions", "年齡限制"],
  ["Host controls", "主持人控制"],
  ["TikTok Shop", "TikTok Shop"],
  ["Product showcase", "商品櫥窗"],
  ["Returns/customer service", "退貨 / 客服"],
  ["Affiliate creators", "聯盟創作者"],
  ["Product samples", "商品樣品"],
  ["Commission tracking", "佣金追蹤"],
  ["Shop videos", "商店影片"],
  ["Spark Ads", "Spark Ads"],
  ["In-feed ads", "資訊流廣告"],
  ["TopView", "TopView"],
  ["Business Center", "商務中心"],
  ["Pixel/events API", "Pixel / Events API"],
  ["Seller Center", "Seller Center"],
  ["Ads reporting", "廣告報表"],
  ["Policy review", "政策審查"],

  ["Login/profile", "登入 / 個人檔案"],
  ["Account settings", "帳號設定"],
  ["Coupons wallet", "優惠券包"],
  ["Following stores", "已關注店鋪"],
  ["Address book", "地址簿"],
  ["Order history", "訂單記錄"],
  ["Browsing history", "瀏覽記錄"],
  ["Saved searches", "已儲存搜尋"],
  ["Wishlist/favorites", "願望清單 / 收藏"],
  ["Refund/return center", "退款 / 退貨中心"],
  ["Preference signals", "偏好訊號"],
  ["Local settings", "本地設定"],
  ["Keyword search", "關鍵字搜尋"],
  ["Image search", "以圖搜圖"],
  ["Filters", "篩選"],
  ["Sorting", "排序"],
  ["Autocomplete", "自動完成"],
  ["Search ads", "搜尋廣告"],
  ["Deals", "優惠"],
  ["Personalized feeds", "個人化動態"],
  ["New arrivals", "新品"],
  ["Flash sales", "限時搶購"],
  ["Major shopping festivals", "大型購物節"],
  ["Brand campaigns", "品牌活動"],
  ["Membership deals", "會員優惠"],
  ["Store promotions", "店鋪促銷"],
  ["Content Entry", "內容入口"],
  ["Influencer posts", "達人貼文"],
  ["Product demos", "商品示範"],
  ["Social proof", "社會證明"],
  ["Trend pages", "趨勢頁"],
  ["Conversational search", "對話式搜尋"],
  ["Product comparison", "商品比較"],
  ["AI try-on", "AI 試穿"],
  ["Price tracking", "價格追蹤"],
  ["Shopping recommendations", "購物推薦"],
  ["Logistics help", "物流協助"],
  ["After-sales help", "售後協助"],
  ["Refund guidance", "退款指引"],
  ["Customer-service routing", "客服分流"],
  ["AI content support", "AI 內容支援"],
  ["Merchant operations help", "商家營運協助"],
  ["Product guidance", "商品指引"],
  ["Campaign assistance", "活動協助"],
  ["Product info", "商品資訊"],
  ["Images/video", "圖片 / 影片"],
  ["Specifications", "規格"],
  ["Variants", "款式"],
  ["Sizing/options", "尺寸 / 選項"],
  ["Price", "價格"],
  ["Ratings", "評分"],
  ["Seller info", "賣家資訊"],
  ["Buyer photos", "買家秀"],
  ["Service promises", "服務承諾"],
  ["Bundles", "組合優惠"],
  ["Campaign price", "活動價"],
  ["Shipping offers", "運費優惠"],
  ["Membership price", "會員價"],
  ["Limited-time deals", "限時優惠"],
  ["Add to cart", "加入購物車"],
  ["Buy now", "立即購買"],
  ["Favorite", "收藏"],
  ["Share", "分享"],
  ["Follow store", "關注店鋪"],
  ["Select items", "選取商品"],
  ["Quantity", "數量"],
  ["Store grouping", "依店鋪分組"],
  ["Cart promotions", "購物車促銷"],
  ["Address selection", "選擇地址"],
  ["Shipping options", "運送選項"],
  ["Invoice options", "發票選項"],
  ["Order confirmation", "訂單確認"],
  ["Order tracking", "訂單追蹤"],
  ["Logistics updates", "物流更新"],
  ["Delivery confirmation", "確認收貨"],
  ["After-sales service", "售後服務"],
  ["Customer service chat", "客服聊天"],
  ["Order notifications", "訂單通知"],
  ["Dispute communication", "爭議溝通"],
  ["Review prompts", "評價提醒"],
  ["Store pages", "店鋪頁"],
  ["Store categories", "店鋪分類"],
  ["Store followers", "店鋪粉絲"],
  ["Brand/store identity", "品牌 / 店鋪身分"],
  ["Featured products", "精選商品"],
  ["Store search", "店鋪搜尋"],
  ["Inventory", "庫存"],
  ["Product publishing", "商品發布"],
  ["Coupon setup", "優惠券設定"],
  ["Order management", "訂單管理"],
  ["Customer service", "客服"],
  ["Service ratings", "服務評分"],
  ["Delivery performance", "配送表現"],
  ["Store verification", "店鋪驗證"],
  ["Review management", "評價管理"],
  ["Platform rules", "平台規則"],
  ["Paid promotion", "付費推廣"],
  ["Campaign participation", "活動參與"],
  ["Influencer collaboration", "達人合作"],
  ["Follower messaging", "粉絲訊息"],
  ["Live coupons", "直播優惠券"],
  ["Pinned products", "置頂商品"],
  ["Flash deals", "限時優惠"],
  ["Host recommendations", "主播推薦"],
  ["Follow host", "追蹤主播"],
  ["Product detail links", "商品詳情連結"],
  ["Add to cart from live", "從直播加入購物車"],
  ["Creator endorsement", "創作者背書"],
  ["Replay clips", "回放片段"],
  ["Alipay", "支付寶"],
  ["Alipay checkout", "支付寶結帳"],
  ["Installments", "分期付款"],
  ["Payment security", "付款安全"],
  ["Cross-border shipping", "跨境物流"],
  ["Pickup options", "取貨選項"],
  ["Exchanges", "換貨"],
  ["Warranty/service claims", "保固 / 服務申請"],
  ["Buyer protection", "買家保障"],
  ["Alibaba ecosystem links", "阿里巴巴生態系連結"],
  ["Merchant tools", "商家工具"],
  ["Data/ads services", "資料 / 廣告服務"],
  ["Cross-platform promotions", "跨平台促銷"],
  ["Loyalty programs", "忠誠會員方案"],

  ["Website messenger", "網站 Messenger"],
  ["Web Messenger", "Web Messenger"],
  ["In-app chat", "App 內聊天"],
  ["Mobile SDK", "Mobile SDK"],
  ["Launcher", "啟動器"],
  ["Article suggestions", "文章建議"],
  ["Conversation starters", "對話開場"],
  ["Social channels", "社群渠道"],
  ["Phone/SMS", "電話 / SMS"],
  ["API-created conversations", "API 建立的對話"],
  ["Visitor data", "訪客資料"],
  ["Logged-in user context", "登入使用者脈絡"],
  ["Company context", "公司脈絡"],
  ["Page URL", "頁面 URL"],
  ["Campaign source", "活動來源"],
  ["Conversations", "對話"],
  ["Assignment", "指派"],
  ["Priority", "優先順序"],
  ["Snooze", "稍後處理"],
  ["Internal notes", "內部備註"],
  ["Teammate collaboration", "團隊成員協作"],
  ["Conversation history", "對話記錄"],
  ["Macros/saved replies", "巨集 / 儲存回覆"],
  ["Side conversations", "側邊對話"],
  ["SLAs", "SLA 服務水準"],
  ["Views", "檢視"],
  ["Queues", "佇列"],
  ["Conversation states", "對話狀態"],
  ["Workload management", "工作量管理"],
  ["Customer tickets", "客戶票證"],
  ["Back-office tickets", "後台票證"],
  ["Tracker tickets", "Tracker 票證"],
  ["Ticket status", "票證狀態"],
  ["Ownership", "負責人"],
  ["Escalation", "升級處理"],
  ["CSAT prompts", "CSAT 提示"],
  ["Conversation ratings", "對話評分"],
  ["Handoff tracking", "交接追蹤"],
  ["Audit trail", "稽核軌跡"],
  ["Manager review", "主管審閱"],
  ["AI agent", "AI Agent 自動客服"],
  ["Resolution automation", "解決方案自動化"],
  ["Source-grounded answers", "根據來源回答"],
  ["Inbox handoff", "轉交收件匣"],
  ["Conversation context", "對話脈絡"],
  ["AI copilot", "AI Copilot"],
  ["Suggested replies", "建議回覆"],
  ["Summaries", "摘要"],
  ["Tone adjustment", "語氣調整"],
  ["Next-best action", "下一步最佳動作"],
  ["Triage", "分流"],
  ["Routing", "路由"],
  ["Qualification", "資格判斷"],
  ["Conditional branches", "條件分支"],
  ["Data capture", "資料收集"],
  ["Bot paths", "機器人路徑"],
  ["Answer sources", "答案來源"],
  ["Confidence controls", "信心分數控制"],
  ["Human handoff", "轉交真人"],
  ["Testing", "測試"],
  ["Collections", "集合"],
  ["Sections", "段落"],
  ["Localization", "在地化"],
  ["Versioning", "版本管理"],
  ["Authoring workflow", "撰寫流程"],
  ["Article recommendations", "文章推薦"],
  ["Fin AI Agent / AI answers", "Fin AI Agent / AI 回答"],
  ["Content suggestions", "內容建議"],
  ["Contact deflection", "聯絡分流"],
  ["Related articles", "相關文章"],
  ["Content performance", "內容成效"],
  ["Gaps", "缺口"],
  ["Article feedback", "文章回饋"],
  ["Publishing", "發布"],
  ["SEO settings", "SEO 設定"],
  ["Brand styling", "品牌樣式"],
  ["User profiles", "使用者檔案"],
  ["Companies", "公司"],
  ["Account owner", "帳號負責人"],
  ["Plan/status", "方案 / 狀態"],
  ["Custom attributes", "自訂屬性"],
  ["Events", "事件"],
  ["Page views", "頁面瀏覽"],
  ["Product usage", "產品使用"],
  ["Lifecycle stage", "生命週期階段"],
  ["Imports", "匯入"],
  ["API updates", "API 更新"],
  ["Identity verification", "身分驗證"],
  ["Data sync", "資料同步"],
  ["Data retention", "資料保留"],
  ["Routing logic", "路由邏輯"],
  ["Targeting", "鎖定"],
  ["SLA rules", "SLA 規則"],
  ["Priority rules", "優先順序規則"],
  ["Reporting dimensions", "報表維度"],
  ["Emails", "電子郵件"],
  ["Push messages", "推播訊息"],
  ["In-app messages", "App 內訊息"],
  ["Banners", "橫幅"],
  ["Product tours", "產品導覽"],
  ["Tooltips", "工具提示"],
  ["Checklists", "檢查清單"],
  ["Feature education", "功能教學"],
  ["A/B tests", "A/B 測試"],
  ["NPS/CSAT", "NPS / CSAT"],
  ["Goal tracking", "目標追蹤"],
  ["Behavior triggers", "行為觸發"],
  ["Company data", "公司資料"],
  ["Frequency controls", "頻率控制"],
  ["Support metrics", "支援指標"],
  ["Conversation volume", "對話量"],
  ["Response time", "回覆時間"],
  ["Resolution time", "解決時間"],
  ["SLA performance", "SLA 表現"],
  ["Funnels", "漏斗"],
  ["Deflection reports", "分流報表"],
  ["AI performance", "AI 表現"],
  ["Article performance", "文章成效"],
  ["Team workload", "團隊工作量"],
  ["Custom reports", "自訂報表"],
  ["Data warehouse", "資料倉儲"],
  ["Slack/Teams", "Slack / Teams 協作工具"],
  ["QR code", "QR code 掃碼"],
  ["Messaging API", "Messaging API 訊息介面"],
  ["Cloud API", "Cloud API 雲端介面"],
  ["Flow API", "Flow API 流程介面"],
  ["Webhooks", "Webhook 事件"],
  ["CRM", "CRM 客戶關係管理"],
  ["WhatsApp Flows", "WhatsApp Flows 表單流程"],
  ["Flow Builder", "Flow Builder 編輯器"],
  ["Hashtags", "Hashtag 標籤"],
  ["Emoji", "Emoji 表情符號"],
  ["Merchant checkout", "商家結帳"],
  ["P2P transfer", "個人轉帳"],
  ["QR payment", "QR code 付款"],
  ["Merchant payment", "商家付款"],
  ["Mini Program payment", "小程式付款"],
  ["Desktop", "桌面版"],
  ["Nitro Basic", "Nitro Basic 方案"],
  ["Pixel/conversions API", "Pixel / Conversions API 轉換介面"],
  ["Trust", "信任"],
  ["Interests", "興趣"],
  ["Email", "電子郵件"],
  ["AI copilot", "AI Copilot 協作助手"],
  ["Copilot", "Copilot 協作助手"],
  ["Scheduling", "排程"],
  ["CRM integrations", "CRM 整合"],
  ["Conversation timeline", "對話時間軸"],
  ["Conversation", "對話"],
  ["Customer profile", "客戶檔案"],
  ["Human Team", "真人團隊"],
  ["Knowledge", "知識"],
  ["LinkedIn Learning", "LinkedIn Learning 學習"],
  ["Networking", "建立人脈"],
  ["Ticketing tools", "票證工具"],
  ["Apps/API", "Apps / API 整合"],
  ["Workspace settings", "工作區設定"],
  ["Compliance settings", "合規設定"],

  ["Headline", "標題"],
  ["About", "關於"],
  ["Experience", "工作經歷"],
  ["Education", "教育背景"],
  ["Featured section", "精選區塊"],
  ["Skills", "技能"],
  ["Recommendations", "推薦"],
  ["Endorsements", "技能肯定"],
  ["Certifications", "證照"],
  ["Licenses", "執照"],
  ["Creator tools", "創作者工具"],
  ["Company page", "公司專頁"],
  ["Services page", "服務頁"],
  ["Profile URL", "個人檔案網址"],
  ["Open to work", "Open to Work"],
  ["Hiring frame", "招募中框線"],
  ["Profile views", "個人檔案瀏覽"],
  ["Search appearances", "搜尋曝光"],
  ["Creator analytics", "創作者分析"],
  ["Profile dashboard / analytics", "個人檔案主控板 / 分析"],
  ["Connections", "人脈"],
  ["Following", "追蹤中"],
  ["Invitations", "邀請"],
  ["People you may know", "你可能認識的人"],
  ["Alumni/company networks", "校友 / 公司人脈"],
  ["InMail", "InMail"],
  ["Group messages", "群組訊息"],
  ["Voice/video links", "語音 / 視訊連結"],
  ["Newsletters followers", "電子報追蹤者"],
  ["Creator follow graph", "創作者追蹤圖譜"],
  ["Company followers", "公司追蹤者"],
  ["Who can connect", "誰可以建立人脈"],
  ["Visibility settings", "可見度設定"],
  ["Articles", "文章"],
  ["Newsletters", "電子報"],
  ["Documents", "文件"],
  ["Feed ranking", "動態排序"],
  ["Company page posts", "公司專頁貼文"],
  ["LinkedIn Live", "LinkedIn Live"],
  ["Collaborative articles", "協作文章"],
  ["Newsletter tools", "電子報工具"],
  ["Job search", "職缺搜尋"],
  ["Job alerts", "職缺提醒"],
  ["Company pages", "公司專頁"],
  ["Salary insights", "薪資洞察"],
  ["Remote filters", "遠端篩選器"],
  ["Applications", "應徵"],
  ["Easy Apply", "Easy Apply"],
  ["Resume/profile apply", "履歷 / 個人檔案應徵"],
  ["Screening questions", "篩選問題"],
  ["Applicant tracking links", "應徵者追蹤連結"],
  ["Saved jobs", "已儲存職缺"],
  ["Skills matched to jobs", "技能與職缺匹配"],
  ["Interview prep", "面試準備"],
  ["Application status", "應徵狀態"],
  ["Messages with recruiters", "與招募人員訊息"],
  ["Job posts", "職缺貼文"],
  ["Company branding", "公司品牌"],
  ["Job slots", "職缺名額"],
  ["Promoted jobs", "推廣職缺"],
  ["Recruiter tools", "Recruiter 工具"],
  ["Talent search", "人才搜尋"],
  ["Saved searches", "已儲存搜尋"],
  ["Recommended candidates", "推薦候選人"],
  ["Talent pools", "人才庫"],
  ["Candidate messaging", "候選人訊息"],
  ["Follow-ups", "後續追蹤"],
  ["Response tracking", "回覆追蹤"],
  ["Calendar links", "行事曆連結"],
  ["Candidate pipeline", "候選人管線"],
  ["Projects", "專案"],
  ["Notes", "備註"],
  ["Applicant review", "應徵者審查"],
  ["ATS integrations", "ATS 整合"],
  ["Employer branding", "雇主品牌"],
  ["Career pages", "職涯頁面"],
  ["Life pages", "Life 頁面"],
  ["Recruiting analytics", "招募分析"],
  ["Diversity insights", "多元化洞察"],
  ["Lead search", "潛在客戶搜尋"],
  ["Account lists", "帳戶清單"],
  ["Saved leads", "已儲存潛在客戶"],
  ["Buyer intent signals", "買家意圖訊號"],
  ["Relationship maps", "關係地圖"],
  ["Warm introductions", "暖介紹"],
  ["Lead recommendations", "潛在客戶推薦"],
  ["Company insights", "公司洞察"],
  ["Account news", "帳戶新聞"],
  ["Job changes", "職務異動"],
  ["TeamLink", "TeamLink"],
  ["Pipeline integrations", "管線整合"],
  ["Showcase pages", "展示頁"],
  ["Product Pages", "產品頁"],
  ["Employee advocacy", "員工倡議"],
  ["LinkedIn Learning", "LinkedIn Learning"],
  ["Courses", "課程"],
  ["Learning paths", "學習路徑"],
  ["Skills on profile", "個人檔案技能"],
  ["Enterprise learning", "企業學習"],
  ["Sponsored content", "贊助內容"],
  ["Sponsored Messaging / Message Ads", "贊助訊息 / Message Ads"],
  ["Text/dynamic ads", "文字 / 動態廣告"],
  ["Campaign Manager", "Campaign Manager"],
  ["Lead gen forms", "潛在客戶開發表單"],
  ["Company targeting", "公司鎖定"],
  ["Job title targeting", "職稱鎖定"],
  ["Matched audiences", "配對受眾"],
  ["Website insights", "網站洞察"],
  ["Conversion tracking", "轉換追蹤"],
  ["Campaign reporting", "行銷活動報表"],
  ["Lead exports", "潛在客戶匯出"],
  ["Brand lift", "品牌提升"],
  ["Policy review", "政策審查"],

  ["where available by country/account", "依國家 / 帳號開放情況"],
  ["where available by language/account", "依語言 / 帳號開放情況"],
  ["where available by account", "依帳號開放情況"],
  ["where available by market", "依市場開放情況"],
  ["where available for professional accounts", "依專業帳號開放情況"],
  ["where supported by language/account", "依語言 / 帳號支援情況"],
  ["where supported by device/account", "依裝置 / 帳號支援情況"],
  ["where supported by device", "依裝置支援情況"],
  ["where supported by country", "依國家支援情況"],
  ["where supported by market", "依市場支援情況"],
  ["where supported by plan", "依方案支援情況"],
  ["where supported by workspace/plan", "依工作區 / 方案支援情況"],
  ["where supported by product/region", "依產品 / 地區支援情況"],
  ["where supported", "支援時"],
  ["where available", "開放時"],
  ["for eligible businesses", "符合資格的商家"],
  ["for eligible channels", "符合資格的頻道"],
  ["for eligible communities", "符合資格的社群"],
  ["for eligible accounts", "符合資格的帳號"],
  ["for eligible creators", "符合資格的創作者"],
  ["for eligible members/pages", "符合資格的會員 / 專頁"],
  ["for eligible campaigns", "符合資格的行銷活動"],
  ["for eligible orders", "符合資格的訂單"],
  ["for qualified customers", "符合資格的客戶"],
  ["by country/account", "依國家 / 帳號"],
  ["by market/category", "依市場 / 類別"],
  ["by seller/market", "依賣家 / 市場"],
  ["by city/region", "依城市 / 地區"],
  ["by region", "依地區"],
  ["by market", "依市場"],
  ["by rollout", "依分階段推出狀態"],
  ["coming soon / rollout", "即將推出 / 分階段開放"],
  ["market-available", "依市場開放"],
  ["Market-available", "依市場開放"],
  ["eligible", "符合資格"],
  ["supported", "支援"],
  ["optional", "選用"],
  ["country/account", "國家 / 帳號"],
  ["language/account", "語言 / 帳號"],
  ["device/account", "裝置 / 帳號"],
  ["Privacy controls", "隱私控制"],
  ["Spam limits", "垃圾訊息限制"],
  ["Reporting/blocking", "檢舉 / 封鎖"],
  ["Template rules", "範本規則"],
  ["Abuse prevention", "濫用防護"],
  ["Audit/policy controls", "稽核 / 政策控制"],
  ["Device review", "裝置檢查"],
  ["Group call entry", "群組通話入口"],
  ["Admin tools", "管理員工具"],
  ["Business category", "商家類別"],
  ["Messaging API", "Messaging API"],
  ["Flow Builder", "Flow Builder"],
  ["Channel directory signals", "頻道目錄訊號"],
  ["Call privacy", "通話隱私"],
  ["Channel perks", "頻道權益"],
  ["Group perks", "群組權益"],
  ["Phone account", "手機帳號"],
  ["Voice/video", "語音 / 視訊"],
  ["Runtime role", "執行角色"],
  ["Hosts groups", "承載群組"],
  ["Accepts bots", "接受機器人"],
  ["Launches mini apps", "啟動迷你應用程式"],
  ["Community tools", "社群工具"],
  ["Chat attachment", "聊天附加機制"],
  ["Bot moderation", "機器人管理"],
  ["Broadcast posts", "廣播貼文"],
  ["Linked comments group", "連結留言群組"],
  ["Boost connection", "加成連結"],
  ["Channel levels", "頻道等級"],
  ["Platform role", "平台角色"],
  ["Launch mini apps", "啟動迷你應用程式"],
  ["Control mini apps", "控制迷你應用程式"],
  ["Connect services", "連接服務"],
  ["Embedded web services", "嵌入式網頁服務"],
  ["Chat launch", "從聊天啟動"],
  ["Group launch", "從群組啟動"],
  ["Channel sharing", "頻道分享"],
  ["Media output", "媒體輸出"],
  ["Profile tools", "個人檔案工具"],
  ["Connected bots", "已連接機器人"],
  ["Connected Bots", "已連接機器人"],
  ["Chatbot support", "聊天機器人支援"],
  ["Creator revenue", "創作者收入"],
  ["Identity/security", "身分 / 安全"],
  ["Payment protection", "付款保障"],
  ["Reporting/moderation", "檢舉 / 管理"],
  ["Real-name/payment compliance", "實名 / 支付合規"],
  ["Merchant rules", "商家規則"],
  ["Phone/contact sync", "手機 / 聯絡人同步"],
  ["Groups via QR", "透過 QR code 加入群組"],
  ["Pinned chat", "置頂聊天"],
  ["Custom stickers", "自訂貼圖"],
  ["Money in Chat", "聊天中的金流"],
  ["Weixin Search", "微信搜一搜"],
  ["Discovery Links", "探索連結"],
  ["Chat shares", "聊天分享"],
  ["Service Types", "服務類型"],
  ["Official account menus", "公眾號選單"],
  ["Financial Services", "金融服務"],
  ["Search discovery", "搜尋探索"],
  ["Mini program links", "小程式連結"],
  ["Social signals", "社交訊號"],
  ["Device login", "裝置登入"],
  ["Region settings", "地區設定"],
  ["Service entry", "服務入口"],
  ["Opens social surfaces", "開啟社交版位"],
  ["Opens official accounts", "開啟公眾號"],
  ["Opens mini programs", "開啟小程式"],
  ["Opens Pay transfers/red packets", "開啟支付轉帳 / 紅包"],
  ["Brand account", "品牌帳號"],
  ["Media account", "媒體帳號"],
  ["Service messages", "服務訊息"],
  ["Service role", "服務角色"],
  ["CRM entry", "CRM 入口"],
  ["Mini Program links", "小程式連結"],
  ["Brand discovery", "品牌探索"],
  ["Public content", "公開內容"],
  ["Lightweight game experiences", "輕量遊戲體驗"],
  ["Merchant / Service Backend", "商家 / 服務後台"],
  ["Payment confirmation", "付款確認"],
  ["Business compliance", "商業合規"],
  ["Community moderation", "社群管理"],
  ["Status message", "狀態訊息"],
  ["Friend Graph", "好友圖譜"],
  ["Message search", "訊息搜尋"],
  ["GIF-like stickers", "類 GIF 貼圖"],
  ["Sticker suggestions", "貼圖建議"],
  ["Call Types", "通話類型"],
  ["Call Tools", "通話工具"],
  ["Member controls", "成員控制"],
  ["Files/media", "檔案 / 媒體"],
  ["Creator content", "創作者內容"],
  ["Brand Presence", "品牌門面"],
  ["Chat support", "聊天支援"],
  ["Digital Goods", "數位商品"],
  ["Messaging Platform", "訊息平台"],
  ["LINE account", "LINE 帳號"],
  ["Opens Official Accounts", "開啟官方帳號"],
  ["Opens VOOM", "開啟 VOOM"],
  ["Private rooms", "私人聊天室"],
  ["Join controls", "加入控制"],
  ["Business surface", "商業版位"],
  ["Auto reply", "自動回覆"],
  ["Rich menu", "圖文選單"],
  ["Customer channel", "客戶渠道"],
  ["Social posts", "社交貼文"],
  ["Message types", "訊息類型"],
  ["Profile retrieval", "讀取個人檔案"],
  ["Account linking", "帳號連結"],
  ["Bot / Business Server", "機器人 / 商業伺服器"],
  ["Bot logic", "機器人邏輯"],
  ["Business server", "商業伺服器"],
  ["External data", "外部資料"],
  ["Rich Menu", "圖文選單"],
  ["Menu actions", "選單動作"],
  ["Mini app", "迷你應用程式"],
  ["MINI App / Service Flow", "MINI App / 服務流程"],
  ["Service flow", "服務流程"],
  ["Home shortcut", "首頁捷徑"],
  ["Sent messages", "已傳送訊息"],
  ["Friend growth", "好友成長"],
  ["Campaign results", "活動成效"],
  ["Safety center", "安全中心"],
  ["Report/block", "檢舉 / 封鎖"],
  ["Moderation systems", "管理系統"],
  ["User account", "使用者帳號"],
  ["Pronouns/about me", "代名詞 / 關於我"],
  ["Custom status", "自訂狀態"],
  ["Group DMs", "群組私訊"],
  ["Blocked users", "已封鎖使用者"],
  ["Mutual servers", "共同伺服器"],
  ["Nitro profile perks", "Nitro 個人檔案權益"],
  ["Profile themes", "個人檔案主題"],
  ["Server profiles", "伺服器個人檔案"],
  ["Emoji/sticker access", "Emoji / 貼圖存取"],
  ["Login verification", "登入驗證"],
  ["Data requests", "資料要求"],
  ["Community Space", "社群空間"],
  ["Text Surfaces", "文字版位"],
  ["Voice Surfaces", "語音版位"],
  ["Media/files", "媒體 / 檔案"],
  ["Safety Tools", "安全工具"],
  ["Bot Types", "機器人類型"],
  ["App Platform", "App 平台"],
  ["GitHub/Twitch/YouTube links", "GitHub / Twitch / YouTube 連結"],
  ["Server Value", "伺服器價值"],
  ["Creator Revenue", "創作者收入"],
  ["Creator/community perks", "創作者 / 社群權益"],
  ["Premium role products", "付費身分組商品"],
  ["Nitro personalization", "Nitro 個人化"],
  ["Server / Guild", "伺服器 / Guild"],
  ["Text Channels", "文字頻道"],
  ["Text surfaces", "文字版位"],
  ["Voice / Video / Stage Channels", "語音 / 視訊 / 舞台頻道"],
  ["Structured discussion", "結構化討論"],
  ["Forum posts", "論壇貼文"],
  ["Knowledge threads", "知識討論串"],
  ["Bot permissions", "機器人權限"],
  ["AutoMod actions", "AutoMod 動作"],
  ["Bots / Apps", "機器人 / App"],
  ["App platform", "App 平台"],
  ["Co-watching", "一起看"],
  ["Interactive apps", "互動式 App"],
  ["Voice context", "語音脈絡"],
  ["Emoji slots", "Emoji 欄位"],
  ["Upload limits", "上傳限制"],
  ["Premium access", "付費存取"],
  ["One-time products", "一次性商品"],
  ["Commerce experiments", "商務實驗"],
  ["Commerce rules", "商務規則"],
  ["Name/photo", "名稱 / 相片"],
  ["Life events", "人生大事"],
  ["Privacy audience", "隱私受眾"],
  ["Login/account", "登入 / 帳號"],
  ["Business messaging", "商業訊息"],
  ["Ads Manager", "廣告管理員"],
  ["Social graph", "社交圖譜"],
  ["Local graph", "在地圖譜"],
  ["Marketplace behavior", "Marketplace 行為"],
  ["Feed / Social Discovery", "動態 / 社交探索"],
  ["Marketplace signals", "Marketplace 訊號"],
  ["Social credibility", "社交可信度"],
  ["Buy/sell", "買賣"],
  ["Local groups", "在地社團"],
  ["Creator reach", "創作者觸及"],
  ["Ad inventory", "廣告庫存"],
  ["Local tab", "在地分頁"],
  ["Community recommendations", "社群推薦"],
  ["Seller profiles", "賣家檔案"],
  ["Local commerce", "在地商務"],
  ["Saved items", "已儲存項目"],
  ["Messenger / Buyer-Seller Chat", "Messenger / 買賣雙方聊天"],
  ["Buyer-seller chat", "買賣雙方聊天"],
  ["Page messaging", "粉絲專頁訊息"],
  ["Meta Business Tools", "Meta 商務工具"],
  ["Business Suite", "商務套件"],
  ["Page management", "粉絲專頁管理"],
  ["Marketplace listing help", "Marketplace 刊登協助"],
  ["Group AI answers", "社團 AI 回答"],
  ["Page comment summaries", "粉絲專頁留言摘要"],
  ["Comment controls", "留言控制"],
  ["Brand/content policies", "品牌 / 內容政策"],
  ["Broadcast channel followers", "廣播頻道追蹤者"],
  ["Personal account", "個人帳號"],
  ["Creator account", "創作者帳號"],
  ["Business account", "商業帳號"],
  ["Blocking/reporting", "封鎖 / 檢舉"],
  ["Creative formats", "素材格式"],
  ["Profile context", "個人檔案脈絡"],
  ["Content Core", "內容核心"],
  ["Conversion role", "轉換角色"],
  ["Feeds recommendations", "餵入推薦"],
  ["Opens DMs", "開啟私訊"],
  ["Carries shopping tags", "承載購物標籤"],
  ["Interest browsing", "興趣瀏覽"],
  ["Direct Messages", "Direct 私訊"],
  ["Private loops", "私人互動循環"],
  ["Creator/customer chat", "創作者 / 客戶聊天"],
  ["Creator / Business Profile", "創作者 / 商業個人檔案"],
  ["Profile identity", "個人檔案身分"],
  ["Brand presence", "品牌門面"],
  ["Creator store", "創作者商店"],
  ["Commerce hooks", "商務掛鉤"],
  ["Product detail entry", "商品詳情入口"],
  ["Product Catalog / Shop Surface", "商品型錄 / 商店版位"],
  ["Product catalog", "商品型錄"],
  ["Shop surface", "商店版位"],
  ["Product Detail / Checkout / Seller Conversion", "商品詳情 / 結帳 / 賣家轉換"],
  ["Product detail", "商品詳情"],
  ["Seller messages", "賣家訊息"],
  ["Shop surfaces", "商店版位"],
  ["Feed ads", "動態廣告"],
  ["Creator insights", "創作者洞察"],
  ["Business insights", "商業洞察"],
  ["Ad reporting", "廣告報表"],
  ["Shop performance", "商店成效"],
  ["Safety settings", "安全設定"],
  ["Age/content controls", "年齡 / 內容控制"],
  ["Link in bio", "簡介連結"],
  ["Pinned videos", "置頂影片"],
  ["LIVE followers", "LIVE 粉絲"],
  ["Business analytics", "商業分析"],
  ["Video performance", "影片成效"],
  ["Audience insights", "受眾洞察"],
  ["LIVE analytics", "LIVE 分析"],
  ["Shop/affiliate metrics", "商店 / 聯盟指標"],
  ["Family pairing", "家庭配對"],
  ["Text/captions", "文字 / 字幕"],
  ["Delete comments", "刪除留言"],
  ["Limit comments", "限制留言"],
  ["Video sharing", "影片分享"],
  ["Watch behavior", "觀看行為"],
  ["For You Feed", "For You 推薦"],
  ["Personalized feed", "個人化動態"],
  ["Engagement signals", "互動訊號"],
  ["Interest graph", "興趣圖譜"],
  ["Opens profiles", "開啟個人檔案"],
  ["Opens LIVE", "開啟 LIVE"],
  ["Opens Shop", "開啟商店"],
  ["Video Creation", "影片創作"],
  ["Creator / Profile", "創作者 / 個人檔案"],
  ["Content archive", "內容封存"],
  ["Private interaction", "私人互動"],
  ["Shoppable videos", "可購物影片"],
  ["Profile shopping bag", "個人檔案購物袋"],
  ["Market availability", "市場開放情況"],
  ["Affiliate / Creator Marketplace", "聯盟 / 創作者市集"],
  ["Affiliate products", "聯盟商品"],
  ["Seller operations", "賣家營運"],
  ["Product Detail / Cart / Checkout / Order", "商品詳情 / 購物車 / 結帳 / 訂單"],
  ["Purchase flow", "購買流程"],
  ["For You ads", "For You 廣告"],
  ["LIVE ads", "LIVE 廣告"],
  ["Recommendation Engine", "推薦引擎"],
  ["Shop discovery", "商店探索"],
  ["Engagement prediction", "互動預測"],
  ["opens / shares into", "開啟 / 分享到"],
  ["Seller verification", "賣家驗證"],
  ["Fraud controls", "詐欺控管"],
  ["User Account", "使用者帳號"],
  ["Campaign eligibility", "活動資格"],
  ["Limited-time offers", "限時優惠"],
  ["Shipping updates", "物流更新"],
  ["Buyer account", "買家帳號"],
  ["Retail Discovery Core", "零售探索核心"],
  ["Demand creation", "需求創造"],
  ["Decision data", "決策資料"],
  ["Seller rating", "賣家評分"],
  ["Seller presence", "賣家門面"],
  ["Seller shop", "賣家店鋪"],
  ["Content commerce", "內容電商"],
  ["Product demo", "商品示範"],
  ["Real-time Q&A", "即時 Q&A"],
  ["Seller Chat / Customer Service", "賣家聊天 / 客服"],
  ["Product questions", "商品問題"],
  ["Order Management", "訂單管理"],
  ["Seller processing", "賣家處理"],
  ["Fulfillment / Logistics / Tracking", "履約 / 物流 / 追蹤"],
  ["After-Sales", "售後"],
  ["Merchant Backend", "商家後台"],
  ["Data privacy", "資料隱私"],
  ["Audit/admin controls", "稽核 / 管理控制"],
  ["WhatsApp where integrated", "已整合時的 WhatsApp"],
  ["Help center", "說明中心"],
  ["Team inboxes", "團隊收件匣"],
  ["AI support", "AI 支援"],
  ["Automated resolution", "自動解決"],
  ["Answer generation", "產生答案"],
  ["Tickets / Cases", "票證 / 案件"],
  ["Branching logic", "分支邏輯"],
  ["Knowledge Base", "知識庫"],
  ["Content gaps", "內容缺口"],
  ["Product data", "產品資料"],
  ["Order system", "訂單系統"],
  ["Support quality", "支援品質"],
  ["Team performance", "團隊表現"],
  ["Professional identity", "職涯身分"],
  ["Platform policies", "平台政策"],
  ["Ads/recruiting rules", "廣告 / 招募規則"],
  ["Work history", "工作經歷"],
  ["Quality signal", "品質訊號"],
  ["Feeds content", "餵入內容"],
  ["Opens messaging", "開啟訊息"],
  ["Opens jobs", "開啟職缺"],
  ["Powers sales", "支援銷售"],
  ["1:1 messages", "一對一訊息"],
  ["Recruiter outreach", "招募人員觸及"],
  ["Sales outreach", "銷售觸及"],
  ["Company Pages", "公司專頁"],
  ["Audience engagement", "受眾互動"],
  ["Professional groups", "專業社群"],
  ["Recruiter workflows", "招募流程"],
  ["Candidate search", "候選人搜尋"],
  ["Page Messaging", "專頁訊息"],
  ["Company conversations", "公司對話"],
  ["Service inquiries", "服務詢問"],
  ["Buyer signals", "買家訊號"],
  ["Sales workflow", "銷售流程"],
  ["Ads Platform", "廣告平台"],
  ["Messaging ads", "訊息廣告"],
  ["Conversation ads", "Conversation Ads 對話廣告"],
  ["Lead Gen Forms", "潛在客戶開發表單"],
  ["Pre-filled profile data", "預先填入個人檔案資料"],
  ["Campaign leads", "活動潛在客戶"],
  ["CRM routing", "CRM 路由"],
  ["Relationship follow-up", "關係後續追蹤"],
  ["Consent", "同意接收"],
  ["Avatar", "頭像"],
  ["Photos", "相片"],
  ["Videos", "影片"],
  ["Camera", "相機"],
  ["Description", "描述"],
  ["Reactions", "表情回應"],
  ["Logo/photo", "Logo / 相片"],
  ["Address", "地址"],
  ["Hours", "營業時間"],
  ["Website", "網站"],
  ["Lists", "清單"],
  ["Orders", "訂單"],
  ["Devices", "裝置"],
  ["Language", "語言"],
  ["Files", "檔案"],
  ["Location", "位置"],
  ["Expression", "表達"],
  ["Productivity", "效率"],
  ["Report tools", "檢舉工具"],
  ["Members", "成員"],
  ["Buttons", "按鈕"],
  ["Runtime", "執行環境"],
  ["Forms", "表單"],
  ["Sharing", "分享"],
  ["Monetization", "變現"],
  ["Moments", "朋友圈"],
  ["Nearby", "附近"],
  ["Wallet", "錢包"],
  ["Protection", "保障"],
  ["Service", "服務"],
  ["Voice", "語音"],
  ["Video", "視訊"],
  ["Status", "狀態"],
  ["Friends", "好友"],
  ["Support", "支援"],
  ["Stores", "店鋪"],
  ["Services", "服務"],
  ["Bookings", "預訂"],
  ["Transaction", "交易"],
  ["Integration", "整合"],
  ["Privacy", "隱私"],
  ["Block", "封鎖"],
  ["Themes", "主題"],
  ["Report", "檢舉"],
  ["Broadcast", "群發"],
  ["Statistics", "統計"],
  ["Product", "商品"],
  ["Reservation", "預約"],
  ["Coupon", "優惠券"],
  ["Authorization", "授權"],
  ["Payment", "付款"],
  ["Notification", "通知"],
  ["Account", "帳號"],
  ["Social", "社交"],
  ["Sessions", "工作階段"],
  ["Structure", "結構"],
  ["Alerts", "警示"],
  ["Container", "容器"],
  ["Moderators", "版主"],
  ["Stage", "舞台"],
  ["Moderator", "版主"],
  ["Member", "成員"],
  ["Control", "控制"],
  ["Overrides", "覆寫"],
  ["Perks", "權益"],
  ["Reporting", "報表"],
  ["Pages", "粉絲專頁"],
  ["Links", "連結"],
  ["Inputs", "輸入"],
  ["Brands", "品牌"],
  ["Organizations", "組織"],
  ["Watch", "觀看"],
  ["Local", "在地"],
  ["Chat", "聊天"],
  ["Assistance", "輔助"],
  ["Verification", "驗證"],
  ["Feed", "動態"],
  ["Creation", "創作"],
  ["Editing", "剪輯"],
  ["Posting", "發布"],
  ["Follow", "追蹤"],
  ["Showcase", "櫥窗"],
  ["Affiliate", "聯盟"],
  ["Commissions", "佣金"],
  ["Samples", "樣品"],
  ["Pricing", "定價"],
  ["Order", "訂單"],
  ["Ranking", "排序"],
  ["Browse", "瀏覽"],
  ["Returns", "退貨"],
  ["Promotions", "促銷"],
  ["Guides", "指南"],
  ["Logistics", "物流"],
  ["Addresses", "地址"],
  ["Browsing", "瀏覽"],
  ["Purchases", "購買"],
  ["Specs", "規格"],
  ["Comparison", "比較"],
  ["Try-on", "試穿"],
  ["Sizing", "尺寸"],
  ["Availability", "可用性"],
  ["Items", "商品"],
  ["Quantities", "數量"],
  ["Shipping", "運送"],
  ["Tracking", "追蹤"],
  ["Delivery", "配送"],
  ["Confirmation", "確認"],
  ["Resolution", "解決"],
  ["Email", "Email"],
  ["Phone", "電話"],
  ["In-app", "App 內"],
  ["Handoffs", "交接"],
  ["Teammates", "團隊成員"],
  ["Agents", "客服人員"],
  ["Handoff", "交接"],
  ["Cases", "案件"],
  ["Data", "資料"],
  ["Users", "使用者"],
  ["Push", "推播"],
  ["Blocking", "封鎖"],
  ["Hiring", "招募"],
  ["Sales", "銷售"],
  ["Sync", "同步"],
  ["Leads", "潛在客戶"],
  ["Accounts", "帳戶"],
  ["Partnership", "合作"]
];

const ZH_SORTED_PHRASES = ZH_PHRASE_TEXT.sort((a, b) => b[0].length - a[0].length);

function localizeText(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (ZH_EXACT_TEXT[text]) return ZH_EXACT_TEXT[text];
  return text.split("\n").map(localizeTextLine).join("\n");
}

function localizeTextLine(text) {
  if (ZH_EXACT_TEXT[text]) return ZH_EXACT_TEXT[text];
  let output = text;
  ZH_SORTED_PHRASES.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });
  output = output
    .replace(/\s+&\s+/g, "與")
    .replace(/\s+\/\s+/g, " / ")
    .replace(/\s+and\s+/gi, "與")
    .replace(/\s+to\s+/gi, "到")
    .replace(/\s+from\s+/gi, "從")
    .replace(/\s+with\s+/gi, "搭配")
    .replace(/\s+for\s+/gi, "用於")
    .replace(/\s+through\s+/gi, "透過")
    .replace(/\s+into\s+/gi, "進入")
    .replace(/\s+across\s+/gi, "橫跨");
  return output.trim();
}

function localizeAreaSummary(area) {
  if (area?.summary && /[\u4e00-\u9fff]/.test(area.summary)) {
    return stripTooltipAvailabilityPhrases(localizeText(area.summary));
  }
  const groups = area.groups || [];
  const groupNames = groups.slice(0, 3).map(([heading]) => localizeText(heading));
  const items = groups.flatMap(([, groupItems]) => groupItems).slice(0, 4).map(localizeText);
  if (groupNames.length && items.length) {
    return `聚焦${groupNames.join("、")}，常見操作包含${items.join("、")}。`;
  }
  if (groupNames.length) {
    return `聚焦${groupNames.join("、")}等使用情境。`;
  }
  return "呈現這個產品區塊承擔的核心操作、資料流與使用情境。";
}

function localizeOverview(app) {
  const areas = (app.mapNodes || app.clusters || []).slice(0, 5).map((item) => localizeText(item.title));
  return `${localizeText(app.name)} 以「${localizeText(app.hub)}」為核心，串接${areas.join("、")}等模組，呈現使用者、商家、內容、資料與治理之間的實際產品流程。`;
}

function localizeTrustSummary(isWhatsApp) {
  if (isWhatsApp) {
    return "橫向控管端對端加密、同意接收、垃圾訊息限制、商家驗證、管理審核、檢舉、資料政策與付款安全。";
  }
  return "橫向規則與控制項會影響各產品區塊的身分、隱私、安全、政策、資料、商務、自動化與平台完整性。";
}

function localizeChipDescription(item, heading, area = null) {
  const productArea = (activeApp.mapNodes || activeApp.clusters || []).find((cluster) => cluster.title === item);
  if (productArea && heading === "Product Areas") {
    return `${localizeAreaSummary(productArea)} 這個區塊展開後會列出可操作的功能、狀態與關聯流程。`;
  }
  if (productArea && heading === "Where it applies") {
    return `${localizeAreaSummary(productArea)} 信任、隱私或政策規則會影響這裡的可見度、權限、安全或商務行為。`;
  }
  const directDescription = getDirectChipDescription(item, heading, area);
  if (directDescription) return directDescription;
  if (heading === "Key Flows") {
    return buildFlowChipDescription(item);
  }
  return buildContextualChipDescription(item, heading, area);
}

function localizeFeatureLabel(item, heading, area = null) {
  const contextualLabel = CONTEXTUAL_ITEM_LABELS[contextualDescriptionKey(item, heading, area)];
  if (contextualLabel) return contextualLabel;

  if (heading === "Key Flows") {
    const architectureFlow = findArchitectureFlowByItem(item);
    if (architectureFlow) {
      const relation = architectureFlow.label ? ` · ${localizeText(architectureFlow.label)}` : "";
      return `${localizeText(architectureFlow.source)} → ${localizeText(architectureFlow.target)}${relation}`;
    }
  }

  return localizeText(item);
}

const positions = ["top", "top-right", "right", "bottom-right", "bottom-left", "left", "top-left"];

const tabsEl = document.querySelector("#appTabs");
const activeAppIconEl = document.querySelector("#activeAppIcon");
const titleEl = document.querySelector("#schemaTitle");
const subtitleEl = document.querySelector("#schemaSubtitle");
const hubCardEl = document.querySelector("#hubCard");
const clusterLayerEl = document.querySelector("#clusterLayer");
const trustLayerEl = document.querySelector("#trustLayer");
const mapStageEl = document.querySelector("#mapStage");
const detailKickerEl = document.querySelector("#detailKicker");
const detailTitleEl = document.querySelector("#detailTitle");
const detailSummaryEl = document.querySelector("#detailSummary");
const detailGroupsEl = document.querySelector("#detailGroups");
const detailChipTooltipEl = document.createElement("div");
detailChipTooltipEl.className = "detail-chip-tooltip";
detailChipTooltipEl.setAttribute("role", "tooltip");
detailChipTooltipEl.hidden = true;
document.body.append(detailChipTooltipEl);

let activeApp = apps[0];
let selectedClusterIndex = -1;
let whatsappGraph = null;
let moduleGraph = null;
let cytoscapeDagreRegistered = false;

const WHATSAPP_GROUP_DESCRIPTIONS = {
  "Product Areas": "Major WhatsApp product surfaces; selecting the related graph block opens the full grouped feature detail.",
  "Cross-cutting Layer": "Rules and controls that apply across several WhatsApp surfaces rather than living in one feature area.",
  "Trust and safety": "Privacy, integrity, and policy controls that shape who can contact whom and what businesses can do.",
  "Where it applies": "The product area where this trust or policy rule affects the user or business experience.",
  "Business impact": "Outcome this governance layer is meant to support for users, businesses, and the platform.",
  "Registration and profile": "Account setup and visible identity fields that define how a person appears in WhatsApp.",
  "Contact graph": "Ways people find, save, invite, or restrict contacts before a conversation starts.",
  "Linked devices": "Surfaces that extend the same WhatsApp account beyond the primary phone.",
  "Privacy controls": "Audience and visibility settings that let users limit what others can see or do.",
  "Account security": "Controls for protecting account access, recovering accounts, and reviewing trusted devices.",
  "Phone identity": "The phone-number-based account identity and verification path that make WhatsApp addressable.",
  "Profile": "Visible user profile fields and profile visibility settings.",
  "Sessions and devices": "Logged-in device surfaces and session review for accessing the same WhatsApp account.",
  "Conversation types": "The main chat formats and message actions carried by the chat core.",
  "Message actions": "Core message-level actions inside a conversation thread.",
  "Voice notes": "Asynchronous audio messaging tools inside chat threads.",
  "Receipts and state": "Delivery, read, typing, and presence signals that communicate message or user state.",
  "Search and organization": "Tools for finding, filtering, pinning, starring, and archiving conversations.",
  "Media and attachments": "Rich content and utility payloads that can be sent inside chats.",
  "Expression": "Lightweight social and expressive tools that make conversations less text-only.",
  "Thread organization": "Inbox and thread management tools that help people find or prioritize conversations.",
  "Privacy in chats": "Conversation-level privacy features for locking, expiring, reporting, or verifying chats.",
  "Group foundations": "Basic structure and entry points that make a group chat usable.",
  "Admin controls": "Settings admins use to manage membership, posting rights, and group behavior.",
  "Group activities": "Shared coordination features that happen inside group and community conversations.",
  "Community structure": "How WhatsApp bundles related groups under a larger community container.",
  "Topic-based hub": "A community-level container for related groups around an organization, school, neighborhood, or topic.",
  "Announcements": "One-to-many community updates controlled by admins.",
  "Community privacy and safety": "Controls that reduce exposure and abuse in larger group/community contexts.",
  "Voice calls": "Audio calling options that start from chat, groups, links, or call history.",
  "Video calls": "Video calling options and controls for one-to-one or group calls.",
  "Call entry points": "Places where a WhatsApp call can be started or rejoined.",
  "Call types": "Synchronous communication formats supported by WhatsApp calling.",
  "In-call tools": "Controls available while a voice or video call is active.",
  "After-call loop": "Follow-up actions that connect a call back to the surrounding chat context.",
  "Status posts": "Ephemeral photo, video, text, or voice updates shared with a selected audience.",
  "Replies": "Ways Status and Updates open back into the chat core.",
  "Lightweight sharing": "Low-friction update sharing outside the main inbox.",
  "Monetization hooks": "Ad or paid-growth entry points attached to Updates surfaces where available or in rollout.",
  "Status": "Ephemeral updates shared with selected contacts and routed back into chats through replies.",
  "Channels": "One-way broadcast surfaces for creators, publishers, organizations, and public updates.",
  "One-to-many updates": "Broadcast-style channel content distributed from admins to followers.",
  "Public following": "Discovery and following mechanics for public or semi-public broadcast surfaces.",
  "Brand and creator use": "Publisher, creator, organization, or brand communication through channels.",
  "Discovery": "Ways people find updates, channels, and broadcast content inside WhatsApp.",
  "Channel privacy": "Privacy boundaries between channel admins, followers, and phone-number identity.",
  "Updates monetization": "Paid or promotional surfaces attached to Status and Channels where available or in rollout.",
  "Business presence": "Public-facing business identity shown to customers before or during a chat.",
  "Conversation operations": "Small-business inbox tools for greeting, triage, labeling, and response speed.",
  "Business broadcasts": "Lightweight outbound messaging tools for eligible business accounts.",
  "Catalog commerce": "In-chat storefront and ordering tools for small-business sales.",
  "Seller Inbox": "Manual customer conversation tools for small-business sales and support.",
  "Basic automation": "Simple automated replies, scheduling, and routing available to eligible business accounts.",
  "Customer acquisition": "Entry points that bring customers from QR, Meta surfaces, ads, or links into WhatsApp chat.",
  "Account and setup": "Business Platform account configuration, phone numbers, permissions, and quality controls.",
  "Messaging primitives": "API-level message capabilities used to send, receive, and structure conversations.",
  "Templates and conversations": "Approved outbound message formats and pricing/eligibility categories.",
  "Automation and handoff": "Webhook, routing, bot, and agent flows that move a customer conversation through support or sales.",
  "WhatsApp Flows": "Native in-chat forms and structured screens used to collect information or complete tasks.",
  "Commerce and growth": "Platform-level acquisition, selling, payments, and policy controls for business messaging.",
  "CRM/helpdesk integrations": "Connections that move WhatsApp conversation context into sales or support systems.",
  "Bots and routing": "Automated routing, bot handling, and agent handoff patterns for scaled support.",
  "Order/payment integrations": "Commerce events, payments, and order-related integrations where supported.",
  "CRM": "Customer relationship systems that store lead, account, and conversation context.",
  "Helpdesk": "Support systems that manage tickets, SLAs, assignments, and escalations.",
  "E-commerce backend": "Commerce systems that manage product, checkout, order, and customer-account state.",
  "Inventory and logistics": "Operational systems for stock availability, fulfillment, shipping, and after-sales workflows.",
  "Payments and analytics": "Payment, attribution, reporting, and measurement systems linked to business flows.",
  "Entry points": "Places where users can open or invoke Meta AI where the feature is available.",
  "Assistance": "Help-oriented AI tasks such as answering, planning, recommending, or explaining.",
  "Creation": "Generative AI features for creating or iterating on visual and creative outputs.",
  "Privacy boundary": "Limits around what AI receives and how AI availability interacts with private messaging.",
};

const WHATSAPP_FEATURE_DESCRIPTIONS = {
  "Personal chats and calls are end-to-end encrypted": "Personal chat and call content is protected between participant devices by default.",
  "Status privacy controls who sees updates": "Status has its own audience controls, separate from who can message or call you.",
  "Channel follows do not reveal follower phone numbers": "Following a channel is designed to avoid exposing a follower's phone number to channel admins.",
  "Linked devices require account-level trust and review": "Device linking extends the same account, so session review and account security matter.",
  "Business messaging follows WhatsApp policies and opt-in rules": "Businesses must follow messaging eligibility, quality, template, and consent rules.",
  "Ads and paid channel features stay in the Updates surface": "Promoted placements belong to Updates/Channels rather than personal chat threads.",
  "Reduces abuse": "Spam, scam, unwanted contact, and policy controls help preserve trust in the network.",
  "Protects accounts": "Security features reduce unauthorized access, account takeover, and risky device linking.",
  "Sets policy boundaries": "Platform rules define what users, admins, channels, and businesses are allowed to do.",
  "Supports monetization eligibility": "Paid features depend on account quality, policy status, country, and rollout eligibility.",
  "Improves customer confidence": "Clear identity, privacy, reporting, and business rules make conversations feel safer.",
  "Encryption": "Encryption protects eligible personal messages and calls between participant devices.",
  "Consent": "Consent rules govern who can contact users, how businesses start outreach, and when opt-in is required.",
  "Spam Control": "Spam controls reduce unwanted, repetitive, or risky messages across personal and business surfaces.",
  "Business Verification": "Business verification helps establish that a business account represents a legitimate organization.",
  "Moderation": "Moderation combines user, admin, and platform controls for harmful or policy-breaking behavior.",
  "Abuse Reporting": "Reporting tools let users and admins flag unwanted contact, scams, spam, and abusive content.",
  "Data Policy": "Data policy boundaries define how account, business, and interaction data can be used.",
  "Payment Safety": "Payment safety controls apply where payment or order flows are available.",
  "End-to-end encryption for personal messages and calls": "Personal messages and calls are protected between participant devices by default.",
  "Privacy controls": "Privacy controls set who can see profile information, status, read receipts, group adds, and other account signals.",
  "Spam limits": "Spam limits reduce unwanted, repetitive, or risky outreach across personal and business messaging.",
  "Reporting/blocking": "Reporting and blocking let people stop unwanted contact and flag abuse, scams, spam, or policy violations.",
  "Business verification": "Business verification helps establish that a business account represents a legitimate organization.",
  "Template rules": "Template rules govern approved business-initiated messages, categories, quality, and eligibility.",
  "Abuse prevention": "Abuse prevention combines platform detection, user controls, business quality signals, and policy enforcement.",
  "Audit/policy controls": "稽核與政策控制協助 WhatsApp 執行平台規則、商業訊息義務與違規處理。",
};

const FLOW_TOOLTIP_DESCRIPTIONS = {
  whatsapp: {
    "Account identity, sessions, contacts, and profiles feed the chat core": "A phone-number account, profile, contacts, and linked-device sessions establish who can participate in WhatsApp chats.",
    "Chat Core hosts groups, launches calls, and opens Status replies back into conversations": "WhatsApp messages are the main thread where group chat, calling, and Status replies reconnect to personal or group conversations.",
    "Groups can organize larger Community Spaces with announcements and admin structure": "Communities collect related groups and add announcement/admin structure for larger organizations or topics.",
    "Status and Updates can lead to Channels for one-to-many following": "Status, Updates, and Channels are separate update surfaces that support ephemeral sharing and one-to-many following.",
    "Business Conversation Layer adds merchant tools to Chat Core": "The WhatsApp Business app adds profile, catalog, labels, quick replies, and basic automation around customer chats.",
    "Business Platform connects chat workflows to APIs, templates, integrations, and external systems": "The Business Platform scales WhatsApp messaging through Cloud API, templates, webhooks, Flows, integrations, and backend systems.",
    "Meta AI is user-invoked assistance across chat, search, and support surfaces": "Meta AI appears only where available and is invoked by the user through supported chat, search, or assistant entry points.",
    "Trust, privacy, and policy controls govern every layer and integration": "Encryption, privacy settings, reporting, verification, consent, quality, and policy rules shape personal and business messaging.",
  },
  telegram: {
    "Private messages to calls": "Telegram private chats can move into voice or video calls while retaining the same contact relationship.",
    "Groups to voice chats": "Telegram groups and supergroups can support live voice/video-style community sessions with admins and speaker controls.",
    "Channels to discussion groups": "Telegram channels can connect broadcast posts to discussion/comment groups for audience conversation.",
    "Bots to payments and mini apps": "Telegram bots can expose commands, buttons, invoices, payments, and web mini apps inside Telegram.",
    "Boosts to channels and groups": "Boosts unlock or enhance channel and group capabilities such as stories and other premium-backed perks.",
    "Stars to paid media": "Telegram Stars support digital goods and paid media or creator monetization inside Telegram-supported surfaces.",
  },
  wechat: {
    "Messaging to red packets to Pay": "Weixin/WeChat chat connects social messaging with red packets, transfers, and Weixin Pay wallet actions.",
    "Official accounts to mini programs": "Official Accounts can publish, message, and route users into Mini Programs for services and commerce.",
    "Mini programs to WeChat Pay": "Mini Programs can complete service and shopping flows by initiating Weixin Pay transactions.",
    "Channels/live to shopping": "Channels and live content can drive product discovery and link users toward Mini Programs, stores, or payment-enabled commerce.",
    "Moments to chats": "Moments is friend-network sharing where comments, likes, and sharing can lead back into private conversations.",
    "QR codes to contacts, pay, and services": "QR scanning is a major Weixin/WeChat entry point for adding contacts, paying merchants, and opening services.",
  },
  line: {
    "Chats to calls": "LINE chats connect directly to voice, video, and group calling features.",
    "OpenChat to topic discovery": "OpenChat provides topic-based rooms with discovery, anonymous profiles, and moderation controls.",
    "Official accounts to coupons and commerce": "LINE Official Accounts connect broadcasts, rich menus, coupons, chat support, and commerce/service links.",
    "Business platform to official accounts": "The LINE Messaging API and business tools let companies automate and measure Official Account conversations.",
    "Ads to services": "LINE Ads and business surfaces route users to official accounts, services, coupons, or commerce destinations.",
    "Sticker store to chats": "LINE’s sticker and theme ecosystem feeds expressive assets back into chat conversations.",
  },
  discord: {
    "Servers to channels": "Discord servers are the community containers that organize text, voice, forum, media, and stage channels.",
    "Channels to voice/live": "Channel spaces can lead into live voice, video, streaming, stage events, and activities.",
    "Roles to permissions": "Roles and permission overrides govern who can access, moderate, or act inside channels and apps.",
    "Bots to channels and moderation": "Discord apps and bots use commands, app installs, permissions, and webhooks to automate server workflows.",
    "Nitro and boosts to perks": "Nitro, boosts, server subscriptions, premium roles, and server shop products unlock personal and community perks.",
    "Events to engagement": "Scheduled events, stages, activities, and community channels help servers gather members around live participation.",
  },
  facebook: {
    "Profile to feed": "Facebook identity and social graph signals feed the personalized home and discovery surfaces.",
    "Feed to groups and pages": "Feed content routes users into profiles, Groups, Pages, Reels, local events, and Marketplace.",
    "Pages to ads": "Pages and Meta Business tools provide business presence, publishing, advertising, inbox, and insights workflows.",
    "Ads to Messenger, leads, and shops": "Facebook ads can optimize toward messages, lead forms, shops, websites, app installs, or other business outcomes.",
    "Marketplace to seller chat": "Marketplace buyers commonly message sellers through Facebook or Messenger before arranging pickup, shipping, or checkout.",
    "Groups to events": "Facebook Groups support community posts, member management, and event/local engagement loops.",
  },
  instagram: {
    "Content to engagement": "Instagram posts, Stories, Reels, Live, and broadcasts generate likes, comments, shares, saves, replies, and follows.",
    "Stories and Reels to DMs": "Stories and Reels can trigger private replies, shares, quick reactions, and business message entry points.",
    "Discovery to content": "Explore, Reels, search, hashtags, audio pages, and recommendations route attention back to creator or brand content.",
    "Business profile to shopping": "Professional accounts can connect catalogs, shops, product tags, action buttons, insights, and conversion paths.",
    "Ads to profile, shop, or DM": "Instagram ads can distribute content into placements and send users to profiles, shops, websites, lead forms, or messages.",
    "Creators to brand partnerships": "Creator and business tools support branded content, partnership labels, creator marketplace, subscriptions, gifts, and badges where eligible.",
  },
  tiktok: {
    "Creation to For You feed": "TikTok creator tools publish short videos and photos into discovery surfaces such as For You, Following, and search.",
    "For You to engagement": "For You recommendations lead users to likes, comments, shares, saves, follows, reposts, and profile visits.",
    "Engagement to recommendations": "Signals such as watch time, replays, shares, saves, and comments inform recommendation ranking.",
    "Creators to LIVE": "Eligible creators can move from profile and audience relationships into LIVE sessions with chat, gifts, moderation, and events.",
    "LIVE to gifts and shopping where available by market": "LIVE can support gifts and shopping tools where TikTok has enabled those monetization and commerce products.",
    "TikTok Shop to product links and checkout where available by market": "TikTok Shop connects product showcases, links, checkout, orders, returns, sellers, and affiliates in supported markets.",
    "Ads to content, shop, and lead forms": "TikTok Ads Manager distributes paid campaigns to For You, LIVE, search, shop, lead, and business destinations where supported.",
  },
  taobao: {
    "Discovery to product detail": "Taobao search, recommendations, campaigns, image search, and content open product detail pages.",
    "Product detail to cart": "Product pages provide specs, variants, price, seller signals, reviews, coupons, and add-to-cart/buy-now actions.",
    "Cart to checkout and payment": "Cart selection, coupons, address, shipping, invoice, and Alipay checkout complete purchase setup.",
    "Payment to logistics and after-sales": "After payment, orders move through seller processing, logistics, delivery confirmation, refunds, returns, and after-sales support.",
    "Seller chat to product decision": "Seller/customer-service chat helps answer product, sizing, availability, order, and after-sales questions.",
    "Live content to product detail and coupons": "Taobao live/content commerce uses demos, pinned products, coupons, and limited-time offers to drive product conversion.",
  },
  intercom: {
    "Entry points to inbox": "Intercom routes conversations from Messenger, email, WhatsApp, SMS, social, apps, APIs, and help content into the Inbox.",
    "Help center to self-service deflection": "Articles, collections, search, recommendations, and Fin AI answers help customers resolve issues before human handoff.",
    "AI agent to resolution or handoff": "Fin AI Agent answers from sources and can resolve, gather context, or hand over to a teammate through configured workflows.",
    "Customer data to routing and personalization": "User, company, event, segment, and attribute data personalize routing, prioritization, targeting, and Fin/context behavior.",
    "Outbound to entry points": "Outbound messages, tours, banners, surveys, and campaigns can start or guide conversations across Intercom-supported channels.",
    "Reporting to workflow improvement": "Support metrics, AI performance, article analytics, team workload, and custom reports show where operations need tuning.",
  },
  linkedin: {
    "Profile to network": "LinkedIn member profiles anchor professional identity and connect to relationships, followers, companies, groups, and messaging.",
    "Network to feed": "The professional graph feeds content distribution through posts, newsletters, articles, videos, comments, and reposts.",
    "Feed to opportunities": "Feed and search activity can lead to jobs, company pages, groups, creator follows, ads, messaging, or sales/recruiting opportunities.",
    "Jobs to applications": "LinkedIn Jobs connects job discovery, alerts, saved jobs, Easy Apply, screening questions, and recruiter messages.",
    "Recruiting to candidate outreach": "Recruiter products support talent search, candidate projects, InMail/outreach, notes, pipeline, and ATS integrations.",
    "Sales Navigator to leads and messaging": "Sales Navigator uses professional graph, company data, buyer signals, lead/account lists, alerts, and CRM sync for sales workflows.",
    "Learning to profile skills": "LinkedIn Learning courses and learning paths can support skill development and profile/career signals.",
  },
};

const ITEM_TOOLTIP_DESCRIPTIONS = {
  "Phone number": "用手機號碼作為帳號識別與聯絡入口，讓其他人能透過通訊錄找到並開始聊天。",
  "SMS/call verification": "透過簡訊或語音通話接收驗證碼，確認使用者可以存取該手機號碼。",
  "Change number": "把 WhatsApp 帳號從舊號碼遷移到新號碼，保留帳號資訊並通知指定聯絡人。",
  "Account recovery": "在遺失裝置、換機或無法登入時，透過號碼驗證與安全設定重新取回帳號。",
  "Delete account": "刪除帳號、個人資料與相關 WhatsApp 帳號資料，並退出既有群組。",
  "Profile name": "顯示在聊天、群組和聯絡人資訊中的使用者名稱。",
  "Profile photo": "顯示在聊天清單、聯絡人資訊和群組成員列表中的個人頭像。",
  "About text": "個人檔案中的短文字狀態，用來補充自我介紹或目前狀態。",
  "Avatar": "用可自訂的虛擬角色作為個人形象，並可延伸到貼圖或頭像呈現。",
  "Profile visibility": "控制哪些人可以看到個人檔案資訊，降低陌生人取得個資的機會。",
  "About visibility": "控制哪些聯絡人能看到個人檔案中的 About 文字。",
  "Profile photo visibility": "控制所有人、聯絡人、指定聯絡人或沒有人能看到個人頭像。",
  "Phone contact sync": "把手機通訊錄與 WhatsApp 比對，找出已使用 WhatsApp 的聯絡人。",
  "Contact sync": "同步裝置聯絡人，讓聊天、邀請和聯絡人搜尋能對應到通訊錄資料。",
  "QR code": "用掃描 QR code 的方式加入聯絡人、開啟聊天、進入群組或連到商家入口。",
  "Contact cards": "在聊天中分享聯絡人資訊，讓接收者可直接儲存或開啟對話。",
  "Favorites": "把常用聯絡人或聊天標記為常用項目，方便快速找到與撥打。",
  "Invite links": "用連結邀請他人加入群組、社群或頻道，不需要逐一手動加入成員。",
  "Blocked contacts": "阻止指定帳號傳送訊息、撥打電話或查看部分個人狀態。",
  "Business contact discovery": "協助使用者從商家名稱、廣告、QR code 或連結找到商家並開始對話。",
  "WhatsApp Web": "在瀏覽器中連結同一個 WhatsApp 帳號，於電腦上收發訊息與管理聊天。",
  "Desktop apps": "在 Windows 或 macOS 桌面版使用 WhatsApp，支援鍵盤操作、通知與多裝置同步。",
  "Companion phones": "把其他手機連成同一個 WhatsApp 帳號的副裝置，讓聊天在多支手機間同步。",
  "Android tablets": "在 Android 平板上以連結裝置方式使用同一個 WhatsApp 帳號。",
  "Active session review": "查看目前登入的 Web、桌面或副裝置工作階段，並移除不認得的裝置。",
  "Two-step verification": "為帳號加入 PIN 碼保護，降低號碼被重新註冊或盜用的風險。",
  "Security notifications": "當聯絡人的安全碼變更時提示使用者，協助辨識裝置或加密金鑰變動。",
  "Device review": "檢查與帳號連結的裝置，移除不再使用或可疑的登入端。",
  "1:1 chat": "與單一聯絡人進行私人對話，可傳送文字、媒體、語音訊息並從同一聊天發起通話。",
  "1-to-1 chat": "與單一聯絡人進行私人對話，可傳送文字、媒體、語音訊息並從同一聊天發起通話。",
  "1:1 chats": "一對一聊天是兩個帳號之間的私人訊息串，用於日常訊息、媒體分享與通話延伸。",
  "1-to-1 chats": "一對一聊天是兩個帳號之間的私人訊息串，用於日常訊息、媒體分享與通話延伸。",
  "Business chat": "與商家帳號的對話，用於詢問商品、取得客服、追蹤訂單或接收商家回覆。",
  "Group-message transport": "支撐群組聊天中的訊息傳送與同步，讓多位成員在同一串對話中收發內容。",
  "Replies": "針對特定訊息或更新回覆，讓回應保留上下文而不是散落在聊天串中。",
  "Quoted replies": "回覆時引用原訊息，讓其他人知道這則回覆對應哪一段內容。",
  "Forwards": "把既有訊息、連結、媒體或文件轉送到其他聊天或群組。",
  "Edits": "修改已送出的文字訊息，用來修正錯字、補充資訊或更正原始內容。",
  "Delete for everyone": "移除已送出的訊息，讓聊天參與者看到刪除提示而不是原內容。",
  "Photos": "傳送或發布相片，通常可從相簿選取、直接拍攝，或加上說明文字再送出。",
  "Videos": "傳送或發布影片，讓使用者分享短片、錄影內容或商品/活動畫面。",
  "Documents": "傳送 PDF、表格、簡報或其他檔案，適合分享正式文件與工作資料。",
  "Camera": "直接開啟相機拍照或錄影，快速把當下畫面送進聊天或狀態。",
  "Location sharing": "分享目前位置或即時位置，讓對方能在地圖上查看所在位置或移動狀態。",
  "Contacts": "把通訊錄中的聯絡人資料傳給對方，方便接收者儲存或開啟聯絡。",
  "View-once media": "讓相片、影片或語音在被開啟一次後消失，適合傳送不想長期保留的內容。",
  "Media gallery": "集中查看聊天中已分享的相片、影片、文件與連結，方便回找過去內容。",
  "Voice notes": "錄製並傳送語音訊息，適合不方便打字或需要表達語氣的情境。",
  "Playback speed": "調整語音訊息播放速度，讓接收者能更快聽完或放慢確認內容。",
  "Hands-free recording": "鎖定錄音後不用持續按住麥克風，方便錄製較長語音訊息。",
  "Forward voice notes": "把已收到或已送出的語音訊息轉寄到其他聊天。",
  "Delivery receipts": "顯示訊息是否已送達對方裝置，通常以勾號狀態呈現。",
  "Read receipts": "顯示訊息是否已被對方讀取，讓傳送者知道訊息是否已被看見。",
  "Message info": "查看單則訊息的送達、讀取或播放狀態，常用於確認群組中的接收情況。",
  "Last seen": "顯示使用者上次使用 WhatsApp 的時間，並可由隱私設定控制可見範圍。",
  "Online status": "顯示使用者目前是否正在使用 WhatsApp，並可透過隱私設定限制可見範圍。",
  "Typing indicators": "在對方輸入訊息時顯示狀態，讓聊天參與者知道回覆正在撰寫中。",
  "Search": "搜尋聊天、訊息、聯絡人、群組、頻道或內容，快速回到需要的資訊。",
  "Message history": "保留過去聊天內容，讓使用者能回看、搜尋或延續先前對話。",
  "Chat filters": "用篩選器切換不同聊天集合，例如未讀、群組或常用聊天。",
  "Unread filter": "只顯示尚未讀取的聊天，協助使用者集中處理待回覆訊息。",
  "Groups filter": "只顯示群組聊天，方便從混合收件匣中快速找到多人對話。",
  "Pinned chats": "把重要聊天固定在聊天清單頂端，避免被新訊息往下推。",
  "Starred messages": "把重要訊息加星標保存，之後可從星標清單快速回找。",
  "Archived chats": "把不需要立刻處理的聊天移到封存區，讓主要聊天清單更乾淨。",
  "Message notifications": "在新訊息到達時發出提醒，讓使用者即時知道有人聯絡。",
  "Group notifications": "控制群組訊息提醒，避免大型群組的通知干擾或漏掉重要訊息。",
  "Mentions": "在聊天或群組中標記特定成員，讓對方收到更明確的提醒。",
  "Muted chats": "暫停指定聊天或群組的通知，保留訊息但降低干擾。",
  "Notification previews": "在系統通知中顯示或隱藏訊息預覽，平衡便利與隱私。",
  "Call notifications": "在有人撥打語音或視訊電話時發出提醒，讓使用者可接聽或回撥。",
  "Group name/photo": "設定群組名稱與圖片，幫助成員辨識群組主題或用途。",
  "Description": "補充群組、商家、商品或內容的說明文字，讓使用者理解用途與背景。",
  "QR invite": "用 QR code 邀請他人加入群組或開啟指定入口，適合現場或印刷分享。",
  "Shared media/files": "集中查看群組或聊天中分享過的媒體與檔案，方便成員回找資料。",
  "Shared media": "集中查看聊天中分享過的圖片、影片或其他媒體。",
  "Shared files": "集中查看聊天或群組內傳送過的文件與附件。",
  "Group search": "在群組內容或群組清單中搜尋關鍵字，快速找到訊息或目標群組。",
  "Admin roles": "指定管理員與管理權限，用來維護群組、頻道、社群或商家帳號。",
  "Member approval": "要求管理員核准新成員加入，降低陌生人或不適合成員進入的風險。",
  "Who can send messages": "設定哪些成員可以在群組或公告空間中發言，常用於公告型群組。",
  "Who can edit group info": "設定哪些成員能修改群組名稱、圖片、描述或其他群組資訊。",
  "Remove members": "由管理員將成員移出群組或社群，處理違規、離職或不再相關的成員。",
  "Admin-only settings": "只允許管理員操作的重要設定，用來保護群組結構與權限。",
  "Polls": "建立投票讓成員選擇選項，適合做決策、收集偏好或安排活動。",
  "Events": "建立活動資訊，讓成員查看時間、地點與參與安排。",
  "Event RSVP": "讓成員回覆是否參加活動，協助主辦方估算人數與後續提醒。",
  "Announcements": "發布一對多公告，讓管理員或品牌向成員、追蹤者或客戶傳達重要資訊。",
  "Group call entry": "從群組聊天直接加入或發起群組通話，讓討論從文字轉成即時溝通。",
  "Community home": "社群首頁彙整公告與相關群組，讓成員理解社群結構並進入正確群組。",
  "Announcement group": "社群中的公告群組，由管理員向所有成員發布重要訊息。",
  "Related member groups": "社群底下的相關群組，讓成員依主題、角色或活動加入不同討論空間。",
  "Join requests": "讓管理員審核加入社群、群組或頻道的請求。",
  "Member visibility controls": "控制成員名單或成員資訊的可見程度，降低大型社群中的曝光風險。",
  "Community admins": "管理社群結構、公告、成員與相關群組的管理員角色。",
  "Group admins": "管理單一群組成員、權限、設定與秩序的管理員角色。",
  "Report community": "向平台檢舉違反規則或有風險的社群。",
  "Forwarding controls": "限制內容被轉寄的方式，降低錯誤資訊、垃圾訊息或敏感內容擴散。",
  "Text updates": "在狀態或頻道中發布文字型更新，不需要搭配圖片或影片。",
  "Channel links": "用連結分享頻道，讓其他人能直接開啟並追蹤。",
  "Directory discovery": "透過目錄瀏覽或搜尋找到公開頻道、商家或內容。",
  "Country-filtered directory": "依國家或地區篩選頻道目錄，讓使用者看到更相關的公開頻道。",
  "Official Accounts": "品牌、媒體、政府或服務提供者的官方帳號，可發布內容、提供客服並導向選單或小程式。",
  "Mini Programs": "在 WeChat / 微信內執行的輕量服務或商務流程，可承載購物、預約、遊戲、表單與支付。",
  "Groups": "多人聊天或社群空間，用於成員討論、共享內容、活動協調與管理審核。",
  "Activities": "在語音或頻道情境中啟動的共同互動體驗，例如遊戲、共同觀看或其他即時應用。",
  "Messaging API": "讓商家伺服器透過 API 收發訊息、接收 webhook、管理 rich menu、查詢統計或串接外部系統。",
  "Followers": "追蹤頻道、創作者、品牌或帳號的人，會接收後續更新。",
  "Brand announcements": "品牌用一對多更新發布新品、服務異動、活動或重要通知。",
  "Creator updates": "創作者向追蹤者發布內容、活動、作品或近況。",
  "Publisher updates": "媒體或發布者向追蹤者推送新聞、文章、影片或公告。",
  "Channel analytics": "查看頻道觸及、互動和追蹤者變化，協助管理者評估內容表現。",
  "Groups can organize larger Community Spaces with announcements and admin structure": "把多個相關群組收進同一個社群空間，並透過公告群組與管理員角色發布跨群組通知。",
  "Status and Updates can lead to Channels for one-to-many following": "狀態、最新消息與頻道把個人近況和公開更新分開，支援限時分享與一對多追蹤。",
  "Trust, privacy, and policy controls govern every layer and integration": "加密、隱私設定、檢舉、商家驗證、同意接收與品質規則會限制個人與商業訊息的使用方式。",
  "End-to-end encryption for personal messages and calls": "個人訊息與通話內容預設以端對端加密保護，只有通話或聊天參與者的裝置能讀取內容。",
  "Privacy controls": "設定誰能看到個人檔案、狀態、已讀標記、上線資訊或把你加入群組。",
  "Consent": "管理使用者是否同意被商家或服務主動聯絡，尤其影響商業訊息與範本訊息。",
  "Spam limits": "限制大量、重複或高風險訊息，降低垃圾訊息、詐騙與濫用觸及。",
  "Reporting/blocking": "讓使用者停止不想要的聯絡，並向平台檢舉垃圾訊息、詐騙、騷擾或違規內容。",
  "Business verification": "確認商家帳號與真實組織的關聯，增加客戶辨識官方商家的信任依據。",
  "Template rules": "規範商家主動傳送的範本訊息，包括類別、審核、品質與使用條件。",
  "Abuse prevention": "結合平台偵測、使用者控制、商家品質訊號與政策執行，降低濫用與詐騙。",
  "Boosts to channels and groups": "使用加成提升頻道或群組等級，解鎖或強化限時動態、表情、外觀與其他社群權益。",
  "Messaging to red packets to Pay": "聊天可以銜接紅包、轉帳與微信支付錢包動作，讓社交互動進入付款流程。",
  "Official accounts to mini programs": "公眾號可透過文章、服務訊息與選單把使用者導向小程式完成服務或購物。",
  "Mini programs to WeChat Pay": "小程式可在服務、購物、訂票或預約流程中呼叫微信支付完成交易。",
  "Channels/live to shopping": "視頻號與直播內容可帶動商品探索，並導向小程式、店鋪或可支付的商務流程。",
  "Moments to chats": "朋友圈貼文的按讚、留言與分享可延伸回私人聊天，形成朋友間的後續互動。",
  "OpenChat to topic discovery": "OpenChat 以主題聊天室、匿名個人檔案、搜尋與管理審核支援公開或半公開社群探索。",
  "Channels to voice/live": "Discord 頻道可延伸到語音、視訊、直播、Stage 活動與 Activities 等即時互動。",
  "Roles to permissions": "身分組與權限覆寫決定誰能查看頻道、發言、管理成員、安裝應用或執行指令。",
  "Nitro and boosts to perks": "Nitro、伺服器加成、訂閱、Premium Roles 與 Server Shop 產品會解鎖個人或社群權益。",
  "Events to engagement": "排程活動、Stage、Activities 與社群頻道把成員聚集到即時參與場景。",
  "Feed to groups and pages": "Facebook 動態把朋友、社團、粉絲專頁、Reels、活動與 Marketplace 內容導向對應目的地。",
  "Stories and Reels to DMs": "限時動態與 Reels 可觸發私訊回覆、分享、快速表情回應或商業訊息入口。",
  "Discovery to content": "Explore、Reels、搜尋、hashtag、音訊頁與推薦會把注意力導回創作者或品牌內容。",
  "Business profile to shopping": "專業帳號可串接型錄、商店、商品標籤、行動按鈕、洞察與轉換路徑。",
  "Creators to brand partnerships": "創作者與商業工具支援品牌合作內容、合作標籤、創作者市集、訂閱、禮物與徽章。",
  "For You to engagement": "For You 推薦會導向按讚、留言、分享、收藏、追蹤、轉發與個人檔案瀏覽。",
  "Engagement to recommendations": "觀看時間、重播、分享、收藏與留言等互動訊號會影響後續推薦排序。",
  "Product detail to cart": "商品詳情頁提供規格、款式、價格、賣家訊號、評價、優惠券與加入購物車/立即購買動作。",
  "Cart to checkout and payment": "購物車選品、優惠券、地址、配送、發票與支付寶結帳會組成購買前的確認流程。",
  "Payment to logistics and after-sales": "付款後訂單會進入賣家處理、物流追蹤、確認收貨、退款、退貨與售後支援。",
  "Seller chat to product decision": "買家可透過賣家或客服聊天詢問商品、尺寸、庫存、訂單與售後問題。",
  "Customer data to routing and personalization": "使用者、公司、事件、分群與屬性資料會影響客服路由、優先順序、目標受眾與個人化內容。",
  "Network to feed": "LinkedIn 的專業人脈圖譜會影響貼文、電子報、文章、影片、留言與轉貼的分發。",
  "Feed to opportunities": "動態與搜尋活動可導向職缺、公司頁、社團、創作者追蹤、廣告、訊息、銷售或招募機會。",
  "Recruiting to candidate outreach": "Recruiter 產品支援人才搜尋、候選人專案、InMail 觸及、備註、管線與 ATS 整合。",
};

const CONTEXTUAL_ITEM_TOOLTIP_DESCRIPTIONS = {
  "facebook|Groups & Communities|Group Types|Public groups": "公開社團可被搜尋與瀏覽，適合讓非成員先看見社團主題、貼文活動與加入入口。",
  "facebook|Groups & Communities|Group Types|Private groups": "私人社團會限制非成員可見內容，通常需要加入或通過審核後才能參與討論。",
  "facebook|Groups & Communities|Group Types|Buy/sell groups": "買賣社團聚焦商品刊登、價格詢問、買賣雙方溝通、取貨或出貨安排，而不是一般討論貼文。",
  "facebook|Groups & Communities|Group Types|Community groups": "社區型社團用於鄰里、校園、城市或興趣圈成員交流，重點是地方消息、互助與活動協調。",
  "facebook|Groups & Communities|Group Types|Learning/social groups": "學習或社交社團用來組織課程、主題分享、成員互動與長期知識討論。",
  "facebook|Groups & Communities|Participation|Posts": "社團貼文讓成員發起話題、提問、分享近況或發布社群資訊，是討論串的起點。",
  "facebook|Groups & Communities|Participation|Comments": "留言承接單篇社團貼文的討論，讓成員針對同一內容補充、詢問或回應。",
  "facebook|Groups & Communities|Participation|Polls": "社團投票用來收集成員選項，例如活動時間、偏好、決策或意見調查。",
  "facebook|Groups & Communities|Participation|Events": "社團活動把日期、時間、地點與參與狀態集中管理，方便成員報名或追蹤更新。",
  "facebook|Groups & Communities|Participation|Files": "社團檔案保存可供成員下載或參考的文件，例如規章、表單、教材或共享資料。",
  "facebook|Groups & Communities|Participation|Announcements": "社團公告會把重要貼文固定或提高可見度，讓管理員傳達規則、活動或關鍵更新。",
  "facebook|Groups & Communities|Administration|Admin tools": "管理員工具集中處理成員、貼文、規則、審核與社團設定，支援日常治理。",
  "facebook|Groups & Communities|Administration|Moderation": "社團管理審核用來移除違規內容、處理檢舉、控管衝突並維持討論品質。",
  "facebook|Groups & Communities|Administration|Membership questions": "入社問題在新成員申請時收集背景、需求或同意規則，協助管理員判斷是否核准。",
  "facebook|Groups & Communities|Administration|Rules": "社團規則明確列出允許與禁止的行為，作為管理員審核貼文和處理成員的依據。",
  "facebook|Groups & Communities|Administration|Post approvals": "貼文審核要求內容先由管理員檢查後才公開，適合高風險、公告型或大型社團。",
  "facebook|Groups & Communities|Administration|Insights": "社團洞察提供成員成長、互動、熱門內容與管理活動資料，協助調整營運方式。",
  "facebook|Groups & Communities|Growth|Invites": "邀請功能讓成員或管理員把可能感興趣的人帶進社團，擴大社群規模。",
  "facebook|Groups & Communities|Growth|Recommendations": "社團推薦把可能相關的社團推給使用者，依興趣、位置、人脈或活動訊號促成加入。",
  "facebook|Groups & Communities|Growth|Group discovery": "社團探索讓使用者透過搜尋、推薦或分類找到合適的社團。",
  "facebook|Groups & Communities|Growth|Badges": "社團徽章標示管理員、新成員、常見貢獻者等身分，幫助成員理解互動角色。",
  "facebook|Groups & Communities|Growth|Member requests": "成員請求集中處理待核准加入者，搭配問題回答、規則同意與管理員判斷。",
  "facebook|Groups & Communities|Growth|Community chats for eligible groups": "社團聊天室把成員帶到即時聊天空間，適合快速問答、活動協調或主題分流討論。",
  "facebook|Groups|Community|Discussion": "討論型社團讓成員圍繞共同興趣、問題或近況發文與留言，重點是主題交流與成員互動。",
  "facebook|Groups|Community|Buy/sell": "買賣社團用於刊登商品、詢價、買賣雙方溝通與交易安排，核心是商品交換而不是一般討論串。",
  "facebook|Groups|Community|Local groups": "在地社團聚焦鄰里、城市、校園或區域活動，常用於地方消息、互助、活動與生活資訊交換。",
  "facebook|Groups|Community|Moderation": "社團管理審核處理貼文、留言、成員與檢舉，協助管理員移除違規內容並維持討論品質。",
  "facebook|Groups|Community|Recommendations": "社團推薦把可能相關的群組推給使用者，依興趣、人脈、位置或互動訊號幫助找到可加入的社群。",
  "facebook|Events / Local|Local|Events": "Facebook 活動用於建立或探索具時間、地點、主辦方與回覆狀態的活動，方便使用者表示有興趣或參加。",
  "facebook|Events / Local|Local|Activities": "在地活動聚合附近可參與的休閒、社群或生活提案，重點是地點探索與當下可做的事。",
  "facebook|Events / Local|Local|Local tab": "在地分頁集中呈現附近活動、地點與社群推薦，讓使用者從同一入口探索周邊內容。",
  "facebook|Events / Local|Local|Community recommendations": "社群推薦依位置、共同興趣或朋友訊號提示相關社團與活動，協助使用者找到附近社群。",
  "whatsapp|Chat Core|Conversation types|1:1 chat": "一對一聊天是兩個帳號之間的私人訊息串，可傳送文字、媒體、語音訊息並延伸到語音或視訊通話。",
  "whatsapp|Chat Core|Conversation types|Replies": "回覆會把新訊息連回原本那一則聊天內容，讓接收者知道回應針對哪段文字、媒體或問題。",
  "whatsapp|Chat Core|Media|Photos": "相片可從相簿選取或即時拍攝後傳入聊天，通常可搭配說明文字再送出。",
  "whatsapp|Chat Core|Media|Videos": "影片可在聊天中傳送錄影或短片內容，用於分享現場畫面、教學、商品狀態或活動片段。",
  "whatsapp|Chat Core|Media|Documents": "文件傳送支援把 PDF、表格、簡報或其他檔案放進聊天，適合分享正式資料與工作附件。",
  "whatsapp|Chat Core|Media|Camera": "相機入口讓使用者直接拍照或錄影，快速把當下畫面送進目前對話。",
  "whatsapp|Chat Core|Media|Contacts": "聯絡人分享會把通訊錄中的姓名、電話或聯絡卡送入聊天，方便對方儲存或開啟聯絡。",
};

const CONTEXTUAL_ITEM_LABELS = {
  "facebook|Events / Local|Local|Activities": "在地活動",
};

const CONTEXT_SENSITIVE_ITEMS = new Set([
  "About",
  "Account",
  "Account recovery",
  "Account security",
  "Agent handoff",
  "Admin moderation",
  "Admin-only settings",
  "Admin roles",
  "Ads",
  "Analytics",
  "Announcements",
  "Announcement group",
  "Articles",
  "Activities",
  "Audit/policy controls",
  "Avatar",
  "Badges",
  "Block/report",
  "Business verification",
  "Camera",
  "Campaigns",
  "Cart",
  "Catalog",
  "Change number",
  "Channels",
  "Chat",
  "Checkout",
  "Collections",
  "Comments",
  "Community home",
  "Contacts",
  "Consent",
  "Description",
  "Delete account",
  "Discovery",
  "Documents",
  "End-to-end encryption for personal messages and calls",
  "Events",
  "Favorites",
  "Feed",
  "Files",
  "Followers",
  "Groups",
  "Help center",
  "Inbox",
  "Insights",
  "Invites",
  "Invite links",
  "Leads",
  "Media",
  "Member approval",
  "Member visibility controls",
  "Mentions",
  "Messages",
  "Moderation",
  "Mini Programs",
  "Notifications",
  "Official Accounts",
  "Orders",
  "Payments",
  "Payment protection",
  "Photos",
  "Polls",
  "Posts",
  "Privacy controls",
  "Privacy settings",
  "Products",
  "Profile",
  "Profile photo",
  "QR code",
  "Read receipts",
  "Recommendations",
  "Reporting/blocking",
  "Replies",
  "Report/block",
  "Reports",
  "Rules",
  "Search",
  "Secret chats",
  "Shop",
  "Status",
  "Spam limits",
  "Stories",
  "Support",
  "Support routing",
  "Template rules",
  "Two-step verification",
  "Abuse prevention",
  "Identity/security",
  "Verification",
  "Videos",
  "1:1 chat",
]);

const FEATURE_TOOLTIP_DESCRIPTIONS = {
  "iPad app availability varies by rollout": "WhatsApp iPad 版讓使用者在平板上讀寫聊天、接聽語音或視訊通話，並透過多裝置同步保留端對端加密。",
  "Wear OS where supported": "Wear OS 版讓使用者在手錶上讀取新訊息、回覆聊天、接收通話通知或使用語音相關操作。",
  "Passkeys where supported": "通行密鑰用裝置解鎖方式完成帳號登入驗證，減少只依賴簡訊碼的帳號存取風險。",
  "Voice message transcription where available by language/account": "語音訊息轉文字會把收到的語音內容轉成文字，方便在不能播放音訊時快速閱讀。",
  "Picture-in-picture where supported by device": "子母畫面讓視訊通話縮成浮動視窗，使用者可一邊通話一邊查看其他畫面。",
  "Video effects where supported by device/account": "視訊特效可在通話中加入濾鏡、背景或畫面效果，用來調整通話視覺呈現。",
  "Voice status where supported": "語音狀態讓使用者以短音訊發布 24 小時動態，讓聯絡人用聽的接收近況。",
  "Status mentions where supported": "狀態提及可在狀態更新中標記特定聯絡人，讓被提及者收到關聯通知或回到對話互動。",
  "Forward status content where allowed": "轉寄狀態內容可把可分享的狀態更新發送到聊天，讓更新內容從動態回到對話脈絡。",
  "Ads in Status (coming soon / rollout)": "狀態廣告把商家素材放在最新消息分頁的狀態版位，點擊後可導向商家內容或聊天入口。",
  "Business chat entry from Status ads (coming soon / rollout)": "從狀態廣告進入商家聊天，讓使用者看完廣告後直接向商家詢問、下單或取得支援。",
  "Promoted Channels (coming soon / rollout)": "推廣頻道會在頻道探索情境中提高曝光，協助品牌、創作者或媒體取得追蹤者。",
  "Rollout by region/account eligibility": "這個項目表示新版最新消息商業化版位需要經過帳號品質、政策與產品開放檢查後才會出現在使用者端。",
  "Phone number privacy for eligible communities": "社群手機號碼隱私會降低大型社群中成員彼此看見電話號碼的機會，減少陌生聯絡與騷擾。",
  "Channel analytics for eligible channels": "頻道分析提供觸及、觀看、追蹤者與互動表現，協助頻道管理者判斷內容效果。",
  "Optional forwarding controls where supported": "轉寄控制讓頻道或內容管理者限制更新被轉送的方式，降低內容被任意擴散的風險。",
  "Meta Verified for eligible businesses": "Meta Verified 會在商家檔案中提供驗證徽章與身分信任訊號，協助客戶辨識官方商家。",
  "Payments where supported by country": "付款功能讓客戶可在商家對話或訂單流程中完成付款、收據與後續交易確認。",
  "Multiple agents where eligible": "多客服協作讓同一商家帳號由多位人員處理客戶對話，支援分工、交接與回覆效率。",
  "Eligibility by country/account": "資格檢查會根據商家帳號、政策狀態與產品設定決定哪些商務工具可被啟用。",
  "Payments where supported by market": "付款整合把訂單、商品訊息與交易確認串到商家流程，讓客戶能從對話走到付款或售後。",
  "Product messages where supported": "商品訊息會把型錄商品以可互動卡片送到聊天中，讓客戶查看商品並回覆或下單。",
  "Pricing by market/category": "定價規則用市場與訊息類別計算商業對話費用，協助企業估算行銷、服務或驗證訊息成本。",
  "Meta AI chat where available by country/account": "Meta AI 聊天讓使用者主動開啟助理對話，用來提問、規劃、改寫文字或取得建議。",
  "Ask through search where available by country/account": "搜尋中的提問入口讓使用者直接用自然語言查詢，並把結果轉成可閱讀的 AI 回答。",
  "@Meta AI mention in supported chats": "@Meta AI 提及會在聊天中叫出助理，讓參與者針對當下問題取得回答或建議。",
  "Drafting support where available by language/account": "草稿協助會依使用者輸入產生訊息初稿，降低撰寫客服、銷售或日常訊息的時間。",
  "Tone rewriting where available by language/account": "語氣改寫會把既有文字調整成更正式、簡潔、友善或符合情境的版本。",
  "Message suggestions where available by account": "訊息建議根據對話內容產生可直接編輯的回覆，協助使用者更快完成答覆。",
  "Order help where supported": "訂單協助可回答訂單狀態、配送、付款或售後問題，並在需要時引導到客服交接。",
  "Availability varies by country/account": "Meta AI 入口控制會決定使用者在哪些聊天、搜尋或助理畫面可以叫出 AI。",
  "Advanced chat privacy affects AI/chat export behavior where supported": "進階聊天隱私會限制聊天被匯出或被 AI 功能取用的方式，讓敏感對話有更嚴格的資料邊界。",
  "Nearby/social signals where supported": "附近與社交訊號用位置、好友或互動線索推薦人、內容或服務，協助使用者發現周邊活動。",
  "Game payments where supported by market": "遊戲付款讓使用者在小遊戲中購買道具、服務或虛擬商品，並把交易接回錢包或支付流程。",
  "Transit cards where supported by city/region": "交通卡功能把城市交通票證或儲值卡放進錢包，支援搭乘與扣款紀錄管理。",
  "Insurance/wealth links where supported by region": "保險與理財入口把金融服務連到錢包，讓使用者查看產品、申請或管理相關帳務。",
  "Translation where supported": "翻譯可把聊天文字轉成使用者看得懂的語言，降低跨語言溝通成本。",
  "Chat folders where supported": "聊天資料夾把對話依工作、朋友、未讀或自訂分類整理，讓收件匣更容易掃描。",
  "Watch together features where supported": "一起看功能讓群組通話中的成員同步觀看影片或內容，形成共同觀看體驗。",
  "LINE Pay / wallet links where available by market": "LINE Pay 與錢包連結把官方帳號、優惠券、會員或商品流程導向付款與票券管理。",
  "LINE Pay / wallet services where available by market": "LINE Pay 與錢包服務用來管理付款、轉帳、票券、收據與金融服務入口。",
  "Transfers where available by market": "轉帳讓使用者在 LINE 錢包內向朋友或指定收款方移動款項並留下交易紀錄。",
  "Merchant payments where available by market": "商家付款讓使用者在線上或店內用 LINE 錢包支付，並把收據與優惠回到帳戶。",
  "Music/content services where supported by market": "音樂與內容服務把串流、訂閱或數位內容入口整合到 LINE 生態系。",
  "Subscriptions where supported by market": "訂閱讓使用者定期取得數位商品、貼圖、內容或商家服務，並由帳戶管理續訂狀態。",
  "Third-party recording bots where configured": "第三方錄音機器人可在伺服器設定允許時紀錄語音活動，常用於會議、社群活動或稽核流程。",
  "Moderator notes for supported moderation tools": "管理員備註讓版主記錄成員事件、違規脈絡或後續處理，方便團隊共同管理社群。",
  "Vanity URL for eligible servers": "自訂邀請網址讓社群使用易記的伺服器連結，提升品牌辨識與成員加入效率。",
  "Community chats for eligible groups": "社群聊天把 Facebook 社團成員帶到即時聊天空間，讓貼文之外也能進行快速討論。",
  "Checkout where eligible": "結帳讓買家在商品或商店流程中確認品項、地址、付款與訂單狀態。",
  "Marketplace checkout where eligible": "Marketplace 結帳讓買家在 Marketplace 交易中完成付款、運送與訂單追蹤。",
  "Returns for eligible checkout orders": "退貨流程讓完成結帳的訂單進入退款、寄回、審核或售後處理。",
  "Purchase protection for eligible orders": "購買保障用來處理未收到商品、描述不符或退款爭議，降低平台交易風險。",
  "Subscriptions for eligible creators": "創作者訂閱讓粉絲定期付費支持，並取得專屬內容、徽章或社群權益。",
  "Verification for eligible accounts": "帳號驗證用徽章或驗證流程顯示身分可信度，降低假冒與詐騙風險。",
  "Scheduling for eligible accounts": "排程發布讓專業帳號預先安排貼文、Reels 或內容上線時間，方便管理內容節奏。",
  "Remix where supported": "Remix 讓使用者基於既有 Reels 或內容進行並排、回應或二創，形成參與式創作。",
  "Badges for eligible creators": "徽章讓粉絲在直播或互動中付費支持創作者，並在畫面上顯示支持者身分。",
  "Vanish mode where supported": "閱後即焚模式讓私訊內容在看過或離開聊天後消失，適合短暫或低留存的對話。",
  "Checkout on Instagram where eligible": "Instagram 結帳讓購物流程留在 Instagram 內完成，包含商品確認、付款與訂單管理。",
  "Creator marketplace where available for professional accounts": "創作者市集協助品牌尋找、聯繫與管理合作創作者，支援商業合作配對。",
  "Shop ads where eligible": "商店廣告把商品或商店內容投放到 Instagram 版位，導向商品詳情、商店或購買流程。",
  "Bonuses for eligible creators": "創作者獎勵用平台活動或內容表現提供收益，鼓勵持續創作與互動。",
  "Gifts for eligible creators": "禮物讓粉絲在內容或直播情境中向創作者送出付費支持，轉成創作者收入。",
  "LIVE to gifts and shopping where available by market": "LIVE 可把即時互動連到禮物、商品展示、優惠與購買入口，讓觀看行為直接轉成支持或交易。",
  "TikTok Shop to product links and checkout where available by market": "TikTok Shop 串接商品連結、櫥窗、購物車、結帳、訂單、退貨與客服，形成站內交易流程。",
  "Stories where supported": "Stories 是短時間曝光的內容格式，適合發布生活片段、活動提醒或限時互動。",
  "Series for eligible creators": "Series 讓創作者把多集內容打包成付費或系列化產品，方便粉絲按主題連續觀看。",
  "Location where supported": "位置標記把內容連到地點脈絡，協助搜尋、推薦與在地探索。",
  "Friends feed where supported": "Friends feed 聚合朋友或互相關注帳號的內容，強化熟人關係下的觀看與互動。",
  "Shop feed where available by market": "Shop feed 把可購買商品、店鋪與內容集中到購物探索頁，讓使用者從瀏覽進入購買。",
  "Location signals where supported": "位置訊號把地點、城市或周邊活動納入推薦與趨勢判斷，提升在地內容相關性。",
  "Q&A for eligible creators": "Q&A 讓觀眾提出問題，創作者可用文字或影片回覆並沉澱成公開互動內容。",
  "Stickers/polls where supported": "貼紙與投票讓內容加入輕量互動，收集觀眾回應並提高留言或參與率。",
  "Group chats where supported": "群組聊天讓多位使用者在 TikTok 私訊中分享影片、討論內容或延伸社交互動。",
  "Bulletin Board for eligible creators": "Bulletin Board 讓創作者向粉絲發送公告型更新，適合發布活動、內容提醒或社群訊息。",
  "LIVE replays where supported": "LIVE replay 會保存直播回放，讓觀眾在直播後仍能觀看內容或商品介紹。",
  "TikTok Shop where available by market": "TikTok Shop 讓商品在影片、直播、櫥窗與商店頁中被發現、加入購物車並完成訂單。",
  "Checkout where available by market": "結帳流程處理收件資料、優惠、付款、訂單確認與後續客服銜接。",
  "Shop ads where available by market": "Shop ads 把商品、直播或店鋪投放到 TikTok 廣告版位，導向站內購物行為。",
  "AI try-on where supported": "AI 試穿用視覺模型預覽商品穿戴效果，降低尺寸、顏色或搭配的不確定性。",
  "Installments where supported": "分期付款把訂單金額拆成多期支付，降低一次性付款壓力並保留交易紀錄。",
  "Cross-border shipping by seller/market": "跨境運送處理海外倉、清關、物流追蹤與配送承諾，讓買家看見跨市場履約狀態。",
  "WhatsApp where integrated": "WhatsApp 整合把 Intercom 對話收進收件匣，客服可在同一工作區處理 WhatsApp 客戶訊息。",
  "Side conversations where supported by plan": "旁支對話讓客服在不打斷主對話的情況下向同事或外部窗口詢問細節。",
  "Versioning where supported by workspace/plan": "版本管理保留說明內容的修訂紀錄，讓團隊追蹤更新、回復或審核文章變更。",
  "Checklists in Messenger where supported by plan": "Messenger 清單把導覽步驟放進客戶訊息介面，協助使用者完成設定、啟用或教學流程。",
  "A/B tests where supported by plan": "A/B 測試比較不同訊息、活動或體驗版本的效果，協助團隊選擇更好的轉換設計。",
  "Verification for eligible profiles": "個人檔案驗證用身分或組織信任訊號提高專業可信度，協助他人判斷帳號真實性。",
  "InMail for eligible plans": "InMail 讓使用者向尚未建立連線的 LinkedIn 成員發送私人訊息，常用於招募、銷售與商務開發。",
  "Voice/video links where supported": "語音或視訊連結把 LinkedIn 訊息延伸到即時會議工具，方便從文字溝通轉成同步對話。",
  "LinkedIn Live for eligible members/pages": "LinkedIn Live 讓會員或專頁直播活動、訪談或產品內容，並在專業社群中即時互動。",
  "Collaborative articles where supported": "協作文章彙整 AI 產生的主題與會員貢獻，讓專業知識透過多人補充形成內容頁。",
  "Salary insights where available by market": "薪資洞察把職缺、地區與市場資料轉成薪酬參考，協助求職者評估工作機會。",
  "Application status where supported by job poster": "應徵狀態讓求職者查看申請進度，並接收雇主或招募方更新。",
  "Diversity insights where supported by product/region": "多元洞察協助招募團隊檢視人才池、觸及與流程中的代表性指標。",
  "Relationship maps for eligible plans": "關係圖把目標帳戶中的決策者、影響者與關係路徑視覺化，支援 B2B 銷售推進。",
  "TeamLink for eligible plans": "TeamLink 利用公司同事的人脈找出共同連結，協助銷售取得暖介紹。",
  "Product Pages for eligible industries": "產品頁讓公司展示軟體或服務產品，集中呈現功能、客戶、評論與導流入口。",
  "Sponsored Messaging / Message Ads for eligible campaigns": "Sponsored Messaging 與 Message Ads 會把付費訊息投放到 LinkedIn 訊息情境，用於活動邀請、內容下載或潛在客戶開發。",
  "A/B tests where supported": "A/B 測試比較不同受眾、素材、標題或表單版本，找出更高效的投放組合。",
  "Brand lift for eligible campaigns": "品牌提升研究用調查或實驗衡量廣告對知名度、好感或購買意圖的影響。",
};

const GROUP_TOOLTIP_DESCRIPTIONS = {
  "AI support": "Customer-facing AI support answers, summarizes, or routes conversations using approved help content, context, and handoff rules.",
  "API": "Developer API capabilities for webhooks, rich messages, profile access, account linking, statistics, or automated replies.",
  "Access": "Login, device, account, or workspace access settings that determine where the surface can be used.",
  "Account and setup": "Business account configuration such as phone numbers, display names, permissions, verification, and quality controls.",
  "Account security": "Account-protection controls such as two-step verification, passkeys, alerts, account recovery, and trusted device review.",
  "Actions": "Primary user actions available from the surface, such as saving, sharing, buying, chatting, or following.",
  "Admins": "Administrator roles and permissions for managing members, content, settings, or community behavior.",
  "Ads": "Paid distribution products and campaign surfaces with official placement, objective, targeting, and eligibility rules.",
  "Affiliate": "Creator, seller, or partner marketplace mechanics for promoting products and tracking commission or samples.",
  "Announcements": "One-to-many updates controlled by admins or organizations for members, followers, or customers.",
  "App platform": "Discord app-platform features such as app installs, commands, OAuth, activities, permissions, and webhooks.",
  "Assistance": "Assistant-style help for search, comparison, planning, recommendations, product help, or support triage.",
  "Assistant": "Meta AI assistant entry points where supported, including chat, search, mention, recommendation, and planning prompts.",
  "Audience": "Follower, subscriber, viewer, or privacy mechanics that define who can see or respond to a post or update.",
  "Automation": "Configured automated behavior such as bots, workflows, greetings, away messages, routing, replies, or moderation.",
  "Basic automation": "Business app automations for greetings, away messages, quick replies, labels, and supported linked-device operations.",
  "Boost connection": "Telegram boosts connect Premium-backed support to channel story posting levels and other boosted-channel perks.",
  "Bots and routing": "Bot, routing, FAQ, escalation, handoff, and analytics patterns for scaled business or support conversations.",
  "Brand and creator use": "Publisher, creator, organization, or brand communication features such as admin roles, analytics, and announcements.",
  "Business Profile": "Business-facing profile fields and trust cues such as photos, description, location, hours, website, category, and verification.",
  "Business impact": "The product outcome supported by governance controls, such as abuse reduction, account protection, policy boundaries, and trust.",
  "Business surface": "Official Account or business-profile surfaces where brands publish, support customers, and expose service or commerce entry points.",
  "CRM": "Customer relationship systems that store lead, account, ownership, profile, and conversation context.",
  "CRM/helpdesk integrations": "Connections that move conversation context into CRM, inbox, helpdesk, support, sales, or enrichment systems.",
  "Call entry points": "Places where a call can be started or rejoined, such as headers, tabs, links, scheduled calls, or joinable calls.",
  "Cart": "Cart state for selected items, variants, quantities, coupons, promotions, and store grouping before checkout.",
  "Cases": "Ticket or case records for ownership, status, escalation, and structured customer-resolution work.",
  "Catalog": "Business catalog and storefront objects such as collections, product pages, catalog links, carts, and order messages.",
  "Channel privacy": "Privacy boundaries between channel admins, followers, forwarding, and phone-number identity.",
  "Channels": "One-to-many update or publishing surfaces for creators, brands, publishers, communities, or public audiences.",
  "Chat": "Private or business messaging surfaces used for buyer-seller, Page, group, media, and call follow-up conversations.",
  "Chat attachment": "Group or supergroup mechanics attached to chat, such as files, polls, voice/video, and bot moderation.",
  "Checkout": "Checkout steps such as address, coupons, shipping, payment, invoice, and order confirmation.",
  "Commerce": "Shopping, service, coupon, payment, product, checkout, or order flows supported by the app’s official commerce tools.",
  "Commerce hooks": "Instagram product tagging and catalog hooks that connect posts, Reels, Stories, shops, and product detail paths.",
  "Communities": "Community or group surfaces used for professional, topic, fan, or member discussion and networking.",
  "Community": "Topic, member, or group community mechanics such as rooms, discovery, profiles, rules, and moderation.",
  "Community structure": "A larger community container that bundles related groups, announcement spaces, join requests, and admin tools.",
  "Community tools": "Group or supergroup tools such as members, admins, topics, permissions, moderation, and bot controls.",
  "Connections": "App, CRM, product, billing, order, API, and webhook integrations used to sync operational context.",
  "Contacts": "Contact discovery, sync, QR, invite, business discovery, sharing, and blocking mechanics.",
  "Container": "The top-level community/workspace/server object that holds members, roles, rules, channels, and workflows.",
  "Content": "Posts, video, live, creator, brand, article, or help content published into the app’s official surfaces.",
  "Content commerce": "Product discovery through live selling, demos, creator content, coupons, and limited-time offers.",
  "Control": "Permission and access-control rules that determine who can view, moderate, install, or use a surface.",
  "Conversation": "Core conversation mechanics such as 1:1 messages, group chat, replies, media, calls, or outreach.",
  "Conversation types": "The main chat formats and message actions carried by the messaging core.",
  "Conversion": "Paths from content or shopping surfaces to a business outcome such as checkout, website click, seller message, or lead.",
  "Conversion role": "How a discovery or content surface sends users toward profiles, shops, DMs, LIVE, checkout, or other destinations.",
  "Creation": "Creator tooling for sounds, effects, editing, publishing, and remix formats.",
  "Cross-cutting Layer": "Rules and controls that apply across multiple product areas rather than one feature alone.",
  "Customer channel": "Business-facing customer chat or service channel exposed through an official account or support surface.",
  "Customer service": "Support conversations for product questions, availability, order help, sizing, refunds, or after-sales issues.",
  "Data": "Customer, company, event, segment, and attribute data used for context, routing, automation, and reporting.",
  "Decision data": "Product-detail evidence such as specs, variants, price, reviews, seller ratings, and service promises.",
  "Delegated replies": "Business-connected bots delegated to answer, capture leads, route support, or escalate conversations.",
  "Demand creation": "Search, recommendations, deals, feeds, short video, live, and campaigns that create product demand.",
  "Discovery": "Search, recommendation, directory, feed, Explore, local, or content surfaces that help people find things.",
  "Discussion and money": "Channel-linked discussion, ads, paid media, Stars, and other creator monetization mechanics.",
  "Distribution": "Audience, forwarding, discovery, sponsored-message, ranking, or paid-distribution mechanics.",
  "E-commerce backend": "Commerce systems that manage product, checkout, order, returns, refunds, and customer-account state.",
  "Formats": "Supported content types such as posts, articles, videos, documents, polls, short video, live, or stories.",
  "Governance": "Policy, audit, permission, compliance, testing, or moderation controls that supervise use of the feature.",
  "Graph": "The network model of connections, followers, companies, skills, work history, and routing signals.",
  "Group activities": "Shared coordination features inside group or community conversations, such as polls, events, pins, announcements, and calls.",
  "Group chats": "Group identity, invites, mentions, shared media/files, search, and membership entry points.",
  "Helpdesk": "Support systems that manage tickets, assignments, SLAs, escalations, and knowledge-base links.",
  "Hiring": "Job posts, applications, recruiter workflows, candidate discovery, and hiring conversion mechanics.",
  "Identity": "Account, profile, phone, username, professional, or social identity fields that make the user or organization recognizable.",
  "In-call tools": "Controls available during live calls, such as mute, speaker, screen share, reactions, participants, and low-data mode.",
  "Inbox state": "Conversation timeline, customer profile, assignment, priority, SLA, team inbox, notes, tags, queues, and handoff state.",
  "Inputs": "Signals that feed a ranking or discovery surface, such as friends, pages, groups, events, reels, and marketplace behavior.",
  "Integration": "How merchant, payment, official-account, mini-program, CRM, API, or backend systems connect to the surface.",
  "Integrations": "External systems linked through bots, apps, webhooks, CRM, support, alerts, analytics, or commerce experiments.",
  "Inventory and logistics": "Operational systems for stock availability, shipping, fulfillment, delivery updates, pickup, and after-sales workflows.",
  "Key Flows": "Module-to-module relationships represented by the overview and interaction map.",
  "Knowledge": "Help Center, article, collection, answer source, and content-gap data used by agents, AI, and self-service.",
  "Labels": "Business chat labels and filtering used to organize customers, sales stages, support queues, and follow-up work.",
  "Lead capture": "Structured lead forms and prefilled profile data used to route campaign leads to CRM or sales workflows.",
  "Lightweight sharing": "Low-friction update sharing outside the core inbox, with audience controls, muted updates, and viewed states.",
  "Live": "Live interaction surfaces such as streaming, gifts, live shopping, Q&A, moderation, and creator events.",
  "Live spaces": "Voice, video, stage, event, and screen-share spaces used for real-time participation.",
  "Local": "Local discovery, events, nearby activities, community recommendations, and place-based signals.",
  "Logistics": "Fulfillment, shipping, tracking, carrier updates, delivery, pickup, and confirmation state.",
  "Measurement": "Reporting for account growth, campaign results, support metrics, creator/business insights, or ad performance.",
  "Media": "Photos, videos, files, voice/video messages, contacts, location, documents, or other attachments.",
  "Menu actions": "Rich menu actions that turn a business chat into structured navigation for coupons, products, reservations, mini apps, or support.",
  "Messaging": "Business, support, API, DM, or customer messaging functions, including replies, routing, account linking, and rich message types.",
  "Messaging API": "API-level send, receive, media, interactive message, list, location request, and read-receipt capabilities.",
  "Mini Games": "Weixin lightweight game surfaces with social sharing, discovery, and supported payments.",
  "Moderation": "Admin, report, rule, spam, content, permission, and join-control tools that keep communities manageable.",
  "Monetization": "Revenue features such as subscriptions, boosts, Stars, paid media, tips, ads, creator revenue, or paid posts.",
  "Monetization hooks": "Paid or promotional placements attached to update surfaces where officially supported or in rollout.",
  "Notifications": "Message, group, mention, mute, preview, and call notification controls.",
  "One-to-many updates": "Broadcast-style channel updates distributed from admins or publishers to followers.",
  "Operations": "Business, seller, support, account, or content operations such as publishing, analytics, service, inventory, and campaign work.",
  "Order/payment integrations": "Orders, payments, product messages, commerce events, policy enforcement, and market/category pricing.",
  "Orders": "Post-payment order state, seller processing, receipts, notifications, and customer-visible status.",
  "Organization": "Company or Page presence for brand identity, jobs, posts, followers, and audience engagement.",
  "Outbound": "Proactive email, push, in-app, banner, survey, campaign, post, or chat messages.",
  "Outcomes": "Downstream professional outcomes such as recruiting, sales, partnership, support, or relationship follow-up.",
  "Page inbox": "Company Page or business inbox conversations for service inquiries and lead follow-up.",
  "Payments": "Official payment, refund, receipt, security, installment, QR, merchant, or checkout mechanisms.",
  "Payments and analytics": "Payment providers, marketing automation, attribution, campaign analytics, and data export systems.",
  "Perks": "Subscription, boost, server shop, premium role, upload, banner, emoji, or access benefits.",
  "Phone identity": "Phone-number identity and verification paths used to create, recover, change, or delete an account.",
  "Platform role": "How bots, mini apps, services, and automation connect back into the app’s platform layer.",
  "Presence": "Public brand, account, creator, page, or profile presence with visible identity and publishing fields.",
  "Privacy boundary": "Limits around what AI, admins, followers, or integrations receive and how privacy settings affect export or use.",
  "Private loops": "Private engagement loops such as story replies, quick reactions, post/reel shares, notes, and mentions.",
  "Private rooms": "Private group-room features such as members, media, albums, polls, events, and announcements.",
  "Product Areas": "Major product surfaces represented by nodes in the interaction map or feature taxonomy.",
  "Product/support assistance": "AI or assistant support for catalog guidance, order help, support triage, handoff, and response suggestions.",
  "Products": "Monetized products such as subscriptions, boosts, premium roles, shop products, and one-time purchases.",
  "Profile": "Visible user, business, or shopper profile information and account presentation controls.",
  "Profile context": "Creator or business profile context such as posts, Reels, stories, bio links, follow state, highlights, and contact buttons.",
  "Profile tools": "Business-profile tools such as opening hours, location, start page, quick replies, and introductory settings.",
  "Public following": "Follower, search, directory, link, country-filtered discovery, and public-list mechanics.",
  "Publishing": "Official publishing controls for posts, broadcasts, articles, stories, schedules, admin roles, and media.",
  "Purchase flow": "Product detail, cart, checkout, order, and customer-service steps in a transaction path.",
  "Quality signal": "Credibility signals such as company context, verification, recommendations, open-to-work, or professional history.",
  "Quick Replies": "Saved or reusable reply tools, action buttons, greeting/away messages, and response shortcuts.",
  "Ranking": "Recommendation and prediction systems that feed discovery, shop surfaces, creator reach, and engagement likelihood.",
  "Receipts and state": "Delivery, read, typing, presence, message-info, last-seen, and online state indicators.",
  "Replies": "Ways updates, Status, stories, or posts route back into conversations through replies, reactions, mentions, or shares.",
  "Resolution": "After-sales resolution workflows such as refunds, returns, exchanges, disputes, reviews, warranty, and buyer protection.",
  "Routing role": "How a graph or data layer routes attention toward content, messaging, jobs, sales, or recruiting.",
  "Runtime": "Embedded web, mini app, service, game, form, utility, commerce, or booking runtime inside the host app.",
  "Runtime role": "How the chat core hosts groups, publishes to channels, launches mini apps, accepts bots, or opens business surfaces.",
  "Safety": "Reporting, privacy, forwarding, blocking, age, keyword, host, or moderation controls for safer use.",
  "Sales": "Lead search, account lists, company data, buyer signals, outreach, and account-based sales workflow.",
  "Search": "Search entry points for content, official accounts, services, products, creators, effects, hashtags, or mini programs.",
  "Search and organization": "Finding, filtering, pinning, starring, archiving, and organizing conversations or history.",
  "Search/help": "AI search/help answers for FAQs, product discovery, recommendations, and support guidance.",
  "Seller Inbox": "Manual customer conversation tools for small-business sales, support, context, ads, and eligible multi-agent work.",
  "Seller operations": "Seller Center operations such as products, pricing, orders, fulfillment, campaigns, and shop performance.",
  "Seller presence": "Seller storefront identity, collections, promotions, followers, and product presentation.",
  "Service entry": "Ways chat opens official accounts, mini programs, social surfaces, payments, and service experiences.",
  "Service flow": "Embedded service flow actions such as authorization, payment, notification, home shortcut, and reservation.",
  "Service role": "How official accounts or chat surfaces route into CRM, menus, mini program links, support, or wallet/shopping.",
  "Sessions and devices": "Logged-in device surfaces and session review for web, desktop, companion, tablet, and supported wearable access.",
  "Shared sessions": "Shared activities such as games, co-watching, interactive apps, and voice-context experiences.",
  "Sharing": "How mini apps, media, outputs, channel posts, or service results are shared back into chats or groups.",
  "Shop": "Official shopping surfaces such as catalogs, product links, product showcases, checkout, orders, returns, or customer service.",
  "Shopping profile": "Buyer account data such as addresses, favorites, order history, coupons, and shopping preferences.",
  "Signals": "Behavioral, social, interest, purchase, or engagement signals used for ranking, personalization, and routing.",
  "Status posts": "Ephemeral photo, video, text, or voice updates with a selected audience and privacy controls.",
  "Stories": "Time-limited updates with privacy, replies, reactions, profile/archive surfaces, and boosted-channel mechanics where supported.",
  "Structured discussion": "Forum, Q&A, topic, and knowledge-thread surfaces for persistent community discussion.",
  "Sync": "CRM or account-data synchronization for leads, accounts, pipelines, sales workflows, and lead forms.",
  "Teammates": "Human support team roles, permissions, internal notes, and handoff behavior.",
  "Templates": "Approved business message templates, categories, review, opt-in, quality, and eligibility rules.",
  "Text surfaces": "Persistent text areas such as messages, threads, announcements, pins, forums, and media posts.",
  "Topic-based hub": "Community-level grouping for related member groups, topic coordination, community info, and member group lists.",
  "Transaction": "Service forms, checkout, payment initiation, order status, confirmation, and return-to-service behavior.",
  "Trust and safety": "Privacy, integrity, account, moderation, policy, compliance, and reporting controls across the app.",
  "Video calls": "Video calling options, group video calls, camera switching, supported effects, and picture-in-picture support.",
  "Voice calls": "Audio call types and states, including 1:1, group, history, callback, and missed-call notifications.",
  "Voice notes": "Asynchronous audio messaging tools such as playback speed, supported transcription, hands-free recording, and forwarding.",
  "Wallet": "Wallet balance, cards, bills, transaction history, payment services, and supported financial-service links.",
  "Webhooks": "Event, status, routing, bot, handoff, service-window, and analytics callbacks.",
  "WhatsApp Flows": "Native in-chat forms and screens used to collect information or complete structured customer tasks.",
  "Where it applies": "The product areas governed by the trust, privacy, policy, or control plane.",
  "Writing support": "AI writing assistance such as drafting, tone rewriting, suggestions, and creative prompts where supported.",
};

function stripAvailabilityQualifier(value) {
  return String(value)
    .replace(/^Eligibility by .+$/i, "Eligibility rules")
    .replace(/^Availability varies by .+$/i, "Feature entry controls")
    .replace(/\s+availability varies by rollout$/i, "")
    .replace(/\s+where (?:available|supported)(?: by [a-z/ -]+)?$/i, "")
    .replace(/\s+where (?:configured|allowed|integrated)$/i, "")
    .replace(/\s+for eligible [a-z/ -]+$/i, "")
    .replace(/\s+\(coming soon \/ rollout\)$/i, "")
    .trim();
}

function stripTooltipAvailabilityPhrases(value) {
  return String(value)
    .replace(/實際名稱與可用性會依[^。]+而異。?/g, "")
    .replace(/\s*where (?:available|supported)(?: by [^,.。;；]*)?/gi, "")
    .replace(/\s*where (?:configured|allowed|integrated)/gi, "")
    .replace(/\s*for eligible [^,.。;；]*/gi, "")
    .replace(/\s*\(coming soon \/ rollout\)/gi, "")
    .replace(/符合資格的/g, "已啟用的")
    .replace(/開放時/g, "已啟用時")
    .replace(/支援時/g, "已啟用時")
    .replace(/，?依(?:地區|國家|市場|帳號|方案|分階段推出狀態|語言|裝置|工作區|產品)[^。；;,.]*(?:而定|不同|開放|可用|支援|提供情況|啟用情況)/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([。；，、,.])/g, "$1")
    .trim();
}

function localizeTooltipText(value) {
  const text = String(value);
  const localized = /[\u4e00-\u9fff]/.test(text) ? text : localizeText(text);
  return stripTooltipAvailabilityPhrases(localized);
}

function contextualDescriptionKey(item, heading, area = null) {
  return [activeApp.id, area?.title || "Overview", heading, item].join("|");
}

function getDirectChipDescription(item, heading, area = null) {
  const contextualDescription = CONTEXTUAL_ITEM_TOOLTIP_DESCRIPTIONS[contextualDescriptionKey(item, heading, area)];
  if (contextualDescription) return localizeTooltipText(contextualDescription);

  const cleanItem = stripAvailabilityQualifier(item);
  const shouldUseContext = area && CONTEXT_SENSITIVE_ITEMS.has(cleanItem);
  const itemDescription = ITEM_TOOLTIP_DESCRIPTIONS[item] || ITEM_TOOLTIP_DESCRIPTIONS[cleanItem];
  if (itemDescription && !shouldUseContext) return localizeTooltipText(itemDescription);

  const exactDescription = FEATURE_TOOLTIP_DESCRIPTIONS[item] || FEATURE_TOOLTIP_DESCRIPTIONS[cleanItem];
  if (exactDescription && !shouldUseContext) return localizeTooltipText(exactDescription);

  if (heading === "Key Flows") {
    const flowDescription = FLOW_TOOLTIP_DESCRIPTIONS[activeApp.id]?.[item];
    if (flowDescription) return localizeTooltipText(flowDescription);
  }

  if (activeApp.id === "whatsapp" && WHATSAPP_FEATURE_DESCRIPTIONS[item] && !shouldUseContext) {
    return localizeTooltipText(WHATSAPP_FEATURE_DESCRIPTIONS[item]);
  }

  return null;
}

function buildFlowChipDescription(item) {
  const architectureFlow = findArchitectureFlowByItem(item);
  if (architectureFlow) {
    const sourceLabel = localizeText(architectureFlow.source);
    const targetLabel = localizeText(architectureFlow.target);
    const relationLabel = architectureFlow.label ? localizeText(architectureFlow.label) : localizeText("connects to");
    return `${sourceLabel}透過「${relationLabel}」連到${targetLabel}，表示${localizeText(activeApp.name)}架構圖中的模組依賴、資料交接或功能調用。`;
  }

  const flowDescription = FLOW_TOOLTIP_DESCRIPTIONS[activeApp.id]?.[item];
  if (flowDescription) return localizeTooltipText(flowDescription);
  return `${localizeText(stripAvailabilityQualifier(item))} 串接${localizeText(activeApp.name)}的多個產品模組，呈現架構層之間的依賴與交接。`;
}

const ARCHITECTURE_FLOW_EXCLUDED_EDGE_KINDS = new Set(["trust"]);

const WHATSAPP_ARCHITECTURE_EDGES = [
  { source: "Account & Devices", target: "Chat Core", label: "enables" },
  { source: "Chat Core", target: "Groups & Communities", label: "hosts" },
  { source: "Chat Core", target: "Calls", label: "launches" },
  { source: "Chat Core", target: "Status / Updates", label: "opens/replies into" },
  { source: "Groups & Communities", target: "Community Spaces", label: "organizes" },
  { source: "Status / Updates", target: "Channels", label: "broadcasts/follows" },
  { source: "Business Conversation Layer", target: "Chat Core", label: "adds merchant tools" },
  { source: "Business Platform", target: "Business Conversation Layer", label: "customer messages" },
  { source: "Business Platform", target: "External Business Systems", label: "integrates with" },
  { source: "Meta AI", target: "Chat Core", label: "user-invoked assistance" },
  { source: "Meta AI", target: "Business Conversation Layer", label: "support assist" },
];

function architectureFlowItem(source, target, label = "") {
  return `${source} → ${target}${label ? ` · ${label}` : ""}`;
}

function architectureFlowItemForEdge(edge, app = activeApp) {
  const source = app.mapNodes?.find((node) => node.id === edge.source)?.title || edge.source;
  const target = app.mapNodes?.find((node) => node.id === edge.target)?.title || edge.target;
  return architectureFlowItem(source, target, edge.label);
}

function getArchitectureFlowItems(app = activeApp) {
  if (app.mapNodes && app.mapEdges) {
    return app.mapEdges
      .filter((edge) => !ARCHITECTURE_FLOW_EXCLUDED_EDGE_KINDS.has(edge.kind))
      .map((edge) => architectureFlowItemForEdge(edge, app));
  }
  if (app.id === "whatsapp") {
    return WHATSAPP_ARCHITECTURE_EDGES.map((edge) => architectureFlowItem(edge.source, edge.target, edge.label));
  }
  return app.flows || [];
}

function findArchitectureFlowByItem(item) {
  if (activeApp.mapNodes && activeApp.mapEdges) {
    const edge = activeApp.mapEdges
      .filter((candidate) => !ARCHITECTURE_FLOW_EXCLUDED_EDGE_KINDS.has(candidate.kind))
      .find((candidate) => architectureFlowItemForEdge(candidate) === item);
    if (!edge) return null;
    return {
      source: activeApp.mapNodes.find((node) => node.id === edge.source)?.title || edge.source,
      target: activeApp.mapNodes.find((node) => node.id === edge.target)?.title || edge.target,
      label: edge.label,
    };
  }

  if (activeApp.id === "whatsapp") {
    return WHATSAPP_ARCHITECTURE_EDGES.find((edge) => architectureFlowItem(edge.source, edge.target, edge.label) === item) || null;
  }

  return null;
}

function findChipContext(item, heading) {
  const areas = activeApp.mapNodes || activeApp.clusters || [];
  for (const area of areas) {
    const match = (area.groups || []).find(([groupHeading, groupItems]) => (
      groupHeading === heading && groupItems.includes(item)
    ));
    if (match) {
      return { area, heading: match[0], items: match[1] };
    }
  }
  return null;
}

function buildContextualChipDescription(item, heading, area = null) {
  const context = area ? { area, heading, items: [] } : findChipContext(item, heading);
  return stripTooltipAvailabilityPhrases(getContextualFeatureAction(item, heading, context));
}

function getContextualFeatureAction(item, heading, context) {
  const cleanItem = stripAvailabilityQualifier(item);
  const itemText = cleanItem.toLowerCase();
  const contextText = `${cleanItem} ${heading}`.toLowerCase();
  const headingLabel = localizeText(stripAvailabilityQualifier(heading));
  const featureLabel = localizeText(cleanItem);
  const rawAreaTitle = context?.area?.title || activeApp.hub;
  const areaLabel = localizeText(rawAreaTitle);
  const appLabel = localizeText(activeApp.name);
  const scopedAreaLabel = areaLabel.includes(appLabel) ? areaLabel : `${appLabel} ${areaLabel}`;
  const scopeLabel = rawAreaTitle === "Overview"
    ? `${appLabel}總覽`
    : rawAreaTitle === "Trust / Privacy / Policy"
      ? `${appLabel}信任與政策視圖`
      : scopedAreaLabel;

  if (heading === "Business impact") {
    if (cleanItem === "Reduces abuse") {
      return `${appLabel}透過檢舉、限制、偵測與管理工具降低垃圾訊息、詐騙、騷擾或違規使用。`;
    }
    if (cleanItem === "Protects accounts") {
      return `${appLabel}用登入驗證、裝置檢查、隱私控制或權限規則降低帳號被盜與未授權操作。`;
    }
    if (cleanItem === "Sets policy boundaries") {
      return `${appLabel}以平台規則界定內容、商業訊息、資料使用與社群治理的可接受範圍。`;
    }
    if (cleanItem === "Supports monetization eligibility") {
      return `${appLabel}用帳號品質、合規狀態、內容規範或交易紀錄判斷是否能使用變現工具。`;
    }
    if (cleanItem === "Improves customer confidence") {
      return `${appLabel}透過可辨識身分、交易透明度、回覆紀錄與安全控制提升使用者或客戶信任。`;
    }
  }

  if (/block\/report|report\/block|blocked|blocking|report abuse|reporting\/blocking/.test(itemText)) {
    return `${featureLabel}讓${appLabel}使用者停止不想要的聯絡或內容，並在${scopeLabel}中把垃圾訊息、詐騙、騷擾或違規行為送交審查。`;
  }

  if (/^media$|^media and attachments$/.test(itemText)) {
    return `${featureLabel}承載${scopeLabel}中的圖片、影片、檔案、語音或其他附件，讓對話不只依賴純文字。`;
  }

  if (/^(.+ )?photo(s)?$|^image(s)?$|picture(s)?/.test(itemText)) {
    return `${featureLabel}承接${scopeLabel}中的靜態圖片分享、發布或展示，可搭配說明文字、標記或編輯效果。`;
  }
  if (/^video(s)?$|short video|reels|clips?/.test(itemText)) {
    return `${featureLabel}承載${scopeLabel}中的動態影音內容，適合教學、商品展示、娛樂短片或活動紀錄。`;
  }
  if (/^document(s)?$|^files?$|pdf|attachment/.test(itemText)) {
    return `${featureLabel}處理${scopeLabel}中的可保存或下載檔案，例如 PDF、表格、簡報、教材或附件資料。`;
  }
  if (/camera|scan/.test(itemText)) {
    return `${featureLabel}在${scopeLabel}中啟用拍攝或掃描入口，快速產生照片、影片、文件或 QR code 輸入。`;
  }
  if (/location|nearby|map/.test(itemText)) {
    return `${featureLabel}把地點資訊帶入${scopeLabel}，支援位置分享、附近探索、到店、配送或會合情境。`;
  }
  if (/contact card|contacts?$/.test(itemText)) {
    return `${featureLabel}整理或傳遞${scopeLabel}需要的聯絡資訊，方便接收者儲存、辨識對象或開啟對話。`;
  }
  if (/reply|quoted/.test(itemText)) {
    return `${featureLabel}把${scopeLabel}中的回應綁定到特定訊息、貼文或更新，避免討論失去上下文。`;
  }
  if (/forward|repost|share/.test(itemText)) {
    return `${featureLabel}把${scopeLabel}中的既有內容移送到其他聊天、群組、追蹤者或外部目的地。`;
  }
  if (/edit|draft/.test(itemText)) {
    return `${featureLabel}讓${scopeLabel}中的內容在發布前後修正錯誤、補充資訊或調整呈現。`;
  }
  if (/delete|recall|remove/.test(itemText)) {
    return `${featureLabel}用於移除${scopeLabel}中與${headingLabel}相關的內容、成員、紀錄或帳號資料，降低錯誤資訊或不適當項目的影響。`;
  }
  if (/view-once|view once|disappear|ephemeral|vanish/.test(itemText)) {
    return `${featureLabel}讓${scopeLabel}中的內容在開啟、離開或到期後降低留存，適合敏感或短暫資訊。`;
  }
  if (/voice note|voice message|audio|transcription|playback speed|hands-free/.test(itemText)) {
    return `${featureLabel}支援${scopeLabel}中的語音錄製、播放、轉文字或分享，補足純文字難以表達的語氣與細節。`;
  }
  if (/read receipt|delivery receipt|message info|last seen|online|typing|status/.test(itemText)) {
    return `${featureLabel}呈現${scopeLabel}中的訊息、帳號、訂單或互動狀態，協助判斷下一步是否需要回覆或處理。`;
  }
  if (/notification|mute|preview|alert/.test(itemText)) {
    return `${featureLabel}控制${scopeLabel}的提醒、預覽或通知頻率，讓重要事件被看見但不過度干擾。`;
  }
  if (/pin|star|archive|folder|filter|favorite|saved|history|gallery/.test(itemText)) {
    return `${featureLabel}把${scopeLabel}中的重要內容保存、分類或提高可見度，方便之後快速回找。`;
  }
  if (/poll|vote|rsvp|event|calendar|schedule/.test(itemText)) {
    return `${featureLabel}用來協調${scopeLabel}中的時間、選擇、活動安排或參與狀態。`;
  }
  if (/admin|permission|approval|role|member|invite|join request|rules|moderation|ban|kick|slow mode|audit/.test(itemText)) {
    return `${featureLabel}支援${scopeLabel}的成員治理、權限設定、加入審核或違規處理，維持社群秩序。`;
  }
  if (/group|community|server|channel|forum|topic|room|openchat/.test(itemText)) {
    return `${featureLabel}建立或整理${scopeLabel}中的多人空間與發布通道，讓成員依主題、關係或權限互動。`;
  }
  if (/call|screen share|speaker|mute|camera switch|picture-in-picture|low data|stage|live|stream|raise hand|participant|co-host|watch together/.test(itemText)) {
    return `${featureLabel}支援${scopeLabel}中的即時語音、視訊、直播、共同觀看或通話控制。`;
  }
  if (/profile|avatar|bio|about|headline|experience|education|skill|certification|badge|verification|identity|username|display name/.test(itemText)) {
    return `${featureLabel}呈現或驗證${scopeLabel}中的身分資料，協助他人辨識個人、創作者、商家或組織。`;
  }
  if (/business|merchant|seller|catalog|product|shop|store|checkout|cart|order|inventory|coupon|offer|payment|wallet|refund|return|shipping|delivery|logistics|receipt|alipay|pay/.test(itemText)) {
    return `${featureLabel}處理${scopeLabel}中的商品、付款、訂單、物流、客服或售後節點。`;
  }
  if (/ad|ads|sponsored|campaign|targeting|budget|creative|boost|promoted|lead|conversion|retargeting|brand lift/.test(itemText)) {
    return `${featureLabel}支援${scopeLabel}的付費觸及、受眾設定、素材測試或轉換衡量，導向明確行銷目標。`;
  }
  if (/analytics|insight|metric|report|performance|statistics|dashboard|measurement|rating|quality|csat|nps/.test(itemText)) {
    return `${featureLabel}把${scopeLabel}的觸及、互動、客服、銷售或廣告資料轉成可檢視的成效指標。`;
  }
  if (/search|discover|directory|explore|feed|for you|recommendation|hashtag|trend|browse|ranking|signal/.test(itemText)) {
    return `${featureLabel}協助使用者在${scopeLabel}找到相關內容、帳號、商品、服務或職缺，並回饋推薦訊號。`;
  }
  if (/message|chat|dm|inmail|conversation|inbox|ticket|handoff|assignment|snooze|macro|quick replies|saved replies|away message|greeting message|webhook|bot|workflow|routing|automation/.test(itemText)) {
    return `${featureLabel}支援${scopeLabel}中${headingLabel}的對話建立、回覆、分派、整理或自動化，讓溝通能被處理到完成。`;
  }
  if (/ai|meta ai|fin|copilot|assistant|suggested|suggestions|recommendations|q&a|translation|transcription|tone|creative prompts|article suggestions|next-best action/.test(contextText)) {
    return `${featureLabel}在${scopeLabel}中用 AI 或規則輔助產生回答、建議、摘要、翻譯、草稿或下一步動作。`;
  }
  if (/encrypt|privacy|visibility|blocked|blocking|block\/report|report|safety|security|two-factor|passkey|verification|login|session|device review|password|audit|policy|compliance|fraud|risk|protection|moderation|appeals|content filters|family pairing/.test(contextText)) {
    return `${featureLabel}限制${scopeLabel}中的存取、可見度或違規處理範圍，用於保護帳號、內容與對話安全。`;
  }
  if (/payment|pay|wallet|alipay|checkout|cart|order|invoice|receipt|refund|return|after-sales|installment|red packets|transfers|split bills|shipping|logistics|delivery|fulfillment|pickup|purchase|buyer protection|transaction/.test(contextText)) {
    return `${featureLabel}處理${scopeLabel}中的付款、訂單、物流、退款或售後狀態。`;
  }
  if (/catalog|product|shop|shopping|storefront|seller|merchant|inventory|price|coupon|offer|loyalty|membership|showcase|store page|product detail|product tags|collections|limited-time/.test(contextText)) {
    return `${featureLabel}呈現${scopeLabel}中的商品、店鋪、價格、優惠或庫存資訊，並把瀏覽導向購買或客服詢問。`;
  }
  if (/ads|sponsored|campaign|targeting|retargeting|budget|creative|boost|promoted|lead ads|lead gen|brand lift|spark ads|topview|business center|attribution|conversion tracking|matched audiences/.test(contextText)) {
    return `${featureLabel}負責${scopeLabel}的投放、鎖定、衡量或付費觸及優化，讓內容導向訊息、表單、商店或轉換目標。`;
  }
  if (/analytics|insights|report|metrics|performance|statistics|measurement|dashboard|profile views|search appearances|quality rating|rating|csat|nps|goal tracking|exports|data warehouse/.test(contextText)) {
    return `${featureLabel}衡量${scopeLabel}的觸及、互動、客服、銷售或廣告表現，協助團隊判斷後續調整。`;
  }
  if (/profile|avatar|bio|about|headline|experience|education|certification|license|skill|endorsement|recommendation|company page|creator account|business account|services page|display name|username|phone number|identity|weixin id|line id/.test(contextText)) {
    return `${featureLabel}呈現或管理${scopeLabel}中的個人、商家、創作者或公司身分，讓他人能辨識、追蹤或聯絡。`;
  }
  if (/message|chat|dm|inmail|reply|forward|mention|reaction|comment|thread|conversation|inbox|ticket|handoff|assignment|snooze|macro|saved replies|quick replies|away message|greeting message|webhook|bot|routing|workflow|automation/.test(contextText)) {
    return `${featureLabel}建立、回覆、分派、整理或自動化${scopeLabel}中${headingLabel}的對話，讓訊息從進線走到回覆或交接。`;
  }
  if (/photo|video|reels|story|stories|status|post|article|newsletter|document|file|media|camera|live|livestream|broadcast|voice|audio|sticker|emoji|theme|gif|effect|filter|background|short video|series|playlist|duet|stitch/.test(contextText)) {
    return `${featureLabel}建立、發布、傳送或整理${scopeLabel}中的圖片、影片、音訊、貼圖與其他內容格式。`;
  }
  if (/call|stage|voice channel|video chat|screen share|streaming|speaker|mute|deafen|raise hand|participant|co-host|live rooms|activities|watch together|noise suppression/.test(contextText)) {
    return `${featureLabel}發起或控制${scopeLabel}中的即時語音、視訊、直播、共同觀看或螢幕分享。`;
  }
  if (/group|community|server|channel|member|admin|role|permission|invite|join request|onboarding|rules|forum|topic|announcement|event|poll|rooms|openchat/.test(contextText)) {
    return `${featureLabel}組織${scopeLabel}中的多人空間、成員權限、公告或社群討論秩序。`;
  }
  if (/search|discover|directory|explore|feed|for you|recommendation|hashtag|trend|nearby|popular|new\/active|browse|ranking|signals|interest graph|social graph/.test(contextText)) {
    return `${featureLabel}把使用者導向${scopeLabel}中的相關內容、帳號、商品、職缺或服務，並把互動訊號回饋給推薦流程。`;
  }
  if (/job|recruit|candidate|applicant|easy apply|resume|interview|open to work|hiring|talent|ats|pipeline|career|salary/.test(contextText)) {
    return `${featureLabel}連接${scopeLabel}中的求職者與雇主，處理職缺探索、應徵、候選人溝通與招募管線。`;
  }
  if (/sales|lead|account|crm|customer|company|buyer intent|relationship map|teamlink|warm introductions|pipeline|notes|follow-ups|owner|segments/.test(contextText)) {
    return `${featureLabel}管理${scopeLabel}中的客戶、潛在客戶、帳戶情報與銷售跟進，讓商務關係可以被追蹤與推進。`;
  }
  if (/help center|article|collection|knowledge|self-service|faq|support|sla|escalation|case|resolution|deflection|teammate|manager review/.test(contextText)) {
    return `${featureLabel}支援${scopeLabel}中的自助服務、客服知識、案件處理、SLA 與升級流程。`;
  }
  if (/notification|alert|preview|muted|badge|status|read receipts|delivery receipts|typing|last seen|online|history|archive|pinned|starred|folders|filters|favorites|saved/.test(contextText)) {
    return `${featureLabel}呈現${scopeLabel}中的狀態、提醒、歷史紀錄或整理方式，讓使用者更快掌握待處理內容。`;
  }
  return `${featureLabel}提供${scopeLabel}中${headingLabel}所需的操作、狀態或資料輸入。`;
}

function setTheme(app) {
  const [primary, primaryDark, secondary, accent, surfaceSoft] = app.colors;
  const root = document.documentElement;
  root.style.setProperty("--primary", primary);
  root.style.setProperty("--primary-dark", primaryDark);
  root.style.setProperty("--secondary", secondary);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--surface-soft", surfaceSoft);
}

function renderTabs() {
  tabsEl.innerHTML = apps
    .map((app) => `
      <button class="tab-button" type="button" role="tab" aria-selected="${app.id === activeApp.id}" data-app-id="${app.id}">
        <img src="${app.icon}" alt="">
        <span>${localizeText(app.name)}</span>
      </button>
    `)
    .join("");

  tabsEl.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const next = apps.find((app) => app.id === button.dataset.appId);
      if (!next) return;
      activeApp = next;
      selectedClusterIndex = -1;
      renderApp();
    });
  });
}

function renderApp() {
  setTheme(activeApp);
  renderTabs();
  activeAppIconEl.src = activeApp.icon;
  activeAppIconEl.alt = `${localizeText(activeApp.name)} 圖示`;
  titleEl.textContent = localizeText(activeApp.title);
  subtitleEl.textContent = localizeText(activeApp.subtitle);
  const usesWhatsAppGraph = activeApp.diagram === "whatsapp";
  const usesModuleGraph = Boolean(activeApp.mapNodes);
  mapStageEl.classList.toggle("wa-stage", usesWhatsAppGraph);
  mapStageEl.classList.toggle("module-stage", usesModuleGraph);
  clusterLayerEl.classList.toggle("wa-layer", usesWhatsAppGraph);
  clusterLayerEl.classList.toggle("module-layer", usesModuleGraph);
  mapStageEl.style.setProperty("--module-map-height", `${activeApp.mapHeight || 1080}px`);
  renderHub();
  renderClusters();
  renderTrust();
  renderDetail();
}

function renderHub() {
  hubCardEl.hidden = activeApp.diagram === "whatsapp" || Boolean(activeApp.mapNodes);
  if (hubCardEl.hidden) {
    hubCardEl.innerHTML = "";
    return;
  }

  hubCardEl.innerHTML = `
    <span>
      <img src="${activeApp.icon}" alt="">
      <strong>${localizeText(activeApp.hub)}</strong>
      <span>${localizeText("Central product hub")}</span>
    </span>
  `;
  hubCardEl.onclick = () => {
    selectedClusterIndex = -1;
    renderClusters();
    renderDetail();
  };
}

function renderClusters() {
  if (activeApp.diagram === "whatsapp") {
    renderWhatsAppMap();
    return;
  }

  if (whatsappGraph) {
    whatsappGraph.destroy();
    whatsappGraph = null;
  }

  if (activeApp.mapNodes) {
    renderModuleInteractionMap();
    return;
  }

  if (moduleGraph) {
    moduleGraph.destroy();
    moduleGraph = null;
  }

  clusterLayerEl.innerHTML = activeApp.clusters
    .map((cluster, index) => `
      <button class="cluster-card" type="button" data-index="${index}" data-pos="${positions[index]}" aria-pressed="${index === selectedClusterIndex}">
        <span class="cluster-icon"><span class="cluster-glyph" style="--icon-url: url('${cluster.icon}')"></span></span>
        <strong>${localizeText(cluster.title)}</strong>
      </button>
    `)
    .join("");

  clusterLayerEl.querySelectorAll(".cluster-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedClusterIndex = Number(card.dataset.index);
      renderClusters();
      renderDetail();
    });
  });
}

function renderTrust() {
  trustLayerEl.hidden = activeApp.diagram === "whatsapp" || Boolean(activeApp.mapNodes);
  if (trustLayerEl.hidden) {
    trustLayerEl.innerHTML = "";
    return;
  }

  trustLayerEl.innerHTML = `<img src="${icon("shield")}" alt=""><strong>${localizeText("Trust / Privacy / Policy")}</strong>`;
  trustLayerEl.onclick = () => {
    selectedClusterIndex = "trust";
    renderClusters();
    renderDetail();
  };
}

function waNode(index, className, label) {
  const item = activeApp.clusters[index];
  const active = index === selectedClusterIndex;
  return `
    <button class="wa-node ${className}" type="button" data-index="${index}" aria-pressed="${active}">
      <span class="wa-node-icon"><span class="cluster-glyph" style="--icon-url: url('${item.icon}')"></span></span>
      <strong>${localizeText(label || item.title)}</strong>
    </button>
  `;
}

function renderWhatsAppMap() {
  if (whatsappGraph) {
    whatsappGraph.destroy();
    whatsappGraph = null;
  }
  if (moduleGraph) {
    moduleGraph.destroy();
    moduleGraph = null;
  }

  clusterLayerEl.innerHTML = `
    <div class="wa-graph-shell">
      <div class="wa-graph" id="whatsappGraph" aria-label="WhatsApp 邏輯功能流程圖"></div>
      <div class="wa-edge-label-layer" id="waEdgeLabelLayer" aria-hidden="true"></div>
      <div class="wa-feature-tooltip" id="waFeatureTooltip" role="tooltip" hidden>
        <strong></strong>
        <p></p>
      </div>
    </div>
  `;

  renderWhatsAppGraph();
  requestAnimationFrame(() => {
    const shell = clusterLayerEl.querySelector(".wa-graph-shell");
    if (shell && shell.scrollWidth > shell.clientWidth) {
      shell.scrollLeft = Math.round((shell.scrollWidth - shell.clientWidth) / 2);
    }
  });
}

function moduleGraphNode(item) {
  return {
    data: {
      id: item.id,
      label: localizeText(item.title),
      summary: localizeAreaSummary(item),
      index: `map:${item.id}`,
    },
    classes: item.kind || "surface",
  };
}

function moduleGraphEdge(item, index) {
  return {
    data: {
      id: `${item.source}-${item.target}-${index}`,
      source: item.source,
      target: item.target,
      label: localizeText(item.label),
    },
    classes: item.kind || "direct",
  };
}

function readThemeColor(name, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "").trim();
  const full = normalized.length === 3
    ? normalized.split("").map((character) => character + character).join("")
    : normalized;
  if (!/^[0-9a-f]{6}$/i.test(full)) return `rgba(37, 99, 235, ${alpha})`;
  const value = Number.parseInt(full, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function mixHexWithWhite(hex, amount) {
  const normalized = hex.replace("#", "").trim();
  const full = normalized.length === 3
    ? normalized.split("").map((character) => character + character).join("")
    : normalized;
  if (!/^[0-9a-f]{6}$/i.test(full)) return "#eef2ff";
  const value = Number.parseInt(full, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const mix = (channel) => Math.round(255 + (channel - 255) * amount);
  const toHex = (channel) => mix(channel).toString(16).padStart(2, "0");
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

function renderModuleInteractionMap() {
  if (moduleGraph) {
    moduleGraph.destroy();
    moduleGraph = null;
  }
  if (whatsappGraph) {
    whatsappGraph.destroy();
    whatsappGraph = null;
  }

  clusterLayerEl.innerHTML = `
    <div class="module-graph-shell">
      <div class="module-graph" id="moduleGraph" aria-label="${escapeHtml(localizeText(activeApp.name))} 模組互動圖"></div>
      <div class="module-edge-label-layer" id="moduleEdgeLabelLayer" aria-hidden="true"></div>
      <div class="module-feature-tooltip" id="moduleFeatureTooltip" role="tooltip" hidden>
        <strong></strong>
        <p></p>
      </div>
    </div>
  `;

  renderModuleGraph();
}

function getModuleGraphPositions(graphWidth, graphHeight) {
  const activeEdges = activeApp.mapEdges.filter((edge) => edge.kind !== "return" && edge.kind !== "control" && edge.kind !== "trust");
  const levels = new Map();
  activeApp.mapNodes.forEach((node) => {
    if (node.kind === "entry") levels.set(node.id, 0);
    if (node.kind === "spine") levels.set(node.id, 1);
  });

  for (let pass = 0; pass < activeApp.mapNodes.length + 2; pass += 1) {
    let changed = false;
    activeEdges.forEach((edge) => {
      const sourceLevel = levels.get(edge.source);
      if (sourceLevel === undefined) return;
      const nextLevel = sourceLevel + 1;
      if ((levels.get(edge.target) ?? -1) < nextLevel) {
        levels.set(edge.target, nextLevel);
        changed = true;
      }
    });
    if (!changed) break;
  }

  activeApp.mapNodes.forEach((node) => {
    if (!levels.has(node.id)) levels.set(node.id, 2);
  });

  const maxPerRow = graphWidth >= 1040 ? 3 : graphWidth >= 620 ? 2 : 1;
  const horizontalGap = graphWidth >= 620 ? 36 : 0;
  const nodeWidth = maxPerRow === 1
    ? Math.min(278, graphWidth - 54)
    : Math.min(286, (graphWidth - 96) / maxPerRow);
  const rows = [];
  [...new Set([...levels.values()].sort((a, b) => a - b))].forEach((level) => {
    const nodes = activeApp.mapNodes.filter((node) => levels.get(node.id) === level);
    for (let start = 0; start < nodes.length; start += maxPerRow) {
      rows.push(nodes.slice(start, start + maxPerRow));
    }
  });

  rows.push([{ id: "trust" }]);

  const positionsById = {};
  const top = 70;
  const bottom = graphHeight - 72;
  const rowStep = rows.length > 1 ? (bottom - top) / (rows.length - 1) : 0;
  rows.forEach((row, rowIndex) => {
    const y = top + rowStep * rowIndex;
    const rowWidth = row.length * nodeWidth + (row.length - 1) * horizontalGap;
    const firstX = (graphWidth - rowWidth) / 2 + nodeWidth / 2;
    row.forEach((node, nodeIndex) => {
      positionsById[node.id] = {
        x: firstX + nodeIndex * (nodeWidth + horizontalGap),
        y,
      };
    });
  });

  return { positionsById, maxPerRow, nodeWidth };
}

function inflateRect(rect, padding) {
  return {
    x1: rect.x1 - padding,
    y1: rect.y1 - padding,
    x2: rect.x2 + padding,
    y2: rect.y2 + padding,
  };
}

function rectOverlapArea(a, b) {
  const width = Math.max(0, Math.min(a.x2, b.x2) - Math.max(a.x1, b.x1));
  const height = Math.max(0, Math.min(a.y2, b.y2) - Math.max(a.y1, b.y1));
  return width * height;
}

function labelRectAt(x, y, width, height) {
  return {
    x1: x - width / 2,
    y1: y - height / 2,
    x2: x + width / 2,
    y2: y + height / 2,
  };
}

function clampLabelCenter(x, y, width, height, bounds) {
  return {
    x: Math.max(bounds.x1 + width / 2, Math.min(x, bounds.x2 - width / 2)),
    y: Math.max(bounds.y1 + height / 2, Math.min(y, bounds.y2 - height / 2)),
  };
}

function chooseEdgeLabelPosition(source, target, width, height, nodeRects, bounds, edgeKind) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const length = Math.hypot(dx, dy) || 1;
  const normal = { x: -dy / length, y: dx / length };
  const midpoint = { x: source.x + dx * 0.5, y: source.y + dy * 0.5 };
  const tValues = edgeKind === "return"
    ? [0.42, 0.58, 0.34, 0.66, 0.26, 0.74]
    : [0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74];
  const offsets = edgeKind === "return"
    ? [-68, -46, 46, 68, -92, 92, 0]
    : [0, 36, -36, 58, -58, 82, -82];

  let best = null;
  tValues.forEach((t) => {
    offsets.forEach((offset) => {
      const raw = {
        x: source.x + dx * t + normal.x * offset,
        y: source.y + dy * t + normal.y * offset,
      };
      const center = clampLabelCenter(raw.x, raw.y, width, height, bounds);
      const rect = labelRectAt(center.x, center.y, width, height);
      const overlap = nodeRects.reduce((total, nodeRect) => total + rectOverlapArea(rect, nodeRect), 0);
      const distance = Math.hypot(center.x - midpoint.x, center.y - midpoint.y);
      const score = overlap * 1000 + distance;
      if (!best || score < best.score) {
        best = { ...center, score, overlap };
      }
    });
  });

  return best || midpoint;
}

function renderModuleEdgeLabels() {
  const labelLayer = document.querySelector("#moduleEdgeLabelLayer");
  const container = document.querySelector("#moduleGraph");
  if (!labelLayer || !container || !moduleGraph || !activeApp.mapEdges) return;

  const labeledEdges = activeApp.mapEdges
    .map((edge, index) => ({
      ...edge,
      index,
      id: `${edge.source}-${edge.target}-${index}`,
    }))
    .filter((edge) => edge.label && edge.kind !== "trust");

  labelLayer.innerHTML = labeledEdges
    .map((edge) => `<span class="module-edge-label" data-edge-id="${escapeHtml(edge.id)}" hidden>${escapeHtml(localizeText(edge.label))}</span>`)
    .join("");

  const bounds = {
    x1: 10,
    y1: 10,
    x2: container.clientWidth - 10,
    y2: container.clientHeight - 10,
  };
  const nodeRects = moduleGraph.nodes()
    .map((node) => inflateRect(node.renderedBoundingBox({ includeLabels: false, includeOverlays: false }), 18));

  labelLayer.querySelectorAll(".module-edge-label").forEach((label) => {
    const edge = moduleGraph.getElementById(label.dataset.edgeId);
    if (!edge || edge.length === 0) {
      label.hidden = true;
      return;
    }

    const source = edge.source().renderedPosition();
    const target = edge.target().renderedPosition();
    label.hidden = false;
    const labelBox = label.getBoundingClientRect();
    const edgeKind = edge.hasClass("return")
      ? "return"
      : edge.hasClass("control")
        ? "control"
        : "direct";
    const position = chooseEdgeLabelPosition(source, target, labelBox.width, labelBox.height, nodeRects, bounds, edgeKind);
    label.style.left = `${Math.round(position.x)}px`;
    label.style.top = `${Math.round(position.y)}px`;
  });
}

function renderModuleGraph() {
  const container = document.querySelector("#moduleGraph");
  if (!container || !window.cytoscape) {
    if (container) {
      container.innerHTML = "<p class=\"wa-graph-error\">流程圖函式庫未載入。</p>";
    }
    return;
  }

  ensureCytoscapeDagre();

  const primary = readThemeColor("--primary", "#2563eb");
  const primaryDark = readThemeColor("--primary-dark", "#1d4ed8");
  const secondary = readThemeColor("--secondary", "#7c3aed");
  const accent = readThemeColor("--accent", "#f59e0b");
  const surfaceSoft = readThemeColor("--surface-soft", "#f8fafc");
  const primarySoft = mixHexWithWhite(primary, 0.12);
  const primarySofter = mixHexWithWhite(primary, 0.08);
  const secondarySoft = mixHexWithWhite(secondary, 0.13);
  const accentSoft = mixHexWithWhite(accent, 0.2);
  const isCompactGraph = container.clientWidth < 620;
  const graphWidth = container.clientWidth || 920;
  const graphHeight = container.clientHeight || ((activeApp.mapHeight || 1080) - 32);
  const { positionsById, maxPerRow, nodeWidth } = getModuleGraphPositions(graphWidth, graphHeight);
  const wideNodeWidth = maxPerRow === 1 ? nodeWidth : Math.min(graphWidth - 110, 560);
  const trustNodeWidth = Math.min(graphWidth - 92, 780);
  const nodes = [
    ...activeApp.mapNodes.map((item) => ({
      ...moduleGraphNode(item),
      position: positionsById[item.id],
    })),
    {
      data: {
        id: "trust",
        label: localizeText("Trust / Privacy / Policy\nControl Plane"),
        summary: localizeTrustSummary(false),
        index: "trust",
      },
      classes: "trust",
      position: positionsById.trust,
    },
  ];
  const controlEdges = activeApp.mapNodes.map((node, index) => ({
    data: {
      id: `trust-${node.id}-${index}`,
      source: "trust",
      target: node.id,
      label: localizeText("governs"),
    },
    classes: "trust",
  }));
  const elements = [
    ...nodes,
    ...activeApp.mapEdges.map(moduleGraphEdge),
    ...controlEdges,
  ];

  moduleGraph = window.cytoscape({
    container,
    elements,
    userZoomingEnabled: false,
    userPanningEnabled: false,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: [
      {
        selector: "node",
        style: {
          "shape": "round-rectangle",
          "width": nodeWidth,
          "height": isCompactGraph ? 74 : 76,
          "background-color": "#ffffff",
          "border-width": 2,
          "border-color": hexToRgba(primary, 0.36),
          "content": "data(label)",
          "text-wrap": "wrap",
          "text-max-width": isCompactGraph ? 228 : 246,
          "text-valign": "center",
          "text-halign": "center",
          "font-family": "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          "font-size": isCompactGraph ? 11 : 14,
          "font-weight": 700,
          "color": "#18212d",
          "overlay-opacity": 0,
          "transition-property": "background-color, border-color",
          "transition-duration": "120ms",
        },
      },
      {
        selector: "node.entry",
        style: {
          "width": isCompactGraph ? 278 : 390,
          "height": isCompactGraph ? 78 : 82,
          "background-color": surfaceSoft,
          "border-color": hexToRgba(primary, 0.52),
          "text-max-width": isCompactGraph ? 238 : 345,
        },
      },
      {
        selector: "node.spine",
        style: {
          "width": wideNodeWidth,
          "height": isCompactGraph ? 90 : 94,
          "background-color": primarySoft,
          "border-color": primary,
          "font-size": isCompactGraph ? 14 : 20,
          "text-max-width": isCompactGraph ? 246 : 510,
        },
      },
      {
        selector: "node.channel",
        style: {
          "background-color": secondarySoft,
          "border-color": hexToRgba(secondary, 0.5),
        },
      },
      {
        selector: "node.business",
        style: {
          "background-color": primarySofter,
          "border-color": hexToRgba(primary, 0.52),
        },
      },
      {
        selector: "node.commerce",
        style: {
          "background-color": accentSoft,
          "border-color": hexToRgba(accent, 0.68),
        },
      },
      {
        selector: "node.assist",
        style: {
          "background-color": "#eef2ff",
          "border-color": "#bac7ff",
        },
      },
      {
        selector: "node.external",
        style: {
          "background-color": "#f8fafc",
          "border-color": "#cbd5e1",
        },
      },
      {
        selector: "node.control",
        style: {
          "background-color": "#f8fafc",
          "border-color": hexToRgba(primaryDark, 0.44),
        },
      },
      {
        selector: "node.trust",
        style: {
          "width": trustNodeWidth,
          "height": isCompactGraph ? 86 : 86,
          "background-color": primaryDark,
          "border-color": hexToRgba(primary, 0.68),
          "color": "#ffffff",
          "font-size": isCompactGraph ? 12 : 17,
          "text-max-width": isCompactGraph ? 246 : 720,
        },
      },
      {
        selector: "node.selected-node",
        style: {
          "background-color": primarySoft,
          "border-color": primaryDark,
          "border-width": 3,
          "z-index": 10,
        },
      },
      {
        selector: "node.trust.selected-node",
        style: {
          "background-color": primaryDark,
          "border-color": "#ffffff",
          "border-width": 3,
        },
      },
      {
        selector: "edge",
        style: {
          "curve-style": "bezier",
          "width": 2.25,
          "line-color": primaryDark,
          "target-arrow-shape": "triangle",
          "target-arrow-color": primaryDark,
          "arrow-scale": 1,
          "content": "",
          "font-family": "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          "font-size": isCompactGraph ? 7 : 9,
          "font-weight": 700,
          "color": "#475467",
          "text-background-color": "#ffffff",
          "text-background-opacity": 0.96,
          "text-background-padding": 3,
          "text-rotation": "none",
          "opacity": 0.88,
          "overlay-opacity": 0,
        },
      },
      {
        selector: "edge.return",
        style: {
          "curve-style": "unbundled-bezier",
          "control-point-distances": -74,
          "control-point-weights": 0.45,
          "line-color": primaryDark,
          "target-arrow-color": primaryDark,
          "opacity": 0.72,
        },
      },
      {
        selector: "edge.control",
        style: {
          "line-style": "dashed",
          "line-dash-pattern": [5, 6],
          "width": 1.35,
          "line-color": primary,
          "target-arrow-shape": "none",
          "content": "",
          "opacity": 0.36,
        },
      },
      {
        selector: "edge.trust",
        style: {
          "curve-style": "unbundled-bezier",
          "control-point-distances": "-32",
          "control-point-weights": 0.5,
          "line-style": "dashed",
          "line-dash-pattern": [5, 6],
          "width": 1.1,
          "line-color": primary,
          "target-arrow-shape": "none",
          "content": "",
          "opacity": 0.2,
        },
      },
    ],
    layout: {
      name: "preset",
      animate: false,
      fit: false,
    },
  });

  requestAnimationFrame(renderModuleEdgeLabels);

  moduleGraph.on("tap", "node", (event) => {
    selectedClusterIndex = event.target.data("index");
    updateModuleGraphSelection();
    renderDetail();
  });

  moduleGraph.on("mouseover", "node", (event) => {
    showModuleTooltip(event.target);
  });

  moduleGraph.on("mousemove", "node", (event) => {
    positionModuleTooltip(event.target);
  });

  moduleGraph.on("mouseout", "node", () => {
    hideModuleTooltip();
  });

  moduleGraph.on("tap", (event) => {
    if (event.target !== moduleGraph) return;
    selectedClusterIndex = -1;
    updateModuleGraphSelection();
    renderDetail();
    hideModuleTooltip();
  });

  container.addEventListener("mouseleave", hideModuleTooltip);
  updateModuleGraphSelection();
}

function updateModuleGraphSelection() {
  if (!moduleGraph) return;
  moduleGraph.nodes().removeClass("selected-node");
  if (typeof selectedClusterIndex === "string") {
    if (selectedClusterIndex === "trust") {
      moduleGraph.nodes().filter((node) => node.data("index") === "trust").addClass("selected-node");
      return;
    }
    if (selectedClusterIndex.startsWith("map:")) {
      moduleGraph.nodes().filter((node) => node.data("index") === selectedClusterIndex).addClass("selected-node");
    }
  }
}

function getMapNodeBySelection() {
  if (typeof selectedClusterIndex !== "string" || !selectedClusterIndex.startsWith("map:")) return null;
  const id = selectedClusterIndex.slice(4);
  return activeApp.mapNodes?.find((node) => node.id === id) || null;
}

function getModuleTooltipData(node) {
  const index = node.data("index");
  if (index === "trust") {
    return {
      title: localizeText("Trust / Privacy / Policy"),
      description: localizeTrustSummary(false),
    };
  }

  const id = typeof index === "string" && index.startsWith("map:") ? index.slice(4) : "";
  const mapNode = activeApp.mapNodes?.find((item) => item.id === id);
  if (!mapNode) return null;
  return {
    title: localizeText(mapNode.title),
    description: localizeAreaSummary(mapNode),
  };
}

function showModuleTooltip(node) {
  const tooltip = document.querySelector("#moduleFeatureTooltip");
  const data = getModuleTooltipData(node);
  if (!tooltip || !data) return;

  tooltip.querySelector("strong").textContent = data.title;
  tooltip.querySelector("p").textContent = data.description;
  tooltip.hidden = false;
  positionModuleTooltip(node);
  tooltip.classList.add("is-visible");
}

function positionModuleTooltip(node) {
  const tooltip = document.querySelector("#moduleFeatureTooltip");
  const container = document.querySelector("#moduleGraph");
  const shell = tooltip?.parentElement;
  if (!tooltip || tooltip.hidden || !container || !shell) return;

  const nodePosition = node.renderedPosition();
  const graphRect = container.getBoundingClientRect();
  const shellRect = shell.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const x = graphRect.left - shellRect.left + nodePosition.x;
  const y = graphRect.top - shellRect.top + nodePosition.y;
  const gap = 18;
  const margin = 12;
  let left = x + gap;
  let top = y - tooltipHeight / 2;

  if (left + tooltipWidth > shellRect.width - margin) {
    left = x - tooltipWidth - gap;
  }

  left = Math.max(margin, Math.min(left, shellRect.width - tooltipWidth - margin));
  top = Math.max(margin, Math.min(top, shellRect.height - tooltipHeight - margin));
  tooltip.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
}

function hideModuleTooltip() {
  const tooltip = document.querySelector("#moduleFeatureTooltip");
  if (!tooltip) return;
  tooltip.classList.remove("is-visible");
  tooltip.hidden = true;
}

function renderWhatsAppEdgeLabels() {
  const labelLayer = document.querySelector("#waEdgeLabelLayer");
  const container = document.querySelector("#whatsappGraph");
  if (!labelLayer || !container || !whatsappGraph) return;

  const labeledEdges = whatsappGraph.edges()
    .filter((edge) => edge.data("label") && !edge.hasClass("trust"))
    .map((edge) => ({
      id: edge.id(),
      label: edge.data("label"),
    }));

  labelLayer.innerHTML = labeledEdges
    .map((edge) => `<span class="wa-edge-label" data-edge-id="${escapeHtml(edge.id)}" hidden>${escapeHtml(edge.label)}</span>`)
    .join("");

  const bounds = {
    x1: 10,
    y1: 10,
    x2: container.clientWidth - 10,
    y2: container.clientHeight - 10,
  };
  const nodeRects = whatsappGraph.nodes()
    .map((node) => inflateRect(node.renderedBoundingBox({ includeLabels: false, includeOverlays: false }), 22));

  labelLayer.querySelectorAll(".wa-edge-label").forEach((label) => {
    const edge = whatsappGraph.getElementById(label.dataset.edgeId);
    if (!edge || edge.length === 0) {
      label.hidden = true;
      return;
    }

    const source = edge.source().renderedPosition();
    const target = edge.target().renderedPosition();
    label.hidden = false;
    const labelBox = label.getBoundingClientRect();
    const edgeKind = edge.hasClass("return") ? "return" : "direct";
    const position = chooseEdgeLabelPosition(source, target, labelBox.width, labelBox.height, nodeRects, bounds, edgeKind);
    label.style.left = `${Math.round(position.x)}px`;
    label.style.top = `${Math.round(position.y)}px`;
  });
}

function ensureCytoscapeDagre() {
  if (!window.cytoscape || !window.cytoscapeDagre || cytoscapeDagreRegistered) return;
  window.cytoscape.use(window.cytoscapeDagre);
  cytoscapeDagreRegistered = true;
}

function waGraphNode(id, label, index, nodeClass, position) {
  return { data: { id, label: localizeText(label), index }, classes: nodeClass, position };
}

function waGraphEdge(id, source, target, label = "", edgeClass = "direct") {
  return { data: { id, source, target, label: localizeText(label) }, classes: edgeClass };
}

function renderWhatsAppGraph() {
  const container = document.querySelector("#whatsappGraph");
  if (!container || !window.cytoscape) {
    if (container) {
      container.innerHTML = "<p class=\"wa-graph-error\">流程圖函式庫未載入。</p>";
    }
    return;
  }

  ensureCytoscapeDagre();

  const graphWidth = container.clientWidth || 920;
  const graphHeight = container.clientHeight || 1400;
  const isCompactGraph = graphWidth < 520;
  const isNarrowGraph = !isCompactGraph && graphWidth < 960;
  const centerX = graphWidth / 2;
  const topY = 58;
  const bottomY = graphHeight - 74;
  const yAt = (ratio) => Math.round(topY + (bottomY - topY) * ratio);
  const sideOffset = Math.min(340, Math.max(260, graphWidth * 0.31));
  const leftX = Math.max(150, centerX - sideOffset);
  const rightX = Math.min(graphWidth - 150, centerX + sideOffset);
  const narrowOffset = Math.min(190, Math.max(135, graphWidth * 0.27));
  const narrowLeftX = centerX - narrowOffset;
  const narrowRightX = centerX + narrowOffset;
  const compactOrder = [
    "account",
    "chat-core",
    "groups",
    "calls",
    "status",
    "community-spaces",
    "channels",
    "business-conversation",
    "platform",
    "external",
    "meta-ai",
    "trust",
  ];
  const compactPosition = (id) => ({
    x: centerX,
    y: yAt(compactOrder.indexOf(id) / (compactOrder.length - 1)),
  });
  const narrowPositions = {
    account: { x: centerX, y: yAt(0) },
    "chat-core": { x: centerX, y: yAt(0.12) },
    groups: { x: narrowLeftX, y: yAt(0.26) },
    calls: { x: narrowRightX, y: yAt(0.26) },
    status: { x: narrowLeftX, y: yAt(0.39) },
    "community-spaces": { x: narrowRightX, y: yAt(0.39) },
    channels: { x: narrowLeftX, y: yAt(0.52) },
    "business-conversation": { x: centerX, y: yAt(0.64) },
    platform: { x: centerX, y: yAt(0.74) },
    external: { x: centerX, y: yAt(0.83) },
    "meta-ai": { x: centerX, y: yAt(0.92) },
    trust: { x: centerX, y: bottomY },
  };
  const desktopPositions = {
    account: { x: centerX, y: yAt(0) },
    "chat-core": { x: centerX, y: yAt(0.12) },
    groups: { x: leftX, y: yAt(0.27) },
    calls: { x: centerX, y: yAt(0.27) },
    status: { x: rightX, y: yAt(0.27) },
    "community-spaces": { x: leftX, y: yAt(0.39) },
    channels: { x: rightX, y: yAt(0.39) },
    "business-conversation": { x: centerX, y: yAt(0.53) },
    platform: { x: centerX, y: yAt(0.66) },
    external: { x: centerX, y: yAt(0.78) },
    "meta-ai": { x: centerX, y: yAt(0.9) },
    trust: { x: centerX, y: bottomY },
  };
  const positionFor = (id) => {
    if (isCompactGraph) return compactPosition(id);
    if (isNarrowGraph) return narrowPositions[id];
    return desktopPositions[id];
  };
  const elements = [
    waGraphNode("account", "Account & Devices", 0, "entry", positionFor("account")),
    waGraphNode("chat-core", "Chat Core", 1, "spine", positionFor("chat-core")),
    waGraphNode("groups", "Groups & Communities", 2, "surface", positionFor("groups")),
    waGraphNode("calls", "Calls", 3, "surface", positionFor("calls")),
    waGraphNode("status", "Status / Updates", 4, "surface", positionFor("status")),
    waGraphNode("community-spaces", "Community Spaces", 5, "surface", positionFor("community-spaces")),
    waGraphNode("channels", "Channels", 6, "channel", positionFor("channels")),
    waGraphNode("business-conversation", "Business Conversation Layer", 7, "conversation", positionFor("business-conversation")),
    waGraphNode("platform", "Business Platform", 8, "business", positionFor("platform")),
    waGraphNode("external", "External Business Systems", 9, "external", positionFor("external")),
    waGraphNode("meta-ai", "Meta AI", 10, "assist", positionFor("meta-ai")),
    waGraphNode("trust", "Trust / Privacy / Policy Control Plane", "trust", "trust", positionFor("trust")),
    waGraphEdge("account-chat-core", "account", "chat-core", "enables"),
    waGraphEdge("chat-core-groups", "chat-core", "groups", "hosts"),
    waGraphEdge("chat-core-calls", "chat-core", "calls", "launches"),
    waGraphEdge("chat-core-status", "chat-core", "status", "opens/replies into"),
    waGraphEdge("groups-community", "groups", "community-spaces", "organizes"),
    waGraphEdge("status-channels", "status", "channels", "broadcasts/follows"),
    waGraphEdge("business-conversation-chat", "business-conversation", "chat-core", "adds merchant tools", "return"),
    waGraphEdge("platform-business", "platform", "business-conversation", "customer messages", "return"),
    waGraphEdge("platform-external", "platform", "external", "integrates with"),
    waGraphEdge("meta-chat", "meta-ai", "chat-core", "user-invoked assistance", "return"),
    waGraphEdge("meta-business", "meta-ai", "business-conversation", "support assist", "return"),
    waGraphEdge("trust-account", "trust", "account", "", "trust"),
    waGraphEdge("trust-chat", "trust", "chat-core", "", "trust"),
    waGraphEdge("trust-groups", "trust", "groups", "", "trust"),
    waGraphEdge("trust-status", "trust", "status", "", "trust"),
    waGraphEdge("trust-business", "trust", "business-conversation", "", "trust"),
    waGraphEdge("trust-platform", "trust", "platform", "", "trust"),
    waGraphEdge("trust-meta", "trust", "meta-ai", "", "trust"),
    waGraphEdge("trust-external", "trust", "external", "", "trust"),
  ];
  const standardNodeWidth = isCompactGraph
    ? Math.min(270, graphWidth - 54)
    : isNarrowGraph
      ? Math.min(236, (graphWidth - 72) / 2)
      : 280;
  const entryNodeWidth = isCompactGraph ? standardNodeWidth : Math.min(380, graphWidth - 80);
  const spineNodeWidth = isCompactGraph
    ? Math.min(260, graphWidth - 54)
    : isNarrowGraph
      ? Math.min(500, graphWidth - 84)
      : Math.min(540, graphWidth - 84);
  const wideNodeWidth = isCompactGraph ? standardNodeWidth : Math.min(isNarrowGraph ? 520 : 820, graphWidth - 84);
  const standardTextWidth = isCompactGraph ? Math.max(190, standardNodeWidth - 38) : 238;
  const wideTextWidth = isCompactGraph ? Math.max(190, standardNodeWidth - 38) : Math.max(260, wideNodeWidth - 70);

  whatsappGraph = window.cytoscape({
    container,
    elements,
    userZoomingEnabled: false,
    userPanningEnabled: false,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: [
      {
        selector: "node",
        style: {
          "shape": "round-rectangle",
          "width": standardNodeWidth,
          "height": isCompactGraph ? 72 : 70,
          "background-color": "#ffffff",
          "border-width": 2,
          "border-color": "#bdf4d1",
          "content": "data(label)",
          "text-wrap": "wrap",
          "text-max-width": standardTextWidth,
          "text-valign": "center",
          "text-halign": "center",
          "font-family": "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          "font-size": isCompactGraph ? 13 : 16,
          "font-weight": 700,
          "color": "#18212d",
          "overlay-opacity": 0,
          "transition-property": "background-color, border-color",
          "transition-duration": "120ms",
        },
      },
      {
        selector: "node.spine",
        style: {
          "width": spineNodeWidth,
          "height": isCompactGraph ? 84 : 84,
          "background-color": "#eafff1",
          "border-color": "#25d366",
          "font-size": isCompactGraph ? 16 : 20,
          "text-max-width": isCompactGraph ? wideTextWidth : Math.min(500, spineNodeWidth - 40),
        },
      },
      {
        selector: "node.trust",
        style: {
          "width": isCompactGraph ? standardNodeWidth : wideNodeWidth,
          "height": isCompactGraph ? 88 : 82,
          "background-color": "#0b7d43",
          "border-color": "#79e5a1",
          "color": "#ffffff",
          "font-size": isCompactGraph ? 12 : 17,
          "text-max-width": wideTextWidth,
        },
      },
      {
        selector: "node.entry",
        style: {
          "width": entryNodeWidth,
          "background-color": "#f2fff6",
          "height": isCompactGraph ? 72 : 76,
          "text-max-width": isCompactGraph ? standardTextWidth : Math.min(340, entryNodeWidth - 40),
        },
      },
      {
        selector: "node.surface",
        style: {
          "background-color": "#ffffff",
          "border-color": "#bdf4d1",
        },
      },
      {
        selector: "node.channel",
        style: {
          "background-color": "#f7edff",
          "border-color": "#d7b6f2",
        },
      },
      {
        selector: "node.conversation",
        style: {
          "width": isCompactGraph ? standardNodeWidth : wideNodeWidth,
          "height": isCompactGraph ? 84 : 82,
          "background-color": "#f0f3ff",
          "border-color": "#bac7ff",
          "text-max-width": wideTextWidth,
        },
      },
      {
        selector: "node.business",
        style: {
          "width": isCompactGraph ? standardNodeWidth : wideNodeWidth,
          "height": isCompactGraph ? 84 : 82,
          "background-color": "#f0f3ff",
          "border-color": "#bac7ff",
          "text-max-width": wideTextWidth,
        },
      },
      {
        selector: "node.external",
        style: {
          "width": isCompactGraph ? standardNodeWidth : wideNodeWidth,
          "height": isCompactGraph ? 78 : 78,
          "background-color": "#f8fafc",
          "border-color": "#cbd5e1",
          "text-max-width": wideTextWidth,
        },
      },
      {
        selector: "node.assist",
        style: {
          "width": isCompactGraph ? standardNodeWidth : wideNodeWidth,
          "height": isCompactGraph ? 72 : 74,
          "background-color": "#fff4cf",
          "border-color": "#f4c750",
          "text-max-width": wideTextWidth,
        },
      },
      {
        selector: "node:selected, node.selected-node",
        style: {
          "background-color": "#dcfce8",
          "border-color": "#0b7d43",
          "border-width": 3,
          "z-index": 10,
        },
      },
      {
        selector: "node.trust.selected-node",
        style: {
          "background-color": "#0b7d43",
          "border-color": "#ffffff",
          "border-width": 3,
        },
      },
      {
        selector: "edge",
        style: {
          "curve-style": "bezier",
          "width": 2.35,
          "line-color": "#0b7d43",
          "target-arrow-shape": "triangle",
          "target-arrow-color": "#0b7d43",
          "arrow-scale": 1.05,
          "content": "",
          "font-family": "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          "font-size": isCompactGraph ? 8 : 10,
          "font-weight": 700,
          "color": "#45604f",
          "text-background-color": "#ffffff",
          "text-background-opacity": 0.96,
          "text-background-padding": 3,
          "text-rotation": "none",
          "opacity": 0.9,
          "overlay-opacity": 0,
        },
      },
      {
        selector: "edge.return",
        style: {
          "curve-style": "unbundled-bezier",
          "control-point-distances": -86,
          "control-point-weights": 0.44,
          "line-color": "#0b7d43",
          "target-arrow-color": "#0b7d43",
          "opacity": 0.76,
        },
      },
      {
        selector: "edge.trust",
        style: {
          "curve-style": "unbundled-bezier",
          "control-point-distances": "-32",
          "control-point-weights": 0.5,
          "line-style": "dashed",
          "line-dash-pattern": [5, 6],
          "width": 1.4,
          "line-color": "#25d366",
          "target-arrow-shape": "none",
          "content": "",
          "opacity": 0.28,
        },
      },
    ],
    layout: {
      name: "preset",
      animate: false,
      fit: false,
    },
  });

  requestAnimationFrame(renderWhatsAppEdgeLabels);

  whatsappGraph.on("tap", "node", (event) => {
    selectedClusterIndex = event.target.data("index");
    updateWhatsAppGraphSelection();
    renderDetail();
  });

  whatsappGraph.on("mouseover", "node", (event) => {
    showWhatsAppTooltip(event.target);
  });

  whatsappGraph.on("mousemove", "node", (event) => {
    positionWhatsAppTooltip(event.target);
  });

  whatsappGraph.on("mouseout", "node", () => {
    hideWhatsAppTooltip();
  });

  whatsappGraph.on("tap", (event) => {
    if (event.target !== whatsappGraph) return;
    selectedClusterIndex = -1;
    updateWhatsAppGraphSelection();
    renderDetail();
    hideWhatsAppTooltip();
  });

  container.addEventListener("mouseleave", hideWhatsAppTooltip);

  updateWhatsAppGraphSelection();
}

function getWhatsAppTooltipData(node) {
  const index = node.data("index");
  if (index === "trust") {
    return {
      title: localizeText("Trust / Privacy / Policy"),
      description: localizeTrustSummary(true),
    };
  }

  const cluster = activeApp.clusters[index];
  if (!cluster) return null;
  return {
    title: localizeText(cluster.title),
    description: localizeAreaSummary(cluster),
  };
}

function showWhatsAppTooltip(node) {
  const tooltip = document.querySelector("#waFeatureTooltip");
  const data = getWhatsAppTooltipData(node);
  if (!tooltip || !data) return;

  tooltip.querySelector("strong").textContent = data.title;
  tooltip.querySelector("p").textContent = data.description;
  tooltip.hidden = false;
  positionWhatsAppTooltip(node);
  tooltip.classList.add("is-visible");
}

function positionWhatsAppTooltip(node) {
  const tooltip = document.querySelector("#waFeatureTooltip");
  const container = document.querySelector("#whatsappGraph");
  const shell = tooltip?.parentElement;
  if (!tooltip || tooltip.hidden || !container || !shell) return;

  const nodePosition = node.renderedPosition();
  const graphRect = container.getBoundingClientRect();
  const shellRect = shell.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const x = graphRect.left - shellRect.left + nodePosition.x;
  const y = graphRect.top - shellRect.top + nodePosition.y;
  const gap = 18;
  const margin = 12;
  let left = x + gap;
  let top = y - tooltipHeight / 2;

  if (left + tooltipWidth > shellRect.width - margin) {
    left = x - tooltipWidth - gap;
  }

  left = Math.max(margin, Math.min(left, shellRect.width - tooltipWidth - margin));
  top = Math.max(margin, Math.min(top, shellRect.height - tooltipHeight - margin));
  tooltip.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
}

function hideWhatsAppTooltip() {
  const tooltip = document.querySelector("#waFeatureTooltip");
  if (!tooltip) return;
  tooltip.classList.remove("is-visible");
  tooltip.hidden = true;
}

function updateWhatsAppGraphSelection() {
  if (!whatsappGraph) return;
  whatsappGraph.nodes().removeClass("selected-node");
  if (typeof selectedClusterIndex === "number" && selectedClusterIndex >= 0) {
    whatsappGraph.nodes().filter((node) => node.data("index") === selectedClusterIndex).addClass("selected-node");
  } else if (selectedClusterIndex === "trust") {
    whatsappGraph.nodes().filter((node) => node.data("index") === "trust").addClass("selected-node");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[character]);
}

function getFeatureChipDescription(item, heading, area = null) {
  return localizeChipDescription(item, heading, area);
}

function featureChipHtml(item, heading, area = null) {
  const description = getFeatureChipDescription(item, heading, area);
  const descriptionAttrs = description
    ? ` data-feature-description="${escapeHtml(description)}" tabindex="0"`
    : "";
  return `<li${descriptionAttrs}>${escapeHtml(localizeFeatureLabel(item, heading, area))}</li>`;
}

function featureGroupHtml([heading, items], area = null) {
  return `
    <section class="detail-group">
      <h4>${escapeHtml(localizeText(heading))}</h4>
      <ul>${items.map((item) => featureChipHtml(item, heading, area)).join("")}</ul>
    </section>
  `;
}

function positionDetailChipTooltip(chip) {
  const description = chip.dataset.featureDescription;
  if (!description) return;

  detailChipTooltipEl.textContent = description;
  detailChipTooltipEl.hidden = false;

  const chipRect = chip.getBoundingClientRect();
  const tooltipRect = detailChipTooltipEl.getBoundingClientRect();
  const margin = 12;
  const gap = 8;
  let left = chipRect.left;
  let top = chipRect.top - tooltipRect.height - gap;

  if (top < margin) {
    top = chipRect.bottom + gap;
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - tooltipRect.width - margin));
  top = Math.max(margin, Math.min(top, window.innerHeight - tooltipRect.height - margin));
  detailChipTooltipEl.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
  detailChipTooltipEl.classList.add("is-visible");
}

function hideDetailChipTooltip() {
  detailChipTooltipEl.classList.remove("is-visible");
  detailChipTooltipEl.hidden = true;
}

function bindDetailChipTooltips() {
  detailGroupsEl.querySelectorAll("[data-feature-description]").forEach((chip) => {
    chip.addEventListener("mouseenter", () => positionDetailChipTooltip(chip));
    chip.addEventListener("mousemove", () => positionDetailChipTooltip(chip));
    chip.addEventListener("mouseleave", hideDetailChipTooltip);
    chip.addEventListener("focus", () => positionDetailChipTooltip(chip));
    chip.addEventListener("blur", hideDetailChipTooltip);
  });
}

function renderDetail() {
  hideDetailChipTooltip();
  const isTrust = selectedClusterIndex === "trust";
  const mapNode = getMapNodeBySelection();
  const cluster = typeof selectedClusterIndex === "number" && selectedClusterIndex >= 0
    ? activeApp.clusters[selectedClusterIndex]
    : null;

  if (mapNode) {
    detailKickerEl.textContent = localizeText(activeApp.name);
    detailTitleEl.textContent = localizeText(mapNode.title);
    detailSummaryEl.textContent = localizeAreaSummary(mapNode);
    detailGroupsEl.innerHTML = mapNode.groups.map((group) => featureGroupHtml(group, mapNode)).join("");
  } else if (cluster) {
    detailKickerEl.textContent = localizeText(activeApp.name);
    detailTitleEl.textContent = localizeText(cluster.title);
    detailSummaryEl.textContent = localizeAreaSummary(cluster);
    detailGroupsEl.innerHTML = cluster.groups.map((group) => featureGroupHtml(group, cluster)).join("");
  } else if (isTrust) {
    detailKickerEl.textContent = localizeText(activeApp.name);
    detailTitleEl.textContent = localizeText("Trust / Privacy / Policy");
    detailSummaryEl.textContent = localizeTrustSummary(activeApp.diagram === "whatsapp");
    detailGroupsEl.innerHTML = [
      ["Trust and safety", activeApp.trust],
      ["Where it applies", (activeApp.mapNodes || activeApp.clusters).map((item) => item.title)],
      ["Business impact", ["Reduces abuse", "Protects accounts", "Sets policy boundaries", "Supports monetization eligibility", "Improves customer confidence"]],
    ].map((group) => featureGroupHtml(group, { title: "Trust / Privacy / Policy" })).join("");
  } else {
    detailKickerEl.textContent = localizeText("Overview");
    detailTitleEl.textContent = localizeText(activeApp.hub);
    detailSummaryEl.textContent = localizeOverview(activeApp);
    detailGroupsEl.innerHTML = [
      ["Product Areas", (activeApp.mapNodes || activeApp.clusters).map((item) => item.title)],
      ["Cross-cutting Layer", activeApp.trust],
    ].map((group) => featureGroupHtml(group, { title: "Overview" })).join("");
  }
  bindDetailChipTooltips();
}

window.addEventListener("scroll", hideWhatsAppTooltip, true);
window.addEventListener("scroll", hideModuleTooltip, true);
window.addEventListener("scroll", hideDetailChipTooltip, true);
window.addEventListener("resize", renderWhatsAppEdgeLabels);
window.addEventListener("resize", renderModuleEdgeLabels);
window.addEventListener("resize", hideDetailChipTooltip);

renderApp();
