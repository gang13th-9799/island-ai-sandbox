# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 680 nodes · 2232 edges · 23 communities (18 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c2094bcc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- agentMove
- villageOf
- buildZoneTerrain
- renderAllUI
- nowH
- drawCanvas
- keyByName
- drawPuppet
- take
- renderStorePop
- drawAgentTag
- drawAnimal
- steleCanvas
- centerOnZone
- pupKeys
- bridgeAt
- closeSheet
- startSimLoop
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 57 edges
3. `drawCanvas()` - 55 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 33 edges
8. `agentWork()` - 32 edges
9. `agentMove()` - 32 edges
10. `pick()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_

## Import Cycles
- None detected.

## Communities (23 total, 5 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (179): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+171 more)

### Community 1 - "addLog"
Cohesion: 0.08
Nodes (69): accessibleStations(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentWork(), applyWish(), askToUse() (+61 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.09
Nodes (56): agentsCatchUp(), agentsRealtime(), agentStep(), airTemp(), atkOf(), bagCap(), baseTemp(), beastCheck() (+48 more)

### Community 3 - "agentMove"
Cohesion: 0.09
Nodes (49): addAnimals(), agentHunt(), agentMove(), animalLog(), animalPower(), applyAISolution(), campGear(), canReach() (+41 more)

### Community 4 - "villageOf"
Cohesion: 0.09
Nodes (43): agentLevel(), assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp(), chooseKept(), courtStep() (+35 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (42): addAIAgent(), applyLayout(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+34 more)

### Community 6 - "renderAllUI"
Cohesion: 0.09
Nodes (40): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics(), expNeed(), failCap() (+32 more)

### Community 7 - "nowH"
Cohesion: 0.09
Nodes (38): addFood(), agentGather(), approachOf(), bagCount(), blockedSet(), creditGather(), depositTick(), destroyObj() (+30 more)

### Community 8 - "drawCanvas"
Cohesion: 0.09
Nodes (36): animalArt(), auraR(), bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas() (+28 more)

### Community 9 - "keyByName"
Cohesion: 0.08
Nodes (34): apSel(), apToggle(), buildEquivalents(), campOf(), carriedTools(), carryBonus(), depthOf(), designInvention() (+26 more)

### Community 10 - "drawPuppet"
Cohesion: 0.11
Nodes (19): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+11 more)

### Community 11 - "take"
Cohesion: 0.21
Nodes (14): atStore(), bagValue(), bridgeKitStep(), bridgeLane(), bridgeSites(), canTradeFor(), destroyBridge(), effectsTick() (+6 more)

### Community 12 - "renderStorePop"
Cohesion: 0.16
Nodes (14): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+6 more)

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 15 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 16 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `agentMove`, `villageOf`, `buildZoneTerrain`, `renderAllUI`, `nowH`, `keyByName`, `take`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010471204188481676 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `runAutonomousStep`, `agentMove`, `villageOf`, `buildZoneTerrain`, `renderAllUI`, `nowH`, `drawPuppet`, `renderStorePop`, `drawAgentTag`, `drawAnimal`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08184143222506395 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `runAutonomousStep` to `game.js`, `addLog`, `agentMove`, `villageOf`, `buildZoneTerrain`, `renderAllUI`, `nowH`, `keyByName`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09025974025974026 - nodes in this community are weakly interconnected._