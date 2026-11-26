# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 714 nodes · 2384 edges · 23 communities (18 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `42e55f29`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- addLog
- gainExp
- runAutonomousStep
- keyByName
- villageOf
- renderAllUI
- drawCanvas
- sigOf
- drawPuppet
- getTerrainCanvas
- drawAnimal
- drawAgentTag
- mapTap
- steleCanvas
- objWorldTick
- pupKeys
- bridgeAt
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
8. `renderCW()` - 35 edges
9. `gainExp()` - 34 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_

## Import Cycles
- None detected.

## Communities (23 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (187): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+179 more)

### Community 1 - "st"
Cohesion: 0.06
Nodes (81): accessibleStations(), addOwnLog(), addRel(), addTeachLog(), agentLevel(), applyWish(), askToUse(), assignJobs() (+73 more)

### Community 2 - "addLog"
Cohesion: 0.06
Nodes (63): addAIAgent(), addAnimals(), addLog(), animalArt(), applyAISolution(), assignGodQuests(), bridgeLane(), bridgeSites() (+55 more)

### Community 3 - "gainExp"
Cohesion: 0.08
Nodes (63): addFood(), agentGather(), agentHunt(), agentMove(), agentStep(), approachOf(), blockedSet(), campGear() (+55 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.07
Nodes (54): agentsCatchUp(), agentsRealtime(), airTemp(), animalLog(), animalPower(), baseTemp(), beastCheck(), bestStat() (+46 more)

### Community 5 - "keyByName"
Cohesion: 0.08
Nodes (52): apSel(), apToggle(), bagCount(), buildEquivalents(), campOf(), canUse(), carriedTools(), closeAgentCard() (+44 more)

### Community 6 - "villageOf"
Cohesion: 0.12
Nodes (40): agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger(), bridgeKitStep() (+32 more)

### Community 7 - "renderAllUI"
Cohesion: 0.10
Nodes (37): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics(), expNeed() (+29 more)

### Community 8 - "drawCanvas"
Cohesion: 0.09
Nodes (31): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawGate(), drawInsect(), drawProp(), drawSized() (+23 more)

### Community 9 - "sigOf"
Cohesion: 0.12
Nodes (24): applyLayout(), buildIsland(), designInvention(), drawMiniMap(), findNewRecipes(), getZoneAt(), giveSoul(), hashStr() (+16 more)

### Community 10 - "drawPuppet"
Cohesion: 0.14
Nodes (15): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+7 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "mapTap"
Cohesion: 0.33
Nodes (6): mapTap(), openAgentCard(), openStorePop(), resIcon(), tileOf(), worldOf()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `addLog`, `gainExp`, `runAutonomousStep`, `keyByName`, `renderAllUI`, `drawPuppet`, `getTerrainCanvas`, `drawAnimal`, `drawAgentTag`, `mapTap`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010050251256281407 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `runAutonomousStep`, `keyByName`, `villageOf`, `renderAllUI`, `sigOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.05617283950617284 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `addLog`, `gainExp`, `keyByName`, `villageOf`, `renderAllUI`, `sigOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.06041986687147977 - nodes in this community are weakly interconnected._