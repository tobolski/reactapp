/**
 * ./reducers/index.js
 */

import {
  POPULATE_MESSAGES_SUCCESS
} from '../actions';

const defaultState = {
  messages: []
}

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case POPULATE_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        messages: action.messages
      });

    default:
      return state;
  }
}
