import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
function ProductDetails() {
  const { subproduct, id } = useParams();

  return (
    <div>
      <h2>Details for {subproduct} - Product {id}</h2>
    </div>
  );
}

export default ProductDetails;
