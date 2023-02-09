import React, { useState } from 'react'
import RedButton from './RedButton'

const ProductForm = () => {

    const [productInfo, setProductInfo] = useState({
        name: "",
        brand: "",
        description: "",
        mainCategory: "",
        subCategory: "",
        price: 0.00,
        quantity: 0,
        images: "",
        color: "",
        size: ""
    })

    const formChangeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
        console.log(productInfo)
    }

    return (
        <div className='max-w-screen-md mx-auto '>
            <form className='bg-white p-10 ' action="">
                {/*----------- Product Form ------------ */}
                <h3 className='text-2xl my-4 uppercase'>New Product Form</h3>
                <p className=' mb-4 text-zinc-500'>Create a new product.</p>

                {/*---------- Name ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Name</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="name" className=' w-full p-3 border' />
                </div>

                {/*---------- Brand ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Brand</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="Brand" className=' w-full p-3 border' />
                </div>

                {/*---------- Description ---------- */}
                <div className=' mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Description</p>
                    <textarea onChange={(e) => { formChangeHandler(e) }} type="textarea" name="description" className='h-36 w-full text-start p-3 border ' />
                </div>

                {/*---------- Main Category ---------- */}
                <div className="flex">
                <div className='mb-6 mr-8 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Main Category</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="Brand" className=' w-full p-3 border' />
                </div>
                
                {/*---------- Sub Category ---------- */}
                <div className='mb-6 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Sub Category</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="subCategory" className=' w-full p-3 border' />
                </div>
                </div>
                
                {/*---------- Price ---------- */}
                <div className="flex">
                <div className='mb-6 mr-8 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Price</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" pattern="[0-9]+([.][0-9]{2})?" placeholder='0.00' name="price" className='w-full p-3 border' />
                </div>
                
                {/*---------- Quantity ---------- */}
                <div className='mb-6 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Quantity</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="number" name="quantity" className=' w-full p-3 border' />
                </div>
                </div>
                
                {/*---------- Image ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Image</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="file" name="image" className=' w-full p-3 border' />
                </div>
                
                {/*---------- Color ---------- */}
                <div className="flex">
                <div className='mb-6 mr-8 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Color</p>
                    <input onChange={(e) => { formChangeHandler(e) }} type="color" name="color" className=' w-full p-3 border' />
                </div>
                
                {/*---------- Size ---------- */}
                <div className='mb-6 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase' >Size</p>
                    <select onChange={(e) => { formChangeHandler(e) }} name="size" className=' w-full p-3 border' >
                        <option value="xsm">X-Small</option>
                        <option value="sm">Small</option>
                        <option value="med">Medium</option>
                        <option value="Lg">Large</option>
                        <option value="XL">X-Large</option>
                        <option value="XXL">2X-Large</option>
                    </select>
                </div>
                   
                </div>
                <RedButton buttonText="Create" />


            </form>
        </div>
    )
}

export default ProductForm