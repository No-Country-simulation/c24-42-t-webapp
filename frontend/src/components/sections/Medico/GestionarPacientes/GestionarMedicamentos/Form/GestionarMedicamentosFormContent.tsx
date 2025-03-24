import { useModalStore } from "@store/modal.store";
import { ModalOperation } from "@tipos/store";
import { ReactNode } from "react";
import { MedicamentosForm } from "./MedicamentosForm";
import { DeleteMedicamentoMenu } from "./DeleteMedicamentoMenu";
import { MedicationDetails } from "./MedicationDetails";
import { EditMedicamentosForm } from "./EditMedicamentosForm";

type GestionarMedicamentosModalContent = Extract<ModalOperation, "add_medication" | "delete_medication" | "medication_details" | "edit_medication">

export const GestionarMedicamentosFormContent = () => {
    const operation = useModalStore(state => state.modalData.operation);
    
    const CONTENT_MAP: Record<GestionarMedicamentosModalContent, ReactNode> = {
        "add_medication": <MedicamentosForm />,
        "delete_medication": <DeleteMedicamentoMenu />,
        "medication_details": <MedicationDetails />,
        "edit_medication": <EditMedicamentosForm />
    };

    return (
        <>
            {
                CONTENT_MAP[operation as unknown as GestionarMedicamentosModalContent]
            }
        </>
    );
}