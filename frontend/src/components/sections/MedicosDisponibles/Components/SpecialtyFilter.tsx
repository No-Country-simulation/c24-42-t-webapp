import { Box, Typography } from "@mui/material";

interface SpecialtyFilterProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Componente para seleccionar la especialidad del doctor
 *
 * @param onChange - Función que se ejecuta cuando cambia la selección
 */
const SpecialtyFilter = ({ onChange }: SpecialtyFilterProps) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Especialidad
      </Typography>

      {/* Dropdown de especialidades */}
      <select
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#e8f5e9",
          appearance: "auto",
        }}
        onChange={onChange}
        aria-label="Seleccionar especialidad"
      >
        <option value="default" disabled selected>
          Seleccionar especialidades
        </option>
        <option value="neurologo">Neurologo</option>
        <option value="psiquiatra">Psiquiatra</option>
        <option value="ortodoncista">Ortodoncista</option>
        <option value="cirujano">Cirujano</option>
        <option value="pediatra">Pediatra</option>
      </select>
    </Box>
  );
};

export default SpecialtyFilter;
