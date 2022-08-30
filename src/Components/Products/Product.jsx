import React from 'react'
import Feature from '../Feature/Feature'
import {featuredProduct,newArrivals} from '/FakeData'

export default function Product() {
  return (
    <div>
        <Feature title={"Featured Products"} products={featuredProduct}/>
        <Feature title={"New Arrivals"} products={newArrivals}/>
    </div>
  )
}
