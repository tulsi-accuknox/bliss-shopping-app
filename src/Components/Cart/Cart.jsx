import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { cartContext } from "../Context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(cartContext);

  const [totalPrice, setTotalPrice] = useState();


  useEffect(() => {
    const newTotalPrice = cart.reduce((acc,curr) => Number(acc+curr.price),0)
    setTotalPrice(newTotalPrice)
  },[cart])

  // localStorage.setItem("cart", JSON.stringify(cart))

  return (
    <>
      <div className="cart_container">
        <div className="cart_head">
          <i class="bx bxs-shopping-bag"></i>
          <p>My Cart</p>
        </div>

        {/* <div className="cart_total_details">
          <p className='total'>Total: <span className='cart_total'>$2000</span></p>
          <p className="total"> Total:</p>
          <span className="cart_total">${totalPrice}</span>
        </div> */}
      </div>
      <div className="cart_card_container">
        {cart.map((item) => {
          return (
            <Card
              class="card"
              props={item}
              id={item.id}
              brand={item.brand}
              product={item.product}
              price={item.price}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cart;
