import { TableBody } from "@mui/material";
import { ReactNode } from "react";
import { CustomTableStyles } from "./CustomTableStyles";

interface Props {
    children: ReactNode
}

export const CustomTableBody = ({ children }: Props) => {
    return (
        <TableBody sx={CustomTableStyles.body}>
            {children}
        </TableBody>
    );
}