# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 508 nodes · 1546 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `170fa727`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- keyByName
- buildZoneTerrain
- drawCanvas
- renderAllUI
- realmTravelTick
- rel
- ecologyTick
- renderAgentCard
- drawPuppet
- needsOf
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
4. `drawCanvas()` - 39 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `runAutonomousStep()` --calls--> `atGoal()`  [EXTRACTED]
  game.js → game.js  _Bridges community 0 → community 1_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (142): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, atGoal(), BACK_ITEMS (+134 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (74): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), avail(), bestStat() (+66 more)

### Community 2 - "keyByName"
Cohesion: 0.09
Nodes (41): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), findNewRecipes() (+33 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (39): addAIAgent(), addAnimals(), applyLayout(), applyWish(), buildStation(), buildZoneTerrain(), clampC(), ensureAgent() (+31 more)

### Community 4 - "drawCanvas"
Cohesion: 0.08
Nodes (39): animalArt(), centerOnZone(), clampView(), damageStation(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas() (+31 more)

### Community 5 - "renderAllUI"
Cohesion: 0.12
Nodes (30): agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), bestHomeTier(), canTradeFor(), chooseKept() (+22 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.11
Nodes (29): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+21 more)

### Community 7 - "rel"
Cohesion: 0.14
Nodes (25): assignJobs(), assignQuests(), byId(), canHelp(), crowdTick(), electChief(), score(), holdFoundingMeeting() (+17 more)

### Community 8 - "ecologyTick"
Cohesion: 0.15
Nodes (20): animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+12 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.13
Nodes (19): buildIsland(), closeAgentCard(), DIFF_STARS(), drawMiniMap(), getAgeStage(), getZoneAt(), isleNoise(), mapTap() (+11 more)

### Community 10 - "drawPuppet"
Cohesion: 0.17
Nodes (12): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+4 more)

### Community 11 - "needsOf"
Cohesion: 0.36
Nodes (10): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), needsOf(), pupOutfit(), weatherLabel() (+2 more)

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `keyByName`, `buildZoneTerrain`, `drawCanvas`, `renderAllUI`, `realmTravelTick`, `rel`, `ecologyTick`, `needsOf`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013157894736842105 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `keyByName`, `buildZoneTerrain`, `drawCanvas`, `renderAllUI`, `realmTravelTick`, `rel`, `ecologyTick`, `needsOf`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09107737874861163 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `keyByName`, `buildZoneTerrain`, `realmTravelTick`, `rel`, `ecologyTick`, `renderAgentCard`, `drawPuppet`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `keyByName` be split into smaller, more focused modules?**
  _Cohesion score 0.08780487804878048 - nodes in this community are weakly interconnected._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.09041835357624832 - nodes in this community are weakly interconnected._