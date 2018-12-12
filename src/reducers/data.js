import { fromJS } from 'immutable';
import schema from '../schemas/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
});

export default function data(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO':
      // {
      //   let results = [];
      //   if (action.payload.query) {
      //     results = filterCategories(state.data.categories, action.payload.query);
      //   }
      //   return {
      //     ...state,
      //     search: results
      //   }
      // }
      return state.set('search', action.payload.query);
    default:
      return state;
  }
}

