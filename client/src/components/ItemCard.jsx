import React from 'react'

const ItemCard = (props) => {
  return (
    <div className="flex justify-between h-60 gap-2 col-span-1 sm:col-span-2 lg:col-span-3 items-center p-4">
    <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" className=' h-60' />
    <div>
        <p>Yeti Cycles SB150 Turq T1 XT Mountain Bike</p>
        <p>Turquoise</p>
        <p>XL</p>
    </div>
    <div>
        <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none">
                <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
        <a href="/">Remove</a>
        <p className='text-lg my-4 font-bold'>$6,800</p>
    </div>
</div>
  )
}

export default ItemCard