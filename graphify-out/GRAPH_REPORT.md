# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 443 nodes · 1340 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3e217a21`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- experiment
- addLog
- renderAllUI
- buildZoneTerrain
- ecologyTick
- drawCanvas
- drawPuppet
- renderAgentCard
- objsOf
- zoneWeather
- drawAnimal
- makeSoul
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `renderAllUI()` - 43 edges
3. `addLog()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `gainExp()` - 22 edges
9. `villageOf()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 6_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `renderAllUI()` --calls--> `bagCap()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `computeNeeds()` --calls--> `hasTool()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (120): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+112 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (67): accessibleStations(), addFood(), addTeachLog(), atGoal(), atStore(), bagCap(), bagCount(), bagValue() (+59 more)

### Community 2 - "experiment"
Cohesion: 0.10
Nodes (42): applyWish(), avail(), buildEquivalents(), canUse(), consume(), craftKnown(), depthOf(), designInvention() (+34 more)

### Community 3 - "addLog"
Cohesion: 0.10
Nodes (40): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), byId() (+32 more)

### Community 4 - "renderAllUI"
Cohesion: 0.11
Nodes (28): answerPrayer(), captureRealm(), closeLobby(), cycleSpeed(), expNeed(), fateChance(), godAutoLevel(), inRealm() (+20 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.14
Nodes (24): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), ensureAgent(), findValidTile(), freshStats() (+16 more)

### Community 6 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+16 more)

### Community 7 - "drawCanvas"
Cohesion: 0.12
Nodes (24): animalArt(), centerOnZone(), changeZoom(), clampView(), damageStation(), drawCanvas(), drawInsect(), drawProp() (+16 more)

### Community 8 - "drawPuppet"
Cohesion: 0.19
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+6 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.16
Nodes (14): closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawLabel(), getAgeStage(), mapTap(), openAgentCard(), renderAgentCard() (+6 more)

### Community 10 - "objsOf"
Cohesion: 0.18
Nodes (12): drawHairLayer(), hairStyleOf(), hashStr(), insectsOf(), mkObj(), mutVariant(), objsOf(), objWorldTick() (+4 more)

### Community 11 - "zoneWeather"
Cohesion: 0.43
Nodes (8): airTemp(), baseTemp(), feltTemp(), fixWeather(), pupOutfit(), weatherLabel(), weatherTick(), zoneWeather()

### Community 12 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 13 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `experiment`, `addLog`, `renderAllUI`, `buildZoneTerrain`, `ecologyTick`, `drawCanvas`, `drawPuppet`, `objsOf`, `zoneWeather`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.015384615384615385 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `experiment`, `addLog`, `buildZoneTerrain`, `ecologyTick`, `drawPuppet`, `renderAgentCard`, `makeSoul`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09000452284034374 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `experiment`, `renderAllUI`, `buildZoneTerrain`, `ecologyTick`, `drawCanvas`, `zoneWeather`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `experiment` be split into smaller, more focused modules?**
  _Cohesion score 0.10336817653890824 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.10128205128205128 - nodes in this community are weakly interconnected._