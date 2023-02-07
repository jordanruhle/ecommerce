import React from 'react'
import PropTypes from 'prop-types'

const ShippingAddressForm = (props) => {
    const formChangeHandler = props.formChangeHandler
    
    return (
        <div>
            <p>Enter new shipping address below:</p>

            {/*---------- Shipping First Name ---------- */}
            <div className=' my-6'>
                <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Frist Name*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingFirstName" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Last Name ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Last Name*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingLastName" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Company ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Company</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingCompany" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Address ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingAddress" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Address Line 2 ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address Line 2 (Optional)</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingAddress2" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping City ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>City*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingCity" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Zip/Postal Code ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Zip/Postal Code*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingZip" className=' w-full p-3 border' />
            </div>
            {/*---------- Shipping Phone ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Phone*</p>
                <input onChange={(e) => { formChangeHandler(e) }} type="text" name="shippingPhone" className=' w-full p-3 border' />
            </div>
        </div>
    )
}

ShippingAddressForm.propTypes = {}

export default ShippingAddressForm