import { Box } from "@mui/material";
import { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe"; 
import { ContactMe } from "./ContactMe";
import discordIcon from "../assets/discordIcon.jpg";

const FooterPage: FC = () => {
  const discordLink = "https://discord.gg/S7vYZPcc";
  return (
    <Box>
      <footer
        style={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <div>
          <Link
            to="/about-me"
            style={{ textDecoration: "none", margin: "0 10px" }}
          >
            About Me
          </Link>
          <Link
            to="/contact-me"
            style={{ textDecoration: "none", margin: "0 10px" }}
          >
            Contact Me
          </Link>
        </div>
        <a href={discordLink} target="_blank" rel="noopener noreferrer">
          <img
            src= {discordIcon}
            alt="Join our Discord"
            style={{ width: "50px", height: "50px", marginTop: "20px" }}
          />
        </a>

        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />{" "}
            <Route path="/contact-me" element={<ContactMe />} />{" "}
          </Routes>
        </div>
        <p style={{ margin: "10px 0", fontSize: "12px" }}>
          © {new Date().getFullYear()} CraftAssist
        </p>
      </footer>
    </Box>
  );
};

export default FooterPage;
