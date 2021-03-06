import { fromJS } from 'immutable';

import schema from '../schemas/index';
import { SEARCH_ENTITIES } from '../action-types/index'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
});

export default function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES:
      return state.set('search', action.payload.query);
    default:
      return state;
  }
}

