import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductFilters = () => {


  return (
    <div className="bg-white rounded shadow p-4 row-span-full">
      <div>
        <a href='/products/category/bikes' className="block text-2xl my-3">Bikes</a>
        <a href={'/products/subcategory/trail'} className="block text-xl my-3 ml-6 ">Trail</a>
        <a href={'/products/subcategory/allmountain'} className="block text-xl my-3 ml-6 ">All Mountain</a>
        <a href={'/products/subcategory/enduro'} className="block text-xl my-3 ml-6 ">Enduro</a>
        <a href={'/products/subcategory/downhill'} className="block text-xl my-3 ml-6 ">Downhill</a>
      </div>
      <div>
        <a href='/products/category/components' className="block text-2xl my-3">Components</a>
        <a href={'/products/subcategory/drivetrain'} className="block text-xl my-3 ml-6 ">Drivetrain</a>
        <a href={'/products/subcategory/suspension'} className="block text-xl my-3 ml-6 ">Suspension</a>
        <a href={'/products/subcategory/brakes'} className="block text-xl my-3 ml-6 ">Brakes</a>
        <a href={'/products/subcategory/tires'} className="block text-xl my-3 ml-6 ">Tires</a>
        <a href={'/products/subcategory/wheels'} className="block text-xl my-3 ml-6 ">Wheels</a>
      </div>
      <div>
        <a href='/products/category/accessories' className="block text-2xl my-3">Accessories</a>
        <a href={'/products/subcategory/bags'} className="block text-xl my-3 ml-6 ">Bags</a>
        <a href={'/products/subcategory/tools'} className="block text-xl my-3 ml-6 ">Tools</a>
        <a href={'/products/subcategory/hydration'} className="block text-xl my-3 ml-6 ">Hydration</a>
      </div>
    </div>
  )
}

export default ProductFilters