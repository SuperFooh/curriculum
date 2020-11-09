import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import serviceWorker from './serviceWorker.dev'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker();