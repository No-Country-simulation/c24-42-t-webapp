import { Box, Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from "@mui/material";
import { provincias } from "./provincias";
import { ProvinceSelectStyles } from "./ProvinceSelectStyles";
import { Label } from "../Label/Label";

interface Props {
  onChange: (value: string) => void
}

const ProvinceSelect = ({ onChange }: Props) => {

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value as string;
    onChange(selectedValue);
  };

  return (
    <Box sx={ProvinceSelectStyles.containerSelect}>
      <Label label={"Provincia"} />

      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            provincias.map((provincia) => (
              <MenuItem key={provincia.value} value={provincia.value}>
                {provincia.label}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProvinceSelect;
