import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from "./Footer/AboutMe";
import { ContactMe } from "./Footer/ContactMe";
import { Home } from "./Home";
import { LoginAndSignup } from "./LoginAndSignup/LoginAndSignup";
import { MaterialCalculator } from "./PageComponents/MaterialCalculator/MaterialCalculator";
import { RecipeLookup } from "./PageComponents/RecipeLookup/RecipeLookup";
import { ShapeGenerator } from "./PageComponents/ShapeGenerator/ShapeGenerator";
import { SignedUpUsers } from "./PageComponents/SignedUpUsers/SignedUpUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<RecipeLookup />} />
        <Route path="/shape-generator" element={<ShapeGenerator />} />
        <Route path="/material-calculator" element={<MaterialCalculator />} />
        <Route path="/signed-up-users" element={<SignedUpUsers />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login-signup" element={<LoginAndSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
