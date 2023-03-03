import React from 'react'

const OrderBillingAddressCard = ({ order }) => {
  const { billing, shipping } = order
  return (
    <div className='bg-white rounded shadow p-4 col-span-1 flex flex-col'>

      {/* ----------- Billing Info --------------- */}
      <p className='text-xl mb-2 uppercase font-semibold'>Billing Info:</p>

      {/* ----------- Name -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Name: </p>
        <p className='text-lg my-1' >{billing.firstName} {billing.lastName}</p>
      </div>
      {/* ----------- Company -------------- */}
      {
        billing.company ?
          <div className='flex justify-between'>
            <p className='text-lg my-1'>Company: </p>
            <p className='text-lg my-1' >{billing.company}</p>
          </div>
          : null
      }
      {/* ----------- Address 1 -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Address: </p>
        <p className='text-lg my-1' >{billing.address}</p>
      </div>
      {/* ----------- Address 2 -------------- */}
      {
        billing.address2 ?
          <div className='flex justify-between'>
            <p className='text-lg my-1'>Address 2: </p>
            <p className='text-lg my-1' >{billing.address2}</p>
          </div>
          : null
      }
      {/* ----------- City -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>City: </p>
        <p className='text-lg my-1' >{billing.city}</p>
      </div>
      {/* ----------- State -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>State: </p>
        <p className='text-lg my-1' >{billing.state}</p>
      </div>
      {/* ----------- Zip -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Zip Code: </p>
        <p className='text-lg my-1' >{billing.zip}</p>
      </div>
      {/* ----------- Email -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Email: </p>
        <p className='text-lg my-1' >{billing.email}</p>
      </div>
      {/* ----------- Phone -------------- */}
      <div className='flex justify-between'>
        <p className='text-lg my-1'>Phone Number: </p>
        <p className='text-lg my-1' >{billing.phone}</p>
      </div>
    </div>
  )
}

export default OrderBillingAddressCard