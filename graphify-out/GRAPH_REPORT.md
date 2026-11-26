# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 643 nodes · 2110 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a3e8969e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- productDef
- renderAllUI
- rel
- buildZoneTerrain
- agentMove
- drawCanvas
- drawPuppet
- renderStorePop
- getTerrainCanvas
- drawAnimal
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 55 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 49 edges
5. `st()` - 40 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentWork()` - 32 edges
9. `pick()` - 31 edges
10. `agentMove()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (169): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+161 more)

### Community 1 - "addLog"
Cohesion: 0.07
Nodes (89): accessibleStations(), addFood(), addLog(), addOwnLog(), addTeachLog(), agentGather(), agentLevel(), agentWork() (+81 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.07
Nodes (66): addAIAgent(), addAnimals(), agentsCatchUp(), agentsRealtime(), airTemp(), animalPower(), applyAISolution(), applyWish() (+58 more)

### Community 3 - "productDef"
Cohesion: 0.07
Nodes (53): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), carryBonus() (+45 more)

### Community 4 - "renderAllUI"
Cohesion: 0.08
Nodes (48): advanceGame(), animalLog(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics() (+40 more)

### Community 5 - "rel"
Cohesion: 0.09
Nodes (43): addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), coldMove() (+35 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.10
Nodes (35): applyLayout(), blockedSet(), buildIsland(), buildSpot(), buildZoneTerrain(), clampC(), crossZone(), crowdTick() (+27 more)

### Community 7 - "agentMove"
Cohesion: 0.12
Nodes (33): agentHunt(), agentMove(), approachOf(), campGear(), canTrip(), drink(), drinkSpotsOf(), drinkStep() (+25 more)

### Community 8 - "drawCanvas"
Cohesion: 0.11
Nodes (24): animalArt(), damageStation(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawStele(), drawTemple() (+16 more)

### Community 9 - "drawPuppet"
Cohesion: 0.13
Nodes (16): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+8 more)

### Community 10 - "renderStorePop"
Cohesion: 0.18
Nodes (13): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+5 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `productDef`, `renderAllUI`, `rel`, `buildZoneTerrain`, `agentMove`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011049723756906077 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `productDef`, `renderAllUI`, `rel`, `buildZoneTerrain`, `agentMove`, `drawCanvas`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.07201225740551584 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `renderAllUI`, `rel`, `buildZoneTerrain`, `agentMove`, `drawPuppet`, `renderStorePop`, `getTerrainCanvas`, `drawAnimal`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._