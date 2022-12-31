import React from 'react'

const ViewOne = () => {
    return (
        // Body
        <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen'>
            <div className='max-w-screen-xl mx-auto grid  sm:grid-cols-3 lg:grid-cols-4 rounded shadow '>

                {/* -------- Product Image -------- */}
                <div className='bg-white col-span-1 sm:col-span-2 lg:col-span-3 items-center p-4 min-h-full'>
                    <img src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002905-turquoise.jpg?w=1000&auto=format&q=70&fit=max" className='' alt="bike" />

                {/* ------------- Summary --------------- */}
                </div>
                <div className='bg-white flex flex-col  p-4'>
                    <p className='text-xl my-4' >Brand Bike Name</p>
                    <h2 className='text-2xl font-bold'>Product Name!</h2>
                    <p className='text-xl my-4' >$7,999.99</p>

                    {/* Color Picker */}
                    <form action="/cart">
                        <p className='font-semibold'>Color:</p>
                        <div className='flex'>
                            <input type={"radio"} className='h-10 w-10 accent-cyan-400 m-2'></input>
                            <input type={"radio"} className='h-10 w-10 bg-black m-2'></input>
                        </div>

                        {/*  Size */}
                        <p className='font-semibold'>Size:</p>
                        <div className='flex'>
                            <div className='h-10 w-10  m-2 border-2'></div>
                            <div className='h-10 w-10 m-2'></div>
                        </div>
                        <button className='bg-red-600 hover:bg-slate-500 text-white text-lg font-semibold py-2 px-4 my-4 border w-full'>ADD TO CART</button>
                    </form>
                </div>
                
                {/* ------------ Description -------------- */}
                <div className='bg-white col-span-1 sm:col-span-3 lg:col-span-4 '>
                    <p>Description</p>
                    <h2 className='text-2xl font-semibold'>Product Name!</h2>
                    <h3 className='text-xl'>Product slogan/catch</h3>
                    <p> 
                        Long description of the Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe, exercitationem delectus minima accusamus error repudiandae eius iusto debitis hic non nemo expedita nisi rem perspiciatis, maxime, consequatur mollitia qui.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut enim officia quos doloribus! Dolore quos doloribus ad aperiam corporis eum nulla quia. Possimus architecto ullam consequuntur, alias beatae sunt!</p>
                </div>
            </div>
        </div>
    )
}

export default ViewOne