import React, { useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import axios from "axios";
import AdminProductTable from "../components/AdminProductTable";

const AdminProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
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
  }, [page]);

  const removeFromDom = (productId) => {
    setAllProducts(allProducts.filter((product) => product._id !== productId));
  };
  

  const search = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    axios
      .get(`http://localhost:8000/api/product/search/${searchTerm}`)
      .then((res) => {
        setAllProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
