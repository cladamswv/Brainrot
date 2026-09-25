# Brainrot Academy Gameplay Roadmap — v0.13 to v0.21

## Product architecture
Brainrot Academy now treats **curriculum/mastery** and **gameplay setting** as separate layers. A setting consumes the same graded question stream and reports correct/incorrect answers to the existing progress engine. This lets one skill appear inside multiple fun activities without duplicating learning logic.

## v0.13 — Gameplay Settings Foundation
- Add gameplay-setting registry.
- Add interaction renderer abstraction, preserving four-choice as the default.
- Add a child-facing "Choose How to Play" screen.
- Install the first two non-combat settings:
  - **Glorp's Pizza Party** — math questions build and bake a pizza.
  - **Glorp's Milkshake Machine** — spelling questions load and blend a milkshake.
- Keep all mastery/adaptive/progress recording shared with Brain Battle.

## v0.14 — Number Battle 2.0
- Player/Glorp HP presentation.
- Correct-answer attacks, streak combos, Glorp counterattacks.
- First boss phase controller.
- Reuse the gameplay-setting API rather than forking the question engine.

## v0.15 — Visual Math Teaching
- Fraction bars and pizzas.
- Multiplication arrays.
- Number lines.
- Place-value blocks.
- Geometry diagrams.
- Professor visual mistake explanations.

## v0.16 — Grammar Crimes 2.0
- `tap-target`, `reorder`, and punctuation-placement interactions.
- Sentence repair cases committed by Glorp.
- Grade-aware grammar crime banks.

## v0.17 — Academy Progression + Boss Battles
- Separate game progression from academic mastery.
- Academy XP, levels, achievements, boss milestones, and learning-earned cosmetics.
- Mastery percentage remains a factual educational measure and is never replaced by XP.

## v0.18 — Reading Detective 2.0
- Case-file presentation.
- Evidence-selection interaction.
- Sequencing, main idea, inference, and clue matching.
- Character-driven mini mysteries involving Glorp.

## v0.19 — Spelling Showdown 2.0
- Missing-letter interaction.
- Letter-tile reorder/unscramble.
- Spot-the-error rounds.
- Keep correctly-spelled-word recognition as one rotating format.
- Milkshake Machine can consume all spelling interaction types.

## v0.20 — Activity Expansion
- More low-cost gameplay settings built from reusable SVG/CSS props.
- Candidate activities: sundae, sandwich, taco stack, rocket launch, robot repair, dinosaur feeding.
- Randomized recipes/goals for replayability.

## v0.21 — Parent Reporting + Android Release
- Weekly learning summary.
- Strong/weak skill trends and practice recommendations.
- Signed Android release pipeline, AAB output, release signing, and store-readiness checks.

## Engineering rule
No new game mode may directly rewrite mastery logic. Modes may decorate, animate, reward, or contextualize an answer, but academic correctness continues through the shared engine and progress modules.
