import React from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';
import { Map as map  } from 'immutable';

import reducer from '../reducers/index';
import Home from '../pages/containers/home'
// import apiMock from '../api-mock.json';

// const initialState = {
//   data: {
//     entities: data.entities,
//     categories: data.result.categories
//   },
//   search: [],
//   modal: {
//     visibility: false,
//     mediaId: null
//   }
// };

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');
render(
  <Provider store={store}>
    <Home></Home>
  </Provider>,
  homeContainer
);