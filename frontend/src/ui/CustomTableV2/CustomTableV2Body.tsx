import { useTableContext } from "@context/table.context";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const CustomTableV2Body = ({ children }: Props) => {
    const { dataRows } = useTableContext();
    return (
        <TableBody>
            {
                dataRows.length === 0
                    ? (
                        <TableRow>
                            <TableCell align="center">---</TableCell>
                            <TableCell align="center">---</TableCell>
                            <TableCell align="center">---</TableCell>
                        </TableRow>
                    )
                    : children
            }
        </TableBody>
    );
}