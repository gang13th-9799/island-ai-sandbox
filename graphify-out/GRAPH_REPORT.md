# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 605 nodes · 1957 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `54ab9f34`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- villageOf
- drawCanvas
- renderAllUI
- keyByName
- runAutonomousStep
- buildZoneTerrain
- trOf
- hashStr
- drawPuppet
- agentStep
- mapTap
- steleCanvas
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 46 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 6_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 7 → community 8_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (22 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (160): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+152 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (73): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), applyWish() (+65 more)

### Community 2 - "villageOf"
Cohesion: 0.09
Nodes (55): accessibleStations(), agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue() (+47 more)

### Community 3 - "drawCanvas"
Cohesion: 0.07
Nodes (47): animalArt(), auraR(), centerOnZone(), clampView(), damageStation(), drawAgentTag(), drawAnimal(), drawCanvas() (+39 more)

### Community 4 - "renderAllUI"
Cohesion: 0.09
Nodes (41): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance(), gateOf() (+33 more)

### Community 5 - "keyByName"
Cohesion: 0.09
Nodes (40): apSel(), apToggle(), bagCap(), bagCount(), buildEquivalents(), campOf(), canUse(), carriedTools() (+32 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.12
Nodes (33): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyTemp() (+25 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (30): addAIAgent(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone(), crowdTick() (+22 more)

### Community 8 - "trOf"
Cohesion: 0.12
Nodes (26): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+18 more)

### Community 9 - "hashStr"
Cohesion: 0.15
Nodes (20): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), insectsOf() (+12 more)

### Community 10 - "drawPuppet"
Cohesion: 0.13
Nodes (19): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+11 more)

### Community 11 - "agentStep"
Cohesion: 0.19
Nodes (16): agentStep(), assignQuests(), canHelp(), coldMove(), createQuest(), isRestShelter(), negotiate(), restMove() (+8 more)

### Community 12 - "mapTap"
Cohesion: 0.25
Nodes (8): itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `villageOf`, `drawCanvas`, `renderAllUI`, `keyByName`, `buildZoneTerrain`, `trOf`, `agentStep`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011695906432748537 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `drawCanvas`, `renderAllUI`, `keyByName`, `runAutonomousStep`, `buildZoneTerrain`, `trOf`, `agentStep`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08561643835616438 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `villageOf`, `drawCanvas`, `keyByName`, `runAutonomousStep`, `buildZoneTerrain`, `trOf`, `hashStr`, `drawPuppet`, `agentStep`, `mapTap`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.09292929292929293 - nodes in this community are weakly interconnected._