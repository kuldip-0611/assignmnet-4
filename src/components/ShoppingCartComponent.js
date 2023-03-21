import React from 'react'
import AddtoCardCart from './AddtoCardCart'


const ShoppingCartComponent = () => {

  return (
    <div className='bg-dark text-light mt-2 rounded p-2'>
      Your Shopping Cart
      <AddtoCardCart />

    </div>
  )
}

export default ShoppingCartComponent
