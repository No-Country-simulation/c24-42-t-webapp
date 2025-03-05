import { AppRouter } from '@routes/AppRouter';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { ThemeProvider } from '@mui/material';
import { theme } from '@ui/muiOverrideTheme';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
)
