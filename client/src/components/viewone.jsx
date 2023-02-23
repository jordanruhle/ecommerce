import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import RedButton from "./RedButton";

const ViewOne = ({cart, setCart}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "",
    subCategory: "",
    price: 0.0,
    quantity: 0,
    quantitySold: 0,
    image: "",
    color: "",
    size: "xsm",
  });

  const addProduct = (e) => {
    e.preventDefault()
    // Check if the product already exists in the cart
    const productIndex = cart.findIndex(item => item.product_id === id)
    if (productIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cart]
      updatedCart[productIndex].quantity += quantity
      setCart(updatedCart)
    } else {
      // If the product does not exist, add it to the cart
      setCart(previousState => [
        ...previousState,
        {
          product_id: id,
          quantity: quantity,
          price: productInfo.price
        }
      ])
    }
  
    console.log(cart)
    navigate('/cart')
  }

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
    // Body
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 p-2 min-h-screen">
      {loaded ? (
        <div className="max-w-screen-xl mx-auto grid  sm:grid-cols-3 lg:grid-cols-4 rounded shadow ">
          {/* -------- Product Image -------- */}
          <div className="bg-white col-span-1 sm:col-span-2 lg:col-span-3 items-center p-8 min-h-full">
            <img
              src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002905-turquoise.jpg?w=1000&auto=format&q=70&fit=max"
              className=""
              alt="bike"
            />

            {/* ------------- Summary --------------- */}
          </div>
          <div className="bg-white flex flex-col  p-8">
            <p className="text-2xl my-4">{productInfo.brand}</p>
            <h2 className="text-3xl font-bold uppercase">{productInfo.name}</h2>
            <p className="text-xl my-4">${productInfo.price}</p>

            {/* Color Picker */}
            <form onSubmit={addProduct}>
              <p className="font-semibold">Color:</p>
              <div className="flex">
                <div className="h-10 w-10 m-2 border-2 flex justify-center items-center" style={{backgroundColor: productInfo.color}}></div>
              </div>

              {/*  Size */}
              <p className="font-semibold">Size:</p>
              <div className="flex">
                <div className="h-10 w-10 m-2 border-2 flex justify-center items-center p-6">{productInfo.size}</div>
              </div>
              <RedButton buttonText="Add to Cart" />
            </form>
          </div>

          {/* ------------ Description -------------- */}
          <div className="bg-white col-span-1 sm:col-span-3 p-8 lg:col-span-4 ">
            <h2 className="text-3xl font-semibold my-4 uppercase">{productInfo.name}</h2>
            <p className="text-xl font-semibold mb-1">Description:</p>
            <ProductDescription description={productInfo.description}/>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewOne;
