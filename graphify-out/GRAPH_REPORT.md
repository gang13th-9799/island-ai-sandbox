# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 669 nodes · 2189 edges · 21 communities (15 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `235790d7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- renderAllUI
- pick
- agentMove
- drawCanvas
- rel
- villageOf
- renderAgentCard
- trOf
- drawPuppet
- makeSoul
- steleCanvas
- objWorldTick
- pupKeys
- bridgeSites
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 53 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 42 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentMove()` - 32 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 9_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (21 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (175): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+167 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.07
Nodes (80): addFood(), addLog(), addOwnLog(), agentGather(), agentHunt(), agentsCatchUp(), agentsRealtime(), airTemp() (+72 more)

### Community 2 - "renderAllUI"
Cohesion: 0.06
Nodes (72): addTeachLog(), applyWish(), apSel(), apToggle(), auraR(), bagCap(), buildEquivalents(), campOf() (+64 more)

### Community 3 - "pick"
Cohesion: 0.07
Nodes (57): addAIAgent(), addAnimals(), advanceGame(), answerPrayer(), applyAISolution(), captureRealm(), clampC(), closeLobby() (+49 more)

### Community 4 - "agentMove"
Cohesion: 0.08
Nodes (54): agentMove(), agentStep(), approachOf(), blockedSet(), bridgeAt(), bridgeKitStep(), bridgeSet(), buildZoneTerrain() (+46 more)

### Community 5 - "drawCanvas"
Cohesion: 0.06
Nodes (50): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), clampView(), drawAgent(), drawAgentTag() (+42 more)

### Community 6 - "rel"
Cohesion: 0.07
Nodes (48): addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), coldMove(), createQuest() (+40 more)

### Community 7 - "villageOf"
Cohesion: 0.14
Nodes (35): accessibleStations(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger() (+27 more)

### Community 8 - "renderAgentCard"
Cohesion: 0.08
Nodes (32): applyLayout(), buildIsland(), closeAgentCard(), closeAgentPop(), DIFF_STARS(), drawMiniMap(), getAgeStage(), getZoneAt() (+24 more)

### Community 9 - "trOf"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (13): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+5 more)

### Community 11 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 12 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `pick`, `agentMove`, `rel`, `villageOf`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0106951871657754 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `pick`, `agentMove`, `rel`, `villageOf`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.06993670886075949 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `renderAllUI`, `pick`, `agentMove`, `rel`, `renderAgentCard`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.06103286384976526 - nodes in this community are weakly interconnected._