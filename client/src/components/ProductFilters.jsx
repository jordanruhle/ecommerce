import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductFilters = () => {
  const [categories, setCategories] = useState();
  const [filtersLoaded, setFiltersLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories')
      .then((res) => {
        console.log(res.data)
        setCategories(res.data)
        console.log(categories)
        setFiltersLoaded(true)
      })
      .catch((err) => console(err));
  }, [])

  return (
    <div className="bg-white rounded shadow p-4 row-span-full">
          { filtersLoaded ? 
            categories.map(category => {
              return (
                <div key={category.category}>
                  <p className="text-2xl my-3">{category.category}</p>
                  {category.subcategories.map(subcategory => {
                    return <p className="text-xl my-3 ml-6" key={subcategory}>{subcategory}</p>;
                  })}
                </div>
              );
            }) : null
          }
        </div>
  )
}

export default ProductFilters