import React from 'react'
import PropTypes from 'prop-types'

const BillingInfo = (props) => {
    const changeHandler = props.changeHandler
    return (
        <div>
            {/*----------- Billing Address ------------ */}
            <h3 className='text-2xl my-4 uppercase'>Billing Address </h3>
            <p className=' mb-4 text-zinc-500'>Enter the billing information associated with your credit card.</p>

            {/*---------- Email ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Email*</p>
                <input onChange={changeHandler} type="email" name="email" className=' w-full p-3 border' />
            </div>
            {/*---------- First Name ---------- */}
            <div className=' mb-6'>
                <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Frist Name*</p>
                <input onChange={changeHandler} type="text" name="firstName" className=' w-full p-3 border' />
            </div>
            {/*---------- Last Name ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Last Name*</p>
                <input onChange={changeHandler} type="text" name="lastName" className=' w-full p-3 border' />
            </div>
            {/*---------- Company ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Company</p>
                <input onChange={changeHandler} type="text" name="company" className=' w-full p-3 border' />
            </div>
            {/*---------- Address ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address*</p>
                <input onChange={changeHandler} type="text" name="address" className=' w-full p-3 border' />
            </div>
            {/*---------- Address Line 2 ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Address Line 2 (Optional)</p>
                <input onChange={changeHandler} type="text" name="address2" className=' w-full p-3 border' />
            </div>
            {/*---------- City ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>City*</p>
                <input onChange={changeHandler} type="text" name="city" className=' w-full p-3 border' />
            </div>
            {/*---------- Zip/Postal Code ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Zip/Postal Code*</p>
                <input onChange={changeHandler} type="text" name="zip" className=' w-full p-3 border' />
            </div>
            {/*---------- Phone ---------- */}
            <div className='mb-6'>
                <p className='text-md font-semibold mb-2 uppercase'>Phone*</p>
                <input onChange={changeHandler} type="text" name="phone" className=' w-full p-3 border' />
            </div>
        </div>
    )
}

BillingInfo.propTypes = {}

export default BillingInfo