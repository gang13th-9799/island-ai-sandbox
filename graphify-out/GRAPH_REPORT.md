# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 609 nodes · 1963 edges · 21 communities (17 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8cc1899`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- villageOf
- drawCanvas
- keyByName
- pick
- renderAllUI
- agentStep
- rel
- drawPuppet
- objsOf
- getZoneAt
- mapTap
- steleCanvas
- makeSoul
- drawHairLayer
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (21 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (161): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+153 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (73): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentHunt(), applyWish() (+65 more)

### Community 2 - "villageOf"
Cohesion: 0.07
Nodes (68): accessibleStations(), agentMove(), agentWork(), applyAISolution(), approachOf(), atGoal(), atStore(), avail() (+60 more)

### Community 3 - "drawCanvas"
Cohesion: 0.06
Nodes (52): animalArt(), auraR(), centerOnZone(), clampView(), drawAgentTag(), drawAnimal(), drawCanvas(), drawInsect() (+44 more)

### Community 4 - "keyByName"
Cohesion: 0.10
Nodes (39): apSel(), apToggle(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), consume(), depthOf() (+31 more)

### Community 5 - "pick"
Cohesion: 0.09
Nodes (35): addAIAgent(), addAnimals(), animalPower(), carryTraits(), damageHome(), damageStation(), damageStele(), ecologyTick() (+27 more)

### Community 6 - "renderAllUI"
Cohesion: 0.11
Nodes (35): advanceGame(), animalLog(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), evolveOne(), evolveTick() (+27 more)

### Community 7 - "agentStep"
Cohesion: 0.09
Nodes (35): agentsCatchUp(), agentsRealtime(), agentStep(), airTemp(), baseTemp(), bodyRealtime(), bodyTemp(), coldMove() (+27 more)

### Community 8 - "rel"
Cohesion: 0.16
Nodes (23): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+15 more)

### Community 9 - "drawPuppet"
Cohesion: 0.16
Nodes (16): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet() (+8 more)

### Community 10 - "objsOf"
Cohesion: 0.19
Nodes (14): harvestTool(), hitDamage(), hitObj(), mkObj(), nearGatherable(), nodeReach(), objAct(), objsOf() (+6 more)

### Community 11 - "getZoneAt"
Cohesion: 0.22
Nodes (13): applyLayout(), buildIsland(), drawMiniMap(), getZoneAt(), isleNoise(), miniMapTap(), mmZoneImage(), renderLoop() (+5 more)

### Community 12 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `keyByName`, `pick`, `renderAllUI`, `agentStep`, `rel`, `objsOf`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011560693641618497 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `villageOf`, `drawCanvas`, `pick`, `renderAllUI`, `agentStep`, `rel`, `objsOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08561643835616438 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `villageOf`, `drawCanvas`, `keyByName`, `pick`, `agentStep`, `rel`, `drawPuppet`, `getZoneAt`, `mapTap`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.07462686567164178 - nodes in this community are weakly interconnected._