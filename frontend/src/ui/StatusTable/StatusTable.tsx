import { Box, Typography } from "@mui/material";
import { StatusTableStyles } from "./StatusTableStyles";

interface Props {
    color: string,
    label: string
    tableWithTabs?: boolean
}

export const StatusTable = ({ color, label, tableWithTabs = false }: Props) => {
    return (
        <Box>
            <Box sx={{ ...StatusTableStyles.header, borderTopLeftRadius: tableWithTabs ? "0" : "10" }}></Box>
            <Box sx={StatusTableStyles.body}>
                <Typography variant="h5" color={color}>{label}</Typography>
            </Box>
        </Box>
    );
}