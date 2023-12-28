// import React, { useEffect, useCallback, useMemo } from "react";
import React,{useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { setproducts } from "../Redux/actions/productaction";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch =useDispatch()
  const fetchproducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Err", err)
    });
   dispatch(setproducts(response.data))
  };
  useEffect(() => {
    fetchproducts();
  },[])
  console.log("products",products)
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
};
export default ProductListing