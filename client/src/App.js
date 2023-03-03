import "./index.css";
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import ViewAllProducts from './views/ViewAllProducts';
import ProductDetails from './views/ProductDetails';
import Cart from './views/cart';
import Checkout from './views/checkout';
import AdminLogin from './views/AdminLogin';
import AdminOrders from './views/AdminOrders';
import AdminProducts from './views/AdminProducts';
import ProductCreateOne from './views/ProductCreateOne';
import ProductEdit from './views/ProductEdit'
import FilteredProductsList from './views/FilteredProductsList';
import AdminViewOneOrder from "./views/AdminViewOneOrder";
import OrderConfirmation from "./views/OrderConfirmation";


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="h-full">
      <Routes>
        <Route element={<ViewAllProducts />} path='/' />
        <Route element={<ViewAllProducts />} path='/bikes/:type' />
        <Route element={<FilteredProductsList />} path='/products/:type/:name' />
        <Route element={<ProductDetails cart={cart} setCart={setCart} />} path='/products/:id' />
        <Route element={<Cart cart={cart} setCart={setCart} />} path='/cart' />
        <Route element={<Checkout cart={cart} />} path='/checkout' />
        <Route element={<AdminLogin />} path='/admin' />
        <Route element={<AdminOrders />} path='/dashboard/orders' />
        <Route element={<AdminProducts />} path='/dashboard/products' />
        <Route element={<AdminViewOneOrder />} path='/orders/show/:id' />
        <Route element={<ProductCreateOne />} path='/products/create' />
        <Route element={<ProductEdit />} path='/products/:id/edit' />
        <Route element={<OrderConfirmation />} path='/order-confirmation/:id' />
          {/* <Route element={<Payment />} path="/payment" />
          <Route element={<Completion />} path="/completion" /> */}
      </Routes>
    </div>

  );
}

export default App;
