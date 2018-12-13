import React from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Map as map } from 'immutable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers/index';
import Home from '../pages/containers/home'

// const logger = ({ getState, dispatch }) => next => action => {
//   console.log('Logger prev', { action, state: getState().toJS() })
//   const result = next(action);
//   console.log('Logger next  ', { action, state: getState().toJS() })
//   return result;
// }


const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');
render(
  <Provider store={store}>
    <Home></Home>
  </Provider>,
  homeContainer
);