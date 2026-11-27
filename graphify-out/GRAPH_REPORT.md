# Graph Report - graph-src  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 794 nodes · 2749 edges · 23 communities (19 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `29037f40`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- st
- gainExp
- agentMove
- renderAllUI
- byId
- addLog
- drawCanvas
- objsOf
- renderPosHud
- drawPuppet
- toolTick
- groundShadow
- drawAnimal
- prayerTick
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
- `toolTick()` --indirect_call--> `isTwoHand()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 11_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_

## Import Cycles
- None detected.

## Communities (23 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (201): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+193 more)

### Community 1 - "st"
Cohesion: 0.06
Nodes (91): addFood(), affixFor(), affixRoll(), affixText(), agentGather(), apSel(), apToggle(), atkOf() (+83 more)

### Community 2 - "gainExp"
Cohesion: 0.08
Nodes (70): accessibleStations(), addTeachLog(), agentWork(), applyWish(), atGoal(), atStore(), auraR(), avail() (+62 more)

### Community 3 - "agentMove"
Cohesion: 0.06
Nodes (68): agentHunt(), agentMove(), animalArt(), approachOf(), blockedSet(), bridgeAt(), bridgeSet(), buildHut() (+60 more)

### Community 4 - "renderAllUI"
Cohesion: 0.06
Nodes (64): addAIAgent(), addAnimals(), advanceGame(), animalLog(), animalPower(), answerPrayer(), applyAISolution(), captureRealm() (+56 more)

### Community 5 - "byId"
Cohesion: 0.07
Nodes (60): addOwnLog(), addRel(), agentLevel(), agentsRealtime(), agentStep(), askToUse(), assignJobs(), assignQuests() (+52 more)

### Community 6 - "addLog"
Cohesion: 0.10
Nodes (43): addLog(), agentsCatchUp(), airTemp(), assignGodQuests(), baseTemp(), beastCheck(), bestStat(), bodyRealtime() (+35 more)

### Community 7 - "drawCanvas"
Cohesion: 0.08
Nodes (38): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCage(), drawCanvas(), drawFlameLayers() (+30 more)

### Community 8 - "objsOf"
Cohesion: 0.09
Nodes (33): addTextilePlants(), applyLayout(), buildIsland(), centerOnZone(), changeZoom(), clampView(), closeAgentCard(), closeCW() (+25 more)

### Community 9 - "renderPosHud"
Cohesion: 0.11
Nodes (29): cwAddStat(), drink(), drinkSpotsOf(), drinkValue(), failQuest(), mapTap(), maxHp(), openAgentCard() (+21 more)

### Community 10 - "drawPuppet"
Cohesion: 0.10
Nodes (21): armLen(), baseOutfit(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem() (+13 more)

### Community 11 - "toolTick"
Cohesion: 0.35
Nodes (12): campOf(), canHold(), carriedTools(), handsOnTools(), makeRoom(), setOffhand(), shieldHand(), toolCap() (+4 more)

### Community 12 - "groundShadow"
Cohesion: 0.20
Nodes (12): carveGlyphs(), drawPlantArt(), drawProp(), drawStele(), drawWorldObj(), groundShadow(), objState(), plantImg() (+4 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "prayerTick"
Cohesion: 0.29
Nodes (8): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), resolvePrayer(), saveGodDB(), setGodAuto()

### Community 15 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 16 - "buildEquivalents"
Cohesion: 0.67
Nodes (3): buildEquivalents(), propSimilarity(), realmRawSet()

### Community 17 - "itemArtKey"
Cohesion: 0.67
Nodes (3): itemArtKey(), itemIconHTML(), trapIcons()

### Community 18 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `st`, `gainExp`, `agentMove`, `renderAllUI`, `byId`, `addLog`, `objsOf`, `renderPosHud`, `drawPuppet`, `groundShadow`, `drawAnimal`, `drawAgentTag`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009389671361502348 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `gainExp`, `agentMove`, `renderAllUI`, `byId`, `objsOf`, `renderPosHud`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.061782661782661785 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `st` to `game.js`, `gainExp`, `agentMove`, `renderAllUI`, `byId`, `addLog`, `renderPosHud`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `gainExp` be split into smaller, more focused modules?**
  _Cohesion score 0.08198757763975155 - nodes in this community are weakly interconnected._