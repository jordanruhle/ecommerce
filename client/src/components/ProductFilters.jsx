import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFilterLinks from "./ProductFilterLinks";

const ProductFilters = () => {
  const {name} = useParams();
  console.log(useParams());

  const selected = (id) => {
    console.log(id);
     if (id === name){
      return "bg-gray-100 text-gray-900";
     }
     return "bg-white";
    }
    // const categories = [{name:bikes,subcategory:[{name:"trail", text:"Trail"}, {name:"allMountian"}] }]
    // const bikeSubCategories = ["trail", "allMountian", ]

  return (
    <div className="bg-white rounded shadow py-4 row-span-full">
      <div>
      {/* <ProductFilterLinks type="subcategory" name="trail" text="Trail" className=""/>
        
        {bikeSubCategories.map((subcategory) => 
          <ProductFilterLinks type="subcategory" name="trail" text="Trail" className=""/>
        )} */}
        {/* <a href={'/products/subcategory/trail'} id="trail" className={`block text-xl my-3 ml-6 hover:bg-gray-100 hover:text-gray-900 ${selected(this.className)}`}>Trail</a> */}

        <a href='/products/category/bikes' className="block text-2xl my-3 px-4">Bikes</a>
        <ProductFilterLinks type="subcategory" name="trail" text="Trail" classes="block text-xl my-3 ml-6 hover:text-2xl px-4" selected={selected}/>
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