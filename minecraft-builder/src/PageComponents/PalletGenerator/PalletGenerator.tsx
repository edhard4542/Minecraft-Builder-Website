import { ChangeEvent, useState } from "react";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import image2 from "../../assets/prettyfloor.jpg";
import image3 from "../../assets/recipies/anvil.jpg";
import image1 from "../../assets/villageHouse.jpg";

import image6 from "../../assets/recipies/Bamboo_planks .jpg";
import image22 from "../../assets/recipies/ChiseledNetherBricks.jpg";
import image52 from "../../assets/recipies/QuartzBricks.jpg";
import image4 from "../../assets/recipies/arrow.jpg";
import image5 from "../../assets/recipies/axe.jpg";
import image7 from "../../assets/recipies/bars.jpg";
import image8 from "../../assets/recipies/bed.jpg";
import image9 from "../../assets/recipies/blockofbamboo.jpg";
import image10 from "../../assets/recipies/boat.jpg";
import image11 from "../../assets/recipies/book.jpg";
import image12 from "../../assets/recipies/bookshelves.jpg";
import image13 from "../../assets/recipies/boots.jpg";
import image14 from "../../assets/recipies/bow.jpg";
import image15 from "../../assets/recipies/bricks.jpg";
import image16 from "../../assets/recipies/bucket.jpg";
import image17 from "../../assets/recipies/campfire.jpg";
import image18 from "../../assets/recipies/candle.jpg";
import image19 from "../../assets/recipies/chest.jpg";
import image20 from "../../assets/recipies/chestplate.jpg";
import image21 from "../../assets/recipies/chiseledBricks.jpg";
import image23 from "../../assets/recipies/clock.jpg";
import image24 from "../../assets/recipies/cobbleWall.jpg";
import image25 from "../../assets/recipies/compass.jpg";
import image26 from "../../assets/recipies/concretepowder.jpg";
import image27 from "../../assets/recipies/craftingtable.jpg";
import image28 from "../../assets/recipies/cutcopper.jpg";
import image29 from "../../assets/recipies/diamondblock.jpg";
import image30 from "../../assets/recipies/door.jpg";
import image31 from "../../assets/recipies/enchantment_table.jpg";
import image32 from "../../assets/recipies/endbricks.jpg";
import image33 from "../../assets/recipies/fence.jpg";
import image34 from "../../assets/recipies/fishingrod.jpg";
import image35 from "../../assets/recipies/gate.jpg";
import image36 from "../../assets/recipies/goldenapple.jpg";
import image37 from "../../assets/recipies/hangingsign.jpg";
import image38 from "../../assets/recipies/helmet.jpg";
import image39 from "../../assets/recipies/hoe.jpg";
import image40 from "../../assets/recipies/itemframe.jpg";
import image41 from "../../assets/recipies/ladder.jpg";
import image42 from "../../assets/recipies/lantern.jpg";
import image43 from "../../assets/recipies/mossycobble.jpg";
import image44 from "../../assets/recipies/painting.jpg";
import image45 from "../../assets/recipies/panes.jpg";
import image46 from "../../assets/recipies/pants.jpg";
import image47 from "../../assets/recipies/pick.jpg";
import image48 from "../../assets/recipies/pot.jpg";
import image49 from "../../assets/recipies/prismarine.jpg";
import image50 from "../../assets/recipies/prsmarinebricks.jpg";
import image51 from "../../assets/recipies/quartzblock.jpg";
import image53 from "../../assets/recipies/rawironblock.jpg";
import image54 from "../../assets/recipies/sand.jpg";
import image55 from "../../assets/recipies/scaffolding.jpg";
import image56 from "../../assets/recipies/shield.jpg";
import image57 from "../../assets/recipies/shovel.jpg";
import image58 from "../../assets/recipies/shulker.jpg";
import image59 from "../../assets/recipies/sign.jpg";
import image60 from "../../assets/recipies/slabs.jpg";
import image61 from "../../assets/recipies/slimeblock.jpg";
import image62 from "../../assets/recipies/spyglass.jpg";
import image63 from "../../assets/recipies/stainedGlass.jpg";
import image64 from "../../assets/recipies/stairs.jpg";
import image65 from "../../assets/recipies/sticks.jpg";
import image66 from "../../assets/recipies/stonebricks.jpg";
import image67 from "../../assets/recipies/sword.jpg";
import image68 from "../../assets/recipies/tnt.jpg";
import image69 from "../../assets/recipies/torch.jpg";
import image70 from "../../assets/recipies/trapdoor.jpg";
import image71 from "../../assets/recipies/waxedcopper.jpg";
import image72 from "../../assets/recipies/wood.jpg";
import image73 from "../../assets/recipies/wool.jpg";

interface RecipeImages {
  [key: string]: string;
}
export const PalletGenerator = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recipeImages: RecipeImages = {
    anvil: image3,
    arrow: image4,
    axe: image5,
    bamboo_plank: image6,
    bars: image7,
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
    chiseled_brick: image21,
    chiseled_netherbrick: image22,
    clock: image23,
    cobblestone_wall: image24,
    compass: image25,
    concrete_powder: image26,
    crafting_table: image27,
    cut_copper_block: image28,
    diamond_block: image29,
    door: image30,
    enchantment_table: image31,
    endbrick: image32,
    fence: image33,
    fishing_rod: image34,
    gate: image35,
    golden_apple: image36,
    hanging_sign: image37,
    helmet: image38,
    hoe: image39,
    itemframe: image40,
    ladder: image41,
    lantern: image42,
    mossy_cobblestone: image43,
    painting: image44,
    panes: image45,
    leggings: image46,
    pickaxe: image47,
    flower_pot: image48,
    prismarine_block: image49,
    prismarine_brick: image50,
    quartz_block: image51,
    quartz_brick: image52,
    raw_iron_block: image53,
    sand: image54,
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
    wood: image72,
    wool: image73,
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Convert the user input to lowercase and replace spaces with underscores
    const inputValue = e.target.value.toLowerCase().replace(/\s+/g, "_");
    setSearchTerm(inputValue);
  };

  const getImageElements = () => {
    const imageElements = [];
    for (const key in recipeImages) {
      // Check if the key starts with the search term
      if (key.startsWith(searchTerm)) {
        // Replace underscores with spaces for display
        const imageDescription = key.replace(/_/g, " ");
        const imageSrc = recipeImages[key];

        // Create the image element
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

        // Add the image element to the array
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
      {/* {recipeToShow && (
        <div>
          <p>Image for {searchTerm}:</p>
          <img
            src={recipeToShow}
            alt={searchTerm}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )} */}

      <div>{getImageElements()}</div>
      <FooterPage />
    </div>
  );
};
