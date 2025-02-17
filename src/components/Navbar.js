import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo_pupitas.jpg";

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>

          <div className="logo">
            <img src={logo} alt="Maria Pupitas" />
          </div>

          <li><a href="#">Produtos</a></li>
          
        </ul>
      </nav>
    );
  }
  
  export default Navbar;