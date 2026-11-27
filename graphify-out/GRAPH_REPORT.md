# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 785 nodes · 2728 edges · 26 communities (20 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `11b12ca1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- renderAllUI
- renderCW
- experiment
- renderPosHud
- byId
- agentMove
- drawCanvas
- drawPuppet
- getTerrainCanvas
- hashStr
- zoneWeather
- drawAgentTag
- drawAnimal
- prayerTick
- steleCanvas
- animalArt
- objWorldTick
- pupKeys
- bridgeSites
- switchTab
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 48 edges
7. `keyByName()` - 39 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `runQuests()` --indirect_call--> `runQuestOne()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_

## Import Cycles
- None detected.

## Communities (26 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (199): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+191 more)

### Community 1 - "addLog"
Cohesion: 0.06
Nodes (101): accessibleStations(), addAnimals(), addFood(), addLog(), agentGather(), agentLevel(), agentsCatchUp(), agentsRealtime() (+93 more)

### Community 2 - "renderAllUI"
Cohesion: 0.05
Nodes (74): addAIAgent(), advanceGame(), animalLog(), answerPrayer(), applyLayout(), buildIsland(), buildSpot(), buildZoneTerrain() (+66 more)

### Community 3 - "renderCW"
Cohesion: 0.07
Nodes (70): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), atkOf(), bagCap(), baseOutfit() (+62 more)

### Community 4 - "experiment"
Cohesion: 0.09
Nodes (55): addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), auraR(), avail(), bagValue() (+47 more)

### Community 5 - "renderPosHud"
Cohesion: 0.07
Nodes (51): bagCount(), bridgeKitStep(), canHelp(), closeAgentCard(), closeAgentPop(), closeCW(), cwAddStat(), DIFF_STARS() (+43 more)

### Community 6 - "byId"
Cohesion: 0.08
Nodes (50): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId(), canUse() (+42 more)

### Community 7 - "agentMove"
Cohesion: 0.09
Nodes (45): agentHunt(), agentMove(), approachOf(), blockedSet(), bridgeAt(), bridgeSet(), campGear(), canReach() (+37 more)

### Community 8 - "drawCanvas"
Cohesion: 0.08
Nodes (33): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawFlameLayers(), drawGate(), drawInsect(), drawProp() (+25 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 10 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 11 - "hashStr"
Cohesion: 0.27
Nodes (10): designInvention(), findNewRecipes(), hashStr(), hrand(), mutVariant(), natureLaw(), react(), short() (+2 more)

### Community 12 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

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
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `renderAllUI`, `renderCW`, `experiment`, `renderPosHud`, `byId`, `agentMove`, `drawPuppet`, `getTerrainCanvas`, `zoneWeather`, `drawAgentTag`, `drawAnimal`, `animalArt`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009478672985781991 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderAllUI`, `renderCW`, `experiment`, `renderPosHud`, `byId`, `agentMove`, `zoneWeather`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.06178217821782178 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `renderAllUI`, `renderCW`, `experiment`, `renderPosHud`, `byId`, `agentMove`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._