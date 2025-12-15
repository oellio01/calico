import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";
import InspirationBookPage from "./components/InspirationBookPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/inspiration-book" element={<InspirationBookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
