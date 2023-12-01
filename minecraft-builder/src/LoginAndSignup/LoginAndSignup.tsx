import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormState, SignupFormState } from "../types";
import { addUser, getUserByEmail } from "./api/user-data.api";

export const LoginAndSignup = () => {
  const navigate = useNavigate();
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

  // Handle login input changes with type for the event
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // Handle signup input changes with type for the event
  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loggedInUser = await getUserByEmail(login.email);
      setIsLoginSuccess(!!loggedInUser.minecraftAccountName);
    } catch (error) {
      console.log(error, "login error");
    }
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addUser({ ...signup, id: new Date().getTime().toString() });

      // Reset the signup form or handle the success (e.g., redirect)
      setSignup({
        firstName: "",
        lastName: "",
        email: "",
        minecraftAccountName: "",
        password: "",
      });
      setIsSignupSuccess(true);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  useEffect(() => {
    if (isLoginSuccess || isSignupSuccess) {
      navigate("/home");
    }
  }, [isLoginSuccess, isSignupSuccess]);
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleLoginChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleLoginChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      <h2>Signup Form</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="firstName"
          value={signup.firstName}
          onChange={handleSignupChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={signup.lastName}
          onChange={handleSignupChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={signup.email}
          onChange={handleSignupChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="minecraftAccountName"
          value={signup.minecraftAccountName}
          onChange={handleSignupChange}
          placeholder="Minecraft Account Name"
        />
        <input
          type="password"
          name="password"
          value={signup.password}
          onChange={handleSignupChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
