# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 520 nodes · 1587 edges · 21 communities (20 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7922cc9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- addLog
- renderAllUI
- runAutonomousStep
- keyByName
- rel
- buildZoneTerrain
- pick
- ecologyTick
- drawCanvas
- drawPuppet
- renderAgentCard
- objsOf
- drawAnimal
- drawAgentTag
- steleCanvas
- hashStr
- makeSoul
- centerOnZone
- pupKeys
- closeSheet

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 98 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 39 edges
5. `st()` - 33 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `applyAISolution()` --indirect_call--> `isPrey()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 8_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 2 → community 7_
- `addFood()` --calls--> `villageOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 3_
- `addAIAgent()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 7_
- `animalLog()` --calls--> `addLog()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_

## Import Cycles
- None detected.

## Communities (21 total, 1 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (144): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+136 more)

### Community 1 - "addLog"
Cohesion: 0.08
Nodes (67): addFood(), addLog(), addOwnLog(), addRel(), addTeachLog(), applyWish(), askToUse(), assignGodQuests() (+59 more)

### Community 2 - "renderAllUI"
Cohesion: 0.09
Nodes (39): addAnimals(), answerPrayer(), applyAISolution(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), expNeed() (+31 more)

### Community 3 - "runAutonomousStep"
Cohesion: 0.13
Nodes (36): accessibleStations(), atGoal(), atStore(), avail(), bagValue(), bestHomeTier(), bestStat(), canTradeFor() (+28 more)

### Community 4 - "keyByName"
Cohesion: 0.12
Nodes (32): buildEquivalents(), canUse(), carriedEff(), consume(), depthOf(), effBonus(), effBonusSlow(), effectsTick() (+24 more)

### Community 5 - "rel"
Cohesion: 0.12
Nodes (28): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+20 more)

### Community 6 - "buildZoneTerrain"
Cohesion: 0.15
Nodes (26): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), elevOf(), feltTemp(), findValidTile() (+18 more)

### Community 7 - "pick"
Cohesion: 0.15
Nodes (19): addAIAgent(), damageHome(), damageStation(), damageStele(), ensureAgent(), freshStats(), generateCrisisProposal(), godChild() (+11 more)

### Community 8 - "ecologyTick"
Cohesion: 0.16
Nodes (19): animalLog(), animalPower(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot(), getAdjacentZones() (+11 more)

### Community 9 - "drawCanvas"
Cohesion: 0.13
Nodes (18): animalArt(), drawCanvas(), drawInsect(), drawProp(), drawSized(), drawTreeV(), drawWorldObj(), fleeStep() (+10 more)

### Community 10 - "drawPuppet"
Cohesion: 0.12
Nodes (18): armLen(), clothWarmth(), drawAgent(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt() (+10 more)

### Community 11 - "renderAgentCard"
Cohesion: 0.19
Nodes (14): buildIsland(), closeAgentCard(), DIFF_STARS(), drawMiniMap(), getZoneAt(), isleNoise(), miniMapTap(), mmZoneImage() (+6 more)

### Community 12 - "objsOf"
Cohesion: 0.25
Nodes (9): applyLayout(), insectsOf(), mkObj(), objsOf(), objWorldTick(), rollLayout(), wobjBase(), wobjPick() (+1 more)

### Community 13 - "drawAnimal"
Cohesion: 0.36
Nodes (8): drawAnimal(), drawPart(), mutatedSprite(), mutOK(), mutVariant(), shade(), shadeCol(), tinted()

### Community 14 - "drawAgentTag"
Cohesion: 0.38
Nodes (7): drawAgentTag(), drawLabel(), drawTalks(), drawThought(), getAgeStage(), screenOf(), statusIcon()

### Community 15 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 16 - "hashStr"
Cohesion: 0.53
Nodes (6): findNewRecipes(), hashStr(), hrand(), natureLaw(), react(), world()

### Community 17 - "makeSoul"
Cohesion: 0.50
Nodes (4): agentLevel(), chooseKept(), keepCount(), makeSoul()

### Community 18 - "centerOnZone"
Cohesion: 0.50
Nodes (4): centerOnZone(), changeZoom(), clampView(), setZoom()

### Community 19 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `renderAllUI`, `keyByName`, `rel`, `buildZoneTerrain`, `pick`, `ecologyTick`, `drawCanvas`, `objsOf`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012903225806451613 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `renderAllUI`, `runAutonomousStep`, `keyByName`, `rel`, `buildZoneTerrain`, `pick`, `ecologyTick`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.0845771144278607 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `addLog`, `runAutonomousStep`, `keyByName`, `rel`, `pick`, `ecologyTick`, `drawPuppet`, `renderAgentCard`, `drawAgentTag`, `makeSoul`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `renderAllUI` be split into smaller, more focused modules?**
  _Cohesion score 0.08771929824561403 - nodes in this community are weakly interconnected._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._