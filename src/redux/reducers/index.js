import {
  ADD_TODO,
  RESET_TODOS,
  REMOVE_SPECIFIC_TODO,
  COMPLETE_SPECIFIC_TODO
  } from '../action-types/index'

const initialState = {
  Todos: [],
  Completed: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        Todos: state.Todos.concat(action.payload)
      });

    case REMOVE_SPECIFIC_TODO:
      let array = [...state.Completed]
        array.splice(action.payload, 1)

      return Object.assign({}, state, {
        ...state,
        Completed: array
      })

      case COMPLETE_SPECIFIC_TODO:
        //create 2 new arrays in order to not directly mutate state
        let removeArray = [...state.Todos]
        let completeArray = [...state.Completed]

          //push the todo from the todos array to the completed array using the ID which maps to the index
        completeArray.push(state.Todos[action.payload])
          //then remove that ID from the todos array
        removeArray.splice(action.payload, 1)

        return Object.assign({}, state, {
          ...state,
          Completed: completeArray,
          Todos: removeArray

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
