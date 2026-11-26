# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 713 nodes · 2381 edges · 25 communities (19 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0b6edbb2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- addLog
- gainExp
- runAutonomousStep
- agentWork
- renderAllUI
- drawCanvas
- buildZoneTerrain
- sigOf
- drawPuppet
- drawAnimal
- drawAgentTag
- newAgent
- prayerTick
- steleCanvas
- centerOnZone
- objWorldTick
- pupKeys
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 60 edges
2. `runAutonomousStep()` - 60 edges
3. `drawCanvas()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 48 edges
6. `villageOf()` - 36 edges
7. `keyByName()` - 35 edges
8. `renderCW()` - 34 edges
9. `gainExp()` - 34 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 8_

## Import Cycles
- None detected.

## Communities (25 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (187): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+179 more)

### Community 1 - "st"
Cohesion: 0.07
Nodes (66): apSel(), apToggle(), atkOf(), bagCap(), bagCount(), buildEquivalents(), carriedEff(), carriedTools() (+58 more)

### Community 2 - "addLog"
Cohesion: 0.07
Nodes (65): addAIAgent(), addLog(), addOwnLog(), addRel(), agentStep(), askToUse(), assignGodQuests(), assignJobs() (+57 more)

### Community 3 - "gainExp"
Cohesion: 0.08
Nodes (62): addFood(), agentGather(), agentHunt(), agentMove(), approachOf(), blockedSet(), campGear(), canReach() (+54 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.07
Nodes (59): addAnimals(), agentsCatchUp(), agentsRealtime(), airTemp(), animalPower(), applyAISolution(), applyWish(), baseTemp() (+51 more)

### Community 5 - "agentWork"
Cohesion: 0.10
Nodes (49): accessibleStations(), addTeachLog(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bridgeKitStep() (+41 more)

### Community 6 - "renderAllUI"
Cohesion: 0.08
Nodes (47): advanceGame(), agentLevel(), animalLog(), answerPrayer(), auraR(), captureRealm(), chooseKept(), closeLobby() (+39 more)

### Community 7 - "drawCanvas"
Cohesion: 0.08
Nodes (38): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawGate(), drawInsect() (+30 more)

### Community 8 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (33): animalArt(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), campOf(), clampC(), crossZone() (+25 more)

### Community 9 - "sigOf"
Cohesion: 0.11
Nodes (25): applyLayout(), buildIsland(), designInvention(), drawMiniMap(), findNewRecipes(), getZoneAt(), giveSoul(), hashStr() (+17 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 11 - "drawAnimal"
Cohesion: 0.31
Nodes (9): drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), mutatedSprite(), mutOK(), shade(), shadeCol() (+1 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "newAgent"
Cohesion: 0.43
Nodes (7): ensureAgent(), freshStats(), initFauna(), loadGameState(), newAgent(), randomTalent(), upgradeFauna()

### Community 14 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 17 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `addLog`, `gainExp`, `runAutonomousStep`, `renderAllUI`, `buildZoneTerrain`, `drawPuppet`, `drawAnimal`, `drawAgentTag`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010050251256281407 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `runAutonomousStep`, `agentWork`, `renderAllUI`, `buildZoneTerrain`, `sigOf`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.07132867132867132 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `gainExp`, `agentWork`, `renderAllUI`, `buildZoneTerrain`, `sigOf`, `newAgent`, `prayerTick`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.06778846153846153 - nodes in this community are weakly interconnected._