import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Una vez importado lo requerido, creo la constante root que obtendra el root del html ubicado en public (esto es predeterminado)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);