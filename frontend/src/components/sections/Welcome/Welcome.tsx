import CustomModal from "@ui/CustomModal/CustomModal";
import { ContentBox } from "./ContentBox/ContentBox";
import { MainBox } from "./MainBox/MainBox";
import ModalMenu from "./ModalMenu/ModalMenu";

export const Welcome = () => {
    return (
        <>
            <MainBox />
            <ContentBox />
            <CustomModal>
                <ModalMenu />
            </CustomModal>
        </>
    );
}