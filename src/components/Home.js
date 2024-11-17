import React,  { useState } from "react";
import '../styles/Home.css';

function Home() {
    return(
        <div className="home">
        <header className="header">
          <h1>Bem-vindo à Maria Pupitas!</h1>
          <p>Encontre os melhores produtos para seus filhos!</p>
        </header>
  
        <section className="featured-products">
          <h2>Produtos em Destaque</h2>
          <div className="products-list">
            <div className="product-card">
              <img src="https://via.placeholder.com/200" alt="Produto 1" />
              <h3>Produto 1</h3>
              <p>R$ 99,99</p>
              <button>Comprar</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/200" alt="Produto 2" />
              <h3>Produto 2</h3>
              <p>R$ 149,99</p>
              <button>Comprar</button>
            </div>
          </div>
        </section>
  
        <footer className="footer">
          <p>© 2024 Pupitas. Todos os direitos reservados.</p>
        </footer>
      </div>
    )
}

export default Home;