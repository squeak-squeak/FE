import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      yellow: string;
      orange: string;
      cream: string;
    };
    typo: {
      Logo: SerializedStyles;
    };
  }
}
