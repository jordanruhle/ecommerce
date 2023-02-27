import React from 'react'
import { FaMountain } from 'react-icons/fa'
import CompanyLogo from './CompanyLogo'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdminNavBar = () => {
  return (
    <div className='w-full flex justify-center sm:justify-between items-center py-2 px-8 2xl:px-72 text-white bg-stone-800 font-body flex-wrap'>

      {/*----------- Company Logo ------------ */}
      <CompanyLogo linkRoute='/dashboard/orders'/>

      {/* ------------- Links ----------------- */}

      <ul className='flex items-center '>

        {/* -------------- Orders Link --------------- */}

        <li className='p-4 text-white'>
          <a href="/dashboard/orders">Orders</a>
        </li>

        {/* ----------- Products Link -------------- */}

        <li className='p-4 text-white'>
          <a href="/dashboard/products">Products</a>
        </li>

        {/* ------------- Logout Link ------------- */}

        <li className='p-4 text-white'>
          <a href="/admins/logout">Logout</a>
        </li>

      </ul>
    </div >
  )
}

export default AdminNavBar