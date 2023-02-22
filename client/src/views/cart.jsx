import React from 'react'
import ItemCard from '../components/ItemCard';
import Navbar from '../components/navbar';
import OrderSummary from '../components/ordersummary';


export const Cart = ({ cart, setCart }) => {

    const updateProduct = (product) => {
        // ...allows you to change the quantity of a product in the cart to anything greater than zero
        // take in a quantity and product Id and setCart with them
        // happen on submit of the cart form aka clicking checkout button
    }
    const removeProduct = (product) => {
        // ...delete items out of the cart. 
        //  takes in product Id
    }

    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto grid  sm:grid-cols-3  gap-x-14 grid-flow-row-dense ">
                {/* ------------ Shopping Cart ------------- */}
                {cart.map((product, i) => (
                    // console.log(product.product_id)
                    <ItemCard key={i} quantity={product.quantity} id={product.product_id} cart={cart} setCart={setCart} removeProduct={removeProduct} updateProduct={updateProduct} />
                ))}

                {/* ------------ Order Summary ------------- */}
                    <OrderSummary />
            </div>
        </>
    )
}

export default Cart;