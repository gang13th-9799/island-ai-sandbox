# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 422 nodes · 1281 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `709256d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- productDef
- ecologyTick
- renderAllUI
- buildZoneTerrain
- rel
- realmTravelTick
- drawCanvas
- drawPuppet
- renderAgentCard
- drawAnimal
- newAgent
- drawAgentTag
- objWorldTick
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `drawCanvas()` - 32 edges
5. `st()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `gainExp()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 0 → community 1_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 12 → community 3_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (17 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (119): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, atGoal(), BACK_ITEMS (+111 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.12
Nodes (56): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), avail(), completeQuest() (+48 more)

### Community 2 - "productDef"
Cohesion: 0.10
Nodes (37): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), depthOf(), findNewRecipes(), getTool() (+29 more)

### Community 3 - "ecologyTick"
Cohesion: 0.09
Nodes (34): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+26 more)

### Community 4 - "renderAllUI"
Cohesion: 0.15
Nodes (25): agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept(), depositTick() (+17 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (25): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), feltTemp(), findValidTile(), fixWeather() (+17 more)

### Community 6 - "rel"
Cohesion: 0.15
Nodes (24): assignJobs(), assignQuests(), byId(), canHelp(), crowdTick(), electChief(), score(), holdFoundingMeeting() (+16 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.15
Nodes (23): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+15 more)

### Community 8 - "drawCanvas"
Cohesion: 0.13
Nodes (21): animalArt(), centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawProp(), drawSized(), drawTreeV() (+13 more)

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
Cohesion: 0.43
Nodes (7): addAIAgent(), ensureAgent(), freshStats(), godChild(), newAgent(), pickChildName(), randomTalent()

### Community 13 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `productDef`, `ecologyTick`, `renderAllUI`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `drawCanvas`, `newAgent`, `objWorldTick`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.015625 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `productDef`, `ecologyTick`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `drawPuppet`, `newAgent`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.11948051948051948 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `productDef`, `ecologyTick`, `renderAllUI`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `productDef` be split into smaller, more focused modules?**
  _Cohesion score 0.09759759759759759 - nodes in this community are weakly interconnected._
- **Should `ecologyTick` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._