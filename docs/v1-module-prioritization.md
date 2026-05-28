# V1 Module Prioritization

This note is the source of truth for deciding which mapped modules belong in the V1 architecture proof.

The fixed V1 route is:

```text
外部內容 / 邀請
→ 公開頻道預覽
→ 關注 / 加入
→ 結構化討論
→ 主題互動
→ 收件箱 / 私聊留存
```

V1 architecture is not built by adding every possible mapped module. It is built by selecting the minimum modules needed to satisfy the priority roles and make the fixed route work.

## Priority Roles

### 普通用戶

Needs:

- 穩定聊天
- 好友邀請
- 群組
- 狀態更新
- 安全封鎖

Mapped modules from `compare_features/index.html`:

- `messaging-identity`
- `external-entry`
- `community-governance`
- `status-updates`
- `trust-risk`

V1 interpretation:

Must support stable personal chat, invitation entry, group participation, basic update/status surface, and block/report safety.

### 商家 / 商業主

Needs:

- 商業檔案
- 頻道經營
- 商品卡
- AI 客服
- 外部投放

Mapped modules from `compare_features/index.html`:

- `business-commerce`
- `channel-loop`
- `external-entry`
- `support-crm`
- `platform-ai-ops`
- `trust-risk`

V1 interpretation:

Must support business identity, channel operation, lightweight product card in chat/channel, and external traffic entry. AI 客服 is a future support or automation hook, not a full V1 AI support system.

## Classification

### A. V1 Necessary Modules

These modules directly determine whether the fixed V1 route works. They require detailed reasoning, competitor reference flow comparison, actual mocked flows in `interaction_playground`, adopted/rejected pattern, and architecture implication.

Modules:

1. `messaging-identity`
2. `external-entry`
3. `channel-loop`
4. `community-governance`
5. `trust-risk`

### B. V1 Necessary But Lightweight

`business-commerce` is required because 商家 / 商業主 is a priority role, but V1 should only include lightweight representation.

V1 meaning:

- business profile
- business chat label
- product card object
- product card shared into chat or channel
- no full marketplace
- no payment
- no order fulfillment

It still needs reference flow comparison and mock because it affects the business-facing route.

### C. V1 Lightweight Placeholder

`status-updates` is required by 普通用戶, but should not become a large content product in V1.

V1 meaning:

- lightweight update/status object
- reply or return path into chat/inbox
- may connect to inbox or channel
- no full stories editor
- no social feed
- no recommendation system

It can be represented in the architecture map. It does not need the same level of detailed mock as core route modules unless time allows.

### D. Later Expansion Modules

These are important future capabilities, but they are not required to prove the V1 route.

Later modules:

- `support-crm`
- `platform-ai-ops`
- `mini-apps`
- `b2b-selling`
- advanced matching/recommendation
- full AI agent
- full bot/API ecosystem
- full CRM/ticketing
- full mini-app marketplace
- full marketplace, payment, order, and fulfillment

They should appear only as later expansion, reserved hooks, or future integration points. Do not create detailed V1 mock flows for them.

## Need To Module Coverage

| Role need | Required module | V1 classification | Architecture placement |
| --- | --- | --- | --- |
| 普通用戶: 穩定聊天 | `messaging-identity` | V1 necessary | Identity + Inbox / Relationship Layer |
| 普通用戶: 好友邀請 | `external-entry` | V1 necessary | External Entry |
| 普通用戶: 群組 | `community-governance` | V1 necessary | Community Group + Topic Layer |
| 普通用戶: 狀態更新 | `status-updates` | V1 lightweight placeholder | Status / Updates Surface |
| 普通用戶: 安全封鎖 | `trust-risk` | V1 necessary | Governance Layer |
| 商家 / 商業主: 商業檔案 | `business-commerce` | V1 lightweight necessary | Business Profile |
| 商家 / 商業主: 頻道經營 | `channel-loop` | V1 necessary | Public Channel |
| 商家 / 商業主: 商品卡 | `business-commerce` | V1 lightweight necessary | Product Card in Chat / Channel |
| 商家 / 商業主: AI 客服 | `support-crm` + `platform-ai-ops` | Later extension | Reserved support / automation hook only |
| 商家 / 商業主: 外部投放 | `external-entry` + `channel-loop` | V1 necessary | External Entry + Public Channel |

## Interaction Playground Scope

Detailed V1 mock modules:

1. `messaging-identity`
2. `external-entry`
3. `channel-loop`
4. `community-governance`
5. `trust-risk`
6. `business-commerce`

Optional lightweight mock:

- `status-updates`

Do not build detailed mocks for:

- `support-crm`
- `platform-ai-ops`
- AI agent
- CRM ticketing
- bot/API ecosystem
- mini-apps
- b2b-selling

If these later modules appear in `interaction_playground`, label them as future extension, research available, not V1 route-critical, and no detailed mock in this stage.

## Final V1 Architecture Meaning

The V1 core is:

```text
External Entry
→ Public Channel
→ Join / Follow State
→ Community Group
→ Topic Layer
→ Inbox / Relationship Layer
→ Return Loop
```

Cross-cutting V1 layers:

- Identity Layer: login, personal identity, business identity label, join/follow, inbox, safety.
- Governance Layer: report, block, mute, admin, remove member, basic moderation log.
- Business Lightweight Layer: business profile, product card object, business chat label.
- Status / Updates Surface: lightweight updates/status, not full stories/feed.

Later extension area:

- AI support
- CRM
- Bot/API
- mini-apps
- full commerce

The conclusion is that V1 should include only the modules required to satisfy ordinary users and business owners at the minimum viable architecture level. AI, CRM, Bot/API, mini-apps, and full commerce are future expansion directions, not V1 architecture proof.
