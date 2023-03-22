import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFilterLinks from "./ProductFilterLinks";

const ProductFilters = () => {
  const { name } = useParams();
  console.log(useParams());

  const selected = (id) => {
    console.log(id);
    if (id === name) {
      return "bg-gray-100 text-gray-900";
    }
    return "bg-white";
  };
  const categories = [
    {
      name: "bikes",
      text: "Bikes",
      subcategory: [
        {
          name: "trail",
          text: "Trail",
        },
        {
          name: "allMountain",
          text: "All Mountain",
        },
        {
          name: "enduro",
          text: "Enduro",
        },
        {
          name: "downhill",
          text: "Downhill",
        },
      ],
    },
    {
      name: "components",
      text: "Components",
      subcategory: [
        {
          name: "drivetrain",
          text: "Drivetrain",
        },
        {
          name: "suspension",
          text: "Suspension",
        },
        {
          name: "brakes",
          text: "Brakes",
        },
        {
          name: "tires",
          text: "Tires",
        },
        {
          name: "wheels",
          text: "Wheels",
        },
      ],
    },
    {
      name: "accessories",
      text: "Accessories",
      subcategory: [
        {
          name: "bags",
          text: "Bags",
        },
        {
          name: "tools",
          text: "Tools",
        },
        {
          name: "hydration",
          text: "Hydration",
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded shadow py-4 row-span-full">
      <div>
        {categories.map((category) => (
          <React.Fragment>
            <ProductFilterLinks
              type="category"
              name={category.name}
              text={category.text}
              classes="block text-2xl my-3 px-4 hover:text-3xl"
              selected={selected}
            />
            {category.subcategory.map((subcategory) => (
              <ProductFilterLinks
                type="subcategory"
                name={subcategory.name}
                text={subcategory.text}
                classes="block text-xl my-3 ml-6 hover:text-2xl px-4"
                selected={selected}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
