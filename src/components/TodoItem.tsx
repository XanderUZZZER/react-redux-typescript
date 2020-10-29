import React from 'react'
import { Todo } from '../actions'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>
        completed - <span>{todo.completed ? 'true' : 'false'}</span>
      </p>
    </div>
  )
}

export default TodoItem
