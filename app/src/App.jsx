import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
