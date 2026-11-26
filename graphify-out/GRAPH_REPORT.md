# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 666 nodes · 2170 edges · 23 communities (17 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15189321`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- rel
- villageOf
- drawCanvas
- keyByName
- agentMove
- runAutonomousStep
- renderAllUI
- getZoneAt
- trOf
- drawPuppet
- prayerTick
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 53 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 40 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentWork()` - 32 edges
9. `agentMove()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 6_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 7_

## Import Cycles
- None detected.

## Communities (23 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (175): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+167 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (59): accessibleStations(), addFood(), addLog(), addTeachLog(), agentGather(), agentHunt(), applyAISolution(), assignGodQuests() (+51 more)

### Community 2 - "rel"
Cohesion: 0.07
Nodes (53): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId() (+45 more)

### Community 3 - "villageOf"
Cohesion: 0.10
Nodes (52): agentWork(), applyWish(), approachOf(), atGoal(), atStore(), avail(), bagValue(), bodyHunger() (+44 more)

### Community 4 - "drawCanvas"
Cohesion: 0.06
Nodes (52): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), changeZoom(), clampView(), drawAgent() (+44 more)

### Community 5 - "keyByName"
Cohesion: 0.07
Nodes (51): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools() (+43 more)

### Community 6 - "agentMove"
Cohesion: 0.09
Nodes (43): agentMove(), blockedSet(), buildSpot(), buildStation(), buildZoneTerrain(), canReach(), clampC(), crossZone() (+35 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.09
Nodes (39): addAIAgent(), agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), bestStat(), bodyRealtime(), bodyTemp() (+31 more)

### Community 8 - "renderAllUI"
Cohesion: 0.12
Nodes (33): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), expNeed(), gateOf() (+25 more)

### Community 9 - "getZoneAt"
Cohesion: 0.10
Nodes (26): applyLayout(), buildIsland(), closeAgentCard(), closeAgentPop(), drawMiniMap(), getZoneAt(), isleNoise(), itemArtKey() (+18 more)

### Community 10 - "trOf"
Cohesion: 0.16
Nodes (19): addAnimals(), animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+11 more)

### Community 11 - "drawPuppet"
Cohesion: 0.12
Nodes (16): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+8 more)

### Community 12 - "prayerTick"
Cohesion: 0.25
Nodes (9): fateChance(), giftNeeds(), godAutoLevel(), materialWish(), prayerNeeds(), prayerTick(), renderPrayers(), setGodAuto() (+1 more)

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `rel`, `villageOf`, `keyByName`, `agentMove`, `renderAllUI`, `trOf`, `prayerTick`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0106951871657754 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `rel`, `villageOf`, `keyByName`, `agentMove`, `runAutonomousStep`, `renderAllUI`, `trOf`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09468147282291058 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `rel`, `villageOf`, `agentMove`, `runAutonomousStep`, `renderAllUI`, `getZoneAt`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `rel` be split into smaller, more focused modules?**
  _Cohesion score 0.07256894049346879 - nodes in this community are weakly interconnected._