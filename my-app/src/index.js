import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log('HELLO FROM index.JS - IMPORT COMPLETE')

ReactDOM.render(
  <React.StrictMode>
    {console.log('index.JS - I am in "ReactDOM.render" now')}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('index.JS - I am over with "ReactDOM.render" now, I am before serviceWorker.unregister();')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
