import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import guitarsReducer from './reducers/GuitarsReducer'


  function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
      console.log(e)
  }
};

  function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err)
    return undefined;
  }
}; 

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState()
const middleware = [thunk]
const store = createStore(guitarsReducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)))

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

  ,document.getElementById('root'));

