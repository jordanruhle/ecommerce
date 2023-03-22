import React from 'react'
import { FaMountain } from 'react-icons/fa'
import CompanyLogo from '../GenericComponents/CompanyLogo'

const CheckoutNav = (props) => {
    return (
        <div className='w-full flex justify-center items-center py-2 px-8 2xl:px-72 text-white bg-stone-800 font-body flex-wrap'>

            {/*----------- Company Logo ------------ */}
            <CompanyLogo linkRoute='/'/>
        </div>
    )
}

export default CheckoutNav