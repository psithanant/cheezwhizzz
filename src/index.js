import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import buttonGroupInstance from './components/filterButtonGroup'


ReactDOM.render(
  <App />,
  // <buttonGroupInstance />,
  document.getElementById('root')
);

if (module.hot) {
module.hot.accept()
}
