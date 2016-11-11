'use strict';
import {ADD_TODO} from './actions.jsx';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
    default:
      return state
  }
}

export default reducer;