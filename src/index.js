import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';

import Layout from './containers/Layout';
import Dashboard from './containers/dashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import TiposCultivos from './pages/tiposDeCultivos';
import GestionarCultivo from './pages/gestionarCultivo';
import ListadoPredios from './pages/Predios';
import GestionarPredio from './pages/gestionarPredio';
import Parametros from './pages/parametros';
import Usuario from './pages/AdministrarUsuario';
import NotFound from './pages/notFound';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard/:user" element={<Dashboard />} >
                        <Route path="tiposDeCultivo" element={<TiposCultivos />} />
                        <Route path="gestionarCultivo/:id_cultivo" element={<GestionarCultivo />} />
                        <Route path="predios" element={<ListadoPredios />} />
                        <Route path="gestionarPredio/:id_predio" element={<GestionarPredio />} />
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