import React from 'react'
import ItemCard from '../components/ItemCard';
import Navbar from '../components/navbar';
import OrderSummary from '../components/ordersummary';


export const Cart = ({ cart, setCart }) => {

    const decrementProductQuantity = (e, id) => {
        e.preventDefault()
        const productIndex = cart.findIndex(item => item.product_id === id)
        if(cart[productIndex].quantity >1){
            const updatedCart = [...cart]
            updatedCart[productIndex].quantity--
            setCart(updatedCart)
        }
    }

    const incrementProductQuantity = (e, id) => {
        e.preventDefault()
        const productIndex = cart.findIndex(item => item.product_id === id)
        const updatedCart = [...cart]
        updatedCart[productIndex].quantity++
        setCart(updatedCart)
    }


    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3  gap-x-14 grid-flow-row-dense ">
                {/* ------------ Shopping Cart ------------- */}
                {cart.map((product, i) => (
                    // console.log(product.product_id)
                    <ItemCard key={i} quantity={product.quantity} id={product.product_id} cart={cart} setCart={setCart} decrementProductQuantity={decrementProductQuantity} incrementProductQuantity={incrementProductQuantity}/>
                ))}

                {/* ------------ Order Summary ------------- */}
                    <OrderSummary cart={cart}/>
            </div>
        </>
    )
}

export default Cart;