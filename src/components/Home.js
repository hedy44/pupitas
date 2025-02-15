import React,  { useState } from "react";
import Hero from "./Hero";
import Produtos from "./Produtos";
import Contato from "./Contato";
import Footer from "./Footer";
import '../styles/Home.css';


function Home() {
    return(
        <div className="home">
         <Hero />
         <Produtos />
         <Contato />
         <Footer />
        

      </div>
    )
}

export default Home;