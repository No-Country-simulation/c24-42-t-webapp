import { useTableContext } from "@context/table.context";
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import { MedicoData } from "@tipos/backendTypes";

export const MedicoRows = () => {
    const { dataRows } = useTableContext();
    return (
        <>
            {
                dataRows.map(({ id, documentId, name, lastname, speciality }: MedicoData) => (
                    <TableRow
                        key={id}
                    >
                        <TableCell align="center">{documentId}</TableCell>
                        <TableCell align="center">{`${name} ${lastname}`}</TableCell>
                        <TableCell align="center">
                            <Typography variant="body2">
                                {speciality.toLowerCase()}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Tooltip title="Eliminar medico">
                                <IconButton>
                                    <RemoveIcon color="error" />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}