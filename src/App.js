import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Prices, Error } from "./pages/index";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
