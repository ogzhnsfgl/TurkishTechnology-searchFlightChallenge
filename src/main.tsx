import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './app/hoc/providers';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers />
);
