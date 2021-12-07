import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function GestionarCultivo() {
    return (
        <div class="paramContainer">
            <h1>Detalles tipo de cultivo</h1>
            <TextField id="outlined-basic" label="ID del cultivo" variant="outlined" />
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
            <TextField id="outlined-basic" label="Descripcion" variant="outlined" />
            <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default GestionarCultivo;