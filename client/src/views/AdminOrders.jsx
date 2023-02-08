import React from 'react'
import AdminNavBar from '../components/AdminNavBar'

const AdminOrders = () => {
  return (
    <div>
      <AdminNavBar />
      <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-5'>
        <table className="min-w-full table-auto bg-white mt-20 rounded shadow">
          <thead>
            <tr className='bg-slate-300'>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Order ID</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Name</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Date</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Email</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Billing Address</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Total</th>
              <th className='text-2xl font-normal py-4 px-4 uppercase text-left '>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-4 underline text-blue-700 '><a href="/orders/show/34421">34421</a></td>
              <td className='text-xl py-4 px-4'>Ben</td>
              <td className='text-xl py-4 px-4'>02/05/23</td>
              <td className='text-xl py-4 px-4'>Ben@mail.com</td>
              <td className='text-xl py-4 px-4'>14424 SE 78th Way Newcastle, WA 98059</td>
              <td className='text-xl py-4 px-4'>$2,769.44</td>
              <td className='text-xl py-4 px-4'>Delivered</td>
            </tr>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-4'>34421</td>
              <td className='text-xl py-4 px-4'>Ben</td>
              <td className='text-xl py-4 px-4'>02/05/23</td>
              <td className='text-xl py-4 px-4'>Ben@mail.com</td>
              <td className='text-xl py-4 px-4'>14424 SE 78th Way Newcastle, WA 98059</td>
              <td className='text-xl py-4 px-4'>$2,769.44</td>
              <td className='text-xl py-4 px-4'>Delivered</td>
            </tr>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-4'>34421</td>
              <td className='text-xl py-4 px-4'>Ben</td>
              <td className='text-xl py-4 px-4'>02/05/23</td>
              <td className='text-xl py-4 px-4'>Ben@mail.com</td>
              <td className='text-xl py-4 px-4'>14424 SE 78th Way Newcastle, WA 98059</td>
              <td className='text-xl py-4 px-4'>$2,769.44</td>
              <td className='text-xl py-4 px-4'>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AdminOrders