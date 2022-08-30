import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { shoes } from '../../../FakeData'


function Shoes() {
  return (
    <div>
        <Banner title={"shoes"}/>
       <Feature title={"Shoes"} products={shoes}/>
    </div>
  )
}

export default Shoes