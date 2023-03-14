import React, { useEffect, useState } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import axios from 'axios'
import AdminProductTable from '../components/AdminProductTable'


const AdminProducts = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then(res => {
        // console.log(res.data.product);
        setAllProducts(res.data.product);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [])

  const removeFromDom = productId => {
    setAllProducts(allProducts.filter(product => product._id !== productId));
  }

  const search = (e) => {
    e.preventDefault()
    console.log(searchTerm);
    axios
      .get(`http://localhost:8000/api/order/search/${searchTerm}`)
      .then(res => {
        setAllProducts(res.data.orders)
        console.log(res.data.orders);
        
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <AdminNavBar />
      {/* {loaded && console.log(allProducts)} */}
      {loaded ? <AdminProductTable removeFromDom={removeFromDom} allProducts={allProducts} search={search} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
    </>
  )
}

export default AdminProducts