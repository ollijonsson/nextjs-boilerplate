import { createGlobalStyle } from 'styled-components';

export interface Theme {
    offWhite: string;
}

export interface ThemeWrapper {
    theme: Theme;
}

// Theme used in ThemeProvider @ _app.tsx
export const theme: Theme = {
    offWhite: 'FBFBF8',
}

// Defining global styles which are injected in _app.tsx
export const GlobalStyle = createGlobalStyle<ThemeWrapper>`
    body {
      margin: 0 auto;
      background-color: ${props => props.theme.offWhite}; 
    }
`