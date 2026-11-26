# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 608 nodes · 1961 edges · 22 communities (19 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `71aaae5d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- villageOf
- drawCanvas
- keyByName
- renderAllUI
- buildZoneTerrain
- rel
- objsOf
- bodyRealtime
- trOf
- drawPuppet
- mapTap
- steleCanvas
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- steleTarget
- setZoom
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 47 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 6_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 10_

## Import Cycles
- None detected.

## Communities (22 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (161): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+153 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (83): addFood(), addLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), agentsCatchUp(), agentStep() (+75 more)

### Community 2 - "villageOf"
Cohesion: 0.10
Nodes (54): accessibleStations(), agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue() (+46 more)

### Community 3 - "drawCanvas"
Cohesion: 0.07
Nodes (45): animalArt(), auraR(), centerOnZone(), clampView(), damageStation(), drawAgentTag(), drawAnimal(), drawCanvas() (+37 more)

### Community 4 - "keyByName"
Cohesion: 0.09
Nodes (39): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), closeAgentCard() (+31 more)

### Community 5 - "renderAllUI"
Cohesion: 0.10
Nodes (37): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance(), gateOf() (+29 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.13
Nodes (27): addAIAgent(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone(), ensureAgent() (+19 more)

### Community 7 - "rel"
Cohesion: 0.13
Nodes (27): addOwnLog(), askToUse(), assignJobs(), bestHomeTier(), byId(), coldMove(), crowdTick(), electChief() (+19 more)

### Community 8 - "objsOf"
Cohesion: 0.11
Nodes (27): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), harvestTool(), hashStr(), hrand() (+19 more)

### Community 9 - "bodyRealtime"
Cohesion: 0.15
Nodes (23): agentsRealtime(), airTemp(), baseTemp(), beastCheck(), blockedSet(), bodyRealtime(), bodyTemp(), clothWarmth() (+15 more)

### Community 10 - "trOf"
Cohesion: 0.14
Nodes (22): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+14 more)

### Community 11 - "drawPuppet"
Cohesion: 0.16
Nodes (16): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+8 more)

### Community 12 - "mapTap"
Cohesion: 0.25
Nodes (8): itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 18 - "steleTarget"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `rel`, `bodyRealtime`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011560693641618497 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `rel`, `bodyRealtime`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07552159858947988 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `villageOf`, `drawCanvas`, `keyByName`, `buildZoneTerrain`, `rel`, `objsOf`, `trOf`, `drawPuppet`, `mapTap`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.09853249475890985 - nodes in this community are weakly interconnected._