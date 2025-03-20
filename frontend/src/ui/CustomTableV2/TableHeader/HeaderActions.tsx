import { Box, IconButton, Tooltip } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { useTableContext } from "@context/table.context";

export const HeaderActions = () => {
    const { loadingTableRows, handleAdd, refetchRows } = useTableContext();
    const handleRefetch = () => {
        if (refetchRows) {
            refetchRows();
        }
    }
    const handleAddNewItem = () => {
        if (handleAdd) {
            handleAdd();
        }
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {
                handleAdd !== null && (
                    <Tooltip title="Refrescar tabla">
                        <IconButton aria-label="add item button" sx={{ color: "#f1f1f1" }} onClick={handleAddNewItem} disabled={loadingTableRows}>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                )
            }
            <Tooltip title="Añadir un nuevo item">
                <IconButton onClick={handleRefetch} aria-label="refresh button" sx={{ color: "#f1f1f1" }} disabled={loadingTableRows}>
                    <RefreshIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}