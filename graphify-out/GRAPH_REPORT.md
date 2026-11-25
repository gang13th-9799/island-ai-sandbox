# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 468 nodes · 1416 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9b71f457`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- drawCanvas
- buildZoneTerrain
- realmTravelTick
- keyByName
- renderAllUI
- ecologyTick
- rel
- objsOf
- drawPuppet
- newAgent
- steleCanvas
- drawHairLayer
- pupKeys
- closeSheet
- itemArtKey
- steleTarget

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 95 edges
2. `addLog()` - 46 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 35 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `experiment()` - 25 edges
8. `gainExp()` - 24 edges
9. `pick()` - 23 edges
10. `villageOf()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `runAutonomousStep()` --indirect_call--> `godQuestSteer()`  [INFERRED]
  game.js → game.js  _Bridges community 0 → community 1_
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 6_
- `loadGameState()` --indirect_call--> `ensureAgent()`  [INFERRED]
  game.js → game.js  _Bridges community 11 → community 7_
- `makeRealmState()` --indirect_call--> `syncFauna()`  [INFERRED]
  game.js → game.js  _Bridges community 3 → community 7_
- `accessibleStations()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (133): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+125 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.11
Nodes (64): accessibleStations(), addFood(), addLog(), addRel(), addTeachLog(), applyWish(), assignGodQuests(), atGoal() (+56 more)

### Community 2 - "drawCanvas"
Cohesion: 0.06
Nodes (46): animalArt(), centerOnZone(), changeZoom(), clampView(), closeAgentCard(), damageStation(), DIFF_STARS(), drawAgentTag() (+38 more)

### Community 3 - "buildZoneTerrain"
Cohesion: 0.12
Nodes (31): airTemp(), baseTemp(), buildStation(), buildZoneTerrain(), clampC(), crowdTick(), feltTemp(), findValidTile() (+23 more)

### Community 4 - "realmTravelTick"
Cohesion: 0.11
Nodes (29): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+21 more)

### Community 5 - "keyByName"
Cohesion: 0.13
Nodes (28): addOwnLog(), askToUse(), buildEquivalents(), canUse(), consume(), depthOf(), designInvention(), getTool() (+20 more)

### Community 6 - "renderAllUI"
Cohesion: 0.14
Nodes (26): agentLevel(), atStore(), bagCap(), bagCount(), bagValue(), canTradeFor(), chooseKept(), depositTick() (+18 more)

### Community 7 - "ecologyTick"
Cohesion: 0.13
Nodes (24): addAnimals(), animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick() (+16 more)

### Community 8 - "rel"
Cohesion: 0.16
Nodes (22): assignJobs(), assignQuests(), byId(), canHelp(), createQuest(), electChief(), score(), holdFoundingMeeting() (+14 more)

### Community 9 - "objsOf"
Cohesion: 0.17
Nodes (15): findNewRecipes(), hashStr(), hrand(), insectsOf(), mkObj(), natureLaw(), objsOf(), objWorldTick() (+7 more)

### Community 10 - "drawPuppet"
Cohesion: 0.19
Nodes (14): armLen(), drawAgent(), drawBow(), drawEyeArt(), drawItem(), drawMouthArt(), drawPuppet(), drawStickFigure() (+6 more)

### Community 11 - "newAgent"
Cohesion: 0.36
Nodes (8): addAIAgent(), ensureAgent(), freshStats(), godChild(), inheritTalent(), newAgent(), pickChildName(), randomTalent()

### Community 12 - "steleCanvas"
Cohesion: 0.33
Nodes (6): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg(), steleWords()

### Community 13 - "drawHairLayer"
Cohesion: 0.67
Nodes (3): drawHairLayer(), hairStyleOf(), tintedHair()

### Community 14 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `buildZoneTerrain`, `realmTravelTick`, `keyByName`, `renderAllUI`, `ecologyTick`, `rel`, `objsOf`, `drawPuppet`, `newAgent`, `steleTarget`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013986013986013986 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `runAutonomousStep` to `game.js`, `drawCanvas`, `buildZoneTerrain`, `realmTravelTick`, `keyByName`, `renderAllUI`, `ecologyTick`, `rel`, `newAgent`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.11011904761904762 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `renderAllUI` to `game.js`, `runAutonomousStep`, `drawCanvas`, `buildZoneTerrain`, `realmTravelTick`, `keyByName`, `ecologyTick`, `rel`, `drawPuppet`, `newAgent`, `itemArtKey`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06280193236714976 - nodes in this community are weakly interconnected._
- **Should `buildZoneTerrain` be split into smaller, more focused modules?**
  _Cohesion score 0.11827956989247312 - nodes in this community are weakly interconnected._