import { useTableContext } from "@context/table.context";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import MedicationIcon from '@mui/icons-material/Medication';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { PacienteData } from "@tipos/backendTypes";
import { calculateAge } from "@utils/calculateAge";
import { useNavigate } from "react-router";

export const GestionarPacientesRows = () => {
    const { dataRows } = useTableContext();
    const navigate = useNavigate();

    const handleChangeToMedicationTable = (id: number) => {
        navigate(`/medico/gestionar-medicamentos/${id}`);
    }

    return (
        <>
            {
                dataRows.map(({ id, documentId, firstName, lastName, birthDate }: PacienteData) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{`${firstName} ${lastName}`}</TableCell>
                        <TableCell align="center">{documentId}</TableCell>
                        <TableCell align="center">{calculateAge(birthDate)}</TableCell>
                        <TableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Tooltip title="Historial Medico">
                                <IconButton color="info">
                                    <MonitorHeartIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Administrar Medicamentos">
                                <IconButton color="warning" onClick={() => handleChangeToMedicationTable(id)}>
                                    <MedicationIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}