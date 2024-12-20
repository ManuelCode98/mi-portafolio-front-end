import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import AcercaDe from './components/pages/acerca-de.jsx';
import './index.css';
import HeaderMenu from './components/header-menu.jsx';
import { PanelControl } from './components/pages/panel-control.jsx';

PanelControl


ReactDOM.createRoot(document.getElementById('root')).render(


  
  <BrowserRouter>
    <HeaderMenu/>

    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/' element={<App/>} />
      <Route path='acerca-de' element={<AcercaDe/>}/>
      <Route path='panel-control' element={<PanelControl/>} />
    </Routes>
  </BrowserRouter>

)




























// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )