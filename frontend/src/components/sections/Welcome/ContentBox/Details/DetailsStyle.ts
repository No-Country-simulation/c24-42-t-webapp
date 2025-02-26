import { SxProps } from "@mui/material";

export const DetailsStyle: Record<string, SxProps> = {
  rightContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 2,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "white",
    mb: 2,
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    paddingTop: 1,
    mb: 2,
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
  },
};
