import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NoMatch.css'

function NoMatch() {

    const navigate = useNavigate()
  return (
    <div className='default'>
        <h1 className="default_head">WHOOPS!!!</h1>
        <img src="/images/cover/default.gif" alt="" className="default_image" />
        <p className="default_para">You didn't break the internet, but we can't find what you are looking for.</p>
        <button className="default_btn" onClick={() => navigate(-1)}>Go back</button>

    </div>
  )
}

export default NoMatch