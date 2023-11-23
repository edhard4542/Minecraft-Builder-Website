import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

  return (
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
              Pallet generator
            </Link>
          }
        />
        <Tab
          label={
            <Link
              to="/shape-generator"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Shape generator
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
    </NavBar>
  );
};

export default Navigation;
