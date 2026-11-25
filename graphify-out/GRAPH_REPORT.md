# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 504 nodes · 1540 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `134a26ea`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- experiment
- renderAllUI
- runAutonomousStep
- drawCanvas
- makeRealmState
- buildZoneTerrain
- addLog
- rel
- drawPuppet
- zoneWeather
- steleCanvas
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- itemArtKey
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 37 edges
5. `st()` - 32 edges
6. `villageOf()` - 27 edges
7. `runQuests()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `applyWish()` --calls--> `buildZoneTerrain()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `applyWish()` --calls--> `byId()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `applyWish()` --calls--> `getAdjacentZones()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `applyWish()` --calls--> `syncFauna()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (139): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+131 more)

### Community 1 - "experiment"
Cohesion: 0.09
Nodes (52): applyWish(), avail(), buildEquivalents(), canUse(), consume(), craftKnown(), depthOf(), designInvention() (+44 more)

### Community 2 - "renderAllUI"
Cohesion: 0.10
Nodes (48): addFood(), addTeachLog(), agentLevel(), bagCap(), bagCount(), buildHut(), chooseKept(), completeQuest() (+40 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.09
Nodes (44): accessibleStations(), addAnimals(), animalLog(), animalPower(), applyAISolution(), atGoal(), atStore(), bagValue() (+36 more)

### Community 4 - "drawCanvas"
Cohesion: 0.07
Nodes (42): animalArt(), centerOnZone(), clampView(), DIFF_STARS(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas() (+34 more)

### Community 5 - "makeRealmState"
Cohesion: 0.09
Nodes (37): addAIAgent(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), ensureAgent(), freshStats() (+29 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.10
Nodes (34): applyLayout(), buildHome(), buildIsland(), buildStation(), buildZoneTerrain(), clampC(), closeAgentCard(), crowdTick() (+26 more)

### Community 7 - "addLog"
Cohesion: 0.11
Nodes (29): addLog(), assignGodQuests(), assignQuests(), canHelp(), createQuest(), damageHome(), damageStation(), damageStele() (+21 more)

### Community 8 - "rel"
Cohesion: 0.12
Nodes (29): addOwnLog(), addRel(), askToUse(), assignJobs(), bestHomeTier(), byId(), electChief(), score() (+21 more)

### Community 9 - "drawPuppet"
Cohesion: 0.14
Nodes (14): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 10 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 11 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg()

### Community 12 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `experiment`, `renderAllUI`, `drawCanvas`, `makeRealmState`, `buildZoneTerrain`, `addLog`, `rel`, `zoneWeather`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013422818791946308 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `experiment`, `renderAllUI`, `runAutonomousStep`, `makeRealmState`, `buildZoneTerrain`, `rel`, `zoneWeather`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `experiment` be split into smaller, more focused modules?**
  _Cohesion score 0.08823529411764706 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `experiment`, `runAutonomousStep`, `drawCanvas`, `makeRealmState`, `buildZoneTerrain`, `addLog`, `rel`, `drawPuppet`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.09929078014184398 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09302325581395349 - nodes in this community are weakly interconnected._