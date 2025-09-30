import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';
import { PlaysProvider } from './context/PlaysContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlaysProvider>
      <App />
    </PlaysProvider>
  </React.StrictMode>
);
