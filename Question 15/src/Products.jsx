import React, { useEffect, useState } from "react";
import Spinner from "./assets/Spinner.mp4"

const Products = () => {
  let [products, setProducts] = useState([]);

  const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let json = await data.json();

    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {products.length === 0 ? (
        <video width="640" height="360" loop autoplay>
          <source
            src={Spinner}
            type="video/mp4"
          />
        </video>
      ) : (
        products.map((item) => <h2>{item.title}</h2>)
      )}
    </div>
  );
};

export default Products;
