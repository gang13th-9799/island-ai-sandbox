# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 780 nodes · 2711 edges · 26 communities (20 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16257d29`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- renderCW
- villageOf
- addLog
- gainExp
- drawPuppet
- renderAllUI
- byId
- runAutonomousStep
- drawCanvas
- drawAnimal
- getTerrainCanvas
- drawAgentTag
- steleCanvas
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- readCap
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 46 edges
7. `keyByName()` - 39 edges
8. `villageOf()` - 36 edges
9. `gainExp()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 9_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 8_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 9_

## Import Cycles
- None detected.

## Communities (26 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (194): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+186 more)

### Community 1 - "st"
Cohesion: 0.07
Nodes (72): addFood(), agentGather(), atkOf(), bagCap(), bagCount(), canHelp(), closeAgentCard(), closeAgentPop() (+64 more)

### Community 2 - "renderCW"
Cohesion: 0.07
Nodes (71): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), buildEquivalents(), campOf(), canHold() (+63 more)

### Community 3 - "villageOf"
Cohesion: 0.08
Nodes (66): agentHunt(), agentMove(), approachOf(), askToUse(), atStore(), bagValue(), bestHomeTier(), bridgeKitStep() (+58 more)

### Community 4 - "addLog"
Cohesion: 0.06
Nodes (59): addAIAgent(), addAnimals(), addLog(), addOwnLog(), applyAISolution(), assignGodQuests(), buildHome(), buildHut() (+51 more)

### Community 5 - "gainExp"
Cohesion: 0.11
Nodes (49): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), auraR(), avail(), completeQuest() (+41 more)

### Community 6 - "drawPuppet"
Cohesion: 0.06
Nodes (43): applyLayout(), armLen(), blockedSet(), buildIsland(), drawAgent(), drawBow(), drawEyeArt(), drawItem() (+35 more)

### Community 7 - "renderAllUI"
Cohesion: 0.08
Nodes (41): advanceGame(), animalLog(), animalPower(), answerPrayer(), captureRealm(), closeLobby(), evolveOne(), evolveTick() (+33 more)

### Community 8 - "byId"
Cohesion: 0.11
Nodes (38): addRel(), agentStep(), assignJobs(), assignQuests(), byId(), courtStep(), createQuest(), electChief() (+30 more)

### Community 9 - "runAutonomousStep"
Cohesion: 0.11
Nodes (38): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyHunger(), bodyRealtime() (+30 more)

### Community 10 - "drawCanvas"
Cohesion: 0.09
Nodes (31): bridgeImg(), drawBridgePiece(), drawCanvas(), drawFlameLayers(), drawGate(), drawInsect(), drawProp(), drawSized() (+23 more)

### Community 11 - "drawAnimal"
Cohesion: 0.22
Nodes (13): animalArt(), drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), isFishy(), mutatedSprite(), mutOK() (+5 more)

### Community 12 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 16 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 17 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 19 - "readCap"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `renderCW`, `villageOf`, `addLog`, `gainExp`, `drawPuppet`, `renderAllUI`, `byId`, `runAutonomousStep`, `drawAnimal`, `getTerrainCanvas`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009708737864077669 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `renderCW`, `villageOf`, `gainExp`, `renderAllUI`, `byId`, `runAutonomousStep`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.06729264475743349 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `renderCW`, `villageOf`, `addLog`, `gainExp`, `renderAllUI`, `byId`, `runAutonomousStep`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderCW` be split into smaller, more focused modules?**
  _Cohesion score 0.06800804828973843 - nodes in this community are weakly interconnected._