import React from "react";
import Card from "../Card/Card";
import "./Feature.css";

function Feature({ title, products }) {
  return (
    <div>
      <section className="card_container">
        <h1 className="card_h1">{title}</h1>
        <div className="card_pro">
          {products.map((item) => {
            return <Card class="card" id={item.id} brand={item.brand} product={item.product} price={item.price} img={item.img}/>
        })}
          {/* <div className="card">
            <img src="/images/feature/feature-1.jpg" alt="" />

            <div className="cardDetail">
              <p className="brand">LOLO</p>
              <h3 className="product_name">GUCCI</h3>
              <div className="price_cart">
                <p className="price">$200</p>
                <span>
                  <i class="bx bx-cart-add"></i>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Feature;
