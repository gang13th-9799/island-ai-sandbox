# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 638 nodes · 2094 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8bdc091d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- renderAllUI
- productDef
- pick
- drawCanvas
- rel
- renderAgentCard
- runAutonomousStep
- realmTravelTick
- drawPuppet
- prayerTick
- steleCanvas
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 33 edges
7. `villageOf()` - 32 edges
8. `agentWork()` - 31 edges
9. `pick()` - 31 edges
10. `agentMove()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 8_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 8_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (20 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (166): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+158 more)

### Community 1 - "addLog"
Cohesion: 0.08
Nodes (74): addFood(), addLog(), agentGather(), agentHunt(), agentMove(), agentStep(), applyWish(), assignGodQuests() (+66 more)

### Community 2 - "renderAllUI"
Cohesion: 0.07
Nodes (72): accessibleStations(), addTeachLog(), agentLevel(), agentWork(), atGoal(), atStore(), auraR(), avail() (+64 more)

### Community 3 - "productDef"
Cohesion: 0.07
Nodes (51): approachOf(), apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), canUse(), carriedEff() (+43 more)

### Community 4 - "pick"
Cohesion: 0.07
Nodes (50): addAIAgent(), addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), damageHome(), damageStation() (+42 more)

### Community 5 - "drawCanvas"
Cohesion: 0.07
Nodes (46): animalArt(), centerOnZone(), clampView(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+38 more)

### Community 6 - "rel"
Cohesion: 0.09
Nodes (41): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), coldMove() (+33 more)

### Community 7 - "renderAgentCard"
Cohesion: 0.09
Nodes (31): applyLayout(), buildIsland(), closeAgentCard(), closeAgentPop(), DIFF_STARS(), drawMiniMap(), getZoneAt(), isleNoise() (+23 more)

### Community 8 - "runAutonomousStep"
Cohesion: 0.13
Nodes (29): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), bestStat(), bodyRealtime(), bodyStamina(), bodyTemp() (+21 more)

### Community 9 - "realmTravelTick"
Cohesion: 0.15
Nodes (26): advanceGame(), answerPrayer(), captureRealm(), clampC(), closeLobby(), crossRealm(), gateOf(), godTick() (+18 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (13): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+5 more)

### Community 11 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 12 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `renderAllUI`, `productDef`, `pick`, `rel`, `realmTravelTick`, `prayerTick`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011235955056179775 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderAllUI`, `productDef`, `pick`, `rel`, `runAutonomousStep`, `realmTravelTick`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.07997038134024435 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `productDef`, `pick`, `drawCanvas`, `rel`, `renderAgentCard`, `runAutonomousStep`, `realmTravelTick`, `drawPuppet`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.07394366197183098 - nodes in this community are weakly interconnected._