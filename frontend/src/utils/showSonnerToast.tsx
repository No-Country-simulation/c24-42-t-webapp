import { ToastProps } from '@tipos/component';
import { toast } from 'sonner';
import { SonnerToast } from "@ui/SonnerToast/SonnerToast";

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