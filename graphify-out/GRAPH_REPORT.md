# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 771 nodes · 2670 edges · 24 communities (17 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8985cda2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- gainExp
- maxHp
- addLog
- runAutonomousStep
- buildZoneTerrain
- drawCanvas
- renderAllUI
- hashStr
- drawPuppet
- drawAnimal
- drawAgentTag
- newAgent
- steleCanvas
- objWorldTick
- pupKeys
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 44 edges
7. `keyByName()` - 38 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `experiment()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 8_

## Import Cycles
- None detected.

## Communities (24 total, 7 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (194): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+186 more)

### Community 1 - "st"
Cohesion: 0.05
Nodes (107): addTeachLog(), affixFor(), affixRoll(), affixText(), agentWork(), applyWish(), apSel(), apToggle() (+99 more)

### Community 2 - "gainExp"
Cohesion: 0.07
Nodes (82): addFood(), agentGather(), agentHunt(), agentMove(), agentStep(), approachOf(), blockedSet(), bodyStamina() (+74 more)

### Community 3 - "maxHp"
Cohesion: 0.06
Nodes (63): animalArt(), bagCount(), buildIsland(), canHelp(), centerOnZone(), changeZoom(), clampView(), closeAgentCard() (+55 more)

### Community 4 - "addLog"
Cohesion: 0.07
Nodes (62): addAIAgent(), addLog(), addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId() (+54 more)

### Community 5 - "runAutonomousStep"
Cohesion: 0.08
Nodes (51): accessibleStations(), addAnimals(), agentsCatchUp(), agentsRealtime(), airTemp(), animalPower(), applyAISolution(), baseTemp() (+43 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (48): advanceGame(), answerPrayer(), buildHome(), buildSpot(), buildStation(), buildZoneTerrain(), captureRealm(), clampC() (+40 more)

### Community 7 - "drawCanvas"
Cohesion: 0.07
Nodes (41): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawFlameLayers(), drawGate() (+33 more)

### Community 8 - "renderAllUI"
Cohesion: 0.09
Nodes (34): agentLevel(), animalLog(), atStore(), auraR(), bestHomeTier(), buildHut(), canTradeFor(), chooseKept() (+26 more)

### Community 9 - "hashStr"
Cohesion: 0.16
Nodes (15): applyLayout(), drawHairLayer(), findNewRecipes(), hairStyleOf(), hashStr(), hrand(), insectsOf(), mmZoneImage() (+7 more)

### Community 10 - "drawPuppet"
Cohesion: 0.15
Nodes (15): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawShield() (+7 more)

### Community 11 - "drawAnimal"
Cohesion: 0.31
Nodes (9): drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), mutatedSprite(), mutOK(), shade(), shadeCol() (+1 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "newAgent"
Cohesion: 0.43
Nodes (7): ensureAgent(), freshStats(), initFauna(), loadGameState(), newAgent(), randomTalent(), upgradeFauna()

### Community 14 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `gainExp`, `maxHp`, `addLog`, `runAutonomousStep`, `buildZoneTerrain`, `renderAllUI`, `hashStr`, `drawPuppet`, `drawAnimal`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009708737864077669 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `maxHp`, `runAutonomousStep`, `buildZoneTerrain`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.054664080409098925 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `gainExp`, `maxHp`, `addLog`, `runAutonomousStep`, `buildZoneTerrain`, `renderAllUI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `gainExp` be split into smaller, more focused modules?**
  _Cohesion score 0.06744956338452274 - nodes in this community are weakly interconnected._