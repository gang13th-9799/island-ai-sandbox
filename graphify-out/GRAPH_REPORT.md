# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 316 nodes · 970 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ef057ff2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- experiment
- runAutonomousStep
- addLog
- renderAllUI
- rel
- buildZoneTerrain
- drawCanvas
- ecologyTick
- drawPuppet
- clampView
- pupKeys
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 78 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 32 edges
4. `runQuests()` - 27 edges
5. `experiment()` - 23 edges
6. `st()` - 22 edges
7. `pick()` - 20 edges
8. `rel()` - 20 edges
9. `drawCanvas()` - 20 edges
10. `villageOf()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 8_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `runQuests()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `crossRealm()` --calls--> `buildEquivalents()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (81): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+73 more)

### Community 1 - "experiment"
Cohesion: 0.13
Nodes (38): addTeachLog(), buildEquivalents(), completeQuest(), consume(), craftKnown(), depthOf(), electChief(), score() (+30 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.14
Nodes (33): accessibleStations(), addAnimals(), applyAISolution(), atGoal(), avail(), bestStat(), canUse(), computeNeeds() (+25 more)

### Community 3 - "addLog"
Cohesion: 0.11
Nodes (32): addAIAgent(), addLog(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), ensureAgent(), freshStats() (+24 more)

### Community 4 - "renderAllUI"
Cohesion: 0.14
Nodes (26): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+18 more)

### Community 5 - "rel"
Cohesion: 0.15
Nodes (25): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), failQuest() (+17 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.16
Nodes (19): buildStation(), buildZoneTerrain(), clampC(), crowdTick(), findValidTile(), getAdjacentZones(), getTerrainCanvas(), getZoneAt() (+11 more)

### Community 7 - "drawCanvas"
Cohesion: 0.15
Nodes (17): closeAgentCard(), drawAgentTag(), drawCanvas(), drawLabel(), drawPixelSprite(), getAgeStage(), mapTap(), openAgentCard() (+9 more)

### Community 8 - "ecologyTick"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 9 - "drawPuppet"
Cohesion: 0.18
Nodes (13): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), isNightTime() (+5 more)

### Community 10 - "clampView"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 11 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `experiment`, `addLog`, `renderAllUI`, `rel`, `buildZoneTerrain`, `drawCanvas`, `ecologyTick`, `drawPuppet`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.022988505747126436 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `experiment`, `runAutonomousStep`, `addLog`, `rel`, `buildZoneTerrain`, `drawCanvas`, `ecologyTick`, `drawPuppet`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `experiment` be split into smaller, more focused modules?**
  _Cohesion score 0.1251778093883357 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `experiment` to `game.js`, `runAutonomousStep`, `renderAllUI`, `rel`, `buildZoneTerrain`, `drawCanvas`, `drawPuppet`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.13636363636363635 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.11088709677419355 - nodes in this community are weakly interconnected._