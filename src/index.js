import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedApp } from './App';
import  rootReducer from './reducers/rootReducer';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// import buttonGroupInstance from './components/filterButtonGroup'

// const composeStoreWithMiddleware = applyMiddleware( promiseMiddleware())(createStore);
// const store = composeStoreWithMiddleware(rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(promiseMiddleware())
  ));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
module.hot.accept()
}
