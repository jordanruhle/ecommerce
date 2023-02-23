import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import RedButton from './RedButton'


const OrderSummary = ({ cart }) => {
    const [subTotal, setSubTotal] = useState(0);
    console.log(cart)
    // console.log(cart[0].quantity)

    useEffect(() => {
        let cartTotal = 0;
        for (let i = 0; i < cart.length; i++) {
            cartTotal += cart[i]['quantity'] * cart[i]['price'];
        }
        setSubTotal(cartTotal)
        console.log(cartTotal)
    }, [cart])

    return (
        <form action="/checkout" className='bg-white flex flex-col row-span-2  p-4'>

            {/* ----------- Order Summary --------------- */}
            <h2 className='text-2xl my-4' >Order Summary</h2>

            {/* ----------- Shipping -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Shipping</p>
                <p className='text-lg my-4' >FREE!</p>
            </div>

            {/* ----------- Subtotal -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Subtotal</p>
                <p className='text-lg my-4' >${subTotal}</p>
            </div>

            {/* ----------- Tax -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Estimated Tax</p>
                <p className='text-lg my-4' >{(subTotal * .08).toFixed(2)}</p>
            </div>

            {/* ----------- Total -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4 font-bold'>Total</p>
                <p className='text-lg my-4 font-bold' >${(subTotal * 1.08).toFixed(2)}</p>
            </div>
            <RedButton buttonText="Checkout" />

        </form>

    )
}

export default OrderSummary