import {
  ADD_TODO,
  RESET_TODOS,
  REMOVE_SPECIFIC_TODO
} from '../action-types/index'

export function addArticle(payload) {
  return { type: ADD_TODO, payload}
}

export function removeTodos(payload) {
  return { type: RESET_TODOS, payload}
}

export function removeSpecificTodo(payload) {
  return { type: REMOVE_SPECIFIC_TODO, payload}
}


