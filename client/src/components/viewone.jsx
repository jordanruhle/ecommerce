import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";

const ViewOne = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
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

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            console.log(res.data);
            let product = res.data.product
               console.log(res.data.product);

            setProductInfo({
                ...productInfo,
                name: res.data.product.name,
                brand: res.data.product.brand,
                description: res.data.product.description,
                mainCategory: res.data.product.mainCategory,
                subCategory: res.data.product.subCategory,
                price: res.data.product.price.$numberDecimal,
                quantity: res.data.product.quantity,
                quantitySold: res.data.product.quantitySold,
                color: res.data.product.color,
                size: res.data.product.size,
            });
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
            <form action="/cart">
              <p className="font-semibold">Color:</p>
              <div className="flex">
                <div className="h-10 w-10 m-2 border-2 flex justify-center items-center" style={{backgroundColor: productInfo.color}}></div>
              </div>

              {/*  Size */}
              <p className="font-semibold">Size:</p>
              <div className="flex">
                <div className="h-10 w-10 m-2 border-2 flex justify-center items-center">{productInfo.size}</div>
                
              </div>
              <button className="bg-red-600 hover:bg-slate-500 text-white text-lg font-semibold py-2 px-4 my-4 border w-full">
                ADD TO CART
              </button>
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
