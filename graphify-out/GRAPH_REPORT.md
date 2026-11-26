# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 665 nodes · 2168 edges · 23 communities (19 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a93ccb40`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- runAutonomousStep
- keyByName
- buildZoneTerrain
- agentMove
- villageOf
- renderAllUI
- drawCanvas
- pick
- drawPuppet
- bodyRealtime
- trOf
- renderStorePop
- drawAnimal
- drawAgentTag
- steleCanvas
- objWorldTick
- pupKeys
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
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 12 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 9_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (23 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (175): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+167 more)

### Community 1 - "addLog"
Cohesion: 0.10
Nodes (62): addFood(), addLog(), addTeachLog(), agentGather(), agentWork(), applyWish(), assignGodQuests(), atGoal() (+54 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (48): addOwnLog(), addRel(), agentsCatchUp(), agentsRealtime(), agentStep(), askToUse(), assignJobs(), assignQuests() (+40 more)

### Community 3 - "keyByName"
Cohesion: 0.09
Nodes (44): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools() (+36 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (41): addAnimals(), applyAISolution(), applyLayout(), bridgeAt(), bridgeLane(), bridgeSet(), bridgeSites(), buildIsland() (+33 more)

### Community 5 - "agentMove"
Cohesion: 0.11
Nodes (41): agentHunt(), agentMove(), approachOf(), blockedSet(), campGear(), canReach(), canTrip(), drinkStep() (+33 more)

### Community 6 - "villageOf"
Cohesion: 0.11
Nodes (38): accessibleStations(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger(), bridgeKitStep(), canTradeFor() (+30 more)

### Community 7 - "renderAllUI"
Cohesion: 0.09
Nodes (38): advanceGame(), agentLevel(), answerPrayer(), auraR(), captureRealm(), chooseKept(), closeLobby(), crossRealm() (+30 more)

### Community 8 - "drawCanvas"
Cohesion: 0.09
Nodes (35): animalArt(), bridgeImg(), bridgePieces(), centerOnZone(), changeZoom(), clampView(), drawBridgePiece(), drawBridgeTile() (+27 more)

### Community 9 - "pick"
Cohesion: 0.10
Nodes (29): addAIAgent(), damageHome(), damageStation(), damageStele(), ensureAgent(), fateChance(), freshStats(), generateCrisisProposal() (+21 more)

### Community 10 - "drawPuppet"
Cohesion: 0.11
Nodes (20): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+12 more)

### Community 11 - "bodyRealtime"
Cohesion: 0.17
Nodes (19): airTemp(), baseTemp(), bodyRealtime(), bodyStamina(), bodyTemp(), bodyThirst(), drink(), drinkValue() (+11 more)

### Community 12 - "trOf"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 13 - "renderStorePop"
Cohesion: 0.16
Nodes (14): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), openStorePop() (+6 more)

### Community 14 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 15 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 16 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 17 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `keyByName`, `buildZoneTerrain`, `agentMove`, `villageOf`, `renderAllUI`, `pick`, `bodyRealtime`, `trOf`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0106951871657754 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `agentMove`, `villageOf`, `renderAllUI`, `pick`, `bodyRealtime`, `trOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.10259122157588578 - nodes in this community are weakly interconnected._
- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `agentMove`, `renderAllUI`, `pick`, `drawPuppet`, `bodyRealtime`, `trOf`, `renderStorePop`, `drawAnimal`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08244680851063829 - nodes in this community are weakly interconnected._