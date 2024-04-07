import React from 'react'
import OrderFooter from './OrderPage/OrderFooter/OrderFooter'
import OrderPage from './OrderPage/OrderPage'
import OrderHero from './OrderHero/OrderHero'

const OrderPageIndex = () => {
  return (
    <div>
      <OrderPage/>
      <OrderFooter/>
      <OrderHero/>
    </div>
  )
}

export default OrderPageIndex
