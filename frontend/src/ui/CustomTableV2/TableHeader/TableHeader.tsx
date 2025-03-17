import { Box } from "@mui/material"
import { HeaderActions } from "./HeaderActions";
import { TableHeaderStyles } from "./TableHeaderStyles";
import { HeaderStatus } from "./HeaderStatus";

export const TableHeader = () => {
    return (
        <Box sx={TableHeaderStyles.container}>
            <Box></Box>
            <HeaderStatus />
            <HeaderActions />
        </Box>
    );
}