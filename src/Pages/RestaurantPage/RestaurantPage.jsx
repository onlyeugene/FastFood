import React from 'react'
import RestaurantHero from './RestaurantHero/RestaurantHero'
import RestaurantHero2 from './RestaurantHero/RestaurantHero2/RestaurantHero2'
import RestaurantContents from './RestaurantContents/RestaurantContents'
import OrderPage from '../Order/OrderPage/OrderPage'

const RestaurantPage = () => {
  return (
    <div>
      <RestaurantHero/>
      <RestaurantHero2/>
      <RestaurantContents/>
    </div>
  )
}

export default RestaurantPage
