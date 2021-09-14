import React from 'react'


const TodoListItem = (props) => {
  console.log(props)
  return(
    <div>
      <li> {props.todo.title} </li>
    </div>
  )




}
export default TodoListItem
