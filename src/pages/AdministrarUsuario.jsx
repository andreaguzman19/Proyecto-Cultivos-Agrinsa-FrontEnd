import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/updateForm.css'


function Usuario(id) {
    const [rol, setRol] = React.useState('');

    const handleChange = (event) => {
    setRol(event.target.value);
  };
    return (
        <div className="updateForm-container">
                <h1>Usuario</h1>
                <form className="updateForm">
                    <TextField name="documento" id="outlined-basic" label="Numero identificación:" variant="outlined" />
                   
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rol}
                            label="Rol"
                            onChange={handleChange}
                        >
                            <MenuItem value={'admin'}>Usuario Administrador</MenuItem>
                            <MenuItem value={'config'}>Usuario de configuración</MenuItem>
                            <MenuItem value={'gestion'}>Usuario de gestión</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField name="nombre" id="outlined-basic" label="Nombre:" variant="outlined" />
                    <TextField name="apellido" id="outlined-basic" label="Apellidos:" variant="outlined" />
                    <TextField id="outlined-basic" label="Correo:" variant="outlined" />
                    <TextField id="outlined-basic" label="Celular:" variant="outlined" />
                    <TextField id="outlined-basic" label="Contaseña:" variant="outlined" />
                </form>
                <Button variant="contained">Guardar</Button>
        </div>
    );
}
export default Usuario;