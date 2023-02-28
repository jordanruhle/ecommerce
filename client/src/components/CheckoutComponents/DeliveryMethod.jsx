import React, { useState, useEffect } from "react"


export const DeliveryMethod = ({ cart, deliveryMethodHandler }) => {
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let cartTotal = 0;
        for (let product of cart) {
            cartTotal += product['quantity'] * product['price'];
        }
        setSubTotal(cartTotal);
    }, [cart]);

    return (
        <>
            <h3 className='text-2xl my-4 uppercase'>Pick a Shipping Option</h3>
            <div className="max-w-sm">
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={deliveryMethodHandler} type="radio" name="deliveryMethod" value="economy" /> <p htmlFor="economy"  className='inline'>Economy (7-10 Business days)</p>
                    </div>
                    <p>
                        {
                            subTotal > 2000 ?
                                "FREE"
                                : Number(subTotal * 0.013).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                        }
                    </p>
                </div>
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={deliveryMethodHandler} type="radio" name="deliveryMethod" value="standard" defaultChecked /> <p htmlFor="standard" className='inline'>Standard (3-5 Business days)</p>
                    </div>
                    <p>
                        {
                            subTotal > 2000 ?
                                "FREE"
                                : Number(subTotal * 0.017).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                        }
                    </p>
                </div>
                <div className='flex justify-between mb-2'>
                    <div>
                        <input onChange={deliveryMethodHandler} type="radio" name="deliveryMethod" value="twoDay" /> <p  htmlFor="twoDay" className='inline'>Two Business Days</p>
                    </div>
                    <p>
                        {Number(subTotal * 0.024).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </p>
                </div>
            </div>
        </>
    )
}
