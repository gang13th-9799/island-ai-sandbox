# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 510 nodes · 1555 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `96cbafab`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- keyByName
- villageOf
- renderAllUI
- stationInZone
- buildZoneTerrain
- pick
- needStep
- steleCanvas
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- setZoom
- closeSheet

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
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `buildHome()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `crossRealm()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (141): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+133 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (69): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), applyWish(), askToUse(), assignGodQuests() (+61 more)

### Community 2 - "drawCanvas"
Cohesion: 0.07
Nodes (45): animalArt(), centerOnZone(), clampView(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+37 more)

### Community 3 - "keyByName"
Cohesion: 0.08
Nodes (45): armLen(), buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), drawAgent(), drawBow() (+37 more)

### Community 4 - "villageOf"
Cohesion: 0.11
Nodes (36): assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp(), createQuest(), electChief(), score() (+28 more)

### Community 5 - "renderAllUI"
Cohesion: 0.10
Nodes (34): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), expNeed(), fateChance(), gateOf() (+26 more)

### Community 6 - "stationInZone"
Cohesion: 0.10
Nodes (33): airTemp(), animalLog(), animalPower(), applyAISolution(), baseTemp(), carryTraits(), clothWarmth(), ecologyTick() (+25 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (31): applyLayout(), buildHome(), buildIsland(), buildStation(), buildZoneTerrain(), clampC(), closeAgentCard(), crowdTick() (+23 more)

### Community 8 - "pick"
Cohesion: 0.12
Nodes (25): addAIAgent(), addAnimals(), damageHome(), damageStation(), damageStele(), ensureAgent(), freshStats(), generateCrisisProposal() (+17 more)

### Community 9 - "needStep"
Cohesion: 0.20
Nodes (18): accessibleStations(), atStore(), avail(), bagValue(), canTradeFor(), computeNeeds(), hasMaterials(), itemValue() (+10 more)

### Community 10 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 11 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 12 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 13 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `keyByName`, `villageOf`, `renderAllUI`, `stationInZone`, `buildZoneTerrain`, `pick`, `needStep`, `objWorldTick`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013245033112582781 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `renderAllUI`, `stationInZone`, `buildZoneTerrain`, `pick`, `needStep`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09420289855072464 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `drawCanvas`, `keyByName`, `villageOf`, `stationInZone`, `buildZoneTerrain`, `pick`, `needStep`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06565656565656566 - nodes in this community are weakly interconnected._
- **Should `keyByName` be split into smaller, more focused modules?**
  _Cohesion score 0.07777777777777778 - nodes in this community are weakly interconnected._