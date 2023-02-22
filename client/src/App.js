import "./index.css";
import React, { useState } from 'react';
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


function App() {
  // Here is a good set up for state-managed cart.
  const [cart, setCart] = useState([
    // {
    //   product_id: "",
    //   quantity: 0
    // }
  ]);

  const addProduct = (product) => {
    // ...
  }
  const updateProduct = (product) => {
    // ...
  }
  const removeProduct = (product) => {
    // ...
  }

  return (
    <div className="h-full">
      <Routes>
        <Route element={<ViewAllProducts cart={cart} addProduct={addProduct} />} path='/' />
        <Route element={<ViewAllProducts />} path='/bikes/:type' />
        <Route element={<FilteredProductsList />} path='/products/:type/:name' />
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
