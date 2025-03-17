/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { ReactNode } from "react"
import { TableHeader } from "./TableHeader/TableHeader"

interface Props {
    headers: any[]
    showCount: boolean
    children: ReactNode
}

export const CustomTableV2 = ({ headers, children, showCount }: Props) => {
    return (
        <TableContainer sx={{ border: "1px solid #c1c1c1", borderRadius: "10px" }}>
            <TableHeader showCount={showCount} />
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            headers.map((item) => (
                                <TableCell key={item.id} align="center">
                                    <Typography sx={{ color: "#726969" }}>
                                        {item.title}
                                    </Typography>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    );
} 