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
  }, []);

  const handleDelete = (id) => {
    dispatch({ type: "deleteproduct", payload: id });
  };
  const handleEdit = (id) => {
    dispatch({ type: "editproduct", payload: id });
  };
  const deleteFirst = () => {
    dispatch({ type: "deletefirst" });
  };
};
