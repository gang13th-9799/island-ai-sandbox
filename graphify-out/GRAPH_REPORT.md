# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 577 nodes · 1838 edges · 21 communities (17 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `66a8ed81`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- drawCanvas
- keyByName
- villageOf
- makeRealmState
- renderAllUI
- runAutonomousStep
- rel
- drawPuppet
- drawAnimal
- mapTap
- drawAgentTag
- steleCanvas
- makeSoul
- objWorldTick
- pupKeys
- setZoom
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 57 edges
2. `addLog()` - 51 edges
3. `renderAllUI()` - 45 edges
4. `drawCanvas()` - 41 edges
5. `st()` - 39 edges
6. `villageOf()` - 31 edges
7. `gainExp()` - 30 edges
8. `pick()` - 29 edges
9. `agentWork()` - 28 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 7_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (21 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (154): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+146 more)

### Community 1 - "addLog"
Cohesion: 0.09
Nodes (72): addFood(), addLog(), addTeachLog(), agentGather(), agentHunt(), agentWork(), applyWish(), assignGodQuests() (+64 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (61): addAIAgent(), animalArt(), applyLayout(), buildIsland(), buildZoneTerrain(), centerOnZone(), clampView(), crowdTick() (+53 more)

### Community 3 - "keyByName"
Cohesion: 0.08
Nodes (49): apSel(), apToggle(), bagCap(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools() (+41 more)

### Community 4 - "villageOf"
Cohesion: 0.10
Nodes (38): accessibleStations(), agentMove(), agentStep(), atStore(), bagValue(), bestHomeTier(), bodyHunger(), canTradeFor() (+30 more)

### Community 5 - "makeRealmState"
Cohesion: 0.10
Nodes (36): addAnimals(), buildSpot(), buildStation(), captureRealm(), clampC(), closeLobby(), crossRealm(), gateOf() (+28 more)

### Community 6 - "renderAllUI"
Cohesion: 0.09
Nodes (32): animalLog(), animalPower(), answerPrayer(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+24 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.14
Nodes (31): advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), bestStat(), bodyRealtime(), bodyStamina() (+23 more)

### Community 8 - "rel"
Cohesion: 0.14
Nodes (28): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+20 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 10 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 11 - "mapTap"
Cohesion: 0.25
Nodes (8): itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

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
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `drawCanvas`, `keyByName`, `villageOf`, `makeRealmState`, `renderAllUI`, `rel`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012121212121212121 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `drawCanvas`, `keyByName`, `villageOf`, `makeRealmState`, `renderAllUI`, `runAutonomousStep`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.0903755868544601 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `keyByName`, `villageOf`, `runAutonomousStep`, `rel`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.05573770491803279 - nodes in this community are weakly interconnected._