import { css } from '@emotion/react';
import resetCss from 'emotion-reset';

/*
  emotion reset css 소스
  https://meyerweb.com/eric/tools/css/reset/
*/

const GlobalStyle = css`
  ${resetCss}
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
