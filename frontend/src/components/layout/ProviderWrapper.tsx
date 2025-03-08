import { ThemeProvider } from '@mui/material';
import { theme } from '@ui/muiOverrideTheme';
import ErrorBoundary from '@components/layout/ErrorBoundary';
import { ReactNode } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { es } from "date-fns/locale/es";
import { esES } from '@mui/x-date-pickers/locales';

const spanishLocale = esES.components.MuiLocalizationProvider.defaultProps.localeText;

export const ProviderWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ErrorBoundary fallback={<>Ocurrio un error desconocido, fijate en consola que dice</>}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es} localeText={spanishLocale}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </LocalizationProvider>
        </ErrorBoundary>
    );
}