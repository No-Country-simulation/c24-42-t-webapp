import { Typography } from "@mui/material";
import { LabelStyles } from "./LabelStyles";

interface Props { label: string }

export const Label = ({ label }: Props) => {
    return (
        <Typography sx={LabelStyles}>{label}</Typography>
    );
}