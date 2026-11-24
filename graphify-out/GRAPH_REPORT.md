# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 332 nodes · 1021 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6aca0b3d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runQuests
- runAutonomousStep
- addLog
- realmTravelTick
- ecologyTick
- buildZoneTerrain
- drawCanvas
- drawPuppet
- switchZone
- makeSoul
- newAgent
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 81 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 34 edges
4. `runQuests()` - 27 edges
5. `st()` - 24 edges
6. `experiment()` - 23 edges
7. `villageOf()` - 21 edges
8. `rel()` - 21 edges
9. `pick()` - 20 edges
10. `drawCanvas()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 4_
- `loadGameState()` --indirect_call--> `initFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 6_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (14 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (87): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+79 more)

### Community 1 - "runQuests"
Cohesion: 0.09
Nodes (59): accessibleStations(), addTeachLog(), avail(), buildEquivalents(), canUse(), completeQuest(), computeNeeds(), consume() (+51 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.11
Nodes (40): addAIAgent(), addFood(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat() (+32 more)

### Community 3 - "addLog"
Cohesion: 0.14
Nodes (30): addLog(), addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+22 more)

### Community 4 - "realmTravelTick"
Cohesion: 0.16
Nodes (21): captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), loadGameState(), logToRealm() (+13 more)

### Community 5 - "ecologyTick"
Cohesion: 0.15
Nodes (20): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+12 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.18
Nodes (20): airTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather(), isRestShelter() (+12 more)

### Community 7 - "drawCanvas"
Cohesion: 0.13
Nodes (19): closeAgentCard(), drawAgentTag(), drawCanvas(), drawLabel(), drawPixelSprite(), getAgeStage(), getTerrainCanvas(), jitterColor() (+11 more)

### Community 8 - "drawPuppet"
Cohesion: 0.25
Nodes (9): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupActivity() (+1 more)

### Community 9 - "switchZone"
Cohesion: 0.29
Nodes (8): centerOnZone(), changeZoom(), clampView(), getZoneAt(), renderMiniMap(), setZoom(), switchZone(), travelDir()

### Community 10 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 11 - "newAgent"
Cohesion: 0.83
Nodes (4): ensureAgent(), freshStats(), newAgent(), randomTalent()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `runQuests`, `addLog`, `realmTravelTick`, `ecologyTick`, `buildZoneTerrain`, `drawCanvas`, `newAgent`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.021505376344086023 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `runQuests`, `addLog`, `realmTravelTick`, `ecologyTick`, `drawCanvas`, `drawPuppet`, `switchZone`, `makeSoul`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `runQuests` be split into smaller, more focused modules?**
  _Cohesion score 0.08591466978375219 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runQuests`, `runAutonomousStep`, `realmTravelTick`, `ecologyTick`, `buildZoneTerrain`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.11282051282051282 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.14482758620689656 - nodes in this community are weakly interconnected._