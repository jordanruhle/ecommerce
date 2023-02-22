import React from 'react'
import ItemCard from '../components/ItemCard';
import Navbar from '../components/navbar';
import OrderSummary from '../components/ordersummary';


export const Cart = ({cart, setCart}) => {


    return (
        <>
            <Navbar />
            <form action="/checkout" className="max-w-screen-xl mx-auto grid  sm:grid-cols-3 lg:grid-cols-4 ">
                {/* ------------ Shopping Cart ------------- */}
                <ItemCard />

                {/* ------------ Order Summary ------------- */}
                <OrderSummary />
            </form>
        </>
    )
}

export default Cart;