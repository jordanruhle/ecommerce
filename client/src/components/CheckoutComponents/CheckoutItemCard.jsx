import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CheckoutItemCard = ({id}) => {
  const [loaded, setLoaded] = useState(false);
  const [productInfo, setProductInfo] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        let {product} = res.data
        setProductInfo((previousState) => ({
            ...previousState,
            name: product.name,
            brand: product.brand,
            description: product.description,
            mainCategory: product.mainCategory,
            subCategory: product.subCategory,
            price: product.price.$numberDecimal,
            quantity: product.quantity,
            quantitySold: product.quantitySold,
            color: product.color,
            size: product.size,
        }));
        setLoaded(true);
    })
    .catch(err => console.log(err));
}, []);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 flex gap-8 h-24">
        <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" />
        <div>
          <p className='uppercase font-semibold'>{productInfo.brand} {productInfo.name}</p>
          <p>Turquoise</p>
          <p>{productInfo.size}</p>
        </div>
      </div>
      <div className='col-span-2 flex justify-between'>
        <p>${productInfo.price}</p>
        {/* needs to be cart.quantity */}
        <p>1</p>
        {/* eventually needs to be product.price * cart.quantity */}
        <p>$6,800</p>
      </div>
    </div>
  )
}

export default CheckoutItemCard