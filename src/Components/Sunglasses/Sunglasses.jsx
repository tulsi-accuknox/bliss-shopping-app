import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { sunglasses } from '../../../FakeData'

function Sunglasses() {
  return (
    <div>
        <Banner title={"sunglasses"}/>
       <Feature title={"Sunglasses"} products={sunglasses}/>
    </div>
  )
}

export default Sunglasses