import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminNavBar from "../components/AdminNavBar";

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/order")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data.order);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-5">
        <table className="min-w-full table-auto bg-white mt-20 rounded shadow">
          <thead>
            <tr className="bg-slate-300">
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Order ID
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Name
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Date
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Email
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Shipping Address
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Total
              </th>
              <th className="text-2xl font-normal py-4 px-4 uppercase text-left ">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loaded
              ? allOrders.map((order) => (
                  <tr className="border-b hover:bg-neutral-50" key={order._id}>
                    <td className="text-xl py-4 px-4 underline text-blue-700 ">
                      <a href={`/orders/show/${order._id}`}>{order._id}</a>
                    </td>
                    <td className="text-xl py-4 px-4">
                      {order.billing.firstName} {order.billing.lastName}
                    </td>
                    <td className="text-xl py-4 px-4">{order.createdAt}</td>
                    <td className="text-xl py-4 px-4">{order.billing.email}</td>
                    <td className="text-xl py-4 px-4">
                      {order.shipping.address}
                      {order.shipping.address2}
                      {order.shipping.city},{/* {order.shipping.state}  */}
                      {order.shipping.zip}
                    </td>
                    <td className="text-xl py-4 px-4">
                      {Number(order.total.$numberDecimal).toLocaleString(
                        "en-US",
                        { style: "currency", currency: "USD" }
                      )}
                    </td>
                    <td className="text-xl py-4 px-4">{order.status}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
