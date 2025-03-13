import { Button, TableCell, TableRow } from "@mui/material";
import { PacienteData } from "@tipos/backendTypes";

export const GestionarPacientesRows = ({ pacientes }: { pacientes: PacienteData[] }) => {
     return(
        <>
            {
                pacientes.map(({ id, documentId, firstName, lastName }) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{`${firstName} ${lastName}`}</TableCell>
                        <TableCell align="center">{documentId}</TableCell>
                        <TableCell align="center" sx={{display: "flex", gap: "1rem"}}>
                            <Button variant="contained" color="info" disableElevation>
                                Historial Medico
                            </Button>
                            <Button variant="contained" color="warning" disableElevation>
                                Administrar Medicamentos
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}