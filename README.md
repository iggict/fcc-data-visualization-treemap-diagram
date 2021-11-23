# Visualize Data with a Treemap Diagram

Challenge for the "Data Visualization" module of FreeCodeCamp

---

## User stories

- #**01**: My tree map should have a title with a corresponding `id="title"`.
- #**02**: My tree map should have a description with a corresponding `id="description"`.
- #**03**: My tree map should have `rect` elements with a corresponding `class="tile"` that represent the data.
- #**04**: There should be at least 2 different fill colors used for the tiles.
- #**05**: Each tile should have the properties `data-name`, `data-category`, and `data-value` containing their corresponding `name`, `category`, and `value`.
- #**06**: The area of each tile should correspond to the `data-value` amount: tiles with a larger `data-value` should have a bigger area.
- #**07**: My tree map should have a legend with corresponding `id="legend"`.
- #**08**: My legend should have `rect` elements with a corresponding `class="legend-item"`.
- #**09**: The `rect` elements in the legend should use at least 2 different fill colors.
- #**10**: I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
- #**11**: My tooltip should have a `data-value` property that corresponds to the `data-value` of the active area.

## JSON files

For this project you can use any of the following datasets:

### Kickstarter Pledges

https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json

<details>
  <summary>JSON</summary>

```json
{
  "name": "Kickstarter",
  "children": [
    {
      "name": "Product Design",
      "children": [
        {
          "name": "Pebble Time - Awesome Smartwatch, No Compromises",
          "category": "Product Design",
          "value": "20338986"
        },
        {
          "name": "COOLEST COOLER: 21st Century Cooler that's Actually Cooler",
          "category": "Product Design",
          "value": "13285226"
        },
        {
          "name": "Pebble 2, Time 2 + All-New Pebble Core",
          "category": "Product Design",
          "value": "12779843"
        },
        {
          "name": "Pebble: E-Paper Watch for iPhone and Android",
          "category": "Product Design",
          "value": "10266845"
        },
        {
          "name": "The World's Best TRAVEL JACKET with 15 Features || BAUBAX",
          "category": "Product Design",
          "value": "9192055"
        },
        {
          "name": "The Everyday Backpack, Tote, and Sling",
          "category": "Product Design",
          "value": "6565782"
        },
        {
          "name": "Fidget Cube: A Vinyl Desk Toy",
          "category": "Product Design",
          "value": "6465690"
        },
        {
          "name": "The Everyday Messenger: A Bag For Cameras & Essential Carry",
          "category": "Product Design",
          "value": "4869472"
        },
        {
          "name": "The Dash Wireless Smart In Ear Headphones",
          "category": "Product Design",
          "value": "3390551"
        },
        {
          "name": "G-RO: Revolutionary Carry-on Luggage",
          "category": "Product Design",
          "value": "3307773"
        },
        {
          "name": "Smart Parka - The World's First Complete Winter Coat",
          "category": "Product Design",
          "value": "3257695"
        },
        {
          "name": "Nebia Shower - Better experience, 70% less water",
          "category": "Product Design",
          "value": "3126114"
        },
        {
          "name": "Taga 2.0 - The Ultimate, Most Affordable Family Bike",
          "category": "Product Design",
          "value": "2568586"
        },
        {
          "name": "ZUNGLE : Wear the Beats",
          "category": "Product Design",
          "value": "1947035"
        },
        {
          "name": "The ultimate sleep sanctuary: Kokoon EEG headphones",
          "category": "Product Design",
          "value": "1936825"
        },
        {
          "name": "The NOMATIC Travel Bag",
          "category": "Product Design",
          "value": "1725336"
        },
        {
          "name": "EMOTIV INSIGHT: Optimize your brain fitness & performance",
          "category": "Product Design",
          "value": "1643117"
        },
        {
          "name": "Ulo",
          "category": "Product Design",
          "value": "1618869"
        },
        {
          "name": "Floating Vertical Turntable",
          "category": "Product Design",
          "value": "1575976"
        }
      ]
    },
    {
      "name": "Tabletop Games",
      "children": [
        {
          "name": "Exploding Kittens",
          "category": "Tabletop Games",
          "value": "8782571"
        },
        {
          "name": "Zombicide: Black Plague",
          "category": "Tabletop Games",
          "value": "4079204"
        },
        {
          "name": "Dark Souls - The Board Game",
          "category": "Tabletop Games",
          "value": "3771474"
        },
        {
          "name": "Massive Darkness",
          "category": "Tabletop Games",
          "value": "3560642"
        },
        {
          "name": "Conan",
          "category": "Tabletop Games",
          "value": "3327757"
        },
        {
          "name": "Joking Hazard",
          "category": "Tabletop Games",
          "value": "3246588"
        },
        {
          "name": "Reaper Miniatures Bones II: The Return Of Mr Bones!",
          "category": "Tabletop Games",
          "value": "3169610"
        },
        {
          "name": "Zombicide: Season 3",
          "category": "Tabletop Games",
          "value": "2849064"
        },
        {
          "name": "KULT: Divinity Lost - Horror Roleplaying Game (RPG)",
          "category": "Tabletop Games",
          "value": "2746655"
        },
        {
          "name": "Reaper Miniatures Bones 3: The Search for Mr. Bones!",
          "category": "Tabletop Games",
          "value": "2730365"
        },
        {
          "name": "TRUDVANG CHRONICLES",
          "category": "Tabletop Games",
          "value": "2709837"
        },
        {
          "name": "The Duchess - A Gaming Table from BoardGameTables.com",
          "category": "Tabletop Games",
          "value": "2592231"
        },
        {
          "name": "Dwarven Forge's Modular City Builder Terrain System",
          "category": "Tabletop Games",
          "value": "2359260"
        },
        {
          "name": "Zombicide: Season 2",
          "category": "Tabletop Games",
          "value": "2255018"
        },
        {
          "name": "Dwarven Forge's Caverns-Dwarvenite Game Tiles Terrain",
          "category": "Tabletop Games",
          "value": "2140851"
        },
        {
          "name": "Kingdom Death : Monster",
          "category": "Tabletop Games",
          "value": "2049721"
        },
        {
          "name": "Dwarven Forge's Game Tiles: Revolutionary Miniature Terrain",
          "category": "Tabletop Games",
          "value": "1908155"
        },
        {
          "name": "Scythe",
          "category": "Tabletop Games",
          "value": "1810294"
        },
        {
          "name": "Dwarven Forge's Castles: 3-D Modular Terrain for Gamers",
          "category": "Tabletop Games",
          "value": "1781736"
        },
        {
          "name": "Arcadia Quest: Inferno",
          "category": "Tabletop Games",
          "value": "1710713"
        }
      ]
    },
    {
      "name": "Gaming Hardware",
      "children": [
        {
          "name": "OUYA: A New Kind of Video Game Console",
          "category": "Gaming Hardware",
          "value": "8596474"
        },
        {
          "name": "Oculus Rift: Step Into the Game",
          "category": "Gaming Hardware",
          "value": "2437429"
        }
      ]
    },
    {
      "name": "Video Games",
      "children": [
        {
          "name": "Shenmue 3",
          "category": "Video Games",
          "value": "6333295"
        },
        {
          "name": "Bloodstained: Ritual of the Night",
          "category": "Video Games",
          "value": "5545991"
        },
        {
          "name": "Torment: Tides of Numenera",
          "category": "Video Games",
          "value": "4188927"
        },
        {
          "name": "Pillars of Eternity (formerly Project Eternity)",
          "category": "Video Games",
          "value": "3986929"
        },
        {
          "name": "Mighty No. 9",
          "category": "Video Games",
          "value": "3845170"
        },
        {
          "name": "Double Fine Adventure",
          "category": "Video Games",
          "value": "3336371"
        },
        {
          "name": "Wasteland 2",
          "category": "Video Games",
          "value": "2933252"
        },
        {
          "name": "BATTLETECH - Tactical 'Mech Combat Returns to the PC.",
          "category": "Video Games",
          "value": "2785537"
        },
        {
          "name": "Homestuck Adventure Game",
          "category": "Video Games",
          "value": "2485506"
        },
        {
          "name": "HEX MMO Trading Card Game",
          "category": "Video Games",
          "value": "2278255"
        },
        {
          "name": "Camelot Unchained",
          "category": "Video Games",
          "value": "2232933"
        },
        {
          "name": "Planetary Annihilation - A Next Generation RTS",
          "category": "Video Games",
          "value": "2229344"
        },
        {
          "name": "Star Citizen",
          "category": "Video Games",
          "value": "2134374"
        },
        {
          "name": "Yooka-Laylee - A 3D Platformer Rare-vival!",
          "category": "Video Games",
          "value": "2090104"
        },
        {
          "name": "Divinity: Original Sin 2",
          "category": "Video Games",
          "value": "2032434"
        },
        {
          "name": "Shroud of the Avatar: Forsaken Virtues",
          "category": "Video Games",
          "value": "1919275"
        },
        {
          "name": "Shadowrun Returns",
          "category": "Video Games",
          "value": "1836447"
        },
        {
          "name": "Crowfall - Throne War PC MMO",
          "category": "Video Games",
          "value": "1766204"
        },
        {
          "name": "WARMACHINE: TACTICS",
          "category": "Video Games",
          "value": "1578950"
        },
        {
          "name": "Elite: Dangerous",
          "category": "Video Games",
          "value": "1578316"
        }
      ]
    },
    {
      "name": "Sound",
      "children": [
        {
          "name": "Pono Music - Where Your Soul Rediscovers Music",
          "category": "Sound",
          "value": "6225354"
        },
        {
          "name": "OSSIC X: The first 3D audio headphones calibrated to you",
          "category": "Sound",
          "value": "2708472"
        },
        {
          "name": "Revols - Premium Quick Custom-Fit Wireless Earphones",
          "category": "Sound",
          "value": "2530756"
        },
        {
          "name": "Nura: Headphones that learn and adapt to your unique hearing",
          "category": "Sound",
          "value": "1803988"
        }
      ]
    },
    {
      "name": "Television",
      "children": [
        {
          "name": "Bring Back MYSTERY SCIENCE THEATER 3000",
          "category": "Television",
          "value": "5764229"
        }
      ]
    },
    {
      "name": "Narrative Film",
      "children": [
        {
          "name": "The Veronica Mars Movie Project",
          "category": "Narrative Film",
          "value": "5702153"
        },
        {
          "name": "WISH I WAS HERE",
          "category": "Narrative Film",
          "value": "3105473"
        },
        {
          "name": "Blue Mountain State: The Movie",
          "category": "Narrative Film",
          "value": "1911827"
        }
      ]
    },
    {
      "name": "Web",
      "children": [
        {
          "name": "Bring Reading Rainbow Back for Every Child, Everywhere!",
          "category": "Web",
          "value": "5408916"
        }
      ]
    },
    {
      "name": "Hardware",
      "children": [
        {
          "name": "Altered:Nozzle - Same tap. 98% less water.",
          "category": "Hardware",
          "value": "4961032"
        },
        {
          "name": "The Superbook: Turn your smartphone into a laptop",
          "category": "Hardware",
          "value": "2952508"
        },
        {
          "name": "3Doodler: The World's First 3D Printing Pen",
          "category": "Hardware",
          "value": "2344134"
        },
        {
          "name": "CHIP - The World's First Nine Dollar Computer",
          "category": "Hardware",
          "value": "2071927"
        },
        {
          "name": "PINE A64, First $15 64-Bit Single Board Super Computer",
          "category": "Hardware",
          "value": "1731465"
        },
        {
          "name": "Remix Mini - The World's First True Android PC.",
          "category": "Hardware",
          "value": "1647155"
        },
        {
          "name": "Cubetto - Hands on coding for ages 3 and up",
          "category": "Hardware",
          "value": "1596457"
        }
      ]
    },
    {
      "name": "Games",
      "children": [
        {
          "name": "Reaper Miniatures Bones: An Evolution Of Gaming Miniatures",
          "category": "Games",
          "value": "3429235"
        }
      ]
    },
    {
      "name": "3D Printing",
      "children": [
        {
          "name": "The Micro: The First Truly Consumer 3D Printer",
          "category": "3D Printing",
          "value": "3401361"
        },
        {
          "name": "Tiko - The Unibody 3D Printer",
          "category": "3D Printing",
          "value": "2950874"
        },
        {
          "name": "FLUX Delta - The Everything Printer for Designers",
          "category": "3D Printing",
          "value": "1641075"
        },
        {
          "name": "TRINUS - The Affordable All-Metal 3D Printer",
          "category": "3D Printing",
          "value": "1621021"
        }
      ]
    },
    {
      "name": "Technology",
      "children": [
        {
          "name": "ZNAPS - Connection is just a snap away",
          "category": "Technology",
          "value": "3007370"
        },
        {
          "name": "FORM 1: An affordable, professional 3D printer",
          "category": "Technology",
          "value": "2945885"
        },
        {
          "name": "Purple\\xae Pillow: The World's First No-Pressure Pillow",
          "category": "Technology",
          "value": "2640852"
        },
        {
          "name": "Sense: Know More. Sleep Better.",
          "category": "Technology",
          "value": "2410741"
        },
        {
          "name": "ZANO - Autonomous. Intelligent. Swarming. Nano Drone.",
          "category": "Technology",
          "value": "2335119"
        },
        {
          "name": "OLO - The First Ever Smartphone 3D Printer.",
          "category": "Technology",
          "value": "2321811"
        },
        {
          "name": "SpeedX Leopard | the first ever smart aero road bike",
          "category": "Technology",
          "value": "2319876"
        },
        {
          "name": "MOVE motorize blinds and shades",
          "category": "Technology",
          "value": "1609835"
        }
      ]
    },
    {
      "name": "Wearables",
      "children": [
        {
          "name": "Ticwatch 2: The Most Interactive Smartwatch",
          "category": "Wearables",
          "value": "2085491"
        },
        {
          "name": "Vi. The First True Artificial Intelligence Personal Trainer",
          "category": "Wearables",
          "value": "1688179"
        },
        {
          "name": "BLOCKS - The World's First Modular Smartwatch",
          "category": "Wearables",
          "value": "1613874"
        }
      ]
    },
    {
      "name": "Sculpture",
      "children": [
        {
          "name": "Sisyphus The Kinetic Art Table",
          "category": "Sculpture",
          "value": "1924018"
        }
      ]
    },
    {
      "name": "Apparel",
      "children": [
        {
          "name": "ADV3NTURE Hoodie, the Most Funded Fashion Kickstarter EVER!",
          "category": "Apparel",
          "value": "1851033"
        }
      ]
    },
    {
      "name": "Food",
      "children": [
        {
          "name": "Anova Precision Cooker - Cook sous vide with your phone",
          "category": "Food",
          "value": "1811321"
        },
        {
          "name": "The Field Skillet: Lighter, Smoother Cast Iron",
          "category": "Food",
          "value": "1633361"
        }
      ]
    },
    {
      "name": "Art",
      "children": [
        {
          "name": "Illustrator's Guidebook",
          "category": "Art",
          "value": "1688094"
        }
      ]
    },
    {
      "name": "Gadgets",
      "children": [
        {
          "name": "Prynt: the first instant camera case for iPhone and Android",
          "category": "Gadgets",
          "value": "1576011"
        }
      ]
    },
    {
      "name": "Drinks",
      "children": [
        {
          "name": "The uKeg Pressurized Growler for Fresh Beer",
          "category": "Drinks",
          "value": "1559525"
        }
      ]
    }
  ]
}
```

</details>

### Movie Sales:

https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json

<details>
  <summary>JSON</summary>

```json
{
  "name": "Movies",
  "children": [
    {
      "name": "Action",
      "children": [
        {
          "name": "Avatar ",
          "category": "Action",
          "value": "760505847"
        },
        {
          "name": "Jurassic World ",
          "category": "Action",
          "value": "652177271"
        },
        {
          "name": "The Avengers ",
          "category": "Action",
          "value": "623279547"
        },
        {
          "name": "The Dark Knight ",
          "category": "Action",
          "value": "533316061"
        },
        {
          "name": "Star Wars: Episode I - The Phantom Menace ",
          "category": "Action",
          "value": "474544677"
        },
        {
          "name": "Star Wars: Episode IV - A New Hope ",
          "category": "Action",
          "value": "460935665"
        },
        {
          "name": "Avengers: Age of Ultron ",
          "category": "Action",
          "value": "458991599"
        },
        {
          "name": "The Dark Knight Rises ",
          "category": "Action",
          "value": "448130642"
        },
        {
          "name": "Pirates of the Caribbean: Dead Man's Chest ",
          "category": "Action",
          "value": "423032628"
        },
        {
          "name": "Iron Man 3",
          "category": "Action",
          "value": "408992272"
        },
        {
          "name": "Captain America: Civil War ",
          "category": "Action",
          "value": "407197282"
        },
        {
          "name": "Spider-Man ",
          "category": "Action",
          "value": "403706375"
        },
        {
          "name": "Transformers: Revenge of the Fallen ",
          "category": "Action",
          "value": "402076689"
        },
        {
          "name": "Star Wars: Episode III - Revenge of the Sith ",
          "category": "Action",
          "value": "380262555"
        },
        {
          "name": "The Lord of the Rings: The Return of the King ",
          "category": "Action",
          "value": "377019252"
        },
        {
          "name": "Spider-Man 2",
          "category": "Action",
          "value": "373377893"
        },
        {
          "name": "Deadpool ",
          "category": "Action",
          "value": "363024263"
        },
        {
          "name": "Transformers: Dark of the Moon ",
          "category": "Action",
          "value": "352358779"
        },
        {
          "name": "American Sniper ",
          "category": "Action",
          "value": "350123553"
        },
        {
          "name": "Furious 7",
          "category": "Action",
          "value": "350034110"
        },
        {
          "name": "The Lord of the Rings: The Two Towers ",
          "category": "Action",
          "value": "340478898"
        },
        {
          "name": "Spider-Man 3",
          "category": "Action",
          "value": "336530303"
        },
        {
          "name": "Minions ",
          "category": "Action",
          "value": "336029560"
        },
        {
          "name": "Guardians of the Galaxy ",
          "category": "Action",
          "value": "333130696"
        },
        {
          "name": "Batman v Superman: Dawn of Justice ",
          "category": "Action",
          "value": "330249062"
        },
        {
          "name": "Transformers ",
          "category": "Action",
          "value": "318759914"
        },
        {
          "name": "Iron Man ",
          "category": "Action",
          "value": "318298180"
        },
        {
          "name": "Indiana Jones and the Kingdom of the Crystal Skull ",
          "category": "Action",
          "value": "317011114"
        },
        {
          "name": "The Lord of the Rings: The Fellowship of the Ring ",
          "category": "Action",
          "value": "313837577"
        },
        {
          "name": "Iron Man 2",
          "category": "Action",
          "value": "312057433"
        },
        {
          "name": "Star Wars: Episode II - Attack of the Clones ",
          "category": "Action",
          "value": "310675583"
        },
        {
          "name": "Pirates of the Caribbean: At World's End ",
          "category": "Action",
          "value": "309404152"
        },
        {
          "name": "Star Wars: Episode VI - Return of the Jedi ",
          "category": "Action",
          "value": "309125409"
        },
        {
          "name": "Independence Day ",
          "category": "Action",
          "value": "306124059"
        },
        {
          "name": "Pirates of the Caribbean: The Curse of the Black Pearl ",
          "category": "Action",
          "value": "305388685"
        },
        {
          "name": "Skyfall ",
          "category": "Action",
          "value": "304360277"
        },
        {
          "name": "Inception ",
          "category": "Action",
          "value": "292568851"
        },
        {
          "name": "Man of Steel ",
          "category": "Action",
          "value": "291021565"
        },
        {
          "name": "Star Wars: Episode V - The Empire Strikes Back ",
          "category": "Action",
          "value": "290158751"
        },
        {
          "name": "The Matrix Reloaded ",
          "category": "Action",
          "value": "281492479"
        },
        {
          "name": "The Amazing Spider-Man ",
          "category": "Action",
          "value": "262030663"
        },
        {
          "name": "The Incredibles ",
          "category": "Action",
          "value": "261437578"
        },
        {
          "name": "Captain America: The Winter Soldier ",
          "category": "Action",
          "value": "259746958"
        },
        {
          "name": "The Lego Movie ",
          "category": "Action",
          "value": "257756197"
        },
        {
          "name": "Star Trek ",
          "category": "Action",
          "value": "257704099"
        },
        {
          "name": "Batman ",
          "category": "Action",
          "value": "251188924"
        },
        {
          "name": "Night at the Museum ",
          "category": "Action",
          "value": "250863268"
        }
      ]
    },
    {
      "name": "Drama",
      "children": [
        {
          "name": "Titanic ",
          "category": "Drama",
          "value": "658672302"
        },
        {
          "name": "The Sixth Sense ",
          "category": "Drama",
          "value": "293501675"
        },
        {
          "name": "I Am Legend ",
          "category": "Drama",
          "value": "256386216"
        }
      ]
    },
    {
      "name": "Adventure",
      "children": [
        {
          "name": "Shrek 2",
          "category": "Adventure",
          "value": "436471036"
        },
        {
          "name": "The Hunger Games: Catching Fire ",
          "category": "Adventure",
          "value": "424645577"
        },
        {
          "name": "The Lion King ",
          "category": "Adventure",
          "value": "422783777"
        },
        {
          "name": "Toy Story 3",
          "category": "Adventure",
          "value": "414984497"
        },
        {
          "name": "The Hunger Games ",
          "category": "Adventure",
          "value": "407999255"
        },
        {
          "name": "Frozen ",
          "category": "Adventure",
          "value": "400736600"
        },
        {
          "name": "Finding Nemo ",
          "category": "Adventure",
          "value": "380838870"
        },
        {
          "name": "The Jungle Book ",
          "category": "Adventure",
          "value": "362645141"
        },
        {
          "name": "Jurassic Park ",
          "category": "Adventure",
          "value": "356784000"
        },
        {
          "name": "Inside Out ",
          "category": "Adventure",
          "value": "356454367"
        },
        {
          "name": "The Hunger Games: Mockingjay - Part 1",
          "category": "Adventure",
          "value": "337103873"
        },
        {
          "name": "Alice in Wonderland ",
          "category": "Adventure",
          "value": "334185206"
        },
        {
          "name": "Shrek the Third ",
          "category": "Adventure",
          "value": "320706665"
        },
        {
          "name": "Harry Potter and the Sorcerer's Stone ",
          "category": "Adventure",
          "value": "317557891"
        },
        {
          "name": "The Hobbit: An Unexpected Journey ",
          "category": "Adventure",
          "value": "303001229"
        },
        {
          "name": "Harry Potter and the Half-Blood Prince ",
          "category": "Adventure",
          "value": "301956980"
        },
        {
          "name": "The Twilight Saga: Eclipse ",
          "category": "Adventure",
          "value": "300523113"
        },
        {
          "name": "The Twilight Saga: New Moon ",
          "category": "Adventure",
          "value": "296623634"
        },
        {
          "name": "Up ",
          "category": "Adventure",
          "value": "292979556"
        },
        {
          "name": "The Twilight Saga: Breaking Dawn - Part 2",
          "category": "Adventure",
          "value": "292298923"
        },
        {
          "name": "The Twilight Saga: Breaking Dawn - Part 2",
          "category": "Adventure",
          "value": "292298923"
        },
        {
          "name": "Harry Potter and the Order of the Phoenix ",
          "category": "Adventure",
          "value": "292000866"
        },
        {
          "name": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe ",
          "category": "Adventure",
          "value": "291709845"
        },
        {
          "name": "Harry Potter and the Goblet of Fire ",
          "category": "Adventure",
          "value": "289994397"
        },
        {
          "name": "Monsters, Inc. ",
          "category": "Adventure",
          "value": "289907418"
        },
        {
          "name": "The Hunger Games: Mockingjay - Part 2",
          "category": "Adventure",
          "value": "281666058"
        },
        {
          "name": "Gravity ",
          "category": "Adventure",
          "value": "274084951"
        },
        {
          "name": "Monsters University ",
          "category": "Adventure",
          "value": "268488329"
        },
        {
          "name": "Shrek ",
          "category": "Adventure",
          "value": "267652016"
        },
        {
          "name": "Harry Potter and the Chamber of Secrets ",
          "category": "Adventure",
          "value": "261970615"
        },
        {
          "name": "Jaws ",
          "category": "Adventure",
          "value": "260000000"
        },
        {
          "name": "The Hobbit: The Desolation of Smaug ",
          "category": "Adventure",
          "value": "258355354"
        },
        {
          "name": "The Hobbit: The Battle of the Five Armies ",
          "category": "Adventure",
          "value": "255108370"
        },
        {
          "name": "Men in Black ",
          "category": "Adventure",
          "value": "250147615"
        }
      ]
    },
    {
      "name": "Family",
      "children": [
        {
          "name": "E.T. the Extra-Terrestrial ",
          "category": "Family",
          "value": "434949459"
        }
      ]
    },
    {
      "name": "Animation",
      "children": [
        {
          "name": "Despicable Me 2",
          "category": "Animation",
          "value": "368049635"
        },
        {
          "name": "The Secret Life of Pets ",
          "category": "Animation",
          "value": "323505540"
        },
        {
          "name": "Despicable Me ",
          "category": "Animation",
          "value": "251501645"
        }
      ]
    },
    {
      "name": "Comedy",
      "children": [
        {
          "name": "Forrest Gump ",
          "category": "Comedy",
          "value": "329691196"
        },
        {
          "name": "Home Alone ",
          "category": "Comedy",
          "value": "285761243"
        },
        {
          "name": "Meet the Fockers ",
          "category": "Comedy",
          "value": "279167575"
        },
        {
          "name": "The Hangover ",
          "category": "Comedy",
          "value": "277313371"
        },
        {
          "name": "How the Grinch Stole Christmas ",
          "category": "Comedy",
          "value": "260031035"
        },
        {
          "name": "The Hangover Part II ",
          "category": "Comedy",
          "value": "254455986"
        }
      ]
    },
    {
      "name": "Biography",
      "children": [
        {
          "name": "The Blind Side ",
          "category": "Biography",
          "value": "255950375"
        }
      ]
    }
  ]
}
```

</details>

### Video Game Sales:

https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json

<details>
  <summary>JSON</summary>

```json
{
  "name": "Video Game Sales Data Top 100",
  "children": [
    {
      "name": "2600",
      "children": [
        {
          "name": "Pac-Man",
          "category": "2600",
          "value": "7.81"
        }
      ]
    },
    {
      "name": "Wii",
      "children": [
        {
          "name": "Wii Sports",
          "category": "Wii",
          "value": "82.53"
        },
        {
          "name": "Mario Kart Wii",
          "category": "Wii",
          "value": "35.52"
        },
        {
          "name": "Wii Sports Resort",
          "category": "Wii",
          "value": "32.77"
        },
        {
          "name": "Wii Play",
          "category": "Wii",
          "value": "28.92"
        },
        {
          "name": "New Super Mario Bros. Wii",
          "category": "Wii",
          "value": "28.32"
        },
        {
          "name": "Wii Fit",
          "category": "Wii",
          "value": "22.7"
        },
        {
          "name": "Wii Fit Plus",
          "category": "Wii",
          "value": "21.79"
        },
        {
          "name": "Super Smash Bros. Brawl",
          "category": "Wii",
          "value": "12.84"
        },
        {
          "name": "Super Mario Galaxy",
          "category": "Wii",
          "value": "11.35"
        },
        {
          "name": "Just Dance 3",
          "category": "Wii",
          "value": "10.12"
        },
        {
          "name": "Just Dance 2",
          "category": "Wii",
          "value": "9.44"
        },
        {
          "name": "Wii Party",
          "category": "Wii",
          "value": "8.38"
        },
        {
          "name": "Mario Party 8",
          "category": "Wii",
          "value": "8.27"
        },
        {
          "name": "Mario & Sonic at the Olympic Games",
          "category": "Wii",
          "value": "7.99"
        },
        {
          "name": "Super Mario Galaxy 2",
          "category": "Wii",
          "value": "7.51"
        }
      ]
    },
    {
      "name": "NES",
      "children": [
        {
          "name": "Super Mario Bros.",
          "category": "NES",
          "value": "40.24"
        },
        {
          "name": "Duck Hunt",
          "category": "NES",
          "value": "28.31"
        },
        {
          "name": "Super Mario Bros. 3",
          "category": "NES",
          "value": "17.28"
        },
        {
          "name": "Super Mario Bros. 2",
          "category": "NES",
          "value": "7.46"
        }
      ]
    },
    {
      "name": "GB",
      "children": [
        {
          "name": "Pokemon Red/Pokemon Blue",
          "category": "GB",
          "value": "31.37"
        },
        {
          "name": "Tetris",
          "category": "GB",
          "value": "30.26"
        },
        {
          "name": "Pokemon Gold/Pokemon Silver",
          "category": "GB",
          "value": "23.1"
        },
        {
          "name": "Super Mario Land",
          "category": "GB",
          "value": "18.14"
        },
        {
          "name": "Pokémon Yellow: Special Pikachu Edition",
          "category": "GB",
          "value": "14.64"
        },
        {
          "name": "Super Mario Land 2: 6 Golden Coins",
          "category": "GB",
          "value": "11.18"
        }
      ]
    },
    {
      "name": "DS",
      "children": [
        {
          "name": "New Super Mario Bros.",
          "category": "DS",
          "value": "29.8"
        },
        {
          "name": "Nintendogs",
          "category": "DS",
          "value": "24.67"
        },
        {
          "name": "Mario Kart DS",
          "category": "DS",
          "value": "23.21"
        },
        {
          "name": "Brain Age: Train Your Brain in Minutes a Day",
          "category": "DS",
          "value": "20.15"
        },
        {
          "name": "Pokemon Diamond/Pokemon Pearl",
          "category": "DS",
          "value": "18.25"
        },
        {
          "name": "Brain Age 2: More Training in Minutes a Day",
          "category": "DS",
          "value": "15.29"
        },
        {
          "name": "Pokemon Black/Pokemon White",
          "category": "DS",
          "value": "15.14"
        },
        {
          "name": "Animal Crossing: Wild World",
          "category": "DS",
          "value": "12.13"
        },
        {
          "name": "Pokemon HeartGold/Pokemon SoulSilver",
          "category": "DS",
          "value": "11.77"
        },
        {
          "name": "Super Mario 64",
          "category": "DS",
          "value": "10.3"
        },
        {
          "name": "Mario Party DS",
          "category": "DS",
          "value": "8.91"
        },
        {
          "name": "Pokemon Black 2/Pokemon White 2",
          "category": "DS",
          "value": "8.07"
        },
        {
          "name": "Pokémon Platinum Version",
          "category": "DS",
          "value": "7.72"
        }
      ]
    },
    {
      "name": "X360",
      "children": [
        {
          "name": "Kinect Adventures!",
          "category": "X360",
          "value": "21.81"
        },
        {
          "name": "Grand Theft Auto V",
          "category": "X360",
          "value": "16.27"
        },
        {
          "name": "Call of Duty: Modern Warfare 3",
          "category": "X360",
          "value": "14.73"
        },
        {
          "name": "Call of Duty: Black Ops",
          "category": "X360",
          "value": "14.61"
        },
        {
          "name": "Call of Duty: Black Ops II",
          "category": "X360",
          "value": "13.67"
        },
        {
          "name": "Call of Duty: Modern Warfare 2",
          "category": "X360",
          "value": "13.47"
        },
        {
          "name": "Halo 3",
          "category": "X360",
          "value": "12.12"
        },
        {
          "name": "Grand Theft Auto IV",
          "category": "X360",
          "value": "11.01"
        },
        {
          "name": "Call of Duty: Ghosts",
          "category": "X360",
          "value": "10.25"
        },
        {
          "name": "Halo: Reach",
          "category": "X360",
          "value": "9.86"
        },
        {
          "name": "Halo 4",
          "category": "X360",
          "value": "9.71"
        },
        {
          "name": "Call of Duty 4: Modern Warfare",
          "category": "X360",
          "value": "9.31"
        },
        {
          "name": "Minecraft",
          "category": "X360",
          "value": "9.18"
        },
        {
          "name": "The Elder Scrolls V: Skyrim",
          "category": "X360",
          "value": "8.79"
        }
      ]
    },
    {
      "name": "PS3",
      "children": [
        {
          "name": "Grand Theft Auto V",
          "category": "PS3",
          "value": "21.04"
        },
        {
          "name": "Call of Duty: Black Ops II",
          "category": "PS3",
          "value": "13.79"
        },
        {
          "name": "Call of Duty: Modern Warfare 3",
          "category": "PS3",
          "value": "13.32"
        },
        {
          "name": "Call of Duty: Black Ops",
          "category": "PS3",
          "value": "12.63"
        },
        {
          "name": "Gran Turismo 5",
          "category": "PS3",
          "value": "10.7"
        },
        {
          "name": "Call of Duty: Modern Warfare 2",
          "category": "PS3",
          "value": "10.6"
        },
        {
          "name": "Grand Theft Auto IV",
          "category": "PS3",
          "value": "10.5"
        },
        {
          "name": "Call of Duty: Ghosts",
          "category": "PS3",
          "value": "9.36"
        },
        {
          "name": "FIFA Soccer 13",
          "category": "PS3",
          "value": "8.16"
        }
      ]
    },
    {
      "name": "PS2",
      "children": [
        {
          "name": "Grand Theft Auto: San Andreas",
          "category": "PS2",
          "value": "20.81"
        },
        {
          "name": "Grand Theft Auto: Vice City",
          "category": "PS2",
          "value": "16.15"
        },
        {
          "name": "Gran Turismo 3: A-Spec",
          "category": "PS2",
          "value": "14.98"
        },
        {
          "name": "Grand Theft Auto III",
          "category": "PS2",
          "value": "13.1"
        },
        {
          "name": "Gran Turismo 4",
          "category": "PS2",
          "value": "11.66"
        },
        {
          "name": "Final Fantasy X",
          "category": "PS2",
          "value": "8.05"
        }
      ]
    },
    {
      "name": "SNES",
      "children": [
        {
          "name": "Super Mario World",
          "category": "SNES",
          "value": "20.61"
        },
        {
          "name": "Super Mario All-Stars",
          "category": "SNES",
          "value": "10.55"
        },
        {
          "name": "Donkey Kong Country",
          "category": "SNES",
          "value": "9.3"
        },
        {
          "name": "Super Mario Kart",
          "category": "SNES",
          "value": "8.76"
        }
      ]
    },
    {
      "name": "GBA",
      "children": [
        {
          "name": "Pokemon Ruby/Pokemon Sapphire",
          "category": "GBA",
          "value": "15.85"
        },
        {
          "name": "Pokemon FireRed/Pokemon LeafGreen",
          "category": "GBA",
          "value": "10.49"
        }
      ]
    },
    {
      "name": "PS4",
      "children": [
        {
          "name": "Call of Duty: Black Ops 3",
          "category": "PS4",
          "value": "14.63"
        },
        {
          "name": "Grand Theft Auto V",
          "category": "PS4",
          "value": "12.61"
        },
        {
          "name": "FIFA 16",
          "category": "PS4",
          "value": "8.57"
        },
        {
          "name": "Star Wars Battlefront (2015)",
          "category": "PS4",
          "value": "7.98"
        },
        {
          "name": "Call of Duty: Advanced Warfare",
          "category": "PS4",
          "value": "7.66"
        },
        {
          "name": "FIFA 17",
          "category": "PS4",
          "value": "7.59"
        }
      ]
    },
    {
      "name": "3DS",
      "children": [
        {
          "name": "Pokemon X/Pokemon Y",
          "category": "3DS",
          "value": "14.6"
        },
        {
          "name": "Mario Kart 7",
          "category": "3DS",
          "value": "12.66"
        },
        {
          "name": "Pokemon Omega Ruby/Pokemon Alpha Sapphire",
          "category": "3DS",
          "value": "11.68"
        },
        {
          "name": "Super Mario 3D Land",
          "category": "3DS",
          "value": "10.81"
        },
        {
          "name": "New Super Mario Bros. 2",
          "category": "3DS",
          "value": "9.9"
        },
        {
          "name": "Animal Crossing: New Leaf",
          "category": "3DS",
          "value": "9.16"
        },
        {
          "name": "Super Smash Bros. for Wii U and 3DS",
          "category": "3DS",
          "value": "7.55"
        }
      ]
    },
    {
      "name": "N64",
      "children": [
        {
          "name": "Super Mario 64",
          "category": "N64",
          "value": "11.89"
        },
        {
          "name": "Mario Kart 64",
          "category": "N64",
          "value": "9.87"
        },
        {
          "name": "GoldenEye 007",
          "category": "N64",
          "value": "8.09"
        },
        {
          "name": "The Legend of Zelda: Ocarina of Time",
          "category": "N64",
          "value": "7.6"
        }
      ]
    },
    {
      "name": "PS",
      "children": [
        {
          "name": "Gran Turismo",
          "category": "PS",
          "value": "10.95"
        },
        {
          "name": "Final Fantasy VII",
          "category": "PS",
          "value": "9.72"
        },
        {
          "name": "Gran Turismo 2",
          "category": "PS",
          "value": "9.49"
        },
        {
          "name": "Final Fantasy VIII",
          "category": "PS",
          "value": "7.86"
        },
        {
          "name": "Crash Bandicoot 2: Cortex Strikes Back",
          "category": "PS",
          "value": "7.58"
        }
      ]
    },
    {
      "name": "XB",
      "children": [
        {
          "name": "Halo 2",
          "category": "XB",
          "value": "8.49"
        }
      ]
    },
    {
      "name": "PC",
      "children": [
        {
          "name": "The Sims 3",
          "category": "PC",
          "value": "8.01"
        }
      ]
    },
    {
      "name": "PSP",
      "children": [
        {
          "name": "Grand Theft Auto: Liberty City Stories",
          "category": "PSP",
          "value": "7.69"
        }
      ]
    },
    {
      "name": "XOne",
      "children": [
        {
          "name": "Call of Duty: Black Ops 3",
          "category": "XOne",
          "value": "7.39"
        }
      ]
    }
  ]
}
```

</details>
