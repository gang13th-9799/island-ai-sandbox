# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 620 nodes · 2007 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1615d560`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- buildZoneTerrain
- renderAllUI
- villageOf
- drawCanvas
- productDef
- runAutonomousStep
- rel
- getZoneAt
- renderAgentCard
- drawPuppet
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- researchTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 32 edges
7. `villageOf()` - 32 edges
8. `agentWork()` - 31 edges
9. `pick()` - 31 edges
10. `experiment()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 8_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (162): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+154 more)

### Community 1 - "addLog"
Cohesion: 0.10
Nodes (64): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), applyWish() (+56 more)

### Community 2 - "buildZoneTerrain"
Cohesion: 0.06
Nodes (60): addAIAgent(), advanceGame(), answerPrayer(), buildSpot(), buildStation(), buildZoneTerrain(), captureRealm(), clampC() (+52 more)

### Community 3 - "renderAllUI"
Cohesion: 0.06
Nodes (51): addAnimals(), animalLog(), animalPower(), applyAISolution(), auraR(), carryTraits(), coldMove(), drawStickFigure() (+43 more)

### Community 4 - "villageOf"
Cohesion: 0.10
Nodes (50): agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier() (+42 more)

### Community 5 - "drawCanvas"
Cohesion: 0.07
Nodes (45): animalArt(), centerOnZone(), clampView(), damageStation(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas() (+37 more)

### Community 6 - "productDef"
Cohesion: 0.09
Nodes (43): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), consume() (+35 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.10
Nodes (38): accessibleStations(), agentsCatchUp(), agentsRealtime(), agentStep(), airTemp(), baseTemp(), bestStat(), bodyRealtime() (+30 more)

### Community 8 - "rel"
Cohesion: 0.11
Nodes (33): assignJobs(), assignQuests(), byId(), canHelp(), courtStep(), createQuest(), crowdTick(), electChief() (+25 more)

### Community 9 - "getZoneAt"
Cohesion: 0.18
Nodes (15): applyLayout(), buildIsland(), drawMiniMap(), getZoneAt(), insectBody(), insectsOf(), isleNoise(), miniMapTap() (+7 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.15
Nodes (14): closeAgentCard(), closeAgentPop(), DIFF_STARS(), getAgeStage(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap() (+6 more)

### Community 11 - "drawPuppet"
Cohesion: 0.17
Nodes (12): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+4 more)

### Community 12 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `buildZoneTerrain`, `renderAllUI`, `villageOf`, `productDef`, `rel`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011494252873563218 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `buildZoneTerrain`, `renderAllUI`, `villageOf`, `drawCanvas`, `runAutonomousStep`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09821428571428571 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `buildZoneTerrain`, `villageOf`, `productDef`, `runAutonomousStep`, `rel`, `getZoneAt`, `renderAgentCard`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.06271186440677966 - nodes in this community are weakly interconnected._