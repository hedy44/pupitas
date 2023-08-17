import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ClothesPage from './components/ClothesPage';
import AccessoriesPage from './components/AccessoriesPage';
import CartPage from './components/CartPage'; // Importe a página do carrinho
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roupas" element={<ClothesPage />} />
          <Route path="/acessorios" element={<AccessoriesPage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
