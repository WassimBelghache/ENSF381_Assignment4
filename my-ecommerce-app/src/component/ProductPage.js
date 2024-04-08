import React, { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";

function ProductPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = location.state ? location.state.isAuth : false;
  console.log(isAuthenticated);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.id !== item.id || cartItem.quantity > 1
    );
    setCart(updatedCart);
  };

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <ProductList addToCart={addToCart} />
        </div>
        <div style={{ flex: "0 0 300px" }}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
