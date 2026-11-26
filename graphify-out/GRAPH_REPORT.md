# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 747 nodes · 2579 edges · 24 communities (19 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3dbfaa46`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentMove
- runAutonomousStep
- addLog
- villageOf
- st
- byId
- keyByName
- renderPosHud
- drawCanvas
- objsOf
- drawPuppet
- getTerrainCanvas
- drawAnimal
- placeBridge
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
- bridgeAt
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 61 edges
3. `runAutonomousStep()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 50 edges
6. `villageOf()` - 36 edges
7. `gainExp()` - 36 edges
8. `renderCW()` - 36 edges
9. `keyByName()` - 36 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_

## Import Cycles
- None detected.

## Communities (24 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (190): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+182 more)

### Community 1 - "agentMove"
Cohesion: 0.07
Nodes (75): agentHunt(), agentMove(), animalArt(), approachOf(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain() (+67 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.07
Nodes (56): addAIAgent(), addAnimals(), agentsCatchUp(), airTemp(), animalPower(), baseTemp(), beastCheck(), bestStat() (+48 more)

### Community 3 - "addLog"
Cohesion: 0.06
Nodes (56): addLog(), advanceGame(), agentsRealtime(), animalLog(), answerPrayer(), applyAISolution(), assignGodQuests(), auraR() (+48 more)

### Community 4 - "villageOf"
Cohesion: 0.10
Nodes (54): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), avail(), bagValue() (+46 more)

### Community 5 - "st"
Cohesion: 0.11
Nodes (53): addFood(), agentGather(), agentLevel(), atkOf(), bagCap(), bagCount(), chooseKept(), collectTrap() (+45 more)

### Community 6 - "byId"
Cohesion: 0.09
Nodes (46): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), byId(), coldMove() (+38 more)

### Community 7 - "keyByName"
Cohesion: 0.09
Nodes (45): apSel(), apToggle(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), carryBonus(), consume() (+37 more)

### Community 8 - "renderPosHud"
Cohesion: 0.09
Nodes (36): canHelp(), closeAgentCard(), closeAgentPop(), closeCW(), drinkValue(), fleeFrom(), gameNow(), mapTap() (+28 more)

### Community 9 - "drawCanvas"
Cohesion: 0.09
Nodes (31): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawFlameLayers(), drawGate(), drawInsect(), drawProp() (+23 more)

### Community 10 - "objsOf"
Cohesion: 0.11
Nodes (25): applyLayout(), blockedSet(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand() (+17 more)

### Community 11 - "drawPuppet"
Cohesion: 0.14
Nodes (15): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+7 more)

### Community 12 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 13 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 14 - "placeBridge"
Cohesion: 0.33
Nodes (6): bridgeKitStep(), bridgeLane(), bridgeSites(), destroyBridge(), laneCost(), placeBridge()

### Community 15 - "drawAgentTag"
Cohesion: 0.47
Nodes (6): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), screenOf(), statusIcon()

### Community 16 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 17 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `addLog()` connect `addLog` to `game.js`, `agentMove`, `runAutonomousStep`, `villageOf`, `st`, `byId`, `keyByName`, `renderPosHud`, `placeBridge`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009900990099009901 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `agentMove`, `runAutonomousStep`, `addLog`, `st`, `byId`, `keyByName`, `renderPosHud`, `objsOf`, `drawPuppet`, `getTerrainCanvas`, `drawAnimal`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentMove` be split into smaller, more focused modules?**
  _Cohesion score 0.06522522522522523 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `agentMove`, `runAutonomousStep`, `addLog`, `villageOf`, `byId`, `keyByName`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07272727272727272 - nodes in this community are weakly interconnected._