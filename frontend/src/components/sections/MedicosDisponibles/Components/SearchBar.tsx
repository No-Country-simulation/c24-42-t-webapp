import { CustomButton } from "@ui/CustomButton/CustomButton";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}> Buscar </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Buscar doctor"
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#e8f5e9",
          }}
        />
        <CustomButton
          sx={{
            padding: "1rem",
            backgroundColor: "#2e7d32",
            border: "1px solid #ccc",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#1b5e20",
            },
          }}
        >
          <SearchIcon />
        </CustomButton>
      </Box>
    </Box>
  );
};
export default SearchBar;
