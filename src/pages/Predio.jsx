import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/updateForm.css'


function Predio(id) {
    return (
        <div className="updateForm-container">
                <h1>Detalles de Predio</h1>
                <form className="updateForm">
                    <TextField id="outlined-basic" label="ID del Predio:" variant="outlined" />
                    <TextField id="outlined-basic" label="Área:" variant="outlined" />
                    <TextField id="outlined-basic" label="Ubicacón:" variant="outlined" />
                    <TextField id="outlined-basic" label="Responsable:" variant="outlined" />
                </form>
                <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default Predio;