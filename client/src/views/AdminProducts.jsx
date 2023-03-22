import React, { useEffect, useState } from "react";
import AdminNavBar from "../components/AdminComponents/AdminNavBar";
import axios from "axios";
import AdminProductTable from "../components/AdminComponents/AdminProductTable";

const AdminProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (searched){
      axios
      .get(`http://localhost:8000/api/product/search/${searchTerm}/${page}`)
      .then((res) => {
        const { products, totalPages} = res.data;
        setAllProducts(products);
        setTotalPages(totalPages);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    }
    else {
      console.log("else");
      axios
        .get(`http://localhost:8000/api/product/${page}`)
        .then((res) => {
          console.log(res.data);
          const { products, totalPages } = res.data;
          setAllProducts(products);
          setTotalPages(totalPages);
          setLoaded(true);
        })
        .catch((err) => console.log(err));
      }
    }, [searched, page]);
    
    const removeFromDom = (productId) => {
      setAllProducts(allProducts.filter((product) => product._id !== productId));
    };
    
    const search = (e) => {
      e.preventDefault();
      setPage(1)
      setSearched(true)
      console.log(searchTerm);
  };

  return (
    <>
      <AdminNavBar />
      {loaded ? (
        <AdminProductTable
          removeFromDom={removeFromDom}
          allProducts={allProducts}
          search={search}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loaded={loaded}
        />
      ) : null}
    </>
  );
};

export default AdminProducts;
