import { Box, Tooltip, Typography } from "@mui/material";
import { TableHeaderStyles } from "./TableHeaderStyles";
import { useTableContext } from "@context/table.context";
import LoopIcon from '@mui/icons-material/Loop';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export const HeaderStatus = () => {
    const { loadingTableRows, errorTableRows } = useTableContext();

    if (!errorTableRows && !loadingTableRows) {
        return (<Box></Box>);
    }
    
    return (
        <Box sx={{
            ...TableHeaderStyles.status,
            backgroundColor: loadingTableRows ? "#198751" : "#f23737",
        }}>
            {
                loadingTableRows && (
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <LoopIcon sx={{ color: "#f1f1f1", fontSize: "1em" }} />
                        <Typography variant="body2" sx={{ color: "#f1f1f1" }}>
                            Cargando Resultados
                        </Typography>
                    </Box>
                )
            }
            {
                errorTableRows && (
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <PriorityHighIcon sx={{ color: "#f1f1f1", fontSize: "1em" }} />
                        <Tooltip title="Mensaje de error">
                            <Typography sx={{ color: "#f1f1f1" }}>
                                {errorTableRows?.description}
                            </Typography>
                        </Tooltip>
                    </Box>
                )
            }
        </Box>
    );
}