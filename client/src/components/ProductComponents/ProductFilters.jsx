import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFilterLinks from "./ProductFilterLinks";

const ProductFilters = () => {
  const { name } = useParams();

  const selected = (id) => {
    if (id === name) {
      return "border-b-2 border-stone-800";
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
          name: "allmountain",
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
    <div className="hidden md:block bg-white rounded shadow col-span-2 row-span-full">
      <div>
        {categories.map((category) => (
          <React.Fragment key={category.name}>
            <ProductFilterLinks
              type="category"
              name={category.name}
              text={category.text}
              classes="text-2xl text-stone-800 ml-4 bg-transparent"
              selected={selected}
            />
            {category.subcategory.map((subcategory) => (
              <ProductFilterLinks
                type="subcategory"
                name={subcategory.name}
                text={subcategory.text}
                classes="text-xl text-stone-800 ml-8 bg-transparent"
                selected={selected}
                key={subcategory.name}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
