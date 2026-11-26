# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 634 nodes · 2082 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f740742d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- agentWork
- runAutonomousStep
- rel
- renderAllUI
- agentMove
- drawCanvas
- agentHunt
- propsOf
- renderAgentPop
- drawPuppet
- newAgent
- drawAnimal
- steleCanvas
- centerOnZone
- objWorldTick
- pupKeys
- closeSheet
- startSimLoop

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 59 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 33 edges
7. `villageOf()` - 32 edges
8. `agentWork()` - 31 edges
9. `pick()` - 31 edges
10. `experiment()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 7_
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 3_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 5 → community 7_

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (165): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+157 more)

### Community 1 - "agentWork"
Cohesion: 0.07
Nodes (83): accessibleStations(), addTeachLog(), agentWork(), approachOf(), atGoal(), atStore(), avail(), bagValue() (+75 more)

### Community 2 - "runAutonomousStep"
Cohesion: 0.08
Nodes (71): addFood(), addLog(), agentGather(), agentLevel(), agentsCatchUp(), agentsRealtime(), airTemp(), assignGodQuests() (+63 more)

### Community 3 - "rel"
Cohesion: 0.07
Nodes (52): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId() (+44 more)

### Community 4 - "renderAllUI"
Cohesion: 0.07
Nodes (48): advanceGame(), answerPrayer(), auraR(), captureRealm(), closeLobby(), crossRealm(), ensureHomeBasics(), expNeed() (+40 more)

### Community 5 - "agentMove"
Cohesion: 0.09
Nodes (42): agentMove(), applyLayout(), blockedSet(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC() (+34 more)

### Community 6 - "drawCanvas"
Cohesion: 0.09
Nodes (33): animalArt(), drawAgent(), drawAgentTag(), drawCanvas(), drawInsect(), drawLabel(), drawProp(), drawSized() (+25 more)

### Community 7 - "agentHunt"
Cohesion: 0.13
Nodes (27): addAnimals(), agentHunt(), animalLog(), animalPower(), applyAISolution(), applyWish(), carryTraits(), ecologyTick() (+19 more)

### Community 8 - "propsOf"
Cohesion: 0.11
Nodes (25): buildEquivalents(), campGear(), canTrip(), carryBonus(), designInvention(), drinkValue(), effText(), findNewRecipes() (+17 more)

### Community 9 - "renderAgentPop"
Cohesion: 0.10
Nodes (23): apSel(), apToggle(), closeAgentCard(), closeAgentPop(), DIFF_STARS(), getAgeStage(), itemArtKey(), itemDesc() (+15 more)

### Community 10 - "drawPuppet"
Cohesion: 0.11
Nodes (18): armLen(), clothWarmth(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet() (+10 more)

### Community 11 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg()

### Community 14 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 15 - "objWorldTick"
Cohesion: 0.67
Nodes (3): mkObj(), objWorldTick(), wobjBase()

### Community 16 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `agentWork`, `rel`, `renderAllUI`, `agentMove`, `agentHunt`, `propsOf`, `newAgent`, `objWorldTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011299435028248588 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `agentWork`, `rel`, `renderAllUI`, `agentMove`, `agentHunt`, `propsOf`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `agentWork` be split into smaller, more focused modules?**
  _Cohesion score 0.07199529826623567 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `agentWork`, `runAutonomousStep`, `rel`, `agentMove`, `agentHunt`, `propsOf`, `renderAgentPop`, `drawPuppet`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.0772635814889336 - nodes in this community are weakly interconnected._