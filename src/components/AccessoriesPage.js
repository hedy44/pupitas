import React from 'react';
import ProductCard from './ProductCard';
import { accessoriesCollection } from '../data'; // Importe a coleção de acessórios

function AccessoriesPage() {
  return (
    <div>
      <h2>Acessórios</h2>
      <div className="accessories-container">
        {accessoriesCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AccessoriesPage;
