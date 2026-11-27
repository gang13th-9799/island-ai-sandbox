# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 783 nodes · 2722 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3f4bc2be`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentMove
- renderCW
- villageOf
- st
- addLog
- renderPosHud
- drawCanvas
- byId
- runAutonomousStep
- drawPuppet
- drawAnimal
- hashStr
- drawAgentTag
- steleCanvas
- centerOnZone
- objWorldTick
- pupKeys
- bridgeAt
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 47 edges
7. `keyByName()` - 39 edges
8. `villageOf()` - 36 edges
9. `gainExp()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 9_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 9_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 8_
- `runQuests()` --indirect_call--> `runQuestOne()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 8_

## Import Cycles
- None detected.

## Communities (22 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (196): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+188 more)

### Community 1 - "agentMove"
Cohesion: 0.05
Nodes (94): addAIAgent(), addAnimals(), agentHunt(), agentMove(), applyAISolution(), approachOf(), blockedSet(), buildSpot() (+86 more)

### Community 2 - "renderCW"
Cohesion: 0.07
Nodes (72): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), buildEquivalents(), campOf(), canHold() (+64 more)

### Community 3 - "villageOf"
Cohesion: 0.07
Nodes (71): accessibleStations(), addTeachLog(), agentWork(), applyWish(), assignQuests(), atGoal(), atStore(), auraR() (+63 more)

### Community 4 - "st"
Cohesion: 0.09
Nodes (63): addFood(), addRel(), agentGather(), agentsRealtime(), agentStep(), animalPower(), atkOf(), bagCap() (+55 more)

### Community 5 - "addLog"
Cohesion: 0.05
Nodes (62): addLog(), advanceGame(), animalLog(), answerPrayer(), assignGodQuests(), captureRealm(), closeLobby(), createQuest() (+54 more)

### Community 6 - "renderPosHud"
Cohesion: 0.07
Nodes (48): buildIsland(), campGear(), closeAgentCard(), closeAgentPop(), closeCW(), closeSheet(), cwAddStat(), drawMiniMap() (+40 more)

### Community 7 - "drawCanvas"
Cohesion: 0.08
Nodes (39): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawFlameLayers(), drawGate() (+31 more)

### Community 8 - "byId"
Cohesion: 0.11
Nodes (30): addOwnLog(), agentLevel(), askToUse(), assignJobs(), byId(), chooseKept(), coldMove(), electChief() (+22 more)

### Community 9 - "runAutonomousStep"
Cohesion: 0.18
Nodes (24): agentsCatchUp(), airTemp(), baseTemp(), bestStat(), bodyRealtime(), bodyStamina(), bodyTemp(), bodyThirst() (+16 more)

### Community 10 - "drawPuppet"
Cohesion: 0.13
Nodes (16): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+8 more)

### Community 11 - "drawAnimal"
Cohesion: 0.22
Nodes (13): animalArt(), drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), isFishy(), mutatedSprite(), mutOK() (+5 more)

### Community 12 - "hashStr"
Cohesion: 0.22
Nodes (13): applyLayout(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mmZoneImage(), mutVariant(), natureLaw() (+5 more)

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

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

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `agentMove`, `renderCW`, `villageOf`, `st`, `addLog`, `renderPosHud`, `byId`, `runAutonomousStep`, `drawPuppet`, `drawAnimal`, `hashStr`, `drawAgentTag`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009615384615384616 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `agentMove`, `renderCW`, `villageOf`, `st`, `renderPosHud`, `byId`, `runAutonomousStep`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentMove` be split into smaller, more focused modules?**
  _Cohesion score 0.05147563486616335 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `agentMove`, `renderCW`, `villageOf`, `addLog`, `renderPosHud`, `byId`, `runAutonomousStep`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderCW` be split into smaller, more focused modules?**
  _Cohesion score 0.06807511737089202 - nodes in this community are weakly interconnected._