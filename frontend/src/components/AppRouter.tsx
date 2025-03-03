import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layout/Layout";
import { Welcome } from "./sections/Welcome/Welcome";
import { MedicosDisponiblesSection } from "./sections/MedicosDisponibles/MedicosDisponiblesSection";
import { AdminGuard, PacienteGuard, MedicoGuard } from "@routes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="*" element={<>ERROR 404: page not found</>} />
                    <Route path="/medicos-disponibles" element={<MedicosDisponiblesSection />} />
                    <Route path="/" element={<Welcome />} />
                    <Route element={<PacienteGuard />}>
                        <Route path="/paciente/dashboard" element={<>Dashboard</>} />
                        <Route path="/paciente/dashboard/settings" element={<>Settings</>} />
                        <Route path="/paciente/datos-diagnostico" element={<>Datos Diagnostico</>} />
                        <Route path="/paciente/historial-citas" element={<>Historial Citas</>} />
                    </Route>
                    <Route element={<AdminGuard />}>
                        <Route path="/adminO/dashboard" element={<>Dashboard</>} />
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