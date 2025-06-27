import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    console.log(data);
  };

  const filteredProducts = products.filter((item) => {
    if (item.title.toLowerCase().includes(productName)) {
      return item;
    }
  });

  function handleChange(e) {
    setProductName(e.target.value);
    console.log(productName);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <input type="text" value={productName} onChange={handleChange} />
        {filteredProducts.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>
  );
};

export default App;
