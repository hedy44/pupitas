import React from 'react';
import ProductCard from './ProductCard';
import { clothesCollection } from '../data'; // Importe a coleção de roupas

function ClothesPage() {
  return (
    <div>
      <h2>Roupas</h2>
      <div className="clothes-container">
        {clothesCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ClothesPage;
