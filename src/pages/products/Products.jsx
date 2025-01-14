import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import micro from '../../assets/microphone.png'

function Products() {
  const subProducts = [
    { name: 'SubProduct1', image: micro },
    { name: 'SubProduct2', image: micro },
    { name: 'SubProduct3', image: micro },
    { name: 'SubProduct4', image: micro },
    { name: 'SubProduct5', image: micro },
    { name: 'SubProduct6', image: micro },
    { name: 'SubProduct7', image: micro },
  ];

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="subproducts-grid">
        {subProducts.map((sub, idx) => (
          <Link to={`/products/${sub.name}`} key={idx} className="subproduct-link">
            <img src={sub.image} alt={sub.name} className="subproduct-image" />
            <p>{sub.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
