import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Parametros() {
    return (
        <div class="paramContainer">
                <h1>Parametros Costos</h1>
                <TextField id="outlined-basic" label="Metro cubico de agua" variant="outlined" />
                <TextField id="outlined-basic" label="Valor de cada semilla" variant="outlined" />
                <TextField id="outlined-basic" label="Kilogramo fertilizante" variant="outlined" />
                <Button variant="contained">Editar</Button>
            <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default Parametros;