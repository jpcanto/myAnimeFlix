import { createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';
import background from 'assets/img/background.jpg';

type Theme = {
  theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle<Theme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${theme.palette.background.default};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
