import { Box, IconButton, Tooltip } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { useTableContext } from "@context/table.context";

export const HeaderActions = () => {
    const { refetchRows, loadingTableRows } = useTableContext();
    const handleAdd = null;
    const handleRefetch = () => {
        if (refetchRows) {
            refetchRows();
        }
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {
                handleAdd !== null && (
                    <Tooltip title="Refrescar tabla">
                        <IconButton aria-label="add item button" sx={{ color: "#f1f1f1" }}>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                )
            }
            <Tooltip title="Añadir un nuevo item">
                <IconButton onClick={handleRefetch} aria-label="refresh button" sx={{ color: "#f1f1f1" }} disabled={refetchRows === null || loadingTableRows}>
                    <RefreshIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}