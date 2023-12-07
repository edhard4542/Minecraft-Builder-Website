import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import backgroundImage from "../assets/minecraft_mountains_trees.jpg";


export const ContactMe: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    color: "white",
    padding: 2,
    textAlign: "center",
    fontSize: "2rem",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

  

    // Replace this with your actual email sending logic
    console.log("Sending email to edhardin01@gmail.com with data:", formData);

    setSubmitted(true);
    // You might want to reset the form fields here
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setMessage("");
  };

  return (
    <div>
      <Navigation />
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Generator website</h3>
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      ) : (
        <Typography variant="body1" align="center" gutterBottom>
          Thank you for messaging me! I will contact you shortly! Have a nice
          day!
        </Typography>
      )}
    </div>
  );
};

export default ContactMe;
