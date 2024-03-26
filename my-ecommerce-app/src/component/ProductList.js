import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

function ProductList(props) {
  const { onAddToCart } = props;

  return (
    <div className="product-list">
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;