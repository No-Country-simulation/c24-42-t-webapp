import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarStyles } from "./SearchBarStyles";
import { Label } from "../Label/Label";

const SearchBar = () => {
  return (
    <Box
      sx={SearchBarStyles.container}
    >
      <Label label="Buscar" />
      <Box
        sx={SearchBarStyles.inputContainer}
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
