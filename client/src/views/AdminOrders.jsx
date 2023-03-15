import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import RedButton from "../components/RedButton";

import AdminNavBar from "../components/AdminNavBar";

const AdminOrders = ({ setCart }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [getAllTrigger, setGetAllTrigger] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

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
  }, [getAllTrigger, page]);

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
    console.log(searchTerm);
    axios
      .get(`http://localhost:8000/api/order/search/${searchTerm}`)
      .then(res => {
        setAllOrders(res.data)
        console.log(res.data);
        
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <AdminNavBar />
      <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen p-4">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between pb-4">
            <form onSubmit={search} className="p-0">
              <input type="search" value={searchTerm} onChange={e => {setSearchTerm(e.target.value)}} name="search" className="p-2 border" />
              <button className="p-2">
                <FaSearch className="fa-7x" />
              </button>
            </form>
            <form onSubmit={clearCart} className="p-0 w-48">
              <RedButton buttonText="Clear Cart" />
            </form>
          </div>
          <table className="table-auto bg-white rounded shadow w-full">
            <thead>
              <tr className="bg-slate-300">
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Order ID
                </th>
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Name
                </th>
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Date
                </th>
                {/* <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Email
                </th> */}
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Shipping Address
                </th>
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Total
                </th>
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Status
                </th>
                <th className="text-2xl font-normal p-4 uppercase text-left ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loaded
                ? allOrders.map((order) => (
                    <tr
                      className="border-b hover:bg-neutral-50"
                      key={order._id}
                    >
                      <td className="text-xl p-4 underline text-blue-700 ">
                        <a href={`/orders/show/${order._id}`}>{order._id}</a>
                      </td>
                      <td className="text-xl p-4">
                        {order.billing.firstName} {order.billing.lastName}
                      </td>
                      <td className="text-xl p-4">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      {/* <td className="text-xl p-4">
                        {order.billing.email}
                      </td> */}
                      <td className="text-xl p-4">
                        <p>{order.shipping.firstName} {order.shipping.lastName}</p>
                        <p>{order.shipping.address} {order.shipping.address2}</p>
                        <p>{order.shipping.city}, {order.shipping.state}{" "}
                        {order.shipping.zip}</p>
                      </td>
                      <td className="text-xl p-4">
                        {Number(order.total.$numberDecimal).toLocaleString(
                          "en-US",
                          { style: "currency", currency: "USD" }
                        )}
                      </td>
                      <td className="text-xl p-4">
                        <form>
                          <select
                            onChange={onStatusUpdate}
                            value={order.status}
                            id={order._id}
                            name="status"
                          >
                            <option value="pending">Pending</option>
                            <option value="received">Received</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </form>
                      </td>
                      <td className="p-4">
                        <form onSubmit={(e) => deleteOrder(order._id)}>
                          <RedButton buttonText="Delete" />
                        </form>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      <div className="max-w-screen-xl mx-auto flex justify-end gap-1 w-full">
        {loaded ? pageLinks() : null}
      </div>
      </div>
    </div>
  );
};

export default AdminOrders;
