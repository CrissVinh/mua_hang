import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
// import './css/prettyPhoto.css';
import './css/price-range.css';
import './css/animate.css';
import './css/main.css';
import './css/responsive.css';
import './css/carticon.css';

import {
  BrowserRouter,  // bỏ as Router
  Routes,
  Route
}from "react-router-dom";

import Cart from './components/Cart';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>
          <Route path = "/" element = {<App> <Home/> </App>}/>
          <Route path = "/cart" element = {<App> <Cart/> </App>}/>

        </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
