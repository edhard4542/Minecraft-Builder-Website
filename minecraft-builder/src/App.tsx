import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Home";
import { FloorGenerator } from "./PageComponents/FloorGenerator/FloorGenerator";
import { MaterialCalculator } from "./PageComponents/MaterialCalculator/MaterialCalculator";
import { PalletGenerator } from "./PageComponents/PalletGenerator/PalletGenerator";
import { ShapeGenerator } from "./PageComponents/ShapeGenerator/ShapeGenerator";
import { SignedUpUsers } from "./PageComponents/SignedUpUsers/SignedUpUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pallet-generator" element={<PalletGenerator />} />
        <Route path="/shape-generator" element={<ShapeGenerator />} />
        <Route path="/floor-generator" element={<FloorGenerator />} />
        <Route path="/material-calculator" element={<MaterialCalculator />} />
        <Route path="/signed-up-users" element={<SignedUpUsers />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
