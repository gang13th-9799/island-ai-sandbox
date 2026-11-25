# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 550 nodes · 1727 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bfad4ff0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- runAutonomousStep
- drawCanvas
- keyByName
- renderAllUI
- buildZoneTerrain
- rel
- objsOf
- trOf
- drawPuppet
- needsOf
- steleCanvas
- makeSoul
- pupKeys
- setZoom
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 66 edges
2. `addLog()` - 50 edges
3. `renderAllUI()` - 44 edges
4. `drawCanvas()` - 42 edges
5. `st()` - 38 edges
6. `villageOf()` - 30 edges
7. `pick()` - 29 edges
8. `agentWork()` - 28 edges
9. `gainExp()` - 28 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 9_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `transferKnowledge()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `agentMove()` --calls--> `buildZoneTerrain()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (148): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+140 more)

### Community 1 - "villageOf"
Cohesion: 0.08
Nodes (63): accessibleStations(), addTeachLog(), agentMove(), agentsRealtime(), agentStep(), agentWork(), applyWish(), atGoal() (+55 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (58): addFood(), addLog(), agentGather(), agentHunt(), applyAISolution(), assignGodQuests(), bagCap(), bagCount() (+50 more)

### Community 3 - "drawCanvas"
Cohesion: 0.05
Nodes (55): animalArt(), buildIsland(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+47 more)

### Community 4 - "keyByName"
Cohesion: 0.12
Nodes (33): addOwnLog(), askToUse(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), consume() (+25 more)

### Community 5 - "renderAllUI"
Cohesion: 0.10
Nodes (33): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance(), gateOf() (+25 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.12
Nodes (31): addAIAgent(), addAnimals(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone(), ensureAgent() (+23 more)

### Community 7 - "rel"
Cohesion: 0.12
Nodes (30): addRel(), assignJobs(), assignQuests(), byId(), canHelp(), crowdTick(), electChief(), score() (+22 more)

### Community 8 - "objsOf"
Cohesion: 0.11
Nodes (24): applyLayout(), findNewRecipes(), harvestTool(), hashStr(), hrand(), insectsOf(), mkObj(), mmZoneImage() (+16 more)

### Community 9 - "trOf"
Cohesion: 0.16
Nodes (19): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), getAdjacentZones() (+11 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 11 - "needsOf"
Cohesion: 0.27
Nodes (12): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), needsOf(), personalFood() (+4 more)

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `rel`, `objsOf`, `trOf`, `needsOf`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012578616352201259 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `rel`, `trOf`, `needsOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.08346134152585766 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `keyByName`, `buildZoneTerrain`, `rel`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09921355111917725 - nodes in this community are weakly interconnected._