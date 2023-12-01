import { ChangeEvent, useState } from "react";
import { User } from "../../types";

export function useUserState<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  };

  const reset = () => setValue(initialValue);

  return { value, handleChange, reset };
}

export function useUserData() {
  const [users, setUsers] = useState<User[]>([]);

  const getUser = async (userId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
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
      console.log(fetchedUser, "fetchedUser");
      setUsers(fetchedUser);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const addUser = async (userData: Omit<User, "id">) => {
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

      await getUsers();
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
    }
  };

  const updateUser = async (userId: string, userData: Partial<User>) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await getUsers(); // Refresh the users list
    } catch (error) {
      console.error("There was a problem with the PUT request:", error);
    }
  };

 const deleteUser = async (userEmail: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/email/${userEmail}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await getUsers(); // Refresh the users list
    } catch (error) {
      console.error("There was a problem with the PUT request:", error);
    }
  };

  return {
    users,
    setUsers,
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser,
  };
}
