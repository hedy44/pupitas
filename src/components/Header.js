import React from "react";
import Navbar from './Navbar';
import '../styles/Header.css';


function Header(){
    return (
    
        <header className="header">
            <div className="logo">
                <h1>Pupitas</h1>
            </div>
            <Navbar />
        </header>
    
    );
}

    

export default Header;