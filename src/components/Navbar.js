import React from "react";
import '../styles/Navbar.css';


function Navbar(){
    return (
        <nav className="navbar">

            <div className="nav-links">
                <a href="#inicio">Início</a>
                <a href="#roupas">Roupas</a>
                <a href="#acessorios">Acessórios</a>
                <a href="#carrinho">Carrinho</a>
            </div>
             {/* Adicionar os itens da barra de navegação aqui (ex.: links para outras páginas) */}
        </nav>
    );
}

export default Navbar;