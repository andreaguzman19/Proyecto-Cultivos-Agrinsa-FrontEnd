import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';

import Layout from './containers/Layout';
import Dashboard from './containers/dashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import TiposCultivos from './pages/tiposDeCultivo';
import GestionarCultivo from './pages/gestionarCultivo';
import ListadoPredios from './pages/ListadoPredios';
import GestionarPredio from './pages/gestionarPredio';
import Parametros from './pages/parametros';
import Predio from './pages/Predio';
import Usuario from './pages/AdministrarUsuario';
import NotFound from './pages/notFound';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} >
                        <Route path="tiposDeCultivo" element={<TiposCultivos />} />
                        <Route path="gestionarTipoCultivo" element={<GestionarCultivo />} />
                        <Route path="predios" element={<ListadoPredios />} />
                        <Route path="gestionarPredio/:id_predio" element={<Predio />} />
                        <Route path="usuarios/:id" element={<Usuario />} />
                        <Route path="parametros" element={<Parametros />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />                    
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);