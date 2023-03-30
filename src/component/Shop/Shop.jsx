import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart , setCart] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(r => r.json())
        .then(d => setProducts(d))
     },[])  

     const handelAddtocart=(product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
     }
    return (
        <div className='shoop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product = {product}
                    handelAddtocart = {handelAddtocart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order-Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;