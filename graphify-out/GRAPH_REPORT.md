# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 438 nodes · 1324 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `675e0c1f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- addLog
- rel
- buildZoneTerrain
- ecologyTick
- productDef
- drawCanvas
- realmTravelTick
- drawPuppet
- renderAgentCard
- isNightTime
- drawAnimal
- drawAgentTag
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `villageOf()` - 22 edges
9. `gainExp()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 8_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `addAIAgent()` --calls--> `drawCanvas()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (119): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+111 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (56): accessibleStations(), addAIAgent(), agentLevel(), atGoal(), atStore(), avail(), bagCap(), bagCount() (+48 more)

### Community 2 - "addLog"
Cohesion: 0.13
Nodes (45): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), applyWish(), askToUse(), assignGodQuests() (+37 more)

### Community 3 - "rel"
Cohesion: 0.10
Nodes (33): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), crowdTick(), electChief(), score() (+25 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.14
Nodes (26): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+18 more)

### Community 5 - "ecologyTick"
Cohesion: 0.13
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+17 more)

### Community 6 - "productDef"
Cohesion: 0.15
Nodes (25): buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), findNewRecipes(), getTool(), giveDivineTool() (+17 more)

### Community 7 - "drawCanvas"
Cohesion: 0.12
Nodes (24): animalArt(), centerOnZone(), changeZoom(), clampView(), damageStation(), drawCanvas(), drawInsect(), drawProp() (+16 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.16
Nodes (22): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+14 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (19): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), hairStyleOf() (+11 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 11 - "isNightTime"
Cohesion: 0.29
Nodes (8): drawAgent(), drawStickFigure(), getEquip(), getMood(), isNightTime(), knowledgeExchange(), pupActivity(), updateSkyHud()

### Community 12 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `rel`, `buildZoneTerrain`, `ecologyTick`, `productDef`, `drawCanvas`, `realmTravelTick`, `drawPuppet`, `isNightTime`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.015503875968992248 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `addLog`, `rel`, `buildZoneTerrain`, `ecologyTick`, `productDef`, `realmTravelTick`, `drawPuppet`, `isNightTime`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08441558441558442 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `rel`, `buildZoneTerrain`, `ecologyTick`, `productDef`, `drawCanvas`, `realmTravelTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.12626262626262627 - nodes in this community are weakly interconnected._
- **Should `rel` be split into smaller, more focused modules?**
  _Cohesion score 0.10037878787878787 - nodes in this community are weakly interconnected._