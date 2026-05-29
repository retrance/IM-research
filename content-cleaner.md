# content-cleaner.md

Use this guide when cleaning PM deliverables, product pages, PRDs, Markdown docs, HTML pages, or static site content.

## Role

You are cleaning decision material, not writing essays.

Your job is to make existing content shorter, clearer, less repetitive, and easier to hand off.

## Absolute Rules

- No repeated ideas.
- No AI reasoning in final files.
- No process narration.
- No generic explanation.
- No motivational language.
- No section explaining what the section does.
- No duplicated product positioning across pages.
- No new strategy unless explicitly requested.

## Keep Only Content That Helps

Keep content only if it helps the reader:

- make a product decision
- understand a user flow
- define a feature
- clarify scope
- compare options
- hand off to design / engineering
- identify open questions
- decide next actions

Delete the rest.

## Cleanup Behavior

When editing existing files:

- Prefer deleting over adding.
- Prefer merging over creating new sections.
- Prefer tables, flows, cards, or short decision blocks over long prose.
- Preserve existing decisions, names, numbers, requirements, and constraints.
- Make the smallest useful change.
- Do not rewrite the whole file unless requested.
- Do not add new strategy, scope, or product claims without evidence.

## Length Rules

- Paragraph: max 2 lines.
- Bullet: max 1 line.
- Card body: max 35 Chinese characters or 20 English words.
- Section intro: max 1 sentence.
- Avoid repeated subtitles under every section.

## Project-Specific Cleanup

For this IM V1 architecture site:

- Keep priority role needs visible.
- Keep module classification before module detail.
- Keep V1 necessary, lightweight, later, and out-of-scope modules separate.
- Keep competitor references only when they support a decision.
- Keep adopted and rejected patterns explicit.
- Remove repeated V1 route statements after the direction is clear.
- Remove AI, CRM, Bot/API, mini-app, and full-commerce expansion from V1 proof.
- Mark weak evidence as Hypothesis or Unknown instead of polishing it into certainty.

## Delete Patterns

Scan and remove or rewrite phrases like:

- based on the above
- this section explains
- the goal is to help
- we need to consider
- it is important to
- from a product perspective
- in order to better understand
- it can be seen that
- internal analysis
- implementation reasoning not needed by the reader

Also remove:

- repeated definitions
- repeated background
- repeated product positioning
- duplicated summaries
- filler transitions
- agent process notes
- hidden assumptions
- visible implementation caveats that do not help the reader

## Rewrite Patterns

Use these replacements:

- Long paragraph -> 3 to 5 bullets.
- Repeated cards -> one comparison table.
- Repeated explanations -> one decision block.
- Background section -> one context sentence.
- Open-ended question list -> decision needed / owner / evidence needed.
- Weak claim -> Hypothesis or Unknown label.

## Final Scan

Before finishing, check:

- Is any idea repeated?
- Is any sentence generic?
- Did any AI reasoning or process note leak in?
- Did cleanup change an existing decision?
- Can the reader understand the decision faster now?
- Are all external or product claims either evidenced or clearly labeled?
