import React from 'react'

const GrayButton = ({buttonText}) => {
  

  return (
    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 uppercase font-semibold py-2 px-4 border border-gray-400 w-full'>{buttonText}</button>
  )
}



export default GrayButton