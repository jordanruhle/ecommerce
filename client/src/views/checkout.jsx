import React from 'react'
import CheckoutForm from '../components/CheckoutComponents/CheckoutForm'
import StripePaymentForm from '../components/CheckoutComponents/StripePaymentForm'

const Checkout = () => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300'>
      <CheckoutForm />
        {/* <StripePaymentForm /> */}
    </div>
  )
}

export default Checkout