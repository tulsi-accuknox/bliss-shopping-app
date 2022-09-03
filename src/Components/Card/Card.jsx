import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import '../Feature/Feature.css'

export default function (props) {
  const {cart,setCart} = useContext(cartContext)

  const isPresent = (item) => {
    return cart.some((value) => {
      return value.id === item.id
    }) 
  }
  
  return (
    <div>
        <div className={props.class} key={props.id}>
          <img src={props.img} alt="" />

          <div className="cardDetail">
            <p className="brand">{props.brand}</p>
            <h3 className="product_name">{props.product}</h3>
            <div className="price_cart">
              <p className="price">${props.price}</p>
              <span>
                {isPresent(props) ? (
                  <i class='bx bx-x' onClick={() => setCart((val) => val.filter((i) => i.id !== props.id ) )}></i>
                ) : (
                  <i class="bx bx-cart-add" onClick={() => setCart((val) => [...val,props] )}></i>
                )

                }
                
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}
