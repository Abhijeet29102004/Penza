import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SubProducts.css';

// Import images
import productImage1 from '../../assets/microphone.png';
import productImage2 from '../../assets/microphone.png';

function SubProducts() {
  const { subproduct } = useParams();

  // Product data with images
  const products = [
    { id: 1, name: `${subproduct} Product1`, image: productImage1 },
    { id: 2, name: `${subproduct} Product2`, image: productImage2 },
  ];

  return (
    <div className="subproducts-container">
      <h2>{subproduct}</h2>
      <div className="subproducts-grid">
        {products.map((product) => (
          <Link
            to={`/products/${subproduct}/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubProducts;
