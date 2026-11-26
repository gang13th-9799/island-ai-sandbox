# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 712 nodes · 2379 edges · 25 communities (19 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dea9ea10`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- agentMove
- keyByName
- byId
- villageOf
- renderAllUI
- runAutonomousStep
- drawCanvas
- trOf
- drawPuppet
- getTerrainCanvas
- drawAgentTag
- drawAnimal
- mapTap
- steleCanvas
- objWorldTick
- pupKeys
- readCap
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 60 edges
2. `runAutonomousStep()` - 60 edges
3. `drawCanvas()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 48 edges
6. `villageOf()` - 36 edges
7. `keyByName()` - 35 edges
8. `gainExp()` - 34 edges
9. `agentMove()` - 33 edges
10. `renderCW()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 9_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_

## Import Cycles
- None detected.

## Communities (25 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (187): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+179 more)

### Community 1 - "addLog"
Cohesion: 0.07
Nodes (83): addFood(), addLog(), addTeachLog(), agentGather(), agentHunt(), agentLevel(), approachOf(), assignGodQuests() (+75 more)

### Community 2 - "agentMove"
Cohesion: 0.07
Nodes (56): agentMove(), applyLayout(), blockedSet(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain() (+48 more)

### Community 3 - "keyByName"
Cohesion: 0.08
Nodes (54): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedTools(), carryBonus(), closeAgentCard() (+46 more)

### Community 4 - "byId"
Cohesion: 0.07
Nodes (52): addOwnLog(), addRel(), agentStep(), applyWish(), askToUse(), assignJobs(), assignQuests(), byId() (+44 more)

### Community 5 - "villageOf"
Cohesion: 0.10
Nodes (51): accessibleStations(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger() (+43 more)

### Community 6 - "renderAllUI"
Cohesion: 0.08
Nodes (46): advanceGame(), answerPrayer(), auraR(), campGear(), canTrip(), captureRealm(), closeLobby(), crossRealm() (+38 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.09
Nodes (43): addAIAgent(), agentsCatchUp(), agentsRealtime(), airTemp(), animalArt(), baseTemp(), bestStat(), bodyRealtime() (+35 more)

### Community 8 - "drawCanvas"
Cohesion: 0.10
Nodes (29): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawGate(), drawInsect(), drawProp(), drawSized() (+21 more)

### Community 9 - "trOf"
Cohesion: 0.15
Nodes (21): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+13 more)

### Community 10 - "drawPuppet"
Cohesion: 0.12
Nodes (19): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+11 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 14 - "mapTap"
Cohesion: 0.33
Nodes (6): mapTap(), openAgentCard(), openStorePop(), resIcon(), tileOf(), worldOf()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 18 - "readCap"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `agentMove`, `keyByName`, `byId`, `renderAllUI`, `runAutonomousStep`, `trOf`, `drawPuppet`, `getTerrainCanvas`, `drawAgentTag`, `drawAnimal`, `mapTap`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010050251256281407 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `agentMove`, `keyByName`, `byId`, `villageOf`, `renderAllUI`, `runAutonomousStep`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.07023214810461358 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `agentMove`, `keyByName`, `byId`, `villageOf`, `renderAllUI`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentMove` be split into smaller, more focused modules?**
  _Cohesion score 0.06558441558441558 - nodes in this community are weakly interconnected._