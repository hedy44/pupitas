import React from "react";
import '../styles/Navbar.css';


function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Pupitas</h1>
            </div>
             {/* Adicionar os itens da barra de navegação aqui (ex.: links para outras páginas) */}
        </nav>
    );
}

export default Navbar;