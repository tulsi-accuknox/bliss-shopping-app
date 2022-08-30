import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div>
        <section className="signup_container">
            
            <div className="signup_content">
                <h2 className='signup_head'>Sign Up For Newsletters</h2>
                <p className='signup_para'>Get E-mail updates about our latest shop and special offers.</p>
            </div>
            
            <div className="signup_input">
                <input type="email" placeholder='Your email address' />
                <button className="signup_btn">Sign Up</button>
            </div>
        </section>
    </div>
  )
}

export default Signup