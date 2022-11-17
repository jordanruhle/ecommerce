import React from 'react'

const ViewOne = () => {
    return (
        // Body
        <div className='bg-gradient-to-br from-slate-50 to-stone-300'>
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded shadow p-8 '>

                {/* -------- Product Image -------- */}
                <div className='bg-white flex flex-col col-span-2 lg:col-span-3 items-center p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002905-turquoise.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />

                {/* Summary */}
                </div>
                <div className='bg-white flex flex-col  p-4'>
                    <p className='text-xl my-4' >Brand Bike Name</p>
                    <h2 className='text-2xl font-bold'>Product Name!</h2>
                    <p className='text-xl my-4' >$7,999.99</p>

                    {/* Color Picker */}
                    <p className='font-semibold'>Color:</p>
                    <div className='flex'>
                        <div className='h-10 w-10 bg-cyan-400 m-2'></div>
                        <div className='h-10 w-10 bg-black m-2'></div>
                    </div>

                    {/*  Size */}
                    <p className='font-semibold'>Color:</p>
                    <div className='flex'>
                        <div className='h-10 w-10  m-2 border-2'></div>
                        <div className='h-10 w-10 m-2'></div>
                    </div>
                    <button className='bg-red-600 hover:bg-gray-100 text-white text-lg font-semibold py-2 px-4 my-4 border w-full'>ADD TO CART</button>
                </div>
                <div className='bg-white flex flex-col items-center p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/digizuite/12295-en-bi002184-green~black~orange.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                </div>
                <div className='bg-white flex flex-col items-center p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002772-turquoise.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                </div>
            </div>
        </div>
    )
}

export default ViewOne