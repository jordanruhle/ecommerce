import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = (props) => {



    return (
        // Body
        <div className='bg-gradient-to-br from-slate-50 to-stone-300'>
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-8 '>
                <div className='bg-white flex flex-col items-center rounded shadow p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/digizuite/24639-en-bi003581-charcoal.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                </div>
                <div className='bg-white flex flex-col items-center rounded shadow p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/digizuite/26185-en-bi003591-satin-smoke~arctic-blue.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                </div>
                <div className='bg-white flex flex-col items-center rounded shadow p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/digizuite/12295-en-bi002184-green~black~orange.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                </div>
                <div className='bg-white flex flex-col items-center rounded shadow p-4'>
                    <img src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002772-turquoise.jpg?w=1000&auto=format&q=70&fit=max" alt="bike" />
                    <p className='text-center my-4' >Brand Bike Name</p>
                    <p className='text-center my-4' >$7,999.99</p>
                    <Link className='w-full' to={'/product'}>
                        <button className='bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-4 border border-gray-400 w-full'>View</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductGrid