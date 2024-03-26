import React, { useState } from 'react';

function ProductItem(props) {
  const { product, onAddToCart } = props;
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className='product-img' src={product.image} alt={product.name} />
      <p className='product-name'>{product.name}</p>
      <p className='product-price'>Price: ${product.price}</p>
      <button className="product-button" onClick={handleAddToCart}>Add to Cart</button>
      {showDescription && <p className='product-description'>{product.description}</p>}
    </div>
  );
}

export default ProductItem;