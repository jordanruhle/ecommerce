import React from 'react'

const ItemizedOrderTable = ({ order }) => {
  const tableHeadings = ['Id', 'Name', 'Price', 'Color', 'Size', 'Quantity', 'Total']

  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-5'>
      <table className="min-w-full table table-fixed bg-white rounded shadow">
        <thead>
          <tr className='bg-slate-300'>
            {tableHeadings.map((headings) =>
              <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>{headings}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            order.products.map((product, i) => {
              return (
                <tr className='border-b hover:bg-neutral-50' key={i}>
                  <td className='text-xl py-4 px-5'>{product.product_id}</td>
                  <td className='text-xl py-4 px-5'>{product.name}</td>
                  <td className='text-xl py-4 px-5'>{product.price}</td>
                  <td className='text-xl py-4 px-5'>{product.color}</td>
                  <td className='text-xl py-4 px-5'>{product.size}</td>
                  <td className='text-xl py-4 px-5'>{product.quantity}</td>
                  <td className='text-xl py-4 px-5'>{product.total}</td>
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