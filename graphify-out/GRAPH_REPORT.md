# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 564 nodes · 1795 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7995a5e2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- villageOf
- rel
- pick
- renderAllUI
- keyByName
- sigOf
- trOf
- drawPuppet
- stationInZone
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop

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
  game.js → game.js  _Bridges community 1 → community 3_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 9_
- `assignJobs()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `crossRealm()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (150): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+142 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (79): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), agentsCatchUp() (+71 more)

### Community 2 - "drawCanvas"
Cohesion: 0.05
Nodes (55): animalArt(), buildIsland(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+47 more)

### Community 3 - "villageOf"
Cohesion: 0.11
Nodes (44): accessibleStations(), agentMove(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier() (+36 more)

### Community 4 - "rel"
Cohesion: 0.08
Nodes (44): applyWish(), assignJobs(), assignQuests(), byId(), canHelp(), coldMove(), createQuest(), electChief() (+36 more)

### Community 5 - "pick"
Cohesion: 0.09
Nodes (40): addAIAgent(), addAnimals(), buildZoneTerrain(), clampC(), crossZone(), crowdTick(), damageHome(), damageStation() (+32 more)

### Community 6 - "renderAllUI"
Cohesion: 0.13
Nodes (30): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), failCap(), gateOf() (+22 more)

### Community 7 - "keyByName"
Cohesion: 0.13
Nodes (29): buildEquivalents(), buildSpot(), campOf(), carriedEff(), carriedTools(), consume(), depthOf(), effBonus() (+21 more)

### Community 8 - "sigOf"
Cohesion: 0.18
Nodes (17): applyLayout(), designInvention(), effText(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mmZoneImage() (+9 more)

### Community 9 - "trOf"
Cohesion: 0.19
Nodes (16): animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+8 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 11 - "stationInZone"
Cohesion: 0.26
Nodes (13): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), needsOf(), personalFood() (+5 more)

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `rel`, `pick`, `renderAllUI`, `keyByName`, `trOf`, `stationInZone`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012422360248447204 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `rel`, `pick`, `renderAllUI`, `sigOf`, `trOf`, `stationInZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08049334631613113 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `villageOf`, `rel`, `pick`, `renderAllUI`, `keyByName`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.05454545454545454 - nodes in this community are weakly interconnected._