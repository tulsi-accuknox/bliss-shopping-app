import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { bags } from '../../../FakeData'

function Bags() {
  return (
    <div>
        <Banner title={"bags"}/>
       <Feature title={"Bags"} products={bags}/>
    </div>
  )
}

export default Bags