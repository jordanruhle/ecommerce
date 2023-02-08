import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import GrayButton from '../components/GrayButton'
import RedButton from '../components/RedButton'

const AdminProducts = () => {
  return (
    <>
      <AdminNavBar />
      <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-5'>
        <table className="min-w-full table table-fixed bg-white mt-20 rounded shadow">
          <thead>
            <tr className='bg-slate-300'>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Picture</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Id</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Brand</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Name</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Price</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Category</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Sub-Category</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Inventory</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Quantity Sold</th>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-5 w-10'><img src="https://cdn.shopify.com/s/files/1/0612/4905/products/Cube_Stereo_Hybrid_160_SLT_750_eMTB_Prizm_Silver_Carbon_Profile_on_Fly_Rides_2048x.jpg?v=1673555776" alt="cube carbon fiber enduro bike" /></td>
              <td className='text-xl py-4 px-5 underline text-blue-700 '><a href="/orders/show/34421">34421</a></td>
              <td className='text-xl py-4 px-5'>Cube</td>
              <td className='text-xl py-4 px-5'>Stereo Hybrid 160 SLT</td>
              <td className='text-xl py-4 px-5'>$12,199.00</td>
              <td className='text-xl py-4 px-5'>Bike</td>
              <td className='text-xl py-4 px-5'>Enduro</td>
              <td className='text-xl py-4 px-5'>16</td>
              <td className='text-xl py-4 px-5'>19</td>
              <td className='text-xl py-4 px-5 flex gap-4'>
                <form action="products/edit/34421">
                  <GrayButton buttonText="Edit"/>
                </form>
                <form action="products/delete/34421">
                  <RedButton buttonText="Delete"/>
                </form>
              </td>
            </tr>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-5 w-10'><img src="https://cdn.shopify.com/s/files/1/0612/4905/products/Cube_Stereo_Hybrid_160_SLT_750_eMTB_Prizm_Silver_Carbon_Profile_on_Fly_Rides_2048x.jpg?v=1673555776" alt="cube carbon fiber enduro bike" /></td>
              <td className='text-xl py-4 px-5 underline text-blue-700 '><a href="/orders/show/34421">34421</a></td>
              <td className='text-xl py-4 px-5'>Cube</td>
              <td className='text-xl py-4 px-5'>Stereo Hybrid 160 SLT</td>
              <td className='text-xl py-4 px-5'>$12,199.00</td>
              <td className='text-xl py-4 px-5'>Bike</td>
              <td className='text-xl py-4 px-5'>Enduro</td>
              <td className='text-xl py-4 px-5'>16</td>
              <td className='text-xl py-4 px-5'>19</td>
              <td className='text-xl py-4 px-5 flex gap-4'>
                <form action="products/edit/34421">
                  <GrayButton buttonText="Edit"/>
                </form>
                <form action="products/delete/34421">
                  <RedButton buttonText="Delete"/>
                </form>
              </td>
            </tr>
            <tr className='border-b hover:bg-neutral-50'>
              <td className='text-xl py-4 px-5 w-10'><img src="https://cdn.shopify.com/s/files/1/0612/4905/products/Cube_Stereo_Hybrid_160_SLT_750_eMTB_Prizm_Silver_Carbon_Profile_on_Fly_Rides_2048x.jpg?v=1673555776" alt="cube carbon fiber enduro bike" /></td>
              <td className='text-xl py-4 px-5 underline text-blue-700 '><a href="/orders/show/34421">34421</a></td>
              <td className='text-xl py-4 px-5'>Cube</td>
              <td className='text-xl py-4 px-5'>Stereo Hybrid 160 SLT</td>
              <td className='text-xl py-4 px-5'>$12,199.00</td>
              <td className='text-xl py-4 px-5'>Bike</td>
              <td className='text-xl py-4 px-5'>Enduro</td>
              <td className='text-xl py-4 px-5'>16</td>
              <td className='text-xl py-4 px-5'>19</td>
              <td className='text-xl py-4 px-5 flex gap-4'>
                <form action="products/edit/34421">
                  <GrayButton buttonText="Edit"/>
                </form>
                <form action="products/delete/34421">
                  <RedButton buttonText="Delete"/>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminProducts