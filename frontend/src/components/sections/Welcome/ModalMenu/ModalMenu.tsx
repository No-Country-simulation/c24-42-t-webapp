import { useModalStore } from "@store/modal.store";
import { ModalOperation } from "@tipos/store";
import { ReactNode } from "react";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import SignUp from "./SignUp/SignUp";

export default function ModalMenu() {
    const modalDataOperation = useModalStore((state) => state.modalData.operation);

    const CONTENT_MAP: Record<ModalOperation, ReactNode> = {
        "menu": <Menu />,
        "sign up": <SignUp />,
        "login": <Login />
    };
    return (
        <>
            {
                CONTENT_MAP[modalDataOperation]
            }
        </>
    );
}