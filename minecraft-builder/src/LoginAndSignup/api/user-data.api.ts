import { User } from "../../types";

export const addUser = async (userData: User) => {
  try {
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("There was a problem with the POST request:", error);
  }
};

export const getUserByEmail = async (userEmail: string): Promise<User> => {
  let loggedInUser: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    minecraftAccountName: "",
  };

  try {
    const response = await fetch(
      `http://localhost:5000/api/users/email/${userEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const fetchedUser = await response.json();
    return {
      id: fetchedUser.userId,
      firstName: fetchedUser.firstName,
      lastName: fetchedUser.lastName,
      email: fetchedUser.email,
      minecraftAccountName: fetchedUser.minecraftAccountName,
    };
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
  return loggedInUser;
};
export const getUserById = async (userId: string): Promise<User> => {
  let loggedInUser: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    minecraftAccountName: "",
  };
  try {
    const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const fetchedUser = await response.json();
    return {
      id: fetchedUser.userId,
      firstName: fetchedUser.firstName,
      lastName: fetchedUser.lastName,
      email: fetchedUser.email,
      minecraftAccountName: fetchedUser.minecraftAccountName,
    };
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
  return loggedInUser;
};
