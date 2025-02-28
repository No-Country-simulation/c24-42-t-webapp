import { Box, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { FooterStyle } from "../FooterStyle";

export const LogoSection = () => {
    return (
        <Box sx={FooterStyle.footerTitle}>
            <Anchor
                to="#"
                ariaLabel="logo de la pagina web"
            >
                {/* Appointment iría verde oscuro, falta logo */}
                MedicalAppointment
            </Anchor>
            <Typography variant="body2" color="textSecondary">
                © No Country 2025
            </Typography>
        </Box>
    );
}