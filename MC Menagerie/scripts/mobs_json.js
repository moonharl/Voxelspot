const totalcarnagelist = [
  {
    "namespace": "raigen",
    "name": "Undead Coral",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 3"
		],
		"variants": 5,
    "desc": "They'll turn into healthy coral blocks when interacted with bone meal underwater. They turn their respective Coral blocks into Dead Coral blocks around them between 10-15 seconds.",
    "weaknesses": [
      "Bone Meal (underwater)"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager"
		],
    "spawn": [
			"⌂ Ocean, spawns in groups of 2 to 4.",
			"⌂ River, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Dead Coral Lump", "amount": "1-4" },
      { "item": "Dead Coral Block (of color)", "amount": "0-2" },
      { "item": "Dead Coral Fan (of color)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Spin-jack",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 18,
    "desc": "Drops splinters when interacted using any vanilla axes or within the add-on. This also removes their bark, it regrows back between 90-120 seconds (1 minute and 30 seconds to 2 minutes). Feed it their respective planks to regrow its bark back instantly, it'll eat any planks regardless. Damage dealt from vanilla axes or within the add-on is 2 times greater. Nether variants are immune to fire.",
    "weaknesses": [
      "Fire (non-nether variants)",
      "Axes"
    ],
    "immunities": [
      "Fire (nether variants)"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Forest, can also spawn in Nether forests."
		],
    "loot": [
      { "item": "Snapped Branch", "amount": "0-2" },
      { "item": "Wooden Splinter (use axe)", "amount": "0-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Murmur",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 4 - Restrained state",
			"⚔ 9 - Unrestrained state"
		],
		"variants": 2,
    "desc": "Has a 50/50 chance to break restraints and use 2 arms when damaged; increases their damage.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Iron Nugget", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lost Hunter",
    "health": [
			"♡ 20"
		],
    "damage": [
			"⚔ 6 - Normal",
			"⚔ 12 - At random times"
		],
		"variants": 1,
    "desc": "Has a random chance for a sudden burst of speed and dealing twice the damage.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Jungle, bamboo jungles included.",
			"⌂ Savanna"
		],
    "loot": [
      { "item": "Leather", "amount": "1-3" },
      { "item": "Bone", "amount": "0-2" },
      { "item": "Lost Sickle", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Block of Flesh",
    "health": [
			"♡ 10 - Small",
			"♡ 20 - Large"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 5 - Large"
		],
		"variants": 2,
    "desc": "Stationary entity. Splits into 4 pieces when killed. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Raw Tender Gut", "amount": "1-2" },
      { "item": "Cooked Tender Gut (death by fire)", "amount": "1-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rupture Bug",
    "health": [
			"♡ 5 - Baby",
			"♡ 16 - Adult"
		],
    "damage": [
			"⚔ 1 - Baby",
			"⚔ 6 - Adult",
			"⚔ 30 - AOE attack (adult)"
		],
		"variants": 2,
    "desc": "Hunts for redstone related blocks; babies eat redstone dust and adults eat observers, targets, redstone lamps, etc. Babies grow to adults between 30-60 seconds. Adults have a 1/4 chance every time it gets hit to release an AOE attack. Adults lay eggs between 100-150 seconds (1 minute and 40 seconds to 2 minutes and 30 seconds). Eggs hatch between 30-90 seconds (30 seconds to 1 minute and 30 seconds). Eggs can either hatch or break when damaged enough.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Monster, any biome with the 'monster' tag. spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Redstone Scute", "amount": "1-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Whisper",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 3"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Drops a skeleton skull when interacted using a bucket of water and instantly kills them. Instanty dies underwater.",
    "weaknesses": [
			"Water"
		],
    "immunities": [
			"Fire"
		],
    "target": [
			"⊕ Player",
			"⊕ Iron Golem",
			"⊕ Wandering Trader",
			"⊕ Villager (adult)"
		],
    "spawn": [
			"⌂ Soulsand Valley"
		],
    "loot": [
      { "item": "Skeleton Head (use water bucket)", "amount": "1" },
      { "item": "Skeleton Head", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rampage",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 2 - Basic (normal)",
			"⚔ 18 - Explosive attack (normal)",
			"⚔ 12 - AOE Explosive attack (normal)",
			"⚔ 24 - Blast attack (normal)",
			"⚔ 4 - Basic (soul)",
			"⚔ 36 - Explosive attack (soul)",
			"⚔ 24 - AOE Explosive attack (soul)",
			"⚔ 48 - Blast attack (soul)"
		],
		"variants": 2,
    "desc": "Takes heavy damage from water and rain. Constantly enhances itself; all attacks are AOE in enhanced state and knockback resistance is increased. Stepping on soul sand or soul soil or gaining resistance creates a soul version; damage is doubled and resistance is gained.",
    "weaknesses": [
			"Water"
		],
    "immunities": [
			"Fire"
		],
    "target": [
			"⊕ Non-terraflare"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Volcanic Carapace", "amount": "4-7" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Pyrodactyl",
    "health": [
			"♡ 50"
		],
    "damage": [
			"⚔ 8 - Normal attack",
			"⚔ 16 - Soul attack"
		],
		"variants": 2,
    "desc": "Only flies when hunting. Takes heavy damage in water and rain. Sets entities on fire around it. Entering the Soul Sand Valley creates a soul version; damage is doubled and uses soul fire instead.",
    "weaknesses": [
			"Water"
		],
    "immunities": [
			"Fire"
		],
    "target": [
			"⊕ Non-terraflare"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Volcanic Carapace", "amount": "0-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Discarded Sword",
    "health": [
			"♡ 500 (250 per phase)"
		],
    "damage": [
			"⚔ 6 - Normal",
			"⚔ 12 At random",
			"⚔ 8 - Normal (enraged)",
			"⚔ 16 At random (enraged)"
		],
		"variants": 2,
    "desc": "Has 2 phases; second phase is an enhanced version where it can summon lightning bolts. Kites when attacking.",
    "weaknesses": [],
    "immunities": [
      "Explosions",
      "Fall",
      "Lightning",
      "Magic",
      "Suffocation",
      "Wither"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Plains, can be spawned by breaking or taking the sword from the Discarded Sword in Stone."
		],
    "loot": [
      { "item": "Discarded Sword (after phase 2)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lava Cube",
    "health": [
			"♡ 16 - Small",
			"♡ 32 - Large"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 5 - Large"
		],
		"variants": 1,
    "desc": "They move like slimes. Trails behind fire. Takes heavy damage from water and rain. Converts into obsidian when submerged underwater or dying from being on water or rain; big ones convert into a 2⌂2 obsidian structure and small ones convert into a single block. Interact using a bucket to obtain a bucket of lava. Big ones convert into a small version when interacted with a bucket while small ones are scooped up. Floats on lava.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Projectiles",
      "Thorns"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Lava Lakes, spawns only on top of lava."
		],
    "loot": [
      { "item": "Lava Bucket (use bucket)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Soot-hugger",
    "health": [
			"♡ 60 - Normal",
			"♡ 65 - Large",
			"♡ 70 - Larger",
			"♡ 75 - Largest"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 6 - Large",
			"⚔ 8 - Larger",
			"⚔ 10 - Largest"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 4-10 and health ranges between 60-75. Attacks inflict slowness; duration depends on size, ranges between 5-20 seconds. Passively inflicts slowness nearby; duration is fixed at 20 seconds.",
    "weaknesses": [],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Biocarbon (normal)", "amount": "0-3" },
      { "item": "Biocarbon (large)", "amount": "1-4" },
      { "item": "Biocarbon (larger)", "amount": "2-5" },
      { "item": "Biocarbon (largest)", "amount": "3-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Jiangshi",
    "health": [
			"♡ 100"
		],
    "damage": [
			"⚔ 3"
		],
		"variants": 1,
    "desc": "They move like slimes. Heals when attacking. Burns in daylight. Damage dealt from vanilla wooden sword and similar types within the add-on is 1000 times greater.",
    "weaknesses": [
      "Daylight",
      "Wooden Sword",
      "Spiky Wooden Sword",
      "Splinter Bat"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager"
		],
    "spawn": [
			"⌂ Bamboo Jungle"
		],
    "loot": [
      { "item": "Undead Fang", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gastric Sprout",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 3 - Bleached",
			"⚔ 4 - Ranged"
		],
		"variants": 2,
    "desc": "Takes heavy damage from fire and lava. Ranged by default and melee when neutralized. It loses the ability to use ranged attacks when interacted using a glass bottle of water and obtain a Potion of Poison. Recharges poison again after 40-120 seconds (40 seconds to 2 minutes). Feed it bone meal, undead fang, rotten porkchop, rotten chicken, rotten beef, rotten flesh, spider eye, or pufferfish to speed up the recharge process.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fire (when refueling)",
      "Attack (when refueling)",
      "Projectiles (when refueling)",
      "Magic (when refueling)"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Jungle, bamboo jungles included.",
			"⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Potion of Poison (use water bottle)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Spectre-cast",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 1,
    "desc": "Creates a barrier before combat, damaging the barrier will create identical clones. Clones last between 60-120 seconds (1 minute to 2 minutes). Clones also have the barrier but have a 50/50 chance of either splitting or dying. Killing the original doesn't kill all the clones.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Raids, may take a Vindicator's place."
		],
    "loot": [
      { "item": "Emerald", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Redstone Rusher",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 8 - Normal",
			"⚔ 16 - Rushing"
		],
		"variants": 2,
    "desc": "Immune to fire. Takes heavy damage from water and rain. Damage dealt from vanilla pickaxes or within the add-on is 2 times greater. Attacks inflict slowness; duration depends on health. Stats are increased when health is and below half; movement and knockback resistance are increased by 90%, damage is 2 times greater and, inflicted slowness duration is 5 times greater.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player (holding a pickaxe)"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10."
		],
    "loot": [
      { "item": "Redstone Dust", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Orbiter",
    "health": [
			"♡ 120"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 1,
    "desc": "Immune to fire. Takes heavy damage from water and rain. Damage dealt from vanilla pickaxes or within the add-on is 2 times greater. Attacks inflict slowness; duration depends on health. Stats are increased when health is and below half; movement and knockback resistance are increased by 90%, damage is 2 times greater and, inflicted slowness duration is 5 times greater.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Orbiter"
		],
    "spawn": [
			"⌂ Mountain, spawns on an Orbiter's Post."
		],
    "loot": [
      { "item": "Solar Jewel", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Crooked",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava. Entering swamps increases its speed by 90%.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Crooked Flesh", "amount": "0-3" },
      { "item": "Mud", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Living Mercury",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 8 - At random times"
		],
		"variants": 1,
    "desc": "Immune to fire. Takes heavy damage from water and rain. Attacks are delayed. Passively inflicts fatal poison and weakness nearby; duration is fixed at 3 seconds for both effects, fatal poison is amplified by 3 times, and weakness is amplified by 30 times.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Living Mercury"
		],
    "spawn": [
			"⌂ Basalt Deltas"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Obsidian Disaster",
    "health": [
			"♡ 750 (normal)",
			"♡ 3000 (glowing)"
		],
    "damage": [
			"⚔ 5 - Basic (normal)",
			"⚔ 24 - Knock (normal)",
			"⚔ 32 - Punch (normal)",
			"⚔ 48 - Kick (normal)",
			"⚔ 48 - Slam (normal)",
			"⚔ 8 - Roar (normal)",
			"⚔ 10 - Basic (glowing)",
			"⚔ 96 - Knock (glowing)",
			"⚔ 104 - Punch (glowing)",
			"⚔ 120 - Kick (glowing)",
			"⚔ 192 - Slam (glowing)",
			"⚔ 32 - Roar (glowing)"
		],
		"variants": 2,
    "desc": "Heals from fire. Attacks are modular. Strategic measures are required; contact with lava causes it to upgrade to a glowing variant. Stats are increased when it upgrades to the glowing variant; attack is 2 times greater, knockback resistance is increased by 50%, and health as well as scale are 4 times greater.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Living Mercury"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Obsidian (Normal)", "amount": "5-8" },
      { "item": "Diamond (Normal)", "amount": "0-5" },
      { "item": "Obsidian (Glowing)", "amount": "20-32" },
      { "item": "Diamond (Glowing)", "amount": "5-20" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ash Walker",
    "health": [
			"♡ 28 - Small",
			"♡ 32 - Medium",
			"♡ 36 - Large",
			"♡ 40 - Larger"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 3 - Medium",
			"⚔ 4 - Large",
			"⚔ 5 - Larger"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 2-5 and health ranges between 28-40. Attacks inflict blindness; duration depends on size, ranges between 2-16 seconds. Can climb walls. Alerts other monsters when hurt.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Undead",
			"⊕ Terraflare"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 3 to 5."
		],
    "loot": [
      { "item": "Blinding Filth", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Coldcutter",
    "health": [
			"♡ 20"
		],
    "damage": [
			"⚔ 3 - Normal",
			"⚔ 6 - At random times"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Has a random chance to deal twice the damage. Attacks inflict slowness for 5 seconds. Entering cold biomes increases its speed by 50%. Attack speed is 2 times faster. Can break doors.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Ice Spikes", "⌂ Ice Plains",
			"⌂ Mountains",
			"⌂ Frozen Ocean"
		],
    "loot": [
      { "item": "Snowball", "amount": "0-2" },
      { "item": "Bone", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Vile Rodent",
    "health": [
			"♡ 8 - Small",
			"♡ 12 - Medium",
			"♡ 20 - Large"
		],
    "damage": [
			"⚔ 1 - Small",
			"⚔ 3 - Medium",
			"⚔ 4 - Large"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 1-4 and health ranges between 8-20. Will hunt for storage blocks; Includes Trapped Chest, Chest, Shulker Box, and Barrel. Can collect items in their inventory; inventory space depends on size, ranges between 9-27 slots.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Vile Rodents"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 2 to 5.",
			"⌂ Underground, spawns between -50 to -20."
		],
    "loot": [
      { "item": "Rodent Hide (small)", "amount": "0-4" },
      { "item": "Rodent Hide (medium)", "amount": "1-5" },
      { "item": "Rodent Hide (large)", "amount": "1-7" },
      { "item": "Gold Nugget (small)", "amount": "0-2" },
      { "item": "Gold Nugget (medium)", "amount": "0-4" },
      { "item": "Gold Nugget (large)", "amount": "0-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bitterwhip",
    "health": [
			"♡ 40 - Normal",
			"♡ 55 - Large",
			"♡ 70 - Larger",
			"♡ 85 - Largest"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 8 - Large",
			"⚔ 12 - Larger",
			"⚔ 16 - Largest"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 4-16, and health ranges between 40-75. Attacks inflict mining fatigue; duration depends on size, ranges between 10-40 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Bitterwhip"
		],
    "spawn": [
			"⌂ Warped Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Cerulean Scarlet", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Canker",
    "health": [
			"♡ 5 - Baby",
			"♡ 10 - Adult"
		],
    "damage": [
			"⚔ 2 - Baby",
			"⚔ 5 - Adult"
		],
		"variants": 32,
    "desc": "Small ones have a 1/4 chance each attack to grow big. Big ones have a 1/5 chance each attack to spawn a small one. Small one's attack speed is 2 times faster.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Canker"
		],
    "spawn": [
			"⌂ Warped Forest, spawns in groups of 2 to 5.",
			"⌂ Crimson Forest, spawns in groups of 2 to 5."
		],
    "loot": [
      { "item": "Canker Shell (of color)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Melon-head",
    "health": [
			"♡ 12"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 2,
    "desc": "Has a 3/10 chance to change into a glistering variant if fed using gold nuggets; the loot changes respectively. Damage dealt from vanilla axes or within the add-on is 2 times greater.",
    "weaknesses": [
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Jungle, bamboo jungle included. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Melon Seeds (normal)", "amount": "2-6" },
      { "item": "Melon Slice (normal)", "amount": "3-7" },
      { "item": "Gold Nugget (glistering)", "amount": "2-6" },
      { "item": "Glistering Melon Slice (glistering)", "amount": "3-7" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rags",
    "health": [
			"♡ 10 - Default",
			"♡ 20 - Iron-threaded",
			"♡ 15 - Gold-threaded",
			"♡ 50 - Netherite-threaded",
			"♡ 200 - Durasteel-threaded",
			"♡ 46 - Wrathen metal-threaded",
			"♡ 46 - Pruthox-threaded",
			"♡ 46 - Bloodiron-threaded",
			"♡ 30 - Aceroid-threaded"
		],
    "damage": [
			"⚔ 2 - Default",
			"⚔ 5 - Iron-threaded",
			"⚔ 3 - Gold-threaded",
			"⚔ 8 - Netherite-threaded",
			"⚔ 5 - Durasteel-threaded",
			"⚔ 24 - Wrathen metal-threaded",
			"⚔ 6 - Pruthox-threaded",
			"⚔ 6 - Bloodiron-threaded",
			"⚔ 4 - Aceroid-threaded"
		],
		"variants": 9,
    "desc": "Tameable using a Tailor's Needle. Spawning it using an item will be spawned as an ally. Its item form can be upgraded using metal threads; Each thread has a different effect for an allied Rags. Tamed Rags will convert back into an item after death or when interacted with.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player (untamed)",
			"⊕ Non-Player (tamed)"
		],
    "spawn": [
			"⌂ Mega Taiga, spawns below it too."
		],
    "loot": [
      { "item": "Little Rags (use tailor's needle)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Tall Mimic",
    "health": [
			"♡ 80 - Chest",
			"♡ 140 - Ender Chest",
			"♡ 120 - Shulker Box"
		],
    "damage": [
			"⚔ 12 - Swing",
			"⚔ 30 - Bite",
			"⚔ 40 - Slam"
		],
		"variants": 20,
    "desc": "Types vary; health depends on variation group. Chests have 80 health, Ender Chests have 140 health, and Shulker Boxes have 120 health. Stationary by default; requires human interaction before action. Will return to its stationary state after 10-25 seconds. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Projectiles",
      "Wither",
      "Magic",
      "Fire"
    ],
    "target": [
			"⊕ Non-Tall Mimic"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10."
		],
    "loot": [
      { "item": "Gold Ingot", "amount": "0-2" },
      { "item": "Gold Nugget", "amount": "1-3" },
      { "item": "Iron Nugget", "amount": "0-6" },
      { "item": "Diamond", "amount": "0-2" },
      { "item": "Enchanted Golden Apple", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Solid Phlegm",
    "health": [
			"♡ 10 - Small",
			"♡ 20 - Large",
			"♡ 40 - Larger",
			"♡ 80 - Largest"
		],
    "damage": [
			"⚔ 1 - Small",
			"⚔ 3 - Large",
			"⚔ 6 - Larger",
			"⚔ 12 - Largest"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 1-12 and health ranges between 10-80. Attacks inflict slowness; duration depends on size, ranges between 3-12. Smallest size inflicts none. Splits into equal pieces when killed.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Slime Ball (small)", "amount": "0-1" },
      { "item": "Slime Ball (large)", "amount": "1-3" },
      { "item": "Slime Ball (larger)", "amount": "3-8" },
      { "item": "Slime Ball (largest)", "amount": "8-12" },
      { "item": "Slime Block (larger)", "amount": "0-2" },
      { "item": "Slime Block (largest)", "amount": "0-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Runimon",
    "health": [
			"♡ 500 - Imprisoned",
			"♡ 1000 - Unbound"
		],
    "damage": [
			"⚔ 12 - Shockwave (imprisoned)",
			"⚔ 4 - Default (unbound)",
			"⚔ 12 - Push",
			"⚔ 24 - Swing",
			"⚔ 40 - Strike"
		],
		"variants": 2,
    "desc": "Has 2 phases; 1st phase is stationary and 2nd phase is mobile. Strategic measures are required; the healers that surround the monster needs to be destroyed first. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Attack (blocking)",
      "Magic (blocking)",
      "Projectiles (blocking)",
      "Explosions (blocking)"
    ],
    "target": [
			"⊕ Non-Runimon"
		],
    "spawn": [
			"⌂ Underground, spawns inside a Runimon Prison."
		],
    "loot": [
      { "item": "Apathite", "amount": "1" },
      { "item": "Sword of Apathy", "amount": "1" },
      { "item": "Languid Shield", "amount": "1" },
      { "item": "Cuspenite", "amount": "2-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Tusoch",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 2 - Thorns"
		],
		"variants": 17,
    "desc": "Can be sheared for their spiky blossoms. Causes AOE damage when hurt. Passively inflicts damage nearby. Damage dealt from vanilla axes or within the add-on is 2 times greater.",
    "weaknesses": [
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Ent"
		],
    "spawn": [
			"⌂ Desert, spawns in groups of 1 to 3.",
			"⌂ Mesa, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Lethal Thorn", "amount": "1-3" },
      { "item": "Spiky Petal (of color)", "amount": "0-2" },
      { "item": "Spiky Blossom (use shears)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Jade Bruiser",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 8 - Thrust",
			"⚔ 12 - Toss",
			"⚔ 16 - Slam"
		],
		"variants": 1,
    "desc": "Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Can break doors. Resistant to knockback. Immune to fire.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Jade Bruiser"
		],
    "spawn": [
			"⌂ Mega Taiga, spawns in a Jade Stepwell."
		],
    "loot": [
      { "item": "Jade", "amount": "0-2" },
      { "item": "Jade Gauntlet", "amount": "0-1" },
      { "item": "False Star", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ocula",
    "health": [
			"♡ 5 - Small",
			"♡ 10 - Large"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 4 - Large"
		],
		"variants": 17,
    "desc": "Takes heavy damage from fire, lava, water, and rain. Sizes vary; damage ranges between 2-4 and heath ranges between 5-10. Burns in daylight.",
    "weaknesses": [
      "Daylight",
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 3.",
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-3" },
      { "item": "Ocule Tear (normal)", "amount": "0-2" },
      { "item": "Bitter Ocule Tear (bitter end)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Slit-streak",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Gains 1 second of invisiblity after attacking. Attacks inflict slowness for 5 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Roofed Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Midnight Flesh", "amount": "0-3" },
      { "item": "Sliting Edge", "amount": "0-1" },
      { "item": "Leather", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bad-apple",
    "health": [
			"♡ 10 - Red",
			"♡ 20 - Golden",
			"♡ 80 - Enchanted"
		],
    "damage": [
			"⚔ 3 - Red",
			"⚔ 5 - Golden",
			"⚔ 16 - Enchanted"
		],
		"variants": 3,
    "desc": "Types vary; attributes depend on variation. Apple is 10 health and 3 damage, Golden Apple is 20 health and 5 damage, Enchanted Golden Apple is 80 health, 16 damage, immune to fire, and resistant to knockback. Drops their respective apples and leather when interacted using shears.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire (enchanted)"
    ],
    "target": [
			"⊕ Player",
			"⊕ Iron Golem",
			"⊕ Villager (adult)"
		],
    "spawn": [
			"⌂ Roofed Forest, spawns in groups of 2 to 4.",
			"⌂ Jungle, bamboo jungles excluded."
		],
    "loot": [
      { "item": "Apple (of type, use shears)", "amount": "1" },
      { "item": "Leather (use shears)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gintoro",
    "health": [
			"♡ 120"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 18 - Running",
			"⚔ 3 - AOE",
			"⚔ 4 - Knock"
		],
		"variants": 1,
    "desc": "Immune to fire, magic. Immune to knockback and everything during angered state. Attacks are AOE; has a random chance for an angered state, knocking up targets. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Silverfish",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Gold Nugget", "amount": "4-16" },
      { "item": "Gold Horn", "amount": "0-2" },
      { "item": "Guillotine", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shivers",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 4 - Melee",
			"⚔ 2 - Ranged"
		],
		"variants": 1,
    "desc": "Immune to freezing. Takes heavy damage from fire and lava. Melee by default and ranged when freezing. Has a random chance for a freezing state, engulfing nearby targets in powder snow. Trails behind snow.",
    "weaknesses": [
      "Hot Biomes"
    ],
    "immunities": [
      "Freezing"
    ],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Ice Plains", "⌂ Mountains",
			"⌂ Frozen Ocean"
		],
    "loot": [
      { "item": "Snowball", "amount": "0-2" },
      { "item": "Rotten Flesh", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Freon",
    "health": [
			"♡ 36"
		],
    "damage": [
			"⚔ 6 - Melee",
			"⚔ 2 - Ranged"
		],
		"variants": 1,
    "desc": "Takes heavy damage from warm biomes, lava, fire, water, and rain. Ranged by default. Passively inflicts slowness 3 for 3 seconds.",
    "weaknesses": [
      "Hot Biomes"
    ],
    "immunities": [
      "Fall",
      "Freezing"
    ],
    "target": [
			"⊕ Non-Freon"
		],
    "spawn": [
			"⌂ Ice Plains", "⌂ Mountains",
			"⌂ Frozen Ocean"
		],
    "loot": [
      { "item": "Ice", "amount": "0-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cold-stone",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 1"
		],
		"variants": 1,
    "desc": "Immune to freezing. Takes heavy damage from warm biomes, lava, fire, water, and rain. Stationary by default; requires target presence before action. Attacks inflict slowness for 15 seconds.",
    "weaknesses": [
      "Hot Biomes"
    ],
    "immunities": [
      "Freezing"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Ice Plains", "⌂ Mountains",
			"⌂ Frozen Ocean"
		],
    "loot": [
      { "item": "ice", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Polar Tyrant",
    "health": [
			"♡ 400 - Phase 1",
			"♡ 600 - Phase 2"
		],
    "damage": [
			"⚔ 8 - Basic (phase 1)",
			"⚔ 24 - AOE (phase 1)",
			"⚔ 16 - Basic (phase 2)",
			"⚔ 32 - Swing (phase 2)",
			"⚔ 48 - Thrust (phase 2)",
			"⚔ 16 - Stomp (phase 2)",
			"⚔ 32 - Slam (phase 2)",
			"⚔ 64 - Burst (phase 2)",
			"⚔ 10 - Storm (phase 2)"
		],
		"variants": 2,
    "desc": "Has 2 phases; 1st phase is stationary and 2nd phase is mobile. Passively puts out fires, turn lava to stone, water to ice, and magma to cobblestone. Attacks are modular.",
    "weaknesses": [
      "Lava"
    ],
    "immunities": [
      "Freezing",
      "Fire"
    ],
    "target": [
			"⊕ Non-Polar Tyrant",
			"⊕ Non-Vastatos",
			"⊕ Non-Cirrus Archer",
			"⊕ Icicle"
		],
    "spawn": [
			"⌂ Ice Plains, spawns on top of the Polar Throne."
		],
    "loot": [
      { "item": "Polar Jewel", "amount": "1" },
      { "item": "Glacial Ice", "amount": "2-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bottom-feeder",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Stationary entity. Drags down nearest target after attacking. Takes heavy damage in water and rain.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -30."
		],
    "loot": [
      { "item": "Fossil Piece", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gloom",
    "health": [
			"♡ 30 - Small",
			"♡ 60 - Medium",
			"♡ 90 - Large",
			"♡ 120 - Huge"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 8 - Medium",
			"⚔ 12 - Large",
			"⚔ 16 - Huge"
		],
		"variants": 1,
    "desc": "Immune to suffocation and the void. Sizes vary; damage ranges from 4-16 and health ranges from 30-120. Passively inflicts weakness and mining fatigue nearby; effect duration is constant. Drops sludge when hurt. Permeates through terrain.",
    "weaknesses": [],
    "immunities": [
      "Void",
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Arthropod",
			"⊕ Illager",
			"⊕ Iron Golem",
			"⊕ Wandering Trader",
			"⊕ Villager (adult)"
		],
    "spawn": [
			"⌂ Underground, spawns between -100 to -63."
		],
    "loot": [
      { "item": "Gloomy Sludge", "amount": "1-5" },
      { "item": "Gloomy Tentacle", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lurker",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Stationary by default; requires target presence before action. Attacks inflict mining fatigue for 15 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -30."
		],
    "loot": [
      { "item": "Fossil Piece", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Razor",
    "health": [
			"♡ 18"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Immune to the void. Gliding entity.",
    "weaknesses": [],
    "immunities": [
      "Void",
      "Fall"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Underground, spawns between -104 to -63. Spawns in groups of 3 to 6."
		],
    "loot": [
      { "item": "Razor Edge", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Jailbreaker",
    "health": [
			"♡ 150"
		],
    "damage": [
			"⚔ 3 - Basic",
			"⚔ 24 - Swings"
		],
		"variants": 1,
    "desc": "Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Jailbreaker"
		],
    "spawn": [
			"⌂ Roofed Forest"
		],
    "loot": [
      { "item": "Durasteel Nugget", "amount": "2-7" },
      { "item": "Durasteel Ingot", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Embers",
    "health": [
			"♡ 22"
		],
    "damage": [
			"⚔ 6 - Normal attack",
			"⚔ 12 - Soul attack"
		],
		"variants": 2,
    "desc": "Takes heavy damage in water and rain. Entering the Soul Sand Valley creates a soul version; damage is doubled. Attacks cause nearby targets to generate lava beneath them. Floats on lava. Can break doors.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Explosions"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Fireball", "amount": "0-4" },
      { "item": "Ember Powder", "amount": "0-4" },
      { "item": "Gun Powder", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Sulokh",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 4 - Basic",
			"⚔ 56 - Swings"
		],
		"variants": 1,
    "desc": "Immune to fire. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Strategic measures are required; all attacks are AOE. Can break doors. Attacks are modular.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Sulokh"
		],
    "spawn": [
			"⌂ Plains, spawns in the Rhodusite Ruins."
		],
    "loot": [
      { "item": "Fossil Piece", "amount": "1-4" },
      { "item": "Cobbled Rhodusite", "amount": "2-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Moghes",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 6,
    "desc": "Communicates with nearby allies when alerted. Signal is casted in a wide area. Attacks inflict slowness for 7.5 seconds. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Moghes"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 0. Spawns in groups of 2 to 8."
		],
    "loot": [
      { "item": "Moghes Scales", "amount": "0-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shellcut",
    "health": [
			"♡ 55 - Small",
			"♡ 60 - Medium",
			"♡ 65 - Large",
			"♡ 70 - Larger"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 8 - At random times"
		],
		"variants": 1,
    "desc": "Sizes vary; health ranges from 55-70. Has a random chance to inflict blindess for 5 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Shellcut",
			"⊕ Non-Shulker"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Shellcut Spike", "amount": "0-1" },
      { "item": "Chorus Fruit", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Meltdown",
    "health": [
			"♡ 600 - Normal",
			"♡ 750 - Nuclear",
			"♡ 900 - Thermonuclear"
		],
    "damage": [
			"⚔ 2 - Basic (normal)",
			"⚔ 10 - Swing (normal)",
			"⚔ 16 - Punch (normal)",
			"⚔ 14 - Slam (normal)",
			"⚔ 18 - Impact (normal)",
			"⚔ 5 - Vomit (normal)",
			"⚔ 4 - Basic (nuclear)",
			"⚔ 18 - Swing (nuclear)",
			"⚔ 24 - Punch (nuclear)",
			"⚔ 22 - Slam (nuclear)",
			"⚔ 30 - Impact (nuclear)",
			"⚔ 9 - Vomit (nuclear)",
			"⚔ 8 - Basic (thermonuclear)",
			"⚔ 34 - Swing (thermonuclear)",
			"⚔ 40 - Punch (thermonuclear)",
			"⚔ 38 - Slam (thermonuclear)",
			"⚔ 54 - Impact (thermonuclear)",
			"⚔ 17 - Vomit (thermonuclear)"
		],
		"variants": 3,
    "desc": "Has 3 phases; Each phase is stronger than the last. Passively inflicts debuffs; debuffs depend on phase, inflicted debuff duration is constant. Phase 1 inflicts nausea and poison. Phase 2 inflicts nausea 2, poison, weakness, and mining fatigue. Phase 3 inflicts nausea 2, fatal poison, weakness, mining fatigue 2, and slowness. Strategic measures are required; Final mutation will cause great destruction. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Magic"
    ],
    "target": [
			"⊕ Meltdown",
			"⊕ Vastatos"
		],
    "spawn": [
			"⌂ Plains, spawns below the Bioweapon Tower."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Crimjaw",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 3 - Normal",
			"⚔ 10 - At random Times"
		],
		"variants": 1,
    "desc": "Has a random chance to snag targets nearer to itself.",
    "weaknesses": [],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Crimson Forest, spwans in groups of 1 to 2."
		],
    "loot": [
      { "item": "Weeping Vines", "amount": "0-3" },
      { "item": "Fossil Piece", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Searcher",
    "health": [
			"♡ 42"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Takes heavy damage in water and rain. Passively gains invisibility when selecting a target and teleports to the selected target. Interact using a Bottle o' Enchanting to obtain a Macabre Potion.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Plains", "⌂ Roofed Forest"
		],
    "loot": [
      { "item": "Macabre Potion (use bottle o' enchanting)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gorge",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 3 - Normal",
			"⚔ 30 - At random times"
		],
		"variants": 1,
    "desc": "Has a random chance to snag targets nearer to itself. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 1 to 2.",
			"⌂ Underground, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Durasteel Nugget", "amount": "0-3" },
      { "item": "Binge Fluid", "amount": "2-7" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cerebroid",
    "health": [
			"♡ 8 - Normal",
			"♡ 3 - Brainstorm"
		],
    "damage": [
			"⚔ 32 - Normal",
			"⚔ 6 - Brainstorm"
		],
		"variants": 2,
    "desc": "Sizes vary; damage ranges between 3-6 and health ranges between 8-32. Attacks inflict nausea; duration depends on size, ranges between 5-10 seconds. Converts to a brainstorm variant when struck by lightning. Brainstorm variants explode and spawn lightning bolts when killed.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fall",
      "Lightning"
    ],
    "target": [
			"⊕ Player",
			"⊕ Iron Golem",
			"⊕ Villager (adult)"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns when breaking a block of cerebral gut."
		],
    "loot": [
      { "item": "Raw Cerebral Gut", "amount": "2-6" },
      { "item": "Cooked Cerebral Gut (death by fire)", "amount": "2-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Clay-maul",
    "health": [
			"♡ 50"
		],
    "damage": [
			"⚔ 6 - Swinging",
			"⚔ 8 - Hooking",
			"⚔ 14 - Biting"
		],
		"variants": 17,
    "desc": "Passively regenerates; regeneration will end after being on fire. They'll turn into a structure of glazed terracotta when struck by lightning. Can break doors.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Mesa, spawns in groups of 2 to 5."
		],
    "loot": [
      { "item": "Terracotta (of color)", "amount": "0-3" },
      { "item": "Clay Ball", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Naverin",
    "health": [
			"♡ 38"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 1,
    "desc": "Summons sprites during combat between 3.5-5.0 seconds. Summons live temporarily; sprites last 10-25 seconds or despawn after attacking. Sprites inflict wither for 5 seconds. Attacks inflict wither for 15 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Naverin"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Arcane Powder", "amount": "0-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Quicksand",
    "health": [
			"♡ 70"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 2,
    "desc": "Immune to suffocation. Takes heavy damage in water, rain, and underwater. Converts sand beneath targets into quicksand. Passively avoids sinking through quicksand.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Quicksand"
		],
    "spawn": [
			"⌂ Desert", "⌂ Mesa"
		],
    "loot": [
      { "item": "Quicksand Block (of color)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Unsomnia",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Passively inflicts blindness for 15 seconds before combat. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Roofed Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Fossil Piece", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Dune-rider",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 3,
    "desc": "Takes heavy damage in water and rain. Has a random chance to inflict levitation for 5 seconds. Entering desert biomes increases its speed by 50%.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Desert, spawns in groups of 1 to 3.",
			"⌂ Mesa, spawns in groups of 1 to 3.",
			"⌂ Soulsand Valley, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Sand (desert)", "amount": "0-2" },
      { "item": "Red Sand (mesa)", "amount": "0-2" },
      { "item": "Soulsand (soulsand valley)", "amount": "0-2" },
      { "item": "Bone", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Torrid Xeromancer",
    "health": [
			"♡ 450"
		],
    "damage": [
			"⚔ 0"
		],
		"variants": 1,
    "desc": "Summons healers before combat. Passively generates a sandstorm that lasts 60 seconds (1 minute) to inflict slowness for 60 seconds (1 minute). Strategic measures are required; the healers that surround the monster needs to be destroyed first. Summons live temporarily; scarabs last 15 seconds, twisting sands last 10 seconds, and husks last 15 seconds.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fall",
      "Explosions",
      "Suffocation",
      "Fire",
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Desert, spawns when interacting or attacking the Sceptre of Sands inside of the Torrid Tomb."
		],
    "loot": [
      { "item": "Sceptre of Sands", "amount": "1" },
      { "item": "Bone", "amount": "1-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lasher",
    "health": [
			"♡ 50"
		],
    "damage": [
			"⚔ 4 - Swinging",
			"⚔ 8 - Swinging both"
		],
		"variants": 1,
    "desc": "All attacks are AOE. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Roofed Forest, spwans in groups of 1 to 3."
		],
    "loot": [
      { "item": "Durasteel Nugget", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Karkaros",
    "health": [
			"♡ 60 - Bull",
			"♡ 38 - Blue",
			"♡ 80 - Goblin",
			"♡ 180 - Great White",
			"♡ 52 - Hammerhead",
			"♡ 36 - Mako",
			"♡ 60 - Tiger",
			"♡ 40 - Saw"
		],
    "damage": [
			"⚔ 12 - Bull",
			"⚔ 14 - Blue",
			"⚔ 20 - Goblin",
			"⚔ 38 - Great White",
			"⚔ 18 - Hammerhead",
			"⚔ 16 - Mako",
			"⚔ 26 - Tiger",
			"⚔ 20 - Saw"
		],
		"variants": 8,
    "desc": "Neutral by default; Bulls and Saws are hostile by default. Types vary; attributes depend on variation.  Bulls have 60 health and 12 damage. Blues have 38 health and 14 damage. Goblins have 80 health, 20 damage, and causes knockback. Great Whites have 180 health, 38 damage, and causes knockback. Hammerheads have 52 health, 18 damage, and has a random chance to cause knockback. Makos have 36 health and 16 damage. Tigers have 60 health and 26 damage. Saws have 40 health and 20 damage. Amphibious by default. Blues can trade with you. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Fish",
			"⊕ Villager (fisherman)",
			"⊕ Saw Karkaros (bull karkaros)",
			"⊕ Bull Karkaros (saw karkaros)",
			"⊕ Player (bull and saw karkaros)"
		],
    "spawn": [
			"⌂ Ocean, spawns in groups of 2 to 4.",
			"⌂ Beach, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Saw Bone (saw)", "amount": "0-2" },
      { "item": "Seasalt Dagger (mako)", "amount": "0-2" },
      { "item": "Seasalt Saber (tiger)", "amount": "0-2" },
      { "item": "Sand Dollar (small)", "amount": "0-2" },
      { "item": "Sand Dollar (medium)", "amount": "0-3" },
      { "item": "Sand Dollar (large)", "amount": "2-9" },
      { "item": "Seasalt Chunk (small)", "amount": "0-1" },
      { "item": "Seasalt Chunk (medium)", "amount": "0-2" },
      { "item": "Seasalt Chunk (large)", "amount": "2-8" },
      { "item": "Shark Tooth (small)", "amount": "0-3" },
      { "item": "Shark Tooth (medium)", "amount": "0-5" },
      { "item": "Shark Tooth (large)", "amount": "4-20" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Spore-blast",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Passively inflicts poison nearby; range depends on state, no target is 6 block diameter and with target is 12 block diameter. Entering the Mushroom Island increases its speed by 50%. Places a Bleeding Spore upon death.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Fungus"
		],
    "spawn": [
			"⌂ Mushroom Island"
		],
    "loot": [
      { "item": "Bleeding Spore", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Long-spine",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Attacks are delayed. Attack range is wide.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Piglin",
			"⊕ Hoglin"
		],
    "spawn": [
			"⌂ Soulsand Valley"
		],
    "loot": [
      { "item": "Ancient Bone", "amount": "4-12" },
      { "item": "Ancient Bone Block", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Skinner",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 4 - Normal",
			"⚔ 7 - Big",
			"⚔ 10 - Bigger",
			"⚔ 13 - Biggest"
		],
		"variants": 1,
    "desc": "Attacks allows it to grow; damage depends size, ranges from 4-13. It splits into 2 when killed during final size.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Rabbit",
			"⊕ Wolf",
			"⊕ Chicken",
			"⊕ Sheep",
			"⊕ Cow",
			"⊕ Pig",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Torn Flesh", "amount": "0-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Killer-stream",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Takes heavy damage in the Nether. Attacks inflict fatal poison for 5 seconds. Passively puts out fires on step.",
    "weaknesses": [
      "Nether"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Plains, spawns in groups of 2 to 4.",
			"⌂ River, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-3" },
      { "item": "Spider Eye", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hermit",
    "health": [
			"♡ 28"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava. Damage dealt from vanilla axes or within the add-on is 2 times greater.",
    "weaknesses": [
      "Fire",
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Stick", "amount": "1-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Smiles",
    "health": [
			"♡ 200"
		],
    "damage": [
			"⚔ 5 - Basic",
			"⚔ 24 - Swing"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava. Attacks are modular.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Screamer",
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Mega Taiga", "⌂ Roofed Forest"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Patch Warden",
    "health": [
			"♡ 180"
		],
    "damage": [
			"⚔ 5 - Swing",
			"⚔ 8 - Vine",
			"⚔ 16 - Follow-up"
		],
		"variants": 1,
    "desc": "Damage dealt from vanilla axes or within the add-on is 2 times greater. Stationary by default; requires target presence before action. Strategic measures are required; the pieces of the big pumpkin needs to be destroyed first. All attacks cause AOE. Will return to its stationary state after no targets are found.",
    "weaknesses": [
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Gourdling"
		],
    "spawn": [
			"⌂ Plains, it spawns at the center of a Pumpkin Patch after destroying its big pumpkin."
		],
    "loot": [
      { "item": "Patch Warden's Rage", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Torch Giant",
    "health": [
			"♡ 800"
		],
    "damage": [
			"⚔ 16 - Basic",
			"⚔ 24 - Slam",
			"⚔ 40 - Kick",
			"⚔ 12 - Stomp",
			"⚔ 5 - Roar"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water or rain. Passively gains resistance and regeneration health is below 50%. Damage dealt from vanilla axes or within the add-on is 2 times greater. Strategic measures are required; All attacks cause fire. Immune to fire. Attacks are modular.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Torch Giant",
			"⊕ Non-Ent",
			"⊕ Non-Vastatos"
		],
    "spawn": [
			"⌂ Forest, it spawns when a mob goes near the center of the Burnt Stakes."
		],
    "loot": [
      { "item": "Charged Torchwood Totem", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hellifish",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 3,
    "desc": "Takes heavy damage from fire and lava. Gliding entity. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Dolphin",
			"⊕ Fish",
			"⊕ Guardian"
		],
    "spawn": [
			"⌂ Ocean, spawns in groups of 2 to 3."
		],
    "loot": [
      { "item": "Raw Hellifish", "amount": "0-1" },
      { "item": "Cooked Hellifish (death by fire)", "amount": "0-1" },
      { "item": "Seashard (of color)", "amount": "1-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cyclonous",
    "health": [
			"♡ 100"
		],
    "damage": [
			"⚔ 12 - Basic",
			"⚔ 6 - AOE"
		],
		"variants": 1,
    "desc": "Passively inflicts damage nearby and falls slowly. Immune to projectiles, fall damage, fire, and fall. Attacks inflict blindness for 5 seconds.",
    "weaknesses": [],
    "immunities": [
      "Projectiles",
      "Suffocation",
      "Fall",
      "Fire"
    ],
    "target": [
			"⊕ Non-Cyclonous"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Mustard",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Immune to projectiles, magic, and fall. Attacks inflict nausea for 15 seconds. Passively inflicts nausea, slowness, and poison nearby; all effect duration is fixed at 5 seconds. Has a 1/4 chance to disperse nausea, slowness, and poison in a 15 block diameter area when killed; all effect duration is fixed at 15 seconds.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Projectiles",
      "Magic",
      "Fall"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Gored",
    "health": [
			"♡ 30 - Normal",
			"♡ 40 - Big",
			"♡ 50 - Bigger",
			"♡ 60 - Biggest"
		],
    "damage": [
			"⚔ 5 - Normal",
			"⚔ 9 - At random times"
		],
		"variants": 1,
    "desc": "Sizes vary; health depends on size, ranges between 30-60. Immune to fire. Attacks are delayed.",
    "weaknesses": [],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Warped Forest, spawns in groups of 1 to 2."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Guest",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 4 - 100HP",
			"⚔ 8 - 75HP=<",
			"⚔ 12 - 50HP=<",
			"⚔ 16 - 25HP=<"
		],
		"variants": 4,
    "desc": "Attacks vary; damage depends on health, ranges between 4-16. Attacks are delayed.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains, spawns in groups of 1 to 2.",
			"⌂ Roofed Forest, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Raw Tender Gut", "amount": "1-2" },
      { "item": "Cooked Tender Gut (death by fire)", "amount": "1-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Blood-jacket",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Player",
			"⊕ Iron Golem",
			"⊕ Snow Golem",
			"⊕ Wandering Trader",
			"⊕ Villager (adult)"
		],
    "spawn": [
			"⌂ Mesa, spawns from the Velvet Nest."
		],
    "loot": [
      { "item": "Velvet Wax", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Backstar",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 8 - Normal",
			"⚔ 40 - At random times"
		],
		"variants": 1,
    "desc": "Attacks are delayed. Can climb walls. Has a random chance to use all spikes. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Backstar"
		],
    "spawn": [
			"⌂ Warped Forest", "⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Gasher",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 10 - Basic",
			"⚔ 16 - Spikes"
		],
		"variants": 1,
    "desc": "Has a random chance to summon spikes from the ground. Passively gains resistance, knockback resistance, instant health, and weakness when summoning. Attacks are modular. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Iron Golem",
			"⊕ Villager",
			"⊕ Snow Golem",
			"⊕ Undead"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Penumbra",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava. Burns in daylight. Passively creates copies of itself and teleporting behind targets when attacking; copies last between 15-20 seconds. Copies can be dsetroyed instantly. Copies inflict weakness for 5 seconds when killed. Attacks inflict blindness for 5 seconds.",
    "weaknesses": [
      "Light",
      "Daylight",
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Monster"
		],
    "spawn": [
			"⌂ Plains", "⌂ Roofed Forest",
			"⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Grand Hammer",
    "health": [
			"♡ 1000"
		],
    "damage": [
			"⚔ 6 - Basic",
			"⚔ 14 - Stomp",
			"⚔ 80 - Sweep",
			"⚔ 135 - Strike"
		],
		"variants": 1,
    "desc": "Passively gains damage reduction; damage reduction depends on health. Gains 25% damage reduction when health is below 75%. Gains 50% damage reduction when health is below 50%. Gains 75% damage reduction when health is below 25%. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Grand Hammer"
		],
    "spawn": [
			"⌂ Desert, spawns at the center of the Lost Records' entrance."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Venomite",
    "health": [
			"♡ 12"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Attacks inflict fatal poison for 10 seconds. Turns into a corpse that explodes after 3 seconds and inflicts fatal poison for 15 seconds in a 7 block diameter when killed.",
    "weaknesses": [],
    "immunities": [
      "Poison"
    ],
    "target": [
			"⊕ Non-Venomite"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 2 to 3.",
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 2 to 3."
		],
    "loot": [
      { "item": "Toxic Spore", "amount": "0-3" },
      { "item": "Toxic Waste Mass", "amount": "0-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Indactma",
    "health": [
			"♡ 120"
		],
    "damage": [
			"⚔ 5 - Basic",
			"⚔ 24 - Stab",
			"⚔ 48 - Stabbing both",
			"⚔ 12 - Swing",
			"⚔ 24 - Stun",
			"⚔ 96 - Impact"
		],
		"variants": 7,
    "desc": "Immune to fall and suffocation. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Cavernoid"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Fossil Piece", "amount": "2-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Growlim",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 4 - Basic (stage 1)",
			"⚔ 8 - Bite (stage 2)",
			"⚔ 6 - Swing (stage 2)",
			"⚔ 10 - Bite (stage 3)",
			"⚔ 8 - Swing (stage 3)",
			"⚔ 4 - AOE (stage 4)",
			"⚔ 800 - Gigasonic Blast (stage 4)"
		],
		"variants": 1,
    "desc": "Passively enhances itself; enhancement depends on combat time. Time to stage 1 is 5 seconds. Time to stage 2 is 15 seconds. Time to stage 3 is 5 seconds. Damages vary; damage depends on combat time, ranges from 4-10. Can break doors. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Growlim"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Mist-wraith",
    "health": [
			"♡ 80 - Normal",
			"♡ 10000 - Mist"
		],
    "damage": [
			"⚔ 48 - Mist"
		],
		"variants": 2,
    "desc": "Constantly debuffs nearby targets to mark them. Will enhance itself and attack marked targets. Can transform into gliding entity. Immune to fall.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "Fire (mist)"
    ],
    "target": [
			"⊕ Non-Mist-wraith",
			"⊕ Non-Vastatos",
			"⊕ Mist-wraith Mark (mist)"
		],
    "spawn": [
			"⌂ Mega Taiga", "⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Paper", "amount": "1-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Wrathen",
    "health": [
			"♡ 70"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 12 - Follow-up",
			"⚔ 12 - Death Whirl",
			"⚔ 60 - Wrathen"
		],
		"variants": 1,
    "desc": "Passively heals when exiting combat. Immune to fire. Can break doors. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Wrathen"
		],
    "spawn": [
			"⌂ Crimson Forest"
		],
    "loot": [
      { "item": "Wrathen Shell", "amount": "0-3" },
      { "item": "Wrathen Metal Nugget (death by fire)", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Scourgeon",
    "health": [
			"♡ 76"
		],
    "damage": [
			"⚔ 6 - Basic",
			"⚔ 8 - Swings",
			"⚔ 12 - Defense",
			"⚔ 20 - Scratch"
		],
		"variants": 1,
    "desc": "Immune to fall. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Scourgeon"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Dreadnought Feather", "amount": "1-8" },
      { "item": "Foul Fowl Claw", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Brimmeth",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 4 - Explosion Power (normal)",
			"⚔ 8 - Explosion Power (soul)"
		],
		"variants": 2,
    "desc": "Takes heavy damage from water and rain. Immune to fire. Entering the Soul Sand Valley creates a soul version; damage is doubled. Actively avoids other entities. Ranged by default. Floats on lava.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Overflow"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Volcanic Carapace", "amount": "2-7" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Tremor",
    "health": [
			"♡ 500"
		],
    "damage": [
			"⚔ 6 - Basic",
			"⚔ 120 - Shatter",
			"⚔ 12 - Roar",
			"⚔ 36 - Swing"
		],
		"variants": 1,
    "desc": "Roars before combat. Immune to fire. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Tremor",
			"⊕ Non-Vastatos"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Tremor Scale", "amount": "1-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Necromancer",
    "health": [
			"♡ 120"
		],
    "damage": [],
		"variants": 1,
    "desc": "Actively avoids targets. Strategic measures are required; it'll mark all nearby entities on the first stage of summoning. Summoned and enchanted mobs last 10 seconds. Enchanted mobs are immune to fire and stronger. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains", "⌂ Mega Taiga",
			"⌂ Roofed Forest"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Fossil Titan",
    "health": [
			"♡ 2400"
		],
    "damage": [
			"⚔ 16 - Basic",
			"⚔ 50 - Hook",
			"⚔ 30 - Lift",
			"⚔ 30 - Tail",
			"⚔ 50 - Kick",
			"⚔ 320 - Sink",
			"⚔ 75 - Thrust"
		],
		"variants": 1,
    "desc": "Strategic measures are required; there is little to no cooldown between attacks, fight at your own risk. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Immune to suffocation. Attacks are modular.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire",
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Fossil Titan"
		],
    "spawn": [
			"⌂ Desert, it spawns when a mob goes near the center of the Levelled Crater."
		],
    "loot": [
      { "item": "Ancient Bone", "amount": "13-17" },
      { "item": "Ancient Bone Block", "amount": "8-14" },
      { "item": "Fossil Piece", "amount": "10-16" },
      { "item": "Eldrock", "amount": "28-32" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Screamer",
    "health": [
			"♡ "
		],
    "damage": [
			"⚔ 6 - Basic",
			"⚔ 16 - AOE",
			"⚔ 210 - Scream"
		],
		"variants": 12,
    "desc": "Strategic measures are required; you will be locked by this monster and constantly damage you. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Smiles",
			"⊕ Non-Bloodbath",
			"⊕ Non-Ender Dragon",
			"⊕ Non-Fossil Titan",
			"⊕ Non-Screamer"
		],
    "spawn": [
			"⌂ Mega Taiga"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Rumbler",
    "health": [
			"♡ 52"
		],
    "damage": [
			"⚔ 18 - Normal",
			"⚔ 26 - At random times"
		],
		"variants": 1,
    "desc": "Passively hides itself whenever it moves.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player (holding emerald, diamond, gold, pruthox, aceroid, iron, and copper items)"
		],
    "spawn": [
			"⌂ Underground, spwans between -63 to -10. Spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Raw Gold", "amount": "0-6" },
      { "item": "Gold Nugget", "amount": "0-9" },
      { "item": "Iron Nugget", "amount": "0-6" },
      { "item": "Diamond", "amount": "0-3" },
      { "item": "Emerald", "amount": "0-3" },
      { "item": "Amethyst Shard", "amount": "0-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cutter-squall",
    "health": [
			"♡ 250"
		],
    "damage": [
			"⚔ 16 - Melee",
			"⚔ 6 - Ranged",
			"⚔ 36 - Implosion blast"
		],
		"variants": 1,
    "desc": "Melee by default and ranged after some time. Passively floats when ranged and falls slowly. Immune to fire, projectiles, explosions, magic, thorns, anvils, and falling blocks. Will implode when killed; implosion will drag entities nearby to the center.",
    "weaknesses": [],
    "immunities": [
      "Anvil",
      "Magic",
      "Falling Block",
      "Thorns",
      "Piston",
      "Explosions",
      "Fall",
    ],
    "target": [
			"⊕ Non-Cutter-squal"
		],
    "spawn": [
			"⌂ Mountains, it spawns in the center of the Nimbus Arena."
		],
    "loot": [
      { "item": "Zephyr Crown", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Depth-gripper",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 10"
		],
		"variants": 1,
    "desc": "Strategic measures are required; you will be locked by this monster and dragged down to level -40. Cooldown ends between 5-10 seconds. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Fire",
      "Fall",
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Depth-gripper"
		],
    "spawn": [
			"⌂ Underground, spawns between 0 to 20.",
			"⌂ Plains"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Vauldrum",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 6",
			"⚔  - Basic",
			"⚔ 18 - Impact"
		],
		"variants": 1,
    "desc": "Can break leaves. Melee by default and pounces at times. It'll pounce repeatedly at targets and cause an AOE effect every after 5-7.5 seconds.",
    "weaknesses": [],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Vauldrum"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Vauldrum Scale", "amount": "0-4" },
      { "item": "Vauldrum Spike", "amount": "1-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hiveminded",
    "health": [
			"♡ 36 - Normal",
			"♡ 8 - Giant"
		],
    "damage": [
			"⚔ 5 - Basic (normal)",
			"⚔ 8 - Bsaic (giant)",
			"⚔ 24 - Swing (giant)"
		],
		"variants": 2,
    "desc": "Targetting increases its speed by 50%. Melee by default and modular in formation. Strategic measures are required; the alpha variant will call on nearby allies to create a stronger formation when hurt.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Neutral (normal)",
			"⊕ Non-Hiveminded (giant)"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 8 to 12."
		],
    "loot": [
      { "item": "Torn Flesh", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Geosuchus",
    "health": [
			"♡ 430"
		],
    "damage": [
			"⚔ 12 - Basic",
			"⚔ 30 - AOE Berserk",
			"⚔ 16 - Swing (biped)",
			"⚔ 40 - Bite",
			"⚔ 14 - Deathroll",
			"⚔ 24 - Swing (quadruped)",
			"⚔ 12 - Ram (quadruped)"
		],
		"variants": 1,
    "desc": "High knockback resistance. Immune to fire. Quadrupedal by default and bipedal when health falls below 50%. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Attacks are modular.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Magic"
    ],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Geosuchus"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Cobbled Perchrock", "amount": "8-16" },
      { "item": "Ancient Bone", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bloodbath",
    "health": [
			"♡ 900"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 42 - Stakes",
			"⚔ 30 - Strike",
			"⚔ 2 - Drizzle",
			"⚔ 24 - Rupture"
		],
		"variants": 1,
    "desc": "Passively heals from converting netherrack into cobblestone. Takes heavy damage from water, rain, fire, and lava. Attacks inflict weakness for 5 seconds. Immune to magic, suffocation, fall, and projectiles. Damage dealt from a Bucket is 20 times greater. Strategic measures are required; place sponges around it when its summoning a blood rain. Attacks are modular.",
    "weaknesses": [
      "Bucket"
    ],
    "immunities": [
      "Magic",
      "Suffocation",
      "Fall",
      "Projectiles"
    ],
    "target": [
			"⊕ Non-Bloodbath",
			"⊕ Non-Vastatos",
			"⊕ Non-Depth-gripper",
			"⊕ Non-Screamer",
			"⊕ Non-Tremor"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns at the center of a Blood Well."
		],
    "loot": [
      { "item": "Bloodclot", "amount": "10-36" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Graveripper",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 10 + 2 per attack (522 max)"
		],
		"variants": 1,
    "desc": "Attacks vary; attributes depend on stack count, a stack is achieved when hitting a target. Each stack adds 0.01 more scale and 2 more damage. Attacks inflict weakness; duration depends on stack count. Each stack adds 5 more seconds per 16 stacks. Attacks are delayed.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead",
			"⊕ Non-Graveripper",
			"⊕ Non-Necromancer"
		],
    "spawn": [
			"⌂ Monster Biomes"
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-6" },
      { "item": "Bone", "amount": "0-6" },
      { "item": "Harbinger", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Vastatos",
    "health": [
			"♡ 1000 + 1000 per level (100000 max)"
		],
    "damage": [
			"⚔ 4 + 4 per level (400 max) Basic",
			"⚔ 25 + 25 per level (250 max) Swing",
			"⚔ 50 + 50 per level (500 max) Swing bite",
			"⚔ 15 + 15 per level (150 max) Stomp",
			"⚔ 32 + 32 per level (320 max) Excavate",
			"⚔ 25 + 25 per level (250 max) Kick",
			"⚔ 25 + 25 per level (250 max) Burst",
			"⚔ 8 + 8 per level (80 max) Arm mining",
			"⚔ 2 - Explosion Power (thrown block)",
			"⚔ 16 + 16 per level (160 max) Kneel",
			"⚔ 30 + 30 per level (300 max) Arm crash",
			"⚔ 80 + 80 per level (800 max) Bite",
			"⚔ 32 + 16 per level (160 max) Roar"
		],
		"variants": 1,
    "desc": "Sizes vary; attributes depend on level. Each level is advanced after getting killed. Each level adds 4 more damage, 1 more scale, and 1000 more health. Scale is capped at 10. Takes heavy damage from the void. Passively immune to everything when eating and roaring. Attacks are modular. Strategic measures are required; All attacks cause destruction and fatal after 8.",
    "weaknesses": [
      "Guillotine",
      "Void"
    ],
    "immunities": [
      "Suffocation",
      "Fall",
      "Wither"
    ],
    "target": [
			"⊕ Non-Vastatos"
		],
    "spawn": [
			"⌂ Jungle, can be spawned by breaking or taking the skull from the Tomb of Savagery."
		],
    "loot": [
      { "item": "Petrified Vastatos Skull", "amount": "1" },
      { "item": "Heart of Tyranny", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Goblin",
    "health": [
			"♡ 10 - Small",
			"♡ 16 - Medium",
			"♡ 22 - Large"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 7 - Medium",
			"⚔ 10 - Large"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 4-10 and health ranges between 20-22. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Goblin"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 4 to 8.",
			"⌂ Forest, spawns in groups of 3 to 6."
		],
    "loot": [
      { "item": "Gold Nugget (small)", "amount": "0-1" },
      { "item": "Gold Nugget (medium)", "amount": "0-3" },
      { "item": "Gold Nugget (large)", "amount": "1-5" },
      { "item": "Iron Nugget (small)", "amount": "0-3" },
      { "item": "Iron Nugget (medium)", "amount": "0-5" },
      { "item": "Iron Nugget (large)", "amount": "2-7" },
      { "item": "Wooden Club", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shroombit",
    "health": [
			"♡ 10 - Small",
			"♡ 20 - Medium",
			"♡ 30 - Large",
			"♡ 40 - Larger",
			"♡ 50 - Largest"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 4 - Medium",
			"⚔ 6 - Large",
			"⚔ 8 - Larger",
			"⚔ 10 - Largest"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 2-10 and health ranges between between 10-30. Attacks inflict and spread nausea; duration depends on size, ranges between 4-20.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Fungus",
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Mushroom Island, spawns in groups of 1 to 3.",
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Lumenji (small)", "amount": "0-1" },
      { "item": "Lumenji (medium)", "amount": "0-2" },
      { "item": "Lumenji (large)", "amount": "1-3" },
      { "item": "Lumenji (larger)", "amount": "2-4" },
      { "item": "Lumenji (largest)", "amount": "3-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Fictos",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 5 - Single",
			"⚔ 10 - Double",
			"⚔ 15 - Triple"
		],
		"variants": 3,
    "desc": "Attacks vary; damage depends on count, ranges between 5-15 seconds. Attacks inflict blindness; duration depends on count, ranges between 5-15 seconds. Passively turns invisible at random times. Appears with different count during combat.",
    "weaknesses": [],
    "immunities": [
      "Projectiles"
    ],
    "target": [
			"⊕ Player"
		],
    "spawn": [
			"⌂ Plains, spawns in groups of 1 to 3.",
			"⌂ Roofed Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Paper", "amount": "0-3" },
      { "item": "Bone", "amount": "0-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ramwolf",
    "health": [
			"♡ 32 - Wild (adult)",
			"♡ 56 - Tamed (adult)",
			"♡ 16 - Baby"
		],
    "damage": [
			"⚔ 12 - Wild (adult)",
			"⚔ 16 - Tamed (adult)"
		],
		"variants": 10,
    "desc": "Tameable using fossil pieces. Babies can be fed pointed dripstone to speed up growth time. Feed it pointed dripstone to heal it; only works for tamed ones. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Feed it stone, granite, diorite, andesite, or dripstone block to change its variant. Can break doors. Immune to fire.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Ramwolf (wild)",
			"⊕ Non-Player (tamed)"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "0-3" },
      { "item": "Bone", "amount": "1-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bloodshed",
    "health": [
			"♡ 36"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Drops torn flesh when hurt. Drops vary; drops depend on how much flesh is left. Can break doors. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Torn Flesh", "amount": "0-9" },
      { "item": "Rotten Flesh", "amount": "0-9" },
      { "item": "Bone", "amount": "0-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Black Grime",
    "health": [
			"♡ 15 - Small",
			"♡ 30 - Big"
		],
    "damage": [
			"⚔ 6 - Small",
			"⚔ 12 - Big"
		],
		"variants": 1,
    "desc": "Immune to wither, magic, and fall. Sizes vary; damage ranges between 6-12 and health ranges between 15-30. Attacks inflict wither; duration depends on size, ranges between 5-10 seconds. Big ones split into 3 small ones when killed. Interact with small ones using a glass bottle to obtain a Potion of Decay.",
    "weaknesses": [],
    "immunities": [
      "Wither",
      "Magic",
      "Fall"
    ],
    "target": [
			"⊕ Non-Slime"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Potion of Decay (use glass bottle)", "amount": "0-4" },
      { "item": "Rotten Slime Ball (small)", "amount": "0-4" },
      { "item": "Rotten Slime Ball (large)", "amount": "0-16" },
      { "item": "Rotten Slime Block (large)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gut-gel",
    "health": [
			"♡ 12 - Small",
			"♡ 24 - Medium",
			"♡ 48 - Large"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 8 - Medium",
			"⚔ 16 - Large",
			"⚔ 10- AOE (large)"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 4-16 and health ranges between 12-48. Attacks inflict weakness; duration depends on size, ranges between 5-20 seconds. Largest ones split into 3 medium ones when killed. Largest ones consume mobs.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead",
			"⊕ Non-Slime"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Bloodclot (small)", "amount": "0-1" },
      { "item": "Bloodclot (medium)", "amount": "0-3" },
      { "item": "Bloodclot (large)", "amount": "2-7" },
      { "item": "Rotten Flesh (small)", "amount": "0-3" },
      { "item": "Rotten Flesh (medium)", "amount": "3-6" },
      { "item": "Rotten Flesh (large)", "amount": "6-12" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Severed",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 7,
    "desc": "Sizes vary; speed ranges between 0.23-0.35. Burns in daylight. Can crawl under 0.5 block high gaps. Babies can crawl between 0.5 block wide gaps. Can break doors.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4.",
			"⌂ Underground, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten flesh", "amount": "0-3" },
      { "item": "Bone", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hobgoblin",
    "health": [
			"♡ 180 - No armor",
			"♡ 230 - Has armor"
		],
    "damage": [
			"⚔ 4 - No weapon (basic)",
			"⚔ 8 - Horse skeleton (basic)",
			"⚔ 6 - Mangled body (basic)",
			"⚔ 10 - Kick",
			"⚔ 8 - Stomp",
			"⚔ 14 - Slam (no weapon)",
			"⚔ 24 - Ram (no weapon)",
			"⚔ 20 - Slam (mangled body)",
			"⚔ 30 - Ram (mangled body)",
			"⚔ 26 - Slam (horse skeleton)",
			"⚔ 36 - Ram (horse skeleton)"
		],
		"variants": 6,
    "desc": "Equipments vary; health ranges between 180-230. Can break fences, carpets, doors, and trapdoors. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Goblin"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 1 to 4.",
			"⌂ Forest, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Gold Block", "amount": "1-5" },
      { "item": "Iron Block", "amount": "2-7" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Vained-time",
    "health": [
			"♡ 400"
		],
    "damage": [
			"⚔ 5 * Number struck (60 max) Strike"
		],
		"variants": 1,
    "desc": "Attacks vary; damage depends on number struck, ranges between 5-60 seconds (5 seconds to 1 minute). Attacks inflict either slowness, weakness, mining fatigue, or wither; duration  and amplifier depends on number struck, duration ranges between 5-60 seconds (5 seconds to 1 minute) and amplifier ranges between 1-12. Passively inflicts weakness and mining fatigue nearby. Immune to fire, lava, wither, magic, fall, and suffocation. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "Suffocation",
      "Wither",
      "Magic",
      "Fire"
    ],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Vained-time"
		],
    "spawn": [
			"⌂ Plains, spawns on top of the Vained Clocktower."
		],
    "loot": [
      { "item": "Vained Pocketwatch", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Noir",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 5 - Ranged"
		],
		"variants": 1,
    "desc": "Ranged and melee. Passively inflicts blindess nearaby. Uses a beam to attack you through walls similar to a guardian.",
    "weaknesses": [
      "Dayight"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Noir"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Cursed Tome",
    "health": [
			"♡ 14"
		],
    "damage": [
			"⚔ 3"
		],
		"variants": 7,
    "desc": "Takes heavy damge from fire and lava. Debuffs vary; effects inflicted depend on color, duration is fixed at 10 seconds.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Cursed Tome"
		],
    "spawn": [
			"⌂ Desert, spawns inside of the Lost Records."
		],
    "loot": [
      { "item": "Cursed Tome (of type)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Riptide",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Melee by default and modular when underwater. Takes heavy damge from fire and lava. Snags nearby targets when underwater.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Illager"
		],
    "spawn": [
			"⌂ Ocean"
		],
    "loot": [
      { "item": "Seagrass", "amount": "0-9" },
      { "item": "Kelp", "amount": "0-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Muckwater",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Attacks inflict fatal poison for 6 seconds and sets a 3⌂1⌂3 area on fire. Immune to projectiles. Interact using a glass bottle to obtain a bottle of muckwater and instantly kill them. Takes heavy damage from water and rain. Passively inflicts fatal poison and weakness nearby when on fire.",
    "weaknesses": [],
    "immunities": [
      "Projectiles"
    ],
    "target": [
			"⊕ Non-Muckwater"
		],
    "spawn": [
			"⌂ Swamp, Mangrove swamps included. Spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Bottle of Muckwater (use glass bottle)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rotscade",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 12"
		],
		"variants": 1,
    "desc": "Melee by default and modular after some time. Strategic measure are required; modular attack will rot and infect nearby blocks. Block infection will destroy nearby structures. Can break doors.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 2."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Dead Vele",
    "health": [
			"♡ 12"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 2,
    "desc": "Burns in daylight. Attacks inflict hunger for 25 seconds.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Illager"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Undead Fang", "amount": "0-6" },
      { "item": "Bone", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Parakyte",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 1,
    "desc": "Heals when attacking. Attacks inflict blindness for 5 seconds.",
    "weaknesses": [],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Cavernoid",
			"⊕ Non-Bat"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 0. Spawns in groups of 3 to 6."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Phantas",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 5 - Normal",
			"⚔ 15 - Angry"
		],
		"variants": 2,
    "desc": "Attacks vary; attack depends on state, 5 when normal and 15 when angry. Burns in daylight. Takes heavy damage from fire and lava. Immune to projectiles and suffocation. Interact using a torch, lantern, or campfire to obtain its soul version. This makes them angry for 10-15 seconds. Permeates through terrain.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Soul Items (use items that have a soul version)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gargoyle",
    "health": [
			"♡ 40 - Normal",
			"♡ 80 - Deepslate"
		],
    "damage": [
			"⚔ 8 - Kick (normal)",
			"⚔ 16 - Kicking both (normal)",
			"⚔ 14 - Kick (deepslate)",
			"⚔ 28 - Kicking both (deepslate)"
		],
		"variants": 6,
    "desc": "Immune to attacks and projectiles when dormant but not pickaxes. Immune to fire overall. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Stationary by default; requires target presence before action. Types vary; damage depends on variation group. Deepslate damage is 24-22 and other stone types have 8-16. Health ranges between 40-90.",
    "weaknesses": [],
    "immunities": [
      "Fire",
      "Fall",
      "Projectiles (not hunting)",
      "Pickaxes"
    ],
    "target": [
			"⊕ Non-Cavernoids (not sneaking)"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 0. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Dynamo",
    "health": [
			"♡ 780"
		],
    "damage": [
			"⚔ 12 - Basic",
			"⚔ 40 - Dashing",
			"⚔ 28 - Ground",
			"⚔ 36 - Kick",
			"⚔ 56 - Final Kick",
			"⚔ 2 - Explosion Power (lightning)"
		],
		"variants": 1,
    "desc": "Strategic measures are required; there is little to no cooldown between attacks, fight at your own risk. Immune to drowning, magic, wither, explosions, fire, suffocation, and freezing. Strategic measures are required; contact with water will fatally damage anyone in a 20 block diameter area. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Drowning",
      "Magic",
      "Wither",
      "Explosions",
      "Suffocation",
      "Contact",
      "Freezing",
      "Fire",
    ],
    "target": [
			"⊕ Non-Lightning"
		],
    "spawn": [
			"⌂ Jungle, can be spawned when the Battery Tomb is broken."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Dead Crusader",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 9 - Broadsword",
			"⚔ 14 - Claymore",
			"⚔ 16 - Halberd",
			"⚔ 8 - Mac",
			"⚔ 10 - Swordspear",
			"⚔ 18 - Waraxe",
			"⚔ 10 - Warhammer"
		],
		"variants": 24,
    "desc": "Attacks vary; damage depends on weapon, rangse from 9-18. Burns in daylight if it's not wearing a helmet. Attacks are delayed. Can break doors.",
    "weaknesses": [
      "Daylight (no helmet)"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Bone (skeleton)", "amount": "0-3" },
      { "item": "Rotten Flesh (zombie)", "amount": "0-3" },
      { "item": "Iron Ingot", "amount": "0-1" },
      { "item": "Iron Nugget", "amount": "0-2" },
      { "item": "Weapon (of type)", "amount": "0-1" },
      { "item": "Armor (of type)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Spitblot",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 4 - Ranged"
		],
		"variants": 7,
    "desc": "Ranged by default. Attacks inflict poison, ranges from 5-25 seconds. Takes heavy damage from water and rain.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Slime"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Slime ball", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hollow Ent",
    "health": [
			"♡ 36"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 54,
    "desc": "Takes heavy damage from fire and lava. Damage dealt from vanilla axes or within the add-on is 2 times greater. Passively knocks entities backwards when attacking. Nether variants are immune to fire.",
    "weaknesses": [
      "Fire (non-nether variants)",
      "Axes"
    ],
    "immunities": [
      "Fire (nether variants)"
    ],
    "target": [
			"⊕ Non-Ent"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 1 to 3.",
			"⌂ Crimson Forest, spawns in groups of 1 to 3.",
			"⌂ Warped Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Log (of type)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rotten Jack",
    "health": [
			"♡ 10 - Little",
			"♡ 120 - Big (rotten)",
			"♡ 200 - Big (tamed)"
		],
    "damage": [
			"⚔ 2 - Basic (little)",
			"⚔ 8 - Basic (big)",
			"⚔ 6 - Devouring (big)"
		],
		"variants": 2,
    "desc": "Can break fences and fence gates. Stationary by default; requires target interaction before action. Takes heavy damage from fire and lava. Snags targets and constantly damage them. Can be cured using a Totem of Undying. Can be bred using fossil pieces; only for cured ones. Rideable when cured. Babies can be fed bone meal to speed up growth time.",
    "weaknesses": [
      "Fire",
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Gourdling",
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains, spawns in the Carved Pumpkin Patch and will appear when a pumpkin is broken."
		],
    "loot": [
      { "item": "Pumpkin (jack)", "amount": "0-1" },
      { "item": "Pumpkin Chunk (jack)", "amount": "0-9" },
      { "item": "Moon Pumpkin (moon)", "amount": "0-1" },
      { "item": "Moon Pumpkin Chunk (moon)", "amount": "0-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Black Snowman",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 1,
    "desc": "Takes heavy damage from fire and lava. Ranged by default. Attacks inflict poison for 5 seconds. Damage dealt from vanilla shovels or within the add-on is 2 times greater.",
    "weaknesses": [
      "Fire",
      "Shovels"
    ],
    "immunities": [
      "Freezing"
    ],
    "target": [
			"⊕ Non-Snow Golem"
		],
    "spawn": [
			"⌂ Ice Plains, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Black Snowball", "amount": "0-15" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Anvil-eater",
    "health": [
			"♡ 40 - Badly Damaged",
			"♡ 60 - Damaged",
			"♡ 80 - Undamaged"
		],
    "damage": [
			"⚔ 12 - Badly Damaged",
			"⚔ 18 - Damaged",
			"⚔ 24 - Undamaged"
		],
		"variants": 3,
    "desc": "Will hunt for anvil blocks; will eat the item as well. Attributes vary; attacks range between 12-24 and health ranges between 40-80. Attacks inflict weakness for 5 seconds; duration depend on variation, ranges between 10-20 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Slime"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 0. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Iron Slurry", "amount": "0-2" },
      { "item": "Iron Slurry Block", "amount": "2-12" },
      { "item": "Anvil (of type)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shadow",
    "health": [
			"♡ 20"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Burns in daylight. Takes heavy damage from fire and lava. Passively teleports to the nearest target between 1-2 seconds. Interact using a glow ink sac, glow berries, glowstone, glowstone dust, torch, soul torch, lantern, or soul lantern, to instantly kill them. Immune to almost everything.",
    "weaknesses": [
      "Light",
      "Fire",
      "Daylight",
      "Items that emit light"
    ],
    "immunities": [
      "Everything"
    ],
    "target": [
			"⊕ Non-Shadow"
		],
    "spawn": [
			"⌂ Monster Biomes"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Undead Livestock",
    "health": [
			"♡ 8 - Chicken (single)",
			"♡ 16 - Chicken (double)",
			"♡ 20 - Cow (single)",
			"♡ 40 - Cow (double)",
			"♡ 16 - Pig (single)",
			"♡ 32 - Pig (double)",
			"♡ 16 - Sheep (single)",
			"♡ 32 - Sheep (double)"
		],
    "damage": [
			"⚔ 2 - Chicken (single)",
			"⚔ 48 - Chicken (double)",
			"⚔ 16 - Cow (single)",
			"⚔ 32 - Cow (double)",
			"⚔ 5 - Pig (single)",
			"⚔ 10 - Pig (double)",
			"⚔ 5 - Sheep (single)",
			"⚔ 10 - Sheep (double)"
		],
		"variants": 12,
    "desc": "Types vary; attributes depend on variation. Chickens have 8 health and 2 damage. Pigs and Sheep have 16 health and 5 damage. Cows have 20 health and 8 damage. It can infect other livestock except sheep. Can be cured using an Enchanted Apple. Burns in daylight. Attributes are 2 times greater when it's mutated. Can be cured using a Golden Apple.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten Chicken (chicken)", "amount": "0-1" },
      { "item": "Rotten Chicken (chicken with twin)", "amount": "0-2" },
      { "item": "Feather (chicken)", "amount": "0-3" },
      { "item": "Feather (chicken with twin)", "amount": "3-6" },
      { "item": "Rotten Beef (cow)", "amount": "0-3" },
      { "item": "Rotten Beef (cow with twin)", "amount": "0-6" },
      { "item": "Leather (cow)", "amount": "0-3" },
      { "item": "Leather (cow with twin)", "amount": "3-6" },
      { "item": "Rotten Porkchop (pig)", "amount": "0-3" },
      { "item": "Rotten Porkchop (pig with twin)", "amount": "0-6" },
      { "item": "Rotten Mutton (sheep)", "amount": "0-3" },
      { "item": "Rotten Mutton (sheep with twin)", "amount": "0-6" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Zlato",
    "health": [
			"♡ 80"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Converts into gold blocks when submerged underwater. Contact with water or rain causes it to drop gold nuggets. Passively converts netherrack into nether gold and blackstone to gilded blackstone beneath it. Passively summons spikes beneath nearby targets during combat. Attacks are delayed.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Overflow",
			"⊕ Non-Augen"
		],
    "spawn": [
			"⌂ Basalt Deltas"
		],
    "loot": [
      { "item": "Enchanted Golden Apple (use apple)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Goblin Champion",
    "health": [
			"♡ 820"
		],
    "damage": [
			"⚔ 10 - Basic",
			"⚔ 24 - Thrust (no weapon)",
			"⚔ 40 - Thrust (has weapon)",
			"⚔ 16 - Lift (no weapon)",
			"⚔ 32 - (has weapon)",
			"⚔ 20 - Tail (no weapon)",
			"⚔ 36 - Tail (has weapon)",
			"⚔ 24 - Kick (no weapon)",
			"⚔ 40 - Kick (has weapon)"
		],
		"variants": 7,
    "desc": "Attacks vary; damage depends if it uses weapons. Strategic measures are required; all attacks cause destruction. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Goblin"
		],
    "spawn": [
			"⌂ Underground, spawns in the center of a Cavern Stash."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Blood-stained",
    "health": [
			"♡ 4"
		],
    "damage": [
			"⚔ 34"
		],
		"variants": 1,
    "desc": "Can break doors. Has a 90% chance to reassemble itself when killed. Has a 55% chance to die when inflcied with slowness or mining fatigue. Burns in daylight.",
    "weaknesses": [
      "Daylight",
      "Slowness",
      "Mining Fatigue"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Bone", "amount": "0-2" },
      { "item": "Bloodclot", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Land Leech",
    "health": [
			"♡ 10 - Small",
			"♡ 15 - Medium",
			"♡ 20 - Large",
			"♡ 25 - Larger"
		],
    "damage": [
			"⚔ 5 - Small",
			"⚔ 10 - Medium",
			"⚔ 15 - Large",
			"⚔ 20 - Larger"
		],
		"variants": 4,
    "desc": "Sizes vary; damage ranges between 5-20 and health ranges between 10-25. Attacks inflict weakness; duration depends on size, ranges from 1-8 seconds. Passively latches on target's face to constantly deal damage.",
    "weaknesses": [
      "Rock Salt Items",
      "Rock Salt Blocks"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Illager",
			"⊕ Witch"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Grub Larva (small)", "amount": "0-2" },
      { "item": "Grub Larva (medium)", "amount": "1-4" },
      { "item": "Grub Larva (large)", "amount": "2-6" },
      { "item": "Grub Larva (larger)", "amount": "3-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Fire Maiden",
    "health": [
			"♡ 46"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 6 - Ranged (normal)",
			"⚔ 12 - Ranged (soul)"
		],
		"variants": 2,
    "desc": "Ranged by default. Entering the Soul Sand Valley creates a soul version; damage is doubled and uses soul fire instead. Takes heavy damage from water and rain. Tameable using wither roses. Feed her coal or coal blocks to heal her; only works for tamed ones. Obtain charcoal if interacted with raw food items; soul versions can be interacted with cooked food too. Obtain cooked food when interacted raw food; only works for tamed ones. Obtain blocks of metal when interacted with raw metal blocks; only works with tamed ones in soul state.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Water (has water breathing)",
      "Fire",
      "Fall"
    ],
    "target": [
			"⊕ Non-Terraflare (wild)",
			"⊕ Non-Player (tamed)"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Charcoal (use raw food, untamed, normal)", "amount": "1" },
      { "item": "Charcoal (use any food, soul)", "amount": "1" },
      { "item": "Cooked Food (use raw food, tamed, normal)", "amount": "1" },
      { "item": "Metal Block (use raw ore block, tamed, soul)", "amount": "1" },
      { "item": "Bloodclot", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Fly-dragon",
    "health": [
			"♡ 20"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 2 - Ranged"
		],
		"variants": 1,
    "desc": "Ranged by default. Immune to fire.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fall",
      "Fire"
    ],
    "target": [
			"⊕ Non-Fly-dragon"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Fly-dragon Eye", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gravedigger",
    "health": [
			"♡ 56"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 16,
    "desc": "Melee by default and digs holes underneath targets. It'll dig a deep hole beneath nearby targets after 10-15 seconds as long as it's not in level -48. Passively gains resistance when in level -48; duration is constant. Attacks are delayed.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead",
			"⊕ Non-Vastatos"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-4" },
      { "item": "Durasteel Nugget", "amount": "0-2" },
      { "item": "Trencher's Spade", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Sgouger",
    "health": [
			"♡ 120 - Normal",
			"♡ 480 - Colossal"
		],
    "damage": [
			"⚔ 10 - Basic (normal)",
			"⚔ 20 - Impact (normal)",
			"⚔ 20 - Basic (colossal)",
			"⚔ 48 - Impact (colossal)"
		],
		"variants": 3,
    "desc": "Sizes vary; damage ranges between 20-48 and health ranges between 120-480. Melee by default and pounces at times. Strategic measures required; will reappear after burrowing between 2-10 seconds next to the nearest target.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead",
			"⊕ Non-Vastatos"
		],
    "spawn": [
			"⌂ Desert", "⌂ Mesa",
			"⌂ Soulsand Valley"
		],
    "loot": [
      { "item": "Bone (normal)", "amount": "2-5" },
      { "item": "Bone Block (normal)", "amount": "1-3" },
      { "item": "Bone (colossal)", "amount": "6-15" },
      { "item": "Bone Block (colossal)", "amount": "3-9" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rootling",
    "health": [
			"♡ 10"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 9,
    "desc": "Takes heavy damage from fire and lava. Damage dealt from vanilla axes or within the add-on is 2 times greater. Feed it one meal to have a 50/50 chance to either explode or give 10 of their respective saplings and grow into a Hollow ent. Nether variants are immune to fire.",
    "weaknesses": [
      "Fire (non-nether variants)",
      "Axes"
    ],
    "immunities": [
      "Fire (nether variants)"
    ],
    "target": [
			"⊕ Non-Ent"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 2 to 6.",
			"⌂ Crimson Forest, spawns in groups of 2 to 6.",
			"⌂ Warped Forest, spawns in groups of 2 to 6."
		],
    "loot": [
      { "item": "Stick", "amount": "0-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lunarid",
    "health": [
			"♡ 46"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 18 - Ranged"
		],
		"variants": 1,
    "desc": "Ranged by default. Projectiles vary; effects depend on variation. Titan inflict poison for 15 seconds. Callisto inflicts slowness for 5 seconds. Europa inflicts slowness for 20 seconds. Ganymede inflicts slowness for 40 seconds. Io inflicts nausea for 40 seconds. Passively teleports around a 11⌂11 cube during combat. Burns in daylight.",
    "weaknesses": [
      "Water",
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Lunarid"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "False Star", "amount": "0-3" },
      { "item": "Moonstone (of type)", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Giant Scorpion",
    "health": [
			"♡ 16 - Small",
			"♡ 32 - Big"
		],
    "damage": [
			"⚔ 2 - Normal (small)",
			"⚔ 4 - At random times (small)",
			"⚔ 4 - Normal (big)",
			"⚔ 8 - At random times (big)"
		],
		"variants": 16,
    "desc": "Sizes vary; damage ranges between 2-8 and health ranges between 16-32. Has a random chance to inflict fatal poison; Duration depends on size, ranes from 10-15 seconds. Can climb walls.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Giant Scorpion"
		],
    "spawn": [
			"⌂ Desert, spawns in groups of 1 to 4.",
			"⌂ Mesa, spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Venom Gland (small)", "amount": "0-2" },
      { "item": "Venom Gland (big)", "amount": "0-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Moth Mother",
    "health": [
			"♡ 360"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 0 - Ranged"
		],
		"variants": 1,
    "desc": "Melee by default and ranged at random times. Takes heavy damage from fire and lava. Summons live temporarily; moth minions last 15-30 seconds. Attacks are modular.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Moth Mother"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10."
		],
    "loot": [
      { "item": "Moth Silk", "amount": "8-10" },
      { "item": "Moth Silk Strand", "amount": "38-56" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Funghoul",
    "health": [
			"♡ 20 - Small",
			"♡ 30 - Medium",
			"♡ 40 - Large"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 6 - Medium",
			"⚔ 8 - Large"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 4-8 and health ranges between 20-40. Attacks inflict nausea; duration depends on size, ranges between 10-20 seconds. Becomes untargettable when targets are near. Passively enhances nearby undead mobs between 15-20 seconds outside of combat with speed 2 and strength 2 for 5 seconds. Passively summons structures beneath targets during combat.",
    "weaknesses": [],
    "immunities": [
      "Anvil (hiding)",
      "Attack (hiding)",
      "Contact (hiding)",
      "Drowning (hiding)",
      "Fall (hiding)",
      "Falling  (hiding)Block",
      "Magic (hiding)",
      "Override (hiding)",
      "Piston (hiding)",
      "Projectiles (hiding)",
      "Stalactite (hiding)",
      "Stalagmite (hiding)"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to -10. Spawns in groups of 1 to 2.",
			"⌂ Mushroom Island, spawns in groups of 1 to 3.",
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Big Midnight Fungus (big)", "amount": "1-4" },
      { "item": "Small Midnight Fungus (big)", "amount": "2-8" },
      { "item": "Big Midnight Fungus (medium)", "amount": "0-3" },
      { "item": "Small Midnight Fungus (small)", "amount": "0-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shellbit",
    "health": [
			"♡ 24"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 16,
    "desc": "Attacks inflict slowness for 5 seconds. Trails shellbit mucus of their respective color.",
    "weaknesses": [
      "Rock Salt Items",
      "Rock Salt Blocks"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Shellbit"
		],
    "spawn": [
			"⌂ Swamp, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Shellbit Mucus (of color)", "amount": "0-1" },
      { "item": "Shellbit Shell (of color)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Terra-terror",
    "health": [
			"♡ 30 - Dirt type",
			"♡ 20 - Soft stone type",
			"♡ 80 - Stone type",
			"♡ 180 - Obsidian type"
		],
    "damage": [
			"⚔ 6 - Dirt type",
			"⚔ 10 - Soft stone type",
			"⚔ 14 - Stone type",
			"⚔ 24 - Obsidian type"
		],
		"variants": 22,
    "desc": "Types vary; health and damage depends on variation group. Dirts have 30 health and 6 damage, Soft Stones have 60 health and 10 damage, Stone types have 80 health and 14 damage, Obsidian types have 180 health and 24 damage. Damage dealt from vanilla shovels or within the add-on is 3 times greater for dirt types. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater for stone types. Immune to suffocation, fall, and fire. Attacks are modular.",
    "weaknesses": [
      "Pickaxes (stone variants)",
      "Shovel (sand and dirt variants)"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Terra-terror"
		],
    "spawn": [
			"⌂ Underground", "⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "1-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shroombie",
    "health": [
			"♡ 32"
		],
    "damage": [
			"⚔ 5 - melee",
			"⚔ 2 - Ranged"
		],
		"variants": 3,
    "desc": "Melee and ranged at the same time. Passively fire projectiles during combat. Attacks inflict fatal poison for 10 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Fungus",
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Mushroom Island", "⌂ Swamp, mangrove swamps included."
		],
    "loot": [
      { "item": "Grimule (of color)", "amount": "1" },
      { "item": "Grimule Sprouts (of color)", "amount": "1-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "White Lady",
    "health": [
			"♡ 40"
		],
    "damage": [
			"⚔ 10"
		],
		"variants": 1,
    "desc": "Burns in daylight. Permeates through terrain durnig combat. Passively inflicts darkness nearby. Immune to suffocation.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains", "⌂ Roofed Forest"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Dusty Paladin",
    "health": [
			"♡ 240"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 32 - Swinging (double)",
			"⚔ 40 - Slamming (double)",
			"⚔ 56 - Piercing (double)",
			"⚔ 48 - Spinning (double)",
			"⚔ 48 - Jump Swinging (double)",
			"⚔ 60 - Jump Slamming (double)",
			"⚔ 72 - Jump Piercing (double)",
			"⚔ 56 - Combining",
			"⚔ 64 - Swinging (single)",
			"⚔ 80 - Slamming (single)",
			"⚔ 96 - Spinning (single)",
			"⚔ 96 - Jump Swinging (single)",
			"⚔ 120 - Jump Slamming 1(single)",
			"⚔ 144 - Jump Piercing 1(single)"
		],
		"variants": 1,
    "desc": "Attacks vary; damage depends on state, dual state by default and damage is 2 times greater during singular state. Takes heavy damage from water and rain. Has a random chance to permanently combine weapons during combat; changes to singular state. Passively gains regeneration and resistance when health is below 25%. Attacks are modular.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Dusty Paladin"
		],
    "spawn": [
			"⌂ Desert", "⌂ Mesa"
		],
    "loot": [
      { "item": "Dune Sand", "amount": "0-3" },
      { "item": "Desolator", "amount": "0-1" },
      { "item": "Gilded Bulwark Helmet", "amount": "0-1" },
      { "item": "Gilded Bulwark Chestplate", "amount": "0-1" },
      { "item": "Gilded Bulwark Leggings", "amount": "0-1" },
      { "item": "Gilded Bulwark Boots", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Shulker Warrior",
    "health": [
			"♡ 32"
		],
    "damage": [
			"⚔ 12 - Melee",
			"⚔ 24 - Ranged"
		],
		"variants": 17,
    "desc": "Melee by default and ranged when the target is too far. Interact with it using dyes to change its color.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Shellcut",
			"⊕ Non-Shulker"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Aceroid Sword", "amount": "0-1" },
      { "item": "Shulker Rampart Helmet (of color)", "amount": "0-1" },
      { "item": "Shulker Rampart Chestplate (of color)", "amount": "0-1" },
      { "item": "Shulker Rampart Leggings (of color)", "amount": "0-1" },
      { "item": "Shulker Rampart Boots (of color)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cursed Armor",
    "health": [
			"♡ 100"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Has 1/4 chance to spawn with matching armor. Types vary; Attributes depends on type, only applicable for matching armor sets. All leather has 34 health and 4 damage, All chainmail or gold has 40 health and 6 damage, All iron has 56 health and 8 damage, All diamond has 66 health and 10 damage, and all netherite has 84 health, 14 damage, and high knockback resistance. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Cursed Armor"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Armor (of combination)", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Skulldozer",
    "health": [
			"♡ 220"
		],
    "damage": [
			"⚔ 25 - Basic (scale 1)",
			"⚔ 40 - Basic (scale 2)",
			"⚔ 55 - Basic (scale 3)",
			"⚔ 70 - Basic (scale 4)",
			"⚔ 85 - Basic (scale 5)"
		],
		"variants": 1,
    "desc": "Attacks vary; damage depends on scale, ranges from 5-25. Passively breaks terrain and scales up during combat; scales down for 5 seconds after no targets are found within 5 seconds scaling. Can collect items in their inventory.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Bone Block (scale 1)", "amount": "0-5" },
      { "item": "Bone Block (scale 2)", "amount": "0-10" },
      { "item": "Bone Block (scale 3)", "amount": "0-15" },
      { "item": "Bone Block (scale 4)", "amount": "0-20" },
      { "item": "Bone Block (scale 5)", "amount": "0-25" },
      { "item": "Rotten Flesh (scale 1)", "amount": "0-8" },
      { "item": "Rotten Flesh (scale 2)", "amount": "0-16" },
      { "item": "Rotten Flesh (scale 3)", "amount": "0-24" },
      { "item": "Rotten Flesh (scale 4)", "amount": "0-32" },
      { "item": "Rotten Flesh (scale 5)", "amount": "0-40" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Blitzir",
    "health": [
			"♡ 680"
		],
    "damage": [
			"⚔ 3 - Explosion Power (ranged)",
			"⚔ 8 - Explosion Power (falling asteroid)",
			"⚔ 1 - Explosion Power (falling phosphorus)"
		],
		"variants": 1,
    "desc": "Ranged by default. Immune to fire. Attacks are modular. Strategic measures are required; Very vulnerable in closed spaces, all attacks cause great destruction.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Blaze"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": [
      { "item": "Cobbled Asteroid", "amount": "0-32" },
      { "item": "Fire Charge", "amount": "0-128" },
      { "item": "False Star", "amount": "0-64" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bloodcurdle",
    "health": [
			"♡ 32 - Normal",
			"♡ 5 - Growing"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 5,
    "desc": "Splits into 6 parts when killed; these parts grow into a new Bloodcurdle after 2 seconds. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "1-2" },
      { "item": "Vigorous Muscle", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Kurozakal",
    "health": [
			"♡ 100"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 10 - AOE"
		],
		"variants": 1,
    "desc": "Stationary by default. Immune to the void. Snags targets and constantly damage them.",
    "weaknesses": [
      "Antilight Fragment"
    ],
    "immunities": [
      "Void"
    ],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Kurozakal"
		],
    "spawn": [
			"⌂ Void"
		],
    "loot": [
      { "item": "Null Fragment", "amount": "0-4" },
      { "item": "Null Fragment (use antilight fragment)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Solarid",
    "health": [
			"♡ 50"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 2 - Explosion Power (sun beam)",
			"⚔ 2 - Explosion Power (ranged)"
		],
		"variants": 1,
    "desc": "Attacks are modular. Immune to suffocation, explosions, and fire.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Suffocation",
      "Explosions"
    ],
    "target": [
			"⊕ Non-Solarid"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": [
      { "item": "False Star", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Dune Maiden",
    "health": [
			"♡ 26"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 1 - Ranged"
		],
		"variants": 1,
    "desc": "Dies instantly from water and rain. Ranged by default.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Fall"
    ],
    "target": [
			"⊕ Non-Dune Maiden"
		],
    "spawn": [
			"⌂ Desert, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Dune Sand", "amount": "0-3" },
      { "item": "Emerald", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Quakemight",
    "health": [
			"♡ 60 - Normal",
			"♡ 480 - Titan"
		],
    "damage": [
			"⚔ 10 - Basic (normal)",
			"⚔ 8 - AOE Burst (normal)",
			"⚔ 26 - Basic (titan)",
			"⚔ 24 - AOE Burst (titan)",
			"⚔ 40 - Swings (titan)"
		],
		"variants": 2,
    "desc": "Melee by default and modular at random times; titan form is modular by default. Takes heavy damage from fire and lava. Transforms into a titan when health falls below 33%.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Quakemight"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Vigorous Muscle (normal)", "amount": "2-10" },
      { "item": "Muscle Fiber (normal)", "amount": "0-1" },
      { "item": "Vigorous Muscle (titan)", "amount": "12-24" },
      { "item": "Muscle Fiber (titan)", "amount": "3-10" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cindermite",
    "health": [
			"♡ 10 - Small",
			"♡ 20 - Big"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 4 - Big"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 2-4 and health ranges between 10-20. Attacks inflict fire. Can climb walls. Takes heavy damage from water and rain. Passively sets fire on vanilla logs, leaves, and planks between 5-15 seconds; cannot set fire to anything related to Nether woods.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Cindermite"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Charcoal", "amount": "2-8" },
      { "item": "Burning Ember", "amount": "0-1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bone-eater",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 10 - Punching",
			"⚔ 46 - Pouncing"
		],
		"variants": 1,
    "desc": "Stalks its target before pouncing. Melee by default and pounces at times. Immune to fall.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Skeleton"
		],
    "spawn": [
			"⌂ Warped Forest, spawns in groups of 2 to 3."
		],
    "loot": [
      { "item": "Bone", "amount": "12-48" },
      { "item": "Fossil Piece", "amount": "8-24" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Land Shark",
    "health": [
			"♡ 60 - Big",
			"♡ 90 - Bigger",
			"♡ 120 - Biggest"
		],
    "damage": [
			"⚔ 32 Bite (Big)",
			"⚔ 12 Breach (Big)",
			"⚔ 12 Impact (Big)",
			"⚔ 64 Bite (Bigger)",
			"⚔ 24 Breach (Bigger)",
			"⚔ 24 Impact (Bigger)",
			"⚔ 128 Bite (Biggest)",
			"⚔ 36 Breach (Biggest)",
			"⚔ 36 Impact (Biggest)"
		],
		"variants": 1,
    "desc": "Sizes vary; health ranges from 60-120. Attacks are modular.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕"
		],
    "spawn": [
			"⌂ Plains"
		],
    "loot": [
      { "item": "Rotten Flesh (big)", "amount": "0-6" },
      { "item": "Rotten Flesh (bigger)", "amount": "2-9" },
      { "item": "Rotten Flesh (biggest)", "amount": "4-18" },
      { "item": "Bone (big)", "amount": "0-4" },
      { "item": "Bone (bigger)", "amount": "2-8" },
      { "item": "Bone (biggest)", "amount": "4-16" },
      { "item": "Shark tooth (big)", "amount": "2-6" },
      { "item": "Shark tooth (bigger)", "amount": "4-10" },
      { "item": "Shark tooth (biggest)", "amount": "8-20" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Scarecrow",
    "health": [
			"♡ 60 - Big",
			"♡ 90 - Bigger",
			"♡ 120 - Biggest"
		],
    "damage": [
			"⚔ 4 - Basic",
			"⚔ 32 - Breach (big)",
			"⚔ 64 - Breach (bigger)",
			"⚔ 96 - Breach (biggest)"
		],
		"variants": 1,
    "desc": "Stationary by default; requires target presence before action. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains", "⌂ Roofed Forest"
		],
    "loot": [
      { "item": "Fieldman's Capotain", "amount": "0-1" },
      { "item": "Wheat", "amount": "0-6" },
      { "item": "Block of Hay", "amount": "0-1" },
      { "item": "Dreadnought Feather", "amount": "0-8" },
      { "item": "Iron Nugget", "amount": "0-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Infaminous",
    "health": [
			"♡ 800"
		],
    "damage": [
			"⚔ 4 - Basic",
			"⚔ 32 - Ranged",
			"⚔ 56 - Floor Eater"
		],
		"variants": 1,
    "desc": "Strategic measures are required; this monster inflicts fatal hunger. Immune to everything. Attacks inflict hunger for 40 seconds. Damage dealt from vanilla food or within the add-on is based on their saturation points. Attacks are modular.",
    "weaknesses": [
      "Food Items"
    ],
    "immunities": [
      "Everything"
    ],
    "target": [
			"⊕ Non-Vastatos",
			"⊕ Non-Infaminous"
		],
    "spawn": [
			"⌂ Jungle, spawns from breaking the Pot of Famine."
		],
    "loot": [
      { "item": "Flesh of True Hunger", "amount": "1-4" },
      { "item": "Pot of Famine", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Lustrebone",
    "health": [
			"♡ 32"
		],
    "damage": [
			"⚔ 12 - Basic",
			"⚔ 5 - Upwards",
			"⚔ 20 - Downwards",
			"⚔ 10 - Around"
		],
		"variants": 4,
    "desc": "Passively gains a shield in light levels below 15. Immune to everything with shield on. Melee by default and modular at random times.",
    "weaknesses": [],
    "immunities": [
      "Everything (shield)"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Luminous Bone", "amount": "0-3" },
      { "item": "Antilight Fragment", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Dullahan",
    "health": [
			"♡ 80 - Normal",
			"♡ 200 - Mounting"
		],
    "damage": [
			"⚔ 6 - Basic (normal)",
			"⚔ 12 - Basic (mounting)",
			"⚔ 20 - Swing side",
			"⚔ 32 - Swing up",
			"⚔ 32 - Swing down",
			"⚔ 40 - Pierce"
		],
		"variants": 1,
    "desc": "Stats are increased when it mounts in 2nd phase; knockback resistance is 2 times greater, health is increased by 125%, and speed is 2 times greater. Damage dealt from vanilla golden equipment and similar types within the add-on is 2 times greater. Summons allies and enhances himself when killed. Attacks are modular.",
    "weaknesses": [
      "Gold Weapons"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Plains", "⌂ Mega Taiga",
			"⌂ Roofed Forest"
		],
    "loot": [
      { "item": "Tombcaller", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Deadhound",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 3 - Baby",
			"⚔ 5 - Adult"
		],
		"variants": 10,
    "desc": "Can be cured using a Golden Apple. Howls to enhance nearby undead mobs with strength 5 for 20 seconds; limited to adults. Burns in daylight.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4.",
			"⌂ Underground, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-2" },
      { "item": "Bone Meal", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ivywake",
    "health": [
			"♡ 16 - Normal",
			"♡ 32 - Fatal"
		],
    "damage": [
			"⚔ 12"
		],
		"variants": 2,
    "desc": "Attributes vary; health ranges from 16-32 and speed depends if they have a crown. Neutral by default; red ones are hostile by default. Attacks inflict fatal poison; only red ones. Takes heavy damage from fire and lava. Damage dealt from vanilla axes or within the add-on is 2 times greater. Interact using shears to obtain a yarrow crown with their respective colors but will make them aggressive. Obtain a yarrow crown with their respective colors without aggression when interacted with bone meal; has a 10 second cooldown. Attacks are modular.",
    "weaknesses": [
      "Fire",
      "Axes"
    ],
    "immunities": [],
    "target": [
			"⊕ Neutral (normal)",
			"⊕ Non-ent (fatal)"
		],
    "spawn": [
			"⌂ Jungle, bamboo forests included. Spawns in groups of 2 to 4.",
			"⌂ Forest, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Vine", "amount": "0-3" },
      { "item": "Yarrow Crown (of color, use bone meal or shears)", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Torchure",
    "health": [
			"♡ 52"
		],
    "damage": [
			"⚔ 12 - Melee",
			"⚔ 4 - Ranged"
		],
		"variants": 9,
    "desc": "Overworld wood variants will be burnt on soul fire. Immune to fire. Damage dealt from vanilla axes or within the add-on is 2 times greater. Nether variants are immune to fire. Attacks are modular.",
    "weaknesses": [
      "Axes",
      "Water",
      "Soul Fire (non-nether variants)"
    ],
    "immunities": [
      "Fire",
      "Soul Fire (nether variants)"
    ],
    "target": [
			"⊕ Non-Ent"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 1 to 3.",
			"⌂ Crimson Forest, spawns in groups of 1 to 3.",
			"⌂ Warped Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Charcoal", "amount": "0-8" },
      { "item": "Log (of type)", "amount": "2-4" },
      { "item": "Coal Block (charred)", "amount": "2-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Abboh",
    "health": [
			"♡ 16"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 1,
    "desc": "Passively inflicts levitation nearby. Immune to fire. Obtain a Lantern of Vengeance when interacted with a soul lantern and kill them instantly. Takes damage in water and rain.",
    "weaknesses": [
      "Soul Lantern"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Soulsand Valley, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Lantern of Vengeance (use soul lantern)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Land Sludge",
    "health": [
			"♡ 120"
		],
    "damage": [
			"⚔ 10 - Basic",
			"⚔ 80 - Impact"
		],
		"variants": 15,
    "desc": "Passively create an AOE impact when falling at high speeds. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Immune to fire.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Slime"
		],
    "spawn": [
			"⌂ Extreme Hills, spawns in groups of 1 to 2."
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "10-26" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Chorupse",
    "health": [
			"♡ 24"
		],
    "damage": [
			"⚔ 4"
		],
		"variants": 1,
    "desc": "Attacks cause the nearest target to teleport 10 blocks above. Takes heavy damage from fire and lava. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Chorus Fruit", "amount": "0-3" },
      { "item": "Chorus Plant", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Irican",
    "health": [
			"♡ 2 - Small",
			"♡ 4 - Big"
		],
    "damage": [
			"⚔  1 - Small (normal)",
			"⚔ 2 - Big (normal)",
			"⚔ 2 - Small (bitter end)",
			"⚔ 4 - Big (bitter end)"
		],
		"variants": 17,
    "desc": "Sizes vary; damage ranges from 1-2 and health ranges from 2-4. Attacks inflict blindess; duration depends on size, ranges from 5-10 seconds. Attributes are 2 times greater a sa Bitter End variant. Takes heavy damage from fire, lava, water, and rain. Burns in daylight.",
    "weaknesses": [
      "Water",
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Villager",
			"⊕ Iron Golem",
			"⊕ Snow Golem"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3.",
			"⌂ Nether Wastes, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Ocule Tear (normal)", "amount": "0-1" },
      { "item": "Ocule Tear (big)", "amount": "0-2" },
      { "item": "Bitter Ocule Tear (small, bitter end)", "amount": "0-1" },
      { "item": "Bitter Ocule Tear (big, bitter end)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Sonaga",
    "health": [
			"♡ 2400"
		],
    "damage": [
			"⚔ 18 - Basic",
			"⚔ 30 - Swing",
			"⚔ 30 - Defend",
			"⚔ 80 - Scream",
			"⚔ 120 - Sonic Boom",
			"⚔ 60 - Bass Bomb",
			"⚔ 250 - Bass Drop"
		],
		"variants": 3,
    "desc": "Ground entity by default and flies when changing frequencies. Immune to suffocation. Attacks are modular. Strategic measures are required; All attacks cause great knockback.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "suffocation"
    ],
    "target": [
			"⊕ Non-Sonaga"
		],
    "spawn": [
			"⌂ Extreme Hills, spawns at the center of the Resonant Rest."
		],
    "loot": [
      { "item": "Sonaga Horn", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Wood Crab",
    "health": [
			"♡ 6 - Small",
			"♡ 10 - Medium",
			"♡ 14 - Large",
			"♡ 18 - Larger",
			"♡ 22 - Largest"
		],
    "damage": [
			"⚔ 1 - Small",
			"⚔ 3 - Medium",
			"⚔ 5 - Large",
			"⚔ 7 - Larger",
			"⚔ 9 - Largest"
		],
		"variants": 9,
    "desc": "Sizes vary; damage ranges between 1-5 and health ranges between 6-22. Overworld wood variants will be burnt on soul fire. Damage dealt from vanilla axes or within the add-on is 2 times greater. Take heavy damage from fire an lava.",
    "weaknesses": [
      "Axes",
      "Fire (non-nether variants)"
    ],
    "immunities": [
      "Fire (nether variants)"
    ],
    "target": [
			"⊕ Non-Ent",
			"⊕ Non-Arthropod"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 2 to 4.",
			"⌂ Crimson Forest, spawns in groups of 2 to 4.",
			"⌂ Warped Forest, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Wooden Splinter", "amount": "0-8" },
      { "item": "Log (small, of type)", "amount": "0-1" },
      { "item": "Log (medium, of type)", "amount": "0-2" },
      { "item": "Log (large, of type)", "amount": "0-3" },
      { "item": "Log (larger, of type)", "amount": "1-4" },
      { "item": "Log (largest, of type)", "amount": "2-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Citroid",
    "health": [
			"♡ 4 - Small",
			"♡ 12 - Medium",
			"♡ 20 - Large"
		],
    "damage": [
			"⚔ 2 - Small",
			"⚔ 6 - Medium",
			"⚔ 10 - Large"
		],
		"variants": 2,
    "desc": "Sizes vary; damage ranges between 2-10 and health ranges between 4-20. Passively spits acid when hurt; amount depends on size.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Undead"
		],
    "spawn": [
			"⌂ Jungle, bamboo jungles included. Spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Citroid Acid (small)", "amount": "0-3" },
      { "item": "Citroid Acid (medium)", "amount": "1-5" },
      { "item": "Citroid Acid (large)", "amount": "5-10" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Bird-brain",
    "health": [
			"♡ 8"
		],
    "damage": [
			"⚔ 5"
		],
		"variants": 1,
    "desc": "Immune to fire and magic.",
    "weaknesses": [],
    "immunities": [
      "Fall",
      "Fire",
      "Magic"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-3" },
      { "item": "Bone", "amount": "0-2" },
      { "item": "Feather", "amount": "1-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Headless Chicken",
    "health": [
			"♡ 6"
		],
    "damage": [
			"⚔ 2"
		],
		"variants": 4,
    "desc": "Burns in daylight. Can break doors. Attacks inflict poison for 15 seconds.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten Chicken (chicken)", "amount": "0-1" },
      { "item": "Feather (chicken)", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Headless Horse",
    "health": [
			"♡ 32"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 7,
    "desc": "Burns in daylight. Can break doors. Attacks inflict slowness for 10 seconds.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "0-3" },
      { "item": "Bone", "amount": "0-2" },
      { "item": "Leather", "amount": "0-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Mootaur",
    "health": [
			"♡ 46"
		],
    "damage": [
			"⚔ 12 - Swing",
			"⚔ 24 - Pierce"
		],
		"variants": 3,
    "desc": "Changes from red to brown mushroom variants when struck by lightning; vice versa. Takes heavy damage from fire and lava. Attacks are modular.",
    "weaknesses": [],
    "immunities": [
      "Lightning"
    ],
    "target": [
			"⊕ Non-Cow"
		],
    "spawn": [
			"⌂ Plains, spawns in groups of 1 to 3.",
			"⌂ Roofed Forest, spawns in groups of 1 to 3.",
			"⌂ Mushroom Island, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Beef", "amount": "1-5" },
      { "item": "Cooked Beef (death by fire)", "amount": "1-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Vee-hex",
    "health": [
			"♡ 12"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 0 - Ranged"
		],
		"variants": 1,
    "desc": "Ranged by default. Immune to fire and projectiles.",
    "weaknesses": [],
    "immunities": [
      "Fire",
      "Fall",
      "Projectiles"
    ],
    "target": [
			"⊕ Non-Vee-hex"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 1 to 2."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Stone Warrior",
    "health": [
			"♡ 32 - Stone",
			"♡ 24 - Cobblestone",
			"♡ 40 - Deepslate",
			"♡ 32 - Stonebrick",
			"♡ 32 - Mossy Stonebrick",
			"♡ 24 - Cracked Stonebrick",
			"♡ 32 - Carved Stonebrick"
		],
    "damage": [
			"⚔ 12 - Stone",
			"⚔ 8 - Cobblestone",
			"⚔ 16 - Deepslate",
			"⚔ 12 - Stonebrick",
			"⚔ 12 - Mossy Stonebrick",
			"⚔ 8 - Cracked Stonebrick",
			"⚔ 12 - Carved Stonebrick"
		],
		"variants": 7,
    "desc": "Types vary; damage ranges from between 8-16 and health ranges between 24-40. Immune to fire. Attacks are delayed. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Can beak doors. Attacks are delayed. Spawns 2-7 silverfish when killed.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Player",
			"⊕ Undead"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 0. Spawns in groups of 2 to 5."
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Inferno",
    "health": [
			"♡ 76"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 2 - Explosion Power (ranged)"
		],
		"variants": 1,
    "desc": "Ranged by default. Immune to fire and explosions.",
    "weaknesses": [],
    "immunities": [
      "Fire",
      "Explosions"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Nether Wastes"
		],
    "loot": [
      { "item": "Ember Powder", "amount": "1-6" },
      { "item": "Malefic Bone", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Inigtau",
    "health": [
			"♡ 4000"
		],
    "damage": [
			"⚔ 30 - Basic",
			"⚔ 12 - Ranged",
			"⚔ 12 - AOE",
			"⚔ 54 - Swing",
			"⚔ 16 - Geyser"
		],
		"variants": 1,
    "desc": "Immune to fire, suffocation, projectiles, and fall. Passively gains resistance from water or rain. Takes constant damage in the Nether. Passively inflicts damage nearby.",
    "weaknesses": [
      "Nether"
    ],
    "immunities": [
      "Fire",
      "Fall",
      "Suffocation",
      "Projectiles"
    ],
    "target": [
			"⊕ Non-Inigtau"
		],
    "spawn": [
			"⌂ River"
		],
    "loot": [
      { "item": "Ancient Bone", "amount": "3-10" },
      { "item": "Ancient Bone Block", "amount": "7-26" },
      { "item": "Fossil Piece", "amount": "3-6" },
      { "item": "Boiling Serpent's Passion", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cannibal",
    "health": [
			"♡ 24"
		],
    "damage": [
			"⚔ 6"
		],
		"variants": 5,
    "desc": "Heals when attacking. Has a 1/4 chance to spawn a mohawk variant; has greater damage. Can break doors.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Player",
			"⊕ Illager",
			"⊕ Villager"
		],
    "spawn": [
			"⌂ Jungle, bamboo jungles included. Spawns in groups of 2 to 6.",
			"⌂ Savanna, spawns in groups of 2 to 6."
		],
    "loot": [
      { "item": "Bone Club", "amount": "0-1" },
      { "item": "Torn Flesh", "amount": "4-16" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Vanta-ray",
    "health": [
			"♡ 12 - Small",
			"♡ 18 - Medium",
			"♡ 24 - Large",
			"♡ 30 - Larger",
			"♡ 36 - Largest"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 8 - Medium",
			"⚔ 12 - Large",
			"⚔ 16 - Larger",
			"⚔ 20 - Largest"
		],
		"variants": 1,
    "desc": "Gliding entity. Sizes vary; attack ranges between 4-20 and health ranges between 12-36. Attacks inflict blindness; duration depends on size, ranges betwen 5-25 seconds. Burns in daylight. Takes heavy damage from fire and lava.",
    "weaknesses": [
      "Daylight"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Vanta-ray"
		],
    "spawn": [
			"⌂ End, spawns in groups of 2 to 6."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Studbark",
    "health": [
			"♡ 8 - Small",
			"♡ 14 - Medium",
			"♡ 20 - Large"
		],
    "damage": [
			"⚔ 4 - Small",
			"⚔ 6 - Medium",
			"⚔ 8 - Large"
		],
		"variants": 9,
    "desc": "Sizes vary; damage ranges between 4-8 and health ranges between 8-20. Overworld wood variants will be burnt on soul fire. Damage dealt from vanilla axes or within the add-on is 2 times greater. Take heavy damage from fire an lava. Can break doors.",
    "weaknesses": [
      "Axes",
      "Fire (non-nether variants)"
    ],
    "immunities": [
      "Fire (nether variants)"
    ],
    "target": [
			"⊕ Non-Ent"
		],
    "spawn": [
			"⌂ Forest, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Wood (small, of type)", "amount": "0-1" },
      { "item": "Wood (medium, of type)", "amount": "0-2" },
      { "item": "Wood (large, of type)", "amount": "1-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Grass-gulper",
    "health": [
			"♡ 240"
		],
    "damage": [
			"⚔ 200"
		],
		"variants": 3,
    "desc": "Stationary by default; requires target presence before action. Passively inflicts slowness for 8 seconds nearby. Immune to everything. Dies instantly from explosions. Strategic measures are required; the damage is extreme. Use teleportation to get away from its mouth. Attacks are modular.",
    "weaknesses": [
      "Explosions"
    ],
    "immunities": [
      "Everything"
    ],
    "target": [
			"⊕ Non-Terra-terror"
		],
    "spawn": [
			"⌂ Plains", "⌂ Mega Taiga",
			"⌂ Mushroom Island"
		],
    "loot": [
      { "item": "Dirt", "amount": "0-10" },
      { "item": "Grass (plains)", "amount": "0-10" },
      { "item": "Mycelium (mushroom island)", "amount": "0-10" },
      { "item": "Podzol (mega taiga)", "amount": "0-10" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Megapod",
    "health": [
			"♡ 1 - Size 1",
			"♡ 2 - Size 2",
			"♡ 3 - Size 3",
			"♡ 4 - Size 4",
			"♡ 5 - Size 5",
			"♡ 6 - Size 6",
			"♡ 7 - Size 7",
			"♡ 8 - Size 8"
		],
    "damage": [
			"⚔ 2 - Size 1",
			"⚔ 4 - Size 2",
			"⚔ 6 - Size 3",
			"⚔ 8 - Size 4",
			"⚔ 10 - Size 5",
			"⚔ 12 - Size 6",
			"⚔ 14 - Size 7",
			"⚔ 16 - Size 8"
		],
		"variants": 5,
    "desc": "Sizes vary; damage ranges between 1-8 and health ranges between 2-16. Attacks inflict weakness; duration depends on size, ranges between 3-24 seconds.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Arthropod"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 2 to 5."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Crude",
    "health": [
			"♡ 12 - Small",
			"♡ 18 - Medium",
			"♡ 24 - Large"
		],
    "damage": [
			"⚔ 3 - Small",
			"⚔ 6 - Medium",
			"⚔ 12 - Large"
		],
		"variants": 1,
    "desc": "Sizes vary; damage ranges between 3-12 and health ranges between 12-24. Attacks inflict weakness; duration depends on size, ranges between 1-5 seconds. Passively drops oil when hurt. Passively inflicts fatal poison when in water; range and amplifier depends on size. Immune to fall and suffocation. Explodes when hurt by fire; explosion causes fire and power depends on size, ranges between 1-5.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fall",
      "Suffocation"
    ],
    "target": [
			"⊕ Slime"
		],
    "spawn": [
			"⌂ Desert, spawns in groups of 1 to 3.",
			"⌂ Mesa, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Petrol (small)", "amount": "0-2" },
      { "item": "Petrol (medium)", "amount": "1-4" },
      { "item": "Petrol (large)", "amount": "2-8" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Iriditite",
    "health": [
			"♡ 2 - Small",
			"♡ 4 - Medium",
			"♡ 8 - Large"
		],
    "damage": [
			"⚔ 1 - Small",
			"⚔ 2 - Medium",
			"⚔ 14 - Large"
		],
		"variants": 17,
    "desc": "Sizes vary; damage ranges from 1-4 and health ranges from 2-8. Attacks inflict blindess; duration depends on size, ranges from 10-30 seconds. Burns in daylight. Takes heavy damage from fire, lava, water, and rain. Dies instantly when attacking.",
    "weaknesses": [
      "Daylight",
      "Fall",
      "Water"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ End, spawns in groups of 1 to 3.",
			"⌂ Nether Wastes, spawns in groups of 1 to 3."
		],
    "loot": [
      { "item": "Ocule Tear (normal)", "amount": "0-1" },
      { "item": "Ocule Tear (big)", "amount": "0-2" },
      { "item": "Bitter Ocule Tear (small, bitter end)", "amount": "0-1" },
      { "item": "Bitter Ocule Tear (big, bitter end)", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Rockram",
    "health": [
			"♡ 32"
		],
    "damage": [
			"⚔ 12"
		],
		"variants": 10,
    "desc": "Attacks inflict knockback. Damage dealt from vanilla pickaxes or within the add-on is 5 times greater. Immune to fire, fall, and suffocation.",
    "weaknesses": [
      "Pickaxes"
    ],
    "immunities": [
      "Fire",
      "Fall",
      "Suffocation"
    ],
    "target": [
			"⊕ Non-Rockram"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Stone (of type)", "amount": "0-4" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Nullen",
    "health": [
			"♡ 320"
		],
    "damage": [
			"⚔ 0 + 1 per level (500) AOE"
		],
		"variants": 1,
    "desc": "Passively increases damage when consuming entities. Drags nearby targets towards it; items get continuously dragged while mobs are dragged little-By-Little. Immune to everything. Takes heavy damage from antilight equipment and monsters.",
    "weaknesses": [
      "Antilight",
      "Antilight Fragment"
    ],
    "immunities": [
      "Everything except attack"
    ],
    "target": [
			"⊕ Non-Nullen"
		],
    "spawn": [
			"⌂ Void"
		],
    "loot": [
      { "item": "Nullen Core (use antilight fragment)", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Gravitite",
    "health": [
			"♡ 6000"
		],
    "damage": [
			"⚔ 12 - Basic",
			"⚔ 40 - Swing",
			"⚔ 80 - Thrust",
			"⚔ 240 - Crush",
			"⚔ 40 - Break"
		],
		"variants": 1,
    "desc": "Attacks are modular. Immune to fire and knockback. Takes heavy damage from explosions. Damage dealt from vanilla pickaxes or within the add-on is 2 times greater.",
    "weaknesses": [
      "Pickaxes",
      "Explosions"
    ],
    "immunities": [
      "Fire",
      "Projectiles"
    ],
    "target": [
			"⊕ Non-Gravitite"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns when breaking a Gravitite Treasure Trap."
		],
    "loot": [
      { "item": "Gravitite Treasure", "amount": "1" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Hailrog",
    "health": [
			"♡ 30"
		],
    "damage": [
			"⚔ 2 - Melee",
			"⚔ 2 - Small Hail",
			"⚔ 3 - Explosion Power (big hail)"
		],
		"variants": 1,
    "desc": "Immune to projectiles. Takes heavy damage from fire and lava. Passively summons falling hailstones during combat; duration depends on size, small ones inflict lasts for 5 seconds and big ones lasts for 2 seconds.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Fall",
      "Projctiles"
    ],
    "target": [
			"⊕ Non-Hailrog"
		],
    "spawn": [
			"⌂ Ice Plains", "⌂ Ice Spikes",
			"⌂ Mountains",
			"⌂ Frozen Ocean"
		],
    "loot": [
      { "item": "Glacial Ice", "amount": "0-3" },
      { "item": "Ice", "amount": "0-3" },
      { "item": "Snowball", "amount": "1-5" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Cataclashm",
    "health": [
			"♡ 90"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 4 - Explosion Power (orbs)"
		],
		"variants": 1,
    "desc": "Summons 1-2 orbs during combat every second. Summons live temporarily; sprites last 10-25 seconds or despawn after attacking. Orbs cause explosiosn when attacking. Immune to fire.",
    "weaknesses": [],
    "immunities": [
      "Fire",
      "Fall"
    ],
    "target": [
			"⊕ Non-Cataclashm"
		],
    "spawn": [
			"⌂ End"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Smogmaul",
    "health": [
			"♡ 20"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 1,
    "desc": "Passively inflicts blindness and wither for 20 seconds. Immune to fire.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Fall"
    ],
    "target": [
			"⊕ Non-Smogmaul"
		],
    "spawn": [
			"⌂ Basalt Deltas, spawns in groups of 2 to 4."
		],
    "loot": [
      { "item": "Biocarbon", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Sting-face",
    "health": [
			"♡ 4 - Baby",
			"♡ 14 - Adult"
		],
    "damage": [
			"⚔ 2 - Baby",
			"⚔ 6 - Adult"
		],
		"variants": 8,
    "desc": "Sizes vary; damage ranges between 2-4 and health ranges between 6-14. Attacks inflict poison; duration depends on size, ranges between 5-10 seconds. Passively throws eggs during combat; limited to adults.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Sting-face"
		],
    "spawn": [
			"⌂ Swamp, mangrove swamps included. Spawns in groups of 2 to 5.",
			"⌂ Jungle, bamboo jungles included. Spawns in groups of 2 to 5.",
			"⌂ Plains, spawns in groups of 2 to 5."
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Afterburn",
    "health": [
			"♡ 46"
		],
    "damage": [
			"⚔ 5 - Melee",
			"⚔ 4 - Explosion Power"
		],
		"variants": 1,
    "desc": "Ranged by default. Immune to fire and explosions. Takes heavy damage from water and rain.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire",
      "Explosions",
      "Fall"
    ],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Basalt Deltas"
		],
    "loot": [
      { "item": "Coal", "amount": "2-4" },
      { "item": "Charred Bone", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Calyero",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 4 - Basic",
			"⚔ 12 - Swinging side",
			"⚔ 20 - Swinging down",
			"⚔ 5 - Defend"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Converts into iron blocks when submerged underwater. Contact with water or rain causes it to drop iron nuggets. Attacks are modular.",
    "weaknesses": [
      "Water"
    ],
    "immunities": [
      "Fire"
    ],
    "target": [
			"⊕ Non-Overflow"
		],
    "spawn": [
			"⌂ Basalt Deltas"
		],
    "loot": []
  },
  {
    "namespace": "raigen",
    "name": "Corpse-crawler",
    "health": [
			"♡ 280"
		],
    "damage": [
			"⚔ 8 - Basic",
			"⚔ 18 - Swing",
			"⚔ 32 - Swing both",
			"⚔ 48 - Sting"
		],
		"variants": 1,
    "desc": "Attacks are modular.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Undead"
		],
    "spawn": [
			"⌂ Monster Biomes, spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Rotten Flesh", "amount": "14-52" },
      { "item": "Vigorous Muscle", "amount": "12-32" },
      { "item": "Bone", "amount": "14-52" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ringwyrm",
    "health": [
			"♡ 180"
		],
    "damage": [
			"⚔ 2 - Size 1",
			"⚔ 4 - Size 2",
			"⚔ 6 - Size 3",
			"⚔ 8 - Size 4",
			"⚔ 10 - Size 5",
			"⚔ 12 - Size 6",
			"⚔ 14 - Size 7",
			"⚔ 16 - Size 8",
			"⚔ 18 - Size 9",
			"⚔ 20 - Size 10"
		],
		"variants": 1,
    "desc": "Sizes vary; damage depends on length, ranges from 2-20. Passively increases damage when attacking. Shortens when hurt.",
    "weaknesses": [],
    "immunities": [],
    "target": [
			"⊕ Non-Ringwyrm"
		],
    "spawn": [
			"⌂ Underground, spawns between -63 to 10."
		],
    "loot": [
      { "item": "Ringwyrm Scales", "amount": "0-6" },
      { "item": "Fossil Piece", "amount": "0-3" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Ovex",
    "health": [
			"♡ 60"
		],
    "damage": [
			"⚔ 6 - Normal",
			"⚔ 12 - At random times"
		],
		"variants": 1,
    "desc": "Takes heavy damage from water and rain. Contact with fire, lava, or explosions will cause it to detonate. Taking damage will cause it to explode random positions. Attacks are delayed.",
    "weaknesses": [
      "Explosions (non-family afflicted)",
      "Fire"
    ],
    "immunities": [],
    "target": [
			"⊕ Non-Ovex"
		],
    "spawn": [
			"⌂ Nether Wastes, spawns in groups of 1 to 4."
		],
    "loot": [
      { "item": "Ovex Fluid", "amount": "0-2" }
    ]
  },
  {
    "namespace": "raigen",
    "name": "Fallen Summoner",
    "health": [
			"♡ 800 - Normal",
			"♡ 1600 - Annoyed",
			"♡ 2400 - Serious"
		],
    "damage": [
			"⚔ 8"
		],
		"variants": 3,
    "desc": "Strategic measures are required; has 3 phases and each summoned monster's difficulty will depend on the phase. Attacks are modular. Immune to lightning.",
    "weaknesses": [
      "Fire"
    ],
    "immunities": [
      "Fall"
    ],
    "target": [
			"⊕ Non-Fallen Summoner"
		],
    "spawn": [
			"⌂ Plains, spawns when breaking the Mawhali Record Monument."
		],
    "loot": [
      { "item": "Mawhali Record", "amount": "1" }
    ]
  }
]