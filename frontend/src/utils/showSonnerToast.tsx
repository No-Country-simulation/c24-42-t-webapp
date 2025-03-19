import { ToastProps } from '@tipos/component';
import { toast } from 'sonner';
import { SonnerToast } from "@ui/SonnerToast/SonnerToast";

// funcion que sirve para llamar al componente Toaster
// se debe agregar el mismo dentro de el ambito en donde deba aparecer
export function showSonnerToast({ title, description, type }: Omit<ToastProps, 'id'>) {
    return toast.custom((id) => (
        <SonnerToast
            id={id}
            title={title}
            description={description}
            type={type}
        />
    ));
}