# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 335 nodes · 1025 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a976a052`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- runAutonomousStep
- addLog
- rel
- renderAllUI
- gainExp
- runQuests
- drawCanvas
- drawPuppet
- switchZone
- renderAgentCard
- pupKeys
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 81 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 34 edges
4. `runQuests()` - 27 edges
5. `st()` - 24 edges
6. `experiment()` - 23 edges
7. `rel()` - 21 edges
8. `villageOf()` - 21 edges
9. `drawCanvas()` - 21 edges
10. `pick()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `crossRealm()` --calls--> `buildEquivalents()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `craftKnown()` --calls--> `gainExp()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (88): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+80 more)

### Community 1 - "st"
Cohesion: 0.14
Nodes (35): addTeachLog(), buildEquivalents(), consume(), craftKnown(), depthOf(), experiment(), failCap(), getTool() (+27 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.11
Nodes (32): addAnimals(), animalLog(), animalPower(), applyAISolution(), atGoal(), bestStat(), carryTraits(), creditGather() (+24 more)

### Community 3 - "addLog"
Cohesion: 0.12
Nodes (29): addLog(), airTemp(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fixWeather(), gateOf() (+21 more)

### Community 4 - "rel"
Cohesion: 0.13
Nodes (27): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), crowdTick(), electChief(), score() (+19 more)

### Community 5 - "renderAllUI"
Cohesion: 0.14
Nodes (26): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+18 more)

### Community 6 - "gainExp"
Cohesion: 0.16
Nodes (24): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), ensureAgent(), feltTemp(), findValidTile(), freshStats() (+16 more)

### Community 7 - "runQuests"
Cohesion: 0.17
Nodes (23): accessibleStations(), addOwnLog(), addRel(), askToUse(), avail(), canUse(), completeQuest(), computeNeeds() (+15 more)

### Community 8 - "drawCanvas"
Cohesion: 0.18
Nodes (13): drawAgentTag(), drawCanvas(), drawLabel(), drawSized(), drawTreeV(), getAgeStage(), getTerrainCanvas(), jitterColor() (+5 more)

### Community 9 - "drawPuppet"
Cohesion: 0.25
Nodes (9): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupActivity() (+1 more)

### Community 10 - "switchZone"
Cohesion: 0.29
Nodes (8): centerOnZone(), changeZoom(), clampView(), getZoneAt(), renderMiniMap(), setZoom(), switchZone(), travelDir()

### Community 11 - "renderAgentCard"
Cohesion: 0.33
Nodes (7): closeAgentCard(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), worldOf()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `rel`, `renderAllUI`, `gainExp`, `runQuests`, `drawCanvas`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.021052631578947368 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `st`, `runAutonomousStep`, `addLog`, `rel`, `gainExp`, `runQuests`, `drawCanvas`, `drawPuppet`, `switchZone`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.13781512605042018 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `runAutonomousStep`, `rel`, `renderAllUI`, `gainExp`, `runQuests`, `renderAgentCard`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.11491935483870967 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1206896551724138 - nodes in this community are weakly interconnected._