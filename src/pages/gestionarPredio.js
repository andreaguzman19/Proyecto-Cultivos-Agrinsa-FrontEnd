import React from 'react';
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function GestionarPredio() {
    const { id_predio } = useParams();

    return (
        <div className="container">
            <div className="row">
                <h1 className="col s12">Detalles del predio</h1>
                <form>
                    <TextField className="input-field col s12 l6" label="ID del predio" variant="outlined" value={id_predio} disabled />
                    <TextField className="input-field col s12 l6" label="Area" variant="outlined" />
                    <TextField className="input-field col s12" label="Ubicacion" variant="outlined" />
                    <TextField className="input-field col s12" label="Responsable" variant="outlined" />
                    <Button className="col s4 push-s4" variant="contained" type="submit">Guardar</Button>
                </form>
            </div>
        </div>
    );
}
export default GestionarPredio;