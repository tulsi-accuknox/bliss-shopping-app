import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <div className="footer">
           <div className="footer-1">
             <ul className='ul-1'>
                <li><img src="/images/favicon/icon.png" className='image_footer' alt="" /></li>
                <li>Contact</li>
                <li>Address: 561 wellington Road, Street 32, San Francisco</li>
                <li>Phone: +01 2222 546</li>
                <li>Hours: 10:00 - 18:00. Mon-Sat</li>
              </ul>

              <ul classname='ul-2'>
                <li>About</li>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
              </ul>

              <ul classname='ul-3'>
                <li>My Account</li>
                <li>Sign In</li>
                <li>View Cart</li>
                <li>My Wishlist</li>
                <li>Track My Order</li>
                <li>Help</li>
              </ul>
           </div>

        </div>
        <div className="footer-2">
              <ul>
                <li>Follow Us</li>
              </ul>
              <ul className='ul-4'>
                <li><i class='bx bxl-facebook' ></i></li>
                <li><i class='bx bxl-twitter' ></i></li>
                <li><i class='bx bxl-instagram-alt' ></i></li>
                <li><i class='bx bxl-pinterest' ></i></li>
                <li><i class='bx bxl-youtube' ></i></li>
              </ul>
           </div>
    </div>
  )
}

export default Footer