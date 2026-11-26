# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 627 nodes · 2048 edges · 21 communities (17 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b6b2e78d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- villageOf
- drawCanvas
- productDef
- buildZoneTerrain
- renderAllUI
- rel
- trOf
- bodyRealtime
- renderAgentCard
- drawPuppet
- bodyStamina
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 32 edges
7. `villageOf()` - 32 edges
8. `pick()` - 31 edges
9. `agentWork()` - 31 edges
10. `experiment()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 8_
- `runAutonomousStep()` --calls--> `bestStat()`  [EXTRACTED]
  game.js → game.js  _Bridges community 0 → community 1_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (21 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (165): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+157 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.10
Nodes (73): addFood(), addLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), agentStep(), applyWish() (+65 more)

### Community 2 - "villageOf"
Cohesion: 0.09
Nodes (58): accessibleStations(), agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue() (+50 more)

### Community 3 - "drawCanvas"
Cohesion: 0.06
Nodes (49): animalArt(), auraR(), centerOnZone(), clampView(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas() (+41 more)

### Community 4 - "productDef"
Cohesion: 0.08
Nodes (47): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), carryBonus() (+39 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (43): addAIAgent(), applyLayout(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+35 more)

### Community 6 - "renderAllUI"
Cohesion: 0.10
Nodes (36): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), fateChance(), gateOf() (+28 more)

### Community 7 - "rel"
Cohesion: 0.12
Nodes (29): addOwnLog(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief() (+21 more)

### Community 8 - "trOf"
Cohesion: 0.12
Nodes (26): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+18 more)

### Community 9 - "bodyRealtime"
Cohesion: 0.13
Nodes (25): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), bodyRealtime(), bodyTemp(), clothWarmth(), feltTemp() (+17 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.12
Nodes (17): closeAgentCard(), closeAgentPop(), DIFF_STARS(), getAgeStage(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap() (+9 more)

### Community 11 - "drawPuppet"
Cohesion: 0.15
Nodes (13): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+5 more)

### Community 12 - "bodyStamina"
Cohesion: 0.24
Nodes (11): bodyStamina(), campGear(), canTrip(), gameHour(), homesOf(), homeStep(), restMove(), RT_ON() (+3 more)

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `productDef`, `buildZoneTerrain`, `renderAllUI`, `rel`, `trOf`, `bodyRealtime`, `bodyStamina`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011299435028248588 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `buildZoneTerrain`, `renderAllUI`, `rel`, `trOf`, `bodyRealtime`, `bodyStamina`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09512937595129375 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `villageOf`, `drawCanvas`, `productDef`, `buildZoneTerrain`, `rel`, `trOf`, `bodyRealtime`, `renderAgentCard`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.08953418027828192 - nodes in this community are weakly interconnected._