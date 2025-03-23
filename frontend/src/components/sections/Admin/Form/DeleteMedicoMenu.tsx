import { useTableContext } from "@context/table.context";
import { deleteMedico } from "@services/deleteMedico";
import { useModalStore } from "@store/modal.store";
import { useUserStore } from "@store/user.store";
import { CustomError } from "@tipos/types";
import { ConfirmDelete } from "@ui/ConfirmDelete.tsx/ConfirmDelete";
import { showSonnerToast } from "@utils/showSonnerToast";
import { useState } from "react";

export const DeleteMedicoMenu = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<CustomError>(null);
    const { id: medicoId } = useModalStore(state => state.modalData.data);
    const closeModal = useModalStore(state => state.closeModal);
    const token = useUserStore(state => state.getToken)();
    const { handleSetError, removeRow } = useTableContext();

    const handleClick = async () => {
        setLoading(true);
        setError(null);
        handleSetError(null);
        const response = await deleteMedico({ medicoId, token, setError });
        if (response) {
            const { message } = response;
            showSonnerToast({
                title: message,
                description: "Se elimino correctamente el medico seleccionado",
                type: "success"
            });
            removeRow(medicoId);
            closeModal();
        }
        setLoading(false)
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ConfirmDelete loading={loading} error={error} handleClick={handleClick} buttonLabel="Eliminar Médico" description="¿Estas seguro de eliminar este médico?" />
        </form>
    );
}