import React from 'react'
import Explore from '../Explore/Explore'
import Product from '../Products/Product'
import "./Home.css"


function Home() {
  return (
    <div>
        <div className="home">
          <div className="home_left">
           <p className="home_p">Trend in Offer</p>
           <h1 className="home_head1">Super value deals</h1>
           <h1 className="home_head2">On all products</h1>
           <p className="home_p2">Where Women Trend!!</p>
           <button className="home_btn">Shop Now</button>
          </div>

           <div className="home_right">
            <img src="/images/cover/cover-img.png" alt="" />
           </div>
        </div>
        <Product/>
        <Explore/>
    </div>
  )
}

export default Home