import { ChangeEvent, useState } from "react";
import { Box } from "@mui/material";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import image2 from "../../assets/prettyfloor.jpg";
import image6 from "../../assets/recipies/Bamboo_planks .jpg";
import image22 from "../../assets/recipies/ChiseledNetherBricks.jpg";
import image105 from "../../assets/recipies/LapisBlock.jpg";
import image112 from "../../assets/recipies/Pillarquartz.jpg";
import image52 from "../../assets/recipies/QuartzBricks.jpg";
import image120 from "../../assets/recipies/RawGoldBlock.jpg";
import image3 from "../../assets/recipies/anvil.jpg";
import image4 from "../../assets/recipies/arrow.jpg";
import image5 from "../../assets/recipies/axe.jpg";
import image7 from "../../assets/recipies/bars.jpg";
import image8 from "../../assets/recipies/bed.jpg";
import image74 from "../../assets/recipies/blastFurance.jpg";
import image9 from "../../assets/recipies/blockofbamboo.jpg";
import image10 from "../../assets/recipies/boat.jpg";
import image11 from "../../assets/recipies/book.jpg";
import image12 from "../../assets/recipies/bookshelves.jpg";
import image13 from "../../assets/recipies/boots.jpg";
import image14 from "../../assets/recipies/bow.jpg";
import image75 from "../../assets/recipies/bread.jpg";
import image76 from "../../assets/recipies/brewingStand.jpg";
import image15 from "../../assets/recipies/bricks.jpg";
import image16 from "../../assets/recipies/bucket.jpg";
import image17 from "../../assets/recipies/campfire.jpg";
import image18 from "../../assets/recipies/candle.jpg";
import image78 from "../../assets/recipies/cauldron.jpg";
import image79 from "../../assets/recipies/chain.jpg";
import image19 from "../../assets/recipies/chest.jpg";
import image20 from "../../assets/recipies/chestplate.jpg";
import image21 from "../../assets/recipies/chiseledBricks.jpg";
import image80 from "../../assets/recipies/chiseledDeepslate.jpg";
import image81 from "../../assets/recipies/chiseledPolishedBlackstone.jpg";
import image82 from "../../assets/recipies/chiseledQuartz.jpg";
import image84 from "../../assets/recipies/chiseledStandstone.jpg";
import image83 from "../../assets/recipies/chiseledredsandstone.jpg";
import image23 from "../../assets/recipies/clock.jpg";
import image85 from "../../assets/recipies/coalblock.jpg";
import image24 from "../../assets/recipies/cobbleWall.jpg";
import image25 from "../../assets/recipies/compass.jpg";
import image26 from "../../assets/recipies/concretepowder.jpg";
import image27 from "../../assets/recipies/craftingtable.jpg";
import image87 from "../../assets/recipies/crimsonHyphane.jpg";
import image88 from "../../assets/recipies/cutRedSandstone.jpg";
import image89 from "../../assets/recipies/cutSandstone.jpg";
import image28 from "../../assets/recipies/cutcopper.jpg";
import image90 from "../../assets/recipies/darkPrismarine.jpg";
import image91 from "../../assets/recipies/deepslateBricks.jpg";
import image92 from "../../assets/recipies/deepslateTiles.jpg";
import image29 from "../../assets/recipies/diamondblock.jpg";
import image30 from "../../assets/recipies/door.jpg";
import image93 from "../../assets/recipies/driedKelp.jpg";
import image94 from "../../assets/recipies/emeraldBlock.jpg";
import image31 from "../../assets/recipies/enchantment_table.jpg";
import image32 from "../../assets/recipies/endbricks.jpg";
import image95 from "../../assets/recipies/exposedCutCopper.jpg";
import image33 from "../../assets/recipies/fence.jpg";
import image34 from "../../assets/recipies/fishingrod.jpg";
import image96 from "../../assets/recipies/flintandSteal.jpg";
import image35 from "../../assets/recipies/gate.jpg";
import image97 from "../../assets/recipies/glisteringMelon.jpg";
import image98 from "../../assets/recipies/goldblock.jpg";
import image99 from "../../assets/recipies/goldenCarrot.jpg";
import image36 from "../../assets/recipies/goldenapple.jpg";
import image100 from "../../assets/recipies/grindstone.jpg";
import image101 from "../../assets/recipies/hay.jpg";
import image38 from "../../assets/recipies/helmet.jpg";
import image102 from "../../assets/recipies/honeyblock.jpg";
import image103 from "../../assets/recipies/honeycombBlock.jpg";
import image104 from "../../assets/recipies/ironBlock.jpg";
import image40 from "../../assets/recipies/itemframe.jpg";
import image41 from "../../assets/recipies/ladder.jpg";
import image42 from "../../assets/recipies/lantern.jpg";
import image136 from "../../assets/recipies/lead.jpg";
import image106 from "../../assets/recipies/lectern.jpg";
import image107 from "../../assets/recipies/melon.jpg";
import image108 from "../../assets/recipies/mossyStonebricks.jpg";
import image43 from "../../assets/recipies/mossycobble.jpg";
import image109 from "../../assets/recipies/mushroomStew.jpg";
import image110 from "../../assets/recipies/netherBricks.jpg";
import image111 from "../../assets/recipies/oxidizedCutCopper.jpg";
import image45 from "../../assets/recipies/panes.jpg";
import image46 from "../../assets/recipies/pants.jpg";
import image47 from "../../assets/recipies/pick.jpg";
import image113 from "../../assets/recipies/planks.jpg";
import image114 from "../../assets/recipies/polishedBasalt.jpg";
import image115 from "../../assets/recipies/poloshedBlackstoneBricks.jpg";
import image48 from "../../assets/recipies/pot.jpg";
import image49 from "../../assets/recipies/prismarine.jpg";
import image50 from "../../assets/recipies/prsmarinebricks.jpg";
import image116 from "../../assets/recipies/purpurBlock.jpg";
import image117 from "../../assets/recipies/purpurPillar.jpg";
import image51 from "../../assets/recipies/quartzblock.jpg";
import image118 from "../../assets/recipies/rail.jpg";
import image119 from "../../assets/recipies/rawCopperBlock.jpg";
import image53 from "../../assets/recipies/rawironblock.jpg";
import image121 from "../../assets/recipies/redNetherBrick.jpg";
import image122 from "../../assets/recipies/redsandstone.jpg";
import image54 from "../../assets/recipies/sand.jpg";
import image123 from "../../assets/recipies/shears.jpg";
import image56 from "../../assets/recipies/shield.jpg";
import image57 from "../../assets/recipies/shovel.jpg";
import image58 from "../../assets/recipies/shulker.jpg";
import image59 from "../../assets/recipies/sign.jpg";
import image60 from "../../assets/recipies/slabs.jpg";
import image61 from "../../assets/recipies/slimeblock.jpg";
import image124 from "../../assets/recipies/smoker.jpg";
import image62 from "../../assets/recipies/spyglass.jpg";
import image63 from "../../assets/recipies/stainedGlass.jpg";
import image64 from "../../assets/recipies/stairs.jpg";
import image65 from "../../assets/recipies/sticks.jpg";
import image66 from "../../assets/recipies/stonebricks.jpg";
import image125 from "../../assets/recipies/strippedwood.jpg";
import image67 from "../../assets/recipies/sword.jpg";
import image68 from "../../assets/recipies/tnt.jpg";
import image69 from "../../assets/recipies/torch.jpg";
import image70 from "../../assets/recipies/trapdoor.jpg";
import image127 from "../../assets/recipies/waxedCutCopper.jpg";
import image128 from "../../assets/recipies/waxedExposedCopper.jpg";
import image129 from "../../assets/recipies/waxedExposedCutCopper.jpg";
import image130 from "../../assets/recipies/waxedOxidizedCopper.jpg";
import image131 from "../../assets/recipies/waxedOxidizedCutCopper.jpg";
import image132 from "../../assets/recipies/waxedWeatheredCopper.jpg";
import image133 from "../../assets/recipies/waxedWeatheredCutCopper.jpg";
import image71 from "../../assets/recipies/waxedcopper.jpg";
import image134 from "../../assets/recipies/weatheredCutCopper.jpg";
import image72 from "../../assets/recipies/wood.jpg";
import image73 from "../../assets/recipies/wool.jpg";
import image135 from "../../assets/recipies/woolcolors.jpg";
import image1 from "../../assets/villageHouse.jpg";
import image37 from "../../assets/recipies/carpet.jpg";
import image200 from "../../assets/recipies/copperBlock.jpg";
import image201 from "../../assets/recipies/hangingSign.jpg";
import image202 from "../../assets/recipies/hoe.jpg";
import image204 from "../../assets/recipies/painting.jpg";
import image205 from "../../assets/recipies/scaffolding.jpg";
import image206 from "../../assets/recipies/terracotta.jpg";
import image207 from "../../assets/recipies/dyedCandle.jpg";
import image208 from "../../assets/recipies/dyedShulker.jpg";

import backgroundImage from "../../assets/minecraft_mountains_trees.jpg";

interface RecipeImageDetail {
  image: string;
  description: string;
}

interface RecipeImages {
  [key: string]: RecipeImageDetail;
}

export const RecipeLookup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const recipeImages: RecipeImages = {
    //properties : string value
    anvil: {
      image: image3,
      description:
        "three blocks of iron and four iron ingots will yield one anvil",
    },
    arrow: {
      image: image4,
      description:
        "one flint, one stick, and one feather will yield four arrows",
    },
    axe: {
      image: image5,
      description:
        " three cobblestone and two sticks will yield one axe (cobblestone is interchangeable with wood, gold, iron, and diamond)",
    },
    bamboo_plank: {
      image: image6,
      description: "one block of bamboo will yield two bamboo planks",
    },
    bed: {
      image: image8,
      description:
        "three wool (any set of the same color) and three planks (any kind and combination) will yield one bed (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    blast_furnace: {
      image: image74,
      description:
        "five iron ingots, one furnace, and three smooth stone will yield one blast furnace",
    },
    block_of_bamboo: {
      image: image9,
      description: "nine bamboo will yield one bamboo block",
    },
    boat: {
      image: image10,
      description:
        "five wood planks (any set of the same type) will yield one boat (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, or cherry)",
    },
    book: {
      image: image11,
      description: "three paper and one leather will yield one book",
    },
    bookshelf: {
      image: image12,
      description:
        "six planks (any kind and combination) and three books will yield one bookshelf",
    },
    boot: {
      image: image13,
      description:
        "four iron ingots will yield one pair of boots (iron is interchangeable with leather, gold, or diamond)",
    },
    bow: {
      image: image14,
      description: "three sticks and three string will yield one bow",
    },
    bread: { image: image75, description: "three wheat will yield one bread" },
    brewing_stand: {
      image: image76,
      description:
        "three cobblestone and one blaze rod will yield one brewing stand",
    },
    bricks: {
      image: image15,
      description: "four bricks will yield one block of brick",
    },
    bucket: {
      image: image16,
      description: "three iron ingots will yield one bucket",
    },
    campfire: {
      image: image17,
      description:
        "three wood logs (any kind and combination), three sticks, and one charcoal (or coal) will yield one campfire",
    },
    carpet: {
      image: image37,
      description:
        "two wool (any set of the same color) will yield three carpet of the same color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    candle: {
      image: image18,
      description: "one wax and one string will yield one candle",
    },
    cauldron: {
      image: image78,
      description: "seven iron ingots will yield one cauldron",
    },
    chain: {
      image: image79,
      description: "two iron nuggets and one iron ingot will yield one chain",
    },
    chiseled_stone_brick: {
      image: image21,
      description: "two stone brick slabs will yield one chiseled stone brick",
    },
    chiseled_deepslate: {
      image: image80,
      description:
        "two cobbled deepslate slabs will yield one chiseled deepslate block",
    },
    chiseled_netherbrick_block: {
      image: image22,
      description:
        "two nether brick slabs will yield one chiseled nether brick block",
    },
    chiseled_polished_blackstone: {
      image: image81,
      description:
        "two polished black stone slabs will yield one chiseled polished black stone block",
    },
    chiseled_quartz: {
      image: image82,
      description: "two quartz slabs will yield one chiseled quartz block",
    },
    chiseled_red_sandstone: {
      image: image83,
      description:
        "two red sandstone slabs will yield one chiseled red sandstone block",
    },
    chiseled_sandstone: {
      image: image84,
      description:
        "two sandstone slabs will yield one chiseled sandstone block",
    },
    chest: {
      image: image19,
      description:
        "eight planks (any kind and combination) will yield one chest",
    },
    chestplate: {
      image: image20,
      description:
        "eight iron ingots will yield one chest plate (iron is interchangeable with leather, gold, or diamond)",
    },
    clock: {
      image: image23,
      description:
        "four gold ingots and one redstone dust will yield one clock",
    },
    coal_block: {
      image: image85,
      description: "nine coal will yield one block of coal",
    },
    cobblestone_wall: {
      image: image24,
      description:
        "five cobblestone will yield six cobble wall (the cobblestone in this recipe can be interchanged with mossy cobble, granite, diorite, andesite, sandstone, red sandstone, stone brick, mossy stone brick, brick, nether, red nether brick, end stone, prismarine, blackstone, polished blackstone, polished blackstone brick, cobbled deepslate, deepslate tile, polished deepslate, deepslate brick, or mud brick)",
    },
    compass: {
      image: image25,
      description:
        "four iron ingot and one redstone dust will yield one compass",
    },
    concrete_powder: {
      image: image26,
      description:
        "one dye (any kind), four sand, and four gravel will yield eight concrete powder (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    copper_Block: {
      image: image200,
      description: "nine copper ingots will yield one copper block",
    },
    crafting_table: {
      image: image27,
      description:
        "four planks (any kind and combination) will yield one crafting table",
    },
    crimson_hyphae: {
      image: image87,
      description: "four crimson stem will yield three crimson hyphae",
    },
    cut_copper_block: {
      image: image28,
      description: "four copper blocks will yield four cut copper blocks",
    },
    cut_red_sandstone: {
      image: image88,
      description: "four red sandstone will yield four red sandstone blocks",
    },
    cut_sandstone: {
      image: image89,
      description: "four sandstone will yield four sandstone blocks",
    },
    dark_prismarine: {
      image: image90,
      description:
        "eight prismarine shards and one black dye will yield one dark prismarine",
    },
    deepslate_bricks: {
      image: image91,
      description:
        "four polished deepslate blocks will yield four deepslate bricks",
    },
    deepslate_tile: {
      image: image92,
      description: "four deepslate bricks will yield four deepslate tiles",
    },
    diamond_block: {
      image: image29,
      description: "nine diamond will yield one diamond block",
    },
    door: {
      image: image30,
      description:
        "six planks (any set of the same kind) will yield three doors. (Door options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, warped, and iron)",
    },
    dried_kelp: {
      image: image93,
      description: "nine dried kelp will yield one dried kelp block",
    },
    dyed_wool: {
      image: image135,
      description:
        "one dye (any color) and one white wool will yield one wool of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    dyed_candle: {
      image: image207,
      description:
        "one dye (any color) and one candle will yield one candle of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    dyed_shulker: {
      image: image208,
      description:
        "one dye (any color) and one shulker box will yield one dyed shulker box of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    emerald_block: {
      image: image94,
      description: "nine emerald will yield one emerald block",
    },
    enchanted_table: {
      image: image31,
      description:
        "two books, one diamond, and four obsidian will yield one enchantment table",
    },
    end_stone_brick: {
      image: image32,
      description: "four endstone will yield four endstone brick",
    },
    exposed_cut_copper: {
      image: image95,
      description:
        "four exposed cut copper will yield four exposed cut copper blocks",
    },
    fence: {
      image: image33,
      description:
        "four planks (any set of the same kind) and two sticks will yield three fences (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, and warped)",
    },
    fence_gate: {
      image: image35,
      description:
        "four sticks and two planks (may set of the same kind) will yield one fence gates (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, and warped)",
    },
    fishing_rod: {
      image: image34,
      description: "three sticks and two string will yield one fishing rod",
    },
    flint_and_steel: {
      image: image96,
      description: "one flint and one steel will yielded one flint and steel",
    },
    flower_pot: {
      image: image48,
      description: "three bricks will yield one flower pot",
    },
    glass_panes: {
      image: image45,
      description:
        "six regular or stained glass (any set of the same color) will yield sixteen glass panes of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    }, 

    glistering_melon: {
      image: image97,
      description:
        "eight gold nuggets and one melon slice will yield one glistering melon",
    },
    gold_block: {
      image: image98,
      description: "nine gold ingots will yield one gold block",
    },
    golden_apple: {
      image: image36,
      description:
        "eight gold ingots and one apple will yield one golden apple",
    },
    golden_carrot: {
      image: image99,
      description:
        "eight gold nuggets and one carrot will yield one golden carrot",
    },
    grindstone: {
      image: image100,
      description:
        "two sticks, one stone slabs, and two planks (any kind) will yield one grindstone",
    },
    hanging_sign: {
      image: image201,
      description:
        "six stripped logs (any kind) and two chains will yield six hanging signs (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, and warped)",
    },
    hay: {
      image: image101,
      description: "nine wheat will yield one hay block",
    },
    helmet: {
      image: image38,
      description:
        "five iron ingots will yield one helmet (iron is interchangeable with leather, gold, or diamond)",
    },
    hoe: {
      image: image202,
      description:
        "two cobblestone and two sticks will yield one hoe (cobblestone is interchangeable with planks, iron, gold, or diamond)",
    },
    honey_block: {
      image: image102,
      description: "four bottles of honey will yield one honey block",
    },
    honeycomb_block: {
      image: image103,
      description: "four honeycomb will yield one honeycomb block",
    },
    iron_bars: {
      image: image7,
      description: "six iron ingots will yield sixteen iron bars",
    },
    iron_block: {
      image: image104,
      description: "nine iron ingots will yield one iron block",
    },
    item_frame: {
      image: image40,
      description: "eight sticks and one leather will yield one item frame",
    },
    ladder: {
      image: image41,
      description: "seven sticks will yield three ladders",
    },
    lantern: {
      image: image42,
      description: "eight iron nuggets and one torch will yield one lantern",
    },
    lapis_lazuli_block: {
      image: image105,
      description: "nine lapis lazuli will yield one lapis lazuli blocks",
    },
    lead: {
      image: image136,
      description: "two string and one slime ball will yield two leads",
    },
    lectern: {
      image: image106,
      description:
        "five wood slabs (any kind and combination) and one bookshelf will yield one lectern",
    },
    leggings: {
      image: image46,
      description:
        "seven iron ingots will yield one pair of leggings (iron is interchangeable with leather, gold, or diamond)",
    },
    melon: {
      image: image107,
      description: "nine melon slices will yield one melon",
    },
    mossy_cobblestone: {
      image: image43,
      description:
        "one cobblestone and one vine will yield one mossy cobblestone",
    },
    mossy_stone_brick: {
      image: image108,
      description:
        "one stone brick and one vine will yield one mossy stone brick",
    },
    mushroom_stew: {
      image: image109,
      description:
        "one red mushroom, one brown mushroom, and one bowl will yield one bowl of mushroom stew",
    },
    nether_brick: {
      image: image110,
      description: "four nether bricks will yield one nether brick block",
    },
    oxidized_cut_copper: {
      image: image111,
      description:
        "four oxidized copper will yield one oxidized cut copper block",
    },
    painting: {
      image: image204,
      description:
        "eight sticks and one wool (any color) will yield one painting",
    },
    pickaxe: {
      image: image47,
      description:
        "three cobblestone and two sticks will yield one pickaxe (cobblestone is interchangeable with wood planks, gold, iron, or diamond)",
    },
    plank: {
      image: image113,
      description:
        "one wood log (of any kind) will yield four planks (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, and warped)",
    },
    polished_basalt: {
      image: image114,
      description: "four basalt will yield four polished basalt blocks",
    },
    polished_blackstone_brick: {
      image: image115,
      description:
        "four polished blackstone will yield four polished blackstone bricks",
    },
    prismarine_block: {
      image: image49,
      description: "four prismarine shards will yield one prismarine block",
    },
    prismarine_brick: {
      image: image50,
      description: "nine prismarine shards will yield one prismarine brick",
    },
    purpur_block: {
      image: image116,
      description: "four chorus fruit will yield four purpur blocks",
    },
    purpur_pillar: {
      image: image117,
      description: "two Purpur slabs will yield one Purpur pillar",
    },
    quartz_block: {
      image: image51,
      description: "four quartz dust will yield one quartz block",
    },
    quartz_brick: {
      image: image52,
      description: "four quartz blocks will yield one quartz brick",
    },
    quartz_pillar: {
      image: image112,
      description: "two quartz blocks will yield two quartz pillar blocks",
    },
    rail: {
      image: image118,
      description: "six iron ingots and one stick will yield 16 rails",
    },
    raw_copper_block: {
      image: image119,
      description: "nine raw copper will yield one raw copper block",
    },
    raw_gold_block: {
      image: image120,
      description: "nine gold copper will yield one raw gold block",
    },
    raw_iron_block: {
      image: image53,
      description: "nine iron copper will yield one raw iron block",
    },
    red_nether_brick: {
      image: image121,
      description:
        "two red dye and two nether bricks will yield one red nether brick block",
    },
    red_sandstone: {
      image: image122,
      description: "four red sand will yield one redstone",
    },
    sandstone: {
      image: image54,
      description: "four sand will yield one sandstone",
    },
    scaffolding: {
      image: image205,
      description: "six bamboo and one string will yield six scaffolding",
    },
    shears: {
      image: image123,
      description: "two iron ingots will yield one pair of shears",
    },
    shield: {
      image: image56,
      description: "six wood planks and one iron ingot will yield one shield",
    },
    shovel: {
      image: image57,
      description:
        "one cobblestone and two sticks will yield one shovel (interchangeable with wood planks, gold, iron, or diamond)",
    },
    shulker_box: {
      image: image58,
      description:
        "two shulker shells and one chest will yield one shulker box",
    },
    sign: {
      image: image59,
      description:
        "six planks (any set of the same kind) will yield three signs of that kind (wood options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, and warped)",
    },
    slab: {
      image: image60,
      description:
        "three cobblestone will yield six cobblestone slabs (slab options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, warped, bamboo, bamboo mosaic, stone, smooth stone, mossy cobblestone, stone brick, mossy stone brick, sandstone, cut sandstone, smooth sandstone, red sandstone, cut red sandstone, smooth red sandstone, granite, polished granite, diorite, polished diorite, andesite, polished andesite, brick, nether brick, red nether brick, end stone, quartz, smooth quartz, purpur, prismarine, prismarine brick, dark prismarine, blackstone, polished blackstone, polished blackstone brick, cut copper, exposed cut copper, weather cut copper, oxidized cut copper, waxed cut copper, waxed exposed cut copper, waxed weather cut copper, waxed oxidized cut copper, cobbled deepslate, polished deepslate, deepslate tile, deepslate brick, mud brick)",
    },
    slime_block: {
      image: image61,
      description: "nine slimeballs will yield one slime block",
    },
    smoker: {
      image: image124,
      description:
        "four wood logs (any kind and combination) and one furnace will yield one smoker",
    },
    spyglass: {
      image: image62,
      description:
        "one amethyst shard and two copper ingots will yield one spyglass",
    },
    stained_glass: {
      image: image63,
      description:
        "eight glass and one dye (any color) will yield eight stained glass of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    stair: {
      image: image64,
      description:
        "six planks (any set of the same kind) will yield four stairs of that color (slab options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, warped, bamboo, bamboo mosaic, stone, smooth stone, mossy cobblestone, stone brick, mossy stone brick, sandstone, cut sandstone, smooth sandstone, red sandstone, cut red sandstone, smooth red sandstone, granite, polished granite, diorite, polished diorite, andesite, polished andesite, brick, nether brick, red nether brick, end stone, quartz, smooth quartz, purpur, prismarine, prismarine brick, dark prismarine, blackstone, polished blackstone, polished blackstone brick, cut copper, exposed cut copper, weather cut copper, oxidized cut copper, waxed cut copper, waxed exposed cut copper, waxed weather cut copper, waxed oxidized cut copper, cobbled deepslate, polished deepslate, deepslate tile, deepslate brick, mud brick)",
    },
    stick: {
      image: image65,
      description:
        "two planks (any kind and combination) will yield four sticks",
    },
    stone_brick: {
      image: image66,
      description: "four stone will yield four stone bricks",
    },
    stripped_wood_block: {
      image: image125,
      description:
        "four stripped wood logs (any set of the same kind) will yield three stripped wood blocks (log options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, warped, bamboo)",
    },
    sword: {
      image: image67,
      description:
        "two cobblestone and one stick will yield one sword (cobblestone is interchangeable with wood planks, gold, iron, or diamond)",
    },
    terracotta: {
      image: image206,
      description:
        "eight terracotta and one dye (any color) will yield eight terracotta of that color (color options: white, red, orange, yellow, lime, green, cyan, light blue, blue, purple, magenta, pink, light gray, gray, brown, and black)",
    },
    tnt: {
      image: image68,
      description: "five gravel and four sand will yield one tnt",
    },
    torch: {
      image: image69,
      description:
        "one coal (or charcoal) and one stick will yield four torches",
    },
    trapdoor: {
      image: image70,
      description:
        "six planks will yield two trapdoors (trapdoor options: spruce, birch, acacia, oak, jungle, dark oak, mangrove, cherry, crimson, warped, bamboo, and iron)",
    },
    waxed_cut_copper_block: {
      image: image127,
      description:
        "four waxed copper blocks will yield four waxed cut copper blocks",
    },
    waxed_copper_block: {
      image: image71,
      description:
        "one copper block and one wax will yield one waxed copper block",
    },
    waxed_exposed_copper_block: {
      image: image128,
      description:
        "one exposed copper block and one wax will yield one waxed exposed copper block",
    },
    waxed_exposed_cut_copper_block: {
      image: image129,
      description:
        "one exposed cut copper block and one wax will yield one waxed exposed cut copper block",
    },
    waxed_oxidized_copper_block: {
      image: image130,
      description:
        "one oxidized copper block and one wax will yield one waxed oxidized copper block",
    },
    waxed_oxidized_cut_copper_block: {
      image: image131,
      description:
        "one oxidized cut copper block and one wax will yield one waxed oxidized cut copper block",
    },
    waxed_weathered_copper_block: {
      image: image132,
      description:
        "one weathered copper block and one wax will yield one waxed weathered copper",
    },
    waxed_weathered_cut_copper_block: {
      image: image133,
      description:
        "four waxed weathered copper will yield four waxed weathered cut copper blocks",
    },
    weathered_cut_copper_block: {
      image: image134,
      description:
        "four weathered copper will yield four weathered cut copper blocks",
    },
    wood: {
      image: image72,
      description:
        "four wood logs (any set of the same kind) will yield three wood blocks of that kind",
    },
    wool: {
      image: image73,
      description: "four string will yield one white wool",
    },
  };
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    color: "white",
    padding: 2,
    textAlign: "center",
    fontSize: "2rem",
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Convert the user input to lowercase and replace spaces with underscores
    const inputValue = e.target.value.toLowerCase().replace(/\s+/g, "_");
    setSearchTerm(inputValue);
  };

  const getImageElements = () => {
    const imageElements = [];
    for (const key in recipeImages) {
      if (key.startsWith(searchTerm)) {
        const imageDescription = key.replace(/_/g, " ");
        const imageSrc = recipeImages[key].image;

        const imageElement = (
          <div
            key={key}
            style={{
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              textAlign: "center",
              margin: "20px",
            }}
          >
            <div style={{ maxWidth: "100%", position: "relative" }}>
              <img
                src={imageSrc}
                alt={key}
                style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "5px",
                  width: "98.5%",
                  overflowWrap: "break-word",
                }}
              >
                <p>{imageDescription}</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "5px",
                overflowWrap: "break-word",
              }}
            >
              <p>RECIPE: {recipeImages[key].description}</p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "5px",
                overflowWrap: "break-word",
              }}
            >
              <p>{imageDescription}</p>
            </div>
          </div>
        );

        imageElements.push(imageElement);
      }
    }
    return imageElements;
  };

  return (
    <div>
      <Navigation />
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Generator website</h3>
      </Box>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome to The Recipe Generator!</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          src={image1}
          alt="house"
          style={{
            width: "45%",
            height: "auto",
            maxWidth: "100%",
            marginTop: "20px",
          }}
        />
        <img
          src={image2}
          alt="floor"
          style={{
            width: "45%",
            height: "auto",
            maxWidth: "100%",
            marginTop: "20px",
          }}
        />
      </div>

      <div>
        <p>
          On this tool, you will be able to be see the crafting recipes for many
          items in Minecraft! The page will allow you to select an item and it
          will display a picture and description to show you the items needed
          for the desired item!
        </p>
      </div>

      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          placeholder="Enter Item for Recipe"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          gap: "20px",
        }}
      >
        {getImageElements()}
      </div>
      <FooterPage />
    </div>
  );
};
