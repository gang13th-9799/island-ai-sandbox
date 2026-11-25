# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 412 nodes · 1253 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3721426a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- addLog
- rel
- buildZoneTerrain
- realmTravelTick
- ecologyTick
- pick
- drawCanvas
- propsOf
- drawPuppet
- renderAgentCard
- switchZone
- drawAgentTag
- drawAnimal
- pupKeys
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `st()` - 30 edges
5. `drawCanvas()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `canUse()` --calls--> `rel()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `generateQuests()` --calls--> `pick()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (108): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, animalLogs, BACK_ITEMS, BASE_ZONES, discoveredElements (+100 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (56): accessibleStations(), addFood(), agentLevel(), atGoal(), atStore(), avail(), bagCap(), bagCount() (+48 more)

### Community 2 - "addLog"
Cohesion: 0.11
Nodes (53): addLog(), addOwnLog(), addRel(), addTeachLog(), applyAISolution(), askToUse(), assignGodQuests(), completeQuest() (+45 more)

### Community 3 - "rel"
Cohesion: 0.14
Nodes (26): applyWish(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score() (+18 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (25): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+17 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.15
Nodes (23): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+15 more)

### Community 6 - "ecologyTick"
Cohesion: 0.16
Nodes (19): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), getAdjacentZones() (+11 more)

### Community 7 - "pick"
Cohesion: 0.17
Nodes (18): addAIAgent(), addAnimals(), damageStation(), ensureAgent(), freshStats(), generateCrisisProposal(), godChild(), inheritTalent() (+10 more)

### Community 8 - "drawCanvas"
Cohesion: 0.17
Nodes (16): animalArt(), drawCanvas(), drawProp(), drawSized(), drawTreeV(), drawWorldObj(), elevOf(), getTerrainCanvas() (+8 more)

### Community 9 - "propsOf"
Cohesion: 0.17
Nodes (16): buildEquivalents(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), materialWish(), natureLaw() (+8 more)

### Community 10 - "drawPuppet"
Cohesion: 0.25
Nodes (9): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupArmIK() (+1 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 12 - "switchZone"
Cohesion: 0.29
Nodes (8): centerOnZone(), changeZoom(), clampView(), getZoneAt(), renderMiniMap(), setZoom(), switchZone(), travelDir()

### Community 13 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "drawAnimal"
Cohesion: 0.40
Nodes (5): drawAnimal(), drawWing(), mutatedSprite(), shade(), shadeCol()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `rel`, `buildZoneTerrain`, `realmTravelTick`, `ecologyTick`, `pick`, `drawCanvas`, `propsOf`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.017094017094017096 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `addLog`, `rel`, `realmTravelTick`, `ecologyTick`, `pick`, `propsOf`, `drawPuppet`, `switchZone`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07727272727272727 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `rel`, `buildZoneTerrain`, `realmTravelTick`, `ecologyTick`, `pick`, `propsOf`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.1081277213352685 - nodes in this community are weakly interconnected._
- **Should `rel` be split into smaller, more focused modules?**
  _Cohesion score 0.13538461538461538 - nodes in this community are weakly interconnected._