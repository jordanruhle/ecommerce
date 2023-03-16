import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ItemCard = ({ id, decrementProductQuantity, incrementProductQuantity, quantity, removeItem}) => {
    const [productInfo, setProductInfo] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/api/product/view/${id}`)
            if (res.data.product) {
                console.log(res.data.product);
                let { product } = res.data
                await setProductInfo((previousState) => ({
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
                    colorName: product.colorName,
                    size: product.size,
                }));
                    setLoaded(true) 
            }
          } catch (err){
            console.log(err)
          }
        }
      
        fetchData();
      }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const returnToProduct = () => {
        navigate(`/products/${id}`)
    }

    return (
        <>
            {
                loaded ?
                    <div className="flex justify-between h-60 gap-2 lg:gap-8 col-span-1 sm:col-span-2 items-center p-4">
                        <img className="cursor-pointer h-60" onClick={returnToProduct} src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" />
                        <div className='grow shrink-0 basis-1/3'>
                            <p className="cursor-pointer" onClick={returnToProduct}>{productInfo.brand} {productInfo.name}</p>
                            <p>{capitalizeFirstLetter(productInfo.colorName)}</p>
                            <p>{productInfo.size}</p>
                        </div>
                        <div className='shrink'>
                            <div className="flex align-center h-12 rounded-lg relative bg-transparent mt-1">
                                <form onSubmit={e => decrementProductQuantity(e, id)}>
                                    <button className="w-12 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full cursor-pointer outline-none">-</button>
                                </form>
                                <p className="w-12 p-3 focus:outline-none text-center font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700  outline-none">{quantity}</p>
                                <form onSubmit={e => incrementProductQuantity(e, id)}>
                                    <button className="w-12 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full cursor-pointer">+</button>
                                </form>
                            </div>
                            <form onSubmit={e => removeItem(e, id)}>
                                <button>Remove</button>
                            </form>
                            <p className='text-lg my-4 font-bold'>{Number(productInfo.price * quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        </div>
                    </div>
                    : null}
        </>
    )
}

export default ItemCard