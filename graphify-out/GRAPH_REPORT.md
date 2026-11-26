# Graph Report - graph-src  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 626 nodes · 2044 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `169fcdea`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- st
- runAutonomousStep
- rel
- villageOf
- productDef
- buildZoneTerrain
- drawCanvas
- drawPuppet
- newAgent
- mapTap
- drawAnimal
- drawAgentTag
- steleCanvas
- pupKeys
- closeSheet
- startSimLoop
- FOOD_ITEM
- knownOuts

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 58 edges
2. `addLog()` - 54 edges
3. `renderAllUI()` - 50 edges
4. `drawCanvas()` - 48 edges
5. `st()` - 40 edges
6. `gainExp()` - 32 edges
7. `villageOf()` - 32 edges
8. `pick()` - 31 edges
9. `agentWork()` - 31 edges
10. `experiment()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `agentHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 5_
- `runAutonomousStep()` --indirect_call--> `wantsHunt()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 4_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 10_
- `addOwnLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (20 total, 4 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (163): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, AP, BACK_ITEMS (+155 more)

### Community 1 - "addLog"
Cohesion: 0.06
Nodes (66): addLog(), advanceGame(), animalLog(), answerPrayer(), auraR(), buildHut(), captureRealm(), closeLobby() (+58 more)

### Community 2 - "st"
Cohesion: 0.08
Nodes (64): addFood(), addTeachLog(), agentGather(), agentLevel(), applyWish(), approachOf(), bagCap(), bagCount() (+56 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.07
Nodes (56): accessibleStations(), addAnimals(), agentsCatchUp(), agentsRealtime(), airTemp(), animalPower(), applyAISolution(), baseTemp() (+48 more)

### Community 4 - "rel"
Cohesion: 0.08
Nodes (48): addOwnLog(), addRel(), agentStep(), askToUse(), assignJobs(), assignQuests(), bestHomeTier(), byId() (+40 more)

### Community 5 - "villageOf"
Cohesion: 0.12
Nodes (45): agentHunt(), agentMove(), agentWork(), assignGodQuests(), atGoal(), atStore(), avail(), bagValue() (+37 more)

### Community 6 - "productDef"
Cohesion: 0.09
Nodes (43): apSel(), apToggle(), buildEquivalents(), campOf(), canUse(), carriedEff(), carriedTools(), carryBonus() (+35 more)

### Community 7 - "buildZoneTerrain"
Cohesion: 0.11
Nodes (32): applyLayout(), buildHome(), buildIsland(), buildSpot(), buildStation(), buildZoneTerrain(), clampC(), crossZone() (+24 more)

### Community 8 - "drawCanvas"
Cohesion: 0.10
Nodes (30): animalArt(), centerOnZone(), changeZoom(), clampView(), drawCanvas(), drawInsect(), drawProp(), drawSized() (+22 more)

### Community 9 - "drawPuppet"
Cohesion: 0.14
Nodes (15): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+7 more)

### Community 10 - "newAgent"
Cohesion: 0.25
Nodes (11): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), initFauna(), loadGameState(), newAgent() (+3 more)

### Community 11 - "mapTap"
Cohesion: 0.20
Nodes (10): closeAgentCard(), closeAgentPop(), itemArtKey(), itemIcon(), itemIconHTML(), mapTap(), openAgentCard(), resIcon() (+2 more)

### Community 12 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 13 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 14 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 15 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `st`, `rel`, `villageOf`, `productDef`, `buildZoneTerrain`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `runAutonomousStep()` (e.g. with `agentHunt()` and `godQuestSteer()`) actually correct?**
  _`runAutonomousStep()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011428571428571429 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `st`, `runAutonomousStep`, `rel`, `villageOf`, `productDef`, `buildZoneTerrain`, `newAgent`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.05780885780885781 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `addLog` to `game.js`, `st`, `runAutonomousStep`, `rel`, `villageOf`, `productDef`, `buildZoneTerrain`, `drawPuppet`, `newAgent`, `mapTap`, `drawAgentTag`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `st` be split into smaller, more focused modules?**
  _Cohesion score 0.08283730158730158 - nodes in this community are weakly interconnected._