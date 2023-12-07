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
    anvil: { image: image3, description: "Description for Anvil" },
    arrow: { image: image4, description: "Description for Arrow" },
    axe: { image: image5, description: "Description for Axe" },
    bamboo_plank: {
      image: image6,
      description: "Description for Bamboo Plank",
    },
    bed: { image: image8, description: "Description for Bed" },
    blast_furnace: {
      image: image74,
      description: "Description for Blast Furnace",
    },
    block_of_bamboo: {
      image: image9,
      description: "Description for Block of Bamboo",
    },
    boat: { image: image10, description: "Description for Boat" },
    book: { image: image11, description: "Description for Book" },
    bookshelf: { image: image12, description: "Description for Bookshelf" },
    boot: { image: image13, description: "Description for Boot" },
    bow: { image: image14, description: "Description for Bow" },
    bread: { image: image75, description: "Description for Bread" },
    brewing_stand: {
      image: image76,
      description: "Description for Brewing Stand",
    },
    bricks: { image: image15, description: "Description for Bricks" },
    bucket: { image: image16, description: "Description for Bucket" },
    campfire: { image: image17, description: "Description for Campfire" },
    carpet: { image: image37, description: "Description for Campfire" },
    candle: { image: image18, description: "Description for Candle" },
    cauldron: { image: image78, description: "Description for Cauldron" },
    chain: { image: image79, description: "Description for Chain" },
    chiseled_brick_block: {
      image: image21,
      description: "Description for Chiseled Brick Block",
    },
    chiseled_deepslate: {
      image: image80,
      description: "Description for Chiseled Deepslate",
    },
    chiseled_netherbrick_block: {
      image: image22,
      description: "Description for Chiseled Netherbrick Block",
    },
    chiseled_polished_blackstone: {
      image: image81,
      description: "Description for Chiseled Polished Blackstone",
    },
    chiseled_quartz: {
      image: image82,
      description: "Description for Chiseled Quartz",
    },
    chiseled_red_sandstone: {
      image: image83,
      description: "Description for Chiseled Red Sandstone",
    },
    chiseled_sandstone: {
      image: image84,
      description: "Description for Chiseled Sandstone",
    },
    chest: { image: image19, description: "Description for Chest" },
    chestplate: { image: image20, description: "Description for Chestplate" },
    clock: { image: image23, description: "Description for Clock" },
    coal_block: { image: image85, description: "Description for Coal Block" },
    cobblestone_wall: {
      image: image24,
      description: "Description for Cobblestone Wall",
    },
    compass: { image: image25, description: "Description for Compass" },
    concrete_powder: {
      image: image26,
      description: "Description for Concrete Powder",
    },
    copper_Block: {
      image: image200,
      description: "Description for Concrete Powder",
    },
    crafting_table: {
      image: image27,
      description: "Description for Crafting Table",
    },
    crimson_hyphae: {
      image: image87,
      description: "Description for Crimson Hyphae",
    },
    cut_copper_block: {
      image: image28,
      description: "Description for Cut Copper Block",
    },
    cut_red_sandstone: {
      image: image88,
      description: "Description for Cut Red Sandstone",
    },
    cut_sandstone: {
      image: image89,
      description: "Description for Cut Sandstone",
    },
    dark_prismarine: {
      image: image90,
      description: "Description for Dark Prismarine",
    },
    deepslate_bricks: {
      image: image91,
      description: "Description for Deepslate Bricks",
    },
    deepslate_tile: {
      image: image92,
      description: "Description for Deepslate Tile",
    },
    diamond_block: {
      image: image29,
      description: "Description for Diamond Block",
    },
    door: { image: image30, description: "Description for Door" },
    dried_kelp: { image: image93, description: "Description for Dried Kelp" },
    dyed_wool: { image: image135, description: "Description for Dyed Wool" },
    emerald_block: {
      image: image94,
      description: "Description for Emerald Block",
    },
    enchanted_table: {
      image: image31,
      description: "Description for Enchanted Table",
    },
    end_stone_brick: {
      image: image32,
      description: "Description for End Stone Brick",
    },
    exposed_cut_copper: {
      image: image95,
      description: "Description for Exposed Cut Copper",
    },
    fence: { image: image33, description: "Description for Fence" },
    fence_gate: { image: image35, description: "Description for Fence Gate" },
    fishing_rod: { image: image34, description: "Description for Fishing Rod" },
    flint_and_steel: {
      image: image96,
      description: "Description for Flint and Steel",
    },
    flower_pot: { image: image48, description: "Description for Flower Pot" },
    glaass_panes: {
      image: image45,
      description: "Description for Glass Panes",
    }, // Note: Spelling error in key 'glaass_panes', should be 'glass_panes'
    glass_panes: { image: image45, description: "Description for Glass Panes" },
    glistering_melon: {
      image: image97,
      description: "Description for Glistering Melon",
    },
    gold_block: { image: image98, description: "Description for Gold Block" },
    golden_apple: {
      image: image36,
      description: "Description for Golden Apple",
    },
    golden_carrot: {
      image: image99,
      description: "Description for Golden Carrot",
    },
    grindstone: { image: image100, description: "Description for Grindstone" },
    hanging_sign: {
      image: image201,
      description: "Description for Concrete Powder",
    },
    hay: { image: image101, description: "Description for Hay" },
    helmet: { image: image38, description: "Description for Helmet" },
    hoe: {
      image: image202,
      description: "Description for Concrete Powder",
    },
    honey_block: {
      image: image102,
      description: "Description for Honey Block",
    },
    honeycomb_block: {
      image: image103,
      description: "Description for Honeycomb Block",
    },
    iron_bars: { image: image7, description: "Description for Iron Bars" },
    iron_block: { image: image104, description: "Description for Iron Block" },
    item_frame: { image: image40, description: "Description for Item Frame" },
    ladder: { image: image41, description: "Description for Ladder" },
    lantern: { image: image42, description: "Description for Lantern" },
    lapis_lazuli_block: {
      image: image105,
      description: "Description for Lapis Lazuli Block",
    },
    lead: { image: image136, description: "Description for Lead" },
    lectern: { image: image106, description: "Description for Lectern" },
    leggings: { image: image46, description: "Description for Leggings" },
    melon: { image: image107, description: "Description for Melon" },
    mossy_cobblestone: {
      image: image43,
      description: "Description for Mossy Cobblestone",
    },
    mossy_stone_brick: {
      image: image108,
      description: "Description for Mossy Stone Brick",
    },
    mushroom_stew: {
      image: image109,
      description: "Description for Mushroom Stew",
    },
    nether_brick: {
      image: image110,
      description: "Description for Nether Brick",
    },
    oxidized_cut_copper: {
      image: image111,
      description: "Description for Oxidized Cut Copper",
    },
    painting: {
      image: image204,
      description: "Description for Concrete Powder",
    },
    pickaxe: { image: image47, description: "Description for Pickaxe" },
    plank: { image: image113, description: "Description for Plank" },
    polished_basalt: {
      image: image114,
      description: "Description for Polished Basalt",
    },
    polished_blackstone_brick: {
      image: image115,
      description: "Description for Polished Blackstone Brick",
    },
    prismarine_block: {
      image: image49,
      description: "Description for Prismarine Block",
    },
    prismarine_brick: {
      image: image50,
      description: "Description for Prismarine Brick",
    },
    purpur_block: {
      image: image116,
      description: "Description for Purpur Block",
    },
    purpur_pillar: {
      image: image117,
      description: "Description for Purpur Pillar",
    },
    quartz_block: {
      image: image51,
      description: "Description for Quartz Block",
    },
    quartz_brick: {
      image: image52,
      description: "Description for Quartz Brick",
    },
    quartz_pillar: {
      image: image112,
      description: "Description for Quartz Pillar",
    },
    rail: { image: image118, description: "Description for Rail" },
    raw_copper_block: {
      image: image119,
      description: "Description for Raw Copper Block",
    },
    raw_gold_block: { image: image120, description: "Description for Raw" },
    raw_iron_block: {
      image: image53,
      description: "Description for Raw Iron Block",
    },
    red_nether_brick: {
      image: image121,
      description: "Description for Red Nether Brick",
    },
    red_sandstone: {
      image: image122,
      description: "Description for Red Sandstone",
    },
    sandstone: { image: image54, description: "Description for Sandstone" },
    scaffolding: {
      image: image205,
      description: "Description for Concrete Powder",
    },
    shears: { image: image123, description: "Description for Shears" },
    shield: { image: image56, description: "Description for Shield" },
    shovel: { image: image57, description: "Description for Shovel" },
    shulker_box: { image: image58, description: "Description for Shulker Box" },
    sign: { image: image59, description: "Description for Sign" },
    slab: { image: image60, description: "Description for Slab" },
    slime_block: { image: image61, description: "Description for Slime Block" },
    smoker: { image: image124, description: "Description for Smoker" },
    spyglass: { image: image62, description: "Description for Spyglass" },
    stained_glass: {
      image: image63,
      description: "Description for Stained Glass",
    },
    stair: { image: image64, description: "Description for Stair" },
    stick: { image: image65, description: "Description for Stick" },
    stone_brick: { image: image66, description: "Description for Stone Brick" },
    stripped_wood_block: {
      image: image125,
      description: "Description for Stripped Wood Block",
    },
    sword: { image: image67, description: "Description for Sword" },
    terracotta: {
      image: image206,
      description: "Description for Concrete Powder",
    },
    tnt: { image: image68, description: "Description for TNT" },
    torch: { image: image69, description: "Description for Torch" },
    trapdoor: { image: image70, description: "Description for Trapdoor" },
    waxed_cut_copper_block: {
      image: image127,
      description: "Description for Waxed Cut Copper Block",
    },
    waxed_copper_block: {
      image: image71,
      description: "Description for Waxed Copper Block",
    },
    waxed_exposed_copper_block: {
      image: image128,
      description: "Description for Waxed Exposed Copper Block",
    },
    waxed_exposed_cut_copper_block: {
      image: image129,
      description: "Description for Waxed Exposed Cut Copper Block",
    },
    waxed_oxidized_copper_block: {
      image: image130,
      description: "Description for Waxed Oxidized Copper Block",
    },
    waxed_oxidized_cut_copper_block: {
      image: image131,
      description: "Description for Waxed Oxidized Cut Copper Block",
    },
    waxed_weathered_copper_block: {
      image: image132,
      description: "Description for Waxed Weathered Copper Block",
    },
    waxed_weathered_cut_copper_block: {
      image: image133,
      description: "Description for Waxed Weathered Cut Copper Block",
    },
    weathered_cut_copper_block: {
      image: image134,
      description: "Description for Weathered Cut Copper Block",
    },
    wood: { image: image72, description: "Description for Wood" },
    wool: { image: image73, description: "Description for Wool" },
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
          <div key={key}>
            <p>{imageDescription}</p>
            <div>RECIPE: {recipeImages[key].description}</div>
            <img
              src={imageSrc}
              alt={key}
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
      <div>{getImageElements()}</div>
      <FooterPage />
    </div>
  );
};
