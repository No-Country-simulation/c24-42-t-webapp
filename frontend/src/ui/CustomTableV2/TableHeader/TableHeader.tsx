import { Box } from "@mui/material"
import { HeaderCounter } from "./HeaderCounter";
import { HeaderActions } from "./HeaderActions";
import { TableHeaderStyles } from "./TableHeaderStyles";
import { HeaderStatus } from "./HeaderStatus";

interface Props {
    showCount?: boolean
}

export const TableHeader = ({ showCount = false }: Props) => {
    return (
        <Box sx={TableHeaderStyles.container}>
            {showCount ? <HeaderCounter /> : <Box></Box> }
            <HeaderStatus />
            <HeaderActions />
        </Box>
    );
}