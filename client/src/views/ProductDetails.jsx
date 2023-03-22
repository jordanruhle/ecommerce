import React from 'react'
import Navbar from '../components/GenericComponents/Navbar'
import ViewOne from '../components/ProductComponents/ViewOne'

const ProductDetails = ({cart, setCart}) => {
  return (
    <>
        <Navbar />
        <ViewOne cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetails