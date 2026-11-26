# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 774 nodes · 2689 edges · 24 communities (20 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f4e97b28`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- gainExp
- addLog
- villageOf
- renderPosHud
- drawCanvas
- runAutonomousStep
- nowH
- drawPuppet
- prayerTick
- switchZone
- drawAnimal
- canReach
- drawAgentTag
- steleCanvas
- natureLaw
- buildEquivalents
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop
- graveToggle
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 62 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 45 edges
7. `keyByName()` - 38 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `productDef()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_

## Import Cycles
- None detected.

## Communities (24 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (194): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+186 more)

### Community 1 - "st"
Cohesion: 0.05
Nodes (102): affixFor(), affixRoll(), affixText(), apSel(), apToggle(), atkOf(), bagCap(), bagCount() (+94 more)

### Community 2 - "gainExp"
Cohesion: 0.08
Nodes (77): accessibleStations(), addTeachLog(), agentHunt(), agentWork(), applyWish(), atGoal(), auraR(), avail() (+69 more)

### Community 3 - "addLog"
Cohesion: 0.06
Nodes (74): addAnimals(), addLog(), agentMove(), animalLog(), animalPower(), applyAISolution(), assignGodQuests(), blockedSet() (+66 more)

### Community 4 - "villageOf"
Cohesion: 0.06
Nodes (63): addOwnLog(), addRel(), agentLevel(), agentStep(), askToUse(), assignJobs(), assignQuests(), atStore() (+55 more)

### Community 5 - "renderPosHud"
Cohesion: 0.07
Nodes (47): animalArt(), approachOf(), bridgeKitStep(), bridgeLane(), bridgeSites(), canHelp(), changeZoom(), destroyBridge() (+39 more)

### Community 6 - "drawCanvas"
Cohesion: 0.06
Nodes (45): bridgeImg(), bridgePieces(), bridgeVariant(), centerOnZone(), clampView(), damageStation(), drawBridgePiece(), drawBridgeTile() (+37 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.10
Nodes (40): addAIAgent(), advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat() (+32 more)

### Community 8 - "nowH"
Cohesion: 0.11
Nodes (33): addFood(), agentGather(), collectTrap(), creditGather(), destroyObj(), drink(), gainItems(), harvestTool() (+25 more)

### Community 9 - "drawPuppet"
Cohesion: 0.12
Nodes (20): applyLayout(), armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+12 more)

### Community 10 - "prayerTick"
Cohesion: 0.22
Nodes (11): answerPrayer(), fateChance(), godAutoLevel(), inRealm(), materialWish(), prayerTick(), renderPrayers(), resolvePrayer() (+3 more)

### Community 11 - "switchZone"
Cohesion: 0.27
Nodes (10): buildIsland(), closeLobby(), drawMiniMap(), getZoneAt(), isleNoise(), miniMapTap(), renderMiniMap(), switchRealm() (+2 more)

### Community 12 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 13 - "canReach"
Cohesion: 0.33
Nodes (6): bridgeAt(), bridgeSet(), canReach(), deepAt(), reachOf(), urgentSwim()

### Community 14 - "drawAgentTag"
Cohesion: 0.47
Nodes (6): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), screenOf(), statusIcon()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "natureLaw"
Cohesion: 0.50
Nodes (5): findNewRecipes(), hrand(), natureLaw(), validRecipes(), world()

### Community 17 - "buildEquivalents"
Cohesion: 0.67
Nodes (3): buildEquivalents(), propSimilarity(), realmRawSet()

### Community 18 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 19 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `gainExp`, `addLog`, `villageOf`, `renderPosHud`, `runAutonomousStep`, `nowH`, `drawPuppet`, `drawAnimal`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009708737864077669 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `villageOf`, `renderPosHud`, `drawCanvas`, `runAutonomousStep`, `nowH`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.050669772859638904 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `gainExp`, `addLog`, `villageOf`, `runAutonomousStep`, `nowH`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `gainExp` be split into smaller, more focused modules?**
  _Cohesion score 0.07963089542036911 - nodes in this community are weakly interconnected._