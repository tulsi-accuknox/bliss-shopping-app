import React from 'react'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import { jewellery } from '../../../FakeData'

function Jewellery() {
  return (
    <div>
        <Banner title={"jewellery"}/>
       <Feature title={"Jewellery"} products={jewellery}/>

    </div>
  )
}

export default Jewellery