import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(r => r.json())
        .then(d => setProducts(d))
     },[])  

    return (
        <div className='shoop-container'>
            <div className="product-container">
                <h2>Product comming Here : {products.length}</h2>
            </div>
            <div className="cart-container">
                <h4>Order-Summary</h4>
            </div>
        </div>
    );
};

export default Shop;