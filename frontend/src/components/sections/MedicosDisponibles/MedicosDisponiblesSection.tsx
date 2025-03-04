import { CustomButton } from "@ui/CustomButton/CustomButton";
import { Box, Typography } from "@mui/material";
import doctorsData from "./doctorsData.json";
import { useState, useEffect } from "react";
import { MedicosDisponiblesStyles } from "./MedicosDisponiblesStyles";
import SearchBar from "./Components/SearchBar";
import DoctorCard from "./Components/DoctorCard";
import Filters from "./Components/Filters";
import ModalMenu from "../Welcome/ModalMenu/ModalMenu";
import CustomModal from "@ui/CustomModal/CustomModal";
import { Doctor } from "@tipos/types";

export const MedicosDisponiblesSection = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  return (
    <>
      <Box sx={{ minHeight: "calc(100vh - 90px)", display: "flex" }}>
        {/* Box Izquierdo - Container */}
        <Box sx={MedicosDisponiblesStyles.asideContainer}>
          <SearchBar />
          {/* Box - Filtros */}
          <Filters />
          {/* Boton - Mostrar Doctores */}
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
          >
            <CustomButton>
              {/* OnClick={} debería pedir los doctores teniendo en cuenta los filtros. */}
              <Typography
                fontFamily="Inria Sans Bold"
                textTransform="none"
                fontSize={"1.4rem"}
              >
                Mostrar Doctores
              </Typography>
            </CustomButton>
          </Box>
        </Box>

        {/* Box Derecho - Grid Doctores */}
        <Box sx={MedicosDisponiblesStyles.gridContainer}>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </Box>
      </Box>
      <CustomModal>
        <ModalMenu />
      </CustomModal>
    </>
  );
};
