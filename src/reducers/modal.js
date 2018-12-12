import { fromJS } from 'immutable';

const initialState = fromJS({
  visibility: false,
  mediaId: null
});

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':

      break;
    case 'CLOSE_MODAL':
      break;
    default:

      break;
  }
  return state;
}