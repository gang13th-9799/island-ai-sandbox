# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 524 nodes · 1612 edges · 20 communities (18 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a80587a8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- makeRealmState
- rel
- keyByName
- renderAllUI
- applyWish
- buildZoneTerrain
- canUse
- drawCanvas
- stationInZone
- getTerrainCanvas
- drawAnimal
- drawAgentTag
- steleCanvas
- drawHairLayer
- objWorldTick
- pupKeys
- closeSheet
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 101 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 39 edges
5. `st()` - 33 edges
6. `experiment()` - 27 edges
7. `runQuests()` - 27 edges
8. `villageOf()` - 27 edges
9. `gainExp()` - 26 edges
10. `pick()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 5_
- `runAutonomousStep()` --calls--> `atGoal()`  [EXTRACTED]
  game.js → game.js  _Bridges community 0 → community 1_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 2_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_

## Import Cycles
- None detected.

## Communities (20 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (150): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, atGoal(), BACK_ITEMS (+142 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.10
Nodes (73): accessibleStations(), addLog(), addOwnLog(), addRel(), addTeachLog(), askToUse(), assignGodQuests(), avail() (+65 more)

### Community 2 - "makeRealmState"
Cohesion: 0.09
Nodes (37): addAIAgent(), addAnimals(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), ensureAgent() (+29 more)

### Community 3 - "rel"
Cohesion: 0.10
Nodes (33): assignJobs(), assignQuests(), bestHomeTier(), byId(), canHelp(), electChief(), score(), hasShelter() (+25 more)

### Community 4 - "keyByName"
Cohesion: 0.12
Nodes (30): buildEquivalents(), carriedEff(), consume(), depthOf(), designInvention(), effBonus(), effBonusSlow(), effectsTick() (+22 more)

### Community 5 - "renderAllUI"
Cohesion: 0.13
Nodes (29): addFood(), agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), buildHome(), canTradeFor() (+21 more)

### Community 6 - "applyWish"
Cohesion: 0.10
Nodes (29): animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+21 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.12
Nodes (27): applyLayout(), buildIsland(), buildStation(), buildZoneTerrain(), clampC(), closeAgentCard(), crowdTick(), DIFF_STARS() (+19 more)

### Community 8 - "canUse"
Cohesion: 0.12
Nodes (24): armLen(), canUse(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet() (+16 more)

### Community 9 - "drawCanvas"
Cohesion: 0.11
Nodes (21): animalArt(), damageStation(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawTreeV(), drawWorldObj() (+13 more)

### Community 10 - "stationInZone"
Cohesion: 0.22
Nodes (16): airTemp(), baseTemp(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), isRestShelter(), needsOf() (+8 more)

### Community 11 - "getTerrainCanvas"
Cohesion: 0.27
Nodes (10): centerOnZone(), changeZoom(), clampView(), elevOf(), getTerrainCanvas(), getTerrainCanvasFlat(), groundAt(), isoXY() (+2 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 16 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 17 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `makeRealmState`, `rel`, `keyByName`, `renderAllUI`, `applyWish`, `buildZoneTerrain`, `canUse`, `drawCanvas`, `stationInZone`, `objWorldTick`, `steleTarget`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012422360248447204 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `makeRealmState`, `rel`, `keyByName`, `renderAllUI`, `applyWish`, `buildZoneTerrain`, `drawCanvas`, `stationInZone`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.10007610350076103 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `makeRealmState`, `rel`, `keyByName`, `applyWish`, `buildZoneTerrain`, `canUse`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `makeRealmState` be split into smaller, more focused modules?**
  _Cohesion score 0.0945945945945946 - nodes in this community are weakly interconnected._
- **Should `rel` be split into smaller, more focused modules?**
  _Cohesion score 0.10037878787878787 - nodes in this community are weakly interconnected._