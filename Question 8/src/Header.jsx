import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: "18px" }}>
      <h2 onClick={() => navigate("/home")}>Home</h2>
      <h2 onClick={() => navigate("/profile")}>Profile</h2>
      <h2 onClick={() => navigate("/settings")}>Settings</h2>
    </div>
  );
};

export default Header;
