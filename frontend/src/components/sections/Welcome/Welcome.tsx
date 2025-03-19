import CustomModal from "@ui/CustomModal/CustomModal";
import { ContentBox } from "./ContentBox/ContentBox";
import { MainBox } from "./MainBox/MainBox";
import ModalMenu from "./ModalMenu/ModalMenu";
import { useModalStore } from "@store/modal.store";
import { Toaster } from "sonner";

export const Welcome = () => {
    const showModal = useModalStore((state) => state.modalData.showModal);

    return (
        <>
            <MainBox />
            <ContentBox />
            {
                showModal && (
                    <CustomModal>
                        <ModalMenu />
                    </CustomModal>
                )
            }
            <Toaster />
        </>
    );
}