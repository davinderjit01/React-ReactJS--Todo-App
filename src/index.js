import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//ReactDOM takes two arguments(HTML code and HTML element)
//This func is used to display html code in THML element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

