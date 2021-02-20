import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalSyles from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalSyles />
  </BrowserRouter>
);

export default App;
