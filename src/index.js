import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './components/ToDo';
import  './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);

