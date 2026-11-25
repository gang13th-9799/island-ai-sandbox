# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 534 nodes · 1645 edges · 24 communities (23 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9d43a5fe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- pick
- runAutonomousStep
- keyByName
- rel
- temperatureTick
- renderAllUI
- ecologyTick
- drawCanvas
- sigOf
- objsOf
- getTerrainCanvas
- renderAgentCard
- buildZoneTerrain
- drawAgentTag
- drawAnimal
- steleCanvas
- getZoneAt
- makeSoul
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 104 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 40 edges
5. `st()` - 34 edges
6. `runQuests()` - 27 edges
7. `pick()` - 27 edges
8. `experiment()` - 27 edges
9. `villageOf()` - 27 edges
10. `gainExp()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 8_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `assignJobs()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `giveSoul()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 10_

## Import Cycles
- None detected.

## Communities (24 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (147): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+139 more)

### Community 1 - "addLog"
Cohesion: 0.10
Nodes (59): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), applyAISolution(), applyWish(), askToUse() (+51 more)

### Community 2 - "pick"
Cohesion: 0.07
Nodes (51): addAIAgent(), addAnimals(), answerPrayer(), captureRealm(), clampC(), closeLobby(), crossRealm(), cycleSpeed() (+43 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.11
Nodes (46): accessibleStations(), assignGodQuests(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bestStat() (+38 more)

### Community 4 - "keyByName"
Cohesion: 0.14
Nodes (29): buildEquivalents(), canUse(), carriedEff(), consume(), depthOf(), effBonus(), effBonusSlow(), effectsTick() (+21 more)

### Community 5 - "rel"
Cohesion: 0.13
Nodes (27): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+19 more)

### Community 6 - "temperatureTick"
Cohesion: 0.13
Nodes (22): airTemp(), baseTemp(), clothWarmth(), fateChance(), feltTemp(), fixWeather(), getAdjacentZones(), giftNeeds() (+14 more)

### Community 7 - "renderAllUI"
Cohesion: 0.12
Nodes (22): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+14 more)

### Community 8 - "ecologyTick"
Cohesion: 0.21
Nodes (15): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), huntPenalty() (+7 more)

### Community 9 - "drawCanvas"
Cohesion: 0.16
Nodes (14): animalArt(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawTreeV(), drawWorldObj(), fleeStep() (+6 more)

### Community 10 - "sigOf"
Cohesion: 0.21
Nodes (13): designInvention(), effText(), findNewRecipes(), giveSoul(), hrand(), natureLaw(), proposeInvention(), react() (+5 more)

### Community 11 - "objsOf"
Cohesion: 0.24
Nodes (11): applyLayout(), hashStr(), insectsOf(), mmZoneImage(), mutVariant(), nearGatherable(), nodeReach(), objsOf() (+3 more)

### Community 12 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 13 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 14 - "buildZoneTerrain"
Cohesion: 0.38
Nodes (7): buildIsland(), buildZoneTerrain(), crossZone(), isleNoise(), landNear(), nearTo(), settleStructures()

### Community 15 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 16 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 17 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 18 - "getZoneAt"
Cohesion: 0.53
Nodes (6): drawMiniMap(), getZoneAt(), miniMapTap(), renderMiniMap(), switchZone(), travelDir()

### Community 19 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 20 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 21 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 22 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `pick`, `keyByName`, `rel`, `temperatureTick`, `renderAllUI`, `ecologyTick`, `drawCanvas`, `sigOf`, `objsOf`, `buildZoneTerrain`, `objWorldTick`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012658227848101266 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `pick`, `runAutonomousStep`, `keyByName`, `rel`, `temperatureTick`, `ecologyTick`, `sigOf`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09818819403857393 - nodes in this community are weakly interconnected._
- **Why does `st()` connect `addLog` to `game.js`, `runAutonomousStep`, `keyByName`, `rel`, `temperatureTick`, `renderAgentCard`, `buildZoneTerrain`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `pick` be split into smaller, more focused modules?**
  _Cohesion score 0.07215686274509804 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._