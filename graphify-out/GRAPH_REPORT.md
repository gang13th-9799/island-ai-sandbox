# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 784 nodes · 2723 edges · 27 communities (20 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7142322`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- renderCW
- runAutonomousStep
- villageOf
- agentMove
- buildZoneTerrain
- renderPosHud
- drawCanvas
- sigOf
- renderAllUI
- drawPuppet
- getTerrainCanvas
- drawAnimal
- drawAgentTag
- prayerTick
- steleCanvas
- animalArt
- objWorldTick
- pupKeys
- bridgeAt
- bridgeSites
- switchTab
- startSimLoop
- FOOD_ITEM
- graveToggle
- nearGatherable

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 47 edges
7. `keyByName()` - 39 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (27 total, 7 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (197): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+189 more)

### Community 1 - "addLog"
Cohesion: 0.05
Nodes (103): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentLevel(), applyWish() (+95 more)

### Community 2 - "renderCW"
Cohesion: 0.07
Nodes (71): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), atkOf(), buildEquivalents(), campOf() (+63 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.07
Nodes (61): addAIAgent(), addAnimals(), agentsCatchUp(), airTemp(), animalPower(), applyAISolution(), baseTemp(), beastCheck() (+53 more)

### Community 4 - "villageOf"
Cohesion: 0.09
Nodes (51): accessibleStations(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger() (+43 more)

### Community 5 - "agentMove"
Cohesion: 0.10
Nodes (50): agentHunt(), agentMove(), agentStep(), approachOf(), blockedSet(), campGear(), canReach(), canTrip() (+42 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (45): advanceGame(), agentsRealtime(), answerPrayer(), buildSpot(), buildStation(), buildZoneTerrain(), captureRealm(), clampC() (+37 more)

### Community 7 - "renderPosHud"
Cohesion: 0.08
Nodes (44): bagCap(), canHelp(), carryBonus(), closeAgentCard(), closeAgentPop(), closeCW(), cwAddStat(), DIFF_STARS() (+36 more)

### Community 8 - "drawCanvas"
Cohesion: 0.08
Nodes (32): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawFlameLayers(), drawGate(), drawInsect(), drawProp() (+24 more)

### Community 9 - "sigOf"
Cohesion: 0.12
Nodes (25): applyLayout(), buildIsland(), designInvention(), drawMiniMap(), findNewRecipes(), getZoneAt(), giveSoul(), hashStr() (+17 more)

### Community 10 - "renderAllUI"
Cohesion: 0.18
Nodes (16): animalLog(), auraR(), evolveOne(), evolveTick(), expNeed(), knowersOf(), relLabel(), renderAllUI() (+8 more)

### Community 11 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 12 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 16 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 17 - "animalArt"
Cohesion: 0.83
Nodes (4): animalArt(), isFishy(), preySize(), trapPrey()

### Community 18 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 19 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `renderCW`, `runAutonomousStep`, `agentMove`, `buildZoneTerrain`, `renderPosHud`, `sigOf`, `renderAllUI`, `drawPuppet`, `getTerrainCanvas`, `drawAnimal`, `drawAgentTag`, `animalArt`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009569377990430622 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderCW`, `runAutonomousStep`, `villageOf`, `agentMove`, `buildZoneTerrain`, `renderPosHud`, `sigOf`, `renderAllUI`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.05444507900247478 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `renderCW`, `runAutonomousStep`, `villageOf`, `agentMove`, `buildZoneTerrain`, `renderPosHud`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderCW` be split into smaller, more focused modules?**
  _Cohesion score 0.07203219315895372 - nodes in this community are weakly interconnected._