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
        console.log('state.articles add:', state.articles)
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });

    case REMOVE_SPECIFIC_TODO:
      let array = [...state.articles]
        array.splice(action.payload, 1)
      console.log('state.articles:', state.articles)
      console.log('action.payload:', action.payload)

      return Object.assign({}, state, {
        ...state,
        articles: array
      })

    case RESET_TODOS: 
      return {
        ...initialState
      }
      
    default:
      return state
    }
}


export default rootReducer
