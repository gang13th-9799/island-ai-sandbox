# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 717 nodes · 2389 edges · 29 communities (22 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8e775fdf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- renderAllUI
- addLog
- byId
- runAutonomousStep
- objsOf
- trOf
- drawCanvas
- drawPuppet
- getTerrainCanvas
- drawAgent
- prayerTick
- newAgent
- templeDone
- drawAnimal
- animalArt
- canReach
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- drawFlameLayers
- FOOD_ITEM
- graveToggle
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `drawCanvas()` - 61 edges
2. `addLog()` - 60 edges
3. `runAutonomousStep()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 48 edges
6. `villageOf()` - 36 edges
7. `keyByName()` - 35 edges
8. `renderCW()` - 35 edges
9. `gainExp()` - 34 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 13 → community 7_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_

## Import Cycles
- None detected.

## Communities (29 total, 7 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (193): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, atGoal() (+185 more)

### Community 1 - "villageOf"
Cohesion: 0.09
Nodes (87): accessibleStations(), addFood(), addTeachLog(), agentGather(), agentHunt(), agentMove(), agentStep(), agentWork() (+79 more)

### Community 2 - "renderAllUI"
Cohesion: 0.06
Nodes (82): apSel(), apToggle(), atkOf(), bagCap(), bagCount(), campOf(), carriedTools(), carryBonus() (+74 more)

### Community 3 - "addLog"
Cohesion: 0.05
Nodes (72): addLog(), answerPrayer(), applyWish(), bridgeKitStep(), bridgeLane(), bridgeSites(), buildEquivalents(), buildHome() (+64 more)

### Community 4 - "byId"
Cohesion: 0.07
Nodes (49): addOwnLog(), addRel(), agentLevel(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId() (+41 more)

### Community 5 - "runAutonomousStep"
Cohesion: 0.09
Nodes (45): advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests(), baseTemp(), beastCheck(), bestStat() (+37 more)

### Community 6 - "objsOf"
Cohesion: 0.09
Nodes (31): applyLayout(), buildIsland(), designInvention(), drawMiniMap(), findNewRecipes(), getZoneAt(), giveSoul(), harvestTool() (+23 more)

### Community 7 - "trOf"
Cohesion: 0.15
Nodes (21): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+13 more)

### Community 8 - "drawCanvas"
Cohesion: 0.15
Nodes (16): bridgeImg(), drawBridgePiece(), drawCanvas(), drawGate(), drawTrapCode(), drawTreeV(), gateImg(), homeArtKey() (+8 more)

### Community 9 - "drawPuppet"
Cohesion: 0.17
Nodes (12): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), drawShield() (+4 more)

### Community 10 - "getTerrainCanvas"
Cohesion: 0.24
Nodes (11): bridgePieces(), bridgeVariant(), centerOnZone(), clampView(), drawBridgeTile(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat() (+3 more)

### Community 11 - "drawAgent"
Cohesion: 0.20
Nodes (10): drawAgent(), drawInsect(), drawProp(), drawStele(), drawStickFigure(), drawWorldObj(), fleeStep(), getMood() (+2 more)

### Community 12 - "prayerTick"
Cohesion: 0.25
Nodes (9): fateChance(), giftNeeds(), godAutoLevel(), materialWish(), prayerNeeds(), prayerTick(), renderPrayers(), setGodAuto() (+1 more)

### Community 13 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

### Community 14 - "templeDone"
Cohesion: 0.29
Nodes (8): auraR(), drawSized(), drawTemple(), homeImg(), templeArtIdx(), templeDone(), templePct(), templeQuestText()

### Community 15 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 16 - "animalArt"
Cohesion: 0.47
Nodes (6): animalArt(), drawCage(), drawSnareCatch(), isFishy(), preySize(), trapPrey()

### Community 17 - "canReach"
Cohesion: 0.33
Nodes (6): bridgeAt(), bridgeSet(), canReach(), deepAt(), reachOf(), urgentSwim()

### Community 18 - "drawAgentTag"
Cohesion: 0.47
Nodes (6): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), screenOf(), statusIcon()

### Community 19 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 20 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 21 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `villageOf`, `renderAllUI`, `addLog`, `byId`, `runAutonomousStep`, `objsOf`, `trOf`, `getTerrainCanvas`, `drawAgent`, `newAgent`, `templeDone`, `drawAnimal`, `animalArt`, `drawAgentTag`, `drawFlameLayers`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.00975609756097561 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `renderAllUI`, `byId`, `runAutonomousStep`, `objsOf`, `trOf`, `prayerTick`, `newAgent`, `templeDone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.0863405506549051 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `renderAllUI`, `addLog`, `byId`, `objsOf`, `trOf`, `prayerTick`, `newAgent`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.057512797350195724 - nodes in this community are weakly interconnected._