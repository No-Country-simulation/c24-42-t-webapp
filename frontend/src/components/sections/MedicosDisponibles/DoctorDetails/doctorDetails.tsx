import { Box, Typography, Stack } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import avatarSvg from "../avatar-svgrepo-com.svg";
import { DoctorDetailsStyles } from "./doctorDetailsStyles";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Icons, Characteristics, Specialties } from "./Datos";
import CustomModal from "@ui/CustomModal/CustomModal";
import ModalMenu from "../../Welcome/ModalMenu/ModalMenu";
import { useModalStore } from "@store/modal.store";
import { useNavigate } from "react-router";
import { useUserStore } from "@store/user.store";

export const DoctorDetails = () => {
    const setModalData = useModalStore((state) => state.setModalData);
    const isLogged = useUserStore(state => state.isLogged);
    const isUserLogged = isLogged();
    const navigate = useNavigate();

    const agendaRedirect = () => {
        if(isUserLogged) {
            navigate("/agendar-cita");
        } else{
            setModalData({
                showModal: true,
                title: "¿Querés agendar una cita?",
                operation: "menu"
            });
        }
    }

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={DoctorDetailsStyles.container}>
                    <Box sx={DoctorDetailsStyles.left}>
                        <Box sx={DoctorDetailsStyles.avatarContainer}>
                            <img src={avatarSvg} alt="Doctor Avatar" width="300" height="300" />
                        </Box>
                        <Box sx={DoctorDetailsStyles.socialCont}>
                            {Icons.map(({ Icon, ariaLabel, to }, index) => (
                                <Anchor key={index} to={to} ariaLabel={ariaLabel} target="_blank">
                                    <CustomButton sx={DoctorDetailsStyles.buttonSocial}>
                                        {Icon}
                                    </CustomButton>
                                </Anchor>
                            ))}
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography fontWeight="bold" variant="h4">$100 - $350</Typography>
                            <Typography variant="h6" color="#676767">Online - Presencial</Typography>
                        </Box>
                        <CustomButton sx={{ width: "200px" }} onClick={agendaRedirect}>
                            <Typography textTransform="none" fontSize="22px">Agendar cita</Typography>
                        </CustomButton>

                        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                            {Characteristics.map((characteristic, index) => (
                                <Typography variant="h6" color="#198751" style={{marginBottom: "10px"}} key={index} sx={DoctorDetailsStyles.contTypo}>{characteristic}</Typography>
                            ))}
                        </Stack>
                    </Box>
                    <Box sx={DoctorDetailsStyles.right}>
                        <Box sx={DoctorDetailsStyles.nameSpec}>
                            <Typography variant="h3" fontWeight="bold">Dra. Annah Ray</Typography>
                            <Typography variant="h5" color="#454545">Especialista en neurociencia</Typography>
                        </Box>
                        <Box sx={{ maxWidth: "400px" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <MyLocationIcon sx={{ marginRight: "4px" }} />
                                <Typography variant="h5">Buenos Aires</Typography>
                            </Box>
                            <Typography variant="h6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa
                                tempore suscipit esse provident doloremque aspernatur voluptatibus officia
                                voluptate dolores, aliquid magni reiciendis sit dolorem nisi explicabo magnam
                                facere necessitatibus.
                            </Typography>
                        </Box>
                        <Box sx={DoctorDetailsStyles.specialtyCont}>
                            <Typography variant="h4" fontWeight="bold" marginBottom="5px">Especialidades</Typography>
                            <Stack direction="row" spacing={2} flexWrap="wrap">
                                {Specialties.map((specialty, index) => (
                                    <Typography variant="h6" color="#198751" style={{marginBottom: "10px"}} key={index} sx={DoctorDetailsStyles.contTypo}>{specialty}</Typography>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <CustomModal>
                <ModalMenu />
            </CustomModal>
        </>
    )
};