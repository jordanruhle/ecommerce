import React from 'react'

const SameAddressCheckbox = ({ boolCheckboxHandler, orderInfo }) => {
    return (
        <>
            <h3 className='text-2xl my-4 uppercase'>Shipping Address </h3>
            {/* True */}
            <div className='mb-2'>
                <input onChange={boolCheckboxHandler} type="checkbox" name="sameAddress" htmlFor="shippingSameAsBilling" value="true" checked={orderInfo.billing.sameAddress === true} /> <p className='inline'>Ship to My Billing Address</p>
            </div>
            {/* False */}
            <div className='mb-2'>
                <input onChange={boolCheckboxHandler} type="checkbox" name="sameAddress" htmlFor="shippingDifferentThenBilling" value="false" checked={orderInfo.billing.sameAddress === false} /> <p className='inline'>Ship to Different Address</p>
            </div>
        </>
    )
}

export default SameAddressCheckbox