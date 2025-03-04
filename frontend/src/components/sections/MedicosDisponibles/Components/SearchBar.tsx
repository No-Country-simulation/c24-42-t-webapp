import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarStyles } from "./SearchBarStyles";

const SearchBar = () => {
  return (
    <Box
      sx={{
        gap: "0.5rem",
      }}
    >
      <Typography sx={SearchBarStyles.label}> Buscar </Typography>
      <Box
        sx={SearchBarStyles.container}
      >
        <TextField
          type="text"
          placeholder="Buscar doctor"
          sx={SearchBarStyles.input}
        />
        <Button variant="contained" sx={SearchBarStyles.button}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
};
export default SearchBar;
