import { Box, Typography } from "@mui/material";
import { FooterStyle } from "../FooterStyle";
import { LinkFooter } from "./LinkFooter";
import { LINKS } from "./LINKS";

export const LinkSection = () => {
    return (
        <Box sx={FooterStyle.footerLinks}>
            {
                LINKS.map((section,) => (
                    <Box key={section.id} sx={FooterStyle.footerLinksSection}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={FooterStyle.footerLinksSectionTitle}
                        >
                            {section.title}
                        </Typography>
                        <Box>
                            {
                                section.links.map((link, index) => (
                                    <LinkFooter key={index} {...link} />
                                ))
                            }
                        </Box>
                    </Box>
                ))
            }
        </Box>
    );
}