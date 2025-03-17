import { Table, TableContainer } from "@mui/material"
import { ReactNode } from "react"
import { TableHeader } from "./TableHeader/TableHeader"
import { CustomTableV2Body } from "./CustomTableV2Body"
import { CustomTableV2Head } from "./CustomTableV2Head"
import { HeaderSchema } from "@tipos/types"

interface Props {
    headers: HeaderSchema[]
    children: ReactNode
    showCount?: boolean
}

export const CustomTableV2 = ({ headers, children, showCount = false }: Props) => {
    return (
        <TableContainer sx={{ border: "1px solid #c1c1c1", borderRadius: "10px" }}>
            <TableHeader showCount={showCount} />
            <Table>
                <CustomTableV2Head headers={headers} />
                <CustomTableV2Body children={children} />
            </Table>
        </TableContainer>
    );
} 