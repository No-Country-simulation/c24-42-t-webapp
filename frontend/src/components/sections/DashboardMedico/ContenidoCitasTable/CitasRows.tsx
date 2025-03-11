import { TableCell, TableRow } from "@mui/material";

const rows: Record<string, string>[] = [
    {
        id: "1",
        fecha: "12/02/2001",
        hora: "11:22",
        paciente: "Lucas Araya",
    },
    {
        id: "2",
        fecha: "12/02/2001",
        hora: "11:22",
        paciente: "Cesar Fonseca",
    },
    {
        id: "3",
        fecha: "12/02/2001",
        hora: "11:22",
        paciente: "Mariana Bustos"
    },
    {
        id: "4",
        fecha: "12/02/2001",
        hora: "11:22",
        paciente: "Luu Freere",
    }
];

export const CitasRows = () => {
    // TODO obtener pacientes del back
    return(
        <>
            {
                rows.map(({ id, fecha, hora, paciente }) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{fecha}</TableCell>
                        <TableCell align="center">{hora}</TableCell>
                        <TableCell align="center">{paciente}</TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}