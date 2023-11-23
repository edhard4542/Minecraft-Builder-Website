import { useEffect, useState } from "react";
import Navigation from "../../Navigation/Navigation";

export const SignedUpUsers = () => {
  const [users, setUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted:", { email, firstName, lastName });

    

    
    // Here, you would typically handle the form submission, like sending it to a server
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

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, [users.length]); // Added dependency array

  return (
    <div className="user-list-container">
      <Navigation />
      <ul className="user-list">
        {users.map(
          (
            user: { firstName: string; lastName: string; email: string },
            index
          ) => (
            <li key={index} className="user-list-item">
              <div>
                <strong>First Name:</strong> {user.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {user.lastName}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
            </li>
          )
        )}
      </ul>

      <div className="signup-container">
        <h2>Sign up for more content</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};
