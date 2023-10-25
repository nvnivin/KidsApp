import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Personalities from "./Personalities";
import Home from "./Home";
import Habits from "./Habits";

function PublicApp() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personalities" element={<Personalities />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </Router>
  );
}

export default PublicApp;
