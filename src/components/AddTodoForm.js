
import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('')
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }
  const handleAddTodo = (event) => {
    event.preventDefault()
    //let todoTitle = event.target.value
    //console.log(todoTitle)

    onAddTodo({ fields: {Title:todoTitle} })
    setTodoTitle('')
    //event.target.reset()    
  }

  return (
    <>
      <form onSubmit={handleAddTodo} >
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title:
        </InputWithLabel>
        &nbsp;
        <button type="Submit">  Add</button>
      </form>
    </>
  )
}
export default AddTodoForm