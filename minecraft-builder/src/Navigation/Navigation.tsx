import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Tabs
      value={false} // You can set this value according to the current route
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label={<Link to="/">Home</Link>} />
      <Tab label={<Link to="/pallet-generator">Pallet generator</Link>} />
      <Tab label={<Link to="/shape-generator">Shape generator</Link>} />
      <Tab label={<Link to="/floor-generator">Floor generator</Link>} />
      <Tab label={<Link to="/material-calculator">Material Calculator</Link>} />
    </Tabs>
  );
};

export default Navigation;
