import React from 'react'
import GrayButton from '../GenericComponents/GrayButton'

const EmptyCart = () => {
  return (
    <div className="bg-white rounded shadow p-4 col-span-full">
      <h1 className='text-3xl mb-10 mr-6 uppercase'>My Cart</h1>
      <h2 className='text-2xl mb-4 mr-6 '>Your cart is currently empty.</h2>
      <p className='text-xl mb-2 mr-6 font-semibold'>Want to shop?</p>
      <p className='text-xl mb-4 mr-6 '>This is the perfect opportunity to shop for the gear you've been wanting.</p>
      <form action="/">
        <GrayButton buttonText="Continue Shopping" />
      </form>
    </div>
  )
}

export default EmptyCart