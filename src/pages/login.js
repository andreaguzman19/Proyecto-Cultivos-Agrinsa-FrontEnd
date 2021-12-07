import React from 'react';
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
function Login(){
    return (
        <Container maxWidth="sm" >
            <div className="loginContainer" >
                <h1>Login</h1>
                <Link to="/dashboard" >Iniciar Sesion (Usuario Config.)</Link>
            </div>
        </Container>
    )
}

export default Login;