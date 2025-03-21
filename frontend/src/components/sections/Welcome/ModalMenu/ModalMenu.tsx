import { useModalStore } from "@store/modal.store";
import { ModalOperation } from "@tipos/store";
import { ReactNode } from "react";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import SignUp from "./SignUp/SignUp";

type ModalMenuContent = Extract<ModalOperation, "menu" | "sign_up" | "login" >

export default function ModalMenu() {
    const modalDataOperation = useModalStore((state) => state.modalData.operation) || "menu";

    const CONTENT_MAP: Record<ModalMenuContent, ReactNode> = {
        "menu": <Menu />,
        "sign_up": <SignUp />,
        "login": <Login />
    };
    return (
        <>
            {
                CONTENT_MAP[modalDataOperation as unknown as ModalMenuContent]
            }
        </>
    );
}