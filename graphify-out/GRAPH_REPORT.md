# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 358 nodes · 1092 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1468179d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runQuests
- addLog
- runAutonomousStep
- renderAllUI
- ecologyTick
- buildZoneTerrain
- drawCanvas
- drawPuppet
- propsOf
- renderAgentCard
- newAgent
- makeSoul
- drawAgentTag
- switchZone
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 83 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 36 edges
4. `runQuests()` - 27 edges
5. `st()` - 24 edges
6. `drawCanvas()` - 24 edges
7. `experiment()` - 23 edges
8. `rel()` - 21 edges
9. `pick()` - 21 edges
10. `villageOf()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 6_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (17 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (94): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+86 more)

### Community 1 - "runQuests"
Cohesion: 0.12
Nodes (46): accessibleStations(), addTeachLog(), avail(), canUse(), completeQuest(), computeNeeds(), consume(), craftKnown() (+38 more)

### Community 2 - "addLog"
Cohesion: 0.11
Nodes (36): addLog(), addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+28 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.16
Nodes (29): addFood(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat(), canTradeFor() (+21 more)

### Community 4 - "renderAllUI"
Cohesion: 0.13
Nodes (25): answerPrayer(), captureRealm(), closeLobby(), cycleSpeed(), expNeed(), godTick(), inRealm(), knowersOf() (+17 more)

### Community 5 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+16 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.16
Nodes (24): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+16 more)

### Community 7 - "drawCanvas"
Cohesion: 0.16
Nodes (16): centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawSized(), drawTreeV(), elevOf(), getTerrainCanvas() (+8 more)

### Community 8 - "drawPuppet"
Cohesion: 0.16
Nodes (14): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+6 more)

### Community 9 - "propsOf"
Cohesion: 0.33
Nodes (9): buildEquivalents(), hashStr(), hrand(), natureLaw(), propSimilarity(), propsOf(), react(), realmRawSet() (+1 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), getAgeStage(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 11 - "newAgent"
Cohesion: 0.47
Nodes (6): addAIAgent(), ensureAgent(), freshStats(), newAgent(), pickChildName(), randomTalent()

### Community 12 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 13 - "drawAgentTag"
Cohesion: 0.67
Nodes (4): drawAgentTag(), drawLabel(), screenOf(), statusIcon()

### Community 14 - "switchZone"
Cohesion: 0.67
Nodes (4): getZoneAt(), renderMiniMap(), switchZone(), travelDir()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `runQuests`, `addLog`, `renderAllUI`, `ecologyTick`, `buildZoneTerrain`, `drawCanvas`, `drawPuppet`, `propsOf`, `newAgent`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.019417475728155338 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runQuests`, `addLog`, `runAutonomousStep`, `ecologyTick`, `drawPuppet`, `propsOf`, `renderAgentCard`, `newAgent`, `makeSoul`, `switchZone`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `runQuests` be split into smaller, more focused modules?**
  _Cohesion score 0.1178743961352657 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runQuests`, `runAutonomousStep`, `renderAllUI`, `ecologyTick`, `buildZoneTerrain`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1126984126984127 - nodes in this community are weakly interconnected._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._