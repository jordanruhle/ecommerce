const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        brand: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [10, '{PATH} must be at least {MINLENGTH} characters.'],
            maxLength: [3000, '{PATH} must be at least {MINLENGTH} characters.']
        },
        mainCategory: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        subCategory: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        price: {
            type: mongoose.Decimal128,
            required: [true, '{PATH} is required.'],
            min: [0.01, '{PATH} must be more than $.01']
        },
        quantity: {
            type: Number,
            required: [true, '{PATH} is required.'],
            min: [0, '{PATH} must be 0 or greater.']
        },
        color: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [1, '{PATH} must be at least {MINLENGTH} characters.']
        },
        size: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [1, '{PATH} must be at least {MINLENGTH} characters.']
        },
        image: {}
    },
    { timestamps: true });


const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;