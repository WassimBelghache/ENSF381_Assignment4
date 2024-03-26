import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function ProductPage() {
  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    const storedCartItems = data ? JSON.parse(data) : [];
    setCartItems(storedCartItems);
    setReload(true);
  }, []);

  useEffect(() => {
    if (cartItems.length <= 0 && reload) {
      const data = localStorage.getItem('cartItems');
      const storedCartItems = data ? JSON.parse(data) : [];
      setReload(false);
      setCartItems(storedCartItems);
      return;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems, reload]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  return (
    <div className="product-page">
      <Header />
      <div className="shop-interface"> {/* Changed from table to div */}
        <div className='products'><ProductList onAddToCart={handleAddToCart} /></div>
        <div className='cart'>
          <h2 className='cart-header'>Shopping Cart</h2>
          <Cart cartItems={cartItems} onRemove={handleRemoveItem} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;