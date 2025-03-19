import { useTableContext } from "@context/table.context";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { PacienteData } from "@tipos/backendTypes";

export const PacienteRows = () => {
    const { dataRows } = useTableContext();
    return (
        <>
            {
                dataRows.map(({ id, documentId, firstName, lastName, address }: PacienteData) => (
                    <TableRow
                        key={id}
                    >
                        <TableCell align="center">{`${firstName} ${lastName}`}</TableCell>
                        <TableCell align="center">{documentId}</TableCell>
                        <TableCell align="center">{address}</TableCell>
                        <TableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Tooltip title="Eliminar paciente">
                                <IconButton color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}