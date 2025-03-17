import { TableCell, TableRow } from "@mui/material";
import { useTableContext } from "@context/table.context";

export const CitasRows = () => {
    const { dataRows } = useTableContext();
    return (
        <>
            {
                dataRows.map(({ id, fecha, hora, paciente }) => (
                    <TableRow key={id}>
                        <TableCell align="center">{fecha}</TableCell>
                        <TableCell align="center">{hora}</TableCell>
                        <TableCell align="center">{paciente}</TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}