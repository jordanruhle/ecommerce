import React from 'react'

const OrderShippingAddressCard = ({ order }) => {
  const { billing, shipping } = order
  return (
    <div className='bg-white rounded shadow p-4 col-span-1 flex flex-col'>

      {/* ----------- Shipping Info --------------- */}
      <p className='text-xl mb-2 uppercase font-semibold'>Shipping Info:</p>

      {/* ----------- Name -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Name: </p>
        <p className='text-lg my-1' >{shipping.firstName} {shipping.lastName}</p>
      </div>
      {/* ----------- Company -------------- */}
      {
        shipping.company ?
          <div className='flex justify-between'>
            <p className='text-lg my-1'>Company: </p>
            <p className='text-lg my-1' >{shipping.company}</p>
          </div>
          : null
      }
      {/* ----------- Address 1 -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Address: </p>
        <p className='text-lg my-1' >{shipping.address}</p>
      </div>
      {/* ----------- Address 2 -------------- */}
      {
        shipping.address2 ?
          <div className='flex justify-between'>
            <p className='text-lg my-1'>Address 2: </p>
            <p className='text-lg my-1' >{shipping.address2}</p>
          </div>
          : null
      }
      {/* ----------- City -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>City: </p>
        <p className='text-lg my-1' >{shipping.city}</p>
      </div>
      {/* ----------- State -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>State: </p>
        <p className='text-lg my-1' >{shipping.state}</p>
      </div>
      {/* ----------- Zip -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Zip Code: </p>
        <p className='text-lg my-1' >{shipping.zip}</p>
      </div>
    </div>
  )
}

export default OrderShippingAddressCard