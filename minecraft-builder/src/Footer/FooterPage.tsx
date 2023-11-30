import { Box } from "@mui/material";
import { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe"; // Import your AboutMe component
import { ContactMe } from "./ContactMe";

const FooterPage: FC = () => {
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
        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />{" "}
            <Route path="/contact-me" element={<ContactMe />} />{" "}
          </Routes>
        </div>
        <p style={{ margin: "10px 0", fontSize: "12px" }}>
          © {new Date().getFullYear()} YourWebsiteName
        </p>
      </footer>
    </Box>
  );
};

export default FooterPage;
