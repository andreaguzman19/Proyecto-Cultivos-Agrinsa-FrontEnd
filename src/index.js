import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Configuracion from './pages/configuracion';
import TiposCultivos from './pages/tiposDeCultivo';
import NotFound from './pages/notFound';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} >
                        <Route path="configuracion" element={<Configuracion />} />
                        <Route path="tiposDeCultivo" element={<TiposCultivos />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route> 
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);