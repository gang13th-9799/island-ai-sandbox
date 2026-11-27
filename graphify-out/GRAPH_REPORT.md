# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 790 nodes · 2740 edges · 23 communities (18 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6e980e66`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentMove
- renderCW
- renderAllUI
- gainExp
- st
- addLog
- drawCanvas
- runAutonomousStep
- objsOf
- drawPuppet
- drawAnimal
- drawAgentTag
- steleCanvas
- mapTap
- makeSoul
- drawHairLayer
- pupKeys
- bridgeAt
- switchTab
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 63 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 48 edges
7. `keyByName()` - 39 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 8_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 8_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `runQuests()` --indirect_call--> `runQuestOne()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_

## Import Cycles
- None detected.

## Communities (23 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (199): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+191 more)

### Community 1 - "agentMove"
Cohesion: 0.06
Nodes (76): agentHunt(), agentMove(), agentStep(), animalArt(), approachOf(), bridgeKitStep(), bridgeLane(), bridgeSites() (+68 more)

### Community 2 - "renderCW"
Cohesion: 0.07
Nodes (71): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), buildEquivalents(), campOf(), canHold() (+63 more)

### Community 3 - "renderAllUI"
Cohesion: 0.05
Nodes (68): addAIAgent(), addAnimals(), animalLog(), animalPower(), answerPrayer(), applyAISolution(), captureRealm(), carryTraits() (+60 more)

### Community 4 - "gainExp"
Cohesion: 0.09
Nodes (64): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), auraR(), avail() (+56 more)

### Community 5 - "st"
Cohesion: 0.08
Nodes (61): addFood(), agentGather(), agentLevel(), atkOf(), bagCap(), bagCount(), carryBonus(), collectTrap() (+53 more)

### Community 6 - "addLog"
Cohesion: 0.08
Nodes (57): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), byId() (+49 more)

### Community 7 - "drawCanvas"
Cohesion: 0.06
Nodes (46): bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgePiece(), drawBridgeTile() (+38 more)

### Community 8 - "runAutonomousStep"
Cohesion: 0.13
Nodes (33): advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), baseOutfit(), baseTemp(), beastCheck(), bestStat() (+25 more)

### Community 9 - "objsOf"
Cohesion: 0.10
Nodes (29): addTextilePlants(), applyLayout(), blockedSet(), buildIsland(), closeLobby(), drawMiniMap(), findNewRecipes(), getZoneAt() (+21 more)

### Community 10 - "drawPuppet"
Cohesion: 0.09
Nodes (28): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawShield() (+20 more)

### Community 11 - "drawAnimal"
Cohesion: 0.27
Nodes (10): drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), mutatedSprite(), mutOK(), mutVariant(), shade() (+2 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "mapTap"
Cohesion: 0.40
Nodes (5): mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 15 - "makeSoul"
Cohesion: 0.67
Nodes (3): chooseKept(), keepCount(), makeSoul()

### Community 16 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `agentMove`, `renderCW`, `renderAllUI`, `gainExp`, `st`, `addLog`, `runAutonomousStep`, `objsOf`, `drawPuppet`, `drawAnimal`, `drawAgentTag`, `mapTap`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009478672985781991 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `agentMove`, `renderCW`, `renderAllUI`, `gainExp`, `st`, `runAutonomousStep`, `drawPuppet`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentMove` be split into smaller, more focused modules?**
  _Cohesion score 0.05964912280701754 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `agentMove`, `renderCW`, `renderAllUI`, `gainExp`, `addLog`, `runAutonomousStep`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderCW` be split into smaller, more focused modules?**
  _Cohesion score 0.06881287726358148 - nodes in this community are weakly interconnected._