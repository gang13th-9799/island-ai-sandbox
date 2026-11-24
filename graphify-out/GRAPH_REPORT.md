# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 375 nodes · 1147 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9fbf97d8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- buildZoneTerrain
- rel
- ecologyTick
- prayerTick
- realmTravelTick
- drawCanvas
- propsOf
- drawPuppet
- renderAgentCard
- drawAgentTag
- switchZone
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
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `assignJobs()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (97): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+89 more)

### Community 1 - "addLog"
Cohesion: 0.10
Nodes (58): accessibleStations(), addLog(), addOwnLog(), addRel(), addTeachLog(), askToUse(), assignGodQuests(), avail() (+50 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.09
Nodes (48): addAIAgent(), addFood(), agentLevel(), atGoal(), atStore(), bagCap(), bagCount(), bagValue() (+40 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.14
Nodes (27): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+19 more)

### Community 4 - "rel"
Cohesion: 0.16
Nodes (23): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), crowdTick(), holdFoundingMeeting(), holdVillageMeeting() (+15 more)

### Community 5 - "ecologyTick"
Cohesion: 0.15
Nodes (21): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+13 more)

### Community 6 - "prayerTick"
Cohesion: 0.15
Nodes (17): answerPrayer(), applyWish(), cycleSpeed(), fateChance(), getAdjacentZones(), giftNeeds(), godAutoLevel(), materialWish() (+9 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.22
Nodes (17): captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm(), logToRealm(), openLobby() (+9 more)

### Community 8 - "drawCanvas"
Cohesion: 0.16
Nodes (16): centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawSized(), drawTreeV(), elevOf(), getTerrainCanvas() (+8 more)

### Community 9 - "propsOf"
Cohesion: 0.29
Nodes (10): buildEquivalents(), findNewRecipes(), hashStr(), hrand(), natureLaw(), propSimilarity(), propsOf(), react() (+2 more)

### Community 10 - "drawPuppet"
Cohesion: 0.25
Nodes (9): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupArmIK() (+1 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "switchZone"
Cohesion: 0.67
Nodes (4): getZoneAt(), renderMiniMap(), switchZone(), travelDir()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `buildZoneTerrain`, `rel`, `ecologyTick`, `prayerTick`, `realmTravelTick`, `drawCanvas`, `propsOf`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.018867924528301886 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `addLog`, `buildZoneTerrain`, `rel`, `ecologyTick`, `prayerTick`, `realmTravelTick`, `propsOf`, `drawPuppet`, `drawAgentTag`, `switchZone`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.0955837870538415 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `rel`, `ecologyTick`, `prayerTick`, `realmTravelTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09308510638297872 - nodes in this community are weakly interconnected._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.13675213675213677 - nodes in this community are weakly interconnected._