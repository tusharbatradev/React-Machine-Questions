import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      {cart.length === 0 ? (
        <h1>Your Cart is empty</h1>
      ) : (
        <div>
          {cart.map((product) => (
            <h1>
              {product.title}{" "}
              <button onClick={() => dispatch(removeItem(product.id))}>
                Delete Item
              </button>
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
