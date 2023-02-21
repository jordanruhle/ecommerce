import React, { useState } from 'react'
import RedButton from './RedButton'
import SubCategoryFilter from './SubCategoryFilter'


const ProductForm = ({ title, subTitle, buttonText, submitFunction, productInfo, setProductInfo }) => {

    const formChangeHandler = (e) => {
        setProductInfo((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }

    const fileChangeHandler = (e) => {
        setProductInfo((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.files[0]
        }))
    }

    return (
        <div className='max-w-screen-md mx-auto '>
            <form className='bg-white p-10' encType="multipart/form-data" onSubmit={submitFunction}>
                {/*----------- Product Form ------------ */}
                <h3 className='text-2xl my-4 uppercase'>{title}</h3>
                <p className=' mb-4 text-zinc-500'>{subTitle}</p>

                {/*---------- Name ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Name</p>
                    <input onChange={ formChangeHandler } type="text" name="name" value={productInfo.name} className=' w-full p-3 border' />
                </div>

                {/*---------- Brand ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Brand</p>
                    <input onChange={ formChangeHandler } type="text" name="brand" value={productInfo.brand} className=' w-full p-3 border' />
                </div>

                {/*---------- Description ---------- */}
                <div className=' mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Description</p>
                    <textarea onChange={ formChangeHandler } type="textarea" name="description" value={productInfo.description} className='h-36 w-full text-start p-3 border ' />
                </div>

                {/*---------- Main Category ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Main Category</p>
                        <select onChange={ formChangeHandler } name="mainCategory" value={productInfo.mainCategory} className=' w-full p-3 border' >
                            <option value="bikes">Bikes</option>
                            <option value="components">Components</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    {/*---------- Sub Category ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Sub Category</p>
                        <SubCategoryFilter formChangeHandler={formChangeHandler} productInfo={productInfo}/>
                    </div>
                </div>

                {/*---------- Price ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Price</p>
                        <input onChange={ formChangeHandler } type="text" pattern="[0-9]+([.][0-9]{2})?" placeholder='0.00' name="price" value={productInfo.price} className='w-full p-3 border' />
                    </div>

                    {/*---------- Quantity ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Quantity</p>
                        <input onChange={ formChangeHandler } type="number" name="quantity" value={productInfo.quantity} className=' w-full p-3 border' />
                    </div>
                </div>

                {/*---------- Image ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Image</p>
                    <input onChange={ fileChangeHandler } type="file" name="image" className=' w-full p-3 border' />
                </div>

                {/*---------- Color ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Color</p>
                        <input onChange={ formChangeHandler } type="color" name="color" value={productInfo.color} className=' w-full p-3 border' />
                    </div>

                    {/*---------- Size ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Size</p>
                        <select onChange={ formChangeHandler } name="size" value={productInfo.size} className=' w-full p-3 border' >
                            <option value="One Size">One Size</option>
                            <option value="XS">X-Small</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">X-Large</option>
                            <option value="XXL">2X-Large</option>
                        </select>
                    </div>
                </div>
                <RedButton buttonText={buttonText} />


            </form>
        </div>
    )
}

export default ProductForm