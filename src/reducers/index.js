import { combineReducers } from 'redux-immutable';

import data from './data';
import modal from './modal';
import isLoading from './isLoading';

const rootReducer = combineReducers({
  data,
  modal,
  isLoading
});

export default rootReducer;