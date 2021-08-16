import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global';

import { Routes } from 'routes';
import { ThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
