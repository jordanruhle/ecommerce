const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// PAYMENT
module.exports.payment = (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html")
}

// CONFIG
module.exports.config = (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

// CREATE PAYMENT INTENT
module.exports.createPaymentIntent = async (req, res) => {
  // Destructuring from req.body
  const {cardElement, amount, currency} = req.body
  console.log(cardElement);
  try {
    // Creating Payment Method using Card Element

    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: cardElement,
    });

    // Creating Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method: paymentMethod.id,
      confirmation_method: 'manual',
      confirm: true,
      metadata: { integration_check: 'accept_a_payment' },
    });
    const data = {
      payment_method: paymentMethod,
      payment_intent: paymentIntent
    }
    // const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id);

    res.status(200).json({ data: data });
  } catch (error) {
    console.log("*****************************************************************************************************************************")
    console.error(error.message);
    console.log("*****************************************************************************************************************************")
    res.status(500).json({ error: error.message });
  }
};