import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//ReactDOM takes two arguments(HTML code and HTML element)
//This func is used to display html code in THML element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //Render the whole React App into the element with id=root.
  document.getElementById('root')
);

