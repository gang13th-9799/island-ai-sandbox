# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 436 nodes · 1321 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d5a95842`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- renderAllUI
- applyWish
- rel
- propsOf
- pick
- drawCanvas
- productDef
- renderAgentCard
- drawPuppet
- zoneWeather
- drawAnimal
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 91 edges
2. `addLog()` - 42 edges
3. `renderAllUI()` - 42 edges
4. `drawCanvas()` - 33 edges
5. `st()` - 31 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `gainExp()` - 22 edges
9. `villageOf()` - 22 edges
10. `rel()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 6_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.02
Nodes (118): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+110 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (80): accessibleStations(), addFood(), addLog(), addTeachLog(), agentLevel(), assignGodQuests(), atGoal(), atStore() (+72 more)

### Community 2 - "renderAllUI"
Cohesion: 0.11
Nodes (30): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), expNeed(), failCap(), gateOf() (+22 more)

### Community 3 - "applyWish"
Cohesion: 0.11
Nodes (29): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+21 more)

### Community 4 - "rel"
Cohesion: 0.13
Nodes (29): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+21 more)

### Community 5 - "propsOf"
Cohesion: 0.10
Nodes (25): buildEquivalents(), designInvention(), fateChance(), findNewRecipes(), godAutoLevel(), hashStr(), hrand(), insectsOf() (+17 more)

### Community 6 - "pick"
Cohesion: 0.15
Nodes (24): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), ensureAgent(), findValidTile(), freshStats() (+16 more)

### Community 7 - "drawCanvas"
Cohesion: 0.12
Nodes (23): animalArt(), centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawInsect(), drawProp(), drawSized() (+15 more)

### Community 8 - "productDef"
Cohesion: 0.17
Nodes (22): canUse(), consume(), depthOf(), getEquip(), getTool(), giveDivineTool(), harvestTool(), hasTool() (+14 more)

### Community 9 - "renderAgentCard"
Cohesion: 0.16
Nodes (14): closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawLabel(), getAgeStage(), mapTap(), openAgentCard(), renderAgentCard() (+6 more)

### Community 10 - "drawPuppet"
Cohesion: 0.17
Nodes (13): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawPuppet(), drawStickFigure() (+5 more)

### Community 11 - "zoneWeather"
Cohesion: 0.52
Nodes (7): airTemp(), baseTemp(), feltTemp(), fixWeather(), weatherLabel(), weatherTick(), zoneWeather()

### Community 12 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 13 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `applyWish`, `rel`, `propsOf`, `pick`, `drawCanvas`, `productDef`, `zoneWeather`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.015625 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `applyWish`, `rel`, `propsOf`, `pick`, `productDef`, `renderAgentCard`, `drawPuppet`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07974683544303797 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `renderAllUI`, `applyWish`, `rel`, `propsOf`, `pick`, `productDef`, `zoneWeather`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.11264367816091954 - nodes in this community are weakly interconnected._
- **Should `applyWish` be split into smaller, more focused modules?**
  _Cohesion score 0.10837438423645321 - nodes in this community are weakly interconnected._