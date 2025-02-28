import { Box, IconButton, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { FooterStyle } from "../FooterStyle";
import { ICONS } from "./ICONS";

export const SocialSection = () => {
    return (
        <Box sx={FooterStyle.footerSocial}>
            <Typography sx={FooterStyle.footerSocialTitle} variant="subtitle1" fontWeight="bold">
                ¡SEGUINOS!
            </Typography>
            <Box sx={FooterStyle.footerIconsContainer}>
                {
                    ICONS.map(({ Icon, ariaLabel, to }, index) => (
                        <Anchor key={index} to={to} ariaLabel={ariaLabel} target="_blank">
                            <IconButton sx={FooterStyle.footerButton}>
                                {Icon}
                            </IconButton>
                        </Anchor>
                    ))
                }
            </Box>
        </Box>
    );
}