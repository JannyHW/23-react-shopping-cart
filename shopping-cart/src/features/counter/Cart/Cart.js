import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectCart, addItem, deleteItem} from "./cartSlice.js";
// import { selectProduct, getProduct} from '../Product/productSlice.js';

 export function Cart() { //import to app.js
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const [cartHidden, setCartHidden] = useState(true)

    function handleClick() {
      setCartHidden(false)
      if (!cartHidden) {
        setCartHidden(true) 
      }
    }

    function handleCheckout() {
      alert(`Checkout - Subtotal: ${total}`)
    }

    const total = cart.reduce((a, b)=>a + b.price*b.quantity, 0).toFixed(2)

   return (
     <div>
      <p className={cartHidden ? "pickedOut" : "pickedIn"}>{cart.length}</p>
      <div className={!cartHidden ? "showCart" : "hiddenCart"}>
        <div className="bagWrap" onClick={handleClick}>
          <button className='bag'>
             {cartHidden ? 
               (<i class="fa fa-shopping-bag fa-2x"></i>) 
               :(<i class="fa fa-close fa-2x"></i>)}
          </button>
        </div>

        <div className="cartContainer">
          <div className="cartHeading"><i class="fa fa-shopping-bag"></i> Cart</div>
          <div>
            <div>
              {cart.map((item) => (
                  <div className="cartInfo">
                
                    <img className="cartImg" src={item.img.thumb} />

                   <div
                      className="cartDelete"

                      onClick={() => dispatch(deleteItem(item))}
                    >x</div> 
   
                    <div className="details">
                      <p className="detailsTitle">{item.title}</p>
                      <p >{item.style}</p>
                      <p>Quantity : {item.quantity} </p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="cartPrice">
                      <p>{item.currencyFormat}{item.price.toFixed(2)}</p>
                      <div>
                        <button className="cartBtns disabled"><i class="fa fa-minus"></i></button>{" "}
                        <button className="cartBtns" onClick={() =>dispatch(addItem(item))}><i class="fa fa-plus"></i></button>{" "}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <p className="empty">Add some products in the cart <br />
              :{")"}
            </p>
          </div>

         <div className="totalWrap">
            <div className="subtotal">SUBTOTAL</div>
            <div className="subtotalMoney">
              <p>${total}</p>
            </div>
            <button className="checkoutBtn" onClick={handleCheckout} >CHECKOUT</button>
          </div>
        </div>
      </div>
      </div>
  )
}