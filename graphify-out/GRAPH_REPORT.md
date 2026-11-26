# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 690 nodes · 2267 edges · 22 communities (15 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e09dfbb8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- runAutonomousStep
- drawCanvas
- agentMove
- templeOf
- st
- rel
- renderAgentPop
- propsOf
- drawPuppet
- steleCanvas
- objWorldTick
- pupKeys
- steleTarget
- bridgeAt
- bridgeSites
- setZoom
- closeSheet
- startSimLoop
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 60 edges
2. `drawCanvas()` - 60 edges
3. `addLog()` - 59 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 34 edges
8. `agentMove()` - 33 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_

## Import Cycles
- None detected.

## Communities (22 total, 7 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (181): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+173 more)

### Community 1 - "villageOf"
Cohesion: 0.08
Nodes (82): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), avail(), bagValue() (+74 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.05
Nodes (80): addAIAgent(), addAnimals(), addLog(), advanceGame(), animalLog(), animalPower(), answerPrayer(), applyAISolution() (+72 more)

### Community 3 - "drawCanvas"
Cohesion: 0.05
Nodes (59): animalArt(), auraR(), bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), clampView(), drawAgentTag() (+51 more)

### Community 4 - "agentMove"
Cohesion: 0.10
Nodes (45): agentMove(), approachOf(), blockedSet(), buildSpot(), buildStation(), buildZoneTerrain(), canReach(), clampC() (+37 more)

### Community 5 - "templeOf"
Cohesion: 0.07
Nodes (44): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), bodyRealtime(), bodyStamina(), bodyTemp(), campGear() (+36 more)

### Community 6 - "st"
Cohesion: 0.12
Nodes (41): addFood(), agentGather(), agentHunt(), agentLevel(), atkOf(), bagCap(), bagCount(), beastCheck() (+33 more)

### Community 7 - "rel"
Cohesion: 0.10
Nodes (40): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+32 more)

### Community 8 - "renderAgentPop"
Cohesion: 0.07
Nodes (38): applyLayout(), apSel(), apToggle(), buildIsland(), closeAgentCard(), closeAgentPop(), designInvention(), drawMiniMap() (+30 more)

### Community 9 - "propsOf"
Cohesion: 0.12
Nodes (21): bodyThirst(), buildEquivalents(), carryBonus(), drink(), drinkValue(), findNewRecipes(), FOOD_ITEM(), hashStr() (+13 more)

### Community 10 - "drawPuppet"
Cohesion: 0.11
Nodes (20): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+12 more)

### Community 11 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 12 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 14 - "steleTarget"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `agentMove`, `templeOf`, `rel`, `renderAgentPop`, `drawPuppet`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010362694300518135 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `agentMove`, `templeOf`, `st`, `rel`, `propsOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.07798855766335441 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `agentMove`, `templeOf`, `st`, `rel`, `renderAgentPop`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.05284810126582278 - nodes in this community are weakly interconnected._