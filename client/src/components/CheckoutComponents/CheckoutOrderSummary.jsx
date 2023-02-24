import React from 'react'
import CheckoutItemCard from './CheckoutItemCard'

const CheckoutOrderSummary = ({cart}) => {
    return (
        <>
            <div className="grid grid-cols-5">
                <p className='col-span-3 uppercase font-semibold'>Item Description</p>
                <div className='col-span-2 flex justify-between'>
                    <p className='uppercase font-semibold'>Each</p>
                    <p className='uppercase font-semibold'>Quantity</p>
                    <p className='uppercase font-semibold'>Total</p>
                </div>
            </div>
            {cart.map((product, i) => (
                // console.log(product.product_id)
                <CheckoutItemCard key={i} id={product.product_id} quantity={product.quantity} />
            ))}
        </>
    )
}

export default CheckoutOrderSummary