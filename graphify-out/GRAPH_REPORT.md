# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 597 nodes · 1929 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15bed197`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- villageOf
- addLog
- runAutonomousStep
- experiment
- buildZoneTerrain
- realmTravelTick
- renderAllUI
- drawCanvas
- drawPuppet
- zoneWeather
- getTerrainCanvas
- mapTap
- drawAnimal
- drawAgentTag
- steleCanvas
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop
- FOOD_ITEM

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 53 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 46 edges
5. `st()` - 39 edges
6. `villageOf()` - 32 edges
7. `pick()` - 31 edges
8. `gainExp()` - 31 edges
9. `agentWork()` - 29 edges
10. `runQuests()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `ecologyTick()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `agentMove()` --calls--> `buildZoneTerrain()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `agentMove()` --calls--> `isPrey()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `agentMove()` --calls--> `pick()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (23 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (159): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+151 more)

### Community 1 - "villageOf"
Cohesion: 0.08
Nodes (68): accessibleStations(), agentMove(), agentWork(), assignGodQuests(), atGoal(), atStore(), avail(), bagValue() (+60 more)

### Community 2 - "addLog"
Cohesion: 0.07
Nodes (57): addLog(), addOwnLog(), addRel(), addTeachLog(), askToUse(), assignJobs(), assignQuests(), bestHomeTier() (+49 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.10
Nodes (55): addFood(), agentGather(), agentHunt(), agentsCatchUp(), agentsRealtime(), agentStep(), animalPower(), bagCap() (+47 more)

### Community 4 - "experiment"
Cohesion: 0.09
Nodes (47): applyWish(), apSel(), apToggle(), buildEquivalents(), campOf(), carriedEff(), carriedTools(), consume() (+39 more)

### Community 5 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (45): addAIAgent(), addAnimals(), applyLayout(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain() (+37 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.16
Nodes (25): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm() (+17 more)

### Community 7 - "renderAllUI"
Cohesion: 0.12
Nodes (25): animalLog(), applyAISolution(), auraR(), evolveOne(), evolveTick(), expNeed(), failCap(), isPrey() (+17 more)

### Community 8 - "drawCanvas"
Cohesion: 0.14
Nodes (20): animalArt(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawStele(), drawTemple(), drawTreeV() (+12 more)

### Community 9 - "drawPuppet"
Cohesion: 0.16
Nodes (16): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+8 more)

### Community 10 - "zoneWeather"
Cohesion: 0.31
Nodes (10): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), pupOutfit(), temperatureTick(), weatherLabel() (+2 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 12 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

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
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `villageOf`, `addLog`, `experiment`, `buildZoneTerrain`, `realmTravelTick`, `renderAllUI`, `zoneWeather`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011764705882352941 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `runAutonomousStep`, `experiment`, `buildZoneTerrain`, `realmTravelTick`, `renderAllUI`, `zoneWeather`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.07682177348551361 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `villageOf`, `addLog`, `runAutonomousStep`, `experiment`, `buildZoneTerrain`, `realmTravelTick`, `drawPuppet`, `mapTap`, `drawAgentTag`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.07080200501253132 - nodes in this community are weakly interconnected._