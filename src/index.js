import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './containers/dashboard';
import NotFound from './pages/notFound';
import Layout from './containers/Layout'
import ListadoPredios from './pages/ListadoPredios'
import Predio from './pages/Predio'
import Usuario from './pages/AdministrarUsuario'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} >
                        <Route path="predios" element={<ListadoPredios />} />
                        <Route path="predios/:id" element={<Predio />} />
                        <Route path="usuarios/:id" element={<Usuario />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />                    
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);