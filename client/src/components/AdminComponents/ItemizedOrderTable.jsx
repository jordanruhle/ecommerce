import React from 'react'

const ItemizedOrderTable = ({ order }) => {
  const tableHeadings = ['Id', 'Name', 'Price', 'Color', 'Size', 'Quantity', 'Total']

  return (
    <div className=' col-span-1 md:col-span-2 lg:col-span-3'>
      <table className="min-w-full table table-fixed bg-white rounded shadow">
        <thead>
          <tr className='bg-slate-300'>
            {tableHeadings.map((headings) =>
              <th className='md:text-sm lg:font-normal lg:text-xl font-semibold py-4 px-5 uppercase text-left '>{headings}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            order.products.map((product, i) => {
              return (
                <tr className='border-b hover:bg-neutral-50' key={i}>
                  <td className='md:text-sm xl:text-xl py-4 px-5 text-clip'>{product.product_id}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{product.name}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{Number(product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{product.color}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{product.size}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{product.quantity}</td>
                  <td className='md:text-sm xl:text-xl py-4 px-5'>{Number(product.total).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default ItemizedOrderTable