# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 508 nodes · 1548 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `81b02bc6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- buildZoneTerrain
- drawCanvas
- keyByName
- renderAllUI
- realmTravelTick
- rel
- findValidTile
- ecologyTick
- drawPuppet
- newAgent
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
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 2_
- `runAutonomousStep()` --calls--> `atGoal()`  [EXTRACTED]
  game.js → game.js  _Bridges community 0 → community 1_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 11_

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (142): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, atGoal(), BACK_ITEMS (+134 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (74): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), avail(), bestStat() (+66 more)

### Community 2 - "buildZoneTerrain"
Cohesion: 0.07
Nodes (44): addAnimals(), applyLayout(), applyWish(), buildIsland(), buildZoneTerrain(), closeAgentCard(), DIFF_STARS(), drawMiniMap() (+36 more)

### Community 3 - "drawCanvas"
Cohesion: 0.08
Nodes (39): animalArt(), centerOnZone(), clampView(), damageStation(), drawAgent(), drawAgentTag(), drawAnimal(), drawCanvas() (+31 more)

### Community 4 - "keyByName"
Cohesion: 0.12
Nodes (32): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), getEquip() (+24 more)

### Community 5 - "renderAllUI"
Cohesion: 0.12
Nodes (30): agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), bestHomeTier(), canTradeFor(), chooseKept() (+22 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.11
Nodes (30): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+22 more)

### Community 7 - "rel"
Cohesion: 0.14
Nodes (25): assignJobs(), assignQuests(), byId(), canHelp(), crowdTick(), electChief(), score(), holdFoundingMeeting() (+17 more)

### Community 8 - "findValidTile"
Cohesion: 0.15
Nodes (24): airTemp(), baseTemp(), buildStation(), clampC(), clothWarmth(), feltTemp(), findValidTile(), fixWeather() (+16 more)

### Community 9 - "ecologyTick"
Cohesion: 0.15
Nodes (20): animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+12 more)

### Community 10 - "drawPuppet"
Cohesion: 0.17
Nodes (12): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+4 more)

### Community 11 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

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

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `buildZoneTerrain`, `drawCanvas`, `keyByName`, `renderAllUI`, `realmTravelTick`, `rel`, `findValidTile`, `ecologyTick`, `newAgent`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013157894736842105 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `buildZoneTerrain`, `drawCanvas`, `keyByName`, `renderAllUI`, `realmTravelTick`, `rel`, `findValidTile`, `ecologyTick`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09107737874861163 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `keyByName`, `realmTravelTick`, `rel`, `ecologyTick`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.06976744186046512 - nodes in this community are weakly interconnected._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._