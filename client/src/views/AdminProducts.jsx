import React, { useEffect, useState } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import axios from 'axios'
import AdminProductTable from '../components/AdminProductTable'


const AdminProducts = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then(res => {
        // console.log(res.data.product);
        setAllProducts(res.data.product);
        setLoaded(true);
      })
      .catch(err => console(err));
  }, [])

  return (
    <>
      <AdminNavBar />
      {/* {loaded && console.log(allProducts)} */}
      {loaded && <AdminProductTable allProducts={allProducts} />}
    </>
  )
}

export default AdminProducts