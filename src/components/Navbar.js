import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/Navbar.css';


function Navbar(){
    return (
        <nav className="navbar">

            <div className="nav-links">
            <Link to="/">Início</Link>
                <Link to="/roupas">Roupas</Link>
                <Link to="/acessorios">Acessórios</Link>
                <Link to="/carrinho">Carrinho</Link>
            </div>
             {/* Adicionar os itens da barra de navegação aqui (ex.: links para outras páginas) */}
        </nav>
    );
}

export default Navbar;