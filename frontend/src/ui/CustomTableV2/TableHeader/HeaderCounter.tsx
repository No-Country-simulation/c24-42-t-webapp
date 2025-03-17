import { useTableContext } from "@context/table.context";
import { Box, Tooltip, Typography } from "@mui/material";
import { TableHeaderStyles } from "./TableHeaderStyles";

export const HeaderCounter = () => {
    const { rowsCount } = useTableContext();
    return (
        <Box sx={TableHeaderStyles.counter}>
            <Tooltip title="Cantidad de resultados">
                <Typography variant="body2">
                    {rowsCount}
                </Typography>
            </Tooltip>
        </Box>
    );
}