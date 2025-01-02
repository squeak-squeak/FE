import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import GlobalStyle from '@/Style/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/Style/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <div css={(theme) => ({ color: theme.colors.cream })}>asdf</div>
    <Global styles={GlobalStyle} />
    <App />
  </ThemeProvider>
);
