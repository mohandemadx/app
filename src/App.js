import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import ViewProductPage from "./components/ViewProduct";
import AllProducts from "./components/AllProductsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<CategoryPage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:category" element={<ProductPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:category/:productId" element={<ViewProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
