# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 518 nodes · 1585 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8ed87db`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- drawCanvas
- pick
- experiment
- renderAllUI
- rel
- runAutonomousStep
- buildZoneTerrain
- negotiate
- steleCanvas
- drawHairLayer
- pupKeys
- setZoom
- closeSheet
- itemArtKey

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 98 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 39 edges
5. `st()` - 33 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `pick()` - 25 edges
10. `experiment()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `produce()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `runAutonomousStep()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `assignJobs()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (142): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+134 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (58): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentLevel(), askToUse(), bagCap() (+50 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (54): animalArt(), buildIsland(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal() (+46 more)

### Community 3 - "pick"
Cohesion: 0.07
Nodes (48): addAIAgent(), addAnimals(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), damageHome() (+40 more)

### Community 4 - "experiment"
Cohesion: 0.09
Nodes (46): applyWish(), buildEquivalents(), canUse(), carriedEff(), consume(), craftKnown(), depthOf(), designInvention() (+38 more)

### Community 5 - "renderAllUI"
Cohesion: 0.08
Nodes (41): animalLog(), animalPower(), applyAISolution(), armLen(), carryTraits(), drawAgent(), drawBow(), drawEyeArt() (+33 more)

### Community 6 - "rel"
Cohesion: 0.10
Nodes (37): airTemp(), assignJobs(), baseTemp(), bestHomeTier(), byId(), clothWarmth(), electChief(), score() (+29 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.15
Nodes (27): accessibleStations(), assignGodQuests(), atGoal(), atStore(), avail(), bagValue(), bestStat(), canTradeFor() (+19 more)

### Community 8 - "buildZoneTerrain"
Cohesion: 0.12
Nodes (26): applyLayout(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), findValidTile(), hashStr(), homeCounts() (+18 more)

### Community 9 - "negotiate"
Cohesion: 0.29
Nodes (10): assignQuests(), canHelp(), landNear(), negotiate(), rewardPackage(), rewardText(), rewardValue(), talkEvent() (+2 more)

### Community 10 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 11 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `drawCanvas`, `pick`, `experiment`, `renderAllUI`, `rel`, `buildZoneTerrain`, `negotiate`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013071895424836602 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `pick`, `experiment`, `renderAllUI`, `rel`, `runAutonomousStep`, `buildZoneTerrain`, `negotiate`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.0925589836660617 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `drawCanvas`, `pick`, `experiment`, `rel`, `runAutonomousStep`, `negotiate`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.055904961565338925 - nodes in this community are weakly interconnected._
- **Should `pick` be split into smaller, more focused modules?**
  _Cohesion score 0.0726950354609929 - nodes in this community are weakly interconnected._