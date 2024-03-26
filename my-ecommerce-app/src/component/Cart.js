import React from 'react';
import CartItem from './CartItem';

function Cart(props) {
  const { cartItems, onRemove, onDecrease, onIncrease } = props;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} onDecrease={onDecrease} onIncrease={onIncrease} />
      ))}

      <div className='cart-total'>
        Total (in cart): ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;