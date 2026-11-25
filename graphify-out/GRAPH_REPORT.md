# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 496 nodes · 1523 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ab887cfa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- drawCanvas
- runAutonomousStep
- buildZoneTerrain
- keyByName
- rel
- realmTravelTick
- ecologyTick
- drawPuppet
- needsOf
- newAgent
- steleCanvas
- objWorldTick
- pupKeys
- setZoom
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 37 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 8_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 8_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 11_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (135): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+127 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (62): addFood(), addLog(), addTeachLog(), agentLevel(), applyWish(), assignGodQuests(), bagCap(), bagCount() (+54 more)

### Community 2 - "drawCanvas"
Cohesion: 0.07
Nodes (45): animalArt(), centerOnZone(), clampView(), closeAgentCard(), damageStation(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+37 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.12
Nodes (42): accessibleStations(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bestStat(), buildHut() (+34 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (38): buildHome(), buildIsland(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), drawMiniMap(), findValidTile() (+30 more)

### Community 5 - "keyByName"
Cohesion: 0.11
Nodes (32): buildEquivalents(), consume(), depthOf(), designInvention(), findNewRecipes(), getTool(), giveDivineTool(), glyphOfThing() (+24 more)

### Community 6 - "rel"
Cohesion: 0.12
Nodes (30): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+22 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.12
Nodes (28): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+20 more)

### Community 8 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+16 more)

### Community 9 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 10 - "needsOf"
Cohesion: 0.27
Nodes (12): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), needsOf(), personalFood() (+4 more)

### Community 11 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `drawCanvas`, `buildZoneTerrain`, `keyByName`, `rel`, `realmTravelTick`, `ecologyTick`, `needsOf`, `newAgent`, `objWorldTick`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013793103448275862 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `drawCanvas`, `runAutonomousStep`, `buildZoneTerrain`, `keyByName`, `rel`, `realmTravelTick`, `ecologyTick`, `needsOf`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08725542041248018 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `addLog` to `game.js`, `drawCanvas`, `runAutonomousStep`, `buildZoneTerrain`, `keyByName`, `rel`, `realmTravelTick`, `ecologyTick`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06565656565656566 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.1207897793263647 - nodes in this community are weakly interconnected._