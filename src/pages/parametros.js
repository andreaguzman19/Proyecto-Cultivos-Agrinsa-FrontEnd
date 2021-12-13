import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Parametros() {
    return (
        <div className="container centered">
            <h1>Parametros (Costos)</h1>
            <TextField className="input-field" label="Metro cubico de agua" variant="outlined" />
            <TextField className="input-field" label="Valor de cada semilla" variant="outlined" />
            <TextField className="input-field" label="Kilogramo fertilizante" variant="outlined" />
            <Button className="input-field" style={{ width:150}} variant="contained">Editar</Button>
            <Button className="input-field" style={{ width: 150 }} variant="contained">Guardar</Button>
        </div>
    );
}
export default Parametros;