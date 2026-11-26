# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 687 nodes · 2258 edges · 23 communities (17 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3755b5b3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- gainExp
- buildZoneTerrain
- addLog
- st
- runAutonomousStep
- hasTool
- drawCanvas
- renderAllUI
- renderAgentPop
- drawPuppet
- drawAnimal
- drawAgentTag
- steleCanvas
- centerOnZone
- pupKeys
- bridgeAt
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 60 edges
2. `addLog()` - 59 edges
3. `drawCanvas()` - 58 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 34 edges
8. `agentMove()` - 33 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `agentStep()` --calls--> `agentWork()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (23 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (180): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+172 more)

### Community 1 - "villageOf"
Cohesion: 0.07
Nodes (74): accessibleStations(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bodyHunger(), bridgeKitStep() (+66 more)

### Community 2 - "gainExp"
Cohesion: 0.09
Nodes (59): addTeachLog(), agentMove(), agentStep(), approachOf(), campGear(), canReach(), canTrip(), coldMove() (+51 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.06
Nodes (54): applyLayout(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+46 more)

### Community 4 - "addLog"
Cohesion: 0.08
Nodes (47): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), bestHomeTier() (+39 more)

### Community 5 - "st"
Cohesion: 0.12
Nodes (41): addFood(), agentGather(), agentLevel(), atkOf(), bagCap(), bagCount(), beastCheck(), carriedEff() (+33 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.09
Nodes (39): addAIAgent(), addAnimals(), agentHunt(), animalLog(), animalPower(), applyAISolution(), applyWish(), bestStat() (+31 more)

### Community 7 - "hasTool"
Cohesion: 0.09
Nodes (37): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), blockedSet(), bodyRealtime(), bodyStamina(), bodyTemp() (+29 more)

### Community 8 - "drawCanvas"
Cohesion: 0.08
Nodes (37): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawGate() (+29 more)

### Community 9 - "renderAllUI"
Cohesion: 0.09
Nodes (33): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), expNeed(), fateChance(), godAutoLevel() (+25 more)

### Community 10 - "renderAgentPop"
Cohesion: 0.13
Nodes (19): apSel(), apToggle(), closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap() (+11 more)

### Community 11 - "drawPuppet"
Cohesion: 0.13
Nodes (16): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+8 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `gainExp`, `buildZoneTerrain`, `addLog`, `runAutonomousStep`, `hasTool`, `renderAllUI`, `renderAgentPop`, `drawPuppet`, `drawAnimal`, `drawAgentTag`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010416666666666666 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `gainExp`, `buildZoneTerrain`, `addLog`, `st`, `hasTool`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.06960385042576823 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `gainExp`, `buildZoneTerrain`, `st`, `runAutonomousStep`, `hasTool`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `gainExp` be split into smaller, more focused modules?**
  _Cohesion score 0.08649912331969609 - nodes in this community are weakly interconnected._