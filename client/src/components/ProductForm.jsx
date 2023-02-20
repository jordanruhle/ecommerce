import React, { useState } from 'react'
import RedButton from './RedButton'


const ProductForm = ({ title, subTitle, buttonText, submitFunction, productInfo, setProductInfo }) => {

    const formChangeHandler = (e) => {
        // Let's use an arrow function to access previousState in setProductInfo
        // Instead of spreading productInfp
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
        console.log(productInfo)
    }

    const fileChangeHandler = (e) => {
        // Let's use an arrow function to access previousState in setProductInfo
        // Instead of spreading productInfp
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.files[0]
        })
    }

    const subcategoryFilter = (category) => {
        if (category === "bikes") {
            return (
                <select onChange={(e) => { formChangeHandler(e) }} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                    <option value="trail">Trail</option>
                    <option value="allmountain">All Mountain</option>
                    <option value="enduro">Enduro</option>
                    <option value="downhill">Downhill</option>
                </select>
            )
        }
        if (category === "components") {
            return (
                <select onChange={(e) => { formChangeHandler(e) }} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                    <option value="drivetrain">Drivetrain</option>
                    <option value="suspension">Suspension</option>
                    <option value="brakes">Brakes</option>
                    <option value="tires">Tires</option>
                    <option value="wheels">Wheels</option>
                </select>
            )
        }
        if (category === "accessories") {
            return (
                <select onChange={(e) => { formChangeHandler(e) }} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                    <option value="bags">Bags</option>
                    <option value="tools">Tools</option>
                    <option value="hydration">Hydration</option>
                </select>
            )
        }
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
                    {/* Can we reduce code in the onChange handler for these inputs? */}
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="name" value={productInfo.name} className=' w-full p-3 border' />
                </div>

                {/*---------- Brand ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Brand</p>
                    {/* Can we reduce code in the onChange handler for these inputs? */}
                    <input onChange={(e) => { formChangeHandler(e) }} type="text" name="brand" value={productInfo.brand} className=' w-full p-3 border' />
                </div>

                {/*---------- Description ---------- */}
                <div className=' mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Description</p>
                    <textarea onChange={(e) => { formChangeHandler(e) }} type="textarea" name="description" value={productInfo.description} className='h-36 w-full text-start p-3 border ' />
                </div>

                {/*---------- Main Category ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Main Category</p>
                        <select onChange={(e) => { formChangeHandler(e) }} name="mainCategory" value={productInfo.mainCategory} className=' w-full p-3 border' >
                            <option value="bikes">Bikes</option>
                            <option value="components">Components</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    {/*---------- Sub Category ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Sub Category</p>
                        {/* Let's make this a component to remove all the extra logic up top */}
                        {/* <SubCategoryFilters category={productInfo.mainCategory}/> */}
                        {subcategoryFilter(productInfo.mainCategory)}
                    </div>
                </div>

                {/*---------- Price ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Price</p>
                        <input onChange={(e) => { formChangeHandler(e) }} type="text" pattern="[0-9]+([.][0-9]{2})?" placeholder='0.00' name="price" value={productInfo.price} className='w-full p-3 border' />
                    </div>

                    {/*---------- Quantity ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Quantity</p>
                        <input onChange={(e) => { formChangeHandler(e) }} type="number" name="quantity" value={productInfo.quantity} className=' w-full p-3 border' />
                    </div>
                </div>

                {/*---------- Image ---------- */}
                <div className='mb-6'>
                    <p className='text-md font-semibold mb-2 uppercase'>Image</p>
                    <input onChange={(e) => { fileChangeHandler(e) }} type="file" name="image" className=' w-full p-3 border' />
                </div>

                {/*---------- Color ---------- */}
                <div className="md:flex">
                    <div className='mb-6 mr-8 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase'>Color</p>
                        <input onChange={(e) => { formChangeHandler(e) }} type="color" name="color" value={productInfo.color} className=' w-full p-3 border' />
                    </div>

                    {/*---------- Size ---------- */}
                    <div className='mb-6 w-full'>
                        <p className='text-md font-semibold mb-2 uppercase' >Size</p>
                        <select onChange={(e) => { formChangeHandler(e) }} name="size" value={productInfo.size} className=' w-full p-3 border' >
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