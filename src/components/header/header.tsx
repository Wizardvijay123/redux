import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h2 className="logo">Vijay App</h2>
      <div className="header-right">
        <span className="username">Hi, Vijay 👋</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
