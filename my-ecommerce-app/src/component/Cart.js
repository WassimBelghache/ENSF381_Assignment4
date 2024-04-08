import React from 'react';
import CartItem from './CartItem';

function Cart(props) {
  const { cartItems = [], onRemove, onDecrease, onIncrease } = props;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart" style={cartStyle}>
      <h2 className='cart-header'>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} onDecrease={onDecrease} onIncrease={onIncrease} />
      ))}
      <div className='cart-total'>
        Overall Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

const cartStyle = {
  width: '30%', 
  padding: '1rem', 
  marginLeft: 'auto', 
  position: 'absolute', 
  right: '0', 
  top: '6rem', 
  fontSize: '15px', 
  marginBottom: '1rem', 
  textAlign: 'left'
};

export default Cart;
