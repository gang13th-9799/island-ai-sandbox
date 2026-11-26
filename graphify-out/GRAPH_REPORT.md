# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 677 nodes · 2226 edges · 25 communities (19 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `719f1bf9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- buildZoneTerrain
- addLog
- keyByName
- renderAllUI
- runAutonomousStep
- drawCanvas
- rel
- drawPuppet
- trOf
- drawAnimal
- drawAgentTag
- placeBridge
- steleCanvas
- centerOnZone
- objWorldTick
- pupKeys
- steleTarget
- bridgeAt
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 53 edges
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
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 2_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 8_
- `runQuests()` --calls--> `accessibleStations()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `agentHunt()` --calls--> `atkOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (25 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (178): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+170 more)

### Community 1 - "villageOf"
Cohesion: 0.07
Nodes (78): accessibleStations(), agentHunt(), agentMove(), agentStep(), agentWork(), approachOf(), atGoal(), atStore() (+70 more)

### Community 2 - "buildZoneTerrain"
Cohesion: 0.05
Nodes (66): addAIAgent(), addAnimals(), applyAISolution(), applyLayout(), applyWish(), blockedSet(), buildHome(), buildIsland() (+58 more)

### Community 3 - "addLog"
Cohesion: 0.09
Nodes (65): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentLevel(), askToUse() (+57 more)

### Community 4 - "keyByName"
Cohesion: 0.06
Nodes (57): apSel(), apToggle(), atkOf(), bagCap(), buildEquivalents(), campOf(), carriedEff(), carriedTools() (+49 more)

### Community 5 - "renderAllUI"
Cohesion: 0.09
Nodes (39): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance() (+31 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.12
Nodes (35): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyStamina() (+27 more)

### Community 7 - "drawCanvas"
Cohesion: 0.09
Nodes (32): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawInsect() (+24 more)

### Community 8 - "rel"
Cohesion: 0.11
Nodes (31): assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp(), createQuest(), crowdTick(), electChief() (+23 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 10 - "trOf"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 11 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "placeBridge"
Cohesion: 0.33
Nodes (6): bridgeKitStep(), bridgeLane(), bridgeSites(), destroyBridge(), laneCost(), placeBridge()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 18 - "steleTarget"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `buildZoneTerrain`, `addLog`, `keyByName`, `renderAllUI`, `rel`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010526315789473684 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `villageOf`, `buildZoneTerrain`, `keyByName`, `renderAllUI`, `runAutonomousStep`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.0715950715950716 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `buildZoneTerrain`, `renderAllUI`, `runAutonomousStep`, `rel`, `trOf`, `placeBridge`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.05407925407925408 - nodes in this community are weakly interconnected._