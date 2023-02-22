import React from 'react'
import Navbar from '../components/navbar'
import ViewOne from '../components/viewone'

const ProductDetails = ({cart, setCart}) => {
  return (
    <>
        <Navbar />
        <ViewOne cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetails