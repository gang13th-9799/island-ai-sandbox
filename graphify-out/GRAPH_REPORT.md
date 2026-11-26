# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 703 nodes · 2328 edges · 25 communities (21 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `92b7ba38`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentWork
- buildZoneTerrain
- addLog
- runAutonomousStep
- agentMove
- byId
- drawPuppet
- drawCanvas
- renderAllUI
- renderStorePop
- getTerrainCanvas
- getZoneAt
- drawAgentTag
- drawAnimal
- natureLaw
- animalArt
- deepAt
- steleCanvas
- objWorldTick
- pupKeys
- bridgeSites
- closeSheet
- startSimLoop
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 60 edges
2. `runAutonomousStep()` - 60 edges
3. `drawCanvas()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 34 edges
8. `agentMove()` - 33 edges
9. `agentWork()` - 32 edges
10. `keyByName()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_

## Import Cycles
- None detected.

## Communities (25 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (184): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+176 more)

### Community 1 - "agentWork"
Cohesion: 0.07
Nodes (79): accessibleStations(), addTeachLog(), agentWork(), apSel(), apToggle(), atGoal(), atStore(), avail() (+71 more)

### Community 2 - "buildZoneTerrain"
Cohesion: 0.06
Nodes (63): addAIAgent(), addAnimals(), advanceGame(), answerPrayer(), applyAISolution(), buildSpot(), buildZoneTerrain(), captureRealm() (+55 more)

### Community 3 - "addLog"
Cohesion: 0.09
Nodes (55): addFood(), addLog(), addOwnLog(), agentGather(), agentLevel(), applyWish(), bagCount(), bodyStamina() (+47 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.08
Nodes (53): agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests(), atkOf(), bagCap(), baseTemp(), beastCheck() (+45 more)

### Community 5 - "agentMove"
Cohesion: 0.09
Nodes (52): agentHunt(), agentMove(), animalPower(), approachOf(), blockedSet(), campGear(), canReach(), canTrip() (+44 more)

### Community 6 - "byId"
Cohesion: 0.09
Nodes (43): addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp() (+35 more)

### Community 7 - "drawPuppet"
Cohesion: 0.08
Nodes (31): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+23 more)

### Community 8 - "drawCanvas"
Cohesion: 0.10
Nodes (28): bridgeImg(), drawBridgePiece(), drawCage(), drawCanvas(), drawGate(), drawInsect(), drawProp(), drawSized() (+20 more)

### Community 9 - "renderAllUI"
Cohesion: 0.16
Nodes (18): animalLog(), auraR(), evolveOne(), evolveTick(), expNeed(), failCap(), knowersOf(), relLabel() (+10 more)

### Community 10 - "renderStorePop"
Cohesion: 0.15
Nodes (15): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+7 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.19
Nodes (13): bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas() (+5 more)

### Community 12 - "getZoneAt"
Cohesion: 0.24
Nodes (12): applyLayout(), buildIsland(), drawMiniMap(), getZoneAt(), isleNoise(), miniMapTap(), mmZoneImage(), renderMiniMap() (+4 more)

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 15 - "natureLaw"
Cohesion: 0.50
Nodes (5): findNewRecipes(), hrand(), natureLaw(), validRecipes(), world()

### Community 16 - "animalArt"
Cohesion: 0.83
Nodes (4): animalArt(), isFishy(), preySize(), trapPrey()

### Community 17 - "deepAt"
Cohesion: 0.50
Nodes (4): bridgeAt(), bridgeSet(), deepAt(), reachOf()

### Community 18 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 19 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 20 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `buildZoneTerrain`, `addLog`, `runAutonomousStep`, `agentMove`, `byId`, `drawPuppet`, `renderAllUI`, `renderStorePop`, `getTerrainCanvas`, `drawAgentTag`, `drawAnimal`, `animalArt`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01020408163265306 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `agentWork`, `buildZoneTerrain`, `runAutonomousStep`, `agentMove`, `byId`, `drawPuppet`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentWork` be split into smaller, more focused modules?**
  _Cohesion score 0.06686140863356053 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `agentWork`, `buildZoneTerrain`, `addLog`, `agentMove`, `byId`, `drawPuppet`, `renderAllUI`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.0629800307219662 - nodes in this community are weakly interconnected._