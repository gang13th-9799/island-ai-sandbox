# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 320 nodes · 989 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ec9bdb7c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runQuests
- runAutonomousStep
- addLog
- rel
- drawCanvas
- renderAllUI
- propsOf
- villageOf
- drawPuppet
- newAgent
- makeSoul
- clampView
- pupKeys
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 79 edges
2. `renderAllUI()` - 40 edges
3. `addLog()` - 33 edges
4. `runQuests()` - 27 edges
5. `experiment()` - 23 edges
6. `st()` - 23 edges
7. `rel()` - 21 edges
8. `villageOf()` - 21 edges
9. `pick()` - 20 edges
10. `drawCanvas()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 3_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `holdFoundingMeeting()` --calls--> `addRel()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `avail()` --calls--> `canTradeFor()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (81): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+73 more)

### Community 1 - "runQuests"
Cohesion: 0.11
Nodes (50): accessibleStations(), addOwnLog(), addRel(), addTeachLog(), askToUse(), avail(), canUse(), completeQuest() (+42 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (45): addAnimals(), animalPower(), applyAISolution(), atGoal(), bagCap(), bagCount(), bestStat(), buildStation() (+37 more)

### Community 3 - "addLog"
Cohesion: 0.13
Nodes (27): addLog(), assignQuests(), canHelp(), captureRealm(), createQuest(), crossRealm(), cycleSpeed(), gateOf() (+19 more)

### Community 4 - "rel"
Cohesion: 0.15
Nodes (24): assignJobs(), byId(), crowdTick(), electChief(), score(), holdFoundingMeeting(), holdVillageMeeting(), homeCounts() (+16 more)

### Community 5 - "drawCanvas"
Cohesion: 0.13
Nodes (19): closeAgentCard(), drawAgentTag(), drawCanvas(), drawLabel(), drawPixelSprite(), getAgeStage(), getTerrainCanvas(), jitterColor() (+11 more)

### Community 6 - "renderAllUI"
Cohesion: 0.16
Nodes (18): animalLog(), closeLobby(), evolveOne(), evolveTick(), expNeed(), getZoneAt(), knowersOf(), relLabel() (+10 more)

### Community 7 - "propsOf"
Cohesion: 0.25
Nodes (11): buildEquivalents(), giveSoul(), hashStr(), hrand(), natureLaw(), propSimilarity(), propsOf(), react() (+3 more)

### Community 8 - "villageOf"
Cohesion: 0.38
Nodes (10): addFood(), atStore(), bagValue(), canTradeFor(), itemValue(), payFor(), shareRatio(), storeKeys() (+2 more)

### Community 9 - "drawPuppet"
Cohesion: 0.25
Nodes (9): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupArmIK() (+1 more)

### Community 10 - "newAgent"
Cohesion: 0.60
Nodes (5): addAIAgent(), ensureAgent(), freshStats(), newAgent(), randomTalent()

### Community 11 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 12 - "clampView"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `runQuests`, `addLog`, `rel`, `drawCanvas`, `renderAllUI`, `propsOf`, `villageOf`, `newAgent`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.022988505747126436 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runQuests`, `runAutonomousStep`, `addLog`, `rel`, `drawCanvas`, `propsOf`, `villageOf`, `drawPuppet`, `newAgent`, `makeSoul`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `runQuests` be split into smaller, more focused modules?**
  _Cohesion score 0.1126530612244898 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runQuests` to `game.js`, `runAutonomousStep`, `rel`, `drawCanvas`, `makeSoul`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09696969696969697 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._