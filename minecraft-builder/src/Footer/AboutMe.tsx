import React from "react";
import Navigation from "../Navigation/Navigation";
import image2 from "../assets/zestyandbaked.jpg";
import image1 from "../assets/me.jpg.jpg";
import { Box } from "@mui/material";
import backgroundImage from "../assets/minecraft_mountains_trees.jpg";


const AboutMe: React.FC = () => {
  console.log(image2, "image2");
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

  return (
    <div className="about-container">
      <Navigation />
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Generator website</h3>
      </Box>
      <div
        style={{ textAlign: "center", marginTop: "20px" }}
        className="about-header"
      >
        <h1>About Me</h1>
      </div>

      <div className="about-content">
        <div className="about-section">
          <img
            src={image2}
            alt="Description of the image"
            style={{
              marginRight: "20px",
              maxWidth: "30%",
              marginTop: "20px",
              float: "left",
              borderRadius: "300px",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <h2>Why did I create this website?</h2>

            <p>
              Even as a Minecraft veteran, I can forget crafting recipes. It
              becomes especially difficult to remember with updates having
              changes to recipes or the addition of amazing new blocks, tools,
              and other items. The changes keep the game interesting but it can
              also be a challenge to stay on top of all the new options. I
              wanted a tool where this information was quickly and reliably
              accessible! The crafting recipes page makes it easy to find any
              item and be shown what is needed to make it, whether it’s from the
              OG version or added in 1.20.
            </p>
            <p>
              If you have played Minecraft, this probably sounds familiar: you
              have a build in mind and know about how much you’ll need to get
              part of it done. Say you want to make the floor of your house
              about 20x10 spruce planks. You go out to chop down some trees and
              run back, just to find out you’re 5 logs short. It’s frustrating
              and I’ve had it happen countless times. The conversion tool allows
              you to input an amount of logs and it will show you how many
              planks you will have, so you can ensure you have enough! It will
              even show it in stacks because it’s just easier that way, haha.
              Having this information means you can go out and get all the
              resources you need in one shot, without having to keep guessing!
            </p>
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center" }} className="about-section">
            
            <img
              src={image1}
              alt="Description of the image"
              style={{
                marginRight: "20px",
                maxWidth: "30%",
                marginTop: "20px",
                float: "right",
                borderRadius: "300px",
              }}
            />
            <h2>What am I all about?</h2>

            <p style={{ marginRight: "15px", marginLeft: "15px" }}>
              Hello! My name is Erica and I am the creator of the CraftAssist
              website. I wanted a tool where Minecraft players could quickly
              access crafting recipes and calculate how many resources they
              need! I have always loved Minecraft and would consider myself a
              long time player. I have played Minecraft for at least a decade
              now, which can be hard to believe sometimes! Some of my favorite
              things to do in Minecraft are building, playing on PVP servers,
              and starting new survival worlds with my friends. It is such a
              great game to be creative, have some laughs, and explore without
              the constraints a lot of other games have for multiplayer/open
              world options!
            </p>
            <p style={{ marginRight: "15px", marginLeft: "15px" }}>
              But, enough about Minecraft! I was born and raised in Georgia. I
              am attending college for a computer science degree and am excited
              to continue my path in this field. I love animals and have
              multiple pets! I have five dogs, two cats, and a gecko. One of my
              main passions is taking care of animals and spreading information
              about how to care and enrich your pets lives!
            </p>
            <p style={{ marginRight: "15px", marginLeft: "15px" }}>
              Most of the time you will find me hanging out with my girlfriend
              and my brother! They mean the world to me and anything can be a
              blast when I get to enjoy it with them! One of my other interests
              includes collecting things like stuffed animals, crystals, and
              keychains! I also love a variety of video games like Far Cry, any
              Mario Nintendo game, and the Dark Picture Anthology games!
            </p>
            <p style={{ marginRight: "15px", marginLeft: "15px" }}>
              I really hope you enjoy my website and find it useful! Don’t
              hesitate to contact me with any issues, comments, or suggestions!
              Just scroll down below and click contact me! I am excited to
              continue adding generators and improving the ones I have as I
              improve my skills and get ideas from those utilizing them.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
