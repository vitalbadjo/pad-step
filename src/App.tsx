import React from 'react';
import './app.scss';
import { PageContainer } from './parts/page-container/page-container';
import { AppRoutes } from './router/app-routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <AppRoutes />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
