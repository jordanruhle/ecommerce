import React from 'react'
import CheckoutForm from '../components/CheckoutComponents/CheckoutForm'
import StripePaymentForm from '../components/CheckoutComponents/StripePaymentForm'

const Checkout = ({ cart, setCart }) => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300'>
      <CheckoutForm  cart={cart} setCart={setCart}/>
        {/* <StripePaymentForm /> */}
    </div>
  )
}

export default Checkout