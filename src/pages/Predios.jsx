import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import Link from '@mui/material/Link';


function ListadoPredios() {

    const rows = [
        {id:123,area:15, ubicacion:"10° 57' 42'' de latitud norte y 74° 46' 54'' de longitud occidental",usuario:'P.Perez' },
        {id:456,area:42, ubicacion:"10° 57' 42'' de latitud norte y 74° 46' 54'' de longitud occidental",usuario:'SIN ASIGNAR' }
    ];

    return (
        <Box>
            <h2>Listado de Predios</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Area[Ha]</TableCell>
                        <TableCell align="center">Ubicación</TableCell>
                        <TableCell align="center">Usuario</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell align="center">{row.area}</TableCell>
                        <TableCell align="center">{row.ubicacion}</TableCell>
                        <TableCell align="center">{row.usuario}</TableCell>
                        <TableCell align="right">
                            <Link href={`gestionarPredio/${row.id}`} underline="none" color="inherit">
                                <IconButton color="warning" component="span">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <IconButton color="error" component="span">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
    </TableContainer>
        </Box>
    );
}

export default ListadoPredios;