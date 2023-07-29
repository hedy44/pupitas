import React from 'react';
import Header from './components/Header'; // Importa o componente Header
import ProductCard from './components/ProductCard';
import './index.css';

//arrays
const clothesCollection = [
  {
    id: 1,
    name: 'Camiseta Unicórnio',
    category: 'Menina',
    price: 25.99,
    image: 'https://example.com/camiseta-unicornio.jpg',
  },
  {
    id: 2,
    name: 'Calça Jeans Rasgada',
    category: 'Menino',
    price: 29.99,
    image: 'https://example.com/calca-jeans-rasgada.jpg',
  },
  // Adicionar mais roupas aqui, se necessário
];


//Array acessorios
const accessoriesCollection = [
  {
    id: 1,
    name: 'Colar de Flores',
    category: 'Acessório',
    price: 9.99,
    image: 'https://example.com/colar-flores.jpg',
  },
  {
    id: 2,
    name: 'Boné Estiloso',
    category: 'Acessório',
    price: 12.99,
    image: 'https://example.com/bone-estiloso.jpg',
  },
  // Adicionar mais acessórios aqui, se necessário
];




function App() {
  return (
    <div>
      <Header /> {/* Exibe o componente Navbar na página */}
      <h1>Bem-vindo à Pupitas</h1>
      <p>Aqui você encontra roupas casuais para meninos e meninas.</p>
      <h2>Roupas</h2>
      <div className="clothes-container">
        {clothesCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

       {/* Seção de Acessórios */}
       <h2>Acessórios</h2>
      <div className="accessories-container">
        {accessoriesCollection.map((accessory) => (
          <ProductCard key={accessory.id} product={accessory} />
        ))}
      </div>
      
    </div>

    
  );
}

export default App;
