# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 341 nodes · 1041 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e85af8ed`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runQuests
- renderAllUI
- addLog
- runAutonomousStep
- buildZoneTerrain
- ecologyTick
- drawCanvas
- renderAgentCard
- drawPuppet
- pick
- propsOf
- drawAgentTag
- makeSoul
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 81 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 34 edges
4. `runQuests()` - 27 edges
5. `st()` - 24 edges
6. `experiment()` - 23 edges
7. `drawCanvas()` - 23 edges
8. `rel()` - 21 edges
9. `villageOf()` - 21 edges
10. `pick()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 3_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 6_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `buildStation()` --calls--> `addOwnLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (89): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+81 more)

### Community 1 - "runQuests"
Cohesion: 0.10
Nodes (55): accessibleStations(), addOwnLog(), addRel(), addTeachLog(), askToUse(), avail(), canUse(), completeQuest() (+47 more)

### Community 2 - "renderAllUI"
Cohesion: 0.13
Nodes (27): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), expNeed() (+19 more)

### Community 3 - "addLog"
Cohesion: 0.13
Nodes (25): addLog(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), giveSoul(), godTick() (+17 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.20
Nodes (23): addFood(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat(), canTradeFor() (+15 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (23): airTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile(), fixWeather() (+15 more)

### Community 6 - "ecologyTick"
Cohesion: 0.18
Nodes (18): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+10 more)

### Community 7 - "drawCanvas"
Cohesion: 0.16
Nodes (16): centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawSized(), drawTreeV(), elevOf(), getTerrainCanvas() (+8 more)

### Community 8 - "renderAgentCard"
Cohesion: 0.18
Nodes (13): closeAgentCard(), getAdjacentZones(), getZoneAt(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), renderMiniMap() (+5 more)

### Community 9 - "drawPuppet"
Cohesion: 0.18
Nodes (12): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), isNightTime() (+4 more)

### Community 10 - "pick"
Cohesion: 0.29
Nodes (10): addAIAgent(), ensureAgent(), freshStats(), generateCrisisProposal(), inheritTalent(), newAgent(), pick(), pickChildName() (+2 more)

### Community 11 - "propsOf"
Cohesion: 0.33
Nodes (9): buildEquivalents(), hashStr(), hrand(), natureLaw(), propSimilarity(), propsOf(), react(), realmRawSet() (+1 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `runQuests`, `renderAllUI`, `addLog`, `buildZoneTerrain`, `ecologyTick`, `drawCanvas`, `renderAgentCard`, `drawPuppet`, `pick`, `propsOf`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.020833333333333332 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runQuests`, `addLog`, `runAutonomousStep`, `ecologyTick`, `renderAgentCard`, `drawPuppet`, `pick`, `propsOf`, `drawAgentTag`, `makeSoul`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `runQuests` be split into smaller, more focused modules?**
  _Cohesion score 0.09898989898989899 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runQuests` to `game.js`, `renderAllUI`, `runAutonomousStep`, `buildZoneTerrain`, `renderAgentCard`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.13105413105413105 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._