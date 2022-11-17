const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,  '{PATH} is required.'],
            minLength:[3, '{PATH} must be at least {MINLENGTH} characters.' ]
        },
        price: {
            type: String,
            required: [true,  '{PATH} is required.'],
            minLength:[3, '{PATH} must be at least {MINLENGTH} characters.' ]
        }
    }, 
    {timestamps: true});
 
const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;