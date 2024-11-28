import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
