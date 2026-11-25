# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 427 nodes · 1306 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `de203614`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- drawCanvas
- runAutonomousStep
- addLog
- experiment
- st
- rel
- ecologyTick
- objsOf
- drawPuppet
- zoneWeather
- makeSoul
- pupKeys
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `addLog()` - 42 edges
3. `renderAllUI()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `villageOf()` - 22 edges
9. `gainExp()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 7_
- `buildStation()` --calls--> `addOwnLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `produce()` --calls--> `buildStation()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (114): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+106 more)

### Community 1 - "drawCanvas"
Cohesion: 0.06
Nodes (55): animalArt(), buildStation(), buildZoneTerrain(), centerOnZone(), changeZoom(), clampC(), clampView(), closeAgentCard() (+47 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.10
Nodes (51): accessibleStations(), addFood(), addOwnLog(), addRel(), askToUse(), atGoal(), atStore(), avail() (+43 more)

### Community 3 - "addLog"
Cohesion: 0.08
Nodes (46): addAIAgent(), addLog(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), damageStation() (+38 more)

### Community 4 - "experiment"
Cohesion: 0.13
Nodes (34): applyWish(), buildEquivalents(), consume(), craftKnown(), depthOf(), designInvention(), experiment(), findNewRecipes() (+26 more)

### Community 5 - "st"
Cohesion: 0.14
Nodes (27): addTeachLog(), assignGodQuests(), ensureAgent(), expNeed(), failCap(), freshStats(), gainExp(), hitDamage() (+19 more)

### Community 6 - "rel"
Cohesion: 0.14
Nodes (26): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), crowdTick(), electChief(), score() (+18 more)

### Community 7 - "ecologyTick"
Cohesion: 0.13
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+17 more)

### Community 8 - "objsOf"
Cohesion: 0.20
Nodes (12): harvestTool(), hashStr(), insectsOf(), mkObj(), mutVariant(), objAct(), objsOf(), objTarget() (+4 more)

### Community 9 - "drawPuppet"
Cohesion: 0.22
Nodes (10): armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupActivity() (+2 more)

### Community 10 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 11 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `experiment`, `st`, `rel`, `ecologyTick`, `objsOf`, `zoneWeather`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.016260162601626018 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `addLog` to `game.js`, `drawCanvas`, `runAutonomousStep`, `experiment`, `st`, `rel`, `ecologyTick`, `drawPuppet`, `makeSoul`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.05723905723905724 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `experiment`, `st`, `rel`, `ecologyTick`, `zoneWeather`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.1003921568627451 - nodes in this community are weakly interconnected._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08115942028985507 - nodes in this community are weakly interconnected._