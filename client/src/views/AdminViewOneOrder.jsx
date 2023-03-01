import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import ItemizedOrderTable from '../components/AdminComponents/ItemizedOrderTable';
import OrderAddressCard from '../components/AdminComponents/OrderAddressCard';
import OrderSummary from '../components/AdminComponents/OrderSummary';
import AdminNavBar from '../components/AdminNavBar';


const AdminViewOneOrder = () => {
  const [order, setOrder] = useState({})
  const [loaded, setLoaded] = useState()
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/order/63fe51892ae557838f9870d2`)
      .then(res => {
        let { order } = res.data
        let { billing, shipping } = res.data.order
        setOrder((previousState) => ({
          ...previousState,
          billing: {
            email: billing.email,
            firstName: billing.firstName,
            lastName: billing.lastName,
            company: billing.company,
            address: billing.address,
            address2: billing.address2,
            city: billing.city,
            state: billing.state,
            zip: billing.zip,
            phone: billing.phone,
            sameAddress: billing.sameAddress
          },
          shipping: {
            firstName: shipping.firstName,
            lastName: shipping.lastName,
            company: shipping.company,
            address: shipping.address,
            address2: shipping.address2,
            city: shipping.city,
            state: shipping.state,
            zip: shipping.zip,
          },
          id: order._id,
          status: order.status,
          products: order.products,
          deliveryMethod: order.deliveryMethod,
          shippingCost: order.shippingCost,
          subTotal: order.subTotal,
          taxes: order.taxes,
          total: order.total
        }));
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <AdminNavBar />
      {
        loaded ?
          <>
            <OrderAddressCard order={order} />
            <ItemizedOrderTable order={order} />
            <OrderSummary order={order} />
          </>
          : null
      }
    </>
  )
}

export default AdminViewOneOrder