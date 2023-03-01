import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemCard = ({ id, cart, setCart, removeProduct, updateProduct, quantity }) => {
    const [productInfo, setProductInfo] = useState();
    const [loaded, setLoaded] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
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
                    size: product.size,
                }));
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const decrementProductQuantity = (e) => {
        e.preventDefault()
        const productIndex = cart.findIndex(item => item.product_id === productInfo._id)
        const updatedCart = [...cart]
        updatedCart[productIndex].quantity -= quantity
        setCart(updatedCart)
        console.log(cart)
    }
    const incrementProductQuantity = (e) => {
        e.preventDefault()
        const productIndex = cart.findIndex(item => item.product_id === productInfo._id)
        const updatedCart = [...cart]
        updatedCart[productIndex].quantity += quantity
        setCart(updatedCart)
        console.log(cart)
    }

    const removeItem = () => {
        const productIndex = cart.findIndex(item => item.product_id === id)
        if (productIndex !== -1) {
            // If the product exists, update the quantity
            const updatedCart = [...cart]
            updatedCart.splice(productIndex, 1)
            setCart(updatedCart)
        }
    }
    return (
        <>
            {
                loaded ?
                    <div className="flex justify-between h-60 gap-2 lg:gap-8 col-span-1 sm:col-span-2 items-center p-4">
                        <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" className=' h-60' />
                        <div className='grow shrink-0 basis-1/3'>
                            <p>{productInfo.brand} {productInfo.name}</p>
                            <p>Turquoise</p>
                            <p>{productInfo.size}</p>
                        </div>
                        <div className='shrink'>
                            <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
                                <form onSubmit={decrementProductQuantity}>
                                    <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                </form>
                                <input type="number" className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                                <form onChange={incrementProductQuantity}>
                                    <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </form>
                            </div>
                            <form onSubmit={removeItem}>
                                <button>Remove</button>
                            </form>
                            <p className='text-lg my-4 font-bold'>${productInfo.price}</p>
                        </div>
                    </div>
                    : null}
        </>
    )
}

export default ItemCard