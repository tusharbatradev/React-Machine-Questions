import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();

    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(products.length === 0 ) return <h1>Loading</h1>;
  return (
    <div>
      {products.map((product) => (
        <h3>{product.title} <button onClick={() => dispatch(addItem(product))}>Add to Cart</button></h3>
      ))}
    </div>
  );
};

export default Products;
