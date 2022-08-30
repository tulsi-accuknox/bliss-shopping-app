import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { watches } from '../../../FakeData'

function Watches() {
  return (
    <div>
        <Banner title={"watches"}/>
       <Feature title={"Watches"} products={watches}/>

    </div>
  )
}

export default Watches