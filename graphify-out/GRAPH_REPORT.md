# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 621 nodes · 2018 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53942e78`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentWork
- runAutonomousStep
- agentMove
- renderAllUI
- pick
- rel
- st
- drawCanvas
- drawPuppet
- mapTap
- drawAnimal
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 32 edges
7. `villageOf()` - 32 edges
8. `agentWork()` - 31 edges
9. `pick()` - 31 edges
10. `experiment()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_

## Import Cycles
- None detected.

## Communities (20 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (162): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+154 more)

### Community 1 - "agentWork"
Cohesion: 0.06
Nodes (82): addTeachLog(), agentWork(), applyWish(), apSel(), apToggle(), atGoal(), atStore(), avail() (+74 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (63): accessibleStations(), addLog(), agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests(), assignQuests(), baseTemp() (+55 more)

### Community 3 - "agentMove"
Cohesion: 0.08
Nodes (54): agentMove(), applyLayout(), approachOf(), blockedSet(), buildHome(), buildIsland(), buildSpot(), buildStation() (+46 more)

### Community 4 - "renderAllUI"
Cohesion: 0.08
Nodes (45): advanceGame(), answerPrayer(), auraR(), captureRealm(), clampC(), closeLobby(), crossRealm(), expNeed() (+37 more)

### Community 5 - "pick"
Cohesion: 0.08
Nodes (43): addAIAgent(), addAnimals(), agentHunt(), animalLog(), animalPower(), applyAISolution(), carryTraits(), damageStele() (+35 more)

### Community 6 - "rel"
Cohesion: 0.11
Nodes (36): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), bestHomeTier(), byId(), coldMove() (+28 more)

### Community 7 - "st"
Cohesion: 0.13
Nodes (33): addFood(), agentGather(), agentLevel(), bagCap(), bagCount(), chooseKept(), creditGather(), depositTick() (+25 more)

### Community 8 - "drawCanvas"
Cohesion: 0.10
Nodes (30): animalArt(), centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawInsect(), drawProp(), drawSized() (+22 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (17): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+9 more)

### Community 10 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 11 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `agentWork`, `agentMove`, `renderAllUI`, `pick`, `rel`, `st`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011494252873563218 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `agentWork`, `agentMove`, `renderAllUI`, `pick`, `rel`, `st`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentWork` be split into smaller, more focused modules?**
  _Cohesion score 0.056910569105691054 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `agentWork`, `runAutonomousStep`, `agentMove`, `pick`, `rel`, `st`, `drawPuppet`, `mapTap`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07782898105478751 - nodes in this community are weakly interconnected._