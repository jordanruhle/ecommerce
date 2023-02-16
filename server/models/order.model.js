const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '{PATH} is required.'],
      minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
    },
    email: {
      type: String,
      required: [true, '{PATH} is required.'],
      minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
    },
    shipping: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      }
    },
    billing: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      }
    },
    status: {
      type: String,
      required: [true, '{PATH} is required.'],
      minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
    },
    products: {
      type: Array,
      required: [true, '{PATH} is required.'],
      min: [1, '{PATH} must have at least {MINLENGTH} product to purchase.']
    },
    subTotal: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} must be at least ${MIN}.']
    },
    shippingCost: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} required.']
    },
    taxes: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} must be at least ${MIN}.']
    },
    total: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} must be at least ${MIN}.']
    },
  },
  { timestamps: true });

const Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;