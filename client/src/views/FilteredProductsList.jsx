import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import ProductGrid from '../components/productgrid';


const FilteredProductsList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { type, name } = useParams()
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/${type}/${name}`)
      .then((res) => {
        console.log(res.data);
        setAllProducts(res.data)
        setLoaded(true)
      })
      .catch((err) => console.log(err));
  }, [type, name]);

  return (
    <>
    <Navbar />
    <ProductGrid allProducts={allProducts} loaded={loaded} />
    </>
  )
}

export default FilteredProductsList