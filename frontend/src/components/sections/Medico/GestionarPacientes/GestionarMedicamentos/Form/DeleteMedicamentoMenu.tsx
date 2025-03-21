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

    const handleClick = async () => {
        setLoading(true);
        const response = await deleteMedicamento({ medicamentoId, token, setError });
        if (response) {
            const { message } = response;
            showSonnerToast({
                title: message,
                description: "Se elimino correctamente el medicamento seleccionado",
                type: "success"
            });
            closeModal();
        }
        setLoading(false)
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ConfirmDelete loading={loading} error={error} handleClick={handleClick} buttonLabel="Eliminar Medicamento" description="¿Estas seguro de eliminar este medicamento?" />
        </form>
    );
}