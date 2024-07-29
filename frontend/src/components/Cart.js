import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3002/orders');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <h3>Product ID: {item.productId}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${item.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
