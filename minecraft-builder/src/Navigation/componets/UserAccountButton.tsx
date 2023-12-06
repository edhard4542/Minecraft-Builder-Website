import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export const UserAccountButton = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openSignupModal = () => {
    setSignupOpen(true);
  };

  const closeSignupModal = () => {
    setSignupOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in...");
    closeLoginModal();
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signing up...");
    closeSignupModal();
  };

  return (
    <>
      <Button onClick={openLoginModal}>Login/Signup</Button>

      {/* Login Modal */}
      <Dialog open={loginOpen} onClose={closeLoginModal}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={openSignupModal}>Sign Up</Button>
        </DialogActions>
      </Dialog>

      {/* Signup Modal */}
      <Dialog open={signupOpen} onClose={closeSignupModal}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          {/* Add signup form fields here */}
          {/* For example: */}
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignup}>Sign Up</Button>
          <Button onClick={closeSignupModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
