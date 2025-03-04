import { CustomButton } from "@ui/CustomButton/CustomButton";
import { Box, Typography } from "@mui/material";
import { MedicosDisponiblesStyles } from "./MedicosDisponiblesStyles";
import DoctorCard from "./Components/DoctorCard";
import Filters from "./Components/Filters";
import ModalMenu from "../Welcome/ModalMenu/ModalMenu";
import CustomModal from "@ui/CustomModal/CustomModal";
import SearchBar from "./Components/SearchBar/SearchBar";
import { DOCTORS } from "./doctorsData";

export const MedicosDisponiblesSection = () => {
  return (
    <>
      <Box sx={MedicosDisponiblesStyles.container}>
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
          {
            DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          }
        </Box>
      </Box>
      <CustomModal>
        <ModalMenu />
      </CustomModal>
    </>
  );
};
