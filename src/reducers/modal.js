import { fromJS } from 'immutable';

import { OPEN_MODAL, CLOSE_MODAL } from '../action-types/index'

const initialState = fromJS({
  visibility: false,
  mediaId: null
});

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        mediaId: action.payload.mediaId
      })
    case CLOSE_MODAL:
      return state.merge({
        visibility: false,
        mediaId: ''
      })
    default:
      return state;
  }
}