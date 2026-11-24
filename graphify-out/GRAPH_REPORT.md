# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 373 nodes · 1142 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9380c75d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- st
- renderAllUI
- runQuests
- realmTravelTick
- byId
- ecologyTick
- drawCanvas
- zoneWeather
- drawPuppet
- renderAgentCard
- prayerTick
- drawAgentTag
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
8. `rel()` - 22 edges
9. `villageOf()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `addAIAgent()` --calls--> `drawCanvas()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `addAIAgent()` --calls--> `renderAllUI()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (96): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+88 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.10
Nodes (52): addAIAgent(), addLog(), addRel(), assignGodQuests(), atGoal(), bestStat(), buildStation(), buildZoneTerrain() (+44 more)

### Community 2 - "st"
Cohesion: 0.10
Nodes (45): addOwnLog(), addTeachLog(), askToUse(), buildEquivalents(), canUse(), consume(), craftKnown(), depthOf() (+37 more)

### Community 3 - "renderAllUI"
Cohesion: 0.14
Nodes (27): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+19 more)

### Community 4 - "runQuests"
Cohesion: 0.16
Nodes (22): accessibleStations(), avail(), computeNeeds(), generateQuests(), getAdjacentZones(), giftNeeds(), hasMaterials(), hasTool() (+14 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.17
Nodes (20): answerPrayer(), captureRealm(), crossRealm(), cycleSpeed(), gateOf(), godTick(), initFauna(), inRealm() (+12 more)

### Community 6 - "byId"
Cohesion: 0.17
Nodes (18): applyWish(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), holdVillageMeeting(), jobFit() (+10 more)

### Community 7 - "ecologyTick"
Cohesion: 0.19
Nodes (17): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+9 more)

### Community 8 - "drawCanvas"
Cohesion: 0.16
Nodes (16): centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawSized(), drawTreeV(), elevOf(), getTerrainCanvas() (+8 more)

### Community 9 - "zoneWeather"
Cohesion: 0.19
Nodes (15): airTemp(), baseTemp(), closeLobby(), feltTemp(), fixWeather(), getZoneAt(), isMember(), renderMiniMap() (+7 more)

### Community 10 - "drawPuppet"
Cohesion: 0.22
Nodes (11): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+3 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 12 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 13 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `renderAllUI`, `runQuests`, `realmTravelTick`, `byId`, `ecologyTick`, `drawCanvas`, `zoneWeather`, `prayerTick`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01904761904761905 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `st`, `runQuests`, `realmTravelTick`, `byId`, `ecologyTick`, `zoneWeather`, `drawPuppet`, `prayerTick`, `drawAgentTag`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.10180995475113122 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `st`, `renderAllUI`, `runQuests`, `realmTravelTick`, `byId`, `ecologyTick`, `zoneWeather`, `prayerTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.09797979797979799 - nodes in this community are weakly interconnected._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.13675213675213677 - nodes in this community are weakly interconnected._