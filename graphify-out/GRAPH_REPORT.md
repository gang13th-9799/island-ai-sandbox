# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 794 nodes · 2748 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `43d016ec`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- gainExp
- agentMove
- addLog
- renderAllUI
- drawCanvas
- runAutonomousStep
- renderPosHud
- objsOf
- huntRoll
- drawPuppet
- groundShadow
- drawAnimal
- drawAgentTag
- buildEquivalents
- itemArtKey
- pupKeys
- switchTab
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 65 edges
2. `drawCanvas()` - 63 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 52 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 48 edges
7. `keyByName()` - 39 edges
8. `gainExp()` - 36 edges
9. `villageOf()` - 36 edges
10. `productDef()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_

## Import Cycles
- None detected.

## Communities (22 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (201): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+193 more)

### Community 1 - "st"
Cohesion: 0.06
Nodes (93): addFood(), affixFor(), affixRoll(), affixText(), agentGather(), apSel(), apToggle(), atkOf() (+85 more)

### Community 2 - "gainExp"
Cohesion: 0.07
Nodes (77): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), auraR(), avail() (+69 more)

### Community 3 - "agentMove"
Cohesion: 0.06
Nodes (68): addAIAgent(), agentHunt(), agentMove(), approachOf(), bridgeAt(), bridgeLane(), bridgeSet(), bridgeSites() (+60 more)

### Community 4 - "addLog"
Cohesion: 0.06
Nodes (68): addLog(), addOwnLog(), addRel(), agentLevel(), agentsRealtime(), agentStep(), askToUse(), assignGodQuests() (+60 more)

### Community 5 - "renderAllUI"
Cohesion: 0.09
Nodes (41): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), ensureDivine(), expNeed(), failCap() (+33 more)

### Community 6 - "drawCanvas"
Cohesion: 0.07
Nodes (38): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCage(), drawCanvas(), drawFlameLayers() (+30 more)

### Community 7 - "runAutonomousStep"
Cohesion: 0.13
Nodes (36): agentsCatchUp(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyStamina(), bodyTemp() (+28 more)

### Community 8 - "renderPosHud"
Cohesion: 0.10
Nodes (34): animalArt(), cwAddStat(), drink(), drinkSpotsOf(), drinkValue(), isFishy(), mapTap(), maxHp() (+26 more)

### Community 9 - "objsOf"
Cohesion: 0.09
Nodes (33): addTextilePlants(), applyLayout(), blockedSet(), buildIsland(), centerOnZone(), changeZoom(), clampView(), closeAgentCard() (+25 more)

### Community 10 - "huntRoll"
Cohesion: 0.12
Nodes (28): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), ensureAgent(), evolveOne() (+20 more)

### Community 11 - "drawPuppet"
Cohesion: 0.10
Nodes (21): armLen(), baseOutfit(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem() (+13 more)

### Community 12 - "groundShadow"
Cohesion: 0.20
Nodes (12): carveGlyphs(), drawPlantArt(), drawProp(), drawStele(), drawWorldObj(), groundShadow(), objState(), plantImg() (+4 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "buildEquivalents"
Cohesion: 0.67
Nodes (3): buildEquivalents(), propSimilarity(), realmRawSet()

### Community 16 - "itemArtKey"
Cohesion: 0.67
Nodes (3): itemArtKey(), itemIconHTML(), trapIcons()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `gainExp`, `agentMove`, `addLog`, `renderAllUI`, `runAutonomousStep`, `renderPosHud`, `objsOf`, `huntRoll`, `drawPuppet`, `groundShadow`, `drawAnimal`, `drawAgentTag`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009389671361502348 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `agentMove`, `renderAllUI`, `runAutonomousStep`, `renderPosHud`, `objsOf`, `huntRoll`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.058672276764843385 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `gainExp`, `agentMove`, `addLog`, `renderAllUI`, `runAutonomousStep`, `renderPosHud`, `huntRoll`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `gainExp` be split into smaller, more focused modules?**
  _Cohesion score 0.07382091592617908 - nodes in this community are weakly interconnected._