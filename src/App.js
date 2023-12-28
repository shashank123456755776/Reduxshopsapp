import React from "react";
import { BrowserRouter , Route,  Routes } from "react-router-dom";
import Header from "./Containers/Header";
import "./App.css";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";
// import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>
          <Route> 404 Not Found! </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

