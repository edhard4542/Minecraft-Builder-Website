import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { UserAccountButton } from "./componets/UserAccountButton";

const Navigation = () => {
  const NavBar = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F9B795",
    padding: "8px 16px",
  });

  const SearchContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginLeft: "auto",
  });

  const SearchInput = styled(InputBase)({
    marginLeft: "4px",
    flex: 1,
  });

  const StickyNavBar = styled("div")({
    position: "sticky",
    top: 0,
    zIndex: 1000, // Adjust the z-index as needed
    width: "100%",
    backgroundColor: "#F9B795",
  });

  return (
    <StickyNavBar>
      <NavBar>
        <Tabs
          value={false}
          indicatorColor="primary"
          textColor="primary"
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              color: "#061E7F",
              fontSize: "16px",
            },
            "& .Mui-selected": {
              color: "#fff",
              backgroundColor: "#061E7F",
            },
          }}
        >
          <Tab
            label={
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            }
          />
          <Tab
            label={
              <Link
                to="/pallet-generator"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Crafting Recipes
              </Link>
            }
          />
          
          <Tab
            label={
              <Link
                to="/material-calculator"
                style={{ textDecoration: "none", color: "inherit" }}
              >
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

        {/* Search bar */}
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchContainer>
        <UserAccountButton />
      </NavBar>
    </StickyNavBar>
  );
};

export default Navigation;
