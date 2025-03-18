import { useTableContext } from "@context/table.context";
import { TableRow, TableCell, IconButton, Tooltip } from "@mui/material";
import { MedicacionData } from "@tipos/backendTypes";
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { formatDate } from "@utils/formatDate";

export const GestionarMedicamentosRows = () => {
    const { dataRows } = useTableContext();

    return (
        <>
            {
                dataRows.map(({ id, startDate, endDate, dosage, medicationName }: MedicacionData) => (
                    <TableRow
                        key={id}
                    >
                        <TableCell align="center">{medicationName}</TableCell>
                        <TableCell align="center">{dosage}</TableCell>
                        <TableCell align="center">{formatDate(startDate, "yyyy-MM-dd", "dd/MM/yyyy")}</TableCell>
                        <TableCell align="center">{formatDate(endDate, "yyyy-MM-dd", "dd/MM/yyyy")}</TableCell>
                        <TableCell align="center" sx={{ display: "flex", gap: "1rem" }}>
                            <Tooltip title="Eliminar">
                                <IconButton color="error" >
                                    <RemoveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Editar">
                                <IconButton color="info" >
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Detalles">
                                <IconButton color="warning" >
                                    <ListAltIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}