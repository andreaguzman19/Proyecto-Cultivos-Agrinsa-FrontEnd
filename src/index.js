import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';
import Layout from './containers/Layout'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />                    
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);