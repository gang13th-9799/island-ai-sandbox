# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 527 nodes · 1618 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8d3b005`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- addLog
- canUse
- keyByName
- pick
- makeRealmState
- stationInZone
- realmTravelTick
- steleCanvas
- prayerTick
- drawHairLayer
- pupKeys
- setZoom
- closeSheet
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 101 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 39 edges
5. `st()` - 34 edges
6. `experiment()` - 27 edges
7. `runQuests()` - 27 edges
8. `villageOf()` - 27 edges
9. `gainExp()` - 26 edges
10. `pick()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 6 → community 7_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 7 → community 8_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `transferKnowledge()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (17 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (144): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+136 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (83): accessibleStations(), addFood(), addTeachLog(), agentLevel(), atGoal(), atStore(), avail(), bagCap() (+75 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (53): animalArt(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas() (+45 more)

### Community 3 - "addLog"
Cohesion: 0.09
Nodes (46): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), buildStation() (+38 more)

### Community 4 - "canUse"
Cohesion: 0.07
Nodes (41): applyLayout(), armLen(), canUse(), designInvention(), drawAgent(), drawBow(), drawEyeArt(), drawItem() (+33 more)

### Community 5 - "keyByName"
Cohesion: 0.13
Nodes (29): buildEquivalents(), carriedEff(), consume(), depthOf(), effBonus(), effBonusSlow(), findNewRecipes(), getTool() (+21 more)

### Community 6 - "pick"
Cohesion: 0.11
Nodes (28): addAIAgent(), buildIsland(), buildZoneTerrain(), clampC(), crossZone(), ensureAgent(), findValidTile(), freshStats() (+20 more)

### Community 7 - "makeRealmState"
Cohesion: 0.12
Nodes (28): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+20 more)

### Community 8 - "stationInZone"
Cohesion: 0.17
Nodes (20): airTemp(), baseTemp(), bestHomeTier(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), hasShelter() (+12 more)

### Community 9 - "realmTravelTick"
Cohesion: 0.18
Nodes (20): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+12 more)

### Community 10 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 11 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 12 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `canUse`, `keyByName`, `pick`, `makeRealmState`, `stationInZone`, `realmTravelTick`, `prayerTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012903225806451613 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `canUse`, `keyByName`, `pick`, `makeRealmState`, `stationInZone`, `realmTravelTick`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07846018219218337 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `canUse`, `keyByName`, `pick`, `stationInZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.057329462989840346 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08502415458937199 - nodes in this community are weakly interconnected._