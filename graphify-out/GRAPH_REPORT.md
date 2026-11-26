# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 769 nodes · 2657 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `42696148`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- villageOf
- maxHp
- renderCW
- byId
- agentMove
- renderAllUI
- drawCanvas
- drawPuppet
- drawAnimal
- hashStr
- newAgent
- groundShadow
- makeSoul
- objWorldTick
- pupKeys
- readCap
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 43 edges
7. `keyByName()` - 37 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `experiment()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `runQuests()` --indirect_call--> `runQuestOne()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 7_
- `upgradeFauna()` --calls--> `addAnimals()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 12_

## Import Cycles
- None detected.

## Communities (24 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (194): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+186 more)

### Community 1 - "addLog"
Cohesion: 0.06
Nodes (102): addAnimals(), addFood(), addLog(), agentGather(), agentLevel(), agentsCatchUp(), airTemp(), animalPower() (+94 more)

### Community 2 - "villageOf"
Cohesion: 0.09
Nodes (67): accessibleStations(), addTeachLog(), agentWork(), atGoal(), atStore(), auraR(), avail(), bagValue() (+59 more)

### Community 3 - "maxHp"
Cohesion: 0.06
Nodes (67): agentsRealtime(), bagCap(), bagCount(), bodyThirst(), buildIsland(), carryBonus(), centerOnZone(), changeZoom() (+59 more)

### Community 4 - "renderCW"
Cohesion: 0.07
Nodes (62): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), buildEquivalents(), campOf(), canUse() (+54 more)

### Community 5 - "byId"
Cohesion: 0.08
Nodes (49): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), byId(), campGear() (+41 more)

### Community 6 - "agentMove"
Cohesion: 0.09
Nodes (49): agentHunt(), agentMove(), animalArt(), approachOf(), blockedSet(), buildHome(), buildSpot(), buildStation() (+41 more)

### Community 7 - "renderAllUI"
Cohesion: 0.09
Nodes (40): advanceGame(), animalLog(), answerPrayer(), captureRealm(), crossRealm(), ensureHomeBasics(), evolveOne(), evolveTick() (+32 more)

### Community 8 - "drawCanvas"
Cohesion: 0.08
Nodes (34): bridgeImg(), drawAgentTag(), drawBridgePiece(), drawCage(), drawCanvas(), drawFlameLayers(), drawGate(), drawLabel() (+26 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 10 - "drawAnimal"
Cohesion: 0.16
Nodes (18): bridgePieces(), bridgeVariant(), drawAnimal(), drawBridgeTile(), drawInsect(), drawPart(), elevOf(), fleeStep() (+10 more)

### Community 11 - "hashStr"
Cohesion: 0.22
Nodes (13): applyLayout(), findNewRecipes(), hashStr(), hrand(), insectsOf(), mmZoneImage(), mutVariant(), natureLaw() (+5 more)

### Community 12 - "newAgent"
Cohesion: 0.29
Nodes (10): addAIAgent(), ensureAgent(), freshStats(), godChild(), initFauna(), loadGameState(), newAgent(), pickChildName() (+2 more)

### Community 13 - "groundShadow"
Cohesion: 0.20
Nodes (10): carveGlyphs(), drawProp(), drawStele(), drawWorldObj(), groundShadow(), objState(), steleCanvas(), steleFace() (+2 more)

### Community 14 - "makeSoul"
Cohesion: 0.67
Nodes (3): chooseKept(), keepCount(), makeSoul()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

### Community 17 - "readCap"
Cohesion: 0.67
Nodes (3): readCap(), steleReadable(), steleTarget()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `addLog`, `villageOf`, `maxHp`, `renderCW`, `byId`, `agentMove`, `renderAllUI`, `drawPuppet`, `drawAnimal`, `hashStr`, `newAgent`, `groundShadow`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009708737864077669 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `maxHp`, `renderCW`, `byId`, `agentMove`, `renderAllUI`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.055134925257231605 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `villageOf`, `maxHp`, `renderCW`, `byId`, `agentMove`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.08548168249660787 - nodes in this community are weakly interconnected._