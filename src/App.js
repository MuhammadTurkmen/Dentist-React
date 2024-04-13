import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Prices, Error } from "./pages/index";

function About() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default About;
