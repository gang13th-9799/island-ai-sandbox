# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 539 nodes · 1657 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `97a14ec6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- drawCanvas
- runAutonomousStep
- addLog
- pick
- stationInZone
- renderAllUI
- keyByName
- rel
- objsOf
- drawPuppet
- steleCanvas
- makeSoul
- pupKeys
- setZoom
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 105 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 44 edges
4. `drawCanvas()` - 41 edges
5. `st()` - 34 edges
6. `villageOf()` - 27 edges
7. `experiment()` - 27 edges
8. `runQuests()` - 27 edges
9. `pick()` - 27 edges
10. `gainExp()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `buildZoneTerrain()` --calls--> `buildIsland()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `setZoom()` --calls--> `clampView()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 14_
- `drawAgentTag()` --calls--> `maxHp()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (148): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+140 more)

### Community 1 - "drawCanvas"
Cohesion: 0.05
Nodes (55): animalArt(), buildIsland(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+47 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (52): accessibleStations(), addFood(), assignGodQuests(), atGoal(), atStore(), avail(), bagCap(), bagCount() (+44 more)

### Community 3 - "addLog"
Cohesion: 0.11
Nodes (52): addLog(), addOwnLog(), addRel(), addTeachLog(), applyAISolution(), applyWish(), askToUse(), buildHut() (+44 more)

### Community 4 - "pick"
Cohesion: 0.10
Nodes (37): addAIAgent(), addAnimals(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone(), damageHome() (+29 more)

### Community 5 - "stationInZone"
Cohesion: 0.09
Nodes (37): airTemp(), animalLog(), animalPower(), baseTemp(), carryTraits(), clothWarmth(), ecologyTick(), evolveOne() (+29 more)

### Community 6 - "renderAllUI"
Cohesion: 0.10
Nodes (34): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), expNeed(), fateChance(), gateOf() (+26 more)

### Community 7 - "keyByName"
Cohesion: 0.12
Nodes (33): buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), consume(), depthOf(), effBonus() (+25 more)

### Community 8 - "rel"
Cohesion: 0.14
Nodes (26): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+18 more)

### Community 9 - "objsOf"
Cohesion: 0.12
Nodes (22): applyLayout(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mkObj(), mmZoneImage(), mutVariant() (+14 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (15): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+7 more)

### Community 11 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 12 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `pick`, `stationInZone`, `renderAllUI`, `keyByName`, `rel`, `objsOf`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012578616352201259 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `pick`, `stationInZone`, `renderAllUI`, `keyByName`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.05454545454545454 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `drawCanvas`, `runAutonomousStep`, `addLog`, `pick`, `stationInZone`, `keyByName`, `rel`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09728506787330317 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.10784313725490197 - nodes in this community are weakly interconnected._