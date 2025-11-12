import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo La Coffee Goods" className="header-logo" />
    </header>
  );
}

export default Header;
