# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 343 nodes · 1052 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5b91a5d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- experiment
- addLog
- runAutonomousStep
- realmTravelTick
- ecologyTick
- buildZoneTerrain
- drawCanvas
- st
- renderAgentCard
- drawPuppet
- zoneWeather
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 82 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 34 edges
4. `runQuests()` - 27 edges
5. `drawCanvas()` - 24 edges
6. `st()` - 24 edges
7. `experiment()` - 23 edges
8. `rel()` - 21 edges
9. `villageOf()` - 21 edges
10. `pick()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `loadGameState()` --indirect_call--> `initFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `runQuests()` --calls--> `accessibleStations()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `crossRealm()` --calls--> `buildEquivalents()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `getEquip()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 10_

## Import Cycles
- None detected.

## Communities (14 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (89): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+81 more)

### Community 1 - "experiment"
Cohesion: 0.11
Nodes (40): accessibleStations(), avail(), buildEquivalents(), canUse(), computeNeeds(), consume(), craftKnown(), depthOf() (+32 more)

### Community 2 - "addLog"
Cohesion: 0.11
Nodes (40): addLog(), addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+32 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.12
Nodes (37): addAIAgent(), addFood(), agentLevel(), atGoal(), atStore(), bagCap(), bagCount(), bagValue() (+29 more)

### Community 4 - "realmTravelTick"
Cohesion: 0.13
Nodes (26): captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), ensureAgent(), freshStats(), gateOf(), godTick() (+18 more)

### Community 5 - "ecologyTick"
Cohesion: 0.15
Nodes (20): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+12 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.17
Nodes (18): buildStation(), buildZoneTerrain(), clampC(), closeAgentCard(), findValidTile(), getZoneAt(), isNightTime(), knowledgeExchange() (+10 more)

### Community 7 - "drawCanvas"
Cohesion: 0.15
Nodes (17): centerOnZone(), changeZoom(), clampView(), drawAgent(), drawCanvas(), drawSized(), drawTreeV(), elevOf() (+9 more)

### Community 8 - "st"
Cohesion: 0.27
Nodes (16): addTeachLog(), failCap(), gainExp(), isRestShelter(), maxHp(), moveToward(), observe(), recipeCap() (+8 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.18
Nodes (12): drawAgentTag(), drawLabel(), getAgeStage(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon() (+4 more)

### Community 10 - "drawPuppet"
Cohesion: 0.22
Nodes (9): armLen(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood(), pupArmIK() (+1 more)

### Community 11 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `experiment`, `addLog`, `realmTravelTick`, `ecologyTick`, `buildZoneTerrain`, `drawCanvas`, `st`, `zoneWeather`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.020833333333333332 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `experiment`, `addLog`, `realmTravelTick`, `ecologyTick`, `buildZoneTerrain`, `st`, `renderAgentCard`, `drawPuppet`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `experiment` be split into smaller, more focused modules?**
  _Cohesion score 0.1141025641025641 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `experiment`, `addLog`, `runAutonomousStep`, `buildZoneTerrain`, `renderAgentCard`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1076923076923077 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.12012012012012012 - nodes in this community are weakly interconnected._