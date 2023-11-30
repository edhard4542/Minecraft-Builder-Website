import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { TextField, Button, Typography } from "@mui/material";

export const ContactMe: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle sending the email (For example, using a backend service)

    // Simulating email sending
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
