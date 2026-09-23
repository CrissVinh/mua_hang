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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path = "/" element = { <Home/>}/>
          <Route path = "/cart" element = {<Cart/>}/>

        </Routes>
      </App>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
