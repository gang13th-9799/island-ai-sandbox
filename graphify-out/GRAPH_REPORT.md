# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 428 nodes · 1308 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbe38b9c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- drawCanvas
- addLog
- st
- runAutonomousStep
- experiment
- runQuests
- ecologyTick
- rel
- renderAgentCard
- drawPuppet
- zoneWeather
- drawAgentTag
- pupKeys
- setZoom
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `addLog()` - 42 edges
3. `renderAllUI()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `gainExp()` - 22 edges
9. `villageOf()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `buildStation()` --calls--> `addOwnLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `produce()` --calls--> `buildStation()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `buildZoneTerrain()` --calls--> `findValidTile()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (114): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+106 more)

### Community 1 - "drawCanvas"
Cohesion: 0.06
Nodes (48): animalArt(), buildStation(), buildZoneTerrain(), centerOnZone(), clampC(), clampView(), damageStation(), drawAgent() (+40 more)

### Community 2 - "addLog"
Cohesion: 0.08
Nodes (44): addLog(), answerPrayer(), assignGodQuests(), assignQuests(), canHelp(), captureRealm(), closeLobby(), createQuest() (+36 more)

### Community 3 - "st"
Cohesion: 0.12
Nodes (39): addTeachLog(), agentLevel(), bagCap(), bagCount(), chooseKept(), completeQuest(), depositTick(), destroyObj() (+31 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.12
Nodes (34): addAIAgent(), addFood(), atGoal(), atStore(), bagValue(), bestStat(), canTradeFor(), creditGather() (+26 more)

### Community 5 - "experiment"
Cohesion: 0.14
Nodes (32): applyWish(), buildEquivalents(), consume(), craftKnown(), depthOf(), designInvention(), experiment(), findNewRecipes() (+24 more)

### Community 6 - "runQuests"
Cohesion: 0.15
Nodes (25): accessibleStations(), addOwnLog(), addRel(), askToUse(), avail(), canUse(), computeNeeds(), failQuest() (+17 more)

### Community 7 - "ecologyTick"
Cohesion: 0.13
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+17 more)

### Community 8 - "rel"
Cohesion: 0.23
Nodes (16): assignJobs(), byId(), electChief(), score(), holdFoundingMeeting(), holdVillageMeeting(), jobFit(), nameVillage() (+8 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.16
Nodes (14): closeAgentCard(), DIFF_STARS(), getZoneAt(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), renderMiniMap() (+6 more)

### Community 10 - "drawPuppet"
Cohesion: 0.25
Nodes (8): armLen(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), getMood(), pupArmIK(), pupOutfit()

### Community 11 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 12 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `addLog`, `st`, `experiment`, `runQuests`, `ecologyTick`, `rel`, `renderAgentCard`, `zoneWeather`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.016129032258064516 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `addLog` to `game.js`, `drawCanvas`, `st`, `runAutonomousStep`, `experiment`, `runQuests`, `ecologyTick`, `rel`, `renderAgentCard`, `drawPuppet`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06471631205673758 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `drawCanvas`, `st`, `runAutonomousStep`, `experiment`, `runQuests`, `ecologyTick`, `rel`, `zoneWeather`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.0824524312896406 - nodes in this community are weakly interconnected._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.11605937921727395 - nodes in this community are weakly interconnected._