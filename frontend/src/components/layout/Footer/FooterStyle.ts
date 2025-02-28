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
  },
  footerLinksSectionTitle: {
    color: "#198751",
    fontSize: "18px",
  },
  footerSocial: {
    textAlign: "center",
  },
  footerSocialTitle: {
    color: "#198751",
    fontSize: "18px"
  },
  footerLink: {
    fontSize: "16px",
    lineHeight: "1.2"
  },
  footerIconsContainer: {
    display: "flex",
    gap: "0.5rem"
  },
  footerButton: {
    backgroundColor: "#198751",
    "&:hover": {
      backgroundColor: "#19875180",
    }
  },
  footerIcons: {
    color: "#f1f1f1",
    borderRadius: "50%",
  }
};
