import { AppRouter } from '@routes/AppRouter';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { ProviderWrapper } from '@components/layout/ProviderWrapper';

createRoot(document.getElementById('root')!).render(
  <ProviderWrapper>
    <AppRouter />
  </ProviderWrapper>
)
