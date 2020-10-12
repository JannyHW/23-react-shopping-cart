import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, getProduct} from './productSlice.js';
import { selectCart, addItem, deleteItem} from '../Cart/cartSlice.js';

export function Product() { //import to app.js
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  useEffect(() =>{
   dispatch(getProduct());
   }, []);

  return (
   <div className="container">
      <div className="aside">
         <p className="sizeName">Sizes:</p>
         <div className="sizeTop">
            <button className="size">XS</button>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">ML</button>
         </div>
          <button className="size">L</button>
          <button className="size">XL</button>
          <button className="size">XXL </button>
           <p className="review">
            Leave a star on Github if this repository was useful : {")"}
          </p>
         <div className="starBtn">
            <button className="star">
              <i class="fa fa-star-o"></i> Star
            </button>
            <button className="likes" >
              1,513
            </button>
          </div>
      </div>
      <div className="productWrap">
         <div className="productName">
            <span>
               {products.length} Product(s) found.
            </span>
            <span className="select">Order by {" "}
               <select className="dropDown" form="carform">
               <option>Select</option>
               <option>Lowest to Highest</option>
               <option>Highest to Lowest</option>
               </select>
            </span>
         </div>
         <ul className="productList">
            {products.map((item) =>(
         <li
            style={{backgroundImage: `url(${item.img.normal})`}}
            className="eachItem">
            <div>
               {item.isFreeShipping ? 
               (<div className="free"> Free shipping</div>) 
               : null}
            </div>
            <div className="productTitle">{item.title}</div>
            <hr />
            <div>
               <div className="productPrice">
               {item.currencyFormat}
               <span className="dollars">{item.price.toString().split('.')[0]}</span>
               .{item.price.toFixed(2).toString().split('.')[1]}</div>
               <div className="installment">
                  {item.installments ? (
                  <span>Or {item.installments} x {item.currencyFormat}{ (item.price / item.installments).toFixed(2)}
                  </span>
                  ) :"No installments"}
               </div>
            </div>
            <button 
            className="productBtn" 
            onClick={() =>dispatch(addItem(item))}> 
            Add to cart
            </button>
         </li>
         ))}
         </ul>
      </div>
   </div>
   )
}