import { ChangeEvent, useState } from "react";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import image2 from "../../assets/prettyfloor.jpg";
import image3 from "../../assets/recipies/anvil.jpg";
import image1 from "../../assets/villageHouse.jpg";

import image6 from "../../assets/recipies/Bamboo_planks .jpg";
import image22 from "../../assets/recipies/ChiseledNetherBricks.jpg";
import image105 from "../../assets/recipies/LapisBlock.jpg";
import image112 from "../../assets/recipies/Pillarquartz.jpg";
import image52 from "../../assets/recipies/QuartzBricks.jpg";
import image120 from "../../assets/recipies/RawGoldBlock.jpg";
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
import image77 from "../../assets/recipies/carpet.jpg";
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
import image86 from "../../assets/recipies/copperBlock.jpg";
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
import image37 from "../../assets/recipies/hangingsign.jpg";
import image101 from "../../assets/recipies/hay.jpg";
import image38 from "../../assets/recipies/helmet.jpg";
import image39 from "../../assets/recipies/hoe.jpg";
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
import image44 from "../../assets/recipies/painting.jpg";
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
import image55 from "../../assets/recipies/scaffolding.jpg";
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
import image126 from "../../assets/recipies/terracotta.jpg";
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

interface RecipeImages {
  [key: string]: string;
}

export const RecipeLookup = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recipeImages: RecipeImages = {
    anvil: image3,
    arrow: image4,
    axe: image5,
    bamboo_plank: image6,
    iron_bars: image7,
    bed: image8,
    block_of_bamboo: image9,
    boat: image10,
    book: image11,
    bookshelf: image12,
    boot: image13,
    bow: image14,
    brick: image15,
    bucket: image16,
    campfire: image17,
    candle: image18,
    chest: image19,
    chestplate: image20,
    chiseled_brick_block: image21,
    chiseled_netherbrick_block: image22,
    clock: image23,
    cobblestone_wall: image24,
    compass: image25,
    concrete_powder: image26,
    crafting_table: image27,
    cut_copper_block: image28,
    diamond_block: image29,
    door: image30,
    enchantment_table: image31,
    end_stone_brick: image32,
    fence: image33,
    fishing_rod: image34,
    fence_gate: image35,
    golden_apple: image36,
    hanging_sign: image37,
    helmet: image38,
    hoe: image39,
    item_frame: image40,
    ladder: image41,
    lantern: image42,
    mossy_cobblestone: image43,
    painting: image44,
    glass_panes: image45,
    leggings: image46,
    pickaxe: image47,
    flower_pot: image48,
    prismarine_block: image49,
    prismarine_brick: image50,
    quartz_block: image51,
    quartz_brick: image52,
    raw_iron_block: image53,
    sandstone: image54,
    scaffolding: image55,
    shield: image56,
    shovel: image57,
    shulker_box: image58,
    sign: image59,
    slab: image60,
    slime_block: image61,
    spyglass: image62,
    stained_glass: image63,
    stair: image64,
    stick: image65,
    stone_brick: image66,
    sword: image67,
    tnt: image68,
    torch: image69,
    trapdoor: image70,
    waxed_copper_block: image71,
    planks: image72,
    wool: image73,
    blast_furnace: image74,
    bread: image75,
    brewing_stand: image76,
    carpet: image77,
    cauldron: image78,
    chain: image79,
    chiseled_deepslate: image80,
    chiseled_polished_blackstone: image81,
    chiseled_quartz: image82,
    chiseled_red_sandstone: image83,
    chiseled_sandstone: image84,
    coal_block: image85,
    copper_block: image86,
    crimson_hyphae: image87,
    cut_red_sandstone: image88,
    cut_sandstone: image89,
    dark_prismarine: image90,
    deepslate_bricks: image91,
    deepslate_tile: image92,
    dried_kelp: image93,
    emerald_block: image94,
    exposed_cut_copper: image95,
    flint_and_steel: image96,
    glistering_melon: image97,
    gold_block: image98,
    golden_carrot: image99,
    grindstone: image100,
    hay: image101,
    honey_block: image102,
    honeycomb_block: image103,
    iron_block: image104,
    lapis_lazuli_block: image105,
    lectern: image106,
    melon: image107,
    mossy_stone_brick: image108,
    mushroom_stew: image109,
    nether_brick: image110,
    oxidized_cut_copper: image111,
    quartz_pillar: image112,
    wood_plank: image113,
    polished_basalt: image114,
    polished_blackstone_brick: image115,
    purpur_block: image116,
    purpur_pillar: image117,
    rail: image118,
    raw_copper_block: image119,
    raw_gold_block: image120,
    red_nether_brick: image121,
    red_sandstone: image122,
    shears: image123,
    smoker: image124,
    stripped_wood_block: image125,
    terracotta: image126,
    waxed_cut_copper_block: image127,
    waxed_exposed_copper_block: image128,
    waxed_exposed_cut_copper_block: image129,
    waxed_oxidized_copper_block: image130,
    waxed_oxidized_cut_copper_block: image131,
    waxed_weathered_copper_block: image132,
    waxed_weathered_cut_copper_block: image133,
    weathered_cut_copper_block: image134,
    dyed_wool: image135,
    lead: image136,
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
        const imageSrc = recipeImages[key];

        const imageElement = (
          <div key={key}>
            <p>{imageDescription}</p>
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
