import {
  ADD_TODO,
  RESET_TODOS,
  REMOVE_SPECIFIC_TODO
  } from '../action-types/index'

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });

    case REMOVE_SPECIFIC_TODO:
      return {
      }

    case RESET_TODOS: 
      return {
        ...initialState
      }
      
    default:
      return state
    }
}


export default rootReducer
