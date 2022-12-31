import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductGrid = (props) => {

    // useEffect(async() => {

        
    //     const pageUrl = new URL('https://api.99spokes.com/v1/bikes');
    //     pageUrl.searchParams.set('year', 2021);
    //     pageUrl.searchParams.set('subcategory', 'trail');
    //     // pageUrl.searchParams.set('limit', 100);
    //     // pageUrl.searchParams.set('include', '*');
        
    //     let cursor = 'start';
        

        // Create .env file set auth key var in file and gitignore .env folder
    //     while (cursor) {
    //         pageUrl.searchParams.set('cursor', cursor);
            
    //         const response = await fetch(pageUrl.href, {
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6ImpvcmRhbnJ1aGxlIiwidmVyc2lvbiI6MSwiaWF0IjoxNjY4NzM0OTQ2fQ.SgSg3jjm7VTGXKDqcikEckeU0_AwX2dVNNlR2KSOZ10"}`,
    //             },
    //         });
            
    //         if (!response.ok) {
    //             throw new Error(`Error ${response.status}`);
    //         }
            
    //         const page = await response.json();
            
    //         // updating the paging cursor
    //         cursor = page.nextCursor;
            
    //         for (const bike of page.items) {
    //             console.log(bike.id);
    //         }
    //     }
    // }, [])



    return (
        // Body
        <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen'>
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