import { SxProps } from "@mui/material";

export const FooterStyle: Record<string, SxProps> = {
  footerContainer: {
    width: "100%",
    backgroundColor: "#f1f1f1",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  footerTitle: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  footerLinksSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  footerLinksSectionTitle: {
    color: "#198751",
  },
  footerSocial: {
    textAlign: "center",
    color: "#198751",
  },
};
