import { Logout } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Tabs,
  Tooltip,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../types";
import { UserAccountButton } from "./componets/UserAccountButton";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const NavBar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F9B795",
    padding: "8px 16px",
  };

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
    <Box
      sx={{
        backgroundColor: "#F9B795",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box sx={NavBar}>
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon />
          <InputBase placeholder="Search..." />
        </Box>

        {/* User Avatar and Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {loggedInUser && (
            <>
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
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
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
      </Box>
    </Box>
  );
};

export default Navigation;