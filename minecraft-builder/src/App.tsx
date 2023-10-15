import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FloorGenerator } from "./PageComponents/FloorGenerator/FloorGenerator";
import { MaterialCalculator } from "./PageComponents/MaterialCalculator/MaterialCalculator";
import { PalletGenerator } from "./PageComponents/PalletGenerator/PalletGenerator";
import { ShapeGenerator } from "./PageComponents/ShapeGenerator/ShapeGenerator";
import { Home } from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pallet-generator" element={<PalletGenerator />} />
        <Route path="/shape-generator" element={<ShapeGenerator />} />
        <Route path="/floor-generator" element={<FloorGenerator />} />
        <Route path="/material-calculator" element={<MaterialCalculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
