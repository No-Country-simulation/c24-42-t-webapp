import { Box, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { FooterStyle } from "../FooterStyle";
import { Logo } from "../Logo";

export const LogoSection = () => {
    return (
        <Box sx={FooterStyle.footerTitle}>
            <Anchor
                to="#"
                ariaLabel="logo de la pagina web"
            >
                <Box display={"flex"} alignItems={"center"}>
                    <Logo />
                    <Typography>
                        MedicalAppointment
                    </Typography>
                </Box>
            </Anchor>
            <Typography variant="body2" color="textSecondary">
                © No Country 2025
            </Typography>
        </Box>
    );
}