const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    billing: {
      email: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      firstName: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      lastName: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      company: {
        type: String,
        required: [false],
      },
      address: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      address2: {
        type: String,
        required: [false],
      },
      city: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      state: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      zip: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      phone: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },

    },
    shipping: {
      firstName: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      lastName: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      company: {
        type: String,
        required: [false],
      },
      address: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      address2: {
        type: String,
        required: [false],
      },
      city: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
      state: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [2, '{PATH} must be at least {MINLENGTH} characters.']
      },
      zip: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
      },
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
    deliveryMethod: {
      type: Array,
      required: [true, '{PATH} is required.'],
      min: [1, '{PATH} must have at least {MINLENGTH} product to purchase.']
    },
    shippingCost: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} required.']
    },
    subTotal: {
      type: mongoose.Decimal128,
      required: [true, '{PATH} is required.'],
      min: [0, '{PATH} must be at least ${MIN}.']
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