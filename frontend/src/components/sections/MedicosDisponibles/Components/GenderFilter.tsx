import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface GenderFilterProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Componente para seleccionar el género del doctor
 *
 * @param onChange - Función que se ejecuta cuando cambia la selección
 */
const GenderFilter = ({ onChange }: GenderFilterProps) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Género del doctor
      </Typography>

      {/* Grupo de radio buttons */}
      <RadioGroup aria-label="género del doctor" onChange={onChange} row>
        {/* Opción: Hombre */}
        <FormControlLabel
          value="hombre"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#4caf50", // Color verde cuando está seleccionado
                },
              }}
            />
          }
          label="Hombre"
        />

        {/* Opción: Mujer */}
        <FormControlLabel
          value="mujer"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#4caf50", // Color verde cuando está seleccionado
                },
              }}
            />
          }
          label="Mujer"
        />
      </RadioGroup>
    </Box>
  );
};

export default GenderFilter;
