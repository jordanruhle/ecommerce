import React from 'react'


const ShippingAddressForm = ({CheckoutChangeHandler}) => {
    return (
        <div>
            <p>Enter new shipping address below:</p>

            {/*---------- Shipping First Name ---------- */}
            <div className=' my-6'>
                <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Frist Name*</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingFirstName" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Last Name ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Last Name*</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingLastName" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Company ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Company</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingCompany" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Address ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address*</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingAddress" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Address Line 2 ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address Line 2 (Optional)</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingAddress2" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping City ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>City*</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingCity" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Zip/Postal Code ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Zip/Postal Code*</p>
                <input onChange={ CheckoutChangeHandler } type="text" name="shippingZip" className=' w-full p-3 border' />
            </div>
        </div>
    )
}

ShippingAddressForm.propTypes = {}

export default ShippingAddressForm