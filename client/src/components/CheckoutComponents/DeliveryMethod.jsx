import React from 'react'

export const DeliveryMethod = ({CheckoutChangeHandler}) => {
    return (
        <>
            <h3 className='text-2xl my-4 uppercase'>Pick a Shipping Option</h3>
            <div className="max-w-sm">
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={CheckoutChangeHandler} type="radio" name="deliveryMethod" htmlFor="economy" value="economy" /> <p className='inline'>Economy</p>
                    </div>
                    <p>
                        $79.99
                    </p>
                </div>
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={CheckoutChangeHandler} type="radio" name="deliveryMethod" htmlFor="standard" value="standard" defaultChecked /> <p className='inline'>Standard</p>
                    </div>
                    <p>
                        $79.99
                    </p>
                </div>
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={CheckoutChangeHandler} type="radio" name="deliveryMethod" htmlFor="twoDay" value="twoDay" /> <p className='inline'>Two Business Days</p>
                    </div>
                    <p>
                        $79.99
                    </p>
                </div>
            </div>
        </>
    )
}
