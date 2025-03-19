import { UserRole, UserData } from "@tipos/store";
import { JwtData } from "@tipos/types";
import { jwtDecode } from "jwt-decode";
import { create, StateCreator } from "zustand";
import { persist } from 'zustand/middleware';

interface UserStoreState {
    userData: UserData | null;
}

interface Actions {
    setUserData: (data: UserData) => void,
    hasRole: (role: UserRole) => boolean,
    closeSession: () => void,
    isLogged: () => boolean,
    isTokenExpired: () => boolean,
    saveToken: (token: string) => void,
    saveUserData: (token: string) => void,
    getToken: () => string,
    getUserDashboardURL: () => string,
    getUserId: () => string
}

type UserStoreType = UserStoreState & Actions;

const userApi: StateCreator<UserStoreType> =
    (set, get) => ({
        userData: null,
        closeSession: () => {
            localStorage.clear();
        },
        hasRole: (role: UserRole) => {
            return get().userData?.role === role;
        },
        isLogged: () => {
            return (localStorage.getItem("token")) !== null;
        },
        isTokenExpired: () => {
            const token = localStorage.getItem("token") || null;
            if (token) {
                const decoded: JwtData = jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
                if (decoded.exp <= currentTime) {
                    return true
                }
                return false;
            }
            return true;
        },
        saveToken: (token) => {
            localStorage.setItem("token", token);
        },
        setUserData: (data) => {
            set({
                userData: { ...data }
            });
        },
        saveUserData: (token: string) => {
            get().saveToken(token);
            const decoded: JwtData = jwtDecode(token);
            const role = UserRole[decoded.role];
            let id = "";
            if (role === "ADMIN" && decoded.adminId) id = decoded.adminId;
            if (role === "MEDICO" && decoded.medicId) id = decoded.medicId;
            if (role === "PACIENTE" && decoded.patientId) id = decoded.patientId;

            const userData = {
                email: decoded.sub,
                role,
                id
            };
            get().setUserData(userData);
        },
        getToken: () => {
            return localStorage.getItem("token") || "";
        },
        getUserDashboardURL: () => {
            const userData = get().userData;
            if (userData) {
                switch (userData.role) {
                    case UserRole.ADMIN:
                        return "/admin/dashboard";

                    case UserRole.MEDICO:
                        return "/medico/dashboard"

                    default:
                        return "/paciente/dashboard"
                }
            }
            return "/";
        },
        getUserId: () => { return get().userData?.id || "not_id" },
    });

export const useUserStore = create(
    persist(userApi,
        {
            name: 'user-storage',
            partialize: (state) => ({ userData: state.userData })
        }
    )
);