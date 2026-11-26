# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 677 nodes · 2218 edges · 23 communities (16 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `38e03847`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- villageOf
- keyByName
- buildZoneTerrain
- drawCanvas
- runAutonomousStep
- renderAllUI
- sigOf
- rel
- drawPuppet
- trOf
- steleCanvas
- objWorldTick
- pupKeys
- steleTarget
- bridgeAt
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 53 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 46 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 33 edges
8. `agentMove()` - 32 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `produce()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (23 total, 7 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (178): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+170 more)

### Community 1 - "addLog"
Cohesion: 0.08
Nodes (74): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentLevel(), agentStep() (+66 more)

### Community 2 - "villageOf"
Cohesion: 0.09
Nodes (65): accessibleStations(), agentHunt(), agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail() (+57 more)

### Community 3 - "keyByName"
Cohesion: 0.06
Nodes (57): apSel(), apToggle(), atkOf(), bagCap(), buildEquivalents(), campOf(), carriedEff(), carriedTools() (+49 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.06
Nodes (53): addAIAgent(), addAnimals(), applyAISolution(), applyWish(), blockedSet(), bridgeKitStep(), bridgeLane(), bridgeSites() (+45 more)

### Community 5 - "drawCanvas"
Cohesion: 0.06
Nodes (53): animalArt(), auraR(), bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), clampView(), drawAgentTag() (+45 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.11
Nodes (38): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyStamina() (+30 more)

### Community 7 - "renderAllUI"
Cohesion: 0.09
Nodes (37): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance(), gateOf() (+29 more)

### Community 8 - "sigOf"
Cohesion: 0.12
Nodes (25): applyLayout(), buildIsland(), designInvention(), drawMiniMap(), effText(), findNewRecipes(), getZoneAt(), giveSoul() (+17 more)

### Community 9 - "rel"
Cohesion: 0.15
Nodes (24): assignJobs(), bestHomeTier(), byId(), coldMove(), crowdTick(), electChief(), score(), hasShelter() (+16 more)

### Community 10 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 11 - "trOf"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 12 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 15 - "steleTarget"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `villageOf`, `keyByName`, `buildZoneTerrain`, `renderAllUI`, `sigOf`, `rel`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010526315789473684 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `buildZoneTerrain`, `drawCanvas`, `runAutonomousStep`, `renderAllUI`, `sigOf`, `rel`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.07811921510551648 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `villageOf`, `keyByName`, `buildZoneTerrain`, `runAutonomousStep`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.08653846153846154 - nodes in this community are weakly interconnected._