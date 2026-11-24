# Graph Report - graph-src  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 280 nodes · 891 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f820ca3d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- drawCanvas
- renderAllUI
- experiment
- productDef
- realmTravelTick
- runQuests
- makeSoul
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 78 edges
2. `renderAllUI()` - 39 edges
3. `addLog()` - 32 edges
4. `runQuests()` - 27 edges
5. `experiment()` - 23 edges
6. `st()` - 21 edges
7. `rel()` - 20 edges
8. `pick()` - 20 edges
9. `villageOf()` - 19 edges
10. `drawCanvas()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `loadGameState()` --indirect_call--> `initFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (12 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.03
Nodes (73): aiAgents, aiCrisisProposals, alchemyLogs, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements, discoveredProducts (+65 more)

### Community 1 - "addLog"
Cohesion: 0.13
Nodes (32): addLog(), addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+24 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.17
Nodes (26): addFood(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat(), canTradeFor() (+18 more)

### Community 3 - "drawCanvas"
Cohesion: 0.12
Nodes (25): addAIAgent(), buildStation(), buildZoneTerrain(), changeZoom(), clampC(), drawCanvas(), drawPixelSprite(), ensureAgent() (+17 more)

### Community 4 - "renderAllUI"
Cohesion: 0.12
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+17 more)

### Community 5 - "experiment"
Cohesion: 0.18
Nodes (24): addTeachLog(), completeQuest(), experiment(), failCap(), gainExp(), generateCrisisProposal(), inheritTalent(), isNightTime() (+16 more)

### Community 6 - "productDef"
Cohesion: 0.18
Nodes (22): buildEquivalents(), consume(), craftKnown(), depthOf(), getTool(), hashStr(), hrand(), isToolName() (+14 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.17
Nodes (20): captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), loadGameState(), logToRealm() (+12 more)

### Community 8 - "runQuests"
Cohesion: 0.19
Nodes (19): accessibleStations(), avail(), canUse(), computeNeeds(), drawStickFigure(), getEquip(), getMood(), hasMaterials() (+11 more)

### Community 9 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `drawCanvas`, `renderAllUI`, `experiment`, `productDef`, `realmTravelTick`, `runQuests`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.02531645569620253 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `runAutonomousStep`, `drawCanvas`, `experiment`, `productDef`, `realmTravelTick`, `runQuests`, `makeSoul`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.13306451612903225 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `drawCanvas`, `renderAllUI`, `experiment`, `productDef`, `realmTravelTick`, `runQuests`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.12333333333333334 - nodes in this community are weakly interconnected._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.12333333333333334 - nodes in this community are weakly interconnected._