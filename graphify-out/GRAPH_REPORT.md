# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 653 nodes · 2137 edges · 24 communities (21 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8ed58bff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- villageOf
- addLog
- keyByName
- buildZoneTerrain
- runAutonomousStep
- renderAllUI
- drawCanvas
- hasTool
- beastCheck
- renderStorePop
- drawAgentTag
- drawAnimal
- steleCanvas
- makeSoul
- centerOnZone
- bridgeAt
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 56 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 50 edges
5. `st()` - 40 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentWork()` - 32 edges
9. `agentMove()` - 31 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 10 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `agentHunt()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (24 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (172): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+164 more)

### Community 1 - "st"
Cohesion: 0.09
Nodes (76): addTeachLog(), agentHunt(), agentMove(), agentWork(), applyWish(), assignGodQuests(), atGoal(), avail() (+68 more)

### Community 2 - "villageOf"
Cohesion: 0.08
Nodes (54): accessibleStations(), addFood(), addOwnLog(), agentGather(), approachOf(), askToUse(), atStore(), bagCap() (+46 more)

### Community 3 - "addLog"
Cohesion: 0.08
Nodes (50): addLog(), addRel(), agentStep(), assignJobs(), assignQuests(), bridgeKitStep(), byId(), canHelp() (+42 more)

### Community 4 - "keyByName"
Cohesion: 0.09
Nodes (43): apSel(), apToggle(), buildEquivalents(), buildHut(), buildSpot(), campOf(), carriedEff(), carriedTools() (+35 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.09
Nodes (39): addAIAgent(), applyLayout(), buildIsland(), buildZoneTerrain(), clampC(), crowdTick(), drawMiniMap(), ensureAgent() (+31 more)

### Community 6 - "runAutonomousStep"
Cohesion: 0.11
Nodes (34): agentsCatchUp(), agentsRealtime(), airTemp(), auraR(), baseTemp(), bestStat(), bodyRealtime(), bodyStamina() (+26 more)

### Community 7 - "renderAllUI"
Cohesion: 0.11
Nodes (33): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), expNeed(), gateOf(), godTick() (+25 more)

### Community 8 - "drawCanvas"
Cohesion: 0.10
Nodes (31): animalArt(), drawBridgeTile(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawStele(), drawTemple() (+23 more)

### Community 9 - "hasTool"
Cohesion: 0.09
Nodes (27): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet() (+19 more)

### Community 10 - "beastCheck"
Cohesion: 0.14
Nodes (23): addAnimals(), animalLog(), animalPower(), applyAISolution(), beastCheck(), carryTraits(), ecologyTick(), evolveOne() (+15 more)

### Community 11 - "renderStorePop"
Cohesion: 0.16
Nodes (14): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+6 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 16 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 17 - "bridgeAt"
Cohesion: 0.67
Nodes (3): bridgeAt(), bridgeSet(), bridgeSites()

### Community 18 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 19 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 20 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `st`, `villageOf`, `addLog`, `keyByName`, `buildZoneTerrain`, `renderAllUI`, `hasTool`, `beastCheck`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010869565217391304 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `villageOf`, `keyByName`, `buildZoneTerrain`, `runAutonomousStep`, `renderAllUI`, `hasTool`, `beastCheck`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.0856140350877193 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `addLog`, `buildZoneTerrain`, `runAutonomousStep`, `renderAllUI`, `hasTool`, `beastCheck`, `renderStorePop`, `drawAgentTag`, `drawAnimal`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.07896575821104122 - nodes in this community are weakly interconnected._