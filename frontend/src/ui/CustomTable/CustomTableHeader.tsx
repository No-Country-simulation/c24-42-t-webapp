import { TableHead, TableRow } from "@mui/material";
import { ReactNode } from "react";
import { CustomTableStyles } from "./CustomTableStyles";

interface Props {
    children: ReactNode
}

export const CustomTableHeader = ({ children }: Props) => {
    return (
        <TableHead sx={CustomTableStyles.header}>
            <TableRow>
                {children}
            </TableRow>
        </TableHead>
    );
}