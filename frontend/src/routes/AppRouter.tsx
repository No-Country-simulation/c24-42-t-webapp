import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@components/layout/Layout";
import { Welcome } from "@components/sections/Welcome/Welcome";
import { MedicosDisponiblesSection } from "@components/sections/MedicosDisponibles/MedicosDisponiblesSection";
import { AgendaTuCitaSection } from "@components/sections/AgendaTuCita/AgendaTuCitaSection";
import { PacienteGuard } from "@routes/PacienteGuard";
import { AdminGuard } from "@routes/AdminGuard";
import { MedicoGuard } from "@routes/MedicoGuard";
import { useEffect } from "react";
import { useUserStore } from "@store/user.store";
import { NotFound } from "@components/layout/NotFound/NotFound";
import { DoctorDetails } from "@components/sections/MedicosDisponibles/DoctorDetails/doctorDetails";
import { UserRole } from "@tipos/store";
import { DashboardAdmin } from "@components/sections/DashboardAdmin/DashboardAdmin";
import { DashboardPatient } from "@components/sections/DashboardPatient/DashboardPatient";

export const AppRouter = () => {
    const setUserData = useUserStore(state => state.setUserData);
    useEffect(() => {
        setUserData({
            id: "69",
            name: "User Unknow",
            role: UserRole.ADMIN
        });
        localStorage.setItem("token","123123123asdasdasdasdasdasd");
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/medicos-disponibles" element={<MedicosDisponiblesSection />} />
                    <Route path="/medico/:id" element={<DoctorDetails />} />
                    <Route path="/agendar-cita" element={<AgendaTuCitaSection />} />
                    <Route path="/" element={<Welcome />} />
                    <Route element={<PacienteGuard />}>
                        <Route path="/paciente/dashboard" element={<DashboardPatient />} />
                        <Route path="/paciente/dashboard/settings" element={<>Settings</>} />
                        <Route path="/paciente/datos-diagnostico" element={<>Datos Diagnostico</>} />
                        <Route path="/paciente/historial-citas" element={<>Historial Citas</>} />
                        <Route path="/paciente/agendar-cita" element={<AgendaTuCitaSection />} />
                    </Route>
                    <Route element={<AdminGuard />}>
                        <Route path="/admin/dashboard" element={<DashboardAdmin/>} />
                        <Route path="/admin/settings" element={<DashboardAdmin/>} />
                    </Route>
                    <Route element={<MedicoGuard />}>
                        <Route path="/medico/dashboard" element={<>Dashboard</>} />
                        <Route path="/medico/historial-citas" element={<>Historial Citas</>} />
                        <Route path="/medico/historial-medico-pacientes" element={<>Historial Medico Pacientes</>} />
                        <Route path="/medico/agenda" element={<>Agenda</>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}