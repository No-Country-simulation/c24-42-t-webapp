export type ModalOperation = "menu" | "login" | "sign up";

export interface ModalData {
    title: string,
    showModal: boolean,
    operation: ModalOperation
}