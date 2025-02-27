import CustomModal from "@ui/CustomModal/CustomModal";
import { lazy, Suspense } from "react";
import { ContentBox } from "./ContentBox/ContentBox";
import { MainBox } from "./MainBox/MainBox";
const ModalMenu = lazy(() => import("./ModalMenu/ModalMenu"));

export const Welcome = () => {
    return (
        <>
            <MainBox />
            <ContentBox />
            <CustomModal>
                <Suspense>
                    <ModalMenu />
                </Suspense>
            </CustomModal>
        </>
    );
}