import { ModalData } from "@tipos/store";
import { create, StateCreator } from "zustand";

interface ModalStoreState {
    modalData: ModalData
}

interface Actions {
    setModalData: (state: ModalData) => void,
    closeModal: () => void;
}

type ModalStoreType = ModalStoreState & Actions;

const modalApi: StateCreator<ModalStoreType> = (set) => ({
    modalData: {
        showModal: false,
        title: "",
        operation: "menu"
    },
    setModalData: (state) => {
        set(() => ({
            modalData: {
                ...state
            }
        }));
    },
    closeModal: () => {
        set(() => ({
            modalData: {
                showModal: false,
                title: "",
                operation: "menu"
            }
        }));
    }
});

export const useModalStore = create<ModalStoreType>(modalApi);