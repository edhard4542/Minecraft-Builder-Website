// FooterPage.tsx

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe"; // Import your AboutMe component
import ContactMe from "./ContactMe"; // Import your ContactMe component

const FooterPage: React.FC = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
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
        <Switch>
          <Route path="/about-me" Component={AboutMe} />
          <Route path="/contact-me" Component={ContactMe} />
        </Switch>
      </div>
      <p style={{ margin: "10px 0", fontSize: "12px" }}>
        © {new Date().getFullYear()} YourWebsiteName
      </p>
    </footer>
  );
};

export default FooterPage;
