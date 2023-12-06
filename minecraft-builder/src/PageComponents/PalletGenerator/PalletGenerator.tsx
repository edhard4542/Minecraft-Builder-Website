import { ChangeEvent, useState } from "react";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import image2 from "../../assets/prettyfloor.jpg";
import image1 from "../../assets/villageHouse.jpg";

export const PalletGenerator = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const importImage = async (imageName: string) => {
    return await import(`../../assets/recipies/${imageName}.jpg`);
  };

  const products = {
    anvil: "anvil",
    arrow: "arrow",
    axe: "axe",
    bamboo_plank: "Bamboo_planks",
    bars: "bars",
    bed: "bed",
    block_of_bamboo: "blockofbamboo",
    boat: "boat",
    book: "book",
    bookshelf: "bookshelves",
    boot: "boots",
    bow: "bow",
    brick: "bricks",
    bucket: "bucket",
    campfire: "campfire",
    candle: "candle",
    chest: "chest",
    chestplate: "chestplate",
    chiseled_brick: "chiseledBricks",
    chiseled_netherbrick: "ChiseledNetherBricks",
    clock: "clock",
    cobblestone_wall: "cobbleWall",
    compass: "compass",
    concrete_powder: "concretepowder",
    crafting_table: "craftingtable",
    cut_copper_block: "cutcopper",
    diamond_block: "diamondblock",
    door: "door",
    enchantment_table: "enchantment_table",
    endbrick: "endbricks",
    fence: "fence",
    fishing_rod: "fishingrod",
    gate: "gate",
    golden_apple: "goldenapple",
    hanging_sign: "hangingsign",
    helmet: "helmet",
    hoe: "hoe",
    itemframe: "itemframe",
    ladder: "ladder",
    lantern: "lantern",
    mossy_cobblestone: "mossycobble",
    painting: "painting",
    panes: "panes",
    leggings: "pants",
    pickaxe: "pick",
    flower_pot: "pot",
    prismarine_block: "prismarine",
    prismarine_brick: "prsmarinebricks",
    quartz_block: "quartzblock",
    quartz_brick: "QuartzBricks",
    raw_iron_block: "rawironblock",
    sand: "sand",
    scaffolding: "scaffolding",
    shield: "shield",
    shovel: "shovel",
    shulker_box: "shulker",
    sign: "sign",
    slab: "slabs",
    slime_block: "slimeblock",
    spyglass: "spyglass",
    stained_glass: "stainedGlass",
    stair: "stairs",
    stick: "sticks",
    stone_brick: "stonebricks",
    sword: "sword",
    tnt: "tnt",
    torch: "torch",
    trapdoor: "trapdoor",
    waxed_copper_block: "waxedcopper",
    wood: "wood",
    wool: "wool",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedKey = e.target.value as keyof typeof products;
    const imageName = products[selectedKey];
    setSelectedValue(imageName);
    setSelectedProduct(imageName);
    if (imageName) {
      importImage(imageName).then((module) => setSelectedImage(module.default));
    } else {
      setSelectedImage(""); // Clear the image
      console.log("Product not found");
    }
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
          value={selectedProduct}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder="Type a product..."
        />
      </div>
      {selectedImage && (
        <div>
          <p>Image for {selectedProduct}:</p>
          <img
            src={selectedImage}
            alt={selectedProduct}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      <FooterPage />
    </div>
  );
};
