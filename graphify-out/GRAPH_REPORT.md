# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 422 nodes · 1290 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6bc5dabf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- ecologyTick
- rel
- productDef
- buildZoneTerrain
- addLog
- drawCanvas
- propsOf
- drawPuppet
- renderAgentCard
- drawAnimal
- newAgent
- drawAgentTag
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `drawCanvas()` - 32 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `gainExp()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 12 → community 2_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `godChild()` --calls--> `addRel()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 12_
- `holdFoundingMeeting()` --calls--> `addRel()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (112): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+104 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (75): accessibleStations(), addFood(), addRel(), addTeachLog(), agentLevel(), atGoal(), atStore(), avail() (+67 more)

### Community 2 - "ecologyTick"
Cohesion: 0.09
Nodes (34): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+26 more)

### Community 3 - "rel"
Cohesion: 0.11
Nodes (30): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), crowdTick(), electChief(), score() (+22 more)

### Community 4 - "productDef"
Cohesion: 0.14
Nodes (27): addOwnLog(), askToUse(), canUse(), consume(), depthOf(), getTool(), giveDivineTool(), harvestTool() (+19 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (25): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+17 more)

### Community 6 - "addLog"
Cohesion: 0.15
Nodes (24): addLog(), answerPrayer(), assignGodQuests(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf() (+16 more)

### Community 7 - "drawCanvas"
Cohesion: 0.12
Nodes (22): animalArt(), centerOnZone(), changeZoom(), clampView(), damageStation(), drawCanvas(), drawProp(), drawSized() (+14 more)

### Community 8 - "propsOf"
Cohesion: 0.15
Nodes (17): buildEquivalents(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mkObj(), natureLaw(), objsOf() (+9 more)

### Community 9 - "drawPuppet"
Cohesion: 0.22
Nodes (11): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getEquip(), getMood() (+3 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 11 - "drawAnimal"
Cohesion: 0.31
Nodes (9): drawAnimal(), drawInsect(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol() (+1 more)

### Community 12 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `ecologyTick`, `rel`, `productDef`, `buildZoneTerrain`, `addLog`, `drawCanvas`, `propsOf`, `newAgent`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01652892561983471 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `ecologyTick`, `rel`, `productDef`, `buildZoneTerrain`, `addLog`, `propsOf`, `drawPuppet`, `newAgent`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08432432432432432 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `rel`, `productDef`, `buildZoneTerrain`, `addLog`, `renderAgentCard`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `ecologyTick` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `rel` be split into smaller, more focused modules?**
  _Cohesion score 0.11494252873563218 - nodes in this community are weakly interconnected._