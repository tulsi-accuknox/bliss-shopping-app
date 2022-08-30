import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Explore.css"

export default function Explore() {
  const navigate = useNavigate()
  return (
    <div>
        <h1 className="explore_head">Explore</h1>
        <div className="explore_container">
            <img src="/images/cover/exp1.jpg" alt="" onClick={() => navigate('watches')}  />
            <img src="/images/cover/exp2.jpg" alt="" onClick={() => navigate('jewellery')} />
            <img src="/images/cover/exp3.jpg" alt="" onClick={() => navigate('dresses')} />
        </div>
    </div>
  )
}
