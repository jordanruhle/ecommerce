import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import ProductForm from '../components/ProductForm'

const ProductCreateOne = () => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen'>
        <AdminNavBar />
        <ProductForm title="Edit Existing Product" subTitle="Update product info" buttonText="Update Product"/>
    </div>
  )
}

export default ProductCreateOne