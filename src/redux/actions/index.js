import {
  ADD_TODO,
  RESET_TODOS,
  REMOVE_SPECIFIC_TODO,
  COMPLETE_SPECIFIC_TODO
} from '../action-types/index'

export function addTodo(payload) {
  return { type: ADD_TODO, payload}
}

export function removeAllTodos(payload) {
  return { type: RESET_TODOS, payload}
}

export function removeSpecificTodo(payload) {
  return { type: REMOVE_SPECIFIC_TODO, payload}
}

export function completeSpecificTodo(payload) {
  return { type: COMPLETE_SPECIFIC_TODO, payload}
}


