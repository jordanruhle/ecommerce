import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import RedButton from "../components/RedButton";

import AdminNavBar from "../components/AdminNavBar";
import OrdersTable from "../components/AdminComponents/OrdersTable";

const AdminOrders = ({ setCart }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [getAllTrigger, setGetAllTrigger] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [searched, setSearched] = useState(false)

  const pageLinks = () => {
    const links = []
    let i = 1
    while (i <= totalPages) {
      const pageNumber = i;
      links.push(
        pageNumber === page ?
        <p className="text-xl underline text-slate-500 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
        : <p className="text-xl underline text-blue-700 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
      )
      i++
    }
    return links
  }

  useEffect(() => {
    if(searched){
      console.log(searchTerm);
    axios
      .get(`http://localhost:8000/search/${searchTerm}/${page}`)
      .then(res => {
        console.log(res.data);
        setAllOrders(res.data.orders)
        setPage(res.data.page);
        setTotalPages(res.data.totalPages)
        setLoaded(true);
      })
      .catch(err => console.log(err));
    } else {
      axios
      .get(`http://localhost:8000/order/view/${page}`)
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data.orders);
        setPage(res.data.page);
        setTotalPages(res.data.totalPages)
        setLoaded(true);
      })
      .catch((err) => console.log(err));
    }
  }, [getAllTrigger, page, searched]);

  const clearCart = (e) => {
    e.preventDefault();
    setCart([]);
  };

  const onStatusUpdate = (e) => {
    const updatedOrderStatus = { status: e.target.value };
    const id = e.target.id;
    console.log(id);
    axios
      .put(`http://localhost:8000/api/order/${id}`, updatedOrderStatus)
      .then((res) => {
        console.log(res.data);
        getAllTrigger ? setGetAllTrigger(false) : setGetAllTrigger(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteOrder = (id) => {
    console.log("delete order ran");
    axios
      .delete(`http://localhost:8000/api/order/${id}`)
      .then((res) => {
        getAllTrigger ? setGetAllTrigger(false) : setGetAllTrigger(true);
      })
      .catch((err) => console.log(err));
  };

  const search = (e) => {
    e.preventDefault()
    setPage(1)
    setSearched(true);
  }

  return (
    <div>
      <AdminNavBar />
      <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen p-4">
        <OrdersTable 
          search={search}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          clearCart={clearCart}
          loaded={loaded}
          allOrders={allOrders}
          onStatusUpdate={onStatusUpdate}
          deleteOrder={deleteOrder} 
        />
      <div className="max-w-screen-xl mx-auto flex justify-end gap-1 w-full">
        {loaded ? pageLinks() : null}
      </div>
      </div>
    </div>
  );
};

export default AdminOrders;
