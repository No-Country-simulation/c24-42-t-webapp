import { Box } from "@mui/material";
import FilterChips from "./FilterChips";
import ProvinceSelect from "./ProvinceSelect/ProvinceSelect";
import GenderFilter from "./GenderFilter";
import SpecialtyFilter from "./SpecialtyFilter";
import { useFilters } from "../Hooks/useFilters";

const Filters = () => {
  // Hook personalizado para manejar toda la lógica de filtros
  const {
    selectedFilters,
    handleRemoveFilter,
    handleProvinceChange,
    handleGenderChange,
    handleSpecialtyChange,
  } = useFilters([
    {
      id: "1",
      label: "Masculino",
      type: "gender",
      value: "male",
    },
    {
      id: "2",
      label: "Buenos Aires",
      type: "province",
      value: "buenos_aires",
    },
    {
      id: "3",
      label: "Psiquiatra",
      type: "specialty",
      value: "psiquiatra",
    },
  ]);

  // Renderización del componente
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
      {/* Chips de filtros seleccionados */}
      <FilterChips filters={selectedFilters} onRemove={handleRemoveFilter} />

      {/* Opciones de filtrado */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <ProvinceSelect onChange={handleProvinceChange} />
        <GenderFilter onChange={handleGenderChange} />
        <SpecialtyFilter />
      </Box>
    </Box>
  );
};

export default Filters;
