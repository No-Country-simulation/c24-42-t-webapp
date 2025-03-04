import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Option } from "@tipos/component";
import { ChangeEvent } from "react";
import { Label } from "./Label/Label";

const opcionesMedicas: Option[] = [
  { value: "neurologo", label: "Neurologo" },
  { value: "psiquiatra", label: "Psiquiatra" },
  { value: "ortodoncista", label: "Ortodoncista" },
  { value: "cirujano", label: "Cirujano" },
  { value: "pediatra", label: "Pediatra" },
];

const SpecialtyFilter = () => {

  return (
    <Box>
      <Label label="Especialidad" />
      <FormControl fullWidth>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          aria-label="Seleccionar especialidad"
        >
          {
            opcionesMedicas.map(({ value, label }) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default SpecialtyFilter;
