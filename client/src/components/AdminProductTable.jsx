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

  const tableHeadings = ['Picture', 'Id', 'Name', 'Brand', 'Price', 'Category', 'Sub-Category', 'Action']

  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-4'>
      <div className='max-w-screen-xl mx-auto '>

        <div className='flex items-center justify-between pb-4'>
          <form action="" className='p-0'>
            <input type="search" name="" id="" className='p-2 border' />
            <button className='p-2'><FaSearch className='fa-7x' /></button>
          </form>
          <form action='/products/create' className='p-0 w-48'>
            <GrayButton buttonText="Add New Product" />
          </form>
        </div>

        
        <table className="min-w-full table table-fixed bg-white rounded shadow">
          <thead>
            <tr className='bg-slate-300'>
              {tableHeadings.map((headings) =>
                <th className='text-lg font-normal py-4 px-5 uppercase text-left '>{headings}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map((product, i) => {
                // console.log(product.image.filename);
                const imagePath = `../../../server/uploads/${product.image.filename}`;

                return (
                  <tr className='border-b hover:bg-neutral-50' key={i}>
                    <td className='text-base py-4 px-5 w-10'>
                      <img src={imagePath} alt={product.name} />
                    </td>
                    <td className='text-base py-4 px-5 underline text-blue-700 '>
                      <a href={'/orders/show/' + product._id}>{product._id}</a>
                    </td>
                    <td className='text-base py-4 px-5'>{product.name}</td>
                    <td className='text-base py-4 px-5'>{product.brand}</td>
                    <td className='text-base py-4 px-5'>{product.price.$numberDecimal}</td>
                    <td className='text-base py-4 px-5'>{product.mainCategory}</td>
                    <td className='text-base py-4 px-5'>{product.subCategory}</td>
                    {/* <td className='text-base py-4 px-5'>{product.quantity}</td>
                    <td className='text-base py-4 px-5'>{product.quantitySold}</td> */}
                    <td className='text-base py-4 px-5 flex gap-4'>
                      <form action={`/products/${product._id}/edit`}>
                        <GrayButton buttonText="Edit" />
                      </form>
                      <form onClick={(e) => { deleteProduct(product._id) }}>
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
    </div>
  )
}

export default AdminProductTable