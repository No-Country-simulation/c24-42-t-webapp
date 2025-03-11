import { Button, TableCell, TableRow } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';

const rows: Record<string, string>[] = [
    {
        id: "1",
        dni: "12345678",
        nombreCompleto: "Cesar Bustos",
        fechaNacimiento: "27/04/2024",
    },
    {
        id: "2",
        dni: "12313677",
        nombreCompleto: "Claudio Bustos",
        fechaNacimiento: "27/04/2024",
    },
    {
        id: "3",
        dni: "1098765433",
        nombreCompleto: "Francisco Saurit",
        fechaNacimiento: "27/04/2024"
    },
    {
        id: "4",
        dni: "7252522",
        nombreCompleto: "Angel Arellano",
        fechaNacimiento: "27/04/2024",
    }
];

export const PacientesRows = () => {
    // TODO obtener pacientes del back
    const handleEliminar = (id: string) => {
        // TODO eliminar paciente
    }
    return (
        <>
            {
                rows.map(({ id, dni, nombreCompleto, fechaNacimiento }) => (
                    <TableRow
                        key={dni as string}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{dni}</TableCell>
                        <TableCell align="center">{nombreCompleto}</TableCell>
                        <TableCell align="center">{fechaNacimiento}</TableCell>
                        <TableCell align="center">
                            <Button startIcon={<RemoveIcon />} sx={{fontSize: "0.8em", textTransform: "none"}} variant="contained" color="error" disableElevation onClick={() => handleEliminar(id)}>Eliminar</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}