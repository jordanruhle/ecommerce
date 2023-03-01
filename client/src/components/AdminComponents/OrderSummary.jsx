import React from 'react'

const OrderSummary = ({ order }) => {
  return (
    <div className='bg-white flex flex-col row-span-2  p-4'>
      {/* ----------- Order Summary Info --------------- */}

      {/* ----------- Sub Total -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Sub Total: </p>
        <p className='text-lg my-4' >{order.subTotal.$numberDecimal}</p>
      </div>
      {/* ----------- Shipping Cost -------------- */}

      <div className='flex justify-between'>
        <p className='text-lg my-4'>Shipping: </p>
        <p className='text-lg my-4' >{order.shippingCost.$numberDecimal}</p>
      </div>

      {/* ----------- Tax -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Tax: </p>
        <p className='text-lg my-4' >{order.taxes.$numberDecimal}</p>
      </div>
      {/* ----------- Total -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Total: </p>
        <p className='text-lg my-4' >{order.total.$numberDecimal}</p>
      </div>
    </div>
  )
}

export default OrderSummary