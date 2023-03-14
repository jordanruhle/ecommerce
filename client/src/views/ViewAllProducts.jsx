import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/navbar';
import ProductGrid from '../components/productgrid';
import { useParams } from 'react-router-dom';

const ViewAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${page}`)
      .then((res) => {
        console.log( page)
        const {products, totalPages} = res.data
        console.log(totalPages)
        setAllProducts(products);
        setTotalPages(totalPages)
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Navbar />
      <ProductGrid allProducts={allProducts} loaded={loaded} page={page} setPage={setPage} totalPages={totalPages} />
    </>
  )
}

export default ViewAllProducts