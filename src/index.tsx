import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'

import connectors from './services/web3/connectors'

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;// hack because cra bundler does not polyfill Buffer

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Web3ReactProvider connectors={connectors}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ReactProvider>
);

// reportWebVitals();
