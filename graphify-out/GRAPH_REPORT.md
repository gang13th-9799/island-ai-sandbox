# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 408 nodes · 1246 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2a72c5ee`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- renderAllUI
- runAutonomousStep
- productDef
- ecologyTick
- buildZoneTerrain
- realmTravelTick
- rel
- drawCanvas
- drawPuppet
- newAgent
- getTerrainCanvas
- renderAgentCard
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `drawCanvas()` - 31 edges
5. `st()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `upgradeFauna()` --calls--> `addAnimals()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 10_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (107): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements (+99 more)

### Community 1 - "renderAllUI"
Cohesion: 0.11
Nodes (52): addAnimals(), addFood(), addLog(), addRel(), addTeachLog(), agentLevel(), applyAISolution(), assignQuests() (+44 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (40): accessibleStations(), assignGodQuests(), atGoal(), atStore(), avail(), bagCap(), bagCount(), bagValue() (+32 more)

### Community 3 - "productDef"
Cohesion: 0.09
Nodes (37): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), depthOf(), findNewRecipes(), getTool() (+29 more)

### Community 4 - "ecologyTick"
Cohesion: 0.11
Nodes (29): animalLog(), animalPower(), applyWish(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+21 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.14
Nodes (26): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+18 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.16
Nodes (22): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+14 more)

### Community 7 - "rel"
Cohesion: 0.19
Nodes (19): assignJobs(), byId(), crowdTick(), electChief(), score(), holdFoundingMeeting(), holdVillageMeeting(), homeCounts() (+11 more)

### Community 8 - "drawCanvas"
Cohesion: 0.14
Nodes (17): animalArt(), damageStation(), drawAgentTag(), drawAnimal(), drawCanvas(), drawLabel(), drawProp(), drawSized() (+9 more)

### Community 9 - "drawPuppet"
Cohesion: 0.18
Nodes (13): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+5 more)

### Community 10 - "newAgent"
Cohesion: 0.25
Nodes (11): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), initFauna(), loadGameState(), newAgent() (+3 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.24
Nodes (11): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+3 more)

### Community 12 - "renderAgentCard"
Cohesion: 0.22
Nodes (10): closeAgentCard(), DIFF_STARS(), getAgeStage(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon() (+2 more)

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `productDef`, `ecologyTick`, `buildZoneTerrain`, `realmTravelTick`, `rel`, `drawCanvas`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.017241379310344827 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `productDef`, `ecologyTick`, `buildZoneTerrain`, `realmTravelTick`, `rel`, `drawPuppet`, `newAgent`, `renderAgentCard`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.10708898944193061 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `productDef`, `ecologyTick`, `buildZoneTerrain`, `realmTravelTick`, `rel`, `drawCanvas`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.10256410256410256 - nodes in this community are weakly interconnected._
- **Should `productDef` be split into smaller, more focused modules?**
  _Cohesion score 0.0945945945945946 - nodes in this community are weakly interconnected._