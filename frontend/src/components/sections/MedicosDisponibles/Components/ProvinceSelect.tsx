import { Typography, Box } from "@mui/material";

/**
 * Props que recibe el componente ProvinceSelect
 */
interface ProvinceSelectProps {
  // Función opcional que se ejecuta cuando cambia la selección
  onChange?: (value: string) => void;
}

/**
 * Componente ProvinceSelect
 *
 * Muestra un dropdown con las provincias de Argentina
 * y notifica al componente padre cuando el usuario selecciona una.
 */
const ProvinceSelect: React.FC<ProvinceSelectProps> = ({ onChange }) => {
  /**
   * Maneja el cambio de selección en el dropdown
   *
   * @param event - Evento de cambio del select
   */
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Obtenemos el valor seleccionado
    const selectedValue = event.target.value;

    // Si existe la función onChange, la llamamos con el valor
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <Box>
      {/* Título del selector */}
      <Typography sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Provincia
      </Typography>

      {/* Dropdown de provincias */}
      <select
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#e8f5e9",
          appearance: "auto", // Mantiene la apariencia nativa del select
        }}
        onChange={handleChange}
        aria-label="Seleccionar provincia"
      >
        {/* Opción por defecto (placeholder) */}
        <option value="" disabled selected>
          Seleccionar provincia
        </option>

        {/* Lista de provincias de Argentina */}
        <option value="buenos_aires">Buenos Aires</option>
        <option value="caba">Ciudad Autónoma de Buenos Aires</option>
        <option value="catamarca">Catamarca</option>
        <option value="chaco">Chaco</option>
        <option value="chubut">Chubut</option>
        <option value="cordoba">Córdoba</option>
        <option value="corrientes">Corrientes</option>
        <option value="entre_rios">Entre Ríos</option>
        <option value="formosa">Formosa</option>
        <option value="jujuy">Jujuy</option>
        <option value="la_pampa">La Pampa</option>
        <option value="la_rioja">La Rioja</option>
        <option value="mendoza">Mendoza</option>
        <option value="misiones">Misiones</option>
        <option value="neuquen">Neuquén</option>
        <option value="rio_negro">Río Negro</option>
        <option value="salta">Salta</option>
        <option value="san_juan">San Juan</option>
        <option value="san_luis">San Luis</option>
        <option value="santa_cruz">Santa Cruz</option>
        <option value="santa_fe">Santa Fe</option>
        <option value="santiago_del_estero">Santiago del Estero</option>
        <option value="tierra_del_fuego">Tierra del Fuego</option>
        <option value="tucuman">Tucumán</option>
      </select>
    </Box>
  );
};

export default ProvinceSelect;
