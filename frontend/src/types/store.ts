export type ModalOperation = "menu" | "login" | "sign up";

export interface ModalData {
    title: string,
    showModal: boolean,
    operation: ModalOperation,
    redirect?: string | null,
}


export enum UserRole {
    ADMIN,
    PACIENTE,
    MEDICO
}

export interface UserData {
    id: string;
    name: string;
    role: UserRole
}