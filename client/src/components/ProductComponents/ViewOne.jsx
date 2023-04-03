import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import RedButton from "../GenericComponents/RedButton";

const ViewOne = ({ cart, setCart }) => {
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
    colorName: "",
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
      updatedCart[productIndex].total = updatedCart[productIndex].quantity * productInfo.price
      setCart(updatedCart)
    } else {
      // If the product does not exist, add it to the cart
      setCart(previousState => [
        ...previousState,
        {
          product_id: id,
          name: productInfo.name,
          price: productInfo.price,
          colorName: productInfo.colorName,
          size: productInfo.size,
          quantity: quantity,
          total: quantity * productInfo.price
        }
      ])
    }

    console.log(cart)
    navigate('/cart')
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/view/${id}`)
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
          colorName: product.colorName,
          size: product.size,
          image: product.image
        }));
        setLoaded(true);
      })
      .catch(err => console.log(err));
    }, [id]);
    
    useEffect(() => {
    console.log(productInfo)
  }, [loaded])

  return (
    // Body
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 p-2 min-h-screen ">
      {loaded ? (
        <div className="max-w-screen-xl mx-auto grid  md:grid-cols-3 lg:grid-cols-4 rounded shadow ">
          {/* -------- Product Image -------- */}
          <div className="bg-white p-4 md:col-span-2 lg:col-span-3 xl:px-12 items-center flex ">
            <div className="w-full relative pb-[56.25%]">
              <img className="w-full h-full absolute object-cover" src={`https://d2tty9970z28ut.cloudfront.net/${productInfo.image.key}`} alt={productInfo.name} />
            </div>
          </div>
          {/* ------------- Summary --------------- */}
          <div className="bg-white flex flex-col  p-8">
            <p className="text-2xl my-4">{productInfo.brand}</p>
            <h2 className="text-3xl font-bold uppercase">{productInfo.name}</h2>
            <p className="text-xl my-4">${productInfo.price}</p>

            {/* Color Picker */}
            <form onSubmit={addProduct}>
              <p className="font-semibold">Color:</p>
              <div className="flex">
                <div className="h-14 w-14 m-2 border-2 " style={{ backgroundColor: productInfo.color }}></div>
              </div>

              {/*  Size */}
              <p className="font-semibold">Size:</p>
              <div className="flex">
                <div className="h-14 w-14 m-2 border-2 flex justify-center items-center p-6">{productInfo.size}</div>
              </div>

              <p className="font-semibold">Quantity:</p>
              <div className="flex mb-4">
                <input onChange={e => setQuantity(e.target.value)} type="number" value={quantity} className="font-semibold h-14 w-14 m-2 border-2 pl-4 py-6"></input>
              </div>
              <RedButton buttonText="Add to Cart" />
            </form>
          </div>

          {/* ------------ Description -------------- */}
          <div className="bg-white  p-8 md:col-span-3 lg:col-span-4 ">
            <h2 className="text-3xl font-semibold my-4 uppercase">{productInfo.name}</h2>
            <p className="text-xl font-semibold mb-1">Description:</p>
            <ProductDescription description={productInfo.description} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewOne;
