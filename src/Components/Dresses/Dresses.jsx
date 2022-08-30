import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { dresses } from '../../../FakeData'

function Dresses() {
  return (
    <div>
       <Banner title={"dresses"}/>
       <Feature title={"Dresses"} products={dresses}/>

    </div>
  )
}

export default Dresses