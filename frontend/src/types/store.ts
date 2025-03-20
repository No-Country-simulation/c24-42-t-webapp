export type ModalOperation = "menu" | "login" | "sign up" | "create_medico";

export interface ModalData {
    title: string,
    showModal: boolean,
    operation?: ModalOperation,
    redirect?: string | null,
}


export enum UserRole {
    ADMIN = "ADMIN",
    PACIENTE = "PACIENTE",
    MEDICO = "MEDICO"
}

export interface UserData {
    id: string
    email: string
    role: UserRole
}