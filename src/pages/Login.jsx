import '../styles/login.css';
import React from 'react';
import { Link } from "react-router-dom";


import Container from '@mui/material/Container';
function Login(){
    return (
        <Container maxWidth="sm" >
            <div className="loginContainer" >
                <h1>Login</h1>
                <form className="login-form" action="/dashboard">
                    <label for="user">Usuario:</label>
                    <input placeholder="ejemplo@aginsa.com" id="user" type="text" className="validate" />
                    <label for="pwd">Contraseña:</label>
                    <input placeholder="*********" id="user" type="password" className="validate" />
                    <button className="login-btn">Ingresar</button>
                </form>
                <Link to="/" >Olvide mi contraseña</Link>
            </div>
        </Container>
    )
}

export default Login;