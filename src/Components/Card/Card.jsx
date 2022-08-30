import React from 'react'
import '../Feature/Feature.css'

export default function (props) {
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
                <i class="bx bx-cart-add"></i>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}
