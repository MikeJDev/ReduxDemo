import {
  ADD_TODO,
  RESET_TODOS
} from '../action-types/index'

export function addArticle(payload) {
  return { type: ADD_TODO, payload}
}

export function removeNames(payload) {
  return { type: RESET_TODOS, payload}
}

