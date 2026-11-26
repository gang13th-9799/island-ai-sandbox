# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 611 nodes · 1978 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2ddcaff1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- villageOf
- drawCanvas
- keyByName
- rel
- buildZoneTerrain
- realmTravelTick
- renderAllUI
- trOf
- hashStr
- mapTap
- prayerTick
- steleCanvas
- makeSoul
- drawHairLayer
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 9_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 7_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (22 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (161): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+153 more)

### Community 1 - "addLog"
Cohesion: 0.11
Nodes (58): addFood(), addLog(), addTeachLog(), agentGather(), agentHunt(), applyWish(), assignGodQuests(), bagCount() (+50 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (52): accessibleStations(), agentsCatchUp(), agentsRealtime(), agentStep(), airTemp(), baseTemp(), beastCheck(), bestStat() (+44 more)

### Community 3 - "villageOf"
Cohesion: 0.11
Nodes (47): agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier() (+39 more)

### Community 4 - "drawCanvas"
Cohesion: 0.07
Nodes (45): animalArt(), centerOnZone(), clampView(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+37 more)

### Community 5 - "keyByName"
Cohesion: 0.09
Nodes (41): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools() (+33 more)

### Community 6 - "rel"
Cohesion: 0.11
Nodes (34): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), courtStep() (+26 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.12
Nodes (28): addAIAgent(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone(), crowdTick(), damageStele() (+20 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.14
Nodes (27): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm() (+19 more)

### Community 9 - "renderAllUI"
Cohesion: 0.10
Nodes (26): applyAISolution(), armLen(), auraR(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawItem() (+18 more)

### Community 10 - "trOf"
Cohesion: 0.15
Nodes (21): addAnimals(), animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+13 more)

### Community 11 - "hashStr"
Cohesion: 0.15
Nodes (20): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), insectsOf() (+12 more)

### Community 12 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 13 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 16 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `villageOf`, `keyByName`, `rel`, `buildZoneTerrain`, `realmTravelTick`, `renderAllUI`, `trOf`, `prayerTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011560693641618497 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `villageOf`, `rel`, `buildZoneTerrain`, `realmTravelTick`, `renderAllUI`, `trOf`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.10586811857229281 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `runAutonomousStep`, `villageOf`, `drawCanvas`, `keyByName`, `rel`, `buildZoneTerrain`, `realmTravelTick`, `trOf`, `hashStr`, `mapTap`, `prayerTick`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.0784313725490196 - nodes in this community are weakly interconnected._