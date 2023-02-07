import React, {useState} from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import CheckoutForm from './CheckoutForm';


const StripePaymentForm = () => {
    const stripeKey = process.env.stripePublicApiKey;
    console.log(`${stripeKey}`)
    const [stripePromise, setStripePromise] = useState(() => loadStripe(`${stripeKey}`));
    
    const options = {
        //Client Secret Key is Obtained from the stripe server
        clientSecret: '{{CLIENT_SECRET}}'
    };

  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
    </Elements>
  )
}

export default StripePaymentForm