import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductFilters = () => {
  const [categories, setCategories] = useState();
  const [filtersLoaded, setFiltersLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories')
      .then((res) => {
        setCategories(res.data)
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
                  <a href={`/category/${category.category}`}className="block text-2xl my-3">{category.category}</a>
                  {category.subcategories.map(subcategory => {
                    return <a href={`/subcategory/${subcategory}`} className="block text-xl my-3 ml-6 " key={subcategory}>{subcategory}</a>;
                  })}
                </div>
              );
            }) : null
          }
        </div>
  )
}

export default ProductFilters