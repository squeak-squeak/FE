import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import GlobalStyle from '@/Style/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>
);
