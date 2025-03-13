import { Button, TableCell, TableRow } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { PacienteData } from "@tipos/backendTypes";

export const PacientesRows = ({ pacientes }: { pacientes: PacienteData[] }) => {
    const handleEliminar = (id: number) => {
        console.log(id);
    }
    return (
        <>
            {
                pacientes.map(({ id, firstName, lastName, documentId, birthDate }) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{documentId}</TableCell>
                        <TableCell align="center">{`${firstName} ${lastName}`}</TableCell>
                        <TableCell align="center">{birthDate.toString()}</TableCell>
                        <TableCell align="center">
                            <Button
                                startIcon={<RemoveIcon />}
                                sx={{ fontSize: "0.8em", textTransform: "none" }}
                                variant="contained"
                                color="error"
                                disableElevation
                                onClick={() => handleEliminar(id)}
                            >
                                Eliminar
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}