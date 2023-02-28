import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/navbar';
import ProductGrid from '../components/productgrid';
import { useParams } from 'react-router-dom';

const ViewAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/product")
          .then((res) => {
            setAllProducts(res.data.product);
            setLoaded(true);
          })
          .catch((err) => console.log(err));
      }, []);

    return (
        <>
        <Navbar />
        <ProductGrid allProducts={allProducts} loaded={loaded}/>
        </>
    )
}

export default ViewAllProducts