import { useState } from "react";
import { FilterChip } from "../Components/FilterChips";

/**
 * Hook personalizado para manejar la lógica de filtros
 *
 * Este hook centraliza toda la lógica relacionada con la gestión de filtros:
 * - Añadir/eliminar filtros
 * - Manejar cambios en provincia, género y especialidad
 * - Validar filtros duplicados
 *
 * @param initialFilters - Filtros iniciales (opcional)
 * @returns Objeto con el estado de filtros y funciones para manipularlos
 */
export const useFilters = (initialFilters: FilterChip[] = []) => {
  // Estado para almacenar los filtros seleccionados por el usuario
  const [selectedFilters, setSelectedFilters] =
    useState<FilterChip[]>(initialFilters);

  /**
   * Elimina un filtro cuando el usuario hace clic en el botón X
   *
   * @param filterId - El ID único del filtro que se va a eliminar
   */
  const handleRemoveFilter = (filterId: string) => {
    // Creamos un nuevo array excluyendo el filtro que queremos eliminar
    const updatedFilters = selectedFilters.filter(
      (filter) => filter.id !== filterId
    );

    // Actualizamos el estado con el nuevo array de filtros
    setSelectedFilters(updatedFilters);

    console.log(`Filtro con ID ${filterId} eliminado`);
  };

  /**
   * Añade un nuevo filtro de provincia cuando el usuario selecciona una opción
   *
   * @param value - El valor (código) de la provincia seleccionada
   */
  const handleProvinceChange = (value: string) => {
    console.log("Provincia seleccionada:", value);

    // Paso 1: Verificar que se haya seleccionado una provincia válida
    if (!value) {
      console.log("No se seleccionó ninguna provincia");
      return; // Salimos de la función si no hay valor
    }

    // Paso 2: Verificar si esta provincia ya está en nuestros filtros
    // Recorremos el array de filtros buscando uno que coincida
    let provinciaYaSeleccionada = false;

    for (let i = 0; i < selectedFilters.length; i++) {
      const filtro = selectedFilters[i];
      // Si encontramos un filtro de tipo provincia con el mismo valor
      if (filtro.type === "province" && filtro.value === value) {
        provinciaYaSeleccionada = true;
        break; // Salimos del bucle porque ya encontramos coincidencia
      }
    }

    // Si la provincia ya está seleccionada, no hacemos nada
    if (provinciaYaSeleccionada) {
      console.log("Esta provincia ya está seleccionada");
      return;
    }

    // Paso 3: Obtener el nombre visible de la provincia desde el elemento HTML
    // Esto es necesario porque en el dropdown tenemos códigos (ej: "buenos_aires")
    // pero queremos mostrar el nombre completo (ej: "Buenos Aires")
    let nombreProvincia = value; // Por defecto usamos el valor

    // Buscamos el elemento <option> que tiene este valor
    const elementoOption = document.querySelector(`option[value="${value}"]`);

    // Si encontramos el elemento, usamos su texto como nombre
    if (elementoOption && elementoOption.textContent) {
      nombreProvincia = elementoOption.textContent;
    }

    // Paso 4: Crear un objeto para el nuevo filtro
    const nuevoFiltro: FilterChip = {
      // Creamos un ID único combinando el tipo y valor
      id: `province-${value}`,
      // El texto que se mostrará en el chip
      label: nombreProvincia,
      // El tipo de filtro (provincia, género, especialidad)
      type: "province",
      // El valor que usaremos para filtrar los datos
      value: value,
    };

    // Paso 5: Añadir el nuevo filtro al array existente
    // Creamos un nuevo array con todos los filtros anteriores + el nuevo
    const nuevosFiltros = [...selectedFilters, nuevoFiltro];

    // Paso 6: Actualizar el estado con el nuevo array
    setSelectedFilters(nuevosFiltros);

    console.log(`Filtro de provincia añadido: ${nombreProvincia}`);
  };

  /**
   * Maneja el cambio de selección de género
   *
   * @param event - El evento del cambio de radio button
   */
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Obtenemos el valor seleccionado (hombre o mujer)
    const genderValue = event.target.value;
    console.log("Género seleccionado:", genderValue);

    // Determinamos la etiqueta que mostraremos en el chip
    let genderLabel = "";
    if (genderValue === "hombre") {
      genderLabel = "Hombre";
    } else if (genderValue === "mujer") {
      genderLabel = "Mujer";
    }

    // Primero, eliminamos cualquier filtro de género existente
    const filtrosSinGenero = selectedFilters.filter(
      (filtro) => filtro.type !== "gender"
    );

    // Creamos el nuevo filtro de género
    const filtroGenero: FilterChip = {
      id: `gender-${genderValue}`,
      label: genderLabel,
      type: "gender",
      value: genderValue,
    };

    // Actualizamos el estado con los filtros anteriores (sin género) + el nuevo filtro
    const nuevosFiltros = [...filtrosSinGenero, filtroGenero];
    setSelectedFilters(nuevosFiltros);

    console.log(`Filtro de género actualizado a: ${genderLabel}`);
  };

  /**
   * Maneja el cambio de selección de especialidad
   *
   * @param event - El evento del cambio del select
   */
  const handleSpecialtyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    console.log("Especialidad seleccionada:", value);

    // Solo procesamos si se seleccionó una especialidad válida
    if (!value || value === "default") {
      console.log("No se seleccionó ninguna especialidad válida");
      return;
    }

    // Inicializamos una variable para rastrear si encontramos la especialidad
    let especialidadYaSeleccionada = false;

    // Recorremos todos los filtros actuales para buscar coincidencias
    for (let i = 0; i < selectedFilters.length; i++) {
      const filtro = selectedFilters[i];
      // Comprobamos si este filtro es de tipo especialidad y tiene el mismo valor
      if (filtro.type === "specialty" && filtro.value === value) {
        // Si encontramos coincidencia, marcamos como verdadero y salimos del bucle
        especialidadYaSeleccionada = true;
        break; // No necesitamos seguir buscando
      }
    }

    // Si ya está seleccionada, no hacemos nada
    if (especialidadYaSeleccionada) {
      console.log("Esta especialidad ya está seleccionada");
      return;
    }

    // Obtenemos el texto visible de la opción seleccionada
    const opcionSeleccionada = event.target.options[event.target.selectedIndex];
    const nombreEspecialidad = opcionSeleccionada.textContent || value;

    // Creamos el nuevo filtro
    const nuevoFiltro: FilterChip = {
      id: `specialty-${value}`,
      label: nombreEspecialidad,
      type: "specialty",
      value: value,
    };

    // Añadimos el nuevo filtro a la lista
    setSelectedFilters([...selectedFilters, nuevoFiltro]);

    // Reseteamos el select al valor por defecto
    event.target.value = "default";

    console.log(`Filtro de especialidad añadido: ${nombreEspecialidad}`);
  };

  return {
    selectedFilters,
    handleRemoveFilter,
    handleProvinceChange,
    handleGenderChange,
    handleSpecialtyChange,
  };
};
