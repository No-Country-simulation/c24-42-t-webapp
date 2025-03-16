import { UserRole, UserData } from "@tipos/store";
import { JwtData } from "@tipos/types";
import { jwtDecode } from "jwt-decode";
import { create, StateCreator } from "zustand";
import { persist } from 'zustand/middleware';

interface UserStoreState {
    userData: UserData | null;
}

interface Actions {
    isLogged: () => boolean,
    hasRole: (role: UserRole) => boolean,
    setUserData: (data: UserData) => void,
    saveToken: (token: string) => void,
    getUserDashboardURL: () => string,
    closeSession: () => void,
    getToken: () => string,
    isTokenExpired: () => boolean
}

type UserStoreType = UserStoreState & Actions;

const userApi: StateCreator<UserStoreType> =
    (set, get) => ({
        userData: null,
        hasRole: (role: UserRole) => {
            return get().userData?.role === role;
        },
        isLogged: () => {
            return (localStorage.getItem("token")) !== null;
        },
        saveToken: (token) => {
            localStorage.setItem("token", token);
        },
        setUserData: (data) => {
            set({
                userData: { ...data }
            });
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
        closeSession: () => {
            localStorage.clear();
        },
        getToken: () => {
            return localStorage.getItem("token") || "";
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
        }
    });

export const useUserStore = create(
    persist(userApi,
        {
            name: 'user-storage',
            partialize: (state) => ({ userData: state.userData })
        }
    )
);