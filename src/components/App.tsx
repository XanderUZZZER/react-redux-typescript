import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo, clearTodos } from '../actions'
import { StoreState } from '../reducers'
import TodoItem from './TodoItem'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function //trick to cheat typescript because of thunk middleware
  deleteTodo: typeof deleteTodo
  clearTodos: typeof clearTodos
}

interface AppState {
  fetching: boolean
}

const _App: React.FC<AppProps> = ({
  todos,
  fetchTodos,
  deleteTodo,
  clearTodos,
}) => {
  const [fetchitng, setFetchitng] = useState<AppState>({ fetching: false })

  useEffect(() => {
    if (todos && todos.length) {
      setFetchitng({ fetching: false })
    }
  }, [todos])

  return (
    <div>
      <button
        onClick={() => {
          clearTodos()
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          fetchTodos()
          setFetchitng({ fetching: true })
        }}
      >
        Fetch
      </button>
      {fetchitng.fetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          {todos.map((todo) => {
            return (
              <div onClick={() => deleteTodo(todo.id)} key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  clearTodos,
})(_App)
