import { Logout } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../types";
import { UserAccountButton } from "./componets/UserAccountButton";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
    display: "flex",
    top: 0,
    zIndex: 1000, // Adjust the z-index as needed
    width: "100%",
  });

  const handleAvatarClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F9B795", width: "100%" }}>
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
                  to="/recipes"
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
        </NavBar>
      </StickyNavBar>
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "16px",
          }}
        >
          {loggedInUser && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="User Avatar">
                  <IconButton
                    onClick={handleAvatarClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {loggedInUser.firstName[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom", // Menu is placed below the anchorEl
                  horizontal: "right", // Menu is aligned to the right of the anchorEl
                }}
                transformOrigin={{
                  vertical: "top", // The top of the Menu is aligned with the bottom of the anchorEl
                  horizontal: "right", // The right of the Menu is aligned with the right of the anchorEl
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
          {!loggedInUser && (
            <UserAccountButton setLoggedInUser={setLoggedInUser} />
          )}
        </Box>
      </>
    </Box>
  );
};

export default Navigation;
