import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,  // bỏ as Router
  Routes,
  Route
}from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';

// bai 11
import Vdu1 from './components/Bai11/Vdu1';
import Vdu2 from './components/Bai11/Vdu2';
import Login2 from './components/Bai11/Login2';

// bai 12
import MapTheoArr from './components/Bai12/MapTheoArr';
import MapTheoObj from './components/Bai12/MapTheoObj';

// bai 31
import A from './components/Bai31/A';
import A2 from './components/Bai31/A2';

const arr = ['iphone x', 'iphone 11', 'iphone duo', 'iphone pro max']
const obj = {
  name: "phanvinh",
  age: 18
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path = "/" element = { <Home/>}/>
          <Route path = "/cart" element = {<Cart/>}/>

        {/* bai11 */}
          <Route path = "/Shop" element = {<Shop/>}/>
          <Route path = "/vdu1" element = {<Vdu1/>}/>
          <Route path='/vdu2' element = {<Vdu2/>}/>
          <Route path='login2' element = {<Login2/>}/>

          {/* bai 12  */}
          <Route path='maptheoarr' element = {<MapTheoArr arr = {arr} />}/>
          <Route path='maptheoobj' element = {<MapTheoObj obj = {obj} />}/>

          {/* bai 31 */}
          <Route path='bai311' element = {<A/>}/>
          <Route path='bai312' element = {<A2/>}/>

        </Routes>
      </App>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
