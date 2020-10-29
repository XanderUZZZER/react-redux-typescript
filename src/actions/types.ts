import {
  FetchTodosAction,
  DeleteTodoAction,
  ClearTodosAction
} from './todos'

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  clearTodos
}

export type Action = FetchTodosAction | DeleteTodoAction | ClearTodosAction
