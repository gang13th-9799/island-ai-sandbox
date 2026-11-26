# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 750 nodes · 2583 edges · 24 communities (19 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `676e9b4f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- addLog
- villageOf
- pick
- byId
- renderAllUI
- agentMove
- drawCanvas
- hashStr
- drawPuppet
- getTerrainCanvas
- drawAgentTag
- drawAnimal
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- readCap
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 50 edges
5. `renderAllUI()` - 50 edges
6. `keyByName()` - 36 edges
7. `renderCW()` - 36 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 6_
- `atkOf()` --calls--> `hasTool()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `atkOf()` --calls--> `toolStat()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (24 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (192): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+184 more)

### Community 1 - "st"
Cohesion: 0.05
Nodes (97): apSel(), apToggle(), atkOf(), bagCap(), bagCount(), bodyThirst(), buildEquivalents(), campOf() (+89 more)

### Community 2 - "addLog"
Cohesion: 0.07
Nodes (76): addFood(), addLog(), addOwnLog(), agentGather(), agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests() (+68 more)

### Community 3 - "villageOf"
Cohesion: 0.09
Nodes (63): accessibleStations(), addTeachLog(), agentWork(), atGoal(), atStore(), auraR(), avail(), bagValue() (+55 more)

### Community 4 - "pick"
Cohesion: 0.06
Nodes (62): addAIAgent(), addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), buildSpot(), buildZoneTerrain() (+54 more)

### Community 5 - "byId"
Cohesion: 0.09
Nodes (46): addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), bridgeKitStep(), byId(), campGear() (+38 more)

### Community 6 - "renderAllUI"
Cohesion: 0.09
Nodes (41): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics(), expNeed(), failCap() (+33 more)

### Community 7 - "agentMove"
Cohesion: 0.12
Nodes (36): agentHunt(), agentMove(), animalArt(), approachOf(), blockedSet(), canReach(), canTrip(), canUse() (+28 more)

### Community 8 - "drawCanvas"
Cohesion: 0.08
Nodes (34): bridgeImg(), damageStation(), drawBridgePiece(), drawCage(), drawCanvas(), drawFlameLayers(), drawGate(), drawInsect() (+26 more)

### Community 9 - "hashStr"
Cohesion: 0.14
Nodes (20): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), isleNoise() (+12 more)

### Community 10 - "drawPuppet"
Cohesion: 0.13
Nodes (16): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+8 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

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
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `addLog`, `villageOf`, `pick`, `byId`, `renderAllUI`, `agentMove`, `drawPuppet`, `getTerrainCanvas`, `drawAgentTag`, `drawAnimal`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.00980392156862745 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `villageOf`, `pick`, `byId`, `renderAllUI`, `agentMove`, `drawCanvas`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.050042955326460484 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `addLog`, `villageOf`, `pick`, `byId`, `renderAllUI`, `agentMove`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.06842105263157895 - nodes in this community are weakly interconnected._