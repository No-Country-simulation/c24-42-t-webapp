import { ThemeProvider } from '@mui/material';
import { theme } from '@ui/muiOverrideTheme';
import ErrorBoundary from '@components/layout/ErrorBoundary';
import { ReactNode } from 'react';

export const ProviderWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ErrorBoundary fallback={<>Ocurrio un error desconocido, fijate en consola que dice</>}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ErrorBoundary>
    );
}