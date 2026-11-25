# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 596 nodes · 1923 edges · 20 communities (18 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `da967f24`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- villageOf
- pick
- renderAllUI
- keyByName
- agentMove
- drawCanvas
- rel
- drawPuppet
- trOf
- getZoneAt
- mapTap
- drawAnimal
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 45 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 10_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `produce()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `crossRealm()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (20 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (159): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+151 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (66): addFood(), addLog(), agentGather(), agentHunt(), agentsCatchUp(), agentsRealtime(), agentStep(), airTemp() (+58 more)

### Community 2 - "villageOf"
Cohesion: 0.10
Nodes (48): accessibleStations(), addTeachLog(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bodyHunger() (+40 more)

### Community 3 - "pick"
Cohesion: 0.08
Nodes (48): addAIAgent(), addAnimals(), applyWish(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), clampC() (+40 more)

### Community 4 - "renderAllUI"
Cohesion: 0.08
Nodes (44): advanceGame(), agentLevel(), answerPrayer(), auraR(), captureRealm(), chooseKept(), closeLobby(), crossRealm() (+36 more)

### Community 5 - "keyByName"
Cohesion: 0.08
Nodes (44): apSel(), apToggle(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), consume(), depthOf() (+36 more)

### Community 6 - "agentMove"
Cohesion: 0.13
Nodes (28): agentMove(), canUse(), coldMove(), harvestTool(), hasShelter(), homeOf(), isRestShelter(), moveToward() (+20 more)

### Community 7 - "drawCanvas"
Cohesion: 0.10
Nodes (28): animalArt(), centerOnZone(), changeZoom(), clampView(), damageStation(), drawCanvas(), drawInsect(), drawProp() (+20 more)

### Community 8 - "rel"
Cohesion: 0.14
Nodes (27): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp() (+19 more)

### Community 9 - "drawPuppet"
Cohesion: 0.11
Nodes (20): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+12 more)

### Community 10 - "trOf"
Cohesion: 0.16
Nodes (19): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), getAdjacentZones() (+11 more)

### Community 11 - "getZoneAt"
Cohesion: 0.22
Nodes (13): applyLayout(), buildIsland(), drawMiniMap(), getZoneAt(), isleNoise(), miniMapTap(), mmZoneImage(), renderLoop() (+5 more)

### Community 12 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `pick`, `renderAllUI`, `keyByName`, `agentMove`, `rel`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011764705882352941 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `pick`, `renderAllUI`, `keyByName`, `agentMove`, `drawCanvas`, `rel`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `villageOf`, `pick`, `keyByName`, `rel`, `drawPuppet`, `trOf`, `getZoneAt`, `mapTap`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.10372340425531915 - nodes in this community are weakly interconnected._