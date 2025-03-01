import { SxProps } from "@mui/material";

export const MedicosDisponiblesStyles: Record<string, SxProps> = {
  asideContainer: {
    width: "30%",
    padding: "1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
  },
  filterDisplay: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    justifyContent: "center",
    marginTop: "1rem",
  },
  filter: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem 1.25rem",
    backgroundColor: "#DDFBEB",
    color: "#198751",
    borderRadius: "25px",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
  },
  removeFilter: {
    padding: "4px",
    color: "#198751",
    "&:hover": {
      color: "#d32f2f",
      backgroundColor: "transparent",
    },
  },
  gridContainer: {
    width: "70%",
    padding: "1.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0",
  },
  doctorCard: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightgray",
    padding: "1.5rem 1rem",
    height: "100%",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#f9f9f9",
      boxShadow: "inset 0 0 0 1px #4caf50",
    },
  },
  avatarContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
};
