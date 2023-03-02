import React from 'react';
import { Elements } from 'react-stripe-elements';
import { loadStripe } from '@stripe/stripe-js';
import { StripeProvider } from 'react-stripe-elements';


const StripeProviderWrapper = ({ children }) => {
  const stripeApiKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripe = window.Stripe('your_stripe_api_key_here');

  return (
    <StripeProvider stripe={stripe}>
      {children}
    </StripeProvider>
  )
}

export default StripeProviderWrapper