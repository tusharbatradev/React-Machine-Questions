import React from "react";

const Products = ({ products, inputOnChange }) => {
  if (!products) {
    return null;
  }
  return (
    <div>
        <input onChange={inputOnChange} type="text" />
      {products.map((product) => (
        <ul>
          <li>{product.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
