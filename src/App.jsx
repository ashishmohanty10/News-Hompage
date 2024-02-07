import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Provider as TextBalancer } from "react-wrap-balancer";

const App = () => {
  return (
    <>
      <Router>
        <TextBalancer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </TextBalancer>
      </Router>
    </>
  );
};

export default App;
