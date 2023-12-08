/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import image2 from "../src/assets/chestroom.jpg";
import image5 from "../src/assets/clift.jpg";
import image1 from "../src/assets/dascitynew.jpg";
import image3 from "../src/assets/firetruck.jpg";
import image6 from "../src/assets/floor.jpg";
import backgroundImage from "../src/assets/minecraft_mountains_trees.jpg";
import image4 from "../src/assets/moon.jpg";
import FooterPage from "./Footer/FooterPage";
import Navigation from "./Navigation/Navigation";


export const Home = () => {
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

  const carouselContainerStyle = {
    maxWidth: "1500px", 
    margin: "0 auto", 
  };

  return (
    <div>
      <Navigation />
      {/* Header */}
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Generator website</h3>
      </Box>

      {/* home page */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Welcome to CraftAssist!</h2>
        <p>
          Welcome to CraftAssist! On this website, you will be able to get some
          help with crafting recipes and conversions for Minecraft. The tab labeled “crafting recipes” will allow you
          to select craftable items in Minecraft, once selected it will display
          the items necessary to create your desired item! The other main tab,
          “conversion tool” is great for any type of Minecraft building or
          crafting. On this tab you will be able to select an item you have,
          input the amount, and choose a conversion option. This will show you
          how much of any given item you can make with the items you already
          have! Please feel free to also check out the “About Me” tab to learn
          more about this website and me! If you have any issues,
          recommendations, or other comments, don’t hesitate to contact me with
          the tool at the bottom of the page! Thanks for visiting and happy
          crafting!
        </p>
      </div>

      {/* carousel */}
      <div style={carouselContainerStyle}>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          stopOnHover={false}
        >
          <div>
            <img src={image1} alt="Image 1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src={image2} alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={image3} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image4} alt="Image 4" />
            <p className="legend">Image 4</p>
          </div>
          <div>
            <img src={image5} alt="Image 5" />
            <p className="legend">Image 4</p>
          </div>
          <div>
            <img src={image6} alt="Image 6" />
            <p className="legend">Image 4</p>
          </div>
        </Carousel>
      </div>
      <FooterPage />
    </div>
  );
}; //
