import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicInfo from "./components/BasicInfo";
import Home from "./Home";
import Preview from "./components/Preview";
import Final from "./Final";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createresume" element={<Home />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
};

export default App;
