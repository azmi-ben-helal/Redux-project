import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, SET_FILTER } from './actionsTypes'

let nextTodoId = 0

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
})

export const updateTodo = (content) => ({
  type: UPDATE_TODO,
  payload: {
    content,
  },
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
})
