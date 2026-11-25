# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 416 nodes · 1264 edges · 19 communities (18 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `09c97752`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- addLog
- productDef
- renderAllUI
- rel
- realmTravelTick
- villageOf
- drawCanvas
- propsOf
- renderAgentCard
- switchZone
- drawAnimal
- zoneWeather
- newAgent
- objsOf
- drawAgentTag
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 90 edges
2. `renderAllUI()` - 42 edges
3. `addLog()` - 41 edges
4. `st()` - 30 edges
5. `drawCanvas()` - 30 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 24 edges
8. `rel()` - 22 edges
9. `villageOf()` - 22 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `runQuests()` --calls--> `accessibleStations()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `upgradeFauna()` --calls--> `addAnimals()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 14_
- `applyAISolution()` --calls--> `renderAllUI()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (19 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (109): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, animalLogs, BACK_ITEMS, BASE_ZONES, BODY_COL (+101 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.09
Nodes (48): accessibleStations(), addAnimals(), animalPower(), applyAISolution(), applyWish(), atGoal(), bestStat(), buildStation() (+40 more)

### Community 2 - "addLog"
Cohesion: 0.11
Nodes (47): addAIAgent(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), completeQuest(), craftKnown() (+39 more)

### Community 3 - "productDef"
Cohesion: 0.16
Nodes (24): addOwnLog(), askToUse(), canUse(), consume(), depthOf(), getTool(), giveDivineTool(), harvestTool() (+16 more)

### Community 4 - "renderAllUI"
Cohesion: 0.12
Nodes (24): animalLog(), armLen(), drawAgent(), drawBow(), drawItem(), drawPuppet(), drawStickFigure(), evolveOne() (+16 more)

### Community 5 - "rel"
Cohesion: 0.15
Nodes (24): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+16 more)

### Community 6 - "realmTravelTick"
Cohesion: 0.16
Nodes (22): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), gateOf(), godTick(), inRealm() (+14 more)

### Community 7 - "villageOf"
Cohesion: 0.18
Nodes (21): agentLevel(), atStore(), avail(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept() (+13 more)

### Community 8 - "drawCanvas"
Cohesion: 0.16
Nodes (17): animalArt(), drawCanvas(), drawProp(), drawSized(), drawTreeV(), drawWorldObj(), elevOf(), getTerrainCanvas() (+9 more)

### Community 9 - "propsOf"
Cohesion: 0.17
Nodes (16): buildEquivalents(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), materialWish(), natureLaw() (+8 more)

### Community 10 - "renderAgentCard"
Cohesion: 0.25
Nodes (9): closeAgentCard(), DIFF_STARS(), mapTap(), openAgentCard(), renderAgentCard(), renderLoop(), resIcon(), tileOf() (+1 more)

### Community 11 - "switchZone"
Cohesion: 0.29
Nodes (8): centerOnZone(), changeZoom(), clampView(), getZoneAt(), renderMiniMap(), setZoom(), switchZone(), travelDir()

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 14 - "newAgent"
Cohesion: 0.43
Nodes (7): ensureAgent(), freshStats(), initFauna(), loadGameState(), newAgent(), randomTalent(), upgradeFauna()

### Community 15 - "objsOf"
Cohesion: 0.33
Nodes (6): mkObj(), objsOf(), objWorldTick(), wobjBase(), wobjPick(), wobjRng()

### Community 16 - "drawAgentTag"
Cohesion: 0.50
Nodes (5): drawAgentTag(), drawLabel(), getAgeStage(), screenOf(), statusIcon()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `productDef`, `renderAllUI`, `rel`, `realmTravelTick`, `villageOf`, `drawCanvas`, `propsOf`, `zoneWeather`, `newAgent`, `objsOf`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.01694915254237288 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `addLog`, `productDef`, `rel`, `realmTravelTick`, `villageOf`, `propsOf`, `switchZone`, `drawAgentTag`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09308510638297872 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `productDef`, `renderAllUI`, `rel`, `realmTravelTick`, `villageOf`, `propsOf`, `zoneWeather`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.11378353376503238 - nodes in this community are weakly interconnected._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.11594202898550725 - nodes in this community are weakly interconnected._