import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/Style/theme';
import App from './App';
import resetCss from 'emotion-reset';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={resetCss} />
    <App />
  </ThemeProvider>
);
