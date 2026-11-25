# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 415 nodes · 1259 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b6dea9a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- runQuests
- drawCanvas
- renderAllUI
- villageOf
- drawPuppet
- react
- drawAnimal
- objsOf
- renderPrayers
- pupKeys
- setZoom
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `st()` - 30 edges
5. `drawCanvas()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `rel()` - 22 edges
9. `villageOf()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `depositTick()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `experiment()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (109): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, animalLogs, BACK_ITEMS, BASE_ZONES, BODY_COL (+101 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (56): addLog(), addOwnLog(), addRel(), addTeachLog(), askToUse(), assignGodQuests(), assignJobs(), assignQuests() (+48 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (54): addAIAgent(), addAnimals(), animalPower(), applyAISolution(), applyWish(), atGoal(), bestStat(), buildStation() (+46 more)

### Community 3 - "runQuests"
Cohesion: 0.12
Nodes (41): accessibleStations(), avail(), canUse(), computeNeeds(), consume(), craftKnown(), depthOf(), experiment() (+33 more)

### Community 4 - "drawCanvas"
Cohesion: 0.07
Nodes (38): animalArt(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawCanvas(), drawLabel() (+30 more)

### Community 5 - "renderAllUI"
Cohesion: 0.09
Nodes (37): animalLog(), answerPrayer(), buildEquivalents(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), evolveOne() (+29 more)

### Community 6 - "villageOf"
Cohesion: 0.16
Nodes (22): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+14 more)

### Community 7 - "drawPuppet"
Cohesion: 0.16
Nodes (18): airTemp(), armLen(), baseTemp(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure() (+10 more)

### Community 8 - "react"
Cohesion: 0.36
Nodes (8): findNewRecipes(), giveSoul(), hashStr(), hrand(), natureLaw(), react(), sigOf(), world()

### Community 9 - "drawAnimal"
Cohesion: 0.40
Nodes (6): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), tinted()

### Community 10 - "objsOf"
Cohesion: 0.33
Nodes (6): mkObj(), objsOf(), objWorldTick(), wobjBase(), wobjPick(), wobjRng()

### Community 11 - "renderPrayers"
Cohesion: 0.50
Nodes (4): fateChance(), godAutoLevel(), renderPrayers(), setGodAuto()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `runQuests`, `drawCanvas`, `renderAllUI`, `villageOf`, `drawPuppet`, `react`, `objsOf`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01694915254237288 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `runAutonomousStep`, `runQuests`, `drawCanvas`, `villageOf`, `drawPuppet`, `renderPrayers`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08896103896103896 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `runQuests`, `renderAllUI`, `villageOf`, `drawPuppet`, `react`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07826694619147449 - nodes in this community are weakly interconnected._
- **Should `runQuests` be split into smaller, more focused modules?**
  _Cohesion score 0.11585365853658537 - nodes in this community are weakly interconnected._