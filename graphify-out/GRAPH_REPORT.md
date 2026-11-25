# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 482 nodes · 1489 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e1a9d066`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- keyByName
- pick
- renderAllUI
- realmTravelTick
- rel
- ecologyTick
- drawCanvas
- temperatureTick
- getTerrainCanvas
- drawAnimal
- steleCanvas
- mapTap
- makeSoul
- drawHairLayer
- pupKeys
- closeSheet
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 35 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `insectTick()` --calls--> `addFood()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (128): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+120 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.10
Nodes (66): addFood(), addLog(), addTeachLog(), applyWish(), assignGodQuests(), atGoal(), atStore(), avail() (+58 more)

### Community 2 - "keyByName"
Cohesion: 0.09
Nodes (44): buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), findNewRecipes(), getTool(), giveDivineTool() (+36 more)

### Community 3 - "pick"
Cohesion: 0.10
Nodes (36): addAIAgent(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), damageHome(), damageStation(), damageStele() (+28 more)

### Community 4 - "renderAllUI"
Cohesion: 0.08
Nodes (35): accessibleStations(), applyAISolution(), armLen(), computeNeeds(), DIFF_STARS(), drawAgent(), drawBow(), drawEyeArt() (+27 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.11
Nodes (30): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+22 more)

### Community 6 - "rel"
Cohesion: 0.13
Nodes (28): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+20 more)

### Community 7 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+16 more)

### Community 8 - "drawCanvas"
Cohesion: 0.13
Nodes (19): animalArt(), drawAgentTag(), drawCanvas(), drawInsect(), drawLabel(), drawProp(), drawSized(), drawThought() (+11 more)

### Community 9 - "temperatureTick"
Cohesion: 0.18
Nodes (18): airTemp(), baseTemp(), bestHomeTier(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), hasShelter() (+10 more)

### Community 10 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 11 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "mapTap"
Cohesion: 0.33
Nodes (6): closeAgentCard(), mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 14 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 15 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `keyByName`, `pick`, `renderAllUI`, `realmTravelTick`, `rel`, `ecologyTick`, `drawCanvas`, `temperatureTick`, `steleTarget`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.014492753623188406 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `keyByName`, `pick`, `renderAllUI`, `realmTravelTick`, `rel`, `ecologyTick`, `temperatureTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.09976689976689977 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `keyByName`, `pick`, `realmTravelTick`, `rel`, `ecologyTick`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `keyByName` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `pick` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._