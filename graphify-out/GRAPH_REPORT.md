# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 497 nodes · 1526 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2adfda3b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- renderAllUI
- runAutonomousStep
- drawCanvas
- pick
- canUse
- addLog
- ecologyTick
- realmTravelTick
- renderAgentCard
- needsOf
- drawPuppet
- steleCanvas
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- steleTarget

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
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `applyWish()` --calls--> `buildZoneTerrain()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `applyWish()` --calls--> `getAdjacentZones()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (135): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+127 more)

### Community 1 - "renderAllUI"
Cohesion: 0.08
Nodes (65): accessibleStations(), addTeachLog(), agentLevel(), applyWish(), avail(), bagCap(), buildEquivalents(), computeNeeds() (+57 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.09
Nodes (49): assignJobs(), atGoal(), atStore(), bagCount(), bagValue(), bestHomeTier(), bestStat(), buildHut() (+41 more)

### Community 3 - "drawCanvas"
Cohesion: 0.07
Nodes (43): animalArt(), centerOnZone(), clampView(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+35 more)

### Community 4 - "pick"
Cohesion: 0.09
Nodes (39): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), ensureAgent(), findNewRecipes(), findValidTile(), freshStats() (+31 more)

### Community 5 - "canUse"
Cohesion: 0.14
Nodes (28): addFood(), addOwnLog(), addRel(), askToUse(), buildHome(), canUse(), completeQuest(), destroyObj() (+20 more)

### Community 6 - "addLog"
Cohesion: 0.11
Nodes (27): addLog(), assignGodQuests(), assignQuests(), canHelp(), createQuest(), damageHome(), damageStation(), damageStele() (+19 more)

### Community 7 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+16 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.17
Nodes (21): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+13 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.15
Nodes (17): buildIsland(), closeAgentCard(), DIFF_STARS(), drawMiniMap(), getZoneAt(), isleNoise(), mapTap(), miniMapTap() (+9 more)

### Community 10 - "needsOf"
Cohesion: 0.27
Nodes (12): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), needsOf(), personalFood() (+4 more)

### Community 11 - "drawPuppet"
Cohesion: 0.20
Nodes (10): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), hairStyleOf() (+2 more)

### Community 12 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `drawCanvas`, `pick`, `canUse`, `addLog`, `ecologyTick`, `realmTravelTick`, `needsOf`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013793103448275862 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderAllUI`, `runAutonomousStep`, `drawCanvas`, `pick`, `canUse`, `ecologyTick`, `realmTravelTick`, `needsOf`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.08173076923076923 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `drawCanvas`, `pick`, `canUse`, `addLog`, `ecologyTick`, `realmTravelTick`, `renderAgentCard`, `drawPuppet`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08928571428571429 - nodes in this community are weakly interconnected._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06976744186046512 - nodes in this community are weakly interconnected._