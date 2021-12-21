import React from 'react';
import Link from "@mui/material/Link";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Login() {  
    const [user, setUser] = React.useState("");
    const userChange = (e) => {
        setUser(e.target.value);
    };
    const [pass, setPass] = React.useState("");
    const passChange = (e) => {
        setPass(e.target.value);
    };
    const login = (e)=>{
        const request = {
            userID: user,
            password: pass
        };
        fetch('http://localhost:3006/api/Login/?userID='+request.userID+'&password='+request.password,{
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        e.preventDefault();
    }
    return (
        <Container maxWidth="sm" className="loginContainer">
            <form className="row centered" onSubmit={login}>
                <h1>Login</h1>
                <TextField className="centerField col s11 m8" label="Usuario" variant="outlined" onChange={userChange}/>
                <TextField className="centerField col s11 m8" label="Contrase&ntilde;a" variant="outlined" type="password" onChange={passChange} />
                <Button type="submit" className="input-field" variant="contained">Iniciar sesion</Button>
            </form>
            <div className="loginActions">
                <Link href="#!" underline="none">Olvide mi contrase&ntilde;a</Link><br />
                <Link href="#!" underline="none">Registrarse</Link>
            </div>
        </Container>
    )
}

export default Login;