# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 367 nodes · 1120 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b4bf4875`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- productDef
- ecologyTick
- renderAllUI
- rel
- realmTravelTick
- buildZoneTerrain
- drawCanvas
- renderAgentCard
- drawPuppet
- newAgent
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 86 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 38 edges
4. `runQuests()` - 27 edges
5. `st()` - 25 edges
6. `experiment()` - 24 edges
7. `drawCanvas()` - 24 edges
8. `pick()` - 21 edges
9. `villageOf()` - 21 edges
10. `rel()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 6_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (14 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (95): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+87 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.12
Nodes (48): accessibleStations(), addLog(), addRel(), addTeachLog(), applyAISolution(), assignGodQuests(), atGoal(), avail() (+40 more)

### Community 2 - "productDef"
Cohesion: 0.12
Nodes (32): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), craftKnown(), depthOf(), getTool() (+24 more)

### Community 3 - "ecologyTick"
Cohesion: 0.11
Nodes (28): addAnimals(), animalLog(), animalPower(), applyWish(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+20 more)

### Community 4 - "renderAllUI"
Cohesion: 0.14
Nodes (26): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+18 more)

### Community 5 - "rel"
Cohesion: 0.14
Nodes (25): assignJobs(), assignQuests(), byId(), canHelp(), crowdTick(), electChief(), score(), holdFoundingMeeting() (+17 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.14
Nodes (24): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), initFauna() (+16 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.18
Nodes (22): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+14 more)

### Community 8 - "drawCanvas"
Cohesion: 0.13
Nodes (20): centerOnZone(), changeZoom(), clampView(), drawAgentTag(), drawCanvas(), drawLabel(), drawSized(), drawTreeV() (+12 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.16
Nodes (14): closeAgentCard(), DIFF_STARS(), getAgeStage(), getZoneAt(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop() (+6 more)

### Community 10 - "drawPuppet"
Cohesion: 0.18
Nodes (13): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+5 more)

### Community 11 - "newAgent"
Cohesion: 0.47
Nodes (6): addAIAgent(), ensureAgent(), freshStats(), newAgent(), pickChildName(), randomTalent()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `productDef`, `ecologyTick`, `renderAllUI`, `rel`, `realmTravelTick`, `buildZoneTerrain`, `drawCanvas`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.019230769230769232 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `productDef`, `ecologyTick`, `rel`, `realmTravelTick`, `renderAgentCard`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.12411347517730496 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `productDef`, `ecologyTick`, `renderAllUI`, `rel`, `realmTravelTick`, `buildZoneTerrain`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `productDef` be split into smaller, more focused modules?**
  _Cohesion score 0.11693548387096774 - nodes in this community are weakly interconnected._
- **Should `ecologyTick` be split into smaller, more focused modules?**
  _Cohesion score 0.10846560846560846 - nodes in this community are weakly interconnected._