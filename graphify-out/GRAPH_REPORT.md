# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 672 nodes · 2203 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ebcbc3de`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- agentMove
- keyByName
- renderAllUI
- pick
- rel
- drawCanvas
- villageOf
- getZoneAt
- drawPuppet
- drawAnimal
- drawAgentTag
- steleCanvas
- makeSoul
- centerOnZone
- objWorldTick
- pupKeys
- bridgeAt
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts
- nearGatherable

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 53 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 45 edges
6. `villageOf()` - 34 edges
7. `gainExp()` - 33 edges
8. `agentMove()` - 32 edges
9. `agentWork()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 8_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --calls--> `bestStat()`  [EXTRACTED]
  game.js → game.js  _Bridges community 0 → community 1_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (24 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (179): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+171 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.07
Nodes (98): accessibleStations(), addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentHunt() (+90 more)

### Community 2 - "agentMove"
Cohesion: 0.07
Nodes (64): agentMove(), agentsCatchUp(), agentsRealtime(), agentStep(), approachOf(), blockedSet(), bridgeLane(), bridgeSites() (+56 more)

### Community 3 - "keyByName"
Cohesion: 0.08
Nodes (45): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), carryBonus() (+37 more)

### Community 4 - "renderAllUI"
Cohesion: 0.08
Nodes (44): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics(), expNeed() (+36 more)

### Community 5 - "pick"
Cohesion: 0.08
Nodes (40): addAIAgent(), addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), damageHome(), damageStation() (+32 more)

### Community 6 - "rel"
Cohesion: 0.09
Nodes (40): airTemp(), assignJobs(), baseTemp(), bestHomeTier(), byId(), clothWarmth(), coldMove(), electChief() (+32 more)

### Community 7 - "drawCanvas"
Cohesion: 0.09
Nodes (32): animalArt(), bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawInsect() (+24 more)

### Community 8 - "villageOf"
Cohesion: 0.15
Nodes (31): agentWork(), atGoal(), atStore(), avail(), bagValue(), bridgeKitStep(), canTradeFor(), experiment() (+23 more)

### Community 9 - "getZoneAt"
Cohesion: 0.10
Nodes (27): applyLayout(), buildIsland(), closeAgentCard(), closeAgentPop(), drawMiniMap(), getZoneAt(), insectsOf(), isleNoise() (+19 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+6 more)

### Community 11 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `agentMove`, `keyByName`, `renderAllUI`, `pick`, `rel`, `villageOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010471204188481676 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `agentMove`, `keyByName`, `renderAllUI`, `pick`, `rel`, `villageOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.070271407532085 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `agentMove`, `renderAllUI`, `pick`, `rel`, `getZoneAt`, `drawPuppet`, `drawAnimal`, `drawAgentTag`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentMove` be split into smaller, more focused modules?**
  _Cohesion score 0.06944444444444445 - nodes in this community are weakly interconnected._