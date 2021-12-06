import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);