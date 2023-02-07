import React from 'react';
import "./index.css";
import { Routes, Route } from 'react-router-dom'


import BikesView from './views/bikesview';
import ViewBike from './views/viewbike';
import Cart from './views/cart';
import Checkout from './views/checkout';

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route element={<BikesView />} path='/' />
        <Route element={<BikesView />} path='/bikes/:type' />
        <Route element={<ViewBike />} path='/:product' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Checkout />} path='/checkout' />
        {/* <Route element={<Payment />} path="/payment" />
        <Route element={<Completion />} path="/completion" /> */}
      </Routes>
    </div>

  );
}

export default App;
