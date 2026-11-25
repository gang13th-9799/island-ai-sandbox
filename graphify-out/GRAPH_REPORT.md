# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 489 nodes · 1513 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a2be1832`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- keyByName
- renderAllUI
- buildZoneTerrain
- realmTravelTick
- drawCanvas
- applyWish
- temperatureTick
- drawPuppet
- getTerrainCanvas
- drawAnimal
- steleCanvas
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet
- itemArtKey

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 37 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 3_
- `zoneAppeal()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (130): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+122 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.08
Nodes (75): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), assignGodQuests(), assignQuests(), atGoal() (+67 more)

### Community 2 - "keyByName"
Cohesion: 0.09
Nodes (47): addOwnLog(), askToUse(), atStore(), avail(), bagValue(), buildEquivalents(), canTradeFor(), canUse() (+39 more)

### Community 3 - "renderAllUI"
Cohesion: 0.10
Nodes (41): agentLevel(), assignJobs(), bagCap(), bagCount(), bestHomeTier(), byId(), chooseKept(), crowdTick() (+33 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.08
Nodes (40): addAIAgent(), buildHome(), buildStation(), buildZoneTerrain(), clampC(), closeAgentCard(), drawMiniMap(), ensureAgent() (+32 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.12
Nodes (28): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+20 more)

### Community 6 - "drawCanvas"
Cohesion: 0.09
Nodes (27): animalArt(), damageStation(), drawAgentTag(), drawCanvas(), drawInsect(), drawLabel(), drawProp(), drawSized() (+19 more)

### Community 7 - "applyWish"
Cohesion: 0.13
Nodes (25): addAnimals(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne() (+17 more)

### Community 8 - "temperatureTick"
Cohesion: 0.22
Nodes (15): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), isRestShelter(), needsOf() (+7 more)

### Community 9 - "drawPuppet"
Cohesion: 0.19
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+6 more)

### Community 10 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 11 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 14 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `realmTravelTick`, `drawCanvas`, `applyWish`, `temperatureTick`, `drawPuppet`, `objWorldTick`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.014285714285714285 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `keyByName`, `renderAllUI`, `buildZoneTerrain`, `realmTravelTick`, `drawCanvas`, `applyWish`, `temperatureTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.08360360360360361 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `keyByName`, `buildZoneTerrain`, `realmTravelTick`, `drawCanvas`, `applyWish`, `drawPuppet`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `keyByName` be split into smaller, more focused modules?**
  _Cohesion score 0.08880666049953746 - nodes in this community are weakly interconnected._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.09634146341463415 - nodes in this community are weakly interconnected._