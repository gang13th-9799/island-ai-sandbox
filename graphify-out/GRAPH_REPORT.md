# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 405 nodes · 1240 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e5e63e6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- runAutonomousStep
- addLog
- ecologyTick
- buildZoneTerrain
- propsOf
- drawCanvas
- tickAllRealms
- drawPuppet
- renderAgentCard
- switchZone
- drawAgentTag
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
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `getEquip()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 9_

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (106): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+98 more)

### Community 1 - "st"
Cohesion: 0.09
Nodes (58): accessibleStations(), addTeachLog(), avail(), canUse(), completeQuest(), computeNeeds(), consume(), craftKnown() (+50 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (46): addAIAgent(), addFood(), agentLevel(), atGoal(), atStore(), bagCap(), bagCount(), bagValue() (+38 more)

### Community 3 - "addLog"
Cohesion: 0.10
Nodes (40): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), byId() (+32 more)

### Community 4 - "ecologyTick"
Cohesion: 0.11
Nodes (28): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+20 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.16
Nodes (24): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+16 more)

### Community 6 - "propsOf"
Cohesion: 0.11
Nodes (22): buildEquivalents(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), materialWish(), mkObj() (+14 more)

### Community 7 - "drawCanvas"
Cohesion: 0.15
Nodes (18): damageStation(), drawCanvas(), drawProp(), drawSized(), drawTreeV(), drawWorldObj(), elevOf(), getTerrainCanvas() (+10 more)

### Community 8 - "tickAllRealms"
Cohesion: 0.20
Nodes (16): answerPrayer(), captureRealm(), closeLobby(), cycleSpeed(), godTick(), inRealm(), openLobby(), realmLog() (+8 more)

### Community 9 - "drawPuppet"
Cohesion: 0.22
Nodes (11): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+3 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 11 - "switchZone"
Cohesion: 0.29
Nodes (8): centerOnZone(), changeZoom(), clampView(), getZoneAt(), renderMiniMap(), setZoom(), switchZone(), travelDir()

### Community 12 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `ecologyTick`, `buildZoneTerrain`, `propsOf`, `drawCanvas`, `tickAllRealms`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.017391304347826087 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `ecologyTick`, `propsOf`, `tickAllRealms`, `drawPuppet`, `switchZone`, `drawAgentTag`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.09437386569872959 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `runAutonomousStep`, `ecologyTick`, `buildZoneTerrain`, `propsOf`, `drawCanvas`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09758454106280193 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._