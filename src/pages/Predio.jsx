import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Predio(id) {
    return (
        <div class="paramContainer">
                <h1>Detalles de Predio</h1>
                <TextField id="outlined-basic" label="ID del Predio:" variant="outlined" />
                <TextField id="outlined-basic" label="Área:" variant="outlined" />
                <TextField id="outlined-basic" label="Ubicacón:" variant="outlined" />
                <TextField id="outlined-basic" label="Responsable:" variant="outlined" />
                <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default Predio;