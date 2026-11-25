# Graph Report - graph-src  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 507 nodes · 1545 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8453e6ae`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- game.js
- runAutonomousStep
- addLog
- drawCanvas
- pick
- realmTravelTick
- rel
- objsOf
- maxHp
- ecologyTick
- drawPuppet
- steleCanvas
- pupKeys
- setZoom
- closeSheet
- itemArtKey

## God Nodes (most connected - your core abstractions)
1. `runAutonomousStep()` - 96 edges
2. `addLog()` - 49 edges
3. `renderAllUI()` - 43 edges
4. `drawCanvas()` - 39 edges
5. `st()` - 32 edges
6. `runQuests()` - 27 edges
7. `villageOf()` - 27 edges
8. `gainExp()` - 26 edges
9. `experiment()` - 25 edges
10. `pick()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `removeDead()` --indirect_call--> `outName()`  [INFERRED]
  game.js → game.js  _Bridges community 1 → community 2_
- `needsOf()` --calls--> `avail()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 8_
- `crossRealm()` --calls--> `buildEquivalents()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 5_
- `canUse()` --calls--> `ownerOf()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 6_
- `seekItem()` --calls--> `canUse()`  [EXTRACTED]
  game.js → game.js  _Bridges community 1 → community 4_

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "game.js"
Cohesion: 0.01
Nodes (140): aiAgents, aiCrisisProposals, alchemyLogs, ANIM_ART, ANIM_REL, animalLogs, BACK_ITEMS, BASE_ZONES (+132 more)

### Community 1 - "runAutonomousStep"
Cohesion: 0.07
Nodes (73): accessibleStations(), atGoal(), atStore(), avail(), bagValue(), bestStat(), buildEquivalents(), canTradeFor() (+65 more)

### Community 2 - "addLog"
Cohesion: 0.09
Nodes (54): addFood(), addLog(), addTeachLog(), agentLevel(), assignGodQuests(), bagCap(), bagCount(), buildHome() (+46 more)

### Community 3 - "drawCanvas"
Cohesion: 0.07
Nodes (44): animalArt(), centerOnZone(), clampView(), closeAgentCard(), DIFF_STARS(), drawAgentTag(), drawAnimal(), drawCanvas() (+36 more)

### Community 4 - "pick"
Cohesion: 0.11
Nodes (36): addAIAgent(), addAnimals(), applyWish(), buildStation(), buildZoneTerrain(), clampC(), ensureAgent(), findValidTile() (+28 more)

### Community 5 - "realmTravelTick"
Cohesion: 0.11
Nodes (30): answerPrayer(), captureRealm(), closeLobby(), crossRealm(), cycleSpeed(), fateChance(), gateOf(), godAutoLevel() (+22 more)

### Community 6 - "rel"
Cohesion: 0.13
Nodes (29): addOwnLog(), addRel(), askToUse(), assignJobs(), assignQuests(), byId(), canHelp(), createQuest() (+21 more)

### Community 7 - "objsOf"
Cohesion: 0.10
Nodes (26): applyLayout(), buildIsland(), drawMiniMap(), findNewRecipes(), getZoneAt(), hashStr(), hrand(), insectsOf() (+18 more)

### Community 8 - "maxHp"
Cohesion: 0.13
Nodes (24): airTemp(), baseTemp(), bestHomeTier(), clothWarmth(), feltTemp(), fixWeather(), FOOD_ITEM(), getAdjacentZones() (+16 more)

### Community 9 - "ecologyTick"
Cohesion: 0.19
Nodes (16): animalLog(), animalPower(), applyAISolution(), carryTraits(), ecologyTick(), evolveOne(), evolveTick(), extraLoot() (+8 more)

### Community 10 - "drawPuppet"
Cohesion: 0.18
Nodes (11): armLen(), drawBow(), drawEyeArt(), drawHairLayer(), drawItem(), drawMouthArt(), drawPuppet(), hairStyleOf() (+3 more)

### Community 11 - "steleCanvas"
Cohesion: 0.40
Nodes (5): carveGlyphs(), drawStele(), steleCanvas(), steleFace(), steleImg()

### Community 12 - "pupKeys"
Cohesion: 0.67
Nodes (3): pr(), pupKeys(), smooth()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runAutonomousStep()` connect `runAutonomousStep` to `game.js`, `addLog`, `drawCanvas`, `pick`, `realmTravelTick`, `rel`, `objsOf`, `maxHp`, `ecologyTick`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `game.js` be split into smaller, more focused modules?**
  _Cohesion score 0.013333333333333334 - nodes in this community are weakly interconnected._
- **Why does `addLog()` connect `addLog` to `game.js`, `runAutonomousStep`, `pick`, `realmTravelTick`, `rel`, `maxHp`, `ecologyTick`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `runAutonomousStep` be split into smaller, more focused modules?**
  _Cohesion score 0.07229832572298325 - nodes in this community are weakly interconnected._
- **Why does `renderAllUI()` connect `addLog` to `game.js`, `runAutonomousStep`, `drawCanvas`, `pick`, `realmTravelTick`, `rel`, `objsOf`, `maxHp`, `ecologyTick`, `drawPuppet`, `itemArtKey`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `addLog` be split into smaller, more focused modules?**
  _Cohesion score 0.09154437456324249 - nodes in this community are weakly interconnected._
- **Should `drawCanvas` be split into smaller, more focused modules?**
  _Cohesion score 0.06765327695560254 - nodes in this community are weakly interconnected._