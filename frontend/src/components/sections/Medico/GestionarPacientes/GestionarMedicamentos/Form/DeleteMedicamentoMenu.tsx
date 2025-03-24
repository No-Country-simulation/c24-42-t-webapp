import { useTableContext } from "@context/table.context";
import { deleteMedicamento } from "@services/deleteMedicamento";
import { useModalStore } from "@store/modal.store";
import { useUserStore } from "@store/user.store";
import { CustomError } from "@tipos/types";
import { ConfirmDelete } from "@ui/ConfirmDelete.tsx/ConfirmDelete";
import { showSonnerToast } from "@utils/showSonnerToast";
import { useState } from "react";

export const DeleteMedicamentoMenu = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<CustomError>(null);
    const { id: medicamentoId } = useModalStore(state => state.modalData.data);
    const closeModal = useModalStore(state => state.closeModal);
    const token = useUserStore(state => state.getToken)();
    const { removeRow, handleSetError } = useTableContext();

    const handleClick = async () => {
        setLoading(true);
        setError(null);
        handleSetError(null);
        const response = await deleteMedicamento({ medicamentoId, token, setError });
        if (response) {
            const { status } = response;
            showSonnerToast({
                title: status,
                description: "Se elimino correctamente el medicamento seleccionado",
                type: "success"
            });
            removeRow(medicamentoId);
            closeModal();
        }
        setLoading(false)
    };

    return (
        <ConfirmDelete loading={loading} error={error} handleClick={handleClick} description="¿Estas seguro de eliminar este medicamento?" />
    );
}