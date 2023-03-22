import React from 'react'
import Navbar from '../components/Navbar'
import ViewOne from '../components/ViewOne'

const ProductDetails = ({cart, setCart}) => {
  return (
    <>
        <Navbar />
        <ViewOne cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetails