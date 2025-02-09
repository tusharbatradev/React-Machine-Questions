import React from "react";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <button onClick={() => navigate("/cart")}>Cart <span>{cart.length}</span></button>
      <Products />
    </div>
  );
};

export default Body;
