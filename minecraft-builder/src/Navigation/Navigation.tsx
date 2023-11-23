import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9B795", // Set the background color for the entire navigation bar
        padding: "0 16px", // Optional: Add padding to the navigation bar
      }}
    >
      <Tabs
        value={false} // You can set this value according to the current route
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            color: "#061E7F", // Text color for unselected tabs
            fontSize: "16px", // Font size for unselected tabs
          },
          "& .Mui-selected": {
            color: "#fff", // Text color when selected
            backgroundColor: "#061E7F", // Background color when selected
          },
        }}
      >
        <Tab
          label={
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          }
        />
        <Tab
          label={
            <Link to="/pallet-generator" style={{ textDecoration: "none" }}>
              Pallet generator
            </Link>
          }
        />
        <Tab
          label={
            <Link to="/shape-generator" style={{ textDecoration: "none" }}>
              Shape generator
            </Link>
          }
        />
        <Tab
          label={
            <Link to="/floor-generator" style={{ textDecoration: "none" }}>
              Floor generator
            </Link>
          }
        />
        <Tab
          label={
            <Link to="/material-calculator" style={{ textDecoration: "none" }}>
              Material Calculator
            </Link>
          }
        />
        <Tab
          label={
            <Link to="/signed-up-users" style={{ textDecoration: "none" }}>
              Signed Up Users
            </Link>
          }
        />
      </Tabs>
    </div>
  );
};

export default Navigation;
