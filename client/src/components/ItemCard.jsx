import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemCard = ({ id, cart, setCart, decrementProductQuantity, incrementProductQuantity, quantity }) => {
    const [productInfo, setProductInfo] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/view/${id}`)
            .then(res => {
                console.log(res.data);
                let { product } = res.data
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
                    colorName: product.colorName,
                    size: product.size,
                }));
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);



    const removeItem = () => {
        const productIndex = cart.findIndex(item => item.product_id === id)
        if (productIndex !== -1) {
            // If the product exists, update the quantity
            const updatedCart = [...cart]
            updatedCart.splice(productIndex, 1)
            setCart(updatedCart)
        }
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return (
        <>
            {
                loaded ?
                    <div className="flex justify-between h-60 gap-2 lg:gap-8 col-span-1 sm:col-span-2 items-center p-4">
                        <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" className=' h-60' />
                        <div className='grow shrink-0 basis-1/3'>
                            <p>{productInfo.brand} {productInfo.name}</p>
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
                            <form onSubmit={removeItem}>
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