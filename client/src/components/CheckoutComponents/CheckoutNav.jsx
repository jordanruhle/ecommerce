import React from 'react'
import { FaMountain } from 'react-icons/fa'

const CheckoutNav = (props) => {
    return (
        <div className='w-full flex justify-center items-center py-2 px-8 2xl:px-72 text-white bg-stone-800 font-body flex-wrap'>

            {/*----------- Company Logo ------------ */}
            <h1 className='text-2xl font-bold bg-white rounded-full border-slate-300 border-8 px-2 text-stone-800 min-w-max' > Mountain <FaMountain className='mb-1' style={{ display: "inline-block" }} /> Bikes</h1>
        </div>
    )
}

export default CheckoutNav