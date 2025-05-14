import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import './index.css';
import HeaderMenu from './components/header-menu.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <HeaderMenu/>

    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/' element={<App/>} />
    </Routes>
  </BrowserRouter>

);




























// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )