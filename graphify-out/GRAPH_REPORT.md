# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 660 nodes · 2158 edges · 21 communities (16 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bae77e34`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- pick
- villageOf
- agentMove
- drawCanvas
- renderAllUI
- keyByName
- rel
- renderStorePop
- needsOf
- drawPuppet
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- bridgeAt
- setZoom
- closeSheet
- startSimLoop
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 50 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 40 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentWork()` - 32 edges
9. `agentMove()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (21 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (173): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+165 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (64): addFood(), addLog(), agentGather(), agentHunt(), agentsCatchUp(), agentsRealtime(), assignGodQuests(), bagCount() (+56 more)

### Community 2 - "pick"
Cohesion: 0.06
Nodes (56): addAIAgent(), addAnimals(), applyLayout(), bridgeLane(), bridgeSites(), buildIsland(), buildZoneTerrain(), clampC() (+48 more)

### Community 3 - "villageOf"
Cohesion: 0.10
Nodes (54): accessibleStations(), addTeachLog(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier() (+46 more)

### Community 4 - "agentMove"
Cohesion: 0.08
Nodes (53): agentMove(), agentStep(), approachOf(), blockedSet(), campGear(), canReach(), canTrip(), coldMove() (+45 more)

### Community 5 - "drawCanvas"
Cohesion: 0.06
Nodes (52): animalArt(), auraR(), centerOnZone(), clampView(), drawAgent(), drawAgentTag(), drawAnimal(), drawBridgeTile() (+44 more)

### Community 6 - "renderAllUI"
Cohesion: 0.07
Nodes (51): advanceGame(), animalLog(), animalPower(), answerPrayer(), applyAISolution(), captureRealm(), carryTraits(), closeLobby() (+43 more)

### Community 7 - "keyByName"
Cohesion: 0.09
Nodes (44): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), carryBonus() (+36 more)

### Community 8 - "rel"
Cohesion: 0.09
Nodes (40): addOwnLog(), addRel(), applyWish(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+32 more)

### Community 9 - "renderStorePop"
Cohesion: 0.18
Nodes (13): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+5 more)

### Community 10 - "needsOf"
Cohesion: 0.27
Nodes (12): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), needsOf(), personalFood() (+4 more)

### Community 11 - "drawPuppet"
Cohesion: 0.18
Nodes (11): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), hairStyleOf() (+3 more)

### Community 12 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `pick`, `villageOf`, `agentMove`, `renderAllUI`, `keyByName`, `rel`, `needsOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010810810810810811 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `pick`, `villageOf`, `agentMove`, `drawCanvas`, `renderAllUI`, `keyByName`, `rel`, `needsOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08978174603174603 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `pick`, `agentMove`, `renderAllUI`, `rel`, `renderStorePop`, `needsOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `pick` be split into smaller, more focused modules?**
  _Cohesion score 0.05909090909090909 - nodes in this community are weakly interconnected._