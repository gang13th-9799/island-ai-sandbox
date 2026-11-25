# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 598 nodes · 1933 edges · 22 communities (20 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ff5fa907`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- renderAllUI
- runAutonomousStep
- buildZoneTerrain
- villageOf
- agentStep
- agentHunt
- realmTravelTick
- drawPuppet
- drawCanvas
- agentGather
- rel
- getTerrainCanvas
- mapTap
- drawAnimal
- drawAgentTag
- steleCanvas
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 46 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 10_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 6_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 4_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_

## Import Cycles
- None detected.

## Communities (22 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (159): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+151 more)

### Community 1 - "renderAllUI"
Cohesion: 0.07
Nodes (65): addTeachLog(), agentLevel(), apSel(), apToggle(), auraR(), bagCap(), buildEquivalents(), carriedEff() (+57 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (59): accessibleStations(), addAIAgent(), addAnimals(), addLog(), addOwnLog(), addRel(), applyAISolution(), askToUse() (+51 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.07
Nodes (45): applyLayout(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), campOf(), clampC() (+37 more)

### Community 4 - "villageOf"
Cohesion: 0.12
Nodes (42): agentMove(), agentWork(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bodyHunger() (+34 more)

### Community 5 - "agentStep"
Cohesion: 0.11
Nodes (32): agentsCatchUp(), agentsRealtime(), agentStep(), airTemp(), baseTemp(), beastCheck(), bodyRealtime(), bodyTemp() (+24 more)

### Community 6 - "agentHunt"
Cohesion: 0.11
Nodes (31): agentHunt(), animalLog(), animalPower(), applyWish(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+23 more)

### Community 7 - "realmTravelTick"
Cohesion: 0.16
Nodes (25): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), initFauna() (+17 more)

### Community 8 - "drawPuppet"
Cohesion: 0.11
Nodes (21): armLen(), DIFF_STARS(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet() (+13 more)

### Community 9 - "drawCanvas"
Cohesion: 0.14
Nodes (20): animalArt(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawStele(), drawTemple(), drawTreeV() (+12 more)

### Community 10 - "agentGather"
Cohesion: 0.22
Nodes (18): addFood(), agentGather(), bagCount(), creditGather(), depositTick(), destroyObj(), gainItems(), godQuestEvent() (+10 more)

### Community 11 - "rel"
Cohesion: 0.20
Nodes (18): assignJobs(), byId(), crowdTick(), electChief(), score(), holdFoundingMeeting(), holdVillageMeeting(), homeCounts() (+10 more)

### Community 12 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 13 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 14 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 15 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 16 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 17 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 18 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 19 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `buildZoneTerrain`, `villageOf`, `agentStep`, `agentHunt`, `realmTravelTick`, `agentGather`, `rel`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011764705882352941 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `buildZoneTerrain`, `villageOf`, `agentStep`, `agentHunt`, `realmTravelTick`, `agentGather`, `rel`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.07211538461538461 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `buildZoneTerrain`, `villageOf`, `agentHunt`, `realmTravelTick`, `drawPuppet`, `agentGather`, `rel`, `mapTap`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.0847457627118644 - nodes in this community are weakly interconnected._