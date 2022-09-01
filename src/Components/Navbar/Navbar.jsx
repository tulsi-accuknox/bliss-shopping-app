import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

import "./Navbar.css"

function Navbar() {
  const [isActive,setIsActive] = useState(false);

  return (
    <div>
        <div className='nav-bar'>
           <div className="logo">
           <img src="/images/favicon/icon.png" alt="" />
            <h2>bliss</h2>
           </div>
            <div className="nav-list">
                <ul className={isActive ? "active-list" : "navlist"}>
                    <NavLink to='/'><img src="/images/favicon/home.png" alt="" /></NavLink>
                    <NavLink to='/dresses'><img src="/images/favicon/dress.png" alt="" /></NavLink>
                    <NavLink to='/shoes'><img src="/images/favicon/high-heel.png" alt="" /></NavLink>
                    <NavLink to='/bags'><img src="/images/favicon/shopping-bag.png" alt="" /></NavLink>
                    <NavLink to='/watches'><img src="/images/favicon/hand-watch.png" alt="" /></NavLink>
                    <NavLink to='/sunglasses'><img src="/images/favicon/sunglasses.png" alt="" /></NavLink>
                    <NavLink to='/jewellery'><img src="/images/favicon/necklace.png" alt="" /></NavLink>
                    <NavLink to='/contact'><img src="/images/favicon/phone.png" alt="" /></NavLink>
                </ul>
            </div>


            <div className='hamburger-menu' onClick={() => setIsActive(!isActive)} >
              <i class='bx bx-menu'></i>
            </div>

            
            <div className="cart_btn">
              <img src="/images/favicon/shopping-cart.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar