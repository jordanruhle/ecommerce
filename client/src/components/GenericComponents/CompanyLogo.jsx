import React from 'react'
import { FaMountain } from 'react-icons/fa'

const CompanyLogo = ({linkRoute}) => {
  return (
    <a href={linkRoute} className='text-2xl font-bold bg-white rounded-full border-slate-300 border-8 px-2 text-stone-800 min-w-max' > Mountain <FaMountain className='mb-1' style={{display:"inline-block"}} /> Bikes</a>
  )
}

export default CompanyLogo