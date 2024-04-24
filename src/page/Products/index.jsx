import axios from "axios";
import { useEffect, useReducer } from "react";
import productReducer from "../../reducers/productReducer";

const url = "https://dummyjson.com/products";

const ProductsPage = () => {
  const [products, dispatch] = useReducer(productReducer, []);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "getproducts", payload: data.products });
    });
  },[]);









};
