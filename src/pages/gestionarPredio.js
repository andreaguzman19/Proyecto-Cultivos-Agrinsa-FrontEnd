import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function GestionarPredio() {
    return (
        <div class="paramContainer">
            <h1>Detalles del predio</h1>
            <TextField id="outlined-basic" label="ID del predio" variant="outlined" />
            <TextField id="outlined-basic" label="Area" variant="outlined" />
            <TextField id="outlined-basic" label="Ubicacion" variant="outlined" />
            <TextField id="outlined-basic" label="Responsable" variant="outlined" />
            <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default GestionarPredio;