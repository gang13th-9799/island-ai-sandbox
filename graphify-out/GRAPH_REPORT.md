# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 567 nodes · 1803 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fd82d82b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- addLog
- drawCanvas
- renderAllUI
- buildZoneTerrain
- runAutonomousStep
- agentHunt
- realmTravelTick
- sigOf
- drawPuppet
- steleCanvas
- prayerTick
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 57 edges
2. `addLog()` - 51 edges
3. `renderAllUI()` - 45 edges
4. `drawCanvas()` - 41 edges
5. `st()` - 39 edges
6. `villageOf()` - 31 edges
7. `gainExp()` - 30 edges
8. `pick()` - 29 edges
9. `agentWork()` - 28 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 6 → community 7_
- `agentHunt()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (19 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (151): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+143 more)

### Community 1 - "st"
Cohesion: 0.08
Nodes (79): addFood(), addTeachLog(), agentGather(), agentLevel(), agentMove(), agentWork(), assignGodQuests(), atGoal() (+71 more)

### Community 2 - "addLog"
Cohesion: 0.07
Nodes (63): accessibleStations(), addLog(), addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests() (+55 more)

### Community 3 - "drawCanvas"
Cohesion: 0.05
Nodes (59): animalArt(), buildIsland(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgent(), drawAgentTag() (+51 more)

### Community 4 - "renderAllUI"
Cohesion: 0.09
Nodes (43): buildEquivalents(), campOf(), canUse(), carriedTools(), consume(), depthOf(), effBonus(), effBonusSlow() (+35 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (38): addAIAgent(), applyWish(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+30 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.14
Nodes (29): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyStamina() (+21 more)

### Community 7 - "agentHunt"
Cohesion: 0.15
Nodes (23): addAnimals(), agentHunt(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne() (+15 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.18
Nodes (21): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm() (+13 more)

### Community 9 - "sigOf"
Cohesion: 0.19
Nodes (14): applyLayout(), designInvention(), effText(), giveSoul(), hashStr(), insectBody(), insectsOf(), mmZoneImage() (+6 more)

### Community 10 - "drawPuppet"
Cohesion: 0.20
Nodes (10): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), hairStyleOf() (+2 more)

### Community 11 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 12 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `renderAllUI`, `buildZoneTerrain`, `agentHunt`, `realmTravelTick`, `sigOf`, `prayerTick`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012345679012345678 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `renderAllUI`, `buildZoneTerrain`, `runAutonomousStep`, `agentHunt`, `realmTravelTick`, `sigOf`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.07659850697825381 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `addLog`, `drawCanvas`, `renderAllUI`, `buildZoneTerrain`, `runAutonomousStep`, `agentHunt`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.06502816180235535 - nodes in this community are weakly interconnected._