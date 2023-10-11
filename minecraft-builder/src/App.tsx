import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import backgroundImage from '../src/assets/minecraft_mountains_trees.jpg'; 
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../src/assets/dascity.jpg'; 
import image2 from '../src/assets/hut.jpg'; 
import image3 from '../src/assets/enchant.jpg'; 
import image4 from '../src/assets/bookshelves.jpg'; 

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    color: 'white',
    padding: 2,
    textAlign: 'center',
  };

  return (
    <div>
      {/* Header with Background Image at the Bottom */}
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Bedrock Minecraft Builder Generators</h3>
      </Box>

      {/* tab navigation */}
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" />
          <Tab label="Pallet generator" />
          <Tab label="Shape generator" />
          <Tab label="Build generator" />
          <Tab label="Material Calculator" />
        </Tabs>
      </Box>

      {/* home page */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Welcome to CraftAssist!</h2>
        <p>My Name is Erica Hardin and I am an avid bedrock minecraft player. I have been playing since I can remember. One of my favorite features in Minecraft is the vast and endless building options. However, I have always struggled with certain aspects of building. For example, choosing what blocks I want to use or needing help laying out a certain shape like a circle. This is why I decided that there should be a way to generate these things. I created this website to help other builders like me who have trouble making decisions.</p>
      </div>

      {/* Add the carousel here */}
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
}

export default App;






