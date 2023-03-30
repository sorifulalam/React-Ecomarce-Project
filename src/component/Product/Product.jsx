import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
   // console.log(props.product)
   const {img, name, seller,ratings,quantuty,price} = props.product;
  const handelAddtocart = props.handelAddtocart;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratting: {ratings}</p>
            </div>
            {/* props.product dora hoice prdut er element gula ansr j9 ar ayata function diya raf kore fela hoiche */}
            <button className='btn-cart' onClick={()=>handelAddtocart(props.product)}>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button> 
        </div>
    );
};

export default Product;