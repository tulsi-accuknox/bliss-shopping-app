import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Banner.css"

function Banner(props) {
  const navigate = useNavigate()
  return (
    <div>
        <section className="banner">
            <button className="banner_btn" onClick={() => navigate('/')}><i class='bx bx-chevrons-left'></i></button>
            <h2 className='banner_head'>#{props.title}</h2>
            <p className='banner_para'>Save more with coupons & upto 70% off!</p>
        </section>
    </div>
  )
}

export default Banner