import React,  { useState } from "react";
import Hero from "./Hero";
import Destaques from "./Destaques";
import Contato from "./Contato";
import Footer from "./Footer";
import Banners from "./Banners";
import '../styles/Home.css';


function Home() {
    return(
        <div className="home">
         <Hero />
         <Banners />
         <Destaques />
         <Contato />
         <Footer />
        

      </div>
    )
}

export default Home;