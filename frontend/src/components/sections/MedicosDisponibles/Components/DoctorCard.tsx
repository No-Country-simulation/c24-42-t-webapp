import { Box, Typography } from "@mui/material";
import DoctorAvatar from "../DoctorAvatar";
import { MedicosDisponiblesStyles } from "../MedicosDisponiblesStyles";
import { useNavigate } from "react-router";
import { DoctorData } from "@tipos/backendTypes";

interface DoctorCardProps {
  doctor: DoctorData;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { id, first_name, last_name, specialty, profile_img } = doctor;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/medico/${id}`);
  };
  return (
    <Box
      key={id}
      sx={MedicosDisponiblesStyles.doctorCard}
      onClick={handleClick}
    >
      <Box sx={MedicosDisponiblesStyles.avatarContainer}>
        <DoctorAvatar profile_img={profile_img} />
      </Box>
      <Typography fontFamily="Inria Sans Bold" fontSize="1.2rem">
        {first_name} {last_name}
      </Typography>
      <Typography fontSize="1rem" color="gray">
        {specialty}
      </Typography>
    </Box>
  );
};

export default DoctorCard;
