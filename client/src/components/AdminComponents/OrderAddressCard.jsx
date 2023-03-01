import React from 'react'

const OrderAddressCard = ({ order }) => {
  const { billing, shipping } = order
  return (
    <div className='bg-white flex flex-col row-span-2  p-4'>

      {/* ----------- Order Summary --------------- */}
      <h2 className='text-2xl my-4' >Order Number: {order.id}</h2>

      {/* ----------- Shipping Info --------------- */}
      <p className='text-lg my-4'>Shipping Info:</p>

      {/* ----------- Name -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Name: </p>
        <p className='text-lg my-4' >{shipping.firstName} {shipping.lastName}</p>
      </div>
      {/* ----------- Company -------------- */}
      {
        shipping.company ?
          <div className='flex justify-between'>
            <p className='text-lg my-4'>Company: </p>
            <p className='text-lg my-4' >{shipping.company}</p>
          </div>
          : null
      }
      {/* ----------- Address 1 -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Address: </p>
        <p className='text-lg my-4' >{shipping.address}</p>
      </div>
      {/* ----------- Address 2 -------------- */}
      {
        shipping.address2 ?
          <div className='flex justify-between'>
            <p className='text-lg my-4'>Address 2: </p>
            <p className='text-lg my-4' >{shipping.address2}</p>
          </div>
          : null
      }
      {/* ----------- City -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>City: </p>
        <p className='text-lg my-4' >{shipping.city}</p>
      </div>
      {/* ----------- State -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>State: </p>
        <p className='text-lg my-4' >{shipping.state}</p>
      </div>
      {/* ----------- Zip -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Zip Code: </p>
        <p className='text-lg my-4' >{shipping.zip}</p>
      </div>

      {/* ----------- Billing Info --------------- */}
      <p className='text-lg my-4'>Billing Info:</p>

      {/* ----------- Name -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Name: </p>
        <p className='text-lg my-4' >{billing.firstName} {billing.lastName}</p>
      </div>
      {/* ----------- Company -------------- */}
      {
        billing.company ?
          <div className='flex justify-between'>
            <p className='text-lg my-4'>Company: </p>
            <p className='text-lg my-4' >{billing.company}</p>
          </div>
          : null
      }
      {/* ----------- Address 1 -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Address: </p>
        <p className='text-lg my-4' >{billing.address}</p>
      </div>
      {/* ----------- Address 2 -------------- */}
      {
        billing.address2 ?
          <div className='flex justify-between'>
            <p className='text-lg my-4'>Address 2: </p>
            <p className='text-lg my-4' >{billing.address2}</p>
          </div>
          : null
      }
      {/* ----------- City -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>City: </p>
        <p className='text-lg my-4' >{billing.city}</p>
      </div>
      {/* ----------- State -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>State: </p>
        <p className='text-lg my-4' >{billing.state}</p>
      </div>
      {/* ----------- Zip -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Zip Code: </p>
        <p className='text-lg my-4' >{billing.zip}</p>
      </div>
      {/* ----------- Email -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Email: </p>
        <p className='text-lg my-4' >{billing.email}</p>
      </div>
      {/* ----------- Phone -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-4'>Phone Number: </p>
        <p className='text-lg my-4' >{billing.phone}</p>
      </div>
    </div>
  )
}

export default OrderAddressCard