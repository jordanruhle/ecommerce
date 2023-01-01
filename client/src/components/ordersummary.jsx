import React from 'react'
import ItemCard from './ItemCard'
import RedButton from './RedButton'

const OrderSummary = () => {
    return (
        // <form action="/checkout" className='className="max-w-screen-xl mx-auto grid  sm:grid-cols-4 lg:grid-cols-5'>
        //     <ItemCard />
            <div className='bg-white flex flex-col  p-4'>

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
                    <p className='text-lg my-4' >$7,999.99</p>
                </div>

                {/* ----------- Tax -------------- */}
                <div className='flex justify-between'>
                    <p className='text-lg my-4'>Estimated Tax</p>
                    <p className='text-lg my-4' >Calculated at Checkout</p>
                </div>

                {/* ----------- Total -------------- */}
                <div className='flex justify-between'>
                    <p className='text-lg my-4 font-bold'>Total</p>
                    <p className='text-lg my-4 font-bold' >$8,000.00</p>
                </div>
                <RedButton buttonText="Checkout" />

            </div>
        // </form>
    )
}

export default OrderSummary