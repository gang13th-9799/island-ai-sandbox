# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 404 nodes · 1238 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0ca58390`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- runAutonomousStep
- ecologyTick
- addLog
- rel
- buildZoneTerrain
- propsOf
- drawCanvas
- drawPuppet
- getTerrainCanvas
- renderAgentCard
- makeSoul
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `st()` - 30 edges
5. `drawCanvas()` - 28 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `buildStation()` --calls--> `addOwnLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (106): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+98 more)

### Community 1 - "st"
Cohesion: 0.09
Nodes (63): accessibleStations(), addFood(), addOwnLog(), addRel(), addTeachLog(), askToUse(), avail(), canUse() (+55 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.11
Nodes (42): applyAISolution(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat(), canTradeFor() (+34 more)

### Community 3 - "ecologyTick"
Cohesion: 0.09
Nodes (33): addAnimals(), animalLog(), animalPower(), applyWish(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+25 more)

### Community 4 - "addLog"
Cohesion: 0.12
Nodes (31): addLog(), airTemp(), answerPrayer(), assignGodQuests(), baseTemp(), captureRealm(), closeLobby(), crossRealm() (+23 more)

### Community 5 - "rel"
Cohesion: 0.14
Nodes (25): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+17 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.14
Nodes (22): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), ensureAgent(), findValidTile(), freshStats() (+14 more)

### Community 7 - "propsOf"
Cohesion: 0.15
Nodes (17): buildEquivalents(), depthOf(), findNewRecipes(), hashStr(), hrand(), materialWish(), mkObj(), natureLaw() (+9 more)

### Community 8 - "drawCanvas"
Cohesion: 0.15
Nodes (16): damageStation(), drawAgentTag(), drawCanvas(), drawLabel(), drawProp(), drawSized(), drawTreeV(), drawWorldObj() (+8 more)

### Community 9 - "drawPuppet"
Cohesion: 0.20
Nodes (12): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+4 more)

### Community 10 - "getTerrainCanvas"
Cohesion: 0.24
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), isoXY(), jitterColor() (+2 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 12 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `ecologyTick`, `addLog`, `rel`, `buildZoneTerrain`, `propsOf`, `drawCanvas`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.017391304347826087 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `st`, `ecologyTick`, `addLog`, `rel`, `buildZoneTerrain`, `propsOf`, `drawCanvas`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.08602150537634409 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `runAutonomousStep`, `ecologyTick`, `rel`, `buildZoneTerrain`, `drawCanvas`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.11265969802555169 - nodes in this community are weakly interconnected._
- **Should `ecologyTick` be split into smaller, more focused modules?**
  _Cohesion score 0.0946969696969697 - nodes in this community are weakly interconnected._