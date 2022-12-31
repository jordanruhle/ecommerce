import React from 'react'

const ItemCard = () => {
  return (
    <div className="flex justify-between h-60 col-span-4">
        <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" />
        <div>
            <p>Yeti Cycles SB150 Turq T1 XT Mountain Bike</p>
            <p>Turquoise</p>
            <p>XL</p>
        </div>
        <div>
            <input type="number" placeholder='1' />
            <a href="/">Remove</a>
            <p>$6,800</p>
        </div>
    </div>
  )
}

export default ItemCard