import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GrayButton from "./GrayButton";
import ProductFilters from "./ProductFilters";

const ProductGrid = ({allProducts, loaded}) => {
  
  return (
    // Body
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen">
      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-10 p-4 ">
        <ProductFilters />
        {/* ------------Loop through all products-------------- */}
        {loaded && allProducts.map((product, key) =>
          //   const imagePath = `../../../server/uploads/${product.image.filename}`;
          <div className="bg-white flex flex-col justify-between items-center rounded shadow p-4" key={key}>
            <img src={`../../../server/uploads/${product.image.filename}`} alt={product.name} />
            <p className="text-center my-4">{product.brand} {product.name}</p>
            <p className="text-center my-4">${product.price.$numberDecimal}</p>
            <form className="w-full" action={`/products/${product._id}`}>
              <GrayButton buttonText="View" />
            </form>
          </div>
        )}
        <div className="bg-white flex flex-col items-center rounded shadow p-4">
          <img
            src="https://jnsn.imgix.net/globalassets/digizuite/26185-en-bi003591-satin-smoke~arctic-blue.jpg?w=1000&auto=format&q=70&fit=max"
            alt="bike"
          />
          <p className="text-center my-4">Brand Bike Name</p>
          <p className="text-center my-4">$7,999.99</p>
          <GrayButton buttonText="View" />
        </div>
        <div className="bg-white flex flex-col items-center rounded shadow p-4">
          <img
            src="https://jnsn.imgix.net/globalassets/digizuite/12295-en-bi002184-green~black~orange.jpg?w=1000&auto=format&q=70&fit=max"
            alt="bike"
          />
          <p className="text-center my-4">Brand Bike Name</p>
          <p className="text-center my-4">$7,999.99</p>
          <GrayButton buttonText="View" />
        </div>
        <div className="bg-white flex flex-col items-center rounded shadow p-4">
          <img
            src="https://jnsn.imgix.net/globalassets/product-images---all-assets/yeti-2021/bi002772-turquoise.jpg?w=1000&auto=format&q=70&fit=max"
            alt="bike"
          />
          <p className="text-center my-4">Brand Bike Name</p>
          <p className="text-center my-4">$7,999.99</p>
          <Link className="w-full" to={"/product"}>
            <GrayButton buttonText="View" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
