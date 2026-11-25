# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 556 nodes · 1755 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9d6daff1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- runAutonomousStep
- drawCanvas
- buildZoneTerrain
- rel
- keyByName
- realmTravelTick
- renderAllUI
- drawPuppet
- sigOf
- zoneWeather
- steleCanvas
- prayerTick
- drawHairLayer
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 61 edges
2. `addLog()` - 50 edges
3. `renderAllUI()` - 44 edges
4. `drawCanvas()` - 42 edges
5. `st()` - 39 edges
6. `villageOf()` - 31 edges
7. `gainExp()` - 29 edges
8. `pick()` - 29 edges
9. `agentWork()` - 28 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 8_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `agentMove()` --calls--> `buildZoneTerrain()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `agentsRealtime()` --calls--> `agentStep()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 11_

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (148): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+140 more)

### Community 1 - "villageOf"
Cohesion: 0.07
Nodes (75): accessibleStations(), addTeachLog(), agentLevel(), agentMove(), agentStep(), agentWork(), atGoal(), atStore() (+67 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (61): addAnimals(), addFood(), addLog(), addOwnLog(), addRel(), agentGather(), agentHunt(), applyAISolution() (+53 more)

### Community 3 - "drawCanvas"
Cohesion: 0.06
Nodes (46): animalArt(), centerOnZone(), clampView(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+38 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (39): addAIAgent(), applyLayout(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), closeAgentCard() (+31 more)

### Community 5 - "rel"
Cohesion: 0.13
Nodes (28): applyWish(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score() (+20 more)

### Community 6 - "keyByName"
Cohesion: 0.13
Nodes (27): buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), consume(), depthOf(), effBonus() (+19 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.15
Nodes (23): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm() (+15 more)

### Community 8 - "renderAllUI"
Cohesion: 0.12
Nodes (23): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), expNeed(), extraLoot() (+15 more)

### Community 9 - "drawPuppet"
Cohesion: 0.13
Nodes (19): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+11 more)

### Community 10 - "sigOf"
Cohesion: 0.19
Nodes (15): designInvention(), effText(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mutVariant(), natureLaw() (+7 more)

### Community 11 - "zoneWeather"
Cohesion: 0.23
Nodes (14): agentsRealtime(), airTemp(), baseTemp(), bodyRealtime(), bodyTemp(), clothWarmth(), feltTemp(), fixWeather() (+6 more)

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 14 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `buildZoneTerrain`, `rel`, `keyByName`, `realmTravelTick`, `renderAllUI`, `drawPuppet`, `zoneWeather`, `prayerTick`, `objWorldTick`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012578616352201259 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `buildZoneTerrain`, `rel`, `realmTravelTick`, `renderAllUI`, `sigOf`, `zoneWeather`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.07207207207207207 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `buildZoneTerrain`, `rel`, `keyByName`, `renderAllUI`, `zoneWeather`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09672131147540984 - nodes in this community are weakly interconnected._