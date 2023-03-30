import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    return (
        <div className='cart'>
            <h4>Order-Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
            
        </div>
    );
};

export default Cart;