# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 417 nodes · 1265 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4be103af`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- drawCanvas
- runAutonomousStep
- addLog
- renderAllUI
- ecologyTick
- buildZoneTerrain
- propsOf
- newAgent
- drawAnimal
- objsOf
- makeSoul
- pupKeys
- setZoom
- closeSheet
- toolsOfType

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `st()` - 30 edges
5. `drawCanvas()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `villageOf()` - 22 edges
9. `rel()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 6 → community 7_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 6 → community 9_
- `addOwnLog()` --calls--> `addTeachLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `getEquip()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (17 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (110): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+102 more)

### Community 1 - "st"
Cohesion: 0.11
Nodes (48): addTeachLog(), canUse(), completeQuest(), consume(), craftKnown(), depthOf(), destroyObj(), experiment() (+40 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (45): animalArt(), armLen(), centerOnZone(), clampView(), closeAgentCard(), damageStation(), DIFF_STARS(), drawAgent() (+37 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.13
Nodes (39): accessibleStations(), addFood(), atGoal(), atStore(), avail(), bagCap(), bagCount(), bagValue() (+31 more)

### Community 4 - "addLog"
Cohesion: 0.11
Nodes (37): addLog(), addOwnLog(), addRel(), askToUse(), assignGodQuests(), assignJobs(), assignQuests(), byId() (+29 more)

### Community 5 - "renderAllUI"
Cohesion: 0.11
Nodes (28): answerPrayer(), captureRealm(), closeLobby(), cycleSpeed(), expNeed(), getZoneAt(), godTick(), inRealm() (+20 more)

### Community 6 - "ecologyTick"
Cohesion: 0.13
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+17 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (25): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+17 more)

### Community 8 - "propsOf"
Cohesion: 0.17
Nodes (16): buildEquivalents(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), materialWish(), natureLaw() (+8 more)

### Community 9 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

### Community 10 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 11 - "objsOf"
Cohesion: 0.33
Nodes (6): mkObj(), objsOf(), objWorldTick(), wobjBase(), wobjPick(), wobjRng()

### Community 12 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `drawCanvas`, `addLog`, `renderAllUI`, `ecologyTick`, `buildZoneTerrain`, `propsOf`, `newAgent`, `objsOf`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01680672268907563 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `st`, `drawCanvas`, `runAutonomousStep`, `addLog`, `ecologyTick`, `propsOf`, `newAgent`, `makeSoul`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.11081560283687943 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `drawCanvas`, `runAutonomousStep`, `ecologyTick`, `buildZoneTerrain`, `propsOf`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06161616161616162 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._