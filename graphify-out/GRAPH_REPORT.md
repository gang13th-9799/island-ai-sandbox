# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 485 nodes · 1500 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `de4c87d6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- buildZoneTerrain
- keyByName
- realmTravelTick
- rel
- renderAllUI
- propsOf
- ecologyTick
- drawPuppet
- steleCanvas
- objWorldTick
- pupKeys
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
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 0 → community 1_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 9_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 9_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (136): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, atGoal(), BACK_ITEMS (+128 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.10
Nodes (68): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), avail(), buildHut() (+60 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (47): animalArt(), centerOnZone(), changeZoom(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+39 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (34): airTemp(), applyWish(), baseTemp(), buildHome(), buildStation(), buildZoneTerrain(), clampC(), crowdTick() (+26 more)

### Community 4 - "keyByName"
Cohesion: 0.13
Nodes (31): addOwnLog(), askToUse(), canUse(), consume(), depthOf(), getEquip(), getTool(), giveDivineTool() (+23 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.12
Nodes (29): addAIAgent(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), ensureAgent(), freshStats() (+21 more)

### Community 6 - "rel"
Cohesion: 0.13
Nodes (29): assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp(), createQuest(), electChief(), score() (+21 more)

### Community 7 - "renderAllUI"
Cohesion: 0.14
Nodes (27): agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept(), depositTick() (+19 more)

### Community 8 - "propsOf"
Cohesion: 0.11
Nodes (23): buildEquivalents(), designInvention(), fateChance(), findNewRecipes(), FOOD_ITEM(), godAutoLevel(), hashStr(), hrand() (+15 more)

### Community 9 - "ecologyTick"
Cohesion: 0.16
Nodes (20): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+12 more)

### Community 10 - "drawPuppet"
Cohesion: 0.14
Nodes (15): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+7 more)

### Community 11 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 12 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `buildZoneTerrain`, `keyByName`, `realmTravelTick`, `rel`, `renderAllUI`, `propsOf`, `ecologyTick`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0136986301369863 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `buildZoneTerrain`, `keyByName`, `realmTravelTick`, `rel`, `renderAllUI`, `propsOf`, `ecologyTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.10403863037752414 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `drawCanvas`, `buildZoneTerrain`, `keyByName`, `realmTravelTick`, `rel`, `propsOf`, `ecologyTick`, `drawPuppet`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06290471785383904 - nodes in this community are weakly interconnected._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.10695187165775401 - nodes in this community are weakly interconnected._