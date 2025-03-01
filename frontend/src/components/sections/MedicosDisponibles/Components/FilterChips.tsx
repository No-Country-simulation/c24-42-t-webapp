import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MedicosDisponiblesStyles } from "../MedicosDisponiblesStyles";

/**
 * Interfaz que define la estructura de un filtro
 *
 * id: Identificador único del filtro
 * label: Texto que se muestra al usuario
 * type: Tipo de filtro (provincia, género, especialidad)
 * value: Valor interno usado para filtrar
 */
export interface FilterChip {
  id: string;
  label: string;
  type: "gender" | "specialty" | "province";
  value: string;
}

/**
 * Props que recibe el componente FilterChips
 */
interface FilterChipsProps {
  // Array de filtros seleccionados
  filters: FilterChip[];
  // Función que se ejecuta cuando se quiere eliminar un filtro
  onRemove: (id: string) => void;
}

/**
 * Componente FilterChips
 *
 * Muestra los filtros seleccionados como "chips" o "pastillas"
 * con un botón para eliminarlos.
 */
const FilterChips: React.FC<FilterChipsProps> = ({ filters, onRemove }) => {
  // Si no hay filtros, no mostramos nada
  if (filters.length === 0) {
    return null;
  }

  return (
    <Box sx={MedicosDisponiblesStyles.filterDisplay}>
      {/* Recorremos el array de filtros y mostramos cada uno */}
      {filters.map((filter) => (
        <Box key={filter.id} sx={MedicosDisponiblesStyles.filter}>
          {/* Texto del filtro */}
          {filter.label}

          {/* Botón para eliminar el filtro */}
          <IconButton
            onClick={() => onRemove(filter.id)}
            sx={MedicosDisponiblesStyles.removeFilter}
            aria-label={`Eliminar filtro ${filter.label}`}
          >
            <CloseIcon sx={{ fontSize: "1.2rem" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default FilterChips;
