import { useTableContext } from "@context/table.context";
import { TableRow, TableCell, IconButton, Tooltip } from "@mui/material";
import { MedicacionData } from "@tipos/backendTypes";
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { formatDate } from "@utils/date/formatDate";
import DeleteIcon from '@mui/icons-material/Delete';
import { useModalStore } from "@store/modal.store";

export const GestionarMedicamentosRows = () => {
    const { dataRows } = useTableContext();
    const setModalData = useModalStore(state => state.setModalData);

    const handleDeleteMedicamento = (id: number) => {
        setModalData({
            showModal: true,
            title: "",
            operation: "delete_medication",
            data: { id }
        });
    }

    const handleShowDetails = (data: MedicacionData) => {
        setModalData({
            showModal: true,
            title: "",
            operation: "medication_details",
            data: { itemData: data }
        });
    }

    return (
        <>
            {
                dataRows.map((medication: MedicacionData) => {
                    const { id, startDate, endDate, dosage, medicationName } = medication;
                    return (
                        <TableRow
                            key={id}
                        >
                            <TableCell align="center">{medicationName}</TableCell>
                            <TableCell align="center">{dosage}</TableCell>
                            <TableCell align="center">{formatDate(startDate, "yyyy-MM-dd", "dd/MM/yyyy")}</TableCell>
                            <TableCell align="center">{formatDate(endDate, "yyyy-MM-dd", "dd/MM/yyyy")}</TableCell>
                            <TableCell align="center" sx={{ display: "flex", gap: "1rem" }}>
                                <Tooltip title="Eliminar">
                                    <IconButton color="error" onClick={() => handleDeleteMedicamento(id)} >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Editar">
                                    <IconButton color="info" >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Detalles">
                                    <IconButton color="warning" onClick={() => handleShowDetails(medication)}>
                                        <ListAltIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    );
                }
                )
            }
        </>
    );
}