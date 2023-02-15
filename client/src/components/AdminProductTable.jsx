import React from 'react'
import GrayButton from '../components/GrayButton'
import RedButton from '../components/RedButton'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const AdminProductTable = ({ allProducts, removeFromDom }) => {

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        removeFromDom(id)
      })
      .catch(err => console.error(err));
  }


  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-5'>
      <div className='flex items-center justify-between'>
        <form action="">
          <input type="search" name="" id="" className=' p-3 border' />
          <button className='p-5'><FaSearch className='fa-7x' /></button>
        </form>
        <form action='/products/create' className='w-48'>
          <GrayButton buttonText="Add New Product" />
        </form>
      </div>
      <table className="min-w-full table table-fixed bg-white rounded shadow">
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
          {
            allProducts.map((product, i) => {
              console.log(product.image.filename);
              const imagePath = `../../../server/uploads/${product.image.filename}`;
              
              return (
                <tr className='border-b hover:bg-neutral-50' key={i}>
                  <td className='text-xl py-4 px-5 w-10'>
                    <img src={imagePath} alt="product image" />
                  </td>
                  <td className='text-xl py-4 px-5 underline text-blue-700 '>
                    <a href={'/orders/show/' + product._id}>{product._id}</a>
                  </td>
                  <td className='text-xl py-4 px-5'>{product.name}</td>
                  <td className='text-xl py-4 px-5'>{product.brand}</td>
                  <td className='text-xl py-4 px-5'>{product.price.$numberDecimal}</td>
                  <td className='text-xl py-4 px-5'>{product.mainCategory}</td>
                  <td className='text-xl py-4 px-5'>{product.subCategory}</td>
                  <td className='text-xl py-4 px-5'>{product.quantity}</td>
                  <td className='text-xl py-4 px-5'>19</td>
                  <td className='text-xl py-4 px-5 flex gap-4'>
                    <form action={`/products/${product._id}/edit`}>
                      <GrayButton buttonText="Edit" />
                    </form>
                    <form onClick={ (e) => {deleteProduct(product._id)}}>
                      <RedButton buttonText="Delete" />
                    </form>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminProductTable