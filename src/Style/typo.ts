import { css } from '@emotion/react';
import font from '@/assets/fonts/RixInooAriDuri Regular.ttf';

const typo = {
  Logo: css`
    @font-face {
      font-family: 'RixInooAriDuri Regular';
      src: url(${font}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'RixInooAriDuri Regular', sans-serif;
  `
};

export default typo;
