import { Container } from "@mui/material";
import { FooterStyle } from "./FooterStyle";
import { LinkSection } from "./LinkSection/LinkSection";
import { LogoSection } from "./LogoSection/LogoSection";
import { SocialSection } from "./SocialSection/SocialSection";

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={FooterStyle.footerContainer}
      maxWidth={false}
    >
      {/*1er Box - Logo y Title*/}
      <LogoSection />

      {/* 2do Box - Secciones */}
      <LinkSection />

      {/* 3er Box - Redes Sociales */}
      <SocialSection />
    </Container>
  );
};
