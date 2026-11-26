# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 734 nodes · 2494 edges · 26 communities (20 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dcc9735a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- renderCW
- addLog
- pick
- runAutonomousStep
- agentMove
- villageOf
- drawCanvas
- renderAllUI
- byId
- hashStr
- drawAnimal
- drawAgentTag
- prayerTick
- steleCanvas
- centerOnZone
- drawHairLayer
- itemArtKey
- objWorldTick
- pupKeys
- bridgeAt
- bridgeSites
- closeSheet
- startSimLoop
- FOOD_ITEM
- graveToggle

## God Nodes (most connected - your core abstractions)
1. `addLog()` - 63 edges
2. `drawCanvas()` - 61 edges
3. `runAutonomousStep()` - 60 edges
4. `st()` - 50 edges
5. `renderAllUI()` - 50 edges
6. `renderCW()` - 36 edges
7. `villageOf()` - 36 edges
8. `keyByName()` - 35 edges
9. `gainExp()` - 35 edges
10. `agentMove()` - 33 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `realmTravelTick()` --indirect_call--> `byId()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 9_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 8_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 5_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 6_

## Import Cycles
- None detected.

## Communities (26 total, 6 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (189): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_HITS, ANIM_REL, animalLogs, AP (+181 more)

### Community 1 - "renderCW"
Cohesion: 0.06
Nodes (80): apSel(), apToggle(), bagCap(), bagCount(), campOf(), carriedTools(), carryBonus(), closeAgentCard() (+72 more)

### Community 2 - "addLog"
Cohesion: 0.10
Nodes (63): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), agentGather(), agentLevel(), applyWish() (+55 more)

### Community 3 - "pick"
Cohesion: 0.06
Nodes (62): addAIAgent(), answerPrayer(), buildEquivalents(), buildSpot(), buildZoneTerrain(), captureRealm(), clampC(), closeLobby() (+54 more)

### Community 4 - "runAutonomousStep"
Cohesion: 0.09
Nodes (50): addAnimals(), advanceGame(), agentsCatchUp(), agentsRealtime(), airTemp(), animalPower(), baseTemp(), beastCheck() (+42 more)

### Community 5 - "agentMove"
Cohesion: 0.09
Nodes (50): agentHunt(), agentMove(), agentStep(), animalArt(), approachOf(), blockedSet(), campGear(), canReach() (+42 more)

### Community 6 - "villageOf"
Cohesion: 0.10
Nodes (48): accessibleStations(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bridgeKitStep() (+40 more)

### Community 7 - "drawCanvas"
Cohesion: 0.08
Nodes (38): bridgeImg(), bridgePieces(), bridgeVariant(), drawBridgePiece(), drawBridgeTile(), drawCanvas(), drawFlameLayers(), drawGate() (+30 more)

### Community 8 - "renderAllUI"
Cohesion: 0.08
Nodes (36): animalLog(), applyAISolution(), armLen(), auraR(), drawAgent(), drawBow(), drawEyeArt(), drawItem() (+28 more)

### Community 9 - "byId"
Cohesion: 0.11
Nodes (31): assignJobs(), assignQuests(), byId(), canHelp(), coldMove(), electChief(), score(), getAdjacentZones() (+23 more)

### Community 10 - "hashStr"
Cohesion: 0.14
Nodes (20): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), insectsOf() (+12 more)

### Community 11 - "drawAnimal"
Cohesion: 0.31
Nodes (9): drawAnimal(), drawCage(), drawPart(), drawSnareCatch(), mutatedSprite(), mutOK(), shade(), shadeCol() (+1 more)

### Community 12 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 13 - "prayerTick"
Cohesion: 0.40
Nodes (6): fateChance(), godAutoLevel(), materialWish(), prayerTick(), renderPrayers(), setGodAuto()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 16 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 17 - "itemArtKey"
Cohesion: 0.67
Nodes (3): itemArtKey(), itemIconHTML(), trapIcons()

### Community 18 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 19 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drawCanvas()` connect `drawCanvas` to `game.js`, `renderCW`, `pick`, `runAutonomousStep`, `agentMove`, `renderAllUI`, `byId`, `hashStr`, `drawAnimal`, `drawAgentTag`, `centerOnZone`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009950248756218905 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderCW`, `pick`, `runAutonomousStep`, `agentMove`, `villageOf`, `renderAllUI`, `byId`, `prayerTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderCW` be split into smaller, more focused modules?**
  _Cohesion score 0.05664556962025316 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `renderCW`, `pick`, `runAutonomousStep`, `agentMove`, `villageOf`, `byId`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09779825908858167 - nodes in this community are weakly interconnected._