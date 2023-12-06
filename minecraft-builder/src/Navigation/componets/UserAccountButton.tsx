import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  addUser,
  getUserByEmail,
} from "../../LoginAndSignup/api/user-data.api";
import { LoginFormState, SignupFormState, User } from "../../types";

interface UserAccountButtonProps {
  setLoggedInUser: (user: User) => void;
}
export const UserAccountButton: FC<UserAccountButtonProps> = ({
  setLoggedInUser,
}) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [login, setLogin] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  // State for signup form with types
  const [signup, setSignup] = useState<SignupFormState>({
    firstName: "",
    lastName: "",
    email: "",
    minecraftAccountName: "",
    password: "",
  });

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
    setSignup({
      firstName: "",
      lastName: "",
      email: "",
      minecraftAccountName: "",
      password: "",
    });
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openSignupModal = () => {
    setLogin({ email: "", password: "" });
    setSignupOpen(true);
  };

  const closeSignupModal = () => {
    setSignupOpen(false);
  };

  const handleLogin = async () => {
    // Handle login logic here
    console.log("Logging in...");
    try {
      const loggedInUser = await getUserByEmail(login.email);
      setIsLoginSuccess(!!loggedInUser.minecraftAccountName);
      if (loggedInUser.minecraftAccountName) {
        setLoggedInUser(loggedInUser);
      }
      setLogin({ email: "", password: "" });
      console.log(loggedInUser, "loggedInUser");
    } catch (error) {
      console.log(error, "login error");
    }
  };

  const handleSignup = async () => {
    // Handle signup logic here
    console.log("Signing up...");
    try {
      const newUserId = new Date().getTime().toString();
      await addUser({ ...signup, userId: new Date().getTime().toString() });

      // Reset the signup form or handle the success (e.g., redirect)
      console.log(signup, "signup success");
      setSignup({
        firstName: "",
        lastName: "",
        email: "",
        minecraftAccountName: "",
        password: "",
      });
      setLoggedInUser({
        userId: newUserId,
        firstName: signup.firstName,
        lastName: signup.lastName,
        email: signup.email,
        minecraftAccountName: signup.minecraftAccountName,
      });
      setIsSignupSuccess(true);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isLoginSuccess || isSignupSuccess) {
      console.log({
        loginSuccess: isLoginSuccess,
        signupSuccess: isSignupSuccess,
      });
      closeSignupModal();
      closeLoginModal();
    }
  }, [isLoginSuccess, isSignupSuccess]);

  return (
    <>
      <Button onClick={openLoginModal}>Login/Signup</Button>

      {/* Login Modal */}
      <Dialog open={loginOpen} onClose={closeLoginModal}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            label="Email"
            name="email"
            value={login.email}
            onChange={handleLoginInputChange}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={login.password}
            onChange={handleLoginInputChange}
            fullWidth
          />
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
          <TextField
            label="First Name"
            name="firstName"
            value={signup.firstName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleSignupChange(event)
            }
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={signup.lastName}
            onChange={handleSignupChange}
            fullWidth
          />
          <TextField
            label="Minecraft Gamertag / IGN"
            name="minecraftAccountName"
            value={signup.minecraftAccountName}
            onChange={handleSignupChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={signup.email}
            onChange={handleSignupChange}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            value={signup.password}
            onChange={handleSignupChange}
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignup}>Sign Up</Button>
          <Button onClick={closeSignupModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
