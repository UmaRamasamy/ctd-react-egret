import React from 'react'

const TodoListItem = ({todo}) => {
  console.log({todo})
  return(
    <div>
      <li> {todo.title} </li>
    </div>
  )

}
export default TodoListItem
