import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Products";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();

    setProducts(json.products);
  };

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const filteredPro = products.filter((product) => {
    if (product.title.includes(inputValue)) {
      return product;
    }
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Products inputOnChange={inputOnChange} products={filteredPro} />
    </>
  );
}

export default App;
