import { TableHead, TableRow, TableCell, Typography } from "@mui/material";
import { HeaderSchema } from "@tipos/types";

interface Props {
    headers: HeaderSchema[]
}

export const CustomTableV2Head = ({ headers }: Props) => {
    return (
        <TableHead>
            <TableRow>
                {
                    headers.map(({ id, title, width }) => {
                        const isActionsHeader = title === "actions";
                        return (
                            <TableCell key={id} align="center" sx={{ maxWidth: isActionsHeader ? width : "inherit" }}>
                                <Typography sx={{ color: "#726969" }}>
                                    {isActionsHeader ? "" : title}
                                </Typography>
                            </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableHead>
    );
}