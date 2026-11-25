# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 434 nodes · 1318 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8b65ac67`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- buildZoneTerrain
- drawCanvas
- propsOf
- realmTravelTick
- rel
- ecologyTick
- stationsOf
- drawPuppet
- renderAgentCard
- drawAnimal
- drawAgentTag
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `addLog()` - 42 edges
3. `renderAllUI()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `gainExp()` - 22 edges
9. `villageOf()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 8_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 8_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `assignJobs()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (117): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+109 more)

### Community 1 - "addLog"
Cohesion: 0.10
Nodes (62): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), applyWish(), askToUse(), assignGodQuests() (+54 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.09
Nodes (48): addAIAgent(), agentLevel(), atGoal(), atStore(), bagCap(), bagCount(), bagValue(), bestStat() (+40 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.13
Nodes (29): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+21 more)

### Community 4 - "drawCanvas"
Cohesion: 0.12
Nodes (24): animalArt(), centerOnZone(), changeZoom(), clampView(), damageStation(), drawCanvas(), drawInsect(), drawProp() (+16 more)

### Community 5 - "propsOf"
Cohesion: 0.11
Nodes (24): buildEquivalents(), designInvention(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), insectsOf() (+16 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.16
Nodes (22): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+14 more)

### Community 7 - "rel"
Cohesion: 0.16
Nodes (22): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+14 more)

### Community 8 - "ecologyTick"
Cohesion: 0.16
Nodes (20): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+12 more)

### Community 9 - "stationsOf"
Cohesion: 0.20
Nodes (15): accessibleStations(), avail(), computeNeeds(), getAdjacentZones(), giftNeeds(), hasMaterials(), hasTool(), nearestStation() (+7 more)

### Community 10 - "drawPuppet"
Cohesion: 0.16
Nodes (14): armLen(), drawAgent(), drawBow(), drawHairLayer(), drawItem(), drawPuppet(), drawStickFigure(), getEquip() (+6 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `buildZoneTerrain`, `drawCanvas`, `propsOf`, `realmTravelTick`, `rel`, `ecologyTick`, `stationsOf`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.015748031496062992 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `addLog`, `buildZoneTerrain`, `propsOf`, `realmTravelTick`, `rel`, `ecologyTick`, `stationsOf`, `drawPuppet`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09518773135906927 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `drawCanvas`, `propsOf`, `realmTravelTick`, `rel`, `ecologyTick`, `stationsOf`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09485815602836879 - nodes in this community are weakly interconnected._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.12807881773399016 - nodes in this community are weakly interconnected._