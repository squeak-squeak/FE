import { css } from '@emotion/react';
import font from '@/assets/fonts/RixInooAriDuri Regular.ttf';

const GlobalStyle = css`
  @font-face {
    font-family: 'RixInooAriDuri Regular';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'RixInooAriDuri Regular', sans-serif;
    background-color: #000;
    color: #fff;
  }
`;

export default GlobalStyle;
