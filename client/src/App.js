import React from 'react';
import "./index.css";
import { Routes, Route } from 'react-router-dom'


import BikesView from './views/bikesview';
import ViewBike from './views/viewbike';

function App() {
  return (
    <>
      <Routes>
        <Route element={<BikesView />} path='/bikes/:type' />
          <Route element={<ViewBike />} path='/:product' />
          </Routes>
    </>
    
  );
}

        export default App;
