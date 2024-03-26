import React from 'react';

function CartItem(props) {
  const { item, onRemove } = props;

  return (
    <div className="cart-item">
      <img className="item-image" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button className="remove-item" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;