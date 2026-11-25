# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 606 nodes · 1958 edges · 24 communities (21 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bc4195b7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- villageOf
- rel
- buildZoneTerrain
- runAutonomousStep
- drawCanvas
- agentHunt
- realmTravelTick
- pick
- renderAllUI
- drawPuppet
- put
- mapTap
- drawAnimal
- drawAgentTag
- makeSoul
- steleCanvas
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
7. `gainExp()` - 31 edges
8. `pick()` - 31 edges
9. `agentWork()` - 29 edges
10. `experiment()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 12_
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 4 → community 7_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 7_

## Import Cycles
- None detected.

## Communities (24 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (160): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+152 more)

### Community 1 - "addLog"
Cohesion: 0.08
Nodes (75): addFood(), addLog(), addTeachLog(), agentGather(), applyWish(), assignGodQuests(), bodyStamina(), buildEquivalents() (+67 more)

### Community 2 - "villageOf"
Cohesion: 0.09
Nodes (53): accessibleStations(), agentMove(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue() (+45 more)

### Community 3 - "rel"
Cohesion: 0.10
Nodes (36): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp() (+28 more)

### Community 4 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (33): applyLayout(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+25 more)

### Community 5 - "runAutonomousStep"
Cohesion: 0.14
Nodes (30): agentsCatchUp(), agentsRealtime(), airTemp(), baseTemp(), beastCheck(), bestStat(), bodyRealtime(), bodyTemp() (+22 more)

### Community 6 - "drawCanvas"
Cohesion: 0.11
Nodes (28): animalArt(), centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawInsect(), drawProp(), drawSized() (+20 more)

### Community 7 - "agentHunt"
Cohesion: 0.13
Nodes (27): addAnimals(), agentHunt(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne() (+19 more)

### Community 8 - "realmTravelTick"
Cohesion: 0.16
Nodes (25): advanceGame(), answerPrayer(), captureRealm(), closeLobby(), crossRealm(), gateOf(), godTick(), inRealm() (+17 more)

### Community 9 - "pick"
Cohesion: 0.12
Nodes (24): addAIAgent(), damageHome(), damageStation(), damageStele(), ensureAgent(), fateChance(), freshStats(), generateCrisisProposal() (+16 more)

### Community 10 - "renderAllUI"
Cohesion: 0.11
Nodes (23): auraR(), campOf(), carriedTools(), expNeed(), findNewRecipes(), giveDivineTool(), hrand(), knowersOf() (+15 more)

### Community 11 - "drawPuppet"
Cohesion: 0.13
Nodes (19): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+11 more)

### Community 12 - "put"
Cohesion: 0.18
Nodes (17): apSel(), apToggle(), bagCap(), bagCount(), closeAgentCard(), closeAgentPop(), depositTick(), DIFF_STARS() (+9 more)

### Community 13 - "mapTap"
Cohesion: 0.25
Nodes (8): itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon(), tileOf(), worldOf()

### Community 14 - "drawAnimal"
Cohesion: 0.43
Nodes (7): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), shade(), shadeCol(), tinted()

### Community 15 - "drawAgentTag"
Cohesion: 0.47
Nodes (6): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), screenOf(), statusIcon()

### Community 16 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 17 - "steleCanvas"
Cohesion: 0.50
Nodes (4): carveGlyphs(), steleCanvas(), steleFace(), steleImg()

### Community 18 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 19 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 20 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `villageOf`, `rel`, `buildZoneTerrain`, `agentHunt`, `realmTravelTick`, `pick`, `renderAllUI`, `put`, `objWorldTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011627906976744186 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `villageOf`, `rel`, `buildZoneTerrain`, `runAutonomousStep`, `agentHunt`, `realmTravelTick`, `pick`, `renderAllUI`, `put`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `villageOf`, `rel`, `buildZoneTerrain`, `runAutonomousStep`, `agentHunt`, `realmTravelTick`, `pick`, `drawPuppet`, `put`, `mapTap`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `villageOf` be split into smaller, more focused modules?**
  _Cohesion score 0.09288824383164006 - nodes in this community are weakly interconnected._