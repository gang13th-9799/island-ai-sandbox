# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 477 nodes · 1464 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `56e26e9f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- addLog
- villageOf
- experiment
- buildZoneTerrain
- rel
- realmTravelTick
- drawPuppet
- zoneWeather
- steleCanvas
- prayerTick
- makeSoul
- drawHairLayer
- pupKeys
- setZoom
- closeSheet
- FOOD_ITEM
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 47 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 35 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `gainExp()` - 25 edges
8. `villageOf()` - 25 edges
9. `experiment()` - 25 edges
10. `pick()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAnimals()` --calls--> `pick()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `realmTravelTick()` --calls--> `animalLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_

## Import Cycles
- None detected.

## Communities (20 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (128): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+120 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (54): accessibleStations(), addAnimals(), animalLog(), animalPower(), applyAISolution(), assignGodQuests(), atGoal(), bagValue() (+46 more)

### Community 2 - "drawCanvas"
Cohesion: 0.07
Nodes (42): animalArt(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas() (+34 more)

### Community 3 - "addLog"
Cohesion: 0.12
Nodes (39): addLog(), addTeachLog(), applyWish(), buildHut(), completeQuest(), damageStation(), damageStele(), designInvention() (+31 more)

### Community 4 - "villageOf"
Cohesion: 0.12
Nodes (36): addFood(), atStore(), bagCap(), bagCount(), canUse(), depositTick(), destroyObj(), gainItems() (+28 more)

### Community 5 - "experiment"
Cohesion: 0.13
Nodes (33): avail(), buildEquivalents(), consume(), craftKnown(), depthOf(), experiment(), findNewRecipes(), getTool() (+25 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (30): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), ensureAgent(), findValidTile(), freshStats() (+22 more)

### Community 7 - "rel"
Cohesion: 0.12
Nodes (30): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+22 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.16
Nodes (22): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+14 more)

### Community 9 - "drawPuppet"
Cohesion: 0.19
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+6 more)

### Community 10 - "zoneWeather"
Cohesion: 0.36
Nodes (9): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), pupOutfit(), weatherLabel(), weatherTick() (+1 more)

### Community 11 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 12 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `villageOf`, `experiment`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `drawPuppet`, `zoneWeather`, `prayerTick`, `steleTarget`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.014492753623188406 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `villageOf`, `experiment`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `zoneWeather`, `prayerTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07547169811320754 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `villageOf`, `experiment`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `drawPuppet`, `prayerTick`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.07084785133565621 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.11605937921727395 - nodes in this community are weakly interconnected._