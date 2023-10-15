import React from "react";
import image1 from "../src/assets/dascity.jpg";
import image2 from "../src/assets/hut.jpg";
import image3 from "../src/assets/enchant.jpg";
import image4 from "../src/assets/bookshelves.jpg";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import Navigation from "./Navigation/Navigation";
import backgroundImage from "../src/assets/minecraft_mountains_trees.jpg";

export const Home = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    color: "white",
    padding: 2,
    textAlign: "center",
  };

  return (
    <div>
      {/* Header */}
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Bedrock Builder Generators</h3>
      </Box>

      {/* home page */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Welcome to CraftAssist!</h2>
        <p>
          My Name is Erica Hardin and I am an avid bedrock minecraft player. I
          have been playing since I can remember. One of my favorite features in
          Minecraft is the vast and endless building options. However, I have
          always struggled with certain aspects of building. For example,
          choosing what blocks I want to use or needing help laying out a
          certain shape like a circle. This is why I decided that there should
          be a way to generate these things. I created this website to help
          other builders like me who have trouble making decisions.
        </p>
      </div>
      <Navigation />

      {/* carousel */}
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
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
      </Carousel>
    </div>
  );
};
