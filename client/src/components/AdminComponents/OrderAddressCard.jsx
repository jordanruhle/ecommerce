import React from 'react'

const OrderAddressCard = ({ order }) => {
  const { billing, shipping } = order
  return (
    <div action="/checkout" className='bg-white flex flex-col row-span-2  p-4'>

      {/* ----------- Order Summary --------------- */}
      <h2 className='text-2xl my-4' >Order Number: {order.id}</h2>


      {/* ----------- name -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Name: </p>
        <p className='text-lg my-4' >{shipping.firstName}</p>
      </div>

    </div>
  )
}

export default OrderAddressCard