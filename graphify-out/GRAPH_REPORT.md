# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 699 nodes · 2318 edges · 22 communities (19 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `66681f76`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- runAutonomousStep
- addLog
- byId
- drawCanvas
- renderAllUI
- propsOf
- runQuests
- objsOf
- renderAgentPop
- drawPuppet
- trOf
- drawAnimal
- drawAgentTag
- steleCanvas
- centerOnZone
- deepAt
- pupKeys
- closeSheet
- startSimLoop
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 60 edges
2. `addLog()` - 60 edges
3. `drawCanvas()` - 60 edges
4. `renderAllUI()` - 50 edges
5. `st()` - 47 edges
6. `villageOf()` - 35 edges
7. `gainExp()` - 34 edges
8. `agentMove()` - 33 edges
9. `agentWork()` - 32 edges
10. `pick()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 12_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 8_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_

## Import Cycles
- None detected.

## Communities (22 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (182): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+174 more)

### Community 1 - "villageOf"
Cohesion: 0.06
Nodes (92): agentMove(), agentsRealtime(), agentStep(), agentWork(), approachOf(), atGoal(), atStore(), avail() (+84 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.06
Nodes (66): addAIAgent(), addAnimals(), agentsCatchUp(), animalArt(), applyAISolution(), assignGodQuests(), bestStat(), blockedSet() (+58 more)

### Community 3 - "addLog"
Cohesion: 0.09
Nodes (62): addFood(), addLog(), agentGather(), agentHunt(), agentLevel(), applyWish(), atkOf(), bagCap() (+54 more)

### Community 4 - "byId"
Cohesion: 0.09
Nodes (39): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), courtStep() (+31 more)

### Community 5 - "drawCanvas"
Cohesion: 0.08
Nodes (38): bridgeImg(), bridgePieces(), bridgeVariant(), damageStation(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawGate() (+30 more)

### Community 6 - "renderAllUI"
Cohesion: 0.09
Nodes (36): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), expNeed(), failCap() (+28 more)

### Community 7 - "propsOf"
Cohesion: 0.09
Nodes (34): airTemp(), baseTemp(), bodyRealtime(), bodyTemp(), bodyThirst(), buildEquivalents(), campGear(), canTrip() (+26 more)

### Community 8 - "runQuests"
Cohesion: 0.13
Nodes (27): accessibleStations(), addTeachLog(), chooseKept(), designInvention(), effText(), generateQuests(), keepCount(), makeSoul() (+19 more)

### Community 9 - "objsOf"
Cohesion: 0.10
Nodes (26): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), isleNoise() (+18 more)

### Community 10 - "renderAgentPop"
Cohesion: 0.12
Nodes (20): apSel(), apToggle(), closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap() (+12 more)

### Community 11 - "drawPuppet"
Cohesion: 0.14
Nodes (15): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+7 more)

### Community 12 - "trOf"
Cohesion: 0.24
Nodes (13): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+5 more)

### Community 13 - "drawAnimal"
Cohesion: 0.31
Nodes (9): drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), mutatedSprite(), mutOK(), shade(), shadeCol() (+1 more)

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 17 - "deepAt"
Cohesion: 0.67
Nodes (3): bridgeAt(), bridgeSet(), deepAt()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `villageOf`, `runAutonomousStep`, `addLog`, `byId`, `renderAllUI`, `propsOf`, `objsOf`, `renderAgentPop`, `drawPuppet`, `trOf`, `drawAnimal`, `drawAgentTag`, `centerOnZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.010309278350515464 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `runAutonomousStep`, `byId`, `drawCanvas`, `renderAllUI`, `propsOf`, `runQuests`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.06163401815575729 - nodes in this community are weakly interconnected._
- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `addLog`, `byId`, `renderAllUI`, `propsOf`, `runQuests`, `objsOf`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.05827505827505827 - nodes in this community are weakly interconnected._