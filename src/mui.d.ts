import '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p: CSSProperties;
    body3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    p?: CSSProperties;
    body3?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p: true;
    body3: true;
  }
}