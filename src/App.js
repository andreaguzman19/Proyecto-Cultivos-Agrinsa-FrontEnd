import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

import Container from '@mui/material/Container';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default App;