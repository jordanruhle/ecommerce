import React from 'react';
import "./index.css";
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


function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route element={<ViewAllProducts />} path='/' />
        <Route element={<ViewAllProducts />} path='/bikes/:type' />
        <Route element={<ProductDetails />} path='/products/:id' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Checkout />} path='/checkout' />
        <Route element={<AdminLogin />} path='/admin' />
        <Route element={<AdminOrders />} path='/dashboard/orders' />
        <Route element={<AdminProducts />} path='/dashboard/products' />
        <Route element={<ProductCreateOne />} path='/products/create' />
        <Route element={<ProductEdit />} path='/products/:id/edit' />
        {/* <Route element={<Payment />} path="/payment" />
        <Route element={<Completion />} path="/completion" /> */}
      </Routes>
    </div>

  );
}

export default App;
