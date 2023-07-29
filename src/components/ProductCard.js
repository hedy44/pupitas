import React from 'react';
import '../styles/ProductCard.css';


function ProductCard ({ product }) {
    return ( 
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Categoria: {product.category}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
        </div>
     );
}

export default ProductCard ;