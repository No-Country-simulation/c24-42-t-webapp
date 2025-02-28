import { Typography } from "@mui/material";
import { FooterStyle } from "../FooterStyle";
import { Anchor } from "@ui/Anchor/Anchor";
import { LinkMetaData } from "@tipos/component";

export const LinkFooter = ({to, ariaLabel, titulo}: LinkMetaData) => {
    return (
        <Anchor to={to} ariaLabel={ariaLabel}>
            <Typography
                variant="subtitle1"
                sx={FooterStyle.footerLink}
            >
                {titulo}
            </Typography>
        </Anchor>
    );
}