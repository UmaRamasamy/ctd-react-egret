import React from 'react'

const TodoListItem = ({ todo, onRemoveTodo }) => {
  console.log({ todo })
  return (
    <div>
      <li> {todo.title} <button type="button" onClick={() => onRemoveTodo(todo.id)}><span>&nbsp;</span>Remove </button>
      </li>
    </div>
  )

}
export default TodoListItem
