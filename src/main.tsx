import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/Style/theme';
import GlobalStyle from '@/Style/globalCss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <App />
  </ThemeProvider>
);
