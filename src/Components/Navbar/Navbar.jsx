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
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/dresses'>Dresses</NavLink>
                    <NavLink to='/shoes'>Shoes</NavLink>
                    <NavLink to='/bags'>Bags</NavLink>
                    <NavLink to='/watches'>Watches</NavLink>
                    <NavLink to='/sunglasses'>Sunglasses</NavLink>
                    <NavLink to='/jewellery'>Jewellery</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>

            <div className='hamburger-menu' onClick={() => setIsActive(!isActive)} >
            <i class='bx bx-menu'></i>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar