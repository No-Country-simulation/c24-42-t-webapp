import { Button, TableCell, TableRow } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';

const rows: Record<string, string>[] = [
    {
        id: "11",
        dni: "12222",
        nombreCompleto: "Simon Richards",
        fechaNacimiento: "27/04/2024",
    },
    {
        id: "332",
        dni: "6152315",
        nombreCompleto: "Mariela Bustos",
        fechaNacimiento: "27/04/2024",
    },
    {
        id: "823",
        dni: "98567",
        nombreCompleto: "Lucas Francesco",
        fechaNacimiento: "27/04/2024"
    },
    {
        id: "34",
        dni: "4560000",
        nombreCompleto: "Tito Arellano",
        fechaNacimiento: "27/04/2024",
    }
];

export const MedicosRows = () => {
    // TODO obtener medicos del backend
    const handleEliminar = (id: string) => {
        // TODO eliminar medico
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