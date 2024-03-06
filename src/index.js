import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// components
import Car from "./component/Car.js"
// import CarType from './component/CarType.js';
// import Apple from './component/apple.js';
// import Sam from './component/sam.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
    {/* <CarType /> */}
    <App />
    {/* <Apple /> */}
    {/* <Sam/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
