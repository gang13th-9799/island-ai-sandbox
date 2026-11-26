# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 681 nodes · 2240 edges · 23 communities (18 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f51dc9a2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- addLog
- villageOf
- keyByName
- drawCanvas
- runAutonomousStep
- renderAllUI
- rel
- getZoneAt
- drawPuppet
- groundShadow
- drawAgentTag
- drawAnimal
- deepAt
- objWorldTick
- pupKeys
- steleTarget
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 58 edges
3. `drawCanvas()` - 55 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 33 edges
8. `agentMove()` - 32 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 8_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_

## Import Cycles
- None detected.

## Communities (23 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (179): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+171 more)

### Community 1 - "st"
Cohesion: 0.07
Nodes (87): addFood(), addRel(), agentGather(), agentHunt(), agentMove(), agentStep(), approachOf(), atkOf() (+79 more)

### Community 2 - "addLog"
Cohesion: 0.05
Nodes (76): addAIAgent(), addAnimals(), addLog(), answerPrayer(), applyAISolution(), applyWish(), bridgeKitStep(), bridgeLane() (+68 more)

### Community 3 - "villageOf"
Cohesion: 0.10
Nodes (60): accessibleStations(), addOwnLog(), addTeachLog(), agentWork(), askToUse(), atGoal(), atStore(), avail() (+52 more)

### Community 4 - "keyByName"
Cohesion: 0.09
Nodes (42): apSel(), apToggle(), buildEquivalents(), campOf(), carriedTools(), depthOf(), designInvention(), effBonus() (+34 more)

### Community 5 - "drawCanvas"
Cohesion: 0.08
Nodes (36): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), damageStation() (+28 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.10
Nodes (35): advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests(), baseTemp(), bestStat(), bodyRealtime() (+27 more)

### Community 7 - "renderAllUI"
Cohesion: 0.08
Nodes (35): agentLevel(), animalLog(), animalPower(), auraR(), carryTraits(), chooseKept(), drinkSpotsOf(), ecologyTick() (+27 more)

### Community 8 - "rel"
Cohesion: 0.11
Nodes (29): assignJobs(), assignQuests(), byId(), canHelp(), coldMove(), electChief(), score(), getAdjacentZones() (+21 more)

### Community 9 - "getZoneAt"
Cohesion: 0.09
Nodes (27): applyLayout(), buildIsland(), closeAgentCard(), closeAgentPop(), closeLobby(), drawMiniMap(), getZoneAt(), isleNoise() (+19 more)

### Community 10 - "drawPuppet"
Cohesion: 0.13
Nodes (16): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+8 more)

### Community 11 - "groundShadow"
Cohesion: 0.20
Nodes (10): carveGlyphs(), drawProp(), drawStele(), drawWorldObj(), groundShadow(), objState(), steleCanvas(), steleFace() (+2 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 14 - "deepAt"
Cohesion: 0.50
Nodes (4): bridgeAt(), bridgeSet(), deepAt(), reachOf()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 17 - "steleTarget"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `villageOf`, `keyByName`, `renderAllUI`, `rel`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010471204188481676 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `addLog`, `runAutonomousStep`, `renderAllUI`, `rel`, `getZoneAt`, `drawPuppet`, `groundShadow`, `drawAgentTag`, `drawAnimal`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.06762897620956963 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `villageOf`, `keyByName`, `drawCanvas`, `runAutonomousStep`, `renderAllUI`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.05228070175438596 - nodes in this community are weakly interconnected._